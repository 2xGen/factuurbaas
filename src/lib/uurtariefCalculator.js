export const WEEKS_PER_MONTH = 4;
export const TAX_RESERVE_RATE = 0.3;

export const DEFAULT_INPUTS = {
  desiredNetMonthly: 3000,
  monthlyCosts: 500,
  hoursPerWeek: 40,
  billablePercent: 100,
};

export const BRANCH_RATES_TABLE = [
  ['Administratie', '€35 - €60'],
  ['Marketing', '€50 - €100'],
  ['Development', '€75 - €150'],
  ['Consultancy', '€100+'],
  ['Bouw & techniek', '€40 - €90'],
];

export const RELATED_ARTICLES = [
  {
    href: '/blogs/hoeveel-geld-apart-belasting-zzper',
    title: "Hoeveel geld moet je apart zetten voor belasting als zzp'er?",
    description: 'Richtlijnen voor btw en inkomstenbelasting: hoeveel reserveren als zzp\'er?',
  },
  {
    href: '/blogs/factuur-maken-zzp',
    title: 'Factuur maken zzp: stappenplan + gratis voorbeeld',
    description: 'Ontdek welke gegevens verplicht zijn en maak direct een professionele factuur.',
  },
  {
    href: '/blogs/sneller-betalen-factuur',
    title: 'Factuur sneller betaald krijgen',
    description: 'Tips om sneller betaald te worden als zzp\'er of kleine ondernemer.',
  },
  {
    href: '/blogs/factureren-zonder-account',
    title: 'Gratis factuur maken zonder account',
    description: 'Maak een PDF-factuur zonder registratie en verstuur deze direct naar je klant.',
  },
];

export const UURTARIEF_FAQS = [
  {
    q: 'Hoe bereken ik mijn uurtarief als zzp\'er?',
    a: 'Je berekent je uurtarief door je benodigde maandomzet te delen door het aantal uren dat je daadwerkelijk kunt factureren. De benodigde omzet bestaat uit je gewenste netto-inkomen, zakelijke kosten en een reservering voor belasting.',
  },
  {
    q: 'Hoeveel uur kan een zzp\'er factureren?',
    a: 'Een zzp\'er werkt niet alle uren betaald. Vaak ligt het aantal declarabele uren tussen ongeveer 50% en 70% van de werktijd — denk aan administratie, acquisitie en vakantie.',
  },
  {
    q: 'Wat is een goed uurtarief voor een starter?',
    a: 'Dit hangt af van je branche, ervaring en kosten. Een starter kan vaak lager beginnen en het tarief verhogen naarmate ervaring en vraag groeien.',
  },
  {
    q: 'Is een hoger uurtarief beter?',
    a: 'Niet altijd. Een hoger tarief moet passen bij je ervaring, kwaliteit en de waarde die je levert. Te hoog kan klanten afschrikken; te laag levert te weinig op.',
  },
];

export function parseAmount(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(',', '.').trim();
  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function calculateUurtarief({
  desiredNetMonthly,
  monthlyCosts = 0,
  hoursPerWeek,
  billablePercent = 100,
}) {
  const net = parseAmount(desiredNetMonthly);
  const costs = parseAmount(monthlyCosts) ?? 0;
  const hours = parseAmount(hoursPerWeek);
  const billable = parseAmount(billablePercent) ?? 100;

  if (net === null || hours === null || hours <= 0) return null;

  const billableFraction = Math.min(100, Math.max(0, billable)) / 100;
  const billableHoursPerMonth = hours * WEEKS_PER_MONTH * billableFraction;
  if (billableHoursPerMonth <= 0) return null;

  const baseBeforeTax = net + costs;
  const requiredRevenue = baseBeforeTax / (1 - TAX_RESERVE_RATE);
  const taxReserve = requiredRevenue - baseBeforeTax;
  const hourlyRate = requiredRevenue / billableHoursPerMonth;
  const billableHoursPerWeek = hours * billableFraction;

  return {
    desiredNetMonthly: net,
    monthlyCosts: costs,
    hoursPerWeek: hours,
    billablePercent: billable,
    baseBeforeTax,
    taxReserve,
    taxReservePercent: TAX_RESERVE_RATE * 100,
    requiredRevenue,
    billableHoursPerWeek,
    billableHoursPerMonth,
    hourlyRate,
  };
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(amount);
}

export function formatHourlyRate(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function getUurtariefFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UURTARIEF_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
