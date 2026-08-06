'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { nl } from 'date-fns/locale';
import { motion } from 'framer-motion';
import {
  Clock,
  FilePlus2,
  Loader2,
  Pencil,
  Plus,
  RotateCcw,
  Trash2,
} from 'lucide-react';
import TimeEntryFormDialog from '@/components/uren/TimeEntryFormDialog';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { clientDisplayName, fetchUserClients } from '@/lib/clientPersistence';
import { saveHoursToInvoicePrefill } from '@/lib/invoicePrefill';
import {
  deleteTimeEntries,
  deleteTimeEntry,
  entriesToHoursWorked,
  fetchUserTimeEntries,
  insertTimeEntries,
  resolveHourlyRate,
  unmarkTimeEntriesInvoiced,
  upsertTimeEntry,
} from '@/lib/timeEntryPersistence';

function formatEntryDate(isoDate) {
  try {
    return format(parseISO(isoDate), 'd MMM yyyy', { locale: nl });
  } catch {
    return isoDate;
  }
}

export default function UrenPage() {
  const router = useRouter();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();

  const [entries, setEntries] = useState([]);
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [clientFilter, setClientFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('open'); // open | invoiced | all
  const [selectedIds, setSelectedIds] = useState(() => new Set());
  const [invoiceRate, setInvoiceRate] = useState('');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [isInvoicing, setIsInvoicing] = useState(false);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  const clientsById = useMemo(() => {
    const map = new Map();
    clients.forEach((c) => map.set(c.id, c));
    return map;
  }, [clients]);

  const loadData = useCallback(async () => {
    if (!user?.id) {
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    try {
      const [entryData, clientData] = await Promise.all([
        fetchUserTimeEntries(supabase, user.id, { includeInvoiced: true }),
        fetchUserClients(supabase, user.id),
      ]);
      setEntries(entryData);
      setClients(clientData);
    } catch (error) {
      toast({
        title: 'Fout bij laden uren',
        description: error.message || 'Er is iets misgegaan.',
        variant: 'destructive',
      });
      setEntries([]);
    } finally {
      setIsLoading(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (authLoading) return;
    if (user?.id) loadData();
    else setIsLoading(false);
  }, [user, authLoading, loadData]);

  const openCount = useMemo(
    () => entries.filter((e) => !e.invoicedAt).length,
    [entries]
  );
  const invoicedCount = useMemo(
    () => entries.filter((e) => e.invoicedAt).length,
    [entries]
  );

  const visibleEntries = useMemo(() => {
    return entries.filter((e) => {
      if (statusFilter === 'open' && e.invoicedAt) return false;
      if (statusFilter === 'invoiced' && !e.invoicedAt) return false;
      if (clientFilter === 'all') return true;
      if (clientFilter === 'none') return !e.clientId;
      return e.clientId === clientFilter;
    });
  }, [entries, statusFilter, clientFilter]);

  const selectedOpenEntries = useMemo(
    () => entries.filter((e) => selectedIds.has(e.id) && !e.invoicedAt),
    [entries, selectedIds]
  );

  const selectedInvoicedEntries = useMemo(
    () => entries.filter((e) => selectedIds.has(e.id) && e.invoicedAt),
    [entries, selectedIds]
  );

  const selectedHoursTotal = useMemo(
    () => selectedOpenEntries.reduce((sum, e) => sum + (Number(e.hours) || 0), 0),
    [selectedOpenEntries]
  );

  const openCreate = () => {
    setEditingEntry(null);
    setDialogOpen(true);
  };

  const openEdit = (entry) => {
    setEditingEntry(entry);
    setDialogOpen(true);
  };

  const toggleSelect = (id) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const toggleSelectAllVisible = () => {
    const ids = visibleEntries.map((e) => e.id);
    const allSelected = ids.length > 0 && ids.every((id) => selectedIds.has(id));
    if (allSelected) {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => next.delete(id));
        return next;
      });
    } else {
      setSelectedIds((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => next.add(id));
        return next;
      });
    }
  };

  const sortEntries = (list) =>
    [...list].sort((a, b) => {
      if (a.entryDate === b.entryDate) {
        return String(b.created_at || '').localeCompare(String(a.created_at || ''));
      }
      return b.entryDate.localeCompare(a.entryDate);
    });

  const handleSave = async (payload) => {
    if (!user) return;
    setIsSaving(true);
    try {
      const isBatch = Array.isArray(payload);
      if (isBatch) {
        const savedList = await insertTimeEntries(supabase, user.id, payload);
        setEntries((prev) => sortEntries([...savedList, ...prev]));
        setDialogOpen(false);
        setEditingEntry(null);
        const totalHours = savedList.reduce((sum, e) => sum + (Number(e.hours) || 0), 0);
        toast({
          title: `${savedList.length} dagen opgeslagen`,
          description: `${totalHours.toLocaleString('nl-NL', { maximumFractionDigits: 2 })} uur totaal`,
        });
      } else {
        const saved = await upsertTimeEntry(supabase, user.id, payload);
        setEntries((prev) => {
          const without = prev.filter((e) => e.id !== saved.id);
          return sortEntries([saved, ...without]);
        });
        setDialogOpen(false);
        setEditingEntry(null);
        toast({
          title: editingEntry?.id ? 'Uren bijgewerkt' : 'Uren opgeslagen',
          description: `${saved.hours} uur op ${formatEntryDate(saved.entryDate)}`,
        });
      }
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

  const handleDelete = async (entry) => {
    if (!user) return;
    const ok = window.confirm('Deze urenregel verwijderen?');
    if (!ok) return;

    setDeletingId(entry.id);
    try {
      await deleteTimeEntry(supabase, user.id, entry.id);
      setEntries((prev) => prev.filter((e) => e.id !== entry.id));
      setSelectedIds((prev) => {
        const next = new Set(prev);
        next.delete(entry.id);
        return next;
      });
      toast({ title: 'Uren verwijderd' });
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

  const handleUnmark = async (entry) => {
    if (!user) return;
    try {
      await unmarkTimeEntriesInvoiced(supabase, user.id, [entry.id]);
      setEntries((prev) =>
        prev.map((e) => (e.id === entry.id ? { ...e, invoicedAt: null } : e))
      );
      toast({ title: 'Weer open', description: 'Deze uren kun je opnieuw factureren.' });
    } catch (error) {
      toast({
        title: 'Mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    }
  };

  const handleBulkUnmark = async () => {
    if (!user || !selectedInvoicedEntries.length) return;
    setIsInvoicing(true);
    try {
      const ids = selectedInvoicedEntries.map((e) => e.id);
      await unmarkTimeEntriesInvoiced(supabase, user.id, ids);
      const idSet = new Set(ids);
      setEntries((prev) =>
        prev.map((e) => (idSet.has(e.id) ? { ...e, invoicedAt: null } : e))
      );
      setSelectedIds((prev) => {
        const next = new Set(prev);
        ids.forEach((id) => next.delete(id));
        return next;
      });
      setStatusFilter('open');
      toast({
        title: 'Weer open',
        description: `${ids.length} dag${ids.length === 1 ? '' : 'en'} kun je opnieuw factureren.`,
      });
    } catch (error) {
      toast({
        title: 'Mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsInvoicing(false);
    }
  };

  const handleBulkDelete = async () => {
    if (!user || !selectedIds.size) return;
    const count = selectedIds.size;
    const ok = window.confirm(
      `${count} urenregel${count === 1 ? '' : 's'} definitief verwijderen? Dit kan niet ongedaan worden.`
    );
    if (!ok) return;

    setIsBulkDeleting(true);
    try {
      const ids = [...selectedIds];
      await deleteTimeEntries(supabase, user.id, ids);
      const idSet = new Set(ids);
      setEntries((prev) => prev.filter((e) => !idSet.has(e.id)));
      setSelectedIds(new Set());
      toast({
        title: 'Verwijderd',
        description: `${count} dag${count === 1 ? '' : 'en'} verwijderd.`,
      });
    } catch (error) {
      toast({
        title: 'Verwijderen mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsBulkDeleting(false);
    }
  };

  const handleCreateInvoice = async () => {
    if (!user || !selectedOpenEntries.length) return;

    const clientIds = [
      ...new Set(selectedOpenEntries.map((e) => e.clientId || null)),
    ];
    if (clientIds.length > 1) {
      toast({
        title: 'Kies uren van één klant',
        description: 'Selecteer alleen uren voor dezelfde klant (of allemaal zonder klant).',
        variant: 'destructive',
      });
      return;
    }

    const rate = resolveHourlyRate(selectedOpenEntries, invoiceRate);
    if (rate == null || !Number.isFinite(rate) || rate < 0) {
      toast({
        title: 'Uurtarief nodig',
        description: 'Vul een uurtarief in, of zet een tarief op de urenregels.',
        variant: 'destructive',
      });
      return;
    }

    setIsInvoicing(true);
    try {
      const hoursWorked = entriesToHoursWorked(selectedOpenEntries);
      saveHoursToInvoicePrefill({
        hoursWorked,
        hourlyRate: rate,
        entryIds: selectedOpenEntries.map((e) => e.id),
      });

      const clientId = clientIds[0];
      const href = clientId
        ? `/create-invoice?clientId=${clientId}`
        : '/create-invoice';
      router.push(href);
    } catch (error) {
      toast({
        title: 'Factuur maken mislukt',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
      setIsInvoicing(false);
    }
  };

  if (authLoading || (isLoading && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Uren laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  const openSelectedCount = selectedOpenEntries.length;
  const invoicedSelectedCount = selectedInvoicedEntries.length;
  const selectedCount = selectedIds.size;
  const allVisibleSelected =
    visibleEntries.length > 0 && visibleEntries.every((e) => selectedIds.has(e.id));

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
                  Uren
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  Log uren → vink aan → maak factuur. Status:{' '}
                  <span className="font-medium text-deep-blue">{openCount} nog open</span>
                  {invoicedCount > 0 && (
                    <>
                      {' '}
                      · <span className="text-slate-500">{invoicedCount} op factuur</span>
                    </>
                  )}
                </p>
              </div>
              <Button
                onClick={openCreate}
                className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Uren toevoegen
              </Button>
            </div>

            {entries.length > 0 && (
              <div className="rounded-xl border border-slate-200/80 bg-white px-4 py-3 text-sm text-slate-600 shadow-sm">
                <ol className="list-decimal space-y-0.5 pl-4">
                  <li>
                    <span className="font-medium text-deep-blue">Vink de dagen aan</span> die je wilt
                    factureren (zelfde klant).
                  </li>
                  <li>
                    Vul zo nodig je <span className="font-medium text-deep-blue">uurtarief</span> in en
                    klik <span className="font-medium text-deep-blue">Maak factuur</span>.
                  </li>
                  <li>
                    Pas de factuur aan en <span className="font-medium text-deep-blue">sla op</span> —
                    dan krijgen die uren de status &quot;Op factuur&quot;.
                  </li>
                </ol>
              </div>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10 sm:max-w-xs"
                value={clientFilter}
                onChange={(e) => setClientFilter(e.target.value)}
              >
                <option value="all">Alle klanten</option>
                <option value="none">Zonder klant</option>
                {clients.map((c) => (
                  <option key={c.id} value={c.id}>
                    {clientDisplayName(c)}
                  </option>
                ))}
              </select>
              <select
                className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10 sm:max-w-[200px]"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                aria-label="Filter op status"
              >
                <option value="open">Nog open ({openCount})</option>
                <option value="invoiced">Op factuur ({invoicedCount})</option>
                <option value="all">Alles ({entries.length})</option>
              </select>
            </div>
          </div>

          {selectedCount > 0 && (
            <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-medium text-deep-blue">
                    {selectedCount} dag{selectedCount === 1 ? '' : 'en'} geselecteerd
                    {openSelectedCount > 0 && invoicedSelectedCount > 0
                      ? ` · ${openSelectedCount} open, ${invoicedSelectedCount} op factuur`
                      : ''}
                  </p>
                  <p className="mt-0.5 text-xs text-slate-500">
                    {openSelectedCount > 0
                      ? 'Maak een factuur van open uren, of verwijder de selectie.'
                      : 'Zet weer open om opnieuw te factureren, of verwijder.'}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {invoicedSelectedCount > 0 && (
                    <Button
                      onClick={handleBulkUnmark}
                      disabled={isInvoicing || isBulkDeleting}
                      variant="outline"
                      className="rounded-xl"
                    >
                      {isInvoicing ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <RotateCcw className="mr-2 h-4 w-4" />
                      )}
                      Zet weer open
                    </Button>
                  )}
                  <Button
                    onClick={handleBulkDelete}
                    disabled={isInvoicing || isBulkDeleting}
                    variant="outline"
                    className="rounded-xl border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
                  >
                    {isBulkDeleting ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : (
                      <Trash2 className="mr-2 h-4 w-4" />
                    )}
                    Verwijderen
                  </Button>
                </div>
              </div>

              {openSelectedCount > 0 && (
                <div className="flex flex-col gap-3 border-t border-slate-100 pt-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-deep-blue">
                      Factuur van {openSelectedCount} open dag
                      {openSelectedCount === 1 ? '' : 'en'} ·{' '}
                      {selectedHoursTotal.toLocaleString('nl-NL', {
                        maximumFractionDigits: 2,
                      })}{' '}
                      uur
                    </p>
                    <p className="mt-0.5 text-xs text-slate-500">
                      Worden pas &quot;Op factuur&quot; nadat je de factuur opslaat.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-end">
                    <div className="sm:w-36">
                      <label className="mb-1 block text-xs font-medium text-slate-500">
                        Uurtarief (€)
                      </label>
                      <input
                        type="number"
                        step="0.01"
                        min="0"
                        className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                        placeholder="bijv. 75"
                        value={invoiceRate}
                        onChange={(e) => setInvoiceRate(e.target.value)}
                      />
                    </div>
                    <Button
                      onClick={handleCreateInvoice}
                      disabled={isInvoicing || isBulkDeleting}
                      className="rounded-xl bg-warm-orange px-5 font-semibold text-white hover:bg-warm-orange/90"
                    >
                      {isInvoicing ? (
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      ) : (
                        <FilePlus2 className="mr-2 h-4 w-4" />
                      )}
                      Maak factuur
                    </Button>
                  </div>
                </div>
              )}
            </div>
          )}

          {!entries.length ? (
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-14 text-center shadow-sm">
              <Clock className="mx-auto mb-4 h-12 w-12 text-slate-300" strokeWidth={1.5} />
              <h2 className="font-heading text-xl font-semibold text-deep-blue">
                Nog geen uren gelogd
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                Vul uren in, vink de dagen aan die je wilt factureren, en klik Maak factuur.
              </p>
              <Button
                onClick={openCreate}
                className="mt-6 rounded-xl bg-deep-blue px-5 font-semibold hover:bg-deep-blue/90"
              >
                <Plus className="mr-2 h-4 w-4" />
                Eerste uren toevoegen
              </Button>
            </div>
          ) : visibleEntries.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              {statusFilter === 'open' && invoicedCount > 0 ? (
                <>
                  <h2 className="font-heading text-lg font-semibold text-deep-blue">
                    Geen open uren
                  </h2>
                  <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                    Je hebt {invoicedCount} dag{invoicedCount === 1 ? '' : 'en'} met status &quot;Op
                    factuur&quot;. Die staan standaard verborgen.
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-5 rounded-xl"
                    onClick={() => setStatusFilter('invoiced')}
                  >
                    Toon uren op factuur
                  </Button>
                </>
              ) : (
                <p className="text-slate-500">Geen uren voor dit filter.</p>
              )}
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[780px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 text-[11px] uppercase tracking-wide text-slate-400">
                      <th className="px-4 py-3 font-medium">
                        <input
                          type="checkbox"
                          className="rounded border-slate-300"
                          checked={allVisibleSelected}
                          onChange={toggleSelectAllVisible}
                          disabled={!visibleEntries.length}
                          aria-label="Selecteer alle zichtbare uren"
                        />
                      </th>
                      <th className="px-4 py-3 font-medium">Datum</th>
                      <th className="px-4 py-3 font-medium">Status</th>
                      <th className="px-4 py-3 font-medium">Klant</th>
                      <th className="px-4 py-3 font-medium">Omschrijving</th>
                      <th className="px-4 py-3 font-medium text-right">Uren</th>
                      <th className="px-4 py-3 font-medium text-right">Tarief</th>
                      <th className="px-4 py-3 font-medium text-right">Acties</th>
                    </tr>
                  </thead>
                  <tbody>
                    {visibleEntries.map((entry) => {
                      const client = entry.clientId
                        ? clientsById.get(entry.clientId)
                        : null;
                      const invoiced = Boolean(entry.invoicedAt);
                      return (
                        <tr
                          key={entry.id}
                          className={`border-b border-slate-50 last:border-0 ${
                            invoiced ? 'bg-slate-50/60' : 'hover:bg-slate-50/80'
                          }`}
                        >
                          <td className="px-4 py-3.5">
                            <input
                              type="checkbox"
                              className="rounded border-slate-300"
                              checked={selectedIds.has(entry.id)}
                              onChange={() => toggleSelect(entry.id)}
                              aria-label="Selecteer urenregel"
                            />
                          </td>
                          <td className="px-4 py-3.5 whitespace-nowrap font-medium text-deep-blue">
                            {formatEntryDate(entry.entryDate)}
                          </td>
                          <td className="px-4 py-3.5">
                            {invoiced ? (
                              <span className="inline-flex rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-500">
                                Op factuur
                              </span>
                            ) : (
                              <span className="inline-flex rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-medium text-emerald-700">
                                Nog open
                              </span>
                            )}
                          </td>
                          <td className="px-4 py-3.5 text-slate-600">
                            {client ? clientDisplayName(client) : '—'}
                          </td>
                          <td className="max-w-[200px] truncate px-4 py-3.5 text-slate-600">
                            {entry.description || '—'}
                          </td>
                          <td className="px-4 py-3.5 text-right font-medium text-deep-blue">
                            {Number(entry.hours).toLocaleString('nl-NL', {
                              maximumFractionDigits: 2,
                            })}
                          </td>
                          <td className="px-4 py-3.5 text-right text-slate-600">
                            {entry.hourlyRate != null
                              ? `€ ${Number(entry.hourlyRate).toLocaleString('nl-NL', {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                })}`
                              : '—'}
                          </td>
                          <td className="px-4 py-3.5">
                            <div className="flex items-center justify-end gap-1">
                              {invoiced ? (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 text-slate-500"
                                  onClick={() => handleUnmark(entry)}
                                  title="Zet weer op nog open"
                                >
                                  <RotateCcw className="h-4 w-4" />
                                </Button>
                              ) : (
                                <Button
                                  size="sm"
                                  variant="ghost"
                                  className="h-8 text-slate-600"
                                  onClick={() => openEdit(entry)}
                                  title="Bewerken"
                                >
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              )}
                              <Button
                                size="sm"
                                variant="ghost"
                                className="h-8 text-red-500 hover:bg-red-50 hover:text-red-600"
                                onClick={() => handleDelete(entry)}
                                disabled={deletingId === entry.id}
                                title="Verwijderen"
                              >
                                {deletingId === entry.id ? (
                                  <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                  <Trash2 className="h-4 w-4" />
                                )}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Tip: maak eerst{' '}
            <Link href="/klanten" className="font-medium text-deep-blue hover:underline">
              klanten
            </Link>{' '}
            aan voor sneller factureren ·{' '}
            <Link href="/dashboard" className="font-medium text-deep-blue hover:underline">
              Dashboard
            </Link>
          </p>
        </motion.div>
      </div>

      <TimeEntryFormDialog
        open={dialogOpen}
        onClose={() => {
          setDialogOpen(false);
          setEditingEntry(null);
        }}
        onSave={handleSave}
        initialEntry={editingEntry}
        clients={clients}
        isSaving={isSaving}
      />
    </div>
  );
}
