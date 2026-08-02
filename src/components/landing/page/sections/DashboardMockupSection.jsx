'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ArrowRight,
  Bell,
  CheckCircle2,
  FileText,
  Percent,
  Receipt,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';

const COLORS = {
  gestuurd: '#0A2A4D',
  openstaand: '#FF7F50',
  betaald: '#10B981',
  btw: '#0A2A4D',
};

const DEMO_CASHFLOW = [
  { label: "mrt '26", gestuurd: 0, betaald: 0, openstaand: 0 },
  { label: "apr '26", gestuurd: 185, betaald: 185, openstaand: 0 },
  { label: "mei '26", gestuurd: 240, betaald: 120, openstaand: 120 },
  { label: "jun '26", gestuurd: 0, betaald: 0, openstaand: 0 },
  { label: "jul '26", gestuurd: 310, betaald: 310, openstaand: 0 },
  { label: "aug '26", gestuurd: 302.5, betaald: 302.5, openstaand: 0 },
];

const DEMO_BTW = [
  { label: 'Q4 2025', btwTotaal: 18 },
  { label: 'Q1 2026', btwTotaal: 42 },
  { label: 'Q2 2026', btwTotaal: 55 },
  { label: 'Q3 2026', btwTotaal: 52.5 },
];

const DEMO_INVOICES = [
  {
    nr: '#8e54e6d8',
    klant: 'Studio Noord',
    datum: '1 aug. 2026',
    verval: '15 aug. 2026',
    bedrag: '€ 302,50',
    status: 'Betaald',
    paid: true,
  },
  {
    nr: '#a21c90f2',
    klant: 'Bakkerij De Wind',
    datum: '12 mei 2026',
    verval: '26 mei 2026',
    bedrag: '€ 120,00',
    status: 'Openstaand',
    paid: false,
  },
  {
    nr: '#c4f01ab3',
    klant: 'TechFix Utrecht',
    datum: '3 jul. 2026',
    verval: '17 jul. 2026',
    bedrag: '€ 310,00',
    status: 'Betaald',
    paid: true,
  },
];

const STATS = [
  { icon: FileText, label: 'Facturen', value: '3', hint: 'Totaal opgeslagen' },
  { icon: Wallet, label: 'Openstaand', value: '€ 120,00', hint: '1 factuur' },
  { icon: CheckCircle2, label: 'Betaald', value: '€ 612,50', hint: 'Status: betaald' },
  { icon: Receipt, label: 'Totaal btw', value: '€ 127,50', hint: 'Op alle facturen' },
  { icon: Percent, label: 'Btw openstaand', value: '€ 20,83', hint: 'Nog te ontvangen' },
];

const HIGHLIGHTS = [
  { title: 'Factuurstatus', text: 'Openstaand of betaald — in één oogopslag.' },
  { title: 'Btw per kwartaal', text: 'Zie wat je hebt verstuurd, klaar voor je aangifte.' },
  { title: 'Cashflow', text: 'Gestuurd, openstaand en betaald per maand.' },
  { title: 'Herinneringen', text: 'Kopieer vriendelijke of zakelijke templates.' },
];

function euroTick(v) {
  return `€${v >= 1000 ? `${Math.round(v / 1000)}k` : v}`;
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
          <span className="font-medium text-slate-900">
            {new Intl.NumberFormat('nl-NL', { style: 'currency', currency: 'EUR' }).format(
              entry.value || 0
            )}
          </span>
        </div>
      ))}
    </div>
  );
}

function StatMini({ icon: Icon, label, value, hint }) {
  return (
    <div className="min-w-0 rounded-xl border border-slate-200/80 bg-white px-3 py-3 sm:px-4 sm:py-3.5">
      <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
        <Icon className="h-3.5 w-3.5 text-deep-blue" strokeWidth={1.75} />
        {label}
      </div>
      <p className="font-heading text-base font-bold tracking-tight text-deep-blue sm:text-lg">
        {value}
      </p>
      <p className="mt-0.5 truncate text-[10px] text-slate-400 sm:text-xs">{hint}</p>
    </div>
  );
}

