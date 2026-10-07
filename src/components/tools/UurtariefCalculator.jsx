'use client';

import React, { useMemo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { Clock, Copy, FileText, Info, Receipt, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { btn } from '@/components/site/editorial';
import {
  AffixInput,
  CalculatorPage,
  FieldHint,
  FieldLabel,
  RelatedLink,
  ResultActions,
  ResultEmpty,
  ResultHero,
  ResultPanel,
  ResultRow,
  ResultRows,
  ToolCard,
  ToolGrid,
  resultButton,
} from '@/components/tools/calculatorUi';
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
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchBusinessSettings, saveHourlyRate } from '@/lib/businessSettings';
import SaveToBusiness, { SaveBusinessButton } from '@/components/tools/SaveToBusiness';

function MoneyInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {hint && <FieldHint className="-mt-1 mb-2">{hint}</FieldHint>}
      <AffixInput id={id} prefix="€" value={value} onChange={onChange} />
    </div>
  );
}

function BreakdownRow({ label, value, detail }) {
  return (
    <div className="flex items-start justify-between gap-3 border-b border-ink/[0.07] py-2.5 last:border-b-0">
      <div className="min-w-0">
        <p className="text-sm text-ink-700">{label}</p>
        {detail && <p className="mt-0.5 text-xs text-ink-400 tabular">{detail}</p>}
      </div>
      <span className="shrink-0 text-sm font-medium text-ink tabular">{value}</span>
    </div>
  );
}

function StepLabel({ children }) {
  return (
    <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">{children}</p>
  );
}

