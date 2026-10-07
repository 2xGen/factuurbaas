'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Copy, Download, FileText, Receipt, Wallet } from 'lucide-react';
import { cn } from '@/lib/utils';
import { DisplayHeading } from '@/components/site/editorial';
import { Stagger, staggerItem } from '@/components/landing/page/motion';
import {
  AffixInput,
  CalculatorPage,
  FieldLabel,
  ResultActions,
  ResultEmpty,
  ResultHero,
  ResultPanel,
  ResultRow,
  ResultRows,
  Segmented,
  ToolCard,
  ToolGrid,
  fieldInputClass,
  resultButton,
} from '@/components/tools/calculatorUi';
import {
  BTW_EXAMPLES,
  BTW_PRESETS,
  QUICK_AMOUNTS,
  calculateBtw,
  formatEuro,
  parseAmount,
} from '@/lib/btwCalculator';
import { saveInvoicePrefill } from '@/lib/invoicePrefill';
import { saveMoneyPrefill } from '@/lib/moneyPrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

function downloadResultPdf(result, mode) {
  import('jspdf').then(({ jsPDF }) => {
    const doc = new jsPDF();
    const title = mode === 'add' ? 'BTW toevoegen' : 'BTW uit bedrag halen';

    doc.setFontSize(16);
    doc.text('BTW Berekening', 20, 24);
    doc.setFontSize(10);
    doc.setTextColor(100);
    doc.text('FactuurBaas.nl', 20, 32);
    doc.setTextColor(0);

    doc.setFontSize(12);
    doc.text(title, 20, 48);
    doc.text(`BTW-tarief: ${result.rate}%`, 20, 58);

    let y = 74;
    const rows =
      mode === 'add'
        ? [
            ['Bedrag excl. btw', formatEuro(result.excl)],
            [`BTW (${result.rate}%)`, formatEuro(result.btw)],
            ['Totaal incl. btw', formatEuro(result.incl)],
          ]
        : [
            ['Bedrag incl. btw', formatEuro(result.incl)],
            [`BTW (${result.rate}%)`, formatEuro(result.btw)],
            ['Bedrag excl. btw', formatEuro(result.excl)],
          ];

    rows.forEach(([label, value]) => {
      doc.text(label, 20, y);
      doc.text(value, 120, y);
      y += 12;
    });

    doc.save('btw-berekening-factuurbaas.pdf');
  });
}

const MODE_OPTIONS = [
  { value: 'add', label: 'BTW toevoegen aan een bedrag' },
  { value: 'remove', label: 'BTW uit een bedrag halen' },
];

