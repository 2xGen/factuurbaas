'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calculator, Clock, FileText, Receipt } from 'lucide-react';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';

const featuredTools = [
  {
    label: 'BTW berekenen',
    description: 'Bereken bedragen inclusief of exclusief btw.',
    href: '/tools/btw-calculator',
    icon: Calculator,
  },
  {
    label: 'Uurtarief bepalen',
    description: 'Bereken je uurtarief op basis van inkomen en kosten.',
    href: '/tools/uurtarief-calculator',
    icon: Clock,
  },
  {
    label: 'Offertes maken',
    description: 'Maak professionele offertes en zet ze om naar een factuur.',
    href: '/tools/offerte-maker',
    icon: FileText,
  },
  {
    label: 'Betaaltermijnen berekenen',
    description: 'Bereken de vervaldatum van je factuur in seconden.',
    href: '/tools/betaaltermijn-calculator',
    icon: Receipt,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.07 },
  }),
};

export default function HomeToolsSection() {
  return (
    <LandingSection>
      <SectionHeader
        eyebrow="Tools"
        title="Gratis tools voor ondernemers"
        description="Naast facturen maken helpen we je met handige calculators en generators. Geen account nodig."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
        {featuredTools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={tool.href}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={tool.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-warm-orange/25 hover:shadow-md sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-warm-orange/15 to-amber-500/10 text-warm-orange transition-colors group-hover:from-warm-orange/25 group-hover:to-amber-500/20">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-lg font-bold text-deep-blue transition-colors group-hover:text-warm-orange">
                    {tool.label}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">{tool.description}</p>
                  <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-warm-orange">
                    Gebruik tool
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-10 text-center sm:mt-12"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.2 }}
      >
        <Link
          href="/tools"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-deep-blue px-8 py-3.5 font-semibold text-white shadow-lg shadow-deep-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Bekijk alle gratis tools
          <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </LandingSection>
  );
}
