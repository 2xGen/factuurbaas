import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FilePlus2, FileText, Wallet, CheckCircle2, Percent, Receipt } from 'lucide-react';

function StatCard({ icon: Icon, label, value, hint }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
      <div className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-500">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-deep-blue">
          <Icon className="h-4 w-4" strokeWidth={1.75} />
        </span>
        {label}
      </div>
      <p className="font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">{value}</p>
      {hint && <p className="mt-1 text-xs text-slate-500">{hint}</p>}
    </div>
  );
}

const DashboardStats = ({
  invoiceCount,
  totalOutstandingAmount,
  outstandingInvoicesCount,
  totalPaidAmount,
  totalOutstandingBtw,
  totalBtw,
  hasInvoices,
}) => {
  const fmt = (n) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(n || 0);

  if (!hasInvoices) {
    return (
      <div className="mb-10 rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center shadow-sm">
        <h2 className="font-heading text-xl font-semibold text-deep-blue">Nog geen facturen</h2>
        <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
          Maak een factuur en klik op <strong>Factuur opslaan</strong> (of download terwijl je bent
          ingelogd) — dan verschijnt hij hier met openstaand bedrag, btw en status.
        </p>
        <Button asChild className="mt-6 rounded-xl bg-deep-blue px-5 font-semibold hover:bg-deep-blue/90">
          <Link href="/create-invoice">
            <FilePlus2 className="mr-2 h-4 w-4" /> Maak factuur
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mb-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      <StatCard
        icon={FileText}
        label="Facturen"
        value={String(invoiceCount)}
        hint="Totaal opgeslagen"
      />
      <StatCard
        icon={Wallet}
        label="Openstaand"
        value={fmt(totalOutstandingAmount)}
        hint={
          outstandingInvoicesCount === 1
            ? '1 factuur'
            : `${outstandingInvoicesCount} facturen`
        }
      />
      <StatCard
        icon={CheckCircle2}
        label="Betaald"
        value={fmt(totalPaidAmount)}
        hint="Status: betaald"
      />
      <StatCard
        icon={Receipt}
        label="Totaal btw"
        value={fmt(totalBtw)}
        hint="Op alle facturen"
      />
      <StatCard
        icon={Percent}
        label="Btw openstaand"
        value={fmt(totalOutstandingBtw)}
        hint="Nog te ontvangen"
      />
    </div>
  );
};

export default DashboardStats;
