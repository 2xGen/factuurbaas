'use client';

import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import {
  ArrowRight,
  Bell,
  Clock,
  Crown,
  FileText,
  LayoutDashboard,
  Lock,
  Plus,
  Receipt,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import { CountUp, EASE_OUT, Reveal } from '@/components/landing/page/motion';
import IncomeDemo from '@/components/landing/page/IncomeDemo';

const NAV = [
  { label: 'Overzicht', icon: LayoutDashboard },
  { label: 'Facturen', icon: FileText },
  { label: 'Offertes', icon: FileText },
  { label: 'Klanten', icon: Users },
  { label: 'Uren', icon: Clock },
  { label: 'Inkomsten', icon: Wallet },
  { label: 'Uitgaven', icon: Receipt },
  { label: 'Tools', icon: Wrench },
  { label: 'Baas status', icon: Crown },
];

const STATS = [
  { label: 'Je verdiende', value: 8420 },
  { label: 'Je gaf uit', value: 3140 },
  { label: 'Je hield over', value: 5280, answer: true },
];

const MONTHS = [
  { month: 'mei', income: 6.1, expenses: 2.4 },
  { month: 'jun', income: 7.4, expenses: 3.1 },
  { month: 'jul', income: 5.2, expenses: 2.2 },
  { month: 'aug', income: 8.9, expenses: 3.6 },
  { month: 'sep', income: 7.6, expenses: 2.9 },
  { month: 'okt', income: 8.42, expenses: 3.14, current: true },
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

function Chart() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduce = useReducedMotion();
  const max = 10;

  return (
    <div ref={ref} className="rounded-xl border border-ink/[0.07] bg-white p-4 sm:p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Inkomsten en uitgaven</p>
        <div className="flex items-center gap-3 text-[11px] text-ink-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-ink" /> In
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-sm bg-ember/70" /> Uit
          </span>
        </div>
      </div>
      <div className="relative mt-5 h-36 sm:h-40">
        <div className="absolute inset-0 flex flex-col justify-between" aria-hidden>
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="border-t border-dashed border-ink/[0.07]" />
          ))}
        </div>
        <div className="relative flex h-full items-end justify-between gap-2 sm:gap-3">
          {MONTHS.map((m, i) => (
            <div key={m.month} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
              <div className="flex h-full w-full items-end justify-center gap-1">
                {[
                  { v: m.income, cls: m.current ? 'bg-ink' : 'bg-ink/80' },
                  { v: m.expenses, cls: 'bg-ember/70' },
                ].map((bar, j) => (
                  <motion.span
                    key={j}
                    className={`block w-full max-w-[14px] origin-bottom rounded-t-[3px] ${bar.cls}`}
                    style={{ height: `${(bar.v / max) * 100}%` }}
                    initial={reduce ? false : { scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : undefined}
                    transition={{ duration: 0.8, delay: 0.15 + i * 0.07 + j * 0.05, ease: EASE_OUT }}
                  />
                ))}
              </div>
              <span
                className={`font-mono text-[10px] ${m.current ? 'font-semibold text-ink' : 'text-ink-400'}`}
              >
                {m.month}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

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
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">Oktober</p>
              <p className="mt-1 font-display text-xl sm:text-2xl">Hoe je bedrijf ervoor staat</p>
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

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.45fr_1fr]">
            <Chart />
            <div className="grid gap-3">
              <div className="rounded-xl border border-ink/[0.07] bg-white p-4">
                <p className="text-xs text-ink-500">Moet je nog ontvangen</p>
                <CountUp value={2750} rounded className="mt-1.5 block font-display text-2xl tabular" />
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-paper-200">
                  <div className="h-full w-[62%] rounded-full bg-amber-500/80" />
                </div>
                <p className="mt-2 text-[11px] text-ink-400">2 facturen open</p>
              </div>
              <div className="rounded-xl border border-ink/[0.07] bg-white p-4">
                <p className="text-xs text-ink-500">Btw apart houden</p>
                <CountUp value={1120} rounded className="mt-1.5 block font-display text-2xl tabular" />
                <p className="mt-2 text-[11px] text-ink-400">Voor je volgende aangifte</p>
              </div>
            </div>
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
              Verdiend. Uitgegeven.
              <br />
              <em className="text-ember-100">Overgehouden.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-base leading-relaxed text-white/65 sm:text-lg lg:ml-auto">
              Wat je verdiende, wat je uitgaf, en wat je overhoudt. Inclusief wat nog openstaat en
              wat je apart zet voor de btw.
            </p>
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
        </figure>

        <div className="mx-auto mt-28 min-w-0 max-w-6xl sm:mt-40">
          <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <h3 className="max-w-[20ch] font-display text-[2rem] font-normal leading-[1.05] tracking-[-0.03em] sm:text-[2.6rem]">
              Ook als je omzet <em className="text-ember-100">niet alleen uit facturen</em> komt.
            </h3>
            <div className="lg:text-right">
              <p className="max-w-md text-base leading-relaxed text-white/65 lg:ml-auto">
                Verkoop in je winkel, op locatie of rechtstreeks aan een klant? Voeg de inkomsten in
                een paar seconden toe. Omschrijving, datum, bedrag, opslaan. Je overzicht klopt
                meteen.
              </p>
              <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.16em] text-white/45">
                Pin · Contant · Overboeking
              </p>
              <p className="mt-3 text-sm font-medium text-white">Probeer het: klik op Opslaan.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 sm:mt-12">
            <IncomeDemo />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
