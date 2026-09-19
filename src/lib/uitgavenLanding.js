export const UITGAVEN_PRODUCT_PATH = '/uitgaven-bijhouden';
export const UITGAVEN_APP_PATH = '/uitgaven';
export const UITGAVEN_SIGNUP_HREF = '/login?next=/uitgaven';
export const UITGAVEN_BLOG_PATH = '/blogs/zakelijke-uitgaven-bijhouden-zzp';

export const UITGAVEN_BENEFITS = [
  {
    title: 'Uitgaven registreren',
    text: 'Bedrag, leverancier, categorie en btw — per zakelijke kost.',
  },
  {
    title: 'Terugkerende kosten',
    text: 'Abonnementen en vaste zakelijke lasten automatisch meenemen.',
  },
  {
    title: 'BTW op kosten',
    text: 'Zie hoeveel btw je op geregistreerde zakelijke uitgaven hebt betaald.',
  },
  {
    title: 'Omzet − uitgaven',
    text: 'Zie je resultaat samen met je facturen op het dashboard.',
  },
];

export const UITGAVEN_FAQS = [
  {
    question: "Hoe houd ik zakelijke uitgaven bij als zzp'er?",
    answer:
      'Registreer elke zakelijke kost met datum, bedrag, leverancier, categorie en btw. Met FactuurBaas bewaar je dit naast je facturen, zodat je omzet, uitgaven en resultaat in één overzicht ziet.',
  },
  {
    question: 'Is uitgaven bijhouden gratis bij FactuurBaas?',
    answer:
      'Ja. Met een gratis FactuurBaas-account kun je zakelijke uitgaven registreren, terugkerende kosten bijhouden en btw op kosten zien.',
  },
  {
    question: 'Kan ik terugkerende uitgaven vastleggen?',
    answer:
      'Ja. Abonnementen en andere vaste lasten kun je één keer toevoegen als terugkerende uitgave. FactuurBaas neemt ze automatisch mee in je overzicht.',
  },
  {
    question: 'Zie ik ook btw op mijn zakelijke kosten?',
    answer:
      'Ja. Per uitgave kun je btw vastleggen. Op je dashboard zie je btw op verkopen en btw op geregistreerde uitgaven naast elkaar.',
  },
  {
    question: 'Vervangt dit een volledig boekhoudprogramma?',
    answer:
      'Nee. FactuurBaas helpt je facturen, uitgaven, resultaat en btw-overzicht bij te houden. Voor een volledige boekhouding (bankkoppeling, jaarrekening, etc.) kan later een boekhoudprogramma nodig zijn.',
  },
];

export function getUitgavenFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: UITGAVEN_FAQS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function getUitgavenSoftwareSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'FactuurBaas Uitgaven',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description:
      "Gratis zakelijke uitgaven bijhouden als zzp'er: registreer kosten, btw en terugkerende lasten naast je facturen.",
    url: `https://factuurbaas.nl${UITGAVEN_PRODUCT_PATH}`,
  };
}
