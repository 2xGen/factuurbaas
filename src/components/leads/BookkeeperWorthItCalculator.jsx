'use client';

import { useMemo, useState } from 'react';
import {
  calculateBookkeeperWorthIt,
  formatEuro,
  formatHoursNl,
} from '@/lib/boekhouderKostenCalculator';
import { AffixInput, FieldLabel } from '@/components/tools/calculatorUi';
import { ArrowIcon, btn } from '@/components/site/editorial';

export default function BookkeeperWorthItCalculator({ id = 'boekhouder-waard' }) {
  const [hourlyRate, setHourlyRate] = useState('60');
  const [hoursPerMonth, setHoursPerMonth] = useState('5');
  const [monthlyCost, setMonthlyCost] = useState('125');

  const result = useMemo(
    () =>
      calculateBookkeeperWorthIt({
        hourlyRate: Number(hourlyRate) || 0,
        hoursPerMonth: Number(hoursPerMonth) || 0,
        monthlyBookkeeperCost: Number(monthlyCost) || 0,
      }),
    [hourlyRate, hoursPerMonth, monthlyCost]
  );

  const differencePositive = result.potentialDifference > 0;

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
            Ontdek hoeveel tijd je boekhouder moet besparen
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Om financieel interessant te zijn ten opzichte van je eigen administratietijd.
          </p>
        </div>

        <div>
          <FieldLabel>Jouw zakelijke uurtarief</FieldLabel>
          <AffixInput
            prefix="€"
            value={hourlyRate}
            onChange={setHourlyRate}
            aria-label="Zakelijk uurtarief"
          />
        </div>

        <div>
          <FieldLabel>Administratietijd per maand</FieldLabel>
          <AffixInput
            suffix="uur"
            value={hoursPerMonth}
            onChange={setHoursPerMonth}
            aria-label="Administratietijd per maand"
          />
        </div>

        <div>
          <FieldLabel>Kosten boekhouder per maand</FieldLabel>
          <AffixInput
            prefix="€"
            value={monthlyCost}
            onChange={setMonthlyCost}
            aria-label="Kosten boekhouder per maand"
          />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-paper-50 p-5 sm:p-7">
        <div className="space-y-5">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Potentiële tijdswaarde per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.timeValueYearly)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Boekhoudkosten per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.bookkeeperYearly)}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              Benodigde tijdsbesparing per maand
            </p>
            <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
              {formatHoursNl(result.hoursNeededMonthly)}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-500">
              {differencePositive ? (
                <>
                  Als je alle ingevoerde administratietijd kunt vervangen door betaalde opdrachten, bedraagt
                  het potentiële verschil{' '}
                  <span className="font-medium text-ink">{formatEuro(result.potentialDifference)}</span> per
                  jaar vóór belastingen en overige kosten.
                </>
              ) : (
                <>
                  Bij deze waarden is de potentiële tijdswaarde lager of gelijk aan de boekhoudkosten. Pas je
                  uurtarief of administratietijd aan, of bekijk of gedeeltelijke uitbesteding beter past.
                </>
              )}
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          <a href="#boekhouder-formulier" className={`${btn.primary} w-full`}>
            Vind mijn boekhouder
            <ArrowIcon />
          </a>
          <p className="text-[12px] leading-relaxed text-ink-400">
            De berekening toont potentiële omzetwaarde, geen gegarandeerde besparing. De daadwerkelijke
            tijdsbesparing hangt af van de werkzaamheden die je uitbesteedt.
          </p>
        </div>
      </div>
    </div>
  );
}
