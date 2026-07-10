const sharedRelatedLinks = [
  { label: 'Alle voorbeelden', href: '/voorbeeld' },
  { label: 'Factuur templates', href: '/factuur-template' },
  { label: 'Gratis factuur maken', href: '/create-invoice' },
  { label: 'Offerte voorbeelden', href: '/offerte-voorbeeld' },
];

function examplePage(slug, config) {
  return {
    slug,
    h1: config.h1,
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    intro: config.intro,
    example: config.example,
    templateHref: config.templateHref,
    sections: config.sections,
    faqs: config.faqs,
    relatedLinks: [...(config.relatedLinks || []), ...sharedRelatedLinks],
  };
}

export const voorbeeldPages = {
  zzp: examplePage('zzp', {
    h1: 'Factuur voorbeeld ZZP',
    metaTitle: 'ZZP factuur voorbeeld – Zo ziet een factuur eruit | FactuurBaas',
    metaDescription:
      'Bekijk een compleet zzp-factuur voorbeeld met btw, uren en betalingstermijn. Maak dezelfde factuur gratis online in 2 minuten.',
    intro:
      'Zo ziet een typische zzp-factuur eruit: jouw gegevens, die van je klant, een duidelijke omschrijving van je werk en de btw-berekening. Geen Word of Excel — gewoon een kant-en-klaar voorbeeld dat je direct kunt nabouwen.',
    templateHref: '/factuur-template/zzp',
    example: {
      layout: 'corporate',
      invoiceNumber: '#2026-014',
      date: '9 juli 2026',
      paymentTerm: '14 dagen',
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
        h2: 'Wat valt op in dit zzp-voorbeeld?',
        bullets: [
          'Duidelijke omschrijving van geleverd werk (uren of project)',
          'Factuurnummer en datum bovenaan',
          'Btw 21% apart vermeld met subtotaal en totaal',
          'Betalingstermijn van 14 dagen',
        ],
      },
      {
        h2: 'Welke gegevens staan erop?',
        paragraphs: [
          'Dit voorbeeld bevat alle gegevens die op een Nederlandse zzp-factuur horen: bedrijfsnaam, KvK, klantgegevens, omschrijving, bedragen en btw. In de tool vul je je eigen gegevens in — de structuur blijft hetzelfde.',
        ],
      },
      {
        h2: 'Maak je eigen versie in 2 minuten',
        bullets: [
          'Klik op "Maak dezelfde factuur" en vul je bedrijfs- en klantgegevens in.',
          'Pas de omschrijving en bedragen aan.',
          'Download direct als PDF — gratis, zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is dit een echt factuur voorbeeld?',
        a: 'Ja. Het voorbeeld laat zien hoe een correcte zzp-factuur eruitziet. De gegevens zijn fictief — jij vult je eigen gegevens in de tool in.',
      },
      {
        q: 'Kan ik dit voorbeeld als PDF downloaden?',
        a: 'Open de gratis factuurtool, vul je gegevens in en download je eigen PDF. Het voorbeeld laat zien wat je krijgt.',
      },
      {
        q: 'Wat is het verschil met een template?',
        a: 'Een voorbeeld laat zien hoe de factuur eruitziet als hij ingevuld is. Een template is de lege structuur die je zelf invult. Beide leiden naar dezelfde gratis tool.',
      },
    ],
    relatedLinks: [
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      { label: 'Uren voorbeeld', href: '/factuur-voorbeeld/uren' },
      { label: 'Zonder btw voorbeeld', href: '/factuur-voorbeeld/zonder-btw' },
    ],
  }),

  bouw: examplePage('bouw', {
    h1: 'Factuur voorbeeld bouw',
    metaTitle: 'Bouw factuur voorbeeld – Aannemer & schilder | FactuurBaas',
    metaDescription:
      'Bekijk een factuur voorbeeld voor bouw, schilders en klusbedrijven. Materiaal en arbeid overzichtelijk op één factuur.',
    intro:
      'In de bouw factureer je vaak materiaal en arbeid op één factuur. Dit voorbeeld laat zien hoe je werkzaamheden en materiaalkosten overzichtelijk presenteert — professioneel en duidelijk voor je opdrachtgever.',
    templateHref: '/factuur-template/bouw',
    example: {
      layout: 'plain',
      invoiceNumber: '#2026-032',
      date: '5 juli 2026',
      paymentTerm: '30 dagen',
      from: { name: 'Klusbedrijf De Vries', detail: 'KvK 87654321' },
      to: { name: 'Particulier Jansen', detail: 'Utrecht' },
      lineItems: [
        { description: 'Schilderwerk woonkamer', quantity: '1', amount: '€ 1.250,00' },
        { description: 'Materiaal (verf, lak)', quantity: '1', amount: '€ 185,00' },
      ],
      subtotal: '€ 1.435,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 301,35',
      total: '€ 1.736,35',
    },
    sections: [
      {
        h2: 'Waarom dit voorbeeld werkt voor bouwbedrijven',
        bullets: [
          'Werkzaamheden en materiaal als aparte regels',
          'Duidelijke omschrijving per post',
          'Btw apart berekend over het totaal',
          'Betalingstermijn van 30 dagen (gangbaar in de bouw)',
        ],
      },
      {
        h2: 'Materiaal en arbeid op één factuur',
        paragraphs: [
          'Veel klusbedrijven combineren arbeidsuren en materiaalkosten. Door elke post apart te vermelden, weet je klant precies waarvoor hij betaalt — en voorkom je discussies achteraf.',
        ],
      },
      {
        h2: 'Maak je eigen bouwfactuur',
        bullets: [
          'Vul je bedrijfsgegevens en die van je klant in.',
          'Voeg regels toe voor werk en materiaal.',
          'Download als PDF en stuur naar je opdrachtgever.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kan ik meerwerk op dezelfde factuur zetten?',
        a: 'Ja. Voeg een extra regel toe met omschrijving en bedrag. Houd het overzichtelijk met korte, duidelijke omschrijvingen.',
      },
      {
        q: 'Welk btw-tarief geldt voor schilderwerk?',
        a: 'Meestal 21%, maar voor bepaalde renovatiewerkzaamheden kan 9% gelden. Check altijd de actuele regels bij de Belastingdienst.',
      },
      {
        q: 'Is dit geschikt voor aannemers?',
        a: 'Ja. Het voorbeeld werkt voor schilders, aannemers, loodgieters en andere klusbedrijven.',
      },
    ],
    relatedLinks: [
      { label: 'Bouw template', href: '/factuur-template/bouw' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
      { label: 'Uren voorbeeld', href: '/factuur-voorbeeld/uren' },
    ],
  }),

  uren: examplePage('uren', {
    h1: 'Factuur voorbeeld uren',
    metaTitle: 'Uren factuur voorbeeld – Uurtarief factureren | FactuurBaas',
    metaDescription:
      'Bekijk een urenfactuur voorbeeld met uurtarief, gewerkte uren en automatische btw-berekening. Gratis nabouwen in 2 minuten.',
    intro:
      'Factureer je op uurbasis? Dit voorbeeld laat zien hoe je gewerkte uren, uurtarief en totaalbedrag overzichtelijk op één factuur zet — per week, project of periode.',
    templateHref: '/factuur-template/uren',
    example: {
      layout: 'minimalist',
      invoiceNumber: '#2026-078',
      date: '8 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Freelance Rutte', detail: 'KvK 11223344' },
      to: { name: 'Startup NL', detail: 'Rotterdam' },
      lineItems: [
        { description: 'Week 12 — development', quantity: '24 uur', amount: '€ 1.920,00' },
        { description: 'Week 13 — development', quantity: '16 uur', amount: '€ 1.280,00' },
      ],
      subtotal: '€ 3.200,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 672,00',
      total: '€ 3.872,00',
    },
    sections: [
      {
        h2: 'Zo factureer je uren',
        bullets: [
          'Per regel: periode, aantal uren en bedrag',
          'Uurtarief × uren = regelbedrag (automatisch in de tool)',
          'Btw berekend over het subtotaal',
          'Geschikt voor wekelijkse of projectmatige facturatie',
        ],
      },
      {
        h2: 'Waarom uren apart vermelden?',
        paragraphs: [
          'Je klant wil weten waarvoor hij betaalt. Door uren per periode of taak te groeperen, is de factuur transparant — zonder dat je een heel Excel-bestand hoeft bij te houden.',
        ],
      },
      {
        h2: 'Zelf een urenfactuur maken',
        bullets: [
          'Kies "uurtarief" in de tool en vul je tarief in.',
          'Voeg urenregels toe per dag, week of project.',
          'Download je factuur als PDF.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Moet ik elke dag apart factureren?',
        a: 'Nee. Bundel uren per week of project — zolang de omschrijving maar duidelijk is.',
      },
      {
        q: 'Kan ik verschillende uurtarieven gebruiken?',
        a: 'Ja. Voeg per taak een aparte regel toe met het bijbehorende tarief.',
      },
      {
        q: 'Wordt het totaal automatisch berekend?',
        a: 'Ja. In de FactuurBaas-tool worden uren × tarief en btw automatisch berekend.',
      },
    ],
    relatedLinks: [
      { label: 'Uren template', href: '/factuur-template/uren' },
      { label: 'Freelance voorbeeld', href: '/factuur-voorbeeld/freelance' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
    ],
  }),

  consultant: examplePage('consultant', {
    h1: 'Factuur voorbeeld consultant',
    metaTitle: 'Consultant factuur voorbeeld – Professioneel | FactuurBaas',
    metaDescription:
      'Bekijk een professioneel consultant factuur voorbeeld. Geschikt voor adviseurs, coaches en consultants. Gratis nabouwen.',
    intro:
      'Consultants en adviseurs hebben een strakke factuur nodig die vertrouwen uitstraalt. Dit voorbeeld toont een projectmatige factuur met een vaste prijs — professioneel en overzichtelijk.',
    templateHref: '/factuur-template/consultant',
    example: {
      layout: 'corporate',
      invoiceNumber: '#2026-051',
      date: '3 juli 2026',
      paymentTerm: '30 dagen',
      from: { name: 'Adviseur Partners', detail: 'KvK 55667788' },
      to: { name: 'TechCorp BV', detail: 'Den Haag' },
      lineItems: [
        { description: 'Strategisch adviestraject Q2', quantity: '1', amount: '€ 4.500,00' },
      ],
      subtotal: '€ 4.500,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 945,00',
      total: '€ 5.445,00',
    },
    sections: [
      {
        h2: 'Wat maakt dit een consultant-factuur?',
        bullets: [
          'Zakelijke, strakke layout',
          'Projectmatige omschrijving met vaste prijs',
          'Btw apart vermeld',
          'Betalingstermijn van 30 dagen',
        ],
      },
      {
        h2: 'Per uur of per project?',
        paragraphs: [
          'Dit voorbeeld toont projectmatige facturatie. Factureer je op uurbasis? Bekijk dan het uren-voorbeeld. Beide modellen kun je maken in dezelfde gratis tool.',
        ],
      },
      {
        h2: 'Maak je eigen consultant-factuur',
        bullets: [
          'Upload je logo voor een professionele uitstraling.',
          'Kies een zakelijke layout.',
          'Download en mail direct naar je klant.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kan ik ook per uur factureren als consultant?',
        a: 'Ja. Kies in de tool voor uurtarief en voeg je gewerkte uren toe. Bekijk het uren-voorbeeld voor inspiratie.',
      },
      {
        q: 'Hoe factureer ik aan buitenlandse klanten?',
        a: 'Bij diensten aan buitenlandse bedrijven kan btw verlegd worden. Vermeld dit expliciet op je factuur.',
      },
      {
        q: 'Welke layout past bij een consultant?',
        a: 'Kies een zakelijke layout zoals in dit voorbeeld. Je kunt ook minimalistisch of modern kiezen.',
      },
    ],
    relatedLinks: [
      { label: 'Consultant template', href: '/factuur-template/consultant' },
      { label: 'Uren voorbeeld', href: '/factuur-voorbeeld/uren' },
      { label: 'Freelance voorbeeld', href: '/factuur-voorbeeld/freelance' },
    ],
  }),

  freelance: examplePage('freelance', {
    h1: 'Factuur voorbeeld freelance',
    metaTitle: 'Freelance factuur voorbeeld – Designer & developer | FactuurBaas',
    metaDescription:
      'Bekijk een freelance factuur voorbeeld voor designers, developers en creatieven. Modern design, direct nabouwen.',
    intro:
      'Als freelancer wil je een factuur die er net zo goed uitziet als je werk. Dit voorbeeld toont een projectfactuur met een moderne layout — ideaal voor designers, developers en andere creatieven.',
    templateHref: '/factuur-template/freelance',
    example: {
      layout: 'modern',
      invoiceNumber: '#2026-099',
      date: '7 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Studio Pixel', detail: 'KvK 99887766' },
      to: { name: 'Brand Agency', detail: 'Amsterdam' },
      lineItems: [
        { description: 'Logo & huisstijl pakket', quantity: '1', amount: '€ 2.200,00' },
      ],
      subtotal: '€ 2.200,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 462,00',
      total: '€ 2.662,00',
    },
    sections: [
      {
        h2: 'Freelance factuur in één oogopslag',
        bullets: [
          'Moderne, donkere layout die opvalt',
          'Projectnaam en vast bedrag',
          'Btw en totaal overzichtelijk',
          'Klaar om te mailen als PDF',
        ],
      },
      {
        h2: 'Per project of per uur?',
        paragraphs: [
          'Dit voorbeeld toont een vaste projectprijs. Werk je op uurbasis? Dat kan ook — kies dan uurtarief in de tool en voeg je uren toe.',
        ],
      },
      {
        h2: 'Zo maak je je eigen freelance-factuur',
        bullets: [
          'Kies een layout die bij je merk past.',
          'Upload je logo.',
          'Download als PDF in minder dan 2 minuten.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Welke layout past bij creatieve freelancers?',
        a: 'Kies wat bij je merk past — van minimalistisch tot modern zoals in dit voorbeeld. Je kunt je logo toevoegen.',
      },
      {
        q: 'Kan ik meerdere projecten op één factuur zetten?',
        a: 'Ja. Voeg per project een aparte regel toe met omschrijving en bedrag.',
      },
      {
        q: 'Is dit voorbeeld gratis te gebruiken?',
        a: 'Ja. FactuurBaas is gratis. Vul je eigen gegevens in en download je factuur als PDF.',
      },
    ],
    relatedLinks: [
      { label: 'Freelance template', href: '/factuur-template/freelance' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
      { label: 'Uren voorbeeld', href: '/factuur-voorbeeld/uren' },
    ],
  }),

  'zonder-btw': examplePage('zonder-btw', {
    h1: 'Factuur voorbeeld zonder btw',
    metaTitle: 'Factuur voorbeeld zonder btw – KOR & vrijstelling | FactuurBaas',
    metaDescription:
      'Bekijk een factuur voorbeeld zonder btw voor KOR en btw-vrijgestelde ondernemers. Correcte wettelijke vermelding inbegrepen.',
    intro:
      'Gebruik je de KOR of ben je btw-vrijgesteld? Dan ziet je factuur er anders uit: geen btw-regel, wel de juiste wettelijke vermelding. Dit voorbeeld laat zien hoe dat er professioneel uitziet.',
    templateHref: '/factuur-template/zonder-btw',
    example: {
      layout: 'plain',
      noBtw: true,
      invoiceNumber: '#2026-003',
      date: '9 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Creatief Atelier', detail: 'KvK 44332211' },
      to: { name: 'Particulier De Boer', detail: 'Groningen' },
      lineItems: [
        { description: 'Workshop fotografie', quantity: '1', amount: '€ 350,00' },
      ],
      total: '€ 350,00',
    },
    sections: [
      {
        h2: 'Wat is anders aan een factuur zonder btw?',
        bullets: [
          'Geen apart btw-bedrag op de factuur',
          'Wettelijke vermelding van btw-vrijstelling',
          'Subtotaal is gelijk aan het totaalbedrag',
          'Alle andere verplichte gegevens blijven staan',
        ],
      },
      {
        h2: 'KOR en btw-vrijstelling',
        paragraphs: [
          'Als je de kleineondernemersregeling (KOR) gebruikt, hoef je geen btw te berekenen. Je moet wel vermelden dat je btw-vrijgesteld bent — zoals in dit voorbeeld.',
        ],
      },
      {
        h2: 'Maak je eigen factuur zonder btw',
        bullets: [
          'Kies het juiste btw-tarief in de tool (vrijgesteld/KOR).',
          'Vul je gegevens en die van je klant in.',
          'Download als PDF — gratis en zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wanneer mag ik geen btw op mijn factuur zetten?',
        a: 'Als je de KOR gebruikt of btw-vrijgesteld bent. Vermeld altijd de wettelijke grondslag op je factuur.',
      },
      {
        q: 'Wat is de juiste tekst voor btw-vrijstelling?',
        a: 'Bijvoorbeeld: "Btw vrijgesteld op grond van artikel 25 Wet OB". Het voorbeeld toont de standaard vermelding.',
      },
      {
        q: 'Moet ik nog steeds een factuurnummer gebruiken?',
        a: 'Ja. Alle verplichte factuurgegevens gelden ook zonder btw — inclusief factuurnummer, datum en IBAN.',
      },
    ],
    relatedLinks: [
      { label: 'Zonder btw template', href: '/factuur-template/zonder-btw' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
    ],
  }),
};

export function getVoorbeeldPage(slug) {
  return voorbeeldPages[slug] || null;
}

export function getAllVoorbeeldSlugs() {
  return Object.keys(voorbeeldPages);
}

export function getVoorbeeldHubLinks() {
  const hubTitles = {
    zzp: 'ZZP voorbeeld',
    bouw: 'Bouw voorbeeld',
    uren: 'Uren voorbeeld',
    consultant: 'Consultant voorbeeld',
    freelance: 'Freelance voorbeeld',
    'zonder-btw': 'Factuur zonder btw',
  };

  return Object.values(voorbeeldPages).map((page) => ({
    slug: page.slug,
    label: hubTitles[page.slug] || page.h1,
    href: `/factuur-voorbeeld/${page.slug}`,
    description: {
      zzp: 'Standaard factuur voor zelfstandigen met btw.',
      bouw: 'Voor aannemers, schilders en klusbedrijven.',
      uren: 'Factureer gewerkte uren met uurtarief.',
      consultant: 'Professioneel voor adviseurs en consultants.',
      freelance: 'Voor designers, developers en creatieven.',
      'zonder-btw': 'Voor KOR of btw-vrijgestelde ondernemers.',
    }[page.slug],
    tag: {
      zzp: 'Populair',
      bouw: 'Bouw',
      uren: 'Uren',
      consultant: 'Diensten',
      freelance: 'Freelance',
      'zonder-btw': 'KOR',
    }[page.slug],
    example: page.example,
  }));
}
