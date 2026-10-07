'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { formatEuro } from '@/lib/dashboardCockpit';
import { calculateInvoiceTotal, parseDateSafe } from '@/lib/invoiceUtils';
import { getPeerPaymentStats, paymentDaysForInvoice } from '@/lib/paymentTerms';

function todayIsoDate() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function MarkPaidDialog({ invoice, invoices = [], isOpen, onClose, onConfirm }) {
  const [paidDate, setPaidDate] = useState(todayIsoDate());

  useEffect(() => {
    if (!isOpen) return;
    setPaidDate(todayIsoDate());
  }, [isOpen, invoice?.id]);

  const client =
    invoice?.receiverName ||
    invoice?.receiverDetails?.companyName ||
    invoice?.receiverDetails?.contactPerson ||
    'Deze klant';
  const amount = invoice
    ? Number(invoice.total_incl) || calculateInvoiceTotal(invoice)
    : 0;
  const invoiceNumber = invoice?.invoice_number || '';

  const daysThisInvoice = useMemo(
    () =>
      paymentDaysForInvoice({
        ...invoice,
        status: 'paid',
        paidDate,
      }),
    [invoice, paidDate]
  );

  const peerStats = useMemo(
    () => getPeerPaymentStats(invoices, invoice),
    [invoices, invoice]
  );

  const invoiceDay = parseDateSafe(invoice?.invoiceDate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!paidDate) return;
    onConfirm?.(paidDate);
  };

  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(next) => !next && onClose?.()}>
      <DialogContent className="max-w-md rounded-2xl">
        <DialogHeader>
          <DialogTitle className="font-heading text-xl text-deep-blue">
            Markeer als betaald
          </DialogTitle>
          <DialogDescription>
            {client}
            {invoiceNumber ? ` · factuur ${invoiceNumber}` : ''} · {formatEuro(amount)}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1.5">
            <Label htmlFor="paid-date">Betaald op</Label>
            <input
              id="paid-date"
              type="date"
              required
              value={paidDate}
              onChange={(e) => setPaidDate(e.target.value)}
              className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-sm outline-none focus:border-deep-blue/40 focus:ring-2 focus:ring-deep-blue/10"
            />
            <p className="text-xs text-slate-500">
              {daysThisInvoice === null
                ? 'Vul de dag in waarop het geld binnenkwam.'
                : daysThisInvoice === 1
                  ? '1 dag na de factuurdatum.'
                  : daysThisInvoice === 0
                    ? 'Betaald op de factuurdatum.'
                    : daysThisInvoice < 0
                      ? 'Deze datum ligt vóór de factuurdatum.'
                      : `${daysThisInvoice} dagen na de factuurdatum.`}
              {invoiceDay
                ? ` Factuur van ${format(invoiceDay, 'd MMMM yyyy', { locale: nl })}.`
                : ''}
            </p>
          </div>
          {peerStats ? (
            <p className="rounded-xl bg-slate-50 px-3.5 py-2.5 text-sm text-slate-600">
              {client} betaalt gemiddeld in {peerStats.averageDays}{' '}
              {peerStats.averageDays === 1 ? 'dag' : 'dagen'}
              {peerStats.count === 1
                ? ' (1 eerdere factuur).'
                : ` (${peerStats.count} eerdere facturen).`}
            </p>
          ) : (
            <p className="text-xs text-slate-400">
              Met deze datum houden we bij hoe snel deze klant gemiddeld betaalt.
            </p>
          )}
          <DialogFooter>
            <Button type="button" variant="outline" className="rounded-xl" onClick={onClose}>
              Annuleren
            </Button>
            <Button type="submit" className="rounded-xl bg-deep-blue hover:bg-deep-blue/90">
              Opslaan
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
