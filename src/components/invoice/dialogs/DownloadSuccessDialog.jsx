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

const NEXT_STEPS = [
  'Boekhouding',
  'Zakelijke rekening',
  'Facturen automatisch bewaren',
  'Betaalherinneringen',
];

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
          ) : (
            <div>
              <p className="text-sm font-semibold text-slate-900">Handige volgende stap</p>
              <p className="mt-1 text-sm text-slate-600">
                Veel ondernemers gebruiken na hun eerste factuur ook:
              </p>
              <ul className="mt-2 space-y-1">
                {NEXT_STEPS.map((step) => (
                  <li key={step} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="text-slate-400">•</span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {!isLoggedIn && <FeatureUpdatesSignup companyEmail={companyEmail} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}
