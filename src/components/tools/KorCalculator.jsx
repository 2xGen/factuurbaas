'use client';

import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Copy, Info } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { AnimatedNumber, EASE_OUT } from '@/components/landing/page/motion';
import {
  AffixInput,
  CalculatorPage,
  CheckboxRow,
  FieldHint,
  FieldLabel,
  RelatedLink,
  ResultActions,
  ResultEmpty,
  ResultPanel,
  Segmented,
  ToolCard,
  ToolGrid,
  resultButton,
} from '@/components/tools/calculatorUi';
import {
  KOR_BELASTINGDIENST_URL,
  KOR_REVENUE_LIMIT,
  MONTHS_PER_YEAR,
  REVENUE_PERIOD_OPTIONS,
  evaluateKor,
  formatEuro,
  parseAmount,
} from '@/lib/korCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchRegisteredYearRevenue } from '@/lib/yearRevenue';

const STATUS_STYLES = {
  eligible: 'bg-emerald-400/10 text-emerald-50 ring-emerald-300/25',
  'near-limit': 'bg-amber-400/10 text-amber-50 ring-amber-300/25',
  'not-eligible': 'bg-rose-400/10 text-rose-50 ring-rose-300/25',
};

const STATUS_DOT = {
  eligible: 'bg-emerald-400',
  'near-limit': 'bg-amber-400',
  'not-eligible': 'bg-rose-400',
};

const STATUS_BAR = {
  eligible: 'bg-emerald-400',
  'near-limit': 'bg-amber-400',
  'not-eligible': 'bg-rose-400',
};