export default function BtwCalculator() {
  const router = useRouter();
  const { toast } = useToast();
  const [mode, setMode] = useState('add');
  const [amountInput, setAmountInput] = useState('');
  const [taxPreset, setTaxPreset] = useState(21);
  const [customRate, setCustomRate] = useState('');

  const amount = parseAmount(amountInput);
  const rate = taxPreset === 'custom' ? parseAmount(customRate) ?? 0 : taxPreset;

  const result = useMemo(() => {
    if (amount === null || amount <= 0) return null;
    return calculateBtw({ amount, rate, mode });
  }, [amount, rate, mode]);

  const calculationFingerprint = result ? `${mode}-${amount}-${rate}` : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.btw, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!result) return '';
    if (mode === 'add') {
      return `Bedrag excl. btw: ${formatEuro(result.excl)}\nBTW (${result.rate}%): ${formatEuro(result.btw)}\nTotaal incl. btw: ${formatEuro(result.incl)}`;
    }
    return `Bedrag incl. btw: ${formatEuro(result.incl)}\nBTW (${result.rate}%): ${formatEuro(result.btw)}\nBedrag excl. btw: ${formatEuro(result.excl)}`;
  }, [result, mode]);

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
    saveInvoicePrefill({
      amountExcl: Math.round(result.excl * 100) / 100,
      taxRate: result.rate,
      itemName: 'Dienst / product',
    });
    router.push('/create-invoice');
  }, [result, router]);

  const handleAddMoney = useCallback(
    (kind) => {
      if (!result) return;
      saveMoneyPrefill({
        kind,
        description: kind === 'income' ? 'Verkoop' : 'Uitgave',
        amountExcl: Math.round(result.excl * 100) / 100,
        amountIncl: Math.round(result.incl * 100) / 100,
        vatRate: result.rate,
      });
      router.push(kind === 'income' ? '/inkomsten' : '/uitgaven');
    },
    [result, router]
  );

  const applyExample = (example) => {
    setMode(example.mode);
    setAmountInput(String(example.amount));
    setTaxPreset(example.rate);
    setCustomRate('');
  };

  const taxOptions = [...BTW_PRESETS, { value: 'custom', label: 'Eigen percentage' }];

  return (
    <CalculatorPage
      breadcrumbLabel="BTW calculator"
      title={
        <>
          BTW <em>berekenen</em>
        </>
      }
      lead="Bereken direct BTW toevoegen of BTW uit een bedrag halen. Gratis, geen account."
    >
      <div className="space-y-20 sm:space-y-24">
        <section id="calculator" className="scroll-mt-24">
          <ToolGrid>
            <ToolCard title="Bereken BTW" description="Vul een bedrag en BTW-tarief in.">
              <div className="space-y-7">
                <div>
                  <FieldLabel>Ik wil...</FieldLabel>
                  <Segmented
                    name="btwMode"
                    ariaLabel="Ik wil..."
                    layoutId="btw-mode-pill"
                    options={MODE_OPTIONS}
                    value={mode}
                    onChange={setMode}
                    stackOnMobile
                  />
                </div>

                <div>
                  <FieldLabel htmlFor="btw-amount">Bedrag</FieldLabel>
                  <AffixInput
                    id="btw-amount"
                    prefix="€"
                    placeholder="0,00"
                    value={amountInput}
                    onChange={setAmountInput}
                  />
                  <div className="mt-4 flex flex-wrap items-center gap-2">
                    <p className="mr-1 text-xs text-ink-400">Snelle keuzes:</p>
                    {QUICK_AMOUNTS.map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setAmountInput(String(value))}
                        className={cn(
                          'rounded-full border px-3 py-1 text-sm font-medium tabular transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-1',
                          amount === value
                            ? 'border-ink bg-ink text-white'
                            : 'border-ink/[0.12] bg-paper-50 text-ink-700 hover:border-ink/30 hover:text-ink'
                        )}
                      >
                        €{value}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <FieldLabel>BTW percentage</FieldLabel>
                  <Segmented
                    name="taxPreset"
                    ariaLabel="BTW percentage"
                    layoutId="btw-rate-pill"
                    options={taxOptions}
                    value={taxPreset}
                    onChange={setTaxPreset}
                  />
                  {taxPreset === 'custom' && (
                    <motion.div
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-3 max-w-[180px]"
                    >
                      <div className="relative">
                        <Input
                          type="text"
                          inputMode="decimal"
                          placeholder="Bijv. 13"
                          aria-label="Eigen percentage"
                          value={customRate}
                          onChange={(e) => setCustomRate(e.target.value)}
                          className={cn(fieldInputClass, 'h-11 pr-9 text-base')}
                        />
                        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400">
                          %
                        </span>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            </ToolCard>

            <div className="lg:sticky lg:top-[calc(var(--header-height,5rem)+1.5rem)]">
              <ResultPanel titleAs="h3">
                {result ? (
                  <>
                    <ResultHero
                      label={mode === 'add' ? 'Totaal inclusief BTW' : 'Bedrag exclusief BTW'}
                      value={mode === 'add' ? result.incl : result.excl}
                      format={formatEuro}
                    />
                    <ResultRows>
                      <ResultRow
                        label={mode === 'add' ? 'Bedrag exclusief BTW' : 'Bedrag inclusief BTW'}
                        value={mode === 'add' ? result.excl : result.incl}
                        format={formatEuro}
                      />
                      <ResultRow label={`BTW (${result.rate}%)`} value={result.btw} format={formatEuro} />
                    </ResultRows>

                    <ResultActions>
                      <button type="button" className={resultButton.primary} onClick={handleMakeInvoice}>
                        <FileText className="h-4 w-4" aria-hidden />
                        Gebruik in nieuwe factuur
                      </button>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <button
                          type="button"
                          className={resultButton.secondary}
                          onClick={() => handleAddMoney('income')}
                        >
                          <Wallet className="h-4 w-4" aria-hidden />
                          Voeg toe als inkomst
                        </button>
                        <button
                          type="button"
                          className={resultButton.secondary}
                          onClick={() => handleAddMoney('expense')}
                        >
                          <Receipt className="h-4 w-4" aria-hidden />
                          Voeg toe als uitgave
                        </button>
                      </div>
                      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                        <button type="button" className={resultButton.secondary} onClick={handleCopy}>
                          <Copy className="h-4 w-4" aria-hidden />
                          Kopieer resultaat
                        </button>
                        <button
                          type="button"
                          className={resultButton.secondary}
                          onClick={() => downloadResultPdf(result, mode)}
                        >
                          <Download className="h-4 w-4" aria-hidden />
                          Download PDF
                        </button>
                      </div>
                    </ResultActions>
                  </>
                ) : (
                  <ResultEmpty>Vul een bedrag in om direct het btw-resultaat te zien.</ResultEmpty>
                )}
              </ResultPanel>
            </div>
          </ToolGrid>
        </section>

        <section>
          <DisplayHeading size="md">Voorbeelden</DisplayHeading>
          <p className="mt-3 text-ink-500">Klik op een voorbeeld om het direct in de calculator te laden.</p>
          <Stagger className="mt-8 grid gap-4 sm:grid-cols-2">
            {BTW_EXAMPLES.map((example) => {
              const ex = calculateBtw({
                amount: example.amount,
                rate: example.rate,
                mode: example.mode,
              });
              return (
                <motion.button
                  key={example.title}
                  variants={staggerItem}
                  type="button"
                  onClick={() => applyExample(example)}
                  className="group rounded-2xl border border-ink/[0.08] bg-white p-5 text-left shadow-paper transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 sm:p-6"
                >
                  <p className="flex items-start justify-between gap-3 font-display text-lg leading-snug text-ink">
                    {example.title}
                    <span
                      className="mt-1 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-0.5"
                      aria-hidden
                    >
                      →
                    </span>
                  </p>
                  <div className="mt-5 grid grid-cols-3 divide-x divide-ink/[0.08] rounded-xl bg-paper-100 text-sm">
                    <div className="px-3 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                        {example.mode === 'add' ? 'Excl.' : 'Incl.'}
                      </p>
                      <p className="mt-1 font-medium text-ink tabular">
                        {formatEuro(example.mode === 'add' ? ex.excl : ex.incl)}
                      </p>
                    </div>
                    <div className="px-3 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">BTW</p>
                      <p className="mt-1 font-medium text-ink tabular">{formatEuro(ex.btw)}</p>
                    </div>
                    <div className="px-3 py-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">
                        {example.mode === 'add' ? 'Incl.' : 'Excl.'}
                      </p>
                      <p className="mt-1 font-medium text-ink tabular">
                        {formatEuro(example.mode === 'add' ? ex.incl : ex.excl)}
                      </p>
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </Stagger>
        </section>
      </div>
    </CalculatorPage>
  );
}
