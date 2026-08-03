'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const COPY = {
  nl: 'Gratis gemaakt met FactuurBaas.nl',
  en: 'Made for free with FactuurBaas.nl',
};

/**
 * Subtle footer on invoice/quote PDFs. Default on; hide when showBranding is false.
 */
export default function PdfBrandingFooter({ showBranding = true, language = 'nl', className }) {
  if (showBranding === false) return null;

  return (
    <p
      className={cn(
        'mt-5 pt-2 text-center text-[8px] leading-tight tracking-wide opacity-[0.45] md:text-[9px]',
        className
      )}
    >
      {COPY[language] || COPY.nl}
    </p>
  );
}
