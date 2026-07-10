export const QUICK_AMOUNTS = [25, 50, 100, 250, 500, 1000];

export const BTW_PRESETS = [
  { value: 21, label: '21% (standaard tarief)' },
  { value: 9, label: '9% (verlaagd tarief)' },
  { value: 0, label: '0%' },
];

export const RELATED_ARTICLES = [
  {
    href: '/blogs/btw-factuur-zzp',
    title: 'Btw op je factuur: zo doe je het goed als zzp\'er',
    description: 'Leer wanneer je 21%, 9% of 0% btw gebruikt en hoe btw correct op een factuur staat.',
  },
  {
    href: '/blogs/factuur-maken-zzp',
    title: 'Factuur maken zzp: stappenplan + gratis voorbeeld',
    description: 'Ontdek welke gegevens verplicht zijn en maak direct een professionele factuur.',
  },
  {
    href: '/blogs/factureren-zonder-account',
    title: 'Gratis factuur maken zonder account',
    description: 'Maak een PDF-factuur zonder registratie en verstuur deze direct naar je klant.',
  },
];

export const BTW_ADD_TABLE = [
  { excl: 100, btw: 21, incl: 121 },
  { excl: 250, btw: 52.5, incl: 302.5 },
  { excl: 500, btw: 105, incl: 605 },
  { excl: 1000, btw: 210, incl: 1210 },
];

export const BTW_REVERSE_TABLE = [
  { incl: 121, excl: 100, btw: 21 },
  { incl: 242, excl: 200, btw: 42 },
  { incl: 605, excl: 500, btw: 105 },
];

export function parseAmount(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(',', '.').trim();
  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function calculateBtw({ amount, rate, mode = 'add' }) {
  if (amount === null || amount <= 0 || rate < 0) {
    return null;
  }

  const factor = rate / 100;

  if (mode === 'add') {
    const excl = amount;
    const btw = excl * factor;
    const incl = excl + btw;
    return { excl, btw, incl, rate };
  }

  const incl = amount;
  const excl = factor === 0 ? incl : incl / (1 + factor);
  const btw = incl - excl;
  return { excl, btw, incl, rate };
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export const BTW_EXAMPLES = [
  {
    title: '€100 exclusief btw (21%)',
    mode: 'add',
    amount: 100,
    rate: 21,
  },
  {
    title: '€250 inclusief btw (21%)',
    mode: 'remove',
    amount: 250,
    rate: 21,
  },
];

export const BTW_FAQS = [
  {
    q: 'Hoe bereken ik 21% BTW?',
    a: 'Bij 21% BTW vermenigvuldig je een bedrag exclusief BTW met 0,21. Bijvoorbeeld: €100 × 0,21 = €21 BTW. Het totaalbedrag inclusief BTW is €121.',
  },
  {
    q: 'Hoe haal ik BTW uit een bedrag?',
    a: 'Om BTW uit een inclusief bedrag te halen deel je bij 21% BTW door 1,21. Voorbeeld: €121 ÷ 1,21 = €100 exclusief BTW. De BTW is dan €21.',
  },
  {
    q: 'Wanneer gebruik je 9% BTW?',
    a: 'Het 9% BTW-tarief geldt voor bepaalde producten en diensten, zoals sommige voedingsmiddelen, boeken en specifieke werkzaamheden. Controleer altijd het actuele BTW-tarief voor jouw situatie.',
  },
  {
    q: 'Wanneer gebruik je 0% BTW?',
    a: 'Het 0% BTW-tarief wordt bijvoorbeeld gebruikt bij bepaalde internationale transacties zoals sommige leveringen aan buitenlandse ondernemers. Dit is iets anders dan geen BTW berekenen door bijvoorbeeld de KOR.',
  },
  {
    q: 'Wat is het verschil tussen inclusief en exclusief BTW?',
    a: 'Een bedrag exclusief BTW is het bedrag vóór belasting. Een bedrag inclusief BTW bevat het bedrag plus de BTW die de klant betaalt.',
  },
];

export function getBtwFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: BTW_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
