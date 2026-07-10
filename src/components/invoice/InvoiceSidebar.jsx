import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Info } from 'lucide-react';
import PreviewDialog from '@/components/invoice/dialogs/PreviewDialog';
import DownloadSuccessDialog from '@/components/invoice/dialogs/DownloadSuccessDialog';
import { usePdfExport } from '@/hooks/usePdfExport';
import { useToast } from '@/components/ui/use-toast';
import { calculateInvoiceBreakdown } from '@/lib/invoiceUtils';
import { formatMoney, getTaxDisplayLabel, INVOICE_LABELS } from '@/lib/invoiceConfig';

const InvoiceSidebar = ({ invoice, previewRef }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
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
    if (success) {
      setIsPreviewOpen(false);
      setIsSuccessOpen(true);
    }
  };

  if (!invoice) return null;

  const showVatAmount = !['exempt', 'reverse'].includes(invoice.tax);

  return (
    <div className="lg:sticky lg:top-6 p-6 bg-white rounded-xl shadow-xl border border-gray-200 space-y-6 self-start">
      <div>
        <h3 className="text-lg font-semibold text-deep-blue mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2 text-blue-500" />
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
          <div className="flex justify-between text-md font-semibold text-deep-blue pt-1 border-t border-gray-100">
            <span>{labels.total}:</span>
            <span>{fmt(invoiceBreakdown.grandTotal)}</span>
          </div>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
        <h3 className="text-lg font-semibold text-deep-blue mb-3">Factuur Acties</h3>
        <Button
          className="w-full bg-deep-blue hover:bg-deep-blue/90 text-white font-semibold h-12"
          onClick={() => setIsPreviewOpen(true)}
        >
          <Download className="w-4 h-4 mr-2" />
          Factuur Bekijken & Downloaden
        </Button>
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
      />
    </div>
  );
};

export default InvoiceSidebar;
