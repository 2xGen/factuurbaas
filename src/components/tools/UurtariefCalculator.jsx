'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Calculator, Copy, FileText, Info, Receipt } from 'lucide-react';
import {
  DEFAULT_INPUTS,
  TAX_RESERVE_RATE,
  WEEKS_PER_MONTH,
  calculateUurtarief,
  formatEuro,
  formatHourlyRate,
  parseAmount,
} from '@/lib/uurtariefCalculator';
import {
  saveUurtariefInvoicePrefill,
  saveUurtariefQuotePrefill,
} from '@/lib/invoicePrefill';
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

function BreakdownRow({ label, value, detail }) {
  return (
    <div className="flex items-start justify-between gap-3 py-2">
      <div>
        <p className="text-sm text-slate-600">{label}</p>
        {detail && <p className="mt-0.5 text-xs text-slate-400">{detail}</p>}
      </div>
      <span className="shrink-0 text-sm font-medium text-slate-900">{value}</span>
    </div>
  );
}

function CalculationBreakdown({ result }) {
  const taxPercent = Math.round(TAX_RESERVE_RATE * 100);
  const keepPercent = 100 - taxPercent;

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <div className="mb-3 flex items-center gap-2">
        <Info className="h-4 w-4 text-blue-600" />
        <h3 className="text-sm font-semibold text-deep-blue">Zo komt dit getal tot stand</h3>
      </div>

      <div className="space-y-1 divide-y divide-slate-200/80">
        <div className="pb-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Stap 1 — Wat je over wilt houden
          </p>
          <BreakdownRow
            label="Gewenst netto inkomen"
            value={formatEuro(result.desiredNetMonthly)}
          />
          <BreakdownRow label="Zakelijke kosten" value={formatEuro(result.monthlyCosts)} />
          <BreakdownRow
            label="Totaal"
            value={formatEuro(result.baseBeforeTax)}
            detail="Netto + kosten"
          />
        </div>

        <div className="py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Stap 2 — Reservering voor belasting ({taxPercent}%)
          </p>
          <p className="mb-2 text-xs leading-relaxed text-slate-500">
            We rekenen met een vuistregel: ongeveer {taxPercent}% van je omzet gaat naar
            belasting en premies (inkomstenbelasting, Zvw, etc.). Wat overblijft ({keepPercent}%)
            moet je netto inkomen en kosten dekken.
          </p>
          <BreakdownRow
            label="Benodigde omzet"
            value={formatEuro(result.requiredRevenue)}
            detail={`${formatEuro(result.baseBeforeTax)} ÷ ${keepPercent}%`}
          />
          <BreakdownRow
            label="Gereserveerd voor belasting"
            value={formatEuro(result.taxReserve)}
            detail={`~${taxPercent}% van je omzet`}
          />
        </div>

        <div className="py-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Stap 3 — Factureerbare uren per maand
          </p>
          <BreakdownRow
            label="Uren per week × weken × declarabel %"
            value={`${Math.round(result.billableHoursPerMonth)} uur`}
            detail={`${result.hoursPerWeek} × ${WEEKS_PER_MONTH} × ${result.billablePercent}%`}
          />
        </div>

        <div className="pt-3">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
            Stap 4 — Uurtarief
          </p>
          <BreakdownRow
            label="Omzet ÷ factureerbare uren"
            value={`${formatHourlyRate(result.hourlyRate)} /uur`}
            detail={`${formatEuro(result.requiredRevenue)} ÷ ${Math.round(result.billableHoursPerMonth)} uur`}
          />
        </div>
      </div>

      <p className="mt-4 text-xs leading-relaxed text-slate-500">
        Dit is een richtlijn, geen exacte belastingberekening. Btw reken je meestal apart door
        aan je klant.{' '}
        <Link
          href="/blogs/hoeveel-geld-apart-belasting-zzper"
          className="text-warm-orange hover:underline"
        >
          Lees meer over belasting reserveren
        </Link>
        .
      </p>
    </div>
  );
}

