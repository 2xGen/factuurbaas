'use client';

import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import OfferteMaker from '@/components/tools/OfferteMaker';
import QuoteSidebar from '@/components/tools/QuoteSidebar';
import { useQuoteForm } from '@/hooks/useQuoteForm';
import QuotePreview from '@/components/tools/QuotePreview';

export default function OfferteMakerPage() {
  const previewRef = useRef(null);
  const form = useQuoteForm();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8 sm:px-6"
    >
      <div className="fixed left-[-9999px] top-0" aria-hidden>
        <QuotePreview ref={previewRef} quote={form.quote} />
      </div>

      <div className="grid items-start gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <OfferteMaker form={form} />
        </div>
        <div className="lg:col-span-1">
          <QuoteSidebar quote={form.quote} previewRef={previewRef} />
        </div>
      </div>
    </motion.div>
  );
}
