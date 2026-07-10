const sharedRelatedLinks = [
  { label: 'Alle templates', href: '/template' },
  { label: 'Factuur voorbeelden', href: '/factuur-voorbeeld' },
  { label: 'Gratis factuur maken', href: '/create-invoice' },
  { label: 'Factuur maken ZZP', href: '/factuur-maken/zzp' },
];

const requiredInvoiceFields = [
  'Je naam of bedrijfsnaam en adres',
  'KvK-nummer (als je ingeschreven staat)',
  'Btw-nummer (tenzij je KOR gebruikt)',
  'Factuurnummer en factuurdatum',
  'Omschrijving van geleverde diensten of producten',
  'Bedrag exclusief btw, btw-tarief en totaalbedrag',
  'Betalingstermijn en IBAN',
];

const onlineComparison = {
  headers: ['', 'Word / Excel', 'FactuurBaas (online)'],
  rows: [
    ['Gratis gebruiken', 'Ja', 'Ja'],
    ['Account nodig', 'Nee', 'Nee'],
    ['Btw automatisch berekend', 'Nee', 'Ja'],
    ['PDF direct downloaden', 'Via export', 'Ja, in 1 klik'],
    ['Professionele layout', 'Zelf opmaken', 'Meerdere stijlen'],
  ],
};

const stepsSection = {
  h2: 'Zo maak je je factuur in 3 stappen',
  bullets: [
    'Klik op "Maak gratis factuur" en vul je bedrijfs- en klantgegevens in.',
    'Kies een layout en voeg je diensten, uren of projectregels toe.',
    'Download je factuur direct als PDF en stuur hem naar je klant.',
  ],
};

const defaultFaqs = [
  {
    q: 'Heb ik een account nodig?',
    a: 'Nee. Je kunt direct starten, je factuur invullen en als PDF downloaden zonder registratie.',
  },
  {
    q: 'Is deze factuur template gratis?',
    a: 'Ja. FactuurBaas is gratis te gebruiken voor het maken en downloaden van facturen.',
  },
  {
    q: 'Kan ik mijn logo op de factuur zetten?',
    a: 'Ja. Upload je logo in de tool voor een professionele uitstraling.',
  },
  {
    q: 'Is de factuur geschikt om te mailen naar klanten?',
    a: 'Ja. Je downloadt een PDF die je direct als bijlage kunt versturen.',
  },
];

function mergeFaqs(configFaqs = []) {
  const seen = new Set(configFaqs.map((f) => f.q));
  const merged = [...configFaqs];
  for (const faq of defaultFaqs) {
    if (!seen.has(faq.q)) merged.push(faq);
  }
  return merged;
}

function professionTemplate(slug, config) {
  return {
    slug,
    h1: config.h1,
    metaTitle: config.metaTitle,
    metaDescription: config.metaDescription,
    intro: config.intro,
    previewLayout: config.previewLayout || 'plain',
    previewNoBtw: config.previewNoBtw || false,
    sections: [
      {
        h2: config.sectionTitle || `Wat hoort op een ${config.shortTitle.toLowerCase()}?`,
        paragraphs: config.sectionIntro ? [config.sectionIntro] : [],
        bullets: config.bullets,
      },
      {
        h2: `Waarom geen Word of Excel voor je ${config.shortTitle.toLowerCase()}?`,
        paragraphs: [
          config.whyOnlineParagraph ||
            `Een ${config.shortTitle.toLowerCase()} hoef je niet zelf in Word of Excel te bouwen. Met een online template heb je direct de juiste structuur, automatische btw-berekening en een professionele PDF.`,
        ],
        bullets: [
          'Gratis en zonder account',
          'Automatische btw-berekening',
          'Professionele layout keuze',
          'Direct downloaden als PDF',
        ],
      },
      {
        h2: 'Word/Excel vs. online factuur tool',
        comparison: onlineComparison,
      },
      ...(config.extraSections || []),
      stepsSection,
      {
        h2: 'Verplichte gegevens op elke Nederlandse factuur',
        paragraphs: [
          'Naast de specifieke regels voor jouw type factuur gelden altijd deze verplichte gegevens:',
        ],
        bullets: requiredInvoiceFields,
      },
    ],
    faqs: mergeFaqs(config.faqs),
    relatedLinks: [...(config.relatedLinks || []), ...sharedRelatedLinks],
  };
}

