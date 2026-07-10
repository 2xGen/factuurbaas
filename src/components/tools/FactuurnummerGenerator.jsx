'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Copy, FileText, Hash } from 'lucide-react';
import {
  DEFAULT_PREFIX,
  formatInvoiceNumber,
  parseStartNumber,
} from '@/lib/factuurnummerGenerator';
import { saveFactuurnummerPrefill } from '@/lib/invoicePrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

export default function FactuurnummerGenerator() {
  const router = useRouter();
  const { toast } = useToast();
  const currentYear = new Date().getFullYear();

  const [yearInput, setYearInput] = useState(String(currentYear));
  const [prefixInput, setPrefixInput] = useState(DEFAULT_PREFIX);
  const [numberInput, setNumberInput] = useState('001');

  const invoiceNumber = useMemo(
    () =>
      formatInvoiceNumber({
        year: yearInput,
        prefix: prefixInput,
        startNumber: numberInput,
      }),
    [yearInput, prefixInput, numberInput]
  );

  const generationFingerprint = invoiceNumber
    ? `${yearInput}-${prefixInput}-${numberInput}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.factuurnummer, generationFingerprint);

  const handleCopy = useCallback(async () => {
    if (!invoiceNumber) return;
    try {
      await navigator.clipboard.writeText(invoiceNumber);
      toast({ title: 'Gekopieerd', description: 'Het factuurnummer staat op je klembord.' });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Probeer het opnieuw of kopieer handmatig.',
        variant: 'destructive',
      });
    }
  }, [invoiceNumber, toast]);

  const handleMakeInvoice = useCallback(() => {
    if (!invoiceNumber) return;
    saveFactuurnummerPrefill({ invoiceNumber });
    router.push('/create-invoice');
  }, [invoiceNumber, router]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Factuurnummer generator
        </h1>
        <p className="mt-2 text-slate-600">
          Genereer een professioneel, uniek factuurnummer voor je volgende factuur.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Hash className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-deep-blue">Instellingen</h2>
              <p className="text-sm text-slate-500">Kies jaar, voorvoegsel en startnummer.</p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="invoice-year" className="mb-2 block text-sm font-medium text-slate-700">
                Jaar
              </label>
              <Input
                id="invoice-year"
                type="text"
                inputMode="numeric"
                value={yearInput}
                onChange={(e) => setYearInput(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
            <div>
              <label htmlFor="invoice-prefix" className="mb-2 block text-sm font-medium text-slate-700">
                Voorvoegsel
              </label>
              <Input
                id="invoice-prefix"
                type="text"
                placeholder="FACT"
                value={prefixInput}
                onChange={(e) => setPrefixInput(e.target.value.toUpperCase())}
                className="h-12 text-lg"
              />
              <p className="mt-2 text-xs text-slate-500">Laat leeg voor alleen jaar-nummer (bijv. 2026-001).</p>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="start-number" className="mb-2 block text-sm font-medium text-slate-700">
                Startnummer
              </label>
              <Input
                id="start-number"
                type="text"
                inputMode="numeric"
                value={numberInput}
                onChange={(e) => setNumberInput(e.target.value)}
                className="h-12 text-lg"
              />
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Voorbeelden</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600">
              <li>{formatInvoiceNumber({ year: currentYear, prefix: '', startNumber: 1 })}</li>
              <li>{formatInvoiceNumber({ year: currentYear, prefix: 'FACT', startNumber: 1 })}</li>
              <li>{formatInvoiceNumber({ year: currentYear, prefix: 'INV', startNumber: 1 })}</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {invoiceNumber ? (
              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-blue-50 px-4 py-6 text-center">
                  <p className="text-sm font-medium text-blue-800">Jouw factuurnummer</p>
                  <p className="mt-2 break-all font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                    {invoiceNumber}
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <Button type="button" variant="outline" onClick={handleCopy} className="w-full">
                    <Copy className="mr-2 h-4 w-4" />
                    Kopieer nummer
                  </Button>
                  <Button type="button" onClick={handleMakeInvoice} className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Maak factuur
                  </Button>
                </div>
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Vul een geldig jaar en startnummer in.
              </p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Volgend nummer:{' '}
              {formatInvoiceNumber({
                year: yearInput,
                prefix: prefixInput,
                startNumber: (parseStartNumber(numberInput) ?? 0) + 1,
              }) || '—'}
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/factuurnummer-generator" className="text-warm-orange hover:underline">
          ← Meer uitleg over factuurnummers
        </Link>
      </p>
    </div>
  );
}
