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
    q: 'Hoe bereken ik mijn maandinkomen als zzp\'er?',
    a: 'Vermenigvuldig je uurtarief met het aantal factureerbare uren per maand. Dat is je omzet. Trek je zakelijke kosten af voor een schatting van je winst vóór belasting.',
  },
  {
    q: 'Is omzet hetzelfde als inkomen?',
    a: 'Nee. Omzet is wat je factureert aan klanten. Je werkelijke inkomen is lager: eerst gaan zakelijke kosten af, daarna belasting en premies.',
  },
  {
    q: 'Hoeveel omzet maak ik met €50 per uur?',
    a: 'Bij 160 factureerbare uren per maand: €50 × 160 = €8.000 omzet per maand. Minus je kosten is dat je geschatte winst.',
  },
  {
    q: 'Wat is het verschil met de uurtarief calculator?',
    a: 'De uurtarief calculator berekent welk tarief je nodig hebt om een bepaald inkomen te halen. Deze tool doet het omgekeerd: je vult je tarief in en ziet hoeveel omzet en winst dat oplevert.',
  },
  {
    q: 'Hoeveel factureerbare uren per maand is normaal?',
    a: 'Bij 40 uur per week en 4 weken per maand reken je met 160 uur. Niet alle uren zijn declarabel — pas het aantal aan als je tijd kwijt bent aan administratie, acquisitie of marketing.',
  },
];

export const INCOME_RATE_EXAMPLES = [
  ['€50', '160 uur', '€8.000'],
  ['€75', '160 uur', '€12.000'],
  ['€100', '120 uur', '€12.000'],
  ['€125', '100 uur', '€12.500'],
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
