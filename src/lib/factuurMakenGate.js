export const FACTUUR_MAKEN_GATE_FAQS = [
  {
    q: 'Kan ik gratis een factuur maken zonder account?',
    a: 'Ja. Met FactuurBaas kun je gratis een factuur maken zonder account. Je vult de factuur in en kunt deze direct als PDF downloaden.',
  },
  {
    q: 'Hoe maak ik online een factuur?',
    a: 'Vul eerst je eigen bedrijfsgegevens en de gegevens van je klant in. Voeg vervolgens de producten of diensten toe, controleer de bedragen en btw en download de factuur als PDF. Met FactuurBaas kun je dit volledig online doen.',
  },
  {
    q: 'Kan ik een factuur maken als zzp\'er?',
    a: 'Ja. FactuurBaas is geschikt voor zzp\'ers, freelancers en kleine ondernemers. Je kunt er zelfstandig professionele facturen mee maken en als PDF downloaden.',
  },
  {
    q: 'Wat moet er op een factuur staan?',
    a: 'Op een factuur moeten verschillende gegevens staan, zoals de gegevens van jou en je klant, een uniek factuurnummer, factuurdatum, omschrijving van de geleverde producten of diensten, bedragen en btw-gegevens.',
  },
  {
    q: 'Kan ik een factuur als PDF downloaden?',
    a: 'Ja. Nadat je de factuur hebt ingevuld en gecontroleerd, kun je deze direct als PDF downloaden.',
  },
  {
    q: 'Kan ik een factuur maken zonder boekhoudprogramma?',
    a: 'Ja. Je hebt geen volledig boekhoudprogramma nodig om een losse factuur te maken. Met een online factuurmaker kun je direct een factuur opstellen en downloaden.',
  },
  {
    q: 'Kan ik meerdere facturen maken?',
    a: 'Ja. Je kunt meerdere facturen maken. Met een gratis account kun je je facturen bovendien bewaren en beheren.',
  },
  {
    q: 'Kan ik een factuur maken in Word of Excel?',
    a: 'Ja. Word en Excel kunnen worden gebruikt om zelf een factuur te maken. Een online factuurmaker kan echter tijd besparen doordat de opmaak en berekeningen al voor je worden geregeld.',
  },
  {
    q: 'Hoe snel kan ik een factuur maken?',
    a: 'Een eenvoudige factuur kan binnen enkele minuten klaar zijn. Met FactuurBaas hoef je alleen je gegevens en factuurregels in te vullen en de factuur te controleren voordat je hem downloadt.',
  },
  {
    q: 'Kan ik gratis een factuur maken als ik net ben gestart?',
    a: 'Ja. Ook als startende zzp\'er kun je FactuurBaas gebruiken om gratis een professionele factuur te maken.',
  },
  {
    q: 'Kan ik ook een offerte maken?',
    a: 'Ja. Naast facturen kun je met FactuurBaas ook offertes maken.',
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
