import React from 'react';
import Link from 'next/link';
import { Percent, PiggyBank, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { formatEuro } from '@/lib/dashboardCockpit';
import { cn } from '@/lib/utils';

function MetricCard({ icon: Icon, label, value, hint, href, actionLabel, valueClassName }) {
  const body = (
    <>
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-deep-blue">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        {label}
      </div>
      <p
        className={cn(
          'font-heading text-2xl font-bold tracking-tight sm:text-3xl',
          valueClassName || 'text-deep-blue'
        )}
      >
        {value}
      </p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
      {actionLabel && (
        <p className="mt-3 text-xs font-semibold text-warm-orange group-hover:underline">
          {actionLabel}
        </p>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group block rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-deep-blue/20 hover:shadow-md"
      >
        {body}
      </Link>
    );
  }

  return <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">{body}</div>;
}

/**
 * Layer B — How is my business doing?
 */
export default function DashboardStats({
  revenueThisMonth = 0,
  expensesThisMonth = 0,
  resultaat = 0,
  salesBtwThisMonth = 0,
  expensesBtwThisMonth = 0,
  btwTeReserveren = 0,
  totalOutstandingAmount = 0,
  outstandingInvoicesCount = 0,
  monthlyFixedCosts = 0,
}) {
  return (
    <section className="mb-8">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Hoe gaat het?</p>
        <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
          Je cijfers in één oogopslag
        </h2>
        <p className="mt-1 text-sm text-slate-500">Bedragen deze maand, excl. btw (behalve openstaand).</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <MetricCard
          icon={TrendingUp}
          label="Omzet"
          value={formatEuro(revenueThisMonth)}
          hint="Deze maand · excl. btw"
          href="/facturen"
        />
        <MetricCard
          icon={TrendingDown}
          label="Uitgaven"
          value={formatEuro(expensesThisMonth)}
          hint="Deze maand · excl. btw"
          href="/uitgaven"
          actionLabel="Uitgaven beheren"
        />
        <MetricCard
          icon={PiggyBank}
          label="Resultaat"
          value={formatEuro(resultaat)}
          hint="Omzet − uitgaven"
          valueClassName={resultaat >= 0 ? 'text-emerald-700' : 'text-red-600'}
        />
        <MetricCard
          icon={Percent}
          label="BTW te reserveren"
          value={formatEuro(btwTeReserveren)}
          hint={`Verkoop ${formatEuro(salesBtwThisMonth)} − aftrek ${formatEuro(expensesBtwThisMonth)}`}
          href="/uitgaven"
        />
        <MetricCard
          icon={Wallet}
          label="Openstaand"
          value={formatEuro(totalOutstandingAmount)}
          hint={
            outstandingInvoicesCount === 1
              ? '1 factuur · incl. btw'
              : `${outstandingInvoicesCount} facturen · incl. btw`
          }
          href="/facturen"
        />
      </div>

      {monthlyFixedCosts > 0 && (
        <div className="mt-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 shadow-sm sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-semibold text-deep-blue">
              Vaste zakelijke lasten ≈ {formatEuro(monthlyFixedCosts)} / maand
            </p>
            <p className="mt-0.5 text-xs text-slate-500">
              Op basis van je terugkerende uitgaven — handig voor je uurtarief.
            </p>
          </div>
          <Link
            href="/tools/uurtarief-calculator/maken"
            className="mt-3 inline-flex text-sm font-semibold text-warm-orange hover:underline sm:mt-0"
          >
            Bereken uurtarief
          </Link>
        </div>
      )}
    </section>
  );
}
