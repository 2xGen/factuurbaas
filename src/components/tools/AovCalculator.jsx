'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Calculator, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
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

function ChoiceChip({ selected, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        'rounded-xl border px-3 py-2 text-sm font-medium transition-colors',
        selected
          ? 'border-warm-orange bg-orange-50 text-deep-blue'
          : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
      )}
    >
      {children}
    </button>
  );
}

function MoneyField({ id, label, hint, value, onChange, presets, onPreset }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {hint && <p className="mb-2 text-xs text-slate-500">{hint}</p>}
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
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
          €
        </span>
        <Input
          id={id}
          type="text"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="h-12 pl-9 text-lg"
          placeholder="0"
        />
      </div>
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
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          href="/tools/aov-zzp"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-warm-orange"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar uitleg AOV zzp
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-deep-blue">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
              AOV berekenen als zzp&apos;er
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Bereken hoeveel inkomen je wilt beschermen en welk bedrag je tijdens de wachttijd zelf
              moet kunnen opvangen. Dit is geen premieberekening of verzekeringsadvies.
            </p>
          </div>
        </div>

        <div className="space-y-6">
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

          <div>
            <p className="mb-2 text-sm font-medium text-slate-700">Wachttijd / eigenrisicoperiode</p>
            <p className="mb-3 text-xs text-slate-500">
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

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="current-age" className="mb-2 block text-sm font-medium text-slate-700">
                Je huidige leeftijd
              </label>
              <Input
                id="current-age"
                type="text"
                inputMode="numeric"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
                className="h-12 text-lg"
                placeholder="35"
              />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-slate-700">Eindleeftijd</p>
              <p className="mb-3 text-xs text-slate-500">Tot welke leeftijd wil je dekking?</p>
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

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          {result ? (
            <>
              <p className="text-sm font-medium text-slate-500">Jouw AOV-profiel</p>

              <div className="mt-4">
                <p className="text-sm text-slate-600">Benodigde maandelijkse dekking</p>
                <p className="mt-1 font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                  {formatEuro(result.requiredMonthly)}
                </p>
                <p className="mt-1 text-sm text-slate-500">per maand</p>
              </div>

              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-4 border border-slate-100">
                  <dt className="text-sm text-slate-500">Benodigde jaarlijkse dekking</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-800">
                    {formatEuro(result.requiredAnnual)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white p-4 border border-slate-100">
                  <dt className="text-sm text-slate-500">Wachttijd</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-800">
                    {formatWaitingPeriod(result.waitingMonths)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white p-4 border border-slate-100 sm:col-span-2">
                  <dt className="text-sm text-slate-500">
                    Inkomen dat je tijdens de wachttijd zelf moet kunnen opvangen
                  </dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-800">
                    {formatEuro(result.waitingBridge)}
                  </dd>
                </div>
                <div className="rounded-lg bg-white p-4 border border-slate-100">
                  <dt className="text-sm text-slate-500">Eindleeftijd</dt>
                  <dd className="mt-1 text-lg font-semibold text-slate-800">{result.endAge} jaar</dd>
                </div>
                {result.currentAge != null && (
                  <div className="rounded-lg bg-white p-4 border border-slate-100">
                    <dt className="text-sm text-slate-500">Dekking tot</dt>
                    <dd className="mt-1 text-lg font-semibold text-slate-800">
                      {result.endAge} jaar
                      {result.yearsUntilEnd != null && (
                        <span className="ml-1 text-sm font-normal text-slate-500">
                          (nog {result.yearsUntilEnd} jaar)
                        </span>
                      )}
                    </dd>
                  </div>
                )}
              </dl>

              <div className="mt-6">
                <h2 className="font-heading text-lg font-semibold text-deep-blue">Wat betekent dit?</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Op basis van je invoer zou je ongeveer{' '}
                  <strong>{formatEuro(result.requiredMonthly)}</strong> per maand aan inkomen willen
                  beschermen
                  {result.otherMonthlyIncome > 0 && (
                    <>
                      {' '}
                      (na aftrek van {formatEuro(result.otherMonthlyIncome)} ander inkomen)
                    </>
                  )}
                  . Bij een wachttijd van {formatWaitingPeriod(result.waitingMonths)} moet je rekening
                  houden met ongeveer <strong>{formatEuro(result.waitingBridge)}</strong> aan inkomen
                  dat je zelf moet kunnen opvangen als je in die periode geen inkomen uit je
                  onderneming hebt.
                </p>
                {result.currentAge != null && (
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Je bent {result.currentAge} jaar en kiest ervoor je inkomen te beschermen tot{' '}
                    {result.endAge} jaar
                    {result.yearsUntilEnd != null ? ` — dat is nog ${result.yearsUntilEnd} jaar` : ''}
                    .
                  </p>
                )}
              </div>

              <div className="mt-6 overflow-x-auto">
                <h2 className="font-heading text-lg font-semibold text-deep-blue">
                  Vergelijk wachttijden
                </h2>
                <p className="mt-1 text-xs text-slate-500">
                  * Op basis van {formatEuro(result.requiredMonthly)} benodigde maandelijkse dekking.
                </p>
                <table className="mt-3 w-full min-w-[280px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-500">
                      <th className="py-2 pr-4 font-medium">Wachttijd</th>
                      <th className="py-2 font-medium">Niet verzekerd inkomen*</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.waitingComparison.map((row) => (
                      <tr
                        key={row.months}
                        className={cn(
                          'border-b border-slate-100',
                          row.months === result.waitingMonths && 'bg-orange-50/80'
                        )}
                      >
                        <td className="py-2.5 pr-4 text-slate-700">{row.label}</td>
                        <td className="py-2.5 font-medium text-slate-800">
                          {formatEuro(row.uncovered)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50/60 p-4">
                <h2 className="flex items-center gap-2 font-heading text-base font-semibold text-deep-blue">
                  <Info className="h-4 w-4" />
                  Wat je premie ongeveer kan beïnvloeden
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Deze tool berekent geen AOV-premie. De premie hangt onder andere af van:
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {PREMIUM_FACTORS.map((factor) => (
                    <li
                      key={factor}
                      className="rounded-full border border-blue-100 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {factor}
                    </li>
                  ))}
                </ul>
              </div>

              <InsifyAovCta />
            </>
          ) : (
            <p className="text-sm text-slate-500">
              Vul een gewenst maandinkomen in om je benodigde dekking te zien.
            </p>
          )}
        </div>

        <p className="mt-6 text-xs leading-relaxed text-slate-500">
          Dit is geen premie- of verzekeringsadvies. Het daadwerkelijk verzekerbare bedrag, de
          premie en de voorwaarden verschillen per verzekeraar en zijn onder andere afhankelijk van
          je beroep, leeftijd, gezondheid, gekozen dekking en polisvoorwaarden. Een verzekeraar
          bepaalt het maximale verzekerbare bedrag.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/tools/aov-zzp">Meer over AOV voor zzp&apos;ers</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/tools">Alle tools</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
