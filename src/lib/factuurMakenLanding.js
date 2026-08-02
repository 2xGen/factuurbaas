/**
 * SEO content for /factuur-maken and related intent pages.
 */

export const FACTUUR_MAKEN_FAQS = [
  {
    q: 'Kan ik gratis een factuur maken zonder account?',
    a: 'Ja. Met FactuurBaas vul je je gegevens in en download je direct een PDF. Geen registratie nodig. Wil je facturen opslaan, status bijhouden of klanten hergebruiken? Dan kun je gratis een account aanmaken.',
  },
  {
    q: 'Wat moet er op een factuur staan in Nederland?',
    a: 'Minimaal: jouw bedrijfsgegevens (naam, adres, KvK, btw-nummer indien van toepassing), klantgegevens, uniek factuurnummer, factuurdatum, omschrijving van werk of producten, bedragen excl. en incl. btw (of vermelding bij vrijstelling/KOR), en betaalgegevens met vervaldatum.',
  },
  {
    q: 'Hoe lang duurt het om een factuur te maken?',
    a: 'De meeste gebruikers hebben een professionele factuur binnen ongeveer 2 minuten klaar en downloaden die direct als PDF.',
  },
  {
    q: 'Kan ik een factuur maken als zzp’er zonder KvK?',
    a: 'Als je moet inschrijven bij de KvK, hoort je KvK-nummer op de factuur. In specifieke situaties (bijv. particulier of nog niet inschrijfplichtig) kun je anders factureren — controleer altijd de actuele regels. In FactuurBaas kun je velden weglaten die niet van toepassing zijn.',
  },
  {
    q: 'Maakt FactuurBaas ook facturen zonder btw?',
    a: 'Ja. Je kunt 0% btw, vrijstelling of KOR-situaties aangeven. Gebruik desgewenst het template “factuur zonder btw” als startpunt.',
  },
];

export const FACTUUR_TYPES = [
  {
    title: 'Factuur maken ZZP',
    description:
      'Standaard factuur voor zelfstandigen met btw, KvK en duidelijke betaaltermijn.',
    href: '/factuur-maken/zzp',
    related: '/factuur-template/zzp',
  },
  {
    title: 'Factuur zonder KvK',
    description:
      'Voor situaties waarin een KvK-nummer (nog) niet van toepassing is — vul alleen wat nodig is.',
    href: '/factuur-maken/zonder-kvk',
    related: '/create-invoice',
  },
  {
    title: 'Factuur particulier',
    description:
      'Factureer aan een particuliere klant met naam, adres en duidelijke omschrijving.',
    href: '/factuur-maken/particulier',
    related: '/create-invoice',
  },
  {
    title: 'Factuur zonder btw',
    description: 'Geschikt bij KOR of btw-vrijstelling — zonder verwarrende btw-regels.',
    href: '/factuur-template/zonder-btw',
    related: '/voorbeeld',
  },
  {
    title: 'Urenfactuur',
    description: 'Factureer gewerkte uren met uurtarief — handig voor freelancers en consultants.',
    href: '/factuur-template/uren',
    related: '/tools/uurtarief-calculator',
  },
  {
    title: 'Bouwfactuur',
    description: 'Voor aannemers, schilders en klusbedrijven met duidelijke specificaties.',
    href: '/factuur-template/bouw',
    related: '/factuur-voorbeeld',
  },
];

export const REQUIRED_FIELDS = [
  'Jouw naam of bedrijfsnaam en adres',
  'KvK-nummer (als je bent ingeschreven)',
  'Btw-nummer (als je btw-plichtig bent)',
  'Gegevens van de klant',
  'Uniek, opeenvolgend factuurnummer',
  'Factuurdatum en eventueel leveringsdatum',
  'Omschrijving van producten of diensten',
  'Bedragen, btw-tarief en totaal',
  'Betaalgegevens en betaaltermijn / vervaldatum',
];

