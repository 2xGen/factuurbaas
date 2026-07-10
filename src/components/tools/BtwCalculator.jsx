'use client';

import React, { useMemo, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import {
  Calculator,
  Copy,
  Download,
  FileText,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  BTW_EXAMPLES,
  BTW_PRESETS,
  QUICK_AMOUNTS,
  calculateBtw,
  formatEuro,
  parseAmount,
} from '@/lib/btwCalculator';
import { saveInvoicePrefill } from '@/lib/invoicePrefill';
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

function ResultRow({ label, value, highlight = false }) {
  return (
    <div
      className={cn(
        'flex items-center justify-between gap-4 py-2.5',
        highlight && 'border-t border-slate-200 pt-3 font-bold text-deep-blue'
      )}
    >
      <span className={highlight ? 'text-deep-blue' : 'text-slate-600'}>{label}</span>
      <span className={highlight ? 'text-lg text-deep-blue' : 'font-medium text-slate-900'}>
        {value}
      </span>
    </div>
  );
}

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

  const applyExample = (example) => {
    setMode(example.mode);
    setAmountInput(String(example.amount));
    setTaxPreset(example.rate);
    setCustomRate('');
  };

  return (
    <div className="space-y-14 sm:space-y-16">
      <section id="calculator" className="scroll-mt-24">
        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <div className="lg:col-span-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <Calculator className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-bold text-deep-blue">Bereken BTW</h2>
                <p className="text-sm text-slate-500">Vul een bedrag en BTW-tarief in.</p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">Ik wil...</p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { value: 'add', label: 'BTW toevoegen aan een bedrag' },
                    { value: 'remove', label: 'BTW uit een bedrag halen' },
                  ].map((opt) => (
                    <label
                      key={opt.value}
                      className={cn(
                        'flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors',
                        mode === opt.value
                          ? 'border-blue-500 bg-blue-50/60'
                          : 'border-slate-200 hover:border-slate-300'
                      )}
                    >
                      <input
                        type="radio"
                        name="btwMode"
                        checked={mode === opt.value}
                        onChange={() => setMode(opt.value)}
                        className="mt-1 h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm font-medium text-slate-800">{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label htmlFor="btw-amount" className="mb-2 block text-sm font-medium text-slate-700">
                  Bedrag
                </label>
                <div className="relative">
                  <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                    €
                  </span>
                  <Input
                    id="btw-amount"
                    type="text"
                    inputMode="decimal"
                    placeholder="0,00"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    className="h-12 pl-9 text-lg"
                  />
                </div>
                <p className="mb-2 text-xs font-medium text-slate-500">Snelle keuzes:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_AMOUNTS.map((value) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setAmountInput(String(value))}
                      className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                    >
                      €{value}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium text-slate-700">BTW percentage</p>
                <div className="flex flex-wrap gap-3">
                  {BTW_PRESETS.map((preset) => (
                    <label
                      key={preset.value}
                      className={cn(
                        'flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                        taxPreset === preset.value
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-slate-200 text-slate-700 hover:border-slate-300'
                      )}
                    >
                      <input
                        type="radio"
                        name="taxPreset"
                        checked={taxPreset === preset.value}
                        onChange={() => setTaxPreset(preset.value)}
                        className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                      {preset.label}
                    </label>
                  ))}
                  <label
                    className={cn(
                      'flex cursor-pointer items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors',
                      taxPreset === 'custom'
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-slate-200 text-slate-700 hover:border-slate-300'
                    )}
                  >
                    <input
                      type="radio"
                      name="taxPreset"
                      checked={taxPreset === 'custom'}
                      onChange={() => setTaxPreset('custom')}
                      className="h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    Eigen percentage
                  </label>
                </div>
                {taxPreset === 'custom' && (
                  <div className="mt-3 max-w-[160px]">
                    <Input
                      type="text"
                      inputMode="decimal"
                      placeholder="Bijv. 13"
                      value={customRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      className="h-10"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-28 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              <h3 className="font-heading text-lg font-bold text-deep-blue">Resultaat</h3>

              {result ? (
                <div className="mt-4">
                  {mode === 'add' ? (
                    <>
                      <ResultRow
                        label="Bedrag exclusief BTW"
                        value={formatEuro(result.excl)}
                      />
                      <ResultRow label={`BTW (${result.rate}%)`} value={formatEuro(result.btw)} />
                      <ResultRow
                        label="Totaal inclusief BTW"
                        value={formatEuro(result.incl)}
                        highlight
                      />
                    </>
                  ) : (
                    <>
                      <ResultRow
                        label="Bedrag inclusief BTW"
                        value={formatEuro(result.incl)}
                      />
                      <ResultRow label={`BTW (${result.rate}%)`} value={formatEuro(result.btw)} />
                      <ResultRow
                        label="Bedrag exclusief BTW"
                        value={formatEuro(result.excl)}
                        highlight
                      />
                    </>
                  )}

                  <div className="mt-6 space-y-2">
                    <Button variant="outline" className="w-full justify-center" onClick={handleCopy}>
                      <Copy className="mr-2 h-4 w-4" />
                      Kopieer resultaat
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full justify-center"
                      onClick={() => downloadResultPdf(result, mode)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button className="w-full justify-center" onClick={handleMakeInvoice}>
                      <FileText className="mr-2 h-4 w-4" />
                      Maak factuur met dit bedrag
                    </Button>
                  </div>
                </div>
              ) : (
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  Vul een bedrag in om direct het btw-resultaat te zien.
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="font-heading text-2xl font-bold text-deep-blue">Voorbeelden</h2>
        <p className="mt-2 text-slate-600">Klik op een voorbeeld om het direct in de calculator te laden.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {BTW_EXAMPLES.map((example) => {
            const ex = calculateBtw({
              amount: example.amount,
              rate: example.rate,
              mode: example.mode,
            });
            return (
              <button
                key={example.title}
                type="button"
                onClick={() => applyExample(example)}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:border-warm-orange/30 hover:shadow-md"
              >
                <p className="font-semibold text-deep-blue">{example.title}</p>
                <div className="mt-4 grid grid-cols-3 gap-3 text-center text-sm">
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">
                      {example.mode === 'add' ? 'Excl.' : 'Incl.'}
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      {formatEuro(example.mode === 'add' ? ex.excl : ex.incl)}
                    </p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">BTW</p>
                    <p className="mt-1 font-bold text-slate-900">{formatEuro(ex.btw)}</p>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-3">
                    <p className="text-xs text-slate-500">
                      {example.mode === 'add' ? 'Incl.' : 'Excl.'}
                    </p>
                    <p className="mt-1 font-bold text-slate-900">
                      {formatEuro(example.mode === 'add' ? ex.incl : ex.excl)}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}
