'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Download, FilePlus2, Loader2, Search } from 'lucide-react';
import QuoteTable from '@/components/quotes/QuoteTable';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useUserQuotes } from '@/hooks/useUserQuotes';
import { saveQuoteToInvoicePrefill } from '@/lib/invoicePrefill';
import { QUOTE_STATUS_LABELS } from '@/lib/quotePersistence';

const STATUS_FILTERS = [
  { value: 'all', label: 'Alle' },
  { value: 'concept', label: 'Concept' },
  { value: 'sent', label: 'Verstuurd' },
  { value: 'accepted', label: 'Geaccepteerd' },
  { value: 'rejected', label: 'Afgewezen' },
  { value: 'converted', label: 'Omgezet' },
];

export default function OffertesPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    user,
    authLoading,
    searchTerm,
    setSearchTerm,
    isLoadingQuotes,
    userQuotes,
    filteredQuotes,
    onSaveQuote,
    onDeleteQuote,
    handleExport,
    toast,
  } = useUserQuotes();

  const [quoteToDelete, setQuoteToDelete] = useState(null);
  const [statusFilter, setStatusFilter] = useState('all');

  useEffect(() => {
    const fromUrl = searchParams.get('status');
    if (fromUrl && STATUS_FILTERS.some((f) => f.value === fromUrl)) {
      setStatusFilter(fromUrl);
    }
  }, [searchParams]);

  const openCount = useMemo(
    () => userQuotes.filter((q) => q.status !== 'converted' && q.status !== 'rejected').length,
    [userQuotes]
  );

  const visibleQuotes = useMemo(() => {
    if (statusFilter === 'all') return filteredQuotes;
    return filteredQuotes.filter((q) => (q.status || 'concept') === statusFilter);
  }, [filteredQuotes, statusFilter]);

  if (authLoading || (isLoadingQuotes && !userQuotes.length && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Offertes laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  const handleSetStatus = (quote, status) => {
    if (quote.status === 'converted') return;
    onSaveQuote(
      { ...quote, status },
      `Status gewijzigd naar: ${QUOTE_STATUS_LABELS[status] || status}`
    );
  };

  const handleConvert = (quote) => {
    saveQuoteToInvoicePrefill(quote);
    router.push('/create-invoice');
  };

  const handleConfirmDelete = () => {
    if (!quoteToDelete) return;
    onDeleteQuote(quoteToDelete.id);
    toast({
      title: 'Offerte verwijderd',
      description: `Offerte ${quoteToDelete.quoteNumber || quoteToDelete.id} is verwijderd.`,
    });
    setQuoteToDelete(null);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
    const params = new URLSearchParams(searchParams.toString());
    if (value === 'all') params.delete('status');
    else params.set('status', value);
    const qs = params.toString();
    router.replace(qs ? `/offertes?${qs}` : '/offertes', { scroll: false });
  };

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
                  Offertes
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                  {userQuotes.length} opgeslagen
                  {openCount > 0 ? ` · ${openCount} actief` : ''}
                  {' · '}
                  <span className="text-slate-400">
                    Zet een geaccepteerde offerte om naar een factuur
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-200 bg-white text-slate-600"
                  onClick={() => handleExport('json')}
                  disabled={!userQuotes.length}
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" /> JSON
                </Button>
                <Button
                  variant="outline"
                  className="rounded-xl border-slate-200 bg-white text-slate-600"
                  onClick={() => handleExport('csv')}
                  disabled={!userQuotes.length}
                >
                  <Download className="mr-1.5 h-3.5 w-3.5" /> CSV
                </Button>
                <Button
                  onClick={() => router.push('/tools/offerte-maker/maken')}
                  className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
                >
                  <FilePlus2 className="mr-2 h-4 w-4" />
                  Maak offerte
                </Button>
              </div>
            </div>

            <div className="relative">
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="search"
                placeholder="Zoek op klant of offertenummer…"
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-sm shadow-sm outline-none transition focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {STATUS_FILTERS.map((filter) => (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => handleStatusFilter(filter.value)}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                    statusFilter === filter.value
                      ? 'bg-deep-blue text-white'
                      : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {isLoadingQuotes && userQuotes.length === 0 ? (
            <div className="flex justify-center py-16">
              <Loader2 className="h-8 w-8 animate-spin text-deep-blue" />
            </div>
          ) : visibleQuotes.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
              <h2 className="font-heading text-xl font-medium text-gray-700">
                {searchTerm || statusFilter !== 'all'
                  ? 'Geen offertes gevonden'
                  : 'Nog geen offertes hier'}
              </h2>
              <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
                {searchTerm || statusFilter !== 'all'
                  ? 'Probeer een andere zoekterm of filter.'
                  : 'Maak je eerste offerte, sla hem op, en zet hem later om naar een factuur wanneer de klant akkoord geeft.'}
              </p>
              {!searchTerm && statusFilter === 'all' && (
                <Button
                  className="mt-6 rounded-xl bg-deep-blue hover:bg-deep-blue/90"
                  onClick={() => router.push('/tools/offerte-maker/maken')}
                >
                  <FilePlus2 className="mr-2 h-4 w-4" />
                  Maak offerte
                </Button>
              )}
            </div>
          ) : (
            <QuoteTable
              quotes={visibleQuotes}
              onEdit={(id) => router.push(`/tools/offerte-maker/maken?id=${id}`)}
              onDuplicate={(id) => router.push(`/tools/offerte-maker/maken?from=${id}`)}
              onSetStatus={handleSetStatus}
              onConvert={handleConvert}
              onOpenInvoice={(invoiceId) => router.push(`/create-invoice?id=${invoiceId}`)}
              onDelete={(quote) => setQuoteToDelete(quote)}
            />
          )}

          <p className="mt-6 text-center text-sm text-slate-500">
            Terug naar{' '}
            <Link href="/dashboard" className="font-medium text-deep-blue hover:underline">
              dashboard
            </Link>
          </p>
        </motion.div>
      </div>

      <Dialog open={!!quoteToDelete} onOpenChange={(open) => !open && setQuoteToDelete(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Offerte verwijderen?</DialogTitle>
            <DialogDescription>
              Offerte {quoteToDelete?.quoteNumber || ''} wordt permanent verwijderd. Dit kan niet
              ongedaan worden gemaakt.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button variant="outline" onClick={() => setQuoteToDelete(null)}>
              Annuleren
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Verwijderen
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
