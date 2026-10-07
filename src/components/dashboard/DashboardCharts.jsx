'use client';

import React, { useMemo } from 'react';
import { buildMonthlyOmzetUitgaven } from '@/lib/dashboardAnalytics';
import { formatEuro } from '@/lib/dashboardCockpit';

export default function DashboardCharts({ invoices = [], expenses = [], incomes = [] }) {
  const monthly = useMemo(
    () => buildMonthlyOmzetUitgaven(invoices, expenses, 6, incomes),
    [invoices, expenses, incomes]
  );

  const max = Math.max(1, ...monthly.flatMap((m) => [m.omzet, m.uitgaven]));
  const currentKey = monthly[monthly.length - 1]?.label;

  return (
    <div className="rounded-xl border border-slate-200/80 bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-semibold text-deep-blue">Inkomsten en uitgaven</p>
        <div className="flex items-center gap-3 text-[11px] text-slate-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-deep-blue" /> In
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-warm-orange/80" /> Uit
          </span>
        </div>
      </div>
      <div className="relative mt-5 h-36 sm:h-40">
        <div className="absolute inset-0 flex flex-col justify-between" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="border-t border-dashed border-slate-200" />
          ))}
        </div>
        <div className="relative flex h-full items-end justify-between gap-2 sm:gap-3">
          {monthly.map((m) => {
            const current = m.label === currentKey;
            return (
              <div key={m.label} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                <div className="flex h-full w-full items-end justify-center gap-1">
                  <span
                    className={`block w-full max-w-[14px] rounded-t-[3px] ${current ? 'bg-deep-blue' : 'bg-deep-blue/80'}`}
                    style={{ height: m.omzet ? `${Math.max(2, (m.omzet / max) * 100)}%` : '0%' }}
                    title={`Inkomsten ${formatEuro(m.omzet)}`}
                  />
                  <span
                    className="block w-full max-w-[14px] rounded-t-[3px] bg-warm-orange/80"
                    style={{ height: m.uitgaven ? `${Math.max(2, (m.uitgaven / max) * 100)}%` : '0%' }}
                    title={`Uitgaven ${formatEuro(m.uitgaven)}`}
                  />
                </div>
                <span
                  className={`font-mono text-[10px] ${current ? 'font-semibold text-deep-blue' : 'text-slate-400'}`}
                >
                  {m.label.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
