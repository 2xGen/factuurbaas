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
    closingTitle: config.closingTitle,
    closingText: config.closingText,
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
      { label: 'Offerte voorbeeld dienstverlening', href: '/offerte-voorbeeld/diensten' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  diensten: examplePage('diensten', {
    h1: 'Offerte voorbeeld dienstverlening',
    metaTitle: 'Offerte voorbeeld dienstverlening | Gratis voorbeeld',
    metaDescription:
      "Bekijk een uitgebreid offerte voorbeeld voor dienstverlening, zzp'ers en consultants. Inclusief werkzaamheden, prijs, btw, geldigheid en voorwaarden.",
    intro:
      "Op zoek naar een voorbeeld van een offerte voor dienstverlening? Hieronder zie je een ingevuld voorbeeld voor een adviestraject. Je kunt dezelfde opbouw gebruiken voor consultancy, marketing, webdesign, coaching, administratie, IT en andere zakelijke diensten. Een goede offerte maakt duidelijk wat je gaat leveren, wat de opdracht kost en welke afspraken gelden.",
    closingTitle: 'Maak je eigen offerte voor dienstverlening',
    closingText:
      'Gebruik het voorbeeld als basis en pas de werkzaamheden, prijs en voorwaarden aan jouw opdracht aan. Gratis en zonder account.',
    example: {
      layout: 'plain',
      quoteNumber: 'OFF-2026-028',
      date: '9 juli 2026',
      validUntil: '24 juli 2026',
      from: { name: 'Advies Partners', detail: 'KvK 87654321 · Utrecht' },
      to: { name: 'Tech Startup BV', detail: 'Utrecht · T.a.v. de heer Jansen' },
      lineItems: [
        { description: 'Analyse en voorbereiding', quantity: '1', amount: '€ 1.000,00' },
        { description: 'Strategiesessies', quantity: '2', amount: '€ 1.000,00' },
        { description: 'Strategisch adviesrapport', quantity: '1', amount: '€ 1.500,00' },
      ],
      subtotal: '€ 3.500,00',
      btwLabel: 'BTW 21%',
      btwAmount: '€ 735,00',
      total: '€ 4.235,00',
    },
    sections: [
      {
        h2: 'Voorbeeld offerte dienstverlening',
        paragraphs: [
          'Het voorbeeld hierboven toont offerte OFF-2026-028 van 9 juli 2026, geldig tot 24 juli 2026. Advies Partners stuurt Tech Startup BV een strategisch adviestraject: analyse en voorbereiding (€1.000), twee strategiesessies (€1.000) en een strategisch adviesrapport (€1.500). Subtotaal €3.500, 21% btw €735, totaal €4.235.',
          'De opdracht omvat advies en begeleiding bij het aanscherpen van de commerciële strategie, inclusief analyse, twee strategiesessies en een uitgewerkt adviesrapport. Start binnen twee weken na akkoord; werkzaamheden worden in overleg ingepland. Bij akkoord kan de klant per e-mail bevestigen onder vermelding van het offertenummer.',
        ],
      },
      {
        h2: 'Wat staat er in een offerte voor dienstverlening?',
        paragraphs: [
          'Een offerte voor diensten hoeft niet ingewikkeld te zijn. De klant moet vooral kunnen begrijpen wat je aanbiedt en wat het kost.',
          'Welke informatie je precies opneemt, hangt af van de opdracht. Bekijk ook onze gids over wat er op een offerte moet staan.',
        ],
        bullets: [
          'je bedrijfsnaam en contactgegevens',
          'klantgegevens',
          'offertenummer',
          'datum',
          'geldigheidsduur',
          'duidelijke omschrijving van de dienstverlening',
          'werkzaamheden of deliverables',
          'aantal uren, dagen of onderdelen als dat relevant is',
          'prijs per onderdeel of een vaste projectprijs',
          'btw, als dat van toepassing is',
          'planning of verwachte oplevering',
          'betalingsafspraken',
          'eventuele voorwaarden',
        ],
      },
      {
        h2: 'Offerte voor dienstverlening: wees duidelijk over de scope',
        paragraphs: [
          'Bij diensten is de omschrijving van de werkzaamheden extra belangrijk.',
          'Een omschrijving als “Marketingadvies – €2.500” geeft de klant weinig informatie.',
          'Een duidelijkere omschrijving is bijvoorbeeld: “Marketingadviestraject van 4 weken, inclusief intake, analyse van huidige marketingactiviteiten, twee strategiesessies en een schriftelijk adviesrapport.” Zo is duidelijker wat de klant voor het bedrag krijgt.',
          'Vermeld waar mogelijk ook wat niet inbegrepen is. Bijvoorbeeld: “Advertentiebudgetten en externe productiekosten zijn niet inbegrepen.” Dat kan later veel discussie voorkomen.',
        ],
      },
      {
        h2: 'Uurtarief of vaste prijs in een dienstenofferte?',
        paragraphs: [
          'Je kunt diensten op verschillende manieren prijzen.',
        ],
        subsections: [
          {
            h3: 'Uurtarief',
            paragraphs: [
              'Bij een uurtarief vermeld je bijvoorbeeld 20 uur consultancy à €100 = €2.000. Dit werkt goed wanneer vooraf moeilijk precies in te schatten is hoeveel tijd een opdracht kost.',
            ],
          },
          {
            h3: 'Vaste projectprijs',
            paragraphs: [
              'Bij een vaste prijs vermeld je bijvoorbeeld: “Strategisch adviestraject – vaste projectprijs: €3.500”. Dit kan prettig zijn wanneer de werkzaamheden en scope vooraf duidelijk zijn.',
            ],
          },
          {
            h3: 'Combinatie',
            paragraphs: [
              'Je kunt ook een vaste prijs gebruiken voor een bepaald onderdeel en een uurtarief voor werkzaamheden buiten de afgesproken scope. Bijvoorbeeld: websiteproject €4.000 vaste prijs, aanvullende werkzaamheden buiten scope €90 per uur. Zorg dan dat duidelijk is wanneer het uurtarief voor meerwerk wordt toegepast.',
            ],
          },
        ],
      },
      {
        h2: "Offerte voorbeeld voor een zzp'er",
        paragraphs: [
          "Als zzp'er kun je dezelfde structuur gebruiken voor vrijwel iedere zakelijke dienstverlening. Het belangrijkste verschil zit meestal in de omschrijving van de werkzaamheden en de prijsopbouw. Een consultant kan bijvoorbeeld een adviestraject aanbieden, terwijl een webdesigner onderdelen van een website specificeert.",
          'Bekijk ook ons offerte voorbeeld voor zzp’ers voor een ander ingevuld voorbeeld.',
        ],
        bullets: [
          'consultant',
          'coach',
          'marketeer',
          'webdesigner',
          'tekstschrijver',
          'fotograaf',
          'developer',
          'administrateur',
          'VA',
          'social media specialist',
        ],
      },
      {
        h2: 'Voorbeeld offerte consultant',
        paragraphs: [
          'Een consultancy-offerte kan bijvoorbeeld bestaan uit de opdracht “commerciële strategie” met een vaste projectprijs van €3.500 exclusief btw. Of je kunt de werkzaamheden op basis van uren aanbieden. Een duidelijke offerte maakt in beide gevallen zichtbaar wat de klant precies krijgt.',
        ],
        bullets: [
          'intakegesprek',
          'analyse huidige situatie',
          'onderzoek',
          'strategiesessie',
          'adviesrapport',
          'presentatie van aanbevelingen',
        ],
      },
      {
        h2: 'Voorbeeld offerte creatieve diensten',
        paragraphs: [
          'Ook voor creatieve bureaus en freelancers is een duidelijke scope belangrijk. Bijvoorbeeld: conceptontwikkeling €750, ontwerp (3) €1.200, revisieronde (2) €400, eindbestanden €250 — subtotaal €2.600.',
          'Vermeld bij creatieve opdrachten bijvoorbeeld hoeveel concepten en revisierondes inbegrepen zijn. Extra revisies of werkzaamheden buiten de afgesproken scope kun je vervolgens apart afspreken.',
        ],
      },
      {
        h2: 'Btw op een dienstenofferte',
        paragraphs: [
          'Ben je btw-plichtig en is 21% btw van toepassing? Dan kun je bijvoorbeeld tonen: prijs exclusief btw €3.500, 21% btw €735, totaal inclusief btw €4.235.',
          'Het juiste btw-tarief hangt af van de dienst en de situatie. Niet iedere dienst valt automatisch onder 21% btw. Gebruik je de KOR, dan breng je geen btw in rekening. Controleer bij twijfel de actuele btw-regels voor jouw situatie.',
        ],
      },
      {
        h2: 'Wat als je nog niet precies weet hoeveel werk het wordt?',
        paragraphs: [
          'Je kunt in de offerte werken met een ureninschatting. Bijvoorbeeld: “Verwachte werkzaamheden: 20–25 uur à €100 per uur.” Maak daarbij duidelijk of het om een inschatting of een vaste prijs gaat.',
          'Je kunt ook een maximum aantal uren afspreken voordat aanvullende werkzaamheden eerst met de klant worden besproken. Dat voorkomt dat de klant achteraf wordt verrast door een veel hoger bedrag.',
        ],
      },
      {
        h2: 'Geldigheidsduur van een dienstenofferte',
        paragraphs: [
          'Een offerte kun je een duidelijke geldigheidsduur geven. Bijvoorbeeld: “Deze offerte is geldig tot en met 24 juli 2026.”',
          'Je bepaalt zelf welke termijn passend is. Bij een eenvoudige dienst kan 14 of 30 dagen voldoende zijn. Bij opdrachten waarbij prijzen of omstandigheden snel kunnen veranderen, kan een kortere termijn logischer zijn.',
        ],
      },
      {
        h2: 'Wat zet je bij de voorwaarden?',
        paragraphs: [
          'Houd de voorwaarden begrijpelijk en zorg dat duidelijk is wat onderdeel is van de prijs. Gebruik je algemene voorwaarden, vermeld dan dat deze van toepassing zijn en zorg dat de klant ze kan bekijken.',
        ],
        bullets: [
          'planning',
          'betaling',
          'annulering',
          'aantal revisierondes',
          'meerwerk',
          'reiskosten',
          'externe kosten',
          'oplevering',
          'gebruiksrechten',
          'algemene voorwaarden',
        ],
      },
      {
        h2: 'Wat gebeurt er na akkoord?',
        paragraphs: [
          'Een offerte is een voorstel. Nadat de klant akkoord gaat, ontstaat de opdracht volgens de gemaakte afspraken. Bij grotere opdrachten kan het handig zijn om de gemaakte afspraken nogmaals schriftelijk te bevestigen.',
          'Lees ook onze gids over offerte omzetten naar factuur voor de volgende stap.',
        ],
        bullets: [
          '1. de planning bevestigen',
          '2. eventueel een voorschot factureren',
          '3. met de werkzaamheden beginnen',
          '4. tussentijds factureren als dat is afgesproken',
          '5. de eindfactuur sturen na oplevering',
        ],
      },
      {
        h2: 'Veelgemaakte fouten in een dienstenofferte',
        subsections: [
          {
            h3: 'De dienstverlening te algemeen omschrijven',
            paragraphs: [
              '“Consultancy” of “marketingwerkzaamheden” zegt weinig. Beschrijf de belangrijkste werkzaamheden en resultaten.',
            ],
          },
          {
            h3: 'Geen duidelijke scope',
            paragraphs: [
              'Vermeld wat inbegrepen is en wat buiten de opdracht valt.',
            ],
          },
          {
            h3: 'Geen geldigheidsduur',
            paragraphs: [
              'Zet duidelijk tot wanneer de aangeboden prijs geldig is.',
            ],
          },
          {
            h3: 'Onduidelijkheid over meerwerk',
            paragraphs: [
              'Maak vooraf duidelijk wat er gebeurt wanneer de klant extra werkzaamheden vraagt.',
            ],
          },
          {
            h3: 'Geen onderscheid tussen vaste prijs en uurtarief',
            paragraphs: [
              'Maak duidelijk of het bedrag een vaste projectprijs is of een berekening op basis van uren.',
            ],
          },
          {
            h3: 'Geen afspraken over betaling',
            paragraphs: [
              'Beschrijf wanneer je factureert, bijvoorbeeld vooraf, in termijnen of na oplevering.',
            ],
          },
        ],
      },
      {
        h2: 'Uitgebreid offerte voorbeeld downloaden',
        paragraphs: [
          'Wil je een voorbeeld gebruiken als uitgangspunt voor je eigen offerte? Gebruik de bovenstaande opbouw en pas de werkzaamheden, prijzen en voorwaarden aan jouw opdracht aan. Wil je direct een eigen offerte als PDF maken? Open de gratis offerte maker.',
        ],
      },
      {
        h2: 'Offerte maken voor je eigen dienstverlening',
        paragraphs: [
          'Met FactuurBaas maak je online een offerte voor je diensten. Vul je bedrijfs- en klantgegevens in, voeg je werkzaamheden en prijzen toe en download de offerte als PDF. Je kunt direct beginnen zonder account.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Wat moet er op een offerte voor dienstverlening staan?',
        a: 'Zorg in ieder geval voor duidelijke bedrijfs- en klantgegevens, een omschrijving van de dienstverlening, de prijs, eventuele btw, de geldigheidsduur en belangrijke afspraken over de uitvoering.',
      },
      {
        q: 'Hoe maak ik een professionele offerte voor mijn diensten?',
        a: 'Beschrijf eerst duidelijk wat je gaat leveren. Geef daarna de prijsopbouw, planning, geldigheidsduur en voorwaarden. Zorg voor een overzichtelijke indeling en controleer de offerte voordat je deze verstuurt.',
      },
      {
        q: "Kan ik als zzp'er een offerte voor diensten maken?",
        a: "Ja. Een zzp'er kan een offerte gebruiken om vooraf afspraken te maken over werkzaamheden, prijs en voorwaarden.",
      },
      {
        q: 'Zet ik mijn uurtarief op de offerte?',
        a: 'Dat kan. Als je op uurbasis werkt, kun je je uurtarief en het verwachte aantal uren vermelden. Bij een vaste projectprijs kun je ook alleen de afgesproken totaalprijs tonen.',
      },
      {
        q: 'Hoeveel btw reken ik op diensten?',
        a: 'Dat hangt af van de dienst en de situatie. Voor veel diensten geldt 21% btw, maar er zijn uitzonderingen. Controleer het juiste btw-tarief voor jouw specifieke dienstverlening.',
      },
      {
        q: 'Moet een offerte een KvK-nummer bevatten?',
        a: 'Er is geen algemene regel dat iedere offerte exact dezelfde gegevens moet bevatten als een factuur. Een KvK-nummer kan wel nuttig zijn om je onderneming duidelijk te identificeren.',
      },
      {
        q: 'Hoe lang moet een offerte geldig zijn?',
        a: 'Dat bepaal je zelf. Vermeld een concrete einddatum, bijvoorbeeld “geldig tot en met 24 juli 2026”.',
      },
      {
        q: 'Kan ik een offerte voor dienstverlening gratis maken?',
        a: 'Ja. Met de gratis offerte maker van FactuurBaas kun je een offerte maken en als PDF downloaden zonder account.',
      },
    ],
    relatedLinks: [
      { label: 'Consultant factuur voorbeeld', href: '/factuur-voorbeeld/consultant' },
      { label: 'Wat moet er op een offerte staan', href: '/gidsen/wat-moet-er-op-een-offerte-staan' },
      { label: 'Offerte omzetten naar factuur', href: '/gidsen/offerte-omzetten-naar-factuur' },
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
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
      { label: 'Offerte voorbeeld dienstverlening', href: '/offerte-voorbeeld/diensten' },
      { label: 'Offerte voorbeeld horeca en catering', href: '/offerte-voorbeeld/horeca' },
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
      { label: 'Offerte voorbeeld dienstverlening', href: '/offerte-voorbeeld/diensten' },
      { label: 'Marketing offerte voorbeeld', href: '/offerte-voorbeeld/marketing' },
    ],
  }),
  horeca: examplePage('horeca', {
    h1: 'Offerte voorbeeld horeca en catering',
    metaTitle: 'Offerte voorbeeld horeca en catering | Gratis voorbeeld',
    metaDescription:
      'Bekijk een uitgebreid offerte voorbeeld voor horeca, catering en evenementen. Met menu, aantal personen, personeel, materiaal, btw en voorwaarden.',
    intro:
      'Een goede horeca offerte maakt duidelijk wat je levert, voor hoeveel personen, wanneer en tegen welke prijs. Dat is vooral belangrijk bij catering voor bruiloften, bedrijfsfeesten, evenementen en andere groepsreserveringen. Hieronder vind je een uitgebreid offerte voorbeeld voor horeca en catering, inclusief menu, bediening, materiaal, btw en geldigheidsduur.',
    closingTitle: 'Maak je eigen horeca offerte',
    closingText:
      'Gebruik dit voorbeeld als basis. Voeg je menu, aantal personen, locatie, prijzen en voorwaarden toe en download je offerte als PDF. Gratis en zonder account.',
    example: {
      layout: 'minimalist',
      quoteNumber: 'OFF-2026-063',
      date: '9 juli 2026',
      validUntil: '24 juli 2026',
      from: { name: 'Catering De Smaak', detail: 'KvK 33445566 · Den Haag' },
      to: { name: 'Eventbureau Luxe', detail: 'Den Haag · Bedrijfsevent 15 augustus 2026' },
      lineItems: [
        { description: 'Walking dinner – 80 personen', quantity: '80', amount: '€ 4.000,00' },
        { description: 'Personeel bediening', quantity: '1', amount: '€ 650,00' },
        { description: 'Servies en glaswerk', quantity: '1', amount: '€ 350,00' },
        { description: 'Transport en opbouw', quantity: '1', amount: '€ 250,00' },
      ],
      subtotal: '€ 5.250,00',
      btwLabel: 'BTW',
      btwAmount: '€ 750,00',
      total: '€ 6.000,00',
    },
    sections: [
      {
        h2: 'Voorbeeld horeca offerte',
        paragraphs: [
          'Het voorbeeld hierboven toont offerte OFF-2026-063 van 9 juli 2026, geldig tot 24 juli 2026. Catering De Smaak biedt Eventbureau Luxe een walking dinner voor 80 personen op 15 augustus 2026 in Den Haag.',
          'Prijsopbouw: walking dinner €4.000, personeel bediening €650, servies en glaswerk €350, transport en opbouw €250. Subtotaal €5.250, btw €750, totaal €6.000. Het toepasselijke btw-tarief kan per onderdeel verschillen — vermeld op je eigen offerte welk tarief op iedere prestatie van toepassing is.',
          'Inbegrepen: ontvangst van de gasten, walking-dinnermenu, bediening, servies en glaswerk, opbouw en afbouw, en transport binnen de afgesproken locatie. Definitieve planning, aantal gasten en aanvullende wensen worden na akkoord afgestemd.',
        ],
      },
      {
        h2: 'Wat staat er in een goede horeca offerte?',
        paragraphs: [
          'Een horeca- of cateringofferte moet vooral duidelijk maken wat de klant precies krijgt. Hoe groter of complexer het evenement, hoe belangrijker een duidelijke prijsopbouw wordt.',
        ],
        bullets: [
          'gegevens van je horecabedrijf of cateringbedrijf',
          'gegevens van de klant',
          'datum van de offerte',
          'offertenummer',
          'datum en locatie van het evenement',
          'aantal gasten of personen',
          'menu of cateringpakket',
          'bediening en personeel',
          'materiaal, zoals servies en glaswerk',
          'transport en opbouw',
          'prijs per persoon of totaalprijs',
          'toepasselijke btw',
          'geldigheidsduur',
          'voorwaarden en eventuele annuleringsafspraken',
        ],
      },
      {
        h2: 'Catering offerte voorbeeld',
        paragraphs: [
          'Een cateringofferte wordt vaak opgebouwd rond het aantal personen. Bijvoorbeeld: cateringpakket 80 personen €4.000, bediening €650, materiaal €350, transport €250. Zo ziet de klant niet alleen het eindbedrag, maar ook waar de prijs uit bestaat.',
          'Je kunt ook met een prijs per persoon werken. Bijvoorbeeld: 80 personen × €50 per persoon = €4.000. Daar kunnen vervolgens kosten voor bediening, materiaal, transport of andere diensten bij komen.',
        ],
      },
      {
        h2: 'Offerte voor een restaurant',
        paragraphs: [
          'Ook een restaurant kan een offerte gebruiken wanneer een klant bijvoorbeeld een besloten diner, bedrijfsfeest of grote groepsreservering organiseert. Maak duidelijk wat bij de prijs is inbegrepen. Zo voorkom je dat de klant bijvoorbeeld denkt dat drank, zaalhuur of bediening inbegrepen is terwijl dat niet zo is.',
        ],
        bullets: [
          'aantal gasten',
          'menu',
          'drankarrangement',
          'zaalhuur',
          'personeel',
          'eventuele minimumafname',
          'datum en tijd',
          'locatie',
          'totaalprijs',
          'voorwaarden',
        ],
      },
      {
        h2: 'Offerte voor een cateraar',
        paragraphs: [
          'Een cateraar heeft vaak meer onderdelen om te benoemen dan alleen het eten. Door deze onderdelen afzonderlijk te benoemen, krijgt de klant een duidelijker beeld van de offerte.',
        ],
        subsections: [
          {
            h3: 'Catering',
            bullets: ['hapjes', 'lunch', 'diner', 'buffet', 'walking dinner'],
          },
          {
            h3: 'Personeel',
            bullets: ['bediening', 'koks', 'barpersoneel'],
          },
          {
            h3: 'Materiaal',
            bullets: ['servies', 'bestek', 'glaswerk', 'tafels en stoelen'],
          },
          {
            h3: 'Logistiek',
            bullets: ['transport', 'opbouw', 'afbouw'],
          },
        ],
      },
      {
        h2: 'Btw op een horeca- of cateringofferte',
        paragraphs: [
          'Het btw-tarief is afhankelijk van wat je precies levert. Je moet daarom niet automatisch één btw-tarief over de volledige horeca- of cateringofferte zetten. Verschillende onderdelen van een opdracht kunnen onder verschillende btw-tarieven vallen.',
          'Controleer daarom per onderdeel welk btw-tarief van toepassing is en vermeld de btw duidelijk op je offerte. Voor een specifieke situatie kun je de actuele regels van de Belastingdienst controleren.',
        ],
      },
      {
        h2: 'Horeca offerte maken in Excel of Word',
        paragraphs: [
          'Je kunt een horeca offerte natuurlijk zelf maken in Word of Excel. Dat kan prima wanneer je maar af en toe een offerte maakt. Bij veel offertes wordt het echter belangrijker om dezelfde opmaak te gebruiken, offertenummers bij te houden, fouten in berekeningen te voorkomen, offertes snel als PDF te kunnen maken en oude offertes makkelijk terug te vinden. Een online offerteprogramma kan dan praktischer zijn.',
        ],
      },
      {
        h2: 'Offerteprogramma voor horeca en catering',
        paragraphs: [
          'Een offerteprogramma voor horeca helpt je om offertes digitaal te maken en als PDF naar klanten te sturen. Met FactuurBaas kun je online een offerte maken, de offerte als PDF downloaden en deze vervolgens zelf naar je klant versturen.',
        ],
        bullets: [
          'cateraars',
          'restaurants',
          'lunchrooms',
          'evenementenlocaties',
          'foodtrucks',
          'private chefs',
          'horecabedrijven met zakelijke klanten',
        ],
      },
      {
        h2: 'Online offerte maken voor catering',
        paragraphs: [
          'Bij cateringoffertes is het handig om de belangrijkste informatie direct in je offerte te verwerken. Bijvoorbeeld: “Bedrijfsevent – 80 personen. Datum: 15 augustus 2026. Locatie: Den Haag. Walking dinner inclusief bediening en materiaal.”',
          'Daaronder zet je de prijsopbouw en eventuele voorwaarden. Zo hoeft de klant niet heen en weer te mailen om te achterhalen wat precies is inbegrepen.',
        ],
      },
      {
        h2: 'Offerte voor een bruiloft',
        paragraphs: [
          'Voor een bruiloft kan een offerte uitgebreider zijn dan voor een eenvoudige zakelijke lunch. Maak vooral duidelijk welke onderdelen inbegrepen zijn en welke kosten eventueel afhankelijk zijn van het definitieve aantal gasten.',
        ],
        bullets: [
          'aantal gasten',
          'ontvangst met hapjes',
          'diner of buffet',
          'drankarrangement',
          'personeel',
          'servies en glaswerk',
          'locatie',
          'decoratie',
          'opbouw en afbouw',
          'eventuele extra uren',
          'totaalprijs',
          'voorwaarden voor wijzigingen en annulering',
        ],
      },
      {
        h2: 'Offerte voor een bedrijfsevent',
        paragraphs: [
          'Voor een bedrijfsfeest of zakelijke bijeenkomst kan een offerte bijvoorbeeld bestaan uit catering voor 100 personen op 10 oktober 2026 in Utrecht. Zet vervolgens per onderdeel de prijs en het toepasselijke btw-tarief.',
        ],
        bullets: [
          'ontvangst met hapjes',
          'buffet',
          'drankarrangement',
          'bediening',
          'servies en glaswerk',
          'transport',
          'opbouw en afbouw',
        ],
      },
      {
        h2: 'Hoe lang is een horeca offerte geldig?',
        paragraphs: [
          'Je kunt zelf een geldigheidsduur voor je offerte bepalen. Dat is bij catering extra belangrijk omdat prijzen en beschikbaarheid kunnen veranderen en een evenement vaak op een specifieke datum plaatsvindt.',
          'Vermeld daarom bijvoorbeeld: “Deze offerte is geldig tot en met 24 juli 2026.” Als een klant pas na deze datum akkoord gaat, kun je controleren of de prijs, beschikbaarheid en voorwaarden nog hetzelfde zijn.',
        ],
      },
      {
        h2: 'Wat gebeurt er nadat de klant akkoord gaat?',
        paragraphs: [
          'Na akkoord kun je de gemaakte afspraken definitief vastleggen en de catering of reservering inplannen. Leg belangrijke wijzigingen bij voorkeur schriftelijk vast.',
          'Lees ook onze gids over offerte omzetten naar factuur voor de volgende stap.',
        ],
        bullets: [
          'een aanbetaling of voorschot factureren',
          'de definitieve aantallen vastleggen',
          'het evenement voorbereiden',
          'na levering of uitvoering de eindfactuur sturen',
        ],
      },
      {
        h2: 'Veelgemaakte fouten bij horeca offertes',
        subsections: [
          {
            h3: 'Alleen een totaalprijs vermelden',
            paragraphs: [
              'Een totaalbedrag zonder uitleg kan onduidelijk zijn. Laat zien wat de klant daarvoor krijgt.',
            ],
          },
          {
            h3: 'Geen aantal personen vermelden',
            paragraphs: [
              'Bij catering is het aantal gasten vaak een belangrijk onderdeel van de prijs.',
            ],
          },
          {
            h3: 'Niet aangeven wat inbegrepen is',
            paragraphs: [
              'Maak duidelijk of bediening, materiaal, transport en andere onderdelen wel of niet inbegrepen zijn.',
            ],
          },
          {
            h3: 'Btw niet duidelijk vermelden',
            paragraphs: [
              'Controleer het btw-tarief per onderdeel wanneer verschillende prestaties worden geleverd.',
            ],
          },
          {
            h3: 'Geen geldigheidsduur',
            paragraphs: ['Vermeld tot wanneer je aanbod geldig is.'],
          },
          {
            h3: 'Geen duidelijke voorwaarden',
            paragraphs: [
              'Bij grotere evenementen zijn afspraken over wijzigingen, aantallen en annulering extra belangrijk.',
            ],
          },
        ],
      },
      {
        h2: 'Checklist horeca offerte',
        paragraphs: ['Controleer voor je de offerte verstuurt:'],
        bullets: [
          'bedrijfsgegevens ingevuld',
          'klantgegevens gecontroleerd',
          'offertenummer toegevoegd',
          'datum en locatie vermeld',
          'aantal personen vermeld',
          'menu of cateringpakket beschreven',
          'bediening en materiaal beschreven',
          'transport en opbouw vermeld',
          'prijzen gecontroleerd',
          'btw gecontroleerd',
          'geldigheidsduur toegevoegd',
          'voorwaarden toegevoegd',
          'PDF gecontroleerd',
        ],
      },
    ],
    faqs: [
      {
        q: 'Hoe maak ik een horeca offerte?',
        a: 'Beschrijf wat je voor de klant gaat leveren, voor hoeveel personen, op welke datum en locatie en tegen welke prijs. Vermeld daarnaast je bedrijfsgegevens, offertenummer, btw, geldigheidsduur en relevante voorwaarden.',
      },
      {
        q: 'Waar kan ik een catering offerte maken?',
        a: 'Je kunt een cateringofferte online maken met de gratis offerte maker van FactuurBaas. Je kunt de offerte vervolgens als PDF downloaden.',
      },
      {
        q: 'Wat moet er op een catering offerte staan?',
        a: 'Zet in ieder geval de bedrijfs- en klantgegevens, omschrijving van de catering, aantal personen, prijs, btw, geldigheidsduur en relevante voorwaarden op de offerte.',
      },
      {
        q: 'Welk btw-tarief geldt voor catering?',
        a: 'Dat hangt af van wat je precies levert. Het is daarom niet altijd correct om de volledige cateringofferte automatisch tegen hetzelfde btw-tarief te berekenen.',
      },
      {
        q: 'Kan ik een horeca offerte als PDF maken?',
        a: 'Ja. Met FactuurBaas kun je een offerte online maken en als PDF downloaden.',
      },
      {
        q: 'Kan ik een horeca offerte gratis maken?',
        a: 'Ja. Met de gratis offerte maker van FactuurBaas kun je zonder account een offerte maken en als PDF downloaden.',
      },
      {
        q: 'Is er een offerteprogramma voor horeca?',
        a: 'Ja, je kunt hiervoor een online offerteprogramma gebruiken. FactuurBaas is een eenvoudige optie voor horecabedrijven en cateraars die online offertes als PDF willen maken.',
      },
    ],
    relatedLinks: [
      { label: 'Offerte templates', href: '/offerte-template' },
      { label: 'Offerte omzetten naar factuur', href: '/gidsen/offerte-omzetten-naar-factuur' },
      { label: 'Offerte maker', href: '/tools/offerte-maker' },
    ],
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
    relatedLinks: [{ label: 'Offerte voorbeeld dienstverlening', href: '/offerte-voorbeeld/diensten' }],
    relatedExamples: [
      { label: 'ZZP offerte voorbeeld', href: '/offerte-voorbeeld/zzp' },
      { label: 'Freelance offerte voorbeeld', href: '/offerte-voorbeeld/freelance' },
      { label: 'Offerte voorbeeld dienstverlening', href: '/offerte-voorbeeld/diensten' },
      { label: 'Offerte voorbeeld horeca en catering', href: '/offerte-voorbeeld/horeca' },
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
    diensten: 'Offerte dienstverlening',
    bouw: 'Bouw offerte',
    freelance: 'Freelance offerte',
    horeca: 'Horeca & catering',
    marketing: 'Marketing offerte',
  };

  return Object.values(offerteVoorbeeldPages).map((page) => ({
    slug: page.slug,
    label: hubTitles[page.slug] || page.h1,
    href: `/offerte-voorbeeld/${page.slug}`,
    description: {
      zzp: 'Standaard offerte voor zelfstandigen met btw.',
      diensten: "Voorbeeld voor consultants, zzp'ers en zakelijke dienstverlening.",
      bouw: 'Voor aannemers, schilders en klusbedrijven.',
      freelance: 'Voor designers, developers en creatieven.',
      horeca: 'Catering, restaurants en evenementen — met personen, menu en btw.',
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
