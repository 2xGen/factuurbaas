'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Copy, Wallet } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import { AnimatedNumber } from '@/components/landing/page/motion';
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
  MARGE_MODES,
  calculateMarginFromMode,
  formatEuro,
  formatPercent,
  parseAmount,
} from '@/lib/margeCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';
import { saveMoneyPrefill } from '@/lib/moneyPrefill';

function MoneyInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {hint && <FieldHint className="-mt-1 mb-2">{hint}</FieldHint>}
      <AffixInput id={id} prefix="€" value={value} onChange={onChange} />
    </div>
  );
}

function PercentInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      {hint && <FieldHint className="-mt-1 mb-2">{hint}</FieldHint>}
      <AffixInput id={id} suffix="%" value={value} onChange={onChange} />
    </div>
  );
}

const formatMargin = (value) => `${formatPercent(value)}%`;

export default function MargeCalculator() {
  const router = useRouter();
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

  const handleAddIncome = useCallback(() => {
    if (!result) return;
    saveMoneyPrefill({
      kind: 'income',
      description: 'Verkoop',
      amountExcl: Math.round(result.salePrice * 100) / 100,
      vatRate: 21,
    });
    router.push('/inkomsten');
  }, [result, router]);

  const emptyMessage =
    mode === 'both-prices'
      ? 'Vul een inkoop- en verkoopprijs in om je marge te berekenen.'
      : mode === 'from-purchase'
        ? 'Vul inkoopprijs en gewenste marge % in om je verkoopprijs te berekenen.'
        : 'Vul verkoopprijs en gewenste marge % in om je inkoopprijs te berekenen.';

  return (
    <CalculatorPage
      breadcrumbLabel="Marge calculator"
      title={
        <>
          Marge <em>calculator</em>
        </>
      }
      lead={
        <p>
          Bereken winst en marge op basis van prijzen, of bepaal je verkoop- of inkoopprijs met een
          gewenste marge %.
        </p>
      }
    >
      <ToolGrid>
        <ToolCard title="Wat wil je berekenen?" description="Kies een berekeningsmethode.">
          <div role="radiogroup" aria-label="Wat wil je berekenen?" className="mb-8 grid gap-2.5 sm:grid-cols-3">
            {MARGE_MODES.map((opt) => {
              const active = mode === opt.value;
              return (
                <label
                  key={opt.value}
                  className={cn(
                    'relative flex cursor-pointer flex-col rounded-xl border p-4 transition-colors',
                    active
                      ? 'border-ink bg-ink text-white shadow-[0_10px_22px_-12px_rgba(6,26,48,0.7)]'
                      : 'border-ink/[0.12] bg-white text-ink hover:border-ink/30'
                  )}
                >
                  <input
                    type="radio"
                    name="margeMode"
                    checked={active}
                    onChange={() => setMode(opt.value)}
                    className="peer sr-only"
                  />
                  <span
                    className="pointer-events-none absolute inset-0 rounded-xl ring-ember ring-offset-1 peer-focus-visible:ring-2"
                    aria-hidden
                  />
                  <span className="text-sm font-medium">{opt.label}</span>
                  <span className={cn('mt-1 text-xs leading-relaxed', active ? 'text-white/60' : 'text-ink-400')}>
                    {opt.hint}
                  </span>
                </label>
              );
            })}
          </div>

          <div className="space-y-6 border-t border-dashed border-ink/10 pt-7">
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
        </ToolCard>

        <div className="lg:sticky lg:top-[calc(var(--header-height,5rem)+1.5rem)]">
          <ResultPanel
            footnote={
              <p className="font-mono text-[11px] tracking-[0.02em]">
                {mode === 'from-purchase'
                  ? 'Verkoopprijs = inkoopprijs ÷ (1 − marge %). Marge onder 100%.'
                  : mode === 'from-sale'
                    ? 'Inkoopprijs = verkoopprijs × (1 − marge %).'
                    : 'Marge % = (winst ÷ verkoopprijs) × 100'}
              </p>
            }
          >
            {result ? (
              <>
                {mode !== 'both-prices' && (
                  <div className="mt-6 rounded-xl bg-white/[0.05] px-4 py-4 ring-1 ring-inset ring-white/10">
                    <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/50">
                      {mode === 'from-purchase' ? 'Berekende verkoopprijs' : 'Berekende inkoopprijs'}
                    </p>
                    <AnimatedNumber
                      value={mode === 'from-purchase' ? result.salePrice : result.purchasePrice}
                      format={formatEuro}
                      className="mt-1.5 block font-display text-3xl leading-none text-white tabular"
                    />
                    <p className="mt-2 text-xs text-white/45">{result.formulaDetail}</p>
                  </div>
                )}

                <ResultHero label="Winstmarge" value={result.marginPercent} format={formatMargin} sub="van verkoopprijs" />

                <ResultRows>
                  <ResultRow label="Inkoopprijs" value={result.purchasePrice} format={formatEuro} />
                  <ResultRow label="Verkoopprijs" value={result.salePrice} format={formatEuro} />
                  <ResultRow
                    label="Winst"
                    value={result.profit}
                    format={formatEuro}
                    valueClassName={result.profit < 0 ? 'text-rose-300' : 'text-emerald-300'}
                  />
                </ResultRows>
                {mode === 'both-prices' && (
                  <p className="mt-3 text-xs text-white/45">{result.formulaDetail}</p>
                )}

                <ResultActions>
                  <button type="button" onClick={handleAddIncome} className={resultButton.primary}>
                    <Wallet className="h-4 w-4" aria-hidden />
                    Voeg verkoop toe aan inkomsten
                  </button>
                  <button type="button" onClick={handleCopy} className={resultButton.secondary}>
                    <Copy className="h-4 w-4" aria-hidden />
                    Kopieer resultaat
                  </button>
                </ResultActions>
              </>
            ) : (
              <ResultEmpty>{emptyMessage}</ResultEmpty>
            )}
          </ResultPanel>
        </div>
      </ToolGrid>

      <RelatedLink href="/tools/marge-calculator">
        <span className="text-ember" aria-hidden>
          ←
        </span>{' '}
        Meer uitleg over marge berekenen
      </RelatedLink>
    </CalculatorPage>
  );
}
