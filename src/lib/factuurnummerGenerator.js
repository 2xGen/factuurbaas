export const DEFAULT_PREFIX = 'FACT';

export const PREFIX_EXAMPLES = ['FACT', 'INV', ''];

export const FACTUURNUMMER_FAQS = [
  {
    q: 'Moet een factuurnummer uniek zijn?',
    a: 'Ja. Elke factuur moet een eigen, uniek en opeenvolgend nummer hebben. Gebruik hetzelfde nummer nooit twee keer — ook niet voor verschillende klanten.',
  },
  {
    q: 'Mag ik opnieuw beginnen met nummeren?',
    a: 'Voor een nieuwe onderneming of een nieuw boekjaar kun je soms opnieuw beginnen met 001. Zorg wel dat je administratie duidelijk blijft en dat je geen gaten of dubbele nummers maakt.',
  },
  {
    q: 'Welk factuurnummer formaat moet ik gebruiken?',
    a: 'Er is geen wettelijk verplicht formaat, zolang het nummer uniek en opevolgend is. Veel zzp\'ers kiezen voor 2026-001, FACT-2026-001 of een eigen voorvoegsel met jaar en volgnummer.',
  },
  {
    q: 'Kan ik letters in mijn factuurnummer gebruiken?',
    a: 'Ja, een voorvoegsel zoals FACT of INV is toegestaan. Het volgnummer moet wel logisch en opeenvolgend blijven.',
  },
  {
    q: 'Wat als ik een factuurnummer oversla?',
    a: 'Vermijd gaten in je nummering waar mogelijk. Als je per ongeluk een nummer overslaat, noteer dat in je administratie zodat je boekhouding klopt.',
  },
];

export const FACTUURNUMMER_FORMAT_EXAMPLES = [
  ['Jaar + nummer', '2026-001', 'Eenvoudig en overzichtelijk'],
  ['Met voorvoegsel', 'FACT-2026-001', 'Herkenbaar als factuur'],
  ['Internationaal', 'INV-2026-001', 'Gebruikelijk bij export'],
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
