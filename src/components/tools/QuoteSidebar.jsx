'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2, Eye, FileText, Info, Loader2, Save } from 'lucide-react';
import QuotePreviewDialog from '@/components/tools/QuotePreviewDialog';
import ShareFactuurBaas from '@/components/shared/ShareFactuurBaas';
import { useToast } from '@/components/ui/use-toast';
import { calculateQuoteBreakdown, exportQuotePdf, formatQuoteMoney } from '@/lib/quoteUtils';
import { saveQuoteToInvoicePrefill } from '@/lib/invoicePrefill';
import { isPersistedQuoteId } from '@/lib/quotePersistence';

export default function QuoteSidebar({
  quote,
  previewRef,
  user = null,
  onSave = null,
  isSaving = false,
  onToggleBranding = null,
}) {
  const router = useRouter();
  const { toast } = useToast();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);

  const breakdown = calculateQuoteBreakdown(quote);
  const loggedIn = Boolean(user);
  const canConvert = quote.status !== 'converted';
  const brandingOn = quote.options?.showFactuurBaasBranding !== false;
  const showVatAmount =
    breakdown.taxAmount > 0 || (breakdown.taxLines || []).some((l) => l.rate > 0);

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
        if (loggedIn && onSave) {
          await onSave('Offerte gedownload');
        }
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
  }, [previewRef, quote.quoteNumber, toast, loggedIn, onSave]);

  const handleConvertToInvoice = async () => {
    if (!canConvert) {
      toast({
        title: 'Al omgezet',
        description: 'Deze offerte is al omgezet naar een factuur.',
      });
      return;
    }
    let quoteForPrefill = quote;
    if (loggedIn && onSave && !isPersistedQuoteId(quote.id)) {
      const saved = await onSave('Offerte opgeslagen voor omzetting');
      if (saved) quoteForPrefill = saved;
    }
    saveQuoteToInvoicePrefill(quoteForPrefill);
    router.push('/create-invoice');
  };

  const loginHref = `/login?next=${encodeURIComponent('/tools/offerte-maker/maken')}`;

  return (
    <>
      <div className="space-y-5 self-start rounded-xl border border-gray-200 bg-white p-5 shadow-xl lg:sticky lg:top-6 sm:p-6">
        <div>
          <h3 className="mb-3 flex items-center text-lg font-semibold text-deep-blue">
            <Info className="mr-2 h-5 w-5 text-blue-500" />
            Totaal
          </h3>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotaal:</span>
              <span className="font-medium">{formatQuoteMoney(breakdown.subtotal)}</span>
            </div>
            {showVatAmount ? (
              breakdown.taxLines?.length > 0 ? (
                breakdown.taxLines.map((line) => (
                  <div key={line.key} className="flex justify-between">
                    <span>BTW ({line.label}):</span>
                    <span className="font-medium">{formatQuoteMoney(line.amount)}</span>
                  </div>
                ))
              ) : (
                <div className="flex justify-between">
                  <span>BTW:</span>
                  <span className="font-medium">{formatQuoteMoney(breakdown.taxAmount)}</span>
                </div>
              )
            ) : (
              <p className="text-xs text-gray-500">Geen BTW op deze offerte</p>
            )}
            <div className="flex justify-between border-t border-gray-100 pt-2 text-base font-semibold text-deep-blue">
              <span>Totaal:</span>
              <span>{formatQuoteMoney(breakdown.grandTotal)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-3 border-t border-gray-200 pt-4">
          <Button
            className="h-12 w-full bg-warm-orange font-semibold text-white hover:bg-warm-orange/90"
            onClick={() => setIsPreviewOpen(true)}
            disabled={isSaving}
          >
            <Eye className="mr-2 h-4 w-4" />
            Bekijk PDF
          </Button>

          {loggedIn ? (
            onSave && (
              <Button
                className="h-11 w-full bg-deep-blue font-semibold text-white hover:bg-deep-blue/90"
                onClick={() => onSave('Offerte opgeslagen')}
                disabled={isSaving}
              >
                {isSaving ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Save className="mr-2 h-4 w-4" />
                )}
                Opslaan in mijn account
              </Button>
            )
          ) : (
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-3 text-xs leading-relaxed text-slate-600">
              <p className="font-semibold text-deep-blue">Gratis account — handig voor:</p>
              <ul className="mt-1.5 list-disc space-y-0.5 pl-4">
                <li>Offertes later terugvinden</li>
                <li>Omzetten naar factuur</li>
                <li>FactuurBaas-vermelding uitzetten</li>
              </ul>
              <Link
                href={loginHref}
                className="mt-2 inline-block font-medium text-warm-orange hover:underline"
              >
                Log in om op te slaan →
              </Link>
            </div>
          )}

          <Button
            variant="outline"
            className="h-11 w-full"
            onClick={handleConvertToInvoice}
            disabled={!canConvert || isSaving}
          >
            <FileText className="mr-2 h-4 w-4" />
            Maak factuur van deze offerte
          </Button>

          {loggedIn && brandingOn && (
            <div className="rounded-lg border border-slate-100 bg-slate-50 px-3 py-2.5 text-xs leading-relaxed text-slate-600">
              Deze offerte bevat een kleine FactuurBaas-vermelding.
              {onToggleBranding && (
                <button
                  type="button"
                  className="mt-1 block font-medium text-warm-orange hover:underline"
                  onClick={() => onToggleBranding(false)}
                >
                  Vermelding uitzetten
                </button>
              )}
            </div>
          )}

          {loggedIn && !brandingOn && onToggleBranding && (
            <label className="flex cursor-pointer items-start gap-2 text-xs text-slate-600">
              <input
                type="checkbox"
                checked={false}
                onChange={() => onToggleBranding(true)}
                className="mt-0.5 h-3.5 w-3.5 rounded border-gray-300"
              />
              FactuurBaas-vermelding weer tonen
            </label>
          )}
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
