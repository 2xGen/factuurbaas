'use client';

import React from 'react';
import Link from 'next/link';
import { formatEuro } from '@/lib/dashboardCockpit';
import { cn } from '@/lib/utils';

function StatCard({ label, value, hint, href, highlight }) {
  const body = (
    <>
      <p className={cn('text-xs', highlight ? 'text-white/70' : 'text-slate-500')}>{label}</p>
      <p
        className={cn(
          'mt-2 font-heading text-[1.65rem] font-bold tracking-tight sm:text-3xl',
          highlight ? 'text-white' : 'text-deep-blue'
        )}
      >
        {value}
      </p>
      {hint && (
        <p className={cn('mt-1.5 text-xs leading-snug', highlight ? 'text-white/55' : 'text-slate-500')}>
          {hint}
        </p>
      )}
    </>
  );

  const className = cn(
    'rounded-xl p-4',
    highlight
      ? 'bg-deep-blue text-white shadow-[0_12px_24px_-12px_rgba(10,42,77,0.6)]'
      : 'border border-slate-200/80 bg-white'
  );

  if (href) {
    return (
      <Link href={href} className={cn(className, 'transition hover:border-deep-blue/20')}>
        {body}
      </Link>
    );
  }

  return <div className={className}>{body}</div>;
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
        <p className="text-xs text-slate-500">Btw apart houden</p>
        <p className="mt-1.5 font-heading text-2xl font-bold text-deep-blue">
          {formatEuro(btwTeReserveren)}
        </p>
        <p className="mt-2 text-[11px] text-slate-400">
          {formatEuro(salesBtwThisMonth)} verkoop − {formatEuro(expensesBtwThisMonth)} aftrek
        </p>
      </Link>
    </div>
  );
}

export default function DashboardStats({
  revenueThisMonth = 0,
  expensesThisMonth = 0,
  resultaat = 0,
}) {
  return (
    <section className="mb-3">
      <div className="grid gap-3 sm:grid-cols-3">
        <StatCard
          label="Je verdiende"
          value={formatEuro(revenueThisMonth)}
          hint="Deze maand, excl. btw"
          href="/inkomsten"
        />
        <StatCard
          label="Je gaf uit"
          value={formatEuro(expensesThisMonth)}
          hint="Zakelijke uitgaven"
          href="/uitgaven"
        />
        <StatCard
          label="Je hield over"
          value={formatEuro(resultaat)}
          hint="Inkomsten minus uitgaven"
          highlight
        />
      </div>
    </section>
  );
}
