'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  AffixInput,
  CalculatorPage,
  FieldHint,
  FieldLabel,
  ResultActions,
  ResultEmpty,
  ResultPanel,
  ToolCard,
  ToolGrid,
  resultButton,
} from '@/components/tools/calculatorUi';
import {
  DEFAULT_INPUTS,
  calculateOutsource,
  describeComparison,
  formatEuro,
  formatHours,
  parseAmount,
} from '@/lib/boekhoudingUitbestedenCalculator';

function CompareBar({ label, amount, max }) {
  const width = max > 0 ? Math.max(6, Math.min(100, (amount / max) * 100)) : 0;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4 text-sm">
        <span className="text-white/70">{label}</span>
        <span className="font-medium tabular text-white">{formatEuro(amount)}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full rounded-full bg-ember" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}

export default function BoekhoudingUitbestedenCalculator() {
  const [invoices, setInvoices] = useState(DEFAULT_INPUTS.invoices);
  const [minutes, setMinutes] = useState(DEFAULT_INPUTS.minutes);
  const [hourly, setHourly] = useState(DEFAULT_INPUTS.hourly);
  const [bookkeeper, setBookkeeper] = useState(DEFAULT_INPUTS.bookkeeper);
  const [remainingHours, setRemainingHours] = useState(DEFAULT_INPUTS.remainingHours);

  const result = useMemo(
    () =>
      calculateOutsource({
        invoices: parseAmount(invoices),
        minutes: parseAmount(minutes),
        hourlyRate: parseAmount(hourly),
        bookkeeperCost: parseAmount(bookkeeper),
        remainingHours: parseAmount(remainingHours),
      }),
    [invoices, minutes, hourly, bookkeeper, remainingHours]
  );

  const reset = () => {
    setInvoices(DEFAULT_INPUTS.invoices);
    setMinutes(DEFAULT_INPUTS.minutes);
    setHourly(DEFAULT_INPUTS.hourly);
    setBookkeeper(DEFAULT_INPUTS.bookkeeper);
    setRemainingHours(DEFAULT_INPUTS.remainingHours);
  };

  const maxBar = result ? Math.max(result.selfValue, result.outsourceValue, 1) : 1;

  return (
    <CalculatorPage
      breadcrumbLabel="Boekhouding uitbesteden calculator"
      title={
        <>
          Zelf boekhouden of <em>uitbesteden?</em>
        </>
      }
      lead="Bereken hoeveel tijd en geld je administratie kost en vergelijk zelf doen met uitbesteden."
    >
      <ToolGrid>
        <ToolCard title="Bereken je kosten" description="Vergelijk je eigen tijd met de kosten van een boekhouder.">
          <div className="space-y-7">
            <div>
              <FieldLabel htmlFor="invoices">Facturen per maand</FieldLabel>
              <AffixInput id="invoices" value={invoices} onChange={setInvoices} inputMode="decimal" />
              <FieldHint className="mt-2">Inkoop- en verkoopfacturen samen.</FieldHint>
            </div>
            <div>
              <FieldLabel htmlFor="minutes">Minuten per factuur</FieldLabel>
              <AffixInput id="minutes" value={minutes} onChange={setMinutes} suffix="min" inputMode="decimal" />
              <FieldHint className="mt-2">Controleren, registreren en betalingen bijhouden.</FieldHint>
            </div>
            <div>
              <FieldLabel htmlFor="hourly">Waarde van je tijd per uur</FieldLabel>
              <AffixInput id="hourly" prefix="€" value={hourly} onChange={setHourly} inputMode="decimal" />
              <FieldHint className="mt-2">
                Bijvoorbeeld je uurtarief. Alleen uren die je productief kunt inzetten hebben financiële waarde.
              </FieldHint>
            </div>
            <div>
              <FieldLabel htmlFor="bookkeeper">Boekhoudkosten per maand</FieldLabel>
              <AffixInput id="bookkeeper" prefix="€" value={bookkeeper} onChange={setBookkeeper} inputMode="decimal" />
              <FieldHint className="mt-2">Een schatting of offerte, geen vaste marktprijs.</FieldHint>
            </div>
            <div>
              <FieldLabel htmlFor="remaining">Eigen tijd na uitbesteden</FieldLabel>
              <AffixInput
                id="remaining"
                value={remainingHours}
                onChange={setRemainingHours}
                suffix="uur"
                inputMode="decimal"
              />
              <FieldHint className="mt-2">Uren die je zelf nog besteedt aan aanleveren en controleren.</FieldHint>
            </div>
          </div>
        </ToolCard>

        <ResultPanel
          title="Jouw resultaat"
          footnote="Indicatieve berekening. De waarde van je tijd is niet automatisch een daadwerkelijke kostenbesparing of extra omzet. De uitkomst houdt geen rekening met aanvullende administratie, softwarekosten of fiscale gevolgen."
        >
          {!result ? (
            <ResultEmpty>Vul alle velden in met een getal van 0 of hoger.</ResultEmpty>
          ) : (
            <>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/65">Zelf verwerken</p>
                  <p className="mt-2 font-display text-3xl leading-none tracking-[-0.03em] text-white tabular">
                    {formatEuro(result.selfValue)}
                  </p>
                  <p className="mt-2 text-sm text-white/55">{formatHours(result.selfHours)} per maand</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-white/65">Uitbesteden</p>
                  <p className="mt-2 font-display text-3xl leading-none tracking-[-0.03em] text-white tabular">
                    {formatEuro(result.outsourceValue)}
                  </p>
                  <p className="mt-2 text-sm text-white/55">
                    {formatEuro(result.bookkeeperCost)} kosten + {formatHours(result.remainingHours)} eigen tijd
                  </p>
                </div>
              </div>

              <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                Vergelijking per maand
              </p>
              <div className="mt-4 space-y-4">
                <CompareBar label="Zelf verwerken" amount={result.selfValue} max={maxBar} />
                <CompareBar label="Uitbesteden" amount={result.outsourceValue} max={maxBar} />
              </div>

              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-white/65">Potentieel verschil per maand</p>
                <p className="mt-2 font-display text-4xl leading-none tracking-[-0.03em] text-white tabular sm:text-5xl">
                  {formatEuro(Math.abs(result.difference))}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{describeComparison(result)}</p>
              </div>

              <ResultActions>
                <Link href="/boekhouder-vinden" className={resultButton.primary}>
                  Vind een boekhouder
                </Link>
                <button type="button" onClick={reset} className={resultButton.secondary}>
                  Opnieuw berekenen
                </button>
              </ResultActions>
            </>
          )}
        </ResultPanel>
      </ToolGrid>
    </CalculatorPage>
  );
}