export const templatePages = {
  word: {
    slug: 'word',
    h1: 'Factuur template Word',
    metaTitle: 'Factuur template Word gratis – Online alternatief | FactuurBaas',
    metaDescription:
      'Zoek je een factuur template voor Word? Maak gratis een professionele factuur online. Geen Word nodig, direct PDF downloaden. Geen account vereist.',
    intro:
      'Veel ondernemers zoeken een factuur template Word om zelf een factuur op te stellen. Dat kan — maar een online factuurtool is vaak sneller, overzichtelijker en minder foutgevoelig. Met FactuurBaas maak je gratis een professionele factuur zonder Word, zonder account en met directe PDF-download.',
    previewLayout: 'minimalist',
    sections: [
      {
        h2: 'Waarom steeds minder ondernemers Word gebruiken',
        paragraphs: [
          'Een Word-factuur template lijkt handig, maar je moet zelf opmaken controleren, btw berekenen en elke keer opnieuw gegevens invullen. Eén verkeerde formule of vergeten btw-regel kan problemen geven bij je administratie of belastingaangifte.',
          'Een online factuur template doet het zware werk voor je: structuur, layout en berekening staan goed. Jij vult alleen je klant- en bedrijfsgegevens in.',
        ],
      },
      {
        h2: 'Word template vs. online factuur tool',
        comparison: {
          headers: ['', 'Word template', 'FactuurBaas (online)'],
          rows: [
            ['Gratis gebruiken', 'Ja', 'Ja'],
            ['Account nodig', 'Nee', 'Nee'],
            ['Btw automatisch berekend', 'Nee', 'Ja'],
            ['PDF direct downloaden', 'Via export', 'Ja, in 1 klik'],
            ['Factuurnummering', 'Handmatig', 'Zelf in te vullen'],
            ['Professionele layouts', 'Beperkt', 'Meerdere stijlen'],
          ],
        },
      },
      {
        h2: 'Wat moet er op een factuur staan?',
        paragraphs: [
          'Of je nu een Word-sjabloon of onze online tool gebruikt — deze gegevens zijn verplicht op een Nederlandse factuur:',
        ],
        bullets: requiredInvoiceFields,
      },
      {
        h2: 'Zo maak je je factuur in 3 stappen',
        bullets: [
          'Klik op "Maak gratis factuur" en vul je bedrijfs- en klantgegevens in.',
          'Kies een layout die bij je past (minimalistisch, zakelijk of modern).',
          'Download je factuur direct als PDF en stuur hem naar je klant.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is er een gratis factuur template voor Word?',
        a: 'Je kunt online zoeken naar gratis Word-sjablonen, maar je moet zelf controleren of alles klopt. Met FactuurBaas maak je gratis een factuur online — zonder Word — en download je direct een PDF.',
      },
      {
        q: 'Kan ik een Word-factuur omzetten naar PDF?',
        a: 'Ja, via Word kun je exporteren naar PDF. Met FactuurBaas sla je die stap over: je maakt de factuur online en downloadt meteen een PDF.',
      },
      {
        q: 'Heb ik een account nodig?',
        a: 'Nee. FactuurBaas werkt zonder registratie. Je vult je gegevens in en downloadt je factuur direct.',
      },
      {
        q: 'Is een online factuur template geschikt voor zzp\'ers?',
        a: 'Ja. De tool is gemaakt voor zzp\'ers en kleine ondernemers die snel een correcte factuur willen maken zonder boekhoudpakket.',
      },
    ],
    relatedLinks: [
      { label: 'Excel template', href: '/factuur-template/excel' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      ...sharedRelatedLinks,
    ],
  },

  excel: {
    slug: 'excel',
    h1: 'Factuur template Excel',
    metaTitle: 'Factuur template Excel gratis – Online alternatief | FactuurBaas',
    metaDescription:
      'Factuur template Excel downloaden? Maak gratis een factuur online zonder formules. Direct PDF, geen account. Sneller dan Excel.',
    intro:
      'Een factuur template Excel met formules lijkt efficiënt, maar je bent snel uren kwijt aan opmaak, fouten in cellen en het exporteren naar PDF. Met FactuurBaas maak je gratis een factuur online — zonder Excel, zonder account en met automatische btw-berekening.',
    previewLayout: 'corporate',
    sections: [
      {
        h2: 'Nadelen van een Excel-factuur template',
        paragraphs: [
          'Excel-templates zijn fragiel: een per ongeluk verwijderde formule, verkeerd btw-tarief of kopie van een oude factuur met verkeerde gegevens komt vaak voor. Bovendien ziet een Excel-bestand er minder professioneel uit dan een nette PDF-factuur.',
        ],
        bullets: [
          'Formules kunnen stukgaan bij kopiëren',
          'Opmaak verschuift snel bij wijzigingen',
          'PDF maken kost extra stappen',
          'Geen standaard professionele uitstraling',
        ],
      },
      {
        h2: 'Excel vs. online factuur tool',
        comparison: {
          headers: ['', 'Excel template', 'FactuurBaas (online)'],
          rows: [
            ['Formules nodig', 'Ja', 'Nee'],
            ['Btw automatisch', 'Als formule goed staat', 'Altijd'],
            ['PDF export', 'Handmatig', 'Direct'],
            ['Gratis', 'Vaak', 'Ja'],
            ['Account nodig', 'Nee', 'Nee'],
          ],
        },
      },
      {
        h2: 'Wat moet er op je factuur staan?',
        bullets: requiredInvoiceFields,
      },
      stepsSection,
    ],
    faqs: [
      {
        q: 'Is er een gratis factuur template voor Excel?',
        a: 'Er zijn gratis Excel-sjablonen te vinden, maar je moet formules en opmaak zelf controleren. FactuurBaas biedt een gratis online alternatief zonder Excel.',
      },
      {
        q: 'Kan ik uren factureren zonder Excel?',
        a: 'Ja. Vul je uren en uurtarief in de tool in — de berekening gaat automatisch.',
      },
      {
        q: 'Hoe download ik mijn factuur als PDF?',
        a: 'Na het invullen klik je op downloaden. Je krijgt direct een PDF die je naar je klant kunt sturen.',
      },
    ],
    relatedLinks: [
      { label: 'Word template', href: '/factuur-template/word' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
      { label: 'Uren factuur', href: '/factuur-template/uren' },
      ...sharedRelatedLinks,
    ],
  },

  pdf: {
    slug: 'pdf',
    h1: 'Factuur template PDF',
    metaTitle: 'Factuur template PDF gratis downloaden | FactuurBaas',
    metaDescription:
      'Gratis factuur template PDF maken. Geen account nodig. Maak je factuur online en download direct een professionele PDF.',
    intro:
      'Zoek je een factuur template PDF die je direct kunt gebruiken? Met FactuurBaas maak je je factuur online en download je meteen een professionele PDF — gratis, zonder account en zonder tussenstappen via Word of Excel.',
    previewLayout: 'plain',
    sections: [
      {
        h2: 'Direct een PDF-factuur, zonder omweg',
        paragraphs: [
          'In plaats van eerst een Word- of Excel-bestand te maken en dat daarna om te zetten, maak je bij FactuurBaas meteen een factuur die klaar is om te versturen. Ideaal als je zoekt op "factuur maken pdf" of "gratis factuur pdf".',
        ],
      },
      {
        h2: 'Voordelen van een online PDF-template',
        bullets: [
          'Direct downloaden, geen exportstappen',
          'Professionele layout',
          'Btw en totalen automatisch berekend',
          'Gratis zonder account',
          'Geschikt voor zzp en kleine ondernemers',
        ],
      },
      {
        h2: 'Verplichte gegevens op je PDF-factuur',
        bullets: requiredInvoiceFields,
      },
      stepsSection,
    ],
    faqs: [
      {
        q: 'Is de PDF-factuur gratis?',
        a: 'Ja. Je kunt gratis facturen maken en als PDF downloaden zonder account.',
      },
      {
        q: 'Kan ik mijn logo toevoegen?',
        a: 'Ja. Je kunt je logo uploaden in de factuurtool voor een professionele uitstraling.',
      },
      {
        q: 'Is de PDF geschikt om te mailen naar klanten?',
        a: 'Absoluut. De PDF is direct klaar om als bijlage te versturen.',
      },
    ],
    relatedLinks: [
      { label: 'Word template', href: '/factuur-template/word' },
      { label: 'Excel template', href: '/factuur-template/excel' },
      ...sharedRelatedLinks,
    ],
  },

  zzp: professionTemplate('zzp', {
    h1: 'Factuur template ZZP',
    shortTitle: 'ZZP factuur',
    metaTitle: 'Factuur template ZZP gratis – Direct online | FactuurBaas',
    metaDescription:
      'Gratis factuur template voor zzp\'ers. Maak online je zzp-factuur met btw, download direct als PDF. Geen account nodig.',
    intro:
      'Als zzp\'er heb je een factuur template nodig die voldoet aan de regels van de Belastingdienst én er professioneel uitziet. Met deze gratis zzp-template maak je in minuten een correcte factuur — inclusief btw, factuurnummer en betalingstermijn.',
    previewLayout: 'corporate',
    sectionIntro: 'Op een zzp-factuur moeten in ieder geval deze gegevens staan:',
    bullets: [
      'Jouw naam, bedrijfsnaam en adres',
      'KvK-nummer en btw-nummer (tenzij KOR)',
      'Factuurnummer, datum en betalingstermijn',
      'Omschrijving van geleverd werk (uren of project)',
      'Bedrag excl. btw, btw-tarief en totaal incl. btw',
      'IBAN en tenaamstelling',
      'Vermelding "btw verlegd" als van toepassing',
    ],
    extraSections: [
      {
        h2: 'Tips voor een professionele zzp-factuur',
        bullets: [
          'Gebruik een doorlopende factuurnummering (bijv. 2026-001)',
          'Kies een betalingstermijn van 14 of 30 dagen',
          'Voeg je logo toe voor herkenbaarheid',
          'Houd omschrijvingen kort maar duidelijk',
        ],
      },
    ],
    faqs: [
      {
        q: 'Welk factuurnummer gebruik ik als zzp\'er?',
        a: 'Kies een doorlopende reeks, bijvoorbeeld 2026-001, 2026-002. Elke factuur moet een uniek nummer hebben.',
      },
      {
        q: 'Moet btw op een zzp-factuur?',
        a: 'Meestal wel, tenzij je de KOR (kleineondernemersregeling) gebruikt. Dan vermeld je dat je btw-vrijgesteld bent.',
      },
      {
        q: 'Wat is het verschil tussen een zzp-factuur en een gewone factuur?',
        a: 'De verplichte gegevens zijn hetzelfde. Als zzp\'er factureer je vaak per uur of per project — beide kan met deze template.',
      },
    ],
    relatedLinks: [
      { label: 'Uren template', href: '/factuur-template/uren' },
      { label: 'Zonder btw', href: '/factuur-template/zonder-btw' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
    ],
  }),

  bouw: professionTemplate('bouw', {
    h1: 'Factuur template bouw',
    shortTitle: 'Bouw factuur',
    metaTitle: 'Factuur template bouw – Gratis voor aannemers | FactuurBaas',
    metaDescription:
      'Gratis factuur template voor bouw, schilders en klusbedrijven. Maak online je factuur en download als PDF.',
    intro:
      'Voor aannemers, schilders en klusbedrijven is een duidelijke factuur essentieel. Met deze bouw-template factureer je materiaal en arbeid overzichtelijk — inclusief btw en een professionele opmaak die vertrouwen wekt bij je opdrachtgever.',
    previewLayout: 'plain',
    sectionIntro: 'Op een bouwfactuur komen deze gegevens typisch terug:',
    bullets: [
      'Omschrijving van werkzaamheden (bijv. schilderwerk, renovatie, montage)',
      'Materiaalkosten en arbeidsuren apart of gecombineerd',
      'Btw-tarief (meestal 21%, soms 9% voor bepaalde werkzaamheden)',
      'Eventueel meerwerk of stelposten vermelden',
      'Factuurnummer, datum, betalingstermijn en IBAN',
    ],
    extraSections: [
      {
        h2: 'Factureren in de bouw: waar let je op?',
        paragraphs: [
          'In de bouw factureer je vaak per project, per fase of op basis van meerwerk. Zorg dat elke regel op de factuur herleidbaar is naar afgesproken werk — dat voorkomt discussies achteraf.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Welk btw-tarief geldt voor bouwwerkzaamheden?',
        a: 'Dit hangt af van het type werk. Veel werkzaamheden vallen onder 21%, maar voor bepaalde renovatiewerkzaamheden aan woningen kan 9% gelden. Check altijd de actuele regels.',
      },
      {
        q: 'Kan ik materiaal en uren op één factuur zetten?',
        a: 'Ja. Zorg wel voor een duidelijke omschrijving per regel zodat je klant begrijpt wat er gefactureerd wordt.',
      },
      {
        q: 'Is er een factuur template voor schilders?',
        a: 'Ja. Deze bouw-template is geschikt voor schilders, aannemers, loodgieters en andere klusbedrijven.',
      },
    ],
    relatedLinks: [
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      { label: 'Uren template', href: '/factuur-template/uren' },
      { label: 'Word template', href: '/factuur-template/word' },
    ],
  }),

  uren: professionTemplate('uren', {
    h1: 'Factuur template uren',
    shortTitle: 'Uren factuur',
    metaTitle: 'Uren factuur template gratis – Uurtarief factureren | FactuurBaas',
    metaDescription:
      'Gratis uren factuur template. Factureer gewerkte uren met uurtarief, btw en totaal. Direct PDF downloaden.',
    intro:
      'Als je op uurbasis werkt, heb je een factuur template nodig die uren, uurtarief en totaalbedrag overzichtelijk toont. Met FactuurBaas vul je je gewerkte uren in en wordt het totaal automatisch berekend — geen Excel-formules nodig.',
    previewLayout: 'minimalist',
    sectionIntro: 'Een urenfactuur bevat meestal het volgende:',
    bullets: [
      'Datum of periode van geleverde uren',
      'Aantal uren en uurtarief per regel',
      'Omschrijving van het uitgevoerde werk',
      'Subtotaal, btw-tarief en totaalbedrag',
      'Factuurnummer, betalingstermijn en IBAN',
    ],
    extraSections: [
      {
        h2: 'Uren factureren als zzp\'er',
        paragraphs: [
          'Veel zzp\'ers factureren op basis van gewerkte uren. Vermeld altijd het aantal uren, je uurtarief en een korte omschrijving — zo weet je klant precies waarvoor hij betaalt.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Hoe factureer ik uren als zzp\'er?',
        a: 'Vermeld het aantal uren, je uurtarief en een korte omschrijving van het werk. Het totaal wordt berekend op basis van uren × tarief, plus btw.',
      },
      {
        q: 'Moet ik elke dag apart factureren?',
        a: 'Nee. Je kunt uren bundelen per week, project of maand — zolang de omschrijving maar duidelijk is.',
      },
      {
        q: 'Kan ik verschillende uurtarieven op één factuur zetten?',
        a: 'Ja. Voeg per taak of project een aparte regel toe met het bijbehorende uurtarief.',
      },
    ],
    relatedLinks: [
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      { label: 'Freelance template', href: '/factuur-template/freelance' },
      { label: 'Excel template', href: '/factuur-template/excel' },
    ],
  }),

  consultant: professionTemplate('consultant', {
    h1: 'Factuur template consultant',
    shortTitle: 'Consultant factuur',
    metaTitle: 'Consultant factuur template – Gratis online | FactuurBaas',
    metaDescription:
      'Professionele factuur template voor consultants en adviseurs. Gratis online maken, direct PDF.',
    intro:
      'Consultants en adviseurs hebben een strakke, professionele factuur nodig die vertrouwen uitstraalt. Deze template is geschikt voor adviesdiensten, projectmatig werk en uurbasis facturatie — zonder Word of Excel.',
    previewLayout: 'corporate',
    sectionIntro: 'Op een consultantfactuur staan typisch:',
    bullets: [
      'Duidelijke omschrijving van advies, traject of project',
      'Uurtarief of vaste projectprijs',
      'Btw (21% of verlegd bij buitenlandse klanten)',
      'Factuurnummer, datum en betalingstermijn',
      'Je logo en zakelijke contactgegevens',
    ],
    extraSections: [
      {
        h2: 'Consultant factureren: uur of project?',
        paragraphs: [
          'Beide modellen komen vaak voor. Bij uurbasis facturatie vermeld je uren en tarief; bij een projectprijs werk je met een vaste omschrijving en totaalbedrag. Kies wat je met je klant hebt afgesproken.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Factureer ik als consultant per uur of per project?',
        a: 'Beide kan. Kies wat je met je klant hebt afgesproken en vermeld dit duidelijk op de factuur.',
      },
      {
        q: 'Hoe factureer ik aan buitenlandse klanten?',
        a: 'Bij diensten aan buitenlandse bedrijven kan btw verlegd worden. Vermeld dit expliciet op de factuur.',
      },
      {
        q: 'Welke layout past bij een consultant?',
        a: 'Kies een zakelijke, strakke layout. Met FactuurBaas kies je uit meerdere professionele stijlen.',
      },
    ],
    relatedLinks: [
      { label: 'Uren template', href: '/factuur-template/uren' },
      { label: 'Freelance template', href: '/factuur-template/freelance' },
      { label: 'ZZP template', href: '/factuur-template/zzp' },
    ],
  }),

  freelance: professionTemplate('freelance', {
    h1: 'Factuur template freelance',
    shortTitle: 'Freelance factuur',
    metaTitle: 'Freelance factuur template gratis | FactuurBaas',
    metaDescription:
      'Gratis factuur template voor freelancers: designers, developers, fotografen. Online maken, PDF downloaden.',
    intro:
      'Of je nu designer, developer, fotograaf of copywriter bent — als freelancer wil je snel een mooie factuur kunnen sturen. Deze template is gemaakt voor creatieve en digitale zelfstandigen die geen tijd willen verspillen aan Word of Excel.',
    previewLayout: 'modern',
    sectionIntro: 'Een freelance factuur bevat meestal:',
    bullets: [
      'Projectnaam of omschrijving van geleverd werk',
      'Vast bedrag of uren × uurtarief',
      'Btw-regel (21% of KOR-vrijstelling)',
      'Factuurnummer, datum en betalingstermijn',
      'Je logo voor een professionele uitstraling',
    ],
    extraSections: [
      {
        h2: 'Freelance factureren zonder gedoe',
        paragraphs: [
          'Als freelancer wil je focussen op je werk, niet op administratie. Met een online template maak je in minuten een factuur die er professioneel uitzit — inclusief je logo en correcte btw.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Heb ik als freelancer een KvK-nummer nodig op de factuur?',
        a: 'Als je ingeschreven staat bij de KvK, vermeld je je KvK-nummer op de factuur. Check de actuele regels voor jouw situatie.',
      },
      {
        q: 'Kan ik als freelancer per project factureren?',
        a: 'Ja. Vermeld de projectnaam en het afgesproken bedrag als vaste regel op de factuur.',
      },
      {
        q: 'Welke template past bij creatieve freelancers?',
        a: 'Kies een layout die bij je merk past — van minimalistisch tot creatief. Je kunt je logo toevoegen.',
      },
    ],
    relatedLinks: [
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      { label: 'Uren template', href: '/factuur-template/uren' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
    ],
  }),

  'zonder-btw': professionTemplate('zonder-btw', {
    h1: 'Factuur template zonder btw',
    shortTitle: 'Factuur zonder btw',
    metaTitle: 'Factuur template zonder btw – KOR & vrijstelling | FactuurBaas',
    metaDescription:
      'Gratis factuur template zonder btw voor KOR en btw-vrijgestelde ondernemers. Direct online maken.',
    intro:
      'Gebruik je de KOR (kleineondernemersregeling) of ben je btw-vrijgesteld? Dan heb je een factuur template nodig zonder btw-regel, maar mét de juiste wettelijke vermelding. Deze template helpt je om correct te factureren.',
    previewLayout: 'plain',
    previewNoBtw: true,
    sectionIntro: 'Op een factuur zonder btw gelden deze regels:',
    bullets: [
      'Vermelding dat je btw-vrijgesteld bent (bijv. "btw vrijgesteld op grond van artikel 25 Wet OB")',
      'Geen apart btw-bedrag op de factuur',
      'Subtotaal is gelijk aan het totaalbedrag',
      'Alle andere verplichte factuurgegevens (naam, adres, factuurnummer, IBAN)',
    ],
    extraSections: [
      {
        h2: 'KOR en btw-vrijstelling: wat vermeld je op de factuur?',
        paragraphs: [
          'Als deelnemer aan de KOR mag je geen btw in rekening brengen. Je moet wel vermelden dat je btw-vrijgesteld bent. Zonder die vermelding kan je factuur ongeldig zijn.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wanneer mag ik geen btw op mijn factuur zetten?',
        a: 'Als je deelneemt aan de KOR of btw-vrijgesteld bent. Je moet dit wel vermelden op de factuur.',
      },
      {
        q: 'Moet ik dan ook geen btw-aangifte doen?',
        a: 'Dat hangt af van je situatie. De KOR betekent dat je geen btw hoeft af te dragen tot een bepaalde omzetgrens.',
      },
      {
        q: 'Wat is de juiste tekst voor btw-vrijstelling?',
        a: 'Gebruik een formulering als: "Btw vrijgesteld op grond van artikel 25 van de Wet OB" of de actuele wettelijke tekst die voor jouw situatie geldt.',
      },
    ],
    relatedLinks: [
      { label: 'ZZP template', href: '/factuur-template/zzp' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
      { label: 'Word template', href: '/factuur-template/word' },
    ],
  }),
};

export function getTemplatePage(slug) {
  return templatePages[slug] || null;
}

export function getAllTemplateSlugs() {
  return Object.keys(templatePages);
}
