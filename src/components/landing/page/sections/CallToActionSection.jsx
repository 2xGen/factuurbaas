'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/landing/page/motion';

const CallToActionSection = () => {
  return (
    <section className="bg-paper px-3 py-3 sm:px-6 sm:py-6">
      <Reveal
        y={24}
        amount={0.3}
        className="grain-light relative isolate mx-auto max-w-[88rem] overflow-hidden rounded-[1.75rem] bg-ink-950 px-6 py-20 text-center text-white sm:rounded-[2.25rem] sm:px-10 sm:py-28 lg:py-32"
      >
        <div className="bg-ledger-dark mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[30rem] w-[60rem] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(210,96,26,0.28),transparent_62%)]"
          aria-hidden
        />
        <img
          src="/crown-favicon.svg"
          alt=""
          aria-hidden
          className="pointer-events-none absolute -right-10 -top-10 -z-10 h-72 w-72 rotate-12 opacity-[0.04] brightness-0 invert"
        />

        <img src="/crown-favicon.svg" alt="" aria-hidden className="mx-auto h-10 w-10" />
        <h2 className="mx-auto mt-8 max-w-[18ch] font-display text-[2.5rem] font-normal leading-[1.02] tracking-[-0.03em] sm:text-6xl lg:text-[4.25rem]">
          Zie hoe je bedrijf <em className="text-ember-100">ervoor staat.</em>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Houd inkomsten, uitgaven, facturen en offertes bij. Gratis en eenvoudig.
        </p>
        <div className="mt-10 flex flex-col items-center gap-5">
          <Link
            href="/register"
            className="group inline-flex h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium text-ink transition-colors hover:bg-paper-100 sm:w-auto"
          >
            Maak een gratis account
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <p className="text-sm text-white/55">
            Liever eerst een factuur maken?{' '}
            <Link
              href="/create-invoice"
              className="font-medium text-white underline decoration-white/30 underline-offset-[5px] transition-colors hover:decoration-white"
            >
              Maak gratis een factuur
            </Link>
          </p>
        </div>
      </Reveal>
    </section>
  );
};

export default CallToActionSection;
