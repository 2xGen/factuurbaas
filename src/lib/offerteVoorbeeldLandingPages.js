const sharedRelatedLinks = [
  { label: 'Alle voorbeelden', href: '/voorbeeld' },
  { label: 'Offerte voorbeeld gids', href: '/gidsen/offerte-voorbeeld' },
  { label: 'Offerte maker', href: '/tools/offerte-maker' },
  { label: 'Gratis offerte maken', href: '/tools/offerte-maker/maken' },
];

function examplePage(slug, config) {
  return {
    slug,
    h1: config.h1,
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    intro: config.intro,
    example: config.example,
    sections: config.sections,
    faqs: config.faqs,
    relatedExamples: config.relatedExamples || [],
    relatedLinks: [...(config.relatedLinks || []), ...sharedRelatedLinks],
  };
}

export const offerteVoorbeeldPages = {
  zzp: examplePage('zzp', {
    h1: 'Offerte voorbeeld ZZP',
    metaTitle: 'ZZP offerte voorbeeld – Zo ziet een offerte eruit | FactuurBaas',
    metaDescription:
      'Bekijk een compleet zzp-offerte voorbeeld met btw en geldigheidsduur. Maak dezelfde offerte gratis online en zet hem na akkoord om naar een factuur.',
    intro:
      'Zo ziet een typische zzp-offerte eruit: jouw gegevens, die van je klant, een duidelijke omschrijving van je werk en de btw-berekening. Geen Word of Excel — gewoon een kant-en-klaar voorbeeld dat je direct kunt nabouwen.',
    example: {
      layout: 'corporate',
      quoteNumber: 'OFF-2026-014',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Studio Jansen', detail: 'KvK 12345678' },
      to: { name: 'Klant BV', detail: 'Amsterdam' },
      lineItems: [{ description: 'Advies en uitvoering', quantity: '8 uur', amount: '€ 640,00' }],
      subtotal: '€ 640,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 134,40',
      total: '€ 774,40',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede ZZP offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens',
          'Duidelijke omschrijving van werkzaamheden',
          'Prijsopbouw inclusief BTW',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je bedrijfs- en klantgegevens in.',
          'Pas de omschrijving en bedragen aan.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kan ik deze offerte omzetten naar een factuur?',
        a: 'Ja. Na akkoord van je klant zet je de offerte in FactuurBaas met één klik om naar een factuur.',
      },
      {
        q: 'Is dit een echt offerte voorbeeld?',
        a: 'Ja. Het voorbeeld laat zien hoe een correcte zzp-offerte eruitziet. De gegevens zijn fictief — jij vult je eigen gegevens in de tool in.',
      },
    ],
    relatedLinks: [{ label: 'Factuur voorbeelden', href: '/factuur-voorbeeld' }],
    relatedExamples: [
      { label: 'Bouw offerte voorbeeld', href: '/offerte-voorbeeld/bouw' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Consultant offerte voorbeeld', href: '/offerte-voorbeeld/diensten' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  diensten: examplePage('diensten', {
    h1: 'Offerte voorbeeld diensten',
    metaTitle: 'Offerte voorbeeld diensten – Voor consultants en adviseurs | FactuurBaas',
    metaDescription:
      'Bekijk een offerte voorbeeld voor dienstverleners. Maak gratis een professionele offerte en download direct als PDF.',
    intro:
      'Voor consultants, adviseurs en andere dienstverleners: een offerte met duidelijke projectomschrijving, uren of vaste prijs en btw. Zo weet je klant precies wat hij krijgt.',
    example: {
      layout: 'plain',
      quoteNumber: 'OFF-2026-028',
      date: '9 juli 2026',
      validUntil: '24 juli 2026',
      from: { name: 'Advies Partners', detail: 'KvK 87654321' },
      to: { name: 'Tech Startup BV', detail: 'Utrecht' },
      lineItems: [
        { description: 'Strategisch adviestraject', quantity: '1', amount: '€ 3.500,00' },
      ],
      subtotal: '€ 3.500,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 735,00',
      total: '€ 4.235,00',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede diensten offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens en contactpersoon',
          'Duidelijke omschrijving van het project of adviestraject',
          'Prijsopbouw inclusief BTW',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je gegevens in.',
          'Pas scope, prijs en voorwaarden aan.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wat moet erop staan bij diensten?',
        a: 'Bedrijfsgegevens, klantgegevens, omschrijving van de dienst, prijs, btw, geldigheidsduur en eventueel betalingsvoorwaarden.',
      },
    ],
    relatedLinks: [
      { label: 'Consultant factuur voorbeeld', href: '/factuur-voorbeeld/consultant' },
    ],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Bouw offerte voorbeeld', href: '/offerte-voorbeeld/bouw' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  bouw: examplePage('bouw', {
    h1: 'Offerte voorbeeld bouw',
    metaTitle: 'Offerte voorbeeld bouw – Voor aannemers en klussers | FactuurBaas',
    metaDescription:
      'Bekijk een offerte voorbeeld voor de bouw. Maak gratis een professionele offerte voor je klus of project.',
    intro:
      'Voor aannemers, schilders en klusbedrijven: een offerte met duidelijke werkzaamheden, materialen en totaalprijs inclusief btw.',
    example: {
      layout: 'classic',
      quoteNumber: 'OFF-2026-042',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Bouw & Co', detail: 'KvK 11223344' },
      to: { name: 'Particulier de Vries', detail: 'Haarlem' },
      lineItems: [
        { description: 'Schilderwerk woonkamer', quantity: '1', amount: '€ 1.850,00' },
        { description: 'Materiaal', quantity: '1', amount: '€ 320,00' },
      ],
      subtotal: '€ 2.170,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 455,70',
      total: '€ 2.625,70',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede bouw offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens en werkadres',
          'Duidelijke omschrijving van werkzaamheden en materialen',
          'Prijsopbouw inclusief BTW',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je gegevens in.',
          'Splits arbeid en materiaal voor een transparante opbouw.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [],
    relatedLinks: [{ label: 'Bouw factuur voorbeeld', href: '/factuur-voorbeeld/bouw' }],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Diensten offerte voorbeeld', href: '/offerte-voorbeeld/diensten' },
      { label: 'Horeca offerte voorbeeld', href: '/offerte-voorbeeld/horeca' },
    ],
  }),
  freelance: examplePage('freelance', {
    h1: 'Offerte voorbeeld freelance',
    metaTitle: 'Freelance offerte voorbeeld – Voor creatieven en developers | FactuurBaas',
    metaDescription:
      'Bekijk een freelance offerte voorbeeld. Maak gratis een professionele offerte en download direct als PDF.',
    intro:
      'Voor designers, developers en andere freelancers: een strakke offerte met projectomschrijving, prijs en btw. Professioneel naar je opdrachtgever, snel om te zetten naar een factuur.',
    example: {
      layout: 'modern',
      quoteNumber: 'OFF-2026-055',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Pixel Studio', detail: 'KvK 55667788' },
      to: { name: 'Marketing Agency', detail: 'Rotterdam' },
      lineItems: [{ description: 'Website redesign', quantity: '1', amount: '€ 2.400,00' }],
      subtotal: '€ 2.400,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 504,00',
      total: '€ 2.904,00',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede freelance offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens',
          'Duidelijke omschrijving van deliverables en projectscope',
          'Prijsopbouw inclusief BTW',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je gegevens in.',
          'Leg deliverables en planning vast in de omschrijving.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [],
    relatedLinks: [{ label: 'Freelance factuur voorbeeld', href: '/factuur-voorbeeld/freelance' }],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Bouw offerte voorbeeld', href: '/offerte-voorbeeld/bouw' },
      { label: 'Diensten offerte voorbeeld', href: '/offerte-voorbeeld/diensten' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  horeca: examplePage('horeca', {
    h1: 'Horeca offerte voorbeeld',
    metaTitle: 'Horeca offerte template – Catering offerte voorbeeld | FactuurBaas',
    metaDescription:
      'Bekijk een horeca offerte template en catering offerte voorbeeld. Maak gratis een professionele offerte voor catering, events of horeca-diensten.',
    intro:
      'Voor cateraars, restaurateurs en horeca-ondernemers: een offerte met menu, aantal personen, levering en btw. Ideaal als catering offerte voorbeeld voor bruiloften, bedrijfsevents of feesten.',
    example: {
      layout: 'minimalist',
      quoteNumber: 'OFF-2026-063',
      date: '9 juli 2026',
      validUntil: '24 juli 2026',
      from: { name: 'Catering De Smaak', detail: 'KvK 33445566' },
      to: { name: 'Eventbureau Luxe', detail: 'Den Haag' },
      lineItems: [
        { description: 'Walking dinner 80 personen', quantity: '1', amount: '€ 4.800,00' },
        { description: 'Bediening en materiaal', quantity: '1', amount: '€ 950,00' },
      ],
      subtotal: '€ 5.750,00',
      btwLabel: 'BTW 9%',
      btwAmount: '€ 517,50',
      total: '€ 6.267,50',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede horeca offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens, datum en locatie',
          'Duidelijke omschrijving van menu of cateringpakket',
          'Prijsopbouw inclusief BTW (9% of 21%)',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je gegevens in.',
          'Vermeld aantal personen, menu en levering.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Welk btw-tarief gebruik ik voor catering?',
        a: 'Voor veel catering en afhaalmaaltijden geldt 9% btw. Voor alcoholische dranken en feestelijke catering kan 21% gelden. Vermeld het tarief duidelijk op je offerte.',
      },
    ],
    relatedLinks: [{ label: 'Offerte templates', href: '/offerte-template' }],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Bouw offerte voorbeeld', href: '/offerte-voorbeeld/bouw' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  marketing: examplePage('marketing', {
    h1: 'Marketing offerte voorbeeld',
    metaTitle: 'Marketing offerte template – Social media offerte voorbeeld | FactuurBaas',
    metaDescription:
      'Bekijk een marketing offerte template en social media offerte voorbeeld. Maak gratis een professionele offerte voor campagnes, content of online marketing.',
    intro:
      'Voor marketingbureaus, social media managers en online specialisten: een offerte met deliverables, looptijd en vaste prijs. Gebruik dit als diensten offerte template voor campagnes, advertenties of contentproductie.',
    example: {
      layout: 'creative',
      quoteNumber: 'OFF-2026-071',
      date: '9 juli 2026',
      validUntil: '23 juli 2026',
      from: { name: 'Boost Media', detail: 'KvK 77889900' },
      to: { name: 'Retail Group BV', detail: 'Eindhoven' },
      lineItems: [
        { description: 'Social media campagne (3 maanden)', quantity: '1', amount: '€ 2.850,00' },
        { description: 'Contentcreatie (12 posts)', quantity: '1', amount: '€ 1.200,00' },
      ],
      subtotal: '€ 4.050,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 850,50',
      total: '€ 4.900,50',
    },
    sections: [
      {
        h2: 'Wat staat er in een goede marketing offerte?',
        bullets: [
          'Bedrijfsgegevens en KvK-nummer',
          'Klantgegevens',
          'Duidelijke omschrijving van campagne, kanalen en deliverables',
          'Prijsopbouw inclusief BTW',
          'Geldigheidsduur en voorwaarden',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Open de gratis offerte maker en vul je gegevens in.',
          'Beschrijf scope, looptijd en wat wel of niet inbegrepen is.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wat zet ik op een social media offerte?',
        a: 'Platformen, aantal posts of advertenties, looptijd, rapportage en prijs. Zo weet je klant precies wat hij krijgt voordat de campagne start.',
      },
    ],
    relatedLinks: [{ label: 'Diensten offerte voorbeeld', href: '/offerte-voorbeeld/diensten' }],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Diensten offerte voorbeeld', href: '/offerte-voorbeeld/diensten' },
      { label: 'Horeca offerte voorbeeld', href: '/offerte-voorbeeld/horeca' },
    ],
  }),
};

export function getOfferteVoorbeeldPage(slug) {
  return offerteVoorbeeldPages[slug] || null;
}

export function getAllOfferteVoorbeeldSlugs() {
  return Object.keys(offerteVoorbeeldPages);
}

export function getOfferteVoorbeeldHubLinks() {
  const hubTitles = {
    zzp: 'ZZP offerte',
    diensten: 'Diensten offerte',
    bouw: 'Bouw offerte',
    freelance: 'Freelance offerte',
    horeca: 'Horeca offerte',
    marketing: 'Marketing offerte',
  };

  return Object.values(offerteVoorbeeldPages).map((page) => ({
    slug: page.slug,
    label: hubTitles[page.slug] || page.h1,
    href: `/offerte-voorbeeld/${page.slug}`,
    description: {
      zzp: 'Standaard offerte voor zelfstandigen met btw.',
      diensten: 'Voor consultants, adviseurs en dienstverleners.',
      bouw: 'Voor aannemers, schilders en klusbedrijven.',
      freelance: 'Voor designers, developers en creatieven.',
      horeca: 'Catering en horeca — bruiloften, events en feesten.',
      marketing: 'Social media, campagnes en online marketing.',
    }[page.slug],
    tag: {
      zzp: 'Populair',
      diensten: 'Diensten',
      bouw: 'Bouw',
      freelance: 'Freelance',
      horeca: 'Horeca',
      marketing: 'Marketing',
    }[page.slug],
    docType: 'quote',
    example: page.example,
  }));
}

export function getOfferteTemplateHubLinks() {
  const templateLabels = {
    zzp: 'ZZP offerte template',
    diensten: 'Diensten offerte template',
    bouw: 'Bouw offerte template',
    freelance: 'Freelance offerte template',
    horeca: 'Horeca offerte template',
    marketing: 'Marketing offerte template',
  };

  const templateDescriptions = {
    zzp: 'Standaard offerte template voor zelfstandigen met btw.',
    diensten: 'Voor consultants, adviseurs en dienstverleners.',
    bouw: 'Voor aannemers, schilders en klusbedrijven.',
    freelance: 'Voor designers, developers en creatieven.',
    horeca: 'Catering offerte voorbeeld voor events en horeca.',
    marketing: 'Social media offerte voorbeeld voor campagnes en content.',
  };

  const templateTags = {
    zzp: 'Populair',
    diensten: 'Diensten',
    bouw: 'Bouw',
    freelance: 'Freelance',
    horeca: 'Horeca',
    marketing: 'Marketing',
  };

  return Object.values(offerteVoorbeeldPages).map((page) => ({
    label: templateLabels[page.slug] || page.h1,
    href: '/tools/offerte-maker',
    description: templateDescriptions[page.slug],
    tag: templateTags[page.slug],
    docType: 'quote',
    example: page.example,
  }));
}
