'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Euro, FileDown, MapPin, ShieldCheck } from 'lucide-react';
import HeroInvoice from '@/components/landing/page/HeroInvoice';

const TRUST = [
  { icon: MapPin, label: 'Gemaakt voor Nederland' },
  { icon: ShieldCheck, label: 'Accountgegevens in de EU' },
  { icon: FileDown, label: 'Direct als PDF' },
  { icon: Euro, label: 'Geen abonnement' },
];

const rise = (delay) => ({ animationDelay: `${delay}ms` });

const HeroSection = () => {
  const reduce = useReducedMotion();

  return (
    <section className="grain relative isolate overflow-hidden bg-paper text-ink">
      <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.14),transparent_65%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-40 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(10,42,77,0.08),transparent_65%)]"
        aria-hidden
      />

      <div className="container relative mx-auto px-4 pb-16 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-20">
          <div>
            <p
              className="inline-flex items-center gap-2.5 rounded-full border border-ink/10 bg-white/70 py-1.5 pl-2.5 pr-3.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-700 backdrop-blur motion-safe:animate-rise"
              style={rise(0)}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-500 motion-safe:animate-pulse-dot" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Gratis factuur maken
            </p>

            <h1
              className="mt-7 max-w-[13ch] font-display text-[2.9rem] font-normal leading-[0.98] tracking-[-0.035em] text-ink sm:text-[4rem] lg:text-[4.4rem] xl:text-[5rem] motion-safe:animate-rise"
              style={rise(80)}
            >
              Gratis factuur maken{' '}
              <span className="relative inline-block whitespace-nowrap italic text-ink-700">
                zonder account
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full text-ember sm:-bottom-3 sm:h-4"
                  viewBox="0 0 300 16"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden
                >
                  <motion.path
                    d="M3 11.5C58 5.5 122 3.5 186 5.2c38 1 74 3.4 111 6.8"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.9, delay: 0.55, ease: [0.65, 0, 0.35, 1] }}
                  />
                </svg>
              </span>
            </h1>

            <div
              className="mt-8 max-w-[34rem] space-y-3 text-[1.05rem] leading-relaxed text-ink-500 sm:text-lg motion-safe:animate-rise"
              style={rise(180)}
            >
              <p>
                Maak een professionele factuur en download hem direct als PDF.{' '}
                <span className="text-ink">Gratis, zonder abonnement.</span>
              </p>
              <p>Met een gratis account houd je ook je inkomsten, uitgaven, offertes en resultaat bij.</p>
            </div>

            <div
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center motion-safe:animate-rise"
              style={rise(260)}
            >
              <Link
                href="/create-invoice"
                className="group inline-flex h-[3.25rem] items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-medium text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_24px_-10px_rgba(10,42,77,0.7)] transition-all duration-300 hover:bg-ink-950 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_16px_32px_-12px_rgba(10,42,77,0.8)]"
              >
                Maak gratis factuur
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/voorbeeld"
                className="inline-flex h-[3.25rem] items-center justify-center rounded-full border border-ink/15 bg-white/60 px-7 text-[15px] font-medium text-ink backdrop-blur transition-colors hover:border-ink/30 hover:bg-white"
              >
                Bekijk voorbeelden
              </Link>
            </div>
          </div>

          <div className="lg:pl-4">
            <HeroInvoice />
          </div>
        </div>

        <ul
          className="mt-20 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-ink/10 pt-7 sm:mt-24 lg:grid-cols-4 motion-safe:animate-rise"
          style={rise(420)}
        >
          {TRUST.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-3 text-sm text-ink-700">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-ink/10 bg-white/70">
                <Icon className="h-3.5 w-3.5 text-ember" strokeWidth={2} />
              </span>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