export default function UurtariefCalculator() {
  const router = useRouter();
  const { toast } = useToast();

  const [netInput, setNetInput] = useState(String(DEFAULT_INPUTS.desiredNetMonthly));
  const [costsInput, setCostsInput] = useState(String(DEFAULT_INPUTS.monthlyCosts));
  const [hoursInput, setHoursInput] = useState(String(DEFAULT_INPUTS.hoursPerWeek));
  const [billableInput, setBillableInput] = useState(String(DEFAULT_INPUTS.billablePercent));

  const result = useMemo(
    () =>
      calculateUurtarief({
        desiredNetMonthly: parseAmount(netInput),
        monthlyCosts: parseAmount(costsInput),
        hoursPerWeek: parseAmount(hoursInput),
        billablePercent: parseAmount(billableInput),
      }),
    [netInput, costsInput, hoursInput, billableInput]
  );

  const billableExample = useMemo(() => {
    const hours = parseAmount(hoursInput) ?? DEFAULT_INPUTS.hoursPerWeek;
    const percent = parseAmount(billableInput) ?? DEFAULT_INPUTS.billablePercent;
    const billableHours = Math.round((hours * percent) / 100);
    return { hours, percent, billableHours };
  }, [hoursInput, billableInput]);

  const calculationFingerprint = result
    ? `${netInput}-${costsInput}-${hoursInput}-${billableInput}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.uurtarief, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!result) return '';
    return [
      `Benodigde omzet per maand: ${formatEuro(result.requiredRevenue)}`,
      `Factureerbare uren per maand: ${Math.round(result.billableHoursPerMonth)} uur`,
      `Aanbevolen uurtarief: ${formatHourlyRate(result.hourlyRate)} per uur`,
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
      <div className="mb-2">
        <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
          Uurtarief calculator
        </h1>
        <p className="mt-2 text-slate-600">
          Bereken welk uurtarief je nodig hebt als zzp&apos;er — inclusief zakelijke kosten,
          belastingreservering en factureerbare uren.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
        <div className="space-y-8 lg:col-span-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-lg font-bold text-deep-blue">Wat wil je verdienen?</h2>
              </div>
            </div>

            <div className="space-y-5">
              <MoneyInput
                id="net-income"
                label="Gewenst netto inkomen per maand"
                value={netInput}
                onChange={setNetInput}
              />
              <MoneyInput
                id="monthly-costs"
                label="Zakelijke kosten"
                hint="Per maand"
                value={costsInput}
                onChange={setCostsInput}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <h2 className="mb-5 font-heading text-lg font-bold text-deep-blue">Werkuren</h2>
            <div className="space-y-5">
              <div>
                <label htmlFor="hours-week" className="mb-2 block text-sm font-medium text-slate-700">
                  Uren per week
                </label>
                <Input
                  id="hours-week"
                  type="text"
                  inputMode="decimal"
                  value={hoursInput}
                  onChange={(e) => setHoursInput(e.target.value)}
                  className="h-12 text-lg"
                />
              </div>
              <div>
                <label
                  htmlFor="billable-percent"
                  className="mb-1 block text-sm font-medium text-slate-700"
                >
                  Declarabele uren
                </label>
                <p className="mb-3 text-sm text-slate-600">
                  Hoeveel van je uren kun je aan klanten doorberekenen?
                </p>
                <div className="relative">
                  <Input
                    id="billable-percent"
                    type="text"
                    inputMode="decimal"
                    value={billableInput}
                    onChange={(e) => setBillableInput(e.target.value)}
                    className="h-12 pr-10 text-lg"
                  />
                  <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    %
                  </span>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  Niet alle gewerkte uren kun je doorberekenen aan klanten. Je tijd gaat ook
                  naar administratie, offertes, marketing, gesprekken en andere taken.
                </p>
                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  <span className="font-medium text-slate-600">Voorbeeld: </span>
                  Bij een werkweek van {billableExample.hours} uur en {billableExample.percent}%
                  factureerbare tijd kun je ongeveer {billableExample.billableHours} uur per week
                  factureren.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="sticky top-[calc(var(--header-height,6rem)+1.5rem)] rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h2>

            {result ? (
              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Benodigde omzet per maand</span>
                  <span className="font-semibold text-slate-900">
                    {formatEuro(result.requiredRevenue)}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-3">
                  <span className="text-sm text-slate-600">Uren die je kunt factureren</span>
                  <span className="font-semibold text-slate-900">
                    {Math.round(result.billableHoursPerMonth)} uur
                  </span>
                </div>
                <div className="rounded-xl bg-blue-50 px-4 py-5 text-center">
                  <p className="text-sm font-medium text-blue-800">Jouw aanbevolen uurtarief</p>
                  <p className="mt-1 font-heading text-3xl font-bold text-deep-blue">
                    {formatHourlyRate(result.hourlyRate)}
                  </p>
                  <p className="text-sm text-blue-700">per uur</p>
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

                <CalculationBreakdown result={result} />
              </div>
            ) : (
              <p className="mt-5 text-sm text-slate-500">
                Vul je gewenste inkomen en werkuren in om je uurtarief te berekenen.
              </p>
            )}

            <p className="mt-5 text-xs leading-relaxed text-slate-500">
              We rekenen met 4 weken per maand en een belastingreservering van 30%. Pas het
              tarief aan op je branche, ervaring en werkelijke kosten.
            </p>
          </div>
        </div>
      </div>

      <p className="text-center text-sm text-slate-500">
        <Link href="/tools/uurtarief-calculator" className="text-warm-orange hover:underline">
          ← Meer uitleg over uurtarief berekenen
        </Link>
      </p>
    </div>
  );
}
