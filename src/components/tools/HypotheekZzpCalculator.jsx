'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { Calculator, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  calculateMaxHypotheek,
  formatEuro,
  parseAmount,
} from '@/lib/hypotheekCalculator';
import { TOOL_LOG_TABLES } from '@/lib/toolUsageLog';
import { useDebouncedCalculationLog } from '@/hooks/useDebouncedCalculationLog';

function MoneyInput({ id, label, hint, value, onChange }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      {hint && <p className="mb-2 text-xs text-slate-500">{hint}</p>}
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

export default function HypotheekZzpCalculator() {
  const [inkomen, setInkomen] = useState('');
  const [verplichtingen, setVerplichtingen] = useState('');
  const [rente, setRente] = useState('4');

  const result = useMemo(
    () =>
      calculateMaxHypotheek({
        toetsinkomen: parseAmount(inkomen),
        maandelijkseVerplichtingen: parseAmount(verplichtingen) || 0,
        rentePercent: parseAmount(rente) ?? 4,
      }),
    [inkomen, verplichtingen, rente]
  );

  const calculationFingerprint = result
    ? `${result.toetsinkomen}-${result.maandelijkseVerplichtingen}-${result.rentePercent}`
    : null;
  useDebouncedCalculationLog(TOOL_LOG_TABLES.hypotheek, calculationFingerprint);

  return (
    <div className="mx-auto max-w-3xl">
      <div className="mb-6">
        <Link
          href="/tools/hypotheek-zzp"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-warm-orange"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar uitleg hypotheek zzp
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 flex items-start gap-3">
          <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50 text-deep-blue">
            <Calculator className="h-5 w-5" />
          </div>
          <div>
            <h1 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
              Hypotheek berekenen als zzp&apos;er
            </h1>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 sm:text-base">
              Vul je toetsinkomen in en krijg een eerste indicatie van je maximale hypotheek. Dit is
              geen hypotheekadvies of offerte.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <MoneyInput
            id="toetsinkomen"
            label="Toetsinkomen per jaar"
            hint="Bijvoorbeeld je vastgestelde ondernemersinkomen of winstindicatie."
            value={inkomen}
            onChange={setInkomen}
          />
          <MoneyInput
            id="verplichtingen"
            label="Maandelijkse verplichtingen"
            hint="Optioneel: studieschuld, lease, leningen, etc."
            value={verplichtingen}
            onChange={setVerplichtingen}
          />
          <div className="sm:col-span-2 sm:max-w-xs">
            <label htmlFor="rente" className="mb-2 block text-sm font-medium text-slate-700">
              Rente (indicatief)
            </label>
            <p className="mb-2 text-xs text-slate-500">
              Gebruik een realistische rente voor je berekening.
            </p>
            <div className="relative">
              <Input
                id="rente"
                type="text"
                inputMode="decimal"
                value={rente}
                onChange={(e) => setRente(e.target.value)}
                className="h-12 pr-10 text-lg"
              />
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                %
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
          {result ? (
            <>
              <p className="text-sm font-medium text-slate-500">Indicatie maximale hypotheek</p>
              <p className="mt-1 font-heading text-3xl font-bold text-deep-blue sm:text-4xl">
                {formatEuro(result.maxHypotheek)}
              </p>
              <dl className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                <div className="flex justify-between gap-2 sm:block">
                  <dt>Max. maandlast (indicatief)</dt>
                  <dd className="font-medium text-slate-800">{formatEuro(result.maxMaandlast)}</dd>
                </div>
                <div className="flex justify-between gap-2 sm:block">
                  <dt>Gebruikte rente</dt>
                  <dd className="font-medium text-slate-800">{result.rentePercent}%</dd>
                </div>
              </dl>
            </>
          ) : (
            <p className="text-slate-600">
              Vul je toetsinkomen in om een indicatie te zien.
            </p>
          )}
        </div>

        <p className="mt-4 text-xs leading-relaxed text-slate-500">
          De berekening is indicatief en gebaseerd op een vereenvoudigd model. De uiteindelijke
          maximale hypotheek wordt bepaald door de geldverstrekker op basis van je volledige
          situatie, documenten en de geldende acceptatievoorwaarden.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/tools/hypotheek-zzp">Lees meer over hypotheek als zzp&apos;er</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-xl">
            <Link href="/tools">Andere tools</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
