/**
 * Soft attribution: visitor arrived via a Baas referral link (?ref=CODE).
 */
export const REFERRAL_STORAGE_KEY = 'fb_referral_code';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://factuurbaas.nl';

export function normalizeReferralCode(code) {
  if (!code || typeof code !== 'string') return null;
  const normalized = code.trim().toUpperCase().replace(/[^A-Z0-9]/g, '');
  return normalized.length >= 4 ? normalized : null;
}

export function storeReferralCode(code) {
  if (typeof window === 'undefined') return;
  const normalized = normalizeReferralCode(code);
  if (!normalized) return;
  try {
    localStorage.setItem(REFERRAL_STORAGE_KEY, normalized);
  } catch {
    // ignore quota / private mode
  }
}

/** Read without clearing. */
export function peekReferralCode() {
  if (typeof window === 'undefined') return null;
  try {
    return normalizeReferralCode(localStorage.getItem(REFERRAL_STORAGE_KEY));
  } catch {
    return null;
  }
}

/** Read and clear. Returns normalized code or null. */
export function consumeReferralCode() {
  if (typeof window === 'undefined') return null;
  try {
    const value = peekReferralCode();
    if (value) localStorage.removeItem(REFERRAL_STORAGE_KEY);
    return value;
  } catch {
    return null;
  }
}

export function buildReferralUrl(code) {
  const normalized = normalizeReferralCode(code);
  if (!normalized) return SITE_URL;
  return `${SITE_URL.replace(/\/$/, '')}/?ref=${encodeURIComponent(normalized)}`;
}

export const REFERRAL_SHARE_MESSAGE =
  'Ik gebruik FactuurBaas om gratis facturen te maken. Misschien heb je er ook wat aan:';

export function buildReferralShareText(code) {
  const url = buildReferralUrl(code);
  return `${REFERRAL_SHARE_MESSAGE} ${url}`;
}

export function buildWhatsAppShareUrl(code) {
  const text = buildReferralShareText(code);
  return `https://wa.me/?text=${encodeURIComponent(text)}`;
}

export function buildEmailShareUrl(code) {
  const url = buildReferralUrl(code);
  const subject = 'Probeer FactuurBaas — gratis facturen maken';
  const body = `${REFERRAL_SHARE_MESSAGE}\n\n${url}`;
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function buildLinkedInShareUrl(code) {
  const url = buildReferralUrl(code);
  return `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
}

export async function ensureReferralCode(supabase) {
  const { data, error } = await supabase.rpc('ensure_my_referral_code');
  if (error) throw error;
  return data;
}

export async function countMyReferrals(supabase) {
  const { data, error } = await supabase.rpc('count_my_referrals');
  if (error) throw error;
  return Number(data) || 0;
}

/** Count a Baas-link visit (anon-safe). Deduped client-side per tab session. */
export async function recordReferralVisit(supabase, code) {
  const normalized = normalizeReferralCode(code);
  if (!normalized) return 0;
  const { data, error } = await supabase.rpc('record_referral_visit', {
    p_code: normalized,
  });
  if (error) throw error;
  return Number(data) || 0;
}

export async function getMyReferralVisitCount(supabase) {
  const { data, error } = await supabase.rpc('get_my_referral_visit_count');
  if (error) throw error;
  return Number(data) || 0;
}

const VISIT_SESSION_PREFIX = 'fb_ref_visit_';

/** Record at most one visit per referral code per browser tab session. */
export async function recordReferralVisitOnce(supabase, code) {
  const normalized = normalizeReferralCode(code);
  if (!normalized || typeof window === 'undefined') return 0;
  const key = `${VISIT_SESSION_PREFIX}${normalized}`;
  try {
    if (sessionStorage.getItem(key)) return 0;
    sessionStorage.setItem(key, '1');
  } catch {
    // private mode — still try to count once this page load
  }
  try {
    return await recordReferralVisit(supabase, normalized);
  } catch {
    return 0;
  }
}

export async function applyReferralCode(supabase, code) {
  const normalized = normalizeReferralCode(code);
  if (!normalized) return { ok: false, reason: 'empty' };
  const { data, error } = await supabase.rpc('apply_referral_code', {
    p_code: normalized,
  });
  if (error) throw error;
  return data || { ok: false, reason: 'unknown' };
}
