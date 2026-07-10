'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Calendar, Copy, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  PAYMENT_TERM_PRESETS,
  calculateDueDateFromTerm,
  formatDutchDate,
  parsePaymentDays,
} from '@/lib/betaaltermijnCalculator';
import { saveBetaaltermijnPrefill } from '@/lib/invoicePrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

function toDateInputValue(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function BetaaltermijnCalculator() {
  const router = useRouter();
  const { toast } = useToast();
  const [invoiceDateInput, setInvoiceDateInput] = useState(toDateInputValue(new Date()));
  const [daysInput, setDaysInput] = useState('14');

  const dueDate = useMemo(
    () => calculateDueDateFromTerm(invoiceDateInput, daysInput),
    [invoiceDateInput, daysInput]
  );

  const calculationFingerprint = dueDate ? `${invoiceDateInput}-${daysInput}` : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.betaaltermijn, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!dueDate) return '';
    const days = parsePaymentDays(daysInput);
    return [
      `Factuurdatum: ${formatDutchDate(new Date(invoiceDateInput))}`,
      `Betalingstermijn: ${days} dagen`,
      `Vervaldatum: ${formatDutchDate(dueDate)}`,
    ].join('\n');
  }, [dueDate, invoiceDateInput, daysInput]);

  const handleCopy = useCallback(async () => {
    if (!resultText) return;
    try {
      await navigator.clipboard.writeText(resultText);
      toast({ title: 'Gekopieerd', description: 'De datums staan op je klembord.' });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Probeer het opnieuw of kopieer handmatig.',
        variant: 'destructive',
      });
    }
  }, [resultText, toast]);

  const handleMakeInvoice = useCallback(() => {
    if (!dueDate) return;
    const days = parsePaymentDays(daysInput);
    saveBetaaltermijnPrefill({
      invoiceDate: invoiceDateInput,
      paymentTermDays: days,
      dueDate: dueDate.toISOString(),
    });
    router.push('/create-invoice');
  }, [dueDate, invoiceDateInput, daysInput, router]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Betaaltermijn calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Bereken wanneer je factuur betaald moet zijn op basis van factuurdatum en betalingstermijn.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Calendar className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-deep-blue">Factuurgegevens</h2>
              <p className="text-sm text-slate-500">Wanneer stuur je de factuur en welke termijn hanteer je?</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <label htmlFor="invoice-date" className="mb-2 block text-sm font-medium text-slate-700">
                Factuurdatum
              </label>
              <Input
                id="invoice-date"
                type="date"
                value={invoiceDateInput}
                onChange={(e) => setInvoiceDateInput(e.target.value)}
                className="h-12 text-lg"
              />
            </div>

            <div>
              <label htmlFor="payment-days" className="mb-2 block text-sm font-medium text-slate-700">
                Betalingstermijn
              </label>
              <div className="mb-3 flex flex-wrap gap-2">
                {PAYMENT_TERM_PRESETS.map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setDaysInput(String(preset.value))}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                      daysInput === String(preset.value)
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    )}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <div className="relative max-w-[160px]">
                <Input
                  id="payment-days"
                  type="text"
                  inputMode="numeric"
                  value={daysInput}
                  onChange={(e) => setDaysInput(e.target.value)}
                  className="h-12 pr-12 text-lg"
                />
                <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                  dagen
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {dueDate ? (
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Factuurdatum</span>
                  <span className="text-right text-sm font-semibold text-slate-900">
                    {formatDutchDate(new Date(invoiceDateInput))}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Betalingstermijn</span>
                  <span className="font-semibold text-slate-900">{parsePaymentDays(daysInput)} dagen</span>
                </div>
                <div className="rounded-xl bg-blue-50 px-4 py-5 text-center">
                  <p className="text-sm font-medium text-blue-800">Vervaldatum</p>
                  <p className="mt-1 font-heading text-2xl font-bold text-deep-blue">
                    {formatDutchDate(dueDate)}
                  </p>
                  <p className="text-sm text-blue-700">uiterste betaaldatum</p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button type="button" variant="outline" onClick={handleCopy} className="w-full">
                    <Copy className="mr-2 h-4 w-4" />
                    Kopieer resultaat
                  </Button>
                  <Button type="button" onClick={handleMakeInvoice} className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Maak factuur met deze datum
                  </Button>
                </div>
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Vul een factuurdatum en betalingstermijn in.
              </p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Vervaldatum = factuurdatum + aantal dagen betalingstermijn.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/betaaltermijn-calculator" className="text-warm-orange hover:underline">
          ← Meer uitleg over betaaltermijn berekenen
        </Link>
      </p>
    </div>
  );
}