export default function DashboardMockupSection() {
  return (
    <LandingSection bg="muted" className="overflow-hidden">
      <SectionHeader
        eyebrow="Dashboard"
        title="Houd overzicht — niet alleen een PDF"
        description="Sla facturen op, volg openstaande bedragen, zie btw per kwartaal en stuur herinneringen. Alles in één plek."
      />

      <div className="mx-auto mb-10 grid max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {HIGHLIGHTS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
          >
            <p className="font-heading text-sm font-semibold text-deep-blue sm:text-base">
              {item.title}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="relative mx-auto max-w-6xl"
      >
        <div
          className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-deep-blue/15 via-transparent to-warm-orange/20 blur-2xl sm:-inset-8"
          aria-hidden
        />

        <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-[#f4f6f9] shadow-2xl shadow-deep-blue/10 sm:rounded-3xl">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-slate-200/80 bg-white px-4 py-3 sm:px-5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <div className="ml-3 flex-1 truncate rounded-md bg-slate-100 px-3 py-1 text-center text-[11px] text-slate-500 sm:text-xs">
              factuurbaas.nl/dashboard
            </div>
          </div>

          <div className="p-3 sm:p-5 lg:p-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-heading text-lg font-bold text-deep-blue sm:text-xl">Dashboard</p>
                <p className="text-xs text-slate-500 sm:text-sm">Voorbeeldoverzicht met demo-data</p>
              </div>
              <span className="rounded-full bg-deep-blue/5 px-3 py-1 text-[11px] font-medium text-deep-blue">
                Met gratis account
              </span>
            </div>

            <div className="mb-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 sm:gap-3">
              {STATS.map((s) => (
                <StatMini key={s.label} {...s} />
              ))}
            </div>

            <div className="mb-4 grid gap-3 lg:grid-cols-2">
              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4">
                <div className="mb-3">
                  <h3 className="font-heading text-sm font-semibold text-deep-blue sm:text-base">
                    Cashflow
                  </h3>
                  <p className="text-[11px] text-slate-500 sm:text-xs">
                    Gestuurde facturen — openstaand vs betaald
                  </p>
                </div>
                <div className="h-44 w-full sm:h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={DEMO_CASHFLOW} margin={{ top: 4, right: 4, left: -8, bottom: 0 }}>
                      <defs>
                        <linearGradient id="homeGestuurdFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor={COLORS.gestuurd} stopOpacity={0.18} />
                          <stop offset="100%" stopColor={COLORS.gestuurd} stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tickFormatter={euroTick}
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                      />
                      <Tooltip content={<MoneyTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="gestuurd"
                        name="Gestuurd"
                        stroke={COLORS.gestuurd}
                        fill="url(#homeGestuurdFill)"
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
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-deep-blue sm:text-base">
                      Btw per kwartaal
                    </h3>
                    <p className="text-[11px] text-slate-500 sm:text-xs">
                      Btw op verstuurde facturen
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Totaal btw
                    </p>
                    <p className="font-heading text-base font-bold text-deep-blue">€ 127,50</p>
                  </div>
                </div>
                <div className="h-44 w-full sm:h-52">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={DEMO_BTW} margin={{ top: 4, right: 4, left: -8, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
                      <XAxis
                        dataKey="label"
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        tickFormatter={euroTick}
                        tick={{ fill: '#64748b', fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                        width={36}
                      />
                      <Tooltip content={<MoneyTooltip />} />
                      <Bar
                        dataKey="btwTotaal"
                        name="Btw verstuurd"
                        fill={COLORS.btw}
                        radius={[4, 4, 0, 0]}
                        maxBarSize={40}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="grid gap-3 lg:grid-cols-[1.4fr_0.9fr]">
              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5 sm:px-4">
                  <p className="font-heading text-sm font-semibold text-deep-blue">Facturen</p>
                  <div className="flex gap-1.5">
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      JSON
                    </span>
                    <span className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600">
                      CSV
                    </span>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[520px] text-left text-xs sm:text-sm">
                    <thead>
                      <tr className="border-b border-slate-100 text-[10px] uppercase tracking-wide text-slate-400 sm:text-[11px]">
                        <th className="px-3 py-2 font-medium sm:px-4">Nr.</th>
                        <th className="px-3 py-2 font-medium">Klant</th>
                        <th className="px-3 py-2 font-medium">Datum</th>
                        <th className="px-3 py-2 font-medium">Bedrag</th>
                        <th className="px-3 py-2 font-medium sm:px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {DEMO_INVOICES.map((inv) => (
                        <tr key={inv.nr} className="border-b border-slate-50 last:border-0">
                          <td className="px-3 py-2.5 font-mono text-[11px] text-slate-500 sm:px-4">
                            {inv.nr}
                          </td>
                          <td className="px-3 py-2.5 font-medium text-deep-blue">{inv.klant}</td>
                          <td className="px-3 py-2.5 text-slate-600">{inv.datum}</td>
                          <td className="px-3 py-2.5 font-medium text-slate-800">{inv.bedrag}</td>
                          <td className="px-3 py-2.5 sm:px-4">
                            <span
                              className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-semibold sm:text-[11px] ${
                                inv.paid
                                  ? 'bg-emerald-50 text-emerald-700'
                                  : 'bg-orange-50 text-warm-orange'
                              }`}
                            >
                              {inv.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:p-5">
                <div className="mb-3 flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-warm-orange/10 text-warm-orange">
                    <Bell className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-heading text-sm font-semibold text-deep-blue">
                      Herinneringstemplate
                    </p>
                    <p className="text-[11px] text-slate-500">Vriendelijk · klaar om te kopiëren</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-2">
                  <span className="rounded-lg bg-deep-blue px-2.5 py-1 text-[11px] font-medium text-white">
                    Vriendelijk
                  </span>
                  <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-500">
                    Zakelijk
                  </span>
                </div>
                <div className="rounded-xl bg-slate-50 p-3 text-[11px] leading-relaxed text-slate-600 sm:text-xs">
                  <p className="mb-2 font-medium text-slate-700">
                    Onderwerp: Vriendelijke herinnering: openstaande factuur #a21c90f2
                  </p>
                  <p>
                    Beste Bakkerij De Wind,
                    <br />
                    <br />
                    Er is nog een openstaand bedrag voor factuur #a21c90f2 van 26 mei 2026. Misschien
                    is deze per ongeluk blijven liggen?
                    <br />
                    <br />
                    Bedrag: € 120,00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15, duration: 0.4 }}
        className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-12 sm:flex-row"
      >
        <Button asChild size="lg" className="h-12 rounded-xl px-7 font-semibold">
          <Link href="/create-invoice">
            Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-xl border-slate-300 px-7 font-semibold text-deep-blue"
        >
          <Link href="/register">Maak gratis account</Link>
        </Button>
      </motion.div>
    </LandingSection>
  );
}
