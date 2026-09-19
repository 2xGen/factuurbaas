'use client';

import React, { useMemo } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  buildMonthlyOmzetUitgaven,
  buildQuarterlyBtwPosition,
} from '@/lib/dashboardAnalytics';

const COLORS = {
  omzet: '#0A2A4D',
  uitgaven: '#FF7F50',
  btwOmzet: '#0A2A4D',
  btwUitgaven: '#94A3B8',
  btwTeReserveren: '#10B981',
};

const euro = (value) =>
  new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value || 0);

function ChartCard({ title, subtitle, totalLabel, total, children }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-base font-semibold text-deep-blue sm:text-lg">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{subtitle}</p>}
        </div>
        {total != null && (
          <div className="shrink-0 text-right">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
              {totalLabel || 'Totaal'}
            </p>
            <p className="font-heading text-lg font-bold text-deep-blue sm:text-xl">{total}</p>
          </div>
        )}
      </div>
      <div className="h-64 w-full sm:h-72">{children}</div>
    </div>
  );
}

function MoneyTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs shadow-md">
      <p className="mb-1.5 font-semibold text-deep-blue">{label}</p>
      {payload.map((entry) => (
        <div key={entry.dataKey} className="flex items-center justify-between gap-4 py-0.5">
          <span className="flex items-center gap-1.5 text-slate-600">
            <span className="inline-block h-2 w-2 rounded-full" style={{ background: entry.color }} />
            {entry.name}
          </span>
          <span className="font-medium text-slate-900">{euro(entry.value)}</span>
        </div>
      ))}
    </div>
  );
}

export default function DashboardCharts({ invoices = [], expenses = [] }) {
  const monthly = useMemo(
    () => buildMonthlyOmzetUitgaven(invoices, expenses, 6),
    [invoices, expenses]
  );
  const btwQuarters = useMemo(
    () => buildQuarterlyBtwPosition(invoices, expenses, 4),
    [invoices, expenses]
  );

  const hasData = invoices.length > 0 || expenses.length > 0;
  if (!hasData) return null;

  const periodResultaat = monthly.reduce((s, m) => s + (m.resultaat || 0), 0);
  const latestBtw = btwQuarters[btwQuarters.length - 1]?.btwTeReserveren ?? 0;

  const euroFull = (value) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value || 0);

  return (
    <section className="grid gap-4 lg:grid-cols-2">
      <ChartCard
        title="Omzet vs uitgaven"
        subtitle="Excl. btw per maand"
        totalLabel="Resultaat (6 mnd)"
        total={euroFull(periodResultaat)}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={monthly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `€${v >= 1000 ? `${Math.round(v / 1000)}k` : v}`}
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={44}
            />
            <Tooltip content={<MoneyTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} iconType="circle" iconSize={8} />
            <Bar dataKey="omzet" name="Omzet" fill={COLORS.omzet} radius={[4, 4, 0, 0]} maxBarSize={28} />
            <Bar
              dataKey="uitgaven"
              name="Uitgaven"
              fill={COLORS.uitgaven}
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="BTW per kwartaal"
        subtitle="Verkoop-btw − aftrekbaar op uitgaven"
        totalLabel="Laatste kwartaal"
        total={euroFull(latestBtw)}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={btwQuarters} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="label"
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tickFormatter={(v) => `€${v >= 1000 ? `${Math.round(v / 1000)}k` : v}`}
              tick={{ fill: '#64748b', fontSize: 11 }}
              axisLine={false}
              tickLine={false}
              width={44}
            />
            <Tooltip content={<MoneyTooltip />} />
            <Legend wrapperStyle={{ fontSize: 12, paddingTop: 8 }} iconType="circle" iconSize={8} />
            <Bar
              dataKey="btwOmzet"
              name="BTW op omzet"
              fill={COLORS.btwOmzet}
              radius={[4, 4, 0, 0]}
              maxBarSize={22}
            />
            <Bar
              dataKey="btwUitgaven"
              name="BTW op uitgaven"
              fill={COLORS.btwUitgaven}
              radius={[4, 4, 0, 0]}
              maxBarSize={22}
            />
            <Bar
              dataKey="btwTeReserveren"
              name="Te reserveren"
              fill={COLORS.btwTeReserveren}
              radius={[4, 4, 0, 0]}
              maxBarSize={22}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </section>
  );
}
