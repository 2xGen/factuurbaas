'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, FileText } from 'lucide-react';
import DemoInvoicePreview from '@/components/landing/DemoInvoicePreview';

const trustItems = [
  'Gratis · geen abonnement',
  'Zonder account als PDF',
  'Met account: status, btw & overzicht',
  "Voor ZZP'ers en kleine ondernemers",
];

const HeroSection = () => (
  <section className="relative overflow-hidden bg-gradient-to-br from-deep-blue via-sky-800 to-indigo-700 text-white">
    <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />
    </div>

    <div className="container relative z-10 mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-16">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-4 inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-sky-100"
          >
            Gratis · Geen account · Direct PDF
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[1.75rem] leading-[1.15] font-heading font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          >
            Maak gratis professionele facturen in 2 minuten
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg lg:mx-0"
          >
            Geen account. Geen abonnement. Geen ingewikkelde boekhouding. Maak je factuur,
            download direct als PDF en stuur hem naar je klant.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="h-12 rounded-xl px-6 text-base font-semibold sm:h-14 sm:px-8 sm:text-lg"
            >
              <Link href="/create-invoice">
                Maak gratis factuur
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-white/30 bg-white/5 px-6 text-base font-semibold text-white hover:bg-white/15 hover:text-white sm:h-14 sm:px-8 sm:text-lg"
            >
              <Link href="/voorbeeld">
                <FileText className="mr-2 h-5 w-5" />
                Bekijk voorbeelden
              </Link>
            </Button>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 lg:max-w-lg"
          >
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center justify-center gap-2 text-sm text-sky-100 sm:justify-start"
              >
                <CheckCircle className="h-4 w-4 flex-shrink-0 text-sky-300" />
                <span>{item}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mx-auto w-full max-w-md lg:max-w-lg lg:justify-self-end"
        >
          <div className="relative">
            <div
              className="absolute -inset-3 rounded-2xl bg-white/10 blur-2xl sm:-inset-4"
              aria-hidden
            />
            <div className="relative rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm sm:p-4">
              <DemoInvoicePreview layout="plain" className="shadow-2xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
