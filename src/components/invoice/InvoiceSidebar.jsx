import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download, Info, Save, Loader2 } from 'lucide-react';
import PreviewDialog from '@/components/invoice/dialogs/PreviewDialog';
import DownloadSuccessDialog from '@/components/invoice/dialogs/DownloadSuccessDialog';
import { usePdfExport } from '@/hooks/usePdfExport';
import { useToast } from '@/components/ui/use-toast';
import { calculateInvoiceBreakdown } from '@/lib/invoiceUtils';
import { formatMoney, getTaxDisplayLabel, INVOICE_LABELS } from '@/lib/invoiceConfig';

const InvoiceSidebar = ({ invoice, previewRef, onSave, isSaving, isLoggedIn }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [wasSavedToAccount, setWasSavedToAccount] = useState(false);
  const { toast } = useToast();
  const { exportToPdf } = usePdfExport(previewRef, toast);

  const invoiceBreakdown = calculateInvoiceBreakdown(invoice);
  const currency = invoice?.currency || 'EUR';
  const labels = INVOICE_LABELS[invoice?.pdfLanguage || 'nl'] || INVOICE_LABELS.nl;
  const fmt = (amount) => formatMoney(amount, currency);

  const handleConfirmDownload = async () => {
    const success = await exportToPdf(
      invoice,
      invoiceBreakdown,
      `Factuur-${invoice.invoice_number || 'concept'}.pdf`
    );
    if (!success) return;

    let accountSaved = false;
    if (isLoggedIn && onSave) {
      accountSaved = Boolean(await onSave());
    }

    setWasSavedToAccount(accountSaved);
    setIsPreviewOpen(false);
    setIsSuccessOpen(true);
  };

  if (!invoice) return null;

  const showVatAmount = !['exempt', 'reverse'].includes(invoice.tax);

  return (
    <div className="lg:sticky lg:top-6 space-y-6 self-start rounded-xl border border-gray-200 bg-white p-6 shadow-xl">
      <div>
        <h3 className="mb-3 flex items-center text-lg font-semibold text-deep-blue">
          <Info className="mr-2 h-5 w-5 text-blue-500" />
          Factuur Info
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>{labels.subtotal}:</span>
            <span className="font-medium">{fmt(invoiceBreakdown.subtotal)}</span>
          </div>
          {showVatAmount ? (
            <div className="flex justify-between">
              <span>{getTaxDisplayLabel(invoice, labels)}:</span>
              <span className="font-medium">{fmt(invoiceBreakdown.taxAmount)}</span>
            </div>
          ) : (
            <p className="text-xs text-gray-500">{getTaxDisplayLabel(invoice, labels)}</p>
          )}
          <div className="flex justify-between border-t border-gray-100 pt-1 text-md font-semibold text-deep-blue">
            <span>{labels.total}:</span>
            <span>{fmt(invoiceBreakdown.grandTotal)}</span>
          </div>
        </div>
      </div>

      <div className="space-y-3 border-t border-gray-200 pt-4">
        <h3 className="mb-1 text-lg font-semibold text-deep-blue">Factuur Acties</h3>

        {onSave && (
          <Button
            className="h-12 w-full bg-deep-blue font-semibold text-white hover:bg-deep-blue/90"
            onClick={onSave}
            disabled={isSaving}
          >
            {isSaving ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Save className="mr-2 h-4 w-4" />
            )}
            {isLoggedIn ? 'Factuur opslaan' : 'Opslaan (inloggen)'}
          </Button>
        )}

        <Button
          variant="outline"
          className="h-12 w-full border-deep-blue/20 font-semibold text-deep-blue hover:bg-slate-50"
          onClick={() => setIsPreviewOpen(true)}
          disabled={isSaving}
        >
          <Download className="mr-2 h-4 w-4" />
          Bekijken & downloaden
        </Button>

        {isLoggedIn ? (
          <p className="text-center text-xs text-slate-500">
            Bij downloaden slaan we de factuur ook op in je{' '}
            <Link href="/dashboard" className="text-warm-orange hover:underline">
              dashboard
            </Link>
            .
          </p>
        ) : (
          <p className="text-center text-xs text-slate-500">
            Log in om facturen te bewaren in je dashboard.
          </p>
        )}
      </div>

      <PreviewDialog
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        invoice={invoice}
        invoiceBreakdown={invoiceBreakdown}
        onConfirmDownload={handleConfirmDownload}
        previewRef={previewRef}
      />

      <DownloadSuccessDialog
        isOpen={isSuccessOpen}
        onClose={() => setIsSuccessOpen(false)}
        companyEmail={invoice.companyDetails?.email}
        isLoggedIn={isLoggedIn}
        wasSavedToAccount={wasSavedToAccount}
      />
    </div>
  );
};

export default InvoiceSidebar;
