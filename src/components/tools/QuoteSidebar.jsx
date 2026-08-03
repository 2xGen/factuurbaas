'use client';

import React, { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2, Download, FileText, Info } from 'lucide-react';
import QuotePreviewDialog from '@/components/tools/QuotePreviewDialog';
import ShareFactuurBaas from '@/components/shared/ShareFactuurBaas';
import { useToast } from '@/components/ui/use-toast';
import { calculateQuoteBreakdown, exportQuotePdf, formatQuoteMoney } from '@/lib/quoteUtils';
import { saveQuoteToInvoicePrefill } from '@/lib/invoicePrefill';

export default function QuoteSidebar({ quote, previewRef }) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  const breakdown = calculateQuoteBreakdown(quote);

  const handleConfirmDownload = useCallback(async () => {
    setIsExporting(true);
    try {
      const ok = await exportQuotePdf(
        previewRef,
        `offerte-${quote.quoteNumber || 'factuurbaas'}.pdf`
      );
      if (ok) {
        setIsPreviewOpen(false);
        setShowShareDialog(true);
      }
    } catch {
      toast({
        title: 'Download mislukt',
        description: 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsExporting(false);
    }
  }, [previewRef, quote.quoteNumber, toast]);

  const handleConvertToInvoice = () => {
    saveQuoteToInvoicePrefill(quote);
    router.push('/create-invoice');
  };

  return (
    <>
      <div className="space-y-6 self-start rounded-xl border border-gray-200 bg-white p-6 shadow-xl lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
        <div>
          <h3 className="mb-3 flex items-center text-lg font-semibold text-deep-blue">
            <Info className="mr-2 h-5 w-5 text-blue-500" />
            Offerte Info
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotaal:</span>
              <span className="font-medium">{formatQuoteMoney(breakdown.subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span>BTW ({quote.taxRate}%):</span>
              <span className="font-medium">{formatQuoteMoney(breakdown.taxAmount)}</span>
            </div>
            <div className="flex justify-between border-t border-gray-100 pt-1 text-md font-semibold text-deep-blue">
              <span>Totaal:</span>
              <span>{formatQuoteMoney(breakdown.grandTotal)}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h3 className="mb-3 text-lg font-semibold text-deep-blue">Offerte Acties</h3>
          <div className="space-y-2">
            <Button
              className="h-12 w-full bg-deep-blue font-semibold text-white hover:bg-deep-blue/90"
              onClick={() => setIsPreviewOpen(true)}
            >
              <Download className="mr-2 h-4 w-4" />
              Offerte bekijken & downloaden
            </Button>
            <Button variant="outline" className="h-11 w-full" onClick={handleConvertToInvoice}>
              <FileText className="mr-2 h-4 w-4" />
              Maak factuur van deze offerte
            </Button>
          </div>
        </div>
      </div>

      <QuotePreviewDialog
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
        quote={quote}
        onConfirmDownload={handleConfirmDownload}
        previewRef={previewRef}
        isExporting={isExporting}
      />

      <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-7 w-7 shrink-0 text-green-600" />
              <DialogTitle className="text-lg text-deep-blue">Je offerte is gedownload</DialogTitle>
            </div>
          </DialogHeader>
          <ShareFactuurBaas className="border-0 pt-1" />
          <Button
            type="button"
            variant="outline"
            className="mt-2 w-full"
            onClick={() => setShowShareDialog(false)}
          >
            Sluiten
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
