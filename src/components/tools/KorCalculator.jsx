'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { Calculator, Copy, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  KOR_REVENUE_LIMIT,
  MONTHS_PER_YEAR,
  REVENUE_PERIOD_OPTIONS,
  evaluateKor,
  formatEuro,
  parseAmount,
} from '@/lib/korCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

const STATUS_STYLES = {
  eligible: 'border-green-200 bg-green-50 text-green-900',
  'near-limit': 'border-amber-200 bg-amber-50 text-amber-900',
  'not-eligible': 'border-red-200 bg-red-50 text-red-900',
};

export default function KorCalculator() {
  const { toast } = useToast();
  const [revenuePeriod, setRevenuePeriod] = useState('year');
  const [revenueInput, setRevenueInput] = useState('15000');
  const [mostlyConsumers, setMostlyConsumers] = useState(true);
  const [highVatOnCosts, setHighVatOnCosts] = useState(false);

  const handlePeriodChange = (period) => {
    const current = parseAmount(revenueInput);
    if (current !== null) {
      if (period === 'month' && revenuePeriod === 'year') {
        setRevenueInput(String(Math.round((current / MONTHS_PER_YEAR) * 100) / 100));
      } else if (period === 'year' && revenuePeriod === 'month') {
        setRevenueInput(String(Math.round(current * MONTHS_PER_YEAR)));
      }
    }
    setRevenuePeriod(period);
  };

  const result = useMemo(
    () =>
      evaluateKor({
        revenueInput,
        revenuePeriod,
        mostlyConsumers,
        highVatOnCosts,
      }),
    [revenueInput, revenuePeriod, mostlyConsumers, highVatOnCosts]
  );

  const calculationFingerprint = result
    ? `${revenuePeriod}-${revenueInput}-${mostlyConsumers}-${highVatOnCosts}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.kor, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!result) return '';
    const lines = [
      revenuePeriod === 'month'
        ? `Verwachte maandomzet: ${formatEuro(result.monthlyRevenue)}`
        : `Verwachte jaaromzet: ${formatEuro(result.annualRevenue)}`,
      `Jaaromzet (berekend): ${formatEuro(result.annualRevenue)}`,
      `KOR-grens: ${formatEuro(result.korLimit)}`,
      result.headline,
      result.summary,
      '',
      'Waarom dit resultaat?',
      ...result.explanationSteps.map((step) => `${step.title}: ${step.text}`),
    ];
    return lines.join('\n');
  }, [result, revenuePeriod]);

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

  const revenueLabel =
    revenuePeriod === 'month' ? 'Verwachte omzet per maand' : 'Verwachte omzet per jaar';

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          KOR calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Bereken of de kleineondernemersregeling (KOR) mogelijk interessant is voor jouw onderneming.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-deep-blue">Jouw situatie</h2>
              <p className="text-sm text-slate-500">Vul je verwachte omzet in (per jaar of per maand).</p>
            </div>
          </div>

          <div className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-medium text-slate-700">Omzet invoeren</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {REVENUE_PERIOD_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handlePeriodChange(opt.value)}
                    className={cn(
                      'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                      revenuePeriod === opt.value
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    )}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>

              <label htmlFor="revenue-amount" className="mb-2 block text-sm font-medium text-slate-700">
                {revenueLabel}
              </label>
              <div className="relative">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  €
                </span>
                <Input
                  id="revenue-amount"
                  type="text"
                  inputMode="decimal"
                  value={revenueInput}
                  onChange={(e) => setRevenueInput(e.target.value)}
                  className="h-12 pl-9 text-lg"
                />
              </div>
              {revenuePeriod === 'month' && parseAmount(revenueInput) !== null && (
                <p className="mt-2 text-xs text-slate-500">
                  Jaaromzet: {formatEuro(parseAmount(revenueInput) * MONTHS_PER_YEAR)} ({formatEuro(parseAmount(revenueInput))} × 12 maanden)
                </p>
              )}
              <p className="mt-2 text-xs text-slate-500">
                KOR-grens: maximaal {formatEuro(KOR_REVENUE_LIMIT)} omzet per kalenderjaar
                {revenuePeriod === 'month' &&
                  ` (≈ ${formatEuro(KOR_REVENUE_LIMIT / MONTHS_PER_YEAR)} per maand)`}
                .
              </p>
            </div>

            <div className="space-y-3 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <p className="text-sm font-medium text-slate-700">Optioneel — voor een betere inschatting</p>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={mostlyConsumers}
                  onChange={(e) => setMostlyConsumers(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600">
                  Ik lever vooral aan particulieren (consumenten)
                </span>
              </label>
              <label className="flex cursor-pointer items-start gap-3">
                <input
                  type="checkbox"
                  checked={highVatOnCosts}
                  onChange={(e) => setHighVatOnCosts(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm text-slate-600">
                  Ik heb relatief veel btw op zakelijke kosten (inkopen, investeringen)
                </span>
              </label>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {result ? (
              <div className="mt-5 space-y-4">
                {revenuePeriod === 'month' && (
                  <div className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                    <p>
                      Maandomzet: <span className="font-semibold text-slate-900">{formatEuro(result.monthlyRevenue)}</span>
                    </p>
                    <p className="mt-1">
                      Jaaromzet:{' '}
                      <span className="font-semibold text-slate-900">{formatEuro(result.annualRevenue)}</span>
                      <span className="text-slate-500"> ({formatEuro(result.monthlyRevenue)} × 12)</span>
                    </p>
                  </div>
                )}

                <div
                  className={cn(
                    'rounded-xl border px-4 py-5',
                    STATUS_STYLES[result.status]
                  )}
                >
                  <p className="text-sm font-semibold">{result.headline}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-90">{result.summary}</p>
                </div>

                {result.status !== 'not-eligible' && (
                  <p className="text-sm text-slate-600">
                    Nog {formatEuro(result.remainingUnderLimit)} onder de KOR-grens dit jaar
                    {revenuePeriod === 'month' && (
                      <> (≈ {formatEuro(result.remainingUnderLimit / MONTHS_PER_YEAR)} per maand)</>
                    )}
                    .
                  </p>
                )}

                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="mb-3 flex items-center gap-2">
                    <Info className="h-4 w-4 text-blue-600" />
                    <h3 className="text-sm font-semibold text-deep-blue">Waarom dit resultaat?</h3>
                  </div>
                  <div className="space-y-3">
                    {result.explanationSteps.map((step) => (
                      <div key={step.title}>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button type="button" variant="outline" onClick={handleCopy} className="w-full">
                  <Copy className="mr-2 h-4 w-4" />
                  Kopieer resultaat
                </Button>
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Vul je verwachte omzet in om het resultaat te zien.
              </p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Dit is een indicatie, geen fiscaal advies. Check altijd de actuele regels bij de{' '}
              <a
                href="https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw_voor_mij/kleineondernemersregeling/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-warm-orange hover:underline"
              >
                Belastingdienst
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/kor-calculator" className="text-warm-orange hover:underline">
          ← Meer uitleg over de kleineondernemersregeling
        </Link>
      </p>
    </div>
  );
}
