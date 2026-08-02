'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { audienceTags, trustPoints } from '@/lib/invoiceLandingData';
import { LandingSection, SectionHeader } from '@/components/landing/LandingSection';
import { CheckCircle, Users } from 'lucide-react';

export default function TrustSection() {
  return (
    <LandingSection>
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Vertrouwen"
          title="Waarom ondernemers FactuurBaas gebruiken"
        />

        <div className="mb-8 grid gap-3 sm:grid-cols-2 sm:gap-4">
          {trustPoints.map((point, index) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 sm:px-5 sm:py-4"
            >
              <CheckCircle className="h-5 w-5 flex-shrink-0 text-warm-orange" />
              <span className="font-medium text-deep-blue">{point.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-sky-200 bg-gradient-to-br from-sky-50 via-white to-orange-50 p-6 text-center sm:p-8"
        >
          <Users className="mx-auto mb-3 h-7 w-7 text-warm-orange sm:mb-4 sm:h-8 sm:w-8" />
          <p className="mb-4 text-base font-semibold text-deep-blue sm:text-lg">Gemaakt voor:</p>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3">
            {audienceTags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-2 text-sm font-medium text-deep-blue shadow-sm sm:px-4"
              >
                <CheckCircle className="h-4 w-4 text-warm-orange" />
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </LandingSection>
  );
}
