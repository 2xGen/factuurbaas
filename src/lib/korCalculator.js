export const KOR_REVENUE_LIMIT = 20000;

export const KOR_BELASTINGDIENST_URL =
  'https://www.belastingdienst.nl/wps/wcm/connect/bldcontentnl/belastingdienst/zakelijk/btw/hoe_werkt_de_btw_voor_mij/kleineondernemersregeling/';

export const EU_KOR_BELASTINGDIENST_URL =
  'https://www.belastingdienst.nl/wps/wcm/connect/nl/btw/content/kleineondernemersregeling-in-de-europese-unie-eu-kor';

export const KOR_FAQS = [
  {
    q: 'Wat is de KOR?',
    a: 'De kleineondernemersregeling is een btw-vrijstelling voor kleine ondernemingen. Bij deelname bereken je geen btw aan klanten en kun je de btw op zakelijke kosten en investeringen niet aftrekken.',
  },
  {
    q: 'Tot welk bedrag geldt de KOR?',
    a: 'Voor de Nederlandse KOR geldt een omzetgrens van €20.000 per kalenderjaar. Er gelden daarnaast andere voorwaarden.',
  },
  {
    q: 'Hoe kan ik de KOR berekenen?',
    a: 'Je kunt beginnen door je omzet te vergelijken met de €20.000 omzetgrens. Onze calculator geeft een eerste indicatie. Controleer daarna of je ook aan de overige voorwaarden voldoet.',
  },
  {
    q: "Kan ik de KOR checken als startende zzp'er?",
    a: 'Ja. Ook als starter kun je bekijken of de KOR mogelijk interessant is. Houd er rekening mee dat de voorwaarden niet alleen afhangen van je verwachte omzet.',
  },
  {
    q: 'Is de KOR financieel voordelig?',
    a: 'Dat verschilt per onderneming. Je brengt geen btw in rekening, maar je kunt de btw op zakelijke kosten en investeringen ook niet aftrekken. Kijk daarom naar zowel je omzet als je kosten en investeringen.',
  },
  {
    q: 'Moet ik btw-aangifte doen als ik aan de KOR meedoe?',
    a: 'Bij deelname aan de KOR doe je in principe geen btw-aangifte. Er kunnen echter bijzondere situaties zijn waarin je toch met btw-verplichtingen te maken krijgt.',
  },
  {
    q: 'Wat moet ik doen als ik boven €20.000 omzet kom?',
    a: 'Kom je tijdens deelname aan de KOR boven €20.000 omzet in een kalenderjaar, dan moet je je direct afmelden en vanaf het overschrijdende moment de normale btw-regels toepassen.',
  },
];

export function parseAmount(value) {
  if (value === '' || value === null || value === undefined) return null;
  const normalized = String(value).replace(/\./g, '').replace(',', '.').trim();
  const num = parseFloat(normalized);
  return Number.isFinite(num) && num >= 0 ? num : null;
}

