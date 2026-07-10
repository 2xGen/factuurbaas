'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

const layoutThemes = {
  plain: {
    card: 'bg-white border-gray-200',
    header: 'text-gray-900',
    muted: 'text-gray-500',
    accent: 'text-blue-600',
    divider: 'border-gray-200',
    row: 'bg-gray-50',
  },
  minimalist: {
    card: 'bg-white border-gray-100',
    header: 'text-black',
    muted: 'text-gray-400',
    accent: 'text-black',
    divider: 'border-gray-100',
    row: 'bg-white',
  },
  modern: {
    card: 'bg-slate-900 border-slate-700',
    header: 'text-white',
    muted: 'text-slate-400',
    accent: 'text-sky-400',
    divider: 'border-slate-700',
    row: 'bg-slate-800/50',
  },
  corporate: {
    card: 'bg-blue-50 border-blue-200',
    header: 'text-blue-900',
    muted: 'text-blue-600/70',
    accent: 'text-blue-800',
    divider: 'border-blue-200',
    row: 'bg-blue-100/50',
  },
};

const defaultExample = {
  invoiceNumber: '#2026-001',
  date: '9 juli 2026',
  paymentTerm: '14 dagen',
  from: { name: 'Studio Jansen', detail: 'KvK 12345678' },
  to: { name: 'Klant BV', detail: 'Amsterdam' },
  lineItems: [{ description: 'Website ontwerp', quantity: '10 uur', amount: '€ 750,00' }],
  subtotal: '€ 750,00',
  btwLabel: 'BTW 21%',
  btwAmount: '€ 157,50',
  total: '€ 907,50',
};

export default function DemoInvoicePreview({
  layout = 'plain',
  compact = false,
  showButton = true,
  noBtw = false,
  example,
  className,
  docType = 'invoice',
}) {
  const data = { ...defaultExample, ...example };
  const theme = layoutThemes[layout] || layoutThemes.plain;
  const isNoBtw = noBtw || data.noBtw;
  const isQuote = docType === 'quote';
  const subtotal = data.subtotal || '€ 750,00';
  const total = isNoBtw ? data.total || subtotal : data.total || '€ 907,50';
  const lineItems = data.lineItems?.length ? data.lineItems : defaultExample.lineItems;
  const docNumber = isQuote
    ? data.quoteNumber || 'OFF-2026-001'
    : data.invoiceNumber || '#2026-001';

  return (
    <div
      className={cn(
        'rounded-xl border shadow-2xl overflow-hidden',
        theme.card,
        compact ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-sm',
        className
      )}
    >
      <div className={cn('p-4 sm:p-5', compact && 'p-3 sm:p-4')}>
        <div className="flex justify-between items-start mb-4">
          <div>
            <p className={cn('font-bold text-base sm:text-lg', theme.header)}>
              {isQuote ? 'OFFERTE' : 'FACTUUR'}
            </p>
            <p className={cn('mt-0.5', theme.muted)}>{docNumber}</p>
          </div>
          <div className={cn('text-right text-[10px] sm:text-xs', theme.muted)}>
            <p>Datum: {data.date}</p>
            {isQuote ? (
              <p>Geldig tot: {data.validUntil || '23 juli 2026'}</p>
            ) : (
              <p>Betaaltermijn: {data.paymentTerm}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <p className={cn('font-semibold uppercase tracking-wide text-[9px] sm:text-[10px]', theme.muted)}>
              Van
            </p>
            <p className={cn('font-semibold mt-0.5', theme.header)}>{data.from.name}</p>
            <p className={cn(theme.muted)}>{data.from.detail}</p>
          </div>
          <div>
            <p className={cn('font-semibold uppercase tracking-wide text-[9px] sm:text-[10px]', theme.muted)}>
              Aan
            </p>
            <p className={cn('font-semibold mt-0.5', theme.header)}>{data.to.name}</p>
            <p className={cn(theme.muted)}>{data.to.detail}</p>
          </div>
        </div>

        <div className={cn('rounded-lg overflow-hidden border', theme.divider)}>
          <div className={cn('grid grid-cols-12 gap-2 px-3 py-2 font-semibold', theme.row, theme.muted)}>
            <span className="col-span-7">Omschrijving</span>
            <span className="col-span-2 text-right">Aantal</span>
            <span className="col-span-3 text-right">Bedrag</span>
          </div>
          {lineItems.map((item) => (
            <div
              key={`${item.description}-${item.amount}`}
              className={cn('grid grid-cols-12 gap-2 px-3 py-2.5 border-t', theme.divider, theme.header)}
            >
              <span className="col-span-7">{item.description}</span>
              <span className="col-span-2 text-right">{item.quantity}</span>
              <span className="col-span-3 text-right">{item.amount}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 space-y-1.5 ml-auto max-w-[180px]">
          {!isNoBtw && (
            <div className="flex justify-between">
              <span className={theme.muted}>Subtotaal</span>
              <span className={theme.header}>{subtotal}</span>
            </div>
          )}
          {!isNoBtw ? (
            <div className="flex justify-between">
              <span className={theme.muted}>{data.btwLabel || 'BTW 21%'}</span>
              <span className={theme.header}>{data.btwAmount || '€ 157,50'}</span>
            </div>
          ) : (
            <p className={cn('text-[9px] sm:text-[10px] leading-snug', theme.muted)}>
              Btw vrijgesteld op grond van artikel 25 Wet OB
            </p>
          )}
          <div
            className={cn(
              'flex justify-between pt-2 border-t font-bold text-sm sm:text-base',
              theme.divider,
              theme.accent
            )}
          >
            <span>Totaal</span>
            <span>{total}</span>
          </div>
        </div>

        {showButton && (
          <div className="mt-4 flex justify-end">
            <div className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white sm:text-xs">
              <Download className="w-3 h-3" />
              Download PDF
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
