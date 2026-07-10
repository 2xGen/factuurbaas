import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import QuotePreview from '@/components/tools/QuotePreview';
import { Download } from 'lucide-react';

const ForwardedQuotePreview = React.forwardRef((props, ref) => (
  <QuotePreview {...props} ref={ref} />
));
ForwardedQuotePreview.displayName = 'ForwardedQuotePreview';

export default function QuotePreviewDialog({
  isOpen,
  onClose,
  quote,
  onConfirmDownload,
  previewRef,
  isExporting,
}) {
  if (!quote) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex h-[90vh] max-w-4xl w-[95vw] flex-col p-0">
        <DialogHeader className="border-b p-6 pb-2">
          <DialogTitle className="text-2xl text-deep-blue">
            Offerte: {quote.quoteNumber || 'Concept'}
          </DialogTitle>
          <DialogDescription>
            Controleer je offerte en download direct als PDF.
          </DialogDescription>
        </DialogHeader>

        <div className="flex-grow overflow-y-auto bg-slate-100 p-2 md:p-6">
          <ForwardedQuotePreview quote={quote} ref={previewRef} />
        </div>

        <DialogFooter className="border-t bg-slate-50 p-6">
          <Button variant="outline" onClick={onClose} className="mr-2">
            Sluiten
          </Button>
          <Button
            onClick={onConfirmDownload}
            disabled={isExporting}
            className="bg-warm-orange text-white hover:bg-orange-600"
          >
            <Download className="mr-2 h-4 w-4" />
            {isExporting ? 'Bezig...' : 'Offerte downloaden'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
