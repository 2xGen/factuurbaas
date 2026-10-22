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

function BookkeeperNudge({ onClose }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
      <p className="text-sm font-semibold text-slate-900">Ook hulp nodig met je boekhouding?</p>
      <p className="mt-1 text-sm leading-relaxed text-slate-600">
        Een boekhouder kan je helpen met je administratie, btw-aangifte en belastingzaken. Ontdek
        vrijblijvend de mogelijkheden.
      </p>
      <Button asChild variant="outline" className="mt-3 w-full border-deep-blue/20 font-semibold text-deep-blue">
        <Link href="/boekhouder-vinden" onClick={onClose}>
          Vind gratis een boekhouder
        </Link>
      </Button>
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
      <DialogContent className="flex max-h-[90vh] max-w-md flex-col gap-4 overflow-hidden">
        <DialogHeader className="shrink-0 pr-6">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 flex-shrink-0 text-green-600" />
            <DialogTitle className="text-xl text-deep-blue">Je factuur is aangemaakt!</DialogTitle>
          </div>
        </DialogHeader>

        <div className="min-h-0 flex-1 space-y-5 overflow-y-auto overscroll-contain pr-1">
          <p className="text-sm leading-relaxed text-slate-600">
            {wasSavedToAccount
              ? 'Je factuur is gedownload als PDF en staat in je account.'
              : 'Je factuur is gedownload als PDF.'}
            {wasSavedToAccount ? (
              <>
                {' '}
                <Link href="/dashboard" onClick={onClose} className="inline-flex items-center font-semibold text-deep-blue hover:underline">
                  <LayoutDashboard className="mr-1 h-3.5 w-3.5" />
                  Naar dashboard
                </Link>
              </>
            ) : isLoggedIn ? (
              <>
                {' '}
                Klik op <strong>Opslaan in mijn account</strong> zodat hij in je dashboard verschijnt.
              </>
            ) : (
              ' Sla hem op in je account als je hem later terug wilt vinden.'
            )}
          </p>

          <BookkeeperNudge onClose={onClose} />

          {!isLoggedIn && <FeatureUpdatesSignup companyEmail={companyEmail} />}

          <ShareFactuurBaas />
        </div>
      </DialogContent>
    </Dialog>
  );
}
