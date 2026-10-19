const ENDPOINT = 'https://intranet2.wrkd.nl/api/webhook/incoming';

const BUSINESS_CODES = {
  bv: 'BV',
  'eenmanszaak-vof-stichting': 'ZZP of VOF',
};

const BUSINESS_LABELS = {
  bv: 'BV',
  'eenmanszaak-vof-stichting': 'Eenmanszaak, VOF of stichting',
};

function clip(value, max) {
  const text = String(value || '').replace(/\s+/g, ' ').trim();
  if (!text) return '';
  return text.length <= max ? text : text.slice(0, max);
}

export function wrkdConfigured() {
  return Boolean(process.env.WRKD_KEY1 && process.env.WRKD_KEY2 && process.env.WRKD_KEY3);
}

const AMSTERDAM = 'Europe/Amsterdam';

function amsterdamParts(date = new Date()) {
  const formatted = new Intl.DateTimeFormat('en-US', {
    timeZone: AMSTERDAM,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  }).formatToParts(date);
  const get = (type) => formatted.find((part) => part.type === type)?.value || '00';
  const hour = get('hour') === '24' ? '00' : get('hour');
  return { year: get('year'), month: get('month'), day: get('day'), hour, minute: get('minute'), second: get('second') };
}

function amsterdamOffsetMs(date) {
  const parts = amsterdamParts(date);
  const asUtc = Date.UTC(Number(parts.year), Number(parts.month) - 1, Number(parts.day), Number(parts.hour), Number(parts.minute), Number(parts.second));
  return asUtc - date.getTime();
}

export function amsterdamDayRange(date = new Date()) {
  const { year, month, day } = amsterdamParts(date);
  const utcGuess = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day), 0, 0, 0));
  const start = new Date(utcGuess.getTime() - amsterdamOffsetMs(utcGuess));
  return { start: start.toISOString(), end: new Date(start.getTime() + 24 * 60 * 60 * 1000).toISOString() };
}

/** WRKD documents 255 characters, but the column rejects anything over 16. */
export function affiliateLeadId(date = new Date(), sequence = null) {
  const { year, month, day, hour, minute } = amsterdamParts(date);
  const number = Number.isInteger(sequence) && sequence > 0
    ? String(Math.min(sequence, 9999)).padStart(4, '0')
    : `${hour}${minute}`;
  return `FB.${month}.${day}.${year.slice(-2)}.${number}`;
}

export function buildWrkdPayload(lead, affiliateId) {
  if (!wrkdConfigured()) return null;

  const businessType = lead.businessType;
  const utm = Object.entries(lead.utm || {})
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}=${value}`)
    .join(', ');
  const description = [
    'De ondernemer zoekt een boekhouder.',
    'KvK-inschrijving bevestigd.',
    `Rechtsvorm: ${BUSINESS_LABELS[businessType] || businessType}.`,
    `Pagina: ${lead.sourcePage}.`,
    `Bron: ${lead.sourceType}.`,
    utm ? `UTM: ${utm}.` : '',
  ]
    .filter(Boolean)
    .join(' ');
  const descriptionText = clip(description, 1000);

  return {
    key1: process.env.WRKD_KEY1,
    key2: process.env.WRKD_KEY2,
    key3: process.env.WRKD_KEY3,
    companyname: clip(lead.companyName, 255),
    businesstype: clip(BUSINESS_CODES[businessType] || businessType, 16),
    description: descriptionText,
    affiliateleadid: clip(affiliateId, 16),
    name: clip(lead.name, 255),
    email: clip(lead.email, 255),
    phone: clip(lead.phone, 255),
    city: clip(lead.city, 255),
  };
}

function redact(text) {
  return String(text || '')
    .replace(/[A-Za-z0-9+/=_-]{20,}/g, '[redacted]')
    .slice(0, 300);
}

export async function postWrkdLead(payload) {
  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(12000),
  });
  const text = await response.text();
  const phpError = /Fatal error|PDOException|truncated/i.test(text);
  return { ok: response.ok && !phpError, status: response.status, body: redact(text) };
}