export const STEPS = [
  {
    title: 'Vul je gegevens in',
    text: 'Bedrijf, klant, factuurnummer en regels. Logo en IBAN optioneel.',
  },
  {
    title: 'Kies een layout',
    text: 'Een strakke PDF die er professioneel uitziet — zonder Word of Excel.',
  },
  {
    title: 'Download en verstuur',
    text: 'Direct als PDF. Met account bewaar je facturen en volg je status en btw.',
  },
];

export const SLUG_PAGES = {
  zzp: {
    title: 'Factuur maken ZZP',
    h1: 'Factuur maken als zzp’er',
    description:
      'Maak als zzp’er snel een correcte, professionele factuur. Gratis, zonder account, direct als PDF — met btw, KvK en betaaltermijn.',
    intro:
      'Als zzp’er wil je snel factureren zonder boekhoudpakket. FactuurBaas helpt je een nette PDF te maken die voldoet aan de basis: jouw gegevens, klant, nummer, bedragen en btw.',
    bullets: [
      'Automatische btw-berekening (21%, 9%, 0% of vrijstelling)',
      'Ruimte voor KvK, btw-nummer en IBAN',
      'Layouts die er zakelijk uitzien',
      'Optioneel: opslaan in je account voor overzicht',
    ],
    relatedLinks: [
      { label: 'ZZP factuur template', href: '/factuur-template/zzp' },
      { label: 'Hoe maak je een factuur als zzp’er?', href: '/blogs/factuur-maken-zzp' },
      { label: 'Gratis factuur voor zzp’ers', href: '/blogs/gratis-factuur-zzp' },
    ],
  },
  'zonder-kvk': {
    title: 'Factuur maken zonder KvK',
    h1: 'Factuur maken zonder KvK-nummer',
    description:
      'Maak een factuur zonder KvK-veld wanneer dat (nog) niet van toepassing is. Gratis online, direct PDF downloaden.',
    intro:
      'Soms staat er (nog) geen KvK-nummer op je factuur — bijvoorbeeld als je nog moet inschrijven of in een situatie zit waarin inschrijving niet geldt. Vul in FactuurBaas alleen de velden die voor jou kloppen. Check altijd of jij wél inschrijfplichtig bent.',
    bullets: [
      'Velden die niet van toepassing zijn kun je leeg laten',
      'Nog steeds een duidelijke factuurstructuur en PDF',
      'Geschikt om later KvK toe te voegen als je inschrijft',
      'Koppel desgewenst een gratis account voor hergebruik van gegevens',
    ],
    relatedLinks: [
      { label: 'Factuur maken ZZP', href: '/factuur-maken/zzp' },
      { label: 'Start met factureren', href: '/blogs/factureren-startende-zzper' },
      { label: 'Gratis factuurtool', href: '/create-invoice' },
    ],
  },
  particulier: {
    title: 'Factuur maken particulier',
    h1: 'Factuur maken voor een particuliere klant',
    description:
      'Factureer aan een particulier: naam, adres, omschrijving en bedrag. Gratis online factuur maken en PDF downloaden.',
    intro:
      'Factureer je een particuliere klant (geen bedrijf)? Zet dan naam en adres van de persoon duidelijk op de factuur, met een heldere omschrijving van je werk en het te betalen bedrag inclusief of exclusief btw — afhankelijk van jouw situatie.',
    bullets: [
      'Ontvanger: naam + adres van de particulier',
      'Duidelijke omschrijving voorkomt discussie over de opdracht',
      'Korte betaaltermijn helpt sneller betaald te krijgen',
      'PDF versturen per mail — professioneel en vastgelegd',
    ],
    relatedLinks: [
      { label: 'Factuur maken ZZP', href: '/factuur-maken/zzp' },
      { label: 'Sneller betaald krijgen', href: '/blogs/sneller-betalen-factuur' },
      { label: 'Bekijk voorbeelden', href: '/voorbeeld' },
    ],
  },
};

export function getFactuurMakenFaqSchema(faqs = FACTUUR_MAKEN_FAQS) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
