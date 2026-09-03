import { parseAmount, formatEuro } from '@/lib/uurtariefCalculator';

export { parseAmount, formatEuro };

export const WEEKS_PER_MONTH = 4;

export const DEFAULT_INPUTS = {
  hourlyRate: 75,
  hoursPerWeek: 40,
  billableHoursPerMonth: 160,
  monthlyCosts: 500,
};

export const UURTARIEF_NAAR_INKOMEN_FAQS = [
  {
    q: 'Hoe bereken ik mijn omzet als zzp\'er?',
    a: 'Vermenigvuldig je uurtarief met het aantal factureerbare uren. Bij een uurtarief van €75 en 100 factureerbare uren per maand is je omzet €75 × 100 = €7.500.',
  },
  {
    q: 'Is mijn uurtarief mijn inkomen?',
    a: 'Nee. Je uurtarief is het bedrag dat je per uur aan een klant factureert. Je omzet is je totale gefactureerde bedrag. Na zakelijke kosten blijft je winst vóór belasting over. Je uiteindelijke netto-inkomen is weer iets anders.',
  },
  {
    q: 'Hoeveel omzet maak ik met €50 per uur?',
    a: 'Dat hangt af van je aantal factureerbare uren. Bij 100 uur per maand: €50 × 100 = €5.000 omzet. Bij 120 uur: €50 × 120 = €6.000 omzet.',
  },
  {
    q: 'Hoeveel omzet maak ik met €75 per uur?',
    a: 'Bij 100 factureerbare uren per maand is dat €75 × 100 = €7.500 omzet. Bij 120 uur is dat €75 × 120 = €9.000 omzet.',
  },
  {
    q: 'Hoeveel factureerbare uren kan een zzp\'er maken?',
    a: 'Dat verschilt per beroep en werksituatie. Niet alle gewerkte uren zijn factureerbaar. Houd rekening met tijd voor administratie, acquisitie, offertes, marketing en andere werkzaamheden.',
  },
  {
    q: 'Hoe bereken ik welk uurtarief ik nodig heb?',
    a: 'Begin met het bedrag dat je wilt verdienen en houd rekening met zakelijke kosten, belastingen, niet-factureerbare uren, vakantiedagen en andere kosten. Gebruik daarvoor de uurtarief calculator.',
  },
];

export const INCOME_RATE_EXAMPLES = [
  ['€50', '80 uur', '€4.000'],
  ['€50', '120 uur', '€6.000'],
  ['€75', '80 uur', '€6.000'],
  ['€75', '120 uur', '€9.000'],
  ['€100', '80 uur', '€8.000'],
  ['€100', '120 uur', '€12.000'],
];

export function monthlyHoursFromWeekly(hoursPerWeek) {
  const hours = parseAmount(hoursPerWeek);
  if (hours === null) return null;
  return hours * WEEKS_PER_MONTH;
}

export function calculateIncomeFromRate({
  hourlyRate,
  billableHoursPerMonth,
  monthlyCosts = 0,
}) {
  const rate = parseAmount(hourlyRate);
  const hours = parseAmount(billableHoursPerMonth);
  const costs = parseAmount(monthlyCosts) ?? 0;

  if (rate === null || hours === null || rate <= 0 || hours <= 0) return null;

  const monthlyRevenue = rate * hours;
  const estimatedProfit = monthlyRevenue - costs;

  return {
    hourlyRate: rate,
    billableHoursPerMonth: hours,
    monthlyCosts: costs,
    monthlyRevenue,
    estimatedProfit,
  };
}

export function getUurtariefNaarInkomenFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UURTARIEF_NAAR_INKOMEN_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
