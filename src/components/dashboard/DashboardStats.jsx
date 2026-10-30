'use client';

import React from 'react';
import Link from 'next/link';
import { Info } from 'lucide-react';
import { formatEuro } from '@/lib/dashboardCockpit';
import { cn } from '@/lib/utils';

function InfoClip({ label, children, light }) {
  return (
    <details className="relative">
      <summary
        className={cn(
          'flex cursor-pointer list-none items-center [&::-webkit-details-marker]:hidden',
          light ? 'text-white/70 hover:text-white' : 'text-slate-400 hover:text-deep-blue'
        )}
      >
        <Info className="h-3.5 w-3.5" aria-hidden />
        <span className="sr-only">{label}</span>
      </summary>
      <div className="absolute left-0 z-10 mt-2 w-64 rounded-xl border border-slate-200 bg-white p-3 text-xs leading-relaxed text-slate-600 shadow-lg">
        {children}
      </div>
    </details>
  );
}

function StatCard({ label, value, hint, href, highlight }) {
  const figure = (
    <p
      className={cn(
        'mt-2 font-heading text-[1.65rem] font-bold tracking-tight sm:text-3xl',
        highlight ? 'text-white' : 'text-deep-blue'
      )}
    >
      {value}
    </p>
  );

  const body = (
    <>
      <div className="flex items-center gap-1.5">
        {href ? (
          <Link href={href} className={cn('text-xs', highlight ? 'text-white/70' : 'text-slate-500')}>
            {label}
          </Link>
        ) : (
          <p className={cn('text-xs', highlight ? 'text-white/70' : 'text-slate-500')}>{label}</p>
        )}
        {hint && (
          <InfoClip label={`Toelichting bij ${label}`} light={highlight}>
            {hint}
          </InfoClip>
        )}
      </div>
      {href ? (
        <Link href={href} className="block">
          {figure}
        </Link>
      ) : (
        figure
      )}
    </>
  );

  const className = cn(
    'rounded-xl p-4',
    highlight
      ? 'bg-deep-blue text-white shadow-[0_12px_24px_-12px_rgba(10,42,77,0.6)]'
      : 'border border-slate-200/80 bg-white'
  );

  return (
    <div className={cn(className, href && 'transition hover:border-deep-blue/20')}>{body}</div>
  );
}

function roundMoney(n) {
  return Math.round(n * 100) / 100;
}

export default function DashboardStats({
  invoicedIncl = 0,
  paidIncl = 0,
  outstandingIncl = 0,
}) {
  return (
    <section className="mb-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Gefactureerd"
          value={formatEuro(roundMoney(invoicedIncl))}
          hint="Totaal van al je facturen, inclusief btw. Elke factuur telt één keer mee voor het hele bedrag."
          href="/facturen"
        />
        <StatCard
          label="Betaald"
          value={formatEuro(roundMoney(paidIncl))}
          hint="Facturen die je zelf als betaald hebt gemarkeerd, inclusief btw. FactuurBaas controleert niet of het geld is bijgeschreven. Deelbetalingen worden niet apart bijgehouden."
          href="/facturen"
        />
        <StatCard
          label="Openstaand"
          value={formatEuro(roundMoney(outstandingIncl))}
          hint="Facturen die nog niet als betaald zijn gemarkeerd, ook als de vervaldatum voorbij is. Inclusief btw. Gefactureerd min betaald."
          href="/facturen"
          highlight
        />
      </div>
    </section>
  );
}
