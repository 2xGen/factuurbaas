'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPillars, getPillarHref } from '@/lib/blogPillars';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import {
  Rocket,
  FileStack,
  Scale,
  Wallet,
  FileText,
  Clock,
  ArrowRight,
  Shield,
  Receipt,
} from 'lucide-react';

const pillarIcons = {
  starten: Rocket,
  'btw-belasting': Scale,
  offertes: FileText,
  uurtarief: Clock,
  tools: FileStack,
  'templates-voorbeelden': FileStack,
  boekhouden: Wallet,
  'zakelijke-kosten': Receipt,
  hypotheek: Wallet,
  aov: Shield,
  'betaling-beheer': Wallet,
};

const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.04 },
  }),
};

function BlogPillarsSection() {
  return (
    <LandingSection bg="muted" className="!py-14 sm:!py-16 lg:!py-20">
      <SectionHeader
        eyebrow="Gidsen"
        title="Alles voor je bedrijf als zzp'er"
        description="Korte gidsen over factureren, geld en ondernemen."
      />

      <div className="mx-auto grid max-w-4xl gap-3 sm:grid-cols-2">
        {blogPillars.map((pillar, index) => {
          const Icon = pillarIcons[pillar.id] || FileStack;
          const title = pillar.cardTitle || pillar.title;
          const blurb = pillar.cardBlurb || pillar.description;

          return (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Link
                href={getPillarHref(pillar)}
                className="group flex items-start gap-3.5 rounded-xl border border-slate-200/80 bg-white px-4 py-3.5 transition-all duration-200 hover:border-warm-orange/30 hover:shadow-sm sm:px-5 sm:py-4"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warm-orange/10 text-warm-orange transition-colors group-hover:bg-warm-orange/15">
                  <Icon className="h-[18px] w-[18px]" strokeWidth={2} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-[15px] font-semibold leading-snug text-deep-blue sm:text-base">
                      {title}
                    </h3>
                    <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-slate-300 transition-all group-hover:translate-x-0.5 group-hover:text-warm-orange" />
                  </div>
                  <p className="mt-0.5 text-sm leading-snug text-slate-500">{blurb}</p>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      <motion.div
        className="mt-8 text-center sm:mt-10"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.15 }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-sm font-semibold text-deep-blue transition-colors hover:text-warm-orange"
        >
          Bekijk alle gidsen
          <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </LandingSection>
  );
}

export default BlogPillarsSection;
