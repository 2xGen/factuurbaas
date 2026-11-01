import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import UblDownloadAction from '@/components/invoice/UblDownloadAction';
import { getUblInvoiceWarnings } from '@/lib/ublInvoice';
import { Download } from 'lucide-react';

// Forwarding ref for InvoicePreview
const ForwardedInvoicePreview = React.forwardRef((props, ref) => (
  <InvoicePreview {...props} ref={ref} />
));


const PreviewDialog = ({ isOpen, onClose, invoice, invoiceBreakdown, onConfirmDownload, previewRef }) => {
  if (!invoice) return null;
  const warnings = getUblInvoiceWarnings(invoice);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex h-[90vh] w-[95vw] max-w-4xl flex-col gap-0 overflow-hidden p-0">
        <DialogHeader className="shrink-0 border-b px-4 py-3 pr-12">
          <DialogTitle className="text-lg text-deep-blue">Factuur Voorbeeld: {invoice.invoiceName || `Concept #${invoice.invoice_number || 'Nieuw'}`}</DialogTitle>
        </DialogHeader>

        <div className="min-h-0 flex-1 overflow-y-auto bg-slate-100 p-2 md:p-6">
          <ForwardedInvoicePreview invoice={invoice} invoiceBreakdown={invoiceBreakdown} ref={previewRef} />
        </div>

        <div className="shrink-0 border-t bg-slate-50 px-4 py-3">
          <div className="flex flex-wrap items-start gap-3">
            <div className="w-60 max-w-full">
              <Button onClick={onConfirmDownload} size="sm" className="w-full bg-warm-orange font-semibold text-white hover:bg-orange-600">
                <Download className="mr-2 h-4 w-4" /> Opslaan als PDF
              </Button>
              <p className="mt-1.5 text-xs leading-snug text-slate-500">Om te mailen, printen of bewaren.</p>
            </div>
            <div className="w-80 max-w-full">
              <UblDownloadAction invoice={invoice} compact className="w-full" />
              <p className="mt-1.5 text-xs leading-snug text-slate-500">
                Voor elektronische verwerking in geschikte boekhoudsoftware. Geen Peppol-verzending.
              </p>
              {warnings.map((warning) => (
                <p key={warning} className="mt-1 text-xs leading-snug text-amber-800">
                  {warning}
                </p>
              ))}
            </div>
            <Button variant="ghost" size="sm" onClick={onClose} className="ml-auto">
              Sluiten
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;