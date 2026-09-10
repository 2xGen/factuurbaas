'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import PrivacyConsentCheckbox from '@/components/auth/PrivacyConsentCheckbox';
import NewsletterOptInCheckbox from '@/components/auth/NewsletterOptInCheckbox';
import { markPrivacyConsentPending } from '@/lib/privacyConsent';
import { recordReferralVisitOnce, storeReferralCode } from '@/lib/referral';
import { supabase } from '@/lib/customSupabaseClient';
import { useToast } from '@/components/ui/use-toast';
import { ArrowLeft, Crown, Loader2 } from 'lucide-react';

function GoogleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const { user, loading, signInWithGoogle } = useAuth();
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);

  const next = searchParams.get('next') || '/dashboard';

  useEffect(() => {
    const ref = searchParams.get('ref');
    if (!ref) return;
    storeReferralCode(ref);
    void recordReferralVisitOnce(supabase, ref);
  }, [searchParams]);

  useEffect(() => {
    if (!loading && user) {
      router.replace(next.startsWith('/') ? next : '/dashboard');
    }
  }, [loading, user, router, next]);

  const handleGoogle = async () => {
    if (!privacyAccepted) {
      toast({
        title: 'Akkoord vereist',
        description: 'Bevestig het privacybeleid en de voorwaarden om door te gaan.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoggingIn(true);
    markPrivacyConsentPending({ newsletterOptIn });
    await signInWithGoogle(next.startsWith('/') ? next : '/dashboard');
    setIsLoggingIn(false);
  };

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center bg-light-gray px-4 py-12 sm:px-6 lg:px-8">
      <div className="absolute left-6 top-6">
        <Link href="/">
          <Button variant="ghost" className="text-deep-blue hover:bg-deep-blue/10">
            <ArrowLeft className="mr-2 h-5 w-5" /> Terug naar Home
          </Button>
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-6 rounded-2xl border border-gray-200 bg-white p-10 shadow-xl"
      >
        <div className="text-center">
          <Link href="/" className="mb-2 flex items-center justify-center font-heading text-3xl font-bold text-deep-blue">
            <Crown className="mr-2 h-8 w-8 text-warm-orange" />
            FactuurBaas.nl
          </Link>
          <h2 className="font-heading text-2xl text-gray-700">Inloggen of account maken</h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Sla facturen veilig op en bekijk openstaande bedragen in je dashboard. Gratis, met Google — zonder
            wachtwoord.
          </p>
        </div>

        <div className="space-y-3">
          <PrivacyConsentCheckbox
            checked={privacyAccepted}
            onCheckedChange={setPrivacyAccepted}
            disabled={isLoggingIn || loading}
          />
          <NewsletterOptInCheckbox
            checked={newsletterOptIn}
            onCheckedChange={setNewsletterOptIn}
            disabled={isLoggingIn || loading}
          />
        </div>

        <Button
          type="button"
          size="lg"
          variant="outline"
          className="h-12 w-full gap-3 border-slate-300 text-base font-semibold"
          onClick={handleGoogle}
          disabled={isLoggingIn || loading || !privacyAccepted}
        >
          {isLoggingIn ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <GoogleIcon className="h-5 w-5" />
          )}
          Doorgaan met Google
        </Button>
      </motion.div>
    </div>
  );
}
