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

const CALLBACK_TIMEOUT_MS = 15_000;

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
    storeReferralCode(code);
    console.warn('referral apply failed:', err?.message || err);
  }
}

/**
 * Wait for the session created by GoTrue's PKCE auto-exchange on initialize.
 * Do NOT call exchangeCodeForSession here — gotrue-js 2.43 still auto-exchanges
 * PKCE when ?code= + code-verifier exist, even with detectSessionInUrl: false.
 * A second exchange causes "invalid flow state" 404s and can wipe the session.
 */
async function waitForOAuthSession(timeoutMs) {
  await supabase.auth.initialize();

  const {
    data: { session: existing },
  } = await supabase.auth.getSession();
  if (existing) return existing;

  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = (session, error) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      subscription.unsubscribe();
      if (error) reject(error);
      else resolve(session);
    };

    const timer = setTimeout(() => {
      finish(null, new Error('Inloggen duurt te lang. Probeer het opnieuw.'));
    }, timeoutMs);

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) finish(session);
    });

    // Cover the case where SIGNED_IN fired before we subscribed.
    void supabase.auth.getSession().then(({ data }) => {
      if (data?.session) finish(data.session);
    });
  });
}

export default function AuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('Bezig met inloggen...');

  useEffect(() => {
    let cancelled = false;
    const next = safeNextPath(searchParams.get('next'));
    const errorDescription = searchParams.get('error_description');

    const fail = (msg) => {
      if (cancelled) return;
      setMessage(msg);
      setTimeout(() => router.replace('/login'), 2500);
    };

    if (errorDescription) {
      fail(errorDescription);
      return;
    }

    const timeoutId = setTimeout(() => {
      fail('Inloggen duurt te lang. Probeer het opnieuw.');
    }, CALLBACK_TIMEOUT_MS);

    (async () => {
      try {
        await waitForOAuthSession(CALLBACK_TIMEOUT_MS - 500);
        if (cancelled) return;

        await applyPrivacyConsentIfNeeded();
        await applyGuestConversionIfNeeded();
        await applyReferralIfNeeded();
        void requestWelcomeEmail(supabase);

        if (!cancelled) {
          clearTimeout(timeoutId);
          router.replace(next);
        }
      } catch (err) {
        clearTimeout(timeoutId);
        fail(err?.message || 'Inloggen mislukt.');
      }
    })();

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4">
      <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
      <p className="text-center text-slate-600">{message}</p>
    </div>
  );
}
