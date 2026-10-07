'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Target } from 'lucide-react';
import { formatEuro } from '@/lib/dashboardCockpit';
import { saveYearlyGoal } from '@/lib/incomePersistence';
import { supabase } from '@/lib/customSupabaseClient';

function formatGoalInput(raw) {
  const digits = String(raw).replace(/\D/g, '').slice(0, 9);
  return digits ? Number(digits).toLocaleString('nl-NL') : '';
}

function parseGoal(raw) {
  const n = Number(String(raw).replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, ''));
  return Number.isFinite(n) ? n : 0;
}

export default function DashboardGoal({ userId, ytd = 0, initialGoal = 0, year }) {
  const goalYear = year || new Date().getFullYear();
  const [goalInput, setGoalInput] = useState(
    initialGoal ? Number(initialGoal).toLocaleString('nl-NL') : ''
  );
  const dirtyRef = useRef(false);

  useEffect(() => {
    setGoalInput(initialGoal ? Number(initialGoal).toLocaleString('nl-NL') : '');
  }, [initialGoal]);

  const goal = parseGoal(goalInput);
  const progress = goal ? Math.min(100, (ytd / goal) * 100) : 0;
  const start = new Date(goalYear, 0, 1);
  const end = new Date(goalYear, 11, 31);
  const now = new Date();
  const elapsed = Math.min(1, Math.max(0, (now - start) / (end - start)));
  const monthsLeft = Math.max(0.25, (end - now) / (1000 * 60 * 60 * 24 * 30.4));
  const expected = goal * elapsed;
  const diff = ytd - expected;
  const perMonth = Math.max(0, goal - ytd) / monthsLeft;

  useEffect(() => {
    if (!userId || !dirtyRef.current) return;
    const handle = window.setTimeout(() => {
      saveYearlyGoal(supabase, userId, goal, goalYear).catch(() => {});
    }, 700);
    return () => window.clearTimeout(handle);
  }, [goal, goalYear, userId]);

  const yearLabel = useMemo(() => String(goalYear), [goalYear]);

  return (
    <section className="rounded-xl border border-slate-200/80 bg-white p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-50 text-warm-orange">
            <Target className="h-4 w-4" />
          </span>
          <div>
            <p className="font-heading text-lg font-semibold text-deep-blue">Jouw jaardoel</p>
            <p className="text-xs text-slate-400">Omzet {yearLabel}, exclusief btw</p>
          </div>
        </div>
        <label className="relative block w-40">
          <span className="sr-only">Vul je jaardoel in</span>
          <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-slate-400">
            €
          </span>
          <input
            className="h-11 w-full rounded-lg border border-slate-200 bg-white pl-7 pr-3 text-right text-sm font-medium tabular-nums text-deep-blue outline-none focus:border-deep-blue/40 focus:ring-4 focus:ring-deep-blue/10"
            inputMode="numeric"
            placeholder="100.000"
            value={goalInput}
            onChange={(e) => {
              dirtyRef.current = true;
              setGoalInput(formatGoalInput(e.target.value));
            }}
          />
        </label>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4">
        <div>
          <p className="font-heading text-3xl font-bold tracking-tight text-deep-blue sm:text-4xl">
            {formatEuro(ytd)}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            van {goal ? formatEuro(goal) : '…'} binnen
          </p>
        </div>
        <p className="font-heading text-3xl font-bold italic text-warm-orange">{Math.round(progress)}%</p>
      </div>

      <div className="relative mt-5">
        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
          <div
            className="h-full rounded-full bg-deep-blue transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        {goal > 0 && (
          <div
            className="absolute -top-1.5 flex -translate-x-1/2 flex-col items-center"
            style={{ left: `${elapsed * 100}%` }}
            aria-hidden
          >
            <span className="h-6 w-0.5 rounded-full bg-warm-orange" />
            <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.12em] text-warm-orange">
              vandaag
            </span>
          </div>
        )}
      </div>

      {goal > 0 && (
        <div className="mt-9 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-[#f6f4f1] px-4 py-3">
            <p className="text-xs text-slate-500">{diff >= 0 ? 'Voor op schema' : 'Achter op schema'}</p>
            <p className={`mt-1 font-heading text-xl font-bold ${diff >= 0 ? 'text-emerald-700' : 'text-rose-700'}`}>
              {formatEuro(Math.abs(diff))}
            </p>
          </div>
          <div className="rounded-xl bg-[#f6f4f1] px-4 py-3">
            <p className="text-xs text-slate-500">Nodig per maand tot 31 december</p>
            <p className="mt-1 font-heading text-xl font-bold text-deep-blue">{formatEuro(perMonth)}</p>
          </div>
        </div>
      )}
    </section>
  );
}
