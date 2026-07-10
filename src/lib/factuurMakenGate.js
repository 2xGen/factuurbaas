export const FACTUUR_MAKEN_GATE_FAQS = [
  {
    q: 'Kan ik gratis een factuur maken zonder account?',
    a: 'Ja. Met FactuurBaas vul je je gegevens in en download je direct een PDF. Geen registratie nodig.',
  },
  {
    q: 'Wat moet er op een factuur staan?',
    a: 'Minimaal: bedrijfsgegevens, klantgegevens, factuurnummer, datum, omschrijving, bedragen met btw en betaalgegevens.',
  },
  {
    q: 'Hoe lang duurt het om een factuur te maken?',
    a: 'De meeste gebruikers hebben een factuur binnen 2 minuten klaar en downloaden direct als PDF.',
  },
];

export function getFactuurMakenGateSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FACTUUR_MAKEN_GATE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
