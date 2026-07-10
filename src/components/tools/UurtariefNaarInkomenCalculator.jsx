'use client';

import React, { useMemo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Calculator, Copy, FileText, Receipt } from 'lucide-react';
import {
  DEFAULT_INPUTS,
  WEEKS_PER_MONTH,
  calculateIncomeFromRate,
  formatEuro,
  monthlyHoursFromWeekly,
  parseAmount,
} from '@/lib/uurtariefNaarInkomen';
import {
  saveUurtariefInvoicePrefill,
  saveUurtariefQuotePrefill,
} from '@/lib/invoicePrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

function MoneyInput({ id, label, hint, value, onChange, optional = false }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
        {optional && <span className="font-normal text-slate-400"> (optioneel)</span>}
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

export default function UurtariefNaarInkomenCalculator() {
  const router = useRouter();
  const { toast } = useToast();

  const [rateInput, setRateInput] = useState(String(DEFAULT_INPUTS.hourlyRate));
  const [hoursWeekInput, setHoursWeekInput] = useState(String(DEFAULT_INPUTS.hoursPerWeek));
  const [hoursMonthInput, setHoursMonthInput] = useState(String(DEFAULT_INPUTS.billableHoursPerMonth));
  const [hoursMonthTouched, setHoursMonthTouched] = useState(false);
  const [costsInput, setCostsInput] = useState(String(DEFAULT_INPUTS.monthlyCosts));

  useEffect(() => {
    if (hoursMonthTouched) return;
    const monthly = monthlyHoursFromWeekly(hoursWeekInput);
    if (monthly !== null) {
      setHoursMonthInput(String(monthly));
    }
  }, [hoursWeekInput, hoursMonthTouched]);

  const result = useMemo(
    () =>
      calculateIncomeFromRate({
        hourlyRate: parseAmount(rateInput),
        billableHoursPerMonth: parseAmount(hoursMonthInput),
        monthlyCosts: parseAmount(costsInput),
      }),
    [rateInput, hoursMonthInput, costsInput]
  );

  const calculationFingerprint = result
    ? `${rateInput}-${hoursMonthInput}-${costsInput}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.uurtariefNaarInkomen, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!result) return '';
    return [
      `Maandelijkse omzet: ${formatEuro(result.monthlyRevenue)}`,
      `Zakelijke kosten: ${formatEuro(result.monthlyCosts)}`,
      `Geschatte winst: ${formatEuro(result.estimatedProfit)}`,
    ].join('\n');
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

  const handleMakeInvoice = useCallback(() => {
    if (!result) return;
    saveUurtariefInvoicePrefill({ hourlyRate: result.hourlyRate });
    router.push('/create-invoice');
  }, [result, router]);

  const handleMakeQuote = useCallback(() => {
    if (!result) return;
    saveUurtariefQuotePrefill({ hourlyRate: result.hourlyRate });
    router.push('/tools/offerte-maker/maken');
  }, [result, router]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Uurtarief naar inkomen
        </h1>
        <p className="mt-2 text-slate-600">
          Bereken je maandelijkse omzet en geschatte winst op basis van je uurtarief.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Calculator className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-lg font-bold text-deep-blue">Jouw gegevens</h2>
              <p className="text-sm text-slate-500">Vul je uurtarief en werkuren in.</p>
            </div>
          </div>

          <div className="space-y-5">
            <MoneyInput
              id="hourly-rate"
              label="Uurtarief"
              value={rateInput}
              onChange={setRateInput}
            />
            <div>
              <label htmlFor="hours-week" className="mb-2 block text-sm font-medium text-slate-700">
                Aantal uren per week
              </label>
              <Input
                id="hours-week"
                type="text"
                inputMode="decimal"
                value={hoursWeekInput}
                onChange={(e) => setHoursWeekInput(e.target.value)}
                className="h-12 text-lg"
              />
              <p className="mt-2 text-xs text-slate-500">
                Bij {hoursWeekInput || '…'} uur per week × {WEEKS_PER_MONTH} weken ={' '}
                {monthlyHoursFromWeekly(hoursWeekInput) ?? '…'} uur per maand.
              </p>
            </div>
            <div>
              <label htmlFor="hours-month" className="mb-2 block text-sm font-medium text-slate-700">
                Factureerbare uren per maand
              </label>
              <Input
                id="hours-month"
                type="text"
                inputMode="decimal"
                value={hoursMonthInput}
                onChange={(e) => {
                  setHoursMonthTouched(true);
                  setHoursMonthInput(e.target.value);
                }}
                className="h-12 text-lg"
              />
            </div>
            <MoneyInput
              id="monthly-costs"
              label="Zakelijke kosten"
              hint="Per maand"
              value={costsInput}
              onChange={setCostsInput}
              optional
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {result ? (
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Maandelijkse omzet</span>
                  <span className="font-semibold text-slate-900">
                    {formatEuro(result.monthlyRevenue)}
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  {formatEuro(result.hourlyRate)} × {result.billableHoursPerMonth} uur
                </p>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Zakelijke kosten</span>
                  <span className="font-semibold text-red-600">
                    − {formatEuro(result.monthlyCosts)}
                  </span>
                </div>
                <div className="rounded-xl bg-blue-50 px-4 py-5 text-center">
                  <p className="text-sm font-medium text-blue-800">Geschatte winst</p>
                  <p className="mt-1 font-heading text-3xl font-bold text-deep-blue">
                    {formatEuro(result.estimatedProfit)}
                  </p>
                  <p className="text-sm text-blue-700">per maand (vóór belasting)</p>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                  <Button type="button" variant="outline" onClick={handleCopy} className="w-full">
                    <Copy className="mr-2 h-4 w-4" />
                    Kopieer resultaat
                  </Button>
                  <Button type="button" variant="outline" onClick={handleMakeQuote} className="w-full">
                    <Receipt className="mr-2 h-4 w-4" />
                    Maak offerte
                  </Button>
                  <Button type="button" onClick={handleMakeInvoice} className="w-full">
                    <FileText className="mr-2 h-4 w-4" />
                    Maak factuur
                  </Button>
                </div>
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Vul je uurtarief en factureerbare uren in om je inkomen te berekenen.
              </p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              Omzet is wat je factureert. Geschatte winst is omzet minus kosten, vóór belasting.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/uurtarief-naar-inkomen" className="text-warm-orange hover:underline">
          ← Meer uitleg over uurtarief naar inkomen
        </Link>
      </p>
    </div>
  );
}
