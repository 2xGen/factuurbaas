'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import PrivacyConsentCheckbox from '@/components/auth/PrivacyConsentCheckbox';
import NewsletterOptInCheckbox from '@/components/auth/NewsletterOptInCheckbox';
import { markPrivacyConsentPending } from '@/lib/privacyConsent';
import { useToast } from '@/components/ui/use-toast';
import { AlertTriangle } from 'lucide-react';

const AuthModal = ({ isOpen, onClose, actionText = 'je factuur op te slaan', onGoogleLogin }) => {
  const { toast } = useToast();
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const handleGoogle = () => {
    if (!privacyAccepted) {
      toast({
        title: 'Akkoord vereist',
        description: 'Bevestig het privacybeleid en de voorwaarden om door te gaan.',
        variant: 'destructive',
      });
      return;
    }
    markPrivacyConsentPending({ newsletterOptIn });
    onGoogleLogin?.();
  };

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          setPrivacyAccepted(false);
          setNewsletterOptIn(false);
          onClose();
        }
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center text-xl font-semibold text-deep-blue">
            <AlertTriangle className="mr-2 h-6 w-6 text-yellow-500" /> Inloggen vereist
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-600">
            Je moet ingelogd zijn om {actionText}. Log in met Google — gratis en zonder wachtwoord. Zonder
            account kun je nog steeds een PDF downloaden.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 space-y-3">
          <PrivacyConsentCheckbox
            id="auth-modal-privacy"
            checked={privacyAccepted}
            onCheckedChange={setPrivacyAccepted}
          />
          <NewsletterOptInCheckbox
            id="auth-modal-newsletter"
            checked={newsletterOptIn}
            onCheckedChange={setNewsletterOptIn}
          />
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          <Button variant="outline" onClick={onClose}>
            Annuleren
          </Button>
          {onGoogleLogin ? (
            <Button
              className="bg-deep-blue hover:bg-deep-blue/90"
              onClick={handleGoogle}
              disabled={!privacyAccepted}
            >
              Doorgaan met Google
            </Button>
          ) : (
            <Button
              asChild
              className="bg-deep-blue hover:bg-deep-blue/90"
              disabled={!privacyAccepted}
            >
              <Link
                href="/login?next=/create-invoice"
                onClick={(e) => {
                  if (!privacyAccepted) {
                    e.preventDefault();
                    return;
                  }
                  markPrivacyConsentPending({ newsletterOptIn });
                  onClose();
                }}
              >
                Doorgaan met Google
              </Link>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
