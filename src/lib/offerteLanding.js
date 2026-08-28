export const OFFERTE_FAQS = [
  {
    q: 'Kan ik gratis een offerte maken?',
    a: 'Ja. Met de gratis offerte maker van FactuurBaas maak je online een professionele offerte zonder account en download je deze direct als PDF.',
  },
  {
    q: 'Hoe maak ik online een offerte?',
    a: 'Vul je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in via de offerte maker. Controleer de offerte en download direct een PDF.',
  },
  {
    q: 'Is een offerte verplicht?',
    a: 'Nee, een offerte is meestal niet verplicht. Voor veel opdrachten is het wel verstandig om vooraf duidelijke afspraken te maken.',
  },
  {
    q: 'Wat moet er op een offerte staan?',
    a: 'Een offerte bevat minimaal: jouw bedrijfsgegevens, klantgegevens, omschrijving van de werkzaamheden, prijs, BTW, datum en geldigheidsduur.',
  },
  {
    q: 'Wat is het verschil tussen een offerte en factuur?',
    a: 'Een offerte stuur je voordat de opdracht begint. Een factuur stuur je nadat je werkzaamheden hebt uitgevoerd of een betaling wilt ontvangen.',
  },
];

export const OFFERTE_RELATED = [
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
  {
    href: '/blogs/verschil-factuur-offerte',
    title: 'Verschil offerte en factuur',
    description: 'Wanneer stuur je een offerte en wanneer een factuur? Alles op een rij.',
  },
  {
    href: '/blogs/btw-factuur-zzp',
    title: 'Btw op je factuur',
    description: 'Leer wanneer je 21%, 9% of 0% btw gebruikt op je factuur.',
  },
  {
    href: '/blogs/sneller-betalen-factuur',
    title: 'Factuur sneller betaald krijgen',
    description: 'Praktische tips om sneller betaald te worden door je klanten.',
  },
  {
    href: '/factuur-template/zzp',
    title: 'Template factuur zzp',
    description: 'Gebruik een professionele zzp-factuur template en download als PDF.',
  },
];

export const OFFERTE_METHOD_COMPARISON = {
  headers: ['Methode', 'Voordeel', 'Nadeel'],
  rows: [
    ['Word', 'Flexibel ontwerp', 'Bedragen zelf berekenen en opmaken'],
    ['Excel', 'Handig voor berekeningen', 'Minder geschikt voor een professioneel document'],
    ['Online offerte maker', 'Snel en automatisch opgemaakt', 'Afhankelijk van de tool'],
  ],
};

export const OFFERTE_COMPARISON = {
  headers: ['', 'Offerte', 'Factuur'],
  rows: [
    ['Moment', 'Voorafgaand aan opdracht', 'Na levering opdracht'],
    ['Doel', 'Voorstel aan klant', 'Betalingsverzoek'],
    ['Betaling', 'Nog geen betaling', 'Klant moet betalen'],
  ],
};

export function getOfferteFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: OFFERTE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
