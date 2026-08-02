'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhyFreeHomeSection() {
  return (
    <section className="relative overflow-hidden bg-deep-blue text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 85% 0%, rgba(255,127,80,0.3), transparent 55%), radial-gradient(ellipse 40% 40% at 0% 100%, rgba(255,255,255,0.06), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-warm-orange">
              Transparantie
            </p>
            <h2 className="mt-3 font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-[2.125rem]">
              Waarom is FactuurBaas gratis?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              Maak professionele facturen zonder maandelijkse kosten. Ondernemen is al duur genoeg —
              wij houden factureren toegankelijk.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-white/80 sm:text-base">
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-orange" />
                Geen verplicht abonnement om te factureren
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-orange" />
                Jij bent onze gebruiker, niet ons product
              </li>
              <li className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-orange" />
                Geen verkoop van factuur- of bedrijfsgegevens
              </li>
            </ul>
            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="h-12 rounded-xl bg-warm-orange px-6 font-semibold text-white hover:bg-orange-600"
              >
                <Link href="/waarom-gratis">
                  Lees waarom het gratis is <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8"
          >
            <Shield className="mb-4 h-7 w-7 text-warm-orange" strokeWidth={1.75} />
            <p className="font-heading text-xl font-semibold leading-snug sm:text-2xl">
              Jij bent onze gebruiker, niet ons product.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
              Wij verdienen niet door jouw facturen of bedrijfsgegevens te verkopen. De kern van
              factureren blijft toegankelijk.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