export default function KorCalculator() {
  const { toast } = useToast();
  const { user } = useAuth();
  const reduce = useReducedMotion();
  const [revenuePeriod, setRevenuePeriod] = useState('year');
  const [revenueInput, setRevenueInput] = useState('15000');
  const [mostlyConsumers, setMostlyConsumers] = useState(true);
  const [highVatOnCosts, setHighVatOnCosts] = useState(false);
  const [liveRevenue, setLiveRevenue] = useState(null);
  const year = new Date().getFullYear();

  useEffect(() => {
    if (!user?.id) {
      setLiveRevenue(null);
      return;
    }
    fetchRegisteredYearRevenue(supabase, user.id)
      .then((amount) => {
        setLiveRevenue(amount);
        setRevenuePeriod('year');
        setRevenueInput(String(Math.round(amount * 100) / 100));
      })
      .catch(() => setLiveRevenue(null));
  }, [user?.id]);

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
    liveRevenue != null && revenuePeriod === 'year'
      ? `Geregistreerde omzet in ${year}`
      : revenuePeriod === 'month'
        ? 'Verwachte omzet per maand'
        : 'Verwachte omzet per jaar';

  const liveRemaining =
    liveRevenue != null ? Math.max(0, KOR_REVENUE_LIMIT - liveRevenue) : null;

  const limitProgress = result ? Math.min(100, (result.annualRevenue / result.korLimit) * 100) : 0;

  return (
    <CalculatorPage
      breadcrumbLabel="KOR calculator"
      title={
        <>
          KOR <em>check</em>
        </>
      }
      lead={
        <p>
          Vergelijk je verwachte omzet met de KOR-grens van {formatEuro(KOR_REVENUE_LIMIT)} per
          kalenderjaar. De uitkomst is een indicatie.
        </p>
      }
    >
      <ToolGrid>
        <ToolCard
          title="Jouw situatie"
          description={
            liveRevenue != null
              ? `FactuurBaas vult je omzet in ${year} in. Je kunt het bedrag nog aanpassen.`
              : 'Vul je verwachte omzet in (per jaar of per maand).'
          }
        >
          <div className="space-y-7">
            {liveRevenue != null && (
              <div className="rounded-xl border border-ink/[0.08] bg-paper-100 px-4 py-3.5 text-sm text-ink-700">
                <p>
                  Je geregistreerde omzet in {year}:{' '}
                  <span className="font-medium tabular">{formatEuro(liveRevenue)}</span>
                </p>
                <p className="mt-1">
                  KOR-grens: <span className="tabular">{formatEuro(KOR_REVENUE_LIMIT)}</span>
                  {' · '}
                  Resterend:{' '}
                  <span className="font-medium tabular">{formatEuro(liveRemaining)}</span>
                </p>
              </div>
            )}
            <div>
              <FieldLabel>Omzet invoeren</FieldLabel>
              <Segmented
                name="revenuePeriod"
                ariaLabel="Omzet invoeren"
                layoutId="kor-period-pill"
                options={REVENUE_PERIOD_OPTIONS}
                value={revenuePeriod}
                onChange={handlePeriodChange}
              />
            </div>

            <div>
              <FieldLabel htmlFor="revenue-amount">{revenueLabel}</FieldLabel>
              <AffixInput
                id="revenue-amount"
                prefix="€"
                value={revenueInput}
                onChange={setRevenueInput}
              />
              <div className="mt-3 space-y-1.5">
                {revenuePeriod === 'month' && parseAmount(revenueInput) !== null && (
                  <FieldHint className="tabular">
                    Jaaromzet: {formatEuro(parseAmount(revenueInput) * MONTHS_PER_YEAR)} ({formatEuro(parseAmount(revenueInput))} × 12 maanden)
                  </FieldHint>
                )}
                <FieldHint className="tabular">
                  KOR-grens: maximaal {formatEuro(KOR_REVENUE_LIMIT)} omzet per kalenderjaar
                  {revenuePeriod === 'month' &&
                    ` (≈ ${formatEuro(KOR_REVENUE_LIMIT / MONTHS_PER_YEAR)} per maand)`}
                  .
                </FieldHint>
              </div>
            </div>

            <div className="space-y-3.5 rounded-xl border border-ink/[0.06] bg-paper-100 p-4 sm:p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500">
                Optioneel — voor een betere inschatting
              </p>
              <CheckboxRow checked={mostlyConsumers} onChange={setMostlyConsumers}>
                Ik lever vooral aan particulieren (consumenten)
              </CheckboxRow>
              <CheckboxRow checked={highVatOnCosts} onChange={setHighVatOnCosts}>
                Ik heb relatief veel btw op zakelijke kosten (inkopen, investeringen)
              </CheckboxRow>
            </div>
          </div>
        </ToolCard>

        <div className="lg:sticky lg:top-[calc(var(--header-height,5rem)+1.5rem)]">
          <ResultPanel
            footnote={
              <p>
                Dit is een indicatie, geen fiscaal advies. Check altijd de actuele regels bij de{' '}
                <a href={KOR_BELASTINGDIENST_URL} target="_blank" rel="noopener noreferrer">
                  Belastingdienst
                </a>
                .
              </p>
            }
          >
            {result ? (
              <div className="mt-6 space-y-5">
                {revenuePeriod === 'month' && (
                  <div className="rounded-xl bg-white/[0.04] px-4 py-3 text-sm text-white/65 ring-1 ring-inset ring-white/10">
                    <p>
                      Maandomzet:{' '}
                      <span className="font-medium text-white tabular">{formatEuro(result.monthlyRevenue)}</span>
                    </p>
                    <p className="mt-1">
                      Jaaromzet:{' '}
                      <span className="font-medium text-white tabular">{formatEuro(result.annualRevenue)}</span>
                      <span className="text-white/45"> ({formatEuro(result.monthlyRevenue)} × 12)</span>
                    </p>
                  </div>
                )}

                <div>
                  <div className="flex items-end justify-between gap-4">
                    <AnimatedNumber
                      value={result.annualRevenue}
                      format={formatEuro}
                      className="font-display text-[2.6rem] leading-none tracking-[-0.03em] text-white tabular sm:text-[3.25rem]"
                    />
                    <span className="pb-1 text-right font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                      KOR-grens
                      <span className="mt-1 block text-sm normal-case tracking-normal text-white/70 tabular">
                        {formatEuro(result.korLimit)}
                      </span>
                    </span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10" aria-hidden>
                    <div
                      className={cn(
                        'h-full rounded-full transition-[width,background-color] duration-700 ease-out',
                        STATUS_BAR[result.status]
                      )}
                      style={{ width: `${limitProgress}%` }}
                    />
                  </div>
                </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={result.status}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    className={cn('rounded-xl px-4 py-4 ring-1 ring-inset sm:px-5', STATUS_STYLES[result.status])}
                  >
                    <p className="flex items-center gap-2.5 font-display text-xl leading-snug">
                      <span className={cn('h-2 w-2 shrink-0 rounded-full', STATUS_DOT[result.status])} aria-hidden />
                      {result.headline}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed opacity-80">{result.summary}</p>
                  </motion.div>
                </AnimatePresence>

                {result.status !== 'not-eligible' && (
                  <p className="text-sm text-white/65 tabular">
                    Nog {formatEuro(result.remainingUnderLimit)} onder de KOR-grens dit jaar
                    {revenuePeriod === 'month' && (
                      <> (≈ {formatEuro(result.remainingUnderLimit / MONTHS_PER_YEAR)} per maand)</>
                    )}
                    .
                  </p>
                )}

                <div className="border-t border-white/10 pt-5">
                  <div className="mb-4 flex items-center gap-2">
                    <Info className="h-4 w-4 text-ember-100" aria-hidden />
                    <h3 className="text-sm font-medium text-white">Waarom dit resultaat?</h3>
                  </div>
                  <ol className="space-y-4">
                    {result.explanationSteps.map((step) => (
                      <li key={step.title} className="border-l border-white/15 pl-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
                          {step.title}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed text-white/70">{step.text}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                <ResultActions>
                  <button type="button" onClick={handleCopy} className={resultButton.secondary}>
                    <Copy className="h-4 w-4" aria-hidden />
                    Kopieer resultaat
                  </button>
                </ResultActions>
              </div>
            ) : (
              <ResultEmpty>Vul je verwachte omzet in om het resultaat te zien.</ResultEmpty>
            )}
          </ResultPanel>
        </div>
      </ToolGrid>

      <RelatedLink href="/tools/kor-calculator">
        <span className="text-ember" aria-hidden>
          ←
        </span>{' '}
        Meer uitleg over de kleineondernemersregeling
      </RelatedLink>
    </CalculatorPage>
  );
}
