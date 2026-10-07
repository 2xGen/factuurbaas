'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, Info, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import {
  DESIRED_INCOME_PRESETS,
  OTHER_INCOME_PRESETS,
  WAITING_PERIOD_MONTHS,
  END_AGES,
  PREMIUM_FACTORS,
  calculateAovProfile,
  formatEuro,
  formatWaitingPeriod,
  parseAmount,
} from '@/lib/aovCalculator';
import InsifyAovCta from '@/components/aov/InsifyAovCta';
import { ArrowIcon, PageHeader, btn } from '@/components/site/editorial';
import { AnimatedNumber } from '@/components/landing/page/motion';

const labelClass = 'mb-1.5 block font-mono text-[11px] uppercase tracking-[0.16em] text-ink-500';
const hintClass = 'mb-3 text-xs leading-relaxed text-ink-400';
const inputClass =
  'h-12 rounded-xl border-ink/15 bg-white px-4 text-lg text-ink tabular transition-colors placeholder:text-ink-400 hover:border-ink/30 focus-visible:border-ink/40 focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-0';

const euro = (v) => formatEuro(v);

function ChoiceChip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        'rounded-full border px-3.5 py-2 text-sm font-medium tabular transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2',
        selected
          ? 'border-ink bg-ink text-white'
          : 'border-ink/15 bg-white text-ink-500 hover:border-ink/30 hover:text-ink'
      )}
    >
      {children}
    </button>
  );
}

