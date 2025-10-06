import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Eye, Settings, Info } from 'lucide-react';
import PreviewDialog from '@/components/invoice/dialogs/PreviewDialog';
import { usePdfExport } from '@/hooks/usePdfExport';
import { useToast } from '@/components/ui/use-toast';
import { calculateInvoiceBreakdown } from '@/lib/invoiceUtils';

const InvoiceSidebar = ({ invoice, onSelectLayout, previewRef }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const { toast } = useToast();
  const { exportToPdf } = usePdfExport(previewRef, toast);

  const invoiceBreakdown = calculateInvoiceBreakdown(invoice);

  const handleOpenPreviewAndPrepareDownload = () => {
    setIsPreviewOpen(true);
  };
  
  const handleConfirmDownload = () => {
    if (previewRef && previewRef.current) {
        exportToPdf(invoice, invoiceBreakdown, `Factuur-${invoice.invoice_number || 'concept'}.pdf`);
    } else {
        toast({
            title: "Download Fout",
            description: "Kan PDF niet downloaden. Voorbeeld is nog niet geladen.",
            variant: "destructive",
        });
    }
  };

  if (!invoice) return null;

  return (
    // Added min-h-[calc(100vh-theme(spacing.24))] to ensure the column can be tall enough for sticky to work
    // The top-24 value should match header height + some spacing if there's a fixed header
    <div className="lg:sticky lg:top-6 p-6 bg-white rounded-xl shadow-xl border border-gray-200 space-y-6 self-start">
      <div>
        <h3 className="text-lg font-semibold text-deep-blue mb-3 flex items-center">
          <Settings className="w-5 h-5 mr-2 text-warm-orange" />
          Factuur Acties
        </h3>
        <div className="space-y-3">
          <Button 
            variant="outline" 
            className="w-full justify-start text-gray-700 hover:bg-gray-100"
            onClick={handleOpenPreviewAndPrepareDownload}
          >
            <Eye className="w-4 h-4 mr-2" /> Factuur Bekijken & Downloaden
          </Button>
        </div>
      </div>

      <div className="pt-4 border-t border-gray-200">
         <h3 className="text-lg font-semibold text-deep-blue mb-3 flex items-center">
          <Info className="w-5 h-5 mr-2 text-blue-500" />
          Factuur Info
        </h3>
        <div className="space-y-2 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>Subtotaal:</span>
            <span className="font-medium">€{invoiceBreakdown.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span>BTW ({invoice.tax}%):</span>
            <span className="font-medium">€{invoiceBreakdown.taxAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-md font-semibold text-deep-blue pt-1 border-t border-gray-100">
            <span>Totaal:</span>
            <span>€{invoiceBreakdown.grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <PreviewDialog 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        invoice={invoice} 
        invoiceBreakdown={invoiceBreakdown}
        onConfirmDownload={handleConfirmDownload}
        previewRef={previewRef} 
      />
    </div>
  );
};

export default InvoiceSidebar;