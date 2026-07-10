'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { FileSpreadsheet, FileText, FileType } from 'lucide-react';

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

const formatMeta = {
  word: { label: 'Word', Icon: FileType, accent: 'text-blue-600', bg: 'bg-blue-50' },
  excel: { label: 'Excel', Icon: FileSpreadsheet, accent: 'text-emerald-600', bg: 'bg-emerald-50' },
  pdf: { label: 'PDF', Icon: FileText, accent: 'text-red-600', bg: 'bg-red-50' },
};

function FormatThumbnail({ format = 'pdf', badge = 'Template' }) {
  const meta = formatMeta[format] || formatMeta.pdf;
  const Icon = meta.Icon;

  return (
    <div className="relative mb-4 h-[168px] overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-200/80">
      <span className="absolute top-2.5 right-2.5 z-10 rounded-md border border-slate-200/60 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
        {badge}
      </span>
      <div className="absolute inset-x-5 top-5 bottom-0">
        <div className="flex h-full flex-col rounded-t-lg border border-b-0 border-slate-200 bg-white shadow-lg">
          <div className={cn('flex flex-1 flex-col items-center justify-center gap-2 px-4', meta.bg)}>
            <Icon className={cn('h-10 w-10', meta.accent)} strokeWidth={1.5} />
            <p className={cn('text-sm font-bold', meta.accent)}>{meta.label} template</p>
            <p className="text-[10px] text-slate-500">Online invullen → PDF</p>
          </div>
          <div className="border-t border-slate-100 bg-white px-3 py-2">
            <div className="h-1.5 w-3/4 rounded bg-slate-100" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded bg-slate-100" />
          </div>
        </div>
      </div>
    </div>
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
  const theme = layoutThemes[layout] || layoutThemes.plain;
  const isNoBtw = data.noBtw;
  const firstItem = data.lineItems?.[0];
  const extraCount = Math.max(0, (data.lineItems?.length || 0) - 1);
  const total = data.total || data.subtotal || '€ 0,00';

  return (
      <div className="relative mb-4 h-[168px] overflow-hidden rounded-xl border border-slate-200/80 bg-gradient-to-b from-slate-100 to-slate-200/80">
      <span className="absolute top-2.5 right-2.5 z-10 rounded-md border border-slate-200/60 bg-white/95 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-slate-500 shadow-sm">
        {badge}
      </span>

      <div className="absolute inset-x-5 top-5 bottom-0">
        <div
          className={cn(
            'flex h-full flex-col overflow-hidden rounded-t-lg border border-b-0 shadow-lg',
            theme.card
          )}
        >
          <div className="flex-shrink-0 px-3 pt-3 pb-2">
            <div className="flex items-start justify-between gap-2">
              <div>
                <p className={cn('text-[11px] font-bold leading-none', theme.header)}>
                  {docType === 'quote' ? 'OFFERTE' : 'FACTUUR'}
                </p>
                <p className={cn('mt-0.5 text-[9px]', theme.muted)}>
                  {docType === 'quote'
                    ? data.quoteNumber || 'OFF-2026-001'
                    : data.invoiceNumber || '#2026-001'}
                </p>
              </div>
              <p className={cn('text-right text-[8px] leading-tight', theme.muted)}>
                {data.date || '9 juli 2026'}
              </p>
            </div>

            <div className="mt-2 grid grid-cols-2 gap-2 text-[8px] leading-tight">
              <div>
                <p className={cn('font-semibold uppercase tracking-wide', theme.muted)}>Van</p>
                <p className={cn('font-semibold truncate', theme.header)}>
                  {data.from?.name || 'Bedrijf'}
                </p>
              </div>
              <div>
                <p className={cn('font-semibold uppercase tracking-wide', theme.muted)}>Aan</p>
                <p className={cn('font-semibold truncate', theme.header)}>
                  {data.to?.name || 'Klant'}
                </p>
              </div>
            </div>
          </div>

          <div className={cn('mx-3 flex-shrink-0 overflow-hidden rounded border text-[8px]', theme.divider)}>
            <div
              className={cn(
                'grid grid-cols-12 gap-1 px-2 py-1 font-semibold',
                theme.row,
                theme.muted
              )}
            >
              <span className="col-span-8">Omschrijving</span>
              <span className="col-span-4 text-right">Bedrag</span>
            </div>
            {firstItem && (
              <div
                className={cn(
                  'grid grid-cols-12 gap-1 border-t px-2 py-1.5',
                  theme.divider,
                  theme.header
                )}
              >
                <span className="col-span-8 truncate">{firstItem.description}</span>
                <span className="col-span-4 text-right">{firstItem.amount}</span>
              </div>
            )}
            {extraCount > 0 && (
              <p className={cn('border-t px-2 py-1 text-center text-[7px]', theme.divider, theme.muted)}>
                +{extraCount} regel{extraCount > 1 ? 's' : ''}
              </p>
            )}
          </div>

          <div className="mt-auto flex-shrink-0 px-3 pb-3 pt-2">
            {!isNoBtw ? (
              <div className="ml-auto max-w-[120px] space-y-0.5 text-[8px]">
                <div className={cn('flex justify-between', theme.muted)}>
                  <span>Subtotaal</span>
                  <span className={theme.header}>{data.subtotal}</span>
                </div>
                <div className={cn('flex justify-between font-bold', theme.accent)}>
                  <span>Totaal</span>
                  <span>{total}</span>
                </div>
              </div>
            ) : (
              <div className="ml-auto max-w-[140px] text-right">
                <p className={cn('text-[7px] leading-snug', theme.muted)}>
                  Btw vrijgesteld (KOR)
                </p>
                <p className={cn('text-[9px] font-bold', theme.accent)}>Totaal {total}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
