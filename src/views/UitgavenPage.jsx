'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format, parseISO } from 'date-fns';
import { nl } from 'date-fns/locale';
import { Loader2, Plus, Receipt, Search } from 'lucide-react';
import ExpenseFormDialog from '@/components/uitgaven/ExpenseFormDialog';
import RowActionsMenu from '@/components/shared/RowActionsMenu';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { formatEuro } from '@/lib/dashboardCockpit';
import {
  categoryLabel,
  deleteExpense,
  deleteExpenseSeries,
  fetchUserExpenses,
  sumExpensesForMonth,
  upsertExpense,
} from '@/lib/expensePersistence';

function formatDate(iso) {
  if (!iso) return '—';
  try {
    return format(parseISO(iso), 'd MMM yyyy', { locale: nl });
  } catch {
    return iso;
  }
}

export default function UitgavenPage() {
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();

  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingExpense, setEditingExpense] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);

  const loadExpenses = useCallback(async () => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const data = await fetchUserExpenses(supabase, user.id);
      setExpenses(data);
    } catch (error) {
      toast({
        title: 'Fout bij laden uitgaven',
        description: error.message || 'Er is iets misgegaan.',
        variant: 'destructive',
      });
      setExpenses([]);
    } finally {
      setIsLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) loadExpenses();
    else setIsLoading(false);
  }, [user, authLoading, loadExpenses]);

  const monthTotals = useMemo(() => sumExpensesForMonth(expenses), [expenses]);

  const filtered = useMemo(() => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return expenses;
    return expenses.filter((e) =>
      [e.description, e.supplier, categoryLabel(e.category), e.notes]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(q))
    );
  }, [expenses, searchTerm]);

  const openCreate = () => {
    setEditingExpense(null);
    setDialogOpen(true);
  };

  const openEdit = (expense) => {
    setEditingExpense(expense);
    setDialogOpen(true);
  };

  const handleSave = async (form) => {
    if (!user) return;
    setIsSaving(true);
    try {
      const { expenses: savedList, primary } = await upsertExpense(supabase, user.id, {
        ...form,
        id: editingExpense?.id,
        recurrenceGroupId: editingExpense?.recurrenceGroupId,
      });
      setExpenses((prev) => {
        const savedIds = new Set(savedList.map((e) => e.id));
        const without = prev.filter((e) => !savedIds.has(e.id));
        return [...savedList, ...without].sort((a, b) =>
          String(b.expenseDate).localeCompare(String(a.expenseDate))
        );
      });
      setDialogOpen(false);
      setEditingExpense(null);
      const count = savedList.length;
      toast({
        title: editingExpense?.id
          ? 'Uitgave bijgewerkt'
          : count > 1
            ? `${count} uitgaven opgeslagen`
            : 'Uitgave opgeslagen',
        description: primary.description,
      });
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

  const handleDelete = async (expense) => {
    if (!user) return;

    const name = expense.description;
    const ok = window.confirm(`Uitgave “${name}” verwijderen?`);
    if (!ok) return;

    let deleteSeries = false;
    if (expense.recurrenceGroupId) {
      deleteSeries = window.confirm(
        'Dit is een terugkerende uitgave. Hele reeks (alle herhalingen) ook verwijderen?'
      );
    }

    setDeletingId(expense.id);
    try {
      if (deleteSeries && expense.recurrenceGroupId) {
        await deleteExpenseSeries(supabase, user.id, expense.recurrenceGroupId);
        setExpenses((prev) =>
          prev.filter((e) => e.recurrenceGroupId !== expense.recurrenceGroupId)
        );
        toast({ title: 'Reeks verwijderd' });
      } else {
        await deleteExpense(supabase, user.id, expense.id);
        setExpenses((prev) => prev.filter((e) => e.id !== expense.id));
        toast({ title: 'Uitgave verwijderd' });
      }
    } catch (error) {
      toast({
        title: 'Verwijderen mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setDeletingId(null);
    }
  };

  if (authLoading || (isLoading && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Uitgaven laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb]">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-8 space-y-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Beheer
                </p>
                <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
                  Uitgaven
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {expenses.length} opgeslagen
                  {monthTotals.count > 0
                    ? ` · ${formatEuro(monthTotals.amountExcl)} excl. btw deze maand`
                    : ''}
                </p>
              </div>
              <Button
                onClick={openCreate}
                className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Nieuwe uitgave
              </Button>
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Zoek op omschrijving, leverancier of categorie…"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
              <Receipt className="mx-auto mb-4 h-12 w-12 text-slate-300" />
              <h2 className="font-heading text-xl font-semibold text-deep-blue">
                {searchTerm ? 'Geen uitgaven gevonden' : 'Nog geen uitgaven'}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                {searchTerm
                  ? 'Probeer een andere zoekterm.'
                  : 'Voeg kosten toe zoals software, huisvesting of je boekhouder. Op je dashboard zie je dan resultaat en btw te reserveren.'}
              </p>
              {!searchTerm && (
                <Button
                  onClick={openCreate}
                  className="mt-6 rounded-xl bg-deep-blue px-5 font-semibold hover:bg-deep-blue/90"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Eerste uitgave
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="border-b border-slate-200 bg-slate-50/80">
                    <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                      <th className="px-4 py-3">Datum</th>
                      <th className="px-4 py-3">Omschrijving</th>
                      <th className="hidden px-4 py-3 sm:table-cell">Categorie</th>
                      <th className="px-4 py-3 text-right">Excl.</th>
                      <th className="hidden px-4 py-3 text-right md:table-cell">BTW</th>
                      <th className="px-4 py-3 text-right">Incl.</th>
                      <th className="px-3 py-3 text-right">Acties</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {filtered.map((expense) => (
                      <tr key={expense.id} className="hover:bg-slate-50/80">
                        <td className="whitespace-nowrap px-4 py-3 text-slate-500">
                          {formatDate(expense.expenseDate)}
                        </td>
                        <td className="px-4 py-3">
                          <div className="flex flex-wrap items-center gap-1.5">
                            <p className="font-medium text-deep-blue">{expense.description}</p>
                            {expense.isRecurring && (
                              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                                Terugkerend
                                {expense.intervalDays ? ` · ${expense.intervalDays}d` : ''}
                              </span>
                            )}
                          </div>
                          {expense.supplier && (
                            <p className="text-xs text-slate-500">{expense.supplier}</p>
                          )}
                        </td>
                        <td className="hidden px-4 py-3 text-slate-500 sm:table-cell">
                          {categoryLabel(expense.category)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-900">
                          {formatEuro(expense.amountExcl)}
                        </td>
                        <td className="hidden whitespace-nowrap px-4 py-3 text-right text-slate-500 md:table-cell">
                          {formatEuro(expense.vatAmount)}
                        </td>
                        <td className="whitespace-nowrap px-4 py-3 text-right font-medium text-slate-900">
                          {formatEuro(expense.amountIncl)}
                        </td>
                        <td className="px-3 py-2 text-right">
                          <RowActionsMenu
                            items={[
                              {
                                id: 'edit',
                                label: 'Bewerken',
                                onSelect: () => openEdit(expense),
                              },
                              {
                                id: 'delete',
                                label: 'Verwijderen',
                                destructive: true,
                                disabled: deletingId === expense.id,
                                onSelect: () => handleDelete(expense),
                              },
                            ]}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Terug naar{' '}
            <Link href="/dashboard" className="font-medium text-deep-blue hover:underline">
              dashboard
            </Link>
          </p>
        </motion.div>
      </div>

      <ExpenseFormDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingExpense(null);
        }}
        onSave={handleSave}
        initialExpense={editingExpense}
        isSaving={isSaving}
      />
    </div>
  );
}
