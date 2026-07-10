'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { layoutPreviews } from '@/lib/invoiceLandingData';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import { ArrowRight } from 'lucide-react';

function LayoutPreviewCard({ layout, index }) {
  const { name, previewStyle } = layout;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <Link
        href="/create-invoice"
        className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-warm-orange/30 hover:shadow-lg"
      >
        <div
          className={cn(
            'flex h-32 flex-col justify-between overflow-hidden rounded-xl border p-3 sm:h-36',
            previewStyle.bg,
            previewStyle.border
          )}
        >
          <div>
            <div className={cn('mb-2 h-2 w-1/3 rounded-sm', previewStyle.accent)} />
            <div className="mb-1 h-1.5 w-full rounded-sm bg-black/10" />
            <div className="h-1.5 w-2/3 rounded-sm bg-black/5" />
          </div>
          <div>
            <div className="mb-1 h-1.5 w-full rounded-sm bg-black/10" />
            <div className="h-1.5 w-1/2 rounded-sm bg-black/5" />
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <p className="font-semibold text-deep-blue transition-colors group-hover:text-warm-orange">
            {name}
          </p>
          <ArrowRight className="h-4 w-4 text-slate-400 transition-all group-hover:translate-x-0.5 group-hover:text-warm-orange" />
        </div>
      </Link>
    </motion.div>
  );
}

export default function StylePickerSection() {
  return (
    <LandingSection>
      <SectionHeader
        eyebrow="Kies je stijl"
        title="Maak een factuur die bij jouw bedrijf past"
        description="Van strak en minimalistisch tot opvallend creatief. Kies een layout en begin direct."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
        {layoutPreviews.map((layout, index) => (
          <LayoutPreviewCard key={layout.id} layout={layout} index={index} />
        ))}
      </div>
    </LandingSection>
  );
}
