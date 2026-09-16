export const HYPOTHEEK_ZZP_GATE_FAQS = [
  {
    q: 'Kan ik een hypotheek krijgen als zzp\'er?',
    a: 'Ja. Zzp\'ers kunnen een hypotheek aanvragen. Je inkomen uit onderneming moet wel op een manier worden vastgesteld die binnen de voorwaarden van de geldverstrekker past.',
  },
  {
    q: 'Hoeveel hypotheek kan ik krijgen als zzp\'er?',
    a: 'Dat hangt onder andere af van je toetsinkomen, financiële verplichtingen, rente en de waarde van de woning. Gebruik onze calculator voor een eerste indicatie.',
  },
  {
    q: 'Hoe lang moet ik zzp\'er zijn voor een hypotheek?',
    a: 'Er is geen universele termijn die voor iedere hypotheek geldt. Voor NHG geldt dat een ondernemer langer dan 12 maanden zelfstandig moet zijn om gebruik te kunnen maken van de Inkomensverklaring Ondernemer.',
  },
  {
    q: 'Kan een startende zzp\'er een hypotheek krijgen?',
    a: 'Dat kan in bepaalde situaties. De mogelijkheden hangen onder andere af van de duur van je onderneming, je beschikbare financiële gegevens en de voorwaarden van de geldverstrekker.',
  },
  {
    q: 'Kan ik een hypotheek krijgen zonder drie jaar cijfers?',
    a: 'Dat kan afhankelijk zijn van je situatie en de hypotheekvoorwaarden. Het ontbreken van drie volledige boekjaren betekent niet automatisch dat je geen hypotheek kunt krijgen.',
  },
  {
    q: 'Kijkt de bank naar omzet of winst?',
    a: 'Omzet en winst zijn niet hetzelfde. Bij een hypotheekaanvraag wordt gekeken naar het inkomen dat volgens de geldende regels uit je onderneming kan worden vastgesteld.',
  },
  {
    q: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
    a: 'Ja. Een eenmanszaak sluit een hypotheek niet uit. Je inkomen uit de onderneming moet wel worden vastgesteld en beoordeeld.',
  },
  {
    q: 'Welke jaarcijfers heb ik nodig voor een hypotheek?',
    a: 'Welke financiële gegevens nodig zijn, hangt af van je situatie en de hypotheekverstrekker. Ondernemers kunnen onder andere financiële gegevens van hun onderneming moeten aanleveren.',
  },
  {
    q: 'Kan ik mijn maximale hypotheek als zzp\'er online berekenen?',
    a: 'Ja. Met de hypotheekcalculator van FactuurBaas kun je online een eerste indicatie van je maximale hypotheek berekenen.',
  },
  {
    q: 'Is een hypotheekcalculator voor zzp\'ers betrouwbaar?',
    a: 'Een calculator kan een nuttige indicatie geven, maar de uitkomst is geen garantie voor het bedrag dat je uiteindelijk kunt lenen. De definitieve beoordeling wordt gemaakt door de geldverstrekker op basis van je volledige situatie.',
  },
  {
    q: 'Heeft mijn studieschuld invloed op mijn maximale hypotheek?',
    a: 'Een studieschuld kan invloed hebben op je maximale hypotheek. De manier waarop dit wordt meegenomen hangt af van de geldende regels en je persoonlijke situatie.',
  },
];

export function getHypotheekZzpGateSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: HYPOTHEEK_ZZP_GATE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
