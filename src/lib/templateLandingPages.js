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
    h1: 'Factuur template Excel: gratis voorbeeld',
    metaTitle: 'Factuur template Excel: gratis voorbeeld en alternatief',
    metaDescription:
      'Op zoek naar een factuur template in Excel? Bekijk een voorbeeld van een Excel-factuur en ontdek hoe je gratis een factuur als PDF maakt.',
    intro:
      'Zoek je een factuur template in Excel? Hieronder zie je een voorbeeld van hoe een factuur in Excel kan worden opgebouwd, inclusief factuurnummer, bedragen, btw en totaal. Wil je niet zelf met Excel-formules en opmaak werken? Met FactuurBaas maak je dezelfde soort factuur gratis online en download je hem direct als PDF — zonder account.',
    previewLayout: 'corporate',
    sections: [
      {
        h2: 'Voorbeeld van een factuur in Excel',
        paragraphs: [
          'Rechts op deze pagina zie je het soort factuur dat je ook met een Excel-factuurtemplate kunt maken: factuurnummer 2026-001, datum, betaaltermijn 14 dagen, omschrijving, 10 uur, €750 excl. btw, 21% btw (€157,50) en totaal €907,50.',
          'Dit is slechts een voorbeeld. Je eigen factuur bevat natuurlijk je eigen bedrijfs- en klantgegevens.',
        ],
      },
      {
        h2: 'Wat staat er in een Excel-factuur?',
        paragraphs: [
          'Een goed factuursjabloon in Excel bevat in ieder geval ruimte voor de onderstaande onderdelen. Je kunt een Excel-factuur vervolgens opslaan en eventueel als PDF exporteren om naar je klant te sturen.',
        ],
        bullets: [
          'Je naam of bedrijfsnaam en adres',
          'De gegevens van je klant',
          'Een uniek factuurnummer',
          'De factuurdatum',
          'Een omschrijving van je producten of diensten',
          'Aantal uren of producten',
          'Bedragen exclusief btw',
          'Het btw-tarief en btw-bedrag',
          'Het totaalbedrag',
          'Je betaalgegevens en betaaltermijn',
        ],
      },
      {
        h2: 'Factuur maken in Excel',
        paragraphs: [
          'Wil je zelf een factuur in Excel maken? Dan kun je dit als basis gebruiken. Bij een uitgebreider Excel-sjabloon kun je hiervoor formules gebruiken.',
        ],
        bullets: [
          'Maak een tabel met je producten of diensten.',
          'Voeg kolommen toe voor aantal, prijs en btw.',
          'Bereken het subtotaal.',
          'Bereken de btw.',
          'Tel het totaalbedrag uit.',
          'Voeg je bedrijfs- en klantgegevens toe.',
          'Controleer het factuurnummer en de factuurdatum.',
          'Exporteer de factuur eventueel als PDF.',
        ],
        subsections: [
          {
            h3: 'Voorbeeld van een btw-formule in Excel',
            paragraphs: [
              'Stel dat het bedrag exclusief btw in cel B2 staat en je 21% btw wilt berekenen: =B2*21%. Voor een bedrag van €750 is de btw dan €157,50.',
              'Het totaal inclusief btw kun je bijvoorbeeld berekenen met: =B2+(B2*21%). Een bestaand Excel-factuursjabloon kan deze berekeningen automatisch uitvoeren. Meer formules vind je in de gids over btw berekenen in Excel.',
            ],
          },
        ],
      },
      {
        h2: 'Excel factuur of online factuur maken?',
        paragraphs: [
          'Excel is handig als je graag zelf je facturen beheert en een eigen template wilt aanpassen. Maar voor iedere factuur moet je vervolgens wel controleren of de gegevens en berekeningen goed staan. Met een online factuurtool hoef je de Excel-opmaak en formules niet zelf te onderhouden.',
        ],
        comparison: {
          headers: ['', 'Excel factuur', 'FactuurBaas'],
          rows: [
            ['Zelf een template maken', 'Ja', 'Nee'],
            ['Formules onderhouden', 'Vaak nodig', 'Nee'],
            ['Btw berekenen', 'Met formule', 'Automatisch'],
            ['PDF maken', 'Exporteren', 'Direct downloaden'],
            ['Account nodig', 'Nee', 'Nee'],
            ['Gratis', 'Kan', 'Ja'],
          ],
        },
      },
      {
        h2: 'Factuur in Excel als PDF opslaan',
        paragraphs: [
          'Een Excel-factuur kun je meestal exporteren of opslaan als PDF. Dat is handig wanneer je een vaste factuur naar een klant wilt sturen. Controleer vóór het versturen wel of de PDF er correct uitziet en of alle gegevens en bedragen kloppen.',
          'Met FactuurBaas wordt de factuur direct als PDF gegenereerd nadat je je gegevens en factuurregels hebt ingevuld.',
        ],
      },
      {
        h2: 'Is een Excel-factuur geschikt voor zzp’ers?',
        paragraphs: [
          'Ja. Als zzp’er kun je je facturen bijvoorbeeld met Excel maken, zolang je factuur aan de geldende factuureisen voldoet en je administratie goed wordt bijgehouden.',
          'Voor iemand die maar af en toe een factuur maakt kan Excel prima werken. Als je regelmatig facturen maakt, kan een online factuurtool tijd besparen doordat je gegevens en berekeningen niet iedere keer opnieuw hoeft op te bouwen.',
        ],
      },
      {
        h2: 'Factuur template Excel vs. online factuur',
        paragraphs: [
          'Een Excel-template geeft je veel vrijheid om de factuur zelf aan te passen. Daar staat tegenover dat je zelf verantwoordelijk bent voor de formules, opmaak en controle van iedere factuur. Met FactuurBaas vul je alleen je gegevens en factuurregels in en download je daarna direct een PDF.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Is er een gratis factuur template voor Excel?',
        a: 'Je kunt een factuur in Excel zelf opbouwen met een tabel voor omschrijving, aantal, bedrag en btw. Controleer altijd of het template alle benodigde factuurgegevens bevat. Wil je geen Excel-template onderhouden? Met FactuurBaas maak je gratis online een factuur en download je deze als PDF.',
      },
      {
        q: 'Hoe maak ik een factuur in Excel?',
        a: 'Maak een overzicht met je bedrijfsgegevens, klantgegevens, factuurnummer, datum, diensten of producten, bedragen en btw. Gebruik vervolgens Excel-formules om btw en het totaal te berekenen.',
      },
      {
        q: 'Hoe bereken ik btw in een Excel-factuur?',
        a: 'Bij 21% btw kun je bijvoorbeeld =B2*21% gebruiken wanneer het bedrag exclusief btw in cel B2 staat. Voor andere btw-tarieven pas je het percentage aan.',
      },
      {
        q: 'Kan ik een Excel-factuur als PDF versturen?',
        a: 'Ja. Je kunt een factuur vanuit Excel als PDF opslaan of exporteren. Controleer de PDF voordat je deze naar je klant stuurt.',
      },
      {
        q: 'Kan ik uren factureren met Excel?',
        a: 'Ja. Je kunt bijvoorbeeld het aantal gewerkte uren, je uurtarief en het totaalbedrag in afzonderlijke kolommen opnemen.',
      },
      {
        q: 'Is een online factuurtool makkelijker dan Excel?',
        a: 'Dat hangt af van je voorkeur. Excel geeft je veel controle over je eigen template. Een online factuurtool kan handiger zijn als je niet zelf formules, opmaak en PDF-export wilt beheren.',
      },
    ],
    relatedLinks: [
      { label: 'Word template', href: '/factuur-template/word' },
      { label: 'PDF template', href: '/factuur-template/pdf' },
      { label: 'Uren factuur', href: '/factuur-template/uren' },
      { label: 'BTW in Excel', href: '/gidsen/btw-berekenen-excel' },
      { label: 'Alle templates', href: '/factuur-template' },
      { label: 'Gratis factuur maken', href: '/tools/factuur-maken' },
    ],
  },

  pdf: {
    slug: 'pdf',
    h1: 'Factuur template PDF: gratis voorbeeld en download',
    metaTitle: 'Factuur template PDF: gratis voorbeeld en download',
    metaDescription:
      'Op zoek naar een factuur template PDF? Bekijk een gratis factuurvoorbeeld en maak direct je eigen factuur als PDF. Zonder account.',
    intro:
      'Zoek je een factuur template PDF die je direct kunt gebruiken? Met FactuurBaas maak je eenvoudig online een factuur en download je deze meteen als professionele PDF. Geen Word- of Excel-omweg: vul je gegevens in en download direct. Gratis, zonder account.',
    previewLayout: 'plain',
    sections: [
      {
        h2: 'Gratis factuur template als PDF',
        paragraphs: [
          'Een factuurtemplate is handig als je snel een nette factuur wilt maken zonder zelf een document op te bouwen. Met FactuurBaas hoef je deze onderdelen niet zelf in Word of Excel te ontwerpen: je vult ze online in en de factuur wordt voor je opgebouwd.',
        ],
        bullets: [
          'je bedrijfsgegevens;',
          'de gegevens van je klant;',
          'een uniek factuurnummer;',
          'de factuurdatum;',
          'een omschrijving van je diensten of producten;',
          'bedragen en aantallen;',
          'het btw-tarief en btw-bedrag, als van toepassing;',
          'het totaalbedrag;',
          'de betaaltermijn.',
        ],
      },
      {
        h2: 'Factuur PDF voorbeeld',
        paragraphs: [
          'Rechts op deze pagina zie je een voorbeeld van een eenvoudige PDF-factuur: factuurnummer, datum, bedrijfs- en klantgegevens, omschrijving, btw 21% en totaal. Dit is slechts een voorbeeld — je eigen factuur bevat natuurlijk je eigen gegevens.',
          'Wil je zelf zo’n factuur maken? Vul je gegevens in de factuurmaker in en download direct als PDF.',
        ],
      },
      {
        h2: 'Factuur maken en downloaden als PDF',
        paragraphs: [
          'Bij FactuurBaas werkt het in drie eenvoudige stappen. Je hoeft geen apart PDF-bestand te maken of een Word-document naar PDF om te zetten.',
        ],
        subsections: [
          {
            h3: '1. Vul je gegevens in',
            paragraphs: ['Vul je eigen bedrijfsgegevens en de gegevens van je klant in.'],
          },
          {
            h3: '2. Voeg je diensten of producten toe',
            paragraphs: [
              'Vul bijvoorbeeld je gewerkte uren, producten of projectwerkzaamheden in. Btw en totalen worden automatisch berekend.',
            ],
          },
          {
            h3: '3. Download je factuur als PDF',
            paragraphs: [
              'Als je factuur klaar is, kun je deze direct als PDF downloaden en naar je klant sturen.',
            ],
          },
        ],
      },
      {
        h2: 'Factuur template PDF of Word?',
        paragraphs: [
          'Je kunt een factuur natuurlijk zelf maken in Word of Excel en deze daarna als PDF opslaan. Voor een eenmalige factuur kan dat prima werken. Een online factuurmaker heeft echter een aantal voordelen.',
          'Wil je vooral snel een factuur als PDF maken? Dan is een online factuurmaker meestal eenvoudiger.',
        ],
        comparison: {
          headers: ['Online factuurmaker', 'Word/Excel-template'],
          rows: [
            ['Btw en totalen automatisch berekend', 'Zelf berekenen'],
            ['Direct PDF downloaden', 'Eerst exporteren naar PDF'],
            ['Gegevens in een vaste layout', 'Zelf opmaak controleren'],
            ['Minder kans op rekenfouten', 'Formules of berekeningen controleren'],
            ['Geen template nodig', 'Template downloaden en aanpassen'],
          ],
        },
      },
      {
        h2: 'Welke gegevens moeten op een PDF-factuur staan?',
        paragraphs: [
          'Een factuur moet bepaalde gegevens bevatten. Welke gegevens precies op je factuur moeten staan, kan afhangen van je situatie. Denk bijvoorbeeld aan:',
        ],
        bullets: [
          'je volledige naam of bedrijfsnaam en adres;',
          'het KvK-nummer, als dit op jou van toepassing is;',
          'je btw-identificatienummer, als dit op jou van toepassing is;',
          'de gegevens van je klant;',
          'een uniek en opeenvolgend factuurnummer;',
          'de factuurdatum;',
          'de datum van levering of uitvoering, als die afwijkt;',
          'een duidelijke omschrijving van de geleverde goederen of diensten;',
          'het bedrag exclusief btw;',
          'het btw-tarief en btw-bedrag, als btw van toepassing is;',
          'het totaalbedrag;',
          'eventuele informatie die in jouw specifieke situatie verplicht is.',
        ],
      },
      {
        h2: 'Is een PDF-factuur geldig?',
        paragraphs: [
          'Ja. Een factuur die je als PDF naar je klant stuurt kan gewoon als factuur worden gebruikt. Zorg er wel voor dat de factuur alle gegevens bevat die voor jouw situatie verplicht zijn en dat je administratie op orde is.',
          'Een PDF is vooral handig omdat je klant het document eenvoudig kan openen, bewaren en verwerken.',
        ],
      },
      {
        h2: 'Kan ik een factuur zonder account maken?',
        paragraphs: [
          'Ja. Met FactuurBaas kun je direct een factuur maken zonder eerst een account aan te maken. Je vult je gegevens in, maakt de factuur en downloadt deze als PDF.',
        ],
      },
      {
        h2: 'Kan ik een factuur met btw maken?',
        paragraphs: [
          'Ja. Je kunt btw op je factuur verwerken en het btw-bedrag wordt automatisch berekend. FactuurBaas ondersteunt onder andere de btw-tarieven 0%, 9% en 21%. Welke btw-regels op jouw factuur van toepassing zijn, hangt af van je situatie.',
        ],
      },
      {
        h2: 'Kan ik mijn logo op de factuur zetten?',
        paragraphs: [
          'Als de factuurtool een logo-optie biedt, kun je je eigen huisstijl gebruiken. Je kunt de beschikbare opties direct bekijken wanneer je een factuur maakt.',
        ],
      },
      {
        h2: 'Kan ik de PDF naar mijn klant mailen?',
        paragraphs: [
          'Ja. Nadat je de factuur als PDF hebt gedownload, kun je deze bijvoorbeeld als bijlage naar je klant sturen. FactuurBaas hoeft de factuur dus niet voor je te versturen.',
        ],
      },
      {
        h2: 'Factuur template voor zzp’ers',
        paragraphs: [
          'Een factuurtemplate is vooral handig wanneer je als zzp’er regelmatig facturen maakt. Of je nu freelancer, consultant, marketeer, webdesigner, fotograaf, coach, timmerman of een andere zelfstandige ondernemer bent: de basis van een factuur blijft grotendeels hetzelfde.',
          'Je kunt je eigen diensten, uren of producten toevoegen en vervolgens de PDF-factuur downloaden.',
        ],
      },
      {
        h2: 'Gratis factuur PDF maken',
        paragraphs: [
          'Wil je niet zelf een Word- of Excel-template aanpassen? Maak dan direct online je eigen factuur. Geen account nodig. Geen ingewikkeld sjabloon. Gewoon je gegevens invullen en je PDF downloaden.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Waar kan ik een gratis factuur template PDF vinden?',
        a: 'Je kunt een voorbeeld gebruiken als basis, maar met een online factuurmaker kun je direct je eigen factuur maken en als PDF downloaden.',
      },
      {
        q: 'Hoe maak ik een factuur als PDF?',
        a: 'Vul je factuur online in, voeg je factuurregels en btw toe en download de factuur vervolgens als PDF. Met FactuurBaas kan dit zonder account.',
      },
      {
        q: 'Kan ik een factuur in Word maken en als PDF opslaan?',
        a: 'Ja. Je kunt een factuur in Word maken en deze vervolgens als PDF opslaan. Een online factuurmaker kan dit eenvoudiger maken doordat berekeningen en de opmaak automatisch worden verwerkt.',
      },
      {
        q: 'Is een gratis PDF-factuur geschikt voor een zzp’er?',
        a: 'Ja, zolang de factuur de gegevens bevat die voor jouw situatie verplicht zijn en je administratie correct wordt bijgehouden.',
      },
      {
        q: 'Wat is het verschil tussen een factuurtemplate en een factuurmaker?',
        a: 'Een template is een voorbeeld of sjabloon dat je zelf invult. Met een factuurmaker maak je de factuur direct online en worden onderdelen zoals btw, totalen en de opmaak automatisch verwerkt.',
      },
    ],
    relatedLinks: [
      { label: 'Alle factuur templates', href: '/factuur-template' },
      { label: 'Word template', href: '/factuur-template/word' },
      { label: 'Excel template', href: '/factuur-template/excel' },
      { label: 'Factuur template zzp', href: '/factuur-template/zzp' },
      { label: 'Factuur voorbeeld', href: '/blogs/factuur-templates-zzp' },
      { label: 'BTW calculator', href: '/tools/btw-calculator' },
      { label: 'Gratis factuur maken', href: '/tools/factuur-maken' },
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
