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
/** Survives React Strict Mode remounts so a PKCE code is only exchanged once. */
const inFlightExchanges = new Map();

function safeNextPath(next) {
  if (!next || typeof next !== 'string') return '/dashboard';
  if (!next.startsWith('/') || next.startsWith('//')) return '/dashboard';
  return next;
}

function isBenignExchangeError(message = '') {
  return /already|exchanged|code verifier|auth code.*invalid|flow state/i.test(message);
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

async function ensureSessionFromCallback(code) {
  if (code) {
    const existingExchange = inFlightExchanges.get(code);
    if (existingExchange) return existingExchange;

    const exchangePromise = (async () => {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (!error && data?.session) return data.session;

      // Double-exchange / Strict Mode race: session may already exist.
      if (error && isBenignExchangeError(error.message)) {
        const { data: existing } = await supabase.auth.getSession();
        if (existing?.session) return existing.session;
      }
      if (error) throw error;

      const { data: fallback, error: fallbackError } = await supabase.auth.getSession();
      if (fallbackError) throw fallbackError;
      if (!fallback.session) {
        throw new Error('Geen sessie ontvangen van Google.');
      }
      return fallback.session;
    })();

    inFlightExchanges.set(code, exchangePromise);
    try {
      return await exchangePromise;
    } catch (err) {
      inFlightExchanges.delete(code);
      throw err;
    }
  }

  const { data, error } = await supabase.auth.getSession();
  if (error) throw error;
  if (!data.session) {
    throw new Error('Geen sessie ontvangen van Google.');
  }
  return data.session;
}

export default function AuthCallbackClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('Bezig met inloggen...');

  useEffect(() => {
    let cancelled = false;
    const next = safeNextPath(searchParams.get('next'));
    const code = searchParams.get('code');
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
        await ensureSessionFromCallback(code);
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
