import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import InvoicePreview from "@/components/invoice/InvoicePreview";
import { Download } from 'lucide-react';

// Forwarding ref for InvoicePreview
const ForwardedInvoicePreview = React.forwardRef((props, ref) => (
  <InvoicePreview {...props} ref={ref} />
));


const PreviewDialog = ({ isOpen, onClose, invoice, invoiceBreakdown, onConfirmDownload, previewRef }) => {
  if (!invoice) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] flex flex-col p-0">
        <DialogHeader className="p-6 pb-2 border-b">
          <DialogTitle className="text-2xl text-deep-blue">Factuur Voorbeeld: {invoice.invoiceName || `Concept #${invoice.invoice_number || 'Nieuw'}`}</DialogTitle>
          <DialogDescription>
            Controleer hieronder het voorbeeld van je factuur. Je kunt het direct downloaden.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto p-2 md:p-6 bg-slate-100">
          <ForwardedInvoicePreview invoice={invoice} invoiceBreakdown={invoiceBreakdown} ref={previewRef} />
        </div>

        <DialogFooter className="p-6 border-t bg-slate-50">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Sluiten
          </Button>
          <Button onClick={onConfirmDownload} className="bg-warm-orange hover:bg-orange-600 text-white">
            <Download className="w-4 h-4 mr-2" /> Factuur Downloaden
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default PreviewDialog;