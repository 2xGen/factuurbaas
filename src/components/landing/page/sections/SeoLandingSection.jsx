'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { seoLandingLinks } from '@/lib/invoiceLandingData';
import { LandingSection } from '@/components/landing/LandingSection';
import { ArrowRight } from 'lucide-react';

export default function SeoLandingSection() {
  return (
    <LandingSection bg="muted">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center"
      >
        <h2 className="text-2xl font-heading font-bold tracking-tight text-deep-blue sm:text-3xl">
          Gratis factuur maken zonder account
        </h2>
        <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
          FactuurBaas is gemaakt voor ondernemers die geen zin hebben in ingewikkelde
          boekhoudprogramma&apos;s. Maak gratis een professionele factuur zonder account en
          download hem direct als PDF.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2.5 sm:gap-3">
          {seoLandingLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:mt-10">
          <Button asChild size="lg" className="h-12 rounded-xl px-8">
            <Link href="/create-invoice">
              Maak gratis factuur
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </LandingSection>
  );
}
