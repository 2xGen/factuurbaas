import React from 'react';

const CtaButton = () => (
    React.createElement('div', { className: "my-8 text-center" },
        React.createElement('a', { href: "/create-invoice", className: "bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg no-underline" }, "Maak Nu Je Gratis Factuur")
    )
);

const BlogLink = ({ to, children, className }) => (
    React.createElement('a', { href: to, className: className }, children)
);

export const articles = [
  {
    slug: 'factuur-maken-zzp',
    title: 'Hoe maak je een factuur als zzp’er? (stappenplan + gratis voorbeeld)',
    excerpt: 'Praktische uitleg voor startende zzp’ers over hoe je een factuur opstelt, inclusief verplichte onderdelen en handige tips.',
    keywords: 'factuur maken zzp, voorbeeld factuur, factuur verplichtingen, factuur tips',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20maak%20je%20een%20factuur%20als%20zzp%20er.png',
      alt: 'Een zzp\'er die geconcentreerd een factuur maakt op een laptop in een modern kantoor.',
    },
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Factureren is een essentieel onderdeel van het zzp-bestaan. Een correcte factuur zorgt niet alleen voor een professionele uitstraling, maar is ook cruciaal om op tijd betaald te krijgen en te voldoen aan de eisen van de Belastingdienst. In dit stappenplan leggen we precies uit hoe je een factuur maakt die aan alles voldoet.'),
        React.createElement('h2', null, 'Stap 1: Verzamel de verplichte gegevens'),
        React.createElement('p', null, 'Volgens de Belastingdienst moet elke factuur bepaalde onderdelen bevatten. Zorg ervoor dat je deze altijd vermeldt om problemen te voorkomen:'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Jouw bedrijfsgegevens:'), ' Volledige naam en adres.'),
          React.createElement('li', null, React.createElement('strong', null, 'Jouw KVK- en btw-nummer:'), ' Deze zijn uniek voor jouw bedrijf.'),
          React.createElement('li', null, React.createElement('strong', null, 'Klantgegevens:'), ' Volledige naam en adres van je klant.'),
          React.createElement('li', null, React.createElement('strong', null, 'Factuurnummer:'), ' Een uniek, opvolgend nummer voor elke factuur (bijv. 2024-001, 2024-002).'),
          React.createElement('li', null, React.createElement('strong', null, 'Factuurdatum:'), ' De datum waarop je de factuur verstuurt.'),
          React.createElement('li', null, React.createElement('strong', null, 'Omschrijving van diensten/producten:'), ' Wees specifiek over wat je hebt geleverd en de hoeveelheid.'),
          React.createElement('li', null, React.createElement('strong', null, 'Datum van levering:'), ' Wanneer je de diensten of producten hebt geleverd.'),
          React.createElement('li', null, React.createElement('strong', null, 'Bedragen:'), ' Het bedrag exclusief btw, het btw-tarief en -bedrag, en het totaalbedrag inclusief btw.')
        ),
        React.createElement('h2', null, 'Stap 2: Kies een professionele layout'),
        React.createElement('p', null, 'Een rommelige factuur kan onprofessioneel overkomen. Gebruik een schone, overzichtelijke layout. Met een tool als ', React.createElement('strong', null, 'FactuurBaas'), ' hoef je hier niet over na te denken; je kiest een template en de rest wordt voor je geregeld. Plaats je logo bovenaan en zorg voor een duidelijk leesbaar lettertype.'),
        React.createElement(CtaButton, null),
        React.createElement('h2', null, 'Stap 3: Omschrijf je werk duidelijk'),
        React.createElement('p', null, 'Een vage omschrijving zoals "Geleverde diensten" kan tot vragen leiden. Wees specifiek. Bijvoorbeeld:'),
        React.createElement('ul', null,
          React.createElement('li', null, 'Website design - Homepage (10 uur x €75)'),
          React.createElement('li', null, 'Teksten voor over-ons pagina (500 woorden)')
        ),
        React.createElement('p', null, 'Dit voorkomt onduidelijkheid en zorgt ervoor dat je klant precies weet waarvoor hij betaalt.'),
        React.createElement('h2', null, 'Stap 4: Vermeld de betaalgegevens en -termijn'),
        React.createElement('p', null, 'Maak het je klant zo makkelijk mogelijk om te betalen. Vermeld duidelijk:'),
        React.createElement('ul', null,
          React.createElement('li', null, 'Jouw IBAN-rekeningnummer en de tenaamstelling.'),
          React.createElement('li', null, 'De betalingstermijn (bijv. "Graag betalen binnen 14 dagen").')
        ),
        React.createElement('p', null, 'Een vriendelijke afsluiting zoals "Bedankt voor de prettige samenwerking!" kan ook wonderen doen.'),
        React.createElement('h2', null, 'Gratis Voorbeeld met FactuurBaas'),
        React.createElement('p', null, 'Geen zin om zelf te knutselen met Word of Excel? Maak je eerste factuur gratis met FactuurBaas. Onze tool zorgt ervoor dat alle verplichte onderdelen erop staan en genereert automatisch een professionele PDF. Zo kun jij je focussen op waar je goed in bent: ondernemen.')
      )
    )
  },
  {
    slug: 'factuur-fouten-voorkomen',
    title: '7 veelgemaakte fouten op facturen en hoe je ze voorkomt',
    excerpt: 'Veel zzp’ers maken onbewust fouten op hun facturen. Leer hoe je die voorkomt en altijd professioneel factureert.',
    keywords: 'fouten op factuur, factuur tips zzp, correcte factuur maken, factuur verplicht',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/7%20veelgemaakte%20fouten%20op%20facturen%20en%20hoe%20je%20ze%20voorkomt.png',
      alt: 'Een bureau met een factuur waarop een vergrootglas ligt, focus op een rode foutmarkering.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
        React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Een foutje op een factuur is snel gemaakt, maar kan leiden tot vertraagde betalingen, vragen van klanten, of zelfs problemen met de Belastingdienst. Hier zijn de 7 meest voorkomende fouten en hoe je ze met een slimme tool als FactuurBaas eenvoudig voorkomt.'),
            React.createElement('h3', null, '1. Verkeerd of niet-opeenvolgend factuurnummer'),
            React.createElement('p', null, 'De Belastingdienst eist dat je factuurnummers uniek en opeenvolgend zijn. Handmatig bijhouden in Excel is vragen om problemen. ', React.createElement('strong', null, 'De oplossing:'), ' Een goed factuurprogramma nummert je facturen automatisch door. Geen gepuzzel meer.'),
            React.createElement('h3', null, '2. Btw-fouten'),
            React.createElement('p', null, 'Het verkeerde btw-tarief toepassen, de btw verkeerd berekenen of vergeten te vermelden. ', React.createElement('strong', null, 'De oplossing:'), ' Gebruik een tool die de btw automatisch voor je berekent op basis van het bedrag en het geselecteerde tarief (21%, 9% of 0%).'),
            React.createElement('h3', null, '3. Essentiële gegevens vergeten'),
            React.createElement('p', null, 'Het KVK-nummer, je adres of de factuurdatum. Het is zo gebeurd dat je iets vergeet. ', React.createElement('strong', null, 'De oplossing:'), ' FactuurBaas slaat jouw bedrijfsgegevens op en vult ze automatisch in op elke nieuwe factuur. Zo vergeet je nooit meer iets.'),
            React.createElement('h3', null, '4. Vage omschrijvingen'),
            React.createElement('p', null, '"Consultancy" of "Geleverde werkzaamheden". Je klant weet niet waarvoor hij betaalt, wat tot vragen en uitstel leidt. ', React.createElement('strong', null, 'De oplossing:'), ' Wees specifiek. Omschrijf de taak, het aantal uren, of het product. Duidelijkheid versnelt de betaling.'),
            React.createElement(CtaButton, null),
            React.createElement('h3', null, '5. Onprofessionele uitstraling'),
            React.createElement('p', null, 'Een factuur in een Word-document met rare lettertypes en verspringende logo\'s straalt geen professionaliteit uit. ', React.createElement('strong', null, 'De oplossing:'), ' Kies een strak, modern template. Met FactuurBaas ziet je factuur er altijd tiptop uit, zonder enige moeite.'),
            React.createElement('h3', null, '6. Geen duidelijke betalingstermijn'),
            React.createElement('p', null, 'Als je niet aangeeft wanneer je betaald wilt worden, kan een klant de betaling eindeloos uitstellen. ', React.createElement('strong', null, 'De oplossing:'), ' Vermeld altijd een concrete termijn, zoals "Betalen binnen 14 dagen".'),
            React.createElement('h3', null, '7. De factuur niet als PDF versturen'),
            React.createElement('p', null, 'Een Word- of Excel-factuur kan door de ontvanger (per ongeluk) worden aangepast. Dit is niet rechtsgeldig. ', React.createElement('strong', null, 'De oplossing:'), ' Verstuur je factuur altijd als PDF. Dit is een \'dicht\' document. FactuurBaas genereert automatisch een veilige PDF voor je.')
        )
    )
  },
    {
    slug: 'factuur-templates-zzp',
    title: 'Handige factuur templates voor zzp’ers',
    excerpt: 'Gratis templates en voorbeelden om direct professioneel je facturen te maken met FactuurBaas.',
    keywords: 'factuur template, gratis factuur voorbeeld, zzp facturen, professionele factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Handige%20factuur%20templates%20voor%20zzp%20ers.png',
      alt: 'Verschillende professionele factuur templates getoond op een laptop scherm.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Een professionele uitstraling is key voor elke zzp\'er. Je factuur is vaak het laatste contactmoment met je klant, dus je wilt een goede indruk achterlaten. In plaats van zelf te stoeien met templates in Word of Excel, kun je beter een tool gebruiken die speciaal voor dit doel is gemaakt.'),
        React.createElement('h2', null, 'Waarom een goed template belangrijk is'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Professionaliteit:'), ' Een strak en consistent design wekt vertrouwen.'),
          React.createElement('li', null, React.createElement('strong', null, 'Herkenbaarheid:'), ' Je logo en huisstijl op elke factuur versterken je merk.'),
          React.createElement('li', null, React.createElement('strong', null, 'Foutloos:'), ' Goede templates zorgen ervoor dat alle verplichte velden ingevuld worden.'),
          React.createElement('li', null, React.createElement('strong', null, 'Tijdsbesparing:'), ' Je hoeft niet elke keer het wiel opnieuw uit te vinden.')
        ),
        React.createElement('h2', null, 'De oplossing van FactuurBaas'),
        React.createElement('p', null, 'Bij FactuurBaas hebben we het giswerk uit het proces gehaald. Onze online tool biedt meerdere, door experts ontworpen templates. Het enige wat jij hoeft te doen, is je gegevens invullen.'),
        React.createElement('h3', null, 'Hoe werkt het?'),
        React.createElement('ol', null,
          React.createElement('li', null, 'Ga naar de ', React.createElement(BlogLink, { to: "/create-invoice", className: "text-warm-orange hover:underline" }, 'factuurmaker'), '.'),
          React.createElement('li', null, 'Vul je bedrijfsgegevens en die van je klant in.'),
          React.createElement('li', null, 'Voeg de geleverde diensten of producten toe.'),
          React.createElement('li', null, 'Kies een van de professionele layouts.'),
          React.createElement('li', null, 'Download je factuur direct als PDF. Klaar!')
        ),
        React.createElement(CtaButton, null),
        React.createElement('h2', null, 'Voordelen van FactuurBaas templates'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Altijd correct:'), ' Onze templates bevatten alle door de Belastingdienst verplichte elementen.'),
          React.createElement('li', null, React.createElement('strong', null, 'Mobielvriendelijk:'), ' Maak onderweg net zo makkelijk een factuur als op je desktop.'),
          React.createElement('li', null, React.createElement('strong', null, 'Direct resultaat:'), ' Zie live een preview van je factuur terwijl je de gegevens invult.')
        ),
        React.createElement('p', null, 'Stop met tijd verspillen en begin vandaag nog met het maken van facturen die indruk maken. Probeer FactuurBaas nu gratis en ervaar het gemak zelf.')
      )
    )
  },
  {
    slug: 'verschil-factuur-offerte',
    title: 'Verschil offerte en factuur: wanneer welke? Uitleg + voorbeelden',
    excerpt: 'Wat is het verschil tussen een offerte en een factuur? In 2 minuten uitgelegd: wanneer offerte, wanneer factuur en hoe ze samenwerken. Met gratis voorbeeld.',
    keywords: 'verschil offerte en factuur, offerte en factuur, offerte vs factuur, verschil factuur offerte, is een offerte vrijblijvend, wat is een offerte',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Wat%20is%20het%20verschil%20tussen%20een%20factuur%20en%20een%20offerte.png',
      alt: 'Twee documenten naast elkaar: een offerte en een factuur, met pijlen die de flow ertussen aangeven.',
    },
    content: (
        React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Offerte en factuur: twee termen die vaak door elkaar worden gehaald, maar fundamenteel verschillen. Weten wanneer je welke moet gebruiken is cruciaal voor een soepel bedrijfsproces. We leggen het je uit.'),
            React.createElement('h2', null, 'De Offerte: Een Vrijblijvend Voorstel'),
            React.createElement('p', null, 'Een offerte maak je ', React.createElement('strong', null, 'vóórdat'), ' je aan een opdracht begint. Het is een prijsvoorstel voor de diensten of producten die je gaat leveren. Een offerte is juridisch gezien een aanbod. Pas als de klant akkoord gaat, is er een overeenkomst.'),
            React.createElement('h4', null, 'Wanneer gebruik je een offerte?'),
            React.createElement('ul', null,
                React.createElement('li', null, 'Bij grotere projecten met variabele kosten.'),
                React.createElement('li', null, 'Als een potentiële klant om een prijsopgave vraagt.'),
                React.createElement('li', null, 'Om afspraken en de omvang van het werk formeel vast te leggen.')
            ),
            React.createElement('p', null, React.createElement('strong', null, 'Belangrijk:'), ' Een offerte is meestal vrijblijvend, tenzij anders vermeld. Zet er altijd een geldigheidsduur op (bijv. "Deze offerte is 30 dagen geldig").'),
            React.createElement('h2', null, 'De Factuur: Een Betaalverzoek'),
            React.createElement('p', null, 'Een factuur stuur je ', React.createElement('strong', null, 'nadat'), ' je de werkzaamheden hebt afgerond of de producten hebt geleverd. Het is een officieel betaalverzoek voor het geleverde werk. In tegenstelling tot een offerte, is een factuur een juridisch document met wettelijke verplichtingen.'),
            React.createElement('h4', null, 'Wanneer gebruik je een factuur?'),
            React.createElement('ul', null,
                React.createElement('li', null, 'Om betaald te worden voor geleverde diensten of producten.'),
                React.createElement('li', null, 'Voor je btw-administratie en boekhouding.')
            ),
            React.createElement('h2', null, 'De Slimme Combinatie'),
            React.createElement('p', null, 'In de praktijk werken offertes en facturen hand in hand:'),
            React.createElement('ol', null,
                React.createElement('li', null, 'Je stuurt een ', React.createElement('strong', null, 'offerte'), ' naar een potentiële klant.'),
                React.createElement('li', null, 'De klant gaat ', React.createElement('strong', null, 'akkoord'), ' (schriftelijk of per e-mail).'),
                React.createElement('li', null, 'Je voert de ', React.createElement('strong', null, 'werkzaamheden'), ' uit zoals afgesproken.'),
                React.createElement('li', null, 'Je stuurt een ', React.createElement('strong', null, 'factuur'), ' die verwijst naar de goedgekeurde offerte (bijv. "Volgens offerte 2024-A01").')
            ),
            React.createElement('p', null, 'Hoewel FactuurBaas zich momenteel richt op vlijmscherpe facturatie, is het goed om dit proces te begrijpen. Een duidelijke offerte voorkomt discussies achteraf en legt de basis voor de factuur die je later met FactuurBaas in een handomdraai maakt.'),
            React.createElement(CtaButton, null)
        )
    )
  },
  {
    slug: 'btw-factuur-zzp',
    title: 'Btw op je factuur: zo doe je het goed als zzp’er',
    excerpt: 'Duidelijke uitleg over hoe btw werkt op facturen, inclusief kleineondernemersregeling (KOR) en buitenlandse klanten.',
    keywords: 'btw factuur, factuur regels btw, kor factuur, buitenlandse klanten factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Btw%20op%20je%20factuur%20zo%20doe%20je%20het%20goed%20als%20zzp%20er.png',
      alt: 'Een rekenmachine met bonnetjes en een factuur, illustreert de berekening van btw.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
        React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Btw (Belasting over de Toegevoegde Waarde) is een belangrijk onderdeel van je facturatie. Het correct toepassen ervan is niet alleen verplicht, maar ook essentieel voor een gezonde boekhouding. We gidsen je door de basisprincipes.'),
            React.createElement('h3', null, 'Hoe werkt btw op je factuur?'),
            React.createElement('p', null, 'Als ondernemer "incasseer" je btw namens de Belastingdienst. Je telt het btw-bedrag op bij de prijs van je product of dienst. Dit bedrag draag je later af via je btw-aangifte. De btw die je zelf betaalt over zakelijke inkopen, mag je daar weer van aftrekken.'),
            React.createElement('p', null, 'Op je factuur vermeld je dit altijd gesplitst:'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, 'Subtotaal (excl. btw):'), ' Het bedrag voor jouw werk.'),
                React.createElement('li', null, React.createElement('strong', null, 'Btw-tarief en -bedrag:'), ' Bijvoorbeeld "21% btw" en het berekende bedrag.'),
                React.createElement('li', null, React.createElement('strong', null, 'Totaal (incl. btw):'), ' Het eindbedrag dat de klant betaalt.')
            ),
            React.createElement('h3', null, 'Welk btw-tarief moet je gebruiken?'),
            React.createElement('p', null, 'In Nederland zijn er drie tarieven:'),
            React.createElement('ul', null,
                React.createElement('li', null, React.createElement('strong', null, '21% (standaardtarief):'), ' Dit geldt voor de meeste diensten en producten.'),
                React.createElement('li', null, React.createElement('strong', null, '9% (verlaagd tarief):'), ' Voor o.a. voedingsmiddelen, boeken, kappers en culturele diensten.'),
                React.createElement('li', null, React.createElement('strong', null, '0% (nultarief):'), ' Voor export van goederen naar andere EU-landen of daarbuiten.')
            ),
            React.createElement('p', null, 'Controleer altijd welk tarief voor jouw branche van toepassing is.'),
            React.createElement('h3', null, 'Speciale Regeling: De KOR'),
            React.createElement('p', null, 'De ', React.createElement('strong', null, 'Kleineondernemersregeling (KOR)'), ' is een btw-vrijstelling voor ondernemers met een jaaromzet van maximaal € 20.000. Maak je gebruik van de KOR?'),
            React.createElement('ul', null,
                React.createElement('li', null, 'Je rekent ', React.createElement('strong', null, 'geen btw'), ' op je facturen.'),
                React.createElement('li', null, 'Je doet geen btw-aangifte.'),
                React.createElement('li', null, 'Je mag ook geen btw op je zakelijke kosten aftrekken.'),
                React.createElement('li', null, 'Je moet op je factuur vermelden: "Factuur vrijgesteld van btw op grond van artikel 25 Wet OB".')
            ),
            React.createElement('h3', null, 'Factureren aan het buitenland'),
            React.createElement('p', null, 'Factureer je aan een ondernemer in een ander EU-land? Dan pas je meestal de ', React.createElement('strong', null, 'btw-verleggingsregeling'), ' toe. Dit betekent dat je 0% btw rekent en op de factuur vermeldt: "Btw verlegd". De klant berekent en betaalt dan de btw in zijn eigen land. Hiervoor heb je het btw-identificatienummer van je klant nodig.'),
            React.createElement('p', null, 'Met een tool als FactuurBaas kun je eenvoudig het juiste btw-tarief selecteren of aangeven dat de btw verlegd is. De tool doet de rest, zodat jij je geen zorgen hoeft te maken over de berekeningen.')
        )
    )
  },
    {
    slug: 'buitenlandse-klanten-factureren',
    title: 'Factuur maken voor buitenland: btw, valuta en regels',
    excerpt: 'Buitenlandse klanten factureren als zzp: btw verlegd, factuur zonder btw buitenland, valuta en verplichte vermeldingen. Stapsgewijs uitgelegd.',
    keywords: 'factuur buitenland, buitenlandse klanten factureren, btw buitenlandse factuur, factuur zonder btw buitenland, btw verlegd buitenland',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Buitenlandse%20klanten%20factureren.png',
      alt: 'Een wereldbol met verschillende valutasymbolen eromheen, wat internationale handel symboliseert.',
    },
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Steeds meer zzp\'ers werken voor internationale klanten. Fantastisch voor je groei, maar het brengt ook specifieke facturatieregels met zich mee. Hoe zit het met btw, valuta en andere verplichtingen? We zetten het op een rij.'),
        React.createElement('h2', null, 'Btw verleggen binnen de EU'),
        React.createElement('p', null, 'Lever je diensten aan een andere ondernemer binnen de EU? Dan is de hoofdregel \'btw verleggen\'. Dit houdt in:'),
        React.createElement('ul', null,
          React.createElement('li', null, 'Je brengt ', React.createElement('strong', null, '0% btw'), ' in rekening.'),
          React.createElement('li', null, 'Je vermeldt het ', React.createElement('strong', null, 'btw-identificatienummer van je klant'), ' op de factuur. Dit is verplicht!'),
          React.createElement('li', null, 'Je zet op de factuur de tekst: ', React.createElement('strong', null, '"Btw verlegd"'), ' of "Reverse charge".')
        ),
        React.createElement('p', null, 'De klant is dan zelf verantwoordelijk voor de btw-aangifte in zijn eigen land. Dit kun je eenvoudig instellen in een goede factuurtool.'),
        React.createElement('h2', null, 'Klanten buiten de EU'),
        React.createElement('p', null, 'Voor klanten buiten de EU ligt het simpeler: je brengt geen btw in rekening. De dienst is \'belast in het land van de afnemer\'. Vermeld op je factuur dat het om een \'prestatie buiten de EU\' gaat.'),
        React.createElement('h2', null, 'Factureren in een andere valuta'),
        React.createElement('p', null, 'Spreek je met je klant een prijs af in dollars of ponden? Dat mag. Je mag de factuur in een vreemde valuta opstellen, maar let op: voor je eigen btw-aangifte moet je het btw-bedrag altijd omrekenen naar euro\'s. Gebruik hiervoor de wisselkoers op de factuurdatum.'),
        React.createElement('p', null, React.createElement('strong', null, 'Tip:'), ' Om verwarring te voorkomen, kun je het totaalbedrag in zowel de vreemde valuta als in euro\'s op de factuur vermelden.'),
        React.createElement('h2', null, 'Maak het makkelijk met FactuurBaas'),
        React.createElement('p', null, 'Al deze regels kunnen complex lijken, maar FactuurBaas maakt het eenvoudig. In onze tool kun je makkelijk de btw verleggen of een ander btw-tarief selecteren. Zo weet je zeker dat je internationale facturen correct zijn, zonder dat je zelf een expert hoeft te zijn.'),
        React.createElement(CtaButton, null)
      )
    )
  },
  {
    slug: 'factureren-startende-zzper',
    title: 'Factureren als startende zzp’er: alles wat je moet weten',
    excerpt: 'Van KvK-nummer tot betaaltermijn: een compleet overzicht van facturatie voor beginnende ondernemers.',
    keywords: 'factureren zzp, factuur maken starter, beginnen met factureren, zzp administratie',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20als%20startende%20zzp%20er.png',
      alt: 'Een jonge, enthousiaste ondernemer die aan een bureau zit en zijn eerste factuur verstuurt.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
        React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Gefeliciteerd met de start van je bedrijf! Een van de eerste en belangrijkste taken als zzp\'er is het opstellen en versturen van facturen. Het lijkt misschien ingewikkeld, maar met de juiste kennis is het zo gepiept. Dit is alles wat je moet weten.'),
            React.createElement('h3', null, 'Voordat je begint: de basis op orde'),
            React.createElement('p', null, 'Zorg dat je administratieve basis staat als een huis. Voordat je je eerste factuur kunt sturen, heb je nodig:'),
            React.createElement('ol', null,
                React.createElement('li', null, React.createElement('strong', null, 'Een KvK-nummer:'), ' Zodra je je inschrijft bij de Kamer van Koophandel, ontvang je dit unieke nummer. Het is verplicht op je facturen.'),
                React.createElement('li', null, React.createElement('strong', null, 'Een btw-identificatienummer:'), ' Dit ontvang je automatisch van de Belastingdienst na je KvK-inschrijving. Ook dit nummer is verplicht.'),
                React.createElement('li', null, React.createElement('strong', null, 'Een zakelijke bankrekening:'), ' Hoewel niet strikt verplicht, is het sterk aan te raden om je zakelijke en privéfinanciën gescheiden te houden. Dit geeft overzicht.')
            ),
            React.createElement('h3', null, 'De anatomie van je eerste factuur'),
            React.createElement('p', null, 'Je eerste factuur is een blauwdruk voor alle volgende. Zorg dat deze perfect is. We hebben in ons artikel ', React.createElement(BlogLink, { to: "/blogs/factuur-maken-zzp", className: "text-warm-orange hover:underline" }, '"Hoe maak je een factuur als zzp\'er?"'), ' al een gedetailleerd stappenplan gegeven. De belangrijkste elementen zijn je eigen gegevens, de gegevens van je klant, een uniek factuurnummer en een duidelijke specificatie van je werk.'),
            React.createElement('h3', null, 'Betaaltermijn: Wees duidelijk en redelijk'),
            React.createElement('p', null, 'Als starter wil je snel betaald krijgen. Een gebruikelijke betalingstermijn voor zzp\'ers is 14 of 30 dagen. Wees hier duidelijk over op je factuur. Bijvoorbeeld: "Wij verzoeken u vriendelijk deze factuur binnen 14 dagen na factuurdatum te voldoen."'),
            React.createElement('h3', null, 'Tooling: Maak het jezelf makkelijk'),
            React.createElement('p', null, 'Je kunt beginnen met een template in Word of Excel, maar je loopt al snel tegen de beperkingen aan:'),
            React.createElement('ul', null,
                React.createElement('li', null, 'Risico op fouten (verkeerde nummering, rekenfouten).'),
                React.createElement('li', null, 'Het kost onnodig veel tijd.'),
                React.createElement('li', null, 'Het ziet er vaak minder professioneel uit.')
            ),
            React.createElement('p', null, 'Een online factuurtool zoals ', React.createElement('strong', null, 'FactuurBaas'), ' is speciaal ontworpen voor zzp\'ers. Het bespaart je tijd, voorkomt fouten en zorgt ervoor dat je facturen er altijd gelikt uitzien. Je vult de gegevens in, en met één klik heb je een professionele PDF. Een perfecte start voor elke beginnende ondernemer.'),
            React.createElement(CtaButton, null)
        )
    )
  },
    {
    slug: 'factuurbeheer-overzicht',
    title: 'Factuurbeheer voor zzp: overzicht en tips',
    excerpt: 'Slim factuurbeheer: overzicht over facturen, betaalstatussen en inkomsten. Tips voor digitaal factuurbeheer en eenvoudig facturen beheren als zzp.',
    keywords: 'factuurbeheer, factuurbeheer zzp, facturen overzicht, digitaal factuurbeheer, facturen beheren',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Slim%20factuurbeheer.png',
      alt: 'Een digitaal dashboard met grafieken en lijsten die inkomsten en factuurstatussen tonen.',
    },
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Naarmate je bedrijf groeit, groeit ook het aantal facturen. Het overzicht bewaren over wat er openstaat, wat betaald is en wat te laat is, wordt dan een uitdaging. Slim factuurbeheer is geen luxe, maar een noodzaak voor een gezonde cashflow.'),
        React.createElement('h2', null, 'Waarom is factuurbeheer belangrijk?'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Cashflow management:'), ' Je weet precies hoeveel geld er binnenkomt en wanneer.'),
          React.createElement('li', null, React.createElement('strong', null, 'Tijdsbesparing:'), ' Nooit meer zoeken naar een specifieke factuur of betaalstatus.'),
          React.createElement('li', null, React.createElement('strong', null, 'Professionaliteit:'), ' Je kunt snel reageren op vragen van klanten en op tijd herinneringen sturen.'),
          React.createElement('li', null, React.createElement('strong', null, 'Minder stress:'), ' Een duidelijk overzicht geeft rust en controle.')
        ),
        React.createElement('h2', null, 'De ouderwetse manier: mappen en spreadsheets'),
        React.createElement('p', null, 'Veel starters beginnen met een mapje \'Verzonden Facturen\' op hun computer en een Excel-sheet om de status bij te houden. Dit werkt prima voor de eerste paar facturen, maar wordt al snel onoverzichtelijk en foutgevoelig.'),
        React.createElement('h2', null, 'De slimme manier: FactuurBaas'),
        React.createElement('p', null, 'Hoewel FactuurBaas momenteel focust op het moeiteloos ', React.createElement('strong', null, 'creëren'), ' van losse facturen, is het de eerste stap naar slimmer beheer. Door elke factuur met dezelfde tool te maken, creëer je een consistente datastroom.'),
        React.createElement('p', null, 'In de toekomst zullen features zoals een dashboard met betaalstatussen en automatische herinneringen dit proces nog verder stroomlijnen. Maar de basis leg je nu al:'),
        React.createElement('ol', null,
          React.createElement('li', null, React.createElement('strong', null, 'Centraliseer je facturatie:'), ' Gebruik één tool voor alle uitgaande facturen.'),
          React.createElement('li', null, React.createElement('strong', null, 'Gebruik consistente nummering:'), ' FactuurBaas helpt je met een duidelijke structuur.'),
          React.createElement('li', null, React.createElement('strong', null, 'Sla PDF\'s georganiseerd op:'), ' Maak mappen per jaar of per klant voor de gedownloade PDF\'s.')
        ),
        React.createElement('p', null, 'Begin vandaag met het leggen van een solide basis voor je factuurbeheer. Maak je volgende factuur met FactuurBaas en ervaar hoe eenvoudig het kan zijn.'),
        React.createElement(CtaButton, null)
      )
    )
  },
  {
    slug: 'sneller-betalen-factuur',
    title: 'De beste manier om sneller betaald te krijgen als zzp’er',
    excerpt: 'Tips en strategieën om sneller je geld te ontvangen, van betaalvoorwaarden tot slimme betaalmethodes.',
    keywords: 'sneller betaald factuur, betaald krijgen zzp, betaaltermijn factuur, factuur tips ondernemers',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/De%20beste%20manier%20om%20sneller%20betaald%20te%20krijgen%20als%20zzp%20er.png',
      alt: 'Een kalender met een vervaldatum omcirkeld en een stapel geld ernaast, wat tijdige betaling symboliseert.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
        React.createElement(React.Fragment, null,
            React.createElement('p', null, 'Als zzp\'er ben je afhankelijk van een gezonde cashflow. Niets is zo frustrerend als wachten op geld dat je al hebt verdiend. Gelukkig zijn er effectieve manieren om het betaalproces te versnellen. Implementeer deze strategieën en krijg sneller betaald.'),
            React.createElement('h3', null, '1. Factureer direct en correct'),
            React.createElement('p', null, 'De klok begint pas te tikken als de factuur bij de klant is. Wacht niet tot het einde van de maand. Stuur je factuur zodra de klus geklaard is. Zorg er ook voor dat de factuur foutloos is; een foutieve factuur wordt vaak opzij gelegd en leidt tot vertraging.'),
            React.createElement('h3', null, '2. Hanteer een korte, duidelijke betaaltermijn'),
            React.createElement('p', null, 'Een termijn van 30 dagen is standaard, maar 14 dagen is voor zzp\'ers vaak beter. Wees hier vanaf het begin duidelijk over, bijvoorbeeld in je offerte of algemene voorwaarden. Vermeld de exacte vervaldatum groot op de factuur.'),
            React.createElement('h3', null, '3. Maak betalen super eenvoudig'),
            React.createElement('p', null, 'Hoe minder moeite een klant hoeft te doen, hoe sneller hij betaalt. Een directe betaallink (bijvoorbeeld via iDEAL) toevoegen is een krachtige methode. Hoewel FactuurBaas dit (nog) niet standaard integreert, is het een belangrijke strategie om in gedachten te houden voor de toekomst.'),
            React.createElement('h3', null, '4. Stuur vriendelijke herinneringen'),
            React.createElement('p', null, 'Is de betaaltermijn verstreken? Wacht niet te lang met het sturen van een herinnering. Een vriendelijke e-mail is vaak al genoeg. "Dag [Naam klant], wellicht is deze factuur aan je aandacht ontsnapt. Zou je hier nog naar willen kijken?"'),
            React.createElement('h3', null, '5. Beloon snelle betalers'),
            React.createElement('p', null, 'Overweeg een kleine korting voor klanten die binnen bijvoorbeeld 7 dagen betalen. Dit positieve duwtje kan effectiever zijn dan een boete voor te laat betalen. Bijvoorbeeld: "Betaal binnen 7 dagen en ontvang 2% korting."'),
            React.createElement('p', null, 'Door deze tips toe te passen, neem je de controle over je cashflow. Begin met het fundament: een snelle, correcte factuur. Maak er vandaag nog een met FactuurBaas.'),
            React.createElement(CtaButton, null)
        )
    )
  },
    {
    slug: 'factuur-pdf-downloaden',
    title: 'Factuur als PDF maken en downloaden: stappenplan',
    excerpt: 'Factuur PDF maken en downloaden in een paar klikken. Stappenplan: van invullen tot versturen. Gratis online met FactuurBaas, direct als PDF.',
    keywords: 'factuur pdf, pdf factuur maken, factuur downloaden, factuur pdf download, factuur maken pdf',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20je%20eenvoudig%20een%20factuur%20PDF%20downloadt%20en%20verstuurt.png',
      alt: 'Een muisklik op een \'Download PDF\' knop, met een professionele factuur op de achtergrond.',
    },
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Je hebt je werk gedaan, nu is het tijd om betaald te krijgen. De laatste stap is het maken en versturen van een professionele factuur. Een PDF-factuur is de standaard: het is niet-aanpasbaar en ziet er op elk apparaat hetzelfde uit. Met FactuurBaas is dit proces een fluitje van een cent.'),
        React.createElement('h2', null, 'Stap voor stap: van invullen tot PDF'),
        React.createElement('p', null, 'Volg deze eenvoudige stappen in onze ', React.createElement(BlogLink, { to: "/create-invoice", className: "text-warm-orange hover:underline" }, 'gratis factuur tool'), ':'),
        React.createElement('ol', null,
          React.createElement('li', null, React.createElement('strong', null, 'Vul de velden in:'), ' Start met je eigen bedrijfsgegevens, voeg de klantdetails toe en specificeer de geleverde diensten of producten. Je ziet aan de rechterkant direct hoe je factuur eruit komt te zien.'),
          React.createElement('li', null, React.createElement('strong', null, 'Controleer de preview:'), ' Neem een moment om de live preview te controleren. Staan alle bedragen goed? Is de omschrijving duidelijk? Geen spelfouten?'),
          React.createElement('li', null, React.createElement('strong', null, 'Klik op "Download PDF":'), ' Zodra alles naar wens is, klik je op de grote oranje knop. Je browser downloadt direct een perfect opgemaakte PDF-factuur.')
        ),
        React.createElement('h2', null, 'Je factuur versturen'),
        React.createElement('p', null, 'Nu je de PDF op je computer hebt, is het tijd om hem naar de klant te sturen. De beste manier is per e-mail.'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Duidelijk onderwerp:'), ' Gebruik een helder onderwerp, zoals "Factuur [Jouw Factuurnummer] voor [Projectnaam]".'),
          React.createElement('li', null, React.createElement('strong', null, 'Korte en vriendelijke e-mail:'), ' Houd de e-mail zelf kort. Bijvoorbeeld: "Beste [Naam Klant], in de bijlage vind je de factuur voor de geleverde diensten. De betaaltermijn is 14 dagen. Alvast bedankt!"'),
          React.createElement('li', null, React.createElement('strong', null, 'Voeg de PDF als bijlage toe:'), ' Vergeet niet de gedownloade PDF aan de e-mail te koppelen.')
        ),
        React.createElement('h2', null, 'Waarom FactuurBaas?'),
        React.createElement('p', null, 'Geen gedoe met opmaak, geen risico op rekenfouten en geen noodzaak voor dure software. Met FactuurBaas maak je binnen een minuut een factuur die voldoet aan alle eisen en er professioneel uitziet. Probeer het zelf en zie hoe snel het gaat.'),
        React.createElement(CtaButton, null)
      )
    )
  },
  {
    slug: 'gratis-factuur-zzp',
    title: 'Gratis factuur maken: Factuurbaas gratis online facturen maken',
    excerpt: 'Vergelijking van gratis factuurprogramma’s voor zzp’ers, inclusief tips om FactuurBaas slim te gebruiken.',
    keywords: 'gratis factuur maken, factuur tool zzp, factuur software, gratis factuurprogramma',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Gratis%20factuur%20maken%20Factuurbaas%20gratis%20online%20facturen%20maken.png',
      alt: 'Het FactuurBaas logo met een \'Gratis\' stempel erop.',
    },
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Als startende zzp\'er wil je de kosten laag houden. Een gratis factuurprogramma is dan een logische keuze. Maar wat zijn de opties en waar moet je op letten? Laten we de meest voorkomende methoden vergelijken.'),
        React.createElement('h2', null, 'Optie 1: Word en Excel'),
        React.createElement('p', null, 'Veel zzp\'ers beginnen hier. Je downloadt een template en past het handmatig aan.'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Voordelen:'), ' Je hebt de software waarschijnlijk al.'),
          React.createElement('li', null, React.createElement('strong', null, 'Nadelen:'), ' Foutgevoelig (verkeerde nummering, rekenfouten), tijdrovend, en het eindresultaat ziet er vaak amateuristisch uit. Je moet het document ook handmatig opslaan als PDF.')
        ),
        React.createElement('h2', null, 'Optie 2: Uitgebreide boekhoudpakketten'),
        React.createElement('p', null, 'Programma\'s zoals Moneybird of e-Boekhouden.nl. Ze bieden een compleet pakket voor je administratie.'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Voordelen:'), ' Alles-in-één oplossing voor je hele boekhouding.'),
          React.createElement('li', null, React.createElement('strong', null, 'Nadelen:'), ' Vaak een (steile) leercurve, overkill als je alleen een factuur wilt sturen, en na een proefperiode of beperkt aantal facturen worden ze betaald.')
        ),
        React.createElement('h2', null, 'Optie 3: FactuurBaas - Snel, simpel en echt gratis'),
        React.createElement('p', null, 'FactuurBaas is ontworpen met één doel: jou zo snel en eenvoudig mogelijk een professionele factuur laten maken, zonder verplicht account en zonder verborgen kosten.'),
        React.createElement('ul', null,
          React.createElement('li', null, React.createElement('strong', null, 'Voordelen:'), ' Geen registratie nodig, extreem gebruiksvriendelijk, direct een professionele PDF, en 100% gratis voor het maken van losse facturen.'),
          React.createElement('li', null, React.createElement('strong', null, 'Nadelen:'), ' Het is (nog) geen compleet boekhoudpakket. Je beheert je verzonden facturen en betaalstatussen zelf.')
        ),
        React.createElement('h2', null, 'Conclusie'),
        React.createElement('p', null, 'Voor de zzp\'er die snel en zonder gedoe een factuur moet sturen, is FactuurBaas de ideale oplossing. Je combineert de snelheid van een gespecialiseerde tool met de vrijheid van een gratis dienst. Geen ingewikkelde software leren, geen maandelijkse kosten. Gewoon je gegevens invullen en een perfecte factuur downloaden.'),
        React.createElement(CtaButton, null)
      )
    )
  },
  {
    slug: 'factureren-zonder-account',
    title: 'Factuur maken zonder account: direct starten',
    excerpt: 'Factureren zonder account: maak direct een factuur zonder registratie. Geen e-mail of wachtwoord nodig. Start nu en download je PDF.',
    keywords: 'factureren zonder account, factuur maken zonder account, direct factuur maken, gratis factuur zonder registratie',
    datePublished: '2026-02-05',
    dateModified: '2026-02-05',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20zonder%20account.png',
      alt: 'Een illustratie van een factuur die uit een computer vliegt, zonder een slotje of gebruikersicoon.',
    },
    content: (
      React.createElement(React.Fragment, null,
        React.createElement('p', null, 'Snel een factuur sturen, maar geen zin om wéér een account aan te maken, wachtwoorden te onthouden en door een ingewikkeld registratieproces te gaan? Bij FactuurBaas begrijpen we dat. Daarom kun je bij ons direct aan de slag, zonder account.'),
        React.createElement('h2', null, 'De kracht van laagdrempeligheid'),
        React.createElement('p', null, 'Veel online tools dwingen je tot registratie voordat je ook maar iets kunt doen. Dit creëert een drempel. Wij geloven in het tegenovergestelde: probeer het, ervaar het gemak, en kom terug omdat je het wilt, niet omdat je vastzit in een systeem.'),
        React.createElement('h3', null, 'Hoe werkt factureren zonder account?'),
        React.createElement('p', null, 'Het is precies zo simpel als het klinkt:'),
        React.createElement('ol', null,
          React.createElement('li', null, 'Je bezoekt ', React.createElement(BlogLink, { to: "/create-invoice", className: "text-warm-orange hover:underline" }, 'FactuurBaas.nl'), '.'),
          React.createElement('li', null, 'Je vult direct alle benodigde informatie in de factuurvelden.'),
          React.createElement('li', null, 'Je downloadt je voltooide, professionele factuur als PDF.')
        ),
        React.createElement('p', null, 'Dat is alles. Geen e-mailverificatie, geen verplichte nieuwsbrieven, geen poespas.'),
        React.createElement('h2', null, 'Wat gebeurt er met mijn gegevens?'),
        React.createElement('p', null, 'Dit is een belangrijke vraag. De gegevens die je invult worden alleen in jouw browser gebruikt om de factuur te genereren. Zodra je de pagina verlaat, zijn ze weg. Wij slaan niets op. Dit garandeert je privacy, maar betekent ook dat je zelf verantwoordelijk bent voor het bewaren van de gedownloade PDF\'s.'),
        React.createElement('h2', null, 'Wanneer is een account wél handig?'),
        React.createElement('p', null, 'Voor de toekomst bieden we de optie om een account aan te maken. Dit wordt handig als je:'),
        React.createElement('ul', null,
          React.createElement('li', null, 'Je bedrijfsgegevens wilt opslaan om niet telkens opnieuw in te vullen.'),
          React.createElement('li', null, 'Een overzicht wilt van al je verstuurde facturen.'),
          React.createElement('li', null, 'Klantgegevens wilt beheren.'),
          React.createElement('li', null, 'Betaalstatussen wilt bijhouden.')
        ),
        React.createElement('p', null, 'Maar voor nu, en voor iedereen die gewoon snel een factuur nodig heeft, is onze aanpak zonder account de perfecte, snelle oplossing. Ervaar de vrijheid en maak je factuur in minder dan een minuut.'),
        React.createElement(CtaButton, null)
      )
    )
  },
].sort((a, b) => {
  const specialSlugs = ['gratis-factuur-zzp', 'factuur-maken-zzp'];
  const aIsSpecial = specialSlugs.includes(a.slug);
  const bIsSpecial = specialSlugs.includes(b.slug);

  if (aIsSpecial && !bIsSpecial) return -1;
  if (!aIsSpecial && bIsSpecial) return 1;
  if (aIsSpecial && bIsSpecial) {
    return specialSlugs.indexOf(a.slug) - specialSlugs.indexOf(b.slug);
  }

  // Fallback to alphabetical sort for other articles if needed
  return a.title.localeCompare(b.title);
});