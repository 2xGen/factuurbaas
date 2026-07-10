import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { calculateQuoteBreakdown, formatQuoteMoney } from '@/lib/quoteUtils';

const layoutStyles = {
  plain: {
    bg: 'bg-white',
    text: 'text-gray-800',
    primary: 'text-blue-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-500',
    headerBg: 'bg-gray-50',
    tableHeaderBg: 'bg-gray-50',
    borderColor: 'border-gray-200',
    termsBg: 'bg-gray-50',
  },
  modern: {
    bg: 'bg-gradient-to-br from-slate-900 to-slate-800',
    text: 'text-gray-100',
    primary: 'text-sky-400',
    secondary: 'text-gray-300',
    muted: 'text-gray-400',
    headerBg: 'bg-slate-700/50',
    tableHeaderBg: 'bg-slate-700',
    borderColor: 'border-slate-600',
    termsBg: 'bg-slate-700/50',
  },
  classic: {
    bg: 'bg-gradient-to-br from-stone-100 to-stone-200',
    text: 'text-gray-900',
    primary: 'text-stone-800',
    secondary: 'text-gray-700',
    muted: 'text-gray-600',
    headerBg: 'bg-stone-200/50',
    tableHeaderBg: 'bg-stone-100',
    borderColor: 'border-stone-400',
    termsBg: 'bg-stone-100',
  },
  creative: {
    bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500',
    text: 'text-white',
    primary: 'text-yellow-300',
    secondary: 'text-pink-100',
    muted: 'text-pink-100',
    headerBg: 'bg-white/10',
    tableHeaderBg: 'bg-white/20',
    borderColor: 'border-white/30',
    termsBg: 'bg-white/10',
  },
  minimalist: {
    bg: 'bg-white',
    text: 'text-gray-700',
    primary: 'text-black',
    secondary: 'text-gray-500',
    muted: 'text-gray-500',
    headerBg: 'bg-white',
    tableHeaderBg: 'bg-white',
    borderColor: 'border-gray-100',
    termsBg: 'bg-white',
  },
  corporate: {
    bg: 'bg-blue-50',
    text: 'text-gray-800',
    primary: 'text-blue-800',
    secondary: 'text-gray-600',
    muted: 'text-gray-600',
    headerBg: 'bg-blue-100',
    tableHeaderBg: 'bg-blue-200',
    borderColor: 'border-blue-300',
    termsBg: 'bg-blue-100',
  },
};

