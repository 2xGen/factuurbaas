'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { Calculator, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  MARGE_MODES,
  calculateMarginFromMode,
  formatEuro,
  formatPercent,
  parseAmount,
} from '@/lib/margeCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

function MoneyInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {hint && <p className="mb-2 text-xs text-slate-500">{hint}</p>}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          €
        </span>
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 pl-9 text-lg"
        />
      </div>
    </div>
  );
}

function PercentInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {hint && <p className="mb-2 text-xs text-slate-500">{hint}</p>}
      <div className="relative">
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 pr-10 text-lg"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
          %
        </span>
      </div>
    </div>
  );
}

export default function MargeCalculator() {
  const { toast } = useToast();
  const [mode, setMode] = useState('both-prices');
  const [purchaseInput, setPurchaseInput] = useState('');
  const [saleInput, setSaleInput] = useState('');
  const [marginInput, setMarginInput] = useState('');

  const result = useMemo(
    () =>
      calculateMarginFromMode({
        mode,
        purchasePrice: parseAmount(purchaseInput),
        salePrice: parseAmount(saleInput),
        marginPercent: parseAmount(marginInput),
      }),
    [mode, purchaseInput, saleInput, marginInput]
  );

  const calculationFingerprint = result
    ? `${mode}-${purchaseInput}-${saleInput}-${marginInput}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.marge, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!result) return '';
    const lines = [
      `Inkoopprijs: ${formatEuro(result.purchasePrice)}`,
      `Verkoopprijs: ${formatEuro(result.salePrice)}`,
      `Winst: ${formatEuro(result.profit)}`,
      `Marge: ${formatPercent(result.marginPercent)}%`,
    ];
    return lines.join('\n');
  }, [result]);

  const handleCopy = useCallback(async () => {
    if (!resultText) return;
    try {
      await navigator.clipboard.writeText(resultText);
      toast({ title: 'Gekopieerd', description: 'Het resultaat staat op je klembord.' });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Probeer het opnieuw of kopieer handmatig.',
        variant: 'destructive',
      });
    }
  }, [resultText, toast]);

  const emptyMessage =
    mode === 'both-prices'
      ? 'Vul een inkoop- en verkoopprijs in om je marge te berekenen.'
      : mode === 'from-purchase'
        ? 'Vul inkoopprijs en gewenste marge % in om je verkoopprijs te berekenen.'
        : 'Vul verkoopprijs en gewenste marge % in om je inkoopprijs te berekenen.';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Marge calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Bereken winst en marge op basis van prijzen, of bepaal je verkoop- of inkoopprijs met een
          gewenste marge %.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-deep-blue">Wat wil je berekenen?</h2>
              <p className="text-sm text-slate-500">Kies een berekeningsmethode.</p>
            </div>
          </div>

          <div className="mb-6 grid gap-3 sm:grid-cols-3">
            {MARGE_MODES.map((opt) => (
              <label
                key={opt.value}
                className={cn(
                  'flex cursor-pointer flex-col rounded-xl border p-4 transition-colors',
                  mode === opt.value
                    ? 'border-blue-500 bg-blue-50/60'
                    : 'border-slate-200 hover:border-slate-300'
                )}
              >
                <input
                  type="radio"
                  name="margeMode"
                  checked={mode === opt.value}
                  onChange={() => setMode(opt.value)}
                  className="sr-only"
                />
                <span className="text-sm font-semibold text-slate-800">{opt.label}</span>
                <span className="mt-1 text-xs text-slate-500">{opt.hint}</span>
              </label>
            ))}
          </div>

          <div className="space-y-5">
            {(mode === 'both-prices' || mode === 'from-purchase') && (
              <MoneyInput
                id="purchase-price"
                label="Inkoopprijs"
                value={purchaseInput}
                onChange={setPurchaseInput}
              />
            )}
            {(mode === 'both-prices' || mode === 'from-sale') && (
              <MoneyInput
                id="sale-price"
                label="Verkoopprijs"
                value={saleInput}
                onChange={setSaleInput}
              />
            )}
            {(mode === 'from-purchase' || mode === 'from-sale') && (
              <PercentInput
                id="margin-percent"
                label="Gewenste winstmarge"
                hint="Percentage van de verkoopprijs"
                value={marginInput}
                onChange={setMarginInput}
              />
            )}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {result ? (
              <div className="mt-5 space-y-4">
                {mode !== 'both-prices' && (
                  <div className="rounded-lg bg-slate-50 px-4 py-3">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
                      {mode === 'from-purchase' ? 'Berekende verkoopprijs' : 'Berekende inkoopprijs'}
                    </p>
                    <p className="mt-1 font-heading text-2xl font-bold text-deep-blue">
                      {formatEuro(mode === 'from-purchase' ? result.salePrice : result.purchasePrice)}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">{result.formulaDetail}</p>
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Inkoopprijs</span>
                  <span className="font-semibold text-slate-900">
                    {formatEuro(result.purchasePrice)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Verkoopprijs</span>
                  <span className="font-semibold text-slate-900">
                    {formatEuro(result.salePrice)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Winst</span>
                  <span className="font-semibold text-slate-900">
                    {formatEuro(result.profit)}
                  </span>
                </div>
                {mode === 'both-prices' && (
                  <p className="text-xs text-slate-400">{result.formulaDetail}</p>
                )}

                <div className="rounded-xl bg-blue-50 px-4 py-5 text-center">
                  <p className="text-sm font-medium text-blue-800">Winstmarge</p>
                  <p className="mt-1 font-heading text-3xl font-bold text-deep-blue">
                    {formatPercent(result.marginPercent)}%
                  </p>
                  <p className="text-sm text-blue-700">van verkoopprijs</p>
                </div>

                <Button type="button" variant="outline" onClick={handleCopy} className="w-full">
                  <Copy className="mr-2 h-4 w-4" />
                  Kopieer resultaat
                </Button>
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">{emptyMessage}</p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              {mode === 'from-purchase'
                ? 'Verkoopprijs = inkoopprijs ÷ (1 − marge %). Marge onder 100%.'
                : mode === 'from-sale'
                  ? 'Inkoopprijs = verkoopprijs × (1 − marge %).'
                  : 'Marge % = (winst ÷ verkoopprijs) × 100'}
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/marge-calculator" className="text-warm-orange hover:underline">
          ← Meer uitleg over marge berekenen
        </Link>
      </p>
    </div>
  );
}
