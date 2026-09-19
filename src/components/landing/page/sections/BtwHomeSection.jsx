'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
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
  Percent,
  PiggyBank,
  Receipt,
  Repeat,
  Wallet,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';

const COLORS = {
  verkopen: '#0A2A4D',
  uitgaven: '#FF7F50',
};

const DEMO_BTW = [
  { label: 'Q4 2025', verkopen: 680, uitgaven: 145 },
  { label: 'Q1 2026', verkopen: 1240, uitgaven: 260 },
  { label: 'Q2 2026', verkopen: 1580, uitgaven: 310 },
  { label: 'Q3 2026', verkopen: 1420, uitgaven: 285 },
];

const POINTS = [
  {
    icon: Wallet,
    title: 'Zakelijke uitgaven',
    text: 'Registreer software, materiaal, reiskosten, verzekeringen en andere zakelijke kosten.',
  },
  {
    icon: Repeat,
    title: 'Terugkerende uitgaven',
    text: 'Voeg abonnementen en andere vaste kosten één keer toe.',
  },
  {
    icon: Percent,
    title: 'BTW-overzicht',
    text: 'Zie btw op verkopen en geregistreerde zakelijke uitgaven naast elkaar.',
  },
  {
    icon: PiggyBank,
    title: 'Resultaat',
    text: 'Zie omzet minus geregistreerde uitgaven.',
  },
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

export default function BtwHomeSection() {
  return (
    <LandingSection bg="muted" className="overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55 }}
          className="relative order-2 lg:order-1"
        >
          <div
            className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-deep-blue/10 via-transparent to-warm-orange/15 blur-2xl sm:-inset-6"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-deep-blue/10 sm:rounded-3xl">
            <div className="flex items-center gap-2 border-b border-slate-200/80 bg-[#f4f6f9] px-4 py-3 sm:px-5">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
              <div className="ml-3 flex-1 truncate rounded-md bg-white px-3 py-1 text-center text-[11px] text-slate-500 sm:text-xs">
                factuurbaas.nl/uitgaven
              </div>
            </div>

            <div className="p-3 sm:p-5">
              <div className="mb-4 grid grid-cols-2 gap-2 sm:gap-3">
                <div className="rounded-xl border border-slate-200/80 bg-[#f4f6f9] px-3 py-3.5 sm:px-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
                    <Receipt className="h-3.5 w-3.5 text-deep-blue" strokeWidth={1.75} />
                    Uitgaven
                  </div>
                  <p className="font-heading text-xl font-bold tracking-tight text-deep-blue sm:text-2xl">
                    € 1.240
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">Deze maand</p>
                </div>
                <div className="rounded-xl border border-slate-200/80 bg-[#f4f6f9] px-3 py-3.5 sm:px-4">
                  <div className="mb-1.5 flex items-center gap-1.5 text-[11px] font-medium text-slate-500 sm:text-xs">
                    <Percent className="h-3.5 w-3.5 text-warm-orange" strokeWidth={1.75} />
                    Btw op kosten
                  </div>
                  <p className="font-heading text-xl font-bold tracking-tight text-deep-blue sm:text-2xl">
                    € 260
                  </p>
                  <p className="mt-0.5 text-[10px] text-slate-400 sm:text-xs">Geregistreerd</p>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white p-3 shadow-sm sm:p-4">
                <div className="mb-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading text-sm font-semibold text-deep-blue sm:text-base">
                      BTW-overzicht
                    </h3>
                    <p className="text-[11px] text-slate-500 sm:text-xs">
                      Verkopen en zakelijke uitgaven per kwartaal
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                      Te reserveren
                    </p>
                    <p className="font-heading text-base font-bold text-deep-blue">€ 3.920</p>
                  </div>
                </div>
                <div className="h-48 w-full sm:h-56">
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
                        dataKey="verkopen"
                        name="Btw verkopen"
                        fill={COLORS.verkopen}
                        radius={[4, 4, 0, 0]}
                        maxBarSize={28}
                      />
                      <Bar
                        dataKey="uitgaven"
                        name="Btw uitgaven"
                        fill={COLORS.uitgaven}
                        radius={[4, 4, 0, 0]}
                        maxBarSize={28}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.45 }}
          className="order-1 lg:order-2"
        >
          <SectionHeader
            align="left"
            eyebrow="Uitgaven & btw"
            title="Houd zakelijke kosten én btw bij"
            description="Voeg zakelijke uitgaven toe en zie hoeveel btw je op je kosten hebt geregistreerd. FactuurBaas combineert dit met de btw op je facturen voor een duidelijker overzicht."
            className="mb-8 sm:mb-10"
          />

          <div className="space-y-5">
            {POINTS.map((point, i) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * i, duration: 0.35 }}
                  className="flex gap-3"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-deep-blue/5 text-deep-blue">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="font-heading text-base font-semibold text-deep-blue">
                      {point.title}
                    </p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{point.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8">
            <Button asChild size="lg" className="h-12 rounded-xl px-6 font-semibold">
              <Link href="/uitgaven-bijhouden">
                Uitgaven bijhouden <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </LandingSection>
  );
}
