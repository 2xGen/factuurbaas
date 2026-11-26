'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { track } from '@vercel/analytics';
import { ArrowRight } from 'lucide-react';
import {
  LEGAL_FORMS,
  SITUATION_OPTIONS,
  TRANSACTION_OPTIONS,
  buildLeadHref,
  calculateBookkeeperCosts,
  formatEuro,
  resolveLegalFormId,
  saveCalculatorSession,
} from '@/lib/boekhouderKostenCalculator';
import { AffixInput, FieldHint, FieldLabel } from '@/components/tools/calculatorUi';
import { btn } from '@/components/site/editorial';

const choiceClass = (selected) =>
  `flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[15px] transition-colors ${
    selected ? 'border-ink bg-white text-ink shadow-sm' : 'border-ink/10 bg-paper-50 text-ink-700 hover:border-ink/30'
  }`;

export default function BookkeeperCostCalculator({
  id = 'boekhouder-kosten-calculator',
  source = 'kosten-calculator',
  compact = false,
  initialLegalFormId = '',
}) {
  const searchParams = useSearchParams();
  const resolvedLegalFormId =
    resolveLegalFormId(initialLegalFormId) ||
    resolveLegalFormId(searchParams.get('vorm')) ||
    resolveLegalFormId(searchParams.get('rechtsvorm')) ||
    'eenmanszaak';
  const [legalFormId, setLegalFormId] = useState(resolvedLegalFormId);
  const [transactionId, setTransactionId] = useState('25-100');
  const [wantsSalaryAdmin, setWantsSalaryAdmin] = useState(false);
  const [employeeCount, setEmployeeCount] = useState('1');
  const [situationId, setSituationId] = useState('self');
  const [hoursPerMonth, setHoursPerMonth] = useState('5');
  const [hourlyRate, setHourlyRate] = useState('60');
  const [currentMonthlyCost, setCurrentMonthlyCost] = useState('150');
  const started = useRef(false);
  const completed = useRef(false);
  const appliedPrefill = useRef(false);

  useEffect(() => {
    if (appliedPrefill.current) return;
    const next =
      resolveLegalFormId(initialLegalFormId) ||
      resolveLegalFormId(searchParams.get('vorm')) ||
      resolveLegalFormId(searchParams.get('rechtsvorm'));
    if (!next) return;
    appliedPrefill.current = true;
    setLegalFormId(next);
  }, [initialLegalFormId, searchParams]);

  const result = useMemo(
    () =>
      calculateBookkeeperCosts({
        legalFormId,
        transactionId,
        wantsSalaryAdmin,
        employeeCount: Number(employeeCount) || 0,
        hoursPerMonth: Number(hoursPerMonth) || 0,
        hourlyRate: Number(hourlyRate) || 0,
        currentMonthlyCost: Number(currentMonthlyCost) || 0,
      }),
    [
      legalFormId,
      transactionId,
      wantsSalaryAdmin,
      employeeCount,
      hoursPerMonth,
      hourlyRate,
      currentMonthlyCost,
    ]
  );

  useEffect(() => {
    if (!started.current) {
      started.current = true;
      track('bookkeeper_calculator_started', { source });
    }
  }, [source]);

  useEffect(() => {
    if (!completed.current && legalFormId) {
      completed.current = true;
      track('bookkeeper_calculator_completed', { source, legalForm: legalFormId });
    }
  }, [legalFormId, source]);

  useEffect(() => {
    saveCalculatorSession({
      legalFormId,
      transactionId,
      wantsSalaryAdmin,
      employeeCount,
      situationId,
      hoursPerMonth,
      hourlyRate,
      currentMonthlyCost,
      monthlyLabel: result.monthlyLabel,
      yearlyLabel: result.yearlyLabel,
    });
  }, [
    legalFormId,
    transactionId,
    wantsSalaryAdmin,
    employeeCount,
    situationId,
    hoursPerMonth,
    hourlyRate,
    currentMonthlyCost,
    result.monthlyLabel,
    result.yearlyLabel,
  ]);

  const leadHref = buildLeadHref({ legalFormId, source });
  const showSelfTime = situationId === 'self' || situationId === 'starting';
  const showCurrentCost = situationId === 'has-bookkeeper';

  function onCtaClick() {
    track('bookkeeper_calculator_cta_clicked', { source, legalForm: legalFormId });
  }

  return (
    <div
      id={id}
      className={`scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper ${
        compact ? '' : 'lg:grid lg:grid-cols-[1.05fr_0.95fr]'
      }`}
    >
      <div className="space-y-8 border-b border-ink/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Boekhouder kosten calculator</p>
          <h2 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            Bereken gratis de indicatieve kosten van jouw boekhouding
          </h2>
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-ink">1. Wat is je rechtsvorm?</legend>
          <div className="mt-3 grid gap-2">
            {LEGAL_FORMS.map((item) => (
              <label key={item.id} className={choiceClass(legalFormId === item.id)}>
                <input
                  type="radio"
                  name="legalForm"
                  value={item.id}
                  checked={legalFormId === item.id}
                  onChange={() => setLegalFormId(item.id)}
                  className="h-4 w-4 accent-ink"
                />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="text-sm font-medium text-ink">2. Hoeveel financiële transacties heb je per maand?</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {TRANSACTION_OPTIONS.map((item) => (
              <label key={item.id} className={choiceClass(transactionId === item.id)}>
                <input
                  type="radio"
                  name="transactions"
                  value={item.id}
                  checked={transactionId === item.id}
                  onChange={() => setTransactionId(item.id)}
                  className="h-4 w-4 accent-ink"
                />
                {item.label}
              </label>
            ))}
          </div>
          <FieldHint className="mt-2">Transactievolume beïnvloedt nu vooral de toelichting, niet de basisprijs.</FieldHint>
        </fieldset>

        <div>
          <p className="text-sm font-medium text-ink">3. Heb je personeel?</p>
          <label className={`${choiceClass(wantsSalaryAdmin)} mt-3`}>
            <input
              type="checkbox"
              checked={wantsSalaryAdmin}
              onChange={(event) => setWantsSalaryAdmin(event.target.checked)}
              className="h-4 w-4 accent-ink"
            />
            Ik wil salarisadministratie uitbesteden
          </label>
          {wantsSalaryAdmin && (
            <div className="mt-4">
              <FieldLabel htmlFor="employees">Aantal medewerkers</FieldLabel>
              <AffixInput
                id="employees"
                value={employeeCount}
                onChange={setEmployeeCount}
                inputMode="numeric"
              />
              <FieldHint className="mt-2">Indicatie: circa €17 per medewerker per maand.</FieldHint>
            </div>
          )}
        </div>

        <fieldset>
          <legend className="text-sm font-medium text-ink">4. Wat is je huidige situatie?</legend>
          <div className="mt-3 grid gap-2">
            {SITUATION_OPTIONS.map((item) => (
              <label key={item.id} className={choiceClass(situationId === item.id)}>
                <input
                  type="radio"
                  name="situation"
                  value={item.id}
                  checked={situationId === item.id}
                  onChange={() => setSituationId(item.id)}
                  className="h-4 w-4 accent-ink"
                />
                {item.label}
              </label>
            ))}
          </div>
        </fieldset>

        {showSelfTime && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="hours">Uren administratie per maand</FieldLabel>
              <AffixInput id="hours" value={hoursPerMonth} onChange={setHoursPerMonth} suffix="uur" inputMode="decimal" />
            </div>
            <div>
              <FieldLabel htmlFor="rate">Jouw zakelijke uurtarief</FieldLabel>
              <AffixInput id="rate" value={hourlyRate} onChange={setHourlyRate} prefix="€" inputMode="decimal" />
            </div>
          </div>
        )}

        {showCurrentCost && (
          <div>
            <FieldLabel htmlFor="current">Huidige boekhoudkosten per maand</FieldLabel>
            <AffixInput
              id="current"
              value={currentMonthlyCost}
              onChange={setCurrentMonthlyCost}
              prefix="€"
              inputMode="decimal"
            />
          </div>
        )}
      </div>

      <div className="bg-ink-950 p-5 text-white sm:p-7">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember-100/80">Jouw indicatieve boekhoudkosten</p>
        <p className="mt-4 font-display text-[2.4rem] font-normal leading-none tracking-[-0.03em] sm:text-[2.8rem]">
          {result.monthlyLabel}
          <span className="ml-2 text-lg text-white/55">/ maand</span>
        </p>
        <p className="mt-3 text-base text-white/65">{result.yearlyLabel} / jaar</p>

        {result.salaryMonthly > 0 && (
          <p className="mt-4 text-sm text-white/55">
            Inclusief salarisadministratie: {formatEuro(result.salaryMonthly)} / maand
          </p>
        )}

        {showSelfTime && result.timeValueYearly > 0 && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-white/55">Potentiële waarde van je administratietijd per jaar</p>
            <p className="mt-2 font-display text-3xl tracking-[-0.02em]">{formatEuro(result.timeValueYearly)}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              Uitbesteden kan interessant zijn als je de vrijgekomen tijd kunt gebruiken voor betaalde werkzaamheden.
            </p>
          </div>
        )}

        {showCurrentCost && result.currentYearly > 0 && (
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-sm text-white/55">Jouw huidige boekhoudkosten per jaar</p>
            <p className="mt-2 font-display text-3xl tracking-[-0.02em]">{formatEuro(result.currentYearly)}</p>
            <p className="mt-3 text-sm leading-relaxed text-white/55">
              <Link
                href="/boekhouder-overstappen"
                className="underline decoration-white/25 underline-offset-4 hover:decoration-ember-100"
              >
                Vergelijk je huidige boekhoudkosten
              </Link>{' '}
              met indicatieve tarieven voor een nieuwe boekhouder.
            </p>
          </div>
        )}

        <p className="mt-8 text-sm leading-relaxed text-white/55">{result.transactionNote}</p>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
          <p className="font-display text-xl tracking-[-0.02em]">Bespaar tijd door je boekhouding uit te besteden</p>
          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Vraag gratis en vrijblijvend hulp aan bij het vinden van een passende boekhouder.
          </p>
          <Link href={leadHref} onClick={onCtaClick} className={`${btn.light} mt-5 w-full sm:w-auto`}>
            Vind mijn boekhouder
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <p className="mt-6 text-[12px] leading-relaxed text-white/40">
          Indicatieve tarieven voor volledige uitbesteding. Geen bindende offerte. De salarisadministratietoeslag en
          gecombineerde BV-prijs moeten nog worden bevestigd. Transactievolume wordt momenteel alleen gebruikt voor
          aanvullende uitleg.
        </p>
      </div>
    </div>
  );
}
