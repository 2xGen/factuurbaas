'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Reveal, Stagger, staggerItem } from '@/components/landing/page/motion';

const facts = [
  {
    title: 'Nederland',
    text: 'Voor zzp’ers en kleine ondernemers, in het Nederlands.',
  },
  {
    title: 'Jouw gegevens',
    text: 'Accountgegevens staan in de EU. Alleen jij ziet jouw facturen. We verkopen ze niet.',
    href: '/veiligheid',
    link: 'Hoe we dat beveiligen',
  },
  {
    title: 'Gratis factureren',
    text: 'Een factuur maken en als PDF downloaden blijft gratis, zonder verplicht abonnement.',
    href: '/waarom-gratis',
    link: 'Waarom het gratis is',
  },
];

export default function WhyFreeHomeSection() {
  return (
    <section className="relative bg-paper text-ink">
      <div className="container mx-auto grid gap-14 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-32">
        <Reveal className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-ember">FactuurBaas.nl</p>
          <h2 className="mt-5 max-w-[14ch] font-display text-[2.4rem] font-normal leading-[1.02] tracking-[-0.03em] sm:text-5xl lg:text-[3.4rem]">
            Gemaakt voor <em className="text-ink-700">Nederlandse</em> ondernemers
          </h2>
          <img
            src="/crown-favicon.svg"
            alt=""
            className="mt-10 hidden h-12 w-12 opacity-90 lg:block"
            aria-hidden
          />
        </Reveal>

        <Stagger as="dl" className="border-t border-ink/15">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.title}
              variants={staggerItem}
              className="relative border-b border-ink/15 py-8 pl-16 sm:py-10 sm:pl-[5.5rem]"
            >
              <dt className="font-display text-2xl leading-tight sm:text-[1.9rem]">
                <span
                  className="absolute left-0 top-9 font-display text-2xl italic leading-none text-ember sm:top-11 sm:text-3xl"
                  aria-hidden
                >
                  {String(index + 1).padStart(2, '0')}
                </span>
                {fact.title}
              </dt>
              <dd className="mt-3 max-w-lg text-base leading-relaxed text-ink-500 sm:text-[1.05rem]">
                {fact.text}
              </dd>
              {fact.href && (
                <dd className="mt-4">
                  <Link
                    href={fact.href}
                    className="group/link inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember"
                  >
                    {fact.link}
                    <ArrowUpRight className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                </dd>
              )}
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
