'use client';

import React, { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';
import { cn } from '@/lib/utils';

/**
 * Demoted "Binnenkort" block — collapsed by default so it doesn't compete
 * with the attention / metrics cockpit.
 */
export default function DashboardComingSoon({ email = '' }) {
  const [open, setOpen] = useState(false);

  return (
    <section className="mb-4 overflow-hidden rounded-2xl border border-dashed border-slate-200 bg-white/70">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition hover:bg-slate-50/80 sm:px-5"
        aria-expanded={open}
      >
        <span className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
            <Sparkles className="h-4 w-4" strokeWidth={1.75} />
          </span>
          <span>
            <span className="block text-xs font-semibold uppercase tracking-wider text-slate-400">
              Binnenkort
            </span>
            <span className="block text-sm font-medium text-slate-600">
              Automatische herinneringen & geplande facturen
            </span>
          </span>
        </span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-slate-400 transition-transform',
            open && 'rotate-180'
          )}
        />
      </button>

      {open && (
        <div className="border-t border-slate-100 px-4 pb-4 pt-3 sm:px-5">
          <p className="mb-3 text-sm text-slate-500">
            Krijg een seintje zodra deze functies live zijn — geen spam.
          </p>
          <FeatureUpdatesSignup
            companyEmail={email}
            intro="Alleen een mail wanneer een van deze functies beschikbaar is."
          />
        </div>
      )}
    </section>
  );
}
