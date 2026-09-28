import { supabase } from '@/lib/customSupabaseClient';
import { consumeGuestInvoiceFlag } from '@/lib/guestInvoiceAttribution';
import {
  consumePrivacyConsentPending,
  persistPrivacyAcceptance,
  persistNewsletterOptIn,
} from '@/lib/privacyConsent';
import { applyReferralCode, consumeReferralCode, storeReferralCode } from '@/lib/referral';
import { requestWelcomeEmail } from '@/lib/requestWelcomeEmail';

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
      // Drop invalid code
    }
  } catch (err) {
    storeReferralCode(code);
    console.warn('referral apply failed:', err?.message || err);
  }
}

/**
 * Shared side effects after a successful session (OAuth callback or email login/signup).
 */
export async function completeAuthSideEffects() {
  await applyPrivacyConsentIfNeeded();
  await applyGuestConversionIfNeeded();
  await applyReferralIfNeeded();
  void requestWelcomeEmail(supabase);
}

/** Map common Supabase Auth errors to Dutch copy. */
export function friendlyAuthError(error) {
  const msg = (error?.message || '').toLowerCase();
  if (!msg) return 'Er ging iets mis. Probeer het opnieuw.';
  if (msg.includes('invalid login credentials')) {
    return 'Onjuiste e-mail of wachtwoord.';
  }
  if (msg.includes('email not confirmed')) {
    return 'Bevestig eerst je e-mail via de link die we hebben gestuurd.';
  }
  if (msg.includes('user already registered')) {
    return 'Dit e-mailadres heeft al een account. Log in of gebruik Google.';
  }
  if (msg.includes('password should be at least')) {
    return 'Kies een wachtwoord van minimaal 6 tekens.';
  }
  if (msg.includes('unable to validate email') || msg.includes('invalid email')) {
    return 'Dit e-mailadres lijkt ongeldig.';
  }
  if (msg.includes('signup is disabled')) {
    return 'Nieuwe registraties zijn tijdelijk uitgeschakeld.';
  }
  return error.message || 'Er ging iets mis. Probeer het opnieuw.';
}
