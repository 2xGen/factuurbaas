'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { track } from '@vercel/analytics';
import {
  calculateLandingOutsource,
  formatEuro,
  formatHours,
} from '@/lib/boekhoudingUitbestedenCalculator';
import { formatHoursNl } from '@/lib/boekhouderKostenCalculator';
import { AffixInput, FieldLabel } from '@/components/tools/calculatorUi';
import { ArrowIcon, btn } from '@/components/site/editorial';

export default function OutsourcingWorthCalculator({
  id = 'uitbesteden-calculator',
  source = 'boekhouding-uitbesteden',
}) {
  const [hoursPerMonth, setHoursPerMonth] = useState('8');
  const [hourlyRate, setHourlyRate] = useState('60');
  const [outsourcingPercent, setOutsourcingPercent] = useState('75');
  const [monthlyCost, setMonthlyCost] = useState('125');
  const started = useRef(false);

  const result = useMemo(
    () =>
      calculateLandingOutsource({
        hoursPerMonth,
        hourlyRate,
        outsourcingPercent,
        monthlyBookkeeperCost: monthlyCost,
      }),
    [hoursPerMonth, hourlyRate, outsourcingPercent, monthlyCost]
  );

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    track('outsource_calculator_started', { source });
  }, [source]);

  const outsourcedShare = result.hours > 0 ? (result.freedMonthlyHours / result.hours) * 100 : 0;
  const remainingShare = 100 - outsourcedShare;
  const differencePositive = result.theoreticalAnnualDifference > 0;

  return (
    <div
      id={id}
      className="scroll-mt-28 overflow-hidden rounded-[1.5rem] border border-ink/[0.08] bg-white shadow-paper lg:grid lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="space-y-6 border-b border-ink/[0.06] p-5 sm:p-7 lg:border-b-0 lg:border-r">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Is uitbesteden financieel interessant?
          </p>
          <h3 className="mt-2 font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
            Bereken de potentiële waarde van vrijgekomen tijd
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink-500">
            Gebruik een realistisch percentage van de werkzaamheden die je daadwerkelijk kunt uitbesteden.
          </p>
        </div>

        <div>
          <FieldLabel>Administratietijd per maand</FieldLabel>
          <AffixInput suffix="uur" value={hoursPerMonth} onChange={setHoursPerMonth} aria-label="Administratietijd per maand" />
        </div>

        <div>
          <FieldLabel>Economische waarde van je tijd</FieldLabel>
          <AffixInput prefix="€" value={hourlyRate} onChange={setHourlyRate} aria-label="Economische waarde per uur" />
        </div>

        <div>
          <FieldLabel>Verwacht percentage uitbesteden</FieldLabel>
          <AffixInput
            suffix="%"
            value={outsourcingPercent}
            onChange={setOutsourcingPercent}
            aria-label="Percentage uitbesteden"
          />
        </div>

        <div>
          <FieldLabel>Verwachte boekhouderkosten per maand</FieldLabel>
          <AffixInput prefix="€" value={monthlyCost} onChange={setMonthlyCost} aria-label="Boekhouderkosten per maand" />
        </div>
      </div>

      <div className="flex flex-col justify-between bg-paper-50 p-5 sm:p-7">
        <div className="space-y-5">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
              Verdeling administratietijd
            </p>
            <div className="mt-3 flex h-3 overflow-hidden rounded-full bg-ink/10" aria-hidden>
              <span className="bg-ember transition-all" style={{ width: `${outsourcedShare}%` }} />
              <span className="bg-ink/25 transition-all" style={{ width: `${remainingShare}%` }} />
            </div>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-sm text-ink-500">
              <p>
                Uitbesteed:{' '}
                <span className="font-medium text-ink">{formatHours(result.freedMonthlyHours)}</span>
              </p>
              <p>
                Blijft over:{' '}
                <span className="font-medium text-ink">{formatHours(result.remainingMonthlyHours)}</span>
              </p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Vrijgekomen tijd per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatHours(result.freedAnnualHours)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Potentiële tijdswaarde
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.potentialAnnualTimeValue)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Boekhouderkosten per jaar
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.annualBookkeeperCost)}
              </p>
            </div>
            <div className="rounded-xl border border-ink/[0.08] bg-white p-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">
                Theoretisch verschil
              </p>
              <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">
                {formatEuro(result.theoreticalAnnualDifference)}
              </p>
            </div>
          </div>

          <p className="text-sm leading-relaxed text-ink-500">
            Benodigde tijdsbesparing om de kosten te compenseren:{' '}
            <span className="font-medium text-ink">
              {formatHoursNl(result.breakEvenMonthlyHours)} per maand
            </span>
            . {differencePositive
              ? 'Bij deze waarden is de potentiële tijdswaarde hoger dan de boekhoudkosten.'
              : 'Bij deze waarden is de potentiële tijdswaarde lager of gelijk aan de boekhoudkosten.'}
          </p>
        </div>

        <div className="mt-6 space-y-3">
          <a
            href="#boekhouder-formulier"
            className={`${btn.primary} w-full`}
            onClick={() => track('outsource_calculator_cta_clicked', { source })}
          >
            Vind een boekhouder voor mijn onderneming
            <ArrowIcon />
          </a>
          <p className="text-[12px] leading-relaxed text-ink-400">
            De berekening geeft inzicht in de potentiële waarde van vrijgekomen tijd. Het resultaat is geen
            gegarandeerde omzetstijging of financiële besparing.
          </p>
        </div>
      </div>
    </div>
  );
}
