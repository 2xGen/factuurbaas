'use client';

import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useToast } from '@/components/ui/use-toast';
import { Copy, FileText, Receipt } from 'lucide-react';
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
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import {
  fetchBusinessSettings,
  potentialAnnualRevenue,
  saveRevenueGoalFromTool,
} from '@/lib/businessSettings';
import SaveToBusiness, { SaveBusinessButton } from '@/components/tools/SaveToBusiness';

function MoneyInput({ id, label, hint, value, onChange, optional = false }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>
        {label}
        {optional && <span className="normal-case tracking-normal text-ink-400"> (optioneel)</span>}
      </FieldLabel>
      {hint && <FieldHint className="-mt-1 mb-2">{hint}</FieldHint>}
      <AffixInput id={id} prefix="€" value={value} onChange={onChange} />
    </div>
  );
}

export default function UurtariefNaarInkomenCalculator() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [weeksPerYear, setWeeksPerYear] = useState(46);
  const [savingGoal, setSavingGoal] = useState(false);

  const [rateInput, setRateInput] = useState(String(DEFAULT_INPUTS.hourlyRate));
  const [hoursWeekInput, setHoursWeekInput] = useState(String(DEFAULT_INPUTS.hoursPerWeek));
  const [hoursMonthInput, setHoursMonthInput] = useState(String(DEFAULT_INPUTS.billableHoursPerMonth));
  const [hoursMonthTouched, setHoursMonthTouched] = useState(false);
  const [costsInput, setCostsInput] = useState(String(DEFAULT_INPUTS.monthlyCosts));

  useEffect(() => {
    if (!user?.id) return;
    fetchBusinessSettings(supabase, user.id)
      .then((s) => {
        if (s.hourlyRate) setRateInput(String(s.hourlyRate));
        if (s.hoursPerWeek) setHoursWeekInput(String(s.hoursPerWeek));
        if (s.weeksPerYear) setWeeksPerYear(s.weeksPerYear);
      })
      .catch(() => {});
  }, [user?.id]);

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

  const annualFromProfile = potentialAnnualRevenue({
    hourlyRate: parseAmount(rateInput),
    hoursPerWeek: parseAmount(hoursWeekInput),
    weeksPerYear,
  });

  const handleSaveGoal = useCallback(async () => {
    if (!annualFromProfile || !user?.id) return;
    setSavingGoal(true);
    try {
      await saveRevenueGoalFromTool(supabase, user.id, annualFromProfile, new Date().getFullYear());
      toast({
        title: 'Jaardoel gezet',
        description: `${formatEuro(annualFromProfile)} is nu je omzetdoel.`,
      });
    } catch {
      toast({
        title: 'Opslaan mislukt',
        description: 'Probeer het opnieuw of zet het doel op je overzicht.',
        variant: 'destructive',
      });
    } finally {
      setSavingGoal(false);
    }
  }, [annualFromProfile, user?.id, toast]);

  return (
    <CalculatorPage
      breadcrumbLabel="Uurtarief naar inkomen"
      title={
        <>
          Uurtarief naar <em>inkomen</em>
        </>
      }
      lead={<p>Bereken je maandelijkse omzet en geschatte winst op basis van je uurtarief.</p>}
    >
      <ToolGrid>
        <ToolCard
          title="Jouw gegevens"
          description={
            user
              ? 'Met jouw huidige uurtarief en uren. Pas aan als je een scenario wilt doorrekenen.'
              : 'Vul je uurtarief en werkuren in.'
          }
        >
          <div className="space-y-6">
            <MoneyInput
              id="hourly-rate"
              label="Uurtarief"
              value={rateInput}
              onChange={setRateInput}
            />
            <div>
              <FieldLabel htmlFor="hours-week">Aantal uren per week</FieldLabel>
              <AffixInput id="hours-week" value={hoursWeekInput} onChange={setHoursWeekInput} />
              <FieldHint className="mt-2 tabular">
                Bij {hoursWeekInput || '…'} uur per week × {WEEKS_PER_MONTH} weken ={' '}
                {monthlyHoursFromWeekly(hoursWeekInput) ?? '…'} uur per maand.
              </FieldHint>
            </div>
            <div>
              <FieldLabel htmlFor="hours-month">Factureerbare uren per maand</FieldLabel>
              <AffixInput
                id="hours-month"
                value={hoursMonthInput}
                onChange={(value) => {
                  setHoursMonthTouched(true);
                  setHoursMonthInput(value);
                }}
              />
            </div>
            <div className="border-t border-dashed border-ink/10 pt-6">
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
        </ToolCard>

        <div className="lg:sticky lg:top-[calc(var(--header-height,5rem)+1.5rem)]">
          <ResultPanel
            footnote={
              <p>Omzet is wat je factureert. Geschatte winst is omzet minus kosten, vóór belasting.</p>
            }
          >
            {result ? (
              <>
                <ResultHero
                  label="Geschatte winst"
                  value={result.estimatedProfit}
                  format={formatEuro}
                  sub="per maand (vóór belasting)"
                />
                <ResultRows>
                  <ResultRow
                    label="Maandelijkse omzet"
                    detail={`${formatEuro(result.hourlyRate)} × ${result.billableHoursPerMonth} uur`}
                    value={result.monthlyRevenue}
                    format={formatEuro}
                  />
                  <ResultRow
                    label="Zakelijke kosten"
                    value={result.monthlyCosts}
                    format={(v) => `− ${formatEuro(v)}`}
                    valueClassName="text-rose-300"
                  />
                </ResultRows>

                <ResultActions>
                  {annualFromProfile ? (
                    <div className="rounded-xl bg-white/[0.05] px-4 py-3 text-sm text-white/80 ring-1 ring-inset ring-white/10">
                      <p className="text-xs text-white/50">
                        {formatEuro(parseAmount(rateInput) || 0)} × {hoursWeekInput} uur × {weeksPerYear} weken
                      </p>
                      <p className="mt-1 font-medium text-white">
                        Potentiële jaaromzet {formatEuro(annualFromProfile)}
                      </p>
                    </div>
                  ) : null}
                  <SaveToBusiness hint="dit als jaardoel te zetten">
                    <SaveBusinessButton onClick={handleSaveGoal} disabled={savingGoal || !annualFromProfile}>
                      Gebruik als basis voor mijn omzetdoel
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
                Vul je uurtarief en factureerbare uren in om je inkomen te berekenen.
              </ResultEmpty>
            )}
          </ResultPanel>
        </div>
      </ToolGrid>

      <RelatedLink href="/tools/uurtarief-naar-inkomen">
        <span className="text-ember" aria-hidden>
          ←
        </span>{' '}
        Meer uitleg over uurtarief naar inkomen
      </RelatedLink>
    </CalculatorPage>
  );
}
