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
    closingTitle: config.closingTitle,
    closingText: config.closingText,
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
    metaTitle: 'Factuur voorbeeld bouw | Gratis voorbeeld voor de bouw',
    metaDescription:
      'Bekijk een factuur voorbeeld voor de bouw, met arbeid, materiaal, btw en betaaltermijn. Ook uitleg over schilderwerk en btw verlegd voor onderaannemers.',
    intro:
      'Een goede bouwfactuur maakt duidelijk welke werkzaamheden en materialen je in rekening brengt. Hieronder zie je een factuur voorbeeld voor de bouw, met aparte regels voor arbeid en materiaal. Gebruik het voorbeeld als basis voor je eigen factuur en pas de werkzaamheden, bedragen en gegevens aan jouw situatie aan.',
    templateHref: '/factuur-template/bouw',
    closingTitle: 'Maak gratis je eigen bouwfactuur',
    closingText:
      'Vul je bedrijfsgegevens in, voeg arbeid en materiaal toe, controleer de btw en download je factuur als PDF. Gratis en zonder account.',
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
      btwLabel: 'BTW 9%',
      btwAmount: '€ 129,15',
      total: '€ 1.564,15',
    },
    sections: [
      {
        h2: 'Voorbeeld factuur bouw',
        paragraphs: [
          'Het voorbeeld hierboven toont een bouwfactuur met factuurnummer #2026-032, datum 5 juli 2026 en een betaaltermijn van 30 dagen. Schilderwerk woonkamer (€1.250) en materiaal (€185) staan als aparte regels, subtotaal €1.435, 9% btw (€129,15), totaal €1.564,15.',
          'Let op: voor schilderwerk aan woningen ouder dan 2 jaar geldt onder voorwaarden het 9%-tarief. Voor andere werkzaamheden in de bouw kan een ander btw-tarief gelden.',
        ],
      },
      {
        h2: 'Wat staat er op een bouwfactuur?',
        paragraphs: [
          'Op een bouwfactuur vermeld je onder andere de onderstaande gegevens. Bij werkzaamheden in de bouw is het verstandig om arbeid, materiaal en eventuele meerwerkposten duidelijk van elkaar te onderscheiden.',
        ],
        bullets: [
          'je bedrijfsnaam en gegevens',
          'de gegevens van je opdrachtgever',
          'een uniek factuurnummer',
          'de factuurdatum',
          'een duidelijke omschrijving van de werkzaamheden',
          'de hoeveelheid of het aantal uren, wanneer dat relevant is',
          'het bedrag exclusief btw',
          'het gebruikte btw-tarief',
          'het btw-bedrag',
          'het totaalbedrag',
          'de betaaltermijn en betaalgegevens',
        ],
      },
      {
        h2: 'Arbeid en materiaal op één factuur',
        paragraphs: [
          "Als aannemer, klusbedrijf of zzp'er in de bouw kun je verschillende onderdelen van een opdracht op dezelfde factuur zetten. Geef iedere belangrijke post een duidelijke omschrijving. Zo ziet je opdrachtgever direct waar het factuurbedrag vandaan komt.",
        ],
        bullets: [
          'arbeidsuren',
          'materiaal',
          'huur van materieel',
          'voorrijkosten',
          'meerwerk',
          'andere kosten die onderdeel zijn van de opdracht',
        ],
        subsections: [
          {
            h3: 'Voorbeeld van een duidelijke omschrijving',
            paragraphs: [
              'In plaats van “Werkzaamheden €1.500” kun je bijvoorbeeld vermelden: “Schilderen woonkamer, inclusief voorbereiden, schuren en twee lagen verf – 1 opdracht – €1.250”. Hoe specifieker de omschrijving, hoe duidelijker de factuur voor je opdrachtgever is.',
            ],
          },
        ],
      },
      {
        h2: 'Welk btw-tarief gebruik je in de bouw?',
        paragraphs: [
          'Het btw-tarief hangt af van de werkzaamheden en de situatie. Voor bepaalde werkzaamheden aan woningen ouder dan 2 jaar geldt het 9%-tarief. Dit geldt bijvoorbeeld voor schilderen, stukadoren, behangen en bepaalde vormen van isoleren. Voor andere werkzaamheden aan woningen geldt 21%.',
          'Bij een opdracht met verschillende werkzaamheden kunnen daarom verschillende btw-tarieven van toepassing zijn. Als dat zo is, splits je de werkzaamheden op de offerte en factuur uit. Twijfel je over het juiste tarief? Controleer dan altijd de actuele regels van de Belastingdienst.',
        ],
      },
      {
        h2: 'Btw verlegd in de bouw',
        paragraphs: [
          "Werk je als onderaannemer voor een hoofdaannemer? Dan kan de verleggingsregeling van toepassing zijn. In dat geval breng je als onderaannemer geen btw in rekening. Op de factuur vermeld je 'btw verlegd' en het btw-identificatienummer van je opdrachtgever. De vergoeding moet daarbij per btw-tarief worden vermeld.",
          'De verleggingsregeling geldt niet automatisch voor iedere factuur in de bouw. Of je de regeling moet toepassen, hangt af van de werkzaamheden en de rol van de partijen.',
        ],
      },
      {
        h2: 'Factuur voor een aannemer of bouwbedrijf',
        paragraphs: [
          'Ook een aannemer of bouwbedrijf kan een factuur opbouwen uit verschillende onderdelen. Voor grote projecten kan het handig zijn om per fase of termijn te factureren. Vermeld dan duidelijk op welke werkzaamheden of termijn de factuur betrekking heeft.',
        ],
        bullets: [
          'werkzaamheden',
          'materialen',
          'onderaannemers',
          'meerwerk',
          'termijnfacturen',
          'eindafrekening',
        ],
      },
      {
        h2: 'Tussentijdse factuur in de bouw',
        paragraphs: [
          'Bij een langer bouwproject hoef je niet altijd te wachten tot het volledige werk klaar is. Je kunt bijvoorbeeld tussentijds factureren wanneer dat volgens de gemaakte afspraken gebeurt. Zet op de factuur duidelijk welke termijn of welk deel van het project je factureert.',
          'Bijvoorbeeld: “Termijn 2 – 30% van de overeengekomen aanneemsom – werkzaamheden volgens offerte #2026-014”. Zo kan je opdrachtgever de factuur eenvoudig koppelen aan de oorspronkelijke opdracht.',
        ],
      },
      {
        h2: 'Factuur en offerte voor de bouw',
        paragraphs: [
          'Een offerte gebruik je meestal voordat je met het werk begint. Daarin beschrijf je wat je gaat uitvoeren en tegen welke prijs. Na akkoord kun je de werkzaamheden uitvoeren en vervolgens een factuur sturen.',
          'Een offerte bouw voorbeeld is daarom iets anders dan een factuur voorbeeld bouw: de offerte is een voorstel, terwijl de factuur bedoeld is om uitgevoerd werk of geleverde prestaties in rekening te brengen. Lees hoe je een offerte maakt in onze offerte-gids.',
        ],
      },
      {
        h2: 'Maak gratis je eigen bouwfactuur',
        paragraphs: [
          "Met FactuurBaas maak je eenvoudig een factuur voor je bouwbedrijf, klusbedrijf of werkzaamheden als zzp'er. Je kunt direct beginnen zonder account.",
        ],
        bullets: [
          'Vul je eigen bedrijfsgegevens in.',
          'Voeg de gegevens van je opdrachtgever toe.',
          'Voeg arbeid, materiaal en andere posten toe.',
          'Controleer bedragen en btw.',
          'Download je factuur als PDF.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kan ik arbeid en materiaal op dezelfde factuur zetten?',
        a: 'Ja. Je kunt arbeidskosten en materiaalkosten als afzonderlijke regels op dezelfde factuur vermelden. Een duidelijke omschrijving maakt inzichtelijk waarvoor je opdrachtgever betaalt.',
      },
      {
        q: 'Welk btw-tarief geldt voor schilderwerk?',
        a: 'Voor schilderwerk aan woningen ouder dan 2 jaar geldt onder voorwaarden het 9%-tarief. Voor andere werkzaamheden kunnen andere regels gelden.',
      },
      {
        q: 'Wanneer is btw verlegd in de bouw?',
        a: "Bij onderaanneming in de bouw kan de verleggingsregeling van toepassing zijn. De onderaannemer brengt dan geen btw in rekening en vermeldt 'btw verlegd' en het btw-identificatienummer van de afnemer op de factuur.",
      },
      {
        q: 'Kan ik een tussentijdse factuur sturen voor een bouwproject?',
        a: 'Ja, dat kan wanneer je volgens de gemaakte afspraken in termijnen factureert. Vermeld duidelijk welke termijn of welk deel van het project je in rekening brengt.',
      },
      {
        q: "Is dit voorbeeld ook geschikt voor een zzp'er in de bouw?",
        a: "Ja. Een zzp'er, klusbedrijf of aannemer kan dezelfde basis gebruiken. Pas de omschrijvingen, bedragen, btw en gegevens aan de eigen werkzaamheden en situatie aan.",
      },
      {
        q: 'Kan ik ook een offerte voor een bouwproject maken?',
        a: 'Ja. Een offerte gebruik je om vooraf afspraken te maken over werkzaamheden en prijs. Na akkoord kun je de uitgevoerde werkzaamheden factureren.',
      },
    ],
    relatedLinks: [
      { label: 'Bouw template', href: '/factuur-template/bouw' },
      { label: 'Hoe maak je een offerte', href: '/gidsen/hoe-maak-je-een-offerte' },
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
    metaTitle: 'Factuur voorbeeld consultant | Gratis voorbeeld',
    metaDescription:
      'Bekijk een professioneel factuur voorbeeld voor consultants. Met projectprijs of uurtarief, btw en betaaltermijn. Maak gratis je eigen consultant factuur.',
    intro:
      'Ben je consultant, adviseur of zelfstandig professional en zoek je een factuur voorbeeld voor je diensten? Hieronder zie je hoe een professionele consultant-factuur eruit kan zien. Het voorbeeld is gebaseerd op een project met een vaste prijs. Werk je met een uurtarief? Dan kun je dezelfde factuur ook gebruiken voor je gewerkte uren.',
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
        h2: 'Factuur voorbeeld voor een consultant',
        paragraphs: [
          'Het voorbeeld hierboven toont een projectfactuur: factuurnummer 2026-051, datum 3 juli 2026, betaaltermijn 30 dagen, en één regel “Strategisch adviestraject Q2” van €4.500 excl. btw (€945 btw, totaal €5.445).',
          'Een goede factuur voor consultancy maakt duidelijk welke dienst is geleverd, tegen welk bedrag en onder welke betaalvoorwaarden.',
        ],
      },
      {
        h2: 'Wat zet je op een factuur als consultant?',
        paragraphs: [
          'Op een consultant-factuur vermeld je onder andere de onderstaande gegevens. Een duidelijke omschrijving is vooral bij consultancy belangrijk: schrijf niet alleen “advies”, maar omschrijf de opdracht specifieker, zoals “Strategisch adviestraject Q2” of “Advies en begeleiding implementatie CRM”.',
        ],
        bullets: [
          'Je bedrijfsnaam en adres',
          'De gegevens van je klant',
          'Een uniek factuurnummer',
          'De factuurdatum',
          'Een duidelijke omschrijving van je advies of werkzaamheden',
          'Het bedrag exclusief btw',
          'Het btw-bedrag en btw-tarief, wanneer van toepassing',
          'Het totaalbedrag inclusief btw',
          'De betaaltermijn',
          'Je betaalgegevens',
        ],
      },
      {
        h2: 'Consultant factuur per uur of per project?',
        paragraphs: [
          'Consultants kunnen hun werkzaamheden op verschillende manieren factureren.',
        ],
        subsections: [
          {
            h3: 'Factureren met een vaste projectprijs',
            paragraphs: [
              'Bij een projectprijs spreek je vooraf een vast bedrag af voor een bepaalde opdracht, bijvoorbeeld “Strategisch adviestraject — €4.500”. Je hoeft dan niet alle gewerkte uren op de factuur te zetten, zolang de geleverde dienst duidelijk is omschreven.',
            ],
          },
          {
            h3: 'Factureren met een uurtarief',
            paragraphs: [
              'Werk je op basis van uren? Dan kun je de gewerkte uren op je factuur specificeren, bijvoorbeeld 20 uur consultancy à €100 = €2.000 exclusief btw. Bekijk ook het uren-voorbeeld of bereken wat je uurtarief oplevert.',
            ],
          },
        ],
      },
      {
        h2: 'Factuur voorbeeld voor adviesdiensten',
        paragraphs: [
          'Een consultant-factuur hoeft niet ingewikkeld te zijn. Het belangrijkste is dat voor je klant duidelijk is welke adviesdienst wordt gefactureerd. Kies een omschrijving die past bij de werkzaamheden die je daadwerkelijk hebt uitgevoerd.',
        ],
        bullets: [
          'Strategisch advies',
          'Managementadvies',
          'Marketingadvies',
          'Financieel advies',
          'IT-consultancy',
          'Implementatiebegeleiding',
          'Projectbegeleiding',
          'Coaching en begeleiding',
          'Advies en ondersteuning',
        ],
      },
      {
        h2: 'Factuur en offerte voor consultants',
        paragraphs: [
          'Een offerte en factuur hebben verschillende functies. Met een offerte beschrijf je vooraf wat je gaat leveren en tegen welke prijs. Na uitvoering van de opdracht stuur je vervolgens een factuur om de afgesproken werkzaamheden in rekening te brengen.',
          'Bij een project met een vaste prijs kan de factuur bijvoorbeeld aansluiten op het bedrag uit de offerte. Wil je naast een factuur ook een offerte maken? Gebruik dan de offerte maker van FactuurBaas.',
        ],
      },
      {
        h2: 'Maak je eigen consultant-factuur',
        paragraphs: [
          'Je hoeft deze factuur niet zelf in Word of Excel na te bouwen. Met FactuurBaas maak je online een professionele factuur en download je deze direct als PDF. Gratis en zonder account.',
        ],
        bullets: [
          'Vul je eigen bedrijfs- en klantgegevens in.',
          'Voeg je diensten en bedragen toe.',
          'Kies een zakelijke layout.',
          'Download je factuur als PDF.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Kan ik als consultant per uur factureren?',
        a: 'Ja. Je kunt je gewerkte uren en uurtarief op de factuur vermelden. Je kunt bijvoorbeeld 20 uur × €100 = €2.000 exclusief btw factureren.',
      },
      {
        q: 'Kan ik als consultant een vaste projectprijs factureren?',
        a: 'Ja. Bij een vaste projectprijs kun je de volledige adviesopdracht als één factuurregel opnemen, bijvoorbeeld “Strategisch adviestraject – €4.500”.',
      },
      {
        q: 'Welke btw zet ik op een consultant-factuur?',
        a: 'Dat hangt af van de dienst, de situatie van jou en je klant en bijvoorbeeld of je klant in Nederland of in het buitenland gevestigd is. Voor veel diensten aan Nederlandse zakelijke klanten geldt 21% btw, maar er zijn uitzonderingen.',
      },
      {
        q: 'Kan ik een consultant-factuur naar een buitenlandse klant sturen?',
        a: 'Ja. Bij buitenlandse klanten kunnen andere btw-regels gelden. Welke btw-vermelding je gebruikt, hangt onder andere af van het land van je klant en of het om een zakelijke of particuliere klant gaat.',
      },
      {
        q: 'Moet een consultant een offerte sturen voordat hij factureert?',
        a: 'Niet altijd. Een offerte kan handig zijn om vooraf afspraken over werkzaamheden en prijs vast te leggen, maar de factuur is het document waarmee je de geleverde dienst in rekening brengt.',
      },
    ],
    relatedLinks: [
      { label: 'Consultant template', href: '/factuur-template/consultant' },
      { label: 'Uren voorbeeld', href: '/factuur-voorbeeld/uren' },
      { label: 'Offerte maker', href: '/tools/offerte-maker' },
      { label: 'Uurtarief berekenen', href: '/tools/uurtarief-naar-inkomen' },
      { label: 'Buitenlandse klanten', href: '/blogs/buitenlandse-klanten-factureren' },
    ],
    closingTitle: 'Maak gratis je eigen factuur',
    closingText:
      'Gebruik dit voorbeeld als inspiratie. Vul je gegevens in, voeg je adviesdiensten toe en download je factuur direct als PDF. Gratis, zonder account en klaar in een paar minuten.',
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
