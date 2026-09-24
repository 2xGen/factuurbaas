'use client';

import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { INSIFY_AOV_URL } from '@/lib/affiliateLinks';

/**
 * Partner CTA for Insify AOV quote wizard (affiliate).
 * Same card style on tools and blog AOV pages.
 */
export default function InsifyAovCta({
  title = 'Klaar om een AOV te vergelijken?',
  text = 'Met Insify vraag je digitaal een AOV-offerte aan — handig als je weet hoeveel dekking je ongeveer nodig hebt.',
  label = 'Bekijk AOV bij Insify →',
  className = '',
}) {
  return (
    <div
      className={`my-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 not-prose ${className}`}
    >
      <p className="font-heading text-lg font-semibold text-deep-blue">{title}</p>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
      <div className="mt-4">
        <Button
          asChild
          className="rounded-lg bg-warm-orange px-6 py-3 text-base font-bold text-white hover:bg-orange-600"
        >
          <a href={INSIFY_AOV_URL} target="_blank" rel="noopener noreferrer sponsored">
            {label}
            <ExternalLink className="ml-2 inline h-4 w-4" aria-hidden />
          </a>
        </Button>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Partnerlink: als je via deze knop een verzekering afsluit, ontvangt FactuurBaas mogelijk een
        vergoeding. Dat kost jou niets extra.
      </p>
    </div>
  );
}
