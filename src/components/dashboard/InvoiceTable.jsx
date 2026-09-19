'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import RowActionsMenu from '@/components/shared/RowActionsMenu';

function formatShort(date) {
  return date ? format(date, 'd MMM yyyy', { locale: nl }) : '—';
}

const InvoiceTable = ({
  invoices,
  getStatusInfo,
  parseDateSafe,
  calculateInvoiceTotal,
  onEdit,
  onDuplicate,
  onTogglePaid,
  onSendReminder,
  onOpenActivityLog,
  onDelete,
  searchTerm,
}) => {
  if (invoices.length === 0) {
    return (
      <div className="rounded-lg bg-white py-12 text-center shadow-md">
        <FileText className="mx-auto mb-4 h-16 w-16 text-gray-400" />
        <h2 className="mb-2 text-xl font-medium text-gray-700">Geen facturen gevonden</h2>
        <p className="text-gray-500">
          {searchTerm
            ? 'Probeer een andere zoekterm.'
            : 'Maak je eerste factuur aan om hier te verschijnen.'}
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[720px] text-sm">
          <thead className="border-b border-slate-200 bg-slate-50/80">
            <tr className="text-left text-[11px] font-semibold uppercase tracking-wide text-slate-500">
              <th className="px-3 py-3">Nr.</th>
              <th className="px-3 py-3">Klant</th>
              <th className="px-3 py-3">Datum</th>
              <th className="px-3 py-3">Verval</th>
              <th className="px-3 py-3">Dagen</th>
              <th className="px-3 py-3">Bedrag</th>
              <th className="px-3 py-3">Status</th>
              <th className="px-3 py-3 text-right">Acties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {invoices.map((invoice) => {
              const statusInfo = getStatusInfo(invoice);
              const totalAmount = calculateInvoiceTotal(invoice);
              const invoiceDateParsed = parseDateSafe(invoice.invoiceDate);
              const dueDateParsed = parseDateSafe(invoice.dueDate);
              const client =
                invoice.receiverName ||
                invoice.receiverDetails?.companyName ||
                invoice.invoiceName ||
                '—';
              const isPaid = invoice.status === 'paid';

              const actions = [
                { id: 'edit', label: 'Bewerken', onSelect: () => onEdit(invoice.id) },
                {
                  id: 'duplicate',
                  label: 'Opnieuw factureren',
                  onSelect: () => onDuplicate?.(invoice.id),
                },
                {
                  id: 'paid',
                  label: isPaid ? 'Markeer als onbetaald' : 'Markeer als betaald',
                  onSelect: () => onTogglePaid(invoice.id),
                },
                !isPaid && {
                  id: 'reminder',
                  label: 'Herinnering sturen',
                  onSelect: () => onSendReminder(invoice),
                },
                {
                  id: 'log',
                  label: 'Activiteitenlog',
                  onSelect: () => onOpenActivityLog(invoice),
                },
                {
                  id: 'delete',
                  label: 'Verwijderen',
                  destructive: true,
                  onSelect: () => onDelete(invoice),
                },
              ];

              return (
                <motion.tr
                  key={invoice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="transition-colors hover:bg-slate-50/80"
                >
                  <td className="whitespace-nowrap px-3 py-3 font-medium text-deep-blue">
                    #{invoice.invoice_number || String(invoice.id).slice(0, 8)}
                  </td>
                  <td className="max-w-[12rem] truncate px-3 py-3 text-slate-800" title={client}>
                    {client}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                    {formatShort(invoiceDateParsed)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 text-slate-500">
                    {formatShort(dueDateParsed)}
                  </td>
                  <td
                    className={`whitespace-nowrap px-3 py-3 ${
                      statusInfo.days !== null && statusInfo.days < 0
                        ? 'font-semibold text-red-600'
                        : 'text-slate-500'
                    }`}
                  >
                    {statusInfo.days !== null
                      ? statusInfo.days < 0
                        ? `-${Math.abs(statusInfo.days)}d`
                        : `${statusInfo.days}d`
                      : '—'}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3 font-medium text-slate-900">
                    €{Number.isFinite(totalAmount) ? totalAmount.toFixed(2) : '0.00'}
                  </td>
                  <td className="px-3 py-3">
                    <span
                      className={`inline-flex rounded-full px-2 py-0.5 text-[11px] font-semibold text-white ${statusInfo.color}`}
                    >
                      {statusInfo.text}
                    </span>
                  </td>
                  <td className="px-3 py-2 text-right">
                    <RowActionsMenu items={actions} />
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;
