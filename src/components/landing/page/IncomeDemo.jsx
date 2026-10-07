'use client';

import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Check, Plus, Target } from 'lucide-react';
import { AnimatedNumber, EASE_OUT, formatEuro } from '@/components/landing/page/motion';

const BASE = {
  ytdIncome: 75740,
  month: { income: 8420, expenses: 3140 },
  previous: { income: 7600, expenses: 2900 },
  average: { income: 7480, expenses: 2860 },
};

// 5 oktober 2026 is day 278 of 365; there are ~2.9 months left in the year.
const YEAR_ELAPSED = 278 / 365;
const MONTHS_LEFT = 87 / 30.4;

const pctChange = (now, before) => (before ? ((now - before) / before) * 100 : 0);

const EARLIER_ENTRIES = [
  { id: 'workshop', description: 'Workshop Utrecht', amount: 450, method: 'Overboeking' },
  { id: 'markt', description: 'Markt zaterdag', amount: 320, method: 'Contant' },
];

const BTW_RATES = [21, 9, 0];
const PAYMENT_METHODS = ['Pin', 'Contant', 'Overboeking'];

const parseAmount = (raw) => {
  const n = Number(String(raw).replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
};

const formatGoalInput = (raw) => {
  const digits = String(raw).replace(/\D/g, '').slice(0, 9);
  return digits ? Number(digits).toLocaleString('nl-NL') : '';
};

const inputClass =
  'h-11 w-full rounded-lg border border-ink/[0.12] bg-white px-3 text-sm text-ink outline-none transition focus:border-ink/40 focus:ring-4 focus:ring-ink/[0.06]';

function Field({ label, optional, group = false, children }) {
  const Comp = group ? 'div' : 'label';
  return (
    <Comp className="block" {...(group ? { role: 'group', 'aria-label': label } : {})}>
      <span className="flex items-baseline justify-between text-xs font-medium text-ink-700">
        {label}
        {optional && <span className="font-normal text-ink-400">optioneel</span>}
      </span>
      <span className="mt-1.5 block">{children}</span>
    </Comp>
  );
}

function IncomeForm({ onSave, entries }) {
  const [description, setDescription] = useState('Verkoop winkel');
  const [date, setDate] = useState('5 oktober 2026');
  const [amount, setAmount] = useState('1.250');
  const [rate, setRate] = useState(21);
  const [method, setMethod] = useState(null);
  const [justSaved, setJustSaved] = useState(false);

  const value = parseAmount(amount);
  const btw = (value * rate) / 100;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    onSave({ id: Date.now(), description: description || 'Inkomst', amount: value, method });
    setJustSaved(true);
    window.setTimeout(() => setJustSaved(false), 1800);
  };

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-5 text-ink shadow-window sm:p-7">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white">
          <Plus className="h-4 w-4" />
        </span>
        <div>
          <p className="font-display text-xl leading-tight">Inkomst toevoegen</p>
          <p className="text-xs text-ink-400">Geen factuur nodig</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <Field label="Omschrijving">
          <input className={inputClass} value={description} onChange={(e) => setDescription(e.target.value)} />
        </Field>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Datum">
            <input className={inputClass} value={date} onChange={(e) => setDate(e.target.value)} />
          </Field>
          <Field label="Bedrag">
            <span className="relative block">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">€</span>
              <input
                className={`${inputClass} pl-7 tabular`}
                inputMode="decimal"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </span>
          </Field>
        </div>

        <Field label="Btw" group>
          <span className="grid grid-cols-3 gap-1 rounded-lg bg-paper-200/70 p-1">
            {BTW_RATES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRate(r)}
                className={`relative h-9 rounded-md text-sm font-medium transition-colors ${
                  rate === r ? 'text-ink' : 'text-ink-500 hover:text-ink'
                }`}
              >
                {rate === r && (
                  <motion.span
                    layoutId="btw-pill"
                    className="absolute inset-0 rounded-md bg-white shadow-[0_1px_2px_rgba(10,42,77,0.12)]"
                    transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  />
                )}
                <span className="relative">{r}%</span>
              </button>
            ))}
          </span>
        </Field>

        <Field label="Betaalmethode" optional group>
          <span className="flex flex-wrap gap-2">
            {PAYMENT_METHODS.map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(method === m ? null : m)}
                className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                  method === m
                    ? 'border-ink bg-ink text-white'
                    : 'border-ink/[0.12] text-ink-700 hover:border-ink/30'
                }`}
              >
                {m}
              </button>
            ))}
          </span>
        </Field>

        <div className="flex items-center justify-between border-t border-dashed border-ink/10 pt-4 text-xs text-ink-500">
          <span>Waarvan btw</span>
          <span className="tabular text-ink">{formatEuro(btw)}</span>
        </div>

        <button
          type="submit"
          className={`inline-flex h-12 w-full items-center justify-center gap-2 rounded-full text-[15px] font-medium text-white transition-colors duration-300 ${
            justSaved ? 'bg-emerald-600' : 'bg-ink hover:bg-ink-950'
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={justSaved ? 'saved' : 'save'}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
              className="inline-flex items-center gap-2"
            >
              {justSaved ? (
                <>
                  <Check className="h-4 w-4" /> Opgeslagen
                </>
              ) : (
                'Opslaan'
              )}
            </motion.span>
          </AnimatePresence>
        </button>
      </form>

      <p className="mt-auto pt-6 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">Deze week</p>
      <ul className="mt-2 space-y-2" aria-live="polite">
        <AnimatePresence initial={false}>
          {[...entries, ...EARLIER_ENTRIES].slice(0, 3).map((entry) => (
            <motion.li
              key={entry.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: EASE_OUT }}
              className="overflow-hidden"
            >
              <span className="flex items-center justify-between rounded-lg bg-paper-100 px-3 py-2 text-xs">
                <span className="flex min-w-0 items-center gap-2">
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
                  <span className="truncate font-medium text-ink">{entry.description}</span>
                  {entry.method && <span className="text-ink-400">· {entry.method}</span>}
                </span>
                <span className="tabular text-ink">+ {formatEuro(entry.amount)}</span>
              </span>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </div>
  );
}

function Delta({ value, goodWhenUp = true }) {
  const up = value >= 0;
  const good = up === goodWhenUp;
  const Icon = up ? ArrowUpRight : ArrowDownRight;
  return (
    <span
      className={`inline-flex items-center gap-0.5 rounded-full px-1.5 py-0.5 text-[11px] font-medium tabular ring-1 ring-inset ${
        good
          ? 'bg-emerald-50 text-emerald-700 ring-emerald-600/15'
          : 'bg-rose-50 text-rose-700 ring-rose-600/15'
      }`}
    >
      <Icon className="h-3 w-3" />
      <AnimatedNumber value={Math.abs(value)} format={(v) => `${v.toFixed(1).replace('.', ',')}%`} />
    </span>
  );
}

function GoalCard({ ytd }) {
  const [goalInput, setGoalInput] = useState('100.000');
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const goal = parseAmount(goalInput);
  const progress = goal ? Math.min(100, (ytd / goal) * 100) : 0;
  const diff = ytd - goal * YEAR_ELAPSED;
  const perMonth = Math.max(0, goal - ytd) / MONTHS_LEFT;

  return (
    <div ref={ref} className="rounded-2xl bg-white p-5 text-ink shadow-window sm:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ember-50 text-ember">
            <Target className="h-4 w-4" />
          </span>
          <div>
            <p className="font-display text-xl leading-tight">Jouw jaardoel</p>
            <p className="text-xs text-ink-400">Omzet 2026, exclusief btw</p>
          </div>
        </div>
        <label className="relative block w-40">
          <span className="sr-only">Vul je jaardoel in</span>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-ink-400">€</span>
          <input
            className={`${inputClass} pl-7 text-right font-medium tabular`}
            inputMode="numeric"
            value={goalInput}
            onChange={(e) => setGoalInput(formatGoalInput(e.target.value))}
          />
        </label>
      </div>

      <div className="mt-7 flex items-end justify-between gap-4">
        <div>
          <AnimatedNumber value={ytd} className="block font-display text-4xl leading-none tabular sm:text-5xl" />
          <p className="mt-2 text-sm text-ink-500">
            van {goal ? formatEuro(goal, { rounded: true }) : '…'} binnen
          </p>
        </div>
        <AnimatedNumber
          value={progress}
          format={(v) => `${Math.round(v)}%`}
          className="font-display text-3xl italic leading-none text-ember tabular sm:text-4xl"
        />
      </div>

      <div className="relative mt-5">
        <div className="h-3 overflow-hidden rounded-full bg-paper-200">
          <div
            className="h-full rounded-full bg-gradient-to-r from-ink to-ink-700 transition-[width] duration-1000 ease-out"
            style={{ width: `${inView ? progress : 0}%` }}
          />
        </div>
        <div
          className="absolute -top-1.5 flex -translate-x-1/2 flex-col items-center"
          style={{ left: `${YEAR_ELAPSED * 100}%` }}
          aria-hidden
        >
          <span className="h-6 w-0.5 rounded-full bg-ember" />
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ember">vandaag</span>
        </div>
      </div>

      <div className="mt-9 grid gap-3 sm:grid-cols-2">
        <div className="rounded-xl bg-paper-100 px-4 py-3">
          <p className="text-xs text-ink-500">{diff >= 0 ? 'Voor op schema' : 'Achter op schema'}</p>
          <AnimatedNumber
            value={Math.abs(diff)}
            className={`mt-1 block font-display text-xl tabular ${diff >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}
          />
        </div>
        <div className="rounded-xl bg-paper-100 px-4 py-3">
          <p className="text-xs text-ink-500">Nodig per maand tot 31 december</p>
          <AnimatedNumber value={perMonth} className="mt-1 block font-display text-xl tabular" />
        </div>
      </div>
    </div>
  );
}

function ComparisonCard({ month }) {
  const rows = [
    { label: 'Inkomsten', now: month.income, prev: BASE.previous.income, avg: BASE.average.income, goodWhenUp: true },
    { label: 'Uitgaven', now: month.expenses, prev: BASE.previous.expenses, avg: BASE.average.expenses, goodWhenUp: false },
    {
      label: 'Hield je over',
      note: 'Inkomsten min geregistreerde uitgaven',
      now: month.income - month.expenses,
      prev: BASE.previous.income - BASE.previous.expenses,
      avg: BASE.average.income - BASE.average.expenses,
      goodWhenUp: true,
      strong: true,
    },
  ];

  return (
    <div className="rounded-2xl bg-white p-5 text-ink shadow-window sm:p-7">
      <div className="flex items-baseline justify-between gap-4">
        <p className="font-display text-xl leading-tight">Oktober vergeleken</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-ink-400">excl. btw</p>
      </div>

      <div className="mt-5 overflow-x-auto">
        <table className="w-full min-w-[26rem] text-sm">
          <thead>
            <tr className="text-left font-mono text-[10px] uppercase tracking-[0.12em] text-ink-400">
              <th className="pb-3 font-normal" />
              <th className="pb-3 text-right font-normal">Oktober</th>
              <th className="pb-3 text-right font-normal">vs september</th>
              <th className="pb-3 text-right font-normal">vs gemiddeld</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-ink/[0.07] border-t border-ink/[0.07]">
            {rows.map((row) => (
              <tr key={row.label}>
                <th className={`py-3.5 text-left font-normal ${row.strong ? 'font-medium text-ink' : 'text-ink-500'}`}>
                  {row.label}
                  {row.note && <span className="block text-[11px] font-normal text-ink-400">{row.note}</span>}
                </th>
                <td className="py-3.5 text-right">
                  <AnimatedNumber
                    value={row.now}
                    className={`font-display tabular ${row.strong ? 'text-xl' : 'text-lg'}`}
                  />
                </td>
                <td className="py-3.5 text-right">
                  <Delta value={pctChange(row.now, row.prev)} goodWhenUp={row.goodWhenUp} />
                </td>
                <td className="py-3.5 text-right">
                  <Delta value={pctChange(row.now, row.avg)} goodWhenUp={row.goodWhenUp} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-4 text-xs text-ink-400">
        Gemiddeld per maand in 2026: {formatEuro(BASE.average.income, { rounded: true })} inkomsten,{' '}
        {formatEuro(BASE.average.expenses, { rounded: true })} uitgaven.
      </p>
    </div>
  );
}

export default function IncomeDemo() {
  const [entries, setEntries] = useState([]);
  const added = useMemo(() => entries.reduce((sum, e) => sum + e.amount, 0), [entries]);
  const month = { income: BASE.month.income + added, expenses: BASE.month.expenses };

  return (
    <div className="grid gap-4 lg:grid-cols-12 lg:gap-5">
      <div className="lg:col-span-5 lg:row-span-2">
        <IncomeForm entries={entries} onSave={(entry) => setEntries((prev) => [entry, ...prev])} />
      </div>
      <div className="lg:col-span-7">
        <GoalCard ytd={BASE.ytdIncome + added} />
      </div>
      <div className="lg:col-span-7">
        <ComparisonCard month={month} />
      </div>
    </div>
  );
}
