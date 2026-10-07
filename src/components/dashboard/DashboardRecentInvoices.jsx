'use client';

import React from 'react';
import Link from 'next/link';
import { formatEuro, clientLabel } from '@/lib/dashboardCockpit';
import { getStatusInfo } from '@/lib/invoiceUtils';
import { cn } from '@/lib/utils';

const STATUS_TONES = {
  paid: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  open: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  late: 'bg-rose-50 text-rose-700 ring-rose-600/15',
};

function toneFromInvoice(invoice) {
  if (invoice.status === 'paid') return 'paid';
  const info = getStatusInfo(invoice);
  if (info.days != null && info.days < 0) return 'late';
  return 'open';
}

function statusLabel(invoice) {
  if (invoice.status === 'paid') return 'Betaald';
  const info = getStatusInfo(invoice);
  if (info.days != null && info.days < 0) return 'Te laat';
  return 'Open';
}

export default function DashboardRecentInvoices({ invoices = [] }) {
  const rows = [...invoices]
    .sort((a, b) => String(b.invoiceDate || b.created_at || '').localeCompare(String(a.invoiceDate || a.created_at || '')))
    .slice(0, 3);

  return (
    <section className="rounded-xl border border-slate-200/80 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <p className="text-sm font-semibold text-deep-blue">Recente facturen</p>
        <Link href="/facturen" className="text-xs font-medium text-slate-400 hover:text-deep-blue">
          Bekijk alles
        </Link>
      </div>
      {rows.length === 0 ? (
        <p className="px-4 py-6 text-sm text-slate-500">Nog geen facturen. Maak er een, of voeg een inkomst toe.</p>
      ) : (
        <ul className="divide-y divide-slate-100 text-[13px]">
          {rows.map((invoice) => {
            const tone = toneFromInvoice(invoice);
            return (
              <li key={invoice.id} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-2.5">
                <span className="min-w-0">
                  <span className="block truncate font-medium text-deep-blue">{clientLabel(invoice)}</span>
                  <span className="block font-mono text-[10px] text-slate-400">
                    #{invoice.invoice_number || String(invoice.id).slice(0, 8)}
                  </span>
                </span>
                <span className="tabular-nums text-deep-blue">
                  {formatEuro(invoice.total_incl || invoice.total_excl || 0)}
                </span>
                <span
                  className={cn(
                    'inline-flex w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset',
                    STATUS_TONES[tone]
                  )}
                >
                  {statusLabel(invoice)}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
