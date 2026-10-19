export const BUSINESS_TYPES = [
  { id: 'eenmanszaak-vof-stichting', label: 'Eenmanszaak, VOF of stichting' },
  { id: 'bv', label: 'BV' },
];

const BUSINESS_IDS = new Set(BUSINESS_TYPES.map((item) => item.id));
const SOURCE_TYPES = new Set(['seo', 'article', 'embed']);
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'];

export function labelForBusinessType(id) {
  return BUSINESS_TYPES.find((item) => item.id === id)?.label || id;
}

/** Dutch mobile and landline numbers, returned as E.164 (+31…). */
export function normalizeDutchPhone(input) {
  let value = String(input || '').trim().replace(/[\s()./-]/g, '');
  if (!value) return null;
  if (value.startsWith('0031')) value = `+31${value.slice(4)}`;
  if (value.startsWith('+31')) {
    const rest = value.slice(3);
    if (!/^[1-9]\d{8}$/.test(rest) || /(\d)\1{6,}/.test(rest)) return null;
    return `+31${rest}`;
  }
  if (!/^0[1-9]\d{8}$/.test(value)) return null;
  const national = value.slice(1);
  if (/(\d)\1{6,}/.test(national)) return null;
  return `+31${national}`;
}

export function isValidEmail(input) {
  const email = String(input || '').trim().toLowerCase();
  if (email.length < 6 || email.length > 254) return false;
  return /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(email);
}

function cleanText(input, max) {
  return String(input || '').replace(/\s+/g, ' ').trim().slice(0, max);
}

function hasLetter(value) {
  return /\p{L}/u.test(value);
}

function cleanSourcePage(input) {
  const value = cleanText(input, 180);
  if (!value.startsWith('/') || value.startsWith('//') || /\s/.test(value)) {
    return '/boekhouder-vinden';
  }
  return value;
}

function cleanUtm(input) {
  if (!input || typeof input !== 'object') return {};
  const utm = {};
  for (const key of UTM_KEYS) {
    const value = cleanText(input[key], 120);
    if (value) utm[key] = value;
  }
  return utm;
}

export function validateBoekhouderLead(raw) {
  const errors = {};
  const businessType = String(raw?.businessType || raw?.companyForm || '');
  const companyName = cleanText(raw?.companyName, 120);
  const name = cleanText(raw?.name, 80);
  const city = cleanText(raw?.city, 80);
  const email = String(raw?.email || '').trim().toLowerCase();
  const phone = normalizeDutchPhone(raw?.phone);
  const sourceType = SOURCE_TYPES.has(raw?.sourceType) ? raw.sourceType : 'seo';

  if (!BUSINESS_IDS.has(businessType)) errors.businessType = 'Kies een bedrijfsvorm.';
  if (companyName.length < 2 || !hasLetter(companyName)) {
    errors.companyName = 'Vul de bedrijfsnaam in.';
  }
  if (name.length < 2 || !hasLetter(name)) errors.name = 'Vul je naam in.';
  if (city.length < 2 || !/^[\p{L}'][\p{L}\s.'-]{1,79}$/u.test(city)) {
    errors.city = 'Vul een plaatsnaam in.';
  }
  if (!isValidEmail(email)) errors.email = 'Vul een geldig e-mailadres in.';
  if (!phone) errors.phone = 'Vul een geldig Nederlands telefoonnummer in.';
  if (raw?.kvkConfirmed !== true) {
    errors.kvkConfirmed = 'Bevestig dat je onderneming bij de KvK staat ingeschreven.';
  }
  if (raw?.consent !== true) {
    errors.consent = 'Geef toestemming om je gegevens met WRKD B.V. te delen.';
  }

  return {
    ok: Object.keys(errors).length === 0,
    errors,
    lead: {
      businessType,
      companyName,
      name,
      city,
      email,
      phone,
      kvkConfirmed: true,
      sourcePage: cleanSourcePage(raw?.sourcePage),
      sourceType,
      partner: 'WRKD',
      utm: cleanUtm(raw?.utm),
    },
  };
}
