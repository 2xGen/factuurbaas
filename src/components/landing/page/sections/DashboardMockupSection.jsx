'use client';

import React, { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Clock,
  Crown,
  FileText,
  LayoutDashboard,
  Lock,
  Plus,
  Users,
  Wrench,
} from 'lucide-react';
import { CountUp, EASE_OUT, Reveal } from '@/components/landing/page/motion';

const NAV = [
  { label: 'Overzicht', icon: LayoutDashboard },
  { label: 'Facturen', icon: FileText },
  { label: 'Offertes', icon: FileText },
  { label: 'Klanten', icon: Users },
  { label: 'Uren', icon: Clock },
  { label: 'Tools', icon: Wrench },
  { label: 'Baas status', icon: Crown },
];

const STATS = [
  { label: 'Gefactureerd', value: 8420 },
  { label: 'Betaald', value: 5670 },
  { label: 'Openstaand', value: 2750, answer: true },
];

const INVOICES = [
  { number: '2026-014', client: 'Studio Noord', amount: '€ 1.250', status: 'Betaald', tone: 'paid' },
  { number: '2026-015', client: 'Van Dijk Advies', amount: '€ 980', status: 'Open', tone: 'open' },
  { number: '2026-013', client: 'Klant BV', amount: '€ 520', status: 'Te laat', tone: 'late' },
];

const STATUS_TONES = {
  paid: 'bg-emerald-50 text-emerald-700 ring-emerald-600/15',
  open: 'bg-amber-50 text-amber-700 ring-amber-600/15',
  late: 'bg-rose-50 text-rose-700 ring-rose-600/15',
};

function AppWindow() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-window ring-1 ring-white/10">
      <div className="flex h-11 items-center gap-4 border-b border-ink/[0.07] bg-paper-100 px-4">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        </div>
        <div className="mx-auto flex w-full max-w-xs items-center justify-center gap-1.5 rounded-md border border-ink/[0.06] bg-white py-1 text-[11px] text-ink-500">
          <Lock className="h-3 w-3" />
          factuurbaas.nl/dashboard
        </div>
        <div className="w-10" aria-hidden />
      </div>

      <div className="grid lg:grid-cols-[13rem_1fr]">
        <aside className="hidden border-r border-ink/[0.07] bg-paper-50 px-3 py-5 lg:block">
          <div className="flex items-center gap-2 px-2">
            <img src="/crown-favicon.svg" alt="" className="h-5 w-5" />
            <p className="text-sm font-semibold">FactuurBaas</p>
          </div>
          <ul className="mt-6 space-y-0.5 text-[13px]">
            {NAV.map(({ label, icon: Icon }) => {
              const current = label === 'Overzicht';
              return (
                <li key={label}>
                  <span
                    className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 ${
                      current
                        ? 'bg-white font-medium text-ink shadow-[0_1px_2px_rgba(10,42,77,0.08)] ring-1 ring-ink/[0.06]'
                        : 'text-ink-500'
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${current ? 'text-ember' : 'text-ink-400'}`} />
                    {label}
                  </span>
                </li>
              );
            })}
          </ul>
          <div className="mt-8 rounded-lg border border-dashed border-ink/15 px-3 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">Account</p>
            <p className="mt-1 text-[13px] font-medium">Gratis</p>
          </div>
        </aside>

        <div className="bg-paper-50/40 p-4 sm:p-7">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">FactuurBaas</p>
              <p className="mt-1 font-display text-xl sm:text-2xl">Mijn facturen</p>
            </div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-1.5 text-xs font-medium text-white">
              <Plus className="h-3.5 w-3.5" /> Nieuwe factuur
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className={`rounded-xl p-4 ${
                  stat.answer
                    ? 'bg-ink text-white shadow-[0_12px_24px_-12px_rgba(10,42,77,0.6)]'
                    : 'border border-ink/[0.07] bg-white'
                }`}
              >
                <p className={`text-xs ${stat.answer ? 'text-white/70' : 'text-ink-500'}`}>{stat.label}</p>
                <CountUp
                  value={stat.value}
                  rounded
                  className="mt-2 block font-display text-[1.65rem] leading-none tabular sm:text-3xl"
                />
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl border border-ink/[0.07] bg-white">
            <div className="flex items-center justify-between border-b border-ink/[0.07] px-4 py-3">
              <p className="text-sm font-semibold">Recente facturen</p>
              <span className="text-xs text-ink-400">Bekijk alles</span>
            </div>
            <ul className="divide-y divide-ink/[0.06] text-[13px]">
              {INVOICES.map((inv) => (
                <li key={inv.number} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-4 py-2.5">
                  <span className="min-w-0">
                    <span className="block truncate font-medium">{inv.client}</span>
                    <span className="block font-mono text-[10px] text-ink-400">#{inv.number}</span>
                  </span>
                  <span className="tabular">{inv.amount}</span>
                  <span
                    className={`inline-flex w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-medium ring-1 ring-inset ${STATUS_TONES[inv.tone]}`}
                  >
                    {inv.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function Notification() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.6, delay: 0.9, ease: EASE_OUT }}
      className="relative mt-4 w-full max-w-sm rounded-2xl border border-ink/[0.08] bg-white p-4 text-ink shadow-window sm:absolute sm:-bottom-10 sm:-right-4 sm:mt-0 lg:-right-10"
    >
      <div className="flex gap-3">
        <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ember-50 text-ember">
          <Bell className="h-4 w-4" />
          <span className="absolute right-0.5 top-0.5 h-2 w-2 rounded-full bg-ember ring-2 ring-white" />
        </span>
        <div className="min-w-0">
          <p className="text-sm font-semibold">Bakkerij De Wind</p>
          <p className="mt-0.5 text-[13px] leading-snug text-ink-500">
            Offerte geaccepteerd. Zet om naar een factuur.
          </p>
          <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1.5 text-xs font-medium text-white">
            Zet om naar factuur
            <ArrowRight className="h-3 w-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function DashboardMockupSection() {
  const frameRef = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: frameRef, offset: ['start end', 'start 0.35'] });
  const rotateX = useTransform(scrollYProgress, [0, 1], [14, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <section className="grain-light relative isolate overflow-hidden bg-ink-950 py-20 text-white sm:py-28 lg:py-32">
      <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute left-1/2 top-[45%] -z-10 h-[40rem] w-[70rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.18),transparent_60%)]"
        aria-hidden
      />

      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember-100/70">
              Met een gratis account
            </p>
            <h2 className="mt-5 font-display text-[2.4rem] font-normal leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem]">
              Al je facturen.
              <br />
              <em className="text-ember-100">Eén overzicht.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg lg:ml-auto">
              Maak en bewaar facturen, houd bij welke betaald zijn en zie direct welke betalingen
              nog openstaan. Gratis, zonder ingewikkeld boekhoudprogramma.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 text-[13px] text-white/80 lg:justify-end">
              {['Klantgegevens bewaren', 'Facturen hergebruiken', 'Openstaande betalingen'].map((item) => (
                <li key={item} className="rounded-full border border-white/15 px-3 py-1">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <figure className="relative mx-auto mt-14 max-w-6xl sm:mt-20" style={{ perspective: 1600 }}>
          <motion.div
            ref={frameRef}
            style={reduce ? undefined : { rotateX, scale, y, transformOrigin: 'center top' }}
            className="relative"
          >
            <AppWindow />
            <Notification />
          </motion.div>
          <figcaption className="mx-auto mt-8 max-w-3xl text-center text-[11px] leading-relaxed text-white/45 sm:mt-14">
            Voorbeeldweergave met fictieve facturen.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
