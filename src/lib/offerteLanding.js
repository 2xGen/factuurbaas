export const OFFERTE_FAQS = [
  {
    q: 'Kan ik gratis een offerte maken?',
    a: 'Ja. Met de gratis offerte maker van FactuurBaas kun je online een offerte maken en deze direct als PDF downloaden. Je hebt hiervoor geen account nodig.',
  },
  {
    q: 'Hoe maak ik online een offerte?',
    a: 'Vul je bedrijfsgegevens en klantgegevens in, voeg je werkzaamheden en prijzen toe en vermeld de btw en voorwaarden. Controleer de gegevens en download daarna je offerte als PDF.',
  },
  {
    q: 'Is een offerte verplicht?',
    a: 'Een offerte is niet in alle situaties verplicht. Toch is het vaak verstandig om vooraf duidelijke afspraken over de werkzaamheden, prijs en voorwaarden vast te leggen.',
  },
  {
    q: 'Wat moet er op een offerte staan?',
    a: 'Vermeld onder andere je bedrijfsgegevens, klantgegevens, offertenummer, datum, omschrijving van de werkzaamheden, prijzen, btw en geldigheidsduur. Afhankelijk van de opdracht kunnen aanvullende voorwaarden belangrijk zijn.',
  },
  {
    q: 'Wat is het verschil tussen een offerte en een factuur?',
    a: 'Een offerte is een voorstel voor een opdracht en prijs. Een factuur is een verzoek om betaling voor geleverde producten of diensten.',
  },
  {
    q: 'Hoe lang is een offerte geldig?',
    a: 'Je kunt zelf een geldigheidsduur voor je offerte bepalen, bijvoorbeeld 14 of 30 dagen. Zet deze termijn duidelijk op de offerte zodat je klant weet hoe lang je aanbod geldt.',
  },
  {
    q: 'Kan ik een offerte als PDF versturen?',
    a: 'Ja. Een PDF is een praktische manier om een offerte digitaal naar je klant te sturen. Met FactuurBaas kun je je offerte direct als PDF downloaden.',
  },
  {
    q: "Kan ik als zzp'er een offerte maken?",
    a: "Ja. Als zzp'er kun je zelf een offerte maken voor een nieuwe opdracht. Vermeld duidelijk wat je gaat leveren, hoeveel het kost en welke voorwaarden van toepassing zijn.",
  },
];

export const OFFERTE_RELATED = [
  {
    href: '/blogs/factuur-maken-zzp',
    title: "Factuur maken als zzp'er",
  },
  {
    href: '/blogs/factureren-zonder-account',
    title: 'Gratis factuur maken zonder account',
  },
  {
    href: '/blogs/verschil-factuur-offerte',
    title: 'Verschil tussen offerte en factuur',
  },
  {
    href: '/blogs/btw-factuur-zzp',
    title: 'Btw op je factuur',
  },
  {
    href: '/blogs/sneller-betalen-factuur',
    title: 'Factuur sneller betaald krijgen',
  },
  {
    href: '/factuur-template/zzp',
    title: "Factuur template voor zzp'ers",
  },
];

export const OFFERTE_METHOD_COMPARISON = {
  headers: ['Methode', 'Voordeel', 'Nadeel'],
  rows: [
    ['Word', 'Veel vrijheid in opmaak', 'Bedragen en layout moet je zelf beheren'],
    ['Excel', 'Handig voor berekeningen', 'Minder gericht op professionele documenten'],
    ['Online offerte maker', 'Snel, overzichtelijk en direct als PDF', 'Je gebruikt een online tool'],
  ],
};

export const OFFERTE_COMPARISON = {
  headers: ['', 'Offerte', 'Factuur'],
  rows: [
    ['Moment', 'Voorafgaand aan de opdracht', 'Na levering of volgens afspraak'],
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
