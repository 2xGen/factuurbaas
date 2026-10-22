'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { nl } from 'date-fns/locale';
import { Info, Loader2, Plus, Wallet } from 'lucide-react';
import DashboardBookkeeperOffer from '@/components/dashboard/DashboardBookkeeperOffer';
import IncomeFormDialog from '@/components/inkomsten/IncomeFormDialog';
import RowActionsMenu from '@/components/shared/RowActionsMenu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { formatEuro } from '@/lib/dashboardCockpit';
import {
  deleteIncome,
  fetchUserIncomes,
  sumIncomesForMonth,
  upsertIncome,
} from '@/lib/incomePersistence';
import { consumeMoneyPrefill, peekMoneyPrefill } from '@/lib/moneyPrefill';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return format(parseISO(iso), 'd MMM yyyy', { locale: nl });
  } catch {
    return iso;
  }
}

export default function InkomstenPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const [incomes, setIncomes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editing, setEditing] = useState(null);
  const [prefillIncome, setPrefillIncome] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const load = useCallback(async () => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      setIncomes(await fetchUserIncomes(supabase, user.id));
    } catch (error) {
      toast({
        title: 'Fout bij laden inkomsten',
        description: error.message || 'Run ADD_INCOMES.sql in Supabase als de tabel nog ontbreekt.',
        variant: 'destructive',
      });
      setIncomes([]);
    } finally {
      setIsLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) load();
    else setIsLoading(false);
  }, [user, authLoading, load]);

  useEffect(() => {
    if (!user?.id) return;
    if (peekMoneyPrefill()?.kind !== 'income') return;
    const prefill = consumeMoneyPrefill();
    if (prefill?.kind !== 'income') return;
    setPrefillIncome(prefill);
    setEditing(null);
    setDialogOpen(true);
  }, [user?.id]);

  const monthTotals = useMemo(() => sumIncomesForMonth(incomes), [incomes]);
  const totalReceived = useMemo(
    () => Math.round(incomes.reduce((sum, item) => sum + (Number(item.amountIncl) || 0), 0) * 100) / 100,
    [incomes]
  );
  const totalVatToPay = useMemo(
    () => Math.round(incomes.reduce((sum, item) => sum + (Number(item.vatAmount) || 0), 0) * 100) / 100,
    [incomes]
  );
  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return incomes;
    return incomes.filter((item) =>
      [item.description, item.paymentMethod, item.notes]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [incomes, searchTerm]);

  const handleSave = async (form) => {
    if (!user) return;
    setIsSaving(true);
    try {
      const saved = await upsertIncome(supabase, user.id, form);
      setIncomes((prev) => {
        const without = prev.filter((item) => item.id !== saved.id);
        return [saved, ...without].sort((a, b) =>
          String(b.incomeDate).localeCompare(String(a.incomeDate))
        );
      });
      setDialogOpen(false);
      setEditing(null);
      setPrefillIncome(null);
      toast({ title: form.id ? 'Inkomst bijgewerkt' : 'Inkomst opgeslagen', description: saved.description });
    } catch (error) {
      toast({
        title: 'Opslaan mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (item) => {
    if (!user) return;
    if (!window.confirm(`Inkomst “${item.description}” verwijderen?`)) return;
    try {
      await deleteIncome(supabase, user.id, item.id);
      setIncomes((prev) => prev.filter((row) => row.id !== item.id));
      toast({ title: 'Inkomst verwijderd' });
    } catch (error) {
      toast({
        title: 'Verwijderen mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    }
  };

  if (authLoading || (isLoading && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f6f4f1]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Inkomsten laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  return (
    <div className="bg-[#f6f4f1]">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
                Verkopen
              </p>
              <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue">
                Inkomsten
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Verkopen zonder factuur. Facturen blijven bij Facturen.
                {monthTotals.count > 0
                  ? ` · ${formatEuro(monthTotals.amountExcl)} excl. btw deze maand`
                  : ''}
              </p>
            </div>
            <Button onClick={() => { setEditing(null); setPrefillIncome(null); setDialogOpen(true); }} className="rounded-xl">
              <Plus className="mr-2 h-4 w-4" /> Inkomst toevoegen
            </Button>
          </div>

          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Zoek op omschrijving"
            className="mb-4 h-11 w-full max-w-sm rounded-xl border border-slate-200 bg-white px-3.5 text-sm outline-none focus:border-deep-blue/40"
          />

          {incomes.length > 0 && (
            <div className="mb-4">
              <div className="mb-3 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border border-slate-200/80 bg-white p-4">
                  <p className="text-xs text-slate-500">Totale inkomsten</p>
                  <p className="mt-2 font-heading text-[1.65rem] font-bold tracking-tight text-deep-blue sm:text-3xl">
                    {formatEuro(totalReceived)}
                  </p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-white p-4">
                  <div className="flex items-center gap-1.5">
                    <p className="text-xs text-slate-500">Totale btw te betalen</p>
                    <details className="group relative">
                      <summary className="flex cursor-pointer list-none items-center text-slate-400 hover:text-deep-blue [&::-webkit-details-marker]:hidden">
                        <Info className="h-3.5 w-3.5" aria-hidden />
                        <span className="sr-only">Toelichting bij btw te betalen</span>
                      </summary>
                      <div className="absolute right-0 z-10 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-600 shadow-lg">
                        <p>
                          Dit is de btw op je ingevoerde inkomsten, zonder facturen. De btw te vorderen op je uitgaven is hierin niet meegenomen.
                        </p>
                        <p className="mt-2">
                          FactuurBaas doet geen btw-aangifte. Hulp nodig?{' '}
                          <Link href="/boekhouder-vinden" className="font-semibold text-warm-orange hover:underline">
                            Vind een boekhouder
                          </Link>
                          .
                        </p>
                      </div>
                    </details>
                  </div>
                  <p className="mt-2 font-heading text-[1.65rem] font-bold tracking-tight text-deep-blue sm:text-3xl">
                    {formatEuro(totalVatToPay)}
                  </p>
                </div>
              </div>
              <DashboardBookkeeperOffer
                userId={user.id}
                email={user.email}
                eligible
                forceVat
              />
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-slate-200/80 bg-white px-6 py-12 text-center">
              <Wallet className="mx-auto mb-3 h-10 w-10 text-slate-300" />
              <p className="font-heading text-lg font-semibold text-deep-blue">Nog geen inkomsten</p>
              <p className="mt-1 text-sm text-slate-500">
                Winkelverkoop, pin of contant: voeg het hier toe. Betaalde facturen zet je op
                  betaald bij Facturen — niet hier, anders tel je ze dubbel.
              </p>
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="border-b border-slate-200 bg-slate-50/80 text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                  <tr>
                    <th className="px-4 py-3">Datum</th>
                    <th className="px-4 py-3">Omschrijving</th>
                    <th className="px-4 py-3">Methode</th>
                    <th className="px-4 py-3">Excl. btw</th>
                    <th className="px-4 py-3">Btw</th>
                    <th className="px-4 py-3 text-right">Acties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filtered.map((item) => (
                    <tr key={item.id}>
                      <td className="px-4 py-3 text-slate-600">{formatDate(item.incomeDate)}</td>
                      <td className="px-4 py-3 font-medium text-deep-blue">{item.description}</td>
                      <td className="px-4 py-3 text-slate-500">{item.paymentMethod || '—'}</td>
                      <td className="px-4 py-3 tabular-nums">{formatEuro(item.amountExcl)}</td>
                      <td className="px-4 py-3 tabular-nums text-slate-500">{formatEuro(item.vatAmount)}</td>
                      <td className="px-4 py-3 text-right">
                        <RowActionsMenu
                          items={[
                            {
                              id: 'edit',
                              label: 'Bewerken',
                              onSelect: () => {
                                setEditing(item);
                                setDialogOpen(true);
                              },
                            },
                            {
                              id: 'delete',
                              label: 'Verwijderen',
                              onSelect: () => handleDelete(item),
                            },
                          ]}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      <IncomeFormDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditing(null);
          setPrefillIncome(null);
        }}
        onSave={handleSave}
        initialIncome={editing || prefillIncome}
        isSaving={isSaving}
      />
    </div>
  );
}
