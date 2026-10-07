'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft, Home } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  calculateMaxHypotheek,
  formatEuro,
  parseAmount,
} from '@/lib/hypotheekCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';
import { cn } from '@/lib/utils';
import { ArrowIcon, PageHeader, btn } from '@/components/site/editorial';
import { AnimatedNumber } from '@/components/landing/page/motion';

const labelClass = 'mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500';
const inputClass =
  'h-12 rounded-xl border-ink/15 bg-white px-4 text-lg text-ink tabular transition-colors placeholder:text-ink-400 hover:border-ink/30 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-0';

function MoneyInput({ id, label, hint, value, onChange }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {hint && <p className="mb-2.5 text-xs leading-relaxed text-ink-400">{hint}</p>}
      <div className="relative mt-auto">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-ink-400">
          €
        </span>
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={cn(inputClass, 'pl-9')}
          placeholder="0"
        />
      </div>
    </div>
  );
}

export default function HypotheekZzpCalculator() {
  const [inkomen, setInkomen] = useState('');
  const [inkomenPartner, setInkomenPartner] = useState('');
  const [verplichtingen, setVerplichtingen] = useState('');
  const [rente, setRente] = useState('4');

  const result = useMemo(
    () =>
      calculateMaxHypotheek({
        toetsinkomen: parseAmount(inkomen),
        inkomenPartner: parseAmount(inkomenPartner) || 0,
        maandelijkseVerplichtingen: parseAmount(verplichtingen) || 0,
        rentePercent: parseAmount(rente) ?? 4,
      }),
    [inkomen, inkomenPartner, verplichtingen, rente]
  );

  const calculationFingerprint = result
    ? `${result.totaalToetsinkomen}-${result.maandelijkseVerplichtingen}-${result.rentePercent}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.hypotheek, calculationFingerprint, 1500, {
    oncePerVisit: true,
  });

  return (
    <>
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Hypotheek berekenen' },
        ]}
        eyebrow="Gratis calculator"
        eyebrowIcon={Home}
        title={
          <>
            Hypotheek berekenen <em>als zzp&apos;er</em>
          </>
        }
        lead={
          <p>
            Vul je toetsinkomen in en krijg een eerste indicatie van je maximale hypotheek. Dit is
            geen hypotheekadvies of offerte.
          </p>
        }
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      >
        <Link href="/tools/hypotheek-zzp" className={btn.link}>
          <ArrowLeft
            className="h-4 w-4 text-ember transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden
          />
          Terug naar uitleg hypotheek zzp
        </Link>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div
              className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window motion-safe:animate-rise sm:p-8 lg:col-span-7"
              style={{ animationDelay: '260ms' }}
            >
              <div className="flex items-center gap-3 border-b border-ink/[0.07] pb-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                  <Calculator className="h-4 w-4" aria-hidden />
                </span>
                <p className="font-display text-xl leading-tight text-ink">Jouw gegevens</p>
              </div>

              <div className="mt-6 grid gap-x-5 gap-y-7 sm:grid-cols-2">
                <MoneyInput
                  id="toetsinkomen"
                  label="Jouw toetsinkomen per jaar"
                  hint="Bijvoorbeeld je vastgestelde ondernemersinkomen of winstindicatie."
                  value={inkomen}
                  onChange={setInkomen}
                />
                <MoneyInput
                  id="inkomen-partner"
                  label="Inkomen partner per jaar"
                  hint="Optioneel. Wordt bij jouw toetsinkomen opgeteld."
                  value={inkomenPartner}
                  onChange={setInkomenPartner}
                />
                <MoneyInput
                  id="verplichtingen"
                  label="Maandelijkse verplichtingen"
                  hint="Optioneel: studieschuld, lease, leningen, etc."
                  value={verplichtingen}
                  onChange={setVerplichtingen}
                />
                <div className="flex flex-col">
                  <label htmlFor="rente" className={labelClass}>
                    Rente (indicatief)
                  </label>
                  <p className="mb-2.5 text-xs leading-relaxed text-ink-400">
                    Gebruik een realistische rente voor je berekening.
                  </p>
                  <div className="relative mt-auto">
                    <Input
                      id="rente"
                      type="text"
                      inputMode="decimal"
                      value={rente}
                      onChange={(e) => setRente(e.target.value)}
                      className={cn(inputClass, 'pr-10')}
                    />
                    <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink-400">
                      %
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="motion-safe:animate-rise lg:col-span-5" style={{ animationDelay: '320ms' }}>
              <div className="lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
                <div
                  aria-live="polite"
                  className="grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white shadow-window sm:p-7"
                >
                  <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
                  <div
                    className="pointer-events-none absolute -right-28 -top-28 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.3),transparent_65%)]"
                    aria-hidden
                  />
                  {result ? (
                    <>
                      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                        Indicatie maximale hypotheek
                      </p>
                      <AnimatedNumber
                        value={result.maxHypotheek}
                        format={(v) => formatEuro(v)}
                        className="mt-4 block font-display text-[2.6rem] leading-none tracking-[-0.03em] tabular sm:text-[3.2rem]"
                      />
                      <dl className="mt-7 border-t border-white/10 text-sm">
                        {result.inkomenPartner > 0 && (
                          <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
                            <dt className="text-white/60">Totaal toetsinkomen</dt>
                            <dd className="font-medium text-white tabular">
                              <AnimatedNumber
                                value={result.totaalToetsinkomen}
                                format={(v) => formatEuro(v)}
                              />
                            </dd>
                          </div>
                        )}
                        <div className="flex items-baseline justify-between gap-4 border-b border-white/10 py-3">
                          <dt className="text-white/60">Max. maandlast (indicatief)</dt>
                          <dd className="font-medium text-white tabular">
                            <AnimatedNumber value={result.maxMaandlast} format={(v) => formatEuro(v)} />
                          </dd>
                        </div>
                        <div className="flex items-baseline justify-between gap-4 py-3">
                          <dt className="text-white/60">Gebruikte rente</dt>
                          <dd className="font-medium text-white tabular">{result.rentePercent}%</dd>
                        </div>
                      </dl>
                    </>
                  ) : (
                    <>
                      <p
                        className="font-display text-[2.6rem] leading-none tracking-[-0.03em] text-white/25 sm:text-[3.2rem]"
                        aria-hidden
                      >
                        € —
                      </p>
                      <p className="mt-5 text-white/65">Vul je toetsinkomen in om een indicatie te zien.</p>
                    </>
                  )}
                </div>

                <p className="mt-4 px-1 text-xs leading-relaxed text-ink-400">
                  De berekening is indicatief en gebaseerd op een vereenvoudigd model. De uiteindelijke
                  maximale hypotheek wordt bepaald door de geldverstrekker op basis van je volledige
                  situatie, documenten en de geldende acceptatievoorwaarden.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-ink/10 pt-8 sm:flex-row">
            <Link href="/tools/hypotheek-zzp" className={btn.secondary}>
              Lees meer over hypotheek als zzp&apos;er
              <ArrowIcon className="text-ember" />
            </Link>
            <Link href="/tools" className={btn.secondary}>
              Andere tools
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
