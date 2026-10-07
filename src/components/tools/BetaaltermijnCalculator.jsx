'use client';

import React, { useMemo, useState, useCallback, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { Calendar, Copy, FileText, Wrench } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { cn } from '@/lib/utils';
import {
  PAYMENT_TERM_PRESETS,
  calculateDueDateFromTerm,
  formatDutchDate,
  parsePaymentDays,
} from '@/lib/betaaltermijnCalculator';
import { saveBetaaltermijnPrefill } from '@/lib/invoicePrefill';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchBusinessSettings, savePaymentTermDefault } from '@/lib/businessSettings';
import SaveToBusiness, { SaveBusinessButton } from '@/components/tools/SaveToBusiness';
import { PageHeader, btn } from '@/components/site/editorial';
import { AnimatedNumber, EASE_OUT } from '@/components/landing/page/motion';

const labelClass = 'mb-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500';
const inputClass =
  'h-12 rounded-xl border-ink/15 bg-white px-4 text-lg text-ink tabular transition-colors placeholder:text-ink-400 hover:border-ink/30 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-0';

function toDateInputValue(date) {
  if (!date) return '';
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export default function BetaaltermijnCalculator() {
  const router = useRouter();
  const { toast } = useToast();
  const { user } = useAuth();
  const [invoiceDateInput, setInvoiceDateInput] = useState(toDateInputValue(new Date()));
  const [daysInput, setDaysInput] = useState('14');
  const [savingTerm, setSavingTerm] = useState(false);

  useEffect(() => {
    if (!user?.id) return;
    fetchBusinessSettings(supabase, user.id)
      .then((s) => {
        if (s.defaultPaymentTermDays) setDaysInput(String(s.defaultPaymentTermDays));
      })
      .catch(() => {});
  }, [user?.id]);

  const dueDate = useMemo(
    () => calculateDueDateFromTerm(invoiceDateInput, daysInput),
    [invoiceDateInput, daysInput]
  );

  const calculationFingerprint = dueDate ? `${invoiceDateInput}-${daysInput}` : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.betaaltermijn, calculationFingerprint);

  const resultText = useMemo(() => {
    if (!dueDate) return '';
    const days = parsePaymentDays(daysInput);
    return [
      `Factuurdatum: ${formatDutchDate(new Date(invoiceDateInput))}`,
      `Betalingstermijn: ${days} dagen`,
      `Vervaldatum: ${formatDutchDate(dueDate)}`,
    ].join('\n');
  }, [dueDate, invoiceDateInput, daysInput]);

  const handleCopy = useCallback(async () => {
    if (!resultText) return;
    try {
      await navigator.clipboard.writeText(resultText);
      toast({ title: 'Gekopieerd', description: 'De datums staan op je klembord.' });
    } catch {
      toast({
        title: 'Kopiëren mislukt',
        description: 'Probeer het opnieuw of kopieer handmatig.',
        variant: 'destructive',
      });
    }
  }, [resultText, toast]);

  const handleMakeInvoice = useCallback(() => {
    if (!dueDate) return;
    const days = parsePaymentDays(daysInput);
    saveBetaaltermijnPrefill({
      invoiceDate: invoiceDateInput,
      paymentTermDays: days,
      dueDate: dueDate.toISOString(),
    });
    router.push('/create-invoice');
  }, [dueDate, invoiceDateInput, daysInput, router]);

  const handleSaveDefault = useCallback(async () => {
    const days = parsePaymentDays(daysInput);
    if (!days || !user?.id) return;
    setSavingTerm(true);
    try {
      await savePaymentTermDefault(supabase, user.id, days);
      toast({
        title: 'Standaardtermijn gezet',
        description: `Nieuwe facturen krijgen ${days} dagen.`,
      });
    } catch {
      toast({
        title: 'Opslaan mislukt',
        description: 'Probeer het opnieuw of zet de termijn in je profiel.',
        variant: 'destructive',
      });
    } finally {
      setSavingTerm(false);
    }
  }, [daysInput, user?.id, toast]);

  return (
    <MotionConfig reducedMotion="user">
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Betaaltermijn calculator' },
        ]}
        eyebrow="Gratis tool"
        eyebrowIcon={Wrench}
        title={
          <>
            Betaaltermijn <em>calculator</em>
          </>
        }
        lead={
          <p>Bereken wanneer je factuur betaald moet zijn op basis van factuurdatum en betalingstermijn.</p>
        }
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      />

      <section className="border-t border-ink/[0.06] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div
              className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window motion-safe:animate-rise sm:p-8 lg:col-span-7"
              style={{ animationDelay: '200ms' }}
            >
              <div className="flex items-center gap-3 border-b border-ink/[0.07] pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Calendar className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <h2 className="font-display text-xl leading-tight text-ink">Factuurgegevens</h2>
                  <p className="mt-0.5 text-sm text-ink-500">Wanneer stuur je de factuur en welke termijn hanteer je?</p>
                </div>
              </div>

              <div className="mt-6 space-y-7">
                <div>
                  <label htmlFor="invoice-date" className={labelClass}>
                    Factuurdatum
                  </label>
                  <Input
                    id="invoice-date"
                    type="date"
                    value={invoiceDateInput}
                    onChange={(e) => setInvoiceDateInput(e.target.value)}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="payment-days" className={labelClass}>
                    Betalingstermijn
                  </label>
                  <div className="mb-3 flex flex-wrap gap-2">
                    {PAYMENT_TERM_PRESETS.map((preset) => {
                      const active = daysInput === String(preset.value);
                      return (
                        <button
                          key={preset.value}
                          type="button"
                          aria-pressed={active}
                          onClick={() => setDaysInput(String(preset.value))}
                          className={cn(
                            'relative rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
                            active
                              ? 'border-ink text-white'
                              : 'border-ink/15 bg-white text-ink-500 hover:border-ink/30 hover:text-ink'
                          )}
                        >
                          {active && (
                            <motion.span
                              layoutId="betaaltermijn-preset"
                              className="absolute inset-0 rounded-full bg-ink"
                              transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                            />
                          )}
                          <span className="relative">{preset.label}</span>
                        </button>
                      );
                    })}
                  </div>
                  <div className="relative max-w-[180px]">
                    <Input
                      id="payment-days"
                      type="text"
                      inputMode="numeric"
                      value={daysInput}
                      onChange={(e) => setDaysInput(e.target.value)}
                      className={cn(inputClass, 'pr-16')}
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-sm text-ink-400">
                      dagen
                    </span>
                  </div>
                </div>
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

                {dueDate ? (
                  <div className="mt-6">
                    <div className="rounded-xl border border-white/10 bg-white/[0.04] px-5 py-6">
                      <p className="text-sm text-white/60">Vervaldatum</p>
                      <div aria-live="polite" className="mt-2 min-h-[2.5rem]">
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.p
                            key={dueDate.toISOString()}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -8 }}
                            transition={{ duration: 0.25, ease: EASE_OUT }}
                            className="font-display text-[2rem] leading-[1.1] tracking-[-0.02em] sm:text-[2.4rem]"
                          >
                            {formatDutchDate(dueDate)}
                          </motion.p>
                        </AnimatePresence>
                      </div>
                      <p className="mt-2 font-display text-base italic text-ember-100">uiterste betaaldatum</p>
                    </div>

                    <dl className="mt-5 text-sm">
                      <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3">
                        <dt className="text-white/60">Factuurdatum</dt>
                        <dd className="text-right font-medium text-white">
                          {formatDutchDate(new Date(invoiceDateInput))}
                        </dd>
                      </div>
                      <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3">
                        <dt className="text-white/60">Betalingstermijn</dt>
                        <dd className="font-medium text-white tabular">
                          <AnimatedNumber
                            value={parsePaymentDays(daysInput)}
                            format={(v) => `${Math.round(v)} dagen`}
                          />
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 flex flex-col gap-2.5">
                      <SaveToBusiness hint="deze termijn als standaard te bewaren">
                        <SaveBusinessButton
                          onClick={handleSaveDefault}
                          disabled={savingTerm || !parsePaymentDays(daysInput)}
                        >
                          Gebruik {parsePaymentDays(daysInput) || '—'} dagen als mijn standaardtermijn
                        </SaveBusinessButton>
                      </SaveToBusiness>
                      <button type="button" onClick={handleMakeInvoice} className={cn(btn.light, 'w-full')}>
                        <FileText className="h-4 w-4" aria-hidden />
                        Maak factuur met deze datum
                      </button>
                      <button type="button" onClick={handleCopy} className={cn(btn.ghostDark, 'w-full')}>
                        <Copy className="h-4 w-4" aria-hidden />
                        Kopieer resultaat
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-6 text-sm text-white/60">Vul een factuurdatum en betalingstermijn in.</p>
                )}

                <p className="mt-6 border-t border-white/10 pt-4 font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em] text-white/45">
                  Vervaldatum = factuurdatum + aantal dagen betalingstermijn.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-6">
            <Link href="/tools/betaaltermijn-calculator" className={btn.link}>
              ← Meer uitleg over betaaltermijn berekenen
            </Link>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
