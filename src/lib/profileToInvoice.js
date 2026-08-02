/**
 * Map profiles ↔ invoice companyDetails (structured address fields).
 * Minimizes stored data: structured address only (no duplicate blob needed for new writes),
 * logo_url stores storage path only — resolve via logoStorage for display.
 */

import {
  normalizeLogoRef,
  resolveLogoForDisplay,
  uploadLogoDataUrl,
} from '@/lib/logoStorage';

export function parseCompanyAddress(addressText) {
  const lines = String(addressText || '')
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length === 0) {
    return { street: '', postalCode: '', city: '', country: 'Nederland' };
  }

  const street = lines[0] || '';
  let postalCode = '';
  let city = '';
  let country = 'Nederland';

  if (lines[1]) {
    const match = lines[1].match(/^(\d{4}\s?[A-Za-z]{2})\s+(.+)$/);
    if (match) {
      postalCode = match[1].toUpperCase().replace(/\s+/, ' ');
      city = match[2];
    } else {
      city = lines[1];
    }
  }

  if (lines[2]) {
    country = lines[2];
  }

  return { street, postalCode, city, country };
}

export function companyDetailsToAddress(companyDetails) {
  return [
    companyDetails?.street,
    [companyDetails?.postalCode, companyDetails?.city].filter(Boolean).join(' '),
    companyDetails?.country,
  ]
    .map((line) => (line || '').trim())
    .filter(Boolean)
    .join('\n');
}

export function profileToCompanyDetails(profile, userEmail) {
  const hasStructured =
    profile?.company_street ||
    profile?.company_postal_code ||
    profile?.company_city ||
    profile?.company_country;

  const parsed = hasStructured
    ? {
        street: profile.company_street || '',
        postalCode: profile.company_postal_code || '',
        city: profile.company_city || '',
        country: profile.company_country || 'Nederland',
      }
    : parseCompanyAddress(profile?.company_address);

  return {
    name: profile?.company_name || '',
    street: parsed.street,
    postalCode: parsed.postalCode,
    city: parsed.city,
    country: parsed.country || 'Nederland',
    email: userEmail || '',
    kvk: profile?.company_kvk || '',
    btw: profile?.company_btw || '',
    iban: profile?.company_iban || '',
  };
}

/** Profile form companyDetails → DB row fields (no duplicate free-text address). */
export function profileFormToDbFields(companyDetails) {
  return {
    company_name: companyDetails?.name || null,
    company_street: companyDetails?.street || null,
    company_postal_code: companyDetails?.postalCode || null,
    company_city: companyDetails?.city || null,
    company_country: companyDetails?.country || 'Nederland',
    // Clear legacy duplicate; structured fields are source of truth
    company_address: null,
    company_kvk: companyDetails?.kvk || null,
    company_btw: companyDetails?.btw || null,
    company_iban: companyDetails?.iban || null,
  };
}

export function companyDetailsToProfilePayload(userId, companyDetails, logoPath, fullName) {
  return {
    id: userId,
    full_name: fullName || null,
    ...profileFormToDbFields(companyDetails),
    logo_url: typeof logoPath === 'string' ? normalizeLogoRef(logoPath) : null,
    updated_at: new Date().toISOString(),
  };
}

export function dbProfileToFormCompanyDetails(data) {
  const hasStructured =
    data?.company_street || data?.company_postal_code || data?.company_city || data?.company_country;
  const parsed = hasStructured
    ? {
        street: data.company_street || '',
        postalCode: data.company_postal_code || '',
        city: data.company_city || '',
        country: data.company_country || 'Nederland',
      }
    : parseCompanyAddress(data?.company_address);

  return {
    name: data?.company_name || '',
    street: parsed.street,
    postalCode: parsed.postalCode,
    city: parsed.city,
    country: parsed.country || 'Nederland',
    kvk: data?.company_kvk || '',
    btw: data?.company_btw || '',
    iban: data?.company_iban || '',
  };
}

export function profileHasCompanyData(profile) {
  if (!profile) return false;
  return Boolean(
    profile.company_name ||
      profile.company_street ||
      profile.company_city ||
      profile.company_iban ||
      profile.company_kvk ||
      profile.company_address
  );
}

export async function fetchProfileForInvoice(supabase, userId) {
  const { data, error } = await supabase
    .from('profiles')
    .select(
      'company_name, company_address, company_street, company_postal_code, company_city, company_country, company_kvk, company_btw, company_iban, logo_url, full_name'
    )
    .eq('id', userId)
    .maybeSingle();

  if (error) throw error;
  return data;
}

/** Resolve profile.logo_url (path or legacy URL) to a short-lived display URL. */
export async function resolveProfileLogo(supabase, profile) {
  return resolveLogoForDisplay(supabase, profile?.logo_url);
}

export async function saveCompanyDetailsToProfile(supabase, user, companyDetails, logo) {
  let logoPath = null;
  if (typeof logo === 'string' && logo.startsWith('data:')) {
    logoPath = await uploadLogoDataUrl(supabase, user.id, logo, 'logo');
  } else if (logo) {
    logoPath = normalizeLogoRef(logo);
  }

  const payload = companyDetailsToProfilePayload(
    user.id,
    companyDetails,
    logoPath,
    user.user_metadata?.full_name || user.user_metadata?.name
  );

  const { error } = await supabase.from('profiles').upsert(payload, { onConflict: 'id' });
  if (error) throw error;

  const displayUrl = logoPath ? await resolveLogoForDisplay(supabase, logoPath) : null;
  return { logoPath, logoUrl: displayUrl };
}
