export function parseAmount(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(/\s/g, '').replace(',', '.').trim();
  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatHours(hours) {
  return `${new Intl.NumberFormat('nl-NL', {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(hours)} uur`;
}

export const DEFAULT_INPUTS = {
  invoices: '50',
  minutes: '5',
  hourly: '60',
  bookkeeper: '125',
  remainingHours: '1',
};

function roundMoney(amount) {
  return Math.round(amount * 100) / 100;
}

export function calculateOutsource({ invoices, minutes, hourlyRate, bookkeeperCost, remainingHours }) {
  const values = [invoices, minutes, hourlyRate, bookkeeperCost, remainingHours];
  if (values.some((value) => value === null)) return null;

  const selfHours = (invoices * minutes) / 60;
  const selfValue = roundMoney(selfHours * hourlyRate);
  const remainingValue = roundMoney(remainingHours * hourlyRate);
  const outsourceValue = roundMoney(bookkeeperCost + remainingValue);
  const difference = roundMoney(selfValue - outsourceValue);
  const timeSaved = selfHours - remainingHours;

  return {
    selfHours,
    selfValue,
    remainingHours,
    remainingValue,
    bookkeeperCost,
    outsourceValue,
    difference,
    timeSaved,
  };
}

export function describeComparison(result) {
  if (!result) return '';

  if (result.timeSaved <= 0) {
    return 'Je bespaart in deze berekening geen tijd. De boekhoudkosten komen dan bovenop de tijd die je zelf nog besteedt aan aanleveren en controleren.';
  }

  const saved = `Geschatte tijdsbesparing: ${formatHours(result.timeSaved)} per maand.`;

  if (Math.abs(result.difference) < 1) {
    return `In deze berekening liggen zelf verwerken en uitbesteden dicht bij elkaar. ${saved} Die uren hebben alleen financiële waarde als je ze productief kunt inzetten.`;
  }

  if (result.difference > 0) {
    return `Uitbesteden heeft in deze berekening een lagere totale tijdswaarde en kosten. ${saved} Die uren leveren alleen geld op als je ze productief kunt inzetten.`;
  }

  return `Zelf verwerken heeft in deze berekening een lagere totale tijdswaarde. ${saved} Uitbesteden kan alsnog passen wanneer je ondersteuning wilt, ook als de berekende kosten hoger liggen.`;
}

export const OUTSOURCE_FAQS = [
  {
    q: 'Is zelf boekhouden goedkoper dan een boekhouder?',
    a: 'Niet altijd. Zelf boekhouden heeft mogelijk lagere directe kosten, maar kost je tijd. Of uitbesteden voordeliger is, hangt af van je administratietijd, de waarde van die tijd en de kosten van professionele ondersteuning.',
  },
  {
    q: "Hoeveel tijd kost boekhouden als zzp'er?",
    a: 'Dat verschilt per onderneming. Het aantal facturen, de complexiteit van transacties en de gebruikte software hebben veel invloed op de tijdsbesteding.',
  },
  {
    q: 'Wat kost een boekhouder voor 50 facturen per maand?',
    a: 'Er bestaat geen vast tarief. Sommige boekhouders werken met maandpakketten, andere met uurtarieven of tarieven per boeking. Vraag welke werkzaamheden zijn inbegrepen.',
  },
  {
    q: 'Kan ik alleen mijn facturen uitbesteden?',
    a: 'Ja, afhankelijk van de dienstverlener kun je specifieke administratieve werkzaamheden uitbesteden zonder je volledige boekhouding over te dragen.',
  },
  {
    q: "Is een boekhouder verplicht voor zzp'ers?",
    a: "Nee. Je mag als zzp'er zelf je administratie verzorgen zolang je voldoet aan de wettelijke verplichtingen.",
  },
  {
    q: 'Is de calculator gratis?',
    a: 'Ja. Je kunt de calculator gratis gebruiken zonder account.',
  },
  {
    q: 'Houdt de calculator rekening met belastingen?',
    a: 'Nee. De calculator maakt een vereenvoudigde vergelijking van tijdswaarde en kosten. Individuele fiscale gevolgen worden niet automatisch berekend.',
  },
];

export function getOutsourceFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: OUTSOURCE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}

export const OUTSOURCE_ARTICLES = [
  {
    href: '/blogs/hoeveel-facturen-zelf-verwerken',
    title: "Hoeveel facturen kun je zelf verwerken als zzp'er?",
    description: 'Wanneer je administratie te veel tijd kost en een boekhouder interessant wordt.',
  },
  {
    href: '/blogs/facturen-zelf-boekhouden-of-uitbesteden',
    title: 'Facturen zelf boekhouden of uitbesteden?',
    description: 'Vergelijk zelf doen en uitbesteden op kosten, tijd en verantwoordelijkheid.',
  },
  {
    href: '/blogs/facturen-laten-verwerken-boekhouder',
    title: 'Facturen laten verwerken door een boekhouder: kosten en mogelijkheden',
    description: 'Welke werkzaamheden je kunt uitbesteden en hoe de kosten zijn opgebouwd.',
  },
  {
    href: '/blogs/facturen-automatisch-verwerken',
    title: 'Facturen automatisch verwerken: hoe werkt het?',
    description: 'OCR, boekhoudsoftware en wanneer automatiseren tijd scheelt.',
  },
  {
    href: '/gidsen/kosten-boekhoudprogramma-zzp',
    title: "Wat kost een boekhoudprogramma voor zzp'ers?",
    description: 'Prijzen van boekhoudsoftware naast de kosten van uitbesteden.',
  },
];
