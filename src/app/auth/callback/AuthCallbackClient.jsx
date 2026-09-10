'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { supabase } from '@/lib/customSupabaseClient';
import { consumeGuestInvoiceFlag } from '@/lib/guestInvoiceAttribution';
import {
  consumePrivacyConsentPending,
  persistPrivacyAcceptance,
  persistNewsletterOptIn,
} from '@/lib/privacyConsent';
import { applyReferralCode, consumeReferralCode, storeReferralCode } from '@/lib/referral';
import { requestWelcomeEmail } from '@/lib/requestWelcomeEmail';
import { Loader2 } from 'lucide-react';

function safeNextPath(next) {
  if (!next || typeof next !== 'string') return '/dashboard';
  if (!next.startsWith('/') || next.startsWith('//')) return '/dashboard';
  return next;
}

async function applyPrivacyConsentIfNeeded() {
  const pending = consumePrivacyConsentPending();
  if (!pending?.at) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) return;

  await persistPrivacyAcceptance(supabase, user.id, pending.at);
  await persistNewsletterOptIn(supabase, user.id, pending.newsletterOptIn);
}

async function applyGuestConversionIfNeeded() {
  const guestAt = consumeGuestInvoiceFlag();
  if (!guestAt) return;

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.id) return;

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, converted_from_guest')
    .eq('id', user.id)
    .maybeSingle();

  if (profile?.converted_from_guest) return;

  if (profile) {
    const { error } = await supabase
      .from('profiles')
      .update({ converted_from_guest: true, updated_at: new Date().toISOString() })
      .eq('id', user.id);
    if (error && !/converted_from_guest|schema cache|column/i.test(error.message || '')) {
      console.warn('converted_from_guest update failed:', error.message);
    }
    return;
  }

  const { error } = await supabase.from('profiles').insert({
    id: user.id,
    converted_from_guest: true,
    full_name: user.user_metadata?.full_name || user.user_metadata?.name || null,
  });
  if (error && !/converted_from_guest|schema cache|column/i.test(error.message || '')) {
    console.warn('converted_from_guest insert failed:', error.message);
  }
}

async function applyReferralIfNeeded() {
  const code = consumeReferralCode();
  if (!code) return;

  try {
    const result = await applyReferralCode(supabase, code);
    if (result?.ok === false && result?.reason === 'invalid') {
      // Keep nothing — invalid code
    }
  } catch (err) {
    // Re-store so signup can be attributed once the migration is live
    storeReferralCode(code);
    console.warn('referral apply failed:', err?.message || err);
  }
}

export default function AuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('Bezig met inloggen...');

  useEffect(() => {
    let cancelled = false;

    async function finish() {
      const next = safeNextPath(searchParams.get('next'));
      const code = searchParams.get('code');
      const errorDescription = searchParams.get('error_description');

      if (errorDescription) {
        setMessage(errorDescription);
        setTimeout(() => router.replace('/login'), 2500);
        return;
      }

      try {
        if (code) {
          const { error } = await supabase.auth.exchangeCodeForSession(code);
          if (error) throw error;
        } else {
          const { data, error } = await supabase.auth.getSession();
          if (error) throw error;
          if (!data.session) {
            throw new Error('Geen sessie ontvangen van Google.');
          }
        }

        await applyPrivacyConsentIfNeeded();
        await applyGuestConversionIfNeeded();
        await applyReferralIfNeeded();
        // One-time welcome mail (server skips if already sent)
        void requestWelcomeEmail(supabase);

        if (!cancelled) router.replace(next);
      } catch (err) {
        if (!cancelled) {
          setMessage(err.message || 'Inloggen mislukt.');
          setTimeout(() => router.replace('/login'), 2500);
        }
      }
    }

    finish();
    return () => {
      cancelled = true;
    };
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
      <p className="text-center text-slate-600">{message}</p>
    </div>
  );
}
