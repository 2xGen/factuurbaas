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
      { label: 'Uren factureren voorbeeld', href: '/factuur-voorbeeld/uren' },
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
      { label: 'Uren factureren voorbeeld', href: '/factuur-voorbeeld/uren' },
    ],
  }),

  uren: examplePage('uren', {
    h1: 'Uren factureren: voorbeeld factuur',
    metaTitle: "Uren factureren: voorbeeld factuur voor zzp'ers",
    metaDescription:
      "Uren factureren als zzp'er? Bekijk een duidelijk voorbeeld van een urenfactuur met gewerkte uren, uurtarief, btw en totaalbedrag.",
    intro:
      "Factureer je als zzp'er op uurbasis? Met een urenfactuur vermeld je duidelijk hoeveel uur je hebt gewerkt, welk uurtarief je hebt afgesproken en welk bedrag je klant moet betalen. Hieronder zie je een voorbeeld van een factuur voor gewerkte uren. Je kunt uren bijvoorbeeld per dag, week, project of factuurperiode groeperen.",
    templateHref: '/factuur-template/uren',
    closingTitle: 'Maak je eigen urenfactuur',
    closingText:
      'Gebruik het voorbeeld als basis. Vul je bedrijfs- en klantgegevens in, voeg je gewerkte uren en uurtarief toe en download je factuur direct als PDF.',
    example: {
      layout: 'minimalist',
      invoiceNumber: '#2026-078',
      date: '8 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Freelance Rutte', detail: 'KvK 11223344' },
      to: { name: 'Startup NL', detail: 'Rotterdam' },
      lineItems: [
        { description: 'Development – week 12', quantity: '24 uur × €80', amount: '€ 1.920,00' },
        { description: 'Development – week 13', quantity: '16 uur × €80', amount: '€ 1.280,00' },
      ],
      subtotal: '€ 3.200,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 672,00',
      total: '€ 3.872,00',
    },
    sections: [
      {
        h2: 'Voorbeeld factuur voor gewerkte uren',
        paragraphs: [
          'Stel dat je als freelancer €80 per uur rekent en in twee weken 40 uur aan een project hebt gewerkt.',
          'Het voorbeeld hierboven toont factuurnummer 2026-078 van 8 juli 2026 met betaaltermijn 14 dagen. Freelance Rutte factureert Startup NL: Development week 12 (24 uur × €80 = €1.920) en week 13 (16 uur × €80 = €1.280). Subtotaal €3.200, 21% btw €672, totaal €3.872. In dit voorbeeld zijn 40 uur gefactureerd tegen een uurtarief van €80.',
        ],
      },
      {
        h2: 'Hoe factureer je gewerkte uren?',
        paragraphs: [
          'Bij uren factureren zet je op je factuur in ieder geval duidelijk welke werkzaamheden je hebt gefactureerd en over welke periode.',
          'Een eenvoudige urenregel kan bijvoorbeeld zijn: Development – week 12 | 24 uur × €80 = €1.920. Je kunt uren ook per dag, opdracht of werkzaamheden uitsplitsen als dat voor je klant duidelijker is.',
        ],
        subsections: [
          {
            h3: 'Uren factureren in 4 stappen',
            bullets: [
              '1. Bepaal de factuurperiode — bijvoorbeeld één week, maand of een afgeronde projectfase.',
              '2. Tel je gewerkte uren op — gebruik bijvoorbeeld je urenregistratie.',
              '3. Vermenigvuldig uren met je uurtarief — 24 uur × €80 = €1.920.',
              '4. Voeg btw toe als je btw moet rekenen — in het voorbeeld is 21% btw toegepast.',
            ],
          },
        ],
      },
      {
        h2: "Urenfactuur maken als zzp'er",
        paragraphs: [
          "Een urenfactuur hoeft niet ingewikkeld te zijn. Je kunt je uren bijvoorbeeld per week of per maand groeperen. Bijvoorbeeld: 1–7 juli Development 18 uur à €80, 8–14 juli Development 22 uur à €80 — totaal 40 uur.",
          'Je hoeft dus niet automatisch voor iedere afzonderlijke werkdag een aparte factuurregel te maken. Het belangrijkste is dat voor je klant duidelijk is wat je hebt gefactureerd en tegen welk tarief.',
        ],
      },
      {
        h2: 'Moet je alle gewerkte uren op je factuur zetten?',
        paragraphs: [
          'Niet altijd op dezelfde manier. Als je een uurtarief hebt afgesproken, is het logisch om het aantal gefactureerde uren en het tarief op de factuur te vermelden.',
          'Welke specificatie het beste is, hangt af van je afspraken met de klant. Bij sommige opdrachten is een korte factuur met bijvoorbeeld “40 uur × €80” voldoende. Bij andere opdrachten wil de klant een uitgebreidere urenspecificatie.',
        ],
        bullets: ['dag', 'week', 'maand', 'projectfase', 'werkzaamheden'],
      },
      {
        h2: 'Urenspecificatie op je factuur',
        paragraphs: [
          'Een uitgebreide urenspecificatie kan bijvoorbeeld dagen, werkzaamheden en uren bevatten — zoals analyse en overleg (3), development (6+7+5+6), testen en overleg (4), afronding (5) en overdracht (4) voor een totaal van 40 uur.',
          'Je kunt deze uitgebreide specificatie eventueel als bijlage of urenoverzicht meesturen als je klant daarom vraagt of als dat onderdeel is van je afspraken.',
        ],
      },
      {
        h2: 'Verschillende uurtarieven op één factuur',
        paragraphs: [
          'Werk je tijdens één opdracht met verschillende tarieven? Dan kun je die afzonderlijk op de factuur zetten. Bijvoorbeeld: consultancy 10 uur à €100 = €1.000, development 20 uur à €80 = €1.600, subtotaal €2.600. Zo ziet je klant direct welk tarief bij welke werkzaamheden hoort.',
        ],
      },
      {
        h2: 'Uren factureren met een online factuurtool',
        paragraphs: [
          'Je kunt een urenfactuur zelf maken in Word of Excel, maar bij meerdere facturen moet je de berekeningen en opmaak steeds zelf bijhouden.',
          'Met FactuurBaas kun je je uren en uurtarief als factuurregels invoeren. Het bedrag en de btw worden automatisch berekend. Daarna kun je de factuur direct als PDF downloaden.',
        ],
      },
      {
        h2: 'Uren factureren per week, maand of project',
        paragraphs: [
          'Je kunt uren op verschillende momenten factureren. Wanneer je factureert, hangt af van je afspraken met de klant en de overeenkomst.',
        ],
        subsections: [
          {
            h3: 'Per week',
            paragraphs: [
              'Handig wanneer je regelmatig voor dezelfde klant werkt en wekelijks factureert.',
            ],
          },
          {
            h3: 'Per maand',
            paragraphs: ['Je kunt alle gewerkte uren van een maand op één factuur zetten.'],
          },
          {
            h3: 'Per projectfase',
            paragraphs: [
              'Bij een langer project kun je uren per afgesproken fase of periode factureren.',
            ],
          },
        ],
      },
      {
        h2: 'Welke gegevens staan op een urenfactuur?',
        paragraphs: [
          'Een urenfactuur bevat naast de urenregistratie de gebruikelijke factuurgegevens. Een IBAN, website of logo kun je daarnaast toevoegen om de factuur completer en professioneler te maken.',
        ],
        bullets: [
          'naam en adres van jou en je klant',
          'factuurnummer',
          'factuurdatum',
          'duidelijke omschrijving van de werkzaamheden',
          'aantal gefactureerde uren',
          'uurtarief',
          'bedrag exclusief btw',
          'btw-tarief en btw-bedrag, als je btw rekent',
          'totaalbedrag',
          'overige gegevens die in jouw situatie verplicht zijn',
        ],
      },
      {
        h2: 'Uren factureren en btw',
        paragraphs: [
          'Als je btw moet rekenen, bereken je de btw over het bedrag dat je in rekening brengt.',
          'Bijvoorbeeld: 40 uur × €80 = €3.200 exclusief btw. Bij 21% btw: €3.200 × 21% = €672 btw. Totaal: €3.872.',
          'Niet iedere ondernemer rekent echter altijd 21% btw. Afhankelijk van je situatie kunnen bijvoorbeeld andere btw-regels gelden.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Moet ik elke dag apart op mijn urenfactuur zetten?',
        a: 'Nee, dat hoeft niet automatisch. Je kunt uren bijvoorbeeld per week, maand, project of soort werkzaamheden groeperen. Spreek met je klant af welke specificatie gewenst is.',
      },
      {
        q: "Hoe factureer ik uren als zzp'er?",
        a: 'Registreer je gewerkte uren, vermenigvuldig het aantal factureerbare uren met je afgesproken uurtarief en zet de werkzaamheden en periode duidelijk op je factuur. Voeg btw toe als je die moet rekenen.',
      },
      {
        q: 'Kan ik verschillende uurtarieven op één factuur gebruiken?',
        a: 'Ja. Je kunt verschillende werkzaamheden met hun eigen aantal uren en uurtarief als afzonderlijke factuurregels opnemen.',
      },
      {
        q: 'Moet ik een urenregistratie meesturen?',
        a: 'Dat hangt af van je afspraken met de klant. Soms is een samenvatting op de factuur voldoende; soms vraagt een klant om een uitgebreide urenspecificatie.',
      },
      {
        q: 'Kan ik een urenfactuur als PDF maken?',
        a: 'Ja. Met FactuurBaas kun je je urenfactuur maken en direct als PDF downloaden.',
      },
      {
        q: 'Kan ik een urenfactuur gratis maken?',
        a: 'Ja. Je kunt met FactuurBaas gratis een factuur maken en zonder account als PDF downloaden.',
      },
    ],
    relatedLinks: [
      { label: 'Urenfactuur template', href: '/factuur-template/uren' },
      { label: 'Freelance voorbeeld', href: '/factuur-voorbeeld/freelance' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
      { label: 'Consultant voorbeeld', href: '/factuur-voorbeeld/consultant' },
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
        { description: 'Strategisch adviestraject Q3', quantity: '1', amount: '€ 3.500,00' },
        { description: 'Adviesuren en projectbegeleiding', quantity: '10 uur', amount: '€ 1.000,00' },
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
          'Het voorbeeld hierboven toont factuurnummer 2026-051, datum 3 juli 2026, betaaltermijn 30 dagen. Strategisch adviestraject Q3 (€3.500) plus 10 uur adviesuren en projectbegeleiding (€1.000). Subtotaal €4.500, 21% btw €945, totaal €5.445.',
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
      { label: 'Uren factureren voorbeeld', href: '/factuur-voorbeeld/uren' },
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
      { label: 'Uren factureren voorbeeld', href: '/factuur-voorbeeld/uren' },
    ],
  }),

  'zonder-btw': examplePage('zonder-btw', {
    h1: 'Factuur zonder btw: voorbeeld en uitleg',
    metaTitle: "Factuur zonder btw: voorbeeld voor zzp'ers en kleine ondernemers",
    metaDescription:
      "Een factuur zonder btw maken? Bekijk voorbeelden voor de KOR en btw-vrijgestelde ondernemers en ontdek wat je op de factuur vermeldt.",
    intro:
      "Wil je als zzp'er of kleine ondernemer een factuur zonder btw maken? Dat kan in verschillende situaties. Je kunt bijvoorbeeld gebruikmaken van de KOR, een btw-vrijgestelde activiteit uitvoeren of in bepaalde situaties de btw verleggen naar je klant. Op een factuur zonder btw staat dus niet automatisch dezelfde reden. Het is belangrijk om te vermelden waarom je geen btw in rekening brengt en de juiste factuurvermelding te gebruiken.",
    templateHref: '/factuur-template/zonder-btw',
    closingTitle: 'Maak je eigen factuur zonder btw',
    closingText:
      'Heb je een factuur nodig voor een klant en hoef je in jouw situatie geen btw in rekening te brengen? Maak je factuur online, kies de juiste btw-behandeling en download de factuur direct als PDF.',
    example: {
      layout: 'plain',
      noBtw: true,
      exemptionNote: 'Vrijstelling van btw op grond van de kleineondernemersregeling (KOR).',
      invoiceNumber: '#2026-003',
      date: '9 juli 2026',
      paymentTerm: '14 dagen',
      from: { name: 'Creatief Atelier', detail: 'KvK 44332211' },
      to: { name: 'De Boer', detail: 'Groningen' },
      lineItems: [
        { description: 'Workshop fotografie', quantity: '1', amount: '€ 350,00' },
      ],
      total: '€ 350,00',
    },
    sections: [
      {
        h2: 'Voorbeeld factuur zonder btw',
        paragraphs: [
          'Een ondernemer die onder de KOR valt, brengt geen btw in rekening aan zijn klanten. Het voorbeeld hierboven toont factuurnummer 2026-003 van 9 juli 2026: Creatief Atelier factureert De Boer een workshop fotografie van €350. Er wordt geen btw-bedrag berekend of apart vermeld.',
          'Vermelding: vrijstelling van btw op grond van de kleineondernemersregeling (KOR). Gebruik bij een KOR-factuur de juiste vermelding voor de KOR. De exacte btw-behandeling kan in andere situaties anders zijn.',
        ],
      },
      {
        h2: 'Waarom staat er geen btw op deze factuur?',
        paragraphs: [
          'Een factuur kan om verschillende redenen zonder btw worden opgesteld.',
        ],
        subsections: [
          {
            h3: '1. Je gebruikt de KOR',
            paragraphs: [
              'De kleineondernemersregeling (KOR) is een regeling voor ondernemers met een beperkte omzet die aan de voorwaarden voldoen. Een KOR-factuur is dus niet hetzelfde als een factuur waarop een btw-vrijstelling voor een bepaalde dienst wordt toegepast.',
            ],
            bullets: [
              'bereken je geen btw aan je klanten',
              'vermeld je geen btw-bedrag op je factuur',
              'kun je btw op zakelijke kosten en investeringen in principe niet aftrekken',
            ],
          },
          {
            h3: '2. Je levert een btw-vrijgestelde dienst',
            paragraphs: [
              'Sommige werkzaamheden en activiteiten zijn vrijgesteld van btw. Denk bijvoorbeeld aan bepaalde diensten in de zorg, het onderwijs of financiële dienstverlening. In zo’n situatie breng je voor de betreffende vrijgestelde prestatie geen btw in rekening. De vermelding op de factuur moet passen bij de betreffende vrijstelling.',
            ],
          },
          {
            h3: '3. De btw wordt verlegd',
            paragraphs: [
              'Bij btw verlegd zet je eveneens geen btw-bedrag op de factuur, maar de reden is anders. De btw wordt dan door de klant aangegeven in plaats van door jou. Bijvoorbeeld bij bepaalde zakelijke diensten of onderaanneming kan de btw naar de afnemer worden verlegd. Op de factuur vermeld je dan bijvoorbeeld “Btw verlegd”. Bij een factuur met btw verlegd kan bovendien de btw-identificatie van de klant relevant zijn.',
            ],
          },
          {
            h3: '4. Het 0%-tarief geldt',
            paragraphs: [
              'Ook bij 0% btw staat er geen btw-bedrag op de factuur. Maar 0% btw is iets anders dan btw-vrijstelling of de KOR. Bij 0% btw is de prestatie namelijk wel belast met btw, maar tegen een tarief van 0%. Dit kan bijvoorbeeld voorkomen bij bepaalde internationale leveringen of diensten.',
            ],
          },
        ],
      },
      {
        h2: 'Factuur zonder btw: KOR, vrijstelling, 0% of btw verlegd?',
        paragraphs: [
          'Deze situaties worden vaak door elkaar gehaald. Het feit dat je geen btw-bedrag aan je klant in rekening brengt, betekent dus niet automatisch dat je btw-vrijgesteld bent.',
          'KOR: geen btw, juiste KOR-vermelding. Btw-vrijstelling: geen btw, vermelding die bij de vrijstelling hoort. Btw verlegd: geen btw, “Btw verlegd” plus overige vereiste gegevens. 0% btw: €0 btw met 0%-tarief. Normale btw: btw-tarief en btw-bedrag.',
        ],
      },
      {
        h2: "Factuur zonder btw als zzp'er",
        paragraphs: [
          "Ben je zzp'er en gebruik je de KOR? Dan kun je dus facturen sturen zonder btw. Voorbeeld: webdesign €750, btw niet in rekening gebracht vanwege KOR, totaal €750. Je klant betaalt in dit voorbeeld €750. Een belangrijk verschil met een normale factuur is dat je geen 21% btw boven op die €750 zet.",
        ],
      },
      {
        h2: 'Factuur zonder btw voor een kleine onderneming',
        paragraphs: [
          'Ook een kleine onderneming kan een factuur zonder btw sturen, maar alleen als daar een geldige reden voor is. “Ik ben een kleine onderneming” betekent op zichzelf niet dat je geen btw hoeft te rekenen. Je moet bijvoorbeeld daadwerkelijk onder de KOR vallen of een prestatie verrichten die van btw is vrijgesteld.',
        ],
      },
      {
        h2: 'Kan een factuur zonder btw aan een particulier?',
        paragraphs: [
          'Ja. Een factuur aan een particulier kan zonder btw worden opgesteld als je in die situatie geen btw hoeft te rekenen. Bijvoorbeeld omdat je de KOR toepast of omdat de betreffende prestatie vrijgesteld is. Het feit dat je klant een particulier is, betekent echter niet automatisch dat je geen btw hoeft te rekenen.',
        ],
      },
      {
        h2: 'Factuur zonder btw-nummer',
        paragraphs: [
          'Een factuur zonder btw-nummer kan in sommige situaties voorkomen, maar je moet eerst kijken waarom je geen btw rekent. Gebruik je bijvoorbeeld de KOR, dan gelden specifieke regels voor welke gegevens je op je factuur moet vermelden. Een ontbrekend btw-nummer is dus niet hetzelfde als “geen btw hoeven rekenen”.',
        ],
      },
      {
        h2: 'Welke gegevens staan op een factuur zonder btw?',
        paragraphs: [
          'Ook een factuur zonder btw moet de gegevens bevatten die in jouw situatie verplicht zijn. Welke gegevens precies nodig zijn, hangt onder andere af van de situatie en de reden waarom je geen btw in rekening brengt.',
        ],
        bullets: [
          'naam en adres van jou en je klant',
          'factuurnummer',
          'factuurdatum',
          'omschrijving van de geleverde dienst of goederen',
          'het bedrag dat je in rekening brengt',
          'de juiste vermelding wanneer geen btw wordt berekend',
        ],
      },
      {
        h2: 'Factuur zonder btw maken',
        paragraphs: [
          'Met FactuurBaas kun je een factuur maken en als PDF downloaden. Vul je bedrijfsgegevens en klantgegevens in, voeg je werkzaamheden toe en kies de juiste btw-instelling voor jouw situatie. Daarna kun je de factuur direct als PDF downloaden.',
        ],
      },
      {
        h2: 'Factuur met btw: voorbeeld',
        paragraphs: [
          "Niet iedere factuur van een zzp'er is een factuur zonder btw. Bij een normale btw-belaste dienst kan de factuur er bijvoorbeeld zo uitzien: dienstverlening €1.000, btw 21% €210, totaal €1.210. Hier wordt dus wel btw in rekening gebracht.",
          'Bekijk ook onze factuur voorbeelden als je een normale btw-factuur wilt bekijken.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wanneer mag ik een factuur zonder btw sturen?',
        a: 'Dat hangt af van de reden. Bijvoorbeeld de KOR, een btw-vrijgestelde prestatie, btw verlegd of een situatie waarin het 0%-tarief van toepassing is. Alleen “kleine ondernemer” zijn is op zichzelf geen reden om btw achterwege te laten.',
      },
      {
        q: 'Hoe ziet een factuur zonder btw eruit?',
        a: 'Op een factuur zonder btw staat geen afzonderlijk btw-bedrag. Je vermeldt daarnaast de juiste reden of tekst voor de situatie waarin je geen btw rekent.',
      },
      {
        q: "Kan ik als zzp'er factureren zonder btw?",
        a: 'Ja, bijvoorbeeld als je de KOR toepast of een btw-vrijgestelde prestatie verricht. Welke regels gelden, hangt af van je situatie.',
      },
      {
        q: 'Wat zet je op een factuur als je de KOR gebruikt?',
        a: 'Je brengt geen btw in rekening en vermeldt op de factuur dat de vrijstelling van toepassing is vanwege de KOR.',
      },
      {
        q: 'Is een KOR-factuur hetzelfde als een factuur zonder btw?',
        a: 'Een KOR-factuur is een type factuur zonder btw. Er zijn echter ook andere situaties waarin je geen btw op de factuur zet, zoals bepaalde vrijgestelde prestaties, btw verlegd of het 0%-tarief.',
      },
      {
        q: 'Is 0% btw hetzelfde als geen btw?',
        a: 'Nee. Bij 0% btw is de prestatie wel belast met btw, maar is het toepasselijke tarief 0%. Dat verschilt van een btw-vrijstelling en van de KOR.',
      },
      {
        q: 'Kan ik een voorschotfactuur zonder btw maken?',
        a: 'Dat kan als je ook over het voorschot geen btw hoeft te berekenen. De juiste behandeling hangt af van de reden waarom je geen btw rekent.',
      },
    ],
    relatedLinks: [
      { label: 'Factuur template zonder btw', href: '/factuur-template/zonder-btw' },
      { label: 'ZZP voorbeeld', href: '/factuur-voorbeeld/zzp' },
      { label: 'Factuur voorbeelden', href: '/factuur-voorbeeld' },
      { label: 'KOR calculator', href: '/tools/kor-calculator' },
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
    uren: 'Uren factureren',
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
      uren: "Voorbeeld urenfactuur met uurtarief voor zzp'ers.",
      consultant: 'Professioneel voor adviseurs en consultants.',
      freelance: 'Voor designers, developers en creatieven.',
      'zonder-btw': 'Voorbeelden voor KOR, vrijstelling, 0% en btw verlegd.',
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
