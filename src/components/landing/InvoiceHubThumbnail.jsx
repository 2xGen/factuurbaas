'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FileSpreadsheet, FileText, FileType, Palette, Table2 } from 'lucide-react';
import { invoiceThemes } from '@/components/landing/DemoInvoicePreview';

const formatMeta = {
  word: { label: 'Word', Icon: FileType },
  excel: { label: 'Excel', Icon: FileSpreadsheet },
  pdf: { label: 'PDF', Icon: FileText },
  canva: { label: 'Canva', Icon: Palette },
  'google-docs': { label: 'Docs', Icon: FileText },
  'google-sheets': { label: 'Sheets', Icon: Table2 },
};

const labelClass = 'font-mono text-[8.5px] uppercase tracking-[0.14em]';

function ThumbnailFrame({ badge, sheetClassName, children }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-paper-200 ring-1 ring-inset ring-ink/5">
      <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 opacity-80" aria-hidden />
      <span className="absolute left-3 top-3 z-10 rounded-full border border-ink/10 bg-white/85 px-2.5 py-1 font-mono text-[9.5px] uppercase tracking-[0.16em] text-ink-500 backdrop-blur">
        {badge}
      </span>
      <div className="absolute inset-x-[13%] bottom-0 top-[17%] origin-bottom transition-transform duration-[900ms] ease-out group-hover:-translate-y-1 group-hover:scale-[1.03] motion-reduce:transition-none">
        <div
          className="absolute inset-0 translate-x-2.5 translate-y-1 rotate-[2.5deg] rounded-t-lg border border-ink/5 bg-paper-50 shadow-paper"
          aria-hidden
        />
        <div
          className={cn(
            'relative flex h-full flex-col overflow-hidden rounded-t-lg border border-b-0 shadow-paper',
            sheetClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function FormatThumbnail({ format = 'pdf', badge = 'Template' }) {
  const meta = formatMeta[format] || formatMeta.pdf;
  const Icon = meta.Icon;

  return (
    <ThumbnailFrame badge={badge} sheetClassName="border-ink/[0.08] bg-white">
      <div className="h-1 bg-gradient-to-r from-ink via-ink-700 to-ember" aria-hidden />
      <div className="flex flex-1 flex-col items-center justify-center gap-2.5 px-4">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink/[0.08] bg-paper-50 text-ink-700">
          <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden />
        </span>
        <p className="font-display text-lg leading-none tracking-[-0.02em] text-ink">{meta.label} template</p>
        <p className="font-mono text-[9.5px] uppercase tracking-[0.12em] text-ink-400">Online invullen → PDF</p>
      </div>
      <div className="border-t border-dashed border-ink/10 px-4 py-3">
        <div className="h-1.5 w-3/4 rounded-full bg-paper-200" />
        <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-paper-200" />
      </div>
    </ThumbnailFrame>
  );
}

export default function InvoiceHubThumbnail({
  example,
  badge = 'Voorbeeld',
  format,
  docType = 'invoice',
}) {
  if (format) {
    return <FormatThumbnail format={format} badge={badge} />;
  }

  const data = example || {};
  const layout = data.layout || 'plain';
  const theme = invoiceThemes[layout] || invoiceThemes.plain;
  const isNoBtw = data.noBtw;
  const firstItem = data.lineItems?.[0];
  const extraCount = Math.max(0, (data.lineItems?.length || 0) - 1);
  const total = data.total || data.subtotal || '€ 0,00';

  return (
    <ThumbnailFrame badge={badge} sheetClassName={theme.card}>
      {theme.bar && <div className={cn('flex-shrink-0', theme.bar)} aria-hidden />}
      <div className="flex-shrink-0 px-4 pb-2 pt-3.5">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p
              className={cn(
                'font-display text-[15px] lowercase leading-none tracking-[-0.01em] first-letter:uppercase',
                theme.header
              )}
            >
              {docType === 'quote' ? 'OFFERTE' : 'FACTUUR'}
            </p>
            <p className={cn('mt-1 font-mono text-[8.5px]', theme.muted)}>
              {docType === 'quote'
                ? data.quoteNumber || 'OFF-2026-001'
                : data.invoiceNumber || '#2026-001'}
            </p>
          </div>
          <p className={cn('text-right font-mono text-[8.5px] leading-tight', theme.muted)}>
            {data.date || '9 juli 2026'}
          </p>
        </div>

        <div className={cn('mt-2.5 grid grid-cols-2 gap-2 border-t pt-2 text-[9px] leading-tight', theme.divider)}>
          <div className="min-w-0">
            <p className={cn(labelClass, theme.label)}>Van</p>
            <p className={cn('mt-0.5 truncate font-medium', theme.header)}>{data.from?.name || 'Bedrijf'}</p>
          </div>
          <div className="min-w-0">
            <p className={cn(labelClass, theme.label)}>Aan</p>
            <p className={cn('mt-0.5 truncate font-medium', theme.header)}>{data.to?.name || 'Klant'}</p>
          </div>
        </div>
      </div>

      <div className="mx-4 flex-shrink-0 text-[9px]">
        <div className={cn('grid grid-cols-12 gap-1 rounded px-2 py-1', theme.row, theme.label)}>
          <span className={cn('col-span-8', labelClass)}>Omschrijving</span>
          <span className={cn('col-span-4 text-right', labelClass)}>Bedrag</span>
        </div>
        {firstItem && (
          <div className={cn('grid grid-cols-12 gap-1 px-2 py-1.5', theme.header)}>
            <span className="col-span-8 truncate">{firstItem.description}</span>
            <span className="tabular col-span-4 text-right">{firstItem.amount}</span>
          </div>
        )}
        {extraCount > 0 && (
          <p className={cn('border-t border-dashed px-2 py-1 text-center font-mono text-[8px]', theme.divider, theme.muted)}>
            +{extraCount} regel{extraCount > 1 ? 's' : ''}
          </p>
        )}
      </div>

      <div className="mt-auto flex-shrink-0 px-4 pb-3.5 pt-2">
        {!isNoBtw ? (
          <div className={cn('ml-auto max-w-[130px] space-y-0.5 border-t pt-1.5 text-[9px]', theme.divider)}>
            <div className={cn('flex justify-between', theme.muted)}>
              <span>Subtotaal</span>
              <span className={cn('tabular', theme.header)}>{data.subtotal}</span>
            </div>
            <div className={cn('flex items-baseline justify-between', theme.accent)}>
              <span className="font-semibold">Totaal</span>
              <span className="tabular font-display text-[13px]">{total}</span>
            </div>
          </div>
        ) : (
          <div className="ml-auto max-w-[150px] text-right">
            <p className={cn('text-[8px] leading-snug', theme.muted)}>Btw vrijgesteld (KOR)</p>
            <p className={cn('font-display text-[13px]', theme.accent)}>Totaal {total}</p>
          </div>
        )}
      </div>
    </ThumbnailFrame>
  );
}
