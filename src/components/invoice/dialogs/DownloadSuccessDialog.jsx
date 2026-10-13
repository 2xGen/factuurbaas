import React from 'react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2, LayoutDashboard } from 'lucide-react';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';
import ShareFactuurBaas from '@/components/shared/ShareFactuurBaas';

function BoekhoudCompareNudge({ onClose }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">Meer dan alleen facturen maken?</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        Wil je ook je uitgaven, btw en administratie bijhouden? Vergelijk boekhoudprogramma&apos;s
        voor zzp&apos;ers en ontdek welk pakket bij je past.
      </p>
      <Link
        href="/boekhoudprogramma-vergelijken"
        onClick={onClose}
        className="mt-3 inline-flex text-sm font-semibold text-warm-orange hover:underline"
      >
        Vergelijk boekhoudprogramma&apos;s
      </Link>
    </div>
  );
}

export default function DownloadSuccessDialog({
  isOpen,
  onClose,
  companyEmail,
  isLoggedIn = false,
  wasSavedToAccount = false,
}) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-green-600" />
            <DialogTitle className="text-xl text-deep-blue">
              {wasSavedToAccount ? 'Gedownload én opgeslagen' : 'Je factuur is gedownload'}
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          {wasSavedToAccount ? (
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-700">
                Je factuur staat in je dashboard — openstaand bedrag, btw en status bijhouden.
              </p>
              <Button asChild className="mt-3 w-full rounded-xl bg-deep-blue font-semibold">
                <Link href="/dashboard" onClick={onClose}>
                  <LayoutDashboard className="mr-2 h-4 w-4" />
                  Naar dashboard
                </Link>
              </Button>
            </div>
          ) : isLoggedIn ? (
            <p className="text-sm text-slate-600">
              Tip: klik op <strong>Factuur opslaan</strong> zodat hij in je dashboard verschijnt.
            </p>
          ) : null}

          <BoekhoudCompareNudge onClose={onClose} />

          {!isLoggedIn && <FeatureUpdatesSignup companyEmail={companyEmail} />}

          <ShareFactuurBaas />
        </div>
      </DialogContent>
    </Dialog>
  );
}
