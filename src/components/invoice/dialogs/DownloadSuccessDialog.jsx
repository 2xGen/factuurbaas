import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { CheckCircle2 } from 'lucide-react';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';

const NEXT_STEPS = [
  'Boekhouding',
  'Zakelijke rekening',
  'Facturen automatisch bewaren',
  'Betaalherinneringen',
];

export default function DownloadSuccessDialog({ isOpen, onClose, companyEmail }) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="h-8 w-8 text-green-600 flex-shrink-0" />
            <DialogTitle className="text-xl text-deep-blue">Je factuur is gedownload</DialogTitle>
          </div>
        </DialogHeader>

        <div className="space-y-5 pt-2">
          <div>
            <p className="text-sm font-semibold text-slate-900">Handige volgende stap</p>
            <p className="text-sm text-slate-600 mt-1">
              Veel ondernemers gebruiken na hun eerste factuur ook:
            </p>
            <ul className="mt-2 space-y-1">
              {NEXT_STEPS.map((step) => (
                <li key={step} className="text-sm text-slate-700 flex items-center gap-2">
                  <span className="text-slate-400">•</span>
                  {step}
                </li>
              ))}
            </ul>
          </div>

          <FeatureUpdatesSignup companyEmail={companyEmail} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