const QuotePreview = React.forwardRef(({ quote }, ref) => {
  const { subtotal, taxAmount, grandTotal } = calculateQuoteBreakdown(quote);
  const company = quote.companyDetails || {};
  const client = quote.clientDetails || {};
  const opts = quote.options || {};
  const currentLayout = layoutStyles[quote.layout] || layoutStyles.plain;

  const companyLines = [
    company.street,
    [company.postalCode, company.city].filter(Boolean).join(' '),
    company.email,
    company.kvk ? `KvK ${company.kvk}` : '',
    company.btw ? `BTW ${company.btw}` : '',
    company.iban ? `IBAN ${company.iban}` : '',
  ].filter(Boolean);

  return (
    <div
      ref={ref}
      className={cn(
        'relative mx-auto my-4 box-border flex h-[297mm] w-[210mm] flex-col p-8 font-sans shadow-lg md:my-0',
        currentLayout.bg,
        currentLayout.text
      )}
    >
      <div className="flex flex-grow flex-col">
        <div
          className={cn(
            'mb-6 flex items-start justify-between border-b pb-4',
            currentLayout.borderColor
          )}
        >
          <div>
            {quote.logo && (
              <img
                src={quote.logo}
                alt="Logo"
                className="mb-2 h-12 max-w-[120px] object-contain"
              />
            )}
            <p className={cn('text-2xl font-bold', currentLayout.primary)}>OFFERTE</p>
            <p className={cn('text-sm', currentLayout.muted)}>{quote.quoteNumber}</p>
          </div>
          <div className={cn('text-right text-sm', currentLayout.secondary)}>
            {quote.quoteDate && (
              <p>
                Datum:{' '}
                {format(new Date(quote.quoteDate), 'd MMMM yyyy', { locale: nl })}
              </p>
            )}
            {opts.showValidity && quote.validUntil && (
              <p>
                Geldig tot:{' '}
                {format(new Date(quote.validUntil), 'd MMMM yyyy', { locale: nl })}
              </p>
            )}
          </div>
        </div>

        <div className="mb-6 grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className={cn('mb-1 text-xs font-semibold uppercase tracking-wide', currentLayout.muted)}>
              Van
            </p>
            <p className={cn('font-semibold', currentLayout.text)}>{company.name || 'Uw bedrijf'}</p>
            {companyLines.map((line) => (
              <p key={line} className={currentLayout.secondary}>
                {line}
              </p>
            ))}
          </div>
          <div>
            <p className={cn('mb-1 text-xs font-semibold uppercase tracking-wide', currentLayout.muted)}>
              Aan
            </p>
            <p className={cn('font-semibold', currentLayout.text)}>
              {client.companyName || 'Klant'}
            </p>
            {client.contactPerson && (
              <p className={currentLayout.secondary}>t.a.v. {client.contactPerson}</p>
            )}
            {client.email && <p className={currentLayout.secondary}>{client.email}</p>}
            {client.address && (
              <p className={cn('whitespace-pre-line', currentLayout.secondary)}>{client.address}</p>
            )}
          </div>
        </div>

        <div className={cn('mb-6 overflow-hidden rounded-lg border', currentLayout.borderColor)}>
          <div
            className={cn(
              'grid grid-cols-12 gap-2 px-4 py-2 text-xs font-semibold',
              currentLayout.tableHeaderBg,
              currentLayout.muted
            )}
          >
            <span className="col-span-6">Omschrijving</span>
            <span className="col-span-2 text-right">Aantal</span>
            <span className="col-span-2 text-right">Prijs</span>
            <span className="col-span-2 text-right">Bedrag</span>
          </div>
          {(quote.items || []).map((item) => {
            const qty = parseFloat(item.quantity) || 0;
            const price = parseFloat(item.price) || 0;
            const lineTotal = qty * price;
            if (!item.description && lineTotal === 0) return null;
            return (
              <div
                key={item.id}
                className={cn(
                  'grid grid-cols-12 gap-2 border-t px-4 py-3 text-sm',
                  currentLayout.borderColor,
                  currentLayout.text
                )}
              >
                <span className="col-span-6">{item.description || '—'}</span>
                <span className="col-span-2 text-right">{qty}</span>
                <span className="col-span-2 text-right">{formatQuoteMoney(price)}</span>
                <span className="col-span-2 text-right font-medium">
                  {formatQuoteMoney(lineTotal)}
                </span>
              </div>
            );
          })}
        </div>

        <div className="ml-auto w-full max-w-xs space-y-1.5 text-sm">
          <div className={cn('flex justify-between', currentLayout.secondary)}>
            <span>Subtotaal</span>
            <span>{formatQuoteMoney(subtotal)}</span>
          </div>
          <div className={cn('flex justify-between', currentLayout.secondary)}>
            <span>BTW ({quote.taxRate}%)</span>
            <span>{formatQuoteMoney(taxAmount)}</span>
          </div>
          <div
            className={cn(
              'flex justify-between border-t pt-2 text-base font-bold',
              currentLayout.borderColor,
              currentLayout.primary
            )}
          >
            <span>Totaal</span>
            <span>{formatQuoteMoney(grandTotal)}</span>
          </div>
        </div>

        {quote.notes && <p className={cn('mt-6 text-sm', currentLayout.secondary)}>{quote.notes}</p>}

        {opts.showTerms && quote.terms && (
          <div className={cn('mt-4 rounded-lg p-4 text-xs', currentLayout.termsBg, currentLayout.secondary)}>
            <p className={cn('mb-1 font-semibold', currentLayout.text)}>Voorwaarden</p>
            <p className="whitespace-pre-line">{quote.terms}</p>
          </div>
        )}

        {opts.showPaymentTerms && (
          <p className={cn('mt-3 text-xs', currentLayout.muted)}>
            Betaling binnen 14 dagen na akkoord op deze offerte.
          </p>
        )}

        {opts.showSignature && (
          <div className={cn('mt-10 border-t pt-6', currentLayout.borderColor)}>
            <p className={cn('text-xs', currentLayout.muted)}>Akkoord klant:</p>
            <div className={cn('mt-8 h-10 border-b', currentLayout.borderColor)} />
            <p className={cn('mt-2 text-xs', currentLayout.muted)}>Datum en handtekening</p>
          </div>
        )}
      </div>
    </div>
  );
});

QuotePreview.displayName = 'QuotePreview';

export default QuotePreview;
