'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, LayoutTemplate, PenLine } from 'lucide-react';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';

const steps = [
  {
    icon: PenLine,
    title: 'Vul je gegevens in',
    description: 'Logo, bedrijf, klant en diensten. Alles op één plek.',
  },
  {
    icon: LayoutTemplate,
    title: 'Kies je layout',
    description: 'Maak een factuur die professioneel oogt en bij je merk past.',
  },
  {
    icon: Download,
    title: 'Download PDF',
    description: 'Direct versturen naar je klant. Klaar in minuten.',
  },
];

export default function HowItWorksSection() {
  return (
    <LandingSection bg="muted">
      <SectionHeader
        eyebrow="Zo werkt het"
        title="Van leeg document naar professionele factuur"
      />

      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3 md:gap-6">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="relative rounded-2xl border border-slate-200 bg-white p-6 pt-8 text-center shadow-sm"
          >
            <span className="absolute -top-3 left-1/2 flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-warm-orange text-sm font-bold text-white shadow-md">
              {index + 1}
            </span>
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-deep-blue text-white">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="mb-2 text-lg font-bold text-deep-blue">{step.title}</h3>
            <p className="text-sm leading-relaxed text-slate-600 sm:text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 text-center sm:mt-12">
        <Button asChild size="lg" className="h-12 rounded-xl px-8">
          <Link href="/create-invoice">Start nu gratis</Link>
        </Button>
      </div>
    </LandingSection>
  );
}
