'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { popularTemplates } from '@/lib/invoiceLandingData';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import { ArrowRight } from 'lucide-react';

export default function TemplatesLibrarySection() {
  return (
    <LandingSection>
      <SectionHeader
        eyebrow="Templates"
        title="Populaire factuurtemplates"
        description="Kies een template die past bij jouw werk. Open hem in de tool en pas alles aan."
        align="left"
        action={
          <Link
            href="/factuur-template"
            className="inline-flex shrink-0 items-center gap-2 font-semibold text-warm-orange transition-all hover:gap-3"
          >
            Alle templates
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {popularTemplates.map((template, index) => (
          <motion.div
            key={template.slug}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.05 }}
          >
            <Link
              href={template.href}
              className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all duration-300 hover:border-warm-orange/30 hover:bg-white hover:shadow-md sm:p-6"
            >
              <span className="mb-3 inline-flex w-fit rounded-full bg-warm-orange/10 px-2.5 py-1 text-xs font-semibold uppercase tracking-wide text-warm-orange">
                {template.tag}
              </span>
              <h3 className="text-lg font-bold text-deep-blue transition-colors group-hover:text-warm-orange">
                {template.title}
              </h3>
              <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                {template.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-blue group-hover:text-warm-orange">
                Bekijk template
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </LandingSection>
  );
}
