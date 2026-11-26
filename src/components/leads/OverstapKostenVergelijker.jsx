'use client';

import { useMemo, useState } from 'react';
import {
  LEGAL_FORMS,
  formatEuro,
  formatYearlyRange,
  getLegalForm,
} from '@/lib/boekhouderKostenCalculator';
import { AffixInput, FieldHint, FieldLabel } from '@/components/tools/calculatorUi';
import { ArrowIcon, btn } from '@/components/site/editorial';

const OVERSTAP_FORMS = LEGAL_FORMS.filter((item) => item.id !== 'holding-werkmaatschappij');

function parseAmount(value) {
  const n = Number(String(value).replace(',', '.'));
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

function formatDiffRange(min, max) {
  if (min === max) return formatEuro(min);
  const low = Math.min(min, max);
  const high = Math.max(min, max);
  return `${formatEuro(low)} tot ${formatEuro(high)}`;
}

export default function OverstapKostenVergelijker({ id = 'overstap-kostenvergelijker' }) {
  const [legalFormId, setLegalFormId] = useState('eenmanszaak');
  const [monthlyCost, setMonthlyCost] = useState('180');
  const [additionalYearly, setAdditionalYearly] = useState('300');
  const [switchCost, setSwitchCost] = useState('250');

  const result = useMemo(() => {
    const form = getLegalForm(legalFormId);
    const monthly = parseAmount(monthlyCost);
    const additional = parseAmount(additionalYearly);
    const oneTime = parseAmount(switchCost);
    const currentYearly = monthly * 12 + additional;
    const newMin = form.min * 12;
    const newMax = form.max == null ? null : form.max * 12;
    const yearlyDiffVsMin = currentYearly - newMin;
    const yearlyDiffVsMax = currentYearly - (newMax ?? newMin);
    const firstYearVsMin = yearlyDiffVsMin - oneTime;
    const firstYearVsMax = yearlyDiffVsMax - oneTime;
    return {
      form,
      currentYearly,
      newMin,
      newMax,
      yearlyDiffVsMin,
      yearlyDiffVsMax,
      firstYearVsMin,
      firstYearVsMax,
      oneTime,
    };
  }, [legalFormId, monthlyCost, additionalYearly, switchCost]);

  const savingsLikely =
    result.yearlyDiffVsMin > 0 && (result.newMax == null || result.yearlyDiffVsMax > 0);
  const currentCheaper =
    result.yearlyDiffVsMin <= 0 && (result.newMax == null || result.yearlyDiffVsMax <= 0);

  let insight =
    'Op basis van deze bedragen is het prijsverschil gemengd. Vergelijk daarom eerst de inbegrepen dienstverlening.';
  if (savingsLikely) {
    insight =
      'Op basis van deze bedragen kan overstappen financieel interessant zijn. Vergelijk wel eerst de inbegrepen dienstverlening.';
  } else if (currentCheaper) {
    insight =
      'Op basis van deze bedragen lijkt je huidige boekhouder gunstiger geprijsd. Overstappen kan nog steeds zinvol zijn om andere redenen, zoals communicatie of inzicht.';
  }

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper lg:grid lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-6 border-b border-ink/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Betaal jij te veel voor je boekhouder?
          </p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            Vergelijk je huidige kosten met indicatieve tarieven
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Voor volledige boekhoudkundige ondersteuning. Geen account nodig.
          </p>
        </div>

        <fieldset>
          <legend className="font-medium text-ink">Wat is je rechtsvorm?</legend>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {OVERSTAP_FORMS.map((item) => {
              const selected = legalFormId === item.id;
              return (
                <label
                  key={item.id}
                  className={`flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-[15px] transition-colors ${
                    selected
                      ? 'border-ink bg-white text-ink shadow-sm'
                      : 'border-ink/10 bg-paper-50 text-ink-700 hover:border-ink/30'
                  }`}
                >
                  <input
                    type="radio"
                    name="overstap-rechtsvorm"
                    value={item.id}
                    checked={selected}
                    onChange={() => setLegalFormId(item.id)}
                    className="h-4 w-4 border-ink/30 text-ember focus:ring-ember"
                  />
                  {item.label}
                </label>
              );
            })}
          </div>
        </fieldset>

        <div>
          <FieldLabel>Wat betaal je momenteel per maand?</FieldLabel>
          <AffixInput
            prefix="€"
            value={monthlyCost}
            onChange={setMonthlyCost}
            aria-label="Huidige maandelijkse boekhoudkosten"
          />
        </div>

        <div>
          <FieldLabel>Aanvullende jaarlijkse kosten</FieldLabel>
          <AffixInput
            prefix="€"
            value={additionalYearly}
            onChange={setAdditionalYearly}
            aria-label="Aanvullende jaarlijkse kosten"
          />
          <FieldHint className="mt-2">
            Bijvoorbeeld jaarafsluiting, software of afzonderlijk gefactureerde aangiften.
          </FieldHint>
        </div>

        <div>
          <FieldLabel>Verwachte eenmalige overstapkosten</FieldLabel>
          <AffixInput
            prefix="€"
            value={switchCost}
            onChange={setSwitchCost}
            aria-label="Verwachte eenmalige overstapkosten"
          />
          <FieldHint className="mt-2">
            Vul een eigen schatting in. Het voorbeeldbedrag is geen vastgesteld overstaptarief.
          </FieldHint>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-paper-50 p-5 sm:p-7">
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Huidige kosten per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.currentYearly)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Indicatieve nieuwe kosten per jaar
              </p>
              <p className="mt-2 font-display text-2xl font-normal tracking-[-0.03em] text-ink sm:text-3xl">
                {formatYearlyRange(result.form.min, result.form.max)}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              Indicatief jaarlijks prijsverschil
            </p>
            <p className="mt-2 font-display text-2xl font-normal tracking-[-0.03em] text-ink">
              {formatDiffRange(result.yearlyDiffVsMax, result.yearlyDiffVsMin)}
            </p>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              Prijsverschil eerste jaar, na overstapkosten
            </p>
            <p className="mt-1 font-display text-xl font-normal tracking-[-0.02em] text-ink">
              {formatDiffRange(result.firstYearVsMax, result.firstYearVsMin)}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-ink-500">{insight}</p>
        </div>

        <div className="mt-6 space-y-3">
          <a href="#boekhouder-formulier" className={`${btn.primary} w-full sm:w-auto`}>
            Ontdek mijn mogelijkheden
            <ArrowIcon />
          </a>
          <p className="text-[13px] leading-relaxed text-ink-400">
            Indicatieve tarieven van WRKD B.V. Vergelijk bedragen op dezelfde btw-grondslag en controleer welke
            werkzaamheden zijn inbegrepen. Geen bindende offerte of gegarandeerde besparing.
          </p>
        </div>
      </div>
    </div>
  );
}
