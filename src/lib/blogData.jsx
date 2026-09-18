import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MONEYBIRD_URL, JORTT_URL, E_BOEKHOUDEN_URL } from '@/lib/affiliateLinks';
import { aovArticles } from '@/lib/aovBlogData';

const CtaButton = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/create-invoice">Maak Nu Je Gratis Factuur</Link>
        </Button>
    </div>
);

const BoekhoudCheckCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/boekhoudprogramma-check">Doe de boekhoudprogramma-check →</Link>
        </Button>
    </div>
);

const MoneybirdCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={MONEYBIRD_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Moneybird →
            </a>
        </Button>
    </div>
);

const JorttCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={JORTT_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Jortt →
            </a>
        </Button>
    </div>
);

const EBoekhoudenCta = () => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={E_BOEKHOUDEN_URL} target="_blank" rel="noopener noreferrer">
                Bekijk e-Boekhouden.nl →
            </a>
        </Button>
    </div>
);

const HypotheekCta = ({ label = "Bereken je maximale hypotheek als zzp'er →" }) => (
    <div className="my-8 text-center">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/hypotheek-berekenen-zzp">{label}</Link>
        </Button>
    </div>
);

const HypotheekHubLink = () => (
  <p>
    Of bekijk het overzicht:{' '}
    <Link href="/blogs/hypotheek-als-zzper" className="text-warm-orange hover:underline">
      Hypotheek als zzp&apos;er
    </Link>
    .
  </p>
);

const MoneybirdJorttCtas = () => (
    <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={MONEYBIRD_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Moneybird →
            </a>
        </Button>
        <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href={JORTT_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Jortt →
            </a>
        </Button>
    </div>
);

const MoneybirdEBoekhoudenCtas = () => (
    <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={MONEYBIRD_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Moneybird →
            </a>
        </Button>
        <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href={E_BOEKHOUDEN_URL} target="_blank" rel="noopener noreferrer">
                Bekijk e-Boekhouden.nl →
            </a>
        </Button>
    </div>
);

const JorttEBoekhoudenCtas = () => (
    <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <a href={JORTT_URL} target="_blank" rel="noopener noreferrer">
                Bekijk Jortt →
            </a>
        </Button>
        <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href={E_BOEKHOUDEN_URL} target="_blank" rel="noopener noreferrer">
                Bekijk e-Boekhouden.nl →
            </a>
        </Button>
    </div>
);

const OfferteFactuurCtas = () => (
    <div className="my-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/tools/offerte-maker">Maak gratis offerte</Link>
        </Button>
        <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <Link href="/create-invoice">Maak gratis factuur</Link>
        </Button>
    </div>
);

export const articles = [
  {
    slug: 'factuur-maken-zzp',
    relatedSlugs: ['gratis-factuur-zzp', 'factuur-fouten-voorkomen', 'factuur-templates-zzp', 'factuur-pdf-downloaden'],
    title: 'Factuur maken zzp: stappenplan + gratis voorbeeld',
    excerpt: 'Factuur maken zzp met een stappenplan: wat er op moet staan, factuurnummer, betalingstermijn en een gratis voorbeeld/template.',
    keywords: 'factuur maken zzp, factuur zzp, zzp factuur, voorbeeld factuur zzp, template factuur zzp, wat moet er op een factuur staan zzp, factuurnummer voorbeeld, betalingstermijn factuur zzp, kvk factuur maken, hoe maak je een factuur zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20maak%20je%20een%20factuur%20als%20zzp%20er.png',
      alt: 'Hoe maak je een factuur als zzp\'er: stappenplan met gratis voorbeeld en template.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Wat moet er op een factuur staan als zzp\'er?',
        answer: 'Verplicht op elke factuur: jouw bedrijfsgegevens, KVK-nummer en btw-nummer, klantgegevens, uniek factuurnummer, factuurdatum, omschrijving van diensten of producten, datum van levering, bedragen excl. en incl. btw, en je betaalgegevens met betalingstermijn (bijv. 14 dagen).',
      },
      {
        question: 'Hoe maak ik een factuur als zzp\'er?',
        answer: 'Verzamel je gegevens en die van de klant, kies een template of factuurtool (zoals FactuurBaas), vul de verplichte velden in met duidelijke omschrijvingen, bereken de btw, vermeld je betalingstermijn en IBAN, en download of verstuur de factuur als PDF.',
      },
      {
        question: 'Welk factuurnummer gebruik ik? (voorbeeld)',
        answer: 'Gebruik een uniek, opeenvolgend nummer per factuur. Voorbeeld factuurnummer: 2026-001, 2026-002 of F2026-001. Geen nummer twee keer gebruiken. Veel tools genereren het automatisch.',
      },
      {
        question: 'Welke betalingstermijn zet ik op mijn factuur als zzp\'er?',
        answer: 'Veel zzp\'ers kiezen 14 of 30 dagen. Vermeld dit expliciet op de factuur, bijvoorbeeld: "Graag betalen binnen 14 dagen na factuurdatum." Dit is geen wettelijke verplichting maar wel aan te raden voor je cashflow.',
      },
      {
        question: 'Moet mijn KVK-nummer op de factuur?',
        answer: 'Ja. Het KVK-nummer en je btw-identificatienummer zijn verplicht op elke factuur. Zonder deze gegevens voldoet de factuur niet aan de eisen van de Belastingdienst.',
      },
      {
        question: 'Waar vind ik een gratis voorbeeld of template factuur zzp?',
        answer: 'Bij FactuurBaas maak je gratis een professionele factuur zonder account. Je vult je gegevens in en downloadt direct een PDF die voldoet aan alle verplichte onderdelen voor een zzp-factuur.',
      },
    ],
    content: (
      <>
        <p>Veel zzp&apos;ers zoeken op <strong>factuur maken zzp</strong>, <strong>hoe maak je een factuur zzp</strong> of <strong>voorbeeld factuur zzp</strong>. Een correcte factuur is cruciaal: voor een professionele uitstraling, om op tijd betaald te krijgen en om te voldoen aan de eisen van de Belastingdienst. In dit stappenplan leggen we uit hoe je een factuur maakt die aan alles voldoet — inclusief wat er verplicht op moet staan en een gratis voorbeeld via FactuurBaas.</p>

        <h2>Wat moet er op een factuur staan? (zzp)</h2>
        <p>Volgens de Belastingdienst moet elke factuur bepaalde onderdelen bevatten. Zorg dat je deze altijd vermeldt:</p>
        <ul>
          <li><strong>Jouw bedrijfsgegevens:</strong> Volledige naam en adres.</li>
          <li><strong>Jouw KVK-nummer en btw-nummer:</strong> Verplicht op elke factuur — zet je KvK- en btw-identificatienummer erop.</li>
          <li><strong>Klantgegevens:</strong> Volledige naam en adres van je klant.</li>
          <li><strong>Factuurnummer:</strong> Uniek en opeenvolgend. Voorbeeld: 2026-001, 2026-002 of F2026-001.</li>
          <li><strong>Factuurdatum en datum van levering.</strong></li>
          <li><strong>Omschrijving van diensten/producten:</strong> Wees specifiek over wat je hebt geleverd en de hoeveelheid.</li>
          <li><strong>Bedragen:</strong> Subtotaal excl. btw, btw-tarief en -bedrag, totaal incl. btw.</li>
          <li><strong>Betaalgegevens en betalingstermijn:</strong> IBAN, tenaamstelling en bijvoorbeeld &quot;Graag betalen binnen 14 dagen&quot;.</li>
        </ul>

        <h2>Stap 1: Verzamel de verplichte gegevens</h2>
        <p>Zet eerst alle gegevens klaar: van jezelf, van de klant, en een logisch factuurnummer. Met een <strong>template factuur zzp</strong> of tool zoals FactuurBaas vul je daarna alleen de velden in; de structuur staat al goed.</p>

        <CtaButton />

        <h2>Stap 2: Kies een professionele layout (template)</h2>
        <p>Een rommelige factuur kan onprofessioneel overkomen. Gebruik een schone, overzichtelijke layout. Met een tool als <strong>FactuurBaas</strong> kies je een <strong>template factuur zzp</strong> en de rest wordt voor je geregeld. Plaats je logo bovenaan en zorg voor een duidelijk leesbaar lettertype.</p>

        <CtaButton />

        <h2>Stap 3: Omschrijf je werk duidelijk</h2>
        <p>Een vage omschrijving zoals "Geleverde diensten" kan tot vragen leiden. Wees specifiek. Bijvoorbeeld:</p>
        <ul>
          <li>Website design - Homepage (10 uur x €75)</li>
          <li>Teksten voor over-ons pagina (500 woorden)</li>
        </ul>
        <p>Dit voorkomt onduidelijkheid en zorgt ervoor dat je klant precies weet waarvoor hij betaalt.</p>

        <h2>Stap 4: Vermeld de betaalgegevens en betalingstermijn</h2>
        <p>Maak betalen zo makkelijk mogelijk. Vermeld duidelijk je IBAN en tenaamstelling, en de <strong>betalingstermijn</strong> (bijv. &quot;Graag betalen binnen 14 dagen&quot;). Een vriendelijke afsluiting zoals &quot;Bedankt voor de prettige samenwerking!&quot; kan ook helpen.</p>

        <h2>Gratis voorbeeld factuur zzp met FactuurBaas</h2>
        <p>Geen zin om zelf te knutselen met Word of Excel? Maak je eerste <strong>factuur maken zzp gratis</strong> met FactuurBaas: alle verplichte onderdelen zitten in de template, je downloadt direct een professionele PDF. Meer opties lees je in ons artikel over <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">gratis factuur maken voor zzp&apos;ers</Link>.</p>

        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Wat moet er op een factuur staan als zzp&apos;er?</h3>
        <p>Jouw gegevens (incl. KVK en btw-nummer), klantgegevens, factuurnummer, factuur- en leveringsdatum, omschrijving, bedragen excl. en incl. btw, en betaalgegevens met betalingstermijn.</p>
        <h3>Hoe maak ik een factuur als zzp&apos;er?</h3>
        <p>Verzamel gegevens, kies een template of tool, vul de velden in, controleer btw en totaal, vermeld betalingstermijn en IBAN, en download of verstuur als PDF.</p>
        <h3>Welk factuurnummer en welke betalingstermijn?</h3>
        <p>Gebruik een uniek opeenvolgend nummer (bijv. 2026-001). Voor de termijn kiezen veel zzp&apos;ers 14 of 30 dagen — vermeld dit duidelijk op de factuur.</p>
      </>
    )
  },
  {
    slug: 'factuur-fouten-voorkomen',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factuur-pdf-downloaden', 'factuur-templates-zzp'],
    title: '7 veelgemaakte fouten op facturen en hoe je ze voorkomt',
    excerpt: 'Facturatie is foutgevoelig — hier de oplossing. Voorkom dubbele facturatie, foutgevoelige PDF-facturen en andere fouten met eenvoudige tips en de juiste tool.',
    keywords: 'facturatie foutgevoelig oplossing, voorkomen van dubbele facturatie, foutgevoelige pdf facturen, fouten op factuur, factuur tips zzp, correcte factuur maken',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/7%20veelgemaakte%20fouten%20op%20facturen%20en%20hoe%20je%20ze%20voorkomt.png',
      alt: '7 veelgemaakte fouten op facturen: facturatie foutgevoelig? Hier de oplossing.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Waarom is facturatie foutgevoelig en wat is de oplossing?',
        answer: 'Facturatie is foutgevoelig door handmatig werk: verkeerde factuurnummers, btw-fouten, vergeten gegevens of Word/Excel die per ongeluk aangepast wordt. De oplossing is een vaste structuur (template), automatische nummering en btw-berekening, en altijd PDF versturen. Een tool zoals FactuurBaas vermindert fouten sterk.',
      },
      {
        question: 'Hoe voorkom ik dubbele facturatie?',
        answer: 'Gebruik opeenvolgende, unieke factuurnummers en houd een overzicht bij (bijv. in een map of tool). Stuur nooit twee facturen met hetzelfde nummer voor dezelfde levering. Een factuurprogramma dat nummers automatisch doorgeeft voorkomt dubbele of dubbele verzending van dezelfde factuur.',
      },
      {
        question: 'Zijn PDF-facturen minder foutgevoelig?',
        answer: 'Ja. Een PDF is een vast document dat de ontvanger niet kan wijzigen. Word- of Excel-facturen zijn foutgevoeliger: ze kunnen per ongeluk worden aangepast, wat tot discussie of ongeldigheid leidt. Verstuur facturen daarom altijd als PDF.',
      },
      {
        question: 'Welke gegevens mag ik niet vergeten op een factuur?',
        answer: 'Verplicht: jouw gegevens inclusief KVK en btw-nummer, klantgegevens, uniek factuurnummer, factuur- en leveringsdatum, omschrijving, bedragen excl. en incl. btw, en betaalgegevens met termijn. Vergeten gegevens kunnen vertraging of problemen met de Belastingdienst geven.',
      },
      {
        question: 'Hoe voorkom ik btw-fouten op mijn factuur?',
        answer: 'Gebruik een tool die het btw-tarief (21%, 9% of 0%) en het bedrag automatisch verwerkt. Handmatig rekenen is foutgevoelig. Controleer altijd of het juiste tarief voor jouw dienst of product geldt.',
      },
    ],
    content: (
        <>
            <p><strong>Facturatie is foutgevoelig</strong> als je handmatig werkt: verkeerde nummers, btw-fouten, vergeten gegevens of documenten die per ongeluk worden aangepast. Veel zzp&apos;ers zoeken een <strong>facturatie foutgevoelig oplossing</strong> of willen <strong>voorkomen van dubbele facturatie</strong> en <strong>foutgevoelige pdf facturen</strong>. Hier zijn de 7 meest voorkomende fouten op facturen en hoe je ze voorkomt — met praktische oplossingen en een slimme tool.</p>

            <h2>De 7 veelgemaakte fouten (en de oplossing)</h2>
    
            <h3>1. Verkeerd of niet-opeenvolgend factuurnummer</h3>
            <p>De Belastingdienst eist unieke, opeenvolgende factuurnummers. Handmatig in Excel is vragen om problemen en vergroot het risico op dubbele nummers. <strong>De oplossing:</strong> Een factuurprogramma nummert automatisch door. Zo voorkom je ook <strong>voorkomen van dubbele facturatie</strong> door verwarring met nummers.</p>
    
            <h3>2. Btw-fouten</h3>
            <p>Verkeerd tarief, verkeerde berekening of btw vergeten. <strong>De oplossing:</strong> Gebruik een tool die de btw automatisch berekent op basis van bedrag en tarief (21%, 9% of 0%).</p>
    
            <h3>3. Essentiële gegevens vergeten</h3>
            <p>KVK-nummer, adres of factuurdatum vergeten. <strong>De oplossing:</strong> FactuurBaas vult je bedrijfsgegevens automatisch in op elke factuur. Minder foutgevoelige facturatie.</p>
    
            <h3>4. Vage omschrijvingen</h3>
            <p>&quot;Consultancy&quot; of &quot;Geleverde werkzaamheden&quot; — je klant weet niet waarvoor hij betaalt. <strong>De oplossing:</strong> Wees specifiek: taak, uren of product. Duidelijkheid versnelt de betaling.</p>
            
            <CtaButton />

            <h3>5. Onprofessionele uitstraling</h3>
            <p>Word of Excel met wisselende opmaak straalt geen professionaliteit uit. <strong>De oplossing:</strong> Een strak template. Met FactuurBaas ziet elke factuur er hetzelfde en correct uit.</p>
    
            <h3>6. Geen duidelijke betalingstermijn</h3>
            <p>Zonder termijn kan een klant eindeloos wachten met betalen. <strong>De oplossing:</strong> Vermeld altijd een concrete termijn, bijvoorbeeld &quot;Betalen binnen 14 dagen&quot;.</p>
    
            <h3>7. De factuur niet als PDF versturen (foutgevoelige pdf facturen)</h3>
            <p>Word- of Excel-facturen kunnen door de ontvanger worden aangepast — dat is niet rechtsgeldig en maakt facturatie <strong>foutgevoelig</strong>. <strong>De oplossing:</strong> Verstuur altijd een PDF. Een PDF is een &quot;dicht&quot; document. FactuurBaas genereert automatisch een veilige PDF, zodat je geen <strong>foutgevoelige pdf facturen</strong> meer verstuurt.</p>

            <h2>Voorkomen van dubbele facturatie</h2>
            <p>Dubbele facturatie ontstaat als je per ongeluk twee keer dezelfde levering factureert of twee facturen met hetzelfde nummer gebruikt. Om <strong>voorkomen van dubbele facturatie</strong> te garanderen: gebruik strikt opeenvolgende factuurnummers, noteer welke opdrachten je al gefactureerd hebt, en werk bij voorkeur met één systeem (bijv. FactuurBaas) zodat je overzicht houdt. Lees ook <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">hoe je een correcte factuur maakt</Link>.</p>

            <CtaButton />

            <h2>Facturatie foutgevoelig? Zo maak je het robuuster</h2>
            <p>Een <strong>facturatie foutgevoelig oplossing</strong> begint met vaste stappen: template met alle verplichte velden, automatische nummering en btw, en altijd PDF. Zo verminder je fouten en voorkom je dubbele facturatie en discussie over aangepaste documenten.</p>

            <h2>Veelgestelde vragen</h2>
            <h3>Waarom is facturatie foutgevoelig?</h3>
            <p>Door handmatig invullen, rekenen en verschillende bestandsformaten. Automatische velden, btw-berekening en PDF als standaard vormen de oplossing.</p>
            <h3>Hoe voorkom ik dubbele facturatie?</h3>
            <p>Opeenvolgende factuurnummers, overzicht van wat je al gefactureerd hebt, en bij voorkeur één tool voor alle facturen.</p>
            <h3>Waarom altijd PDF en geen Word?</h3>
            <p>PDF kan niet worden aangepast door de ontvanger; Word wel. Daarmee voorkom je foutgevoelige of ongeldige facturen.</p>
        </>
    )
  },
  {
    slug: 'factuur-templates-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'factureren-zonder-account', 'factuur-pdf-downloaden', 'btw-factuur-zzp', 'factuur-fouten-voorkomen'],
    metaTitle: 'Factuur voorbeeld: gratis zzp template + voorbeeldfactuur',
    title: 'Factuur voorbeeld: gratis template voor zzp\'ers',
    excerpt:
      'Factuur voorbeeld en voorbeeldfactuur voor zzp\'ers: compleet voorbeeld met btw, blanco template, Word/Excel-vergelijking en branchevoorbeelden. Direct gratis factuur maken.',
    keywords:
      'factuur voorbeeld, voorbeeld factuur zzp, factuur template, template factuur, voorbeeld factuur, factuur voorbeeld zzp, factuur layout, factuur voorbeeld excel, factuur template word, voorbeeld blanco factuur, factuur voorbeeld pdf, sjabloon factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Handige%20factuur%20templates%20voor%20zzp%20ers.png',
      alt: 'Factuur voorbeeld zzp: professionele template en voorbeeldfactuur voor zzp\'ers.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-08-28',
    faq: [
      {
        question: 'Waar vind ik een factuur voorbeeld voor zzp\'ers?',
        answer:
          'Op deze pagina staat een compleet voorbeeld met bedragen en btw. Wil je meteen een eigen factuur maken? Ga naar FactuurBaas, vul je gegevens in en download direct een PDF — gratis en zonder account.',
      },
      {
        question: 'Wat is het verschil tussen een factuurvoorbeeld en een template?',
        answer:
          'Een voorbeeldfactuur laat zien hoe een complete factuur eruitziet, inclusief ingevulde gegevens. Een template of sjabloon is een leeg format dat je zelf invult — bijvoorbeeld in Word, Excel of via een online factuurmaker.',
      },
      {
        question: 'Is een factuur voorbeeld in Excel of Word handig?',
        answer:
          'Het kan, vooral als je al met spreadsheets werkt. Let wel op: je moet btw en totalen zelf controleren. Een online tool berekent dat automatisch en bevat meestal alle verplichte velden.',
      },
      {
        question: 'Wat is een blanco factuur?',
        answer:
          'Een blanco factuur is een leeg sjabloon met vaste velden (bedrijfsgegevens, klant, omschrijving, bedragen) die je zelf invult. Met een online factuurmaker hoef je geen blanco Word- of Excel-bestand handmatig in te vullen.',
      },
      {
        question: 'Kan ik gratis een factuur maken met een template?',
        answer:
          'Ja. Met FactuurBaas kies je een layout, vult je gegevens in en download je direct een professionele PDF. Geen account nodig.',
      },
    ],
    content: (
      <>
        <p>
          Een goed <strong>factuurvoorbeeld</strong> helpt je om snel een professionele factuur te maken. Hieronder
          vind je een compleet <strong>voorbeeld van een zzp-factuur</strong>, inclusief btw, bedragen en de belangrijkste
          onderdelen. Je kunt het voorbeeld gebruiken als basis voor je eigen factuur of direct een{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            gratis factuur maken
          </Link>{' '}
          met FactuurBaas.
        </p>

        <CtaButton />

        <h2>Voorbeeld factuur zzp</h2>
        <p>
          Onderstaand <strong>factuur voorbeeld</strong> laat zien hoe een complete zzp-factuur eruit kan zien — met alle
          gebruikelijke onderdelen.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-3">
            <p className="text-lg font-semibold text-deep-blue">Factuur 2026-001</p>
          </div>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurdatum</td>
                <td className="px-4 py-2">28 augustus 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Vervaldatum</td>
                <td className="px-4 py-2">11 september 2026</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-2 font-medium text-deep-blue">Factuurnummer</td>
                <td className="px-4 py-2">2026-001</td>
              </tr>
            </tbody>
          </table>
          <div className="grid gap-4 border-b border-slate-100 px-4 py-4 sm:grid-cols-2">
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Van</p>
              <p className="font-medium text-deep-blue">Jansen Webdesign</p>
              <p>Voorbeeldstraat 1</p>
              <p>1234 AB Amsterdam</p>
              <p>KvK: 12345678</p>
              <p>BTW: NL123456789B01</p>
            </div>
            <div>
              <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-slate-500">Aan</p>
              <p className="font-medium text-deep-blue">Voorbeeld BV</p>
              <p>Klantstraat 10</p>
              <p>1000 AA Amsterdam</p>
            </div>
          </div>
          <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Omschrijving
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Aantal
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Totaal
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Website ontwerp</td>
                <td className="px-4 py-3 text-right">10 uur</td>
                <td className="px-4 py-3 text-right">€75,00</td>
                <td className="px-4 py-3 text-right">€750,00</td>
              </tr>
            </tbody>
          </table>
          <div className="space-y-1 px-4 py-4 text-sm text-slate-700 sm:text-base">
            <p className="flex justify-between">
              <span>Subtotaal</span>
              <span>€750,00</span>
            </p>
            <p className="flex justify-between">
              <span>BTW 21%</span>
              <span>€157,50</span>
            </p>
            <p className="flex justify-between font-semibold text-deep-blue">
              <span>Totaal</span>
              <span>€907,50</span>
            </p>
            <p className="pt-2 text-slate-600">Betalingstermijn: 14 dagen</p>
          </div>
        </div>
        <p>
          Dit <strong>voorbeeld factuur zzp</strong> bevat alle elementen die je klant en de Belastingdienst verwachten.
          Wil je zelf een factuur opstellen? Bekijk het{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            stappenplan factuur maken zzp
          </Link>{' '}
          of gebruik het{' '}
          <Link href="/factuur-template/zzp" className="text-warm-orange hover:underline">
            zzp-factuur template
          </Link>
          .
        </p>

        <h2>Factuur voorbeelden voor verschillende branches</h2>
        <p>
          De opbouw van een factuur is voor elke zzp&apos;er hetzelfde — alleen de omschrijving en het tarief verschillen
          per branche. Enkele <strong>voorbeelden factuur zzp</strong>:
        </p>
        <ul>
          <li>
            <strong>Factuur voorbeeld zzp bouw:</strong> Metselwerk — 20 uur × €45 = €900. Meer voor aannemers en
            schilders:{' '}
            <Link href="/factuur-template/bouw" className="text-warm-orange hover:underline">
              bouwfactuur template
            </Link>
            .
          </li>
          <li>
            <strong>Factuur voorbeeld zzp beveiliging:</strong> Beveiligingswerkzaamheden — 16 uur × €35 = €560.
          </li>
          <li>
            <strong>Factuur voorbeeld zzp zorg:</strong> Zorgverlening — 8 uur × €55 = €440 (controleer altijd of
            btw-vrijstelling van toepassing is).
          </li>
          <li>
            <strong>Factuur voorbeeld koerier:</strong> Transport Amsterdam–Rotterdam — 1 rit × €85 = €85.
          </li>
          <li>
            <strong>Factuur voorbeeld webdesigner:</strong> Website ontwerp — 10 uur × €75 = €750 (zoals het voorbeeld
            hierboven).
          </li>
          <li>
            <strong>Factuur voorbeeld fotograaf:</strong> Bedrijfsreportage — 1 opdracht × €350 = €350.
          </li>
          <li>
            <strong>Factuur voorbeeld consultant:</strong> Adviesgesprek — 4 uur × €120 = €480. Handig als{' '}
            <Link href="/factuur-template/uren" className="text-warm-orange hover:underline">
              urenfactuur template
            </Link>
            .
          </li>
        </ul>
        <p>
          Voor een <strong>factuur zonder btw</strong> (bijv. KOR) zie het{' '}
          <Link href="/factuur-template/zonder-btw" className="text-warm-orange hover:underline">
            template factuur zonder btw
          </Link>
          .
        </p>

        <h2>Factuur template Word of Excel</h2>
        <p>
          Veel ondernemers zoeken een <strong>factuur template Word</strong>, <strong>factuur voorbeeld Excel</strong> of
          een kant-en-klaar <strong>sjabloon factuur</strong>. Dat kan — maar er zijn verschillen:
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[520px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Methode
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Geschikt voor
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Let op
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Word</td>
                <td className="px-4 py-3">Eenvoudige facturen</td>
                <td className="px-4 py-3">Btw en bedragen zelf controleren</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">Excel</td>
                <td className="px-4 py-3">Berekeningen en hergebruik</td>
                <td className="px-4 py-3">Formules kunnen fouten bevatten</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium text-deep-blue">PDF template</td>
                <td className="px-4 py-3">Snel een vaste factuur</td>
                <td className="px-4 py-3">Minder flexibel</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-deep-blue">Online factuurmaker</td>
                <td className="px-4 py-3">Snel professionele facturen</td>
                <td className="px-4 py-3">Afhankelijk van de tool</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Wil je vooral snel een professionele factuur maken? Met FactuurBaas kun je online een factuur maken en direct
          als{' '}
          <Link href="/blogs/factuur-pdf-downloaden" className="text-warm-orange hover:underline">
            PDF downloaden
          </Link>
          , zonder account. Meer opties vind je op de pagina{' '}
          <Link href="/factuur-template" className="text-warm-orange hover:underline">
            factuur template
          </Link>
          .
        </p>

        <h2>Blanco factuur: wat is het?</h2>
        <p>
          Een <strong>blanco factuur</strong> is een factuurtemplate waarin de vaste gegevens en velden al zijn opgenomen,
          maar die je zelf nog invult — denk aan een leeg Word- of Excel-bestand met kolommen voor omschrijving, aantal,
          prijs en totaal.
        </p>
        <p>
          Wil je geen blanco template handmatig invullen? Met de{' '}
          <Link href="/blogs/factureren-zonder-account" className="text-warm-orange hover:underline">
            gratis factuurmaker
          </Link>{' '}
          van FactuurBaas vul je je gegevens online in en download je de complete factuur als PDF.
        </p>

        <CtaButton />

        <h2>Wat moet er op een factuur staan?</h2>
        <p>Een complete factuur bevat onder andere:</p>
        <ul>
          <li>bedrijfsnaam en adres</li>
          <li>klantgegevens</li>
          <li>KvK-nummer</li>
          <li>btw-identificatienummer</li>
          <li>factuurnummer</li>
          <li>factuurdatum</li>
          <li>leveringsdatum, wanneer van toepassing</li>
          <li>omschrijving van producten of diensten</li>
          <li>bedrag exclusief btw</li>
          <li>btw-tarief en btw-bedrag</li>
          <li>totaalbedrag</li>
          <li>betaaltermijn en betaalgegevens</li>
        </ul>
        <p>
          Uitgebreide uitleg per onderdeel lees je in{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            factuur maken zzp: stappenplan
          </Link>
          . Voor btw op je factuur:{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur als zzp&apos;er
          </Link>
          . Voorkom veelgemaakte fouten met{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          .
        </p>

        <h2>Waarom een goed factuurvoorbeeld of template helpt</h2>
        <ul>
          <li>
            <strong>Professionaliteit:</strong> een strakke <strong>factuur layout</strong> wekt vertrouwen bij klanten.
          </li>
          <li>
            <strong>Foutloos:</strong> een goed sjabloon zorgt dat verplichte velden (KvK, btw, factuurnummer) niet
            ontbreken.
          </li>
          <li>
            <strong>Tijdsbesparing:</strong> je hoeft de opbouw niet telkens opnieuw te bedenken.
          </li>
        </ul>

        <h2>Gratis factuur maken met FactuurBaas</h2>
        <p>Bij FactuurBaas kies je een professionele layout — geen Word of Excel nodig:</p>
        <ol>
          <li>
            Ga naar{' '}
            <Link href="/create-invoice" className="text-warm-orange hover:underline">
              Factuur maken
            </Link>
            .
          </li>
          <li>Vul je bedrijfsgegevens en die van je klant in.</li>
          <li>Voeg je diensten of producten toe.</li>
          <li>Kies een layout.</li>
          <li>Download je factuur direct als PDF.</li>
        </ol>
        <p>Gratis, zonder account. Alle verplichte velden zitten in de template; btw wordt automatisch berekend.</p>

        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Waar vind ik een factuur voorbeeld voor zzp&apos;ers?</h3>
        <p>
          Op deze pagina staat een compleet voorbeeld met bedragen en btw. Wil je meteen een eigen factuur maken? Ga naar
          FactuurBaas, vul je gegevens in en download direct een PDF.
        </p>
        <h3>Wat is het verschil tussen een factuurvoorbeeld en een template?</h3>
        <p>
          Een voorbeeldfactuur laat zien hoe een complete factuur eruitziet. Een template is een leeg format dat je zelf
          invult — in Word, Excel of via een online factuurmaker.
        </p>
        <h3>Is een factuur voorbeeld in Excel of Word handig?</h3>
        <p>
          Het kan, maar je moet btw en totalen zelf controleren. Een online tool berekent dat automatisch en bevat
          meestal alle verplichte velden.
        </p>
        <h3>Wat is een blanco factuur?</h3>
        <p>
          Een leeg sjabloon met vaste velden die je zelf invult. Met een online factuurmaker hoef je geen blanco
          Word- of Excel-bestand handmatig in te vullen.
        </p>
        <h3>Kan ik gratis een factuur maken met een template?</h3>
        <p>Ja. Met FactuurBaas kies je een layout, vult je gegevens in en download je direct een professionele PDF.</p>
      </>
    )
  },
  {
    slug: 'verschil-factuur-offerte',
    relatedSlugs: ['factuur-maken-zzp', 'sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factureren-zonder-account'],
    metaTitle: 'Verschil offerte en factuur: wat is het verschil?',
    title: 'Verschil tussen offerte en factuur',
    excerpt: 'Wat is het verschil tussen een offerte en factuur? Lees wanneer je een offerte of factuur gebruikt, of een offerte vrijblijvend is en wanneer je factureert.',
    keywords: 'verschil offerte en factuur, verschil tussen offerte en factuur, offerte en factuur, wat is een offerte, is een offerte vrijblijvend, offerte vs factuur, is een offerte hetzelfde als een factuur, mag een factuur afwijken van een offerte, hoeveel mag factuur afwijken van offerte, offerte of factuur, moet je een offerte betalen',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Wat%20is%20het%20verschil%20tussen%20een%20factuur%20en%20een%20offerte.png',
      alt: 'Verschil tussen offerte en factuur uitgelegd.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-08-28',
    faq: [
      { question: 'Wat is het verschil tussen offerte en factuur?', answer: 'Een offerte is een prijsvoorstel vóór je levert; een factuur is een betaalverzoek ná levering. De offerte legt prijs en voorwaarden vast, de factuur vraagt om betaling voor geleverd werk of producten.' },
      { question: 'Is een offerte vrijblijvend?', answer: 'Dat hangt af van de tekst en omstandigheden. Een offerte kan een bindend aanbod zijn zodra de klant akkoord geeft. Veel ondernemers vermelden expliciet dat een offerte vrijblijvend is, of zetten een geldigheidsduur op het document. Lees altijd de voorwaarden op de offerte zelf.' },
      { question: 'Is een offerte hetzelfde als een factuur?', answer: 'Nee. Een offerte is een voorstel vóór de opdracht; een factuur is een betaalverzoek na levering. Voor betaling heb je een factuur nodig, geen offerte.' },
      { question: 'Moet je een offerte betalen?', answer: 'Nee. Een offerte is geen betaalverzoek. Pas na akkoord, levering en het ontvangen van een factuur ben je verschuldigd te betalen volgens de afgesproken termijn.' },
      { question: 'Mag een factuur afwijken van een offerte?', answer: 'In principe sluit een factuur aan op de goedgekeurde offerte. Een hogere factuur kan als er meerwerk is afgesproken, als de offerte een schatting was (bijv. op urenbasis), of als je dat vooraf hebt vermeld. Zonder afspraak kan de klant een hogere factuur betwisten.' },
      { question: 'Hoeveel mag een factuur afwijken van een offerte?', answer: 'Er is geen vast percentage. De factuur hoort overeen te komen met wat is afgesproken in de goedgekeurde offerte. Afwijking is alleen redelijk bij expliciet afgesproken meerwerk, nacalculatie of als de offerte een indicatie was. Leg afwijkingen altijd uit op de factuur.' },
      { question: 'Is een offerte altijd vrijblijvend?', answer: 'Nee, niet altijd. Een offerte kan bindend zijn als de klant akkoord gaat, tenzij je duidelijk vermeldt dat deze vrijblijvend is of onder voorwaarden geldt. Formuleer daarom bewust wat er gebeurt na akkoord.' },
    ],
    content: (
        <>
            <p>Het <strong>verschil tussen offerte en factuur</strong> zit in het moment en het doel: een offerte is een prijsvoorstel <em>vóór</em> je levert, een factuur is een betaalverzoek <em>na</em> levering. Hieronder lees je wanneer je welke gebruikt, of een offerte vrijblijvend is, en wanneer een factuur mag afwijken van een offerte.</p>

            <h2>Verschil offerte en factuur — overzicht</h2>
            <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full min-w-[480px] text-sm text-slate-700 sm:text-base">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Offerte</th>
                    <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">Factuur</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Moment</td>
                    <td className="px-4 py-3">Voor de opdracht</td>
                    <td className="px-4 py-3">Na levering/werkzaamheden</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Doel</td>
                    <td className="px-4 py-3">Prijsvoorstel doen</td>
                    <td className="px-4 py-3">Betaling vragen</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Bedrag</td>
                    <td className="px-4 py-3">Voorgestelde prijs</td>
                    <td className="px-4 py-3">Te betalen bedrag</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Akkoord nodig?</td>
                    <td className="px-4 py-3">Ja, om de opdracht te accepteren</td>
                    <td className="px-4 py-3">Nee, als betaling verschuldigd is</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-4 py-3 font-medium text-deep-blue">Betaling</td>
                    <td className="px-4 py-3">Niet bedoeld als betaalverzoek</td>
                    <td className="px-4 py-3">Ja</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium text-deep-blue">Geldigheidsduur</td>
                    <td className="px-4 py-3">Vaak wel</td>
                    <td className="px-4 py-3">Nee</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Wat is een offerte?</h2>
            <p>Een offerte is een schriftelijk prijsvoorstel voor diensten of producten die je nog gaat leveren. Je stuurt hem vóór je aan het werk gaat, zodat de klant weet wat het gaat kosten en wat je levert. Juridisch kan een offerte een aanbod zijn — pas als de klant akkoord gaat, ontstaat er een overeenkomst.</p>
            <p>In de praktijk wordt &quot;prijsopgave&quot; vaak hetzelfde bedoeld. Een offerte is meestal iets formeler en bevat vaker een geldigheidsduur en duidelijke voorwaarden. Met onze <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">gratis offerte maker</Link> maak je snel een professionele offerte en download je die als PDF.</p>

            <h2>Wat is een factuur?</h2>
            <p>Een factuur stuur je nadat je hebt geleverd: het is een officieel betaalverzoek voor uitgevoerd werk of geleverde producten. Op een factuur staan onder andere je bedrijfsgegevens, het factuurnummer, bedragen, btw en de betalingstermijn. Zie ook <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">hoe je een factuur maakt</Link>.</p>

            <h2>Wanneer gebruik je een offerte?</h2>
            <ul>
                <li>Bij grotere of langere opdrachten waar prijs en omvang vooraf duidelijk moeten zijn.</li>
                <li>Als een klant om een prijsopgave vraagt.</li>
                <li>Om scope, planning en voorwaarden vast te leggen voordat je start.</li>
            </ul>

            <h2>Wanneer stuur je een factuur?</h2>
            <ul>
                <li>Na afloop van het werk of na levering van producten — om betaald te worden.</li>
                <li>Voor je btw-administratie en boekhouding.</li>
                <li>Wanneer de afgesproken betalingstermijn begint te lopen.</li>
            </ul>

            <h2>Is een offerte vrijblijvend?</h2>
            <p>Dat hangt af van de tekst op je offerte en de omstandigheden. Een offerte kan een bindend aanbod zijn: gaat de klant akkoord, dan kan daar een overeenkomst uit voortkomen. Veel ondernemers vermelden daarom expliciet dat een offerte vrijblijvend is, of koppelen er voorwaarden aan (bijv. &quot;Deze offerte is 30 dagen geldig&quot;).</p>
            <p><strong>Is een offerte altijd vrijblijvend?</strong> Nee. Formuleer bewust wat er gebeurt na akkoord. Zet een geldigheidsduur op je offerte en vermeld duidelijk of de prijs vaststaat of een indicatie is (bijv. bij urenregistratie of nacalculatie).</p>

            <h2>Is een offerte hetzelfde als een factuur?</h2>
            <p>Nee. Een offerte is geen factuur. Een offerte is een voorstel vóór de opdracht; een factuur is een betaalverzoek na levering. Je hoeft een offerte niet te betalen — pas de factuur vraagt om betaling binnen de afgesproken termijn.</p>

            <h2>Mag een factuur afwijken van een offerte?</h2>
            <p>In principe sluit een factuur aan op de goedgekeurde offerte. <strong>Factuur hoger dan offerte</strong> kan als er meerwerk is afgesproken, als de offerte een schatting was (bijv. op basis van uren), of als je vooraf hebt vermeld dat de definitieve factuur kan afwijken.</p>
            <p><strong>Hoeveel mag een factuur afwijken van een offerte?</strong> Er is geen vast percentage in de wet. Zonder afspraak kan een klant een hogere factuur betwisten. Leg afwijkingen daarom altijd uit op de factuur en verwijs naar de offerte (bijv. &quot;Volgens offerte 2026-A01, inclusief meerwerk punt 3&quot;).</p>

            <h2>Offerte en factuur in de praktijk</h2>
            <p>Typische flow:</p>
            <ol>
                <li>Je stuurt een offerte naar de klant.</li>
                <li>De klant gaat akkoord (schriftelijk of per e-mail).</li>
                <li>Je voert het werk uit of levert de producten.</li>
                <li>Je stuurt een factuur die verwijst naar de offerte.</li>
            </ol>
            <p>Een duidelijke offerte voorkomt misverstanden en maakt factureren achteraf eenvoudiger. Maak je offerte met de <Link href="/tools/offerte-maker" className="text-warm-orange hover:underline">gratis offerte maker</Link> en stuur daarna je factuur via <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link> — beide gratis, zonder account, direct als PDF.</p>
            <OfferteFactuurCtas />

            <h2>Veelgestelde vragen</h2>
            <h3>Wat is het verschil tussen offerte en factuur?</h3>
            <p>Offerte = voorstel vóór levering. Factuur = betaalverzoek ná levering.</p>
            <h3>Is een offerte vrijblijvend?</h3>
            <p>Dat hangt af van je tekst en de omstandigheden. Veel ondernemers vermelden expliciet dat een offerte vrijblijvend is, of zetten een geldigheidsduur op het document.</p>
            <h3>Moet je een offerte betalen?</h3>
            <p>Nee. Pas na akkoord, levering en het ontvangen van een factuur betaal je volgens de termijn.</p>
            <h3>Mag de factuur afwijken van de offerte?</h3>
            <p>Alleen als dat is afgesproken, bij meerwerk, of als de offerte een indicatie was. Leg afwijkingen uit op de factuur.</p>
            <h3>Is een offerte hetzelfde als een factuur?</h3>
            <p>Nee. Een offerte is een voorstel; een factuur is een betaalverzoek na levering.</p>
        </>
    )
  },
  {
    slug: 'btw-factuur-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'buitenlandse-klanten-factureren', 'gratis-factuur-zzp', 'factuur-fouten-voorkomen'],
    title: 'Btw op je factuur: zo doe je het goed als zzp’er',
    excerpt: 'Btw op factuur en btw op factuur zzp: uitleg over btw-tarief, factuur exclusief btw, zzp en btw, en factureren met of zonder btw (o.a. KOR).',
    keywords: 'btw op factuur, btw op factuur zzp, btw factuur, zzp en btw, btw zzp, btw tarief zzp, factuur exclusief btw, factureren met of zonder btw, btw grondslag, kor factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Btw%20op%20je%20factuur%20zo%20doe%20je%20het%20goed%20als%20zzp%20er.png',
      alt: 'Btw op factuur zzp: tarieven, factuur exclusief btw en btw berekenen.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Hoe werkt btw op een factuur?',
        answer: 'Je vermeldt op de factuur het bedrag exclusief btw (de btw-grondslag), het btw-tarief (21%, 9% of 0%) en het btw-bedrag, en het totaal inclusief btw. De btw die je ontvangt draag je af via de btw-aangifte; btw op je zakelijke inkopen mag je aftrekken.',
      },
      {
        question: 'Welk btw-tarief gebruik ik als zzp\'er?',
        answer: 'In Nederland: 21% voor de meeste diensten en producten, 9% voor o.a. voedingsmiddelen en culturele diensten. Bij export of btw verleggen: 0%. Controleer altijd welk btw tarief zzp voor jouw branche geldt.',
      },
      {
        question: 'Wat is factuur exclusief btw en inclusief btw?',
        answer: 'Exclusief btw is het bedrag zonder btw (de grondslag). Inclusief btw is het totaal dat de klant betaalt (excl. bedrag + btw). Op je factuur vermeld je beide: subtotaal excl. btw, btw-bedrag en totaal incl. btw.',
      },
      {
        question: 'Factureren met of zonder btw als zzp\'er?',
        answer: 'Meestal met btw (21% of 9%), tenzij je de KOR gebruikt (geen btw), naar het buitenland factureert (0% of btw verlegd) of aan een btw-vrijgestelde onderneming levert. Zet op de factuur altijd welk tarief of welke vrijstelling van toepassing is.',
      },
      {
        question: 'Mag ik als zzp\'er onkosten declareren met btw?',
        answer: 'Zakelijke kosten met btw mag je in principe als voorbelasting aftrekken in je btw-aangifte. Declareer je onkosten aan een opdrachtgever, dan vermeld je de btw apart op de factuur als je btw-plichtig bent. Bij KOR mag je geen btw aftrekken.',
      },
    ],
    content: (
        <>
            <p>Veel zzp&apos;ers zoeken naar <strong>btw op factuur</strong> en <strong>btw op factuur zzp</strong>: hoe bereken je het, welk tarief gebruik je, en wanneer factureer je met of zonder btw? <strong>Btw factuur</strong> en <strong>zzp en btw</strong> gaan hand in hand. In dit artikel leggen we uit hoe <strong>btw op je factuur</strong> werkt, wat <strong>factuur exclusief btw</strong> betekent, welk <strong>btw tarief zzp</strong> van toepassing is, en wanneer je <strong>factureren met of zonder btw</strong> toepast.</p>

            <h2>Hoe werkt btw op je factuur?</h2>
            <p>Als ondernemer incasseer je btw namens de Belastingdienst. Je telt het btw-bedrag op bij de prijs van je product of dienst (<strong>btw grondslag</strong> × tarief). Dit bedrag draag je later af via je btw-aangifte. De btw die je zelf betaalt over zakelijke inkopen, mag je daar weer van aftrekken.</p>
            <p>Op je factuur vermeld je dit altijd gesplitst:</p>
            <ul>
                <li><strong>Subtotaal (excl. btw) / factuur exclusief btw:</strong> Het bedrag voor jouw werk — de grondslag waarover btw wordt berekend.</li>
                <li><strong>Btw-tarief en -bedrag:</strong> Bijvoorbeeld &quot;21% btw&quot; en het berekende bedrag.</li>
                <li><strong>Totaal (incl. btw):</strong> Het eindbedrag dat de klant betaalt.</li>
            </ul>

            <h2>Btw tarief zzp: welk tarief gebruik je?</h2>
            <p>In Nederland zijn er drie tarieven voor <strong>btw factuur</strong> en <strong>btw zzp</strong>:</p>
            <ul>
                <li><strong>21% (standaardtarief):</strong> Voor de meeste diensten en producten.</li>
                <li><strong>9% (verlaagd tarief):</strong> Voor o.a. voedingsmiddelen, boeken, kappers en culturele diensten.</li>
                <li><strong>0% (nultarief):</strong> Bij export naar andere EU-landen of daarbuiten, of bij btw verleggen.</li>
            </ul>
            <p>Controleer altijd welk <strong>btw tarief zzp</strong> voor jouw branche geldt.</p>

            <h2>Factureren met of zonder btw: de KOR</h2>
            <p>De <strong>Kleineondernemersregeling (KOR)</strong> is een btw-vrijstelling voor ondernemers met een jaaromzet van maximaal € 20.000. Dan kies je in feite voor <strong>factureren zonder btw</strong>:</p>
            <ul>
                <li>Je rekent <strong>geen btw</strong> op je facturen.</li>
                <li>Je doet geen btw-aangifte.</li>
                <li>Je mag ook geen btw op zakelijke kosten aftrekken.</li>
                <li>Je vermeldt op de factuur: &quot;Factuur vrijgesteld van btw op grond van artikel 25 Wet OB&quot;.</li>
            </ul>
            <p>Bij <strong>factureren aan btw vrijgestelde onderneming</strong> of bij KOR gebruik je dus geen btw-tarief op de factuur.</p>

            <h2>Factuur exclusief btw en btw grondslag</h2>
            <p>De <strong>btw grondslag</strong> is het bedrag waarover je btw berekent — dus het bedrag <strong>factuur exclusief btw</strong>. Daarop pas je het tarief toe (21% of 9%). Voorbeeld: € 100 excl. btw + 21% btw = € 21 btw, totaal € 121 incl. btw. Op je factuur zet je altijd beide duidelijk neer.</p>

            <h2>Btw op factuur zzp: buitenland</h2>
            <p>Factureer je aan een ondernemer in een ander EU-land? Dan pas je meestal <strong>btw verleggen</strong> toe: 0% btw en op de factuur &quot;Btw verlegd&quot;. De klant doet dan de btw-aangifte in zijn land. Meer hierover in ons artikel <Link href="/blogs/buitenlandse-klanten-factureren" className="text-warm-orange hover:underline">Buitenlandse klanten factureren</Link>.</p>

            <p>Met een tool als FactuurBaas kun je het juiste btw-tarief selecteren of btw verleggen aangeven. De tool berekent de btw voor je, zodat je <strong>btw op factuur</strong> altijd goed staat.</p>
            <CtaButton />

            <h2>Veelgestelde vragen</h2>
            <h3>Hoe zet ik btw op mijn factuur?</h3>
            <p>Vermeld subtotaal excl. btw (grondslag), btw-tarief en btw-bedrag, en totaal incl. btw. Gebruik 21% of 9% tenzij KOR, buitenland of vrijstelling van toepassing is.</p>
            <h3>Wat is het verschil tussen excl. en incl. btw?</h3>
            <p>Excl. btw = bedrag zonder btw (grondslag). Incl. btw = bedrag + btw dat de klant betaalt.</p>
            <h3>Wanneer factureer ik zonder btw?</h3>
            <p>Bij KOR, bij levering naar het buitenland (btw verlegd of buiten EU), of bij factureren aan btw-vrijgestelde onderneming. Vermeld altijd de reden op de factuur.</p>
        </>
    )
  },
    {
    slug: 'buitenlandse-klanten-factureren',
    relatedSlugs: ['btw-factuur-zzp', 'factuur-maken-zzp', 'gratis-factuur-zzp', 'factureren-startende-zzper'],
    title: 'Buitenlandse klanten factureren: btw, valuta en regels',
    excerpt: 'Btw verlegd buitenland, factuur zonder btw naar buitenland en factuur naar buitenland btw: uitleg voor buitenlandse afnemers en voorbeeld factuur buitenland.',
    keywords: 'btw verlegd buitenland, factuur zonder btw buitenland, factuur naar buitenland btw, btw buitenlandse factuur, btw buitenlandse klant, factuur buitenland btw, buitenlandse afnemers, voorbeeld factuur buitenland',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Buitenlandse%20klanten%20factureren.png',
      alt: 'Buitenlandse klanten factureren: btw verlegd buitenland en factuur naar buitenland.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Hoe werkt btw verlegd bij factureren naar het buitenland?',
        answer: 'Bij levering aan een ondernemer in de EU pas je btw verleggen toe: je brengt 0% btw in rekening, vermeldt het btw-nummer van je klant op de factuur en zet er de tekst "Btw verlegd" of "Reverse charge" op. De klant doet dan de btw-aangifte in zijn eigen land.',
      },
      {
        question: 'Mag ik een factuur zonder btw sturen naar het buitenland?',
        answer: 'Ja. Naar ondernemers in de EU: 0% btw met "Btw verlegd" en het btw-nummer van de klant. Naar klanten buiten de EU: geen btw; vermeld op de factuur dat het om een prestatie buiten de EU gaat.',
      },
      {
        question: 'Welke tekst moet er op de factuur bij btw verlegd buitenland?',
        answer: 'Vermeld "Btw verlegd" of "Reverse charge" op de factuur. Daarnaast moet het btw-identificatienummer van de buitenlandse afnemer erop staan. Zonder deze gegevens is de factuur niet in orde.',
      },
      {
        question: 'Hoe bereken ik btw op een factuur naar het buitenland?',
        answer: 'Naar EU-ondernemers: 0% btw (btw verleggen). Naar particulieren in de EU: vaak btw in het land van de klant. Naar buiten de EU: geen btw. Voor je eigen aangifte reken je bedragen in vreemde valuta om naar euro\'s.',
      },
      {
        question: 'Wat is het verschil tussen factuur binnenland en factuur buitenland btw?',
        answer: 'Binnenland: je rekent Nederlands btw-tarief (21% of 9%) en draagt btw af. Buitenland EU-ondernemer: 0% btw, "Btw verlegd", klant doet aangifte. Buitenland buiten EU: geen btw.',
      },
    ],
    content: (
      <>
        <p>Steeds meer zzp&apos;ers werken voor <strong>buitenlandse klanten</strong> en <strong>buitenlandse afnemers</strong>. Veel zoekvragen gaan over <strong>btw verlegd buitenland</strong>, <strong>factuur zonder btw buitenland</strong> en <strong>factuur naar buitenland btw</strong>. Hoe zit het met de <strong>btw op buitenlandse factuur</strong> en wat moet er op een <strong>voorbeeld factuur buitenland</strong>? We zetten de regels op een rij.</p>

        <h2>Btw verlegd buitenland: factuur naar buitenland btw</h2>
        <p>Lever je diensten aan een andere ondernemer binnen de EU? Dan is de hoofdregel <strong>btw verleggen</strong> (<strong>btw verlegd buitenland</strong>). Je factuur is dan in feite een <strong>factuur zonder btw</strong> (0% btw) naar die buitenlandse partij. Dit houdt in:</p>
        <ul>
          <li>Je brengt <strong>0% btw</strong> in rekening op de <strong>factuur naar buitenland</strong>.</li>
          <li>Je vermeldt het <strong>btw-identificatienummer van je klant</strong> op de factuur. Dit is verplicht.</li>
          <li>Je zet op de factuur de tekst: <strong>&quot;Btw verlegd&quot;</strong> of &quot;Reverse charge&quot; (<strong>btw verlegd buitenland tekst op factuur</strong>).</li>
        </ul>
        <p>De <strong>buitenlandse afnemer</strong> is dan zelf verantwoordelijk voor de btw-aangifte in zijn eigen land. Zo regel je de <strong>btw buitenlandse factuur</strong> en <strong>btw buitenlandse facturen</strong> correct. Dit kun je eenvoudig instellen in een goede factuurtool zoals FactuurBaas.</p>

        <h2>Factuur zonder btw buitenland: klanten buiten de EU</h2>
        <p>Voor <strong>buitenlandse klanten</strong> buiten de EU ligt het nog simpeler: je brengt <strong>geen btw op factuur buitenland</strong> in rekening. De dienst is &quot;belast in het land van de afnemer&quot;. Op je <strong>factuur buitenland zonder btw</strong> vermeld je dat het om een &quot;prestatie buiten de EU&quot; gaat. Zo voldoe je aan de regels voor een <strong>factuur zonder btw buitenland</strong>.</p>

        <h2>Btw op factuur naar buitenland: samenvatting</h2>
        <p><strong>Btw factuur buitenland</strong> en <strong>btw buitenlandse klant</strong>: naar EU-ondernemers 0% met btw verlegd; naar buiten de EU geen btw. Voor je eigen administratie moet je het bedrag bij vreemde valuta omrekenen naar euro&apos;s (wisselkoers factuurdatum). Meer over btw in het algemeen lees je in <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">Btw op je factuur als zzp&apos;er</Link>.</p>

        <h2>Factureren in een andere valuta</h2>
        <p>Spreek je met je <strong>buitenlandse klant</strong> een prijs af in dollars of ponden? Dat mag. Je mag de factuur in een vreemde valuta opstellen. Voor je eigen btw-aangifte reken je het bedrag om naar euro&apos;s op de factuurdatum. <strong>Tip:</strong> Vermeld het totaal eventueel in zowel de vreemde valuta als in euro&apos;s op de factuur.</p>

        <h2>Voorbeeld factuur buitenland en tool</h2>
        <p>Voor een correcte <strong>voorbeeld factuur buitenland</strong> heb je dus: 0% btw (EU-ondernemer of buiten EU), het btw-nummer van de klant (bij EU), en de tekst &quot;Btw verlegd&quot; (bij EU). In FactuurBaas kun je eenvoudig het juiste tarief of btw verleggen kiezen, zodat je <strong>btw op factuur naar buitenland</strong> goed regelt.</p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Welke tekst bij btw verlegd buitenland?</h3>
        <p>Zet &quot;Btw verlegd&quot; of &quot;Reverse charge&quot; op de factuur en vermeld het btw-identificatienummer van de buitenlandse afnemer.</p>
        <h3>Factuur zonder btw naar buitenland?</h3>
        <p>Naar EU-ondernemers: 0% btw + btw verlegd. Naar buiten de EU: geen btw; vermeld prestatie buiten de EU.</p>
        <h3>Hoe bereken ik btw aan buitenlandse klant?</h3>
        <p>Meestal 0% (btw verleggen naar EU-ondernemer) of geen btw (buiten EU). De klant is dan zelf verantwoordelijk voor btw in zijn land.</p>
      </>
    )
  },
  {
    slug: 'factureren-startende-zzper',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'sneller-betalen-factuur', 'factuur-fouten-voorkomen'],
    title: 'Factureren als startende zzp\'er: factuur maken zzp, opstellen en wat erop moet',
    excerpt: 'Zzp factureren en factuur maken zzp: wat moet er op een factuur staan, betalingstermijn factuur zzp, KvK op factuur. Alles voor startende zzp\'ers.',
    keywords: 'factuur maken zzp, zzp factureren, factureren zzp, zzp factuur maken, factuur zzp, factuur opstellen zzp, facturen maken zzp, betalingstermijn factuur zzp, wat moet er op een factuur staan zzp, hoe maak je een factuur zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20als%20startende%20zzp%20er.png',
      alt: 'Factureren als startende zzp\'er: factuur maken zzp en factuur opstellen.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      { question: 'Hoe maak ik een factuur als zzp\'er?', answer: 'Verzamel je gegevens (KvK, btw-nummer) en die van de klant. Vul een factuur in met factuurnummer, datum, omschrijving van je werk, bedragen en betaalgegevens. Gebruik een tool zoals FactuurBaas of een template. Download als PDF en verstuur. Zie ook ons stappenplan "Hoe maak je een factuur als zzp\'er?"' },
      { question: 'Wat moet er op een factuur staan als zzp\'er?', answer: 'Verplicht: jouw gegevens inclusief KvK-nummer en btw-nummer, klantgegevens, uniek factuurnummer, factuur- en leveringsdatum, omschrijving van diensten/producten, bedragen excl. en incl. btw, en betaalgegevens met betalingstermijn.' },
      { question: 'Moet mijn KvK-nummer op de factuur?', answer: 'Ja. Het KvK-nummer en je btw-identificatienummer zijn verplicht op elke factuur. Zonder deze gegevens voldoet de factuur niet aan de eisen van de Belastingdienst.' },
      { question: 'Welke betalingstermijn gebruik ik op mijn factuur als zzp\'er?', answer: 'Veel zzp\'ers kiezen 14 of 30 dagen. Vermeld de betalingstermijn en de exacte vervaldatum duidelijk op de factuur, bijvoorbeeld: "Graag betalen binnen 14 dagen na factuurdatum."' },
      { question: 'Waar kan ik als starter het beste factureren?', answer: 'Start met een eenvoudige factuurtool zoals FactuurBaas: geen account nodig, direct een professionele PDF. Zo voorkom je fouten en bespaar je tijd ten opzichte van Word of Excel.' },
    ],
    content: (
        <>
            <p>Gefeliciteerd met je start! Veel starters zoeken naar <strong>factuur maken zzp</strong>, <strong>zzp factureren</strong> of <strong>factuur opstellen zzp</strong>. <strong>Factureren zzp</strong> hoort erbij: je eerste factuur opmaken, weten <strong>wat er op een factuur moet staan</strong>, en een duidelijke <strong>betalingstermijn factuur zzp</strong> kiezen. In dit artikel vind je alles wat je moet weten om als startende zzp&apos;er goed te factureren.</p>

            <h2>Voordat je begint: basis voor factuur maken zzp</h2>
            <p>Voordat je je eerste <strong>zzp factuur</strong> kunt sturen, heb je het volgende nodig:</p>
            <ol>
                <li><strong>KvK-nummer:</strong> Ontvang je na inschrijving bij de Kamer van Koophandel. <strong>Moet KvK-nummer op factuur?</strong> Ja — het is verplicht op elke factuur.</li>
                <li><strong>Btw-identificatienummer:</strong> Krijg je automatisch van de Belastingdienst na KvK-inschrijving. Ook verplicht op je factuur.</li>
                <li><strong>Zakelijke bankrekening:</strong> Niet verplicht, maar wel aan te raden om privé en zakelijk gescheiden te houden.</li>
            </ol>

            <h2>Wat moet er op een factuur staan? (zzp)</h2>
            <p>Voor een correcte <strong>factuur zzp</strong> en <strong>facturen maken zzp</strong> moet je factuur in ieder geval bevatten: jouw gegevens (naam, adres, KvK, btw-nummer), klantgegevens, uniek factuurnummer, factuur- en leveringsdatum, omschrijving van je werk, bedragen excl. en incl. btw, en betaalgegevens met <strong>betalingstermijn factuur zzp</strong>. Uitgebreide uitleg vind je in <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">Hoe maak je een factuur als zzp&apos;er?</Link> en <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">gratis factuur maken voor zzp&apos;ers</Link>.</p>

            <h2>Factuur opstellen zzp: je eerste factuur</h2>
            <p>Je eerste factuur is de blauwdruk voor de rest. Zorg voor een duidelijke omschrijving van je werk, een uniek factuurnummer en de juiste btw. <strong>Factuur opmaken zzp</strong> gaat het snelst met een tool: je vult in, controleert en downloadt de PDF. Geen gedoe met Word of Excel.</p>

            <h2>Betalingstermijn factuur zzp</h2>
            <p>Als starter wil je snel betaald krijgen. Een gebruikelijke <strong>betalingstermijn factuur zzp</strong> is 14 of 30 dagen. Vermeld dit duidelijk op je factuur, bijvoorbeeld: &quot;Graag betalen binnen 14 dagen na factuurdatum.&quot; Meer tips om sneller betaald te krijgen lees je in <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">Factuur sneller betaald krijgen</Link>.</p>

            <h2>Zzp factureren: maak het jezelf makkelijk</h2>
            <p>Een template in Word of Excel geeft snel fouten (verkeerde nummering, rekenfouten) en ziet er vaak minder professioneel uit. Een online factuurtool zoals <strong>FactuurBaas</strong> is gemaakt voor <strong>zzp factureren</strong> en <strong>factuur maken zzp</strong>: je vult de gegevens in, en met één klik heb je een correcte, professionele PDF. Ideaal om te starten met <strong>facturen maken zzp</strong>.</p>
            <CtaButton />

            <h2>Veelgestelde vragen</h2>
            <h3>Hoe maak ik een factuur als zzp&apos;er?</h3>
            <p>Verzamel je gegevens en die van de klant, kies een template of tool (bijv. FactuurBaas), vul alle verplichte velden in, controleer btw en totaal, en download of verstuur als PDF.</p>
            <h3>Moet het KvK-nummer op de factuur?</h3>
            <p>Ja. KvK-nummer en btw-identificatienummer zijn verplicht op elke factuur.</p>
            <h3>Welke betalingstermijn op mijn factuur?</h3>
            <p>Veel zzp&apos;ers gebruiken 14 of 30 dagen. Vermeld de termijn en vervaldatum duidelijk op de factuur.</p>
        </>
    )
  },
    {
    slug: 'factuurbeheer-overzicht',
    relatedSlugs: ['sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factuur-maken-zzp', 'beste-boekhoudprogramma-zzp'],
    title: 'Factuurbeheer: digitaal en elektronisch overzicht + factuurbeheeroplossingen',
    excerpt: 'Factuurbeheer en factuurbeheeroplossingen: hoe je digitaal factuurbeheer en elektronisch factuurbeheer inricht voor een helder overzicht over je facturen en inkomsten.',
    keywords: 'factuurbeheer, elektronisch factuurbeheer, digitaal factuurbeheer, factuurbeheeroplossingen, facturen overzicht, inkomsten zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Slim%20factuurbeheer.png',
      alt: 'Factuurbeheer: digitaal en elektronisch overzicht over facturen en inkomsten.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      { question: 'Wat is factuurbeheer?', answer: 'Factuurbeheer is het overzichtelijk beheren van al je facturen: wat is verstuurd, wat is betaald, wat staat open en wat is te laat. Goed factuurbeheer helpt je cashflow en administratie. Je kunt dit digitaal of elektronisch doen met mappen, spreadsheets of factuurbeheeroplossingen.' },
      { question: 'Wat is elektronisch factuurbeheer?', answer: 'Elektronisch factuurbeheer betekent dat je facturen digitaal maakt, opslaat en bijhoudt — geen papieren mappen. Je werkt met PDF\'s, e-mail en eventueel een tool of software. Zo houd je betaalstatussen en overzichten bij zonder papier.' },
      { question: 'Wat zijn factuurbeheeroplossingen?', answer: 'Factuurbeheeroplossingen zijn tools of software om je facturen centraal te beheren: maken, nummeren, opslaan, statussen bijhouden en herinneringen sturen. Van eenvoudige factuurtools tot volledige boekhoudpakketten. FactuurBaas is een eerste stap: consistente facturen maken, daarna zelf PDF\'s ordenen of later uitbreiden.' },
      { question: 'Hoe richt ik digitaal factuurbeheer in?', answer: 'Kies één plek voor al je facturen (bijv. één tool om ze te maken), gebruik vaste nummering, sla PDF\'s georganiseerd op (per jaar of klant) en houd een simpel overzicht bij van wat openstaat en wat betaald is. Zo bouw je digitaal factuurbeheer stap voor stap op.' },
    ],
    content: (
      <>
        <p>Veel ondernemers zoeken naar goed <strong>factuurbeheer</strong>: overzicht over wat er openstaat, wat betaald is en wat te laat is. <strong>Elektronisch factuurbeheer</strong> en <strong>digitaal factuurbeheer</strong> helpen je daarbij — en er zijn verschillende <strong>factuurbeheeroplossingen</strong> om uit te kiezen. In dit artikel lees je waarom factuurbeheer belangrijk is en hoe je een solide basis legt voor je overzicht.</p>

        <h2>Waarom is factuurbeheer belangrijk?</h2>
        <ul>
          <li><strong>Cashflow:</strong> Je weet precies hoeveel geld er binnenkomt en wanneer.</li>
          <li><strong>Tijdsbesparing:</strong> Nooit meer zoeken naar een specifieke factuur of betaalstatus.</li>
          <li><strong>Professionaliteit:</strong> Snel reageren op vragen van klanten en op tijd herinneringen sturen.</li>
          <li><strong>Minder stress:</strong> Een duidelijk overzicht geeft rust. <strong>Digitaal factuurbeheer</strong> maakt dat eenvoudiger.</li>
        </ul>

        <h2>Van mappen naar digitaal en elektronisch factuurbeheer</h2>
        <p>Veel starters beginnen met een mapje &quot;Verzonden facturen&quot; en een Excel-sheet voor de status. Dat werkt voor de eerste facturen, maar wordt snel onoverzichtelijk. <strong>Elektronisch factuurbeheer</strong> betekent: facturen digitaal maken, opslaan en bijhouden — geen papieren chaos. Met de juiste <strong>factuurbeheeroplossingen</strong> of een vaste werkwijze houd je alles op één plek. Lees ook <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">factuur sneller betaald krijgen</Link> en <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">veelgemaakte fouten op facturen</Link>.</p>

        <h2>Factuurbeheeroplossingen: waar begin je?</h2>
        <p>Er zijn <strong>factuurbeheeroplossingen</strong> in alle soorten: van simpele factuurtools tot volledige boekhoudsoftware. FactuurBaas focust op het moeiteloos <strong>maken</strong> van professionele facturen — de eerste stap naar slimmer <strong>factuurbeheer</strong>. Door elke factuur met dezelfde tool te maken, creëer je een consistente basis. In de toekomst kunnen features zoals een dashboard met betaalstatussen en herinneringen volgen. De basis leg je nu al:</p>
        <ol>
          <li><strong>Centraliseer:</strong> Gebruik één tool voor alle uitgaande facturen.</li>
          <li><strong>Consistente nummering:</strong> FactuurBaas helpt je met een duidelijke structuur.</li>
          <li><strong>PDF&apos;s georganiseerd opslaan:</strong> Mappen per jaar of per klant voor je <strong>digitaal factuurbeheer</strong>.</li>
        </ol>
        <p>Meer over tools en administratie vind je in <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">beste boekhoudprogramma voor zzp&apos;ers</Link>.</p>

        <p>Begin vandaag met een solide basis voor je <strong>factuurbeheer</strong>. Maak je volgende factuur met FactuurBaas en ervaar hoe eenvoudig <strong>elektronisch factuurbeheer</strong> kan starten.</p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is factuurbeheer?</h3>
        <p>Factuurbeheer is het overzichtelijk beheren van je facturen: wat is verstuurd, betaald of open. Digitaal of met <strong>factuurbeheeroplossingen</strong> houd je alles op één plek.</p>
        <h3>Wat is het verschil tussen digitaal en elektronisch factuurbeheer?</h3>
        <p>In de praktijk overlappen ze: beide gaan over facturen digitaal maken, opslaan en bijhouden in plaats van op papier. <strong>Elektronisch factuurbeheer</strong> benadrukt vaak de digitale uitwisseling en opslag.</p>
        <h3>Welke factuurbeheeroplossingen zijn er?</h3>
        <p>Van eenvoudige factuurtools (zoals FactuurBaas) tot boekhoudpakketten met facturatie, betaalstatussen en herinneringen. Kies wat past bij het aantal facturen en je administratie.</p>
      </>
    )
  },
  {
    slug: 'sneller-betalen-factuur',
    relatedSlugs: ['factuur-maken-zzp', 'factuur-fouten-voorkomen', 'factuurbeheer-overzicht', 'gratis-factuur-zzp'],
    title: 'Factuur sneller betaald krijgen: tips voor zzp\'ers (betaaltermijn & meer)',
    excerpt: 'Hoe krijg je je factuur sneller betaald? Betaaltermijn zzp, factuur eerder betaald krijgen en praktische tips om je factuur snel betaald te krijgen.',
    keywords: 'factuur sneller betaald krijgen, betaaltermijn zzp, factuur sneller, factuur eerder betaald krijgen, factuur snel betaald krijgen, factuur betaald krijgen, factuur sneller betaald',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/De%20beste%20manier%20om%20sneller%20betaald%20te%20krijgen%20als%20zzp%20er.png',
      alt: 'Factuur sneller betaald krijgen: betaaltermijn zzp en tips voor tijdige betaling.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Hoe krijg ik mijn factuur sneller betaald?',
        answer: 'Factureer direct na de klus, gebruik een korte betaaltermijn (bijv. 14 dagen), vermeld de vervaldatum duidelijk op de factuur, maak betalen eenvoudig (bijv. betaallink), en stuur tijdig een vriendelijke herinnering als de termijn verstreken is. Een foutloze factuur voorkomt vertraging.',
      },
      {
        question: 'Welke betaaltermijn gebruik ik als zzp\'er?',
        answer: 'Veel zzp\'ers kiezen 14 of 30 dagen. Een kortere betaaltermijn zzp (14 dagen) helpt je cashflow. Vermeld de termijn en de exacte vervaldatum op de factuur en in je offerte of algemene voorwaarden.',
      },
      {
        question: 'Hoe krijg ik mijn factuur eerder of snel betaald?',
        answer: 'Stuur de factuur meteen na oplevering, niet pas aan het einde van de maand. Zet een duidelijke vervaldatum op de factuur. Overweeg een kleine korting voor snelle betalers (bijv. binnen 7 dagen). Maak betalen zo makkelijk mogelijk voor de klant.',
      },
      {
        question: 'Wat als mijn factuur niet op tijd betaald wordt?',
        answer: 'Stuur eerst een vriendelijke herinnering per e-mail. Vermeld de factuurnummer en vervaldatum. Blijft betaling uit, dan kun je een aanmaning sturen of (als afgesproken) verlate betaling interest in rekening brengen. Houd je algemene voorwaarden en communicatie professioneel.',
      },
    ],
    content: (
        <>
            <p>Veel zzp&apos;ers zoeken hoe ze hun <strong>factuur sneller betaald krijgen</strong> of hun <strong>factuur eerder betaald krijgen</strong>. Een gezonde cashflow begint bij tijdige betaling. In dit artikel vind je concrete tips om je <strong>factuur snel betaald te krijgen</strong>: van de juiste <strong>betaaltermijn zzp</strong> tot herinneringen en een <strong>factuur sneller</strong> bij de klant.</p>

            <h2>1. Factureer direct en correct</h2>
            <p>De klok begint pas te tikken als de factuur bij de klant is. Wacht niet tot het einde van de maand — stuur je factuur zodra de klus geklaard is. Zo vergroot je de kans dat je je <strong>factuur sneller betaald</strong> krijgt. Zorg er ook voor dat de factuur foutloos is; een foutieve factuur wordt vaak opzij gelegd. Lees ook <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">7 veelgemaakte fouten op facturen</Link>.</p>

            <h2>2. Betaaltermijn zzp: kies 14 of 30 dagen</h2>
            <p>De <strong>betaaltermijn zzp</strong> die je op je factuur zet, heeft direct invloed op wanneer je betaald wordt. Een termijn van 30 dagen is gebruikelijk, maar <strong>14 dagen is voor zzp&apos;ers vaak beter</strong> om je <strong>factuur betaald te krijgen</strong> zonder lang te wachten. Wees vanaf het begin duidelijk: in je offerte, algemene voorwaarden en op de factuur. Vermeld de <strong>exacte vervaldatum</strong> groot en duidelijk op de factuur.</p>

            <h2>3. Maak betalen super eenvoudig</h2>
            <p>Hoe minder moeite een klant hoeft te doen, hoe sneller hij betaalt. Een directe betaallink (bijv. iDEAL) op de factuur helpt om je <strong>factuur snel betaald te krijgen</strong>. Hoewel FactuurBaas dit (nog) niet standaard integreert, is het een strategie om in gedachten te houden. Duidelijke betaalgegevens (IBAN, tenaamstelling) op de factuur zijn in ieder geval een must.</p>

            <h2>4. Stuur vriendelijke herinneringen</h2>
            <p>Is de <strong>betaaltermijn</strong> verstreken? Wacht niet te lang met een herinnering. Een korte, vriendelijke e-mail is vaak genoeg om je <strong>factuur alsnog betaald te krijgen</strong>. Bijvoorbeeld: &quot;Dag [Naam], wellicht is deze factuur aan je aandacht ontsnapt. Zou je hier nog naar willen kijken?&quot;</p>

            <h2>5. Beloon snelle betalers</h2>
            <p>Overweeg een kleine korting voor klanten die binnen bijvoorbeeld 7 dagen betalen. Zo stimuleer je <strong>factuur sneller betaald krijgen</strong> zonder boetes. Bijvoorbeeld: &quot;Betaal binnen 7 dagen en ontvang 2% korting.&quot;</p>

            <p>Door deze tips toe te passen, neem je de controle over je cashflow. Begin met het fundament: een snelle, correcte factuur. Maak er vandaag nog een met FactuurBaas.</p>
            <CtaButton />

            <h2>Veelgestelde vragen</h2>
            <h3>Hoe krijg ik mijn factuur sneller betaald?</h3>
            <p>Factureer direct na de klus, gebruik een korte betaaltermijn (14 dagen), vermeld de vervaldatum duidelijk, en stuur tijdig een herinnering. Een foutloze factuur voorkomt vertraging.</p>
            <h3>Welke betaaltermijn is gebruikelijk voor zzp&apos;ers?</h3>
            <p>14 of 30 dagen. 14 dagen is beter voor je cashflow; vermeld het in je offerte en op de factuur.</p>
            <h3>Wat als de klant te laat betaalt?</h3>
            <p>Stuur eerst een vriendelijke herinnering. Blijft betaling uit, dan een aanmaning of (indien van toepassing) verlate betaling interest volgens je voorwaarden.</p>
        </>
    )
  },
    {
    slug: 'factuur-pdf-downloaden',
    relatedSlugs: ['factuur-maken-zzp', 'gratis-factuur-zzp', 'factuur-templates-zzp', 'factuur-fouten-voorkomen'],
    title: 'Factuur PDF downloaden: factuur maken pdf, download en versturen',
    excerpt: 'Factuur PDF en pdf factuur: hoe je eenvoudig factuur maken pdf doet, factuur downloaden of factuur pdf download. Stappen voor pdf factuur maken, factuur printen en versturen.',
    keywords: 'factuur pdf, pdf factuur, factuur maken pdf, pdf factuur maken, factuur downloaden, pdf facturen, factuur pdf download, factuur printen, factuur download, factuur in pdf maken, facturen downloaden, download factuur, pdf factuur omzetten',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoe%20je%20eenvoudig%20een%20factuur%20PDF%20downloadt%20en%20verstuurt.png',
      alt: 'Factuur PDF downloaden: factuur maken pdf en factuur downloaden met één klik.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      { question: 'Hoe download ik een factuur als PDF?', answer: 'Maak je factuur in een tool zoals FactuurBaas: vul je gegevens en die van de klant in, controleer de preview en klik op "Download PDF". Je browser downloadt direct een correcte factuur PDF. Geen account nodig.' },
      { question: 'Wat is de beste manier om een factuur in PDF te maken?', answer: 'Gebruik een online factuurtool die direct een PDF genereert. Zo voorkom je fouten en zie je live hoe je pdf factuur eruitziet. Met FactuurBaas maak je binnen een minuut een factuur in pdf maken en download je de bestand.' },
      { question: 'Kan ik een factuur printen?', answer: 'Ja. Nadat je je factuur PDF hebt gedownload, kun je het bestand openen en printen (Ctrl+P of Cmd+P). Een pdf factuur ziet er op papier hetzelfde uit als op het scherm.' },
      { question: 'Hoe verstuur ik een factuur PDF naar mijn klant?', answer: 'Stuur de gedownloade PDF per e-mail als bijlage. Gebruik een duidelijk onderwerp (bijv. "Factuur [nummer] voor [project]") en vermeld in de e-mail de betaaltermijn. Zo is factuur downloaden voor je klant overzichtelijk.' },
      { question: 'Wat is pdf factuur omzetten?', answer: 'Soms wil je een factuur die in Word of Excel staat omzetten naar PDF. Dat kan via "Opslaan als PDF" in dat programma. Beter is om direct met een tool te werken die een factuur PDF maakt, zodat je geen aparte omzetstap nodig hebt.' },
    ],
    content: (
      <>
        <p>Veel mensen zoeken op <strong>factuur pdf</strong>, <strong>pdf factuur</strong> of <strong>factuur maken pdf</strong>. Een <strong>factuur PDF</strong> is de standaard: niet-aanpasbaar, het ziet er overal hetzelfde uit en is ideaal om te <strong>factuur downloaden</strong> of te <strong>factuur printen</strong>. Met FactuurBaas doe je <strong>pdf factuur maken</strong> en <strong>factuur pdf download</strong> in een paar stappen. Hier lees je hoe je eenvoudig <strong>factuur in pdf maken</strong> en <strong>facturen downloaden</strong> of versturen doet.</p>

        <h2>Factuur maken pdf: stap voor stap</h2>
        <p>Volg deze stappen in <Link href="/create-invoice" className="text-warm-orange hover:underline">Factuur Maken</Link> voor een snelle <strong>factuur download</strong> of <strong>download factuur</strong> als PDF:</p>
        <ol>
          <li><strong>Vul de velden in:</strong> Je bedrijfsgegevens, klantgegevens en de geleverde diensten of producten. Je ziet direct een live preview van je <strong>pdf factuur</strong>.</li>
          <li><strong>Controleer de preview:</strong> Kloppen alle bedragen, btw en omschrijving? Geen spelfouten?</li>
          <li><strong>Klik op &quot;Download PDF&quot;:</strong> Je browser doet de rest — direct een correcte <strong>factuur pdf</strong> op je computer. Zo simpel is <strong>factuur in pdf maken</strong>.</li>
        </ol>
        <p>Meer over een correcte factuur opstellen lees je in <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">hoe maak je een factuur als zzp&apos;er</Link> en <Link href="/blogs/gratis-factuur-zzp" className="text-warm-orange hover:underline">gratis factuur maken</Link>. Voor <strong>pdf facturen</strong> in bulk of meerdere facturen: maak ze één voor één en <strong>facturen downloaden</strong> als aparte PDF&apos;s.</p>

        <h2>Je factuur PDF versturen en eventueel factuur printen</h2>
        <p>Na je <strong>factuur pdf download</strong> kun je de PDF naar de klant sturen. Het beste per e-mail:</p>
        <ul>
          <li><strong>Duidelijk onderwerp:</strong> Bijv. &quot;Factuur [nummer] voor [project]&quot;.</li>
          <li><strong>Korte e-mail:</strong> Vermeld de betaaltermijn en dat de factuur in de bijlage zit.</li>
          <li><strong>PDF als bijlage:</strong> Voeg de gedownloade <strong>factuur pdf</strong> toe.</li>
        </ul>
        <p>Wil je <strong>factuur printen</strong>? Open de PDF en gebruik Print (Ctrl+P / Cmd+P). Een <strong>pdf factuur</strong> ziet er op papier professioneel uit.</p>

        <h2>Factuur PDF vs Word/Excel: waarom pdf factuur maken?</h2>
        <p>Een <strong>factuur in pdf maken</strong> is verstandiger dan Word of Excel: een PDF kan de ontvanger niet zomaar aanpassen, wat discussie en fouten voorkomt. Bij &quot;<strong>pdf factuur omzetten</strong>&quot; gaat het vaak om een bestaand document naar PDF brengen — met FactuurBaas maak je direct een <strong>factuur pdf</strong>, zonder omzetstap. Lees ook <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">veelgemaakte fouten op facturen</Link>.</p>

        <h2>Waarom FactuurBaas voor je factuur PDF?</h2>
        <p>Geen gedoe met opmaak of rekenfouten. Met FactuurBaas maak je binnen een minuut een <strong>factuur pdf</strong> die voldoet aan alle eisen. <strong>Factuur downloaden</strong> en versturen wordt zo een fluitje van een cent.</p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe download ik een factuur als PDF?</h3>
        <p>Vul je factuur in bij FactuurBaas, controleer de preview en klik op &quot;Download PDF&quot;. Je krijgt direct een <strong>factuur pdf</strong> op je computer.</p>
        <h3>Kan ik een factuur printen?</h3>
        <p>Ja. Open de gedownloade PDF en kies Print. Geschikt voor archivering of om per post te sturen.</p>
        <h3>Wat is het verschil tussen factuur pdf en Word?</h3>
        <p>Een PDF is vast en niet bewerkbaar; Word kan door de ontvanger worden aangepast. Voor officiële facturen is <strong>factuur pdf</strong> de standaard.</p>
      </>
    )
  },
  {
    slug: 'gratis-factuur-zzp',
    relatedSlugs: ['factuur-maken-zzp', 'factuur-fouten-voorkomen', 'factuur-pdf-downloaden', 'factureren-zonder-account', 'factuur-templates-zzp', 'factureren-startende-zzper'],
    title: 'Gratis factuur maken zzp: voorbeeld, template & uitleg (2026)',
    keywords: 'factuur maken zzp, factuur zzp, voorbeeld factuur zzp, facturen maken zzp, template factuur zzp, gratis factuur maken zzp, factureren zzp, wat moet er op een factuur staan zzp',
    excerpt: 'Gratis factuur maken zzp (online) zonder account: wat er op een factuur moet staan, plus een professionele template om direct als PDF te downloaden.',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Gratis%20factuur%20maken%20Factuurbaas%20gratis%20online%20facturen%20maken.png',
      alt: 'Gratis factuur maken voor zzp\'ers: voorbeeld en template met FactuurBaas.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-02-05',
    faq: [
      {
        question: 'Wat moet er op een factuur staan als zzp\'er?',
        answer: 'Verplicht op elke factuur: jouw bedrijfsgegevens en KVK-nummer, btw-nummer, klantgegevens, uniek factuurnummer, factuurdatum, omschrijving van geleverde diensten of producten, datum van levering, bedrag excl. en incl. btw, en je betaalgegevens met betalingstermijn.',
      },
      {
        question: 'Hoe maak ik een factuur als zzp\'er?',
        answer: 'Verzamel je gegevens en die van de klant, kies een template of tool (zoals FactuurBaas), vul de regels in met duidelijke omschrijvingen, controleer de btw en het totaal, en download of verstuur de factuur als PDF. Met een gratis tool doe je dit in enkele minuten.',
      },
      {
        question: 'Kan ik gratis een factuur maken als zzp\'er?',
        answer: 'Ja. Bij FactuurBaas maak je zonder account en zonder kosten een professionele factuur. Je vult je gegevens in en downloadt direct een PDF die voldoet aan de eisen van de Belastingdienst.',
      },
      {
        question: 'Welk factuurnummer gebruik ik als zzp\'er?',
        answer: 'Gebruik een uniek, opeenvolgend nummer per factuur, bijvoorbeeld 2026-001, 2026-002 of F2026-001. Geen nummer twee keer gebruiken. Veel factuurtools genereren het nummer automatisch.',
      },
      {
        question: 'Welke betalingstermijn zet ik op mijn factuur als zzp\'er?',
        answer: 'Veel zzp\'ers kiezen 14 of 30 dagen. Vermeld dit duidelijk op de factuur, bijvoorbeeld: "Graag betalen binnen 14 dagen na factuurdatum." Een korte termijn helpt je cashflow.',
      },
      {
        question: 'Moet mijn KVK-nummer op de factuur staan?',
        answer: 'Ja. Voor de Belastingdienst is het KVK-nummer verplicht op je factuur. Je btw-identificatienummer ook. Zonder deze gegevens is je factuur niet in orde.',
      },
    ],
    content: (
      <>
        <p>Als zzp&apos;er moet je kunnen factureren: een factuur maken, een goed voorbeeld of template gebruiken en weten wat er verplicht op moet staan. Veel zoekopdrachten gaan over <strong>factuur maken zzp</strong>, <strong>voorbeeld factuur zzp</strong> en <strong>gratis factuur maken zzp</strong>. In dit artikel vind je een overzicht: wat moet er op een factuur staan, welke opties je hebt om facturen te maken (inclusief gratis), en hoe je snel een professionele factuur als zzp&apos;er klaarzet.</p>

        <h2>Wat moet er op een factuur staan als zzp&apos;er?</h2>
        <p>De Belastingdienst eist bepaalde gegevens op elke factuur. Zorg dat deze er altijd op staan:</p>
        <ul>
          <li><strong>Jouw gegevens:</strong> Naam, adres, KVK-nummer en btw-identificatienummer.</li>
          <li><strong>Klantgegevens:</strong> Volledige naam en adres van de ontvanger.</li>
          <li><strong>Factuurnummer:</strong> Uniek en opeenvolgend (bijv. 2026-001, 2026-002).</li>
          <li><strong>Factuurdatum en leveringsdatum.</strong></li>
          <li><strong>Omschrijving:</strong> Wat heb je geleverd (diensten/producten), hoeveelheid en prijs.</li>
          <li><strong>Bedragen:</strong> Subtotaal excl. btw, btw-bedrag en -tarief, totaal incl. btw.</li>
          <li><strong>Betaalgegevens:</strong> IBAN, tenaamstelling en betalingstermijn (bijv. 14 dagen).</li>
        </ul>
        <p>Een <strong>template factuur zzp</strong> of een tool zoals FactuurBaas zorgt ervoor dat je niets vergeet. Meer detail vind je in ons stappenplan <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">Hoe maak je een factuur als zzp&apos;er?</Link>.</p>

        <CtaButton />

        <h2>Factuur maken als zzp&apos;er: welke opties heb je?</h2>
        <p>Voor het maken van facturen als zzp&apos;er bestaan grofweg drie manieren. Hier een korte vergelijking.</p>

        <h3>Optie 1: Word of Excel (template zelf invullen)</h3>
        <p>Veel zzp&apos;ers beginnen met een factuur voorbeeld in Word of Excel: een template downloaden en handmatig invullen.</p>
        <ul>
          <li><strong>Voordelen:</strong> Geen extra software, je hebt het vaak al.</li>
          <li><strong>Nadelen:</strong> Foutgevoelig (factuurnummers, btw), tijdrovend en het ziet er vaak minder professioneel uit. Je moet zelf als PDF opslaan.</li>
        </ul>

        <h3>Optie 2: Boekhoudpakket (Moneybird, e-Boekhouden, etc.)</h3>
        <p>Een volledig pakket voor administratie en facturatie.</p>
        <ul>
          <li><strong>Voordelen:</strong> Alles-in-één: factureren, bank, btw-aangifte.</li>
          <li><strong>Nadelen:</strong> Leercurve, vaak overkill als je alleen facturen wilt maken, en na een proefperiode betaald.</li>
        </ul>

        <h3>Optie 3: FactuurBaas — gratis factuur maken voor zzp&apos;ers</h3>
        <p>FactuurBaas is gemaakt om snel een correcte factuur te maken: geen account nodig, geen abonnement. Ideaal om te <strong>factureren als zzp&apos;er</strong> zonder gedoe.</p>
        <ul>
          <li><strong>Voordelen:</strong> Geen registratie, direct een professionele PDF, alle verplichte velden zitten in de template. 100% gratis voor het maken van facturen.</li>
          <li><strong>Nadelen:</strong> Geen volledige boekhouding; facturen en betaalstatus beheer je zelf (bijv. in een map).</li>
        </ul>

        <h2>Voorbeeld en template: zo ziet een factuur zzp eruit</h2>
        <p>Een goed <strong>voorbeeld factuur zzp</strong> heeft een duidelijke opbouw: jouw gegevens en logo bovenaan, klantgegevens, factuurnummer en datum, tabel met regels (omschrijving, aantal, prijs, btw), totaal en betaalgegevens. Met FactuurBaas kies je een template en vul je alleen de velden in; de layout en verplichte onderdelen staan al goed. Geen gedoe met opmaak of vergeten velden.</p>

        <CtaButton />

        <h2>Conclusie: factuur maken zzp en factureren zzp</h2>
        <p>Of je nu zoekt op <strong>factuur zzp</strong>, <strong>facturen maken zzp</strong> of <strong>gratis factuur maken zzp</strong>: je hebt recht op een eenvoudige, correcte factuur. Zorg dat je weet wat er op moet staan, kies een voorbeeld of template die daaraan voldoet, en gebruik desnoods een gratis tool. Voor de zzp&apos;er die snel wil factureren zonder account of kosten is FactuurBaas een logische keuze: gegevens invullen, PDF downloaden, klaar.</p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Wat moet er op een factuur staan als zzp&apos;er?</h3>
        <p>Verplicht: jouw gegevens (incl. KVK en btw-nummer), klantgegevens, factuurnummer, data, omschrijving en bedragen (excl./incl. btw), plus betaalgegevens en betalingstermijn.</p>

        <h3>Hoe maak ik een factuur als zzp&apos;er?</h3>
        <p>Verzamel gegevens, kies een template of tool (bijv. FactuurBaas), vul regels in met duidelijke omschrijvingen, controleer btw en totaal, download of verstuur als PDF.</p>

        <h3>Kan ik gratis een factuur maken als zzp&apos;er?</h3>
        <p>Ja. Met FactuurBaas maak je zonder account en gratis een professionele factuur die voldoet aan de eisen van de Belastingdienst.</p>

        <h3>Welk factuurnummer en welke betalingstermijn?</h3>
        <p>Gebruik een uniek opeenvolgend nummer (bijv. 2026-001). Voor de termijn kiezen veel zzp&apos;ers 14 of 30 dagen; vermeld dit duidelijk op de factuur.</p>
      </>
    )
  },
  {
    slug: 'factureren-zonder-account',
    relatedSlugs: ['factuur-pdf-downloaden', 'factuurbeheer-overzicht', 'gratis-factuurtool-vs-boekhoudprogramma'],
    title: 'Gratis factuur maken online — zonder account en direct als PDF',
    excerpt: 'Een gratis factuur maken online zonder account. Vul je gegevens in en download direct een professionele PDF. Geen registratie, geen abonnement, geen ingewikkeld boekhoudprogramma.',
    keywords: 'factuur maken gratis, gratis factuur maken, gratis factuur maken online, online factuur maken, factuur maken online gratis, factuur maken zonder account, factureren zonder account, gratis factuur maken pdf, factuur maken zonder kvk, zelf factuur maken, hoe maak ik een factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Factureren%20zonder%20account.png',
      alt: 'Gratis factuur maken online zonder account: direct als PDF downloaden.',
    },
    datePublished: '2026-02-01',
    dateModified: '2026-08-28',
    faq: [
      { question: 'Kan ik een factuur maken zonder account?', answer: 'Ja. Bij FactuurBaas maak je direct een professionele factuur zonder registratie of inloggen. Je vult je gegevens in op de pagina en downloadt de PDF. Geen e-mail, wachtwoord of account nodig.' },
      { question: 'Waar kan ik gratis een factuur maken online?', answer: 'Op FactuurBaas.nl kun je gratis online een factuur maken zonder account. Bezoek de factuurpagina, vul je gegevens in en download je factuur direct als PDF. Alles gebeurt in je browser; wij slaan niets op.' },
      { question: 'Is FactuurBaas gratis?', answer: 'Ja. Je kunt onbeperkt gratis facturen maken en als PDF downloaden — zonder account. Wil je bedrijfsgegevens, klanten of een factuuroverzicht bewaren? Dan kun je optioneel een gratis account aanmaken.' },
      { question: 'Hoe maak ik zelf een factuur?', answer: 'Je kunt zelf een factuur maken in Word, Excel of met een online factuurtool. Zorg dat alle verplichte gegevens op de factuur staan en dat bedragen en btw correct zijn berekend. Met FactuurBaas kun je gratis online een factuur maken en deze direct als PDF downloaden.' },
      { question: 'Kan ik factuur maken zonder KvK?', answer: 'Of je een factuur zonder KvK-nummer kunt sturen, hangt af van je situatie. Ben je ondernemer en ingeschreven bij de KvK, dan vermeld je de gegevens die op een zakelijke factuur verplicht zijn. Een KvK-nummer is niet in iedere situatie een verplicht onderdeel van een factuur. Heb je geen KvK-inschrijving? Zorg dat je situatie duidelijk is voordat je een factuur verstuurt.' },
      { question: 'Kan ik een factuur sturen zonder KvK-nummer?', answer: 'Dat hangt af van je situatie. Ben je ingeschreven als ondernemer, dan hoort je factuur de verplichte zakelijke gegevens te bevatten. Heb je geen KvK-inschrijving maar wil je wel een betaling in rekening brengen, dan kunnen andere regels gelden — bijvoorbeeld bij incidenteel werk. Controleer je situatie voordat je een factuur verstuurt.' },
      { question: 'Worden mijn gegevens opgeslagen als ik zonder account factureer?', answer: 'Nee. De gegevens die je invult worden alleen in je browser gebruikt om de PDF te maken. Wij slaan niets op. Bewaar zelf je gedownloade factuur-PDF voor je administratie.' },
    ],
    content: (
      <>
        <p>Een gratis factuur maken? Met FactuurBaas maak je online een professionele factuur zonder account. Vul je bedrijfsgegevens, klantgegevens, bedragen en btw in en download je factuur direct als PDF. Geen registratie, geen abonnement en geen ingewikkeld boekhoudprogramma.</p>
        <CtaButton />

        <h2>Gratis factuur maken online: zo werkt het</h2>
        <p>Veel tools vragen eerst om een account. Bij ons niet — online factureren gaat in drie stappen:</p>
        <ol>
          <li>Ga naar <Link href="/create-invoice" className="text-warm-orange hover:underline">de factuurpagina</Link>.</li>
          <li>Vul je gegevens, klant, bedragen en btw in.</li>
          <li>Download je factuur direct als PDF.</li>
        </ol>
        <p>Geen e-mailverificatie, geen inlog. Handig voor een eenmalige factuur of als je snel wilt factureren zonder account.</p>

        <h2>Zelf een factuur maken: wat moet erop staan?</h2>
        <p>Zelf een factuur maken hoeft niet ingewikkeld te zijn. Een factuur bevat onder andere je bedrijfsgegevens, de gegevens van je klant, een factuurnummer, factuurdatum, omschrijving van de geleverde producten of diensten, bedragen en btw.</p>
        <p>Werk je als zzp&apos;er? Dan is het belangrijk dat je factuur aan de wettelijke factuureisen voldoet. In onze <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">uitleg over facturen maken als zzp&apos;er</Link> lees je stap voor stap wat erop moet staan.</p>
        <ul>
          <li>Je bedrijfsnaam en adres</li>
          <li>Je KvK-nummer</li>
          <li>Je btw-identificatienummer</li>
          <li>Gegevens van je klant</li>
          <li>Factuurnummer</li>
          <li>Factuurdatum</li>
          <li>Omschrijving van de producten of diensten</li>
          <li>Bedrag exclusief btw</li>
          <li>Btw-percentage en btw-bedrag</li>
          <li>Totaalbedrag inclusief btw</li>
          <li>Betaaltermijn en betaalgegevens</li>
        </ul>

        <h2>Factuur maken zonder KvK: kan dat?</h2>
        <p>Of je een factuur zonder KvK-nummer kunt sturen, hangt af van je situatie. Ben je ondernemer en ingeschreven bij de KvK, dan vermeld je de gegevens die op een zakelijke factuur verplicht zijn. Een KvK-nummer is niet in iedere situatie een verplicht onderdeel van een factuur.</p>
        <p>Heb je geen KvK-inschrijving maar wil je wel een betaling in rekening brengen? Dan kunnen andere regels gelden, bijvoorbeeld wanneer je incidenteel werkzaamheden uitvoert. Zorg daarom dat je situatie duidelijk is voordat je een factuur verstuurt.</p>

        <h2>Wat gebeurt er met mijn gegevens?</h2>
        <p>De gegevens die je invult worden alleen in jouw browser gebruikt om de factuur te genereren. Zodra je de pagina verlaat, zijn ze weg. Wij slaan niets op. Dat betekent privacy, maar ook: bewaar zelf je gedownloade PDF&apos;s voor je administratie.</p>

        <h2>Account of zonder account?</h2>
        <p>Beide kan. Gratis factureren zonder account blijft de snelste route: direct invullen en PDF downloaden. Wil je je bedrijfsgegevens opslaan, klanten beheren of een overzicht van facturen bijhouden? Maak dan gratis een account aan — volledig optioneel. Meer over opslaan en beheren lees je in <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">factuurbeheer voor zzp&apos;ers</Link>.</p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik een factuur maken zonder account?</h3>
        <p>Ja. Ga naar FactuurBaas, vul de velden in en download je PDF. Geen registratie of inlog nodig.</p>
        <h3>Is FactuurBaas gratis?</h3>
        <p>Ja. Je kunt onbeperkt gratis facturen maken en downloaden. Een account is optioneel en ook gratis.</p>
        <h3>Hoe maak ik zelf een factuur?</h3>
        <p>Je kunt zelf een factuur maken in Word, Excel of met een online factuurtool. Zorg dat alle verplichte gegevens op de factuur staan en dat bedragen en btw correct zijn berekend. Met FactuurBaas kun je gratis online een factuur maken en deze direct als PDF downloaden.</p>
        <h3>Kan ik factureren zonder KvK-nummer?</h3>
        <p>Dat hangt af van je situatie. Ben je ingeschreven als ondernemer, dan hoort je factuur de verplichte zakelijke gegevens te bevatten. Heb je geen KvK-inschrijving, controleer dan eerst welke regels voor jouw situatie gelden voordat je een factuur verstuurt.</p>
        <h3>Worden mijn gegevens opgeslagen?</h3>
        <p>Nee. Alles gebeurt in je browser; wij slaan geen gegevens op. Bewaar zelf je PDF.</p>
      </>
    )
  },
  {
    slug: 'beste-boekhoudprogramma-zzp',
    relatedSlugs: [
      'gratis-factuur-zzp',
      'factuur-maken-zzp',
      'factureren-startende-zzper',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'boekhoudprogramma-eenmanszaak',
      'moneybird-vs-jortt',
      'moneybird-vs-eboekhouden',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: "Beste boekhoudprogramma voor zzp'ers | Vergelijk 2026",
    title: "Beste boekhoudprogramma voor zzp'ers",
    excerpt:
      "Wat is het beste boekhoudprogramma voor zzp'ers? Vergelijk Moneybird, Jortt, e-Boekhouden.nl en andere opties op prijs, functies en gebruiksgemak.",
    keywords:
      "beste boekhoudprogramma zzp, boekhoudprogramma zzp, moneybird zzp, jortt zzp, e-boekhouden zzp, gratis boekhoudprogramma zzp, boekhoudprogramma vergelijken",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/beste%20boekhoudprogramma%20zzp.png',
      alt: "Vergelijking van boekhoudprogramma's voor zzp'ers.",
    },
    datePublished: '2026-02-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: "Wat is het beste boekhoudprogramma voor een zzp'er?",
        answer:
          "Dat verschilt per ondernemer. Moneybird, Jortt en e-Boekhouden.nl zijn voorbeelden van online boekhoudprogramma's die je kunt vergelijken. Kijk vooral naar de functies, prijs en hoeveelheid administratie die je hebt.",
      },
      {
        question: "Is e-Boekhouden.nl geschikt voor zzp'ers?",
        answer:
          "Ja, e-Boekhouden.nl richt zich onder andere op zzp'ers en kleine ondernemers. Of het bij je past, hangt af van hoeveel administratie je hebt en welke functies je nodig hebt.",
      },
      {
        question: 'Wat is het verschil tussen FactuurBaas en een boekhoudprogramma?',
        answer:
          'FactuurBaas is gericht op het snel maken van facturen. Een boekhoudprogramma is bedoeld voor een bredere administratie, zoals het bijhouden van inkomsten en uitgaven en andere administratieve processen.',
      },
      {
        question: 'Welk boekhoudprogramma is het goedkoopste?',
        answer:
          'Dat hangt af van het actuele abonnement, de functies en eventuele limieten. Vergelijk daarom niet alleen de maandprijs, maar ook wat inbegrepen is.',
      },
      {
        question: "Heb ik als zzp'er een boekhoudprogramma nodig?",
        answer:
          'Niet iedere zzp’er heeft een uitgebreid boekhoudprogramma nodig. Bij een kleine en eenvoudige administratie kun je mogelijk met eenvoudige hulpmiddelen werken. Naarmate je meer facturen, inkomsten, uitgaven en administratieve handelingen hebt, kan boekhoudsoftware steeds interessanter worden.',
      },
      {
        question: "Is er een gratis boekhoudprogramma voor zzp'ers?",
        answer:
          'Er zijn gratis en deels gratis oplossingen, maar de beschikbare functies verschillen sterk. Als je alleen gratis een factuur wilt maken, kun je daarvoor FactuurBaas gebruiken zonder account of abonnement.',
      },
      {
        question: 'Wat is het verschil tussen een boekhoudprogramma en een factuurprogramma?',
        answer:
          'Een factuurprogramma is voornamelijk bedoeld voor het maken van facturen. Een boekhoudprogramma is breder en richt zich op de volledige administratie van je onderneming.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je je administratie goed regelen, maar je wilt er waarschijnlijk ook niet meer tijd aan
          kwijt zijn dan nodig. Een boekhoudprogramma kan helpen om facturen, inkomsten, btw en je administratie
          overzichtelijk bij te houden.
        </p>

        <p>
          Maar wat is nu het <strong>beste boekhoudprogramma voor een zzp&apos;er</strong>?
        </p>
        <p>
          Dat hangt vooral af van wat je nodig hebt. Wie alleen af en toe een factuur maakt, heeft misschien helemaal
          geen uitgebreid boekhoudpakket nodig. Wie meerdere klanten heeft, veel facturen verstuurt en zijn
          administratie grotendeels wil automatiseren, heeft daar juist wel baat bij.
        </p>
        <p>In dit overzicht vergelijken we populaire opties voor zzp&apos;ers en leggen we uit waar je op moet letten.</p>
        <p>
          Twijfel je nog welk type oplossing bij jouw administratie past? Doe dan eerst de gratis{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          : in acht korte vragen zie je of een factuurtool, basissoftware, compleet boekhoudprogramma of software plus
          boekhouder waarschijnlijk het beste past. Of lees hoe je{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf je boekhouding als zzp&apos;er kunt doen
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Snel overzicht: welk boekhoudprogramma past bij jou?</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat wil je vooral doen?
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Wat past waarschijnlijk het beste?
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Af en toe gratis een factuur maken</td>
                <td className="px-4 py-3 font-medium">FactuurBaas</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken en je administratie bijhouden</td>
                <td className="px-4 py-3 font-medium">Boekhoudprogramma</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Boekhouding en btw-administratie grotendeels online regelen</td>
                <td className="px-4 py-3 font-medium">Online boekhoudprogramma</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Veel administratieve handelingen automatiseren</td>
                <td className="px-4 py-3 font-medium">Uitgebreider boekhoudpakket</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Verschillende programma&apos;s vergelijken</td>
                <td className="px-4 py-3 font-medium">Bekijk de vergelijking hieronder</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Kort gezegd:</strong> heb je alleen een factuur nodig, dan hoef je niet automatisch een betaald
          boekhoudprogramma te nemen. Wil je je volledige administratie bijhouden, dan is een boekhoudprogramma vaak
          een stuk handiger.
        </p>

        <h2>Wat is het beste boekhoudprogramma voor een zzp&apos;er?</h2>
        <p>
          Er bestaat niet één boekhoudprogramma dat voor iedere zzp&apos;er het beste is. Je keuze hangt onder andere
          af van je aantal facturen, hoeveel administratie je zelf wilt doen en hoeveel automatisering je belangrijk
          vindt.
        </p>
        <p>
          Voor veel zzp&apos;ers zijn <strong>Moneybird</strong>, <strong>Jortt</strong> en{' '}
          <strong>e-Boekhouden.nl</strong> interessante opties om te bekijken. Daarnaast zijn er verschillende andere
          boekhoudprogramma&apos;s met ieder hun eigen functies en prijsmodel.
        </p>
        <p>Bij het vergelijken kun je onder andere letten op:</p>
        <ul>
          <li>facturen maken en versturen</li>
          <li>inkomsten en uitgaven bijhouden</li>
          <li>btw-administratie</li>
          <li>btw-aangifte</li>
          <li>banktransacties verwerken</li>
          <li>automatische verwerking van administratie</li>
          <li>offertes maken</li>
          <li>urenregistratie</li>
          <li>koppelingen met andere systemen</li>
          <li>mobiele app</li>
          <li>prijs per maand</li>
          <li>ondersteuning en helpdesk</li>
        </ul>
        <p>
          Niet iedere zzp&apos;er heeft al deze functies nodig. Daarom is{' '}
          <strong>
            het goedkoopste of meest uitgebreide programma niet automatisch het beste programma voor jou
          </strong>
          .
        </p>

        <h2>Boekhoudprogramma&apos;s voor zzp&apos;ers vergelijken</h2>
        <p>
          Er zijn verschillende boekhoudprogramma&apos;s voor zzp&apos;ers. Hieronder vind je een aantal bekende opties
          om met elkaar te vergelijken.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Programma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Geschikt voor
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Belangrijkste pluspunt
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Moneybird</td>
                <td className="px-4 py-3">Zzp&apos;ers en kleine ondernemers</td>
                <td className="px-4 py-3">Facturatie en administratie combineren</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">Jortt</td>
                <td className="px-4 py-3">Zzp&apos;ers en ondernemers</td>
                <td className="px-4 py-3">Online boekhouden en automatisering</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">e-Boekhouden.nl</td>
                <td className="px-4 py-3">Zzp&apos;ers en kleine bedrijven</td>
                <td className="px-4 py-3">Boekhouding en administratie online regelen</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium">FactuurBaas</td>
                <td className="px-4 py-3">Zzp&apos;ers die vooral facturen maken</td>
                <td className="px-4 py-3">Gratis facturen maken zonder account</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3>Moneybird</h3>
        <p>
          <strong>Moneybird</strong> is een online boekhoudprogramma voor ondernemers en zzp&apos;ers. Het combineert
          facturatie met verschillende onderdelen van de administratie.
        </p>
        <p>
          Het programma kan interessant zijn als je naast facturen ook je administratie vanuit één online omgeving wilt
          bijhouden.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers die facturatie en boekhouding willen combineren.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href="https://www.moneybird.nl/" target="_blank" rel="noopener noreferrer">
              Bekijk Moneybird →
            </a>
          </Button>
        </div>

        <h3>Jortt</h3>
        <p>
          <strong>Jortt</strong> is een online boekhoudprogramma voor ondernemers. Naast het bijhouden van de
          boekhouding richt het programma zich op het automatiseren van administratieve werkzaamheden.
        </p>
        <p>
          Het kan daardoor interessant zijn voor zzp&apos;ers die meer willen dan alleen facturen maken.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers die hun administratie online willen regelen en waarde hechten
          aan automatisering.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href="https://www.jortt.nl/" target="_blank" rel="noopener noreferrer">
              Bekijk Jortt →
            </a>
          </Button>
        </div>

        <h3>e-Boekhouden.nl</h3>
        <p>
          <strong>e-Boekhouden.nl</strong> is een online boekhoudprogramma waarmee zzp&apos;ers en andere ondernemers
          hun administratie kunnen bijhouden.
        </p>
        <p>
          Het programma biedt verschillende mogelijkheden voor onder andere boekhouding en facturatie. Voor
          ondernemers die een uitgebreider systeem zoeken dan alleen een factuurmaker, is het daarom een optie om mee
          te nemen in je vergelijking.
        </p>
        <p>
          <strong>Interessant voor:</strong> zzp&apos;ers en kleine ondernemers die hun boekhouding online willen
          bijhouden.
        </p>
        <div className="my-8 text-center not-prose">
          <Button asChild variant="outline" className="font-bold py-3 px-6 rounded-lg text-lg">
            <a href="https://www.e-boekhouden.nl/" target="_blank" rel="noopener noreferrer">
              Bekijk e-Boekhouden.nl →
            </a>
          </Button>
        </div>

        <h3>FactuurBaas</h3>
        <p>Niet iedere zzp&apos;er heeft direct een volledig boekhoudprogramma nodig.</p>
        <p>
          Wil je bijvoorbeeld alleen snel een professionele factuur maken? Dan kun je met{' '}
          <strong>FactuurBaas</strong> gratis een factuur maken zonder account of abonnement.
        </p>
        <p>Je maakt je factuur online en downloadt deze direct als PDF.</p>
        <p>
          <strong>FactuurBaas is vooral geschikt als je:</strong>
        </p>
        <ul>
          <li>af en toe een factuur maakt</li>
          <li>geen uitgebreide boekhouding nodig hebt</li>
          <li>snel een factuur als PDF wilt downloaden</li>
          <li>geen account wilt aanmaken</li>
          <li>geen abonnement wilt afsluiten</li>
        </ul>
        <p>
          Wil je ook je inkomsten, uitgaven, btw en volledige administratie vanuit één programma beheren? Dan is een
          uitgebreider boekhoudprogramma waarschijnlijk geschikter.
        </p>
        <CtaButton />

        <h2>Welk boekhoudprogramma past bij jou?</h2>
        <p>Er is geen boekhoudprogramma dat voor iedere zzp&apos;er automatisch de beste keuze is.</p>
        <p>
          <strong>Alleen facturen maken?</strong>
          <br />
          FactuurBaas kan voldoende zijn.
        </p>
        <p>
          <strong>Facturen én je administratie bijhouden?</strong>
          <br />
          Bekijk bijvoorbeeld Moneybird, Jortt en e-Boekhouden.nl.
        </p>
        <p>
          <strong>Meer administratie automatiseren?</strong>
          <br />
          Vergelijk vooral de automatiseringsmogelijkheden, koppelingen en manier waarop bank- en btw-gegevens worden
          verwerkt.
        </p>
        <p>
          <strong>Zo goedkoop mogelijk starten?</strong>
          <br />
          Vergelijk de actuele abonnementen en kijk welke functies je daadwerkelijk nodig hebt. Een gratis of goedkoop
          pakket is niet automatisch goedkoper als je daardoor veel handmatig werk moet doen.
        </p>

        <h2>Boekhoudprogramma vergelijken: waar moet je op letten?</h2>
        <p>Een boekhoudprogramma vergelijken gaat verder dan alleen kijken naar de prijs.</p>

        <h3>1. Wat kost het?</h3>
        <p>
          Bekijk niet alleen de prijs van het goedkoopste abonnement. Kijk ook welke functies bij die prijs inbegrepen
          zijn.
        </p>
        <p>
          Een goedkoop pakket kan aantrekkelijk zijn als je weinig nodig hebt. Een iets duurder pakket kan uiteindelijk
          interessanter zijn als het je veel handmatig werk bespaart.
        </p>
        <p>Let bijvoorbeeld op:</p>
        <ul>
          <li>maandprijs</li>
          <li>eventuele jaarprijs</li>
          <li>gratis proefperiode</li>
          <li>limieten op facturen of transacties</li>
          <li>kosten voor extra functies</li>
          <li>kosten voor aanvullende gebruikers</li>
        </ul>

        <h3>2. Kun je eenvoudig facturen maken?</h3>
        <p>
          Facturen maken is voor vrijwel iedere zzp&apos;er belangrijk. Kijk daarom hoe eenvoudig het programma werkt
          en welke mogelijkheden je hebt voor bijvoorbeeld factuurnummering, btw en klantgegevens.
        </p>
        <p>
          Als je uitsluitend facturen wilt maken, is een volledig boekhoudprogramma overigens niet altijd noodzakelijk.
        </p>

        <h3>3. Hoe werkt de btw-administratie?</h3>
        <p>Voor veel zzp&apos;ers is btw een belangrijk onderdeel van de administratie.</p>
        <p>
          Een goed boekhoudprogramma kan helpen om btw-bedragen overzichtelijk bij te houden en kan, afhankelijk van
          het programma en de inrichting, verschillende onderdelen van de btw-administratie ondersteunen.
        </p>
        <p>Controleer altijd welke btw-functionaliteit daadwerkelijk in het abonnement zit.</p>

        <h3>4. Hoeveel kan het programma automatiseren?</h3>
        <p>
          Automatisering kan vooral interessant worden wanneer je regelmatig facturen verstuurt en veel transacties
          verwerkt.
        </p>
        <p>
          Denk bijvoorbeeld aan het verwerken van banktransacties, terugkerende administratieve handelingen en het
          koppelen van verschillende onderdelen van je administratie.
        </p>
        <p>Hoe meer administratie je hebt, hoe groter het voordeel van automatisering kan worden.</p>

        <h3>5. Kun je offertes maken?</h3>
        <p>
          Als je naast facturen ook offertes maakt, kan het handig zijn wanneer facturatie en offertes binnen hetzelfde
          programma beschikbaar zijn.
        </p>
        <p>Dat voorkomt dat je voor iedere stap een ander systeem nodig hebt.</p>

        <h3>6. Werkt het goed op mobiel?</h3>
        <p>Als je regelmatig onderweg werkt, kan een goede mobiele website of app belangrijk zijn.</p>
        <p>
          Je wilt bijvoorbeeld een factuur kunnen bekijken, administratie kunnen controleren of een klant kunnen
          terugvinden zonder achter een desktop te zitten.
        </p>

        <h2>Gratis boekhoudprogramma voor zzp&apos;ers</h2>
        <p>
          De term <strong>gratis boekhoudprogramma</strong> kan verschillende dingen betekenen.
        </p>
        <p>
          Sommige programma&apos;s hebben een gratis pakket met beperkte functies. Andere bieden alleen tijdelijk een
          gratis proefperiode. Weer andere tools zijn volledig gratis, maar richten zich slechts op één onderdeel van
          je administratie.
        </p>
        <p>Daarom is het belangrijk om te bepalen wat je precies nodig hebt.</p>

        <h3>Alleen gratis een factuur maken?</h3>
        <p>Dan kan FactuurBaas voldoende zijn.</p>
        <p>
          Je kunt gratis een professionele factuur maken, zonder account en zonder abonnement, en deze direct als PDF
          downloaden.
        </p>

        <h3>Volledige boekhouding gratis regelen?</h3>
        <p>
          Dat is een andere vraag. Een volledige boekhouding bevat veel meer dan alleen het maken van een factuur.
          Denk aan inkomsten en uitgaven, btw-administratie, banktransacties en andere administratieve processen.
        </p>
        <p>Controleer daarom goed welke functies een gratis boekhoudprogramma daadwerkelijk biedt.</p>

        <h2>Boekhoudprogramma of factuurprogramma?</h2>
        <p>Deze twee worden vaak door elkaar gehaald, maar ze zijn niet hetzelfde.</p>
        <p>
          Een <strong>factuurprogramma</strong> richt zich voornamelijk op het maken en beheren van facturen.
        </p>
        <p>
          Een <strong>boekhoudprogramma</strong> gaat veel verder en is bedoeld om je administratie als geheel bij te
          houden.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Functie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Professionele facturen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw op facturen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Volledige administratie</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bankkoppeling</td>
                <td className="px-4 py-3">Niet altijd</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Automatisering</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">Vaak uitgebreider</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-administratie</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Offertes</td>
                <td className="px-4 py-3">Soms</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Voor een zzp&apos;er die maar enkele facturen per maand maakt, kan een eenvoudige factuurtool dus voldoende
          zijn.
        </p>
        <p>Heb je een groeiende administratie, dan wordt een boekhoudprogramma steeds interessanter.</p>

        <h2>Wanneer heb je een boekhoudprogramma nodig als zzp&apos;er?</h2>
        <p>Dat hangt niet alleen af van je omzet.</p>
        <p>Een boekhoudprogramma kan vooral nuttig worden wanneer je:</p>
        <ul>
          <li>regelmatig facturen verstuurt</li>
          <li>meerdere inkomsten en uitgaven hebt</li>
          <li>veel zakelijke transacties hebt</li>
          <li>je administratie zelf wilt bijhouden</li>
          <li>minder handmatig werk wilt doen</li>
          <li>je administratie op één plek wilt hebben</li>
          <li>meer overzicht wilt over je bedrijf</li>
        </ul>
        <p>
          Een startende zzp&apos;er met een paar facturen per jaar kan prima met eenvoudige hulpmiddelen beginnen.
          Naarmate je administratie groter wordt, kan een boekhoudprogramma tijd besparen.
        </p>

        <h2>Boekhoudprogramma voor een startende zzp&apos;er</h2>
        <p>
          Als je net begint, hoef je niet meteen voor het meest uitgebreide boekhoudpakket te kiezen.
        </p>
        <p>Begin met de vraag:</p>
        <p>
          <strong>Wat moet ik daadwerkelijk bijhouden?</strong>
        </p>
        <p>
          Maak je slechts enkele facturen en heb je weinig transacties? Dan kan een eenvoudige factuurtool een logische
          start zijn.
        </p>
        <p>
          Heb je vanaf het begin meerdere klanten, zakelijke kosten en veel transacties? Dan kan het verstandiger zijn
          om direct een boekhoudprogramma te gebruiken.
        </p>
        <p>
          Kijk bij je keuze vooral naar gebruiksgemak. Een programma met tientallen functies waar je niets mee doet, is
          niet automatisch beter.
        </p>

        <h2>Wat is het beste boekhoudprogramma?</h2>
        <p>
          Voor een zzp&apos;er is het beste boekhoudprogramma uiteindelijk het programma dat past bij de omvang en
          manier van werken van je bedrijf.
        </p>
        <p>
          <strong>Wil je alleen snel een factuur maken?</strong>
          <br />
          Gebruik dan een eenvoudige factuurtool zoals FactuurBaas.
        </p>
        <p>
          <strong>Wil je facturen combineren met je administratie?</strong>
          <br />
          Vergelijk dan boekhoudprogramma&apos;s zoals Moneybird, Jortt en e-Boekhouden.nl met andere beschikbare
          opties.
        </p>
        <p>
          <strong>Wil je zoveel mogelijk administratief werk automatiseren?</strong>
          <br />
          Kijk dan vooral naar de automatiseringsmogelijkheden en integraties van de verschillende programma&apos;s.
        </p>
        <p>
          Vergelijk dus niet alleen op <strong>prijs</strong>, maar vooral op{' '}
          <strong>wat je daadwerkelijk nodig hebt</strong>.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het beste boekhoudprogramma voor een zzp&apos;er?</h3>
        <p>
          Dat verschilt per ondernemer. Moneybird, Jortt en e-Boekhouden.nl zijn voorbeelden van online
          boekhoudprogramma&apos;s die je kunt vergelijken. Kijk vooral naar de functies, prijs en hoeveelheid
          administratie die je hebt.
        </p>
        <h3>Is e-Boekhouden.nl geschikt voor zzp&apos;ers?</h3>
        <p>
          Ja, e-Boekhouden.nl richt zich onder andere op zzp&apos;ers en kleine ondernemers. Of het bij je past, hangt
          af van hoeveel administratie je hebt en welke functies je nodig hebt.
        </p>
        <h3>Wat is het verschil tussen FactuurBaas en een boekhoudprogramma?</h3>
        <p>
          FactuurBaas is gericht op het snel maken van facturen. Een boekhoudprogramma is bedoeld voor een bredere
          administratie, zoals het bijhouden van inkomsten en uitgaven en andere administratieve processen.
        </p>
        <h3>Welk boekhoudprogramma is het goedkoopste?</h3>
        <p>
          Dat hangt af van het actuele abonnement, de functies en eventuele limieten. Vergelijk daarom niet alleen de
          maandprijs, maar ook wat inbegrepen is.
        </p>
        <h3>Heb ik als zzp&apos;er een boekhoudprogramma nodig?</h3>
        <p>
          Niet iedere zzp&apos;er heeft een uitgebreid boekhoudprogramma nodig. Bij een kleine en eenvoudige
          administratie kun je mogelijk met eenvoudige hulpmiddelen werken. Naarmate je meer facturen, inkomsten,
          uitgaven en administratieve handelingen hebt, kan boekhoudsoftware steeds interessanter worden.
        </p>
        <h3>Is er een gratis boekhoudprogramma voor zzp&apos;ers?</h3>
        <p>
          Er zijn gratis en deels gratis oplossingen, maar de beschikbare functies verschillen sterk. Als je alleen
          gratis een factuur wilt maken, kun je daarvoor FactuurBaas gebruiken zonder account of abonnement.
        </p>
        <h3>Wat is het verschil tussen een boekhoudprogramma en een factuurprogramma?</h3>
        <p>
          Een factuurprogramma is voornamelijk bedoeld voor het maken van facturen. Een boekhoudprogramma is breder en
          richt zich op de volledige administratie van je onderneming.
        </p>

        <h2>Conclusie</h2>
        <p>
          Het <strong>beste boekhoudprogramma voor zzp&apos;ers bestaat niet voor iedereen</strong>.
        </p>
        <p>
          Maak je slechts af en toe een factuur? Dan heb je mogelijk genoeg aan een gratis factuurmaker zoals
          FactuurBaas.
        </p>
        <p>
          Wil je daarnaast je inkomsten, uitgaven, btw en andere administratie bijhouden? Dan is een
          boekhoudprogramma zoals Moneybird, Jortt, e-Boekhouden.nl of een andere oplossing waarschijnlijk
          interessanter.
        </p>
        <p>
          Kijk daarom eerst naar wat je nodig hebt en vergelijk daarna de programma&apos;s op{' '}
          <strong>prijs, functies, gebruiksgemak en automatisering</strong>.
        </p>
        <p>
          Weet je nog niet zeker welk type je nodig hebt? Doe de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en krijg direct een indicatie op basis van je facturen, kosten, transacties en voorkeuren.
        </p>
        <p>
          <strong>Alleen een factuur nodig?</strong> → Maak gratis een factuur met FactuurBaas.
        </p>
        <p>
          <strong>Volledige administratie nodig?</strong> → Vergelijk boekhoudprogramma&apos;s en kies de oplossing die
          bij jouw onderneming past.
        </p>
        <BoekhoudCheckCta />
        <CtaButton />

      </>
    )
  },
  {
    slug: 'boekhoudprogramma-eenmanszaak',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'factuur-maken-zzp',
    ],
    metaTitle: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    title: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    excerpt:
      'Welk boekhoudprogramma heb je nodig voor een eenmanszaak? Bekijk wat je moet bijhouden, wanneer gratis boekhouden genoeg is en wanneer software handig wordt.',
    keywords:
      'boekhoudprogramma eenmanszaak, gratis boekhoudprogramma eenmanszaak, boekhouding eenmanszaak, boekhoudpakket eenmanszaak',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Boekhoudprogramma%20voor%20een%20eenmanszaak.jpg',
      alt: 'Boekhoudprogramma voor een eenmanszaak: wat heb je nodig?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Heb ik voor een eenmanszaak een boekhoudprogramma nodig?',
        answer:
          'Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede administratie bijhouden. Of software handig is, hangt af van de omvang en complexiteit van je administratie.',
      },
      {
        question: 'Wat is het beste boekhoudprogramma voor een eenmanszaak?',
        answer:
          'Dat hangt af van je situatie. Een kleine eenmanszaak met weinig transacties heeft andere behoeften dan een onderneming met veel kosten en transacties.',
      },
      {
        question: 'Is er een gratis boekhoudprogramma voor een eenmanszaak?',
        answer:
          'Er bestaan gratis oplossingen en programma’s met gratis pakketten of periodes. Let wel op de beperkingen en het verschil tussen een gratis factuurprogramma en volledige boekhoudsoftware.',
      },
      {
        question: 'Kan ik mijn boekhouding van mijn eenmanszaak zelf doen?',
        answer:
          'Ja. Je kunt je administratie zelf bijhouden. Je moet er wel voor zorgen dat je administratie compleet en goed onderbouwd is.',
      },
      {
        question: 'Kan ik Excel gebruiken voor mijn eenmanszaak?',
        answer:
          'Voor een eenvoudige administratie kan een spreadsheet praktisch zijn. Naarmate je meer facturen, kosten en transacties krijgt, kan boekhoudsoftware handiger worden.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma is vooral gericht op het maken van verkoopfacturen. Een boekhoudprogramma ondersteunt een bredere financiële administratie.',
      },
      {
        question: 'Wanneer moet ik overstappen naar boekhoudsoftware?',
        answer:
          'Er is geen vast moment. Een goed moment kan zijn wanneer je administratie veel tijd kost, je veel transacties hebt of je meer automatisering en financieel overzicht wilt.',
      },
    ],
    content: (
      <>
        <p>
          Heb je een eenmanszaak en vraag je je af welk boekhoudprogramma je nodig hebt? Dan is er geen
          standaardantwoord.
        </p>
        <p>
          Een eenmanszaak kan namelijk een heel eenvoudige administratie hebben, maar ook honderden transacties, veel
          zakelijke kosten en een uitgebreide btw-administratie.
        </p>
        <p>
          Voor de ene ondernemer is een eenvoudige factuurtool en eigen administratie voldoende. Een andere ondernemer
          heeft meer aan een boekhoudprogramma met automatische verwerking en een bankkoppeling.
        </p>
        <p>
          In dit artikel lees je wat je voor je <strong>boekhouding als eenmanszaak</strong> moet bijhouden, wanneer een
          boekhoudprogramma handig wordt en wanneer gratis boekhouden mogelijk voldoende is.
        </p>
        <p>Twijfel je welke oplossing bij jouw situatie past?</p>
        <BoekhoudCheckCta />

        <h2>Heb je als eenmanszaak een boekhoudprogramma nodig?</h2>
        <p>Nee, je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken.</p>
        <p>
          Je moet wel een goede administratie bijhouden. Hoe je dat organiseert, bepaal je in principe zelf.
        </p>
        <p>
          Een kleine eenmanszaak met een paar klanten en weinig zakelijke kosten kan de administratie bijvoorbeeld
          eenvoudig houden. Je kunt inkomsten, kosten en andere belangrijke gegevens zelf bijhouden en je facturen met
          een aparte factuurtool maken.
        </p>
        <p>Wordt je administratie groter, dan kan boekhoudsoftware veel handmatig werk besparen.</p>
        <p>Het gaat daarom minder om de vraag:</p>
        <blockquote>
          <p>
            <strong>“Heb ik een eenmanszaak, dus welk programma moet ik nemen?”</strong>
          </p>
        </blockquote>
        <p>en meer om:</p>
        <blockquote>
          <p>
            <strong>“Hoe uitgebreid is mijn administratie en hoeveel wil ik zelf doen?”</strong>
          </p>
        </blockquote>

        <h2>Wat moet je bijhouden voor je eenmanszaak?</h2>
        <p>Je administratie kan onder andere bestaan uit:</p>
        <ul>
          <li>verkoopfacturen;</li>
          <li>inkoopfacturen;</li>
          <li>zakelijke bonnetjes;</li>
          <li>banktransacties;</li>
          <li>inkomsten en kosten;</li>
          <li>btw-gegevens;</li>
          <li>gegevens voor je inkomstenbelasting;</li>
          <li>contracten en andere zakelijke documenten;</li>
          <li>en eventueel een urenadministratie.</li>
        </ul>
        <p>Hoeveel werk dit oplevert, verschilt sterk per onderneming.</p>
        <p>
          Een freelance designer met vijf klanten en weinig kosten heeft bijvoorbeeld een andere administratie dan een
          aannemer met veel inkopen, zakelijke voertuigen en tientallen transacties per maand.
        </p>
        <p>
          Meer over wat je moet bijhouden lees je in onze gids{' '}
          <Link href="/gidsen/boekhouding-zzp" className="text-warm-orange hover:underline">
            boekhouding voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Wanneer is een eenvoudig systeem genoeg?</h2>
        <p>Een uitgebreid boekhoudpakket is niet automatisch nodig omdat je een eenmanszaak hebt.</p>
        <p>Een eenvoudige administratie kan prima werken als je bijvoorbeeld:</p>
        <ul>
          <li>weinig facturen verstuurt;</li>
          <li>weinig zakelijke kosten hebt;</li>
          <li>weinig banktransacties hebt;</li>
          <li>zelf je administratie wilt doen;</li>
          <li>en je administratie overzichtelijk kunt bijhouden.</li>
        </ul>
        <p>
          Je kunt je facturen bijvoorbeeld met een gratis factuurprogramma maken en je inkomsten en kosten daarnaast
          zelf bijhouden.
        </p>

        <h3>FactuurBaas voor je verkoopfacturen</h3>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis een professionele factuur maken zonder account.
        </p>
        <p>
          Je vult je klant- en factuurgegevens in, maakt de factuur en downloadt deze als PDF. Je verstuurt de PDF
          vervolgens zelf naar je klant.
        </p>
        <p>
          Dat is vooral handig als je nog geen uitgebreide boekhouding nodig hebt, maar wel snel nette facturen wilt
          maken.
        </p>
        <CtaButton />

        <h2>Wanneer is een boekhoudprogramma voor je eenmanszaak handig?</h2>
        <p>Een boekhoudprogramma wordt interessanter zodra je administratie meer werk begint te worden.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>veel verkoopfacturen;</li>
          <li>veel zakelijke kosten;</li>
          <li>veel bonnetjes;</li>
          <li>veel banktransacties;</li>
          <li>meerdere zakelijke rekeningen;</li>
          <li>behoefte aan een bankkoppeling;</li>
          <li>automatisch verwerken van transacties;</li>
          <li>overzicht van omzet en kosten;</li>
          <li>of regelmatig btw- en financiële overzichten nodig hebben.</li>
        </ul>
        <p>Het grote voordeel van boekhoudsoftware is niet dat je een eenmanszaak hebt.</p>
        <p>
          Het voordeel is dat je <strong>minder handmatig hoeft te doen</strong>.
        </p>

        <h2>Welk boekhoudprogramma past bij een eenmanszaak?</h2>
        <p>Er bestaat niet één boekhoudprogramma dat voor iedere eenmanszaak het beste is.</p>
        <p>
          Een zzp&apos;er met een eenvoudige administratie kan iets heel anders nodig hebben dan een ondernemer met
          veel transacties.
        </p>
        <p>Je kunt grofweg naar deze situaties kijken:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Situatie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Mogelijke oplossing
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Weinig facturen en kosten', 'Factuurtool + eigen administratie'],
                ['Regelmatige inkomsten en kosten', 'Eenvoudig boekhoudprogramma'],
                ['Veel transacties en administratie', 'Uitgebreider boekhoudprogramma'],
                ['Weinig tijd of complexe administratie', 'Boekhoudprogramma + boekhouder'],
              ].map(([situatie, oplossing]) => (
                <tr key={situatie} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{situatie}</td>
                  <td className="px-4 py-3">{oplossing}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Ook binnen een eenmanszaak kan de behoefte dus behoorlijk verschillen.</p>

        <h2>Gratis boekhoudprogramma voor een eenmanszaak</h2>
        <p>
          Zoek je een <strong>gratis boekhoudprogramma voor je eenmanszaak</strong>, let dan goed op wat er
          daadwerkelijk gratis is.
        </p>
        <p>“Gratis” kan namelijk verschillende dingen betekenen.</p>
        <p>Een programma kan bijvoorbeeld:</p>
        <ul>
          <li>volledig gratis zijn;</li>
          <li>alleen een gratis factuurfunctie hebben;</li>
          <li>tijdelijk gratis zijn;</li>
          <li>een gratis pakket met beperkingen hebben;</li>
          <li>of alleen een gratis proefperiode aanbieden.</li>
        </ul>
        <p>Een gratis factuurtool is bovendien iets anders dan een volledig boekhoudprogramma.</p>
        <p>
          Met een factuurtool maak je vooral verkoopfacturen. Een boekhoudprogramma is gericht op een bredere
          administratie, zoals inkomsten, kosten, banktransacties en btw.
        </p>
        <p>Wil je weten wanneer een gratis oplossing voldoende kan zijn?</p>
        <p>
          <Link href="/gidsen/gratis-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Lees meer over gratis boekhoudprogramma&apos;s voor zzp&apos;ers →
          </Link>
        </p>

        <h2>Boekhouding voor een eenmanszaak: zelf doen of uitbesteden?</h2>
        <p>Ook bij een eenmanszaak kun je ervoor kiezen om je administratie zelf te doen.</p>
        <p>
          Dat is vaak interessant wanneer je administratie overzichtelijk is en je er regelmatig tijd voor wilt maken.
          Lees meer in{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf boekhouden als zzp&apos;er
          </Link>
          .
        </p>
        <p>Je kunt ook een boekhouder inschakelen.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Zelf doen</strong>
          <br />→ facturen, kosten en administratie zelf bijhouden.
        </p>
        <p>
          <strong>Software gebruiken</strong>
          <br />→ zelf verantwoordelijk blijven, maar veel handelingen automatiseren.
        </p>
        <p>
          <strong>Boekhouder inschakelen</strong>
          <br />→ een groot deel van de administratie uitbesteden.
        </p>
        <p>
          <strong>Combinatie</strong>
          <br />→ dagelijkse administratie zelf doen en een boekhouder gebruiken voor controle of bepaalde aangiftes.
        </p>
        <p>Er is dus geen noodzaak om alles zelf te doen of juist alles uit te besteden.</p>

        <h2>Hoe kies je een boekhoudpakket voor je eenmanszaak?</h2>
        <p>Kijk niet alleen naar de prijs.</p>
        <p>Let vooral op wat je daadwerkelijk nodig hebt.</p>

        <h3>1. Hoeveel facturen verstuur je?</h3>
        <p>
          Een ondernemer met vijf facturen per maand heeft andere behoeften dan iemand met honderd facturen.
        </p>

        <h3>2. Hoeveel kosten heb je?</h3>
        <p>Veel zakelijke uitgaven betekenen ook meer administratie.</p>

        <h3>3. Hoeveel banktransacties heb je?</h3>
        <p>Bij veel transacties kan automatisering een groot verschil maken.</p>

        <h3>4. Wil je een bankkoppeling?</h3>
        <p>Een bankkoppeling kan helpen om transacties automatisch in je administratie te verwerken.</p>

        <h3>5. Hoeveel wil je zelf doen?</h3>
        <p>Vind je administratie prima om zelf te doen? Dan heb je mogelijk minder automatisering nodig.</p>
        <p>
          Wil je zo weinig mogelijk tijd aan administratie besteden? Dan kan uitgebreidere software interessanter zijn.
        </p>

        <h3>6. Heb je een boekhouder?</h3>
        <p>
          Als je al met een boekhouder werkt, kunnen de eisen aan je software anders zijn dan wanneer je alles zelf
          doet.
        </p>

        <h2>Wat kost een boekhoudprogramma voor een eenmanszaak?</h2>
        <p>De prijs varieert sterk.</p>
        <p>
          Er zijn eenvoudige oplossingen die weinig kosten en uitgebreidere pakketten die tientallen euro&apos;s per
          maand kosten.
        </p>
        <p>Je kunt daarom grofweg denken aan:</p>
        <ul>
          <li>
            <strong>€0:</strong> eigen administratie of bepaalde gratis tools;
          </li>
          <li>
            <strong>ongeveer €5–€10 per maand:</strong> eenvoudige boekhoudsoftware;
          </li>
          <li>
            <strong>ongeveer €10–€20 per maand:</strong> uitgebreidere pakketten;
          </li>
          <li>
            <strong>€20–€40+ per maand:</strong> uitgebreidere automatisering en functies;
          </li>
          <li>
            <strong>boekhouder:</strong> extra kosten afhankelijk van de werkzaamheden.
          </li>
        </ul>
        <p>De goedkoopste optie is niet automatisch de beste.</p>
        <p>
          Als een iets duurder programma je iedere maand meerdere uren administratie bespaart, kan dat uiteindelijk
          juist goedkoper zijn.
        </p>
        <p>
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Lees wat een boekhoudprogramma voor zzp&apos;ers kost →
          </Link>
        </p>

        <h2>Eenmanszaak of zzp&apos;er: is dat hetzelfde?</h2>
        <p>Niet helemaal.</p>
        <p>
          <strong>Eenmanszaak</strong> is een rechtsvorm. <strong>ZZP&apos;er</strong> is geen rechtsvorm, maar een
          manier waarop iemand zelfstandig werkt.
        </p>
        <p>
          Veel zzp&apos;ers hebben een eenmanszaak, maar niet iedere eenmanszaak hoeft op dezelfde manier te werken.
        </p>
        <p>
          Daarom is het logisch dat twee ondernemers met een eenmanszaak verschillende boekhoudprogramma&apos;s nodig
          kunnen hebben.
        </p>
        <p>De omvang en complexiteit van je administratie zijn belangrijker dan alleen de rechtsvorm.</p>

        <h2>Welk boekhoudprogramma heb ik nodig?</h2>
        <p>
          Als je vooral wilt weten welk programma bij jouw situatie past, kun je beter naar je eigen administratie
          kijken.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>hoeveel facturen je verstuurt;</li>
          <li>hoeveel zakelijke kosten je hebt;</li>
          <li>hoeveel transacties je verwerkt;</li>
          <li>of je btw rekent;</li>
          <li>hoeveel automatisering je wilt;</li>
          <li>en hoeveel van je administratie je zelf wilt doen.</li>
        </ul>
        <p>
          Daarom hebben we bij FactuurBaas een korte <strong>boekhoudprogramma-check</strong> gemaakt.
        </p>
        <p>
          Je krijgt op basis van je antwoorden een indicatie van welke oplossing waarschijnlijk bij jouw situatie past
          en waarom.
        </p>
        <BoekhoudCheckCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Heb ik voor een eenmanszaak een boekhoudprogramma nodig?</h3>
        <p>
          Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede
          administratie bijhouden. Of software handig is, hangt af van de omvang en complexiteit van je administratie.
        </p>
        <h3>Wat is het beste boekhoudprogramma voor een eenmanszaak?</h3>
        <p>
          Dat hangt af van je situatie. Een kleine eenmanszaak met weinig transacties heeft andere behoeften dan een
          onderneming met veel kosten en transacties.
        </p>
        <p>
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Bekijk de beste boekhoudprogramma&apos;s voor zzp&apos;ers →
          </Link>
        </p>
        <h3>Is er een gratis boekhoudprogramma voor een eenmanszaak?</h3>
        <p>
          Er bestaan gratis oplossingen en programma&apos;s met gratis pakketten of periodes. Let wel op de
          beperkingen en het verschil tussen een gratis factuurprogramma en volledige boekhoudsoftware.
        </p>
        <h3>Kan ik mijn boekhouding van mijn eenmanszaak zelf doen?</h3>
        <p>
          Ja. Je kunt je administratie zelf bijhouden. Je moet er wel voor zorgen dat je administratie compleet en goed
          onderbouwd is.
        </p>
        <h3>Kan ik Excel gebruiken voor mijn eenmanszaak?</h3>
        <p>
          Voor een eenvoudige administratie kan een spreadsheet praktisch zijn. Naarmate je meer facturen, kosten en
          transacties krijgt, kan boekhoudsoftware handiger worden.
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma is vooral gericht op het maken van verkoopfacturen. Een boekhoudprogramma
          ondersteunt een bredere financiële administratie.
        </p>
        <h3>Wanneer moet ik overstappen naar boekhoudsoftware?</h3>
        <p>
          Er is geen vast moment. Een goed moment kan zijn wanneer je administratie veel tijd kost, je veel
          transacties hebt of je meer automatisering en financieel overzicht wilt.
        </p>
        <BoekhoudCheckCta />

        <h2>Conclusie</h2>
        <p>
          Een <strong>boekhoudprogramma voor een eenmanszaak</strong> hoeft niet ingewikkeld te zijn.
        </p>
        <p>
          Heb je weinig facturen, weinig kosten en een overzichtelijke administratie? Dan kan een eenvoudige oplossing
          voldoende zijn.
        </p>
        <p>
          Heb je veel transacties, zakelijke kosten of behoefte aan automatisering? Dan kan een boekhoudprogramma je
          veel handmatig werk besparen.
        </p>
        <p>
          De juiste keuze hangt dus niet alleen af van het feit dat je een eenmanszaak hebt, maar vooral van{' '}
          <strong>hoe je onderneming en administratie eruitzien</strong>.
        </p>
        <p>Wil je snel ontdekken welke oplossing waarschijnlijk bij jou past?</p>
        <BoekhoudCheckCta />
        <CtaButton />
      </>
    ),
  },
  {
    slug: 'moneybird-vs-jortt',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'moneybird-vs-eboekhouden',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    title: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Moneybird of Jortt? Vergelijk prijs, gebruiksgemak, facturatie, automatisering, btw en boekhouding en ontdek welk programma bij jou past.',
    keywords:
      'moneybird vs jortt, moneybird of jortt, moneybird jortt vergelijken, jortt vs moneybird, moneybird jortt, verschil moneybird jortt',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Moneybird%20vs%20Jortt.jpg',
      alt: 'Moneybird vs Jortt: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is beter: Moneybird of Jortt?',
        answer:
          'Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak, overzicht en facturatie. Jortt onderscheidt zich vooral met vergaande automatisering.',
      },
      {
        question: 'Wat is goedkoper: Moneybird of Jortt?',
        answer:
          'Moneybird heeft momenteel een lager betaald instappakket van €15 per maand. Jortt heeft daarentegen een gratis Starter-pakket, maar daarin zit geen volledige boekhouding.',
      },
      {
        question: 'Is Jortt makkelijker dan Moneybird?',
        answer:
          'Niet per se. Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. Jortt richt zich meer op automatisering. Welke interface je prettiger vindt, is persoonlijk.',
      },
      {
        question: 'Kan ik met beide programma’s facturen maken?',
        answer: 'Ja. Zowel Moneybird als Jortt bieden facturatie en offertes.',
      },
      {
        question: 'Kun je met Moneybird btw-aangifte doen?',
        answer: 'Ja. Moneybird ondersteunt elektronische btw-aangifte.',
      },
      {
        question: 'Kun je met Jortt btw-aangifte doen?',
        answer: 'Ja. Btw-aangifte is onderdeel van de betaalde boekhoudpakketten van Jortt.',
      },
      {
        question: 'Heeft Jortt een gratis versie?',
        answer:
          'Ja. Jortt Starter kost €0 per maand en blijft gratis. Het pakket is gericht op onder andere facturen, offertes, uren, projecten en e-facturatie. Volledige boekhouding zit er niet in.',
      },
      {
        question: 'Heeft Moneybird een gratis versie?',
        answer:
          'Moneybird heeft verschillende betaalde pakketten en een goedkoper Compact-pakket. Daarnaast kun je Moneybird 60 dagen gratis uitproberen.',
      },
      {
        question: "Welk programma is beter voor een zzp'er?",
        answer:
          'Dat hangt af van je administratie. Voor gebruiksgemak en facturatie is Moneybird interessant. Voor vergaande automatisering is Jortt interessant.',
      },
      {
        question: 'Welk boekhoudprogramma past bij mij?',
        answer:
          'Dat hangt af van je aantal facturen, zakelijke kosten, transacties en hoeveel administratie je zelf wilt doen.',
      },
    ],
    content: (
      <>
        <p>
          Twijfel je tussen <strong>Moneybird en Jortt</strong>? Beide zijn populaire online
          boekhoudprogramma&apos;s voor zzp&apos;ers en kleine ondernemers, maar ze leggen andere accenten.
        </p>
        <p>
          Moneybird is sterk in gebruiksgemak, facturatie en een overzichtelijke administratie. Jortt richt zich sterk
          op automatisering en probeert zoveel mogelijk van het boekhoudwerk automatisch voor je te verwerken.
        </p>
        <p>
          Welke het beste bij je past, hangt daarom vooral af van <strong>hoe je wilt boekhouden</strong>.
        </p>
        <p>
          In deze vergelijking bekijken we Moneybird en Jortt op prijs, gebruiksgemak, facturatie, boekhouding,
          automatisering, bankkoppelingen, btw en rapportages.
        </p>
        <p>
          <strong>Kort samengevat:</strong>
        </p>
        <ul>
          <li>
            <strong>Moneybird</strong> is interessant als je vooral een overzichtelijk en gebruiksvriendelijk
            boekhoudprogramma zoekt.
          </li>
          <li>
            <strong>Jortt</strong> is interessant als je zoveel mogelijk van je boekhouding wilt automatiseren.
          </li>
          <li>Beide zijn geschikt voor zzp&apos;ers die hun administratie grotendeels zelf willen doen.</li>
        </ul>

        <h2>Moneybird vs Jortt: snel vergelijken</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Moneybird
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Jortt
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Vanafprijs betaald pakket', '€15 p/m', '€19,95 p/m'],
                ['Gratis optie', 'Ja, beperkt pakket', 'Ja, Jortt Starter'],
                ['Boekhouding in gratis pakket', 'Beperkt / afhankelijk van pakket', 'Nee'],
                ['Factureren', 'Ja', 'Ja'],
                ['Offertes', 'Ja', 'Ja'],
                ['Boekhouding', 'Ja', 'Ja'],
                ['Automatisering', 'Sterk', 'Zeer sterk'],
                ['Bankkoppeling', 'Ja', 'Ja'],
                ['Btw-aangifte', 'Ja', 'Ja'],
                ['Rapportages', 'Ja', 'Ja'],
                ['Sterkste punt', 'Gebruiksgemak & facturatie', 'Automatisering'],
                [
                  'Vooral interessant voor',
                  "ZZP'ers die overzicht willen",
                  "ZZP'ers die veel willen automatiseren",
                ],
              ].map(([label, moneybird, jortt]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{moneybird}</td>
                  <td className="px-4 py-3">{jortt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Let op:</strong> prijzen en pakketvoorwaarden kunnen veranderen. Controleer daarom altijd de
          actuele prijs voordat je een abonnement afsluit.
        </p>

        <h2>Wat is het verschil tussen Moneybird en Jortt?</h2>
        <p>
          Het grootste verschil zit niet in de vraag of je met beide kunt factureren of boekhouden.
        </p>
        <p>Dat kunnen ze allebei.</p>
        <p>
          Het verschil zit vooral in <strong>hoeveel werk je zelf wilt doen</strong>.
        </p>
        <p>
          Moneybird geeft je een duidelijke administratie waarin je zelf veel controle houdt over je facturen, kosten
          en boekhouding.
        </p>
        <p>
          Jortt legt juist veel nadruk op automatische verwerking. De ingebouwde Boekhoudbot verwerkt veel
          administratieve handelingen op basis van je transacties en instellingen.
        </p>
        <p>Je kunt het daarom ongeveer zo zien:</p>
        <p>
          <strong>Moneybird:</strong>
        </p>
        <blockquote>
          <p>“Geef mij een overzichtelijke administratie waarmee ik zelf mijn boekhouding kan doen.”</p>
        </blockquote>
        <p>
          <strong>Jortt:</strong>
        </p>
        <blockquote>
          <p>“Laat het programma zoveel mogelijk van mijn boekhouding voor mij doen.”</p>
        </blockquote>
        <p>Dat verschil is belangrijker dan een paar euro prijsverschil per maand.</p>

        <h2>Moneybird</h2>
        <p>
          Moneybird is een online boekhoudprogramma dat zich sterk richt op gebruiksgemak en een overzichtelijke
          administratie.
        </p>
        <p>
          Het programma combineert onder andere facturatie, boekhouding, documenten en banktransacties.
        </p>
        <p>De huidige betaalde pakketten zijn:</p>
        <ul>
          <li>
            <strong>Start: €15 per maand</strong>
          </li>
          <li>
            <strong>Groei: €29 per maand</strong>
          </li>
          <li>
            <strong>Compleet: €41 per maand</strong>
          </li>
        </ul>
        <p>
          Er is daarnaast een Compact-pakket van €3 per maand voor kleine of inactieve administraties.
        </p>
        <p>
          Moneybird biedt een gratis proefperiode van 60 dagen waarin je het pakket kunt uitproberen.
        </p>

        <h3>Sterke punten van Moneybird</h3>
        <ul>
          <li>overzichtelijke interface;</li>
          <li>sterke facturatiemogelijkheden;</li>
          <li>offertes en facturen;</li>
          <li>documenten en bonnetjes verwerken;</li>
          <li>banktransacties verwerken;</li>
          <li>btw-aangifte;</li>
          <li>rapportages;</li>
          <li>koppelingen met andere systemen;</li>
          <li>mogelijkheid om meerdere gebruikers toe te voegen in uitgebreidere pakketten;</li>
          <li>geïntegreerde zakelijke betaalrekening als aanvullende dienst.</li>
        </ul>
        <p>
          Voor veel zzp&apos;ers is vooral de combinatie van <strong>factureren + boekhouden</strong> aantrekkelijk.
        </p>
        <MoneybirdCta />

        <h2>Jortt</h2>
        <p>Jortt richt zich sterk op automatische boekhouding.</p>
        <p>
          Het opvallendste onderdeel is de <strong>Boekhoudbot</strong>, die transacties automatisch probeert te
          verwerken en te categoriseren.
        </p>
        <p>De huidige pakketten zijn:</p>
        <ul>
          <li>
            <strong>Jortt Starter: €0 per maand</strong>
          </li>
          <li>
            <strong>Jortt ZZP: €19,95 per maand</strong>
          </li>
          <li>
            <strong>Jortt MKB: €24,95 per maand</strong>
          </li>
          <li>
            <strong>Jortt Plus: €34,95 per maand</strong>
          </li>
        </ul>
        <p>
          De gratis Starter-versie is vooral gericht op facturen, offertes, uren, projecten en e-facturatie. De
          volledige boekhouding begint bij Jortt ZZP.
        </p>
        <p>Jortt ZZP is specifiek gericht op eenmanszaken.</p>

        <h3>Sterke punten van Jortt</h3>
        <ul>
          <li>sterke automatisering;</li>
          <li>automatische verwerking van banktransacties;</li>
          <li>Boekhoudbot;</li>
          <li>facturen en offertes;</li>
          <li>btw-aangifte;</li>
          <li>financiële rapportages;</li>
          <li>jaarwerk;</li>
          <li>ondersteuning voor verschillende soorten ondernemingen in de uitgebreidere pakketten.</li>
        </ul>
        <p>
          Voor een ondernemer die zo weinig mogelijk handmatig wil boeken, kan Jortt daardoor aantrekkelijk zijn.
        </p>
        <JorttCta />

        <h2>Moneybird vs Jortt: prijs</h2>
        <p>
          Prijs is natuurlijk belangrijk, maar kijk vooral naar <strong>wat je voor die prijs krijgt</strong>.
        </p>

        <h3>Moneybird</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Compact', '€3'],
                ['Start', '€15'],
                ['Groei', '€29'],
                ['Compleet', '€41'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Moneybird werkt met verschillende limieten voor onder andere transacties, bankrekeningen en gebruikers.
          Naarmate je administratie groter wordt, kun je naar een uitgebreider pakket overstappen.
        </p>

        <h3>Jortt</h3>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starter', '€0'],
                ['ZZP', '€19,95'],
                ['MKB', '€24,95'],
                ['Plus', '€34,95'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Jortt Starter blijft gratis, maar bevat geen volledige boekhouding.</p>
        <p>
          Voor een eenmanszaak die daadwerkelijk de boekhouding in Jortt wil doen, kom je dus uit bij{' '}
          <strong>Jortt ZZP</strong> of een uitgebreider pakket.
        </p>

        <h3>Wie is goedkoper?</h3>
        <p>Dat hangt af van het pakket dat je nodig hebt.</p>
        <p>
          Moneybird heeft een lagere betaalde instapprijs, terwijl Jortt een gratis pakket heeft voor ondernemers die
          vooral willen factureren en offreren.
        </p>
        <p>
          Als je volledige boekhouding wilt, moet je de pakketten inhoudelijk naast elkaar leggen in plaats van alleen
          naar de vanafprijs te kijken.
        </p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Gebruiksgemak: Moneybird of Jortt?</h2>
        <p>Voor veel ondernemers is dit een van de belangrijkste verschillen.</p>

        <h3>Moneybird</h3>
        <p>
          Moneybird heeft een relatief overzichtelijke interface en is sterk gericht op een eenvoudige workflow.
        </p>
        <p>Je kunt bijvoorbeeld:</p>
        <p>
          <strong>offerte → factuur → betaling → administratie</strong>
        </p>
        <p>in één systeem volgen.</p>
        <p>
          Dat maakt Moneybird aantrekkelijk als je vooral een boekhoudprogramma wilt dat je snel begrijpt.
        </p>

        <h3>Jortt</h3>
        <p>
          Jortt heeft eveneens een gebruiksvriendelijke aanpak, maar het programma legt meer nadruk op automatisering.
        </p>
        <p>Je hoeft daardoor niet iedere administratieve handeling zelf uit te voeren.</p>
        <p>
          Daar staat tegenover dat je moet begrijpen hoe de automatische verwerking van je administratie werkt.
        </p>

        <h3>Winnaar gebruiksgemak: Moneybird</h3>
        <p>
          Als <strong>eenvoud en overzicht</strong> je belangrijkste criteria zijn, zou ik eerder naar Moneybird
          kijken.
        </p>
        <p>
          Als je bereid bent om iets meer aandacht te besteden aan de inrichting om daarna meer te automatiseren, is
          Jortt interessant.
        </p>

        <h2>Factureren: Moneybird vs Jortt</h2>
        <p>Beide programma&apos;s kunnen facturen en offertes maken.</p>
        <p>
          Dat betekent dat je bij beide niet alleen je boekhouding kunt doen, maar ook je facturatie vanuit hetzelfde
          systeem kunt regelen.
        </p>
        <p>
          Moneybird heeft hier een sterke positie, omdat facturatie een belangrijk onderdeel van het product is.
        </p>
        <p>
          Jortt combineert facturatie juist sterk met de automatische verwerking van de administratie.
        </p>

        <h3>Wie is beter voor factureren?</h3>
        <p>
          Voor iemand die vooral veel waarde hecht aan <strong>facturen, offertes en een eenvoudige workflow</strong>,
          zou ik Moneybird kiezen.
        </p>
        <p>
          Wil je vooral dat facturen vervolgens automatisch onderdeel worden van je boekhouding, dan is Jortt ook een
          sterke optie.
        </p>

        <h2>Boekhouding: Moneybird vs Jortt</h2>
        <p>Beide programma&apos;s ondersteunen een volledige zakelijke administratie.</p>
        <p>Het verschil zit vooral in de manier waarop je ermee werkt.</p>
        <p>Bij Moneybird houd je relatief veel directe controle over je administratie.</p>
        <p>Jortt probeert meer van het daadwerkelijke boekhoudwerk automatisch uit te voeren.</p>
        <p>
          Dat maakt Jortt vooral interessant voor ondernemers die niet iedere banktransactie handmatig willen
          verwerken.
        </p>

        <h3>Wie is beter voor boekhouden?</h3>
        <p>
          <strong>Moneybird</strong> als je graag zelf overzicht houdt.
        </p>
        <p>
          <strong>Jortt</strong> als je zoveel mogelijk automatisch wilt laten verwerken.
        </p>

        <h2>Automatisering</h2>
        <p>Hier zit waarschijnlijk het grootste verschil tussen de twee.</p>
        <p>
          Moneybird heeft verschillende vormen van automatisering, waaronder het verwerken van documenten en het
          automatisch verwerken van financiële gegevens in uitgebreidere pakketten.
        </p>
        <p>Jortt heeft automatisering juist als een belangrijk onderdeel van zijn productfilosofie.</p>
        <p>
          De Boekhoudbot probeert transacties automatisch te boeken op basis van je administratie.
        </p>
        <p>Daarom is Jortt vooral interessant voor ondernemers die zeggen:</p>
        <blockquote>
          <p>“Ik wil zo min mogelijk tijd aan mijn boekhouding besteden.”</p>
        </blockquote>
        <p>Moneybird is interessanter voor iemand die zegt:</p>
        <blockquote>
          <p>“Ik wil vooral dat mijn boekhouding duidelijk en eenvoudig blijft.”</p>
        </blockquote>

        <h3>Winnaar automatisering: Jortt</h3>
        <p>
          Als maximale automatisering je belangrijkste criterium is, heeft Jortt hier een duidelijk onderscheidend
          punt.
        </p>

        <h2>Bankkoppeling</h2>
        <p>Een goede bankkoppeling kan veel administratief werk besparen.</p>
        <p>
          Zowel Moneybird als Jortt kunnen banktransacties in je administratie verwerken.
        </p>
        <p>
          Bij Moneybird verschillen de mogelijkheden en limieten per pakket. Bij de uitgebreidere pakketten zijn
          externe bankkoppelingen inbegrepen.
        </p>
        <p>
          Jortt gebruikt bankkoppelingen als belangrijk onderdeel van de automatische boekhouding.
        </p>
        <p>
          Je banktransacties vormen bij Jortt namelijk een belangrijke input voor de automatische verwerking.
        </p>

        <h3>Waar moet je op letten?</h3>
        <p>Kijk niet alleen of een programma “een bankkoppeling” heeft.</p>
        <p>Controleer ook:</p>
        <ul>
          <li>hoeveel bankrekeningen je kunt koppelen;</li>
          <li>hoeveel transacties verwerkt kunnen worden;</li>
          <li>of de koppeling bij jouw bank werkt;</li>
          <li>en of er aanvullende kosten zijn.</li>
        </ul>

        <h2>Btw-aangifte</h2>
        <p>
          Zowel Moneybird als Jortt ondersteunen de btw-administratie en btw-aangifte.
        </p>
        <p>
          Dat betekent dat je btw-gegevens vanuit je administratie kunt gebruiken voor je aangifte.
        </p>
        <p>Bij Jortt is de btw-aangifte onderdeel van de betaalde boekhoudpakketten.</p>
        <p>Bij Moneybird is elektronische btw-aangifte beschikbaar vanaf het Start-pakket.</p>
        <p>
          Voor een normale Nederlandse zzp&apos;er zijn beide daardoor geschikt voor de btw-administratie.
        </p>

        <h2>Rapportages</h2>
        <p>Wil je weten hoe je onderneming ervoor staat, dan zijn rapportages belangrijk.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>omzet;</li>
          <li>kosten;</li>
          <li>winst;</li>
          <li>btw;</li>
          <li>balans;</li>
          <li>financiële ontwikkeling.</li>
        </ul>
        <p>Beide programma&apos;s bieden financiële rapportages.</p>
        <p>
          Het verschil zit vooral in de manier waarop de informatie wordt verwerkt en gepresenteerd.
        </p>
        <p>
          Voor een kleine eenmanszaak zullen de verschillen waarschijnlijk minder belangrijk zijn dan de verschillen
          in gebruiksgemak en automatisering.
        </p>
        <p>
          Voor een groeiende onderneming worden uitgebreidere rapportages en automatisering steeds interessanter.
        </p>

        <h2>Voor wie is Moneybird geschikt?</h2>
        <p>Moneybird is vooral interessant als je:</p>
        <ul>
          <li>zzp&apos;er of kleine ondernemer bent;</li>
          <li>een overzichtelijk programma wilt;</li>
          <li>veel waarde hecht aan facturatie;</li>
          <li>zelf controle wilt houden over je administratie;</li>
          <li>offertes en facturen vanuit één systeem wilt regelen;</li>
          <li>een gebruiksvriendelijke interface belangrijk vindt;</li>
          <li>en niet per se maximale automatisering nodig hebt.</li>
        </ul>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <blockquote>
          <p>
            <strong>
              Moneybird is een sterke keuze als gebruiksgemak en overzicht voor jou belangrijker zijn dan maximale
              automatisering.
            </strong>
          </p>
        </blockquote>
        <MoneybirdCta />

        <h2>Voor wie is Jortt geschikt?</h2>
        <p>Jortt is vooral interessant als je:</p>
        <ul>
          <li>je boekhouding grotendeels zelf wilt doen;</li>
          <li>zo veel mogelijk wilt automatiseren;</li>
          <li>weinig handmatig boekwerk wilt;</li>
          <li>een eenmanszaak hebt;</li>
          <li>banktransacties automatisch wilt laten verwerken;</li>
          <li>en het prettig vindt als software een groter deel van je administratie overneemt.</li>
        </ul>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <blockquote>
          <p>
            <strong>
              Jortt is een sterke keuze als je vooral zo weinig mogelijk handmatig boekhoudwerk wilt doen.
            </strong>
          </p>
        </blockquote>
        <JorttCta />

        <h2>Moneybird of Jortt: welke moet je kiezen?</h2>
        <p>Er is geen universele winnaar.</p>

        <h3>Kies eerder voor Moneybird als:</h3>
        <ul>
          <li>gebruiksgemak voorop staat</li>
          <li>je veel met facturen en offertes werkt</li>
          <li>je een overzichtelijke administratie wilt</li>
          <li>je graag zelf controle houdt</li>
          <li>je een eenvoudige workflow belangrijk vindt</li>
        </ul>

        <h3>Kies eerder voor Jortt als:</h3>
        <ul>
          <li>automatisering voorop staat</li>
          <li>je zo min mogelijk handmatig wilt boeken</li>
          <li>je banktransacties automatisch wilt laten verwerken</li>
          <li>je administratie zoveel mogelijk zelf wilt laten lopen</li>
          <li>je bereid bent iets meer met de inrichting van je boekhouding bezig te zijn</li>
        </ul>

        <h2>Moneybird vs Jortt voor starters</h2>
        <p>Ben je net begonnen als zzp&apos;er?</p>
        <p>Dan zou ik niet automatisch het meest uitgebreide pakket nemen.</p>
        <p>Kijk eerst naar:</p>
        <ul>
          <li>hoeveel facturen je verwacht;</li>
          <li>hoeveel zakelijke kosten je hebt;</li>
          <li>hoeveel transacties je hebt;</li>
          <li>of je een bankkoppeling nodig hebt;</li>
          <li>hoeveel tijd je aan administratie wilt besteden.</li>
        </ul>
        <p>
          Een startende zzp&apos;er met vijf klanten en weinig kosten heeft waarschijnlijk andere behoeften dan
          iemand die vanaf dag één tientallen transacties per week verwerkt.
        </p>
        <p>Wil je eerst bepalen of je überhaupt een boekhoudprogramma nodig hebt?</p>
        <BoekhoudCheckCta />

        <h2>Moneybird vs Jortt voor een eenmanszaak</h2>
        <p>Beide programma&apos;s zijn interessant voor een eenmanszaak.</p>
        <p>
          Jortt heeft hiervoor specifiek een ZZP-pakket dat gericht is op de eenmanszaak. Meer over boekhouden voor
          eenmanszaken lees je in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>
        <p>
          Bij Moneybird kun je afhankelijk van je behoeften uit verschillende pakketten kiezen.
        </p>
        <p>
          Voor een eenvoudige eenmanszaak is vooral de vraag hoeveel administratie je hebt en hoeveel daarvan je wilt
          automatiseren.
        </p>
        <p>
          <strong>Eenmanszaak + weinig administratie →</strong> kijk vooral naar eenvoud en prijs.
        </p>
        <p>
          <strong>Eenmanszaak + veel transacties →</strong> automatisering en bankkoppeling worden belangrijker.
        </p>
        <p>
          <strong>Eenmanszaak + veel facturen →</strong> kijk goed naar de facturatiemogelijkheden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is beter: Moneybird of Jortt?</h3>
        <p>
          Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak, overzicht en
          facturatie. Jortt onderscheidt zich vooral met vergaande automatisering.
        </p>
        <h3>Wat is goedkoper: Moneybird of Jortt?</h3>
        <p>
          Moneybird heeft momenteel een lager betaald instappakket van €15 per maand. Jortt heeft daarentegen een
          gratis Starter-pakket, maar daarin zit geen volledige boekhouding.
        </p>
        <h3>Is Jortt makkelijker dan Moneybird?</h3>
        <p>
          Niet per se. Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. Jortt richt zich meer op
          automatisering. Welke interface je prettiger vindt, is persoonlijk.
        </p>
        <h3>Kan ik met beide programma&apos;s facturen maken?</h3>
        <p>Ja. Zowel Moneybird als Jortt bieden facturatie en offertes.</p>
        <h3>Kun je met Moneybird btw-aangifte doen?</h3>
        <p>Ja. Moneybird ondersteunt elektronische btw-aangifte.</p>
        <h3>Kun je met Jortt btw-aangifte doen?</h3>
        <p>Ja. Btw-aangifte is onderdeel van de betaalde boekhoudpakketten van Jortt.</p>
        <h3>Heeft Jortt een gratis versie?</h3>
        <p>
          Ja. Jortt Starter kost €0 per maand en blijft gratis. Het pakket is gericht op onder andere facturen,
          offertes, uren, projecten en e-facturatie. Volledige boekhouding zit er niet in.
        </p>
        <h3>Heeft Moneybird een gratis versie?</h3>
        <p>
          Moneybird heeft verschillende betaalde pakketten en een goedkoper Compact-pakket. Daarnaast kun je
          Moneybird 60 dagen gratis uitproberen.
        </p>
        <h3>Welk programma is beter voor een zzp&apos;er?</h3>
        <p>
          Dat hangt af van je administratie. Voor gebruiksgemak en facturatie is Moneybird interessant. Voor
          vergaande automatisering is Jortt interessant.
        </p>
        <h3>Welk boekhoudprogramma past bij mij?</h3>
        <p>
          Dat hangt af van je aantal facturen, zakelijke kosten, transacties en hoeveel administratie je zelf wilt
          doen.
        </p>
        <BoekhoudCheckCta />

        <h2>Conclusie: Moneybird of Jortt?</h2>
        <p>
          <strong>
            Moneybird en Jortt zijn allebei sterke boekhoudprogramma&apos;s, maar ze hebben een ander uitgangspunt.
          </strong>
        </p>
        <p>
          Moneybird is vooral aantrekkelijk als je een{' '}
          <strong>duidelijk, gebruiksvriendelijk boekhoudprogramma met sterke facturatie</strong> zoekt.
        </p>
        <p>
          Jortt is vooral interessant als je <strong>zoveel mogelijk van je boekhouding wilt automatiseren</strong>.
        </p>
        <p>Daarom zou ik niet vragen:</p>
        <blockquote>
          <p>“Welke is absoluut de beste?”</p>
        </blockquote>
        <p>Maar:</p>
        <blockquote>
          <p>
            <strong>“Welke manier van boekhouden past bij mij?”</strong>
          </p>
        </blockquote>
        <p>
          Wil je vooral zelf de controle houden en een eenvoudige administratie? Kijk dan naar{' '}
          <strong>Moneybird</strong>.
        </p>
        <p>
          Wil je vooral zo min mogelijk handmatig boekhouden? Kijk dan naar <strong>Jortt</strong>.
        </p>
        <MoneybirdJorttCtas />
        <p>Twijfel je nog?</p>
        <BoekhoudCheckCta />
        <p>
          Of bekijk onze bredere vergelijking:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          . Of vergelijk Moneybird met e-Boekhouden.nl in{' '}
          <Link href="/blogs/moneybird-vs-eboekhouden" className="text-warm-orange hover:underline">
            Moneybird vs e-Boekhouden.nl
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'moneybird-vs-eboekhouden',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'moneybird-vs-jortt',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'jortt-vs-eboekhouden',
    ],
    metaTitle: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    title: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Moneybird of e-Boekhouden.nl? Vergelijk prijs, gebruiksgemak, facturatie, boekhouding, automatisering en btw en ontdek welk programma bij jou past.',
    keywords:
      'moneybird vs eboekhouden, moneybird of eboekhouden, moneybird eboekhouden vergelijken, eboekhouden vs moneybird, moneybird e-boekhouden, verschil moneybird eboekhouden',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Moneybird%20vs%20e-Boekhouden.nl.jpg',
      alt: 'Moneybird vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is beter: Moneybird of e-Boekhouden.nl?',
        answer:
          'Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak en workflow. e-Boekhouden.nl onderscheidt zich vooral met prijs en uitgebreide boekhoudfunctionaliteit.',
      },
      {
        question: 'Wat is goedkoper: Moneybird of e-Boekhouden.nl?',
        answer:
          'e-Boekhouden.nl is momenteel goedkoper. Het huidige ZZP-tarief ligt onder de prijs van het instappakket van Moneybird. Daarnaast is er voor starters een aanbod waarbij de eerste 15 maanden gratis zijn.',
      },
      {
        question: 'Is Moneybird makkelijker dan e-Boekhouden.nl?',
        answer:
          'Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. e-Boekhouden.nl heeft een bredere boekhoudomgeving. Welke je makkelijker vindt, blijft deels persoonlijk.',
      },
      {
        question: 'Kun je met Moneybird facturen maken?',
        answer: 'Ja. Facturatie is een belangrijk onderdeel van Moneybird.',
      },
      {
        question: 'Kun je met e-Boekhouden.nl facturen maken?',
        answer: 'Ja. e-Boekhouden.nl biedt naast boekhouding ook facturatie.',
      },
      {
        question: 'Kun je met Moneybird btw-aangifte doen?',
        answer: 'Ja. Moneybird ondersteunt de btw-administratie en elektronische btw-aangifte.',
      },
      {
        question: 'Kun je met e-Boekhouden.nl btw-aangifte doen?',
        answer: 'Ja. e-Boekhouden.nl ondersteunt de btw-administratie en btw-aangifte.',
      },
      {
        question: 'Is e-Boekhouden.nl gratis?',
        answer:
          'Voor starters is er momenteel een aanbod waarbij je de eerste 15 maanden gratis kunt gebruiken. Daarnaast heeft e-Boekhouden.nl betaalde pakketten. Controleer de actuele voorwaarden voordat je je aanmeldt.',
      },
      {
        question: 'Heeft Moneybird een gratis versie?',
        answer:
          'Moneybird heeft een gratis proefperiode van 60 dagen. Daarnaast zijn er verschillende betaalde pakketten.',
      },
      {
        question: "Welk programma is beter voor een zzp'er?",
        answer:
          'Voor gebruiksgemak en een overzichtelijke administratie is Moneybird interessant. Als prijs en brede boekhoudfunctionaliteit belangrijker zijn, is e-Boekhouden.nl interessant.',
      },
      {
        question: 'Welk programma past bij mijn eenmanszaak?',
        answer:
          'Dat hangt af van je aantal facturen, kosten, banktransacties en hoeveel administratie je zelf wilt doen.',
      },
    ],
    content: (
      <>
        <p>
          Twijfel je tussen <strong>Moneybird en e-Boekhouden.nl</strong>? Beide zijn online boekhoudprogramma&apos;s
          waarmee je als zzp&apos;er of kleine ondernemer je administratie kunt bijhouden, facturen kunt maken en je
          btw-administratie kunt regelen.
        </p>
        <p>Toch zijn er duidelijke verschillen.</p>
        <p>
          <strong>Moneybird</strong> richt zich sterk op gebruiksgemak, een moderne administratie en een prettige
          workflow voor factureren en boekhouden.
        </p>
        <p>
          <strong>e-Boekhouden.nl</strong> onderscheidt zich vooral met een brede boekhoudoplossing en een relatief
          lage prijs. Voor starters zijn er bovendien aantrekkelijke mogelijkheden om het programma tijdelijk gratis te
          gebruiken.
        </p>
        <p>Maar welke is beter voor jou?</p>
        <p>
          In deze vergelijking zetten we <strong>Moneybird en e-Boekhouden.nl</strong> naast elkaar op prijs,
          gebruiksgemak, facturatie, boekhouding, automatisering, bankkoppelingen, btw en rapportages.
        </p>
        <p>
          <strong>Kort gezegd:</strong>
        </p>
        <ul>
          <li>
            <strong>Moneybird</strong> is interessant als je vooral een gebruiksvriendelijk en overzichtelijk
            programma wilt.
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong> is interessant als prijs en uitgebreide boekhoudfunctionaliteit zwaar
            meewegen.
          </li>
          <li>Voor een eenvoudige eenmanszaak kunnen beide geschikt zijn.</li>
        </ul>

        <h2>Moneybird vs e-Boekhouden.nl: snel vergelijken</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Moneybird
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  e-Boekhouden.nl
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Betaalde instap', 'Vanaf €15 p/m', 'Vanaf €4,98 p/m voor het huidige ZZP-aanbod'],
                ['Startersaanbod', '60 dagen gratis proberen', 'Eerste 15 maanden gratis voor starters'],
                ['Facturen maken', '✓', '✓'],
                ['Offertes', '✓', '✓'],
                ['Boekhouding', '✓', '✓'],
                ['Bankkoppeling', '✓', '✓'],
                ['Btw-administratie', '✓', '✓'],
                ['Btw-aangifte', '✓', '✓'],
                ['Automatisering', 'Sterk', 'Sterk'],
                ['Rapportages', '✓', '✓'],
                ['Sterk punt', 'Gebruiksgemak & workflow', 'Prijs & boekhoudfunctionaliteit'],
                [
                  'Interessant voor',
                  "ZZP'ers & kleine bedrijven",
                  "ZZP'ers & ondernemers die veel waarde aan prijs hechten",
                ],
              ].map(([label, moneybird, eboekhouden]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{moneybird}</td>
                  <td className="px-4 py-3">{eboekhouden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Let op:</strong> prijzen, pakketinhoud en acties kunnen veranderen. Controleer daarom altijd de
          actuele voorwaarden voordat je een abonnement afsluit.
        </p>

        <h2>Wat is het verschil tussen Moneybird en e-Boekhouden.nl?</h2>
        <p>Beide programma&apos;s kunnen veel van dezelfde basiszaken.</p>
        <p>Je kunt met beide onder andere:</p>
        <ul>
          <li>je administratie bijhouden;</li>
          <li>facturen maken;</li>
          <li>kosten verwerken;</li>
          <li>banktransacties verwerken;</li>
          <li>btw bijhouden;</li>
          <li>financiële overzichten bekijken.</li>
        </ul>
        <p>
          Het verschil zit daarom vooral in <strong>de manier waarop je werkt en wat je belangrijk vindt</strong>.
        </p>
        <p>
          Moneybird legt veel nadruk op een overzichtelijke gebruikerservaring en een eenvoudige workflow.
        </p>
        <p>
          e-Boekhouden.nl richt zich sterk op een complete boekhoudomgeving tegen een relatief lage prijs.
        </p>
        <p>Je kunt het verschil daarom ongeveer zo samenvatten:</p>
        <blockquote>
          <p>
            <strong>Moneybird:</strong> gebruiksgemak en een moderne workflow.
          </p>
        </blockquote>
        <blockquote>
          <p>
            <strong>e-Boekhouden.nl:</strong> veel boekhoudfunctionaliteit voor relatief weinig geld.
          </p>
        </blockquote>

        <h2>Moneybird</h2>
        <p>
          Moneybird is een online boekhoudprogramma voor onder andere zzp&apos;ers, freelancers en kleine bedrijven.
        </p>
        <p>
          Het programma combineert facturatie met boekhouding, waardoor je niet met een apart factuurprogramma en
          boekhoudprogramma hoeft te werken.
        </p>
        <p>De huidige pakketten van Moneybird zijn:</p>
        <ul>
          <li>
            <strong>Compact: €3 per maand</strong>
          </li>
          <li>
            <strong>Start: €15 per maand</strong>
          </li>
          <li>
            <strong>Groei: €29 per maand</strong>
          </li>
          <li>
            <strong>Compleet: €41 per maand</strong>
          </li>
        </ul>
        <p>De mogelijkheden en limieten verschillen per pakket.</p>
        <p>
          Moneybird biedt daarnaast een <strong>gratis proefperiode van 60 dagen</strong>.
        </p>

        <h3>Sterke punten van Moneybird</h3>
        <p>Moneybird is vooral sterk in:</p>
        <ul>
          <li>gebruiksgemak;</li>
          <li>facturatie;</li>
          <li>offertes;</li>
          <li>documenten en bonnetjes;</li>
          <li>banktransacties;</li>
          <li>btw-administratie;</li>
          <li>financiële rapportages;</li>
          <li>koppelingen;</li>
          <li>en een overzichtelijke workflow.</li>
        </ul>
        <p>
          Voor een zzp&apos;er die zijn administratie zelf wil doen, kan dat een groot voordeel zijn.
        </p>
        <MoneybirdCta />

        <h2>e-Boekhouden.nl</h2>
        <p>
          e-Boekhouden.nl is een online boekhoudprogramma dat zich richt op administratie, boekhouding en facturatie.
        </p>
        <p>Het programma heeft verschillende pakketten.</p>
        <p>
          Op het moment van schrijven wordt voor het ZZP-pakket <strong>€4,98 per maand</strong> weergegeven, tegenover
          een regulier tarief van €9,95 per maand.
        </p>
        <p>
          Daarnaast is er een Standaard-pakket voor <strong>€7,25 per maand</strong> tegenover €14,50 regulier.
        </p>
        <p>
          Voor ondernemers die zowel onbeperkt boekhouden als factureren willen combineren, is er een pakket van{' '}
          <strong>€12 per maand</strong> tegenover €24 regulier.
        </p>
        <p>
          Voor starters biedt e-Boekhouden.nl bovendien een mogelijkheid om het programma de eerste{' '}
          <strong>15 maanden gratis</strong> te gebruiken.
        </p>
        <p>De exacte prijs en voorwaarden kunnen veranderen.</p>

        <h3>Sterke punten van e-Boekhouden.nl</h3>
        <p>e-Boekhouden.nl is vooral interessant als je:</p>
        <ul>
          <li>lage maandelijkse kosten belangrijk vindt;</li>
          <li>een uitgebreide boekhoudomgeving zoekt;</li>
          <li>naast boekhouden ook wilt factureren;</li>
          <li>je administratie zelf wilt doen;</li>
          <li>en niet per se voor een modernere interface wilt betalen.</li>
        </ul>
        <EBoekhoudenCta />

        <h2>Moneybird vs e-Boekhouden.nl: prijs</h2>
        <p>Dit is waarschijnlijk het duidelijkste verschil tussen de twee.</p>
        <p>Moneybird heeft een betaald instappakket van €15 per maand voor Start.</p>
        <p>
          e-Boekhouden.nl heeft momenteel een aanzienlijk lagere prijs voor het ZZP-pakket en biedt daarnaast voor
          starters de eerste 15 maanden gratis.
        </p>
        <p>
          Daarmee is e-Boekhouden.nl op het eerste gezicht de aantrekkelijkere optie als{' '}
          <strong>prijs je belangrijkste criterium is</strong>.
        </p>
        <p>Maar alleen naar de maandprijs kijken is niet genoeg.</p>
        <p>
          Stel dat je €10 per maand meer betaalt voor software die je veel makkelijker vindt werken. Als dat je iedere
          maand tijd bespaart, kan dat verschil het waard zijn.
        </p>

        <h3>Wat betaal je per jaar?</h3>
        <p>Als je puur naar de genoemde maandprijzen kijkt:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per maand
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Per jaar
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Moneybird Start', '€15', '€180'],
                ['e-Boekhouden.nl ZZP, huidig tarief', '€4,98', '€59,76'],
                ['e-Boekhouden.nl Standaard, huidig tarief', '€7,25', '€87'],
                ['e-Boekhouden.nl Standaard + Factureren, huidig tarief', '€12', '€144'],
              ].map(([label, maand, jaar]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3 text-right">{maand}</td>
                  <td className="px-4 py-3 text-right">{jaar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn rekenkundige jaarbedragen op basis van de genoemde maandprijzen. Acties en voorwaarden kunnen
          wijzigen.
        </p>
        <p>
          <strong>Puur op prijs wint e-Boekhouden.nl duidelijk.</strong>
        </p>
        <p>Maar prijs is maar één onderdeel van de keuze.</p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Gebruiksgemak: Moneybird of e-Boekhouden.nl?</h2>
        <p>Voor veel zzp&apos;ers is gebruiksgemak misschien wel belangrijker dan de prijs.</p>
        <p>Je gaat je boekhoudprogramma immers regelmatig gebruiken.</p>

        <h3>Moneybird</h3>
        <p>Moneybird staat sterk op het gebied van overzicht en gebruiksvriendelijkheid.</p>
        <p>
          De interface is gericht op ondernemers die niet iedere dag met boekhouden bezig willen zijn.
        </p>
        <p>Je kunt bijvoorbeeld je verkoopproces en administratie vanuit dezelfde omgeving beheren.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>
          e-Boekhouden.nl biedt veel functionaliteit en heeft daardoor een bredere boekhoudomgeving.
        </p>
        <p>Dat kan juist een voordeel zijn als je veel mogelijkheden wilt.</p>
        <p>
          Voor iemand die alleen een eenvoudige administratie heeft, kan een uitgebreider systeem soms wat minder
          eenvoudig aanvoelen.
        </p>

        <h3>Wie wint op gebruiksgemak?</h3>
        <p>
          <strong>Moneybird</strong> zou ik kiezen als gebruiksgemak en een moderne gebruikerservaring voor jou zwaar
          wegen.
        </p>
        <p>
          <strong>e-Boekhouden.nl</strong> is interessanter als je vooral veel functionaliteit voor een lage prijs
          wilt.
        </p>

        <h2>Factureren: Moneybird vs e-Boekhouden.nl</h2>
        <p>Beide programma&apos;s kunnen facturen maken.</p>
        <p>
          Dat betekent dat je niet per se een apart factuurprogramma nodig hebt als je voor een van deze systemen
          kiest.
        </p>
        <p>Je kunt je facturen vervolgens direct onderdeel maken van je administratie.</p>

        <h3>Moneybird</h3>
        <p>Facturatie is een belangrijk onderdeel van Moneybird.</p>
        <p>Je kunt onder andere werken met:</p>
        <ul>
          <li>facturen;</li>
          <li>offertes;</li>
          <li>klanten;</li>
          <li>producten en diensten;</li>
          <li>betalingen;</li>
          <li>documenten.</li>
        </ul>
        <p>
          De workflow van offerte naar factuur en vervolgens naar betaling is daardoor overzichtelijk.
        </p>

        <h3>e-Boekhouden.nl</h3>
        <p>Ook e-Boekhouden.nl biedt facturatie naast de boekhouding.</p>
        <p>
          Dit is vooral interessant als je één systeem wilt gebruiken voor zowel je administratie als je
          verkoopfacturen.
        </p>

        <h3>Wie is beter voor factureren?</h3>
        <p>
          Hier zou ik <strong>Moneybird een lichte voorsprong</strong> geven als je vooral kijkt naar de
          gebruikerservaring en workflow.
        </p>
        <p>
          Maar als je vooral een goedkoop systeem zoekt waarin facturatie en boekhouding samenkomen, is
          e-Boekhouden.nl zeer interessant.
        </p>

        <h2>Boekhouding: Moneybird vs e-Boekhouden.nl</h2>
        <p>Voor de daadwerkelijke boekhouding zijn beide systemen geschikt.</p>
        <p>
          Je kunt onder andere inkomsten en kosten verwerken en je financiële administratie bijhouden.
        </p>
        <p>
          Het verschil zit meer in de manier waarop de programma&apos;s zijn opgebouwd en welke functies je belangrijk
          vindt.
        </p>

        <h3>Moneybird</h3>
        <p>
          Moneybird probeert boekhouden toegankelijk te maken voor ondernemers die niet van administratie houden.
        </p>
        <p>De kracht zit in de combinatie van:</p>
        <p>
          <strong>factureren + documenten + bank + boekhouding</strong>
        </p>
        <p>in één overzichtelijke omgeving.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>e-Boekhouden.nl biedt juist een brede boekhoudomgeving.</p>
        <p>
          Dat maakt het interessant als je relatief veel functionaliteit wilt zonder een hoog maandbedrag te betalen.
        </p>

        <h3>Wie wint?</h3>
        <p>
          Voor <strong>eenvoud en workflow:</strong> Moneybird.
        </p>
        <p>
          Voor <strong>veel functionaliteit tegen lage kosten:</strong> e-Boekhouden.nl.
        </p>

        <h2>Automatisering</h2>
        <p>
          Automatisering kan een groot verschil maken in hoeveel tijd je iedere maand aan administratie kwijt bent.
        </p>
        <p>
          Beide programma&apos;s bieden mogelijkheden om administratieve processen te automatiseren.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>banktransacties;</li>
          <li>documenten;</li>
          <li>facturen;</li>
          <li>terugkerende handelingen;</li>
          <li>btw-verwerking.</li>
        </ul>
        <p>
          Moneybird heeft daarnaast functies voor automatische documentverwerking en automatisering van administratieve
          handelingen.
        </p>
        <p>
          e-Boekhouden.nl biedt eveneens verschillende mogelijkheden om je administratie efficiënter te verwerken.
        </p>
        <p>Hier zou ik niet simpelweg één winnaar aanwijzen.</p>
        <p>
          De vraag is vooral <strong>welke automatisering je daadwerkelijk gebruikt</strong>.
        </p>
        <p>Als je een keuze maakt, kijk dan bijvoorbeeld naar:</p>
        <ul>
          <li>hoe banktransacties worden verwerkt;</li>
          <li>hoeveel je automatisch kunt laten verwerken;</li>
          <li>hoeveel handmatige controles nodig zijn;</li>
          <li>en hoe goed het programma bij jouw manier van werken past.</li>
        </ul>

        <h2>Bankkoppeling</h2>
        <p>Een bankkoppeling kan een van de grootste tijdsbesparingen zijn bij je boekhouding.</p>
        <p>
          In plaats van iedere transactie handmatig over te nemen, kunnen banktransacties rechtstreeks in je
          administratie terechtkomen.
        </p>
        <p>Zowel Moneybird als e-Boekhouden.nl ondersteunen bankkoppelingen.</p>
        <p>
          Controleer bij je keuze wel of jouw bank wordt ondersteund en wat de mogelijkheden binnen het gekozen pakket
          zijn.
        </p>
        <p>
          Een bankkoppeling is vooral interessant als je iedere maand veel zakelijke betalingen en ontvangsten hebt.
        </p>

        <h2>Btw: Moneybird vs e-Boekhouden.nl</h2>
        <p>
          Voor de meeste Nederlandse zzp&apos;ers is btw een belangrijk onderdeel van de administratie.
        </p>
        <p>Zowel Moneybird als e-Boekhouden.nl ondersteunen de btw-administratie.</p>
        <p>
          Je kunt je omzet en kosten verwerken en de btw-gegevens vanuit je administratie gebruiken voor je aangifte.
        </p>
        <p>Welke btw-behandeling je moet toepassen, hangt uiteraard af van je situatie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>21% btw;</li>
          <li>9% btw;</li>
          <li>0% btw;</li>
          <li>vrijgestelde omzet;</li>
          <li>buitenlandse klanten;</li>
          <li>of de kleineondernemersregeling.</li>
        </ul>
        <p>Een boekhoudprogramma helpt je met de administratie, maar vervangt geen fiscaal advies.</p>

        <h2>Rapportages</h2>
        <p>
          Een goed boekhoudprogramma moet je niet alleen helpen met invoeren, maar ook inzicht geven in je bedrijf.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>omzet;</li>
          <li>kosten;</li>
          <li>winst;</li>
          <li>btw;</li>
          <li>balans;</li>
          <li>openstaande facturen;</li>
          <li>financiële ontwikkeling.</li>
        </ul>
        <p>Zowel Moneybird als e-Boekhouden.nl bieden financiële overzichten en rapportages.</p>
        <p>
          Voor een kleine eenmanszaak zullen de verschillen hierin waarschijnlijk minder belangrijk zijn dan prijs en
          gebruiksgemak.
        </p>
        <p>
          Naarmate je onderneming groeit, kunnen uitgebreidere rapportages belangrijker worden.
        </p>

        <h2>Moneybird vs e-Boekhouden.nl voor zzp&apos;ers</h2>
        <p>Voor een gemiddelde zzp&apos;er zijn beide programma&apos;s interessante opties.</p>

        <h3>Moneybird past waarschijnlijk beter als je:</h3>
        <ul>
          <li>een overzichtelijk programma wilt;</li>
          <li>veel waarde hecht aan gebruiksgemak;</li>
          <li>facturen en boekhouding in één omgeving wilt;</li>
          <li>een moderne gebruikerservaring belangrijk vindt;</li>
          <li>weinig tijd aan administratie wilt besteden;</li>
          <li>en bereid bent daar wat meer voor te betalen.</li>
        </ul>
        <MoneybirdCta />

        <h3>e-Boekhouden.nl past waarschijnlijk beter als je:</h3>
        <ul>
          <li>de maandelijkse kosten laag wilt houden;</li>
          <li>veel boekhoudfunctionaliteit wilt;</li>
          <li>facturatie en boekhouding wilt combineren;</li>
          <li>zelf je administratie wilt doen;</li>
          <li>en prijs belangrijker vindt dan een zeer moderne interface.</li>
        </ul>
        <EBoekhoudenCta />

        <h2>Moneybird vs e-Boekhouden.nl voor een eenmanszaak</h2>
        <p>Beide programma&apos;s zijn geschikt voor een eenmanszaak.</p>
        <p>
          Maar ook hier geldt: <strong>een eenmanszaak is niet automatisch een eenvoudige administratie</strong>.
        </p>
        <p>
          Een freelancer met vijf klanten en weinig kosten heeft bijvoorbeeld veel minder administratie dan een
          ondernemer met tientallen klanten, veel inkopen en honderden banktransacties. Lees meer in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>

        <h3>Kleine administratie</h3>
        <p>Heb je weinig facturen en weinig kosten?</p>
        <p>Dan kan gebruiksgemak belangrijker zijn dan een enorme hoeveelheid functies.</p>

        <h3>Groeiende administratie</h3>
        <p>Krijg je steeds meer facturen en transacties?</p>
        <p>Dan worden automatisering, bankkoppelingen en rapportages belangrijker.</p>

        <h3>Prijsgevoelige ondernemer</h3>
        <p>Wil je vooral je maandelijkse kosten laag houden?</p>
        <p>Dan heeft e-Boekhouden.nl een duidelijk voordeel.</p>

        <h2>Moneybird vs e-Boekhouden.nl voor starters</h2>
        <p>Ben je net begonnen met je eenmanszaak?</p>
        <p>Dan hoef je niet meteen het duurste boekhoudpakket te nemen.</p>
        <p>Begin met de vraag:</p>
        <p>
          <strong>Hoeveel administratie verwacht ik?</strong>
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>aantal klanten;</li>
          <li>aantal facturen;</li>
          <li>zakelijke kosten;</li>
          <li>banktransacties;</li>
          <li>btw;</li>
          <li>en hoeveel administratie je zelf wilt doen.</li>
        </ul>
        <p>
          Voor starters is e-Boekhouden.nl extra interessant vanwege het huidige aanbod waarbij starters de eerste 15
          maanden gratis kunnen gebruiken.
        </p>
        <p>Moneybird biedt daarentegen een gratis proefperiode van 60 dagen.</p>
        <p>
          Dat maakt beide interessant om eerst uit te proberen voordat je een definitieve keuze maakt.
        </p>

        <h2>Moneybird of e-Boekhouden.nl: welke is goedkoper?</h2>
        <p>
          Als je puur naar de huidige prijzen kijkt, is <strong>e-Boekhouden.nl goedkoper</strong>.
        </p>
        <p>
          Het ZZP-pakket wordt momenteel voor €4,98 per maand aangeboden, terwijl Moneybird Start €15 per maand kost.
        </p>
        <p>
          Ook de mogelijkheid om als starter de eerste 15 maanden gratis te gebruiken maakt e-Boekhouden.nl
          aantrekkelijk voor iemand die vooral op de kosten let.
        </p>
        <p>Maar kijk altijd naar de normale prijs, pakketlimieten en voorwaarden.</p>
        <p>
          Een tijdelijke actie kan je keuze voor een programma op de lange termijn niet bepalen.
        </p>

        <h2>Moneybird of e-Boekhouden.nl: welke is makkelijker?</h2>
        <p>
          Als gebruiksgemak je belangrijkste criterium is, zou ik eerder naar <strong>Moneybird</strong> kijken.
        </p>
        <p>
          Moneybird is sterk gericht op een overzichtelijke gebruikerservaring en een eenvoudige workflow.
        </p>
        <p>
          e-Boekhouden.nl biedt veel functionaliteit en is daardoor vooral aantrekkelijk voor ondernemers die meer
          waarde hechten aan mogelijkheden en prijs.
        </p>
        <p>Het is uiteindelijk persoonlijk welk programma je prettiger vindt.</p>

        <h2>Wat is de beste keuze voor jou?</h2>
        <p>
          Je kunt de keuze tussen Moneybird en e-Boekhouden.nl terugbrengen tot een paar vragen.
        </p>

        <h3>Kies Moneybird als je vooral denkt:</h3>
        <blockquote>
          <p>
            “Ik wil een gebruiksvriendelijk programma waarmee mijn facturen en boekhouding gewoon overzichtelijk bij
            elkaar staan.”
          </p>
        </blockquote>

        <h3>Kies e-Boekhouden.nl als je vooral denkt:</h3>
        <blockquote>
          <p>
            “Ik wil zoveel mogelijk boekhoudfunctionaliteit voor zo weinig mogelijk geld.”
          </p>
        </blockquote>
        <p>Dat zijn allebei logische keuzes.</p>
        <p>Er is dus niet één programma dat voor iedere ondernemer de winnaar is.</p>

        <h2>Moneybird vs e-Boekhouden.nl: onze conclusie</h2>
        <p>
          <strong>
            Moneybird en e-Boekhouden.nl zijn allebei goede opties, maar ze spreken deels een ander type gebruiker aan.
          </strong>
        </p>

        <h3>🟢 Moneybird</h3>
        <p>
          <strong>Beste als je waarde hecht aan:</strong>
        </p>
        <ul>
          <li>gebruiksgemak;</li>
          <li>overzicht;</li>
          <li>facturatie;</li>
          <li>een moderne workflow;</li>
          <li>en een prettige dagelijkse gebruikerservaring.</li>
        </ul>

        <h3>🔵 e-Boekhouden.nl</h3>
        <p>
          <strong>Beste als je waarde hecht aan:</strong>
        </p>
        <ul>
          <li>lage kosten;</li>
          <li>uitgebreide boekhoudfunctionaliteit;</li>
          <li>facturatie en boekhouding in één;</li>
          <li>en veel mogelijkheden voor relatief weinig geld.</li>
        </ul>
        <p>
          <strong>Als prijs het belangrijkste is, zou ik e-Boekhouden.nl kiezen.</strong>
        </p>
        <p>
          <strong>Als gebruiksgemak het belangrijkste is, zou ik Moneybird kiezen.</strong>
        </p>
        <MoneybirdEBoekhoudenCtas />
        <p>Twijfel je nog? Dan hoef je niet meteen voor een van de twee te kiezen.</p>
        <BoekhoudCheckCta />
        <p>
          De check helpt je bepalen welk type boekhoudoplossing bij jouw situatie past en waarom. Of vergelijk Moneybird
          met Jortt in{' '}
          <Link href="/blogs/moneybird-vs-jortt" className="text-warm-orange hover:underline">
            Moneybird vs Jortt
          </Link>
          .
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is beter: Moneybird of e-Boekhouden.nl?</h3>
        <p>
          Dat hangt af van wat je belangrijk vindt. Moneybird is vooral sterk in gebruiksgemak en workflow.
          e-Boekhouden.nl onderscheidt zich vooral met prijs en uitgebreide boekhoudfunctionaliteit.
        </p>
        <h3>Wat is goedkoper: Moneybird of e-Boekhouden.nl?</h3>
        <p>
          e-Boekhouden.nl is momenteel goedkoper. Het huidige ZZP-tarief ligt onder de prijs van het instappakket van
          Moneybird. Daarnaast is er voor starters een aanbod waarbij de eerste 15 maanden gratis zijn.
        </p>
        <h3>Is Moneybird makkelijker dan e-Boekhouden.nl?</h3>
        <p>
          Moneybird legt sterk de nadruk op gebruiksgemak en overzicht. e-Boekhouden.nl heeft een bredere
          boekhoudomgeving. Welke je makkelijker vindt, blijft deels persoonlijk.
        </p>
        <h3>Kun je met Moneybird facturen maken?</h3>
        <p>Ja. Facturatie is een belangrijk onderdeel van Moneybird.</p>
        <h3>Kun je met e-Boekhouden.nl facturen maken?</h3>
        <p>Ja. e-Boekhouden.nl biedt naast boekhouding ook facturatie.</p>
        <h3>Kun je met Moneybird btw-aangifte doen?</h3>
        <p>Ja. Moneybird ondersteunt de btw-administratie en elektronische btw-aangifte.</p>
        <h3>Kun je met e-Boekhouden.nl btw-aangifte doen?</h3>
        <p>Ja. e-Boekhouden.nl ondersteunt de btw-administratie en btw-aangifte.</p>
        <h3>Is e-Boekhouden.nl gratis?</h3>
        <p>
          Voor starters is er momenteel een aanbod waarbij je de eerste 15 maanden gratis kunt gebruiken. Daarnaast
          heeft e-Boekhouden.nl betaalde pakketten. Controleer de actuele voorwaarden voordat je je aanmeldt.
        </p>
        <h3>Heeft Moneybird een gratis versie?</h3>
        <p>
          Moneybird heeft een gratis proefperiode van 60 dagen. Daarnaast zijn er verschillende betaalde pakketten.
        </p>
        <h3>Welk programma is beter voor een zzp&apos;er?</h3>
        <p>
          Voor gebruiksgemak en een overzichtelijke administratie is Moneybird interessant. Als prijs en brede
          boekhoudfunctionaliteit belangrijker zijn, is e-Boekhouden.nl interessant.
        </p>
        <h3>Welk programma past bij mijn eenmanszaak?</h3>
        <p>
          Dat hangt af van je aantal facturen, kosten, banktransacties en hoeveel administratie je zelf wilt doen.
        </p>
        <BoekhoudCheckCta />

        <h2>Veelgestelde keuze in één overzicht</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[32rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Als jij vooral...
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Dan zou ik kijken naar...
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gebruiksgemak wilt', 'Moneybird'],
                ['Lage kosten wilt', 'e-Boekhouden.nl'],
                ['Veel wilt factureren', 'Moneybird'],
                ['Veel boekhoudfunctionaliteit wilt', 'e-Boekhouden.nl'],
                ['Een eenvoudige administratie hebt', 'Beide'],
                ['Net gestart bent', 'Beide'],
                ['Maximale prijs-kwaliteit zoekt', 'e-Boekhouden.nl'],
                ['Een prettige dagelijkse workflow belangrijk vindt', 'Moneybird'],
              ].map(([als, dan]) => (
                <tr key={als} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{als}</td>
                  <td className="px-4 py-3">{dan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <strong>Nog steeds twijfel?</strong>
        </p>
        <BoekhoudCheckCta />
        <p>
          Of bekijk onze bredere vergelijking:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          . Of vergelijk Jortt met e-Boekhouden.nl in{' '}
          <Link href="/blogs/jortt-vs-eboekhouden" className="text-warm-orange hover:underline">
            Jortt vs e-Boekhouden.nl
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'jortt-vs-eboekhouden',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'moneybird-vs-jortt',
      'moneybird-vs-eboekhouden',
      'boekhoudprogramma-eenmanszaak',
      'wanneer-boekhoudsoftware-nodig-zzp',
    ],
    metaTitle: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    title: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    excerpt:
      'Jortt of e-Boekhouden.nl? Vergelijk prijs, gebruiksgemak, automatisering, facturatie, bank, btw en boekhouding en ontdek welk programma bij jou past.',
    keywords:
      'jortt vs eboekhouden, jortt of eboekhouden, jortt eboekhouden vergelijken, eboekhouden vs jortt, jortt en eboekhouden vergelijken, verschil jortt eboekhouden',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Blogs/Jortt%20vs%20e-Boekhouden.nl.jpg',
      alt: 'Jortt vs e-Boekhouden.nl: welk boekhoudprogramma past bij jou?',
    },
    datePublished: '2026-09-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is goedkoper: Jortt of e-Boekhouden.nl?',
        answer:
          'e-Boekhouden.nl is op basis van de reguliere tarieven goedkoper. Het ZZP-pakket kost €9,95 per maand tegenover €19,95 per maand voor Jortt ZZP. e-Boekhouden.nl toont momenteel bovendien een lager actueel maandtarief.',
      },
      {
        question: 'Wat is makkelijker: Jortt of e-Boekhouden.nl?',
        answer:
          'Dat hangt af van wat je onder makkelijk verstaat. Jortt legt meer nadruk op automatisering en het automatisch verwerken van je administratie. e-Boekhouden.nl biedt veel functies waarmee je zelf je administratie kunt beheren.',
      },
      {
        question: 'Welke heeft de beste automatisering?',
        answer:
          'Jortt. De Boekhoudbot is een belangrijk onderdeel van het programma en is specifiek gericht op het automatisch verwerken van de boekhouding.',
      },
      {
        question: "Kan ik met beide programma's facturen maken?",
        answer: 'Ja. Zowel Jortt als e-Boekhouden.nl bieden facturatie.',
      },
      {
        question: 'Is Jortt gratis?',
        answer:
          'Jortt heeft een gratis Starter-abonnement. Daarmee kun je onder andere facturen, offertes en uren maken, maar je krijgt niet de volledige boekhouding. Voor de boekhouding heb je een betaald abonnement nodig.',
      },
      {
        question: 'Is e-Boekhouden.nl gratis?',
        answer:
          'Voor startende ondernemers biedt e-Boekhouden.nl 15 maanden gratis gebruik. Daarnaast kun je het programma 14 dagen gratis uitproberen.',
      },
      {
        question: "Wat is beter voor een zzp'er?",
        answer:
          "Voor een zzp'er die vooral automatisering wil, is Jortt interessant. Voor een zzp'er die vooral een betaalbaar en uitgebreid boekhoudprogramma zoekt, is e-Boekhouden.nl interessant.",
      },
      {
        question: "Heb ik als zzp'er überhaupt een boekhoudprogramma nodig?",
        answer:
          'Niet per se. Als je administratie eenvoudig is, kun je deze ook zelf bijhouden. Een boekhoudprogramma wordt vooral interessant wanneer je meer transacties, kosten, facturen of administratieve handelingen krijgt.',
      },
      {
        question: 'Kan ik beginnen met een gratis factuurtool?',
        answer:
          'Ja. Als je alleen facturen wilt maken en je administratie eenvoudig is, kan een gratis factuurtool een praktische eerste stap zijn.',
      },
    ],
    content: (
      <>
        <p>
          Jortt en e-Boekhouden.nl zijn allebei populaire boekhoudprogramma&apos;s voor Nederlandse ondernemers, maar
          ze leggen verschillende accenten.
        </p>
        <p>
          <strong>Jortt richt zich sterk op automatisering.</strong> Met de Boekhoudbot probeert het programma zoveel
          mogelijk van je boekhouding automatisch te verwerken.
        </p>
        <p>
          <strong>
            e-Boekhouden.nl richt zich vooral op een uitgebreide administratie tegen een relatief lage prijs.
          </strong>{' '}
          Je krijgt veel functionaliteit zonder dat je meteen een duur abonnement nodig hebt.
        </p>
        <p>Maar welke past beter bij jou?</p>
        <p>
          In deze vergelijking bekijken we <strong>Jortt en e-Boekhouden.nl op prijs, gebruiksgemak, facturatie,
          boekhouding, automatisering, bank, btw en doelgroep.</strong>
        </p>
        <blockquote>
          <p>
            <strong>Kort samengevat:</strong> wil je vooral zo weinig mogelijk handmatig boekhouden, dan is Jortt
            interessant. Wil je vooral veel functionaliteit voor relatief weinig geld, dan is e-Boekhouden.nl
            interessant.
          </p>
        </blockquote>
        <p>
          Twijfel je nog of je überhaupt een boekhoudprogramma nodig hebt? Doe dan eerst de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          .
        </p>

        <h2>Jortt vs e-Boekhouden.nl in het kort</h2>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[40rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Jortt
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  e-Boekhouden.nl
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Gratis optie', 'Ja, Jortt Starter', '15 maanden gratis voor starters'],
                ['Betaald vanaf', '€19,95 p/m voor Jortt ZZP', '€9,95 p/m regulier voor ZZP'],
                ['Facturatie', '✓', '✓'],
                ['Boekhouding', '✓', '✓'],
                ['Btw-aangifte', '✓', '✓'],
                ['Bankkoppeling', '✓', '✓'],
                ['Automatisering', 'Zeer sterk', 'Sterk'],
                ['Boekhoudbot', '✓', '—'],
                ['Boekingen', 'Afhankelijk van pakket', 'Max. 240 bij ZZP-pakket'],
                ['Sterkste punt', 'Automatisering', 'Prijs en functionaliteit'],
                [
                  'Interessant voor',
                  'Ondernemers die weinig handmatig willen doen',
                  'Prijsbewuste ondernemers',
                ],
              ].map(([label, jortt, eboekhouden]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{label}</td>
                  <td className="px-4 py-3">{jortt}</td>
                  <td className="px-4 py-3">{eboekhouden}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>De belangrijkste vraag is daarom niet alleen <strong>welk programma beter is</strong>, maar vooral:</p>
        <p>
          <strong>
            Wil je vooral je boekhouding automatiseren, of wil je zoveel mogelijk functionaliteit voor een lage prijs?
          </strong>
        </p>

        <h2>Wat is Jortt?</h2>
        <p>Jortt is een online boekhoudprogramma dat sterk inzet op automatisering.</p>
        <p>
          Het belangrijkste onderdeel is de <strong>Boekhoudbot</strong>. Volgens Jortt kan deze een groot deel van de
          boekhouding automatisch verwerken op basis van vaste en eigen regels.
        </p>
        <p>
          Naast boekhouden kun je met Jortt onder andere facturen en offertes maken, uren registreren en e-facturen via
          Peppol verwerken.
        </p>
        <p>Jortt heeft verschillende abonnementen.</p>

        <h3>Jortt Starter</h3>
        <p>
          Jortt Starter is gratis en is vooral bedoeld voor ondernemers die willen factureren en offreren zonder
          volledige boekhouding.
        </p>
        <p>Je kunt onder andere:</p>
        <ul>
          <li>facturen maken</li>
          <li>offertes maken</li>
          <li>uren registreren</li>
          <li>projecten bijhouden</li>
          <li>Peppol-facturen versturen en ontvangen</li>
        </ul>
        <p>Boekhouding, een bankkoppeling en btw-aangifte zitten niet in de gratis versie.</p>

        <h3>Jortt ZZP</h3>
        <p>Jortt ZZP kost €19,95 per maand exclusief btw.</p>
        <p>
          Daarvoor krijg je onder andere de volledige boekhouding voor een eenmanszaak en de Boekhoudbot.
        </p>
        <p>
          Jortt richt zich hiermee duidelijk op ondernemers die zo min mogelijk tijd aan hun administratie willen
          besteden.
        </p>

        <h3>Jortt MKB en Plus</h3>
        <p>Voor ondernemers met uitgebreidere administraties zijn er Jortt MKB en Jortt Plus.</p>
        <p>
          Jortt MKB kost €24,95 per maand en Jortt Plus €34,95 per maand, exclusief btw.
        </p>
        <p>
          Welke functies je precies nodig hebt, hangt vooral af van je rechtsvorm, aantal transacties en gewenste
          automatisering.
        </p>
        <JorttCta />

        <h2>Wat is e-Boekhouden.nl?</h2>
        <p>
          e-Boekhouden.nl is een online boekhoudprogramma voor ondernemers, verenigingen en stichtingen.
        </p>
        <p>Het programma biedt onder andere:</p>
        <ul>
          <li>boekhouding</li>
          <li>facturatie</li>
          <li>relatiebeheer</li>
          <li>btw-administratie</li>
          <li>rapportages</li>
          <li>bonnen en facturen verwerken</li>
          <li>verschillende invoermogelijkheden voor je administratie</li>
        </ul>
        <p>Een belangrijk voordeel van e-Boekhouden.nl is de relatief lage prijs.</p>
        <p>
          Het ZZP-pakket heeft een reguliere prijs van €9,95 per maand en kent een maximum van 240 boekingen per
          boekjaar. Factureren is daarbij onbeperkt.
        </p>
        <p>
          Daarnaast zijn er uitgebreidere pakketten voor ondernemers die onbeperkt willen boekhouden.
        </p>
        <p>
          Voor startende ondernemers biedt e-Boekhouden.nl bovendien 15 maanden gratis gebruik.
        </p>
        <EBoekhoudenCta />

        <h2>Jortt vs e-Boekhouden.nl: prijs</h2>
        <p>Prijs is een van de grootste verschillen tussen beide programma&apos;s.</p>

        <h3>Jortt</h3>
        <p>Jortt heeft momenteel de volgende reguliere prijzen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[16rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Prijs per maand
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Starter', '€0'],
                ['ZZP', '€19,95'],
                ['MKB', '€24,95'],
                ['Plus', '€34,95'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Alle bedragen zijn exclusief btw.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>Bij e-Boekhouden.nl zijn de reguliere prijzen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[20rem] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Pakket
                </th>
                <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
                  Reguliere prijs
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['ZZP', '€9,95 p/m'],
                ['Standaard', '€14,50 p/m'],
                ['Standaard + Factureren', '€24,00 p/m'],
              ].map(([pakket, prijs]) => (
                <tr key={pakket} className="border-b border-slate-100">
                  <td className="px-4 py-3 font-medium text-slate-800">{pakket}</td>
                  <td className="px-4 py-3 text-right">{prijs}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Op dit moment toont e-Boekhouden.nl daarnaast lagere actuele maandprijzen van €4,98, €7,25 en €12,00 voor
          deze pakketten. Voor startende ondernemers is er een aanbod van 15 maanden gratis.
        </p>

        <h3>Welke is goedkoper?</h3>
        <p>
          <strong>
            e-Boekhouden.nl is duidelijk goedkoper als je alleen naar de reguliere maandprijs kijkt.
          </strong>
        </p>
        <p>
          Jortt ZZP kost €19,95 per maand, tegenover €9,95 voor het reguliere ZZP-pakket van e-Boekhouden.nl.
        </p>
        <p>Maar prijs alleen vertelt niet het hele verhaal.</p>
        <p>Je betaalt bij Jortt namelijk ook voor de nadruk op automatisering.</p>
        <p>
          Als je daardoor minder tijd kwijt bent aan je administratie, kan het prijsverschil voor sommige ondernemers
          de moeite waard zijn.
        </p>
        <p>
          Meer over prijzen lees je in{' '}
          <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            wat kost een boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Jortt vs e-Boekhouden.nl: gebruiksgemak</h2>
        <p>Gebruiksgemak is moeilijker objectief te vergelijken dan prijs.</p>
        <p>
          Het verschil zit vooral in de manier waarop beide programma&apos;s zijn ontworpen.
        </p>

        <h3>Jortt</h3>
        <p>Jortt probeert de ondernemer zo veel mogelijk werk uit handen te nemen.</p>
        <p>De Boekhoudbot is daarbij het belangrijkste voorbeeld.</p>
        <p>Het idee is simpel:</p>
        <p>
          <strong>
            niet zoveel mogelijk boekhoudhandelingen uitvoeren, maar zoveel mogelijk boekhoudhandelingen automatisch
            laten uitvoeren.
          </strong>
        </p>
        <p>Dat kan aantrekkelijk zijn als je weinig interesse hebt in boekhouden.</p>

        <h3>e-Boekhouden.nl</h3>
        <p>
          e-Boekhouden.nl biedt veel mogelijkheden voor ondernemers die hun administratie zelf willen beheren.
        </p>
        <p>
          Dat maakt het programma breed inzetbaar, maar betekent ook dat je als gebruiker meer keuzes en functies
          tegenkomt.
        </p>
        <p>
          Voor iemand die graag controle heeft over de administratie kan dat juist een voordeel zijn.
        </p>

        <h3>Winnaar op gebruiksgemak?</h3>
        <p>Er is geen universele winnaar.</p>
        <p>
          <strong>
            Jortt heeft een duidelijke voorsprong als je vooral zo weinig mogelijk handmatig werk wilt doen.
          </strong>
        </p>
        <p>
          <strong>
            e-Boekhouden.nl is interessant als je zelf je administratie wilt beheren en vooral veel functionaliteit
            zoekt voor een lage prijs.
          </strong>
        </p>

        <h2>Automatisering: Jortt vs e-Boekhouden.nl</h2>
        <p>Dit is waarschijnlijk het grootste inhoudelijke verschil tussen de twee.</p>

        <h3>Jortt: sterk gericht op automatisering</h3>
        <p>Jortt heeft de Boekhoudbot als centraal onderdeel van zijn product.</p>
        <p>
          De bot verwerkt transacties volgens boekhoudregels en kan daarbij ook eigen regels gebruiken.
        </p>
        <p>
          Jortt positioneert dit nadrukkelijk als alternatief voor veel handmatig boekhoudwerk.
        </p>
        <p>Voor een ondernemer die denkt:</p>
        <blockquote>
          <p>“Ik wil gewoon dat mijn administratie zo veel mogelijk vanzelf gaat.”</p>
        </blockquote>
        <p>is Jortt daarom interessant.</p>

        <h3>e-Boekhouden.nl: veel functionaliteit, maar een andere insteek</h3>
        <p>
          e-Boekhouden.nl biedt eveneens functies om administratie efficiënter te verwerken, zoals het scannen en
          herkennen van documenten.
        </p>
        <p>
          De focus ligt echter minder op één centrale automatische boekhoudbot.
        </p>
        <p>
          De software geeft je vooral veel mogelijkheden om je administratie zelf te verwerken en te beheren.
        </p>

        <h3>Winnaar automatisering: Jortt</h3>
        <p>
          Als automatisering voor jou het belangrijkste criterium is, heeft <strong>Jortt een duidelijk voordeel</strong>.
        </p>

        <h2>Facturen maken: Jortt vs e-Boekhouden.nl</h2>
        <p>Beide programma&apos;s ondersteunen facturatie.</p>
        <p>Met beide kun je dus meer doen dan alleen je boekhouding bijhouden.</p>
        <p>Bij Jortt zit facturatie al in de gratis Starter-versie.</p>
        <p>
          Met Jortt Starter kun je facturen en offertes maken zonder voor de volledige boekhouding te betalen.
        </p>
        <p>
          Ook e-Boekhouden.nl ondersteunt facturatie. Het ZZP-pakket biedt onbeperkt factureren en heeft daarnaast een
          maximum van 240 boekingen.
        </p>

        <h3>Alleen facturen nodig?</h3>
        <p>Dan hoef je misschien helemaal geen betaald boekhoudprogramma te nemen.</p>
        <p>Een gratis factuurtool kan dan voldoende zijn.</p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas maak je gratis een factuur zonder account
          </Link>
          .
        </p>
        <p>Je maakt de factuur, downloadt de PDF en kunt hem daarna zelf naar je klant sturen.</p>
        <p>Heb je daarnaast een volledige administratie nodig? Dan wordt een boekhoudprogramma interessanter.</p>
        <CtaButton />

        <h2>Btw-aangifte</h2>
        <p>Voor veel zzp&apos;ers is btw-administratie een belangrijk onderdeel van de keuze.</p>
        <p>Zowel Jortt als e-Boekhouden.nl ondersteunen de btw-administratie.</p>
        <p>
          Jortt biedt btw-aangifte binnen de betaalde boekhoudpakketten. e-Boekhouden.nl biedt eveneens ondersteuning
          voor de btw-administratie en btw-aangifte.
        </p>
        <p>
          Het verschil zit daarom minder in <strong>of</strong> je btw kunt verwerken en meer in hoe je de
          administratie wilt uitvoeren.
        </p>
        <p>Als je vooral zo veel mogelijk automatisch wilt laten verwerken, ligt Jortt voor de hand.</p>
        <p>
          Als je vooral een compleet en betaalbaar boekhoudpakket zoekt, is e-Boekhouden.nl interessant.
        </p>

        <h2>Bankkoppeling</h2>
        <p>Een bankkoppeling kan veel handmatig invoerwerk besparen.</p>
        <p>
          Bij Jortt is een bankkoppeling onderdeel van de betaalde boekhoudfunctionaliteit.
        </p>
        <p>
          Bij e-Boekhouden.nl kun je eveneens bankmutaties in de administratie verwerken en gebruikmaken van
          koppelingen.
        </p>
        <p>Voor de meeste ondernemers is dit geen doorslaggevend verschil.</p>
        <p>
          Het is vooral belangrijk om te kijken{' '}
          <strong>welke bank je gebruikt en welke koppeling bij het gekozen abonnement beschikbaar is</strong>.
        </p>

        <h2>Jortt vs e-Boekhouden.nl voor een eenmanszaak</h2>
        <p>Heb je een eenmanszaak?</p>
        <p>Dan zijn beide programma&apos;s geschikt.</p>
        <p>
          De keuze komt vooral neer op wat je belangrijk vindt. Meer over dit onderwerp lees je in{' '}
          <Link href="/blogs/boekhoudprogramma-eenmanszaak" className="text-warm-orange hover:underline">
            boekhoudprogramma voor een eenmanszaak
          </Link>
          .
        </p>

        <h3>Kies Jortt als je:</h3>
        <ul>
          <li>zo weinig mogelijk handmatig wilt boeken</li>
          <li>automatisering belangrijk vindt</li>
          <li>weinig interesse hebt in boekhouden</li>
          <li>bereid bent meer per maand te betalen</li>
          <li>facturatie en boekhouding in één moderne omgeving wilt combineren</li>
        </ul>

        <h3>Kies e-Boekhouden.nl als je:</h3>
        <ul>
          <li>de kosten laag wilt houden</li>
          <li>je administratie grotendeels zelf wilt doen</li>
          <li>veel functionaliteit wilt</li>
          <li>een uitgebreid boekhoudpakket zoekt</li>
          <li>prijs een belangrijk onderdeel van je beslissing vindt</li>
        </ul>

        <h2>Jortt vs e-Boekhouden.nl voor starters</h2>
        <p>Ben je net begonnen als zzp&apos;er?</p>
        <p>Dan is de situatie iets anders.</p>
        <p>Je hebt waarschijnlijk nog maar weinig facturen, kosten en transacties.</p>
        <p>Een uitgebreid boekhoudprogramma is dan niet automatisch nodig.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een gratis factuurtool en je administratie zelf bijhouden.
        </p>
        <p>Wil je direct met een boekhoudprogramma beginnen, dan hebben beide opties voordelen.</p>
        <p>
          <strong>Jortt Starter is gratis</strong> en biedt facturatie, offertes, uren en projecten, maar geen
          volledige boekhouding.
        </p>
        <p>
          <strong>e-Boekhouden.nl biedt starters 15 maanden gratis gebruik</strong> van het programma.
        </p>
        <p>
          Daarom is e-Boekhouden.nl voor een starter die meteen een volledige boekhouding wil waarschijnlijk
          interessanter vanuit kostenperspectief.
        </p>
        <p>
          Wil je eerst alleen factureren en je administratie simpel houden, dan kan Jortt Starter of een gratis
          factuurtool voldoende zijn.
        </p>

        <h2>Jortt vs e-Boekhouden.nl: wat is beter?</h2>
        <p>Dat hangt af van je prioriteiten.</p>

        <h3>Jortt is waarschijnlijk beter als...</h3>
        <p>
          Je vooral wilt dat je boekhouding <strong>zoveel mogelijk automatisch gebeurt</strong>.
        </p>
        <p>
          De hogere maandprijs is dan minder belangrijk dan de tijd die je ermee bespaart.
        </p>
        <p>
          Jortt is vooral interessant voor ondernemers die weinig zin hebben om iedere transactie zelf te verwerken.
        </p>
        <p>
          <strong>Sterkste punt: automatisering.</strong>
        </p>

        <h3>e-Boekhouden.nl is waarschijnlijk beter als...</h3>
        <p>
          Je vooral zoekt naar een <strong>betaalbaar en uitgebreid boekhoudprogramma</strong>.
        </p>
        <p>
          Je krijgt veel functionaliteit voor een relatief lage maandprijs en kunt je administratie zelf beheren.
        </p>
        <p>
          <strong>Sterkste punt: prijs en functionaliteit.</strong>
        </p>

        <h2>Wat als je nog helemaal geen boekhoudprogramma nodig hebt?</h2>
        <p>Dit is een vraag die vaak wordt overgeslagen bij vergelijkingen.</p>
        <p>
          Niet iedere zzp&apos;er heeft vanaf dag één betaalde boekhoudsoftware nodig.
        </p>
        <p>Als je bijvoorbeeld:</p>
        <ul>
          <li>weinig facturen verstuurt</li>
          <li>weinig zakelijke kosten hebt</li>
          <li>weinig banktransacties hebt</li>
          <li>je administratie zelf kunt bijhouden</li>
          <li>en geen behoefte hebt aan automatisering</li>
        </ul>
        <p>dan kan een eenvoudige administratie voldoende zijn.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een gratis factuurtool en je inkomsten en uitgaven zelf bijhouden.
        </p>
        <p>Wordt je administratie groter?</p>
        <p>Dan kun je later overstappen naar boekhoudsoftware.</p>
        <p>
          Dat voorkomt dat je vanaf het begin betaalt voor functies die je nog nauwelijks gebruikt.
        </p>
        <BoekhoudCheckCta />

        <h2>Jortt of e-Boekhouden.nl: onze conclusie</h2>
        <p>Er is geen winnaar voor iedere ondernemer.</p>
        <p>
          <strong>
            Jortt is de betere keuze als automatisering voor jou het belangrijkste is.
          </strong>
        </p>
        <p>
          De Boekhoudbot is het onderscheidende onderdeel en maakt Jortt vooral interessant voor ondernemers die zo
          weinig mogelijk handmatig boekhoudwerk willen doen.
        </p>
        <p>
          <strong>
            e-Boekhouden.nl is de betere keuze als prijs en uitgebreide functionaliteit belangrijker zijn.
          </strong>
        </p>
        <p>
          De reguliere prijs van het ZZP-pakket ligt aanzienlijk lager dan Jortt ZZP en je krijgt een breed pakket voor
          het bijhouden van je administratie.
        </p>

        <h3>In één zin:</h3>
        <p>
          <strong>Jortt = minder handmatig werk.</strong>
        </p>
        <p>
          <strong>e-Boekhouden.nl = veel functionaliteit voor relatief weinig geld.</strong>
        </p>
        <p>
          En als je eigenlijk alleen facturen hoeft te maken, heb je misschien helemaal geen betaald
          boekhoudprogramma nodig.
        </p>
        <JorttEBoekhoudenCtas />

        <h2>Veelgestelde vragen over Jortt en e-Boekhouden.nl</h2>
        <h3>Wat is goedkoper: Jortt of e-Boekhouden.nl?</h3>
        <p>
          e-Boekhouden.nl is op basis van de reguliere tarieven goedkoper. Het ZZP-pakket kost €9,95 per maand
          tegenover €19,95 per maand voor Jortt ZZP. e-Boekhouden.nl toont momenteel bovendien een lager actueel
          maandtarief.
        </p>
        <h3>Wat is makkelijker: Jortt of e-Boekhouden.nl?</h3>
        <p>
          Dat hangt af van wat je onder makkelijk verstaat. Jortt legt meer nadruk op automatisering en het
          automatisch verwerken van je administratie. e-Boekhouden.nl biedt veel functies waarmee je zelf je
          administratie kunt beheren.
        </p>
        <h3>Welke heeft de beste automatisering?</h3>
        <p>
          Jortt. De Boekhoudbot is een belangrijk onderdeel van het programma en is specifiek gericht op het
          automatisch verwerken van de boekhouding.
        </p>
        <h3>Kan ik met beide programma&apos;s facturen maken?</h3>
        <p>Ja. Zowel Jortt als e-Boekhouden.nl bieden facturatie.</p>
        <h3>Is Jortt gratis?</h3>
        <p>
          Jortt heeft een gratis Starter-abonnement. Daarmee kun je onder andere facturen, offertes en uren maken,
          maar je krijgt niet de volledige boekhouding. Voor de boekhouding heb je een betaald abonnement nodig.
        </p>
        <h3>Is e-Boekhouden.nl gratis?</h3>
        <p>
          Voor startende ondernemers biedt e-Boekhouden.nl 15 maanden gratis gebruik. Daarnaast kun je het programma
          14 dagen gratis uitproberen.
        </p>
        <h3>Wat is beter voor een zzp&apos;er?</h3>
        <p>
          Voor een zzp&apos;er die vooral automatisering wil, is Jortt interessant. Voor een zzp&apos;er die vooral
          een betaalbaar en uitgebreid boekhoudprogramma zoekt, is e-Boekhouden.nl interessant.
        </p>
        <h3>Heb ik als zzp&apos;er überhaupt een boekhoudprogramma nodig?</h3>
        <p>
          Niet per se. Als je administratie eenvoudig is, kun je deze ook zelf bijhouden. Een boekhoudprogramma wordt
          vooral interessant wanneer je meer transacties, kosten, facturen of administratieve handelingen krijgt.
        </p>
        <p>
          <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">
            Lees wanneer je als zzp&apos;er een boekhoudprogramma nodig hebt →
          </Link>
        </p>
        <h3>Kan ik beginnen met een gratis factuurtool?</h3>
        <p>
          Ja. Als je alleen facturen wilt maken en je administratie eenvoudig is, kan een gratis factuurtool een
          praktische eerste stap zijn.
        </p>
        <CtaButton />

        <h2>Bekijk ook</h2>
        <ul>
          <li>
            <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Beste boekhoudprogramma voor zzp&apos;ers vergelijken
            </Link>
          </li>
          <li>
            <Link href="/blogs/moneybird-vs-jortt" className="text-warm-orange hover:underline">
              Moneybird vs Jortt
            </Link>
          </li>
          <li>
            <Link href="/blogs/moneybird-vs-eboekhouden" className="text-warm-orange hover:underline">
              Moneybird vs e-Boekhouden.nl
            </Link>
          </li>
          <li>
            <Link href="/gidsen/kosten-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Wat kost een boekhoudprogramma voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/gidsen/gratis-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
              Gratis boekhoudprogramma voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
              Doe de boekhoudprogramma-check
            </Link>
          </li>
        </ul>
        <BoekhoudCheckCta />
      </>
    ),
  },
  {
    slug: 'wanneer-boekhoudsoftware-nodig-zzp',
    relatedSlugs: [
      'beste-boekhoudprogramma-zzp',
      'gratis-factuurtool-vs-boekhoudprogramma',
      'factuur-maken-zzp',
      'gratis-factuur-zzp',
      'boekhoudprogramma-eenmanszaak',
    ],
    metaTitle: "Heb ik als zzp'er een boekhoudprogramma nodig?",
    title: "Heb ik als zzp'er een boekhoudprogramma nodig?",
    excerpt:
      "Heb je als zzp'er een boekhoudprogramma nodig? Lees wanneer boekhoudsoftware handig wordt, wanneer een factuurtool genoeg is en wanneer je kunt overstappen.",
    keywords:
      "boekhoudprogramma nodig zzp, wanneer boekhoudsoftware nodig zzp, zzp boekhouding, boekhoudsoftware zzp, zelf boekhouden zzp, factuurprogramma of boekhoudprogramma",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Wanneer%20heb%20je%20boekhoudsoftware%20nodig%20als%20zzper.png',
      alt: "Heb ik als zzp'er een boekhoudprogramma nodig? Wanneer overstappen.",
    },
    datePublished: '2026-02-01',
    dateModified: '2026-09-05',
    faq: [
      {
        question: "Moet een zzp'er een boekhoudprogramma hebben?",
        answer:
          'Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede administratie bijhouden.',
      },
      {
        question: "Wanneer is een boekhoudprogramma handig voor een zzp'er?",
        answer:
          'Vooral wanneer je administratie groter wordt en je meerdere soorten gegevens moet verwerken, zoals verkoopfacturen, inkoopfacturen, bonnetjes, banktransacties en btw.',
      },
      {
        question: "Kan ik als zzp'er boekhouden zonder software?",
        answer:
          'Ja. Je kunt bijvoorbeeld met Excel of een andere administratie werken. Voor grotere administraties kan software wel veel tijd en handmatig werk besparen.',
      },
      {
        question: 'Is een factuurprogramma hetzelfde als een boekhoudprogramma?',
        answer:
          'Nee. Een factuurprogramma is vooral bedoeld om facturen te maken en te beheren. Een boekhoudprogramma richt zich op de bredere financiële administratie van je onderneming.',
      },
      {
        question: 'Wanneer moet ik overstappen naar een boekhoudprogramma?',
        answer:
          'Er is geen vast moment. Een goed moment is bijvoorbeeld wanneer je administratie veel tijd kost, je veel transacties hebt of je meer inzicht en automatisering wilt.',
      },
      {
        question: 'Kan ik eerst een factuurprogramma gebruiken en later boekhoudsoftware?',
        answer:
          'Ja. Je kunt prima beginnen met een eenvoudige factuurtool en later overstappen naar of aanvullen met boekhoudsoftware wanneer je administratie daarom vraagt.',
      },
    ],
    content: (
      <>
        <p>
          Heb je als zzp&apos;er een <strong>boekhoudprogramma nodig</strong>, of kun je je administratie ook zonder
          software bijhouden?
        </p>
        <p>
          Als je net begint met ondernemen, heb je misschien maar een paar facturen per maand en weinig kosten. Dan
          kan een eenvoudige factuurtool voldoende zijn. Naarmate je meer inkomsten, uitgaven en administratie krijgt,
          wordt boekhoudsoftware steeds interessanter.
        </p>
        <p>
          In dit artikel leggen we uit <strong>wanneer een boekhoudprogramma handig wordt</strong>, wat je zonder
          boekhoudsoftware kunt doen en wanneer het verstandig is om over te stappen.
        </p>
        <p>
          Twijfel je of jij er al één nodig hebt? Doe de gratis{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en ontdek of een factuurtool, basissoftware, compleet boekhoudprogramma of een boekhouder naast software
          waarschijnlijk beter past. Wil je weten hoe je je administratie zelf kunt organiseren? Lees{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf boekhouden als zzp&apos;er
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Heb je als zzp&apos;er verplicht een boekhoudprogramma nodig?</h2>
        <p>
          <strong>Nee.</strong> Als zzp&apos;er ben je niet verplicht om een specifiek boekhoudprogramma te gebruiken.
        </p>
        <p>
          Je moet wel een administratie bijhouden en je financiële gegevens kunnen onderbouwen. Hoe je die
          administratie organiseert, is niet hetzelfde als de keuze voor bepaalde software.
        </p>
        <p>Je kunt bijvoorbeeld werken met:</p>
        <ul>
          <li>een boekhoudprogramma;</li>
          <li>spreadsheets zoals Excel;</li>
          <li>een combinatie van verschillende tools;</li>
          <li>of een boekhouder die (een deel van) je administratie verzorgt.</li>
        </ul>
        <p>
          De vraag is daarom meestal niet <strong>“moet ik een boekhoudprogramma hebben?”</strong>, maar:
        </p>
        <blockquote>
          <strong>
            Wanneer bespaart boekhoudsoftware mij genoeg tijd en werk om het de moeite waard te maken?
          </strong>
        </blockquote>

        <h2>Wanneer is een boekhoudprogramma handig?</h2>
        <p>
          Een boekhoudprogramma wordt vooral interessant wanneer je administratie meer wordt dan alleen facturen
          maken.
        </p>
        <p>Denk bijvoorbeeld aan deze situaties:</p>
        <ul>
          <li>
            je hebt regelmatig <strong>inkoopfacturen en bonnetjes</strong>;
          </li>
          <li>je hebt veel zakelijke transacties;</li>
          <li>
            je wilt je <strong>bankrekening koppelen</strong>;
          </li>
          <li>je wilt automatisch inzicht in inkomsten en uitgaven;</li>
          <li>
            je wilt makkelijker je <strong>btw-administratie</strong> bijhouden;
          </li>
          <li>je wilt weten hoeveel winst je maakt;</li>
          <li>je wilt je administratie op één plek bewaren;</li>
          <li>je bent steeds meer tijd kwijt aan Excel of losse bestanden.</li>
        </ul>
        <p>
          Hoe meer van deze punten op jou van toepassing zijn, hoe groter de kans dat boekhoudsoftware handig wordt.
        </p>

        <h2>Wanneer heb je nog geen boekhoudprogramma nodig?</h2>
        <p>Als je net start als zzp&apos;er, kan je administratie heel overzichtelijk zijn.</p>
        <p>Stel dat je:</p>
        <ul>
          <li>één of enkele klanten hebt;</li>
          <li>weinig zakelijke kosten maakt;</li>
          <li>maar een paar facturen per maand verstuurt;</li>
          <li>geen personeel hebt;</li>
          <li>en je administratie zelf goed kunt bijhouden.</li>
        </ul>
        <p>Dan hoef je niet automatisch direct een uitgebreid boekhoudprogramma te nemen.</p>
        <p>
          Je kunt bijvoorbeeld beginnen met een eenvoudige factuurtool voor je verkoopfacturen en je overige
          administratie op een andere manier bijhouden.
        </p>
        <p>
          Met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          kun je gratis een professionele factuur maken zonder account. Je downloadt de factuur vervolgens als PDF en
          verstuurt deze zelf naar je klant.
        </p>
        <CtaButton />

        <h2>Wanneer wordt boekhoudsoftware wél interessant?</h2>
        <p>
          Er is geen vast aantal facturen waarbij je moet overstappen. Voor de ene zzp&apos;er is een
          boekhoudprogramma al snel handig, terwijl een ander met een kleine administratie prima zonder kan werken.
        </p>
        <p>Een paar praktische signalen:</p>

        <h3>1. Je krijgt steeds meer inkoopfacturen</h3>
        <p>
          Niet alleen je verkoopfacturen moeten worden bijgehouden. Ook zakelijke kosten, bonnetjes en inkoopfacturen
          horen bij je administratie.
        </p>
        <p>Als je die steeds handmatig moet verwerken, kan software veel overzicht geven.</p>

        <h3>2. Je hebt veel banktransacties</h3>
        <p>
          Als je tientallen of honderden zakelijke transacties per maand hebt, wordt handmatig bijhouden al snel
          onpraktisch.
        </p>
        <p>
          Met een boekhoudprogramma dat een bankkoppeling ondersteunt, kunnen transacties automatisch in je
          administratie terechtkomen.
        </p>

        <h3>3. Je wilt sneller btw-overzicht</h3>
        <p>
          Je administratie moet aansluiten op je btw-aangifte. Software kan helpen om inkomsten, kosten en btw
          overzichtelijk bij te houden.
        </p>
        <p>
          Dat betekent niet dat je verplicht een boekhoudprogramma moet gebruiken voor je btw-aangifte. Het voordeel
          zit vooral in het verminderen van handmatig werk en het overzicht.
        </p>

        <h3>4. Je wilt weten hoeveel je echt verdient</h3>
        <p>
          Een factuur laat zien hoeveel je aan klanten hebt gefactureerd. Dat is iets anders dan inzicht in je winst.
        </p>
        <p>
          Zodra je ook kosten en andere financiële gegevens gaat bijhouden, kan een boekhoudprogramma helpen om een
          beter beeld van je onderneming te krijgen.
        </p>

        <h3>5. Je administratie kost te veel tijd</h3>
        <p>Dit is misschien wel het belangrijkste signaal.</p>
        <p>Als je iedere maand veel tijd kwijt bent aan:</p>
        <ul>
          <li>facturen verwerken;</li>
          <li>bonnetjes bewaren;</li>
          <li>inkomsten en uitgaven bijhouden;</li>
          <li>btw berekenen;</li>
          <li>banktransacties controleren;</li>
          <li>en overzichten maken,</li>
        </ul>
        <p>
          dan kan de tijdsbesparing van boekhoudsoftware belangrijker worden dan de maandelijkse kosten.
        </p>

        <h2>Kun je als zzp&apos;er zonder boekhoudprogramma boekhouden?</h2>
        <p>
          <strong>Ja.</strong>
        </p>
        <p>Een boekhoudprogramma is een hulpmiddel, geen verplicht onderdeel van het ondernemerschap.</p>
        <p>
          Je kunt je administratie bijvoorbeeld met Excel of andere systemen bijhouden. Belangrijk is vooral dat je
          administratie volledig en controleerbaar is en dat je je gegevens bewaart volgens de geldende regels.
        </p>
        <p>Voor een kleine administratie kan dat prima werken.</p>
        <p>
          Het nadeel is dat je meer zelf moet doen. Naarmate je administratie groeit, kunnen fouten en dubbel werk
          daardoor sneller ontstaan.
        </p>

        <h2>Factuurprogramma of boekhoudprogramma?</h2>
        <p>
          Een <strong>factuurprogramma</strong> en een <strong>boekhoudprogramma</strong> hebben een ander doel.
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col" />
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Verkoopfacturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen bewaren</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkoopfacturen verwerken</td>
                <td className="px-4 py-3">Beperkt/niet altijd</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Bank koppelen</td>
                <td className="px-4 py-3">Niet altijd</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten en uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-overzicht</td>
                <td className="px-4 py-3">Afhankelijk van tool</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Winst en verlies</td>
                <td className="px-4 py-3">Meestal niet</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Uitgebreide administratie</td>
                <td className="px-4 py-3">Nee</td>
                <td className="px-4 py-3">✓</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Een factuurprogramma kan dus voldoende zijn als je vooral snel en netjes facturen wilt maken.
        </p>
        <p>
          Een boekhoudprogramma wordt interessanter zodra je <strong>de rest van je administratie</strong> ook centraal
          wilt bijhouden.
        </p>
        <p>
          Wil je precies weten wat het verschil is en wanneer je welke oplossing nodig hebt? Bekijk dan ook onze
          vergelijking tussen een{' '}
          <Link href="/blogs/gratis-factuurtool-vs-boekhoudprogramma" className="text-warm-orange hover:underline">
            factuurprogramma en boekhoudprogramma
          </Link>
          .
        </p>

        <h2>Zelf boekhouden of een boekhouder inschakelen?</h2>
        <p>Een boekhoudprogramma betekent niet automatisch dat je alles zelf moet doen.</p>
        <p>Er zijn grofweg drie mogelijkheden:</p>

        <h3>Alles zelf doen</h3>
        <p>
          Je houdt zelf je administratie bij, doet je aangiftes en bewaakt je financiële administratie.
        </p>
        <p>
          Dit kan interessant zijn als je administratie eenvoudig is en je voldoende tijd en kennis hebt.
        </p>

        <h3>Software gebruiken en zelf de administratie doen</h3>
        <p>
          Je gebruikt boekhoudsoftware voor je dagelijkse administratie en houdt zelf controle over je cijfers.
        </p>
        <p>Een boekhouder kan eventueel meekijken of helpen met bepaalde aangiftes.</p>

        <h3>De administratie uitbesteden</h3>
        <p>Je laat een boekhouder een groot deel of de volledige administratie verzorgen.</p>
        <p>Dit kost meer geld, maar kan veel tijd besparen.</p>
        <p>
          Voor veel zzp&apos;ers is een combinatie interessant:{' '}
          <strong>
            zelf de dagelijkse administratie bijhouden en een boekhouder inschakelen voor controle of complexere
            fiscale zaken.
          </strong>
        </p>

        <h2>Wat kost een boekhoudprogramma voor zzp&apos;ers?</h2>
        <p>De prijs verschilt sterk per aanbieder en pakket.</p>
        <p>
          Er zijn eenvoudige pakketten voor een relatief laag maandbedrag en uitgebreidere boekhoudprogramma&apos;s
          die meer kosten.
        </p>
        <p>Let daarom niet alleen op de prijs. Kijk vooral naar wat je daadwerkelijk nodig hebt:</p>
        <ul>
          <li>facturen;</li>
          <li>inkoop;</li>
          <li>bankkoppeling;</li>
          <li>btw-administratie;</li>
          <li>rapportages;</li>
          <li>automatische verwerking;</li>
          <li>ondersteuning;</li>
          <li>en eventuele extra kosten.</li>
        </ul>
        <p>
          Als je nog maar weinig administratie hebt, kan een betaald boekhoudprogramma relatief weinig waarde
          toevoegen. Als je er iedere maand meerdere uren mee bespaart, kan de prijs juist makkelijk opwegen tegen de
          tijd die je bespaart.
        </p>

        <h2>Welk boekhoudprogramma past bij een zzp&apos;er?</h2>
        <p>
          Als je hebt besloten dat boekhoudsoftware voor jou interessant is, zijn er verschillende opties.
        </p>
        <p>Voor Nederlandse zzp&apos;ers kun je bijvoorbeeld kijken naar:</p>
        <ul>
          <li>
            <strong>Moneybird</strong>
          </li>
          <li>
            <strong>Jortt</strong>
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong>
          </li>
        </ul>
        <p>
          De verschillen zitten onder andere in prijs, gebruiksgemak, automatisering, functies en de manier waarop je
          administratie wordt verwerkt.
        </p>
        <p>
          Wil je deze opties vergelijken? Bekijk dan onze uitgebreide gids:{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            Beste boekhoudprogramma voor zzp&apos;ers: vergelijk de opties
          </Link>
          .
        </p>

        <h2>Wanneer zou ik overstappen?</h2>
        <p>Je hoeft niet per se vanaf dag één een uitgebreid boekhoudprogramma te gebruiken.</p>
        <p>Een praktische aanpak kan zijn:</p>
        <p>
          <strong>Start → eenvoudige administratie → groei → meer transacties → boekhoudsoftware</strong>
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Fase 1:</strong> je hebt een paar klanten en weinig kosten
          <br />→ eenvoudige factuurtool + eigen administratie
        </p>
        <p>
          <strong>Fase 2:</strong> je krijgt meer klanten en zakelijke kosten
          <br />→ kijk naar software voor je volledige administratie
        </p>
        <p>
          <strong>Fase 3:</strong> je hebt veel transacties en wilt automatiseren
          <br />→ boekhoudprogramma met bijvoorbeeld bankkoppeling en btw-overzicht
        </p>
        <p>
          <strong>Fase 4:</strong> je administratie wordt complex of kost te veel tijd
          <br />→ boekhoudsoftware combineren met een boekhouder of administratie uitbesteden
        </p>
        <p>
          Er is dus geen magisch moment waarop iedere zzp&apos;er een boekhoudprogramma moet aanschaffen.
        </p>

        <h2>Conclusie: heb ik een boekhoudprogramma nodig?</h2>
        <p>
          <strong>Nee, niet per se.</strong>
        </p>
        <p>
          Als zzp&apos;er kun je je administratie ook zonder boekhoudprogramma bijhouden. Zeker als je net begint en
          maar weinig facturen en kosten hebt, kan een eenvoudige oplossing voldoende zijn.
        </p>
        <p>
          Een <strong>boekhoudprogramma wordt vooral interessant zodra je administratie groeit</strong>. Denk aan
          meer inkoopfacturen, veel banktransacties, meer zakelijke kosten, behoefte aan btw-overzicht of de wens om
          sneller inzicht in je winst te krijgen.
        </p>
        <p>
          Begin daarom niet met meer software dan je nodig hebt. Maar wacht ook niet te lang als je administratie
          zoveel tijd kost dat automatisering zichzelf kan terugverdienen.
        </p>
        <p>
          Wil je vervolgens bepalen <strong>welk programma het beste bij jouw situatie past?</strong>
        </p>
        <p>
          Begin met de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>
          : je krijgt in een paar vragen een indicatie van het type oplossing dat bij jouw administratie past.
          Daarna kun je concreet vergelijken in onze{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            vergelijking van de beste boekhoudprogramma&apos;s voor zzp&apos;ers
          </Link>
          .
        </p>
        <BoekhoudCheckCta />
        <p>
          Liever alleen snel een factuur maken?{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            Maak gratis een factuur met FactuurBaas →
          </Link>
        </p>
        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Moet een zzp&apos;er een boekhoudprogramma hebben?</h3>
        <p>
          Nee. Je bent niet verplicht om een specifiek boekhoudprogramma te gebruiken. Je moet wel een goede
          administratie bijhouden.
        </p>
        <h3>Wanneer is een boekhoudprogramma handig voor een zzp&apos;er?</h3>
        <p>
          Vooral wanneer je administratie groter wordt en je meerdere soorten gegevens moet verwerken, zoals
          verkoopfacturen, inkoopfacturen, bonnetjes, banktransacties en btw.
        </p>
        <h3>Kan ik als zzp&apos;er boekhouden zonder software?</h3>
        <p>
          Ja. Je kunt bijvoorbeeld met Excel of een andere administratie werken. Voor grotere administraties kan
          software wel veel tijd en handmatig werk besparen.
        </p>
        <h3>Is een factuurprogramma hetzelfde als een boekhoudprogramma?</h3>
        <p>
          Nee. Een factuurprogramma is vooral bedoeld om facturen te maken en te beheren. Een boekhoudprogramma richt
          zich op de bredere financiële administratie van je onderneming.
        </p>
        <h3>Wanneer moet ik overstappen naar een boekhoudprogramma?</h3>
        <p>
          Er is geen vast moment. Een goed moment is bijvoorbeeld wanneer je administratie veel tijd kost, je veel
          transacties hebt of je meer inzicht en automatisering wilt.
        </p>
        <h3>Kan ik eerst een factuurprogramma gebruiken en later boekhoudsoftware?</h3>
        <p>
          Ja. Je kunt prima beginnen met een eenvoudige factuurtool en later overstappen naar of aanvullen met
          boekhoudsoftware wanneer je administratie daarom vraagt.
        </p>
      </>
    )
  },
  {
    slug: 'gratis-factuurtool-vs-boekhoudprogramma',
    relatedSlugs: [
      'factureren-zonder-account',
      'wanneer-boekhoudsoftware-nodig-zzp',
      'beste-boekhoudprogramma-zzp',
      'gratis-factuur-zzp',
      'factuur-maken-zzp',
    ],
    metaTitle: 'Factuurprogramma of boekhoudprogramma? Wat heb je nodig?',
    title: 'Factuurprogramma of boekhoudprogramma: wat heb je nodig?',
    excerpt:
      "Heb je als zzp'er genoeg aan een gratis factuurprogramma of heb je een boekhoudprogramma nodig? Vergelijk de verschillen, kosten en mogelijkheden.",
    keywords:
      "factuurprogramma of boekhoudprogramma, gratis factuurprogramma zzp, boekhoudprogramma zzp, factuurtool vs boekhoudsoftware, gratis facturen maken zzp",
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Gratis%20factuurtool%20vs%20boekhoudprogramma.png',
      alt: "Factuurprogramma of boekhoudprogramma: wat heb je nodig als zzp'er?",
    },
    datePublished: '2026-02-05',
    dateModified: '2026-09-05',
    faq: [
      {
        question: 'Wat is het verschil tussen een factuurprogramma en een boekhoudprogramma?',
        answer:
          'Een factuurprogramma richt zich voornamelijk op het maken van facturen. Een boekhoudprogramma biedt daarnaast functies voor een bredere administratie, zoals inkomsten, uitgaven, btw en andere administratieve processen.',
      },
      {
        question: "Heb ik als zzp'er een boekhoudprogramma nodig?",
        answer:
          'Niet alleen om facturen te maken. Als je administratie groter of complexer wordt, kan een boekhoudprogramma wel veel overzicht en tijdwinst opleveren.',
      },
      {
        question: 'Wat is een gratis factuurprogramma?',
        answer:
          'Een gratis factuurprogramma is software waarmee je zonder betaling facturen kunt maken. De functies verschillen per programma. Met FactuurBaas kun je gratis een professionele factuur maken zonder account of abonnement.',
      },
      {
        question: 'Is een gratis boekhoudprogramma echt gratis?',
        answer:
          "Dat verschilt per aanbieder. Sommige programma's hebben een gratis versie met beperkingen of een gratis proefperiode. Controleer daarom altijd welke functies daadwerkelijk gratis zijn.",
      },
      {
        question: "Kan ik als zzp'er gratis een factuur maken?",
        answer:
          'Ja. Dat kan bijvoorbeeld met een online factuurmaker, Word of Excel. Met FactuurBaas kun je direct gratis online een factuur maken en deze als PDF downloaden.',
      },
      {
        question: 'Kan ik een factuur maken zonder account?',
        answer:
          'Ja. Met FactuurBaas kun je zonder account een factuur maken en de PDF direct downloaden.',
      },
      {
        question: 'Is FactuurBaas een boekhoudprogramma?',
        answer:
          'Nee. FactuurBaas richt zich op het eenvoudig maken van facturen. Als je een volledige boekhouding wilt bijhouden, is een uitgebreider boekhoudprogramma waarschijnlijk geschikter.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er wil je je administratie goed regelen, maar je hebt niet altijd een uitgebreid
          boekhoudprogramma nodig.
        </p>
        <p>
          Misschien wil je gewoon snel een factuur maken en als PDF downloaden. Maar misschien wil je daarnaast ook
          je inkomsten en uitgaven bijhouden, je btw-administratie regelen en meer van je boekhouding
          automatiseren.
        </p>
        <p>
          <strong>Wat heb je dan nodig: een factuurprogramma of een boekhoudprogramma?</strong>
        </p>
        <p>
          In dit artikel leggen we het verschil uit en bekijken we wanneer een gratis factuurprogramma zoals
          FactuurBaas voldoende kan zijn en wanneer een uitgebreider boekhoudprogramma interessanter wordt.
        </p>
        <p>
          Nog niet zeker welke richting bij jou past? Doe de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          en krijg direct een indicatie op basis van je situatie. Of lees eerst hoe je{' '}
          <Link href="/gidsen/zelf-boekhouden-zzp" className="text-warm-orange hover:underline">
            zelf je boekhouding als zzp&apos;er aanpakt
          </Link>
          .
        </p>
        <BoekhoudCheckCta />

        <h2>Factuurprogramma vs. boekhoudprogramma</h2>
        <p>Het belangrijkste verschil is eenvoudig:</p>
        <p>
          <strong>
            Een factuurprogramma is vooral bedoeld om facturen te maken. Een boekhoudprogramma is bedoeld om je
            bredere financiële administratie bij te houden.
          </strong>
        </p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Functie
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Factuurprogramma
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Boekhoudprogramma
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen maken</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw op facturen berekenen</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Facturen als PDF downloaden</td>
                <td className="px-4 py-3">✓</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Klantgegevens gebruiken</td>
                <td className="px-4 py-3">Vaak</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Inkomsten bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Uitgaven bijhouden</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Btw-administratie</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Banktransacties verwerken</td>
                <td className="px-4 py-3">Meestal niet</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Administratie automatiseren</td>
                <td className="px-4 py-3">Beperkt</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="px-4 py-3">Volledige boekhouding</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">✓</td>
              </tr>
              <tr>
                <td className="px-4 py-3">Offertes</td>
                <td className="px-4 py-3">Soms</td>
                <td className="px-4 py-3">Vaak</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          De precieze functies verschillen per programma. Een factuurprogramma kan bijvoorbeeld extra functies bieden,
          terwijl een boekhoudprogramma verschillende abonnementsniveaus kan hebben.
        </p>

        <h2>Wanneer heb je alleen een factuurprogramma nodig?</h2>
        <p>Een eenvoudig factuurprogramma kan voldoende zijn als je vooral facturen wilt maken.</p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>maar enkele facturen per maand maakt</li>
          <li>weinig zakelijke transacties hebt</li>
          <li>je administratie op een andere manier bijhoudt</li>
          <li>geen uitgebreide automatisering nodig hebt</li>
          <li>vooral snel een professionele factuur wilt maken</li>
          <li>geen betaald boekhoudpakket wilt gebruiken</li>
        </ul>
        <p>In dat geval kan een volledig boekhoudprogramma onnodig uitgebreid zijn.</p>
        <p>Je betaalt dan mogelijk voor functies die je nauwelijks gebruikt.</p>

        <h2>Wanneer is een boekhoudprogramma interessanter?</h2>
        <p>Een boekhoudprogramma wordt interessanter wanneer je meer wilt doen dan alleen facturen maken.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>inkomsten en uitgaven bijhouden</li>
          <li>zakelijke kosten verwerken</li>
          <li>banktransacties verwerken</li>
          <li>btw-administratie bijhouden</li>
          <li>je administratie automatiseren</li>
          <li>financiële overzichten bekijken</li>
          <li>meerdere administratieve processen vanuit één programma regelen</li>
        </ul>
        <p>
          Hoe groter je administratie wordt, hoe meer voordeel een uitgebreider boekhoudprogramma kan bieden.
        </p>

        <h2>Gratis factuurprogramma voor zzp&apos;ers</h2>
        <p>
          Wil je alleen een factuur maken? Dan hoef je daarvoor niet automatisch een betaald boekhoudprogramma te
          nemen.
        </p>
        <p>
          Met <strong>FactuurBaas</strong> kun je gratis online een professionele factuur maken. Je hebt daarvoor geen
          account of abonnement nodig.
        </p>
        <p>Je kunt:</p>
        <ul>
          <li>gratis een factuur maken</li>
          <li>bedrijfs- en klantgegevens invullen</li>
          <li>meerdere producten of diensten toevoegen</li>
          <li>btw automatisch laten berekenen</li>
          <li>verschillende btw-percentages gebruiken</li>
          <li>een professionele factuur opmaken</li>
          <li>de factuur direct als PDF downloaden</li>
        </ul>
        <p>Je maakt de factuur online en kunt de PDF daarna zelf naar je klant sturen.</p>
        <CtaButton />

        <h2>Factuurprogramma of boekhoudprogramma: wat is goedkoper?</h2>
        <p>Dat hangt af van wat je nodig hebt.</p>
        <p>
          Een gratis factuurprogramma kan de goedkoopste oplossing zijn als je alleen facturen wilt maken. Je hebt dan
          geen abonnement nodig voor een uitgebreide administratie die je misschien niet gebruikt.
        </p>
        <p>
          Een boekhoudprogramma kost vaak geld, maar daar krijg je ook meer functies voor terug.
        </p>
        <p>De belangrijkste vraag is daarom niet:</p>
        <p>
          <strong>“Wat is het goedkoopste programma?”</strong>
        </p>
        <p>Maar:</p>
        <p>
          <strong>“Welke functies heb ik daadwerkelijk nodig?”</strong>
        </p>
        <p>
          Als je drie facturen per maand maakt en weinig administratie hebt, kan een eenvoudige factuurtool logisch
          zijn.
        </p>
        <p>
          Heb je tientallen transacties, zakelijke kosten en veel administratief werk? Dan kan een boekhoudprogramma
          uiteindelijk juist voordeliger zijn omdat het tijd bespaart.
        </p>

        <h2>Gratis boekhoudprogramma of gratis factuurprogramma?</h2>
        <p>Deze termen worden vaak door elkaar gebruikt, maar er is een belangrijk verschil.</p>
        <p>
          Een <strong>gratis factuurprogramma</strong> kan zich volledig richten op het maken van facturen.
        </p>
        <p>
          Een <strong>gratis boekhoudprogramma</strong> suggereert dat je ook je bredere administratie gratis kunt
          beheren.
        </p>
        <p>
          Dat betekent niet automatisch dat een gratis boekhoudprogramma dezelfde functies heeft als een betaald
          pakket. Controleer daarom altijd wat daadwerkelijk inbegrepen is.
        </p>
        <p>
          Als je alleen een gratis factuur nodig hebt, is het niet nodig om een volledig boekhoudprogramma te zoeken.
        </p>

        <h2>Boekhoudprogramma&apos;s voor zzp&apos;ers</h2>
        <p>
          Heb je besloten dat je meer nodig hebt dan alleen een factuurprogramma? Dan kun je verschillende
          boekhoudprogramma&apos;s voor zzp&apos;ers vergelijken.
        </p>
        <p>Bekende opties zijn bijvoorbeeld:</p>
        <ul>
          <li>
            <strong>Moneybird</strong>
          </li>
          <li>
            <strong>Jortt</strong>
          </li>
          <li>
            <strong>e-Boekhouden.nl</strong>
          </li>
          <li>andere online boekhoudprogramma&apos;s</li>
        </ul>
        <p>De beste keuze hangt af van je administratie en de functies die je belangrijk vindt.</p>
        <p>Let bij het vergelijken bijvoorbeeld op:</p>
        <ul>
          <li>prijs</li>
          <li>facturatie</li>
          <li>btw-functionaliteit</li>
          <li>inkomsten en uitgaven</li>
          <li>bankkoppelingen</li>
          <li>automatisering</li>
          <li>offertes</li>
          <li>urenregistratie</li>
          <li>mobiele mogelijkheden</li>
          <li>ondersteuning</li>
        </ul>
        <p>
          Bekijk ook onze vergelijking van het{' '}
          <Link href="/blogs/beste-boekhoudprogramma-zzp" className="text-warm-orange hover:underline">
            beste boekhoudprogramma voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Factuurprogramma én boekhoudprogramma</h2>
        <p>Je hoeft niet altijd te kiezen tussen een factuurprogramma en een boekhoudprogramma.</p>
        <p>Sommige boekhoudprogramma&apos;s hebben namelijk ook uitgebreide facturatiefuncties.</p>
        <p>
          Dat kan handig zijn wanneer je je volledige administratie vanuit één systeem wilt regelen.
        </p>
        <p>De vraag is dan vooral of je die extra functies nodig hebt.</p>
        <p>
          <strong>Alleen facturen nodig?</strong>
          <br />
          Een eenvoudige factuurmaker kan voldoende zijn.
        </p>
        <p>
          <strong>Facturen én volledige administratie nodig?</strong>
          <br />
          Een boekhoudprogramma ligt meer voor de hand.
        </p>

        <h2>Kan ik gratis facturen maken zonder account?</h2>
        <p>Ja.</p>
        <p>
          Met FactuurBaas kun je direct een factuur maken zonder eerst een account aan te maken.
        </p>
        <p>
          Je vult je eigen gegevens en de gegevens van je klant in, voegt de producten of diensten toe en maakt de
          factuur. Daarna kun je de factuur direct als PDF downloaden.
        </p>
        <p>Dat is vooral handig wanneer je snel één factuur wilt maken.</p>
        <CtaButton />

        <h2>Factuur maken met Word of Excel</h2>
        <p>Een andere mogelijkheid is zelf een factuur maken met Word of Excel.</p>
        <p>Dat kan prima wanneer je maar af en toe factureert, maar je moet wel meer zelf controleren.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>factuurnummering</li>
          <li>btw-berekeningen</li>
          <li>totalen</li>
          <li>juiste factuurgegevens</li>
          <li>PDF-export</li>
          <li>opmaak</li>
        </ul>
        <p>Met een online factuurprogramma zijn veel van deze stappen eenvoudiger.</p>
        <p>
          Bekijk eventueel onze{' '}
          <Link href="/factuur-template/excel" className="text-warm-orange hover:underline">
            Excel factuurtemplate
          </Link>{' '}
          of{' '}
          <Link href="/factuur-template/word" className="text-warm-orange hover:underline">
            Word factuurtemplate
          </Link>
          .
        </p>

        <h2>Wat is het beste voor een startende zzp&apos;er?</h2>
        <p>
          Als je net begint, hoef je niet automatisch met het meest uitgebreide boekhoudpakket te starten.
        </p>
        <p>Stel jezelf eerst drie vragen:</p>

        <h3>1. Hoeveel facturen ga ik maken?</h3>
        <p>
          Maak je maar een paar facturen per maand? Dan kan een eenvoudige factuurtool voldoende zijn.
        </p>

        <h3>2. Hoeveel administratie heb ik daarnaast?</h3>
        <p>
          Heb je veel zakelijke kosten, inkomsten en transacties? Dan wordt boekhoudsoftware interessanter.
        </p>

        <h3>3. Hoeveel wil ik automatiseren?</h3>
        <p>
          Wil je zoveel mogelijk administratieve handelingen uitbesteden aan software? Dan is een uitgebreider
          boekhoudprogramma waarschijnlijk geschikter.
        </p>

        <h2>Wanneer overstappen van een factuurprogramma naar boekhoudsoftware?</h2>
        <p>Je kunt prima eenvoudig beginnen en later overstappen.</p>
        <p>
          Een boekhoudprogramma kan interessanter worden wanneer je merkt dat je administratie steeds meer tijd kost.
        </p>
        <p>Bijvoorbeeld wanneer je:</p>
        <ul>
          <li>steeds meer facturen maakt</li>
          <li>meer zakelijke kosten krijgt</li>
          <li>veel transacties moet verwerken</li>
          <li>meer overzicht wilt</li>
          <li>minder handmatig werk wilt doen</li>
          <li>je administratie op één plek wilt beheren</li>
        </ul>
        <p>
          Je hoeft dus niet direct een uitgebreid boekhoudprogramma te nemen omdat je een bedrijf begint.
        </p>

        <h2>Wat is de beste keuze?</h2>
        <p>Er is geen universeel beste oplossing.</p>

        <h3>Kies een gratis factuurprogramma als je:</h3>
        <ul>
          <li>vooral facturen wilt maken</li>
          <li>weinig administratie hebt</li>
          <li>geen abonnement wilt</li>
          <li>snel een PDF-factuur wilt maken</li>
          <li>geen volledige boekhouding in hetzelfde programma nodig hebt</li>
        </ul>

        <h3>Kies een boekhoudprogramma als je:</h3>
        <ul>
          <li>je volledige administratie wilt bijhouden</li>
          <li>inkomsten en uitgaven wilt verwerken</li>
          <li>meer wilt automatiseren</li>
          <li>je btw-administratie wilt ondersteunen</li>
          <li>banktransacties wilt verwerken</li>
          <li>je administratie vanuit één programma wilt regelen</li>
        </ul>
        <p>
          Voor alleen facturen maken is <strong>FactuurBaas</strong> een eenvoudige gratis optie. Voor een volledige
          administratie kun je verschillende boekhoudprogramma&apos;s vergelijken, zoals Moneybird, Jortt en
          e-Boekhouden.nl.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat is het verschil tussen een factuurprogramma en een boekhoudprogramma?</h3>
        <p>
          Een factuurprogramma richt zich voornamelijk op het maken van facturen. Een boekhoudprogramma biedt
          daarnaast functies voor een bredere administratie, zoals inkomsten, uitgaven, btw en andere administratieve
          processen.
        </p>
        <h3>Heb ik als zzp&apos;er een boekhoudprogramma nodig?</h3>
        <p>
          Niet alleen om facturen te maken. Als je administratie groter of complexer wordt, kan een boekhoudprogramma
          wel veel overzicht en tijdwinst opleveren.
        </p>
        <h3>Wat is een gratis factuurprogramma?</h3>
        <p>
          Een gratis factuurprogramma is software waarmee je zonder betaling facturen kunt maken. De functies
          verschillen per programma. Met FactuurBaas kun je gratis een professionele factuur maken zonder account of
          abonnement.
        </p>
        <h3>Is een gratis boekhoudprogramma echt gratis?</h3>
        <p>
          Dat verschilt per aanbieder. Sommige programma&apos;s hebben een gratis versie met beperkingen of een gratis
          proefperiode. Controleer daarom altijd welke functies daadwerkelijk gratis zijn.
        </p>
        <h3>Kan ik als zzp&apos;er gratis een factuur maken?</h3>
        <p>
          Ja. Dat kan bijvoorbeeld met een online factuurmaker, Word of Excel. Met FactuurBaas kun je direct gratis
          online een factuur maken en deze als PDF downloaden.
        </p>
        <h3>Kan ik een factuur maken zonder account?</h3>
        <p>
          Ja. Met FactuurBaas kun je zonder account een factuur maken en de PDF direct downloaden.
        </p>
        <h3>Is FactuurBaas een boekhoudprogramma?</h3>
        <p>
          Nee. FactuurBaas richt zich op het eenvoudig maken van facturen. Als je een volledige boekhouding wilt
          bijhouden, is een uitgebreider boekhoudprogramma waarschijnlijk geschikter.
        </p>

        <h2>Factuurprogramma of boekhoudprogramma?</h2>
        <p>De keuze hangt uiteindelijk af van je administratie.</p>
        <p>
          <strong>Wil je alleen snel een factuur maken?</strong> Dan heb je waarschijnlijk geen uitgebreid
          boekhoudprogramma nodig.
        </p>
        <p>
          <strong>Wil je je volledige administratie beheren?</strong> Dan is boekhoudsoftware waarschijnlijk een
          betere keuze.
        </p>
        <p>
          FactuurBaas is er voor ondernemers die eenvoudig een factuur willen maken:{' '}
          <strong>gratis, zonder account en direct als PDF te downloaden.</strong>
        </p>
        <p>
          Twijfel je nog tussen een factuurtool en boekhoudsoftware? Doe dan de{' '}
          <Link href="/tools/boekhoudprogramma-check" className="text-warm-orange hover:underline">
            boekhoudprogramma-check
          </Link>{' '}
          voor een snelle indicatie.
        </p>
        <BoekhoudCheckCta />
        <CtaButton />
      </>
    )
  },
  {
    slug: 'zakelijke-rekening-zzp',
    relatedSlugs: ['factuurbeheer-overzicht', 'wanneer-boekhoudsoftware-nodig-zzp', 'sneller-betalen-factuur', 'factuur-maken-zzp'],
    title: 'Heb ik een zakelijke rekening nodig als zzp\'er? Alles wat je moet weten',
    excerpt: 'Zakelijke rekening zzp: is het verplicht? Voordelen, kosten, alternatieven en wanneer het handig is. Met tips voor overzicht en koppeling met je facturatie.',
    keywords: 'zakelijke rekening zzp, zakelijke rekening eenmanszaak, zakelijke rekening nodig zzp, privé of zakelijke rekening zzp, kosten zakelijke rekening, zakelijke betaalrekening zzp',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/heb%20ik%20een%20zakelijke%20rekening%20nodig%20als%20zzper.png',
      alt: 'Heb ik een zakelijke rekening nodig als zzp\'er? Overzicht, kosten en tips.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    faq: [
      { question: 'Is een zakelijke rekening verplicht voor zzp\'ers?', answer: 'Nee. Voor een eenmanszaak is een zakelijke rekening geen wettelijke verplichting. Wel handig voor overzicht: je scheidt privé en zakelijk. Bij een BV is een aparte zakelijke rekening vaak wel vereist.' },
      { question: 'Wat zijn de voordelen van een zakelijke rekening als zzp\'er?', answer: 'Beter overzicht in je administratie, professionele uitstraling naar klanten, gemak bij incasso\'s en boekhoudkoppelingen, en mogelijk meer bescherming van je privévermogen bij zakelijke risico\'s.' },
      { question: 'Wat kost een zakelijke rekening ongeveer?', answer: 'Online banken: vaak €0–€10 per maand, soms eerste 500 transacties gratis. Traditionele banken: circa €7–€15 per maand plus transactiekosten. Let ook op transactiekosten en internationale betalingen.' },
      { question: 'Kan ik als zzp\'er zonder zakelijke rekening factureren?', answer: 'Ja. Je kunt een privérekening op je factuur zetten. Voor startende zzp\'ers met weinig transacties kan dat volstaan. Met een tool zoals FactuurBaas beheer je je facturen overzichtelijk, ook zonder eigen bankkoppeling.' },
      { question: 'Wat zijn alternatieven voor een zakelijke rekening?', answer: 'Een aparte privérekening alleen voor je bedrijf, een virtuele/digitale rekening via een online bank, of je huidige rekening combineren met een boekhoud- of factuurtool voor overzicht.' },
    ],
    content: (
      <>
        <p><strong>Heb ik een zakelijke rekening nodig als zzp&apos;er?</strong> Het is een vraag die veel starters zich stellen. Een aparte zakelijke rekening is niet wettelijk verplicht voor een eenmanszaak, maar biedt vaak wel overzicht, professionaliteit en gemak. In dit artikel lees je wanneer een <strong>zakelijke rekening voor zzp&apos;ers</strong> handig is, wat het ongeveer kost, welke alternatieven er zijn en hoe je kiest — inclusief de rol van je facturatie en administratie.</p>

        <h2>Waarom een zakelijke rekening handig kan zijn</h2>

        <h3>1. Overzicht in je administratie</h3>
        <p>Een aparte <strong>zakelijke rekening</strong> scheidt privé- en zakelijk geld. Dat maakt het bijhouden van inkomsten, uitgaven en btw eenvoudiger. Geen gemixte transacties betekent minder kans op fouten bij je boekhouding en een helder beeld voor de Belastingdienst. Meer over structuur in je administratie lees je in ons artikel over <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">factuurbeheer en overzicht</Link>.</p>

        <h3>2. Professionele uitstraling</h3>
        <p>Klanten en leveranciers zien dat je serieus bent. Een factuur met een zakelijke rekening oogt betrouwbaarder en professioneler dan een privé-rekening. Zorg daarnaast dat je <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">factuur aan alle eisen voldoet</Link> — dan maak je een sterke indruk.</p>

        <h3>3. Gemak bij betalingen en incasso&apos;s</h3>
        <p>Veel zakelijke rekeningen bieden automatische incasso&apos;s, betaalverzoeken en integraties met boekhoudsoftware. Zo bespaar je tijd bij het verwerken van facturen en betalingen. Tips om <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">je factuur sneller betaald te krijgen</Link> combineren goed met een duidelijke betaalrekening.</p>

        <h3>4. Veiligheid en aansprakelijkheid</h3>
        <p>Sommige rechtsvormen, zoals een BV, vereisen een aparte zakelijke rekening. Ook voor eenmanszaken kan het verstandig zijn om privévermogen te beschermen tegen zakelijke risico&apos;s. Het scheiden van geldstromen maakt de administratie bovendien inzichtelijker.</p>

        <CtaButton />

        <h2>Heb ik als zzp&apos;er echt een zakelijke rekening nodig?</h2>
        <p>Niet altijd. Voor startende zzp&apos;ers met weinig transacties en een overzichtelijke administratie kan een privé-rekening soms volstaan. Overweeg een <strong>zakelijke rekening voor zzp</strong> vooral als:</p>
        <ul>
          <li>Je regelmatig betalingen ontvangt van klanten.</li>
          <li>Je veel zakelijke uitgaven hebt die je wilt scheiden van privé.</li>
          <li>Je een professionelere indruk wilt maken.</li>
          <li>Je gebruik wilt maken van boekhoudkoppelingen of automatische incasso&apos;s.</li>
        </ul>
        <p>Een zakelijke rekening is geen wettelijke verplichting voor een eenmanszaak, maar biedt vaak structureel gemak en overzicht. Of je ook <strong>boekhoudsoftware</strong> nodig hebt, hangt daar weer mee samen — lees daarvoor <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">wanneer heb je boekhoudsoftware nodig als zzp&apos;er?</Link></p>

        <h2>Wat kost een zakelijke rekening ongeveer?</h2>
        <p>De prijzen verschillen per bank en pakket. Een grove richtlijn:</p>
        <ul>
          <li><strong>Online banken:</strong> vaak €0–€10 per maand, transactiekosten variabel of de eerste 500 gratis. Vaak extra functies zoals boekhoudkoppeling, virtuele betaalpassen en automatische incasso.</li>
          <li><strong>Traditionele banken:</strong> circa €7–€15 per maand, meestal transactiekosten per betaling. Pluspunten: fysieke filialen, persoonlijke ondersteuning en soms extra verzekeringen.</li>
        </ul>
        <p>Belangrijk: kijk niet alleen naar het maandbedrag, maar ook naar transactiekosten, extra rekeningen en internationale mogelijkheden. Zo voorkom je verrassingen.</p>

        <h2>Alternatieven voor een zakelijke rekening</h2>
        <p>Twijfel je of je er direct een nodig hebt? Er zijn opties:</p>
        <ul>
          <li><strong>Aparte privé-rekening:</strong> Gebruik een tweede privérekening uitsluitend voor je bedrijf. Geen extra kosten bij je bank, wel meer overzicht dan alles op één rekening.</li>
          <li><strong>Virtuele of digitale rekening:</strong> Via een online bank kun je soms een aparte &quot;zakelijke&quot; of virtuele rekening openen zonder dure pakketten.</li>
          <li><strong>Factuurbeheer naast je rekening:</strong> Combineer je betaalrekening (privé of zakelijk) met een boekhoud- of factuurtool. Met <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link> houd je je facturen en betalingen overzichtelijk, ook zonder eigen bankkoppeling.</li>
        </ul>

        <CtaButton />

        <h2>Tips bij het kiezen van een zakelijke rekening</h2>
        <ul>
          <li><strong>Bepaal je transacties:</strong> Hoeveel inkomende en uitgaande betalingen heb je per maand? Dat bepaalt of een pakket met vaste kosten of per-transactie voor jou goedkoper is.</li>
          <li><strong>Controleer automatisering:</strong> Past de bank bij je boekhoudsoftware of bij FactuurBaas als je later wilt koppelen?</li>
          <li><strong>Let op verborgen kosten:</strong> Bij sommige gratis rekeningen betaal je voor extra diensten zoals internationale betalingen of extra pasjes.</li>
          <li><strong>Denk aan toekomstplannen:</strong> Ga je groeien naar een BV of internationale klanten bedienen? Kies een bank die meegroeit.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>Of je een <strong>zakelijke rekening nodig hebt als zzp&apos;er</strong> hangt af van je situatie en wensen. Voor starters met weinig transacties kan een aparte privérekening volstaan; wie overzicht, professionaliteit en automatisering wil, profiteert vaak van een zakelijke rekening.</p>
        <p>Met tools zoals FactuurBaas kun je zelfs zonder eigen bankkoppeling je facturen professioneel beheren en grip houden op je financiële administratie. <strong>Tip:</strong> Begin klein, analyseer je transacties en breid eventueel uit naar een zakelijke rekening als dat nodig blijkt. Zo houd je je kosten laag en je administratie overzichtelijk.</p>

        <CtaButton />

        <h2>Veelgestelde vragen</h2>
        <h3>Is een zakelijke rekening verplicht voor zzp&apos;ers?</h3>
        <p>Nee. Voor een eenmanszaak niet. Wel handig voor overzicht; bij een BV vaak wel vereist.</p>
        <h3>Wat zijn de voordelen van een zakelijke rekening?</h3>
        <p>Overzicht in je administratie, professionelere uitstraling, gemak bij incasso&apos;s en boekhoudkoppelingen, en mogelijk betere scheiding van privé en zakelijk vermogen.</p>
        <h3>Wat kost een zakelijke rekening?</h3>
        <p>Online: vaak €0–€10 per maand. Traditioneel: circa €7–€15 per maand plus transactiekosten. Vergelijk altijd op totaalkosten.</p>
        <h3>Kan ik zonder zakelijke rekening factureren?</h3>
        <p>Ja. Je kunt je privé-IBAN op je factuur zetten. Voor weinig transacties kan dat. Met FactuurBaas beheer je je facturen overzichtelijk, met of zonder zakelijke rekening.</p>
      </>
    )
  },
  {
    slug: 'revolut-business-zzp-voordelen-nadelen',
    relatedSlugs: ['zakelijke-rekening-zzp', 'factuurbeheer-overzicht', 'sneller-betalen-factuur', 'wanneer-boekhoudsoftware-nodig-zzp'],
    title: 'Revolut Business voor zzp: voordelen en nadelen',
    excerpt: 'Revolut Business als zakelijke rekening voor zzp\'ers: pakketten, kosten, voordelen en nadelen. Wanneer past Revolut bij jouw onderneming en hoe combineer je het met je facturatie?',
    keywords: 'Revolut Business zzp, Revolut zakelijk, Revolut zakelijke rekening, Revolut Business voordelen nadelen, zakelijke rekening zzp Revolut, Revolut Basic Grow Scale',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/voor%20en%20nad%20delen%20van%20revolut%20zakelijk.png',
      alt: 'Revolut Business voor zzp: voordelen en nadelen van de zakelijke rekening.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    faq: [
      { question: 'Wat kost een zakelijke rekening bij Revolut?', answer: 'Revolut Business Basic kost circa €10 per maand; Grow vanaf €30 en Scale vanaf €90 per maand. Bovenop het pakket kunnen transactiekosten en verzendkosten voor pasjes gelden. Vergelijk altijd op totaalkosten en aantal gratis transacties.' },
      { question: 'Is Revolut Business geschikt voor zzp\'ers?', answer: 'Ja, vooral voor zzp\'ers met internationale klanten of valuta. Je krijgt meerdere valuta\'s, vaak transparante kosten en een app met betaalverzoeken en betaalkaarten. Let op: boekhoudkoppeling en Nederlands-talige support zijn niet in elk pakket of beperkt beschikbaar.' },
      { question: 'Wat zijn de nadelen van Revolut Business?', answer: 'De klantenservice is vooral Engelstalig (Nederlands beperkt), je ontvangt geen rente op je saldo, en niet elk pakket biedt een directe boekhoudkoppeling. Voor puur lokale zzp\'ers kan een Nederlandse bank soms praktischer zijn.' },
      { question: 'Hoe veilig is Revolut?', answer: 'Revolut heeft een Litouwse bankvergunning en valt onder het Europees depositogarantiestelsel. Tot €100.000 per rekeninghouder is gegarandeerd. De app ondersteunt tweestapsverificatie.' },
    ],
    content: (
      <>
        <p><strong>Revolut Business voor zzp&apos;ers</strong> is een zakelijke rekening van een digitale bank: wereldwijd betalen en ontvangen, meerdere valuta&apos;s en duidelijke tarieven. Past Revolut bij jou? In dit artikel lees je de <strong>voordelen en nadelen van Revolut Business</strong>, welke pakketten er zijn, wat het ongeveer kost en hoe je het combineert met je facturatie en administratie.</p>

        <h2>Wat is Revolut Business?</h2>
        <p>Revolut is een digitale bank (opgericht in 2015) die zich richt op betaalgemak en lage kosten, ook voor ondernemers. Met <strong>Revolut Business</strong> kun je als zzp&apos;er een zakelijke rekening openen, in veel valuta&apos;s betalen en ontvangen, betaalverzoeken sturen en vaak tegen gunstige koersen wisselen. Er zijn meerdere pakketten: van een basisrekening tot oplossingen voor grotere bedrijven. Of een <strong>zakelijke rekening</strong> überhaupt iets voor jou is, lees je in ons artikel over <Link href="/blogs/zakelijke-rekening-zzp" className="text-warm-orange hover:underline">een zakelijke rekening als zzp&apos;er</Link>.</p>

        <h2>Voordelen van Revolut Business voor zzp&apos;ers</h2>
        <ul>
          <li><strong>Transparante kosten:</strong> Vaak geen verborgen kosten; je ziet wat je betaalt per transactie of pakket.</li>
          <li><strong>Meerdere valuta&apos;s:</strong> Je kunt in tientallen valuta&apos;s ontvangen, aanhouden en betalen — handig als je internationaal werkt.</li>
          <li><strong>Gunstige wisselkoersen:</strong> Binnen je pakket vaak een deel gratis wisselen tegen de interbancaire koers; daarboven een lage toeslag.</li>
          <li><strong>Moderne app:</strong> Betaalverzoeken, virtuele en fysieke pasjes, en inzicht in transacties. Sommige pakketten bieden een API of boekhoudkoppeling.</li>
          <li><strong>Lage vaste kosten bij Basic:</strong> Het instappakket is relatief goedkoop per maand, wat voor startende zzp&apos;ers aantrekkelijk kan zijn.</li>
        </ul>
        <p>Combineer je Revolut-rekening met goed <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">factuurbeheer</Link>: zo houd je overzicht welke facturen betaald zijn en welke nog openstaan.</p>

        <CtaButton />

        <h2>Nadelen van Revolut Business</h2>
        <ul>
          <li><strong>Klantenservice vooral Engels:</strong> Ondersteuning is vaak Engelstalig; Nederlands is niet overal of niet 24/7 beschikbaar.</li>
          <li><strong>Geen rente op saldo:</strong> Over een positief saldo ontvang je bij Revolut doorgaans geen rente.</li>
          <li><strong>Geen of beperkte boekhoudkoppeling in goedkope pakketten:</strong> Automatische koppeling met boekhoudsoftware is niet in elk pakket inbegrepen.</li>
          <li><strong>Geen fysieke kantoren:</strong> Alles gaat via de app; als je liever persoonlijk advies wilt, kies je een bank met filialen.</li>
        </ul>
        <p>Of je naast je bank ook <strong>boekhoudsoftware</strong> nodig hebt, hangt af van je omzet en administratie — lees <Link href="/blogs/wanneer-boekhoudsoftware-nodig-zzp" className="text-warm-orange hover:underline">wanneer boekhoudsoftware nodig is voor zzp&apos;ers</Link>.</p>

        <h2>Pakketten: Basic, Grow, Scale en Enterprise</h2>
        <p>Revolut biedt meerdere zakelijke pakketten. Een korte indruk:</p>
        <ul>
          <li><strong>Business Basic:</strong> Instappakket met lage maandelijkse kosten, een beperkt aantal gratis transacties per jaar en mogelijkheid om tot een bepaald bedrag tegen de interbancaire koers te wisselen. Geschikt voor starters of zzp&apos;ers met weinig transacties.</li>
          <li><strong>Business Grow:</strong> Meer gratis transacties, vaak inclusief creditcard of extra kaarten, en soms boekhoudkoppeling. Voor wie meer betaalverkeer heeft.</li>
          <li><strong>Business Scale:</strong> Nog meer transacties en extra&apos;s, bedoeld voor grotere ondernemingen.</li>
          <li><strong>Business Enterprise:</strong> Op maat voor grote bedrijven met specifieke wensen.</li>
        </ul>
        <p>Kosten en limieten wijzigen regelmatig; check altijd de actuele tarieven op de website van Revolut. Tip: bereken of je met je verwachte aantal transacties beter uit bent met een duurder pakket met meer gratis transacties of met Basic en transactiekosten.</p>

        <CtaButton />

        <h2>Kosten in het kort</h2>
        <p>De maandelijkse kosten lopen uiteen van circa €10 (Basic) tot tientallen euros (Grow, Scale). Daarnaast kunnen gelden:</p>
        <ul>
          <li>Transactiekosten na het opgebruiken van je gratis transacties (bijv. per bij- of afschrijving).</li>
          <li>Kosten voor internationale overschrijvingen buiten je pakket.</li>
          <li>Verzendkosten voor fysieke betaalpassen.</li>
          <li>Eventuele toeslag op valuta wisselen boven je gratis limiet.</li>
        </ul>
        <p>Vergelijk daarom altijd op totaalkosten: maandbedrag + wat je verwacht te betalen aan transacties en wissels. Zo kies je de goedkoopste optie voor jouw situatie.</p>

        <h2>Wanneer past Revolut Business bij jou?</h2>
        <p>Revolut Business kan een goede keuze zijn als je:</p>
        <ul>
          <li>Internationaal werkt of in meerdere valuta&apos;s factureert en betaalt.</li>
          <li>Lage, transparante kosten belangrijk vindt.</li>
          <li>Geen behoefte hebt aan een fysiek kantoor en digitale service voldoende vindt.</li>
        </ul>
        <p>Minder geschikt als je vooral Nederlandse klanten hebt, Nederlands-talige telefonische support wilt of een directe, gratis boekhoudkoppeling nodig hebt in het goedkoopste pakket. In dat geval kunnen een Nederlandse bank of een andere zakelijke rekening beter aansluiten. Hoe je <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">sneller betaald krijgt</Link> op je facturen, geldt ongeacht welke bank je kiest.</p>

        <h2>Revolut en je facturatie</h2>
        <p>Of je nu bij Revolut of een andere bank zit: je facturen moeten kloppen en overzichtelijk zijn. Met <Link href="/create-invoice" className="text-warm-orange hover:underline">FactuurBaas</Link> maak je professionele facturen en houd je ze bij. Je kunt je zakelijke IBAN (bijv. van Revolut) op je factuur zetten; klanten betalen dan naar die rekening. FactuurBaas werkt naast elke bank — handig als je later van bank wisselt.</p>

        <CtaButton />

        <h2>Conclusie</h2>
        <p><strong>Revolut Business voor zzp</strong> biedt voordelen: transparante tarieven, meerdere valuta&apos;s en een moderne app. Nadelen zijn de vooral Engelstalige klantenservice, geen rente op saldo en in de basispakketten soms geen of beperkte boekhoudkoppeling. Weeg voor- en nadelen af tegen je eigen werkzaamheden: wie veel internationaal doet, kan goed uit zijn met Revolut; wie puur lokaal werkt, vergelijkt beter ook Nederlandse alternatieven. Combineer je zakelijke rekening altijd met helder factuurbeheer, bijvoorbeeld met FactuurBaas.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat kost Revolut Business?</h3>
        <p>Basic circa €10 per maand; Grow en Scale duurder, met meer gratis transacties en extra&apos;s. Reken ook transactie- en eventueel verzendkosten mee.</p>
        <h3>Is Revolut geschikt voor zzp&apos;ers?</h3>
        <p>Ja, vooral als je internationaal werkt of in meerdere valuta&apos;s betaalt. Let op taal van de support en of boekhoudkoppeling in jouw pakket zit.</p>
        <h3>Wat zijn de nadelen van Revolut Business?</h3>
        <p>Vooral Engelstalige service, geen rente op saldo, en niet in elk pakket een boekhoudkoppeling. Geen fysieke kantoren.</p>
        <h3>Hoe veilig is Revolut?</h3>
        <p>Revolut valt onder het Europees depositogarantiestelsel; tot €100.000 per rekeninghouder is gedekt. De app ondersteunt tweestapsverificatie.</p>
      </>
    )
  },
  {
    slug: 'btw-te-laat-betaald',
    relatedSlugs: ['btw-factuur-zzp', 'factuurbeheer-overzicht', 'zakelijke-rekening-zzp'],
    title: 'Btw te laat betaald: dit zijn de gevolgen',
    excerpt: 'Wat gebeurt er als je de btw te laat betaalt? Ontdek de boetes, naheffingsaanslagen en hoe je problemen voorkomt. Belangrijk voor elke zzp\'er.',
    keywords: 'btw te laat betaald, boete btw te laat, naheffingsaanslag btw, btw betaalverzuim, btw aangifte te laat, betalingsregeling belastingdienst btw, boete te laat betalen btw',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/btw%20te%20laat%20betaald.png',
      alt: 'Illustratie van een te laat betaalde BTW-aangifte met een kalender en rode stempel.',
    },
    datePublished: '2026-02-07',
    dateModified: '2026-02-07',
    faq: [
      { question: 'Wat is de boete als ik mijn btw te laat betaal?', answer: 'De standaard boete voor te late btw-betaling is 3% van het openstaande bedrag, met een minimum van €50 en een maximum van €6.709. Bij herhaaldelijk verzuim kan dit oplopen tot 10%.' },
      { question: 'Wat is de coulancetermijn voor btw-betaling?', answer: 'Er geldt een coulancetermijn van 7 kalenderdagen na de uiterste betaaldatum. Als je binnen deze termijn betaalt en de vorige aangifte op tijd was, krijg je mogelijk geen boete, alleen een verzuimmededeling.' },
      { question: 'Wat is het verschil tussen aangifteverzuim en betaalverzuim?', answer: 'Aangifteverzuim is het te laat of niet indienen van de btw-aangifte (standaard boete €82). Betaalverzuim is het te laat, te weinig of niet betalen van de btw (standaard boete 3%). Je kunt voor beide apart een boete krijgen.' },
      { question: 'Wat moet ik doen bij betalingsproblemen met de btw?', answer: 'Neem direct contact op met de Belastingdienst om een betalingsregeling te treffen. Dit kan hogere boetes en aanmaningskosten voorkomen.' },
    ],
    content: (
      <>
        <p>Als zzp&apos;er heb je te maken met de btw-aangifte. Het is cruciaal om deze op tijd in te dienen en te betalen. Maar wat gebeurt er als je de <strong>btw te laat betaalt</strong>? En wat zijn de gevolgen als je te weinig of zelfs helemaal niet betaalt? In dit artikel duiken we in de regels van de Belastingdienst, de boetes die je kunt verwachten en hoe je financiële problemen voorkomt. Zo houd je jouw <Link href="/blogs/factuurbeheer-overzicht" className="text-warm-orange hover:underline">factuurbeheer</Link> en administratie zonder verrassingen.</p>

        <h2>De uiterste betaaldatum en de coulancetermijn</h2>
        <p>De Belastingdienst hanteert strikte deadlines voor de btw-aangifte en betaling. Meestal moet je ieder kwartaal aangifte doen en betalen, uiterlijk op de laatste dag van de maand die volgt op het kwartaal. Daarnaast is er een &apos;coulancetermijn&apos; van 7 kalenderdagen na de uiterste betaaldatum. Dit betekent dat je, onder bepaalde voorwaarden, nog een korte periode hebt om te betalen zonder direct een zware boete te krijgen.</p>

        <h3>Wanneer is er sprake van te laat betalen?</h3>
        <p>Je betaalt te laat zodra je betaling na de officiële uiterste betaaldatum binnenkomt bij de Belastingdienst. Afhankelijk van eerdere betalingsgedrag en of je binnen de coulancetermijn betaalt, gelden er verschillende regels.</p>

        <h2>Gevolgen van te laat btw betalen (betaalverzuim)</h2>
        <p>Betaalverzuim treedt op wanneer je de verschuldigde btw niet, te laat, of te weinig betaalt. De gevolgen kunnen variëren:</p>
        <ul>
          <li><strong>Te laat, maar binnen de coulancetermijn:</strong> Als je de vorige aangifte op tijd en volledig betaald had, ontvang je meestal alleen een verzuimmededeling, zonder boete. Had je de vorige keer ook al een deadline gemist? Dan krijg je direct een betaalverzuimboete van 3% van het te laat betaalde bedrag (minimaal €50, maximaal €6.709).</li>
          <li><strong>Te laat én na de coulancetermijn:</strong> Je ontvangt altijd een betaalverzuimboete van 3% van het te laat betaalde bedrag (minimaal €50, maximaal €6.709).</li>
          <li><strong>Deels binnen, deels na de coulancetermijn:</strong> De boete van 3% wordt berekend over het <em>totale</em> te laat betaalde bedrag, dus ook het deel dat nog binnen de coulancetermijn is voldaan.</li>
          <li><strong>Niet of te weinig betaald:</strong> De Belastingdienst stuurt een naheffingsaanslag voor het openstaande bedrag, plus een betaalverzuimboete van 3% (minimaal €50, maximaal €6.709) over het niet-betaalde bedrag.</li>
          <li><strong>Herhaaldelijk verzuim:</strong> Als je vaker te laat of te weinig betaalt, kan de boete oplopen van 3% naar 10%.</li>
        </ul>
        <p>Naast de boetes kan de Belastingdienst ook invorderingsrente in rekening brengen. Deze rente begint te lopen na het verstrijken van de betalingstermijn en wordt berekend over het gehele openstaande bedrag. Dit kan de totale kosten aanzienlijk verhogen.</p>

        <CtaButton />

        <h2>Aangifteverzuim vs. Betaalverzuim: twee aparte boetes</h2>
        <p>Het is belangrijk om te weten dat de Belastingdienst onderscheid maakt tussen twee soorten verzuim:</p>
        <ul>
          <li><strong>Aangifteverzuim:</strong> Dit is het te laat indienen of helemaal niet doen van de btw-aangifte. De standaardboete hiervoor is €82,00, zelfs bij een nihil-aangifte (waarbij je geen btw hoeft te betalen of terugkrijgt). Ook hiervoor geldt een coulancetermijn van 7 dagen, waarbinnen je de aangifte nog boetevrij kunt indienen als je niet eerder in gebreke bent geweest.</li>
          <li><strong>Betaalverzuim:</strong> Zoals hierboven beschreven, gaat dit over het te laat, te weinig of niet betalen van de verschuldigde btw. De boete bedraagt hier 3% van het openstaande bedrag.</li>
        </ul>
        <p>Je kunt dus twee afzonderlijke boetes ontvangen als je zowel te laat aangifte doet én te laat betaalt.</p>

        <h2>De vergrijpboete: bij grove schuld of opzet</h2>
        <p>In ernstigere gevallen, zoals vermoeden van grove schuld of (voorwaardelijke) opzet, kan de Belastingdienst een <strong>vergrijpboete</strong> opleggen in plaats van een reguliere betaalverzuimboete. Deze boetes zijn aanzienlijk hoger. Je ontvangt hierover altijd eerst een schriftelijke mededeling met de reden van de boete. Als je het er niet mee eens bent, kun je bezwaar maken.</p>

        <h2>Fouten corrigeren met een suppletieaangifte</h2>
        <p>Ontdek je achteraf een fout in een eerder ingediende btw-aangifte waardoor je meer dan €1.000 te weinig hebt betaald of te veel hebt teruggevraagd? Dan moet je dit corrigeren via een suppletieaangifte. Dit doe je via het formulier &apos;Suppletie btw (omzetbelasting)&apos; in Mijn Belastingdienst Zakelijk.</p>
        <p>Dien de suppletie zo snel mogelijk in – uiterlijk binnen 8 weken nadat je de fout hebt ontdekt en vóórdat de Belastingdienst de fout zelf opmerkt – om boetes te voorkomen. Voor bedragen onder de €1.000 mag je de fout corrigeren in de eerstvolgende reguliere btw-aangifte.</p>

        <CtaButton />

        <h2>Voorkomen is beter dan genezen: tips voor tijdige btw-betaling</h2>
        <p>Om boetes en onnodige stress te vermijden, is een goede planning essentieel:</p>
        <ul>
          <li><strong>Reserveer tijdig:</strong> Zet een deel van je omzet direct apart voor de btw. Een <Link href="/blogs/zakelijke-rekening-zzp" className="text-warm-orange hover:underline">zakelijke rekening</Link> met verschillende potjes of reserveringsfuncties kan hierbij helpen.</li>
          <li><strong>Houd je administratie bij:</strong> Zorg ervoor dat je facturen en bonnetjes altijd up-to-date zijn, zodat je snel en accuraat aangifte kunt doen.</li>
          <li><strong>Gebruik een facturatieprogramma:</strong> Tools zoals FactuurBaas helpen je niet alleen met het maken van facturen, maar geven je ook overzicht van je inkomsten en uitgaven, wat de btw-aangifte vereenvoudigt.</li>
          <li><strong>Stel herinneringen in:</strong> Markeer de deadlines voor btw-aangifte en -betaling in je agenda of gebruik automatische herinneringen.</li>
          <li><strong>Neem contact op bij problemen:</strong> Als je voorziet dat je de btw niet op tijd kunt betalen, neem dan direct contact op met de Belastingdienst om een betalingsregeling te bespreken.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>Te laat btw betalen kan leiden tot vervelende boetes en extra kosten. Als zzp&apos;er is het daarom cruciaal om op de hoogte te zijn van de deadlines en de mogelijke gevolgen. Door je administratie goed bij te houden, tijdig te reserveren en proactief te handelen bij problemen, kun je veel narigheid voorkomen. FactuurBaas helpt je graag bij het stroomlijnen van je facturatie, zodat je meer tijd overhoudt voor je onderneming en minder zorgen hebt over je administratie.</p>
      </>
    ),
  },
  {
    slug: 'hoeveel-geld-apart-belasting-zzper',
    relatedSlugs: ['btw-factuur-zzp', 'btw-te-laat-betaald', 'zakelijke-rekening-zzp', 'factureren-startende-zzper'],
    title: 'Hoeveel geld moet je apart zetten voor belasting als zzp\'er?',
    excerpt: 'Richtlijnen voor btw en inkomstenbelasting: hoeveel reserveren als zzp\'er? Inclusief de stelregel dat je in 2026 tot € 30.582 winst geen netto inkomstenbelasting betaalt.',
    keywords: 'geld apart zetten belasting zzp, belasting reserveren zzp, btw apart zetten zzp, inkomstenbelasting zzp, belasting zzp berekenen, belastingpot zzp, geen belasting tot 30582 zzp 2026',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Hoeveel%20belasting%20moet%20een%20zzper%20betalen.png',
      alt: 'Hoeveel belasting moet een zzp\'er betalen: geld apart zetten voor btw en inkomstenbelasting.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    faq: [
      { question: 'Hoeveel procent van mijn omzet moet ik apart zetten voor belasting als zzp\'er?', answer: 'Zet ongeveer 1/3 tot 40% van je bruto-inkomsten (factuurbedrag inclusief btw) apart. Btw: 21% direct reserveren. Daarnaast 30-40% van je nettowinst voor inkomstenbelasting en Zvw-premie.' },
      { question: 'Moet ik btw apart zetten op een andere rekening?', answer: 'Ja. Reken standaard 21% btw over je diensten en zet dit direct op een aparte (zakelijke) rekening. Zo voorkom je dat je het uitgeeft; je draagt het per kwartaal af aan de Belastingdienst.' },
      { question: 'Betaal ik als zzp\'er in 2026 geen inkomstenbelasting tot € 30.582?', answer: 'Met de juiste aftrekposten (zelfstandigenaftrek, startersaftrek, MKB winstvrijstelling en heffingskortingen) kan je belastbaar inkomen zo laag uitkomen dat je netto € 0 inkomstenbelasting betaalt. Let op: je betaalt nog wel Zvw-premie.' },
      { question: 'Wat is de startersaftrek voor zzp\'ers?', answer: 'De startersaftrek is € 2.123 extra naast de zelfstandigenaftrek (€ 1.200). Je mag deze drie keer toepassen in de eerste vijf jaar van je onderneming, waardoor je minder belasting betaalt en de reservering iets lager kunt houden.' },
      { question: 'Is het beter om te veel of te weinig te reserveren voor belasting?', answer: 'Beter te veel dan te weinig. Wat overblijft na de definitieve aanslag is een mooie bonus. Te weinig reserveren kan leiden tot onverwachte naheffingen en cashflowproblemen.' },
    ],
    content: (
      <>
        <p>Als zzp&apos;er vraag je je waarschijnlijk af: <strong>hoeveel geld moet ik apart zetten voor belasting</strong>? Je hebt te maken met btw én inkomstenbelasting, en je wilt geen verrassingen aan het einde van het jaar. In dit artikel krijg je een helder overzicht: van een praktische stelregel voor je belastingpot tot het goede nieuws dat je in 2026 tot een bepaalde winst netto geen inkomstenbelasting betaalt. Zo hou je grip op je financiën en voorkom je stress.</p>

        <h2>De stelregel: hoeveel reserveren als zzp&apos;er?</h2>
        <p>Als zzp&apos;er is het raadzaam om ongeveer <strong>1/3 tot 40%</strong> van je bruto-inkomsten (het factuurbedrag inclusief btw) apart te zetten voor belastingen. Dit dekt zowel de btw (21% op de meeste diensten) als de inkomstenbelasting. Een veilige aanpak:</p>
        <ul>
          <li><strong>Btw:</strong> Reserveer 21% direct en zet dit op een aparte rekening.</li>
          <li><strong>Inkomstenbelasting en Zvw:</strong> Daarnaast nog eens 30-40% van je nettowinst (omzet minus kosten).</li>
        </ul>
        <p>Tip: zet het geld op een <Link href="/blogs/zakelijke-rekening-zzp" className="text-warm-orange hover:underline">zakelijke spaarrekening</Link>, zodat je het niet per ongeluk uitgeeft. Het is beter om te veel te reserveren dan te weinig; wat overblijft na de definitieve aanslag is een mooie bonus.</p>

        <CtaButton />

        <h2>Btw apart zetten: 21% direct reserveren</h2>
        <p>De btw die je op je facturen berekent, is geen inkomsten voor jou — het geld gaat uiteindelijk naar de Belastingdienst. Reken standaard <strong>21% btw</strong> over je diensten (of 9% indien van toepassing) en zet dit direct apart. Draag het per kwartaal af via je btw-aangifte. Met een factuurtool zoals FactuurBaas zie je in één oogopslag wat je aan btw hebt gerekend, wat het reserveren een stuk makkelijker maakt.</p>

        <h2>Inkomstenbelasting en Zvw: 30-40% van je nettowinst</h2>
        <p>Naast btw betaal je inkomstenbelasting en een premie voor de zorgverzekeringswet (Zvw) over je winst. Hoeveel je precies moet reserveren, hangt af van je winstniveau:</p>
        <ul>
          <li><strong>Winst tot € 80.000:</strong> Reserveer ongeveer 30% tot 35% van je nettowinst.</li>
          <li><strong>Winst boven € 80.000:</strong> Verhoog de reservering naar 40% of meer; je valt dan in een hogere belastingschijf.</li>
        </ul>
        <p><strong>Startersaftrek:</strong> In de eerste 3 jaar van je onderneming kun je gebruikmaken van de startersaftrek. Daardoor betaal je minder belasting en kun je de reservering iets lager houden. Meer daarover lees je hieronder.</p>

        <h2>Geen netto inkomstenbelasting tot € 30.582 winst in 2026</h2>
        <p>Je leest het goed: als zzp&apos;er hoef je in 2026 over een winst tot € 30.582 <strong>geen netto inkomstenbelasting</strong> te betalen — mits je aan bepaalde voorwaarden voldoet. Je betaalt dan wel inkomstenbelasting, maar krijgt heffingskortingen terug waardoor je op nul uitkomt. Let op: de Zvw-premie betaal je nog steeds. Hieronder zie je welke aftrekposten en kortingen hiervoor zorgen.</p>

        <h3>Zelfstandigenaftrek en startersaftrek</h3>
        <p>De <strong>zelfstandigenaftrek</strong> is een aftrekpost voor zzp&apos;ers. Je komt ervoor in aanmerking als je geld verdient aan je onderneming en voldoet aan het urencriterium. In 2026 bedraagt deze € 1.200. Als starter mag je daar nog <strong>€ 2.123 startersaftrek</strong> bij optellen. Deze startersaftrek mag je drie keer toepassen in de eerste vijf jaar. De startersaftrek en zelfstandigenaftrek gaan altijd samen; het loont om goed te bekijken of toepassen in een bepaald jaar het meeste voordeel oplevert.</p>

        <h3>MKB-winstvrijstelling</h3>
        <p>De <strong>MKB-winstvrijstelling</strong> is een directe aftrekpost op je winst. In 2026 bedraagt deze 12,7%, ongeacht de hoogte van je winst. Bij een winst van € 30.582 komt dat neer op € 3.462. Voor de MKB-winstvrijstelling hoef je niet aan het urencriterium te voldoen.</p>

        <h3>Heffingskortingen: algemene heffingskorting en arbeidskorting</h3>
        <p>Heffingskortingen zijn directe kortingen op het te betalen belastingbedrag. De belangrijkste voor zzp&apos;ers zijn:</p>
        <ul>
          <li><strong>Algemene heffingskorting:</strong> Iedere belastingplichtige heeft hier recht op. Tot de AOW-leeftijd en zonder andere inkomsten is dat in 2026 € 3.115 (tot een belastbaar inkomen uit werk en woning van € 29.736).</li>
          <li><strong>Arbeidskorting:</strong> Over inkomen uit je winst uit onderneming heb je recht op arbeidskorting. Bij een winst van € 30.582 bedraagt deze € 5.392.</li>
        </ul>

        <h2>Rekenvoorbeeld: geen netto belasting bij € 30.582 winst</h2>
        <p>Stel, je bent startende zzp&apos;er met een te verwachten winst van € 30.582. Je hebt geen andere inkomsten en voldoet aan het urencriterium. Dan kan het er zo uitzien:</p>
        <p><strong>Stap 1 – Belastbare inkomsten:</strong></p>
        <ul>
          <li>Winst uit onderneming: € 30.582</li>
          <li>Min zelfstandigenaftrek: € 1.200</li>
          <li>Min startersaftrek: € 2.123</li>
          <li>Winst voor MKB-winstvrijstelling: € 27.259</li>
          <li>Min MKB-winstvrijstelling (12,7%): € 3.462</li>
          <li><strong>Belastbare inkomsten: € 23.797</strong></li>
        </ul>
        <p><strong>Stap 2 – Te betalen belasting:</strong></p>
        <ul>
          <li>Te betalen belasting (35,75% over € 23.797): € 8.507</li>
          <li>Min algemene heffingskorting: € 3.115</li>
          <li>Min arbeidskorting: € 5.392</li>
          <li><strong>Totaal: € 0</strong></li>
        </ul>
        <p><strong>Let op:</strong> De Zvw-premie betaal je nog wél. In 2026 is dat 4,85% over € 23.797 = circa € 1.154. Houd dus ook dit bedrag apart.</p>

        <CtaButton />

        <h2>Hoe bereken je hoeveel je moet reserveren?</h2>
        <p>Voor het berekenen van je inkomstenbelasting heb je een jaarrekening en balans nodig. Die kun je zelf maken of laten maken. Een boekhoudprogramma helpt je met de berekening. Maar om te beginnen: houd je inkomsten en uitgaven goed bij. Met FactuurBaas heb je overzicht over je gefactureerde bedragen, zodat je makkelijker kunt inschatten hoeveel je per maand of kwartaal moet reserveren.</p>

        <h2>Praktische tips: je belastingpot goed beheren</h2>
        <ul>
          <li><strong>Zakelijke spaarrekening:</strong> Open een aparte rekening voor je belastingpot. Zo raak je het niet kwijt tussen je privé-uitgaven.</li>
          <li><strong>Automatisch overschrijven:</strong> Zet direct na elke binnenkomende betaling een vast percentage (bijv. 35%) naar je belastingrekening.</li>
          <li><strong>Btw apart:</strong> Reken de 21% btw direct mee en zet deze op een eigen pot; je draagt het per kwartaal af.</li>
          <li><strong>Liever te veel dan te weinig:</strong> Een overschot na de definitieve aanslag is een leuke meevaller. Een tekort leidt tot stress en eventueel boetes.</li>
        </ul>

        <h2>Conclusie</h2>
        <p><strong>Hoeveel geld apart zetten voor belasting als zzp&apos;er?</strong> Reken met 1/3 tot 40% van je bruto-inkomsten: 21% voor btw en 30-40% van je nettowinst voor inkomstenbelasting en Zvw. Gebruik een zakelijke spaarrekening en reserveer liever te veel dan te weinig. Als startende zzp&apos;er met een winst tot circa € 30.582 kun je in 2026 met de juiste aftrekposten netto € 0 inkomstenbelasting betalen — maar de Zvw-premie blijft van toepassing. FactuurBaas helpt je met helder overzicht over je facturatie, zodat je gericht kunt reserveren.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoeveel procent van mijn omzet moet ik apart zetten?</h3>
        <p>Zet ongeveer 1/3 tot 40% van je bruto-inkomsten apart. Btw: 21% direct. Daarnaast 30-40% van je nettowinst voor inkomstenbelasting en Zvw.</p>
        <h3>Betaal ik geen belasting tot € 30.582 winst?</h3>
        <p>Met de juiste aftrekposten en heffingskortingen kan je netto te betalen inkomstenbelasting op nul uitkomen. Je betaalt nog wel Zvw-premie.</p>
        <h3>Wat is de startersaftrek?</h3>
        <p>De startersaftrek is € 2.123 extra naast de zelfstandigenaftrek. Je mag deze drie keer toepassen in de eerste vijf jaar van je onderneming.</p>
      </>
    ),
  },
  {
    slug: 'boetes-fouten-facturen',
    relatedSlugs: ['factuur-fouten-voorkomen', 'factuur-maken-zzp', 'factureren-zonder-account', 'btw-factuur-zzp'],
    metaTitle: 'Foutieve factuur: gevolgen, boetes en hoe je fouten corrigeert',
    title: 'Fouten op facturen: gevolgen, boetes en hoe je ze voorkomt',
    excerpt:
      'Een foutieve factuur kan leiden tot correcties, problemen met btw of een boete. Bekijk de meest gemaakte fouten, gevolgen en hoe je een factuur corrigeert.',
    keywords: 'foutieve factuur, gevolgen foute facturen, wat zijn de gevolgen van foute facturen, wat staat er meestal fout op facturen, boete fout factuur, fouten in btw-aangifte, fouten op facturen',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/boete%20niet%20betalen%20van%20btw.png',
      alt: 'Fouten op facturen: gevolgen, boetes en hoe je ze voorkomt.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-08-28',
    faq: [
      { question: 'Wat zijn de gevolgen van een foutieve factuur?', answer: 'Een foutieve factuur moet meestal worden gecorrigeerd. Je klant kan de factuur terugsturen of de btw-aftrek aanpassen. Als de fout doorwerkt in je btw-aangifte, kan een suppletieaangifte nodig zijn. In sommige situaties kan de Belastingdienst een boete opleggen.' },
      { question: 'Wat staat er meestal fout op facturen?', answer: 'Veelvoorkomende fouten zijn een verkeerd btw-tarief of btw-bedrag, een ontbrekend of dubbel factuurnummer, een verkeerde factuurdatum, onjuiste klantgegevens of een verkeerd totaalbedrag.' },
      { question: 'Kan ik een boete voorkomen door mijn fout te corrigeren?', answer: 'Vaak wel. Corrigeer de factuur richting je klant en los de fout op in je administratie. Bij een fout in je btw-aangifte kun je in veel gevallen een suppletie indienen. Hoe sneller je handelt, hoe kleiner het risico op vervelende gevolgen.' },
      { question: 'Wat moet er verplicht op een factuur staan?', answer: 'Verplicht zijn onder meer: jouw bedrijfsgegevens, KVK- en btw-nummer, klantgegevens, uniek factuurnummer, factuurdatum, omschrijving, bedragen excl. en incl. btw, en het juiste btw-tarief.' },
      { question: 'Wat als de fout al in mijn btw-aangifte staat?', answer: 'Dan moet je de btw-aangifte corrigeren, bijvoorbeeld via een suppletieaangifte. Een fout op de factuur zelf lost dat niet automatisch op — beide kunnen apart gecorrigeerd moeten worden.' },
    ],
    content: (
      <>
        <p>
          Een fout op een factuur kan gevolgen hebben voor jou én je klant. Denk aan een verkeerde
          btw-berekening, ontbrekende gegevens, een fout factuurnummer of een onjuiste factuurdatum.
          In sommige situaties kan een fout leiden tot correcties, problemen met de btw-aftrek of een
          boete.
        </p>
        <p>
          In dit artikel lees je wat de gevolgen zijn van een <strong>foutieve factuur</strong>, welke
          fouten het vaakst voorkomen, wanneer een boete mogelijk is en hoe je een fout corrigeert.
        </p>

        <h2>Wat zijn de gevolgen van een foutieve factuur?</h2>
        <p>Een fout op een factuur is zelden alleen een administratief detail. Mogelijke gevolgen:</p>
        <ul>
          <li>
            <strong>Correctie nodig:</strong> je moet de factuur aanpassen of een nieuwe factuur of
            creditnota sturen.
          </li>
          <li>
            <strong>Klant stuurt factuur terug:</strong> bij een verkeerd bedrag of ontbrekende
            gegevens accepteert je klant de factuur soms niet.
          </li>
          <li>
            <strong>Problemen met btw-aftrek:</strong> je klant kan de factuur niet (volledig) verwerken
            in de administratie als btw of gegevens niet kloppen.
          </li>
          <li>
            <strong>Administratie corrigeren:</strong> je eigen boekhouding en btw-overzicht moeten
            kloppen met wat je hebt gefactureerd.
          </li>
          <li>
            <strong>Gevolgen voor btw-aangifte:</strong> een fout op de factuur kan doorwerken in je
            ingediende btw-aangifte.
          </li>
          <li>
            <strong>Mogelijke boete:</strong> in sommige situaties — vooral bij herhaalde of ernstige
            fouten — kan de Belastingdienst een boete opleggen.
          </li>
        </ul>
        <p>
          Voorkomen is eenvoudiger dan corrigeren. Zie{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            wat er op een factuur moet staan
          </Link>{' '}
          en maak je factuur met{' '}
          <Link href="/create-invoice" className="text-warm-orange hover:underline">
            FactuurBaas
          </Link>{' '}
          om verplichte velden niet te vergeten.
        </p>

        <h2>Wat staat er meestal fout op facturen?</h2>
        <p>Deze fouten komen het vaakst voor — en zijn vaak eenvoudig te voorkomen:</p>
        <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200">
          <table className="w-full min-w-[480px] text-sm text-slate-700">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Veelgemaakte fout
                </th>
                <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
                  Mogelijk gevolg
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Verkeerd btw-tarief', 'Btw moet worden gecorrigeerd'],
                ['Verkeerd btw-bedrag', 'Factuur corrigeren'],
                ['Ontbrekend factuurnummer', 'Administratieve fout'],
                ['Verkeerde factuurdatum', 'Correctie nodig'],
                ['Onjuiste klantgegevens', 'Factuur opnieuw opstellen'],
                ['Verkeerd totaalbedrag', 'Klant kan factuur weigeren'],
                ['Ontbrekend btw-nummer', 'Factuur voldoet mogelijk niet aan eisen'],
              ].map(([fout, gevolg]) => (
                <tr key={fout} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 font-medium text-deep-blue">{fout}</td>
                  <td className="px-4 py-3">{gevolg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Wil je weten hoe je deze fouten voorkomt? Lees{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            7 veelgemaakte fouten op facturen
          </Link>
          . Voor btw-berekeningen kun je de{' '}
          <Link href="/tools/btw-calculator" className="text-warm-orange hover:underline">
            BTW calculator
          </Link>{' '}
          gebruiken.
        </p>

        <h2>Wanneer kan een fout op een factuur leiden tot een boete?</h2>
        <p>
          Niet elke factuurfout leidt automatisch tot een boete. De Belastingdienst kijkt onder meer
          naar de ernst van de fout, of deze bewust of herhaaldelijk voorkomt, en of je de fout
          zelf corrigeert.
        </p>
        <p>Boetes of sancties kunnen spelen bij onder andere:</p>
        <ul>
          <li>
            <strong>Onjuiste of onvolledige factuur:</strong> verkeerde btw-vermelding, ontbrekende
            gegevens of een fout factuurnummer.
          </li>
          <li>
            <strong>Factuur niet of niet tijdig uitgereikt</strong> wanneer dat wel verplicht is.
          </li>
          <li>
            <strong>Fouten die doorwerken in je btw-aangifte</strong>, vooral als je niet tijdig
            corrigeert.
          </li>
          <li>
            <strong>Te late aangifte of betaling</strong> — los van de factuur zelf, maar wel
            relevant voor je administratie.
          </li>
        </ul>
        <p>
          De exacte hoogte van een boete hangt af van je situatie. Raadpleeg altijd de actuele regels
          op{' '}
          <a
            href="https://www.belastingdienst.nl"
            className="text-warm-orange hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Belastingdienst.nl
          </a>{' '}
          of vraag je boekhouder om advies.
        </p>

        <h3>De vergrijpboete: bij opzet of grove schuld</h3>
        <p>
          Als je opzettelijk een onjuiste of onvolledige aangifte doet, of als er sprake is van grove
          schuld, kan de Belastingdienst een <strong>vergrijpboete</strong> opleggen. Deze is doorgaans
          hoger dan een standaard verzuimboete. Je ontvangt eerst een schriftelijke mededeling en
          kunt bezwaar maken.
        </p>

        <h3>Verzuimboetes: te laat aangifte of betaling</h3>
        <p>
          Naast factuurfouten zijn er aparte verzuimboetes voor het niet of niet tijdig voldoen aan
          aangifte- of betaalverplichtingen — bijvoorbeeld een te late btw-aangifte. Meer hierover:{' '}
          <Link href="/blogs/btw-te-laat-betaald" className="text-warm-orange hover:underline">
            btw te laat betaald
          </Link>
          .
        </p>

        <CtaButton />

        <h2>Wat als de fout al in je btw-aangifte staat?</h2>
        <p>
          Een fout op je factuur en een fout in je btw-aangifte zijn niet hetzelfde — maar ze hangen
          vaak samen.
        </p>
        <ul>
          <li>
            <strong>Fout op de factuur:</strong> stuur een gecorrigeerde factuur of creditnota naar
            je klant.
          </li>
          <li>
            <strong>Fout in de btw-aangifte:</strong> corrigeer via een suppletieaangifte of in een
            volgende aangifte, afhankelijk van het bedrag en de situatie.
          </li>
        </ul>
        <p>
          Meer over btw op facturen:{' '}
          <Link href="/blogs/btw-factuur-zzp" className="text-warm-orange hover:underline">
            btw op je factuur
          </Link>
          .
        </p>

        <h2>Fout ontdekt? Corrigeer tijdig</h2>
        <p>Heb je een fout ontdekt op een factuur of in je administratie? Handel dan snel:</p>
        <ul>
          <li>
            <strong>Factuur aan klant corrigeren:</strong> stuur een gecorrigeerde factuur of
            creditnota. Zo voorkom je problemen met de btw-aftrek bij je klant.
          </li>
          <li>
            <strong>Btw-aangifte corrigeren:</strong> dien waar nodig een suppletie in. Hoe eerder
            je corrigeert, hoe kleiner het risico op een boete.
          </li>
          <li>
            <strong>Kleine bedragen:</strong> in sommige situaties mag je een kleine fout verwerken
            in de eerstvolgende reguliere btw-aangifte — check de actuele regels.
          </li>
        </ul>

        <h2>Verplichte vermeldingen op je factuur</h2>
        <p>Controleer altijd of je factuur aan de wettelijke eisen voldoet. Verplicht zijn onder meer:</p>
        <ul>
          <li>Uniek factuurnummer (opeenvolgend, niet dubbel gebruikt)</li>
          <li>Factuurdatum en datum van levering of uitvoering</li>
          <li>Jouw gegevens en die van je klant (naam, adres)</li>
          <li>KVK-nummer en btw-identificatienummer</li>
          <li>Omschrijving van de geleverde producten of diensten</li>
          <li>Bedragen excl. en incl. btw, met het juiste btw-tarief (21%, 9% of 0%)</li>
        </ul>
        <p>
          Meer tips:{' '}
          <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">
            veelgemaakte fouten op facturen voorkomen
          </Link>
          . Maak gratis een correcte factuur via{' '}
          <Link href="/blogs/factureren-zonder-account" className="text-warm-orange hover:underline">
            factureren zonder account
          </Link>
          .
        </p>

        <h2>Conclusie</h2>
        <p>
          Een foutieve factuur kan gevolgen hebben voor jou, je klant en je btw-administratie. Door
          te weten welke fouten het vaakst voorkomen, je facturen zorgvuldig op te stellen en fouten
          tijdig te corrigeren, houd je het risico op problemen en boetes beperkt.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat zijn de gevolgen van een foutieve factuur?</h3>
        <p>
          Meestal moet je corrigeren: factuur aanpassen, klant informeren, administratie en
          eventueel btw-aangifte bijwerken. In sommige gevallen kan een boete volgen.
        </p>
        <h3>Wat staat er meestal fout op facturen?</h3>
        <p>
          Verkeerd btw-tarief of bedrag, ontbrekend factuurnummer, verkeerde datum, onjuiste
          klantgegevens of een verkeerd totaal.
        </p>
        <h3>Kan ik een boete voorkomen?</h3>
        <p>
          Corrigeer fouten zo snel mogelijk — op de factuur én in je administratie. Bij twijfel
          vraag je boekhouder of raadpleeg je Belastingdienst.nl.
        </p>
        <h3>Wat moet er verplicht op een factuur?</h3>
        <p>
          Uniek factuurnummer, datum, jouw en klantgegevens (incl. KVK en btw-nummer), omschrijving,
          bedragen en het correcte btw-tarief.
        </p>
      </>
    ),
  },
  {
    slug: 'factuur-niet-betaald-wat-mag-je-doen',
    relatedSlugs: ['sneller-betalen-factuur', 'factuur-fouten-voorkomen', 'factuur-maken-zzp', 'factuurbeheer-overzicht'],
    title: 'Factuur niet betaald: wat mag je doen?',
    excerpt: 'Een klant betaalt niet? Ontdek het stappenplan: van vriendelijke herinnering en aanmaning tot incassobureau en gerechtelijke procedure. Plus wettelijke rente, btw terugvragen en verjaring.',
    keywords: 'factuur niet betaald, klant betaalt niet, aanmaning factuur, incassokosten factuur, wettelijke rente factuur, wanbetaling, incassobureau factuur',
    image: {
      url: 'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/Blogs/Mijn%20factuur%20wordt%20niet%20betaald.png',
      alt: 'Factuur niet betaald: wat mag je doen? Stappenplan bij wanbetaling.',
    },
    datePublished: '2026-02-06',
    dateModified: '2026-02-06',
    faq: [
      { question: 'Wat moet ik doen als een klant niet betaalt?', answer: 'Begin met een vriendelijke herinnering (mail of brief), bel de klant en vraag waarom er niet betaald is. Stuur daarna een formele aanmaning (bij voorkeur aangetekend) met een termijn van 14 dagen. Bij consumenten is een kosteloze aanmaning verplicht voordat je incassokosten mag rekenen.' },
      { question: 'Mag ik incassokosten en wettelijke rente rekenen bij te late betaling?', answer: 'Ja. Na het versturen van de aanmaning mag je wettelijke rente en incassokosten in rekening brengen. Bij particulieren moet je eerst een WIK-brief (14-dagenbrief) versturen voordat je incassokosten mag rekenen.' },
      { question: 'Hoelang duurt de verjaring van een factuur?', answer: 'Bij consumenten verjaart een factuur na 2 jaar (bij diensten en reizen 5 jaar). Bij zakelijke klanten is dat 5 jaar na afloop van de betalingstermijn. Door op tijd een herinnering te sturen, stuit je de verjaring — de termijn begint dan opnieuw.' },
      { question: 'Kan ik btw terugvragen als een factuur niet betaald wordt?', answer: 'Ja. Als een factuur definitief oninbaar is, kun je na een jaar de btw als oninbaar terugvragen bij de Belastingdienst.' },
      { question: 'Wanneer moet ik een incassobureau of deurwaarder inschakelen?', answer: 'Als het minnelijk traject (herinnering, belcontact, aanmaning) niets oplevert. Een incassobureau stuurt namens jou brieven; een deurwaarder kan een gerechtelijke procedure starten en dwangmiddelen gebruiken. Bij hoge bedragen of complexe zaken is een incasso-advocaat verstandig.' },
    ],
    content: (
      <>
        <p>Een factuur die maanden openstaat: het overkomt bijna elke ondernemer. Voordat je in paniek raakt of juist alles laat sudderen — er is een helder stappenplan. In dit artikel lees je <strong>wat je mag doen als een factuur niet betaald wordt</strong>: van een vriendelijke herinnering tot het inschakelen van een incassobureau of rechter. Zo handel je kordaat én binnen de wet.</p>

        <h2>Stap 1: Minnelijk traject — zelf actie ondernemen</h2>
        <p>De meeste betalingsachterstanden worden opgelost zonder juridische stappen. Begin daarom altijd met persoonlijk contact en duidelijke communicatie.</p>

        <h3>Vriendelijke herinnering</h3>
        <p>Stuur een herinneringsmail of -brief enkele dagen nadat de betalingstermijn verstreken is. Soms is de factuur simpelweg over het hoofd gezien. Verwijs naar de factuur, het openstaande bedrag en de betaalgegevens. Meld dat je wettelijke rente in rekening gaat brengen als er niet betaald wordt.</p>

        <h3>Telefonisch contact</h3>
        <p>Persoonlijk contact werkt vaak het best. Bel de klant op en vraag of de dienst naar wens was en of de factuur klopt. Vraag ook waarom er nog niet betaald is — zo achterhaal je of er een misverstand, een fout of een structureel probleem speelt. Maak aantekeningen van het gesprek; die kunnen later van pas komen.</p>

        <h3>Aanmaning versturen</h3>
        <p>Als de herinnering geen reactie oplevert, verstuur een <strong>formele aanmaning</strong> (ook wel sommatiebrief genoemd). Daarin verwijs je naar de levering, de factuur en eventuele eerdere contacten. Geef een betalingstermijn van 14 dagen en maak melding van incassokosten en juridische stappen bij niet-betaling.</p>
        <p>Stuur de aanmaning per post én mail, en bewaar kopieën. Voor bewijs van ontvangst kun je hem <strong>aangetekend</strong> versturen. Voor consumenten is een kosteloze aanmaning verplicht; een betalingsherinnering telt hiervoor. Bij zakelijke klanten mag je je eigen incassoprocedure volgen.</p>

        <h3>WIK-brief bij particulieren</h3>
        <p>Factureer je aan consumenten? Dan moet je vóór het rekenen van incassokosten een <strong>14-dagen brief</strong> (Wet Incassokosten, WIK) versturen. Daarin geef je de klant 14 dagen de tijd om alsnog te betalen, voordat je extra kosten mag doorbelasten.</p>

        <h2>Stap 2: Buitengerechtelijk — hulp inschakelen</h2>
        <p>Levert het minnelijk traject niets op? Schakel dan professionele hulp in.</p>
        <ul>
          <li><strong>Incassobureau:</strong> Stuurt namens jou brieven en verhoogt de druk. Kan betaling niet afdwingen.</li>
          <li><strong>Gerechtsdeurwaarder:</strong> Kan een gerechtelijke procedure starten en dwangmiddelen gebruiken (zoals beslaglegging), meestal na een vonnis van de rechter.</li>
          <li><strong>Incasso-advocaat:</strong> Aan te raden bij hoge bedragen of complexe zaken. Kan een dagvaarding opstellen of het faillissement van de schuldenaar aanvragen.</li>
        </ul>
        <p>Bij buitenlandse klanten: schakel een incassobureau in dat het land en de taal kent. Lukt dat niet, dan kun je een Europees betalingsbevelprocedure starten — de klant krijgt dan 30 dagen om te reageren.</p>

        <CtaButton />

        <h2>Stap 3: Gerechtelijk traject</h2>
        <p>Blijft betaling uit? Dan kun je via een deurwaarder een <strong>dagvaarding</strong> laten betekenen en een gerechtelijke procedure starten. Bij structurele wanbetalers kan een kort geding of dreigen met faillissement helpen. Als laatste redmiddel kun je het faillissement van de klant aanvragen. Is je klant al failliet? Dien dan zo snel mogelijk je vordering in bij de curator (indienen ter verificatie).</p>

        <h2>Rente, kosten en fiscale gevolgen</h2>
        <h3>Wettelijke rente en incassokosten</h3>
        <p>Na de aanmaning mag je <strong>wettelijke rente</strong> en <strong>incassokosten</strong> in rekening brengen. De wettelijke rente is de rente die de wet toekent bij betalingsachterstand. Incassokosten zijn de kosten die je maakt om je geld te krijgen. Zorg dat je deze bedragen duidelijk communiceert.</p>

        <h3>Btw terugvragen als oninbaar</h3>
        <p>Bereken je btw op je factuur? Die betaal je aan de Belastingdienst, ook als de klant niet betaalt. Wordt de factuur definitief niet betaald? Dan kun je de btw als <strong>oninbaar</strong> terugvragen. Meestal kan dat na een jaar. Check de actuele regels op Belastingdienst.nl.</p>

        <h3>Let op verjaring</h3>
        <p>Facturen verjaren als je te lang niets doet. Bij <strong>consumenten</strong>: 2 jaar (bij diensten en reizen 5 jaar). Bij <strong>zakelijke klanten</strong>: 5 jaar na afloop van de betalingstermijn. Herinner je de klant vóór het einde van de verjaringstermijn aan de factuur? Dan <strong>stuit</strong> je de verjaring — de termijn begint opnieuw. Handel dus tijdig.</p>

        <h2>Betalingsregelingen en juridische middelen</h2>
        <p>Is de klant tijdelijk krap bij kas? Onderzoek eerst of betaling met kort uitstel mogelijk is. Is dat niet het geval, spreek dan een <strong>betalingsregeling</strong> af. Zet deze op papier en spreek af dat de regeling stopt als de klant niet op de afgesproken momenten betaalt.</p>
        <p>Bij geleverde <strong>producten of goederen</strong> kun je soms je schade beperken:</p>
        <ul>
          <li><strong>Eigendomsvoorbehoud:</strong> Staat dit in je algemene voorwaarden? Dan blijf je eigenaar tot er betaald is. Je kunt de goederen terugvorderen zolang de klant niet betaalt.</li>
          <li><strong>Recht van reclame:</strong> Hiermee kun je geleverde goederen terugvorderen bij niet-betaling, ook bij surseance of faillissement.</li>
          <li><strong>Verrekening:</strong> Koop je ook bij je klant? Dan kun je onder voorwaarden je schuld verrekenen met het bedrag dat zij jou nog verschuldigd zijn.</li>
        </ul>

        <h2>Risico&apos;s van wanbetaling voorkomen</h2>
        <p>Voorkomen is beter dan genezen. Sluit een kredietverzekering af, check de financiële situatie van zakelijke klanten voor grote orders, en zet in je algemene voorwaarden dat bij niet-tijdig betalen geen volgende leveringen plaatsvinden. Een heldere factuur met alle verplichte gegevens en een duidelijke betalingstermijn helpt ook — zo voorkom je misverstanden. Lees ook <Link href="/blogs/sneller-betalen-factuur" className="text-warm-orange hover:underline">hoe je je factuur sneller betaald krijgt</Link> en <Link href="/blogs/factuur-fouten-voorkomen" className="text-warm-orange hover:underline">veelgemaakte fouten op facturen</Link>.</p>

        <CtaButton />

        <h2>Conclusie</h2>
        <p>Bij een niet-betaalde factuur is het belangrijk om kordaat en gestructureerd op te treden. Begin met een herinnering en belcontact, ga over op een formele aanmaning en schakel zo nodig een incassobureau of advocaat in. Vergeet niet: je mag wettelijke rente en incassokosten rekenen, je kunt btw als oninbaar terugvragen, en door tijdig te handelen voorkom je verjaring. Dit advies is gebaseerd op algemene Nederlandse regelgeving — voor juridische stappen raden we aan een incassospecialist of advocaat te raadplegen.</p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoelang wacht ik voor ik een aanmaning stuur?</h3>
        <p>Stuur een herinnering enkele dagen na het verstrijken van de betalingstermijn. Als daarop geen reactie komt, kun je na ongeveer een week een aanmaning versturen.</p>
        <h3>Moet ik een aanmaning aangetekend versturen?</h3>
        <p>Het is niet verplicht, maar wel verstandig. Zo heb je bewijs van ontvangst als de klant later ontkent de brief te hebben gekregen.</p>
        <h3>Wat als mijn klant in het buitenland zit?</h3>
        <p>Schakel een incassobureau in dat het land kent. Je kunt ook een Europees betalingsbevelprocedure starten. Wil je dat de Nederlandse rechter beslist? Zet dit dan van tevoren in je contract.</p>
      </>
    ),
  },
  {
    slug: 'hypotheek-als-zzper-hoe-werkt-het',
    relatedSlugs: [
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
      'factureren-startende-zzper',
    ],
    title: "Hypotheek als zzp'er: hoe werkt het?",
    excerpt:
      "Een hypotheek als zzp'er aanvragen? Lees hoe je inkomen wordt vastgesteld, welke documenten nodig zijn en waar geldverstrekkers op letten.",
    keywords:
      "hypotheek als zzp'er, hypotheek zzp, hypotheek voor zzp'ers, hypotheek als zelfstandige, hypotheek aanvragen als zzp'er, hypotheek zzp'er, huis kopen als zzp'er, hypotheek berekenen zzp, inkomen hypotheek zzp, toetsinkomen zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20als%20zzper%20hoe%20werkt%20het.jpg',
      alt: "Hypotheek als zzp'er: hoe werkt het? Uitleg over inkomen, documenten en maximale hypotheek.",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Kan ik als zzp'er een hypotheek krijgen?",
        answer:
          'Ja. Ook zzp\'ers kunnen een hypotheek krijgen. De geldverstrekker beoordeelt daarbij onder andere het inkomen, de financiële verplichtingen en de waarde van de woning.',
      },
      {
        question: "Hoe lang moet ik zzp'er zijn voor een hypotheek?",
        answer:
          'Dat hangt af van de hypotheek en de geldverstrekker. Voor NHG geldt dat ondernemers die minimaal 12 maanden actief zijn gebruik kunnen maken van de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Moet ik drie jaar ondernemer zijn?',
        answer:
          'Nee, drie jaar ondernemerschap is geen algemene voorwaarde voor iedere hypotheek. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De inkomensanalyse kijkt normaal gesproken naar maximaal drie jaar historie, of korter als de onderneming jonger is.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan, maar de mogelijkheden hangen onder andere af van hoe lang je onderneming bestaat en welke inkomensgegevens beschikbaar zijn. Bij NHG bestaat voor ondernemers vanaf 12 maanden ondernemerschap de route via de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Wat is een toetsinkomen?',
        answer:
          'Het toetsinkomen is het inkomen dat voor de hypotheekbeoordeling wordt gebruikt om te bepalen hoeveel je verantwoord kunt lenen. Bij ondernemers wordt dit vastgesteld volgens de toepasselijke inkomensmethodiek.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet simpelweg als omzetbedrag. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode voor de hypotheek kan worden meegenomen.',
      },
      {
        question: 'Kan ik met wisselende inkomsten een hypotheek krijgen?',
        answer:
          'Ja, wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker beoordeelt de inkomenshistorie en bepaalt welk inkomen voor de hypotheek kan worden gebruikt.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Voor NHG valt een zelfstandige ondernemer, bijvoorbeeld met een eenmanszaak, onder de route voor de Inkomensverklaring Ondernemer wanneer aan de voorwaarden wordt voldaan.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>hypotheek als zzp&apos;er</strong> aanvragen werkt anders dan wanneer je in
          loondienst bent. Een geldverstrekker kijkt niet alleen naar je huidige inkomen, maar moet
          bepalen welk inkomen uit je onderneming voor de hypotheek kan worden meegenomen.
        </p>
        <p>
          Dat betekent niet dat je als zzp&apos;er geen hypotheek kunt krijgen. Ook ondernemers
          kunnen een hypotheek afsluiten. Wel moet je kunnen aantonen wat je inkomen is en hoe de
          financiële situatie van je onderneming ervoor staat.
        </p>
        <p>
          In dit artikel lees je hoe een <strong>hypotheek voor zzp&apos;ers</strong> werkt, hoe je
          inkomen wordt vastgesteld, welke documenten je nodig hebt en welke factoren invloed hebben
          op hoeveel je kunt lenen.
        </p>
        <p>
          Wil je direct een eerste berekening maken? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je als zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja. Als zzp&apos;er kun je gewoon een hypotheek aanvragen.</p>
        <p>
          Het belangrijkste verschil met iemand in loondienst is de manier waarop het inkomen wordt
          vastgesteld. Bij een werknemer kan bijvoorbeeld een werkgeversverklaring worden gebruikt.
          Bij een ondernemer moet de geldverstrekker het ondernemersinkomen beoordelen.
        </p>
        <p>
          Daarbij kan onder meer worden gekeken naar de financiële resultaten van je onderneming en
          de ontwikkeling van je inkomen.
        </p>
        <p>
          Voor een hypotheekaanvraag moet de geldverstrekker uiteindelijk beoordelen of de hypotheek
          verantwoord is. De maximale hypotheek wordt onder andere begrensd door je inkomen en de
          waarde van de woning. Ook andere financiële verplichtingen kunnen van invloed zijn.
        </p>

        <h2>Hoe werkt een hypotheek voor een zzp&apos;er?</h2>
        <p>In grote lijnen bestaat het proces uit een aantal stappen:</p>
        <ol>
          <li>Je bepaalt hoeveel je ongeveer wilt lenen.</li>
          <li>Je brengt je ondernemersinkomen en financiële situatie in kaart.</li>
          <li>
            De geldverstrekker of adviseur beoordeelt welk inkomen voor de hypotheek meetelt.
          </li>
          <li>Je levert de benodigde financiële documenten aan.</li>
          <li>De geldverstrekker berekent hoeveel je verantwoord kunt lenen.</li>
          <li>Daarna wordt de hypotheekaanvraag verder beoordeeld.</li>
        </ol>
        <p>
          Bij ondernemers is vooral de vaststelling van het <strong>toetsinkomen</strong> belangrijk.
        </p>
        <p>
          Het <strong>toetsinkomen</strong> is het inkomen waarmee de hypotheekverstrekker
          rekent bij het bepalen van je maximale hypotheek. Dit hoeft niet simpelweg hetzelfde
          bedrag te zijn als je omzet of de winst van het meest recente boekjaar.
        </p>

        <h2>Welk inkomen telt voor een hypotheek als zzp&apos;er?</h2>
        <p>
          Als zzp&apos;er heb je te maken met ondernemersinkomen. De manier waarop dit inkomen voor
          je hypotheek wordt vastgesteld, hangt onder andere af van je ondernemingsvorm, je historie
          en de regels die de geldverstrekker toepast.
        </p>
        <p>
          Bij NHG wordt voor ondernemers die minimaal 12 maanden actief zijn gewerkt met een{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Een onafhankelijke rekenexpert
          analyseert daarbij de onderneming en stelt een toetsinkomen vast.
        </p>
        <p>
          Een Inkomensverklaring Ondernemer kijkt doorgaans naar de financiële gegevens van de
          afgelopen drie jaar, of naar een kortere periode wanneer de onderneming nog geen drie jaar
          bestaat.
        </p>
        <p>
          Daarom is het niet juist om simpelweg te zeggen dat je voor een hypotheek altijd drie
          volledige jaren ondernemer moet zijn.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>Hoeveel je kunt lenen hangt niet alleen af van je inkomen.</p>
        <p>Bij de beoordeling spelen onder andere mee:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente en rentevastperiode;</li>
          <li>andere financiële verplichtingen;</li>
          <li>de waarde van de woning;</li>
          <li>eventuele inkomsten van een partner;</li>
          <li>de geldende wettelijke en acceptatienormen.</li>
        </ul>
        <p>
          De maximale hypotheek ten opzichte van de waarde van een woning is in Nederland in
          beginsel 100%. Daarnaast gelden inkomensnormen voor de maximale hypotheek.
        </p>
        <p>
          Een studieschuld, persoonlijke lening of leaseverplichting kan bijvoorbeeld invloed hebben
          op je maximale hypotheek.
        </p>

        <h3>Hypotheek berekenen als zzp&apos;er</h3>
        <p>
          Wil je een eerste indicatie van wat je als zzp&apos;er zou kunnen lenen?
        </p>
        <HypotheekCta />
        <p>
          Onze calculator geeft een indicatie op basis van je inkomen, financiële verplichtingen en
          een gekozen rente. De daadwerkelijke maximale hypotheek kan anders uitvallen, omdat een
          geldverstrekker je volledige financiële situatie en de geldende acceptatievoorwaarden
          beoordeelt.
        </p>

        <h2>Moet je 3 jaar zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Niet altijd.</p>
        <p>
          De vaak genoemde regel dat je eerst drie jaar ondernemer moet zijn, is te algemeen.
        </p>
        <p>
          Voor NHG geldt bijvoorbeeld dat een ondernemer die minimaal 12 maanden zelfstandig actief
          is gebruik kan maken van de Inkomensverklaring Ondernemer. De inkomensverklaring kan
          worden gebaseerd op een periode korter dan drie jaar wanneer de onderneming nog jonger is.
        </p>
        <p>
          Dat betekent niet automatisch dat iedere startende zzp&apos;er na 12 maanden dezelfde
          hypotheekmogelijkheden heeft. De geldverstrekker moet het inkomen en de financiële
          situatie nog steeds beoordelen.
        </p>
        <p>
          Heb je een onderneming die nog maar kort bestaat, dan is het daarom belangrijk om
          specifiek te kijken naar de voorwaarden die voor jouw situatie en hypotheekaanvraag
          gelden. Meer uitleg vind je ook op onze pagina over{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hypotheek als startende zzp&apos;er</h2>
        <p>
          Als startende zzp&apos;er kan een hypotheekaanvraag lastiger zijn doordat je minder
          historische financiële gegevens hebt.
        </p>
        <p>Dat betekent echter niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Bij de beoordeling kan het verschil maken hoe lang je onderneming bestaat en welke
          inkomensgegevens beschikbaar zijn. Bij NHG wordt voor ondernemers die minimaal 12 maanden
          actief zijn de Inkomensverklaring Ondernemer gebruikt om het toetsinkomen vast te stellen.
          Bij een jongere onderneming wordt voor de analyse een kortere historie gebruikt.
        </p>
        <p>
          Heb je eerder in loondienst gewerkt en ben je daarna voor jezelf begonnen, dan kan ook je
          eerdere arbeids- en inkomenssituatie relevant zijn. De precieze manier waarop dit wordt
          meegenomen hangt af van de geldverstrekker en de geldende regels. Lees ook onze uitleg
          over{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Hypotheek met een eenmanszaak</h2>
        <p>Een eenmanszaak is een veel voorkomende ondernemingsvorm onder zzp&apos;ers.</p>
        <p>
          Bij een hypotheekaanvraag wordt niet simpelweg gekeken naar je omzet. De financiële
          resultaten van de onderneming moeten worden beoordeeld om vast te stellen welk inkomen
          voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Voor NHG geldt dat een zelfstandige ondernemer, bijvoorbeeld iemand met een eenmanszaak,
          onder de voorwaarden voor de Inkomensverklaring Ondernemer kan vallen. De NHG-normen
          noemen minimaal 12 maanden actief zijn als ondernemer als voorwaarde voor het gebruik van
          de IKV.
        </p>

        <h2>Hypotheek met wisselend inkomen als zzp&apos;er</h2>
        <p>Een wisselend ondernemersinkomen hoeft niet automatisch een probleem te zijn.</p>
        <p>
          Juist daarom wordt bij ondernemers gekeken naar de financiële historie en ontwikkeling van
          de onderneming. De geldverstrekker moet bepalen welk inkomen voldoende betrouwbaar is om
          mee te nemen in de hypotheekberekening.
        </p>
        <p>
          Bij een stijgend of dalend inkomen kan de uitkomst daardoor anders zijn dan wanneer je
          alleen naar je meest recente jaar kijkt.
        </p>
        <p>
          Lees meer in{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Welke documenten je precies moet aanleveren verschilt per situatie en geldverstrekker.
        </p>
        <p>
          Bij een hypotheekaanvraag als ondernemer kunnen financiële documenten over je onderneming
          nodig zijn. Denk bijvoorbeeld aan jaarcijfers en belastinggegevens. Lees meer in{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
        <p>
          Bij een NHG-aanvraag waarbij de Inkomensverklaring Ondernemer wordt gebruikt, wordt de
          onderneming uitgebreid geanalyseerd. De inkomensverklaring wordt opgesteld nadat de
          benodigde stukken zijn ontvangen. NHG vermeldt dat de verklaring vervolgens zes maanden
          geldig is.
        </p>
        <p>
          Zorg er daarom voor dat je administratie en financiële gegevens op orde zijn voordat je
          een hypotheekaanvraag start. Goede facturatie helpt daarbij — zie ook{' '}
          <Link href="/blogs/factuur-maken-zzp" className="text-warm-orange hover:underline">
            hoe je een correcte factuur maakt als zzp&apos;er
          </Link>
          .
        </p>

        <h2>Hypotheek met NHG als zzp&apos;er</h2>
        <p>NHG staat voor Nationale Hypotheek Garantie.</p>
        <p>
          Voor ondernemers bestaat een specifieke route via de{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Deze verklaring wordt opgesteld door een
          daarvoor aangewezen rekenexpert en wordt gebruikt om het ondernemersinkomen voor de
          hypotheek vast te stellen.
        </p>
        <p>
          Voor NHG moet daarnaast aan de overige voorwaarden worden voldaan. Zo gelden er grenzen
          aan de waarde van de woning waarvoor NHG kan worden gebruikt. Deze grenzen kunnen jaarlijks
          veranderen.
        </p>
        <p>
          Controleer daarom altijd de{' '}
          <a
            href="https://www.nhg.nl/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-warm-orange hover:underline"
          >
            actuele NHG-voorwaarden
          </a>{' '}
          wanneer je daadwerkelijk een hypotheek gaat aanvragen.
        </p>

        <h2>Wat heeft je woning met je maximale hypotheek te maken?</h2>
        <p>Je maximale hypotheek wordt niet alleen bepaald door je inkomen.</p>
        <p>
          Ook de waarde van de woning speelt een rol. In Nederland kun je in het algemeen maximaal
          100% van de woningwaarde financieren. Er bestaan uitzonderingen, bijvoorbeeld voor
          bepaalde energiebesparende maatregelen.
        </p>
        <p>
          Je inkomen kan dus voldoende zijn om een bepaald bedrag te lenen, terwijl de waarde van de
          woning bepaalt hoeveel je voor die woning daadwerkelijk met een hypotheek kunt financieren.
        </p>

        <h2>Wat hebben andere schulden voor invloed?</h2>
        <p>Andere financiële verplichtingen kunnen je maximale hypotheek verlagen.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>een studieschuld;</li>
          <li>een persoonlijke lening;</li>
          <li>een leasecontract;</li>
          <li>andere kredietverplichtingen.</li>
        </ul>
        <p>
          Deze verplichtingen worden meegenomen bij de beoordeling van je financiële situatie.
          Rijksoverheid vermeldt dat dergelijke verplichtingen invloed kunnen hebben op het maximale
          hypotheekbedrag en dat je financiële verplichtingen bij een hypotheekaanvraag moet melden.
        </p>

        <h2>Kan een partnerinkomen meetellen?</h2>
        <p>
          Heb je een partner met een inkomen, dan kan het inkomen van je partner worden meegenomen
          bij de berekening van de leencapaciteit.
        </p>
        <p>
          Hoeveel van het inkomen meetelt, hangt af van de persoonlijke situatie en de geldende
          hypotheekregels. De AFM vermeldt dat bij een partner met inkomen beide inkomens voor een
          deel kunnen meetellen bij het bepalen van de leencapaciteit.
        </p>

        <h2>Waarom is een hypotheek als zzp&apos;er soms ingewikkelder?</h2>
        <p>Het verschil zit vooral in de inkomensbeoordeling.</p>
        <p>
          Een werknemer heeft doorgaans een werkgever die het inkomen bevestigt. Bij een ondernemer
          moet de geldverstrekker eerst bepalen welk deel van het ondernemersinkomen geschikt is om
          als toetsinkomen te gebruiken.
        </p>
        <p>Daarvoor moet de financiële situatie van de onderneming worden bekeken.</p>
        <p>
          Dat betekent dat twee zzp&apos;ers met dezelfde omzet niet automatisch dezelfde maximale
          hypotheek hebben. Hun winst, financiële historie, verplichtingen en verdere persoonlijke
          situatie kunnen verschillen.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Ja. Ook zzp&apos;ers kunnen een hypotheek krijgen. De geldverstrekker beoordeelt daarbij
          onder andere het inkomen, de financiële verplichtingen en de waarde van de woning.
        </p>
        <h3>Hoe lang moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Dat hangt af van de hypotheek en de geldverstrekker. Voor NHG geldt dat ondernemers die
          minimaal 12 maanden actief zijn gebruik kunnen maken van de Inkomensverklaring Ondernemer.
        </p>
        <h3>Moet ik drie jaar ondernemer zijn?</h3>
        <p>
          Nee, drie jaar ondernemerschap is geen algemene voorwaarde voor iedere hypotheek. Voor de
          NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De
          inkomensanalyse kijkt normaal gesproken naar maximaal drie jaar historie, of korter als de
          onderneming jonger is.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan, maar de mogelijkheden hangen onder andere af van hoe lang je onderneming bestaat
          en welke inkomensgegevens beschikbaar zijn. Bij NHG bestaat voor ondernemers vanaf 12
          maanden ondernemerschap de route via de Inkomensverklaring Ondernemer.
        </p>
        <h3>Wat is een toetsinkomen?</h3>
        <p>
          Het toetsinkomen is het inkomen dat voor de hypotheekbeoordeling wordt gebruikt om te
          bepalen hoeveel je verantwoord kunt lenen. Bij ondernemers wordt dit vastgesteld volgens
          de toepasselijke inkomensmethodiek.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet simpelweg als omzetbedrag. Bij een ondernemer wordt gekeken naar het inkomen dat
          volgens de geldende beoordelingsmethode voor de hypotheek kan worden meegenomen.
        </p>
        <h3>Kan ik met wisselende inkomsten een hypotheek krijgen?</h3>
        <p>
          Ja, wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker
          beoordeelt de inkomenshistorie en bepaalt welk inkomen voor de hypotheek kan worden
          gebruikt.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Voor NHG valt een zelfstandige
          ondernemer, bijvoorbeeld met een eenmanszaak, onder de route voor de Inkomensverklaring
          Ondernemer wanneer aan de voorwaarden wordt voldaan.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>Wil je weten welke maximale hypotheek bij jouw inkomen zou kunnen passen?</p>
        <p>Gebruik onze gratis calculator voor een eerste indicatie.</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>
          Houd er rekening mee dat een online berekening geen hypotheekadvies of offerte is. De
          uiteindelijke beoordeling wordt uitgevoerd door de geldverstrekker op basis van je
          volledige situatie, documenten en de actuele voorwaarden. Meer achtergrond lees je op{' '}
          <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
            hypotheek voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Wil je verder lezen? Bekijk ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
      'factureren-startende-zzper',
    ],
    title: "Hoeveel hypotheek kan ik krijgen als zzp'er?",
    excerpt:
      "Hoeveel hypotheek kun je krijgen als zzp'er? Lees hoe je maximale hypotheek wordt berekend, welk inkomen meetelt en welke verplichtingen invloed hebben.",
    keywords:
      "hoeveel hypotheek kan ik krijgen als zzp'er, hoeveel hypotheek zzp, maximale hypotheek zzp, hypotheek berekenen zzp, maximale hypotheek als zzp'er, hoeveel kan ik lenen als zzp'er, hypotheek zzp berekenen, toetsinkomen zzp, hypotheek op basis van winst, hypotheek op basis van inkomen zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hoeveel%20hypotheek%20kan%20ik%20krijgen%20als%20zzper.jpg',
      alt: "Hoeveel hypotheek kan ik krijgen als zzp'er? Uitleg over maximale hypotheek, toetsinkomen en berekening.",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Hoeveel hypotheek kan ik krijgen als zzp'er?",
        answer:
          'Dat hangt af van je toetsinkomen, de hypotheekrente, financiële verplichtingen, de woningwaarde, een eventueel partnerinkomen en de actuele hypotheeknormen. Er is daarom geen vast hypotheekbedrag voor iedere zzp\'er.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €40.000 inkomen?',
        answer:
          'Dat is niet alleen afhankelijk van je inkomen. Ook de rente, financiële verplichtingen, woningwaarde en overige omstandigheden spelen een rol. Een actuele hypotheekberekening is nodig om een indicatie te krijgen.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €50.000 inkomen?',
        answer:
          'Ook hiervoor bestaat geen vast bedrag. De maximale hypotheek wordt berekend op basis van het inkomen en de overige relevante gegevens van je huishouden.',
      },
      {
        question: 'Hoeveel hypotheek krijg ik met €60.000 inkomen?',
        answer:
          'Een inkomen van €60.000 leidt niet automatisch tot één bepaalde maximale hypotheek. De actuele hypotheeknormen en je persoonlijke financiële situatie bepalen de uitkomst.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode als toetsinkomen kan worden gebruikt.',
      },
      {
        question: 'Telt mijn winst mee voor mijn hypotheek?',
        answer:
          'De financiële resultaten van je onderneming zijn relevant voor het bepalen van je ondernemersinkomen. De winst van één jaar is echter niet automatisch gelijk aan het inkomen waarmee de hypotheek wordt berekend.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan. Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken gebruikmaken van de Inkomensverklaring Ondernemer. De uiteindelijke hypotheekmogelijkheden hangen af van het vastgestelde inkomen en de overige financiële situatie.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Het inkomen uit de onderneming moet wel volgens de geldende regels worden beoordeeld.',
      },
      {
        question: 'Kan ik een hypotheek krijgen als mijn inkomen wisselt?',
        answer:
          'Dat kan. Wisselende inkomsten sluiten een hypotheek niet automatisch uit. De geldverstrekker beoordeelt welke inkomensgegevens en historie voor de aanvraag kunnen worden gebruikt.',
      },
    ],
    content: (
      <>
        <p>
          Hoeveel hypotheek je als zzp&apos;er kunt krijgen, hangt vooral af van het inkomen dat
          voor de hypotheek wordt meegenomen. Dat inkomen wordt bij een ondernemer niet altijd op
          dezelfde manier vastgesteld als bij iemand in loondienst.
        </p>
        <p>
          Daarnaast spelen onder andere de hypotheekrente, je financiële verplichtingen, het
          inkomen van een eventuele partner en de waarde van de woning een rol.
        </p>
        <p>
          Er is daarom geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen.
        </p>
        <p>
          Wil je direct een eerste indicatie berekenen? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>
          Als zzp&apos;er kun je net als iemand in loondienst een hypotheek krijgen. De{' '}
          <strong>maximale hypotheek zzp</strong> wordt bepaald op basis van de geldende leennormen
          en jouw persoonlijke financiële situatie.
        </p>
        <p>
          Bij ondernemers is de eerste belangrijke stap het vaststellen van het{' '}
          <strong>toetsinkomen</strong>. Dat is het inkomen waarmee de hypotheekverstrekker rekent
          bij de beoordeling van je maximale hypotheek.
        </p>
        <p>
          Je omzet is daarbij niet hetzelfde als je toetsinkomen. Een ondernemer met €100.000 omzet
          kan bijvoorbeeld een heel andere financiële situatie hebben dan een ondernemer met
          dezelfde omzet maar veel hogere bedrijfskosten.
        </p>
        <p>
          Daarom wordt gekeken naar het inkomen dat volgens de geldende beoordelingsmethode voor de
          hypotheek kan worden meegenomen.
        </p>

        <h2>Waar hangt je maximale hypotheek als zzp&apos;er van af?</h2>
        <p>Je maximale hypotheek wordt onder andere beïnvloed door:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>de financiële verplichtingen die je al hebt;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende wettelijke leennormen;</li>
          <li>eventuele extra leenruimte voor energiebesparende maatregelen.</li>
        </ul>
        <p>
          De hypotheeknormen worden jaarlijks vastgesteld. Voor 2026 zijn de leennormen opnieuw
          aangepast. Het precieze effect daarvan verschilt per huishouden en inkomen.
        </p>
        <p>
          Daarom kun je op basis van alleen je omzet of winst niet betrouwbaar bepalen hoeveel je
          maximaal kunt lenen.
        </p>

        <h2>Welk inkomen telt voor je hypotheek als zzp&apos;er?</h2>
        <p>
          Bij een ondernemer wordt eerst bepaald welk inkomen voor de hypotheek gebruikt mag worden.
        </p>
        <p>
          Voor NHG gebeurt dit bij een ondernemer die minimaal 12 maanden actief is via de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Een onafhankelijke rekenexpert
          analyseert de onderneming en stelt op basis daarvan een toetsinkomen vast.
        </p>
        <p>
          Bij de analyse wordt doorgaans gekeken naar de financiële gegevens van de onderneming. NHG
          geeft aan dat de analyse meestal betrekking heeft op de afgelopen drie jaar, of korter
          wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Het is dus niet juist om simpelweg je omzet of de winst van één jaar als hypotheekinkomen
          te gebruiken. Lees ook{' '}
          <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
            hoe een hypotheek als zzp&apos;er werkt
          </Link>
          .
        </p>

        <h2>Hoe wordt het toetsinkomen van een zzp&apos;er bepaald?</h2>
        <p>
          De precieze berekening hangt af van de situatie en de geldende inkomensmethodiek.
        </p>
        <p>
          Bij de NHG-systematiek wordt onder andere gekeken naar de ontwikkeling van het inkomen.
          NHG vermeldt bijvoorbeeld dat wanneer het inkomen in het laatste jaar lager is dan het
          gemiddelde inkomen, het laatste jaar als uitgangspunt kan gelden. Ook wordt gekeken naar
          het lopende boekjaar.
        </p>
        <p>
          Er kunnen daarnaast correcties worden toegepast. NHG noemt bijvoorbeeld correcties voor de
          auto van de zaak en aspecten zoals solvabiliteit en liquiditeit.
        </p>
        <p>
          Daarom kan het toetsinkomen lager of anders uitvallen dan het bedrag dat je zelf als
          &quot;mijn inkomen&quot; beschouwt.
        </p>

        <h2>Voorbeeld: omzet, winst en toetsinkomen</h2>
        <p>Stel dat je als zzp&apos;er €100.000 omzet per jaar hebt.</p>
        <p>
          Dat betekent niet dat je voor een hypotheek automatisch een inkomen van €100.000 hebt.
        </p>
        <p>
          Van je omzet betaal je bijvoorbeeld zakelijke kosten. Het bedrag dat na zakelijke kosten
          overblijft, is veel relevanter voor de beoordeling van je ondernemersinkomen.
        </p>
        <p>
          Ook daarna kan het inkomen dat uiteindelijk voor de hypotheek wordt gebruikt anders
          uitvallen door de toegepaste inkomensmethodiek en eventuele correcties.
        </p>
        <p>Daarom is de vraag:</p>
        <p>
          <strong>&quot;Hoeveel omzet heb je?&quot;</strong>
        </p>
        <p>minder relevant voor je maximale hypotheek dan:</p>
        <p>
          <strong>&quot;Welk toetsinkomen wordt voor jouw hypotheek vastgesteld?&quot;</strong>
        </p>

        <h2>Kun je met €50.000 inkomen een hypotheek krijgen?</h2>
        <p>
          Dat kan, maar er is niet één vast hypotheekbedrag dat bij €50.000 inkomen hoort.
        </p>
        <p>De maximale hypotheek hangt ook af van bijvoorbeeld:</p>
        <ul>
          <li>de hypotheekrente;</li>
          <li>je leeftijd en persoonlijke situatie;</li>
          <li>eventuele financiële verplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de woningwaarde;</li>
          <li>de actuele hypotheeknormen.</li>
        </ul>
        <p>Een berekening met alleen een inkomensbedrag is daarom altijd een indicatie.</p>

        <h2>Kun je met €60.000 inkomen een hypotheek krijgen?</h2>
        <p>
          Ook bij een toetsinkomen van €60.000 kun je niet zonder meer één maximale hypotheek
          noemen.
        </p>
        <p>
          De hypotheekrente en andere financiële omstandigheden hebben invloed op de maximale
          leencapaciteit. De wettelijke leennormen worden bovendien jaarlijks aangepast.
        </p>
        <p>
          Gebruik daarom een actuele hypotheekberekening in plaats van een vaste vuistregel.
        </p>

        <h3>Hypotheek berekenen als zzp&apos;er</h3>
        <p>
          Wil je weten wat jouw inkomen ongeveer betekent voor je maximale hypotheek?
        </p>
        <HypotheekCta />
        <p>
          Onze calculator geeft een eerste indicatie op basis van je inkomen, maandelijkse
          verplichtingen en een gekozen rente.
        </p>
        <p>
          De uitkomst is geen hypotheekadvies en geen aanbod van een geldverstrekker.
        </p>

        <h2>Heeft je winst invloed op je maximale hypotheek?</h2>
        <p>Ja. Je ondernemersinkomen is belangrijk voor de hypotheekbeoordeling.</p>
        <p>Maar je kunt niet simpelweg zeggen:</p>
        <p>
          <strong>winst × een vaste factor = maximale hypotheek.</strong>
        </p>
        <p>
          De hypotheek wordt beoordeeld aan de hand van de geldende inkomens- en leennormen. Bij
          ondernemers moet bovendien eerst worden bepaald welk inkomen als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Een hogere structurele winst kan dus leiden tot een hoger toetsinkomen, maar de maximale
          hypotheek volgt niet rechtstreeks uit één winstbedrag.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen met een eenmanszaak?</h2>
        <p>Een eenmanszaak sluit een hypotheek niet uit.</p>
        <p>
          Als ondernemer met een eenmanszaak wordt je ondernemersinkomen beoordeeld. Voor NHG geldt
          dat een zelfstandige ondernemer die minimaal 12 maanden actief is gebruikmaakt van de
          Inkomensverklaring Ondernemer voor het vaststellen van het toetsinkomen.
        </p>
        <p>De financiële historie van de onderneming speelt daarbij een belangrijke rol.</p>

        <h2>Hoeveel hypotheek kan ik krijgen als startende zzp&apos;er?</h2>
        <p>
          Als startende zzp&apos;er heb je mogelijk minder financiële historie dan een ondernemer
          die al meerdere jaren actief is.
        </p>
        <p>Dat betekent niet automatisch dat je geen hypotheek kunt krijgen.</p>
        <p>
          Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken gebruikmaken van
          de Inkomensverklaring Ondernemer. Wanneer de onderneming jonger is dan drie jaar, kan de
          inkomensanalyse betrekking hebben op een kortere periode.
        </p>
        <p>
          Of je daadwerkelijk een bepaald bedrag kunt lenen, hangt vervolgens af van het
          vastgestelde toetsinkomen en je verdere financiële situatie. Meer over starters lees je
          op{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Heeft een studieschuld invloed op je maximale hypotheek?</h2>
        <p>
          Ja, financiële verplichtingen kunnen invloed hebben op hoeveel je kunt lenen.
        </p>
        <p>
          Een studieschuld is daarom relevant bij een hypotheekaanvraag. Ook andere leningen en
          financiële verplichtingen kunnen worden meegenomen in de beoordeling.
        </p>
        <p>Hetzelfde geldt bijvoorbeeld voor bepaalde lease- of kredietverplichtingen.</p>
        <p>
          Geef bestaande financiële verplichtingen daarom altijd correct door bij een
          hypotheekaanvraag.
        </p>

        <h2>Telt het inkomen van mijn partner mee?</h2>
        <p>
          Heb je een partner met inkomen, dan kan dat inkomen onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen wordt meegenomen hangt af van de persoonlijke
          situatie en de geldende hypotheekregels.
        </p>
        <p>
          Bij een hypotheek voor een zzp&apos;er betekent dit dat je maximale hypotheek niet alleen
          afhankelijk hoeft te zijn van je eigen ondernemersinkomen.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen ten opzichte van de woningwaarde?</h2>
        <p>Naast je inkomen speelt ook de waarde van de woning een rol.</p>
        <p>
          In Nederland mag je in beginsel maximaal 100% van de woningwaarde financieren met een
          hypotheek. Voor bepaalde energiebesparende maatregelen gelden uitzonderingen op deze
          hoofdregel.
        </p>
        <p>
          Je inkomen bepaalt dus hoeveel hypotheek je op basis van de leennormen kunt dragen, terwijl
          de woningwaarde bepaalt hoeveel je voor de woning met een hypotheek kunt financieren.
        </p>

        <h2>Wat is de maximale hypotheek met NHG?</h2>
        <p>
          De NHG-grens voor 2026 is €470.000. Wanneer energiebesparende voorzieningen worden
          meegefinancierd, geldt een hogere grens van €498.200.
        </p>
        <p>
          Dit betekent niet dat iedere zzp&apos;er met een inkomen dat voldoende lijkt automatisch
          €470.000 kan lenen.
        </p>
        <p>
          De NHG-grens is een bovengrens voor het bedrag waarvoor NHG kan worden gebruikt. Je
          persoonlijke maximale hypotheek kan aanzienlijk lager liggen op basis van je inkomen en
          financiële situatie.
        </p>

        <h2>Waarom kun je als zzp&apos;er niet zomaar je maximale hypotheek berekenen?</h2>
        <p>
          Bij iemand in loondienst kan een hypotheekverstrekker vaak uitgaan van een relatief
          eenvoudig vast te stellen inkomen.
        </p>
        <p>Bij een ondernemer is de situatie complexer.</p>
        <p>Je inkomen kan bijvoorbeeld:</p>
        <ul>
          <li>per jaar verschillen;</li>
          <li>afhankelijk zijn van de winst van de onderneming;</li>
          <li>sterk veranderen door zakelijke kosten;</li>
          <li>beïnvloed worden door de ontwikkeling van de onderneming;</li>
          <li>gecombineerd worden met inkomen uit loondienst.</li>
        </ul>
        <p>Daarom wordt bij een ondernemer eerst het relevante toetsinkomen vastgesteld.</p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Welke documenten nodig zijn, verschilt per hypotheekaanvraag en geldverstrekker.
        </p>
        <p>
          Bij een ondernemersaanvraag kunnen financiële gegevens van je onderneming nodig zijn om
          het inkomen te kunnen beoordelen.
        </p>
        <p>
          Bij NHG wordt hiervoor bij ondernemers die minimaal 12 maanden actief zijn de
          Inkomensverklaring Ondernemer gebruikt. Deze verklaring wordt opgesteld door een
          geselecteerde rekenexpert en is volgens NHG zes maanden geldig.
        </p>
        <p>
          Het is daarom verstandig om je administratie en financiële gegevens goed op orde te hebben
          voordat je een hypotheek aanvraagt.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>
          Wil je niet alleen weten hoe het werkt, maar direct een eerste berekening maken?
        </p>
        <p>
          Gebruik dan onze gratis{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>
        <p>
          Je vult je relevante inkomen, maandelijkse verplichtingen en een indicatieve rente in. De
          calculator geeft vervolgens een eerste indicatie van je maximale hypotheek.
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          <strong>Let op:</strong> de berekening is vereenvoudigd en indicatief. De daadwerkelijke
          maximale hypotheek wordt bepaald door de geldverstrekker op basis van je volledige
          financiële situatie, de actuele leennormen en de geldende acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h3>
        <p>
          Dat hangt af van je toetsinkomen, de hypotheekrente, financiële verplichtingen, de
          woningwaarde, een eventueel partnerinkomen en de actuele hypotheeknormen. Er is daarom
          geen vast hypotheekbedrag voor iedere zzp&apos;er.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €40.000 inkomen?</h3>
        <p>
          Dat is niet alleen afhankelijk van je inkomen. Ook de rente, financiële verplichtingen,
          woningwaarde en overige omstandigheden spelen een rol. Een actuele hypotheekberekening is
          nodig om een indicatie te krijgen.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €50.000 inkomen?</h3>
        <p>
          Ook hiervoor bestaat geen vast bedrag. De maximale hypotheek wordt berekend op basis van
          het inkomen en de overige relevante gegevens van je huishouden.
        </p>
        <h3>Hoeveel hypotheek krijg ik met €60.000 inkomen?</h3>
        <p>
          Een inkomen van €60.000 leidt niet automatisch tot één bepaalde maximale hypotheek. De
          actuele hypotheeknormen en je persoonlijke financiële situatie bepalen de uitkomst.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Bij een ondernemer wordt gekeken naar het inkomen dat volgens de
          geldende beoordelingsmethode als toetsinkomen kan worden gebruikt.
        </p>
        <h3>Telt mijn winst mee voor mijn hypotheek?</h3>
        <p>
          De financiële resultaten van je onderneming zijn relevant voor het bepalen van je
          ondernemersinkomen. De winst van één jaar is echter niet automatisch gelijk aan het
          inkomen waarmee de hypotheek wordt berekend.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan. Voor NHG kunnen ondernemers die langer dan 12 maanden zelfstandig werken
          gebruikmaken van de Inkomensverklaring Ondernemer. De uiteindelijke hypotheekmogelijkheden
          hangen af van het vastgestelde inkomen en de overige financiële situatie.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Het inkomen uit de onderneming moet wel
          volgens de geldende regels worden beoordeeld.
        </p>
        <h3>Kan ik een hypotheek krijgen als mijn inkomen wisselt?</h3>
        <p>
          Dat kan. Wisselende inkomsten sluiten een hypotheek niet automatisch uit. De
          geldverstrekker beoordeelt welke inkomensgegevens en historie voor de aanvraag kunnen
          worden gebruikt.
        </p>

        <h2>Meer over een hypotheek als zzp&apos;er</h2>
        <p>Wil je meer weten over het aanvragen van een hypotheek als ondernemer? Bekijk ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
        </ul>
        <p>
          Of bereken direct je{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hypotheek-met-eenmanszaak',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-voor-startende-zzpers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'zakelijke-rekening-zzp',
      'hoeveel-geld-apart-belasting-zzper',
    ],
    title: 'Hypotheek met een eenmanszaak',
    metaTitle: 'Hypotheek met een eenmanszaak: zo werkt het',
    excerpt:
      'Een hypotheek met een eenmanszaak aanvragen? Lees hoe je ondernemersinkomen wordt vastgesteld, welke documenten nodig zijn en hoe NHG werkt.',
    keywords:
      "hypotheek met een eenmanszaak, hypotheek eenmanszaak, hypotheek als ondernemer, hypotheek als zzp'er eenmanszaak, hypotheek aanvragen eenmanszaak, huis kopen met een eenmanszaak, inkomen eenmanszaak hypotheek, winst eenmanszaak hypotheek, hypotheek eenmanszaak 3 jaar, hypotheek eenmanszaak zonder 3 jaar",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20met%20een%20eenmanszaak.jpg',
      alt: 'Hypotheek met een eenmanszaak: zo werkt het voor ondernemers en zzp\'ers.',
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen?',
        answer:
          'Ja. Een eenmanszaak sluit een hypotheek niet uit. Je ondernemersinkomen moet wel volgens de geldende hypotheekregels worden vastgesteld.',
      },
      {
        question: 'Hoeveel jaar moet een eenmanszaak bestaan voor een hypotheek?',
        answer:
          'Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Kan ik met een eenmanszaak een hypotheek krijgen zonder drie jaar cijfers?',
        answer:
          'Dat kan binnen de NHG-route voor ondernemers. Wanneer je onderneming nog geen drie jaar bestaat, kan de inkomensanalyse over een kortere periode worden uitgevoerd.',
      },
      {
        question: 'Telt mijn winst als inkomen voor mijn hypotheek?',
        answer:
          'De winst van je onderneming is relevant voor het bepalen van je ondernemersinkomen, maar de winst van één jaar is niet automatisch gelijk aan je toetsinkomen.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Omzet is niet hetzelfde als ondernemersinkomen. De financiële resultaten van je onderneming worden gebruikt om het relevante inkomen vast te stellen.',
      },
      {
        question: 'Kan ik met een eenmanszaak NHG krijgen?',
        answer:
          'Ja. Een eenmanszaak valt onder de ondernemingsvormen waarvoor binnen de NHG-regels een Inkomensverklaring Ondernemer kan worden gebruikt wanneer aan de voorwaarden wordt voldaan.',
      },
      {
        question: 'Kan ik als startende ondernemer een hypotheek krijgen?',
        answer:
          'Dat kan afhankelijk zijn van je situatie. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: 'Is een hypotheek met een eenmanszaak moeilijker dan met loondienst?',
        answer:
          'De inkomensbeoordeling is anders omdat je inkomen uit een onderneming moet worden vastgesteld. Dat betekent niet automatisch dat een hypotheek moeilijker of onmogelijk is.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>hypotheek met een eenmanszaak</strong> aanvragen werkt anders dan met een vast
          inkomen uit loondienst. Als ondernemer moet eerst worden vastgesteld welk inkomen uit je
          onderneming voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Een eenmanszaak vormt op zichzelf geen belemmering om een hypotheek te krijgen. Ook als je
          als zzp&apos;er onderneemt via een eenmanszaak kun je een hypotheek aanvragen. Wel moet je
          je inkomen en de financiële situatie van je onderneming kunnen onderbouwen.
        </p>
        <p>
          In dit artikel lees je hoe een hypotheek met een eenmanszaak werkt, hoe het
          ondernemersinkomen wordt vastgesteld, hoeveel jaar je ondernemer moet zijn en welke
          documenten je nodig hebt.
        </p>
        <p>
          Wil je eerst een indicatie van je maximale hypotheek? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je met een eenmanszaak een hypotheek krijgen?</h2>
        <p>Ja. Je kunt als eigenaar van een eenmanszaak een hypotheek aanvragen.</p>
        <p>
          Voor de hypotheekaanvraag wordt gekeken naar je inkomen als ondernemer. Daarbij is je
          omzet niet hetzelfde als je inkomen en wordt niet automatisch alleen naar je meest recente
          winst gekeken.
        </p>
        <p>
          De geldverstrekker moet bepalen welk inkomen voldoende onderbouwd en volgens de geldende
          regels geschikt is om als toetsinkomen te gebruiken.
        </p>
        <p>
          Voor hypotheken met NHG bestaat hiervoor de <strong>Inkomensverklaring Ondernemer</strong>.
          NHG noemt een eenmanszaak expliciet als voorbeeld van een zelfstandige onderneming waarvoor
          deze inkomensmethodiek wordt gebruikt.
        </p>

        <h2>Hoe werkt een hypotheek met een eenmanszaak?</h2>
        <p>
          Bij een hypotheekaanvraag met een eenmanszaak moet eerst je ondernemersinkomen worden
          vastgesteld.
        </p>
        <p>Daarna wordt, net als bij andere hypotheekaanvragen, gekeken naar onder andere:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>de waarde van de woning;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de geldende hypotheeknormen.</li>
        </ul>
        <p>
          Rijksoverheid vermeldt dat de maximale hypotheek onder andere afhankelijk is van je
          inkomen en de waarde van de woning. Ook rente en andere financiële verplichtingen, zoals
          een studieschuld, persoonlijke lening of leasecontract, spelen een rol.
        </p>
        <p>De ondernemingsvorm is dus maar één onderdeel van de hypotheekaanvraag.</p>

        <h2>Hoe wordt het inkomen van een eenmanszaak bepaald?</h2>
        <p>
          Bij een eenmanszaak wordt gekeken naar de financiële resultaten van de onderneming en naar
          de ontwikkeling van het inkomen.
        </p>
        <p>
          Voor NHG wordt bij een ondernemer die minimaal 12 maanden actief is de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong> gebruikt om het toetsinkomen vast te
          stellen.
        </p>
        <p>
          De Inkomensverklaring is een analyse van de onderneming. NHG geeft aan dat daarbij meestal
          naar de afgelopen drie jaar wordt gekeken, of naar een kortere periode wanneer de
          onderneming nog geen drie jaar bestaat.
        </p>
        <p>Je kunt daarom niet simpelweg je omzet invullen als hypotheekinkomen.</p>

        <h3>Omzet is niet hetzelfde als inkomen</h3>
        <p>Stel dat je een eenmanszaak hebt met €100.000 omzet.</p>
        <p>Dat betekent niet dat je voor je hypotheek een inkomen van €100.000 hebt.</p>
        <p>
          Van je omzet gaan bijvoorbeeld zakelijke kosten af. De financiële resultaten van de
          onderneming vormen vervolgens de basis voor het bepalen van het ondernemersinkomen volgens
          de relevante beoordelingsmethode.
        </p>
        <p>Ook kunnen correcties worden toegepast.</p>
        <p>
          Bij de NHG-systematiek wordt bijvoorbeeld rekening gehouden met factoren zoals de auto van
          de zaak en de financiële positie van de onderneming.
        </p>

        <h2>Moet je 3 jaar een eenmanszaak hebben?</h2>
        <p>Nee, drie jaar ondernemerschap is geen algemene voorwaarde.</p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden actief is de Inkomensverklaring
          Ondernemer kan gebruiken. Een eenmanszaak valt daar expliciet onder.
        </p>
        <p>
          De inkomensanalyse kan vervolgens betrekking hebben op drie jaar of korter wanneer de
          onderneming jonger is.
        </p>
        <p>
          Dat betekent dus niet dat je automatisch na 12 maanden een hypotheek van een bepaald
          bedrag kunt krijgen. Je inkomen en de rest van je financiële situatie moeten nog steeds
          voldoende zijn voor de hypotheek.
        </p>

        <h2>Hypotheek met een eenmanszaak zonder 3 jaar cijfers</h2>
        <p>Heb je nog geen drie volledige jaren aan cijfers?</p>
        <p>Dan betekent dat niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Binnen de NHG-route voor ondernemers kan de inkomensanalyse worden uitgevoerd over een
          kortere periode wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Wel moet er voldoende informatie beschikbaar zijn om je inkomen en de financiële situatie
          van je onderneming te kunnen beoordelen.
        </p>
        <p>
          Als je onderneming bijvoorbeeld pas anderhalf jaar bestaat, zal de beoordeling daarom
          anders verlopen dan bij een onderneming die al tien jaar bestaat. Meer hierover op{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hoe lang moet je een eenmanszaak hebben?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden zelfstandig actief
          zijn.
        </p>
        <p>
          NHG omschrijft dit als minimaal 12 maanden een beroep of bedrijf uitoefenen. Een
          eenmanszaak valt onder deze categorie.
        </p>
        <p>
          De periode wordt daarbij niet simpelweg als drie kalenderjaren gezien. Het gaat om de duur
          van het ondernemerschap.
        </p>
        <p>
          Heb je je eenmanszaak bijvoorbeeld in juni 2025 ingeschreven, dan bereik je in juni 2026
          twaalf maanden ondernemerschap.
        </p>
        <p>
          Of je vervolgens daadwerkelijk een hypotheek kunt krijgen, hangt af van het vastgestelde
          toetsinkomen en je verdere financiële situatie.
        </p>

        <h2>Wat is een Inkomensverklaring Ondernemer?</h2>
        <p>
          De Inkomensverklaring Ondernemer is een verklaring waarmee het inkomen van een ondernemer
          voor een hypotheek met NHG wordt vastgesteld.
        </p>
        <p>
          Een geselecteerde rekenexpert analyseert de onderneming en stelt op basis daarvan het
          toetsinkomen vast.
        </p>
        <p>
          NHG vermeldt dat de verklaring kan worden aangevraagd via een hypotheekadviseur,
          geldverstrekker of een van de aangewezen rekenexperts. Na ontvangst van alle benodigde
          stukken wordt de verklaring volgens NHG binnen vijf werkdagen opgesteld. De verklaring is
          vervolgens zes maanden geldig.
        </p>
        <p>
          De Inkomensverklaring is dus geen simpel document waarop je zelf je gewenste inkomen
          invult. Het is een analyse van je onderneming.
        </p>

        <h2>Welke cijfers van je eenmanszaak zijn belangrijk?</h2>
        <p>
          Bij het beoordelen van ondernemersinkomen wordt gekeken naar de financiële ontwikkeling
          van de onderneming.
        </p>
        <p>Daarbij kunnen onder andere de volgende gegevens relevant zijn:</p>
        <ul>
          <li>omzet;</li>
          <li>fiscale winst;</li>
          <li>ontwikkeling van de winst;</li>
          <li>het lopende boekjaar;</li>
          <li>financiële positie van de onderneming;</li>
          <li>eventuele correctieposten.</li>
        </ul>
        <p>
          NHG geeft aan dat bij de inkomensbepaling onder andere wordt gekeken naar de historische
          inkomensontwikkeling en het lopende boekjaar. Wanneer het inkomen in het laatste jaar
          lager is dan het gemiddelde, kan het lagere laatste jaar als uitgangspunt gelden. Het
          actuele inkomen moet bovendien voldoende in lijn zijn met het gemiddelde.
        </p>
        <p>
          Dit is een belangrijke reden waarom alleen je beste jaarresultaat geen betrouwbare
          indicatie geeft van je maximale hypotheek.
        </p>

        <h2>Telt de winst van mijn eenmanszaak mee voor mijn hypotheek?</h2>
        <p>
          De winst uit je onderneming is relevant voor het bepalen van je ondernemersinkomen.
        </p>
        <p>
          Maar de winst van één jaar is niet automatisch hetzelfde als het toetsinkomen voor je
          hypotheek.
        </p>
        <p>
          Bij de NHG-methodiek voor een IB-ondernemer wordt de fiscale winst over de afgelopen drie
          jaar als basis gebruikt, waarbij het laatste jaar als maximum kan gelden. Daarnaast wordt
          naar het lopende boekjaar en andere relevante factoren gekeken.
        </p>
        <p>
          De exacte beoordeling hangt af van de toepasselijke normen en je persoonlijke situatie.
        </p>

        <h2>Telt mijn omzet van de eenmanszaak mee?</h2>
        <p>Je omzet is niet hetzelfde als je inkomen.</p>
        <p>
          Een hoge omzet kan samengaan met hoge zakelijke kosten en daardoor met een veel lagere
          winst. Voor de hypotheekbeoordeling is daarom vooral het inkomen uit de onderneming
          relevant, niet alleen het bedrag dat je aan klanten factureert.
        </p>
        <p>
          Als je bijvoorbeeld €120.000 omzet hebt maar €70.000 zakelijke kosten, zegt €120.000 omzet
          op zichzelf weinig over hoeveel hypotheek je kunt krijgen.
        </p>

        <h2>Hypotheek met een eenmanszaak en wisselende winst</h2>
        <p>Een wisselende winst sluit een hypotheek niet automatisch uit.</p>
        <p>
          Wel kan de ontwikkeling van je inkomen invloed hebben op het bedrag dat als toetsinkomen
          wordt vastgesteld.
        </p>
        <p>
          Bij NHG wordt onder andere gekeken naar de historische resultaten en het lopende boekjaar.
          Wanneer het inkomen in het laatste jaar lager is dan het gemiddelde, wordt volgens de
          NHG-systematiek het laatste jaar als uitgangspunt genomen.
        </p>
        <p>
          Een sterke daling van je winst kan daardoor gevolgen hebben voor je hypotheekmogelijkheden.
        </p>

        <h2>Wat als mijn winst juist stijgt?</h2>
        <p>
          Een stijgende winst betekent niet automatisch dat je maximale hypotheek direct gebaseerd
          wordt op je hoogste recente winst.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar de financiële ontwikkeling van de onderneming en naar de
          bestendigheid van het inkomen.
        </p>
        <p>
          Bij NHG moet het actuele inkomen volgens de gepubliceerde criteria bovendien minstens in
          lijn zijn met het gemiddelde.
        </p>
        <p>
          Daarom is het verstandig om voor een hypotheekaanvraag uit te gaan van het inkomen dat
          volgens de geldende methodiek wordt vastgesteld, en niet van een eigen berekening op basis
          van één goed jaar.
        </p>

        <h2>Welke documenten heb je nodig voor een hypotheek met een eenmanszaak?</h2>
        <p>
          Welke documenten nodig zijn, hangt af van de hypotheekverstrekker en de gekozen route.
        </p>
        <p>
          Bij een hypotheek met NHG wordt voor het ondernemersinkomen de Inkomensverklaring
          Ondernemer gebruikt wanneer je als ondernemer minimaal 12 maanden actief bent.
        </p>
        <p>
          Voor het opstellen van deze verklaring zijn financiële gegevens van je onderneming nodig.
        </p>
        <p>
          Zorg daarom dat je administratie, belastinggegevens en financiële cijfers goed op orde
          zijn voordat je een hypotheekaanvraag start.
        </p>
        <p>
          Een hypotheekadviseur kan aangeven welke documenten in jouw specifieke situatie nodig
          zijn.
        </p>

        <h2>Kan ik met een eenmanszaak een hypotheek met NHG krijgen?</h2>
        <p>Ja, dat kan.</p>
        <p>
          Voor 2026 geldt bij NHG een maximale kostengrens van €470.000. Voor woningen waarbij
          energiebesparende voorzieningen worden meegefinancierd, geldt een grens van €498.200.
        </p>
        <p>
          Daarnaast moet je uiteraard aan de overige voorwaarden van NHG voldoen.
        </p>
        <p>
          De NHG-grens betekent bovendien niet dat je automatisch €470.000 kunt lenen. Je
          persoonlijke maximale hypotheek kan lager zijn op basis van je inkomen en financiële
          verplichtingen.
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen met een eenmanszaak?</h2>
        <p>Er is geen vast bedrag dat bij iedere eenmanszaak hoort.</p>
        <p>De maximale hypotheek wordt onder andere bepaald door:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de actuele hypotheeknormen.</li>
        </ul>
        <p>
          Rijksoverheid geeft aan dat je in beginsel maximaal 100% van de waarde van de woning met
          een hypotheek kunt financieren. Daarnaast gelden inkomensnormen voor de maximale
          hypotheek.
        </p>
        <p>Wil je een eerste indicatie?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Eenmanszaak naast loondienst</h2>
        <p>
          Heb je naast je eenmanszaak ook inkomen uit loondienst? Dan kan het zijn dat beide
          inkomens worden beoordeeld.
        </p>
        <p>
          De manier waarop het inkomen uit loondienst en het inkomen uit je onderneming worden
          meegenomen, hangt af van je situatie en de toepasselijke hypotheekregels.
        </p>
        <p>NHG heeft hiervoor specifieke regels binnen de Inkomensverklaring Ondernemer.</p>
        <p>Geef daarom beide inkomsten door wanneer je een hypotheek aanvraagt.</p>

        <h2>Eenmanszaak starten en daarna een huis kopen</h2>
        <p>
          Ben je recent gestart met een eenmanszaak en wil je daarna een woning kopen?
        </p>
        <p>Dan is vooral de duur van je ondernemerschap relevant.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. De
          financiële analyse kan vervolgens over een kortere periode plaatsvinden als je onderneming
          nog geen drie jaar bestaat.
        </p>
        <p>
          Een recente start betekent dus niet automatisch dat een hypotheek uitgesloten is, maar je
          hebt wel minder financiële historie om je ondernemersinkomen mee te onderbouwen. Lees ook{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Waar moet je als eigenaar van een eenmanszaak op letten?</h2>
        <p>
          Een hypotheekaanvraag als ondernemer begint niet bij het maximale bedrag dat je denkt te
          kunnen lenen.
        </p>
        <p>Begin met het in kaart brengen van:</p>
        <ol>
          <li>je financiële resultaten;</li>
          <li>de ontwikkeling van je inkomen;</li>
          <li>je huidige financiële verplichtingen;</li>
          <li>de waarde van de woning die je wilt kopen;</li>
          <li>de hypotheekrente;</li>
          <li>de voorwaarden van de geldverstrekker.</li>
        </ol>
        <p>Daarmee krijg je een realistischer beeld van je mogelijkheden.</p>

        <h2>Hypotheek berekenen met een eenmanszaak</h2>
        <p>Wil je weten hoeveel hypotheek je ongeveer kunt krijgen?</p>
        <p>
          Gebruik de{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>{' '}
          voor een eerste indicatie.
        </p>
        <p>
          Vul het inkomen in dat voor je hypotheekberekening relevant is en houd rekening met
          eventuele maandelijkse financiële verplichtingen.
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          De uitkomst van een online calculator is slechts een indicatie. De daadwerkelijke maximale
          hypotheek wordt vastgesteld door de geldverstrekker op basis van je volledige situatie,
          documenten en de actuele acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen?</h3>
        <p>
          Ja. Een eenmanszaak sluit een hypotheek niet uit. Je ondernemersinkomen moet wel volgens de
          geldende hypotheekregels worden vastgesteld.
        </p>
        <h3>Hoeveel jaar moet een eenmanszaak bestaan voor een hypotheek?</h3>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als
          ondernemer.
        </p>
        <h3>Kan ik met een eenmanszaak een hypotheek krijgen zonder drie jaar cijfers?</h3>
        <p>
          Dat kan binnen de NHG-route voor ondernemers. Wanneer je onderneming nog geen drie jaar
          bestaat, kan de inkomensanalyse over een kortere periode worden uitgevoerd.
        </p>
        <h3>Telt mijn winst als inkomen voor mijn hypotheek?</h3>
        <p>
          De winst van je onderneming is relevant voor het bepalen van je ondernemersinkomen, maar
          de winst van één jaar is niet automatisch gelijk aan je toetsinkomen.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Omzet is niet hetzelfde als ondernemersinkomen. De financiële resultaten
          van je onderneming worden gebruikt om het relevante inkomen vast te stellen.
        </p>
        <h3>Kan ik met een eenmanszaak NHG krijgen?</h3>
        <p>
          Ja. Een eenmanszaak valt onder de ondernemingsvormen waarvoor binnen de NHG-regels een
          Inkomensverklaring Ondernemer kan worden gebruikt wanneer aan de voorwaarden wordt
          voldaan.
        </p>
        <h3>Kan ik als startende ondernemer een hypotheek krijgen?</h3>
        <p>
          Dat kan afhankelijk zijn van je situatie. Voor de NHG-Inkomensverklaring Ondernemer geldt
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Is een hypotheek met een eenmanszaak moeilijker dan met loondienst?</h3>
        <p>
          De inkomensbeoordeling is anders omdat je inkomen uit een onderneming moet worden
          vastgesteld. Dat betekent niet automatisch dat een hypotheek moeilijker of onmogelijk is.
        </p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Wil je meer weten over een hypotheek als ondernemer? Bekijk ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
        <p>
          Of maak direct een{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            eerste berekening van je maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hypotheek-voor-startende-zzpers',
    relatedSlugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'factureren-startende-zzper',
      'zakelijke-rekening-zzp',
    ],
    title: "Hypotheek voor startende zzp'ers",
    metaTitle: "Hypotheek voor startende zzp'ers: wat kan er?",
    excerpt:
      "Net gestart als zzp'er en een huis kopen? Lees wanneer je als starter een hypotheek kunt krijgen, hoe je inkomen wordt beoordeeld en welke cijfers nodig zijn.",
    keywords:
      "hypotheek voor startende zzp'ers, hypotheek startende zzp'er, hypotheek starter zzp, hypotheek als startende zzp'er, hypotheek zzp starter, hypotheek na 1 jaar zzp, hypotheek zonder 3 jaar zzp, hypotheek zzp zonder 3 jaar cijfers, huis kopen als startende zzp'er, hypotheek aanvragen als startende zzp'er",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20voor%20startende%20zzpers.jpg',
      alt: "Hypotheek voor startende zzp'ers: wat kan er bij een recente start als ondernemer?",
    },
    datePublished: '2026-09-15',
    dateModified: '2026-09-15',
    faq: [
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Ja. Dat kan onder voorwaarden. Voor NHG geldt voor de Inkomensverklaring Ondernemer minimaal 12 maanden ondernemerschap.',
      },
      {
        question: "Hoe lang moet ik zzp'er zijn voor een hypotheek?",
        answer:
          'Er is geen algemene eis van drie jaar. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: 'Kan ik na 1 jaar zzp een hypotheek krijgen?',
        answer:
          'Dat kan. Na minimaal 12 maanden ondernemerschap kun je binnen de NHG-regels gebruikmaken van de Inkomensverklaring Ondernemer, mits je aan de overige voorwaarden voldoet.',
      },
      {
        question: 'Kan ik een hypotheek krijgen zonder drie jaar cijfers?',
        answer:
          'Dat kan. Bij een onderneming die korter dan drie jaar bestaat, kan de inkomensanalyse worden gebaseerd op de kortere beschikbare periode.',
      },
      {
        question: 'Kan ik als starter een hypotheek met NHG krijgen?',
        answer:
          'Ja, als je aan de NHG-voorwaarden voldoet. Voor ondernemers geldt onder andere de minimale periode van 12 maanden ondernemerschap voor de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Telt mijn omzet mee voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Bij een ondernemer moet eerst worden bepaald welk inkomen volgens de toepasselijke methode als toetsinkomen kan worden gebruikt.',
      },
      {
        question: "Telt mijn winst als zzp'er mee voor mijn hypotheek?",
        answer:
          'De fiscale winst is relevant voor de inkomensbeoordeling van een ondernemer. De winst van één jaar is echter niet automatisch gelijk aan het toetsinkomen.',
      },
      {
        question:
          "Kan ik als startende zzp'er een hypotheek krijgen als mijn eerste jaar nog niet voorbij is?",
        answer:
          'Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Ben je korter dan 12 maanden ondernemer, dan kun je deze specifieke NHG-route dus nog niet gebruiken. Andere hypotheekmogelijkheden kunnen afhankelijk zijn van de geldverstrekker en je persoonlijke situatie.',
      },
      {
        question: 'Heeft een studieschuld invloed op mijn hypotheek als starter?',
        answer: 'Ja. Een studieschuld kan je maximale hypotheek verlagen.',
      },
    ],
    content: (
      <>
        <p>
          Ben je net gestart als zzp&apos;er en wil je een huis kopen? Dan vraag je je waarschijnlijk
          af of je al een hypotheek kunt krijgen.
        </p>
        <p>
          Een startende zzp&apos;er heeft meestal minder financiële historie dan iemand die al
          jarenlang ondernemer is. Toch betekent een recente start niet automatisch dat je geen
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor een hypotheek moet vooral duidelijk worden welk inkomen uit je onderneming voor de
          hypotheek kan worden meegenomen. Daarnaast wordt gekeken naar onder andere je financiële
          verplichtingen, de waarde van de woning, de hypotheekrente en het inkomen van een
          eventuele partner.
        </p>
        <p>
          Voor hypotheken met NHG bestaat voor ondernemers de{' '}
          <strong>Inkomensverklaring Ondernemer (IKV)</strong>. Voor deze route moet je minimaal 12
          maanden zelfstandig actief zijn.
        </p>
        <p>
          Wil je alvast een eerste indicatie berekenen? Gebruik dan onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Kun je als startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan.</p>
        <p>
          Hoe kort je onderneming bestaat, heeft wel invloed op de manier waarop je inkomen kan
          worden beoordeeld. Een startende ondernemer heeft immers minder historische cijfers dan
          iemand die al meerdere jaren een onderneming heeft.
        </p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden een beroep of bedrijf uitoefent
          gebruikmaakt van de Inkomensverklaring Ondernemer om het toetsinkomen vast te stellen. Een
          zelfstandige met bijvoorbeeld een eenmanszaak valt hieronder.
        </p>
        <p>
          Daarmee is <strong>drie jaar ondernemer zijn geen algemene voorwaarde</strong> voor een
          hypotheek.
        </p>
        <p>
          Wel moet je inkomen voldoende kunnen worden onderbouwd en moet je uiteraard ook aan de
          overige voorwaarden voor de hypotheek voldoen.
        </p>

        <h2>Hoe lang moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>
          Er bestaat geen algemene regel dat je drie jaar zzp&apos;er moet zijn voordat je een
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>. NHG kijkt daarbij naar de periode waarin je
          daadwerkelijk als ondernemer actief bent; het gaat niet simpelweg om drie volledige
          kalenderjaren.
        </p>
        <p>
          Ben je bijvoorbeeld in september 2025 gestart, dan bereik je in september 2026 twaalf
          maanden ondernemerschap.
        </p>
        <p>
          Vanaf dat moment kun je binnen de NHG-regels gebruikmaken van de Inkomensverklaring
          Ondernemer, mits je aan de overige voorwaarden voldoet.
        </p>
        <p>
          Dat betekent niet dat je na twaalf maanden automatisch een hypotheek kunt krijgen. Het
          vastgestelde toetsinkomen en je volledige financiële situatie bepalen hoeveel je uiteindelijk
          kunt lenen.
        </p>

        <h2>Kun je na 1 jaar zzp een hypotheek krijgen?</h2>
        <p>Dat kan.</p>
        <p>
          Voor NHG is minimaal 12 maanden ondernemerschap voldoende om gebruik te kunnen maken van
          de Inkomensverklaring Ondernemer.
        </p>
        <p>
          Bij een onderneming die nog geen drie jaar bestaat, kan de inkomensanalyse betrekking
          hebben op een kortere periode. Je hoeft dus niet per definitie drie volledige jaren aan
          ondernemerscijfers te hebben voordat je binnen deze route kunt worden beoordeeld.
        </p>
        <p>
          De beoordeling blijft wel afhankelijk van de financiële informatie die beschikbaar is en
          van de ontwikkeling van je onderneming.
        </p>

        <h2>Kun je een hypotheek krijgen zonder 3 jaar cijfers?</h2>
        <p>Ja, dat kan onder voorwaarden.</p>
        <p>
          De gedachte dat je als zzp&apos;er altijd drie volledige jaren cijfers nodig hebt, is te
          algemeen.
        </p>
        <p>
          Bij NHG kan een ondernemer vanaf minimaal 12 maanden ondernemerschap gebruikmaken van de
          Inkomensverklaring Ondernemer. Wanneer de onderneming nog geen drie jaar bestaat, wordt de
          beschikbare periode gebruikt voor de beoordeling.
        </p>
        <p>Je hoeft dus niet automatisch te wachten tot je drie jaar ondernemer bent.</p>
        <p>
          Wel geldt dat een kortere historie minder financiële informatie geeft over de ontwikkeling
          van je onderneming. Het inkomen moet daarom op basis van de beschikbare gegevens kunnen
          worden vastgesteld. Lees ook{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hoe wordt het inkomen van een startende zzp&apos;er bepaald?</h2>
        <p>Dit is een van de belangrijkste onderdelen van de hypotheekaanvraag.</p>
        <p>Een hypotheekverstrekker kijkt niet simpelweg naar je omzet.</p>
        <p>
          Bij een ondernemer wordt gekeken naar het inkomen dat volgens de toepasselijke
          beoordelingsmethode als toetsinkomen kan worden gebruikt.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer wordt bij een IB-ondernemer onder andere
          gekeken naar de fiscale winst. Het toetskader gebruikt als basis het gemiddelde van de
          fiscale winst over de afgelopen drie jaar, met het laatste jaar als maximum. Wanneer een
          onderneming jonger is dan drie jaar, is uiteraard niet voor alle jaren informatie
          beschikbaar.
        </p>
        <p>
          Daarnaast wordt gekeken naar de ontwikkeling van de onderneming en het lopende boekjaar.
        </p>
        <p>
          Daarom is het niet verstandig om voor je hypotheek zelf simpelweg je huidige maandelijkse
          omzet of winst te vermenigvuldigen met een bepaald bedrag. Meer over inkomen lees je in{' '}
          <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
            Hypotheek als zzp&apos;er: hoe werkt het?
          </Link>
          .
        </p>

        <h2>Wat als ik pas kort zzp&apos;er ben?</h2>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is.
        </p>
        <p>
          Ben je bijvoorbeeld 14 maanden geleden gestart, dan heb je niet dezelfde hoeveelheid
          historische bedrijfsgegevens als iemand die al vijf jaar ondernemer is.
        </p>
        <p>
          Dat betekent niet automatisch dat je geen hypotheek kunt krijgen. Binnen de NHG-route kan
          een ondernemer vanaf minimaal 12 maanden worden beoordeeld via de Inkomensverklaring
          Ondernemer.
        </p>
        <p>
          De beschikbare financiële gegevens worden dan gebruikt om het ondernemersinkomen vast te
          stellen.
        </p>

        <h2>Wat als mijn eerste jaar als zzp&apos;er goed is?</h2>
        <p>
          Een goed eerste jaar kan uiteraard relevant zijn voor je inkomensbeoordeling.
        </p>
        <p>
          Maar je kunt niet automatisch zeggen dat je volledige winst uit dat ene jaar als
          hypotheekinkomen wordt gebruikt.
        </p>
        <p>
          De inkomensbeoordeling heeft een vaste methodiek. Bij NHG wordt onder andere gekeken naar
          de fiscale winst, de beschikbare historie en het lopende boekjaar.
        </p>
        <p>
          Een hoge winst in een korte periode is daarom niet hetzelfde als een structureel
          toetsinkomen.
        </p>

        <h2>Wat als mijn inkomen als zzp&apos;er stijgt?</h2>
        <p>
          Een stijgend inkomen kan relevant zijn, maar ook hierbij wordt niet alleen naar je beste
          maand of beste jaar gekeken.
        </p>
        <p>
          De hypotheekverstrekker moet beoordelen welk inkomen voldoende bestendig is om als
          uitgangspunt voor de hypotheek te gebruiken.
        </p>
        <p>
          Voor NHG wordt bij de Inkomensverklaring Ondernemer onder andere gekeken naar de
          historische resultaten en het lopende boekjaar.
        </p>
        <p>
          Daarom is het belangrijk om bij een hypotheekaanvraag actuele financiële cijfers
          beschikbaar te hebben.
        </p>

        <h2>Wat als mijn inkomen als starter daalt?</h2>
        <p>Een dalend inkomen kan gevolgen hebben voor je hypotheekmogelijkheden.</p>
        <p>
          Wanneer je onderneming nog jong is, kan een verandering in je resultaten relatief belangrijk
          zijn omdat er minder historische informatie beschikbaar is.
        </p>
        <p>
          De geldverstrekker moet immers beoordelen welk inkomen op langere termijn verantwoord kan
          worden meegenomen.
        </p>
        <p>
          Een sterke daling van je bedrijfsresultaat kan daarom betekenen dat het inkomen waarmee
          wordt gerekend lager uitvalt dan je eerder had verwacht.
        </p>

        <h2>Kan ik als startende zzp&apos;er een hypotheek met NHG krijgen?</h2>
        <p>Ja, dat kan onder de voorwaarden van NHG.</p>
        <p>
          Voor 2026 is de NHG-grens €470.000. Voor woningen waarbij aanvullende energiebesparende
          voorzieningen worden meegefinancierd, ligt de grens op €498.200.
        </p>
        <p>
          Voor ondernemers geldt daarnaast de specifieke route via de Inkomensverklaring Ondernemer.
          Je moet daarvoor minimaal 12 maanden actief zijn als ondernemer.
        </p>
        <p>
          De NHG-grens betekent overigens niet dat je als starter automatisch dit bedrag kunt lenen.
          Je eigen maximale hypotheek kan veel lager liggen op basis van je toetsinkomen en
          financiële verplichtingen.
        </p>

        <h2>Welke documenten heb je nodig als startende zzp&apos;er?</h2>
        <p>
          Welke documenten nodig zijn, hangt af van je hypotheekaanvraag en geldverstrekker.
        </p>
        <p>
          Bij een NHG-aanvraag wordt het ondernemersinkomen via de Inkomensverklaring Ondernemer
          vastgesteld wanneer je aan de voorwaarden voldoet.
        </p>
        <p>
          Daarvoor moeten financiële gegevens van je onderneming beschikbaar zijn. De rekenexpert
          gebruikt deze informatie om je inkomen en de financiële situatie van je onderneming te
          analyseren.
        </p>
        <p>
          Zorg daarom dat je administratie goed is bijgehouden en dat je financiële cijfers
          beschikbaar zijn voordat je een hypotheekaanvraag start.
        </p>

        <h2>
          Kan ik als starter een hypotheek krijgen als mijn onderneming nog geen 3 jaar bestaat?
        </h2>
        <p>Ja.</p>
        <p>
          Een onderneming hoeft voor de NHG-Inkomensverklaring Ondernemer niet drie jaar te bestaan.
          De minimale duur is 12 maanden.
        </p>
        <p>
          Bestaat de onderneming korter dan drie jaar, dan kan de inkomensanalyse worden uitgevoerd
          op basis van de kortere beschikbare historie.
        </p>
        <p>
          De vraag is vervolgens niet alleen hoe lang je ondernemer bent, maar ook welk toetsinkomen
          uit de beschikbare informatie kan worden vastgesteld.
        </p>

        <h2>Kan ik als startende zzp&apos;er een hypotheek krijgen met een laag inkomen?</h2>
        <p>Een laag inkomen kan de maximale hypotheek beperken.</p>
        <p>
          De maximale hypotheek wordt onder andere bepaald door je inkomen, de rente en andere
          financiële verplichtingen. De wettelijke leennormen worden ieder jaar vastgesteld.
        </p>
        <p>
          Als startende ondernemer heb je daarnaast mogelijk minder financiële ruimte om een hoog
          toetsinkomen aan te tonen.
        </p>
        <p>
          Een lage winst betekent daarom doorgaans dat je minder kunt lenen dan wanneer je een hoger
          toetsinkomen hebt.
        </p>

        <h2>Heb je als startende zzp&apos;er een studieschuld?</h2>
        <p>Een studieschuld kan invloed hebben op je maximale hypotheek.</p>
        <p>
          Rijksoverheid geeft aan dat een studieschuld ervoor zorgt dat je minder kunt lenen. Bij de
          beoordeling wordt onder andere gekeken naar het bedrag dat je maandelijks aan DUO betaalt.
        </p>
        <p>
          Hetzelfde principe geldt voor andere financiële verplichtingen, zoals bepaalde leningen of
          leasecontracten.
        </p>
        <p>Geef deze verplichtingen altijd volledig op bij je hypotheekaanvraag.</p>

        <h2>Heb je als starter een partner met inkomen?</h2>
        <p>
          Heb je een partner die in loondienst werkt of ook ondernemer is, dan kan het inkomen van
          je partner onderdeel zijn van de hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen wordt meegenomen hangt af van de situatie en de
          geldende hypotheekregels.
        </p>
        <p>
          Je maximale hypotheek hoeft dus niet uitsluitend afhankelijk te zijn van het inkomen uit
          je jonge onderneming.
        </p>

        <h2>Hoeveel kan een startende zzp&apos;er lenen?</h2>
        <p>Er bestaat geen vast hypotheekbedrag voor startende zzp&apos;ers.</p>
        <p>De maximale hypotheek hangt onder andere af van:</p>
        <ul>
          <li>het vastgestelde toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>financiële verplichtingen;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de waarde van de woning;</li>
          <li>de actuele wettelijke leennormen.</li>
        </ul>
        <p>
          Rijksoverheid vermeldt dat je in beginsel maximaal 100% van de waarde van de woning kunt
          lenen. Daarnaast gelden inkomensnormen voor de maximale hypotheek.
        </p>
        <p>Wil je een eerste indicatie?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Is een hypotheek als startende zzp&apos;er moeilijker?</h2>
        <p>
          Een hypotheekaanvraag als startende ondernemer vraagt om een andere inkomensbeoordeling
          dan een hypotheekaanvraag van iemand met een stabiel inkomen uit loondienst.
        </p>
        <p>
          Dat komt vooral doordat je onderneming nog weinig historische financiële gegevens heeft.
        </p>
        <p>Dat betekent echter niet automatisch dat een starter geen hypotheek kan krijgen.</p>
        <p>
          Voor NHG bestaat vanaf 12 maanden ondernemerschap een specifieke route via de
          Inkomensverklaring Ondernemer.
        </p>
        <p>
          De daadwerkelijke mogelijkheden hangen vervolgens af van het vastgestelde toetsinkomen en
          je volledige financiële situatie.
        </p>

        <h2>Wanneer kun je het beste een hypotheek aanvragen als startende zzp&apos;er?</h2>
        <p>
          Als je net bent gestart, kan het verstandig zijn om eerst inzicht te krijgen in je
          financiële situatie voordat je een woning gaat zoeken.
        </p>
        <p>Breng bijvoorbeeld in kaart:</p>
        <ol>
          <li>hoelang je al ondernemer bent;</li>
          <li>wat je financiële resultaten zijn;</li>
          <li>welk inkomen waarschijnlijk relevant is voor de hypotheek;</li>
          <li>welke financiële verplichtingen je hebt;</li>
          <li>hoeveel eigen geld je beschikbaar hebt;</li>
          <li>wat voor woning je zoekt.</li>
        </ol>
        <p>
          Na minimaal 12 maanden ondernemerschap kan binnen de NHG-regels de Inkomensverklaring
          Ondernemer worden gebruikt wanneer aan de voorwaarden wordt voldaan.
        </p>

        <h2>Hypotheek berekenen als startende zzp&apos;er</h2>
        <p>
          Wil je weten wat je huidige inkomen ongeveer betekent voor je maximale hypotheek?
        </p>
        <p>
          Gebruik onze{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            hypotheekcalculator voor zzp&apos;ers
          </Link>
          .
        </p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <p>
          De calculator geeft een eerste indicatie op basis van je inkomen, maandelijkse
          verplichtingen en een gekozen rente.
        </p>
        <p>
          De uitkomst is geen hypotheekadvies of offerte. De daadwerkelijke maximale hypotheek wordt
          bepaald door de geldverstrekker op basis van je volledige situatie, documenten en actuele
          acceptatievoorwaarden.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Ja. Dat kan onder voorwaarden. Voor NHG geldt voor de Inkomensverklaring Ondernemer
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Hoe lang moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Er is geen algemene eis van drie jaar. Voor de NHG-Inkomensverklaring Ondernemer geldt
          minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik na 1 jaar zzp een hypotheek krijgen?</h3>
        <p>
          Dat kan. Na minimaal 12 maanden ondernemerschap kun je binnen de NHG-regels gebruikmaken
          van de Inkomensverklaring Ondernemer, mits je aan de overige voorwaarden voldoet.
        </p>
        <h3>Kan ik een hypotheek krijgen zonder drie jaar cijfers?</h3>
        <p>
          Dat kan. Bij een onderneming die korter dan drie jaar bestaat, kan de inkomensanalyse
          worden gebaseerd op de kortere beschikbare periode.
        </p>
        <h3>Kan ik als starter een hypotheek met NHG krijgen?</h3>
        <p>
          Ja, als je aan de NHG-voorwaarden voldoet. Voor ondernemers geldt onder andere de minimale
          periode van 12 maanden ondernemerschap voor de Inkomensverklaring Ondernemer.
        </p>
        <h3>Telt mijn omzet mee voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Bij een ondernemer moet eerst worden bepaald welk inkomen volgens de
          toepasselijke methode als toetsinkomen kan worden gebruikt.
        </p>
        <h3>Telt mijn winst als zzp&apos;er mee voor mijn hypotheek?</h3>
        <p>
          De fiscale winst is relevant voor de inkomensbeoordeling van een ondernemer. De winst van
          één jaar is echter niet automatisch gelijk aan het toetsinkomen.
        </p>
        <h3>
          Kan ik als startende zzp&apos;er een hypotheek krijgen als mijn eerste jaar nog niet
          voorbij is?
        </h3>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Ben je
          korter dan 12 maanden ondernemer, dan kun je deze specifieke NHG-route dus nog niet
          gebruiken. Andere hypotheekmogelijkheden kunnen afhankelijk zijn van de geldverstrekker en
          je persoonlijke situatie.
        </p>
        <h3>Heeft een studieschuld invloed op mijn hypotheek als starter?</h3>
        <p>Ja. Een studieschuld kan je maximale hypotheek verlagen.</p>

        <h2>Meer over hypotheken voor zzp&apos;ers</h2>
        <p>Lees ook:</p>
        <HypotheekHubLink />
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper-hoe-werkt-het" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
        <p>
          Of bereken direct een{' '}
          <Link href="/tools/hypotheek-berekenen-zzp" className="text-warm-orange hover:underline">
            eerste indicatie van je maximale hypotheek als zzp&apos;er
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    slug: 'hoe-lang-zzper-zijn-voor-hypotheek',
    relatedSlugs: [
      'hypotheek-voor-startende-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
      'factureren-startende-zzper',
    ],
    title: "Hoe lang moet je zzp'er zijn voor een hypotheek?",
    excerpt:
      "Hoe lang moet je zzp'er zijn voor een hypotheek? Lees wanneer je als zzp'er een hypotheek kunt aanvragen en hoe je inkomen wordt beoordeeld.",
    keywords:
      "hoe lang zzp'er voor hypotheek, hoe lang moet je zzp'er zijn voor een hypotheek, hypotheek na 1 jaar zzp, hypotheek als zzp'er na 1 jaar, hypotheek zzp zonder 3 jaar, hypotheek zonder 3 jaar zzp, hoeveel jaar zzp voor hypotheek, hypotheek startende zzp'er, hypotheek zzp 2 jaar, hypotheek zzp 3 jaar",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hoe%20lang%20moet%20je%20zzper%20zijn%20voor%20een%20hypotheek.jpg',
      alt: "Hoe lang moet je zzp'er zijn voor een hypotheek? Uitleg over 12 maanden NHG en 3 jaar cijfers.",
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Kun je na 1 jaar zzp een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de Inkomensverklaring Ondernemer. Andere voorwaarden voor de hypotheek blijven van toepassing.',
      },
      {
        question: "Moet je 3 jaar zzp'er zijn voor een hypotheek?",
        answer:
          'Nee. Drie jaar ondernemerschap is geen algemene minimumvoorwaarde. Voor de NHG-route met een Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.',
      },
      {
        question: "Kun je een hypotheek krijgen als je minder dan 3 jaar zzp'er bent?",
        answer:
          'Dat kan mogelijk. Bij NHG kan de Inkomensverklaring Ondernemer vanaf minimaal 12 maanden ondernemerschap worden gebruikt. De beschikbare financiële historie is dan wel korter.',
      },
      {
        question: 'Is 1 jaar zzp genoeg voor een hypotheek?',
        answer:
          'Een jaar ondernemerschap kan voldoende zijn om voor de NHG-Inkomensverklaring Ondernemer in aanmerking te komen, maar het betekent niet automatisch dat je een hypotheek krijgt of een bepaald bedrag kunt lenen.',
      },
      {
        question: "Hoeveel jaar cijfers heb je nodig als zzp'er?",
        answer:
          'Dat hangt af van de hypotheek en de gebruikte inkomensbeoordeling. Bij NHG wordt voor ondernemers gewerkt met de Inkomensverklaring Ondernemer. Voor een ondernemer met een kortere historie wordt de beschikbare periode gebruikt.',
      },
      {
        question: "Kun je als startende zzp'er een huis kopen?",
        answer:
          'Dat kan mogelijk. Hoe lang je onderneming bestaat is één van de factoren. Ook je inkomen, financiële verplichtingen, eventuele partnerinkomsten en de waarde van de woning spelen een rol.',
      },
    ],
    content: (
      <>
        <p>
          Hoe lang moet je zzp&apos;er zijn voordat je een hypotheek kunt krijgen? Veel mensen denken
          dat je minimaal drie jaar als zelfstandige moet werken voordat je een huis kunt kopen. Dat
          is niet als algemene regel juist.
        </p>
        <p>
          Voor ondernemers die een hypotheek met Nationale Hypotheek Garantie (NHG) willen aanvragen,
          geldt in 2026 dat je minimaal 12 maanden als ondernemer actief moet zijn om gebruik te
          kunnen maken van de Inkomensverklaring Ondernemer. Daarmee kan je ondernemersinkomen worden
          vastgesteld voor de hypotheekaanvraag.
        </p>
        <p>
          Dat betekent niet dat je na precies 12 maanden automatisch een hypotheek krijgt. Je
          inkomen, financiële verplichtingen, de waarde van de woning en de voorwaarden van de
          geldverstrekker spelen ook een rol.
        </p>

        <h2>Hoe lang moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>
          Er bestaat geen algemene regel dat je drie jaar zzp&apos;er moet zijn voordat je een
          hypotheek kunt aanvragen.
        </p>
        <p>
          Voor een hypotheek met NHG kan een ondernemer die <strong>minimaal 12 maanden</strong>{' '}
          actief is gebruikmaken van de Inkomensverklaring Ondernemer. Dit geldt bijvoorbeeld voor
          een ondernemer met een eenmanszaak.
        </p>
        <p>
          De periode wordt daarbij in maanden bekeken en niet alleen aan de hand van volledige
          kalenderjaren.
        </p>
        <p>Ben je bijvoorbeeld:</p>
        <ul>
          <li>
            1 jaar en 2 maanden zzp&apos;er? Dan voldoe je aan de minimale periode van 12 maanden
            voor deze NHG-route.
          </li>
          <li>2 jaar zzp&apos;er? Dan kan deze route ook mogelijk zijn.</li>
          <li>
            3 jaar of langer zzp&apos;er? Dan heb je een langere ondernemershistorie, maar drie jaar
            ondernemerschap is niet als algemene minimumvoorwaarde vereist.
          </li>
        </ul>
        <p>
          Of je daadwerkelijk een hypotheek kunt krijgen, hangt vervolgens af van je toetsinkomen en
          je volledige financiële situatie.
        </p>

        <h2>Kun je na 1 jaar zzp al een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk zijn.</p>
        <p>
          Voor NHG geldt dat een ondernemer die minimaal 12 maanden een beroep of bedrijf uitoefent
          gebruik kan maken van de Inkomensverklaring Ondernemer om het toetsinkomen vast te stellen.
        </p>
        <p>
          Dat is vooral relevant voor startende zzp&apos;ers die nog geen drie volledige boekjaren
          hebben.
        </p>
        <p>
          Een jaar zzp&apos;er zijn betekent echter niet automatisch dat je een hypotheek kunt
          krijgen. De inkomensverklaring bepaalt welk inkomen voor de hypotheektoets kan worden
          gebruikt. Daarnaast wordt gekeken naar bijvoorbeeld schulden, andere financiële
          verplichtingen en de waarde van de woning.
        </p>

        <h2>Moet je 3 jaar zzp&apos;er zijn?</h2>
        <p>Nee, drie jaar zzp&apos;er zijn is geen algemene voorwaarde voor een hypotheek.</p>
        <p>
          De verwarring ontstaat waarschijnlijk doordat de beoordeling van ondernemersinkomen
          rekening kan houden met meerdere jaren aan financiële gegevens.
        </p>
        <p>
          Binnen het NHG-toetskader wordt bij IB-ondernemers bijvoorbeeld gekeken naar de fiscale
          winst over de afgelopen drie jaren, waarbij het laatste jaar als maximum geldt. Heb je nog
          geen drie jaar aan cijfers, dan is de beschikbare historie korter.
        </p>
        <p>
          Daarom zijn <strong>drie jaar ondernemer zijn</strong> en{' '}
          <strong>drie jaar financiële gegevens hebben</strong> twee verschillende dingen.
        </p>

        <h2>Hypotheek met minder dan 3 jaar cijfers</h2>
        <p>
          Ben je korter dan drie jaar ondernemer? Dan betekent dat niet automatisch dat een
          hypotheek uitgesloten is.
        </p>
        <p>
          Bij de NHG-route voor ondernemers wordt juist rekening gehouden met de duur van het
          ondernemerschap. De Inkomensverklaring Ondernemer kan vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is. Dat
          kan invloed hebben op de manier waarop je inkomen wordt vastgesteld.
        </p>
        <p>
          Een korte ondernemershistorie betekent daarom niet automatisch &quot;geen hypotheek&quot;,
          maar je aanvraag kan wel anders worden beoordeeld dan die van een ondernemer met een
          langere historie. Meer hierover op{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            hypotheek zonder 3 jaar cijfers
          </Link>
          .
        </p>

        <h2>Hypotheek na 1, 2 of 3 jaar zzp</h2>
        <h3>1 jaar zzp</h3>
        <p>
          Na minimaal 12 maanden ondernemerschap kan de NHG-route met een Inkomensverklaring
          Ondernemer beschikbaar zijn.
        </p>
        <p>
          Je hebt dan nog maar een beperkte ondernemershistorie. De hoogte en stabiliteit van je
          inkomen zijn daarom belangrijk bij de beoordeling.
        </p>
        <h3>2 jaar zzp</h3>
        <p>
          Na twee jaar heb je meer financiële historie opgebouwd. Toch blijft de beoordeling
          afhankelijk van je daadwerkelijke bedrijfsresultaten en de manier waarop het toetsinkomen
          wordt vastgesteld.
        </p>
        <h3>3 jaar zzp</h3>
        <p>
          Na drie jaar is er meer historische informatie beschikbaar. Binnen het NHG-toetskader kan
          bij de beoordeling van het ondernemersinkomen worden gekeken naar de fiscale winst over de
          afgelopen drie jaren, waarbij het laatste jaar als maximum geldt.
        </p>
        <p>
          Maar ook met drie jaar cijfers krijg je niet automatisch een hypotheek. Je maximale
          hypotheek hangt onder andere af van je inkomen, rente en financiële verplichtingen.
        </p>

        <h2>Waar kijkt de hypotheekverstrekker naar?</h2>
        <p>
          Hoe lang je al zzp&apos;er bent is maar één onderdeel van de beoordeling.
        </p>
        <p>Voor je maximale hypotheek zijn onder andere van belang:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de financiële resultaten van je onderneming;</li>
          <li>eventuele schulden en andere verplichtingen;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>de rente en rentevaste periode;</li>
          <li>de waarde van de woning.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder meer afhankelijk is van het inkomen
          en de waarde van de woning. Ook financiële verplichtingen zoals een persoonlijke lening,
          leasecontract of studieschuld kunnen de maximale hypotheek beïnvloeden.
        </p>

        <h2>Wat als je inkomen sterk is gestegen?</h2>
        <p>
          Een stijgend inkomen kan relevant zijn bij de beoordeling van je ondernemersinkomen.
        </p>
        <p>
          Het is daarom niet alleen belangrijk hoeveel jaar je onderneming bestaat, maar ook hoe je
          bedrijf zich financieel ontwikkelt.
        </p>
        <p>
          Een ondernemer die pas twee jaar bezig is maar een duidelijke financiële historie heeft,
          wordt niet simpelweg op dezelfde manier beoordeeld als iemand die al tien jaar ondernemer
          is.
        </p>
        <p>
          De precieze berekening van het toetsinkomen hangt af van het toepasselijke toetskader en
          de geldverstrekker.
        </p>

        <h2>Kun je als startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk zijn.</p>
        <p>
          Een startende ondernemer hoeft dus niet per definitie drie jaar te wachten. Voor NHG kan
          de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12 maanden actief
          bent als ondernemer.
        </p>
        <p>
          Daarbij blijft je financiële situatie bepalend. De 12-maandenregel geeft toegang tot deze
          beoordelingsroute, maar is geen garantie dat je een bepaald hypotheekbedrag kunt lenen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
          .
        </p>

        <h2>Geldt de 12-maandenregel bij iedere hypotheek?</h2>
        <p>Niet automatisch.</p>
        <p>
          De regel van minimaal 12 maanden die hierboven wordt beschreven, komt uit het NHG-toetskader
          voor de Inkomensverklaring Ondernemer.
        </p>
        <p>
          Heb je een hypotheek zonder NHG, dan kunnen geldverstrekkers hun eigen acceptatiebeleid en
          voorwaarden hanteren.
        </p>
        <p>Daarom moet je onderscheid maken tussen:</p>
        <ul>
          <li>
            <strong>NHG:</strong> specifieke regels voor het vaststellen van ondernemersinkomen;
          </li>
          <li>
            <strong>hypotheek zonder NHG:</strong> voorwaarden kunnen per geldverstrekker
            verschillen.
          </li>
        </ul>

        <h2>Hoeveel hypotheek kun je krijgen als je 1 jaar zzp&apos;er bent?</h2>
        <p>
          Dat is niet uitsluitend op basis van je aantal maanden als zzp&apos;er te bepalen.
        </p>
        <p>
          Je hypotheek wordt niet simpelweg berekend als bijvoorbeeld &quot;één keer je
          jaarwinst&quot;. Er wordt gekeken naar het inkomen dat voor de hypotheektoets wordt
          vastgesteld en naar andere factoren binnen de leennormen.
        </p>
        <p>
          Ook de woningwaarde speelt een rol. In het algemeen kun je maximaal 100% van de waarde van
          de woning financieren.
        </p>
        <p>Wil je zelf een eerste indicatie berekenen?</p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Welke documenten heb je nodig?</h2>
        <p>
          Voor een hypotheek als ondernemer kunnen financiële en bedrijfsgegevens nodig zijn om je
          inkomen vast te stellen.
        </p>
        <p>
          Welke documenten precies nodig zijn, hangt af van de gekozen hypotheek, de geldverstrekker
          en de gebruikte inkomensbeoordeling.
        </p>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt deze verklaring gebruikt
          om het ondernemersinkomen vast te stellen. De verklaring wordt opgesteld door een
          geselecteerde rekenexpert en is zes maanden geldig.
        </p>

        <h2>NHG voor zzp&apos;ers in 2026</h2>
        <p>
          In 2026 ligt de NHG-grens op €470.000. Voor een woning waarbij energiebesparende
          maatregelen worden meegefinancierd, ligt de grens op €498.200.
        </p>
        <p>
          De NHG-grens zegt overigens niets over hoeveel jij persoonlijk kunt lenen. Je maximale
          hypotheek wordt ook bepaald door je inkomen, verplichtingen en de waarde van de woning.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kun je na 1 jaar zzp een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan een ondernemer die minimaal 12 maanden actief is
          gebruikmaken van de Inkomensverklaring Ondernemer. Andere voorwaarden voor de hypotheek
          blijven van toepassing.
        </p>
        <h3>Moet je 3 jaar zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Nee. Drie jaar ondernemerschap is geen algemene minimumvoorwaarde. Voor de NHG-route met
          een Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.
        </p>
        <h3>Kun je een hypotheek krijgen als je minder dan 3 jaar zzp&apos;er bent?</h3>
        <p>
          Dat kan mogelijk. Bij NHG kan de Inkomensverklaring Ondernemer vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt. De beschikbare financiële historie is dan wel korter.
        </p>
        <h3>Is 1 jaar zzp genoeg voor een hypotheek?</h3>
        <p>
          Een jaar ondernemerschap kan voldoende zijn om voor de NHG-Inkomensverklaring Ondernemer in
          aanmerking te komen, maar het betekent niet automatisch dat je een hypotheek krijgt of een
          bepaald bedrag kunt lenen.
        </p>
        <h3>Hoeveel jaar cijfers heb je nodig als zzp&apos;er?</h3>
        <p>
          Dat hangt af van de hypotheek en de gebruikte inkomensbeoordeling. Bij NHG wordt voor
          ondernemers gewerkt met de Inkomensverklaring Ondernemer. Voor een ondernemer met een
          kortere historie wordt de beschikbare periode gebruikt.
        </p>
        <h3>Kun je als startende zzp&apos;er een huis kopen?</h3>
        <p>
          Dat kan mogelijk. Hoe lang je onderneming bestaat is één van de factoren. Ook je inkomen,
          financiële verplichtingen, eventuele partnerinkomsten en de waarde van de woning spelen
          een rol.
        </p>

        <h2>Bereken je maximale hypotheek als zzp&apos;er</h2>
        <p>
          Ben je al minimaal een jaar zzp&apos;er of heb je een kortere ondernemershistorie? Dan kun
          je eerst bekijken wat je op basis van je inkomen ongeveer zou kunnen lenen.
        </p>
        <HypotheekCta label="Bereken je hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Bekijk daarnaast:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'welk-inkomen-telt-voor-hypotheek-als-zzper',
    relatedSlugs: [
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Welk inkomen telt voor een hypotheek als zzp'er?",
    excerpt:
      "Welk inkomen telt voor je hypotheek als zzp'er? Lees hoe je toetsinkomen wordt vastgesteld en hoe winst, eerdere jaren en je actuele inkomen meetellen.",
    keywords:
      "welk inkomen telt voor hypotheek zzp, welk inkomen telt voor hypotheek als zzp'er, inkomen hypotheek zzp, toetsinkomen zzp, inkomen zzp hypotheek, winst zzp hypotheek, winst uit onderneming hypotheek, inkomen eenmanszaak hypotheek, hoeveel inkomen hypotheek zzp, hypotheek op basis van winst, ondernemersinkomen hypotheek",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Welk%20inkomen%20telt%20voor%20een%20hypotheek%20als%20zzp.jpg',
      alt: "Welk inkomen telt voor een hypotheek als zzp'er? Uitleg over toetsinkomen, winst en omzet.",
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Is mijn omzet mijn hypotheekinkomen?',
        answer:
          'Nee. Omzet is het bedrag dat je onderneming ontvangt voordat zakelijke kosten ervan worden afgetrokken. Voor een hypotheek is het ondernemersinkomen/toetsinkomen relevant.',
      },
      {
        question: 'Is mijn winst mijn hypotheekinkomen?',
        answer:
          'Je winst vormt een belangrijk onderdeel van de beoordeling, maar winst is niet automatisch hetzelfde als het uiteindelijke toetsinkomen.',
      },
      {
        question: 'Wordt gekeken naar mijn laatste jaar?',
        answer:
          'Ja, het laatste boekjaar is belangrijk. Binnen het NHG-toetskader kan het laatste jaar als uitgangspunt gelden wanneer het inkomen lager is dan het gemiddelde. Ook het lopende boekjaar wordt beoordeeld.',
      },
      {
        question: 'Worden drie jaren meegenomen?',
        answer:
          'Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken, of korter als je onderneming jonger is.',
      },
      {
        question: 'Kan ik een hypotheek krijgen met één jaar ondernemerschap?',
        answer:
          'Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12 maanden actief bent als ondernemer. Dit betekent niet dat je automatisch een hypotheek krijgt; je volledige financiële situatie wordt beoordeeld.',
      },
      {
        question: 'Telt mijn partnerinkomen mee?',
        answer: 'Dat kan, afhankelijk van de situatie en de geldende hypotheekregels.',
      },
      {
        question: 'Telt een studieschuld mee?',
        answer:
          'Ja. Een studieschuld kan je maximale hypotheek verlagen. De manier waarop hiermee wordt gerekend hangt af van de geldende regels.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er werkt je hypotheekberekening anders dan wanneer je in loondienst bent. Je
          hebt geen vast salaris dat eenvoudig van een loonstrook kan worden overgenomen. Voor een
          hypotheek moet daarom eerst worden bepaald welk{' '}
          <strong>ondernemersinkomen als toetsinkomen</strong> mag worden gebruikt.
        </p>
        <p>
          Daarbij wordt onder andere gekeken naar de financiële resultaten van je onderneming, je
          ondernemershistorie en je actuele inkomen.
        </p>
        <p>
          Voor een hypotheek met NHG kan het ondernemersinkomen worden vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Daarbij wordt meestal gekeken naar de
          afgelopen drie jaar, of naar een kortere periode als je onderneming nog geen drie jaar
          bestaat. Op basis daarvan wordt het toetsinkomen vastgesteld.
        </p>

        <h2>Welk inkomen telt voor een hypotheek als zzp&apos;er?</h2>
        <p>Voor een hypotheek telt niet simpelweg je omzet als inkomen.</p>
        <p>
          Bij een ondernemer wordt gekeken naar het inkomen dat uit de onderneming beschikbaar is en
          volgens de geldende regels als <strong>toetsinkomen</strong> kan worden meegenomen.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt de financiële situatie van de onderneming
          uitgebreid geanalyseerd. Daarbij wordt onder andere gekeken naar de resultaten van eerdere
          boekjaren en het lopende boekjaar.
        </p>
        <p>Daarom zijn deze begrippen belangrijk:</p>
        <ul>
          <li>omzet;</li>
          <li>zakelijke kosten;</li>
          <li>winst;</li>
          <li>ondernemersinkomen;</li>
          <li>toetsinkomen.</li>
        </ul>
        <p>
          Je omzet is dus niet hetzelfde als het inkomen waarmee je hypotheek wordt berekend.
        </p>

        <h2>Telt je omzet mee voor je hypotheek?</h2>
        <p>Niet rechtstreeks.</p>
        <p>
          Stel dat je als zzp&apos;er €100.000 omzet per jaar hebt. Dat betekent niet automatisch
          dat €100.000 als inkomen voor je hypotheek wordt gezien.
        </p>
        <p>
          Van je omzet betaal je bijvoorbeeld zakelijke kosten. Het financiële resultaat van je
          onderneming is daarom veel relevanter voor de beoordeling dan alleen je omzet.
        </p>
        <p>Een eenvoudige voorstelling is:</p>
        <p>
          <strong>Omzet − zakelijke kosten = resultaat/winst</strong>
        </p>
        <p>
          Maar ook je winst is niet automatisch één-op-één gelijk aan het uiteindelijke toetsinkomen.
          Bij de inkomensbeoordeling kunnen verschillende correcties en voorwaarden worden
          toegepast.
        </p>

        <h2>Telt je winst als inkomen voor je hypotheek?</h2>
        <p>
          Je winst uit onderneming vormt een belangrijk onderdeel van de beoordeling van je
          ondernemersinkomen.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt onder andere gekeken naar de fiscale winst.
          Het toetskader houdt rekening met meerdere jaren en met het actuele resultaat.
        </p>
        <p>
          Bij een IB-ondernemer wordt bijvoorbeeld gekeken naar de fiscale winst over de beschikbare
          jaren. Heb je drie jaar cijfers, dan wordt de historische ontwikkeling meegenomen. Heb je
          een jongere onderneming, dan wordt gekeken naar de kortere beschikbare historie.
        </p>
        <p>Daarom kun je niet simpelweg zeggen:</p>
        <blockquote>
          <p>&quot;Mijn winst is €60.000, dus mijn hypotheekinkomen is €60.000.&quot;</p>
        </blockquote>
        <p>
          Het exacte toetsinkomen moet volgens het toepasselijke toetskader worden vastgesteld.
        </p>

        <h2>Wat is toetsinkomen?</h2>
        <p>
          Het <strong>toetsinkomen</strong> is het inkomen dat voor de hypotheekberekening wordt
          gebruikt.
        </p>
        <p>
          Voor iemand in loondienst is dat vaak relatief eenvoudig vast te stellen aan de hand van
          salarisgegevens. Voor een ondernemer is een uitgebreidere inkomensbeoordeling nodig.
        </p>
        <p>
          Bij NHG kan daarvoor de Inkomensverklaring Ondernemer worden gebruikt. Een onafhankelijke
          rekenexpert analyseert de onderneming en stelt vervolgens het toetsinkomen vast.
        </p>
        <p>
          Het toetsinkomen is vervolgens één van de belangrijkste gegevens bij het bepalen van je
          maximale hypotheek.
        </p>

        <h2>Hoe wordt het inkomen van een zzp&apos;er berekend?</h2>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt gekeken naar de
          financiële historie van de onderneming.
        </p>
        <p>De analyse gaat meestal over:</p>
        <ol>
          <li>de resultaten van eerdere boekjaren;</li>
          <li>het meest recente boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>de ontwikkeling van het inkomen;</li>
          <li>bepaalde correctieposten;</li>
          <li>de financiële positie van de onderneming.</li>
        </ol>
        <p>De exacte berekening volgt het actuele NHG-toetskader.</p>
        <p>Het gaat dus niet alleen om één bedrag dat je zelf opgeeft.</p>

        <h2>Tellen meerdere jaren inkomen mee?</h2>
        <p>Ja.</p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt meestal gekeken naar de afgelopen drie jaar.
          Bestaat je onderneming korter dan drie jaar, dan wordt gekeken naar de kortere beschikbare
          periode.
        </p>
        <p>Dat betekent dat je ondernemershistorie belangrijk is.</p>
        <p>Een voorbeeld:</p>
        <ul>
          <li>jaar 1: €35.000 winst</li>
          <li>jaar 2: €45.000 winst</li>
          <li>jaar 3: €55.000 winst</li>
        </ul>
        <p>
          Deze ontwikkeling geeft andere informatie dan wanneer je resultaten bijvoorbeeld €55.000,
          €45.000 en €35.000 zijn.
        </p>
        <p>De ontwikkeling van je onderneming wordt daarom meegenomen in de beoordeling.</p>

        <h2>Telt het laatste jaar het zwaarst?</h2>
        <p>Het laatste jaar is belangrijk.</p>
        <p>
          Binnen het NHG-toetskader geldt onder meer dat wanneer het inkomen in het laatste jaar
          lager is dan het gemiddelde inkomen, het laatste jaar als uitgangspunt kan gelden. Ook
          wordt gekeken naar het lopende boekjaar. Het actuele inkomen moet daarbij minimaal in lijn
          zijn met het gemiddelde.
        </p>
        <p>
          Daarmee wordt voorkomen dat een tijdelijk hoger inkomen uit eerdere jaren automatisch
          leidt tot een te hoog toetsinkomen wanneer je inkomen inmiddels duidelijk is gedaald.
        </p>

        <h2>Wat als je inkomen stijgt?</h2>
        <p>
          Een stijgend inkomen kan een positieve ontwikkeling van je onderneming laten zien, maar
          het betekent niet automatisch dat je volledige actuele winst als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Bij de beoordeling wordt gekeken naar de beschikbare financiële gegevens en de
          ontwikkeling van de onderneming. Ook het lopende boekjaar kan daarbij worden betrokken.
        </p>
        <p>Heb je bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €30.000 winst;</li>
          <li>jaar 2: €40.000 winst;</li>
          <li>jaar 3: €55.000 winst;</li>
        </ul>
        <p>dan is het relevant dat je onderneming duidelijk groeit.</p>
        <p>
          Het uiteindelijke toetsinkomen wordt echter volgens het geldende toetskader vastgesteld.
        </p>

        <h2>Wat als je inkomen daalt?</h2>
        <p>Een dalend inkomen kan juist gevolgen hebben voor het toetsinkomen.</p>
        <p>
          Als je laatste boekjaar duidelijk minder goed was dan eerdere jaren, wordt niet automatisch
          uitgegaan van het hogere historische gemiddelde. Binnen het NHG-toetskader geldt dat bij
          een lager inkomen in het laatste jaar het laatste jaar als uitgangspunt kan gelden. Ook
          moet het lopende boekjaar worden beoordeeld.
        </p>
        <p>Dat is belangrijk als je onderneming sterk wisselende resultaten heeft.</p>

        <h2>Telt het lopende jaar mee?</h2>
        <p>Ja.</p>
        <p>
          De hypotheekbeoordeling kijkt niet uitsluitend naar oude jaarcijfers. Bij de
          NHG-Inkomensverklaring Ondernemer wordt ook gekeken naar het lopende boekjaar.
        </p>
        <p>
          Dit is vooral relevant wanneer je huidige situatie sterk afwijkt van eerdere jaren.
        </p>
        <p>Een onderneming kan bijvoorbeeld:</p>
        <ul>
          <li>sterk gegroeid zijn;</li>
          <li>juist minder omzet hebben;</li>
          <li>hogere kosten hebben gekregen;</li>
          <li>een grote opdrachtgever zijn kwijtgeraakt;</li>
          <li>of structureel meer winst maken.</li>
        </ul>
        <p>
          De actuele situatie kan daardoor relevant zijn voor het vaststellen van het toetsinkomen.
        </p>

        <h2>Telt je salaris uit loondienst ook mee?</h2>
        <p>Dat kan.</p>
        <p>
          Sommige ondernemers combineren hun onderneming met een baan in loondienst. In dat geval
          kunnen inkomsten uit loondienst en ondernemerschap naast elkaar worden beoordeeld.
        </p>
        <p>
          NHG geeft bijvoorbeeld aan dat een combinatie van inkomsten uit dienstbetrekking en
          zelfstandig ondernemerschap mogelijk is binnen de inkomensbeoordeling.
        </p>
        <p>
          Of en hoe het salaris wordt meegenomen, hangt af van de situatie en de geldende
          voorwaarden.
        </p>

        <h2>Telt inkomen van je partner mee?</h2>
        <p>
          Als je samen een hypotheek aanvraagt, kan het inkomen van je partner onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          Het inkomen van de ondernemer wordt dan afzonderlijk vastgesteld en gecombineerd met het
          inkomen dat volgens de geldende regels van de partner mag worden meegenomen.
        </p>
        <p>
          De maximale hypotheek wordt uiteindelijk niet alleen bepaald door het ondernemersinkomen.
          Ook andere financiële verplichtingen en de waarde van de woning spelen een rol.
        </p>

        <h2>Tellen zakelijke kosten mee?</h2>
        <p>Zakelijke kosten hebben indirect invloed op je hypotheekinkomen.</p>
        <p>
          Hogere zakelijke kosten verlagen doorgaans het resultaat van je onderneming. Omdat de
          financiële resultaten van de onderneming onderdeel zijn van de inkomensbeoordeling, kunnen
          zakelijke kosten daarmee indirect invloed hebben op het toetsinkomen.
        </p>
        <p>
          Je hoeft zakelijke kosten dus niet als een aparte maandelijkse hypotheeklast op te geven.
          Het effect zit in de financiële resultaten van de onderneming.
        </p>

        <h2>Wat als je weinig winst maakt maar veel omzet?</h2>
        <p>
          Veel omzet betekent niet automatisch dat je een hoog hypotheekinkomen hebt.
        </p>
        <p>Een ondernemer met:</p>
        <p>
          <strong>€150.000 omzet en €100.000 kosten</strong>
        </p>
        <p>heeft financieel een heel andere onderneming dan iemand met:</p>
        <p>
          <strong>€80.000 omzet en €20.000 kosten.</strong>
        </p>
        <p>
          Alleen naar omzet kijken zou daarom een vertekend beeld geven.
        </p>
        <p>
          Voor de hypotheek is vooral relevant welk inkomen volgens de inkomensbeoordeling uit de
          onderneming voortkomt.
        </p>

        <h2>Welk inkomen telt als je minder dan 3 jaar zzp&apos;er bent?</h2>
        <p>
          Als je onderneming nog geen drie jaar bestaat, betekent dat niet automatisch dat je geen
          hypotheek kunt krijgen.
        </p>
        <p>
          Bij NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Bij een jongere onderneming wordt de beschikbare periode
          beoordeeld in plaats van automatisch drie volledige jaren te verlangen.
        </p>
        <p>Je hebt dan simpelweg minder historische cijfers beschikbaar.</p>
        <p>
          Dat maakt de ontwikkeling van je onderneming en je actuele financiële situatie extra
          relevant.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Welk inkomen telt bij een eenmanszaak?</h2>
        <p>
          Heb je een eenmanszaak, dan wordt je ondernemersinkomen beoordeeld op basis van de
          financiële gegevens van je onderneming.
        </p>
        <p>Je omzet is daarbij niet hetzelfde als je hypotheekinkomen.</p>
        <p>
          Bij een NHG-aanvraag wordt via de Inkomensverklaring Ondernemer het toetsinkomen
          vastgesteld op basis van het geldende toetskader.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
            Hypotheek met een eenmanszaak: zo werkt het
          </Link>
        </p>

        <h2>Heeft een hoge winst altijd een hogere hypotheek tot gevolg?</h2>
        <p>Niet automatisch.</p>
        <p>
          Een hoger toetsinkomen kan in principe meer ruimte geven binnen de hypotheeknormen, maar
          je maximale hypotheek wordt ook door andere factoren bepaald.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>rente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>partnerinkomen;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder andere afhankelijk is van inkomen,
          schulden en leningen.
        </p>
        <p>
          Je kunt daarom niet alleen op basis van je winst bepalen hoeveel je kunt lenen. Lees ook{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Welk bedrag moet je invullen bij een hypotheekcalculator?</h2>
        <p>Gebruik niet zomaar je omzet als inkomen.</p>
        <p>
          Bij een calculator voor zzp&apos;ers is het belangrijk om te weten welk inkomen als{' '}
          <strong>toetsinkomen</strong> wordt gebruikt. Als je al een Inkomensverklaring Ondernemer
          hebt, is het vastgestelde toetsinkomen het meest relevante bedrag voor de
          hypotheekberekening.
        </p>
        <p>
          Heb je die verklaring nog niet, dan kan een eenvoudige calculator alleen een indicatie
          geven.
        </p>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Is mijn omzet mijn hypotheekinkomen?</h3>
        <p>
          Nee. Omzet is het bedrag dat je onderneming ontvangt voordat zakelijke kosten ervan worden
          afgetrokken. Voor een hypotheek is het ondernemersinkomen/toetsinkomen relevant.
        </p>
        <h3>Is mijn winst mijn hypotheekinkomen?</h3>
        <p>
          Je winst vormt een belangrijk onderdeel van de beoordeling, maar winst is niet automatisch
          hetzelfde als het uiteindelijke toetsinkomen.
        </p>
        <h3>Wordt gekeken naar mijn laatste jaar?</h3>
        <p>
          Ja, het laatste boekjaar is belangrijk. Binnen het NHG-toetskader kan het laatste jaar als
          uitgangspunt gelden wanneer het inkomen lager is dan het gemiddelde. Ook het lopende
          boekjaar wordt beoordeeld.
        </p>
        <h3>Worden drie jaren meegenomen?</h3>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken,
          of korter als je onderneming jonger is.
        </p>
        <h3>Kan ik een hypotheek krijgen met één jaar ondernemerschap?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je
          minimaal 12 maanden actief bent als ondernemer. Dit betekent niet dat je automatisch een
          hypotheek krijgt; je volledige financiële situatie wordt beoordeeld.
        </p>
        <h3>Telt mijn partnerinkomen mee?</h3>
        <p>Dat kan, afhankelijk van de situatie en de geldende hypotheekregels.</p>
        <h3>Telt een studieschuld mee?</h3>
        <p>
          Ja. Een studieschuld kan je maximale hypotheek verlagen. De manier waarop hiermee wordt
          gerekend hangt af van de geldende regels.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Het belangrijkste bedrag voor je hypotheek is uiteindelijk niet simpelweg je omzet of één
          jaar winst, maar het <strong>toetsinkomen dat volgens de geldende regels voor jouw
          situatie wordt vastgesteld</strong>.
        </p>
        <p>
          Heb je al een vastgesteld toetsinkomen? Dan kun je daarmee een eerste indicatie van je
          maximale hypotheek berekenen.
        </p>
        <p>
          Wil je weten hoe dat inkomen vervolgens wordt gebruikt om je maximale hypotheek te
          berekenen? Lees{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'winst-uit-onderneming-voor-hypotheek',
    relatedSlugs: [
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-met-eenmanszaak',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: 'Winst uit onderneming voor hypotheek',
    metaTitle: 'Winst uit onderneming voor hypotheek: hoe telt het mee?',
    excerpt:
      "Hoe telt winst uit onderneming mee voor je hypotheek als zzp'er? Lees hoe je winst wordt beoordeeld en hoe deze wordt gebruikt voor het toetsinkomen.",
    keywords:
      'winst uit onderneming hypotheek, winst onderneming hypotheek, winst uit onderneming hypotheek zzp, winst zzp hypotheek, winst eenmanszaak hypotheek, hypotheek op basis van winst, hoeveel winst voor hypotheek zzp, fiscale winst hypotheek, winst uit onderneming als inkomen hypotheek, ondernemersinkomen hypotheek',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Winst%20uit%20onderneming%20voor%20hypotheek.jpg',
      alt: 'Winst uit onderneming voor hypotheek: hoe telt het mee als zzp\'er?',
    },
    datePublished: '2026-09-16',
    dateModified: '2026-09-16',
    faq: [
      {
        question: 'Is mijn winst hetzelfde als mijn hypotheekinkomen?',
        answer:
          'Nee. Je winst is een belangrijke basis voor de inkomensbeoordeling, maar het uiteindelijke toetsinkomen wordt volgens het geldende toetskader vastgesteld.',
      },
      {
        question: 'Telt mijn omzet als inkomen voor een hypotheek?',
        answer:
          'Niet rechtstreeks. Voor de beoordeling is het resultaat van de onderneming belangrijker dan alleen de omzet.',
      },
      {
        question: 'Wordt gekeken naar mijn winst van één jaar?',
        answer:
          'Niet uitsluitend. Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen drie jaar gekeken, of korter als de onderneming jonger is.',
      },
      {
        question: 'Moet ik drie jaar winst hebben voordat ik een hypotheek kan krijgen?',
        answer:
          'Nee. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap. Heb je een kortere historie dan drie jaar, dan wordt de beschikbare periode beoordeeld.',
      },
      {
        question: 'Wat als mijn winst stijgt?',
        answer:
          'Een stijgende winst kan onderdeel zijn van de beoordeling van de ontwikkeling van je onderneming. Het uiteindelijke toetsinkomen wordt volgens het geldende toetskader vastgesteld.',
      },
      {
        question: 'Wat als mijn winst daalt?',
        answer:
          'Een dalende winst kan invloed hebben op het toetsinkomen. De actuele financiële situatie van je onderneming is relevant voor de beoordeling.',
      },
      {
        question: 'Kan ik met €50.000 winst een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk, maar je maximale hypotheek kan niet alleen op basis van €50.000 winst worden bepaald. Ook rente, financiële verplichtingen, partnerinkomen en de woningwaarde spelen een rol.',
      },
      {
        question: 'Welke winst telt bij een eenmanszaak?',
        answer:
          'Bij een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling. Het uiteindelijke toetsinkomen wordt vervolgens volgens het geldende toetskader vastgesteld.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er of ondernemer heb je geen vast salaris zoals iemand in loondienst. Voor je
          hypotheek moet daarom eerst worden vastgesteld welk inkomen uit je onderneming als{' '}
          <strong>toetsinkomen</strong> mag worden gebruikt.
        </p>
        <p>Daarbij speelt je winst uit onderneming een belangrijke rol.</p>
        <p>
          Maar je kunt niet simpelweg zeggen: &quot;Ik maak €60.000 winst, dus mijn hypotheekinkomen
          is €60.000.&quot; De hypotheekverstrekker kijkt naar je financiële historie, de
          ontwikkeling van je onderneming en de regels die gelden voor het vaststellen van het
          ondernemersinkomen.
        </p>
        <p>
          Bij een hypotheek met NHG wordt hiervoor bij ondernemers de{' '}
          <strong>Inkomensverklaring Ondernemer</strong> gebruikt. Deze verklaring is een
          uitgebreide analyse van de onderneming. Meestal wordt gekeken naar de afgelopen drie jaar,
          of naar een kortere periode als de onderneming jonger is. Op basis daarvan wordt het
          toetsinkomen vastgesteld.
        </p>

        <h2>Wat is winst uit onderneming?</h2>
        <p>
          Winst uit onderneming is kort gezegd het resultaat van je onderneming nadat de zakelijke
          kosten van de opbrengsten zijn afgetrokken.
        </p>
        <p>Een eenvoudige voorstelling is:</p>
        <p>
          <strong>Omzet − zakelijke kosten = winst</strong>
        </p>
        <p>
          Stel dat je als zzp&apos;er €100.000 omzet en €30.000 zakelijke kosten hebt. Dan bedraagt
          het resultaat vóór verdere fiscale verwerking €70.000.
        </p>
        <p>
          Voor een hypotheek is die €100.000 omzet dus niet het bedrag dat als inkomen wordt gezien.
        </p>
        <p>
          De financiële resultaten van je onderneming zijn belangrijker dan alleen je omzet.
        </p>

        <h2>Telt winst uit onderneming mee voor een hypotheek?</h2>
        <p>
          Ja. De winst uit onderneming vormt een belangrijke basis voor het vaststellen van het
          ondernemersinkomen.
        </p>
        <p>
          Voor een IB-ondernemer, zoals een zzp&apos;er met een eenmanszaak, wordt binnen het
          NHG-toetskader onder meer gekeken naar de fiscale winst. De inkomensverklaring analyseert
          daarbij de financiële situatie van de onderneming over meerdere jaren.
        </p>
        <p>
          Je winst is echter niet automatisch gelijk aan het uiteindelijke toetsinkomen.
        </p>
        <p>
          Er kunnen binnen de inkomensbeoordeling bijvoorbeeld correcties worden toegepast. Ook wordt
          gekeken naar de ontwikkeling van je onderneming en naar de beschikbare financiële gegevens.
        </p>
        <p>Daarom is het belangrijk om onderscheid te maken tussen:</p>
        <ul>
          <li>
            <strong>omzet:</strong> wat je onderneming ontvangt;
          </li>
          <li>
            <strong>kosten:</strong> wat je zakelijk uitgeeft;
          </li>
          <li>
            <strong>winst:</strong> het resultaat van je onderneming;
          </li>
          <li>
            <strong>toetsinkomen:</strong> het inkomen dat uiteindelijk voor de hypotheektoets wordt
            vastgesteld.
          </li>
        </ul>

        <h2>Is je winst hetzelfde als je toetsinkomen?</h2>
        <p>Nee, niet per definitie.</p>
        <p>
          Je winst is een belangrijke input voor de inkomensbeoordeling, maar het toetsinkomen wordt
          volgens het geldende toetskader vastgesteld.
        </p>
        <p>
          Bij NHG gebeurt dit voor ondernemers via de Inkomensverklaring Ondernemer. De rekenexpert
          analyseert de onderneming en stelt op basis daarvan het toetsinkomen vast.
        </p>
        <p>
          Je kunt dus niet altijd je laatste aangifte inkomstenbelasting pakken en dat bedrag
          rechtstreeks in een hypotheekberekening zetten. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Naar welke winst wordt gekeken?</h2>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt niet alleen naar één jaar gekeken.
        </p>
        <p>
          De analyse gaat meestal over de afgelopen drie jaar. Bestaat je onderneming korter dan
          drie jaar, dan wordt gekeken naar de kortere beschikbare periode.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst daarbij een belangrijke basis.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€45.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€55.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Deze ontwikkeling vertelt iets anders dan wanneer je winst bijvoorbeeld €55.000, €45.000
          en €35.000 bedraagt.
        </p>
        <p>Daarom wordt niet uitsluitend naar het hoogste bedrag gekeken.</p>

        <h2>Tellen drie jaar winst mee voor je hypotheek?</h2>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt in principe naar de afgelopen drie jaar
          gekeken, of korter wanneer de onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Dat betekent niet dat je drie volledige jaren ondernemer moet zijn voordat je een
          hypotheek kunt krijgen.
        </p>
        <p>
          Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt wanneer je minimaal 12
          maanden een beroep of bedrijf uitoefent.
        </p>
        <p>
          Heb je bijvoorbeeld pas twee jaar een onderneming, dan wordt je beschikbare financiële
          historie gebruikt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Wat als je winst ieder jaar stijgt?</h2>
        <p>Een stijgende winst laat zien dat je onderneming zich financieel ontwikkelt.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €30.000;</li>
          <li>jaar 2: €42.000;</li>
          <li>jaar 3: €55.000.</li>
        </ul>
        <p>
          De inkomensbeoordeling kijkt naar de ontwikkeling van de onderneming en niet alleen naar
          één los jaar.
        </p>
        <p>
          Dat betekent niet dat je automatisch met €55.000 als toetsinkomen wordt gerekend. Het
          uiteindelijke toetsinkomen wordt volgens het toepasselijke toetskader vastgesteld.
        </p>
        <p>De actuele situatie van de onderneming is daarbij eveneens relevant.</p>

        <h2>Wat als je winst daalt?</h2>
        <p>Een dalende winst kan juist gevolgen hebben voor het toetsinkomen.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>jaar 1: €55.000;</li>
          <li>jaar 2: €60.000;</li>
          <li>jaar 3: €40.000.</li>
        </ul>
        <p>
          Een hypotheekverstrekker kan niet zonder meer uitgaan van de hoogste winst uit het verleden
          als je huidige inkomen structureel lager ligt.
        </p>
        <p>
          Binnen de NHG-beoordeling wordt daarom gekeken naar de ontwikkeling van de onderneming en
          de actuele financiële situatie.
        </p>
        <p>
          Dit voorkomt dat een tijdelijk hoog inkomen uit het verleden automatisch als bestendig
          inkomen wordt gebruikt.
        </p>

        <h2>Telt de winst van het lopende jaar mee?</h2>
        <p>Ook het lopende boekjaar kan relevant zijn.</p>
        <p>
          De inkomensverklaring kijkt niet uitsluitend naar afgesloten boekjaren. De beoordeling kan
          ook gebruikmaken van actuele financiële gegevens van het lopende boekjaar.
        </p>
        <p>
          Dat is vooral belangrijk wanneer je onderneming sterk is veranderd.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>een sterke omzetgroei;</li>
          <li>een forse omzetdaling;</li>
          <li>hogere bedrijfskosten;</li>
          <li>het verliezen van een belangrijke opdrachtgever;</li>
          <li>een structurele stijging van de winst.</li>
        </ul>
        <p>
          De actuele ontwikkeling kan daardoor van invloed zijn op het uiteindelijke toetsinkomen.
        </p>

        <h2>Telt omzet mee voor je hypotheek?</h2>
        <p>Omzet is niet hetzelfde als inkomen.</p>
        <p>Stel:</p>
        <p>
          <strong>Ondernemer A</strong>
        </p>
        <ul>
          <li>omzet: €150.000</li>
          <li>kosten: €100.000</li>
          <li>resultaat: €50.000</li>
        </ul>
        <p>
          <strong>Ondernemer B</strong>
        </p>
        <ul>
          <li>omzet: €80.000</li>
          <li>kosten: €20.000</li>
          <li>resultaat: €60.000</li>
        </ul>
        <p>
          Ondanks de hogere omzet heeft ondernemer A in dit voorbeeld een lager resultaat.
        </p>
        <p>
          Daarom is het voor een hypotheek niet zinvol om alleen naar omzet te kijken.
        </p>
        <p>
          De financiële resultaten van de onderneming zijn de basis voor de verdere
          inkomensbeoordeling.
        </p>

        <h2>Welke kosten verlagen je winst?</h2>
        <p>Zakelijke kosten kunnen je winst verlagen.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>kantoor- en werkruimte;</li>
          <li>zakelijke software;</li>
          <li>apparatuur;</li>
          <li>vervoer;</li>
          <li>verzekeringen;</li>
          <li>marketing;</li>
          <li>opleidingen;</li>
          <li>telefoon en internet;</li>
          <li>ingehuurde diensten.</li>
        </ul>
        <p>
          Welke kosten fiscaal als zakelijke kosten worden geaccepteerd, is een fiscale kwestie.
          Voor de hypotheekbeoordeling wordt vervolgens uitgegaan van de financiële gegevens volgens
          het toepasselijke toetskader.
        </p>
        <p>
          Je moet daarom niet proberen je hypotheekinkomen simpelweg te verhogen door zakelijke
          kosten buiten beschouwing te laten.
        </p>

        <h2>Hoeveel winst heb je nodig voor een hypotheek?</h2>
        <p>
          Er bestaat geen universeel bedrag aan winst waarbij je als zzp&apos;er automatisch wel of
          geen hypotheek kunt krijgen.
        </p>
        <p>
          Of je een bepaalde hypotheek kunt krijgen hangt onder andere af van:
        </p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>je financiële verplichtingen;</li>
          <li>eventuele schulden;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Een ondernemer met €50.000 toetsinkomen kan dus in een andere situatie een andere maximale
          hypotheek hebben dan een andere ondernemer met hetzelfde inkomen.
        </p>
        <p>
          Daarom is alleen vragen &quot;hoeveel winst heb ik nodig?&quot; onvoldoende.
        </p>
        <p>De belangrijkere vraag is:</p>
        <p>
          <strong>
            Welk toetsinkomen wordt voor mijn situatie vastgesteld en hoeveel hypotheek past
            daarbij?
          </strong>
        </p>

        <h2>Hoeveel hypotheek kun je krijgen met €50.000 winst?</h2>
        <p>
          Je kunt niet uitsluitend op basis van €50.000 winst bepalen hoeveel je kunt lenen.
        </p>
        <p>
          Als €50.000 daadwerkelijk het voor de hypotheek relevante toetsinkomen is, vormt dat een
          belangrijk uitgangspunt. Vervolgens wordt gekeken naar de overige financiële
          omstandigheden en de geldende hypotheeknormen.
        </p>
        <p>
          Heb je bijvoorbeeld een studieschuld, leaseverplichting of andere lening, dan kan dat je
          maximale hypotheek verlagen.
        </p>
        <p>Ook de waarde van de woning speelt een rol.</p>
        <p>
          Daarom geeft een hypotheekcalculator alleen een indicatie zolang je definitieve
          toetsinkomen nog niet is vastgesteld.
        </p>
        <HypotheekCta />
        <p>
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Winst uit een eenmanszaak voor hypotheek</h2>
        <p>
          Heb je een eenmanszaak, dan val je voor de NHG-inkomensbeoordeling als zelfstandige onder
          de categorie IB-ondernemer.
        </p>
        <p>
          Bij deze beoordeling speelt de fiscale winst een belangrijke rol. De Inkomensverklaring
          Ondernemer analyseert vervolgens de onderneming en stelt het toetsinkomen vast.
        </p>
        <p>
          Je omzet uit de eenmanszaak is dus niet hetzelfde als je hypotheekinkomen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
            Hypotheek met een eenmanszaak: zo werkt het
          </Link>
        </p>

        <h2>Winst uit een VOF voor hypotheek</h2>
        <p>
          Ook bij een VOF kan het ondernemersinkomen worden beoordeeld via de Inkomensverklaring
          Ondernemer.
        </p>
        <p>
          Bij een IB-ondernemer wordt onder meer gekeken naar de fiscale winst. De precieze
          beoordeling hangt af van de structuur van de onderneming en de beschikbare financiële
          gegevens.
        </p>
        <p>
          Bij meerdere vennoten moet daarom niet alleen naar de totale winst van de VOF worden
          gekeken. Relevant is het inkomen dat aan de betreffende ondernemer toekomt.
        </p>

        <h2>Winst uit een BV voor hypotheek</h2>
        <p>Een BV wordt anders behandeld dan een eenmanszaak.</p>
        <p>
          Bij een BV is het onderscheid tussen bijvoorbeeld salaris uit dienstbetrekking, dividend
          en het belang in de onderneming relevant.
        </p>
        <p>
          Het ondernemersinkomen wordt daarom niet op dezelfde manier vastgesteld als bij een
          IB-ondernemer met een eenmanszaak.
        </p>
        <p>
          Heb je een BV en wil je weten welk inkomen voor jouw hypotheek kan worden gebruikt, dan
          moet je naar de specifieke inkomensbeoordeling voor jouw situatie kijken.
        </p>

        <h2>Kan een hoge winst zorgen voor een hogere hypotheek?</h2>
        <p>
          Een hoger toetsinkomen kan leiden tot meer leencapaciteit, maar winst alleen bepaalt je
          maximale hypotheek niet.
        </p>
        <p>Ook andere factoren spelen mee.</p>
        <p>Denk aan:</p>
        <ul>
          <li>rente;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>partnerinkomen;</li>
          <li>woningwaarde;</li>
          <li>hypotheekduur;</li>
          <li>geldende wettelijke en bancaire normen.</li>
        </ul>
        <p>
          Je maximale hypotheek is daarom niet simpelweg een percentage van je winst.
        </p>

        <h2>Wat als je net gestart bent en nog weinig winst hebt?</h2>
        <p>
          Een startende zzp&apos;er heeft vaak nog weinig historische cijfers.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Als de onderneming jonger is dan drie jaar, wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          De beperkte historie kan wel betekenen dat je financiële ontwikkeling extra belangrijk is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Wat heb je nodig om je winst aan te tonen?</h2>
        <p>
          Voor een hypotheekaanvraag als ondernemer zijn financiële gegevens nodig om het
          ondernemersinkomen vast te stellen.
        </p>
        <p>
          Bij een NHG-aanvraag met een Inkomensverklaring Ondernemer wordt de verklaring opgesteld
          door een geselecteerde rekenexpert. Voor het NHG-hypotheekdossier is deze verklaring het
          relevante document voor het ondernemersinkomen.
        </p>
        <p>
          Welke documenten daarnaast nodig zijn, hangt af van je situatie en de hypotheekaanvraag.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Is mijn winst hetzelfde als mijn hypotheekinkomen?</h3>
        <p>
          Nee. Je winst is een belangrijke basis voor de inkomensbeoordeling, maar het uiteindelijke
          toetsinkomen wordt volgens het geldende toetskader vastgesteld.
        </p>
        <h3>Telt mijn omzet als inkomen voor een hypotheek?</h3>
        <p>
          Niet rechtstreeks. Voor de beoordeling is het resultaat van de onderneming belangrijker
          dan alleen de omzet.
        </p>
        <h3>Wordt gekeken naar mijn winst van één jaar?</h3>
        <p>
          Niet uitsluitend. Bij de NHG-Inkomensverklaring Ondernemer wordt meestal naar de afgelopen
          drie jaar gekeken, of korter als de onderneming jonger is.
        </p>
        <h3>Moet ik drie jaar winst hebben voordat ik een hypotheek kan krijgen?</h3>
        <p>
          Nee. Voor de NHG-Inkomensverklaring Ondernemer geldt minimaal 12 maanden ondernemerschap.
          Heb je een kortere historie dan drie jaar, dan wordt de beschikbare periode beoordeeld.
        </p>
        <h3>Wat als mijn winst stijgt?</h3>
        <p>
          Een stijgende winst kan onderdeel zijn van de beoordeling van de ontwikkeling van je
          onderneming. Het uiteindelijke toetsinkomen wordt volgens het geldende toetskader
          vastgesteld.
        </p>
        <h3>Wat als mijn winst daalt?</h3>
        <p>
          Een dalende winst kan invloed hebben op het toetsinkomen. De actuele financiële situatie
          van je onderneming is relevant voor de beoordeling.
        </p>
        <h3>Kan ik met €50.000 winst een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk, maar je maximale hypotheek kan niet alleen op basis van €50.000 winst
          worden bepaald. Ook rente, financiële verplichtingen, partnerinkomen en de woningwaarde
          spelen een rol.
        </p>
        <h3>Welke winst telt bij een eenmanszaak?</h3>
        <p>
          Bij een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling. Het uiteindelijke toetsinkomen wordt vervolgens volgens het geldende
          toetskader vastgesteld.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Winst uit onderneming is een belangrijk onderdeel van je hypotheekaanvraag, maar je winst
          is niet automatisch gelijk aan het bedrag waarmee je hypotheek wordt berekend.
        </p>
        <p>
          Het belangrijkste bedrag is uiteindelijk het <strong>toetsinkomen</strong> dat volgens de
          geldende regels voor jouw situatie wordt vastgesteld.
        </p>
        <p>
          Heb je een indicatie van je toetsinkomen? Dan kun je daarmee een eerste berekening maken
          van je maximale hypotheek.
        </p>
        <p>
          Wil je weten hoe dat inkomen vervolgens wordt gebruikt om je maximale hypotheek te
          berekenen? Lees{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen:</p>
        <ul>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-eenmanszaak" className="text-warm-orange hover:underline">
              Hypotheek met een eenmanszaak
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-met-wisselend-inkomen-als-zzper',
    relatedSlugs: [
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek met wisselend inkomen als zzp'er",
    excerpt:
      "Heb je als zzp'er een wisselend inkomen? Lees hoe je gemiddelde winst, een goed of slecht jaar en je actuele inkomen meetellen voor je hypotheek.",
    keywords:
      "hypotheek wisselend inkomen zzp, hypotheek met wisselend inkomen als zzp'er, wisselend inkomen zzp hypotheek, hypotheek zzp wisselende inkomsten, hypotheek met wisselende inkomsten, inkomen wisselt zzp hypotheek, onregelmatig inkomen zzp hypotheek, fluctuerend inkomen zzp hypotheek, wisselende winst hypotheek, gemiddelde winst hypotheek zzp, hypotheek op basis van gemiddelde winst",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20met%20wisselend%20inkomen%20als%20zzper.jpg',
      alt: "Hypotheek met wisselend inkomen als zzp'er: hoe gemiddelde winst en actueel inkomen meetellen.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Kun je een hypotheek krijgen met een wisselend inkomen als zzp'er?",
        answer:
          'Ja, dat kan. Een wisselend inkomen sluit een hypotheek niet automatisch uit. Bij NHG wordt het ondernemersinkomen beoordeeld via de Inkomensverklaring Ondernemer.',
      },
      {
        question: 'Wordt het gemiddelde van mijn inkomen gebruikt?',
        answer:
          'Bij NHG is het gemiddelde inkomen over de laatste drie kalenderjaren het uitgangspunt. Er gelden daarnaast regels voor het laatste jaar en het lopende boekjaar.',
      },
      {
        question: 'Wat als mijn laatste jaar slechter was?',
        answer:
          'Als je laatste jaar lager is dan het gemiddelde, kan het inkomen van het laatste jaar als uitgangspunt gelden voor het toetsinkomen.',
      },
      {
        question: 'Wat als mijn laatste jaar veel beter was?',
        answer:
          'Een beter laatste jaar betekent niet automatisch dat je volledige winst van dat jaar als toetsinkomen wordt gebruikt. De inkomensbeoordeling kijkt ook naar de eerdere jaren en het lopende boekjaar.',
      },
      {
        question: 'Telt het lopende jaar mee?',
        answer:
          'Ja. Het actuele inkomen wordt binnen de NHG-beoordeling gecontroleerd en moet minstens in lijn zijn met het gemiddelde.',
      },
      {
        question: "Kan ik als startende zzp'er met wisselende inkomsten een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt vanaf minimaal 12 maanden ondernemerschap. Bij een jongere onderneming wordt de beschikbare financiële historie beoordeeld.',
      },
      {
        question: 'Wordt naar omzet of winst gekeken?',
        answer:
          'Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling. Omzet en winst zijn dus niet hetzelfde voor een hypotheek.',
      },
      {
        question: 'Kan ik met een wisselend inkomen een hypotheek zonder NHG krijgen?',
        answer:
          'Dat kan mogelijk, maar de voorwaarden kunnen per geldverstrekker verschillen. De NHG-regels voor de Inkomensverklaring Ondernemer gelden niet automatisch voor iedere hypotheek zonder NHG.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er kan je inkomen van jaar tot jaar behoorlijk verschillen. Het ene jaar maak
          je bijvoorbeeld €70.000 winst en het volgende jaar €45.000. Of je hebt een paar sterke
          maanden gevolgd door een periode met weinig opdrachten.
        </p>
        <p>
          Een wisselend inkomen betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          Voor een hypotheek moet eerst worden vastgesteld welk <strong>toetsinkomen</strong> voor
          jouw situatie geldt. Bij een hypotheek met NHG wordt het ondernemersinkomen vastgesteld
          met een Inkomensverklaring Ondernemer. Daarbij wordt doorgaans gekeken naar de financiële
          resultaten van de afgelopen drie jaar, of naar een kortere periode als je onderneming
          jonger is.
        </p>
        <p>
          Een wisselend inkomen kan wel invloed hebben op het bedrag waarmee uiteindelijk wordt
          gerekend.
        </p>

        <h2>Kun je een hypotheek krijgen met een wisselend inkomen?</h2>
        <p>Ja, een wisselend inkomen sluit een hypotheek niet automatisch uit.</p>
        <p>
          Als ondernemer wordt juist gekeken naar je financiële historie en de ontwikkeling van je
          inkomen. Bij NHG wordt het ondernemersinkomen vastgesteld op basis van de
          Inkomensverklaring Ondernemer.
        </p>
        <p>Daarbij wordt niet simpelweg alleen je beste jaar gebruikt.</p>
        <p>Dat is belangrijk als je bijvoorbeeld:</p>
        <ul>
          <li>het ene jaar €40.000 winst maakt;</li>
          <li>het volgende jaar €65.000;</li>
          <li>en daarna €50.000.</li>
        </ul>
        <p>
          Je inkomen is dan wisselend, maar er is wel een financiële historie waaruit een
          toetsinkomen kan worden vastgesteld.
        </p>

        <h2>Hoe wordt een wisselend inkomen berekend?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt als uitgangspunt het{' '}
          <strong>gemiddelde inkomen over de laatste drie kalenderjaren</strong>.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst daarbij de basis. Het laatste jaar vormt
          daarbij een maximum: een hoger gemiddelde kan niet zomaar leiden tot een toetsinkomen dat
          hoger ligt dan de winst van het laatste jaar.
        </p>
        <p>Daarnaast wordt gekeken naar het lopende boekjaar.</p>
        <p>Het gaat dus niet alleen om:</p>
        <blockquote>
          <p>&quot;Wat was mijn beste jaar?&quot;</p>
        </blockquote>
        <p>
          maar om de ontwikkeling van je inkomen over meerdere jaren en je actuele situatie. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          .
        </p>

        <h2>Voorbeeld: inkomen stijgt en daalt</h2>
        <p>Stel dat je als zzp&apos;er de volgende winsten hebt:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€65.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde van deze drie jaren is €51.667.</p>
        <p>Het laatste jaar bedraagt €50.000.</p>
        <p>
          Omdat het laatste jaar lager is dan het gemiddelde, is het laatste jaar relevant voor het
          bepalen van het toetsinkomen. Binnen het NHG-toetskader geldt bij een lager inkomen in het
          laatste jaar het laatste jaar als uitgangspunt.
        </p>
        <p>
          Dit laat zien waarom je niet automatisch met het gemiddelde van je drie beste jaren kunt
          rekenen.
        </p>

        <h2>Wat als je laatste jaar veel slechter was?</h2>
        <p>Dit is één van de belangrijkste situaties bij een wisselend inkomen.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €45.000;</li>
          <li>jaar 2: €70.000;</li>
          <li>jaar 3: €40.000.</li>
        </ul>
        <p>
          Je gemiddelde over drie jaar is €51.667, maar je laatste volledige jaar ligt daar duidelijk
          onder.
        </p>
        <p>
          Binnen de NHG-systematiek geldt dan niet zomaar het hogere gemiddelde als toetsinkomen. Het
          lagere inkomen van het laatste jaar kan het uitgangspunt worden.
        </p>
        <p>
          Dat kan dus betekenen dat een tijdelijk goed jaar niet volledig kan worden gebruikt om je
          maximale hypotheek te verhogen.
        </p>

        <h2>Wat als je inkomen juist stijgt?</h2>
        <p>Een stijgend inkomen kan een ander beeld geven.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €35.000;</li>
          <li>jaar 2: €45.000;</li>
          <li>jaar 3: €60.000.</li>
        </ul>
        <p>Je laatste jaar is dan hoger dan het gemiddelde van de drie jaren.</p>
        <p>
          Dat betekent niet automatisch dat je volledige €60.000 als toetsinkomen wordt gebruikt. De
          inkomensbeoordeling volgt het geldende toetskader en kijkt ook naar het lopende boekjaar.
        </p>
        <p>
          Het is dus belangrijk om onderscheid te maken tussen je{' '}
          <strong>winst in een bepaald jaar</strong> en je uiteindelijke{' '}
          <strong>toetsinkomen</strong>.
        </p>

        <h2>Telt het lopende jaar mee?</h2>
        <p>Ja.</p>
        <p>
          Bij de beoordeling van ondernemersinkomen wordt ook gekeken naar het lopende boekjaar. Het
          actuele inkomen moet volgens de NHG-criteria minstens in lijn zijn met het gemiddelde
          inkomen waarop de berekening is gebaseerd.
        </p>
        <p>
          Dit is vooral belangrijk wanneer je onderneming inmiddels sterk is veranderd.
        </p>
        <p>
          Stel dat je de afgelopen drie jaar gemiddeld €50.000 verdiende, maar je onderneming dit
          jaar veel minder goed draait.
        </p>
        <p>Dan kan niet zonder meer worden uitgegaan van €50.000 als stabiel inkomen.</p>
        <p>
          Andersom kan een sterk lopend jaar relevant zijn wanneer je onderneming duidelijk groeit.
        </p>

        <h2>Wat als je inkomen sterk fluctueert?</h2>
        <p>Een sterke fluctuatie kan de beoordeling ingewikkelder maken.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>€30.000 winst in jaar 1;</li>
          <li>€80.000 in jaar 2;</li>
          <li>€35.000 in jaar 3.</li>
        </ul>
        <p>
          Het gemiddelde geeft in dit voorbeeld een vertekend beeld als je alleen naar dat gemiddelde
          zou kijken. Daarom wordt ook gekeken naar het laatste jaar en het lopende boekjaar.
        </p>
        <p>
          De inkomensbeoordeling probeert uiteindelijk een beeld te geven van het inkomen dat
          duurzaam beschikbaar is voor de hypotheeklasten.
        </p>

        <h2>Wat als je één slecht jaar hebt?</h2>
        <p>
          Een enkel slecht jaar betekent niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          De gevolgen hangen af van de oorzaak en van je overige financiële resultaten.
        </p>
        <p>
          Een tijdelijke terugval kan bijvoorbeeld anders worden beoordeeld dan een structurele
          daling van je bedrijfsresultaat.
        </p>
        <p>
          Voor NHG geldt bovendien dat een ondernemer maximaal één kalenderjaar geen inkomen mag
          hebben gehad. Het gemiddelde wordt in dat geval nog steeds over drie jaar berekend.
        </p>
        <p>
          Heb je meerdere jaren met zeer lage of negatieve resultaten, dan kan dat uiteraard een
          veel grotere invloed hebben op de inkomensbeoordeling.
        </p>

        <h2>Wat als je één uitzonderlijk goed jaar hebt?</h2>
        <p>
          Een uitzonderlijk goed jaar betekent niet automatisch dat je hypotheek op dat volledige
          inkomen wordt gebaseerd.
        </p>
        <p>
          Bij NHG is het gemiddelde van de laatste drie kalenderjaren het uitgangspunt, met het
          laatste jaar als maximum. Ook het lopende boekjaar wordt gecontroleerd.
        </p>
        <p>
          Dat voorkomt dat één uitzonderlijk goed jaar automatisch wordt behandeld alsof dat je
          structurele inkomen is.
        </p>

        <h2>Hoeveel hypotheek kun je krijgen met wisselend inkomen?</h2>
        <p>Dat is niet alleen afhankelijk van je gemiddelde winst.</p>
        <p>
          Nadat je toetsinkomen is vastgesteld, spelen ook andere factoren een rol, zoals:
        </p>
        <ul>
          <li>hypotheekrente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          De overheid geeft aan dat de maximale hypotheek onder andere afhankelijk is van het
          inkomen en de waarde van de woning. Ook financiële verplichtingen zoals een lening,
          leasecontract of studieschuld kunnen de maximale hypotheek beïnvloeden.
        </p>
        <p>Daarom kun je niet zeggen:</p>
        <blockquote>
          <p>&quot;Mijn gemiddelde winst is €50.000, dus ik kan €X lenen.&quot;</p>
        </blockquote>
        <p>
          Het gemiddelde of vastgestelde toetsinkomen is slechts één onderdeel van de berekening.
          Meer over bedragen lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Wisselende omzet is niet hetzelfde als wisselende winst</h2>
        <p>
          Voor een hypotheek is het belangrijk om omzet en winst uit elkaar te houden.
        </p>
        <p>Stel dat je omzet sterk wisselt:</p>
        <ul>
          <li>jaar 1: €100.000;</li>
          <li>jaar 2: €150.000;</li>
          <li>jaar 3: €110.000.</li>
        </ul>
        <p>Dat zegt op zichzelf nog niet genoeg.</p>
        <p>
          Als je kosten in die jaren ook sterk verschillen, kan je winst veel stabieler of juist
          veel wisselender zijn.
        </p>
        <p>
          Voor de inkomensbeoordeling van een IB-ondernemer vormt de fiscale winst een belangrijke
          basis.
        </p>
        <p>
          Het gaat dus niet alleen om hoeveel je factureert, maar vooral om wat er financieel uit je
          onderneming komt.
        </p>

        <h2>Wat als je inkomsten per maand sterk verschillen?</h2>
        <p>Als zzp&apos;er kunnen je inkomsten per maand behoorlijk fluctueren.</p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>januari: €3.000;</li>
          <li>februari: €8.000;</li>
          <li>maart: €2.000;</li>
          <li>april: €10.000.</li>
        </ul>
        <p>
          Voor een hypotheek wordt je inkomen niet simpelweg bepaald door naar één maand te kijken.
        </p>
        <p>
          Bij ondernemers wordt gekeken naar de financiële resultaten over een langere periode.
          Daardoor zijn maandelijkse schommelingen op zichzelf minder belangrijk dan de structurele
          ontwikkeling van je onderneming.
        </p>
        <p>
          Een onderneming met sterk wisselende maandinkomsten kan dus alsnog een redelijk stabiel
          jaarlijks inkomen hebben.
        </p>

        <h2>Wat als je inkomen afhankelijk is van een paar grote klanten?</h2>
        <p>
          Een onderneming kan een hoog inkomen hebben terwijl een groot deel van de omzet afkomstig
          is van één of enkele opdrachtgevers.
        </p>
        <p>
          Dat is iets anders dan een inkomen dat simpelweg ieder jaar stabiel is.
        </p>
        <p>
          Bij de inkomensbeoordeling wordt gekeken naar de onderneming en de beschikbare financiële
          gegevens. De Inkomensverklaring Ondernemer is een uitgebreide analyse van de onderneming.
        </p>
        <p>
          Als je inkomen sterk afhankelijk is van een specifieke opdrachtgever, kan de actuele
          situatie van je onderneming daarom relevant zijn.
        </p>

        <h2>Wisselend inkomen als startende zzp&apos;er</h2>
        <p>
          Voor een startende zzp&apos;er is er vaak nog weinig historische informatie beschikbaar.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor NHG kan een ondernemer die minimaal 12 maanden actief is gebruikmaken van de
          Inkomensverklaring Ondernemer. Bestaat de onderneming korter dan drie jaar, dan wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder jaren beschikbaar zijn om je inkomen te
          beoordelen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Wisselend inkomen en een hypotheek zonder NHG</h2>
        <p>
          De regels hierboven over de Inkomensverklaring Ondernemer hebben specifiek betrekking op de
          NHG-route.
        </p>
        <p>Zonder NHG kunnen geldverstrekkers hun eigen acceptatiebeleid hanteren.</p>
        <p>
          Daarom kun je de NHG-regels niet automatisch als universele regel voor iedere hypotheek
          gebruiken.
        </p>
        <p>
          Als je geen NHG-hypotheek aanvraagt, is het belangrijk om te controleren hoe de betreffende
          geldverstrekker ondernemersinkomen met wisselende resultaten beoordeelt.
        </p>

        <h2>Wat als je naast je onderneming in loondienst werkt?</h2>
        <p>
          Sommige ondernemers combineren hun onderneming met een baan in loondienst.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer kan een combinatie van inkomen uit
          dienstbetrekking en zelfstandig ondernemerschap mogelijk zijn. De precieze beoordeling
          hangt af van de situatie en het geldende toetskader.
        </p>
        <p>
          Je moet daarom niet automatisch alleen naar je winst uit onderneming kijken als je
          daarnaast salaris ontvangt.
        </p>

        <h2>Kun je je hypotheek berekenen met je gemiddelde winst?</h2>
        <p>
          Voor een eerste indicatie kan een gemiddelde winst een nuttig uitgangspunt zijn.
        </p>
        <p>
          Maar voor een daadwerkelijke hypotheekaanvraag is het belangrijker om te weten welk{' '}
          <strong>toetsinkomen</strong> volgens de geldende regels wordt vastgesteld.
        </p>
        <p>
          Heb je al een Inkomensverklaring Ondernemer? Dan is het daarin vastgestelde inkomen veel
          relevanter dan zelf een gemiddelde van je winst berekenen.
        </p>
        <HypotheekCta />

        <h2>Voorbeeld: drie jaar wisselende winst</h2>
        <p>Stel dat je winst als volgt is:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€60.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €46.667.</p>
        <p>Het laatste jaar is echter €45.000.</p>
        <p>
          Binnen de NHG-systematiek is het lagere inkomen van het laatste jaar dan relevant voor de
          vaststelling van het toetsinkomen. Daarnaast moet het lopende boekjaar worden beoordeeld.
        </p>
        <p>
          Dit voorbeeld laat zien waarom je niet simpelweg kunt uitgaan van het gemiddelde van je
          drie jaren.
        </p>

        <h2>Wat gebeurt er als het lopende jaar veel lager is?</h2>
        <p>Ook het lopende jaar kan een belangrijke rol spelen.</p>
        <p>
          De NHG-regels vereisen dat het actuele inkomen minstens in lijn is met het gemiddelde.
          Wanneer de actuele ontwikkeling daar duidelijk onder ligt, kan dat gevolgen hebben voor
          het toetsinkomen.
        </p>
        <p>
          Daarom kan een ondernemer met goede historische cijfers toch een lager toetsinkomen krijgen
          wanneer het bedrijf inmiddels structureel minder goed presteert.
        </p>

        <h2>Wat gebeurt er als het lopende jaar juist hoger is?</h2>
        <p>
          Een sterk lopend jaar betekent niet automatisch dat je toetsinkomen direct wordt verhoogd
          naar het nieuwe niveau.
        </p>
        <p>
          De beoordeling kijkt naar de beschikbare historie én de actuele ontwikkeling.
        </p>
        <p>
          Binnen het NHG-toetskader zijn er specifieke regels voor het vergelijken van het lopende
          boekjaar met de historische resultaten.
        </p>
        <p>
          Daarom is het verstandig om bij sterk groeiende inkomsten niet zelf te veronderstellen
          welk bedrag de geldverstrekker uiteindelijk zal gebruiken.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Kun je een hypotheek krijgen met een wisselend inkomen als zzp&apos;er?</h3>
        <p>
          Ja, dat kan. Een wisselend inkomen sluit een hypotheek niet automatisch uit. Bij NHG wordt
          het ondernemersinkomen beoordeeld via de Inkomensverklaring Ondernemer.
        </p>
        <h3>Wordt het gemiddelde van mijn inkomen gebruikt?</h3>
        <p>
          Bij NHG is het gemiddelde inkomen over de laatste drie kalenderjaren het uitgangspunt. Er
          gelden daarnaast regels voor het laatste jaar en het lopende boekjaar.
        </p>
        <h3>Wat als mijn laatste jaar slechter was?</h3>
        <p>
          Als je laatste jaar lager is dan het gemiddelde, kan het inkomen van het laatste jaar als
          uitgangspunt gelden voor het toetsinkomen.
        </p>
        <h3>Wat als mijn laatste jaar veel beter was?</h3>
        <p>
          Een beter laatste jaar betekent niet automatisch dat je volledige winst van dat jaar als
          toetsinkomen wordt gebruikt. De inkomensbeoordeling kijkt ook naar de eerdere jaren en het
          lopende boekjaar.
        </p>
        <h3>Telt het lopende jaar mee?</h3>
        <p>
          Ja. Het actuele inkomen wordt binnen de NHG-beoordeling gecontroleerd en moet minstens in
          lijn zijn met het gemiddelde.
        </p>
        <h3>Kan ik als startende zzp&apos;er met wisselende inkomsten een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor NHG kan de Inkomensverklaring Ondernemer worden gebruikt vanaf
          minimaal 12 maanden ondernemerschap. Bij een jongere onderneming wordt de beschikbare
          financiële historie beoordeeld.
        </p>
        <h3>Wordt naar omzet of winst gekeken?</h3>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling. Omzet en winst zijn dus niet hetzelfde voor een hypotheek.
        </p>
        <h3>Kan ik met een wisselend inkomen een hypotheek zonder NHG krijgen?</h3>
        <p>
          Dat kan mogelijk, maar de voorwaarden kunnen per geldverstrekker verschillen. De
          NHG-regels voor de Inkomensverklaring Ondernemer gelden niet automatisch voor iedere
          hypotheek zonder NHG.
        </p>

        <h2>Bereken je hypotheek als zzp&apos;er</h2>
        <p>
          Een wisselend inkomen betekent niet automatisch dat je geen hypotheek kunt krijgen. Het
          belangrijkste is welk <strong>toetsinkomen</strong> uiteindelijk voor jouw situatie wordt
          vastgesteld.
        </p>
        <p>
          Heb je wisselende winsten, kijk dan niet alleen naar je beste jaar of naar één maand. De
          financiële historie en je actuele ontwikkeling zijn belangrijk bij de
          inkomensbeoordeling.
        </p>
        <p>
          Lees ook{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          ,{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>
        <p>Wil je een eerste indicatie van je maximale hypotheek?</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'jaarcijfers-nodig-voor-hypotheek-als-zzper',
    relatedSlugs: [
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Jaarcijfers nodig voor hypotheek als zzp'er?",
    excerpt:
      "Welke jaarcijfers heb je nodig voor een hypotheek als zzp'er? Lees hoeveel jaar financiële gegevens nodig zijn en welke cijfers meetellen.",
    keywords:
      "jaarcijfers hypotheek zzp, jaarcijfers nodig voor hypotheek zzp, hypotheek jaarcijfers zzp'er, jaarcijfers hypotheek als zzp'er, hoeveel jaarcijfers hypotheek zzp, jaarcijfers nodig hypotheek zzp, jaarrekening hypotheek zzp, financiële cijfers hypotheek zzp, jaarcijfers aanleveren hypotheek zzp, hypotheek aanvragen zonder jaarcijfers, jaarcijfers startende zzp'er hypotheek, voorlopige jaarcijfers hypotheek, jaarcijfers ondernemer hypotheek",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/jaarcijfers%20hypotheek%20zzp.jpg',
      alt: "Jaarcijfers nodig voor hypotheek als zzp'er? Welke financiële gegevens meetellen.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Heb ik als zzp'er jaarcijfers nodig voor een hypotheek?",
        answer:
          'Vaak wel. Bij een hypotheek met NHG worden de financiële resultaten van je onderneming gebruikt om het ondernemersinkomen vast te stellen.',
      },
      {
        question: 'Hoeveel jaarcijfers heb ik nodig?',
        answer:
          'Bij NHG wordt doorgaans naar de laatste drie kalenderjaren gekeken. Bestaat je onderneming korter, dan wordt de beschikbare historie gebruikt.',
      },
      {
        question: 'Kan ik met één jaar aan jaarcijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Tellen voorlopige jaarcijfers mee?',
        answer:
          'Dat kan afhankelijk zijn van het moment van de aanvraag. Vanaf 1 mei van het lopende boekjaar zijn voor de NHG-Inkomensverklaring de definitieve jaarcijfers van het vorige boekjaar verplicht.',
      },
      {
        question: 'Heb ik ook cijfers van het lopende jaar nodig?',
        answer:
          'Dat kan. De NHG-systematiek kijkt naar het lopende boekjaar om te controleren of je actuele inkomen in lijn is met de historische resultaten.',
      },
      {
        question: 'Kan ik mijn aangifte inkomstenbelasting gebruiken in plaats van jaarcijfers?',
        answer:
          'Dat hangt af van de gebruikte hypotheekmethode en geldverstrekker. Voor een NHG-Inkomensverklaring Ondernemer worden meerdere financiële gegevens van de onderneming gebruikt.',
      },
      {
        question: 'Wat als mijn onderneming nog geen drie jaar bestaat?',
        answer:
          'Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet eerst drie jaar ondernemer te zijn. Vanaf minimaal 12 maanden ondernemerschap kan de verklaring worden aangevraagd.',
      },
      {
        question: 'Wat als mijn winst sterk wisselt?',
        answer:
          'Een wisselende winst sluit een hypotheek niet automatisch uit. De historische resultaten, het laatste boekjaar en het lopende boekjaar kunnen allemaal relevant zijn voor de inkomensbeoordeling.',
      },
      {
        question: 'Kan ik alvast mijn maximale hypotheek berekenen zonder jaarcijfers?',
        answer:
          'Ja, voor een eerste indicatie kun je een berekening maken. Voor een definitieve hypotheekaanvraag moet echter worden vastgesteld welk toetsinkomen voor jouw situatie geldt.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er heb je voor een hypotheek vaak financiële gegevens van je onderneming
          nodig. De geldverstrekker wil namelijk kunnen beoordelen welk inkomen uit je onderneming
          kan worden meegenomen voor de hypotheek.
        </p>
        <p>
          Bij een hypotheek met NHG wordt het ondernemersinkomen vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>. Daarbij wordt meestal gekeken naar de
          financiële resultaten van de afgelopen drie jaar, of naar een kortere periode als je
          onderneming nog geen drie jaar bestaat.
        </p>
        <p>
          Welke documenten je precies nodig hebt, hangt af van hoe lang je onderneming bestaat, je
          ondernemingsvorm en het moment waarop je de hypotheek aanvraagt.
        </p>

        <h2>Heb je jaarcijfers nodig voor een hypotheek als zzp&apos;er?</h2>
        <p>
          Ja, in veel gevallen zijn jaarcijfers onderdeel van de documenten die nodig zijn om je
          ondernemersinkomen vast te stellen.
        </p>
        <p>
          Voor een hypotheek met NHG wordt vanaf 1 mei van het lopende boekjaar het definitieve
          resultaat van het vorige boekjaar meegenomen in de verplichte documentatie. Bij een
          aanvraag later in het jaar kunnen daarnaast tussentijdse cijfers en aangiften
          omzetbelasting nodig zijn om de ontwikkeling van het lopende boekjaar te beoordelen.
        </p>
        <p>Het gaat dus niet alleen om je aangifte inkomstenbelasting.</p>
        <p>De beoordeling kan bijvoorbeeld betrekking hebben op:</p>
        <ul>
          <li>jaarcijfers van je onderneming;</li>
          <li>fiscale winst;</li>
          <li>tussentijdse cijfers;</li>
          <li>aangiften omzetbelasting;</li>
          <li>informatie over het lopende boekjaar;</li>
          <li>gegevens over de financiële positie van je onderneming.</li>
        </ul>
        <p>
          Welke stukken precies moeten worden aangeleverd, wordt bepaald binnen het geldende
          toetskader.
        </p>

        <h2>Welke jaarcijfers heb je nodig voor een hypotheek?</h2>
        <p>
          Bij een IB-ondernemer, zoals een eenmanszaak, vormt de fiscale winst een belangrijke basis
          voor de inkomensbeoordeling.
        </p>
        <p>
          Binnen de NHG-Inkomensverklaring Ondernemer is het uitgangspunt het gemiddelde inkomen over
          de laatste drie kalenderjaren. Voor een IB-ondernemer gaat het om het gemiddelde van de
          fiscale winst, waarbij het laatste jaar als maximum geldt.
        </p>
        <p>Stel dat je winst was:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€55.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €48.333.</p>
        <p>
          Omdat het laatste jaar €50.000 bedraagt, ligt het gemiddelde onder het resultaat van het
          laatste jaar. Binnen het NHG-toetskader vormt het gemiddelde dan de basis, rekening houdend
          met de overige voorwaarden en controles.
        </p>
        <p>
          Het is daarom belangrijk om niet alleen je meest recente jaarcijfers te bekijken. Lees ook{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
          .
        </p>

        <h2>Hoeveel jaarcijfers heb je nodig?</h2>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer wordt meestal gekeken naar de laatste drie
          kalenderjaren.
        </p>
        <p>
          Bestaat je onderneming nog geen drie jaar, dan wordt gekeken naar de beschikbare periode.
          Een ondernemer moet voor deze route minimaal 12 maanden actief zijn.
        </p>
        <p>Dat betekent bijvoorbeeld:</p>
        <ul>
          <li>
            <strong>1 jaar ondernemer:</strong> je beschikbare financiële historie wordt beoordeeld;
          </li>
          <li>
            <strong>2 jaar ondernemer:</strong> de beschikbare twee jaren worden beoordeeld;
          </li>
          <li>
            <strong>3 jaar of langer ondernemer:</strong> de laatste drie kalenderjaren vormen
            doorgaans de basis.
          </li>
        </ul>
        <p>
          Een startende zzp&apos;er hoeft voor een NHG-hypotheek dus niet eerst drie volledige jaren
          ondernemer te zijn.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Zijn alleen jaarcijfers voldoende?</h2>
        <p>Niet altijd.</p>
        <p>
          De jaarcijfers geven vooral inzicht in de afgelopen boekjaren. Voor de hypotheekbeoordeling
          kan ook naar het <strong>lopende boekjaar</strong> worden gekeken.
        </p>
        <p>
          Dat is belangrijk wanneer je onderneming inmiddels duidelijk beter of slechter presteert.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer moet het actuele inkomen minstens in lijn zijn met
          het gemiddelde inkomen waarop de berekening is gebaseerd. Als de tussentijdse cijfers een
          lager resultaat laten zien, kan het inkomen naar beneden worden bijgesteld. Een hoger
          resultaat in het lopende jaar leidt daarentegen niet automatisch tot een hoger
          toetsinkomen.
        </p>
        <p>
          Je hypotheek wordt dus niet simpelweg berekend door drie oude jaarcijfers bij elkaar op te
          tellen.
        </p>

        <h2>Welke documenten heb je als zzp&apos;er nodig?</h2>
        <p>
          De precieze documentenlijst kan verschillen afhankelijk van de situatie.
        </p>
        <p>
          Voor een NHG-Inkomensverklaring wordt onder andere gekeken naar de financiële gegevens van
          de onderneming. Vanaf 1 mei van het lopende boekjaar zijn de definitieve jaarcijfers van
          het vorige boekjaar verplicht. Vanaf 1 augustus zijn bijvoorbeeld tussentijdse cijfers tot
          en met het tweede kwartaal en de bijbehorende aangiften omzetbelasting nodig. Vanaf 1
          november verschuift dit naar de cijfers tot en met het derde kwartaal.
        </p>
        <p>Een vereenvoudigd overzicht:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">
                  Moment van aanvraag
                </th>
                <th className="border-b border-slate-200 py-2 font-semibold">
                  Belangrijke financiële informatie
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 mei</td>
                <td className="border-b border-slate-100 py-2">
                  Definitieve jaarcijfers vorige boekjaar
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 augustus</td>
                <td className="border-b border-slate-100 py-2">
                  Tussentijdse cijfers t/m Q2 + btw-aangiften t/m Q2
                </td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4 align-top">Vanaf 1 november</td>
                <td className="border-b border-slate-100 py-2">
                  Tussentijdse cijfers t/m Q3 + btw-aangiften t/m Q3
                </td>
              </tr>
              <tr>
                <td className="py-2 pr-4 align-top">Vanaf 1 februari</td>
                <td className="py-2">Tussentijdse cijfers t/m Q4 + btw-aangiften t/m Q4</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          De exacte documentenlijst van de Inkomensverklaring Ondernemer bepaalt welke stukken in
          jouw situatie moeten worden aangeleverd.
        </p>

        <h2>Wat als je jaarcijfers nog niet definitief zijn?</h2>
        <p>Dat hoeft niet automatisch een probleem te zijn.</p>
        <p>
          Wanneer het vorige boekjaar nog niet definitief is afgesloten, kunnen afhankelijk van het
          moment van aanvragen tussentijdse cijfers en andere financiële gegevens worden gebruikt.
        </p>
        <p>
          Vanaf 1 mei van het lopende boekjaar moeten voor de NHG-Inkomensverklaring de definitieve
          jaarcijfers van het vorige boekjaar worden aangeleverd.
        </p>
        <p>
          Als je bijvoorbeeld in 2026 een hypotheek aanvraagt, kan het dus relevant zijn of je
          cijfers over 2025 al definitief beschikbaar zijn.
        </p>

        <h2>Wat als je boekhouder de jaarcijfers nog niet heeft gemaakt?</h2>
        <p>
          Dan is het verstandig om eerst te controleren welke documenten de hypotheekverstrekker of
          rekenexpert nodig heeft.
        </p>
        <p>
          Voor NHG is de Inkomensverklaring Ondernemer een uitgebreide analyse van je onderneming. Je
          vraagt deze aan via een hypotheekadviseur, geldverstrekker of een door NHG aangewezen
          rekenexpert. De verklaring wordt opgesteld op basis van de benodigde financiële
          documenten.
        </p>
        <p>
          Het is daarom niet verstandig om zelf alvast een willekeurig gemiddelde van je winst te
          gebruiken als officieel toetsinkomen.
        </p>

        <h2>Kun je een hypotheek krijgen met maar één jaar aan jaarcijfers?</h2>
        <p>Dat kan mogelijk.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn. Je hoeft
          dus niet per se drie volledige jaren aan jaarcijfers te hebben.
        </p>
        <p>
          Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare financiële historie
          gebruikt.
        </p>
        <p>
          Hoe korter je onderneming bestaat, hoe minder historische informatie beschikbaar is om je
          inkomen te beoordelen.
        </p>
        <p>
          Dat betekent ook dat een startende zzp&apos;er niet automatisch op dezelfde manier wordt
          beoordeeld als iemand die al tien jaar ondernemer is. Lees ook{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
          .
        </p>

        <h2>Wat als je één jaar geen inkomen had?</h2>
        <p>
          Binnen de NHG-systematiek mag een ondernemer maximaal één kalenderjaar geen inkomen hebben
          gehad.
        </p>
        <p>Het gemiddelde wordt in dat geval nog steeds over drie jaar berekend.</p>
        <p>Een jaar zonder inkomen kan dus wel gevolgen hebben voor de berekening.</p>
        <p>
          Heb je meerdere jaren zonder inkomen of met zeer lage resultaten, dan kan dat uiteraard
          een grotere invloed hebben op het toetsinkomen.
        </p>

        <h2>Wat als je winst sterk wisselt?</h2>
        <p>Wisselende winst betekent niet automatisch dat je geen hypotheek kunt krijgen.</p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€75.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde bedraagt €51.667.</p>
        <p>
          Maar je hypotheekbeoordeling kijkt niet alleen naar dit gemiddelde. Binnen de
          NHG-systematiek geldt het laatste jaar als maximum en wordt ook naar het lopende boekjaar
          gekeken.
        </p>
        <p>
          Een uitzonderlijk goed jaar zorgt daarom niet automatisch voor een evenredig hoger
          toetsinkomen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Is een aangifte inkomstenbelasting hetzelfde als jaarcijfers?</h2>
        <p>Nee.</p>
        <p>
          Je aangifte inkomstenbelasting en de jaarcijfers van je onderneming zijn verschillende
          documenten.
        </p>
        <p>
          De aangifte inkomstenbelasting bevat je fiscale gegevens als persoon. De jaarcijfers geven
          inzicht in de financiële resultaten van je onderneming.
        </p>
        <p>
          Voor een hypotheek kunnen beide soorten informatie relevant zijn, afhankelijk van de
          gebruikte beoordelingsmethode en de geldverstrekker.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt de onderneming uitgebreid geanalyseerd om
          het toetsinkomen vast te stellen.
        </p>

        <h2>Kan ik mijn hypotheek berekenen zonder definitieve jaarcijfers?</h2>
        <p>Voor een eerste indicatie kan dat.</p>
        <p>
          Je kunt bijvoorbeeld je recente winst en de resultaten van eerdere jaren gebruiken om een
          inschatting te maken.
        </p>
        <p>
          Maar een hypotheekcalculator kan daarmee nog niet automatisch bepalen welk officiële
          toetsinkomen een geldverstrekker zal gebruiken.
        </p>
        <p>
          Dat komt doordat de uiteindelijke beoordeling ook rekening kan houden met:
        </p>
        <ul>
          <li>de ontwikkeling van je winst;</li>
          <li>het laatste volledige boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>correctieposten;</li>
          <li>de financiële positie van je onderneming;</li>
          <li>andere inkomsten;</li>
          <li>eventuele financiële verplichtingen.</li>
        </ul>
        <p>
          Voor NHG wordt het uiteindelijke ondernemersinkomen vastgesteld via de Inkomensverklaring
          Ondernemer.
        </p>
        <HypotheekCta />

        <h2>Wat als je jaarcijfers sterk zijn verbeterd?</h2>
        <p>
          Een verbetering van je bedrijfsresultaat is relevante informatie, maar betekent niet
          automatisch dat je volledige nieuwe winst als toetsinkomen wordt gebruikt.
        </p>
        <p>
          De NHG-systematiek kijkt naar de historische resultaten en het actuele inkomen. Wanneer
          het lopende jaar beter is dan de historische jaren, wordt het inkomen binnen het
          standaardtoetskader niet simpelweg onbeperkt naar boven aangepast.
        </p>
        <p>
          Dat voorkomt dat een korte periode met uitzonderlijk hoge inkomsten direct wordt behandeld
          als structureel inkomen.
        </p>

        <h2>Wat als je jaarcijfers juist slechter worden?</h2>
        <p>Een dalend resultaat kan wel gevolgen hebben voor je toetsinkomen.</p>
        <p>
          Als de tussentijdse cijfers van het lopende boekjaar duidelijk lager liggen dan het
          historische gemiddelde, kan aanleiding bestaan om het inkomen naar beneden bij te stellen.
        </p>
        <p>
          Daarom kan het verstandig zijn om niet te wachten tot het moment van de hypotheekaanvraag
          als je onderneming inmiddels sterk is veranderd.
        </p>
        <p>Je actuele financiële situatie kan onderdeel zijn van de beoordeling.</p>

        <h2>Heb je voor een hypotheek zonder NHG ook jaarcijfers nodig?</h2>
        <p>Dat kan, maar de voorwaarden verschillen per geldverstrekker.</p>
        <p>
          De NHG-Inkomensverklaring Ondernemer is specifiek onderdeel van de NHG-systematiek. Zonder
          NHG kan een geldverstrekker een eigen methode gebruiken om het ondernemersinkomen vast te
          stellen.
        </p>
        <p>
          Daarom kun je de NHG-documentenlijst niet automatisch gebruiken als universele checklist
          voor iedere hypotheek.
        </p>
        <p>
          Controleer bij een hypotheek zonder NHG welke financiële documenten de betreffende
          geldverstrekker verlangt.
        </p>

        <h2>Wat kost een Inkomensverklaring Ondernemer?</h2>
        <p>
          De Inkomensverklaring Ondernemer wordt opgesteld door een rekenexpert en is onderdeel van
          het aanvraagproces voor een NHG-hypotheek voor ondernemers.
        </p>
        <p>
          NHG geeft aan dat de verklaring via een adviseur, geldverstrekker of één van de aangewezen
          rekenexperts kan worden aangevraagd. De opdrachtgever betaalt de verklaring.
        </p>
        <p>
          De kosten staan los van de vraag welk toetsinkomen uiteindelijk uit de analyse komt.
        </p>

        <h2>Hoe lang is de Inkomensverklaring geldig?</h2>
        <p>
          Een Inkomensverklaring Ondernemer is vanaf de dagtekening <strong>zes maanden geldig</strong>
          . Binnen die periode moet het bindend aanbod worden gedaan.
        </p>
        <p>
          Het kan daarom relevant zijn om het aanvragen van de verklaring af te stemmen op je
          daadwerkelijke hypotheekaanvraag.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Heb ik als zzp&apos;er jaarcijfers nodig voor een hypotheek?</h3>
        <p>
          Vaak wel. Bij een hypotheek met NHG worden de financiële resultaten van je onderneming
          gebruikt om het ondernemersinkomen vast te stellen.
        </p>
        <h3>Hoeveel jaarcijfers heb ik nodig?</h3>
        <p>
          Bij NHG wordt doorgaans naar de laatste drie kalenderjaren gekeken. Bestaat je
          onderneming korter, dan wordt de beschikbare historie gebruikt.
        </p>
        <h3>Kan ik met één jaar aan jaarcijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden
          actief zijn als ondernemer.
        </p>
        <h3>Tellen voorlopige jaarcijfers mee?</h3>
        <p>
          Dat kan afhankelijk zijn van het moment van de aanvraag. Vanaf 1 mei van het lopende
          boekjaar zijn voor de NHG-Inkomensverklaring de definitieve jaarcijfers van het vorige
          boekjaar verplicht.
        </p>
        <h3>Heb ik ook cijfers van het lopende jaar nodig?</h3>
        <p>
          Dat kan. De NHG-systematiek kijkt naar het lopende boekjaar om te controleren of je
          actuele inkomen in lijn is met de historische resultaten.
        </p>
        <h3>Kan ik mijn aangifte inkomstenbelasting gebruiken in plaats van jaarcijfers?</h3>
        <p>
          Dat hangt af van de gebruikte hypotheekmethode en geldverstrekker. Voor een
          NHG-Inkomensverklaring Ondernemer worden meerdere financiële gegevens van de onderneming
          gebruikt.
        </p>
        <h3>Wat als mijn onderneming nog geen drie jaar bestaat?</h3>
        <p>
          Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet eerst drie jaar ondernemer te zijn.
          Vanaf minimaal 12 maanden ondernemerschap kan de verklaring worden aangevraagd.
        </p>
        <h3>Wat als mijn winst sterk wisselt?</h3>
        <p>
          Een wisselende winst sluit een hypotheek niet automatisch uit. De historische resultaten,
          het laatste boekjaar en het lopende boekjaar kunnen allemaal relevant zijn voor de
          inkomensbeoordeling.
        </p>
        <h3>Kan ik alvast mijn maximale hypotheek berekenen zonder jaarcijfers?</h3>
        <p>
          Ja, voor een eerste indicatie kun je een berekening maken. Voor een definitieve
          hypotheekaanvraag moet echter worden vastgesteld welk toetsinkomen voor jouw situatie
          geldt.
        </p>

        <h2>Bereid je jaarcijfers voor op je hypotheek</h2>
        <p>
          Als zzp&apos;er zijn je jaarcijfers een belangrijk onderdeel van de financiële beoordeling
          voor een hypotheek. Kijk daarom niet alleen naar je omzet of naar het bedrag dat je in één
          goed jaar hebt verdiend.
        </p>
        <p>Zorg dat je inzicht hebt in:</p>
        <ul>
          <li>je winst van de afgelopen jaren;</li>
          <li>je definitieve jaarcijfers;</li>
          <li>je actuele resultaat;</li>
          <li>je cijfers van het lopende boekjaar;</li>
          <li>je btw-aangiften;</li>
          <li>eventuele andere inkomsten.</li>
        </ul>
        <p>
          Bij een NHG-hypotheek wordt vervolgens via de{' '}
          <strong>Inkomensverklaring Ondernemer</strong> vastgesteld welk toetsinkomen voor je
          hypotheek kan worden gebruikt.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als zzp&apos;er? Lees ook{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>{' '}
          en{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
          .
        </p>
        <p>Wil je eerst weten wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er zonder 3 jaar cijfers
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-zzp-zonder-3-jaar-cijfers',
    relatedSlugs: [
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'hypotheek-berekenen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek als zzp'er zonder 3 jaar cijfers",
    excerpt:
      "Kun je als zzp'er een hypotheek krijgen zonder 3 jaar cijfers? Lees wat mogelijk is met 1 of 2 jaar cijfers en hoe je inkomen wordt beoordeeld.",
    keywords:
      "hypotheek zzp zonder 3 jaar cijfers, hypotheek zonder 3 jaar cijfers zzp, hypotheek als zzp'er zonder 3 jaar cijfers, hypotheek zzp minder dan 3 jaar, hypotheek zzp 1 jaar cijfers, hypotheek zzp 2 jaar cijfers, hypotheek voor startende zzp'er, hypotheek als starter zzp, hypotheek aanvragen zonder 3 jaar jaarcijfers, hypotheek zonder drie jaar jaarcijfers, hypotheek ondernemer korter dan 3 jaar, hypotheek zzp korter dan 3 jaar, hypotheek met 1 jaar cijfers zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20zzp%20zonder%203%20jaar%20cijfers.jpg',
      alt: "Hypotheek als zzp'er zonder 3 jaar cijfers: wat kan met 1 of 2 jaar cijfers?",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Kan ik als zzp'er een hypotheek krijgen zonder 3 jaar cijfers?",
        answer:
          'Ja, dat kan mogelijk. Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer worden gebruikt. Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare financiële historie beoordeeld.',
      },
      {
        question: "Hoeveel jaar moet ik zzp'er zijn voor een hypotheek?",
        answer:
          "Je hoeft niet automatisch drie jaar zzp'er te zijn. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.",
      },
      {
        question: 'Kan ik met 1 jaar cijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Bij minimaal 12 maanden ondernemerschap kan de Inkomensverklaring Ondernemer worden gebruikt. Je beschikbare financiële gegevens worden vervolgens beoordeeld.',
      },
      {
        question: 'Kan ik met 2 jaar cijfers een hypotheek krijgen?',
        answer:
          'Dat kan mogelijk. Als je onderneming nog geen drie jaar bestaat, kan de beschikbare financiële historie worden gebruikt voor de inkomensbeoordeling.',
      },
      {
        question: 'Waarom denken veel mensen dat je 3 jaar cijfers nodig hebt?',
        answer:
          'Bij een gevestigde ondernemer wordt binnen de NHG-systematiek doorgaans gekeken naar de resultaten van de laatste drie kalenderjaren. Daardoor wordt soms gedacht dat je ook verplicht drie jaar ondernemer moet zijn. Voor de Inkomensverklaring Ondernemer geldt echter een minimale ondernemingsduur van 12 maanden.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek met NHG krijgen?",
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als ondernemer.',
      },
      {
        question: 'Wat als ik nog geen definitieve jaarcijfers heb?',
        answer:
          'Welke documenten nodig zijn, hangt af van het moment van aanvragen. Naast jaarcijfers kunnen ook tussentijdse cijfers en btw-aangiften relevant zijn.',
      },
      {
        question: 'Wordt mijn winst van één jaar volledig meegenomen?',
        answer:
          'Niet automatisch. Het toetsinkomen wordt vastgesteld volgens het geldende toetskader. Bij een korte ondernemershistorie is er minder financiële historie beschikbaar om het inkomen te beoordelen.',
      },
      {
        question: 'Kan ik zonder 3 jaar cijfers een hypotheek zonder NHG krijgen?',
        answer:
          'Dat kan mogelijk, maar de voorwaarden verschillen per geldverstrekker. Zonder NHG gelden niet automatisch dezelfde regels als bij de NHG-Inkomensverklaring Ondernemer.',
      },
      {
        question: "Is een hypotheek moeilijker als je minder dan 3 jaar zzp'er bent?",
        answer:
          'Een korte ondernemershistorie betekent dat er minder financiële informatie beschikbaar is. Hoe dat precies wordt beoordeeld, hangt af van de hypotheekroute en geldverstrekker.',
      },
    ],
    content: (
      <>
        <p>
          Ben je pas kort geleden begonnen als zzp&apos;er en heb je nog geen drie volledige jaren
          aan jaarcijfers? Dan betekent dat niet automatisch dat je geen hypotheek kunt krijgen.
        </p>
        <p>
          Voor ondernemers wordt gekeken naar de financiële resultaten van de onderneming en naar
          de ontwikkeling van het inkomen. Bij een hypotheek met NHG kan een{' '}
          <strong>Inkomensverklaring Ondernemer</strong> worden gebruikt om het toetsinkomen vast te
          stellen.
        </p>
        <p>Daarvoor hoef je niet altijd drie volledige jaren ondernemer te zijn.</p>
        <p>
          Als je onderneming minimaal 12 maanden bestaat, kan de Inkomensverklaring Ondernemer
          mogelijk worden gebruikt. Bij een onderneming die korter dan drie jaar bestaat, wordt de
          beschikbare financiële historie gebruikt.
        </p>
        <p>
          Het ontbreken van drie volledige jaarcijfers betekent dus niet automatisch dat een
          hypotheek onmogelijk is.
        </p>

        <h2>Kun je als zzp&apos;er een hypotheek krijgen zonder 3 jaar cijfers?</h2>
        <p>Ja, dat kan mogelijk.</p>
        <p>
          De gedachte dat je als zzp&apos;er altijd eerst drie jaar ondernemer moet zijn voordat je
          een hypotheek kunt krijgen, klopt niet als algemene regel.
        </p>
        <p>
          Voor NHG kan een ondernemer vanaf minimaal 12 maanden ondernemerschap gebruikmaken van de
          Inkomensverklaring Ondernemer. Bestaat je onderneming korter dan drie jaar, dan wordt
          gekeken naar de beschikbare financiële historie.
        </p>
        <p>
          Je hoeft dus niet eerst drie volledige jaren te hebben voordat je überhaupt voor een
          hypotheek in aanmerking kunt komen.
        </p>
        <p>
          Wel kan een kortere ondernemershistorie invloed hebben op de manier waarop je inkomen
          wordt vastgesteld.
        </p>

        <h2>Hoeveel jaar moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Er is geen algemene regel dat je precies drie jaar zzp&apos;er moet zijn.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>.
        </p>
        <p>Daarbij wordt onderscheid gemaakt tussen ondernemers met:</p>
        <ul>
          <li>ongeveer 1 jaar ondernemerschap;</li>
          <li>2 jaar ondernemerschap;</li>
          <li>3 jaar of langer ondernemerschap.</li>
        </ul>
        <p>
          Hoe langer je onderneming bestaat, hoe meer financiële historie beschikbaar is om je
          inkomen te beoordelen.
        </p>
        <p>
          Dat betekent echter niet dat iemand met één jaar cijfers automatisch geen hypotheek kan
          krijgen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>
        </p>

        <h2>Hypotheek als zzp&apos;er met 1 jaar cijfers</h2>
        <p>
          Ben je ongeveer één jaar ondernemer? Dan is je situatie anders dan die van een zzp&apos;er
          die al meerdere jaren een onderneming heeft.
        </p>
        <p>Er zijn simpelweg minder financiële gegevens beschikbaar.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer kan vanaf minimaal 12 maanden ondernemerschap een
          inkomensverklaring worden aangevraagd. De beschikbare financiële historie wordt vervolgens
          gebruikt om je ondernemersinkomen te beoordelen.
        </p>
        <p>
          Bij één jaar ondernemerschap kan het daarom extra belangrijk zijn dat je financiële
          administratie goed op orde is.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>je financiële resultaten;</li>
          <li>je aangifte inkomstenbelasting;</li>
          <li>je omzet;</li>
          <li>je kosten;</li>
          <li>je actuele cijfers;</li>
          <li>je btw-aangiften;</li>
          <li>de ontwikkeling van je onderneming.</li>
        </ul>
        <p>
          Welke documenten precies nodig zijn, hangt af van je situatie en het moment van de
          aanvraag.
        </p>

        <h2>Hypotheek als zzp&apos;er met 2 jaar cijfers</h2>
        <p>
          Heb je inmiddels twee jaar cijfers beschikbaar, dan is er meer historische informatie over
          je onderneming.
        </p>
        <p>Dat kan helpen bij het beoordelen van de ontwikkeling van je inkomen.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer wordt bij een onderneming die korter dan drie
          jaar bestaat gekeken naar de beschikbare periode.
        </p>
        <p>Je hebt dus niet per se drie volledige jaren nodig.</p>
        <p>
          Wel blijft het belangrijk dat de financiële resultaten voldoende inzicht geven in je
          onderneming en dat ook de actuele ontwikkeling kan worden beoordeeld.
        </p>

        <h2>Waarom wordt vaak gesproken over 3 jaar?</h2>
        <p>
          De periode van drie jaar komt vooral terug omdat bij een gevestigde ondernemer de
          financiële resultaten van de laatste drie kalenderjaren een belangrijke basis vormen voor
          de inkomensbeoordeling.
        </p>
        <p>
          Bij NHG wordt het gemiddelde inkomen over de laatste drie kalenderjaren als uitgangspunt
          genomen. Het laatste jaar vormt daarbij een maximum.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als ondernemer, dan kan die volledige historie
          uiteraard niet worden gebruikt.
        </p>
        <p>Daarom wordt bij een jongere onderneming gekeken naar de beschikbare gegevens.</p>
        <p>De regel is dus niet:</p>
        <blockquote>
          <p>&quot;Je moet drie jaar zzp&apos;er zijn.&quot;</p>
        </blockquote>
        <p>Maar eerder:</p>
        <blockquote>
          <p>
            &quot;Hoeveel financiële historie is beschikbaar om je ondernemersinkomen te
            beoordelen?&quot;
          </p>
        </blockquote>

        <h2>Voorbeeld: één jaar ondernemer</h2>
        <p>Stel dat je op 1 januari 2025 bent gestart als zzp&apos;er.</p>
        <p>In 2025 maakte je:</p>
        <p>
          <strong>€45.000 winst.</strong>
        </p>
        <p>In 2026 wil je een hypotheek aanvragen.</p>
        <p>Je hebt dan nog geen drie volledige kalenderjaren als ondernemer.</p>
        <p>Dat betekent niet automatisch dat je moet wachten tot 2028.</p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt. De beschikbare financiële informatie over je onderneming wordt daarbij
          beoordeeld.
        </p>
        <p>
          Je situatie wordt dus anders beoordeeld dan die van een ondernemer met drie volledige
          jaren aan resultaten, maar een hypotheek is niet per definitie uitgesloten.
        </p>

        <h2>Voorbeeld: twee jaar ondernemer</h2>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je bent inmiddels twee jaar ondernemer en hebt twee volledige jaren aan resultaten.
        </p>
        <p>Je hebt nog geen drie jaar cijfers.</p>
        <p>
          Toch kan je beschikbare financiële historie worden gebruikt voor de beoordeling van je
          ondernemersinkomen.
        </p>
        <p>
          Daarbij wordt niet alleen gekeken naar de hoogte van de winst. Ook de ontwikkeling van de
          onderneming en het actuele inkomen kunnen relevant zijn.
        </p>

        <h2>Wat als je onderneming minder dan 12 maanden bestaat?</h2>
        <p>Hier ligt een belangrijk verschil.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden actief zijn als
          ondernemer.
        </p>
        <p>
          Ben je pas enkele maanden geleden gestart, dan kun je dus niet simpelweg dezelfde route
          gebruiken als een ondernemer die al minimaal een jaar actief is.
        </p>
        <p>
          Dat betekent niet noodzakelijk dat iedere hypotheek zonder meer onmogelijk is.
          Geldverstrekkers kunnen verschillende acceptatiecriteria hanteren, vooral buiten NHG.
        </p>
        <p>
          Maar je kunt de NHG-regels voor een ondernemer vanaf 12 maanden niet zomaar toepassen op
          iemand die pas enkele maanden actief is.
        </p>

        <h2>Tellen voorlopige cijfers mee?</h2>
        <p>Dat kan.</p>
        <p>
          Welke cijfers nodig zijn, hangt onder andere af van het moment waarop je de hypotheek
          aanvraagt.
        </p>
        <p>
          Bij een NHG-Inkomensverklaring Ondernemer wordt niet alleen naar afgesloten boekjaren
          gekeken. Ook het lopende boekjaar kan worden gecontroleerd.
        </p>
        <p>
          Vanaf 1 mei van het lopende boekjaar zijn de definitieve jaarcijfers van het vorige
          boekjaar onderdeel van de verplichte documentatie.
        </p>
        <p>
          Later in het jaar kunnen ook tussentijdse cijfers en btw-aangiften nodig zijn.
        </p>
        <p>
          Dit is vooral relevant voor startende ondernemers, omdat hun financiële historie vaak nog
          beperkt is. Lees ook{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Wat als je nog geen definitieve jaarrekening hebt?</h2>
        <p>
          Ook hier moet je onderscheid maken tussen een onderneming die nog maar kort bestaat en een
          onderneming waarvan het laatste boekjaar simpelweg nog niet definitief is afgesloten.
        </p>
        <p>
          Als je bijvoorbeeld in 2025 bent gestart en in 2026 een hypotheek aanvraagt, kunnen de
          financiële resultaten over 2025 relevant zijn.
        </p>
        <p>
          Zijn de definitieve jaarcijfers inmiddels beschikbaar, dan kunnen deze onderdeel zijn van
          de documentatie.
        </p>
        <p>
          Daarnaast kan informatie over 2026 nodig zijn om te beoordelen hoe je onderneming momenteel
          presteert.
        </p>
        <p>Je moet daarom niet alleen kijken naar de vraag:</p>
        <blockquote>
          <p>&quot;Heb ik drie jaarcijfers?&quot;</p>
        </blockquote>
        <p>maar vooral:</p>
        <blockquote>
          <p>
            &quot;Welke financiële informatie is op het moment van mijn hypotheekaanvraag
            beschikbaar?&quot;
          </p>
        </blockquote>

        <h2>Hoe wordt je inkomen berekend als je geen 3 jaar cijfers hebt?</h2>
        <p>
          Bij een jongere onderneming kan niet worden uitgegaan van drie volledige kalenderjaren als
          die simpelweg niet bestaan.
        </p>
        <p>De beschikbare financiële historie wordt gebruikt.</p>
        <p>Het uiteindelijke toetsinkomen is daardoor niet noodzakelijk gelijk aan:</p>
        <p>
          <strong>je winst van het laatste jaar.</strong>
        </p>
        <p>
          De inkomensbeoordeling kijkt naar het geldende toetskader en de beschikbare financiële
          informatie.
        </p>
        <p>Bij NHG wordt dit vastgesteld via de Inkomensverklaring Ondernemer.</p>
        <p>Daarbij wordt onder andere gekeken naar:</p>
        <ul>
          <li>de fiscale winst;</li>
          <li>de beschikbare historische resultaten;</li>
          <li>het laatste boekjaar;</li>
          <li>het lopende boekjaar;</li>
          <li>de financiële ontwikkeling van de onderneming;</li>
          <li>de financiële positie van de onderneming.</li>
        </ul>

        <h2>Kun je met één goed jaar direct een hoge hypotheek krijgen?</h2>
        <p>Niet automatisch.</p>
        <p>
          Als je pas één jaar ondernemer bent en in dat jaar bijvoorbeeld €80.000 winst hebt
          gemaakt, betekent dat niet automatisch dat een geldverstrekker simpelweg €80.000 als
          duurzaam toetsinkomen gebruikt.
        </p>
        <p>Er is immers nog weinig historische informatie beschikbaar.</p>
        <p>
          Bij de beoordeling wordt gekeken naar het geldende toetskader en de ontwikkeling van de
          onderneming.
        </p>
        <p>
          Een hoog inkomen in een korte periode is daarom niet hetzelfde als een langdurig stabiel
          ondernemersinkomen.
        </p>

        <h2>Wat als je inkomen snel stijgt?</h2>
        <p>
          Een sterk groeiende onderneming kan een ander beeld geven dan een onderneming waarvan het
          inkomen stabiel blijft.
        </p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€25.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je inkomen is duidelijk gestegen.</p>
        <p>
          Dat is relevante informatie, maar je kunt niet automatisch aannemen dat je hypotheek wordt
          gebaseerd op €50.000.
        </p>
        <p>De uiteindelijke inkomensvaststelling volgt het geldende toetskader.</p>
        <p>
          Ook het lopende boekjaar kan worden bekeken om te beoordelen of de ontwikkeling van je
          onderneming aansluit bij de historische resultaten.
        </p>

        <h2>Wat als je inkomen juist daalt?</h2>
        <p>Hetzelfde geldt in de andere richting.</p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€60.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 2</td>
                <td className="py-2 text-right">€35.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde of eerdere winst vertelt dan niet het volledige verhaal.</p>
        <p>
          Een dalend inkomen kan invloed hebben op het inkomen dat voor de hypotheek wordt
          gebruikt.
        </p>
        <p>
          Daarom zijn actuele cijfers belangrijk wanneer je onderneming inmiddels duidelijk anders
          presteert dan in eerdere jaren.
        </p>

        <h2>Zijn jaarcijfers verplicht voor iedere zzp&apos;er?</h2>
        <p>Niet iedere hypotheekaanvraag gebruikt exact dezelfde documenten.</p>
        <p>
          Geldverstrekkers hebben hun eigen acceptatiebeleid en buiten NHG kunnen andere methodes
          worden gebruikt.
        </p>
        <p>
          Toch zijn financiële gegevens van je onderneming bij een hypotheekaanvraag als zzp&apos;er
          belangrijk. De geldverstrekker moet immers kunnen beoordelen welk inkomen uit je
          onderneming kan worden meegenomen.
        </p>
        <p>Dat kunnen bijvoorbeeld zijn:</p>
        <ul>
          <li>jaarcijfers;</li>
          <li>aangiften inkomstenbelasting;</li>
          <li>tussentijdse cijfers;</li>
          <li>btw-aangiften;</li>
          <li>bankgegevens;</li>
          <li>andere financiële documenten.</li>
        </ul>
        <p>
          Welke stukken daadwerkelijk nodig zijn, hangt af van de geldverstrekker en jouw situatie.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
        </p>

        <h2>Hypotheek zonder 3 jaar cijfers met NHG</h2>
        <p>
          De NHG-route is voor ondernemers interessant omdat hiervoor een specifieke methode bestaat
          om het ondernemersinkomen vast te stellen.
        </p>
        <p>
          De <strong>Inkomensverklaring Ondernemer</strong> kan vanaf minimaal 12 maanden
          ondernemerschap worden gebruikt.
        </p>
        <p>
          Heb je nog geen drie jaar cijfers, dan wordt de beschikbare financiële historie beoordeeld.
        </p>
        <p>
          Daarmee is de situatie voor een startende zzp&apos;er duidelijk anders dan de vaak
          gehoorde regel dat je eerst drie jaar ondernemer moet zijn.
        </p>
        <p>NHG stelt wel voorwaarden aan de onderneming en de inkomensbeoordeling.</p>

        <h2>Hypotheek zonder 3 jaar cijfers zonder NHG</h2>
        <p>Zonder NHG kunnen andere regels gelden.</p>
        <p>
          Een geldverstrekker kan bijvoorbeeld eigen criteria hanteren voor ondernemers die één of
          twee jaar actief zijn.
        </p>
        <p>
          Daarom is het niet verstandig om de NHG-regels als algemene regel voor iedere hypotheek te
          gebruiken.
        </p>
        <p>
          Als je geen NHG gebruikt, moet je specifiek kijken naar het acceptatiebeleid van de
          geldverstrekker.
        </p>
        <p>
          Dat kan betekenen dat de ene geldverstrekker anders omgaat met een korte
          ondernemershistorie dan de andere.
        </p>

        <h2>Kan een startende zzp&apos;er een hypotheek krijgen?</h2>
        <p>Ja, dat kan mogelijk.</p>
        <p>
          Een startende zzp&apos;er heeft alleen minder historische financiële gegevens dan een
          ondernemer die al meerdere jaren actief is.
        </p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt.
        </p>
        <p>
          Of je daadwerkelijk een hypotheek kunt krijgen en hoeveel je kunt lenen, hangt vervolgens
          ook af van andere factoren.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>je vastgestelde toetsinkomen;</li>
          <li>hypotheekrente;</li>
          <li>andere leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Heeft een eenmanszaak een andere beoordeling dan een bv?</h2>
        <p>
          Ja, de manier waarop ondernemersinkomen wordt vastgesteld kan verschillen per
          ondernemingsvorm.
        </p>
        <p>
          Bij een eenmanszaak of vof wordt onder andere gekeken naar de fiscale winst van de
          onderneming.
        </p>
        <p>
          Bij een bv ligt de situatie anders. Daar kan bijvoorbeeld onderscheid worden gemaakt tussen
          salaris uit de bv en het resultaat van de onderneming.
        </p>
        <p>
          Daarom kun je de regels voor een eenmanszaak niet automatisch toepassen op een
          directeur-grootaandeelhouder van een bv.
        </p>

        <h2>Kun je zonder jaarrekening een hypotheek krijgen?</h2>
        <p>
          Een hypotheek zonder een formele jaarrekening is niet hetzelfde als een hypotheek zonder
          financiële gegevens.
        </p>
        <p>
          Bij sommige ondernemers is een uitgebreide jaarrekening bijvoorbeeld niet op dezelfde
          manier beschikbaar als bij een bv.
        </p>
        <p>
          De geldverstrekker zal echter nog steeds financiële informatie nodig hebben om het
          ondernemersinkomen te kunnen beoordelen.
        </p>
        <p>
          Welke documenten daarvoor worden gebruikt, hangt af van de ondernemingsvorm en de gekozen
          hypotheekroute.
        </p>

        <h2>Hoeveel hypotheek kun je krijgen zonder 3 jaar cijfers?</h2>
        <p>
          Er is geen vast bedrag dat geldt voor iedere zzp&apos;er zonder drie jaar cijfers.
        </p>
        <p>
          De maximale hypotheek wordt niet alleen bepaald door het aantal jaren dat je ondernemer
          bent.
        </p>
        <p>
          Nadat je toetsinkomen is vastgesteld, spelen ook andere factoren een rol.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>je inkomen;</li>
          <li>het inkomen van je partner;</li>
          <li>hypotheekrente;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>lease;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>Daarom kun je niet zeggen:</p>
        <blockquote>
          <p>&quot;Ik ben twee jaar zzp&apos;er, dus ik kan maximaal €X lenen.&quot;</p>
        </blockquote>
        <p>Je toetsinkomen moet eerst worden vastgesteld.</p>

        <h2>Kun je alvast je maximale hypotheek berekenen?</h2>
        <p>Ja, voor een eerste indicatie kan dat.</p>
        <p>
          Als je nog geen drie jaar cijfers hebt, kun je bijvoorbeeld je beschikbare winst en andere
          inkomsten gebruiken om een indicatie te krijgen.
        </p>
        <p>
          Maar een online berekening is geen vervanging voor een officiële inkomensbeoordeling.
        </p>
        <p>
          Voor een NHG-hypotheek kan de Inkomensverklaring Ondernemer uiteindelijk bepalen welk
          ondernemersinkomen voor de hypotheek wordt gebruikt.
        </p>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Kan ik als zzp&apos;er een hypotheek krijgen zonder 3 jaar cijfers?</h3>
        <p>
          Ja, dat kan mogelijk. Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een
          Inkomensverklaring Ondernemer worden gebruikt. Als je onderneming korter dan drie jaar
          bestaat, wordt de beschikbare financiële historie beoordeeld.
        </p>
        <h3>Hoeveel jaar moet ik zzp&apos;er zijn voor een hypotheek?</h3>
        <p>
          Je hoeft niet automatisch drie jaar zzp&apos;er te zijn. Voor de NHG-Inkomensverklaring
          Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik met 1 jaar cijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Bij minimaal 12 maanden ondernemerschap kan de Inkomensverklaring
          Ondernemer worden gebruikt. Je beschikbare financiële gegevens worden vervolgens
          beoordeeld.
        </p>
        <h3>Kan ik met 2 jaar cijfers een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Als je onderneming nog geen drie jaar bestaat, kan de beschikbare
          financiële historie worden gebruikt voor de inkomensbeoordeling.
        </p>
        <h3>Waarom denken veel mensen dat je 3 jaar cijfers nodig hebt?</h3>
        <p>
          Bij een gevestigde ondernemer wordt binnen de NHG-systematiek doorgaans gekeken naar de
          resultaten van de laatste drie kalenderjaren. Daardoor wordt soms gedacht dat je ook
          verplicht drie jaar ondernemer moet zijn. Voor de Inkomensverklaring Ondernemer geldt
          echter een minimale ondernemingsduur van 12 maanden.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek met NHG krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer moet je minimaal 12 maanden
          actief zijn als ondernemer.
        </p>
        <h3>Wat als ik nog geen definitieve jaarcijfers heb?</h3>
        <p>
          Welke documenten nodig zijn, hangt af van het moment van aanvragen. Naast jaarcijfers
          kunnen ook tussentijdse cijfers en btw-aangiften relevant zijn.
        </p>
        <h3>Wordt mijn winst van één jaar volledig meegenomen?</h3>
        <p>
          Niet automatisch. Het toetsinkomen wordt vastgesteld volgens het geldende toetskader. Bij
          een korte ondernemershistorie is er minder financiële historie beschikbaar om het inkomen
          te beoordelen.
        </p>
        <h3>Kan ik zonder 3 jaar cijfers een hypotheek zonder NHG krijgen?</h3>
        <p>
          Dat kan mogelijk, maar de voorwaarden verschillen per geldverstrekker. Zonder NHG gelden
          niet automatisch dezelfde regels als bij de NHG-Inkomensverklaring Ondernemer.
        </p>
        <h3>Is een hypotheek moeilijker als je minder dan 3 jaar zzp&apos;er bent?</h3>
        <p>
          Een korte ondernemershistorie betekent dat er minder financiële informatie beschikbaar is.
          Hoe dat precies wordt beoordeeld, hangt af van de hypotheekroute en geldverstrekker.
        </p>

        <h2>Hypotheek als zzp&apos;er zonder 3 jaar cijfers</h2>
        <p>
          Je hoeft als zzp&apos;er niet automatisch drie volledige jaren ondernemer te zijn voordat
          je een hypotheek kunt aanvragen.
        </p>
        <p>
          Voor NHG kan vanaf <strong>12 maanden ondernemerschap</strong> een Inkomensverklaring
          Ondernemer worden gebruikt. Heb je nog geen drie jaar cijfers, dan wordt gekeken naar de
          financiële informatie die wél beschikbaar is.
        </p>
        <p>
          Het belangrijkste is daarom niet alleen hoeveel jaar je ondernemer bent, maar welk{' '}
          <strong>toetsinkomen</strong> op basis van je financiële situatie kan worden vastgesteld.
        </p>
        <p>
          Heb je één of twee jaar cijfers? Dan kan het dus zeker de moeite waard zijn om je
          mogelijkheden te laten berekenen.
        </p>
        <p>
          Heb je nog geen drie volledige jaren als zzp&apos;er? Lees ook{' '}
          <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
            Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>
        <HypotheekCta label="Hypotheek berekenen als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheek-berekenen-als-zzper',
    relatedSlugs: [
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
      'hypotheekadviseur-voor-zzpers',
    ],
    title: "Hypotheek berekenen als zzp'er",
    metaTitle: "Hypotheek berekenen als zzp'er | Maximale hypotheek",
    excerpt:
      "Hoeveel hypotheek kun je krijgen als zzp'er? Bereken je maximale hypotheek en ontdek hoe winst, toetsinkomen, schulden en partnerinkomen meetellen.",
    keywords:
      "hypotheek berekenen als zzp'er, hypotheek berekenen zzp, hypotheek zzp berekenen, maximale hypotheek zzp, maximale hypotheek berekenen zzp, hoeveel hypotheek kan ik krijgen als zzp'er, hoeveel kan ik lenen als zzp'er, hypotheekcalculator zzp, hypotheek berekenen ondernemer, hypotheek berekenen eenmanszaak, hypotheek op basis van winst zzp, toetsinkomen zzp hypotheek, inkomen zzp hypotheek berekenen, hypotheek zzp inkomen berekenen",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20berekenen%20als%20zzper.jpg',
      alt: "Hypotheek berekenen als zzp'er: maximale hypotheek op basis van toetsinkomen en winst.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Hoe bereken ik mijn maximale hypotheek als zzp'er?",
        answer:
          'Eerst moet je toetsinkomen worden vastgesteld. Daarna wordt met je inkomen, financiële verplichtingen, eventuele partnerinkomen, hypotheekrente en andere gegevens je maximale hypotheek berekend.',
      },
      {
        question: 'Kan ik mijn hypotheek berekenen op basis van mijn winst?',
        answer:
          'Voor een eerste indicatie kan dat. Je winst is echter niet automatisch hetzelfde als je officiële toetsinkomen.',
      },
      {
        question: 'Wordt mijn omzet gebruikt voor mijn hypotheek?',
        answer:
          'Niet rechtstreeks. Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de inkomensbeoordeling.',
      },
      {
        question: 'Hoeveel hypotheek kan ik krijgen met €50.000 winst?',
        answer:
          'Dat is afhankelijk van je uiteindelijke toetsinkomen en andere factoren zoals rente, schulden, lease, partnerinkomen en de woningwaarde.',
      },
      {
        question: 'Hoeveel jaar cijfers heb ik nodig?',
        answer:
          'Je hebt niet automatisch drie volledige jaren nodig. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Vanaf minimaal 12 maanden ondernemerschap kan binnen de NHG-route een Inkomensverklaring Ondernemer worden gebruikt.',
      },
      {
        question: 'Telt mijn partnerinkomen mee?',
        answer:
          'Dat kan. De manier waarop het inkomen van je partner wordt meegenomen hangt af van het type inkomen en de geldende hypotheekregels.',
      },
      {
        question: 'Verlagen schulden mijn maximale hypotheek?',
        answer:
          'Ja. Bestaande financiële verplichtingen zoals leningen, studieschuld en lease kunnen invloed hebben op je maximale hypotheek.',
      },
      {
        question: "Kan ik zonder NHG een hypotheek als zzp'er krijgen?",
        answer:
          'Dat kan mogelijk. Zonder NHG kunnen geldverstrekkers hun eigen voorwaarden hanteren voor het beoordelen van ondernemersinkomen.',
      },
      {
        question: "Is een hypotheekcalculator voor zzp'ers betrouwbaar?",
        answer:
          'Een calculator kan een goede eerste indicatie geven, maar het resultaat is niet automatisch het definitieve hypotheekbedrag. De uiteindelijke berekening hangt af van het toetsinkomen en de volledige financiële situatie.',
      },
    ],
    content: (
      <>
        <p>
          Wil je als zzp&apos;er een huis kopen? Dan wil je waarschijnlijk eerst weten hoeveel
          hypotheek je ongeveer kunt krijgen.
        </p>
        <p>Dat werkt voor een ondernemer net iets anders dan voor iemand in loondienst.</p>
        <p>
          Bij een werknemer kan het salaris op de loonstrook een belangrijk uitgangspunt zijn. Als
          zzp&apos;er wordt gekeken naar het inkomen uit je onderneming en naar de financiële
          ontwikkeling daarvan.
        </p>
        <p>Daarbij is je omzet niet hetzelfde als je inkomen.</p>
        <p>
          Voor een hypotheek is vooral belangrijk welk <strong>toetsinkomen</strong> uiteindelijk
          voor jouw situatie wordt vastgesteld.
        </p>
        <p>Je kunt daarom niet simpelweg zeggen:</p>
        <blockquote>
          <p>
            &quot;Ik heb €80.000 omzet, dus ik kan €80.000 als inkomen gebruiken.&quot;
          </p>
        </blockquote>
        <p>
          De hypotheekverstrekker kijkt naar de financiële resultaten van je onderneming en naar het
          geldende toetskader.
        </p>

        <h2>Hoe bereken je een hypotheek als zzp&apos;er?</h2>
        <p>De berekening bestaat grofweg uit twee stappen.</p>
        <p>
          Eerst wordt vastgesteld welk inkomen van jou als ondernemer voor de hypotheek kan worden
          gebruikt.
        </p>
        <p>
          Daarna wordt met dat inkomen gekeken hoeveel hypotheek je binnen de geldende leennormen
          kunt krijgen.
        </p>
        <p>
          Bij een hypotheek met NHG kan het ondernemersinkomen worden vastgesteld met een{' '}
          <strong>Inkomensverklaring Ondernemer</strong>.
        </p>
        <p>Daarbij wordt onder andere gekeken naar:</p>
        <ul>
          <li>je financiële resultaten;</li>
          <li>je winst uit onderneming;</li>
          <li>je historische inkomen;</li>
          <li>je laatste boekjaar;</li>
          <li>je lopende boekjaar;</li>
          <li>de financiële positie van je onderneming.</li>
        </ul>
        <p>
          Heb je meerdere jaren als ondernemer, dan wordt je inkomen anders beoordeeld dan wanneer
          je net bent gestart.
        </p>

        <h2>Welke winst telt voor je hypotheek?</h2>
        <p>
          Voor een IB-ondernemer, zoals iemand met een eenmanszaak, vormt de fiscale winst een
          belangrijke basis voor de inkomensbeoordeling.
        </p>
        <p>Je omzet is dus niet hetzelfde als je hypotheekinkomen.</p>
        <p>Stel:</p>
        <ul>
          <li>omzet: €100.000;</li>
          <li>zakelijke kosten: €30.000;</li>
          <li>fiscale winst: €70.000.</li>
        </ul>
        <p>
          Dan betekent dit niet automatisch dat €70.000 ook precies je toetsinkomen voor de
          hypotheek is.
        </p>
        <p>
          Er kunnen binnen de inkomensbeoordeling nog andere correcties en regels gelden.
        </p>
        <p>
          Het uiteindelijke toetsinkomen moet daarom worden vastgesteld volgens de methode die voor
          jouw hypotheek van toepassing is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
        </p>

        <h2>Hoeveel hypotheek kan ik krijgen als zzp&apos;er?</h2>
        <p>
          Er is geen vast bedrag dat iedere zzp&apos;er met een bepaald inkomen kan lenen.
        </p>
        <p>De maximale hypotheek hangt onder andere af van:</p>
        <ul>
          <li>je toetsinkomen;</li>
          <li>de hypotheekrente;</li>
          <li>je leeftijd en situatie;</li>
          <li>andere financiële verplichtingen;</li>
          <li>studieschuld;</li>
          <li>persoonlijke leningen;</li>
          <li>leaseverplichtingen;</li>
          <li>het inkomen van je partner;</li>
          <li>de waarde van de woning;</li>
          <li>de geldende leennormen.</li>
        </ul>
        <p>
          Daarom is een inkomen van €50.000 niet automatisch gelijk aan één vast maximaal
          hypotheekbedrag.
        </p>
        <p>
          Dezelfde ondernemer kan onder verschillende omstandigheden een andere maximale hypotheek
          hebben. Meer details lees je in{' '}
          <Link href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper" className="text-warm-orange hover:underline">
            Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Hypotheek berekenen op basis van gemiddelde winst</h2>
        <p>
          Als je meerdere jaren ondernemer bent, kan het gemiddelde van je winst een nuttige eerste
          indicatie geven.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€40.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€50.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€60.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Het gemiddelde is €50.000.</p>
        <p>
          Maar je kunt niet automatisch aannemen dat je officiële toetsinkomen daarom €50.000 is.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer wordt het ondernemersinkomen volgens het
          geldende toetskader vastgesteld. Bij een IB-ondernemer is het gemiddelde inkomen over de
          laatste drie kalenderjaren een belangrijk uitgangspunt, waarbij het laatste jaar als
          maximum geldt.
        </p>
        <p>Ook de ontwikkeling in het lopende boekjaar kan worden meegenomen.</p>

        <h2>Wat als je inkomen wisselt?</h2>
        <p>Een wisselend inkomen sluit een hypotheek niet automatisch uit.</p>
        <p>Stel:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€35.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€70.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€45.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde winst is €50.000.</p>
        <p>
          Toch kun je niet simpelweg zeggen dat je hypotheek op €50.000 inkomen wordt gebaseerd.
        </p>
        <p>Er wordt ook gekeken naar het laatste jaar en het lopende boekjaar.</p>
        <p>
          Een tijdelijk uitzonderlijk goed jaar wordt dus niet automatisch behandeld alsof dit je
          structurele inkomen is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Wat als je inkomen stijgt?</h2>
        <p>Een groeiend inkomen kan relevant zijn voor je hypotheekaanvraag.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €30.000;</li>
          <li>jaar 2: €45.000;</li>
          <li>jaar 3: €60.000.</li>
        </ul>
        <p>Je onderneming groeit duidelijk.</p>
        <p>
          Toch betekent dit niet automatisch dat je volledige winst van €60.000 als toetsinkomen
          wordt gebruikt.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar je historische resultaten én je actuele situatie.
        </p>
        <p>
          Het verschil tussen je <strong>werkelijke winst</strong> en je{' '}
          <strong>toetsinkomen</strong> is daarom belangrijk.
        </p>

        <h2>Wat als je inkomen daalt?</h2>
        <p>Een dalend inkomen kan juist gevolgen hebben voor je hypotheekberekening.</p>
        <p>Stel:</p>
        <ul>
          <li>jaar 1: €60.000;</li>
          <li>jaar 2: €55.000;</li>
          <li>jaar 3: €35.000.</li>
        </ul>
        <p>Het gemiddelde over deze drie jaren is €50.000.</p>
        <p>Maar je laatste jaar ligt daar duidelijk onder.</p>
        <p>
          Binnen de NHG-systematiek kan het lagere inkomen van het laatste jaar dan bepalend zijn
          voor het toetsinkomen.
        </p>
        <p>Ook het lopende boekjaar wordt bekeken.</p>
        <p>
          Een hypotheekberekening op basis van alleen het gemiddelde kan in zo&apos;n situatie dus
          een te hoog bedrag opleveren.
        </p>

        <h2>Hoeveel jaar moet je zzp&apos;er zijn voor een hypotheek?</h2>
        <p>Je hoeft niet automatisch drie jaar ondernemer te zijn.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van{' '}
          <strong>12 maanden ondernemerschap</strong>.
        </p>
        <p>
          Heb je minder dan drie jaar cijfers, dan wordt de beschikbare financiële historie
          beoordeeld.
        </p>
        <p>
          Je kunt dus mogelijk ook als relatief startende zzp&apos;er een hypotheek krijgen.
        </p>
        <p>
          Hoe langer je onderneming bestaat, hoe meer financiële historie beschikbaar is.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>
        </p>

        <h2>Hypotheek berekenen als startende zzp&apos;er</h2>
        <p>
          Ben je net gestart als ondernemer, dan is het lastiger om je toekomstige inkomen
          uitsluitend op basis van historische cijfers te beoordelen.
        </p>
        <p>Je hebt immers nog maar weinig financiële historie.</p>
        <p>
          Voor NHG kan vanaf minimaal 12 maanden ondernemerschap een Inkomensverklaring Ondernemer
          worden gebruikt.
        </p>
        <p>
          Heb je bijvoorbeeld één jaar cijfers, dan wordt die beschikbare informatie gebruikt binnen
          het geldende toetskader.
        </p>
        <p>
          Dat betekent niet dat je automatisch dezelfde leencapaciteit hebt als een ondernemer met
          tien jaar stabiele resultaten.
        </p>
        <p>Maar drie volledige jaren zijn niet per definitie vereist.</p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
            Hypotheek voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Welke documenten heb je nodig om je hypotheek te berekenen?</h2>
        <p>
          Voor een eerste berekening kun je vaak beginnen met je eigen financiële gegevens.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>winst van de afgelopen jaren;</li>
          <li>actuele winst;</li>
          <li>omzet;</li>
          <li>zakelijke kosten;</li>
          <li>inkomen uit loondienst;</li>
          <li>inkomen van je partner;</li>
          <li>bestaande leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen.</li>
        </ul>
        <p>
          Voor een daadwerkelijke hypotheekaanvraag kunnen meer documenten nodig zijn.
        </p>
        <p>
          Bij de NHG-Inkomensverklaring Ondernemer worden de financiële gegevens van de onderneming
          onderzocht en kan bijvoorbeeld worden gevraagd naar jaarcijfers, tussentijdse cijfers en
          btw-aangiften.
        </p>
        <p>
          Welke documenten precies nodig zijn, hangt af van de situatie en het moment van aanvragen.
          Lees ook{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Telt omzet mee voor je hypotheek?</h2>
        <p>Omzet en inkomen zijn twee verschillende dingen.</p>
        <p>Stel dat je als zzp&apos;er €150.000 omzet draait.</p>
        <p>
          Als je vervolgens €80.000 zakelijke kosten hebt, blijft er €70.000 winst over.
        </p>
        <p>
          Je kunt daarom niet automatisch je omzet als persoonlijk inkomen gebruiken voor een
          hypotheek.
        </p>
        <p>
          Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis voor de
          inkomensbeoordeling.
        </p>
        <p>
          Het is dus vooral belangrijk om te weten wat je onderneming daadwerkelijk oplevert.
        </p>

        <h2>Telt inkomen uit loondienst ook mee?</h2>
        <p>
          Sommige zzp&apos;ers combineren hun onderneming met een baan in loondienst.
        </p>
        <p>
          Dan kan naast het ondernemersinkomen ook het inkomen uit dienstbetrekking relevant zijn.
        </p>
        <p>
          Hoe dit precies wordt meegenomen, hangt af van de hypotheekregels en je persoonlijke
          situatie.
        </p>
        <p>
          Je moet daarom niet automatisch alleen naar je winst uit onderneming kijken wanneer je
          daarnaast salaris ontvangt.
        </p>

        <h2>Wat als je partner ook inkomen heeft?</h2>
        <p>
          Heb je een partner met inkomen, dan kan dat inkomen onderdeel zijn van de
          hypotheekberekening.
        </p>
        <p>
          De precieze manier waarop het inkomen van je partner wordt meegenomen, hangt af van het
          type inkomen en de geldende leennormen.
        </p>
        <p>
          Bij een gezamenlijke hypotheek wordt daarom niet alleen gekeken naar jouw inkomen als
          zzp&apos;er.
        </p>
        <p>
          Een berekening op basis van alleen jouw winst kan daardoor een ander resultaat geven dan
          een gezamenlijke berekening.
        </p>

        <h2>Welke schulden verlagen je maximale hypotheek?</h2>
        <p>
          Bij het berekenen van je maximale hypotheek wordt niet alleen naar inkomen gekeken.
        </p>
        <p>
          Bestaande financiële verplichtingen kunnen je leencapaciteit verminderen.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>persoonlijke leningen;</li>
          <li>doorlopende kredieten;</li>
          <li>private lease;</li>
          <li>studieschuld;</li>
          <li>andere financiële verplichtingen.</li>
        </ul>
        <p>
          Daarom kan iemand met een hoger inkomen toch minder kunnen lenen dan iemand met een lager
          inkomen en weinig verplichtingen.
        </p>
        <p>
          Voor een betrouwbare berekening moet je deze verplichtingen dus meenemen.
        </p>

        <h2>Hoeveel hypotheek bij €40.000 winst?</h2>
        <p>
          Een winst van €40.000 geeft op zichzelf onvoldoende informatie om je maximale hypotheek te
          bepalen.
        </p>
        <p>Eerst moet duidelijk zijn welk toetsinkomen wordt vastgesteld.</p>
        <p>
          Daarna zijn onder andere de hypotheekrente, financiële verplichtingen, partnerinkomen en
          woningwaarde relevant.
        </p>
        <p>Je kunt daarom beter spreken over:</p>
        <blockquote>
          <p>&quot;Wat is mijn toetsinkomen?&quot;</p>
        </blockquote>
        <p>dan alleen:</p>
        <blockquote>
          <p>&quot;Hoeveel winst maak ik?&quot;</p>
        </blockquote>
        <p>
          Het toetsinkomen vormt vervolgens één van de belangrijkste uitgangspunten voor de
          hypotheekberekening.
        </p>

        <h2>Hoeveel hypotheek bij €50.000 winst?</h2>
        <p>Ook bij €50.000 winst is er geen universeel hypotheekbedrag.</p>
        <p>
          Als je €50.000 fiscale winst hebt, betekent dit niet automatisch dat je precies hetzelfde
          bedrag als toetsinkomen krijgt.
        </p>
        <p>
          Bij meerdere jaren winst wordt gekeken naar de historische resultaten en de ontwikkeling
          van je onderneming.
        </p>
        <p>
          Vervolgens wordt je maximale hypotheek berekend op basis van de geldende leennormen.
        </p>

        <h2>Hoeveel hypotheek bij €75.000 winst?</h2>
        <p>Hetzelfde geldt voor een winst van €75.000.</p>
        <p>
          Een hoge winst kan uiteraard leiden tot een hoger toetsinkomen, maar de uiteindelijke
          maximale hypotheek wordt niet uitsluitend bepaald door je winst.
        </p>
        <p>
          Andere verplichtingen en de actuele hypotheekrente spelen bijvoorbeeld ook een rol.
        </p>
        <p>
          Bovendien moet eerst worden vastgesteld welk deel van je winst als toetsinkomen wordt
          meegenomen.
        </p>

        <h2>Kun je als zzp&apos;er 100% van je inkomen lenen?</h2>
        <p>
          Nee, je maximale hypotheek wordt niet simpelweg bepaald door een percentage van je
          inkomen.
        </p>
        <p>
          De leennormen bepalen hoeveel je maximaal mag lenen op basis van je inkomen en andere
          omstandigheden.
        </p>
        <p>Daarnaast geldt de woningwaarde als belangrijke grens.</p>
        <p>
          In veel gevallen kun je niet meer lenen dan het percentage van de woningwaarde dat volgens
          de regels is toegestaan, behoudens specifieke uitzonderingen.
        </p>
        <p>Je inkomen bepaalt dus niet alleen hoeveel je kunt lenen.</p>

        <h2>Hypotheek berekenen met NHG</h2>
        <p>Met NHG kan een specifieke route voor ondernemers worden gebruikt.</p>
        <p>
          De <strong>Inkomensverklaring Ondernemer</strong> wordt opgesteld op basis van financiële
          gegevens van je onderneming.
        </p>
        <p>
          De verklaring bepaalt welk ondernemersinkomen voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Daarna wordt met dat inkomen de maximale hypotheek berekend volgens de geldende normen.
        </p>
        <p>
          Dit betekent dat je eigen berekening van je gemiddelde winst vooral een{' '}
          <strong>indicatie</strong> is.
        </p>
        <p>De officiële inkomensvaststelling kan daarvan afwijken.</p>

        <h2>Hypotheek berekenen zonder NHG</h2>
        <p>Niet iedere hypotheek heeft NHG.</p>
        <p>
          Zonder NHG kunnen geldverstrekkers hun eigen acceptatiebeleid voor ondernemers hanteren.
        </p>
        <p>
          Daarom kunnen de eisen voor een zzp&apos;er per geldverstrekker verschillen.
        </p>
        <p>
          Een berekening die volgens een NHG-methode wordt gemaakt, kun je dus niet automatisch
          gebruiken als definitieve berekening voor iedere hypotheek zonder NHG.
        </p>

        <h2>Wat is mijn toetsinkomen?</h2>
        <p>
          Je toetsinkomen is het inkomen dat de geldverstrekker gebruikt bij het bepalen van je
          maximale hypotheek.
        </p>
        <p>Voor een ondernemer is dat niet noodzakelijk gelijk aan:</p>
        <ul>
          <li>je omzet;</li>
          <li>je nettowinst op je bankrekening;</li>
          <li>je winst van één goed jaar;</li>
          <li>je gemiddelde maandinkomen.</li>
        </ul>
        <p>
          Het toetsinkomen wordt vastgesteld volgens de methode die voor jouw hypotheek geldt.
        </p>
        <p>Bij NHG kan daarvoor de Inkomensverklaring Ondernemer worden gebruikt.</p>
        <p>
          Het verschil tussen je daadwerkelijke bedrijfsresultaat en het toetsinkomen is daarom
          belangrijk bij het berekenen van je hypotheek. Lees ook{' '}
          <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Welk inkomen telt voor een hypotheek als zzp&apos;er?
          </Link>
          .
        </p>

        <h2>Voorbeeld van een hypotheekberekening voor een zzp&apos;er</h2>
        <p>Stel dat je al drie jaar ondernemer bent:</p>
        <div className="my-6 overflow-x-auto">
          <table className="w-full min-w-[240px] border-collapse text-left">
            <thead>
              <tr>
                <th className="border-b border-slate-200 py-2 pr-4 font-semibold">Jaar</th>
                <th className="border-b border-slate-200 py-2 text-right font-semibold">Winst</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 1</td>
                <td className="border-b border-slate-100 py-2 text-right">€45.000</td>
              </tr>
              <tr>
                <td className="border-b border-slate-100 py-2 pr-4">Jaar 2</td>
                <td className="border-b border-slate-100 py-2 text-right">€55.000</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Jaar 3</td>
                <td className="py-2 text-right">€50.000</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>Je gemiddelde winst bedraagt €50.000.</p>
        <p>
          Voor een eerste indicatie kun je dus uitgaan van ongeveer €50.000.
        </p>
        <p>
          Maar voor de daadwerkelijke hypotheekaanvraag moet worden vastgesteld welk toetsinkomen
          geldt.
        </p>
        <p>Stel daarnaast dat je:</p>
        <ul>
          <li>geen andere leningen hebt;</li>
          <li>geen leaseverplichtingen hebt;</li>
          <li>een partner met inkomen hebt.</li>
        </ul>
        <p>
          Dan kan je maximale hypotheek anders uitvallen dan wanneer je dezelfde €50.000 winst hebt
          maar ook een persoonlijke lening en studieschuld.
        </p>
        <p>
          Daarom is het toetsinkomen slechts één onderdeel van de berekening.
        </p>

        <h2>Waarom kan mijn hypotheekberekening verschillen van de berekening van een adviseur?</h2>
        <p>Een online calculator gebruikt vaak een beperkt aantal gegevens.</p>
        <p>
          Een hypotheekadviseur of geldverstrekker kan over meer informatie beschikken, zoals:
        </p>
        <ul>
          <li>definitieve jaarcijfers;</li>
          <li>tussentijdse cijfers;</li>
          <li>fiscale gegevens;</li>
          <li>correcties;</li>
          <li>schulden;</li>
          <li>partnerinkomen;</li>
          <li>specifieke acceptatieregels.</li>
        </ul>
        <p>
          Daardoor kan een eerste online indicatie verschillen van de uiteindelijke
          hypotheekberekening.
        </p>
        <p>
          Een calculator is daarom vooral geschikt om vooraf een idee te krijgen van je
          mogelijkheden.
        </p>

        <h2>Kun je je maximale hypotheek als zzp&apos;er online berekenen?</h2>
        <p>Ja.</p>
        <p>
          Voor een eerste indicatie kun je je financiële gegevens invullen in een
          hypotheekcalculator.
        </p>
        <p>
          Voor ondernemers is het daarbij belangrijk om niet alleen naar omzet te kijken.
        </p>
        <p>Gebruik bij voorkeur je beschikbare winstgegevens en houd rekening met:</p>
        <ul>
          <li>meerdere jaren aan resultaten;</li>
          <li>je actuele inkomen;</li>
          <li>bestaande verplichtingen;</li>
          <li>inkomen van je partner;</li>
          <li>de waarde van de woning.</li>
        </ul>
        <HypotheekCta />

        <h2>Veelgestelde vragen</h2>
        <h3>Hoe bereken ik mijn maximale hypotheek als zzp&apos;er?</h3>
        <p>
          Eerst moet je toetsinkomen worden vastgesteld. Daarna wordt met je inkomen, financiële
          verplichtingen, eventuele partnerinkomen, hypotheekrente en andere gegevens je maximale
          hypotheek berekend.
        </p>
        <h3>Kan ik mijn hypotheek berekenen op basis van mijn winst?</h3>
        <p>
          Voor een eerste indicatie kan dat. Je winst is echter niet automatisch hetzelfde als je
          officiële toetsinkomen.
        </p>
        <h3>Wordt mijn omzet gebruikt voor mijn hypotheek?</h3>
        <p>
          Niet rechtstreeks. Voor een IB-ondernemer vormt de fiscale winst een belangrijke basis
          voor de inkomensbeoordeling.
        </p>
        <h3>Hoeveel hypotheek kan ik krijgen met €50.000 winst?</h3>
        <p>
          Dat is afhankelijk van je uiteindelijke toetsinkomen en andere factoren zoals rente,
          schulden, lease, partnerinkomen en de woningwaarde.
        </p>
        <h3>Hoeveel jaar cijfers heb ik nodig?</h3>
        <p>
          Je hebt niet automatisch drie volledige jaren nodig. Voor de NHG-Inkomensverklaring
          Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Vanaf minimaal 12 maanden ondernemerschap kan binnen de NHG-route een
          Inkomensverklaring Ondernemer worden gebruikt.
        </p>
        <h3>Telt mijn partnerinkomen mee?</h3>
        <p>
          Dat kan. De manier waarop het inkomen van je partner wordt meegenomen hangt af van het
          type inkomen en de geldende hypotheekregels.
        </p>
        <h3>Verlagen schulden mijn maximale hypotheek?</h3>
        <p>
          Ja. Bestaande financiële verplichtingen zoals leningen, studieschuld en lease kunnen
          invloed hebben op je maximale hypotheek.
        </p>
        <h3>Kan ik zonder NHG een hypotheek als zzp&apos;er krijgen?</h3>
        <p>
          Dat kan mogelijk. Zonder NHG kunnen geldverstrekkers hun eigen voorwaarden hanteren voor
          het beoordelen van ondernemersinkomen.
        </p>
        <h3>Is een hypotheekcalculator voor zzp&apos;ers betrouwbaar?</h3>
        <p>
          Een calculator kan een goede eerste indicatie geven, maar het resultaat is niet
          automatisch het definitieve hypotheekbedrag. De uiteindelijke berekening hangt af van het
          toetsinkomen en de volledige financiële situatie.
        </p>

        <h2>Bereken je maximale hypotheek als zzp&apos;er</h2>
        <p>
          Als zzp&apos;er begint een hypotheekberekening bij je <strong>toetsinkomen</strong>.
        </p>
        <p>
          Kijk daarom niet alleen naar je omzet of naar je winst van het afgelopen jaar. Je
          historische resultaten, actuele inkomen en persoonlijke financiële verplichtingen kunnen
          allemaal een rol spelen.
        </p>
        <p>
          Heb je meerdere jaren cijfers, dan kan je gemiddelde winst een nuttig startpunt zijn. Ben
          je pas één of twee jaar ondernemer, dan wordt gekeken naar de beschikbare financiële
          historie.
        </p>
        <p>Wil je weten wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheekadviseur-voor-zzpers" className="text-warm-orange hover:underline">
              Hypotheekadviseur voor zzp&apos;ers
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  {
    slug: 'hypotheekadviseur-voor-zzpers',
    relatedSlugs: [
      'hypotheek-berekenen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hypotheek-voor-startende-zzpers',
      'hypotheek-met-wisselend-inkomen-als-zzper',
    ],
    title: "Hypotheekadviseur voor zzp'ers",
    metaTitle: "Hypotheekadviseur voor zzp'ers | Hypotheekadvies",
    excerpt:
      "Op zoek naar een hypotheekadviseur voor zzp'ers? Lees waar je op moet letten bij hypotheekadvies voor ondernemers en maak kennis met Haruna.",
    keywords:
      "hypotheekadviseur voor zzp'ers, hypotheekadviseur zzp, hypotheekadvies zzp, hypotheekadvies voor zzp'ers, hypotheekadviseur voor zelfstandigen, hypotheekadviseur ondernemer, hypotheekadviseur eenmanszaak, hypotheekadviseur startende zzp'er, onafhankelijke hypotheekadviseur zzp, hypotheek aanvragen zzp adviseur, hypotheekadvies voor ondernemers, zzp hypotheek advies, hypotheek met zzp inkomen, hypotheekadviseur zzp online, hypotheekadviseur zzp Nederland, Haruna hypotheekadviseur, Haruna hypotheekadvies",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheekadviseur%20voor%20zzper.jpg',
      alt: "Hypotheekadviseur voor zzp'ers: hypotheekadvies voor ondernemers via Haruna.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Wat doet een hypotheekadviseur voor zzp'ers?",
        answer:
          'Een hypotheekadviseur helpt bij het beoordelen van je financiële situatie, het vaststellen van je hypotheekmogelijkheden en het vergelijken van passende hypotheekoplossingen.',
      },
      {
        question: "Heb ik als zzp'er een hypotheekadviseur nodig?",
        answer:
          'Niet per se. Je kunt zelf een eerste berekening maken. Bij een complexere ondernemerssituatie kan professioneel advies wel helpen om je inkomen en mogelijkheden goed in kaart te brengen.',
      },
      {
        question: "Kan ik als startende zzp'er een hypotheek krijgen?",
        answer:
          'Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden ondernemerschap.',
      },
      {
        question: 'Kan ik een hypotheek krijgen zonder 3 jaar cijfers?',
        answer:
          'Dat kan mogelijk. Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet automatisch drie volledige jaren ondernemer te zijn.',
      },
      {
        question: "Wat kost hypotheekadvies voor zzp'ers?",
        answer:
          'De kosten verschillen per adviseur en situatie. Haruna geeft aan dat de kosten afhankelijk zijn van de situatie en het type dienstverlening.',
      },
      {
        question: 'Kan ik online hypotheekadvies krijgen?',
        answer: 'Ja. Haruna biedt hypotheekadvies via videobellen en werkt online.',
      },
      {
        question: 'Is Haruna onafhankelijk?',
        answer:
          'Haruna positioneert zich als onafhankelijk hypotheekadviseur en geeft aan hypotheken van vrijwel alle geldverstrekkers in Nederland te vergelijken.',
      },
      {
        question: 'Kan ik eerst vrijblijvend kennismaken?',
        answer: 'Ja. Haruna vermeldt dat het kennismakingsgesprek vrijblijvend is.',
      },
      {
        question: 'Kan ik eerst zelf mijn hypotheek berekenen?',
        answer:
          'Ja. Je kunt eerst een indicatie van je maximale hypotheek berekenen voordat je een adviseur inschakelt.',
      },
    ],
    content: (
      <>
        <p>
          Een hypotheek aanvragen als zzp&apos;er kan net wat ingewikkelder zijn dan wanneer je in
          loondienst bent.
        </p>
        <p>
          Je inkomen komt immers niet iedere maand uit een vast salaris. De geldverstrekker moet
          eerst bepalen welk inkomen uit je onderneming voor de hypotheek kan worden gebruikt.
        </p>
        <p>
          Daarbij kunnen je winst van de afgelopen jaren, je actuele inkomen, de ontwikkeling van je
          onderneming en andere financiële gegevens een rol spelen.
        </p>
        <p>
          Een <strong>hypotheekadviseur voor zzp&apos;ers</strong> kan helpen om deze gegevens vooraf
          in kaart te brengen en te bepalen welke hypotheekmogelijkheden bij jouw situatie passen.
        </p>
        <p>
          Voor FactuurBaas werken we hiervoor samen met <strong>Haruna B.V.</strong>, een
          onafhankelijke hypotheek- en financieel adviseur. Haruna werkt online via videobellen en
          adviseert zowel particulieren als ondernemers.
        </p>

        <h2>Waarom is hypotheekadvies voor zzp&apos;ers anders?</h2>
        <p>
          Bij iemand in loondienst kan een geldverstrekker vaak relatief eenvoudig naar het inkomen
          op de loonstrook en de arbeidsovereenkomst kijken.
        </p>
        <p>Als zzp&apos;er werkt dat anders.</p>
        <p>Je inkomen kan bijvoorbeeld zijn:</p>
        <ul>
          <li>€35.000 winst in het ene jaar;</li>
          <li>€55.000 in het volgende jaar;</li>
          <li>€45.000 daarna.</li>
        </ul>
        <p>
          Of je bent pas één of twee jaar ondernemer en hebt nog maar beperkte financiële historie.
        </p>
        <p>
          De hypotheekadviseur moet daarom eerst bepalen welk inkomen voor de hypotheek kan worden
          gebruikt.
        </p>
        <p>
          Dat wordt ook wel het <strong>toetsinkomen</strong> genoemd.
        </p>

        <h2>Wat doet een hypotheekadviseur voor een zzp&apos;er?</h2>
        <p>Een hypotheekadviseur kijkt niet alleen naar hoeveel geld je momenteel verdient.</p>
        <p>Bij een ondernemer kan onder andere worden gekeken naar:</p>
        <ul>
          <li>je winst uit onderneming;</li>
          <li>je jaarcijfers;</li>
          <li>je aangiften inkomstenbelasting;</li>
          <li>je actuele resultaten;</li>
          <li>het lopende boekjaar;</li>
          <li>je ondernemingsvorm;</li>
          <li>eventuele andere inkomsten;</li>
          <li>bestaande financiële verplichtingen;</li>
          <li>het inkomen van je partner.</li>
        </ul>
        <p>
          Daarna wordt gekeken naar de hypotheekmogelijkheden die bij jouw situatie passen.
        </p>
        <p>
          Bij NHG kan voor ondernemers een <strong>Inkomensverklaring Ondernemer</strong> worden
          gebruikt om het ondernemersinkomen vast te stellen.
        </p>

        <h2>Heb je als zzp&apos;er een hypotheekadviseur nodig?</h2>
        <p>Niet iedere zzp&apos;er heeft dezelfde behoefte aan advies.</p>
        <p>Voor een eenvoudige situatie kun je zelf al een eerste berekening maken.</p>
        <p>Maar zodra je bijvoorbeeld:</p>
        <ul>
          <li>pas kort ondernemer bent;</li>
          <li>wisselende winsten hebt;</li>
          <li>meerdere ondernemingen hebt;</li>
          <li>inkomen uit loondienst combineert met ondernemerschap;</li>
          <li>een bv hebt;</li>
          <li>een studieschuld hebt;</li>
          <li>andere leningen hebt;</li>
          <li>een partner met inkomen hebt;</li>
        </ul>
        <p>
          kan het lastiger worden om zelf te bepalen welk inkomen voor de hypotheek wordt gebruikt.
        </p>
        <p>
          Een hypotheekadviseur kan je financiële situatie in dat geval vooraf beoordelen en
          aangeven welke informatie en documenten nodig zijn.
        </p>

        <h2>Hypotheekadviseur voor startende zzp&apos;ers</h2>
        <p>Ben je pas begonnen als zzp&apos;er?</p>
        <p>
          Dan heb je waarschijnlijk nog geen drie volledige jaren aan jaarcijfers.
        </p>
        <p>Dat betekent niet automatisch dat een hypotheek onmogelijk is.</p>
        <p>
          Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van 12 maanden
          ondernemerschap. Als je onderneming korter dan drie jaar bestaat, wordt de beschikbare
          financiële historie gebruikt.
        </p>
        <p>
          Een hypotheekadviseur kan daarom juist bij een startende ondernemer helpen om eerst te
          bepalen welke route mogelijk is.
        </p>
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
        </ul>

        <h2>Hypotheekadviseur bij wisselende inkomsten</h2>
        <p>Niet iedere zzp&apos;er verdient ieder jaar hetzelfde.</p>
        <p>
          Je kunt bijvoorbeeld een paar grote opdrachten hebben gehad waardoor je winst in één jaar
          veel hoger was.
        </p>
        <p>Of je onderneming kan juist tijdelijk minder goed hebben gedraaid.</p>
        <p>
          Bij een hypotheek wordt daarom niet automatisch alleen gekeken naar je beste jaar.
        </p>
        <p>
          De inkomensbeoordeling kijkt naar de financiële historie en de actuele ontwikkeling van je
          onderneming.
        </p>
        <p>
          Een hypotheekadviseur kan helpen om vooraf inzicht te krijgen in hoe jouw inkomen
          waarschijnlijk moet worden beoordeeld.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Hypotheekadviseur voor een eenmanszaak</h2>
        <p>Veel zzp&apos;ers werken vanuit een eenmanszaak.</p>
        <p>
          Bij een eenmanszaak vormt de fiscale winst een belangrijke basis voor de beoordeling van
          het ondernemersinkomen.
        </p>
        <p>
          Maar fiscale winst is niet automatisch hetzelfde als het uiteindelijke toetsinkomen.
        </p>
        <p>
          De hypotheekadviseur kijkt daarom naar de financiële gegevens van de onderneming en de
          regels die gelden voor de gekozen hypotheek.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
            Winst uit onderneming voor hypotheek
          </Link>
        </p>

        <h2>Welke documenten heeft een hypotheekadviseur nodig?</h2>
        <p>
          Een hypotheekadviseur zal je meestal vragen om financiële informatie over je onderneming
          en persoonlijke situatie.
        </p>
        <p>Welke documenten precies nodig zijn, hangt af van je situatie.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>jaarcijfers;</li>
          <li>aangiften inkomstenbelasting;</li>
          <li>tussentijdse cijfers;</li>
          <li>btw-aangiften;</li>
          <li>identiteitsgegevens;</li>
          <li>gegevens over bestaande hypotheken;</li>
          <li>informatie over leningen;</li>
          <li>studieschuld;</li>
          <li>gegevens van je partner.</li>
        </ul>
        <p>
          Bij een NHG-Inkomensverklaring Ondernemer is een specifieke documentenlijst van toepassing.
        </p>
        <p>
          Daarom is het verstandig om je financiële administratie goed op orde te hebben voordat je
          een hypotheek aanvraagt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
            Jaarcijfers nodig voor hypotheek als zzp&apos;er?
          </Link>
        </p>

        <h2>Wat kost een hypotheekadviseur voor zzp&apos;ers?</h2>
        <p>
          De kosten van hypotheekadvies verschillen per adviseur en per situatie.
        </p>
        <p>
          Een zzp&apos;er kan bijvoorbeeld een complexere inkomenssituatie hebben dan iemand in
          loondienst. Daardoor kan de hoeveelheid werk verschillen.
        </p>
        <p>
          Haruna geeft op zijn website aan dat de kosten afhankelijk zijn van de situatie en het
          type dienstverlening. In een vrijblijvend kennismakingsgesprek worden de situatie en de
          bijbehorende kosten besproken.
        </p>
        <p>Het is daarom verstandig om vooraf te vragen:</p>
        <ul>
          <li>wat het advies kost;</li>
          <li>welke werkzaamheden daarbij horen;</li>
          <li>of het regelen van de hypotheek inbegrepen is;</li>
          <li>wanneer je betaalt;</li>
          <li>welke kosten eventueel apart worden berekend.</li>
        </ul>

        <h2>Onafhankelijke hypotheekadviseur voor zzp&apos;ers</h2>
        <p>
          Een onafhankelijk adviseur kan verschillende geldverstrekkers met elkaar vergelijken.
        </p>
        <p>
          Haruna geeft aan hypotheken van vrijwel alle geldverstrekkers in Nederland te vergelijken
          en positioneert zich als onafhankelijk hypotheekadviseur.
        </p>
        <p>
          Dat kan relevant zijn voor zzp&apos;ers, omdat acceptatiecriteria voor ondernemers per
          geldverstrekker kunnen verschillen.
        </p>
        <p>Het is daarom niet altijd voldoende om alleen naar één bank te kijken.</p>

        <h2>Waarom samenwerken met Haruna?</h2>
        <p>
          Voor de hypotheekcontent van FactuurBaas werken we samen met <strong>Haruna B.V.</strong>
        </p>
        <p>
          Haruna is een hypotheek- en pensioenadvieskantoor dat online werkt via videobellen. Het
          kantoor staat onder leiding van hypotheek- en pensioenadviseur Harm Jan Schouwstra en
          vermeldt meer dan 30 jaar ervaring. Haruna is daarnaast SEH Erkend Financieel Adviseur en
          staat geregistreerd als vergunninghouder bij de AFM.
        </p>
        <p>
          De samenwerking betekent dat je via FactuurBaas niet alleen informatie over hypotheken als
          zzp&apos;er kunt lezen, maar ook kunt worden doorverwezen naar een adviseur wanneer je
          jouw eigen situatie wilt bespreken.
        </p>

        <h2>Hypotheekadvies voor zzp&apos;ers bij Haruna</h2>
        <p>Haruna biedt hypotheekadvies online via videobellen.</p>
        <p>
          Je kunt eerst je situatie in kaart brengen voordat je besluit of je verder wilt met een
          adviseur.
        </p>
        <p>
          Haruna biedt hiervoor een <strong>gratis situatiecheck</strong>. Daarbij kun je onder
          andere een PDF ontvangen met een indicatie van je maximale hypotheek, een
          documentchecklist en vragen die je met een adviseur kunt bespreken. De situatiecheck is
          volgens Haruna geen bindend hypotheekadvies.
        </p>
        <p>
          Dit kan vooral handig zijn als je eerst wilt weten welke informatie je nodig hebt voordat
          je een volledige hypotheekaanvraag start.
        </p>

        <h2>Hypotheek berekenen als zzp&apos;er</h2>
        <p>
          Voordat je met een hypotheekadviseur praat, kun je natuurlijk zelf een eerste berekening
          maken.
        </p>
        <p>Daarbij is het belangrijk om niet alleen naar je omzet te kijken.</p>
        <p>Voor een eerste indicatie kun je bijvoorbeeld kijken naar:</p>
        <ul>
          <li>je winst van de afgelopen jaren;</li>
          <li>je actuele winst;</li>
          <li>inkomen van je partner;</li>
          <li>bestaande leningen;</li>
          <li>studieschuld;</li>
          <li>leaseverplichtingen;</li>
          <li>de gewenste woningwaarde.</li>
        </ul>
        <p>Maar een online berekening blijft een indicatie.</p>
        <p>
          De uiteindelijke hypotheek wordt gebaseerd op het toetsinkomen en de geldende leennormen.
        </p>
        <HypotheekCta />
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek berekenen als zzp&apos;er
          </Link>
        </p>

        <h2>Wat bespreek je met een hypotheekadviseur?</h2>
        <p>
          Een eerste gesprek met een hypotheekadviseur kan bijvoorbeeld gaan over:
        </p>
        <h3>Je ondernemerssituatie</h3>
        <p>Hoe lang ben je ondernemer?</p>
        <p>Heb je een eenmanszaak, vof of bv?</p>
        <p>Zijn je inkomsten stabiel of wisselend?</p>
        <h3>Je inkomen</h3>
        <p>Hoeveel winst maak je?</p>
        <p>Wat waren je resultaten van de afgelopen jaren?</p>
        <p>Hoe ziet het lopende boekjaar eruit?</p>
        <h3>Je woning</h3>
        <p>Welke woning wil je kopen?</p>
        <p>Wat is de verwachte aankoopprijs?</p>
        <p>Hoeveel eigen geld heb je beschikbaar?</p>
        <h3>Je financiële verplichtingen</h3>
        <p>Heb je een studieschuld?</p>
        <p>Heb je leningen of lease?</p>
        <p>Heb je al een hypotheek?</p>
        <h3>Je toekomst</h3>
        <p>Verwacht je dat je inkomen verandert?</p>
        <p>Wil je je onderneming uitbreiden?</p>
        <p>
          Zijn er andere veranderingen die invloed kunnen hebben op je financiële situatie?
        </p>
        <p>
          Deze informatie helpt om je hypotheekmogelijkheden beter in kaart te brengen.
        </p>

        <h2>Kan een hypotheekadviseur helpen als je nog geen 3 jaar cijfers hebt?</h2>
        <p>
          Ja, dat is juist een situatie waarin vooraf advies nuttig kan zijn.
        </p>
        <p>
          Als je nog geen drie volledige jaren ondernemer bent, moet eerst worden gekeken welke
          financiële historie beschikbaar is en welke hypotheekroute bij je situatie past.
        </p>
        <p>
          Voor NHG kan vanaf 12 maanden ondernemerschap een Inkomensverklaring Ondernemer worden
          gebruikt.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
            Hypotheek zzp zonder 3 jaar cijfers
          </Link>
        </p>

        <h2>Kan een hypotheekadviseur helpen bij een wisselend inkomen?</h2>
        <p>Ja.</p>
        <p>Een wisselend inkomen hoeft een hypotheek niet automatisch uit te sluiten.</p>
        <p>
          Wel is het belangrijk om te begrijpen welk inkomen uiteindelijk als toetsinkomen wordt
          gebruikt.
        </p>
        <p>
          Een adviseur kan je financiële resultaten vooraf bekijken en aangeven welke informatie
          nodig is voor de inkomensbeoordeling.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
            Hypotheek met wisselend inkomen als zzp&apos;er
          </Link>
        </p>

        <h2>Hypotheekadviseur voor zzp&apos;ers online</h2>
        <p>Je hoeft niet per se naar een kantoor om hypotheekadvies te krijgen.</p>
        <p>
          Haruna werkt online via videobellen en geeft aan dat gesprekken ook buiten reguliere
          kantoortijden mogelijk zijn.
        </p>
        <p>
          Dat kan praktisch zijn als je als zzp&apos;er weinig tijd hebt of niet in de buurt van een
          hypotheekadviseur woont.
        </p>
        <p>
          De documenten en financiële gegevens kunnen vervolgens digitaal worden aangeleverd.
        </p>

        <h2>Veelgestelde vragen</h2>
        <h3>Wat doet een hypotheekadviseur voor zzp&apos;ers?</h3>
        <p>
          Een hypotheekadviseur helpt bij het beoordelen van je financiële situatie, het vaststellen
          van je hypotheekmogelijkheden en het vergelijken van passende hypotheekoplossingen.
        </p>
        <h3>Heb ik als zzp&apos;er een hypotheekadviseur nodig?</h3>
        <p>
          Niet per se. Je kunt zelf een eerste berekening maken. Bij een complexere
          ondernemerssituatie kan professioneel advies wel helpen om je inkomen en mogelijkheden
          goed in kaart te brengen.
        </p>
        <h3>Kan ik als startende zzp&apos;er een hypotheek krijgen?</h3>
        <p>
          Dat kan mogelijk. Voor de NHG-Inkomensverklaring Ondernemer geldt een minimale periode van
          12 maanden ondernemerschap.
        </p>
        <h3>Kan ik een hypotheek krijgen zonder 3 jaar cijfers?</h3>
        <p>
          Dat kan mogelijk. Je hoeft voor de NHG-Inkomensverklaring Ondernemer niet automatisch drie
          volledige jaren ondernemer te zijn.
        </p>
        <h3>Wat kost hypotheekadvies voor zzp&apos;ers?</h3>
        <p>
          De kosten verschillen per adviseur en situatie. Haruna geeft aan dat de kosten afhankelijk
          zijn van de situatie en het type dienstverlening.
        </p>
        <h3>Kan ik online hypotheekadvies krijgen?</h3>
        <p>Ja. Haruna biedt hypotheekadvies via videobellen en werkt online.</p>
        <h3>Is Haruna onafhankelijk?</h3>
        <p>
          Haruna positioneert zich als onafhankelijk hypotheekadviseur en geeft aan hypotheken van
          vrijwel alle geldverstrekkers in Nederland te vergelijken.
        </p>
        <h3>Kan ik eerst vrijblijvend kennismaken?</h3>
        <p>Ja. Haruna vermeldt dat het kennismakingsgesprek vrijblijvend is.</p>
        <h3>Kan ik eerst zelf mijn hypotheek berekenen?</h3>
        <p>
          Ja. Je kunt eerst een indicatie van je maximale hypotheek berekenen voordat je een
          adviseur inschakelt.
        </p>
        <HypotheekCta />

        <h2>Hypotheekadvies voor zzp&apos;ers via Haruna</h2>
        <p>
          Als zzp&apos;er is het belangrijkste verschil met iemand in loondienst dat je
          hypotheekinkomen niet simpelweg van één loonstrook kan worden afgelezen.
        </p>
        <p>
          Je financiële historie, winst, actuele resultaten en persoonlijke financiële situatie
          moeten worden beoordeeld voordat duidelijk is welk toetsinkomen kan worden gebruikt.
        </p>
        <p>
          Daarom kan het handig zijn om je situatie eerst met een hypotheekadviseur te bespreken.
        </p>
        <p>
          Voor FactuurBaas werken we hiervoor samen met <strong>Haruna B.V.</strong> Haruna biedt
          onafhankelijk hypotheekadvies online via videobellen en heeft een gratis situatiecheck
          waarmee je je financiële situatie eerst kunt voorbereiden.
        </p>
        <p>
          <strong>Contact met Haruna</strong>
        </p>
        <ul>
          <li>
            <strong>Website:</strong>{' '}
            <a
              href="https://www.haruna.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-warm-orange hover:underline"
            >
              Haruna.nl
            </a>
          </li>
          <li>
            <strong>E-mail:</strong>{' '}
            <a href="mailto:contact@haruna.nl" className="text-warm-orange hover:underline">
              contact@haruna.nl
            </a>
          </li>
          <li>
            <strong>Telefoon:</strong>{' '}
            <a href="tel:+31786849331" className="text-warm-orange hover:underline">
              078 684 93 31
            </a>
          </li>
        </ul>
        <p>Wil je eerst zelf berekenen wat je ongeveer kunt lenen?</p>
        <HypotheekCta label="Bereken je maximale hypotheek als zzp'er →" />
        <HypotheekHubLink />
        <p>Meer lezen over hypotheken als zzp&apos;er:</p>
        <ul>
          <li>
            <Link href="/tools/hypotheek-zzp" className="text-warm-orange hover:underline">
              Hypotheek voor zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-berekenen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek berekenen als zzp&apos;er
            </Link>
          </li>
          <li>
            <Link href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/winst-uit-onderneming-voor-hypotheek" className="text-warm-orange hover:underline">
              Winst uit onderneming voor hypotheek
            </Link>
          </li>
          <li>
            <Link href="/blogs/jaarcijfers-nodig-voor-hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Jaarcijfers nodig voor hypotheek als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-zzp-zonder-3-jaar-cijfers" className="text-warm-orange hover:underline">
              Hypotheek zzp zonder 3 jaar cijfers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hoe-lang-zzper-zijn-voor-hypotheek" className="text-warm-orange hover:underline">
              Hoe lang moet je zzp&apos;er zijn voor een hypotheek?
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-voor-startende-zzpers" className="text-warm-orange hover:underline">
              Hypotheek voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/hypotheek-met-wisselend-inkomen-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek met wisselend inkomen als zzp&apos;er
            </Link>
          </li>
        </ul>
      </>
    ),
  },
  ...aovArticles,
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