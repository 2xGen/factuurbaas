export const AOV_ZZP_GATE_FAQS = [
  {
    q: "Wat is een AOV voor zzp'ers?",
    a: "Een AOV is een arbeidsongeschiktheidsverzekering die onder bepaalde voorwaarden een uitkering kan geven als je door ziekte of een ongeval niet of minder kunt werken. Voor zzp'ers kan een AOV helpen om inkomen te beschermen wanneer je niet kunt werken.",
  },
  {
    q: 'Hoeveel AOV-dekking heb ik nodig?',
    a: 'Dat hangt af van het inkomen dat je wilt kunnen blijven besteden en het andere inkomen dat je in die situatie nog hebt. Een eenvoudige berekening is: gewenst inkomen minus ander inkomen. De verzekeraar bepaalt uiteindelijk welk bedrag je daadwerkelijk kunt verzekeren.',
  },
  {
    q: 'Wat is een wachttijd bij een AOV?',
    a: 'De wachttijd is de periode waarin je na arbeidsongeschiktheid zelf inkomen moet kunnen opvangen voordat een eventuele AOV-uitkering begint. Een langere wachttijd betekent dat je een grotere financiële buffer nodig hebt.',
  },
  {
    q: "Hoeveel kost een AOV voor zzp'ers?",
    a: 'De premie verschilt per persoon en verzekering. Onder andere leeftijd, beroep, verzekerd bedrag, wachttijd, eindleeftijd en gezondheid kunnen een rol spelen. Daarom geeft de FactuurBaas-calculator geen universele premie.',
  },
  {
    q: 'Kan ik mijn AOV-premie met deze calculator berekenen?',
    a: 'Nee. De calculator berekent hoeveel inkomen je volgens je eigen uitgangspunten zou willen beschermen en welk bedrag je tijdens een wachttijd moet kunnen overbruggen. De daadwerkelijke premie moet bij een verzekeraar of adviseur worden berekend.',
  },
  {
    q: 'Tot welke leeftijd loopt een AOV?',
    a: 'De eindleeftijd verschilt per verzekering. Bij het afsluiten kies je een eindleeftijd die bepaalt hoe lang de dekking kan doorlopen. De gekozen eindleeftijd kan ook invloed hebben op de premie.',
  },
  {
    q: "Is een AOV verplicht voor zzp'ers?",
    a: 'Of en wanneer een AOV verplicht is, hangt af van de actuele wet- en regelgeving. Controleer daarom altijd de huidige regels voordat je een beslissing neemt.',
  },
  {
    q: 'Is deze AOV-calculator verzekeringsadvies?',
    a: 'Nee. De calculator is bedoeld om je financiële behoefte en de gevolgen van verschillende wachttijden inzichtelijk te maken. Het is geen persoonlijk verzekeringsadvies en vervangt geen offerte of advies van een verzekeraar of adviseur.',
  },
];

export function getAovZzpGateSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: AOV_ZZP_GATE_FAQS.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };
}
