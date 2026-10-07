'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Download } from 'lucide-react';

export const invoiceThemes = {
  plain: {
    card: 'bg-white border-ink/[0.08]',
    header: 'text-ink',
    muted: 'text-ink-500',
    label: 'text-ink-400',
    accent: 'text-ink',
    divider: 'border-ink/10',
    row: 'bg-paper-50',
    bar: 'h-1 bg-gradient-to-r from-ink via-ink-700 to-ember',
    button: 'bg-ink text-white',
  },
  minimalist: {
    card: 'bg-white border-ink/[0.05]',
    header: 'text-ink-950',
    muted: 'text-ink-400',
    label: 'text-ink-400',
    accent: 'text-ink-950',
    divider: 'border-ink/[0.07]',
    row: 'bg-white',
    bar: '',
    button: 'bg-ink-950 text-white',
  },
  modern: {
    card: 'bg-ink-950 border-white/10',
    header: 'text-white',
    muted: 'text-white/55',
    label: 'text-white/45',
    accent: 'text-ember-100',
    divider: 'border-white/10',
    row: 'bg-white/[0.04]',
    bar: 'h-1 bg-ember',
    button: 'bg-white text-ink',
  },
  corporate: {
    card: 'bg-paper-50 border-ink/10',
    header: 'text-ink',
    muted: 'text-ink-500',
    label: 'text-ink-500',
    accent: 'text-ink',
    divider: 'border-ink/15',
    row: 'bg-paper-200/70',
    bar: 'h-1.5 bg-ink',
    button: 'bg-ink text-white',
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

const labelClass = 'font-mono text-[9px] uppercase tracking-[0.14em] sm:text-[10px]';

/** Paper sheets fanned behind a document preview. */
export function PreviewStack({ children, className }) {
  return (
    <div className={cn('relative mx-auto w-full max-w-[34rem] lg:mr-0', className)}>
      <div
        className="absolute inset-0 translate-x-3 translate-y-3 rotate-[3deg] rounded-[10px] border border-ink/5 bg-paper-50 shadow-paper sm:translate-x-5 sm:translate-y-4 sm:rotate-[3.5deg]"
        aria-hidden
      />
      <div
        className="absolute inset-0 -translate-x-2 translate-y-1.5 -rotate-[1.5deg] rounded-[10px] border border-ink/5 bg-white/80 shadow-paper sm:-translate-x-3 sm:translate-y-2 sm:-rotate-[2deg]"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </div>
  );
}

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
  const theme = invoiceThemes[layout] || invoiceThemes.plain;
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
        'relative overflow-hidden rounded-[10px] border shadow-paper',
        theme.card,
        compact ? 'text-[10px] sm:text-xs' : 'text-xs sm:text-[13px]',
        className
      )}
    >
      {theme.bar && <div className={cn('absolute inset-x-0 top-0', theme.bar)} aria-hidden />}
      <div className={cn('p-5 sm:p-7', compact && 'p-3 sm:p-4')}>
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p
              className={cn(
                'font-display font-normal lowercase leading-none tracking-[-0.02em] first-letter:uppercase',
                compact ? 'text-lg sm:text-xl' : 'text-2xl sm:text-[1.75rem]',
                theme.header
              )}
            >
              {isQuote ? 'OFFERTE' : 'FACTUUR'}
            </p>
            <p className={cn('mt-1.5 font-mono text-[10px] sm:text-[11px]', theme.muted)}>{docNumber}</p>
          </div>
          <div className={cn('text-right font-mono text-[10px] leading-relaxed sm:text-[11px]', theme.muted)}>
            <p>Datum: {data.date}</p>
            {isQuote ? (
              <p>Geldig tot: {data.validUntil || '23 juli 2026'}</p>
            ) : (
              <p>Betaaltermijn: {data.paymentTerm}</p>
            )}
          </div>
        </div>

        <div className={cn('mb-5 grid grid-cols-2 gap-4 border-y py-4', theme.divider)}>
          <div className="min-w-0">
            <p className={cn(labelClass, theme.label)}>Van</p>
            <p className={cn('mt-1 font-medium', theme.header)}>{data.from.name}</p>
            <p className={cn(theme.muted)}>{data.from.detail}</p>
          </div>
          <div className="min-w-0">
            <p className={cn(labelClass, theme.label)}>Aan</p>
            <p className={cn('mt-1 font-medium', theme.header)}>{data.to.name}</p>
            <p className={cn(theme.muted)}>{data.to.detail}</p>
          </div>
        </div>

        <div>
          <div className={cn('grid grid-cols-12 gap-2 rounded-md px-3 py-2', theme.row, theme.label)}>
            <span className={cn('col-span-7', labelClass)}>Omschrijving</span>
            <span className={cn('col-span-2 text-right', labelClass)}>Aantal</span>
            <span className={cn('col-span-3 text-right', labelClass)}>Bedrag</span>
          </div>
          {lineItems.map((item) => (
            <div
              key={`${item.description}-${item.amount}`}
              className={cn(
                'grid grid-cols-12 gap-2 border-b border-dashed px-3 py-2.5 last:border-b-0',
                theme.divider,
                theme.header
              )}
            >
              <span className="col-span-7 font-medium">{item.description}</span>
              <span className={cn('tabular col-span-2 text-right', theme.muted)}>{item.quantity}</span>
              <span className="tabular col-span-3 text-right">{item.amount}</span>
            </div>
          ))}
        </div>

        <div className={cn('ml-auto mt-3 max-w-[200px] space-y-1.5 border-t pt-3', theme.divider)}>
          {!isNoBtw && (
            <div className="flex justify-between">
              <span className={theme.muted}>Subtotaal</span>
              <span className={cn('tabular', theme.header)}>{subtotal}</span>
            </div>
          )}
          {!isNoBtw ? (
            <div className="flex justify-between">
              <span className={theme.muted}>{data.btwLabel || 'BTW 21%'}</span>
              <span className={cn('tabular', theme.header)}>{data.btwAmount || '€ 157,50'}</span>
            </div>
          ) : (
            <p className={cn('text-[9px] leading-snug sm:text-[10px]', theme.muted)}>
              {data.exemptionNote || 'Btw vrijgesteld op grond van artikel 25 Wet OB'}
            </p>
          )}
          <div className={cn('flex items-baseline justify-between pt-2', theme.accent)}>
            <span className="text-sm font-semibold">Totaal</span>
            <span
              className={cn(
                'tabular font-display leading-none',
                compact ? 'text-base sm:text-lg' : 'text-xl sm:text-2xl'
              )}
            >
              {total}
            </span>
          </div>
        </div>

        {showButton && (
          <div className="mt-5 flex justify-end">
            <div
              className={cn(
                'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[10px] font-medium sm:text-xs',
                theme.button
              )}
            >
              <Download className="h-3 w-3" aria-hidden />
              Download PDF
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
