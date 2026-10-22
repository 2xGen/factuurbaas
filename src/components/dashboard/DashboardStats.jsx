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

export function DashboardSideMetrics({
  totalOutstandingAmount = 0,
  outstandingInvoicesCount = 0,
  btwTeReserveren = 0,
  salesBtwThisMonth = 0,
  expensesBtwThisMonth = 0,
}) {
  const openHint =
    outstandingInvoicesCount === 1 ? '1 factuur open' : `${outstandingInvoicesCount} facturen open`;

  return (
    <div className="grid gap-3">
      <Link
        href="/facturen"
        className="rounded-xl border border-slate-200/80 bg-white p-4 transition hover:border-deep-blue/20"
      >
        <p className="text-xs text-slate-500">Moet je nog ontvangen</p>
        <p className="mt-1.5 font-heading text-2xl font-bold text-deep-blue">
          {formatEuro(totalOutstandingAmount)}
        </p>
        <p className="mt-2 text-[11px] text-slate-400">{openHint}</p>
      </Link>
      <Link
        href="/uitgaven"
        className="rounded-xl border border-slate-200/80 bg-white p-4 transition hover:border-deep-blue/20"
      >
        <p className="text-xs text-slate-500">Geschatte btw</p>
        <p className="mt-1.5 font-heading text-2xl font-bold text-deep-blue">
          {formatEuro(btwTeReserveren)}
        </p>
        <p className="mt-2 text-[11px] leading-snug text-slate-400">
          {formatEuro(salesBtwThisMonth)} verkoop − {formatEuro(expensesBtwThisMonth)} aftrek. Indicatie op basis van je geregistreerde facturen en uitgaven, niet het definitief verschuldigde bedrag.
        </p>
      </Link>
    </div>
  );
}

function roundMoney(n) {
  return Math.round(n * 100) / 100;
}

export default function DashboardStats({
  revenueExcl = 0,
  revenueBtw = 0,
  expensesExcl = 0,
  expensesBtw = 0,
}) {
  const received = roundMoney(revenueExcl + revenueBtw);
  const paid = roundMoney(expensesExcl + expensesBtw);
  const kept = roundMoney(received - paid);

  return (
    <section className="mb-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Geregistreerde inkomsten"
          value={formatEuro(received)}
          hint={
            <>
              <p>
                {formatEuro(revenueExcl)} + {formatEuro(revenueBtw)} btw.
              </p>
              <p className="mt-2">
                Een factuur telt mee in de maand van de factuurdatum, ook als hij nog openstaat. Op betaald zetten telt hem niet nog een keer. Verkoop zonder factuur zet je bij Inkomsten. Dit is geen volledige boekhouding.
              </p>
            </>
          }
          href="/inkomsten"
        />
        <StatCard
          label="Geregistreerde uitgaven"
          value={formatEuro(paid)}
          hint={`${formatEuro(expensesExcl)} + ${formatEuro(expensesBtw)} btw. Alleen de uitgaven die je hebt ingevuld.`}
          href="/uitgaven"
        />
        <StatCard
          label="Resultaat op basis van je invoer"
          value={formatEuro(kept)}
          hint={
            <>
              <p>
                {formatEuro(received)} − {formatEuro(paid)}.
              </p>
              <p className="mt-2">
                Dit is het verschil tussen je geregistreerde inkomsten en uitgaven, inclusief btw. Het is geen nettowinst en geen besteedbaar inkomen. Belasting en posten die je niet hebt ingevuld zitten hier niet in.
              </p>
            </>
          }
          highlight
        />
      </div>
    </section>
  );
}
