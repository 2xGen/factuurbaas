'use client';

import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Check, FileDown } from 'lucide-react';
import { CountUp, EASE_OUT, formatEuro } from './motion';

const ITEMS = [
  { description: 'Website ontwerp', quantity: '10 uur', price: 75, amount: 750 },
  { description: 'Logo & huisstijl', quantity: '1', price: 450, amount: 450 },
  { description: 'Hosting (12 mnd)', quantity: '12', price: 10, amount: 120 },
];

const SUBTOTAL = ITEMS.reduce((sum, item) => sum + item.amount, 0);
const BTW = SUBTOTAL * 0.21;
const TOTAL = SUBTOTAL + BTW;

const ROW_START = 0.55;
const ROW_STEP = 0.32;
const TOTALS_AT = ROW_START + ITEMS.length * ROW_STEP + 0.1;
const STAMP_AT = TOTALS_AT + 1.35;

function Label({ children }) {
  return (
    <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-ink-400 sm:text-[10px]">
      {children}
    </p>
  );
}

export default function HeroInvoice() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const appear = (delay, from = { opacity: 0, y: 6 }) =>
    reduce
      ? {}
      : {
          initial: from,
          animate: { opacity: 1, x: 0, y: 0, scale: 1 },
          transition: { duration: 0.55, delay, ease: EASE_OUT },
        };

  return (
    <div className="relative mx-auto w-full max-w-[34rem] lg:mr-0">
      <div
        className="absolute inset-0 translate-x-5 translate-y-4 rotate-[3.5deg] rounded-[10px] border border-ink/5 bg-paper-50 shadow-paper"
        aria-hidden
      />
      <div
        className="absolute inset-0 -translate-x-3 translate-y-2 -rotate-[2deg] rounded-[10px] border border-ink/5 bg-white/80 shadow-paper"
        aria-hidden
      />

      <motion.div
        {...(reduce
          ? {}
          : {
              initial: { opacity: 0, y: 30, rotate: -1.5 },
              animate: { opacity: 1, y: 0, rotate: 0 },
              transition: { duration: 0.9, ease: EASE_OUT },
            })}
        className="relative overflow-hidden rounded-[10px] border border-ink/[0.06] bg-white p-6 text-ink shadow-paper sm:p-9"
        aria-label="Voorbeeld van een factuur"
        role="img"
      >
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-ink via-ink-700 to-ember" aria-hidden />

        <div className="flex items-start justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-ink font-display text-lg italic text-white">
              SJ
            </div>
            <div>
              <p className="text-sm font-semibold">Studio Jansen</p>
              <p className="font-mono text-[10px] text-ink-400 sm:text-[11px]">KvK 12345678</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-display text-2xl leading-none sm:text-[2rem]">Factuur</p>
            <p className="mt-1.5 font-mono text-[11px] text-ink-500">#2026-001</p>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-3 gap-4 border-y border-ink/[0.07] py-4 text-[11px] sm:text-xs">
          <div>
            <Label>Aan</Label>
            <p className="mt-1 font-medium">Klant BV</p>
            <p className="text-ink-500">Amsterdam</p>
          </div>
          <div>
            <Label>Datum</Label>
            <p className="mt-1 font-medium">9 juli 2026</p>
          </div>
          <div>
            <Label>Vervalt</Label>
            <p className="mt-1 font-medium">23 juli 2026</p>
          </div>
        </div>

        <div className="mt-5 text-[11px] sm:text-[13px]">
          <div className="grid grid-cols-12 gap-2 pb-2">
            <span className="col-span-6"><Label>Omschrijving</Label></span>
            <span className="col-span-2 text-right"><Label>Aantal</Label></span>
            <span className="col-span-4 text-right"><Label>Bedrag</Label></span>
          </div>
          {ITEMS.map((item, index) => (
            <motion.div
              key={item.description}
              {...appear(ROW_START + index * ROW_STEP, { opacity: 0, x: -10 })}
              className="grid grid-cols-12 gap-2 border-t border-dashed border-ink/10 py-2.5"
            >
              <span className="col-span-6 font-medium">{item.description}</span>
              <span className="col-span-2 text-right tabular text-ink-500">{item.quantity}</span>
              <span className="col-span-4 text-right tabular">{formatEuro(item.amount)}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...appear(TOTALS_AT)}
          className="ml-auto mt-3 w-full max-w-[15rem] space-y-1.5 border-t border-ink/10 pt-3 text-[11px] sm:text-[13px]"
        >
          <div className="flex justify-between text-ink-500">
            <span>Subtotaal</span>
            <span className="tabular">{formatEuro(SUBTOTAL)}</span>
          </div>
          <div className="flex justify-between text-ink-500">
            <span>Btw 21%</span>
            <CountUp className="tabular" value={BTW} start={ready} delay={TOTALS_AT} duration={1.1} />
          </div>
          <div className="flex items-baseline justify-between pt-2">
            <span className="text-sm font-semibold">Totaal</span>
            <CountUp
              className="font-display text-2xl tabular sm:text-[1.75rem]"
              value={TOTAL}
              start={ready}
              delay={TOTALS_AT}
              duration={1.3}
            />
          </div>
        </motion.div>

        <p className="mt-6 border-t border-ink/[0.07] pt-4 font-mono text-[9px] leading-relaxed text-ink-400 sm:text-[10px]">
          Graag binnen 14 dagen overmaken op NL91 ABNA 0417 1643 00 o.v.v. 2026-001
        </p>

        <motion.div
          {...(reduce
            ? {}
            : {
                initial: { opacity: 0, scale: 1.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: STAMP_AT, type: 'spring', stiffness: 380, damping: 18 },
              })}
          className="pointer-events-none absolute bottom-[5.25rem] left-6 sm:bottom-24 sm:left-9"
          aria-hidden
        >
          <div className="-rotate-[10deg] rounded-md border-[2.5px] border-emerald-600/80 px-3 py-1 font-mono text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700/90 mix-blend-multiply sm:text-base">
            Betaald
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        {...appear(TOTALS_AT - 0.4, { opacity: 0, x: 16 })}
        className="absolute -right-3 top-24 hidden sm:block lg:-right-8"
        aria-hidden
      >
        <div className="motion-safe:animate-float-slow flex items-center gap-2 rounded-full border border-ink/[0.08] bg-white/95 py-1.5 pl-1.5 pr-3.5 text-xs font-medium text-ink shadow-paper backdrop-blur">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
          Btw automatisch berekend
        </div>
      </motion.div>

      <motion.div
        {...appear(STAMP_AT + 0.5, { opacity: 0, y: 16 })}
        className="absolute -bottom-6 -left-4 hidden sm:block lg:-left-10"
        aria-hidden
      >
        <div className="flex items-center gap-3 rounded-xl border border-ink/[0.08] bg-white p-2.5 pr-5 shadow-paper">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember-50 text-ember">
            <FileDown className="h-4 w-4" />
          </span>
          <span>
            <span className="block text-xs font-semibold text-ink">PDF klaar</span>
            <span className="block font-mono text-[10px] text-ink-400">factuur-2026-001.pdf</span>
          </span>
        </div>
      </motion.div>
    </div>
  );
}
