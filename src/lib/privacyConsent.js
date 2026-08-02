/**
 * Pending privacy (+ optional newsletter) consent before Google OAuth completes.
 * Stored briefly in localStorage, then written to profiles after callback.
 */

export const PRIVACY_CONSENT_PENDING_KEY = 'fb_privacy_consent_pending';
export const PRIVACY_POLICY_VERSION = '2026-08-02-newsletter-opt-in';

export function markPrivacyConsentPending({ newsletterOptIn = false } = {}) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(
      PRIVACY_CONSENT_PENDING_KEY,
      JSON.stringify({
        at: new Date().toISOString(),
        version: PRIVACY_POLICY_VERSION,
        newsletterOptIn: Boolean(newsletterOptIn),
      })
    );
  } catch {
    // ignore
  }
}

export function consumePrivacyConsentPending() {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(PRIVACY_CONSENT_PENDING_KEY);
    if (raw) localStorage.removeItem(PRIVACY_CONSENT_PENDING_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export async function persistPrivacyAcceptance(supabase, userId, acceptedAt = new Date().toISOString()) {
  if (!userId) return;
  const { error } = await supabase
    .from('profiles')
    .update({
      privacy_accepted_at: acceptedAt,
      privacy_policy_version: PRIVACY_POLICY_VERSION,
      updated_at: new Date().toISOString(),
    })
    .eq('id', userId);

  if (error && !/privacy_accepted|schema cache|column/i.test(error.message || '')) {
    console.warn('privacy acceptance update failed:', error.message);
  }
}

/**
 * Persist marketing opt-in. Only sets true when opted in (never silently overwrites
 * an existing true with false on a returning login that left the box unchecked).
 */
export async function persistNewsletterOptIn(supabase, userId, optedIn) {
  if (!userId || !optedIn) return;

  const now = new Date().toISOString();
  const { error } = await supabase
    .from('profiles')
    .update({
      newsletter_opt_in: true,
      newsletter_opt_in_at: now,
      updated_at: now,
    })
    .eq('id', userId);

  if (error && !/newsletter_opt_in|schema cache|column/i.test(error.message || '')) {
    console.warn('newsletter opt-in update failed:', error.message);
  }
}