function MoneyField({ id, label, hint, value, onChange, presets, onPreset }) {
  return (
    <div>
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      {hint && <p className={hintClass}>{hint}</p>}
      {presets?.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-2">
          {presets.map((amount) => (
            <ChoiceChip
              key={amount}
              selected={parseAmount(value) === amount}
              onClick={() => onPreset(String(amount))}
            >
              {formatEuro(amount)}
            </ChoiceChip>
          ))}
          <ChoiceChip selected={false} onClick={() => onPreset('')}>
            Anders
          </ChoiceChip>
        </div>
      )}
      <div className="relative">
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

function ResultRow({ label, children, strong }) {
  return (
    <div
      className={cn(
        'flex items-baseline justify-between gap-4 border-b border-white/10 py-3 last:border-b-0',
        strong && 'py-4'
      )}
    >
      <dt className={cn('text-sm', strong ? 'max-w-[18ch] text-white/80' : 'text-white/60')}>{label}</dt>
      <dd
        className={cn(
          'shrink-0 text-right tabular',
          strong ? 'font-display text-2xl text-ember-100' : 'text-sm font-medium text-white'
        )}
      >
        {children}
      </dd>
    </div>
  );
}

export default function AovCalculator() {
  const [desiredIncome, setDesiredIncome] = useState('2500');
  const [otherIncome, setOtherIncome] = useState('0');
  const [waitingMonths, setWaitingMonths] = useState(6);
  const [endAge, setEndAge] = useState(67);
  const [currentAge, setCurrentAge] = useState('35');

  const result = useMemo(
    () =>
      calculateAovProfile({
        desiredMonthlyIncome: parseAmount(desiredIncome),
        otherMonthlyIncome: parseAmount(otherIncome) ?? 0,
        waitingMonths,
        currentAge: parseAmount(currentAge),
        endAge,
      }),
    [desiredIncome, otherIncome, waitingMonths, currentAge, endAge]
  );

  return (
    <>
      <PageHeader
        size="lg"
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'AOV berekenen' },
        ]}
        eyebrow="Gratis calculator"
        eyebrowIcon={ShieldCheck}
        title={
          <>
            AOV berekenen <em>als zzp&apos;er</em>
          </>
        }
        lead={
          <p>
            Bereken hoeveel inkomen je wilt beschermen en welk bedrag je tijdens de wachttijd zelf
            moet kunnen opvangen. Dit is geen premieberekening of verzekeringsadvies.
          </p>
        }
        containerClassName="max-w-6xl pb-10 pt-8 sm:pb-12 sm:pt-10 lg:pb-14 lg:pt-12"
      >
        <Link href="/tools/aov-zzp" className={btn.link}>
          <ArrowLeft
            className="h-4 w-4 text-ember transition-transform duration-300 group-hover:-translate-x-0.5"
            aria-hidden
          />
          Terug naar uitleg AOV zzp
        </Link>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-10 sm:py-14">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-5 lg:grid-cols-12 lg:items-start lg:gap-6">
            <div className="min-w-0 space-y-5 lg:col-span-7">
              <div
                className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-window motion-safe:animate-rise sm:p-8"
                style={{ animationDelay: '260ms' }}
              >
                <div className="flex items-center gap-3 border-b border-ink/[0.07] pb-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
                    <Calculator className="h-4 w-4" aria-hidden />
                  </span>
                  <p className="font-display text-xl leading-tight text-ink">Jouw situatie</p>
                </div>

                <div className="mt-6 space-y-8">
                  <MoneyField
                    id="desired-income"
                    label="Gewenst maandinkomen bij arbeidsongeschiktheid"
                    hint="Het bedrag dat je maandelijks wilt kunnen blijven besteden."
                    value={desiredIncome}
                    onChange={setDesiredIncome}
                    presets={DESIRED_INCOME_PRESETS}
                    onPreset={setDesiredIncome}
                  />

                  <MoneyField
                    id="other-income"
                    label="Ander inkomen bij arbeidsongeschiktheid"
                    hint="Bijvoorbeeld partnerinkomen of spaargeld — niet per se verzekerbaar inkomen."
                    value={otherIncome}
                    onChange={setOtherIncome}
                    presets={OTHER_INCOME_PRESETS}
                    onPreset={setOtherIncome}
                  />

                  <div role="group" aria-labelledby="waiting-period-label">
                    <p id="waiting-period-label" className={labelClass}>
                      Wachttijd / eigenrisicoperiode
                    </p>
                    <p className={hintClass}>
                      De periode waarin je zelf inkomen moet overbruggen voordat een AOV uitkeert.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {WAITING_PERIOD_MONTHS.map((months) => (
                        <ChoiceChip
                          key={months}
                          selected={waitingMonths === months}
                          onClick={() => setWaitingMonths(months)}
                        >
                          {formatWaitingPeriod(months)}
                        </ChoiceChip>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-8 border-t border-ink/[0.07] pt-8 sm:grid-cols-2 sm:gap-6">
                    <div>
                      <label htmlFor="current-age" className={labelClass}>
                        Je huidige leeftijd
                      </label>
                      <Input
                        id="current-age"
                        type="text"
                        inputMode="numeric"
                        value={currentAge}
                        onChange={(e) => setCurrentAge(e.target.value)}
                        className={cn(inputClass, 'mt-1')}
                        placeholder="35"
                      />
                    </div>
                    <div role="group" aria-labelledby="end-age-label">
                      <p id="end-age-label" className={labelClass}>
                        Eindleeftijd
                      </p>
                      <p className={hintClass}>Tot welke leeftijd wil je dekking?</p>
                      <div className="flex flex-wrap gap-2">
                        {END_AGES.map((age) => (
                          <ChoiceChip key={age} selected={endAge === age} onClick={() => setEndAge(age)}>
                            {age} jaar
                          </ChoiceChip>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {result && (
                <div className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper sm:p-8">
                  <h2 className="font-display text-[1.4rem] font-normal leading-tight tracking-[-0.02em] text-ink">
                    Wat betekent dit?
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                    Op basis van je invoer zou je ongeveer{' '}
                    <strong className="font-semibold text-ink">{formatEuro(result.requiredMonthly)}</strong> per
                    maand aan inkomen willen beschermen
                    {result.otherMonthlyIncome > 0 && (
                      <>
                        {' '}
                        (na aftrek van {formatEuro(result.otherMonthlyIncome)} ander inkomen)
                      </>
                    )}
                    . Bij een wachttijd van {formatWaitingPeriod(result.waitingMonths)} moet je rekening
                    houden met ongeveer{' '}
                    <strong className="font-semibold text-ink">{formatEuro(result.waitingBridge)}</strong> aan
                    inkomen dat je zelf moet kunnen opvangen als je in die periode geen inkomen uit je
                    onderneming hebt.
                  </p>
                  {result.currentAge != null && (
                    <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                      Je bent {result.currentAge} jaar en kiest ervoor je inkomen te beschermen tot{' '}
                      {result.endAge} jaar
                      {result.yearsUntilEnd != null ? ` — dat is nog ${result.yearsUntilEnd} jaar` : ''}
                      .
                    </p>
                  )}

                  <div className="mt-8 overflow-x-auto border-t border-ink/[0.07] pt-8">
                    <h2 className="font-display text-[1.4rem] font-normal leading-tight tracking-[-0.02em] text-ink">
                      Vergelijk wachttijden
                    </h2>
                    <p className="mt-1.5 text-xs text-ink-400">
                      * Op basis van {formatEuro(result.requiredMonthly)} benodigde maandelijkse dekking.
                    </p>
                    <table className="mt-4 w-full min-w-[280px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-ink/15 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                          <th className="py-2.5 pr-4 font-normal">Wachttijd</th>
                          <th className="py-2.5 text-right font-normal">Niet verzekerd inkomen*</th>
                        </tr>
                      </thead>
                      <tbody>
                        {result.waitingComparison.map((row) => {
                          const active = row.months === result.waitingMonths;
                          return (
                            <tr
                              key={row.months}
                              className={cn(
                                'border-b border-ink/[0.07] transition-colors',
                                active && 'bg-paper-100'
                              )}
                            >
                              <td className={cn('py-3 pr-4', active ? 'font-medium text-ink' : 'text-ink-500')}>
                                <span className="inline-flex items-center gap-2">
                                  <span
                                    className={cn('h-1.5 w-1.5 rounded-full', active ? 'bg-ember' : 'bg-transparent')}
                                    aria-hidden
                                  />
                                  {row.label}
                                </span>
                              </td>
                              <td className="py-3 pr-1 text-right font-medium text-ink tabular">
                                <AnimatedNumber value={row.uncovered} format={euro} />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-8 rounded-xl border border-dashed border-ink/15 bg-paper-50 p-4 sm:p-5">
                    <h2 className="flex items-center gap-2 text-sm font-semibold text-ink">
                      <Info className="h-4 w-4 text-ember" aria-hidden />
                      Wat je premie ongeveer kan beïnvloeden
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-ink-500">
                      Deze tool berekent geen AOV-premie. De premie hangt onder andere af van:
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {PREMIUM_FACTORS.map((factor) => (
                        <li
                          key={factor}
                          className="rounded-full border border-ink/10 bg-white px-3 py-1 text-xs font-medium text-ink-700"
                        >
                          {factor}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <InsifyAovCta className="mb-0" />
                </div>
              )}
            </div>

            <div className="motion-safe:animate-rise lg:col-span-5" style={{ animationDelay: '320ms' }}>
              <div
                aria-live="polite"
                className="grain-light relative isolate overflow-hidden rounded-2xl bg-ink-950 p-6 text-white shadow-window sm:p-7 lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]"
              >
                <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
                <div
                  className="pointer-events-none absolute -right-28 -top-28 -z-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.3),transparent_65%)]"
                  aria-hidden
                />
                {result ? (
                  <>
                    <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-white/55">
                      Jouw AOV-profiel
                    </p>

                    <div className="mt-5">
                      <p className="text-sm text-white/60">Benodigde maandelijkse dekking</p>
                      <AnimatedNumber
                        value={result.requiredMonthly}
                        format={euro}
                        className="mt-2 block font-display text-[2.6rem] leading-none tracking-[-0.03em] tabular sm:text-[3.2rem]"
                      />
                      <p className="mt-2 font-display text-base italic text-ember-100">per maand</p>
                    </div>

                    <dl className="mt-6 border-t border-white/10">
                      <ResultRow label="Benodigde jaarlijkse dekking">
                        <AnimatedNumber value={result.requiredAnnual} format={euro} />
                      </ResultRow>
                      <ResultRow label="Wachttijd">{formatWaitingPeriod(result.waitingMonths)}</ResultRow>
                      <ResultRow strong label="Inkomen dat je tijdens de wachttijd zelf moet kunnen opvangen">
                        <AnimatedNumber value={result.waitingBridge} format={euro} />
                      </ResultRow>
                      <ResultRow label="Eindleeftijd">{result.endAge} jaar</ResultRow>
                      {result.currentAge != null && (
                        <ResultRow label="Dekking tot">
                          {result.endAge} jaar
                          {result.yearsUntilEnd != null && (
                            <span className="ml-1 font-normal text-white/50">
                              (nog {result.yearsUntilEnd} jaar)
                            </span>
                          )}
                        </ResultRow>
                      )}
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
                    <p className="mt-5 text-sm text-white/65">
                      Vul een gewenst maandinkomen in om je benodigde dekking te zien.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="max-w-3xl text-xs leading-relaxed text-ink-400">
              Dit is geen premie- of verzekeringsadvies. Het daadwerkelijk verzekerbare bedrag, de
              premie en de voorwaarden verschillen per verzekeraar en zijn onder andere afhankelijk van
              je beroep, leeftijd, gezondheid, gekozen dekking en polisvoorwaarden. Een verzekeraar
              bepaalt het maximale verzekerbare bedrag.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/tools/aov-zzp" className={btn.secondary}>
                Meer over AOV voor zzp&apos;ers
                <ArrowIcon className="text-ember" />
              </Link>
              <Link href="/tools" className={btn.secondary}>
                Alle tools
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
