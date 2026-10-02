'use client';

import React from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import RowActionsMenu from '@/components/shared/RowActionsMenu';
import { QUOTE_STATUS_LABELS } from '@/lib/quotePersistence';
import { formatQuoteMoney } from '@/lib/quoteUtils';

const STATUS_STYLES = {
  concept: 'bg-slate-100 text-slate-700',
  sent: 'bg-blue-50 text-blue-700',
  accepted: 'bg-emerald-50 text-emerald-700',
  rejected: 'bg-rose-50 text-rose-700',
  converted: 'bg-orange-50 text-orange-800',
};

function formatDay(value) {
  if (!value) return '—';
  try {
    return format(value instanceof Date ? value : new Date(value), 'd MMM yyyy', { locale: nl });
  } catch {
    return '—';
  }
}

export default function QuoteTable({
  quotes,
  onEdit,
  onDuplicate,
  onSetStatus,
  onConvert,
  onOpenInvoice,
  onDelete,
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50/80">
            <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-3 py-3">Nummer</th>
              <th className="px-3 py-3">Klant</th>
              <th className="px-3 py-3">Datum</th>
              <th className="px-3 py-3">Geldig tot</th>
              <th className="px-3 py-3">Bedrag</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3 text-right">Acties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {quotes.map((quote) => {
              const status = quote.status || 'concept';
              const client =
                quote.clientDetails?.companyName ||
                quote.clientName ||
                quote.clientDetails?.contactPerson ||
                '—';

              const actions = [
                { id: 'edit', label: 'Bewerken', onSelect: () => onEdit(quote.id) },
                { id: 'duplicate', label: 'Dupliceren', onSelect: () => onDuplicate(quote.id) },
                status !== 'converted' && {
                  id: 'convert',
                  label: 'Omzetten naar factuur',
                  onSelect: () => onConvert(quote),
                },
                status === 'converted' &&
                  quote.convertedInvoiceId && {
                    id: 'open-invoice',
                    label: 'Open factuur',
                    onSelect: () => onOpenInvoice(quote.convertedInvoiceId),
                  },
                status !== 'converted' && {
                  id: 'status-concept',
                  label: 'Status: Concept',
                  onSelect: () => onSetStatus(quote, 'concept'),
                },
                status !== 'converted' && {
                  id: 'status-sent',
                  label: 'Status: Verstuurd',
                  onSelect: () => onSetStatus(quote, 'sent'),
                },
                status !== 'converted' && {
                  id: 'status-accepted',
                  label: 'Status: Geaccepteerd',
                  onSelect: () => onSetStatus(quote, 'accepted'),
                },
                status !== 'converted' && {
                  id: 'status-rejected',
                  label: 'Status: Afgewezen',
                  onSelect: () => onSetStatus(quote, 'rejected'),
                },
                {
                  id: 'delete',
                  label: 'Verwijderen',
                  destructive: true,
                  onSelect: () => onDelete(quote),
                },
              ].filter(Boolean);

              return (
                <tr key={quote.id} className="hover:bg-slate-50/80">
                  <td className="px-3 py-3 font-medium text-deep-blue">
                    <button type="button" className="hover:underline" onClick={() => onEdit(quote.id)}>
                      {quote.quoteNumber || String(quote.id).slice(0, 8)}
                    </button>
                  </td>
                  <td className="px-3 py-3 text-slate-700">{client}</td>
                  <td className="px-3 py-3 text-slate-600">{formatDay(quote.quoteDate)}</td>
                  <td className="px-3 py-3 text-slate-600">{formatDay(quote.validUntil)}</td>
                  <td className="px-3 py-3 font-medium text-slate-800">
                    {formatQuoteMoney(Number(quote.total_incl) || 0)}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                        STATUS_STYLES[status] || STATUS_STYLES.concept
                      }`}
                    >
                      {QUOTE_STATUS_LABELS[status] || status}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-right">
                    <RowActionsMenu items={actions} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
