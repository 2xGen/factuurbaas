'use client';

import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { buildMonthlyCashflow, buildQuarterlyBtw } from '@/lib/dashboardAnalytics';

const COLORS = {
  gestuurd: '#0A2A4D',
  openstaand: '#FF7F50',
  betaald: '#10B981',
  btwTotaal: '#0A2A4D',
  btwOpen: '#FF7F50',
  btwBetaald: '#10B981',
};

const euro = (value) =>
  new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(value || 0);

function ChartCard({ title, subtitle, total, children }) {
  return (
    <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-heading text-base font-semibold text-deep-blue sm:text-lg">{title}</h3>
          {subtitle && <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{subtitle}</p>}
        </div>
        {total != null && (
          <div className="shrink-0 text-right">
            <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Totaal btw</p>
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

export default function DashboardCharts({ invoices }) {
  const cashflow = useMemo(() => buildMonthlyCashflow(invoices, 6), [invoices]);
  const btwQuarters = useMemo(() => buildQuarterlyBtw(invoices, 4), [invoices]);
  const totalBtw = useMemo(
    () => invoices.reduce((sum, inv) => sum + (Number(inv.total_btw) || 0), 0),
    [invoices]
  );

  if (!invoices?.length) return null;

  const euroFull = (value) =>
    new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(value || 0);

  return (
    <section className="mb-10 grid gap-4 lg:grid-cols-2">
      <ChartCard
        title="Cashflow"
        subtitle="Gestuurde facturen per maand — openstaand vs betaald"
      >
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={cashflow} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gestuurdFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={COLORS.gestuurd} stopOpacity={0.18} />
                <stop offset="100%" stopColor={COLORS.gestuurd} stopOpacity={0} />
              </linearGradient>
            </defs>
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
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              iconType="circle"
              iconSize={8}
            />
            <Area
              type="monotone"
              dataKey="gestuurd"
              name="Gestuurd"
              stroke={COLORS.gestuurd}
              fill="url(#gestuurdFill)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="betaald"
              name="Betaald"
              stroke={COLORS.betaald}
              fill="transparent"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="openstaand"
              name="Openstaand"
              stroke={COLORS.openstaand}
              fill="transparent"
              strokeWidth={2}
              strokeDasharray="4 3"
            />
          </AreaChart>
        </ResponsiveContainer>
      </ChartCard>

      <ChartCard
        title="Btw verstuurd per kwartaal"
        subtitle="Btw op verstuurde facturen per kwartaal"
        total={euroFull(totalBtw)}
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
            <Legend
              wrapperStyle={{ fontSize: 12, paddingTop: 8 }}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="btwTotaal"
              name="Btw verstuurd"
              fill={COLORS.btwTotaal}
              radius={[4, 4, 0, 0]}
              maxBarSize={48}
            />
          </BarChart>
        </ResponsiveContainer>
      </ChartCard>
    </section>
  );
}
