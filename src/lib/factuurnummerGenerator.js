export const DEFAULT_PREFIX = 'FACT';

export const PREFIX_EXAMPLES = ['FACT', 'INV', ''];

export const FACTUURNUMMER_FAQS = [
  {
    q: 'Wat is een goed factuurnummer?',
    a: 'Een goed factuurnummer is uniek, logisch opgebouwd en eenvoudig terug te vinden in je administratie. Bijvoorbeeld 2026-001 of FACT-2026-001.',
  },
  {
    q: "Welk factuurnummer moet ik gebruiken als zzp'er?",
    a: 'Er is niet één verplicht formaat. Je kunt zelf een logisch nummeringssysteem kiezen, zolang je factuurnummers uniek zijn en onderdeel zijn van een opeenvolgende reeks.',
  },
  {
    q: 'Mag ik ieder jaar opnieuw beginnen met 001?',
    a: 'Ja, je kunt ervoor kiezen om per jaar een nieuwe reeks te beginnen, bijvoorbeeld 2026-001 en daarna 2027-001. Je kunt ook doorlopend nummeren. Kies een systeem dat duidelijk en controleerbaar is.',
  },
  {
    q: 'Moet een factuurnummer uniek zijn?',
    a: 'Ja. Gebruik ieder factuurnummer maar één keer voor één factuur.',
  },
  {
    q: 'Mag een factuurnummer letters bevatten?',
    a: 'Ja. Een voorvoegsel zoals FACT of INV kan onderdeel zijn van je nummering.',
  },
  {
    q: 'Wat is een voorbeeld van een factuurnummer?',
    a: 'Een voorbeeld is FACT-2026-001. Andere mogelijkheden zijn 2026-001, 001 of INV-2026-001.',
  },
];

export const FACTUURNUMMER_FORMAT_EXAMPLES = [
  ['Jaar + nummer', '2026-001', 'Eenvoudig en overzichtelijk'],
  ['Voorvoegsel + jaar + nummer', 'FACT-2026-001', 'Duidelijk herkenbaar'],
  ['Alleen volgnummer', '1001', 'Simpel bij een doorlopende administratie'],
  ['INV + jaar + nummer', 'INV-2026-001', 'Handig bij internationale klanten'],
];

export function parseStartNumber(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(/\D/g, '');
  if (!normalized) return null;
  const num = parseInt(normalized, 10);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function formatInvoiceNumber({ year, prefix = '', startNumber = 1, padLength = 3 }) {
  const yr = parseInt(String(year), 10);
  const num = parseStartNumber(startNumber) ?? 1;
  if (!Number.isFinite(yr) || yr < 1000) return '';

  const padded = String(num).padStart(padLength, '0');
  const cleanPrefix = String(prefix || '')
    .trim()
    .replace(/-+$/, '');

  if (cleanPrefix) {
    return `${cleanPrefix}-${yr}-${padded}`;
  }
  return `${yr}-${padded}`;
}

export function getFactuurnummerFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FACTUURNUMMER_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