export function formatEuro(amount) {
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export const MONTHS_PER_YEAR = 12;

export const REVENUE_PERIOD_OPTIONS = [
  { value: 'year', label: 'Per jaar' },
  { value: 'month', label: 'Per maand' },
];

export function annualRevenueFromInput(revenueInput, period = 'year') {
  const amount = parseAmount(revenueInput);
  if (amount === null) return null;
  return period === 'month' ? amount * MONTHS_PER_YEAR : amount;
}

export function evaluateKor({
  annualRevenue,
  revenueInput,
  revenuePeriod = 'year',
  mostlyConsumers,
  highVatOnCosts,
}) {
  const revenue =
    annualRevenue !== undefined && annualRevenue !== null
      ? parseAmount(annualRevenue)
      : annualRevenueFromInput(revenueInput, revenuePeriod);
  if (revenue === null) return null;

  const inputAmount = parseAmount(revenueInput ?? annualRevenue);
  const monthlyRevenue =
    revenuePeriod === 'month' && inputAmount !== null ? inputAmount : revenue / MONTHS_PER_YEAR;

  const underLimit = revenue <= KOR_REVENUE_LIMIT;
  const nearLimit = revenue > KOR_REVENUE_LIMIT * 0.85 && revenue <= KOR_REVENUE_LIMIT;
  const overLimit = revenue > KOR_REVENUE_LIMIT;

  let status = 'eligible';
  let headline = 'Je omzet ligt onder de KOR-grens';
  let summary =
    'Deelname aan de kleineondernemersregeling is mogelijk. Je rekent dan geen btw aan klanten en doet geen btw-aangifte. Je mag ook geen btw aftrekken op zakelijke kosten.';

  if (overLimit) {
    status = 'not-eligible';
    headline = 'Je omzet ligt boven de KOR-grens';
    summary =
      'Met deze verwachte jaaromzet ben je btw-plichtig en kun je niet deelnemen aan de KOR. Je moet btw berekenen op facturen en btw-aangifte doen.';
  } else if (nearLimit) {
    status = 'near-limit';
    headline = 'Je zit dicht op de KOR-grens';
    summary =
      'Je omzet ligt nog onder €20.000, maar je zit dicht op de grens. Houd je werkelijke omzet goed bij — boven €20.000 moet je direct afmelden voor de KOR.';
  }

  const considerations = [];
  const explanationSteps = [];

  explanationSteps.push({
    title: 'Stap 1 — Vergelijk je omzet met de KOR-grens',
    text:
      revenuePeriod === 'month'
        ? `Je verwacht ${formatEuro(monthlyRevenue)} per maand. Dat is ${formatEuro(revenue)} per jaar (${formatEuro(monthlyRevenue)} × 12). De KOR geldt bij maximaal ${formatEuro(KOR_REVENUE_LIMIT)} omzet per kalenderjaar.`
        : `Je verwacht ${formatEuro(revenue)} omzet per jaar. De KOR geldt bij maximaal ${formatEuro(KOR_REVENUE_LIMIT)} omzet per kalenderjaar.`,
  });

  if (overLimit) {
    explanationSteps.push({
      title: 'Stap 2 — Conclusie omzetgrens',
      text: `${formatEuro(revenue)} is meer dan ${formatEuro(KOR_REVENUE_LIMIT)}. Je komt daarmee niet in aanmerking voor de KOR en bent btw-plichtig.`,
    });
  } else {
    explanationSteps.push({
      title: 'Stap 2 — Conclusie omzetgrens',
      text: `${formatEuro(revenue)} ligt onder ${formatEuro(KOR_REVENUE_LIMIT)}. Je voldoet aan de omzetvoorwaarde en kunt in principe deelnemen aan de KOR. Je hebt nog ${formatEuro(KOR_REVENUE_LIMIT - revenue)} marge voordat je de grens bereikt.`,
    });
  }

  explanationSteps.push({
    title: 'Stap 3 — Wat de KOR praktisch betekent',
    text: 'In de KOR reken je geen btw aan klanten, doe je geen kwartaal-btw-aangifte en kun je geen btw terugvragen op zakelijke kosten en investeringen. Je facturen worden eenvoudiger en je administratie is lichter.',
  });

  if (underLimit && mostlyConsumers) {
    explanationSteps.push({
      title: 'Stap 4 — Waarom dit voor jou kan passen',
      text: 'Je levert vooral aan particulieren. Zij kunnen btw niet aftrekken — voor hen maakt het weinig verschil of je 21% btw rekent. Zonder btw op je factuur word je vaak aantrekkelijker geprijsd, terwijl je administratie eenvoudiger blijft.',
    });
    considerations.push(
      'Je levert vooral aan particulieren — de KOR kan dan aantrekkelijk zijn omdat btw voor hen geen aftrekpost is.'
    );
  } else if (underLimit && !mostlyConsumers) {
    explanationSteps.push({
      title: 'Stap 4 — Let op je klanten',
      text: 'Je levert vooral aan bedrijven. Die kunnen btw meestal wel aftrekken. Voor hen is een prijs met btw vaak minder bezwarend — de KOR is dan financieel minder snel interessant.',
    });
  }

  if (underLimit && highVatOnCosts) {
    explanationSteps.push({
      title: mostlyConsumers ? 'Stap 5 — Aandachtspunt: btw op kosten' : 'Stap 4 — Aandachtspunt: btw op kosten',
      text: 'Je geeft aan relatief veel btw te betalen op inkopen en investeringen. In de KOR kun je die btw niet terugvragen. Reken uit hoeveel btw-aftrek je misloopt — soms is btw-plicht voordeliger ondanks meer administratie.',
    });
    considerations.push(
      'Je hebt relatief veel btw op zakelijke kosten — zonder btw-aftrek kan de KOR minder voordelig zijn. Vergelijk wat je aan btw zou terugkrijgen.'
    );
  } else if (underLimit && !mostlyConsumers && !highVatOnCosts) {
    considerations.push(
      'Bekijk of je klanten btw kunnen aftrekken en hoeveel btw je op inkopen betaalt. Dat bepaalt of de KOR voor jou gunstig is.'
    );
  }

  if (nearLimit) {
    explanationSteps.push({
      title: 'Let op',
      text: 'Je zit dicht op de grens van €20.000. Eén extra opdracht kan ervoor zorgen dat je de grens overschrijdt — dan moet je direct afmelden voor de KOR.',
    });
  }

  return {
    annualRevenue: revenue,
    monthlyRevenue,
    revenuePeriod,
    korLimit: KOR_REVENUE_LIMIT,
    monthlyKorLimit: KOR_REVENUE_LIMIT / MONTHS_PER_YEAR,
    status,
    headline,
    summary,
    considerations,
    explanationSteps,
    remainingUnderLimit: Math.max(0, KOR_REVENUE_LIMIT - revenue),
  };
}

export function getKorFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: KOR_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
