import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { downloadUblInvoice, getUblInvoiceWarnings } from '@/lib/ublInvoice';

export default function UblDownloadAction({ invoice, compact = false, className }) {
  if (!invoice) return null;
  const warnings = getUblInvoiceWarnings(invoice);

  if (compact) {
    return (
      <Button
        type="button"
        variant="outline"
        size="sm"
        className={cn('border-deep-blue/30 font-semibold text-deep-blue hover:bg-deep-blue/5', className)}
        onClick={() => downloadUblInvoice(invoice)}
      >
        <Download className="mr-2 h-4 w-4" />
        Download UBL (XML)
      </Button>
    );
  }

  return (
    <div>
      <Button
        type="button"
        variant="outline"
        className="h-11 w-full border-deep-blue/30 font-semibold text-deep-blue hover:bg-deep-blue/5"
        onClick={() => downloadUblInvoice(invoice)}
      >
        <Download className="mr-2 h-4 w-4" />
        Download UBL (XML)
      </Button>
      <p className="mt-2 text-xs leading-relaxed text-slate-500">
        Voor elektronische verwerking in geschikte boekhoudsoftware. Geen Peppol-verzending.
      </p>
      {warnings.map((warning) => (
        <p key={warning} className="mt-1 text-xs leading-relaxed text-amber-800">
          {warning}
        </p>
      ))}
    </div>
  );
}
