'use client';

import { useMemo, useState } from 'react';
import {
  calculateBookkeeperTimeValue,
  formatEuro,
  formatHoursNl,
} from '@/lib/boekhouderKostenCalculator';
import { AffixInput, FieldHint, FieldLabel } from '@/components/tools/calculatorUi';
import { ArrowIcon, btn } from '@/components/site/editorial';

function PercentInput({ value, onChange, ariaLabel }) {
  return (
    <AffixInput
      suffix="%"
      value={value}
      onChange={onChange}
      aria-label={ariaLabel}
    />
  );
}

export default function AdministratieTijdWaardeCalculator({ id = 'administratietijd-waard' }) {
  const [hoursPerMonth, setHoursPerMonth] = useState(5);
  const [hourlyRate, setHourlyRate] = useState('60');
  const [savePercent, setSavePercent] = useState('60');
  const [billablePercent, setBillablePercent] = useState('75');
  const [monthlyCost, setMonthlyCost] = useState('125');

  const result = useMemo(
    () =>
      calculateBookkeeperTimeValue({
        hoursPerMonth,
        hourlyRate: Number(hourlyRate) || 0,
        savePercent: Number(savePercent) || 0,
        billablePercent: Number(billablePercent) || 0,
        monthlyBookkeeperCost: Number(monthlyCost) || 0,
      }),
    [hoursPerMonth, hourlyRate, savePercent, billablePercent, monthlyCost]
  );

  const positive = result.potentialDifference > 0;
  const insight = positive
    ? 'Op basis van jouw aannames kan uitbesteden financieel interessant zijn.'
    : 'Op basis van jouw aannames is de potentiële extra omzet lager of gelijk aan de boekhoudkosten. Pas de aannames aan of bekijk gedeeltelijke uitbesteding.';

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper lg:grid lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-6 border-b border-ink/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Is een boekhouder zijn geld waard?
          </p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            Bereken de mogelijke waarde van vrijgekomen administratietijd
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Niet ieder vrijgekomen uur is automatisch declarabel. Deze berekening houdt daar rekening mee.
          </p>
        </div>

        <div>
          <div className="flex items-end justify-between gap-3">
            <FieldLabel>Administratietijd per maand</FieldLabel>
            <p className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
              {hoursPerMonth} uur
            </p>
          </div>
          <input
            type="range"
            min={1}
            max={30}
            step={1}
            value={hoursPerMonth}
            onChange={(event) => setHoursPerMonth(Number(event.target.value))}
            className="mt-3 w-full accent-ember"
            aria-label="Administratietijd per maand in uren"
          />
          <div className="mt-1 flex justify-between font-mono text-[11px] uppercase tracking-[0.12em] text-ink-400">
            <span>1 uur</span>
            <span>15 uur</span>
            <span>30 uur</span>
          </div>
        </div>

        <div>
          <FieldLabel>Jouw uurtarief</FieldLabel>
          <AffixInput prefix="€" value={hourlyRate} onChange={setHourlyRate} aria-label="Jouw uurtarief" />
        </div>

        <div>
          <FieldLabel>Administratietijd die je kunt besparen</FieldLabel>
          <PercentInput
            value={savePercent}
            onChange={setSavePercent}
            ariaLabel="Percentage administratietijd dat je kunt besparen"
          />
        </div>

        <div>
          <FieldLabel>Vrijgekomen tijd die je kunt factureren</FieldLabel>
          <PercentInput
            value={billablePercent}
            onChange={setBillablePercent}
            ariaLabel="Percentage vrijgekomen tijd dat je kunt factureren"
          />
          <FieldHint className="mt-2">
            Niet iedere vrijgekomen administratie-uur wordt automatisch betaald klantwerk.
          </FieldHint>
        </div>

        <div>
          <FieldLabel>Verwachte boekhoudkosten per maand</FieldLabel>
          <AffixInput
            prefix="€"
            value={monthlyCost}
            onChange={setMonthlyCost}
            aria-label="Verwachte boekhoudkosten per maand"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-paper-50 p-5 sm:p-7">
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Vrijgekomen tijd per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatHoursNl(result.freedHoursYearly)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Potentiële extra jaaromzet
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.potentialExtraRevenue)}
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Jaarlijkse boekhoudkosten
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.bookkeeperYearly)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Potentieel verschil per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {positive ? '+' : ''}
                {formatEuro(result.potentialDifference)}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-ink-500">{insight}</p>
        </div>

        <div className="mt-6 space-y-3">
          <a href="#boekhouder-kosten-calculator" className={`${btn.primary} w-full sm:w-auto`}>
            Ontdek wat een boekhouder voor mij kost
            <ArrowIcon />
          </a>
          <p className="text-[13px] leading-relaxed text-ink-400">
            Een theoretische vergelijking vóór belastingen en eventuele aanvullende bedrijfskosten. Extra omzet is niet
            hetzelfde als winst. De ingevulde waarden zijn aannames, geen gegarandeerde resultaten.
          </p>
        </div>
      </div>
    </div>
  );
}