function CalculationBreakdown({ result }) {
  const taxPercent = Math.round(TAX_RESERVE_RATE * 100);
  const keepPercent = 100 - taxPercent;

  return (
    <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <Info className="h-4 w-4 text-ember" aria-hidden />
        <h3 className="font-display text-lg font-normal leading-tight text-ink">Zo komt dit getal tot stand</h3>
      </div>

      <div className="divide-y divide-ink/10">
        <div className="pb-4">
          <StepLabel>Stap 1 — Wat je over wilt houden</StepLabel>
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

        <div className="py-4">
          <StepLabel>Stap 2 — Reservering voor belasting ({taxPercent}%)</StepLabel>
          <p className="mb-2 text-xs leading-relaxed text-ink-500">
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

        <div className="py-4">
          <StepLabel>Stap 3 — Factureerbare uren per maand</StepLabel>
          <BreakdownRow
            label="Uren per week × weken × declarabel %"
            value={`${Math.round(result.billableHoursPerMonth)} uur`}
            detail={`${result.hoursPerWeek} × ${WEEKS_PER_MONTH} × ${result.billablePercent}%`}
          />
        </div>

        <div className="pt-4">
          <StepLabel>Stap 4 — Uurtarief</StepLabel>
          <BreakdownRow
            label="Omzet ÷ factureerbare uren"
            value={`${formatHourlyRate(result.hourlyRate)} /uur`}
            detail={`${formatEuro(result.requiredRevenue)} ÷ ${Math.round(result.billableHoursPerMonth)} uur`}
          />
        </div>
      </div>

      <p className="mt-4 border-t border-ink/[0.08] pt-4 text-xs leading-relaxed text-ink-500">
        Dit is een richtlijn, geen exacte belastingberekening. Btw reken je meestal apart door
        aan je klant.{' '}
        <Link href="/blogs/hoeveel-geld-apart-belasting-zzper" className={cn(btn.link, 'text-xs')}>
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
  const { user } = useAuth();
  const [savingRate, setSavingRate] = useState(false);

  const [netInput, setNetInput] = useState(String(DEFAULT_INPUTS.desiredNetMonthly));
  const [costsInput, setCostsInput] = useState(String(DEFAULT_INPUTS.monthlyCosts));
  const [hoursInput, setHoursInput] = useState(String(DEFAULT_INPUTS.hoursPerWeek));
  const [billableInput, setBillableInput] = useState(String(DEFAULT_INPUTS.billablePercent));

  useEffect(() => {
    if (!user?.id) return;
    fetchBusinessSettings(supabase, user.id)
      .then((s) => {
        if (s.desiredNetMonthly) setNetInput(String(s.desiredNetMonthly));
        if (s.hoursPerWeek) setHoursInput(String(s.hoursPerWeek));
      })
      .catch(() => {});
  }, [user?.id]);

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

  const handleSaveRate = useCallback(async () => {
    if (!result || !user?.id) return;
    setSavingRate(true);
    try {
      await saveHourlyRate(supabase, user.id, result.hourlyRate, {
        hoursPerWeek: result.hoursPerWeek,
        desiredNetMonthly: result.desiredNetMonthly,
      });
      toast({
        title: 'Uurtarief bewaard',
        description: `${formatHourlyRate(result.hourlyRate)} staat nu op je facturen en uren.`,
      });
    } catch {
      toast({
        title: 'Opslaan mislukt',
        description: 'Run ADD_BUSINESS_SETTINGS.sql in Supabase als dit de eerste keer is.',
        variant: 'destructive',
      });
    } finally {
      setSavingRate(false);
    }
  }, [result, user?.id, toast]);

  return (
    <CalculatorPage
      breadcrumbLabel="Uurtarief calculator"
      title={
        <>
          Uurtarief <em>calculator</em>
        </>
      }
      lead={
        <p>
          Bereken welk uurtarief je nodig hebt als zzp&apos;er — inclusief zakelijke kosten,
          belastingreservering en factureerbare uren.
        </p>
      }
    >
      <ToolGrid>
        <div className="space-y-6">
          <ToolCard title="Wat wil je verdienen?" icon={Wallet}>
            <div className="space-y-6">
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
          </ToolCard>

          <ToolCard title="Werkuren" icon={Clock}>
            <div className="space-y-6">
              <div>
                <FieldLabel htmlFor="hours-week">Uren per week</FieldLabel>
                <AffixInput id="hours-week" value={hoursInput} onChange={setHoursInput} />
              </div>
              <div>
                <FieldLabel htmlFor="billable-percent" className="mb-1">
                  Declarabele uren
                </FieldLabel>
                <p className="mb-3 text-sm text-ink-500">
                  Hoeveel van je uren kun je aan klanten doorberekenen?
                </p>
                <AffixInput
                  id="billable-percent"
                  suffix="%"
                  value={billableInput}
                  onChange={setBillableInput}
                />
                <div className="mt-4 space-y-2 rounded-xl bg-paper-100 px-4 py-3.5">
                  <FieldHint>
                    Niet alle gewerkte uren kun je doorberekenen aan klanten. Je tijd gaat ook
                    naar administratie, offertes, marketing, gesprekken en andere taken.
                  </FieldHint>
                  <FieldHint>
                    <span className="font-medium text-ink-700">Voorbeeld: </span>
                    Bij een werkweek van {billableExample.hours} uur en {billableExample.percent}%
                    factureerbare tijd kun je ongeveer {billableExample.billableHours} uur per week
                    factureren.
                  </FieldHint>
                </div>
              </div>
            </div>
          </ToolCard>
        </div>

        <div className="space-y-6">
          <ResultPanel
            footnote={
              <p>
                We rekenen met 4 weken per maand en een belastingreservering van 30%. Pas het
                tarief aan op je branche, ervaring en werkelijke kosten.
              </p>
            }
          >
            {result ? (
              <>
                <ResultHero
                  label="Jouw aanbevolen uurtarief"
                  value={result.hourlyRate}
                  format={formatHourlyRate}
                  sub="per uur"
                />
                <ResultRows>
                  <ResultRow
                    label="Benodigde omzet per maand"
                    value={result.requiredRevenue}
                    format={formatEuro}
                  />
                  <ResultRow
                    label="Uren die je kunt factureren"
                    value={Math.round(result.billableHoursPerMonth)}
                    format={(v) => `${Math.round(v)} uur`}
                  />
                </ResultRows>

                <ResultActions>
                  <SaveToBusiness hint="dit tarief te bewaren">
                    <SaveBusinessButton onClick={handleSaveRate} disabled={savingRate}>
                      Gebruik {formatHourlyRate(result.hourlyRate)} als mijn uurtarief
                    </SaveBusinessButton>
                  </SaveToBusiness>
                  <button type="button" onClick={handleMakeInvoice} className={resultButton.primary}>
                    <FileText className="h-4 w-4" aria-hidden />
                    Maak factuur
                  </button>
                  <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <button type="button" onClick={handleMakeQuote} className={resultButton.secondary}>
                      <Receipt className="h-4 w-4" aria-hidden />
                      Maak offerte
                    </button>
                    <button type="button" onClick={handleCopy} className={resultButton.secondary}>
                      <Copy className="h-4 w-4" aria-hidden />
                      Kopieer resultaat
                    </button>
                  </div>
                </ResultActions>
              </>
            ) : (
              <ResultEmpty>
                Vul je gewenste inkomen en werkuren in om je uurtarief te berekenen.
              </ResultEmpty>
            )}
          </ResultPanel>

          {result && <CalculationBreakdown result={result} />}
        </div>
      </ToolGrid>

      <RelatedLink href="/tools/uurtarief-calculator">
        <span className="text-ember" aria-hidden>
          ←
        </span>{' '}
        Meer uitleg over uurtarief berekenen
      </RelatedLink>
    </CalculatorPage>
  );
}
