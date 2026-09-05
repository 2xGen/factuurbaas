'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { blogPillars } from '@/lib/blogPillars';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import {
  Rocket,
  FileStack,
  Scale,
  Wallet,
  FileText,
  Clock,
  ArrowRight,
} from 'lucide-react';

const pillarIcons = {
  starten: Rocket,
  'btw-belasting': Scale,
  offertes: FileText,
  uurtarief: Clock,
  tools: FileStack,
  'templates-voorbeelden': FileStack,
  boekhouden: Wallet,
  'betaling-beheer': Wallet,
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.08 },
  }),
};

function BlogPillarsSection() {
  return (
    <LandingSection bg="muted" className="!py-14 sm:!py-16 lg:!py-20">
      <SectionHeader
        eyebrow="Gidsen"
        title="Alles over factureren"
        description="Praktische uitleg per onderwerp. Kies een categorie en lees verder."
      />

      <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
        {blogPillars.map((pillar, index) => {
          const Icon = pillarIcons[pillar.id] || FileStack;

          return (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group"
            >
              <Link
                href={`/blogs?pillar=${pillar.id}`}
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm-orange/20 hover:shadow-md sm:p-6"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-warm-orange to-amber-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-warm-orange/15 to-amber-500/10 text-warm-orange transition-colors group-hover:from-warm-orange/25 group-hover:to-amber-500/20">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>

                <h3 className="text-lg font-bold text-deep-blue transition-colors group-hover:text-warm-orange">
                  {pillar.title}
                </h3>
                <p className="mt-2 flex-grow text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-warm-orange">
                  Bekijk gidsen
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
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
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Link
          href="/blogs"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-deep-blue px-8 py-3.5 font-semibold text-white shadow-lg shadow-deep-blue/20 transition-all hover:-translate-y-0.5 hover:shadow-xl"
        >
          Bekijk alle gidsen
          <ArrowRight className="h-5 w-5" />
        </Link>
      </motion.div>
    </LandingSection>
  );
}

export default BlogPillarsSection;
