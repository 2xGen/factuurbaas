'use client';

import React from 'react';
import { Sparkles } from 'lucide-react';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';

/**
 * Dashboard "Binnenkort" block — logged-in users with high intent for power features.
 */
export default function DashboardComingSoon({ email = '' }) {
  return (
    <section className="mb-10 overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm sm:p-6">
      <div className="mb-4 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-orange/10 text-warm-orange">
          <Sparkles className="h-5 w-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-warm-orange">
            Binnenkort
          </p>
          <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
            Nieuwe functies op de planning
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Krijg een seintje zodra terugkerende facturen, uren→factuur en herinneringen live zijn.
          </p>
        </div>
      </div>

      <FeatureUpdatesSignup
        companyEmail={email}
        intro="Geen spam — alleen een mail wanneer een van deze functies beschikbaar is."
      />
    </section>
  );
}
