'use client';

import React, { useMemo, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Copy, FileText, Hash, Wrench } from 'lucide-react';
import {
  DEFAULT_PREFIX,
  formatInvoiceNumber,
  parseStartNumber,
} from '@/lib/factuurnummerGenerator';
import { saveFactuurnummerPrefill } from '@/lib/invoicePrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { PageHeader, btn } from '@/components/site/editorial';
import { EASE_OUT } from '@/components/landing/page/motion';

const labelClass = 'mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500';
const inputClass =
  'h-12 rounded-xl border-ink/15 bg-white px-4 text-lg text-ink tabular transition-colors placeholder:text-ink-400 hover:border-ink/30 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-0';

export default function FactuurnummerGenerator() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const currentYear = new Date().getFullYear();

  const [yearInput, setYearInput] = useState(String(currentYear));
  const [prefixInput, setPrefixInput] = useState(DEFAULT_PREFIX);
  const [numberInput, setNumberInput] = useState('001');

  const invoiceNumber = useMemo(
    () =>
      formatInvoiceNumber({
        year: yearInput,
        prefix: prefixInput,
        startNumber: numberInput,
      }),
    [yearInput, prefixInput, numberInput]
  );

  const generationFingerprint = invoiceNumber
    ? `${yearInput}-${prefixInput}-${numberInput}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.factuurnummer, generationFingerprint);

  const handleCopy = useCallback(async () => {
    if (!invoiceNumber) return;
    try {
      await navigator.clipboard.writeText(invoiceNumber);
      toast({ title: 'Gekopieerd', description: 'Het factuurnummer staat op je klembord.' });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Probeer het opnieuw of kopieer handmatig.',
        variant: 'destructive',
      });
    }
  }, [invoiceNumber, toast]);

  const handleMakeInvoice = useCallback(() => {
    if (user) {
      router.push('/create-invoice');
      return;
    }
    if (!invoiceNumber) return;
    saveFactuurnummerPrefill({ invoiceNumber });
    router.push('/create-invoice');
  }, [invoiceNumber, router, user]);

  return (
    <MotionConfig reducedMotion="user">
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Factuurnummer generator' },
        ]}
        eyebrow="Gratis tool"
        eyebrowIcon={Wrench}
        title={
          <>
            Factuurnummer <em>generator</em>
          </>
        }
        lead={<p>Genereer een professioneel, uniek factuurnummer voor je volgende factuur.</p>}
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      />

      <section className="border-t border-ink/[0.06] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          {user ? (
            <div className="mb-6 rounded-2xl border border-ink/[0.08] bg-white px-5 py-4 text-sm text-ink-700 shadow-paper sm:px-6">
              <p className="font-medium text-ink">Je hoeft geen factuurnummers te genereren.</p>
              <p className="mt-1 text-ink-500">
                FactuurBaas houdt de nummering automatisch voor je bij. Het volgende nummer volgt op
                je laatste factuur.
              </p>
              <Link href="/create-invoice" className={cn(btn.primary, 'mt-3 inline-flex')}>
                Maak factuur
              </Link>
            </div>
          ) : (
            <p className="mb-6 text-sm text-ink-500">
              Heb je een FactuurBaas-account? Dan hoef je geen factuurnummers te genereren.{' '}
              <Link href="/login?next=/create-invoice" className="font-medium text-ink underline underline-offset-2">
                Maak gratis een account
              </Link>{' '}
              — FactuurBaas houdt de nummering automatisch voor je bij.
            </p>
          )}
          <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div
              className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window motion-safe:animate-rise sm:p-8 lg:col-span-7"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center gap-3 border-b border-ink/[0.07] pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Hash className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-xl leading-tight text-ink">Instellingen</h2>
                  <p className="mt-0.5 text-sm text-ink-500">Kies jaar, voorvoegsel en startnummer.</p>
                </div>
              </div>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="invoice-year" className={labelClass}>
                    Jaar
                  </label>
                  <Input
                    id="invoice-year"
                    type="text"
                    inputMode="numeric"
                    value={yearInput}
                    onChange={(e) => setYearInput(e.target.value)}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="invoice-prefix" className={labelClass}>
                    Voorvoegsel
                  </label>
                  <Input
                    id="invoice-prefix"
                    type="text"
                    placeholder="FACT"
                    value={prefixInput}
                    onChange={(e) => setPrefixInput(e.target.value.toUpperCase())}
                    className={cn(inputClass, 'font-mono tracking-[0.06em]')}
                  />
                  <p className="mt-2 text-xs leading-relaxed text-ink-400">
                    Laat leeg voor alleen jaar-nummer (bijv. 2026-001).
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="start-number" className={labelClass}>
                    Startnummer
                  </label>
                  <Input
                    id="start-number"
                    type="text"
                    inputMode="numeric"
                    value={numberInput}
                    onChange={(e) => setNumberInput(e.target.value)}
                    className={inputClass}
                  />
                </div>
              </div>

              <div className="mt-7 rounded-xl border border-dashed border-ink/15 bg-paper-50 p-4 sm:p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">Voorbeelden</p>
                <ul className="mt-3 flex flex-wrap gap-2 text-sm">
                  {[
                    formatInvoiceNumber({ year: currentYear, prefix: '', startNumber: 1 }),
                    formatInvoiceNumber({ year: currentYear, prefix: 'FACT', startNumber: 1 }),
                    formatInvoiceNumber({ year: currentYear, prefix: 'INV', startNumber: 1 }),
                  ].map((example) => (
                    <li
                      key={example}
                      className="rounded-full border border-ink/10 bg-white px-3 py-1 font-mono text-[13px] text-ink-700 tabular"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="motion-safe:animate-rise lg:col-span-5" style={{ animationDelay: '280ms' }}>
              <div className="grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white shadow-window sm:p-7 lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
                <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
                <div
                  className="pointer-events-none absolute -right-28 -top-28 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.3),transparent_65%)]"
                  aria-hidden
                />
                <div className="flex items-center justify-between gap-3">
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">Resultaat</h2>
                  <span className="h-1.5 w-1.5 rounded-full bg-ember" aria-hidden />
                </div>

                {invoiceNumber ? (
                  <div className="mt-6">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-6">
                      <p className="text-sm text-white/60">Jouw factuurnummer</p>
                      <div aria-live="polite" className="mt-2 min-h-[2.75rem]">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.p
                            key={invoiceNumber}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.2, ease: EASE_OUT }}
                            className="break-all font-display text-[2.2rem] leading-[1.1] tracking-[-0.02em] tabular sm:text-[2.6rem]"
                          >
                            {invoiceNumber}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col gap-2.5">
                      <button type="button" onClick={handleMakeInvoice} className={cn(btn.light, 'w-full')}>
                        <FileText className="h-4 w-4" aria-hidden />
                        Maak factuur
                      </button>
                      <button type="button" onClick={handleCopy} className={cn(btn.ghostDark, 'w-full')}>
                        <Copy className="h-4 w-4" aria-hidden />
                        Kopieer nummer
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-white/60">Vul een geldig jaar en startnummer in.</p>
                )}

                <p className="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-t border-white/10 pt-4 text-sm text-white/60">
                  <span>Volgend nummer:</span>{' '}
                  <span className="font-mono text-[13px] text-white tabular">
                    {formatInvoiceNumber({
                      year: yearInput,
                      prefix: prefixInput,
                      startNumber: (parseStartNumber(numberInput) ?? 0) + 1,
                    }) || '—'}
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-6">
            <Link href="/tools/factuurnummer-generator" className={btn.link}>
              ← Meer uitleg over factuurnummers
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
