'use client';

import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { INSIFY_AOV_URL } from '@/lib/affiliateLinks';

/**
 * Fixed bottom-right partner CTA for AOV pages.
 */
export default function InsifyAovSticky() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="pointer-events-none fixed bottom-5 right-4 z-[80] flex max-w-[min(100vw-2rem,20rem)] flex-col items-end gap-2 sm:bottom-6 sm:right-6">
      <div className="pointer-events-auto relative rounded-2xl border border-slate-200 bg-white p-3 shadow-lg shadow-slate-900/10 sm:p-4">
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 shadow-sm hover:text-slate-800"
          aria-label="Sluiten"
        >
          <X className="h-3.5 w-3.5" />
        </button>
        <p className="pr-4 text-xs font-medium text-slate-600 sm:text-sm">
          Klaar om een AOV te vergelijken?
        </p>
        <a
          href={INSIFY_AOV_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="mt-2 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-warm-orange px-3 py-2.5 text-sm font-bold text-white hover:bg-orange-600"
        >
          Bekijk AOV bij Insify
          <ExternalLink className="h-3.5 w-3.5 shrink-0" aria-hidden />
        </a>
        <p className="mt-2 text-[10px] leading-snug text-slate-400">
          Partnerlink · kost jou niets extra
        </p>
      </div>
    </div>
  );
}
