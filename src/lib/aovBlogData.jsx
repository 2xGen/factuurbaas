import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import InsifyAovCta from '@/components/aov/InsifyAovCta';

const AOV_PILLAR_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Arbeidsongeschiktheidsverzekering%20zzp.jpg',
  alt: "Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?",
};

const AovCta = ({
  href = '/tools/aov-berekenen-zzp',
  label = "Bereken je benodigde AOV-dekking →",
}) => (
  <div className="my-8 text-center">
    <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
      <Link href={href}>{label}</Link>
    </Button>
  </div>
);

/** AOV cluster articles */
export const aovArticles = [
  {
    slug: 'aov-zzp',
    relatedSlugs: [
      'wat-kost-een-aov-voor-zzpers',
      'aov-voor-startende-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
    ],
    title: 'Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?',
    metaTitle: 'AOV zzp: heb je een arbeidsongeschiktheidsverzekering nodig?',
    excerpt:
      "Heb je als zzp'er een AOV nodig? Lees wat een arbeidsongeschiktheidsverzekering kost, wat je verzekert en welke alternatieven er zijn.",
    keywords:
      "aov zzp, arbeidsongeschiktheidsverzekering zzp, aov zzp nodig, aov voor zzp'ers, arbeidsongeschiktheidsverzekering zzp nodig, aov zzp verplicht, aov zzp kosten, aov zzp premie, arbeidsongeschiktheidsverzekering zelfstandige, inkomen verzekeren zzp, zzp arbeidsongeschiktheidsverzekering, aov berekenen zzp, aov zzp vergelijken, verplichte aov zzp",
    image: AOV_PILLAR_IMAGE,
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Is een AOV verplicht voor zzp'ers?",
        answer:
          'Nee. In september 2026 is een AOV nog niet verplicht. Er ligt wel een wetsvoorstel voor een verplichte basisverzekering voor zelfstandigen. De definitieve wetgeving en invoeringsdatum staan nog niet vast.',
      },
      {
        question: "Wat kost een AOV voor een zzp'er?",
        answer:
          'Dat verschilt per ondernemer. Leeftijd, beroep, verzekerd bedrag, wachttijd en andere voorwaarden hebben invloed op de premie. KVK noemt momenteel vaak ongeveer €100 tot €300 per maand, maar individuele premies kunnen daarvan afwijken.',
      },
      {
        question: 'Kan ik mezelf verzekeren tegen arbeidsongeschiktheid zonder AOV?',
        answer:
          'Ja. Je kunt bijvoorbeeld zelf een financiële buffer opbouwen of gebruikmaken van een broodfonds of andere voorziening. De overheid noemt verschillende mogelijkheden voor zelfstandigen.',
      },
      {
        question: "Wat gebeurt er als ik als zzp'er ziek word zonder AOV?",
        answer:
          'Je hebt als zzp\'er niet automatisch dezelfde inkomensbescherming als een werknemer. Je zult daarom zelf moeten zorgen voor een inkomen of financiële buffer, bijvoorbeeld via spaargeld, een verzekering of een andere voorziening.',
      },
      {
        question: 'Is een AOV-premie aftrekbaar?',
        answer:
          'Een premie voor een particuliere AOV is in veel gevallen fiscaal aftrekbaar als uitgave voor andere inkomensvoorzieningen. De exacte fiscale behandeling hangt af van de verzekering en je persoonlijke situatie.',
      },
      {
        question: "Wat is de verplichte AOV voor zzp'ers?",
        answer:
          'De overheid werkt aan een verplichte basisverzekering arbeidsongeschiktheid voor zelfstandigen. Het huidige voorstel voorziet onder meer in een wachttijd van twee jaar en een uitkering tot maximaal het minimumloon. De plannen zijn nog niet definitief.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er ben je zelf verantwoordelijk voor je inkomen als je door ziekte of een
          ongeval niet meer kunt werken. In loondienst ben je bij langdurige arbeidsongeschiktheid
          in veel gevallen verzekerd via de werknemersverzekeringen. Als zelfstandige heb je die
          automatische inkomensbescherming niet.
        </p>
        <p>
          Een <strong>arbeidsongeschiktheidsverzekering (AOV)</strong> kan daarom een belangrijk
          onderdeel zijn van je financiële planning. Maar heb je als zzp&apos;er daadwerkelijk een
          AOV nodig? En hoeveel inkomen zou je dan moeten verzekeren?
        </p>
        <p>
          Dat hangt vooral af van hoeveel financiële ruimte je zelf hebt, hoe afhankelijk je bent
          van je inkomen en hoe groot het risico is dat je wilt dragen.
        </p>

        <aside className="my-8 rounded-xl border border-slate-200 bg-slate-50 p-5 sm:p-6 not-prose">
          <p className="font-heading text-base font-semibold text-deep-blue sm:text-lg">
            Bereken hoeveel inkomen je als zzp&apos;er zou moeten opvangen bij arbeidsongeschiktheid
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Gebruik de{' '}
            <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
              AOV-tool voor zzp&apos;ers
            </Link>{' '}
            om je situatie in kaart te brengen.
          </p>
        </aside>

        <h2>Wat is een AOV?</h2>
        <p>
          Een arbeidsongeschiktheidsverzekering is een verzekering die je inkomen kan aanvullen als
          je door ziekte of een ongeval niet of minder kunt werken.
        </p>
        <p>Je spreekt bij het afsluiten onder andere af:</p>
        <ul>
          <li>welk bedrag je maximaal wilt verzekeren;</li>
          <li>wanneer de uitkering begint;</li>
          <li>hoe lang de uitkering kan doorlopen;</li>
          <li>onder welke voorwaarden je arbeidsongeschikt bent;</li>
          <li>tot welke leeftijd je verzekerd bent.</li>
        </ul>
        <p>
          De precieze dekking verschilt per verzekeraar en verzekering. Daarom is niet alleen de
          premie belangrijk, maar vooral wat er daadwerkelijk wordt uitgekeerd en onder welke
          voorwaarden.
        </p>

        <h2>Is een AOV voor zzp&apos;ers verplicht?</h2>
        <p>
          <strong>Op dit moment niet.</strong>
        </p>
        <p>
          Als zzp&apos;er bepaal je momenteel zelf hoe je het risico van arbeidsongeschiktheid
          opvangt. Dat kan bijvoorbeeld met een particuliere AOV, eigen spaargeld, een broodfonds of
          een andere voorziening.
        </p>
        <p>
          Er wordt wel gewerkt aan een verplichte basisverzekering voor arbeidsongeschiktheid van
          zelfstandigen. Het gaat om de zogenoemde Basisverzekering arbeidsongeschiktheid
          zelfstandigen (BAZ).
        </p>
        <p>
          De plannen zijn nog geen definitieve wet. Volgens het huidige voorstel zou er onder meer
          een wachttijd van twee jaar gelden en zou de uitkering maximaal tot het niveau van het
          minimumloon lopen. De overheid noemt momenteel een premie van 5,4% van de winst, met een
          maximum van €171 bruto per maand op basis van de huidige berekeningen. Deze bedragen en
          voorwaarden kunnen nog veranderen.
        </p>
        <p>Daarom is het belangrijk om onderscheid te maken tussen:</p>
        <p>
          <strong>De situatie nu:</strong> een AOV is niet verplicht.
        </p>
        <p>
          <strong>De toekomstige situatie:</strong> er zijn plannen voor een verplichte
          basisverzekering, maar de definitieve regels en invoeringsdatum staan nog niet vast. KVK
          verwacht op dit moment invoering rond 2030.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
            AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Heb je als zzp&apos;er een AOV nodig?</h2>
        <p>Er is geen antwoord dat voor iedere zzp&apos;er geldt.</p>
        <p>De belangrijkste vraag is eigenlijk:</p>
        <p>
          <strong>Wat gebeurt er met mijn financiële situatie als ik morgen niet meer kan werken?</strong>
        </p>
        <p>Kijk daarbij naar vijf dingen.</p>

        <h3>1. Hoe hoog zijn je vaste lasten?</h3>
        <p>Denk aan:</p>
        <ul>
          <li>hypotheek of huur;</li>
          <li>energie;</li>
          <li>boodschappen;</li>
          <li>verzekeringen;</li>
          <li>auto;</li>
          <li>abonnementen;</li>
          <li>zakelijke verplichtingen;</li>
          <li>eventuele kosten voor kinderen.</li>
        </ul>
        <p>
          Hoe hoger je vaste maandelijkse lasten, hoe groter het bedrag dat je bij langdurige
          arbeidsongeschiktheid moet kunnen opvangen.
        </p>

        <h3>2. Hoeveel spaargeld heb je?</h3>
        <p>Een financiële buffer kan een periode zonder inkomen opvangen.</p>
        <p>
          Heb je bijvoorbeeld €30.000 aan vrij beschikbaar spaargeld, dan kun je een tijdelijke
          inkomensuitval langer zelf dragen dan wanneer je nauwelijks spaargeld hebt.
        </p>
        <p>
          Maar let op: spaargeld is niet hetzelfde als een onbeperkte voorziening. Bij langdurige
          arbeidsongeschiktheid kan je inkomen jarenlang lager zijn. Bovendien kan een deel van je
          spaargeld nodig zijn voor andere onverwachte uitgaven.
        </p>

        <h3>3. Heb je een partner met inkomen?</h3>
        <p>
          Het inkomen van een partner kan een belangrijk onderdeel van je financiële vangnet zijn.
        </p>
        <p>
          Als je partner voldoende verdient om de vaste lasten grotendeels te blijven betalen, is de
          financiële noodzaak voor een grote AOV mogelijk kleiner. Dat betekent niet automatisch dat
          een AOV overbodig is. Het betekent vooral dat je totale huishoudelijke financiële situatie
          moet worden bekeken.
        </p>

        <h3>4. Hoe afhankelijk ben je van je eigen inkomen?</h3>
        <p>
          Voor sommige ondernemers valt het inkomen vrijwel volledig weg zodra ze niet meer kunnen
          werken.
        </p>
        <p>Denk bijvoorbeeld aan een zelfstandige:</p>
        <ul>
          <li>zonder personeel;</li>
          <li>die op uurbasis werkt;</li>
          <li>die zelf alle opdrachten uitvoert;</li>
          <li>die geen passief inkomen heeft;</li>
          <li>en wiens bedrijf nauwelijks kan doordraaien zonder de eigenaar.</li>
        </ul>
        <p>
          In zo&apos;n situatie kan arbeidsongeschiktheid direct gevolgen hebben voor het inkomen
          van het huishouden.
        </p>

        <h3>5. Hoe lang kun je zonder inkomen?</h3>
        <p>Dit is misschien wel de belangrijkste vraag.</p>
        <p>
          Een korte periode zonder inkomen kun je mogelijk zelf opvangen. Een periode van meerdere
          jaren is iets heel anders.
        </p>
        <p>
          Maak daarom niet alleen een berekening voor één of drie maanden. Kijk ook naar wat er
          gebeurt als je een jaar of langer niet volledig kunt werken.
        </p>

        <h2>Hoeveel kost een AOV voor een zzp&apos;er?</h2>
        <p>De premie verschilt sterk per persoon en verzekering.</p>
        <p>Factoren die onder andere invloed hebben op de premie zijn:</p>
        <ul>
          <li>je leeftijd;</li>
          <li>je beroep;</li>
          <li>het verzekerde bedrag;</li>
          <li>de gekozen wachttijd;</li>
          <li>de eindleeftijd;</li>
          <li>de voorwaarden waaronder je arbeidsongeschikt bent;</li>
          <li>de duur van de uitkering.</li>
        </ul>
        <p>
          Een ondernemer met fysiek zwaar werk kan bijvoorbeeld met een ander risico te maken hebben
          dan iemand die voornamelijk achter een computer werkt.
        </p>
        <p>
          Ook de gekozen wachttijd maakt verschil. Als je bijvoorbeeld een langere periode zelf kunt
          overbruggen voordat de verzekering uitkeert, kan dat invloed hebben op de premie.
        </p>
        <p>Daarom heeft het weinig zin om alleen te kijken naar een gemiddelde AOV-premie.</p>
        <p>
          De relevante vraag is:{' '}
          <strong>Hoeveel kost de bescherming die ik daadwerkelijk nodig heb?</strong>
        </p>
        <p>
          Lees verder:{' '}
          <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Hoeveel moet je verzekeren?</h2>
        <p>Je hoeft niet per se je volledige huidige inkomen te verzekeren.</p>
        <p>
          Kijk eerst naar het bedrag dat je maandelijks nodig hebt om je financiële verplichtingen
          te betalen.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Maandelijkse behoefte</th>
                <th className="py-2 text-right font-medium">Bedrag</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Wonen</td>
                <td className="py-2 text-right">€1.200</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Boodschappen</td>
                <td className="py-2 text-right">€400</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Energie en verzekeringen</td>
                <td className="py-2 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Auto en vervoer</td>
                <td className="py-2 text-right">€250</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Overige vaste lasten</td>
                <td className="py-2 text-right">€350</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Totaal</td>
                <td className="py-2 text-right font-semibold">€2.500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          In dit voorbeeld is de vraag niet automatisch of je €2.500 aan AOV-uitkering nodig hebt.
        </p>
        <p>
          Misschien heb je daarnaast spaargeld, partnerinkomen of andere inkomsten. Aan de andere
          kant kunnen belastingen en andere financiële verplichtingen een rol spelen.
        </p>
        <p>
          Het gaat daarom om het <strong>inkomensgat</strong> dat je zelf niet kunt opvangen.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/hoeveel-aov-heb-ik-nodig" className="text-warm-orange hover:underline">
            Hoeveel AOV heb ik nodig als zzp&apos;er?
          </Link>{' '}
          of{' '}
          <Link href="/blogs/aov-berekenen-voor-zzpers" className="text-warm-orange hover:underline">
            AOV berekenen voor zzp&apos;ers
          </Link>
        </p>

        <h2>Bereken je financiële risico</h2>
        <p>
          Wil je eerst zelf bekijken hoeveel inkomen je nodig zou hebben als je arbeidsongeschikt
          raakt? Gebruik daarvoor onze gratis tool:
        </p>
        <AovCta href="/tools/aov-zzp" label="AOV berekenen voor zzp'ers →" />
        <InsifyAovCta />
        <p>
          Met de tool kun je je financiële situatie als zzp&apos;er in kaart brengen en nadenken
          over hoeveel inkomen je bij arbeidsongeschiktheid zou moeten kunnen opvangen.
        </p>
        <p>
          De uitkomst is geen persoonlijk verzekeringsadvies. Het is vooral een hulpmiddel om je
          eigen situatie beter te begrijpen.
        </p>

        <h2>Wat als je geen AOV wilt?</h2>
        <p>
          Een AOV is niet de enige manier om het risico van arbeidsongeschiktheid op te vangen.
        </p>
        <p>Mogelijke alternatieven of aanvullingen zijn bijvoorbeeld:</p>

        <h3>Eigen spaargeld</h3>
        <p>
          Je kunt ervoor kiezen om zelf een grote financiële buffer op te bouwen. Het voordeel is
          dat je het geld zelf houdt zolang je het niet nodig hebt. Het nadeel is dat je een
          aanzienlijk bedrag nodig kunt hebben als je langdurig niet kunt werken.
        </p>

        <h3>Broodfonds of schenkkring</h3>
        <p>
          Een broodfonds of andere schenkkring kan ondernemers helpen om gedurende een beperkte
          periode inkomen op te vangen. Dit is niet hetzelfde als een volledige AOV. De voorwaarden
          en maximale uitkeringsduur verschillen.
        </p>

        <h3>Combinatie van oplossingen</h3>
        <p>
          Je hoeft ook niet noodzakelijk één oplossing te kiezen. Je kunt bijvoorbeeld een
          financiële buffer gebruiken voor de eerste periode en daarnaast een AOV afsluiten met een
          langere wachttijd. Op die manier hoeft een verzekering niet ieder tijdelijk inkomensverlies
          op te vangen.
        </p>

        <h2>Wat is een wachttijd bij een AOV?</h2>
        <p>
          De wachttijd is de periode tussen het moment waarop je arbeidsongeschikt raakt en het
          moment waarop de verzekering begint uit te keren.
        </p>
        <p>Een langere wachttijd kan de premie beïnvloeden.</p>
        <p>
          Heb je bijvoorbeeld voldoende spaargeld om een langere periode zonder inkomen te
          overbruggen, dan kun je ervoor kiezen om niet vanaf de eerste weken verzekerd te zijn.
        </p>
        <p>Dat is een afweging tussen:</p>
        <p>
          <strong>lagere verzekeringskosten ↔ meer eigen financieel risico.</strong>
        </p>
        <p>
          Welke wachttijd passend is, hangt af van je financiële buffer en de voorwaarden van de
          verzekering.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
            AOV met korte wachttijd
          </Link>{' '}
          of{' '}
          <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
            AOV met lange wachttijd
          </Link>
        </p>

        <h2>Waar moet je op letten bij een AOV?</h2>
        <p>Kijk niet alleen naar de premie. Let ook op:</p>

        <h3>Wanneer ben je volgens de polis arbeidsongeschikt?</h3>
        <p>
          De definitie van arbeidsongeschiktheid kan grote gevolgen hebben voor wanneer je recht
          hebt op een uitkering.
        </p>

        <h3>Hoe hoog is de uitkering?</h3>
        <p>
          Een goedkope verzekering met een lage uitkering kan uiteindelijk onvoldoende inkomen
          opleveren.
        </p>

        <h3>Hoe lang krijg je een uitkering?</h3>
        <p>Controleer de maximale uitkeringsduur en de eindleeftijd.</p>

        <h3>Hoe lang is de wachttijd?</h3>
        <p>
          Een wachttijd van bijvoorbeeld één jaar betekent dat je zelf een financieel vangnet nodig
          hebt voor die periode.
        </p>

        <h3>Hoe wordt je beroep beoordeeld?</h3>
        <p>
          Bij sommige verzekeringen speelt je beroep een belangrijke rol bij de beoordeling van
          arbeidsongeschiktheid.
        </p>

        <h3>Wat zijn de uitsluitingen?</h3>
        <p>
          Lees de polisvoorwaarden goed. Niet iedere oorzaak of situatie hoeft op dezelfde manier
          verzekerd te zijn.
        </p>
        <p>
          Een AOV is maatwerk en de exacte voorwaarden verschillen per verzekeraar. KVK adviseert
          daarom om de voorwaarden goed te bekijken en bij twijfel een verzekeringsadviseur te
          raadplegen.
        </p>

        <h2>Is een AOV aftrekbaar?</h2>
        <p>
          De premie van een particuliere arbeidsongeschiktheidsverzekering kan in veel gevallen
          fiscaal aftrekbaar zijn als uitgave voor andere inkomensvoorzieningen.
        </p>
        <p>
          De precieze fiscale behandeling hangt af van de soort verzekering en je persoonlijke
          situatie. Kijk daarom voor je aangifte naar de actuele regels van de Belastingdienst of
          vraag je boekhouder of belastingadviseur hoe de premie in jouw situatie wordt verwerkt.
        </p>

        <h2>AOV voor een startende zzp&apos;er</h2>
        <p>
          Ben je net gestart als zzp&apos;er? Dan kan een AOV extra aandacht verdienen.
        </p>
        <p>
          Als je nog weinig spaargeld hebt opgebouwd en je inkomen volledig afhankelijk is van je
          onderneming, kan langdurige arbeidsongeschiktheid relatief grote financiële gevolgen
          hebben.
        </p>
        <p>
          Aan de andere kant kan een startende ondernemer ook te maken hebben met een beperkt
          budget.
        </p>
        <p>Het is daarom verstandig om niet alleen te kijken naar de vraag:</p>
        <blockquote>
          <p>Kan ik de premie betalen?</p>
        </blockquote>
        <p>Maar ook naar:</p>
        <blockquote>
          <p>Kan ik het risico betalen als ik géén verzekering heb?</p>
        </blockquote>
        <p>
          Lees verder:{' '}
          <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
            AOV voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>AOV en je hypotheek</h2>
        <p>
          Heb je een hypotheek of wil je binnenkort een woning kopen? Dan is je inkomensbescherming
          extra relevant.
        </p>
        <p>
          Een hypotheek loopt vaak tientallen jaren. Als je inkomen als zzp&apos;er volledig wegvalt
          door arbeidsongeschiktheid, blijven je woonlasten in principe gewoon bestaan.
        </p>
        <p>
          Een AOV kan daarom onderdeel zijn van je bredere financiële planning naast je hypotheek,
          pensioen en spaargeld.
        </p>
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hypotheek-als-zzper" className="text-warm-orange hover:underline">
              Hypotheek als zzp&apos;er: hoe werkt het?
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/hoeveel-hypotheek-kan-ik-krijgen-als-zzper"
              className="text-warm-orange hover:underline"
            >
              Hoeveel hypotheek kan ik krijgen als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link
              href="/blogs/welk-inkomen-telt-voor-hypotheek-als-zzper"
              className="text-warm-orange hover:underline"
            >
              Welk inkomen telt voor een hypotheek als zzp&apos;er?
            </Link>
          </li>
        </ul>

        <h2>Dus: heb je als zzp&apos;er een AOV nodig?</h2>
        <p>Niet iedere zzp&apos;er heeft dezelfde financiële situatie.</p>
        <p>De vraag is vooral hoeveel risico je zelf kunt en wilt dragen.</p>
        <p>Een AOV kan interessant zijn als:</p>
        <ul>
          <li>je inkomen grotendeels afhankelijk is van je eigen arbeid;</li>
          <li>je weinig financiële reserves hebt;</li>
          <li>je hoge vaste lasten hebt;</li>
          <li>je huishouden sterk afhankelijk is van jouw inkomen;</li>
          <li>je langdurige arbeidsongeschiktheid niet zelf kunt opvangen.</li>
        </ul>
        <p>
          Een eigen financiële buffer kan juist een grotere rol spelen als je veel spaargeld hebt,
          lage vaste lasten hebt of andere inkomstenbronnen hebt.
        </p>
        <p>Je kunt ook verschillende oplossingen combineren.</p>
        <p>
          <strong>
            Begin daarom niet met de vraag welke AOV je moet kopen. Begin met de vraag hoeveel
            inkomen je nodig hebt als je niet meer kunt werken.
          </strong>
        </p>

        <h3>Bereken je AOV-behoefte</h3>
        <p>Wil je dat eerst concreet maken?</p>
        <AovCta href="/tools/aov-zzp" label="Gebruik de AOV-tool voor zzp'ers →" />
        <p>
          Daarna kun je beter beoordelen hoeveel van het risico je zelf kunt dragen en welk deel je
          eventueel wilt verzekeren.
        </p>
        <AovCta label="Of ga direct naar de AOV-calculator →" />

        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'wat-kost-een-aov-voor-zzpers',
    relatedSlugs: [
      'aov-zzp',
      'aov-voor-startende-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-geld-apart-belasting-zzper',
    ],
    title: "Wat kost een AOV voor zzp'ers?",
    metaTitle: "Wat kost een AOV voor zzp'ers? | Premie berekenen",
    excerpt:
      "Wat kost een AOV voor zzp'ers? Bekijk wat de premie bepaalt, wat je ongeveer per maand betaalt en hoe je jouw benodigde dekking berekent.",
    keywords:
      "wat kost een aov voor zzp'ers, aov zzp kosten, aov zzp premie, arbeidsongeschiktheidsverzekering zzp kosten, aov premie zzp, wat kost een arbeidsongeschiktheidsverzekering, aov berekenen zzp, aov zzp per maand, goedkope aov zzp, aov kosten zelfstandige",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Wat%20kost%20een%20AOV%20voor%20zzp.jpg',
      alt: "Wat kost een AOV voor zzp'ers? Premie en factoren uitgelegd.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Wat kost een AOV gemiddeld voor een zzp'er?",
        answer:
          'KVK noemt momenteel ongeveer €100 tot €300 per maand als indicatie. De daadwerkelijke premie verschilt per persoon en hangt onder andere af van leeftijd, beroep, verzekerd bedrag, wachttijd en looptijd.',
      },
      {
        question: 'Wat kost een AOV per jaar?',
        answer:
          'Bij een premie van €100 per maand betaal je €1.200 per jaar. Bij €200 per maand is dat €2.400 per jaar en bij €300 per maand €3.600 per jaar.',
      },
      {
        question: "Is een AOV voor een zzp'er aftrekbaar?",
        answer:
          'Een particuliere AOV-premie is in veel gevallen aftrekbaar in de inkomstenbelasting als uitgave voor andere inkomensvoorzieningen. De exacte fiscale behandeling hangt af van je situatie en de verzekering.',
      },
      {
        question: 'Wordt een AOV duurder als je ouder bent?',
        answer:
          'Over het algemeen wel. Leeftijd is één van de factoren waarmee verzekeraars de premie bepalen.',
      },
      {
        question: 'Is een AOV duurder voor een zwaar beroep?',
        answer:
          'Dat kan. Verzekeraars beoordelen het risico van je beroep. Een beroep met een hoger risico op arbeidsongeschiktheid kan daardoor een hogere premie opleveren.',
      },
      {
        question: 'Kun je een AOV goedkoper maken?',
        answer:
          'Een langere wachttijd of een lager verzekerd bedrag kan de premie verlagen. Je draagt daarmee wel meer van het risico zelf.',
      },
      {
        question: 'Is een goedkope AOV de beste keuze?',
        answer:
          'Niet noodzakelijk. Kijk naast de premie ook naar de dekking, wachttijd, eindleeftijd, uitkeringsduur en voorwaarden.',
      },
    ],
    content: (
      <>
        <p>
          Wat kost een <strong>arbeidsongeschiktheidsverzekering (AOV)</strong> voor een zzp&apos;er?
          Dat is een logische vraag als je je inkomen wilt verzekeren, maar er is geen vaste
          AOV-premie voor iedere zelfstandige.
        </p>
        <p>
          De premie hangt onder andere af van je beroep, leeftijd, het bedrag dat je wilt
          verzekeren, de wachttijd en de duur van de uitkering. KVK noemt momenteel een bedrag van
          ongeveer <strong>€100 tot €300 per maand</strong> als veelvoorkomende bandbreedte, maar
          individuele premies kunnen daar flink van afwijken.
        </p>
        <p>Wil je eerst weten hoeveel inkomen je eigenlijk zou moeten kunnen opvangen?</p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <InsifyAovCta />

        <h2>Wat kost een AOV gemiddeld?</h2>
        <p>
          Als grove indicatie kun je voor een AOV als zzp&apos;er denken aan ongeveer{' '}
          <strong>€100 tot €300 per maand</strong>.
        </p>
        <p>
          Dat is alleen een richtlijn. De premie kan lager of hoger uitvallen afhankelijk van jouw
          situatie en de gekozen dekking. KVK noemt onder meer je beroep, leeftijd, het verzekerde
          bedrag, de wachttijd en de looptijd als factoren die invloed hebben op de premie.
        </p>
        <p>
          Een zelfstandige die €2.000 per maand wil verzekeren met een lange wachttijd kan
          bijvoorbeeld een heel andere premie krijgen dan een ondernemer die €4.000 per maand wil
          verzekeren en vanaf een korte wachttijd een uitkering wil ontvangen.
        </p>
        <p>
          Daarom is <strong>&quot;wat kost een AOV?&quot;</strong> eigenlijk niet de eerste vraag die
          je moet beantwoorden.
        </p>
        <p>De betere vraag is:</p>
        <blockquote>
          <p>
            <strong>Hoeveel inkomen wil ik verzekeren en hoeveel risico kan ik zelf dragen?</strong>
          </p>
        </blockquote>

        <h2>Waar wordt de premie van een AOV door bepaald?</h2>
        <p>De verzekeraar kijkt naar verschillende factoren.</p>

        <h3>1. Je beroep</h3>
        <p>Je beroep heeft grote invloed op het risico dat een verzekeraar inschat.</p>
        <p>
          Werk je voornamelijk achter een computer, dan kan het risico anders worden beoordeeld dan
          wanneer je dagelijks zwaar lichamelijk werk doet.
        </p>
        <p>
          Een bouwvakker en een boekhouder met hetzelfde inkomen hoeven daarom niet dezelfde
          AOV-premie te betalen. KVK noemt het beroep expliciet als een belangrijke factor bij het
          bepalen van de premie.
        </p>

        <h3>2. Je leeftijd</h3>
        <p>Ook je leeftijd speelt een rol.</p>
        <p>
          Over het algemeen geldt dat een AOV duurder wordt naarmate je ouder bent wanneer je de
          verzekering afsluit.
        </p>
        <p>
          Daarom kan dezelfde dekking voor een 30-jarige een andere premie opleveren dan voor een
          50-jarige.
        </p>

        <h3>3. Het bedrag dat je wilt verzekeren</h3>
        <p>
          Hoe hoger de maandelijkse uitkering die je wilt ontvangen bij arbeidsongeschiktheid, hoe
          hoger de premie doorgaans is.
        </p>
        <p>
          Stel dat je €2.000 per maand wilt verzekeren. Dan betaal je doorgaans minder dan wanneer
          je €4.000 per maand wilt verzekeren.
        </p>
        <p>
          Maar je hoeft niet automatisch je volledige huidige inkomen te verzekeren. Het kan
          verstandiger zijn om eerst te bepalen hoeveel geld je daadwerkelijk nodig hebt om je vaste
          lasten en levensonderhoud te betalen.
        </p>

        <h3>4. De wachttijd</h3>
        <p>
          Bij een AOV kun je meestal kiezen hoe lang je zelf inkomen moet kunnen missen voordat de
          verzekering gaat uitkeren.
        </p>
        <p>
          Dit wordt ook wel de <strong>wachttijd</strong> of <strong>eigenrisicoperiode</strong>{' '}
          genoemd.
        </p>
        <p>
          Een langere wachttijd betekent doorgaans een lagere premie. Je neemt dan zelf meer van het
          financiële risico op je.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>1 maand zelf opvangen → kortere wachttijd;</li>
          <li>1 jaar zelf opvangen → langere wachttijd.</li>
        </ul>
        <p>
          Een langere wachttijd kan interessant zijn als je voldoende spaargeld hebt om die periode
          te overbruggen.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
            AOV met korte wachttijd
          </Link>{' '}
          of{' '}
          <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
            AOV met lange wachttijd
          </Link>
        </p>

        <h3>5. De eindleeftijd en uitkeringsduur</h3>
        <p>Je kunt ook kijken naar hoe lang je verzekerd wilt zijn.</p>
        <p>
          Een verzekering die onder bepaalde voorwaarden tot een hogere leeftijd uitkeert, kan
          duurder zijn dan een verzekering met een kortere looptijd.
        </p>
        <p>
          Let daarom niet alleen op de maandpremie. Een goedkope AOV kan bijvoorbeeld een korte
          uitkeringsduur of een lagere dekking hebben.
        </p>

        <h3>6. De voorwaarden van de verzekering</h3>
        <p>Twee AOV&apos;s met ongeveer dezelfde premie kunnen inhoudelijk behoorlijk verschillen.</p>
        <p>Kijk daarom ook naar:</p>
        <ul>
          <li>wanneer je recht hebt op een uitkering;</li>
          <li>hoe arbeidsongeschiktheid wordt vastgesteld;</li>
          <li>hoeveel procent arbeidsongeschiktheid nodig is;</li>
          <li>welke werkzaamheden worden meegenomen;</li>
          <li>hoe lang de uitkering loopt;</li>
          <li>welke uitsluitingen gelden;</li>
          <li>of de uitkering wordt geïndexeerd.</li>
        </ul>
        <p>De voorwaarden bepalen uiteindelijk wat je voor je premie terugkrijgt.</p>

        <h2>Voorbeeld: wat kan een AOV kosten?</h2>
        <p>Stel dat twee zzp&apos;ers allebei €3.000 per maand willen verzekeren.</p>
        <p>
          <strong>Zzp&apos;er A</strong>
        </p>
        <ul>
          <li>30 jaar</li>
          <li>administratief werk</li>
          <li>lange wachttijd</li>
          <li>uitkering tot pensioen</li>
        </ul>
        <p>
          <strong>Zzp&apos;er B</strong>
        </p>
        <ul>
          <li>50 jaar</li>
          <li>fysiek zwaar beroep</li>
          <li>korte wachttijd</li>
          <li>uitkering tot pensioen</li>
        </ul>
        <p>
          Hoewel het verzekerde bedrag hetzelfde is, kunnen de premies aanzienlijk verschillen. Dat
          komt doordat het risico en de gekozen voorwaarden niet hetzelfde zijn.
        </p>
        <p>Daarom kun je niet simpelweg zeggen:</p>
        <blockquote>
          <p>&quot;Een AOV kost voor een zzp&apos;er €200 per maand.&quot;</p>
        </blockquote>
        <p>
          €200 kan voor de ene ondernemer een realistische premie zijn en voor een andere ondernemer
          helemaal niet.
        </p>

        <h2>Wat kost een AOV per maand?</h2>
        <p>
          Als je vooral zoekt naar een snelle indicatie, kun je momenteel grofweg rekening houden
          met:
        </p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium text-right">AOV-premie</th>
                <th className="py-2 text-right font-medium">Per jaar</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['€100 per maand', '€1.200'],
                ['€150 per maand', '€1.800'],
                ['€200 per maand', '€2.400'],
                ['€250 per maand', '€3.000'],
                ['€300 per maand', '€3.600'],
              ].map(([month, year]) => (
                <tr key={month} className="border-b border-slate-100">
                  <td className="py-2 pr-4 text-right">{month}</td>
                  <td className="py-2 text-right font-medium">{year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Dit zijn alleen rekenvoorbeelden. Ze zeggen niets over de premie die jij persoonlijk zult
          betalen.
        </p>
        <p>
          De daadwerkelijke premie moet worden berekend op basis van je beroep, leeftijd, dekking en
          gekozen voorwaarden. KVK noemt €100–€300 per maand als een veelvoorkomende indicatie.
        </p>

        <h2>Wat kost een AOV netto?</h2>
        <p>
          Een AOV-premie is een privé-uitgave, maar een premie voor een particuliere AOV is in veel
          gevallen aftrekbaar in je aangifte inkomstenbelasting als uitgave voor andere
          inkomensvoorzieningen.
        </p>
        <p>
          Daardoor zijn je uiteindelijke kosten na belasting mogelijk lager dan de bruto premie.
        </p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>Bruto premie: €200 per maand</strong>
        </p>
        <p>Je betaalt dan €2.400 per jaar aan premie.</p>
        <p>
          Het bedrag dat je uiteindelijk netto kost, hangt vervolgens af van je persoonlijke fiscale
          situatie.
        </p>
        <p>
          Gebruik daarom niet zomaar een vast percentage om je netto premie te berekenen. Je
          belastingtarief en persoonlijke omstandigheden bepalen wat het fiscale voordeel
          daadwerkelijk is.
        </p>

        <h2>Is een AOV van €100 per maand goedkoop?</h2>
        <p>Niet per se.</p>
        <p>De premie alleen zegt weinig over de kwaliteit van een AOV.</p>
        <p>Een verzekering van €100 per maand kan bijvoorbeeld:</p>
        <ul>
          <li>een lager verzekerd bedrag hebben;</li>
          <li>een lange wachttijd hebben;</li>
          <li>een beperkte uitkeringsduur hebben;</li>
          <li>andere voorwaarden hebben;</li>
          <li>minder ruime dekking bieden.</li>
        </ul>
        <p>
          Een verzekering van €250 per maand kan daardoor voor een bepaalde ondernemer juist een
          heel andere dekking bieden.
        </p>
        <p>
          Vergelijk daarom altijd <strong>premie én voorwaarden</strong>.
        </p>

        <h2>Kun je de AOV goedkoper maken?</h2>
        <p>Ja, er zijn verschillende manieren waarop de premie kan worden beïnvloed.</p>

        <h3>Kies een langere wachttijd</h3>
        <p>
          Als je bijvoorbeeld zelf een jaar zonder AOV-uitkering kunt overbruggen, kun je een
          langere wachttijd overwegen.
        </p>
        <p>Daar staat tegenover dat je dat jaar financieel zelf moet kunnen opvangen.</p>

        <h3>Verzeker alleen wat je nodig hebt</h3>
        <p>Je hoeft niet automatisch je volledige omzet of winst te verzekeren.</p>
        <p>Kijk naar je persoonlijke maandelijkse behoefte.</p>
        <p>
          Heb je bijvoorbeeld €2.500 nodig om je huishouden draaiende te houden, dan is het niet
          automatisch logisch om €5.000 per maand te verzekeren.
        </p>

        <h3>Kijk naar je eindleeftijd</h3>
        <p>Ook de eindleeftijd kan invloed hebben op de premie.</p>
        <p>Controleer wel of een lagere eindleeftijd geen ongewenst inkomensgat veroorzaakt.</p>
        <p>
          Vooral bij ondernemers met een zwaar beroep is dit een aandachtspunt. KVK waarschuwt
          bijvoorbeeld dat sommige AOV&apos;s voor bepaalde zware beroepen tot een lagere leeftijd
          kunnen lopen, waardoor er een gat tot aan het pensioen kan ontstaan.
        </p>

        <h3>Vergelijk verschillende verzekeringen</h3>
        <p>Kijk niet alleen naar de laagste premie.</p>
        <p>Vergelijk ook:</p>
        <ul>
          <li>verzekerd bedrag;</li>
          <li>wachttijd;</li>
          <li>eindleeftijd;</li>
          <li>definitie van arbeidsongeschiktheid;</li>
          <li>uitkeringsduur;</li>
          <li>indexatie;</li>
          <li>uitsluitingen;</li>
          <li>medische acceptatie.</li>
        </ul>

        <h2>Wat kost een verplichte AOV?</h2>
        <p>Dit is een aparte vraag.</p>
        <p>
          <strong>In september 2026 is een AOV nog niet verplicht voor zzp&apos;ers.</strong> Er
          ligt wel een wetsvoorstel voor een verplichte basisverzekering arbeidsongeschiktheid voor
          zelfstandigen. Volgens de huidige plannen zou die naar verwachting rond 2030 kunnen worden
          ingevoerd, maar de definitieve wetgeving en voorwaarden staan nog niet vast.
        </p>
        <p>
          Volgens het huidige voorstel zou de premie maximaal ongeveer{' '}
          <strong>€171 per maand</strong> bedragen. Dat bedrag is gebaseerd op het huidige voorstel
          en kan nog veranderen. De voorgestelde basisverzekering heeft bovendien een wachttijd van
          twee jaar.
        </p>
        <p>
          Dat betekent ook dat een eventuele toekomstige verplichte basisverzekering niet automatisch
          hetzelfde is als een uitgebreide particuliere AOV.
        </p>
        <p>
          Een particuliere AOV kan bijvoorbeeld andere keuzes bieden voor het verzekerde bedrag, de
          wachttijd en de voorwaarden. Lees ook{' '}
          <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
            AOV verplicht voor zzp&apos;ers?
          </Link>{' '}
          en{' '}
          <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
            AOV zzp: heb je die nodig?
          </Link>
          .
        </p>

        <h2>Wat als je geen AOV wilt betalen?</h2>
        <p>
          Een AOV is niet de enige manier om het risico van arbeidsongeschiktheid op te vangen.
        </p>
        <p>Je kunt bijvoorbeeld werken met:</p>
        <ul>
          <li>eigen spaargeld;</li>
          <li>een schenkkring;</li>
          <li>crowdsurance;</li>
          <li>een vrijwillige verzekering via UWV als je daarvoor in aanmerking komt;</li>
          <li>een combinatie van verschillende oplossingen.</li>
        </ul>
        <p>
          KVK noemt deze mogelijkheden als alternatieven of aanvullingen op een particuliere AOV.
        </p>
        <p>
          Bij een schenkkring of crowdsurance gaat het wel om een andere vorm van bescherming dan
          een particuliere AOV. De maximale uitkeringsduur en voorwaarden verschillen bijvoorbeeld.
        </p>

        <h2>Hoeveel AOV heb je als zzp&apos;er nodig?</h2>
        <p>
          Voordat je naar een verzekeraar gaat, kun je eerst je eigen financiële behoefte berekenen.
        </p>
        <p>Begin met je maandelijkse uitgaven:</p>
        <ul>
          <li>wonen;</li>
          <li>energie;</li>
          <li>boodschappen;</li>
          <li>verzekeringen;</li>
          <li>vervoer;</li>
          <li>kinderen;</li>
          <li>abonnementen;</li>
          <li>andere vaste lasten.</li>
        </ul>
        <p>
          Trek vervolgens eventuele andere inkomsten en voorzieningen daarvan af. Het bedrag dat
          overblijft geeft een eerste indicatie van het inkomen dat je zou moeten kunnen opvangen.
        </p>

        <h3>Bereken je AOV-behoefte</h3>
        <p>Je kunt dit ook eenvoudig met onze gratis tool bekijken:</p>
        <AovCta href="/tools/aov-zzp" label="AOV berekenen voor zzp'ers →" />
        <p>
          De tool helpt je om je financiële situatie inzichtelijk te maken voordat je naar een
          verzekering gaat kijken.
        </p>

        <h2>AOV als onderdeel van je financiële planning</h2>
        <p>
          De premie van een AOV moet je niet los bekijken van de rest van je financiële situatie.
        </p>
        <p>Als zzp&apos;er moet je namelijk ook rekening houden met bijvoorbeeld:</p>
        <ul>
          <li>belasting;</li>
          <li>pensioen;</li>
          <li>financiële buffer;</li>
          <li>zakelijke verzekeringen;</li>
          <li>hypotheek of huur;</li>
          <li>andere vaste lasten.</li>
        </ul>
        <p>
          Een AOV-premie van €200 per maand betekent €2.400 per jaar. Dat is geld dat je niet aan
          iets anders kunt besteden.
        </p>
        <p>Maar het tegenovergestelde risico is ook belangrijk:</p>
        <p>
          <strong>Wat kost het je als je jarenlang geen inkomen hebt?</strong>
        </p>
        <p>De juiste vergelijking is daarom niet alleen:</p>
        <blockquote>
          <p>&quot;Kan ik €200 per maand missen?&quot;</p>
        </blockquote>
        <p>maar:</p>
        <blockquote>
          <p>&quot;Kan ik het financiële risico van arbeidsongeschiktheid zelf dragen?&quot;</p>
        </blockquote>

        <h2>Conclusie</h2>
        <p>
          Wat een AOV voor een zzp&apos;er kost, hangt sterk af van je persoonlijke situatie.
        </p>
        <p>
          Als grove indicatie noemt KVK momenteel <strong>€100 tot €300 per maand</strong>, maar je
          eigen premie kan daarbuiten vallen.
        </p>
        <p>De belangrijkste factoren zijn:</p>
        <ul>
          <li>je leeftijd;</li>
          <li>je beroep;</li>
          <li>het bedrag dat je verzekert;</li>
          <li>de wachttijd;</li>
          <li>de eindleeftijd;</li>
          <li>de uitkeringsvoorwaarden.</li>
        </ul>
        <p>Kijk daarom niet alleen naar de goedkoopste premie.</p>
        <p>
          <strong>Bepaal eerst hoeveel inkomen je nodig hebt als je niet meer kunt werken.</strong>
        </p>
        <p>
          Daarna kun je pas goed beoordelen hoeveel risico je zelf wilt dragen en welk bedrag je
          eventueel wilt verzekeren.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p>
          Meer over of je een AOV nodig hebt:{' '}
          <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
            Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
          </Link>
        </p>
        <p>
          Net gestart? Lees:{' '}
          <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
            AOV voor startende zzp&apos;ers
          </Link>
        </p>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-voor-startende-zzpers',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
    ],
    title: "AOV voor startende zzp'ers",
    metaTitle: "AOV voor startende zzp'ers: wanneer heb je die nodig?",
    excerpt:
      "Net gestart als zzp'er? Lees of een AOV verstandig is, wat je kunt verzekeren en hoe je omgaat met weinig inkomen en een kleine financiële buffer.",
    keywords:
      "aov startende zzp'er, aov voor startende zzp'ers, arbeidsongeschiktheidsverzekering startende zzp'er, aov starter zzp, aov zzp starter, arbeidsongeschiktheidsverzekering beginnende zzp'er, aov afsluiten als starter, AOV eerste jaar zzp, AOV net gestart als zzp'er, AOV zzp zonder inkomen",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20voor%20startende%20zzp.jpg',
      alt: "AOV voor startende zzp'ers: wanneer heb je die nodig?",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Kan ik als startende zzp'er een AOV afsluiten?",
        answer:
          'Ja. Ook als je onderneming nog maar net bestaat, kun je een particuliere AOV overwegen. De premie en voorwaarden hangen onder andere af van je beroep, leeftijd, verzekerd bedrag en wachttijd.',
      },
      {
        question: "Is een AOV verplicht als startende zzp'er?",
        answer:
          'Nee. In september 2026 is een AOV nog niet verplicht. Er wordt wel gewerkt aan een verplichte basisverzekering voor zelfstandigen.',
      },
      {
        question: 'Is een AOV verstandig als je net begonnen bent?',
        answer:
          'Dat hangt af van je financiële situatie. Kijk vooral naar je vaste lasten, financiële buffer, andere inkomsten en de mate waarin je inkomen afhankelijk is van je eigen arbeid.',
      },
      {
        question: 'Wat als ik nog bijna geen winst maak?',
        answer:
          'Je kunt nog steeds naar een AOV kijken, maar het is belangrijk om te bepalen hoeveel inkomen je daadwerkelijk nodig hebt en hoeveel premie je financieel kunt dragen. Een combinatie van spaargeld en andere voorzieningen kan ook een optie zijn.',
      },
      {
        question: 'Kan ik een AOV afsluiten als ik gezondheidsproblemen heb?',
        answer:
          'Dat kan afhankelijk zijn van je situatie en de verzekeraar. Bij bestaande gezondheidsproblemen kunnen acceptatie en voorwaarden anders zijn. Voor bepaalde startende zzp\'ers met een medische aandoening bestaat onder voorwaarden een vangnetverzekering.',
      },
      {
        question: 'Kan ik ook alleen sparen in plaats van een AOV?',
        answer:
          'Ja. Zelf geld reserveren is één van de manieren waarop je als zelfstandige een inkomensbuffer kunt opbouwen. De vraag is vervolgens of je buffer groot genoeg is om langdurige arbeidsongeschiktheid op te vangen.',
      },
      {
        question: 'Wat kost een AOV voor een starter?',
        answer:
          'Er is geen vast bedrag voor startende zzp\'ers. KVK noemt momenteel ongeveer €100 tot €300 per maand als algemene indicatie voor een AOV, maar jouw premie kan daarvan afwijken.',
      },
    ],
    content: (
      <>
        <p>
          Net gestart als zzp&apos;er? Dan heb je waarschijnlijk genoeg andere dingen aan je hoofd.
          Klanten vinden, opdrachten uitvoeren, je administratie regelen en zorgen dat je
          onderneming genoeg omzet maakt.
        </p>
        <p>Een arbeidsongeschiktheidsverzekering (AOV) staat misschien niet bovenaan je lijst.</p>
        <p>
          Toch is juist de start van je onderneming een moment om na te denken over wat er gebeurt
          als je door ziekte of een ongeval tijdelijk of langdurig niet kunt werken.
        </p>
        <p>
          Als zzp&apos;er krijg je namelijk niet automatisch een inkomen doorbetaald als je
          arbeidsongeschikt raakt. Je moet zelf bepalen hoe je dat risico opvangt. Dat kan met een
          AOV, maar ook met spaargeld, een schenkkring of een andere voorziening.
        </p>

        <h2>Heb je als startende zzp&apos;er een AOV nodig?</h2>
        <p>Er is geen standaardantwoord.</p>
        <p>Voor een startende zzp&apos;er kunnen juist twee dingen tegelijk spelen:</p>
        <ul>
          <li>je hebt nog weinig financiële reserves;</li>
          <li>je inkomen en omzet zijn nog onzeker.</li>
        </ul>
        <p>Dat maakt de keuze voor een AOV soms lastig.</p>
        <p>
          Heb je bijvoorbeeld net €10.000 spaargeld opgebouwd en zijn je maandelijkse vaste lasten
          €2.500? Dan kun je een periode zonder inkomen zelf opvangen, maar niet onbeperkt.
        </p>
        <p>
          Aan de andere kant kan een startende zzp&apos;er juist volledig afhankelijk zijn van het
          eigen inkomen.
        </p>
        <p>De belangrijkste vraag is daarom:</p>
        <blockquote>
          <p>
            <strong>
              Hoe lang kan ik mijn financiële verplichtingen betalen als ik niet meer kan werken?
            </strong>
          </p>
        </blockquote>

        <h2>Wat gebeurt er als je als starter arbeidsongeschikt raakt?</h2>
        <p>Stel dat je net voor jezelf bent begonnen.</p>
        <p>
          Je hebt een aantal klanten gevonden, je omzet begint op gang te komen en je hebt nog geen
          grote financiële buffer.
        </p>
        <p>Vervolgens raak je door een ongeval of ziekte langere tijd arbeidsongeschikt.</p>
        <p>
          Als je niet kunt werken, kan je inkomen sterk dalen of volledig wegvallen. Je vaste lasten
          lopen ondertussen gewoon door.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>huur of hypotheek;</li>
          <li>energie;</li>
          <li>boodschappen;</li>
          <li>verzekeringen;</li>
          <li>auto;</li>
          <li>kinderopvang;</li>
          <li>abonnementen;</li>
          <li>belastingen;</li>
          <li>andere vaste lasten.</li>
        </ul>
        <p>
          Als je onderneming volledig afhankelijk is van jouw eigen arbeid, kan het financiële
          effect bovendien groter zijn dan alleen het wegvallen van je salaris.
        </p>

        <h2>Is een AOV verplicht als je net start?</h2>
        <p>
          <strong>Nee, op dit moment niet.</strong>
        </p>
        <p>
          In september 2026 is een arbeidsongeschiktheidsverzekering nog niet verplicht voor
          zzp&apos;ers. Je bepaalt momenteel zelf hoe je het risico op arbeidsongeschiktheid
          opvangt.
        </p>
        <p>
          Er wordt wel gewerkt aan een verplichte basisverzekering voor arbeidsongeschiktheid van
          zelfstandigen, de zogenoemde BAZ.
        </p>
        <p>
          De huidige plannen zijn nog geen definitieve wet. Volgens de huidige verwachtingen zou de
          verplichte verzekering rond 2030 kunnen ingaan, maar de precieze regels en
          invoeringsdatum kunnen nog veranderen.
        </p>
        <p>
          Je hoeft dus niet te wachten op de toekomstige regeling om nu na te denken over je eigen
          financiële bescherming.
        </p>

        <h2>Waarom kan een AOV juist voor een starter interessant zijn?</h2>
        <p>Een veelgehoord argument is:</p>
        <blockquote>
          <p>
            &quot;Ik ben net begonnen, dus ik verdien nog niet zoveel. Ik sluit later wel een AOV
            af.&quot;
          </p>
        </blockquote>
        <p>
          Dat kan een begrijpelijke keuze zijn, maar er zijn ook redenen om juist vroeg naar een
          AOV te kijken.
        </p>

        <h3>Je hebt misschien nog weinig spaargeld</h3>
        <p>
          Als je onderneming pas net bestaat, heb je waarschijnlijk nog geen jarenlange financiële
          buffer kunnen opbouwen.
        </p>
        <p>
          Een lange periode zonder inkomen kan daardoor relatief snel een probleem worden.
        </p>

        <h3>Je inkomen kan volledig afhankelijk zijn van je eigen werk</h3>
        <p>
          Bij veel zzp&apos;ers stopt het inkomen grotendeels wanneer het werk stopt.
        </p>
        <p>
          Een webdesigner die niet kan werken, kan bijvoorbeeld tijdelijk geen projecten uitvoeren.
        </p>
        <p>
          Een schilder die arbeidsongeschikt raakt, kan zijn opdrachten niet meer uitvoeren.
        </p>
        <p>
          Een zelfstandig adviseur die langdurig ziek wordt, kan mogelijk geen declarabele uren
          meer maken.
        </p>
        <p>
          Hoe sterker je inkomen afhankelijk is van je eigen arbeid, hoe belangrijker het is om na
          te denken over dit risico.
        </p>

        <h3>Je vaste lasten verdwijnen niet</h3>
        <p>
          Ook als je onderneming nog klein is, blijven je persoonlijke uitgaven bestaan.
        </p>
        <p>Je hoeft daarom niet alleen te kijken naar je huidige winst.</p>
        <p>Kijk vooral naar hoeveel inkomen je huishouden nodig heeft.</p>

        <h2>Maar wat als je als starter nog nauwelijks inkomen hebt?</h2>
        <p>Dat is een belangrijk punt.</p>
        <p>
          Een AOV verzekert doorgaans een bepaald bedrag aan inkomen. Als je onderneming nog maar
          net begonnen is, kan je inkomen nog laag of moeilijk voorspelbaar zijn.
        </p>
        <p>
          Je moet daarom niet automatisch proberen je verwachte omzet volledig te verzekeren.
        </p>
        <p>Begin met je persoonlijke financiële behoefte.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Maandelijkse uitgaven</th>
                <th className="py-2 text-right font-medium">Bedrag</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Wonen</td>
                <td className="py-2 text-right">€1.100</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Boodschappen</td>
                <td className="py-2 text-right">€400</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Energie en verzekeringen</td>
                <td className="py-2 text-right">€300</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Auto/vervoer</td>
                <td className="py-2 text-right">€250</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Overige kosten</td>
                <td className="py-2 text-right">€350</td>
              </tr>
              <tr>
                <td className="py-2 pr-4 font-semibold">Totaal</td>
                <td className="py-2 text-right font-semibold">€2.400</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je kunt vervolgens bekijken hoeveel van die €2.400 je op een andere manier kunt
          opvangen.
        </p>
        <p>
          Heb je bijvoorbeeld een partner met inkomen of een financiële buffer? Dan is het bedrag
          dat je daadwerkelijk moet verzekeren mogelijk lager.
        </p>

        <h2>Kun je als startende zzp&apos;er überhaupt een AOV afsluiten?</h2>
        <p>Ja, ook als je onderneming nog maar kort bestaat kun je naar een AOV kijken.</p>
        <p>
          De verzekeraar kijkt wel naar je persoonlijke situatie, beroep en de gekozen dekking.
        </p>
        <p>
          Bij een AOV kunnen onder andere je beroep, leeftijd, verzekerde bedrag en wachttijd
          invloed hebben op de premie.
        </p>
        <p>Een startende ondernemer moet daarom niet alleen kijken naar de vraag:</p>
        <p>
          <strong>&quot;Hoeveel omzet heb ik?&quot;</strong>
        </p>
        <p>maar ook naar:</p>
        <p>
          <strong>&quot;Hoeveel inkomen wil ik beschermen?&quot;</strong>
        </p>

        <h2>Wat kost een AOV voor een startende zzp&apos;er?</h2>
        <p>Er is geen speciale vaste &quot;starterspremie&quot;.</p>
        <p>De premie wordt onder andere bepaald door:</p>
        <ul>
          <li>je leeftijd;</li>
          <li>je beroep;</li>
          <li>het verzekerde bedrag;</li>
          <li>de wachttijd;</li>
          <li>de looptijd;</li>
          <li>de voorwaarden van de verzekering.</li>
        </ul>
        <p>
          KVK noemt momenteel ongeveer <strong>€100 tot €300 per maand</strong> als
          veelvoorkomende indicatie voor een AOV, maar individuele premies kunnen hiervan
          afwijken.
        </p>
        <p>
          Voor een starter kan de premie daardoor een behoorlijk bedrag zijn, zeker wanneer de
          onderneming nog weinig winst maakt.
        </p>
        <p>Dat betekent niet automatisch dat je je niet moet verzekeren.</p>
        <p>Het betekent wel dat je moet afwegen hoeveel risico je zelf kunt dragen.</p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/wat-kost-een-aov-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Hoe kun je de kosten van een AOV als starter beperken?</h2>
        <p>Je hoeft niet per se de meest uitgebreide dekking te kiezen.</p>

        <h3>Kies een passende wachttijd</h3>
        <p>Een langere wachttijd kan de premie verlagen.</p>
        <p>
          Je spreekt dan af dat je eerst zelf een bepaalde periode kunt overbruggen voordat de
          verzekering uitkeert.
        </p>
        <p>Dat kan interessant zijn als je al een financiële buffer hebt.</p>
        <p>
          Heb je die buffer niet? Dan moet je juist goed kijken of je die wachttijd daadwerkelijk
          kunt dragen.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
            AOV met korte wachttijd
          </Link>
        </p>

        <h3>Verzeker alleen wat je nodig hebt</h3>
        <p>Je hoeft niet automatisch je volledige verwachte inkomen te verzekeren.</p>
        <p>Kijk naar je vaste lasten en andere inkomsten.</p>
        <p>Het doel is niet om zoveel mogelijk verzekerd te krijgen.</p>
        <p>
          Het doel is om te voorkomen dat je bij langdurige arbeidsongeschiktheid financieel in de
          problemen komt.
        </p>

        <h3>Bouw tegelijkertijd een buffer op</h3>
        <p>Een AOV en spaargeld kunnen elkaar aanvullen.</p>
        <p>
          Je kunt bijvoorbeeld een buffer opbouwen voor de eerste periode van ziekte en een AOV
          gebruiken voor langdurige arbeidsongeschiktheid.
        </p>
        <p>
          De overheid noemt zelf sparen, een particuliere AOV en een schenkkring als verschillende
          manieren waarop zelfstandigen inkomen bij arbeidsongeschiktheid kunnen opvangen.
        </p>

        <h2>Wat als je eerst wilt sparen?</h2>
        <p>Als starter kun je ervoor kiezen om eerst een financiële buffer op te bouwen.</p>
        <p>
          Dat kan logisch zijn als je voldoende inkomen hebt om iedere maand geld opzij te zetten.
        </p>
        <p>Maar let op de periode waarin je nog geen grote buffer hebt.</p>
        <p>Stel:</p>
        <ul>
          <li>je vaste lasten zijn €2.500 per maand;</li>
          <li>je hebt €5.000 spaargeld;</li>
          <li>je kunt €500 per maand sparen.</li>
        </ul>
        <p>Dan heb je ongeveer twee maanden aan vaste lasten als buffer.</p>
        <p>Een langdurige arbeidsongeschiktheid is uiteraard een veel groter risico.</p>
        <p>
          Sparen kan dus een onderdeel van je oplossing zijn, maar het is niet hetzelfde als een
          verzekering.
        </p>

        <h2>AOV of schenkkring als starter?</h2>
        <p>Een schenkkring kan ook een mogelijkheid zijn.</p>
        <p>
          Bij een schenkkring leggen ondernemers geld opzij en helpen ze elkaar financieel wanneer
          iemand arbeidsongeschikt raakt. De overheid noemt een broodfonds/schenkkring als een
          manier om inkomen gedurende de eerste twee jaar van arbeidsongeschiktheid op te vangen.
        </p>
        <p>Een schenkkring is echter geen volledige vervanging voor iedere AOV.</p>
        <p>De maximale uitkeringsduur en voorwaarden zijn anders.</p>
        <p>Je kunt ook verschillende voorzieningen combineren.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>buffer → schenkkring → AOV</strong>
        </p>
        <p>Welke combinatie past, hangt af van je financiële situatie.</p>

        <h2>Wat als je al gezondheidsproblemen hebt?</h2>
        <p>Dit is voor starters een belangrijk aandachtspunt.</p>
        <p>
          Bij een particuliere AOV kan je gezondheid een rol spelen bij de acceptatie en
          voorwaarden.
        </p>
        <p>
          Als je al weet dat je moeilijk verzekerbaar bent, is het daarom verstandig om niet
          automatisch uit te stellen tot later.
        </p>
        <p>
          De overheid heeft daarnaast een vangnetverzekering voor bepaalde startende zzp&apos;ers
          met een medische aandoening. Onder voorwaarden kunnen zij gedurende de eerste 15 maanden
          van hun ondernemerschap een vangnetverzekering aanvragen. Verzekeraars die hiervoor onder
          de relevante zelfregulering vallen, moeten deze aanbieden.
        </p>
        <p>
          De voorwaarden zijn specifiek, dus controleer altijd of je daadwerkelijk in aanmerking
          komt.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-zonder-medische-keuring" className="text-warm-orange hover:underline">
            AOV zonder medische keuring
          </Link>
        </p>

        <h2>Wat als je naast je onderneming in loondienst werkt?</h2>
        <p>
          Niet iedere starter is volledig afhankelijk van de inkomsten uit de onderneming.
        </p>
        <p>
          Werk je bijvoorbeeld vier dagen per week in loondienst en begin je daarnaast als
          zzp&apos;er?
        </p>
        <p>Dan heb je mogelijk al inkomensbescherming via je dienstverband.</p>
        <p>Dat verandert de berekening van je risico.</p>
        <p>
          Je hoeft dan niet alleen naar je onderneming te kijken, maar naar je totale inkomen en
          financiële situatie.
        </p>
        <p>
          Ook in de huidige plannen voor een verplichte basisverzekering wordt rekening gehouden
          met zelfstandigen die daarnaast voldoende in loondienst werken.
        </p>

        <h2>Wat verandert er met de toekomstige verplichte AOV?</h2>
        <p>De huidige plannen voor de BAZ zijn vooral gericht op een basisvangnet.</p>
        <p>
          Volgens het huidige voorstel zou de premie maximaal ongeveer €171 bruto per maand
          bedragen en zou de uitkering maximaal tot het niveau van het minimumloon lopen. Er zou
          bovendien een wachttijd van twee jaar gelden.
        </p>
        <p>
          Dat betekent dat een toekomstige verplichte basisverzekering niet automatisch hetzelfde
          is als een uitgebreide particuliere AOV.
        </p>
        <p>Een particuliere verzekering kan andere keuzes bieden rond bijvoorbeeld:</p>
        <ul>
          <li>het verzekerde bedrag;</li>
          <li>de wachttijd;</li>
          <li>de voorwaarden;</li>
          <li>de uitkeringsduur.</li>
        </ul>
        <p>
          De precieze regels van de verplichte regeling kunnen nog veranderen voordat de wet
          definitief wordt.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
            AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Hoeveel AOV heb je als starter nodig?</h2>
        <p>Begin niet met een verzekeringsbedrag.</p>
        <p>Begin met je uitgaven.</p>
        <p>Maak een overzicht van:</p>
        <ol>
          <li>je vaste maandelijkse lasten;</li>
          <li>je variabele uitgaven;</li>
          <li>eventuele inkomsten van je partner;</li>
          <li>spaargeld;</li>
          <li>andere voorzieningen;</li>
          <li>
            het inkomen dat je nodig hebt om je levensstijl en verplichtingen voort te zetten.
          </li>
        </ol>
        <p>
          Daarna kun je bepalen welk deel je zelf kunt opvangen en welk deel je eventueel wilt
          verzekeren.
        </p>

        <h3>Bereken je AOV-behoefte</h3>
        <p>
          Wil je als startende zzp&apos;er eerst uitrekenen hoeveel inkomen je zou moeten kunnen
          opvangen?
        </p>
        <p>
          Gebruik dan onze{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>
          .
        </p>
        <p>
          Zo krijg je eerst inzicht in je financiële behoefte voordat je naar een specifieke
          verzekering gaat kijken.
        </p>
        <AovCta href="/tools/aov-zzp" label="AOV berekenen voor zzp'ers →" />
        <InsifyAovCta />

        <h2>Wanneer kun je het beste een AOV afsluiten?</h2>
        <p>Er is geen universeel moment dat voor iedere starter het beste is.</p>
        <p>Maar wacht niet alleen omdat je onderneming nog klein is.</p>
        <p>
          Juist in de eerste jaren kan je financiële buffer beperkt zijn terwijl je wel afhankelijk
          bent van je eigen inkomen.
        </p>
        <p>
          Aan de andere kant kan een AOV-premie relatief zwaar drukken op een onderneming die nog
          nauwelijks omzet maakt.
        </p>
        <p>
          Daarom kun je bij de start van je onderneming bijvoorbeeld deze drie vragen beantwoorden:
        </p>
        <p>
          <strong>1. Hoeveel heb ik per maand nodig?</strong>
        </p>
        <p>
          <strong>2. Hoe lang kan ik zonder inkomen?</strong>
        </p>
        <p>
          <strong>3. Welk deel van dat risico wil ik zelf dragen?</strong>
        </p>
        <p>
          Met die antwoorden kun je bepalen of een AOV, spaargeld, een schenkkring of een
          combinatie daarvan bij jouw situatie past.
        </p>

        <h2>Checklist voor een startende zzp&apos;er</h2>
        <p>Voordat je een AOV afsluit, kun je deze punten nalopen:</p>
        <ul>
          <li>Ik weet hoeveel mijn huishouden minimaal per maand nodig heeft.</li>
          <li>Ik weet hoeveel spaargeld ik beschikbaar heb.</li>
          <li>Ik weet hoeveel maanden ik zonder inkomen kan.</li>
          <li>Ik heb gekeken naar andere inkomsten binnen mijn huishouden.</li>
          <li>Ik weet welke gevolgen arbeidsongeschiktheid voor mijn onderneming heeft.</li>
          <li>Ik heb mijn beroep en risico bekeken.</li>
          <li>Ik weet welke wachttijd ik financieel kan dragen.</li>
          <li>Ik heb gekeken hoeveel inkomen ik daadwerkelijk wil verzekeren.</li>
          <li>Ik heb de voorwaarden van de verzekering bekeken.</li>
          <li>Ik weet dat een AOV momenteel niet verplicht is.</li>
          <li>Ik houd de ontwikkelingen rond de toekomstige verplichte AOV in de gaten.</li>
        </ul>

        <h2>Conclusie</h2>
        <p>Als startende zzp&apos;er hoef je niet automatisch een AOV af te sluiten.</p>
        <p>
          Maar je moet wel zelf nadenken over wat er gebeurt als je langere tijd niet kunt werken.
        </p>
        <p>
          Juist als starter kan dat belangrijk zijn: je hebt misschien nog weinig spaargeld,
          terwijl je inkomen volledig afhankelijk is van je eigen arbeid.
        </p>
        <p>Begin daarom met je financiële risico.</p>
        <p>
          <strong>
            Hoeveel heb je per maand nodig? Hoeveel spaargeld heb je? En hoe lang kun je zonder
            inkomen?
          </strong>
        </p>
        <p>
          Daarna kun je bepalen welk deel je zelf wilt opvangen en welk deel je eventueel wilt
          verzekeren.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als startende zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
              AOV verplicht voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-zonder-medische-keuring" className="text-warm-orange hover:underline">
              AOV zonder medische keuring
            </Link>
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-verplicht-voor-zzpers',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-voor-startende-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
      'hypotheek-als-zzper-hoe-werkt-het',
    ],
    title: "AOV verplicht voor zzp'ers?",
    metaTitle: "AOV verplicht voor zzp'ers? Dit zijn de plannen voor 2030",
    excerpt:
      "Is een AOV verplicht voor zzp'ers? Lees wat nu geldt, wat de verplichte AOV inhoudt en wat de plannen voor 2030 betekenen.",
    keywords:
      "aov verplicht zzp, aov verplicht voor zzp'ers, arbeidsongeschiktheidsverzekering verplicht zzp, verplichte aov zzp, wanneer wordt aov verplicht, aov verplicht 2030, verplichte arbeidsongeschiktheidsverzekering zzp, BAZ zzp, basisverzekering arbeidsongeschiktheid zelfstandigen, moet ik een aov hebben als zzp'er",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20verplicht%20voor%20zzpers.jpg',
      alt: "AOV verplicht voor zzp'ers? Plannen voor 2030 uitgelegd.",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Is een AOV in 2026 verplicht voor zzp'ers?",
        answer:
          'Nee. In september 2026 is een AOV nog niet verplicht voor zzp\'ers. De overheid werkt wel aan een verplichte basisverzekering voor arbeidsongeschiktheid.',
      },
      {
        question: 'Wanneer wordt de AOV verplicht?',
        answer:
          'Volgens de huidige verwachting kan de verplichte AOV rond 2030 worden ingevoerd. De datum staat nog niet definitief vast omdat het wetsvoorstel nog door het parlementaire proces moet.',
      },
      {
        question: 'Hoe heet de verplichte AOV?',
        answer:
          'De voorgestelde regeling heet de Basisverzekering Arbeidsongeschiktheid Zelfstandigen (BAZ).',
      },
      {
        question: 'Hoeveel gaat de verplichte AOV kosten?',
        answer:
          'Volgens het huidige voorstel betaal je 5,4% van je inkomen, met een maximum van ongeveer €171 bruto per maand. Het bedrag kan nog veranderen.',
      },
      {
        question: 'Hoe hoog wordt de uitkering?',
        answer:
          'Volgens het huidige voorstel bedraagt de uitkering 70% van het inkomen vóór arbeidsongeschiktheid, met een maximum van 100% van het minimumloon.',
      },
      {
        question: 'Is er een wachttijd?',
        answer:
          'Ja. Volgens het huidige voorstel is de wachttijd twee jaar. In die periode ontvang je vanuit de BAZ geen uitkering.',
      },
      {
        question: 'Kan ik straks mijn eigen AOV houden?',
        answer:
          'Volgens het huidige voorstel kan dat onder bepaalde voorwaarden. Er zijn regels voor een overgangsregeling en een opt-out. De definitieve voorwaarden kunnen nog veranderen.',
      },
      {
        question: 'Is een schenkkring straks genoeg?',
        answer:
          'Een schenkkring vervangt volgens het huidige voorstel niet automatisch de verplichte basisverzekering. Wel kan een schenkkring bijvoorbeeld helpen om de wachttijd van twee jaar financieel te overbruggen.',
      },
    ],
    content: (
      <>
        <p>
          <strong>
            Is een arbeidsongeschiktheidsverzekering (AOV) verplicht als je zzp&apos;er bent?
          </strong>
        </p>
        <p>Op dit moment niet.</p>
        <p>
          In september 2026 kun je als zzp&apos;er nog zelf bepalen hoe je het risico van
          arbeidsongeschiktheid opvangt. De overheid werkt wel aan een verplichte basisverzekering
          voor arbeidsongeschiktheid van zelfstandigen, de <strong>BAZ</strong>. Het wetsvoorstel
          ligt inmiddels bij de Tweede Kamer, maar de wet is nog niet definitief.
        </p>
        <p>
          Volgens de huidige planning wordt de verplichte AOV naar verwachting rond{' '}
          <strong>2030</strong> ingevoerd. Ook die planning kan nog veranderen.
        </p>

        <h2>Is een AOV nu verplicht voor zzp&apos;ers?</h2>
        <p>
          <strong>Nee.</strong>
        </p>
        <p>
          Je hoeft op dit moment niet verplicht een particuliere arbeidsongeschiktheidsverzekering
          af te sluiten als je zzp&apos;er bent.
        </p>
        <p>Je kunt zelf bepalen hoe je het risico opvangt. Bijvoorbeeld met:</p>
        <ul>
          <li>een particuliere AOV;</li>
          <li>spaargeld;</li>
          <li>een schenkkring;</li>
          <li>andere voorzieningen;</li>
          <li>een combinatie van verschillende oplossingen.</li>
        </ul>
        <p>De huidige situatie is dus eenvoudig:</p>
        <blockquote>
          <p>
            <strong>
              In 2026 ben je als zzp&apos;er nog niet verplicht om een AOV te hebben.
            </strong>
          </p>
        </blockquote>
        <p>Dat kan in de toekomst veranderen.</p>

        <h2>Wanneer wordt de AOV verplicht voor zzp&apos;ers?</h2>
        <p>
          Er wordt gewerkt aan een verplichte basisverzekering arbeidsongeschiktheid voor
          zelfstandigen.
        </p>
        <p>
          De officiële naam is de{' '}
          <strong>Basisverzekering Arbeidsongeschiktheid Zelfstandigen (BAZ)</strong>.
        </p>
        <p>
          Het wetsvoorstel is in maart 2026 naar de Tweede Kamer gestuurd. Het moet daarna nog door
          het parlementaire proces. Volgens KVK wordt een invoering rond 2030 verwacht, maar de
          exacte datum staat nog niet vast.
        </p>
        <p>Je kunt dus nog niet zeggen:</p>
        <blockquote>
          <p>
            &quot;Vanaf 1 januari 2030 is iedere zzp&apos;er verplicht verzekerd.&quot;
          </p>
        </blockquote>
        <p>Daarvoor is de wetgeving nog niet definitief.</p>

        <h2>Wat is de verplichte AOV?</h2>
        <p>
          De voorgestelde BAZ is bedoeld als een <strong>basisverzekering</strong> voor
          zelfstandigen.
        </p>
        <p>
          Het idee is dat zelfstandigen een inkomen hebben wanneer zij langdurig arbeidsongeschikt
          raken en daardoor niet meer voldoende kunnen verdienen.
        </p>
        <p>
          De voorgestelde regeling is nadrukkelijk een basisvangnet. Het is dus niet automatisch
          hetzelfde als een uitgebreide particuliere AOV.
        </p>

        <h2>Voor wie zou de verplichte AOV gelden?</h2>
        <p>
          Volgens het huidige wetsvoorstel is de BAZ bedoeld voor zelfstandige ondernemers die voor
          de inkomstenbelasting winst uit onderneming hebben.
        </p>
        <p>
          Er zijn ook groepen die volgens het huidige voorstel niet onder de verplichte verzekering
          vallen.
        </p>
        <p>Daaronder vallen bijvoorbeeld:</p>
        <ul>
          <li>directeur-grootaandeelhouders;</li>
          <li>resultaatgenieters;</li>
          <li>meewerkende partners;</li>
          <li>bepaalde zelfstandigen die daarnaast voldoende in loondienst werken.</li>
        </ul>
        <p>
          De precieze regels kunnen nog veranderen zolang de wet nog niet definitief is.
        </p>

        <h2>Hoeveel gaat de verplichte AOV kosten?</h2>
        <p>
          Volgens het huidige voorstel bedraagt de premie <strong>5,4% van het inkomen</strong>,
          met een maximum van ongeveer <strong>€171 bruto per maand</strong>.
        </p>
        <p>
          Bij een lager inkomen is de premie dus lager. Het maximale bedrag van €171 is gebaseerd
          op het huidige voorstel en kan nog veranderen of worden geïndexeerd.
        </p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Inkomen/winst</th>
                <th className="py-2 font-medium">Wat je betaalt</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Lager inkomen</td>
                <td className="py-2">Lager dan het maximum</td>
              </tr>
              <tr className="border-b border-slate-100">
                <td className="py-2 pr-4">Hoger inkomen</td>
                <td className="py-2">5,4% tot het maximum</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Boven de premiegrens</td>
                <td className="py-2">Maximaal circa €171 per maand*</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500">
          * Het genoemde maximumbedrag is gebaseerd op de huidige plannen en kan nog veranderen.
        </p>
        <p>De premie wordt volgens het huidige voorstel via de Belastingdienst geïnd.</p>

        <h2>Hoe hoog is de uitkering van de verplichte AOV?</h2>
        <p>Ook hiervoor ligt er een voorstel.</p>
        <p>
          Bij arbeidsongeschiktheid zou de uitkering volgens de huidige plannen{' '}
          <strong>70% van het inkomen vóór arbeidsongeschiktheid</strong> bedragen, met een maximum
          van <strong>100% van het minimumloon</strong>. De uitkering zou lopen tot de AOW-leeftijd.
        </p>
        <p>
          Dat betekent dat de verplichte verzekering niet automatisch je volledige eerdere inkomen
          verzekert.
        </p>
        <p>Stel dat je vóór arbeidsongeschiktheid €4.000 per maand verdiende.</p>
        <p>
          Dan betekent de voorgestelde regeling niet automatisch dat je €4.000 per maand blijft
          ontvangen.
        </p>
        <p>
          De uitkering kent namelijk een maximum dat gekoppeld is aan het minimumloon.
        </p>

        <h2>Is de verplichte AOV hetzelfde als een particuliere AOV?</h2>
        <p>Nee.</p>
        <p>Dat onderscheid is belangrijk.</p>
        <p>
          Een particuliere AOV kun je doorgaans veel meer op jouw financiële situatie afstemmen. Je
          kunt bijvoorbeeld keuzes maken rond:
        </p>
        <ul>
          <li>het verzekerde bedrag;</li>
          <li>de wachttijd;</li>
          <li>de eindleeftijd;</li>
          <li>de voorwaarden;</li>
          <li>de uitkeringsduur.</li>
        </ul>
        <p>De voorgestelde BAZ is juist bedoeld als een algemene basisvoorziening.</p>
        <p>
          Daarom betekent een toekomstige verplichte AOV niet automatisch dat je geen reden meer
          hebt om naar een particuliere AOV te kijken.
        </p>

        <h2>Hoe lang is de wachttijd van de verplichte AOV?</h2>
        <p>
          Volgens het huidige voorstel geldt een <strong>wachttijd van twee jaar</strong>.
        </p>
        <p>
          Dat betekent dat je niet direct een uitkering ontvangt wanneer je arbeidsongeschikt
          raakt.
        </p>
        <p>
          De eerste twee jaar moet je het inkomensverlies dus zelf opvangen, bijvoorbeeld met:
        </p>
        <ul>
          <li>spaargeld;</li>
          <li>inkomen van je partner;</li>
          <li>een schenkkring;</li>
          <li>andere voorzieningen;</li>
          <li>eventueel een particuliere verzekering met een kortere wachttijd.</li>
        </ul>
        <p>De tweejarige wachttijd is onderdeel van het huidige wetsvoorstel.</p>

        <h2>Waarom is die wachttijd belangrijk?</h2>
        <p>
          Stel dat je €2.500 per maand nodig hebt om je vaste lasten en levensonderhoud te betalen.
        </p>
        <p>Als je twee jaar geen inkomen uit je onderneming hebt, moet je in totaal:</p>
        <p>
          <strong>24 × €2.500 = €60.000</strong>
        </p>
        <p>kunnen opvangen.</p>
        <p>
          Dat betekent niet dat je daadwerkelijk €60.000 spaargeld nodig hebt. Je kunt bijvoorbeeld
          ook andere inkomsten hebben of een deel van het risico op een andere manier opvangen.
        </p>
        <p>
          Maar het voorbeeld laat wel zien waarom de wachttijd van twee jaar een belangrijk
          onderdeel van de plannen is.
        </p>

        <h2>Heb je straks nog een particuliere AOV nodig?</h2>
        <p>
          Dat hangt af van je situatie en van wat de definitieve wet uiteindelijk gaat bepalen.
        </p>
        <p>De voorgestelde basisverzekering biedt namelijk een beperkt vangnet.</p>
        <p>
          Een particuliere AOV kan mogelijk aanvullend interessant zijn als je bijvoorbeeld:
        </p>
        <ul>
          <li>een hoger inkomen wilt verzekeren;</li>
          <li>een kortere wachttijd wilt;</li>
          <li>andere voorwaarden wilt;</li>
          <li>een hogere uitkering nodig hebt;</li>
          <li>aanvullende financiële zekerheid wilt.</li>
        </ul>
        <p>Je hoeft dus niet automatisch te kiezen tussen:</p>
        <p>
          <strong>BAZ óf particuliere AOV.</strong>
        </p>
        <p>Een combinatie kan ook mogelijk zijn.</p>

        <h2>Wat als je nu al een AOV hebt?</h2>
        <p>Ook hiervoor bevat het huidige voorstel overgangs- en opt-outregels.</p>
        <p>
          Volgens de huidige plannen kun je onder voorwaarden je bestaande particuliere AOV blijven
          gebruiken in plaats van de verplichte basisverzekering.
        </p>
        <p>De voorwaarden zijn onder andere gericht op:</p>
        <ul>
          <li>de eindleeftijd;</li>
          <li>de maximale wachttijd;</li>
          <li>de uitkeringsduur.</li>
        </ul>
        <p>
          Er is daarnaast een voorgestelde opt-outmogelijkheid voor ondernemers die zelf een
          verzekering hebben die aan de wettelijke voorwaarden voldoet.
        </p>
        <p>
          Omdat de wet nog niet definitief is, moet je hier niet op basis van de huidige voorstellen
          alvast een definitieve keuze aan verbinden.
        </p>

        <h2>Moet je nu al een AOV afsluiten?</h2>
        <p>Dat is een andere vraag dan of een AOV verplicht is.</p>
        <p>
          <strong>Nee, je bent nu niet verplicht om er één af te sluiten.</strong>
        </p>
        <p>
          Maar je bent als zzp&apos;er wel zelf verantwoordelijk voor je inkomen wanneer je
          langdurig niet kunt werken.
        </p>
        <p>
          Daarom kan het verstandig zijn om nu al te kijken naar je financiële situatie.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>hoeveel je iedere maand nodig hebt;</li>
          <li>hoeveel spaargeld je hebt;</li>
          <li>hoeveel inkomen je partner eventueel heeft;</li>
          <li>hoe afhankelijk je onderneming is van jouw eigen arbeid;</li>
          <li>hoeveel maanden je zonder inkomen kunt;</li>
          <li>welke dekking je eventueel zou willen.</li>
        </ul>

        <h2>Kun je wachten tot de verplichte AOV er is?</h2>
        <p>Dat kan, maar daarmee neem je in de tussentijd wel zelf het risico.</p>
        <p>De verplichte regeling is bovendien nog niet definitief.</p>
        <p>
          Als je nu arbeidsongeschikt raakt, krijg je niet automatisch een BAZ-uitkering omdat er
          plannen voor een toekomstige verzekering bestaan.
        </p>
        <p>Daarom is de relevante vraag niet alleen:</p>
        <blockquote>
          <p>&quot;Wanneer wordt de AOV verplicht?&quot;</p>
        </blockquote>
        <p>maar ook:</p>
        <blockquote>
          <p>
            &quot;Hoe vang ik mijn inkomen op als ik vóór die tijd arbeidsongeschikt raak?&quot;
          </p>
        </blockquote>

        <h2>Hoeveel inkomen moet je eigenlijk verzekeren?</h2>
        <p>Je hoeft niet automatisch je volledige omzet of winst te verzekeren.</p>
        <p>Begin bij je persoonlijke financiële behoefte.</p>
        <p>Maak bijvoorbeeld een overzicht van:</p>
        <ul>
          <li>hypotheek of huur;</li>
          <li>energie;</li>
          <li>boodschappen;</li>
          <li>verzekeringen;</li>
          <li>vervoer;</li>
          <li>kinderen;</li>
          <li>andere vaste lasten.</li>
        </ul>
        <p>Trek vervolgens eventuele andere inkomsten en voorzieningen af.</p>
        <p>Het bedrag dat overblijft geeft je een eerste beeld van het inkomensrisico.</p>

        <h3>Bereken je AOV-behoefte</h3>
        <p>
          Wil je weten hoeveel inkomen je als zzp&apos;er zou moeten kunnen opvangen?
        </p>
        <p>
          Gebruik dan de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>
          .
        </p>
        <p>
          Daarmee kun je je financiële situatie eerst in kaart brengen voordat je naar een
          particuliere AOV of andere oplossing kijkt.
        </p>
        <AovCta href="/tools/aov-zzp" label="AOV berekenen voor zzp'ers →" />
        <InsifyAovCta />

        <h2>Wat kun je nu al doen?</h2>
        <p>
          Je hoeft niet te wachten tot de wet definitief is om je financiële risico te bekijken.
        </p>
        <p>Een praktische aanpak:</p>

        <h3>1. Bereken je maandelijkse behoefte</h3>
        <p>Hoeveel geld heb je minimaal nodig als je niet meer kunt werken?</p>

        <h3>2. Bepaal je financiële buffer</h3>
        <p>Hoeveel maanden kun je zonder inkomen?</p>

        <h3>3. Kijk naar andere inkomsten</h3>
        <p>Heeft je partner inkomen? Heb je andere inkomstenbronnen?</p>

        <h3>4. Bekijk je verzekeringsmogelijkheden</h3>
        <p>
          Wil je een deel van het risico verzekeren? Kijk dan naar verschillende AOV&apos;s en
          voorwaarden.
        </p>

        <h3>5. Houd de wetgeving in de gaten</h3>
        <p>
          De huidige BAZ-plannen kunnen nog veranderen voordat de wet definitief is.
        </p>

        <h2>AOV verplicht voor zzp&apos;ers: de huidige situatie in één overzicht</h2>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Vraag</th>
                <th className="py-2 font-medium">Situatie in september 2026</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Is een AOV nu verplicht?', 'Nee'],
                [
                  'Komt er waarschijnlijk een verplichte basisverzekering?',
                  'Er ligt een wetsvoorstel',
                ],
                ['Hoe heet die regeling?', 'BAZ'],
                [
                  'Wanneer wordt deze waarschijnlijk ingevoerd?',
                  'Rond 2030 volgens huidige verwachting',
                ],
                ['Staat de invoeringsdatum vast?', 'Nee'],
                ['Voorgestelde maximale premie', 'Circa €171 bruto per maand*'],
                ['Voorgestelde premie', '5,4% van het inkomen*'],
                ['Voorgestelde wachttijd', '2 jaar*'],
                [
                  'Voorgestelde uitkering',
                  '70% van het inkomen, maximaal het minimumloon*',
                ],
              ].map(([q, a]) => (
                <tr key={q} className="border-b border-slate-100 align-top">
                  <td className="py-2 pr-4">{q}</td>
                  <td className="py-2 font-medium">{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-500">
          * Gebaseerd op het huidige wetsvoorstel; bedragen en voorwaarden kunnen nog veranderen.
        </p>

        <h2>Conclusie</h2>
        <p>
          <strong>
            Een AOV is in september 2026 nog niet verplicht voor zzp&apos;ers.
          </strong>
        </p>
        <p>
          Er ligt wel een wetsvoorstel voor een verplichte basisverzekering voor zelfstandigen. De
          huidige plannen gaan uit van een premie van 5,4% van het inkomen met een maximum van
          ongeveer €171 per maand, een wachttijd van twee jaar en een uitkering van 70% van het
          inkomen tot maximaal het minimumloon. De wetgeving en planning kunnen nog veranderen.
        </p>
        <p>
          Je hoeft dus niet te wachten op de verplichte AOV om je eigen risico te bekijken.
        </p>
        <p>
          <strong>
            Hoeveel inkomen heb je nodig als je niet kunt werken? En hoeveel daarvan kun je zelf
            opvangen?
          </strong>
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
              AOV voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-zonder-medische-keuring" className="text-warm-orange hover:underline">
              AOV zonder medische keuring
            </Link>
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-zonder-medische-keuring',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-voor-startende-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
    ],
    title: 'AOV zonder medische keuring: wat is er mogelijk?',
    metaTitle: 'AOV zonder medische keuring: wat is er mogelijk?',
    excerpt:
      'Een AOV zonder medische keuring: kan dat? Lees wat verzekeraars vragen, wanneer een keuring nodig is en wat je kunt doen bij gezondheidsklachten.',
    keywords:
      'aov zonder medische keuring, aov zonder keuring, arbeidsongeschiktheidsverzekering zonder medische keuring, aov zonder gezondheidsverklaring, aov zonder medische vragen, aov met medische klachten, aov acceptatie, aov afgewezen',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20zonder%20medische%20keuring.jpg',
      alt: 'AOV zonder medische keuring: wat is er mogelijk?',
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: 'Kan ik een AOV afsluiten zonder medische keuring?',
        answer:
          'Vaak wel. Bij een reguliere AOV begint de medische acceptatie doorgaans met een gezondheidsverklaring. Een lichamelijke keuring is niet standaard bij iedere aanvraag nodig.',
      },
      {
        question: 'Kan ik een AOV afsluiten zonder gezondheidsverklaring?',
        answer:
          'Bij een reguliere AOV is dat doorgaans niet de standaard. De verzekeraar wil het arbeidsongeschiktheidsrisico kunnen beoordelen en gebruikt daarvoor onder andere medische informatie.',
      },
      {
        question: 'Word ik automatisch afgewezen als ik gezondheidsklachten heb?',
        answer:
          'Nee. Gezondheidsklachten kunnen leiden tot verschillende uitkomsten, zoals normale acceptatie, een premieopslag, een uitsluiting, aanvullende vragen of afwijzing. De uitkomst verschilt per situatie en verzekeraar.',
      },
      {
        question: 'Moet ik een medische keuring accepteren?',
        answer:
          'Nee, maar als de verzekeraar zonder die informatie het risico niet kan beoordelen, kan de aanvraag niet worden voortgezet.',
      },
      {
        question: 'Wat als mijn AOV wordt afgewezen vanwege mijn gezondheid?',
        answer:
          'Vraag om de reden van de afwijzing en kijk of een andere verzekeraar een andere beoordeling maakt. Acceptatiebeleid verschilt per verzekeraar. Als je nergens terechtkunt, kan een vangnetverzekering een mogelijkheid zijn.',
      },
      {
        question: 'Moet ik medische informatie eerlijk invullen?',
        answer:
          'Ja. Een gezondheidsverklaring moet volledig en correct worden ingevuld. Het achterhouden van relevante informatie kan later gevolgen hebben voor je verzekering of een uitkering.',
      },
    ],
    content: (
      <>
        <p>
          Wil je als zzp&apos;er een arbeidsongeschiktheidsverzekering afsluiten, maar zie je op
          tegen een medische keuring? Dan is het goed om onderscheid te maken tussen een{' '}
          <strong>medische keuring</strong> en een <strong>gezondheidsverklaring</strong>.
        </p>
        <p>
          Bij een normale AOV hoef je meestal niet direct lichamelijk gekeurd te worden. De
          aanvraag begint doorgaans met vragen over je gezondheid. Op basis daarvan beoordeelt een
          medisch adviseur het risico. Alleen wanneer daar aanleiding voor is, kan aanvullende
          medische informatie of een gericht onderzoek nodig zijn.
        </p>
        <p>
          Een AOV die helemaal geen vragen over je gezondheid stelt, is iets anders. Daar zijn bij
          reguliere AOV&apos;s veel minder mogelijkheden voor.
        </p>

        <h2>Kun je een AOV afsluiten zonder medische keuring?</h2>
        <p>
          <strong>Ja, vaak wel.</strong>
        </p>
        <p>
          Bij veel AOV-aanvragen vindt de medische beoordeling in eerste instantie plaats op basis
          van een gezondheidsverklaring. Een lichamelijke medische keuring is dus niet standaard
          onderdeel van iedere aanvraag.
        </p>
        <p>Een verzekeraar kan bijvoorbeeld:</p>
        <ol>
          <li>je direct medisch accepteren;</li>
          <li>aanvullende vragen stellen;</li>
          <li>medische informatie opvragen bij een behandelend arts;</li>
          <li>een premieopslag voorstellen;</li>
          <li>bepaalde klachten of aandoeningen uitsluiten;</li>
          <li>in sommige gevallen de aanvraag afwijzen.</li>
        </ol>
        <p>
          Een medische keuring kan onderdeel worden van het traject wanneer de
          gezondheidsverklaring daar aanleiding toe geeft. Ook het gewenste verzekerde bedrag en
          het acceptatiebeleid van de verzekeraar kunnen daarbij een rol spelen.
        </p>

        <h3>Medische keuring versus gezondheidsverklaring</h3>
        <p>Deze begrippen worden vaak door elkaar gehaald.</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium" />
                <th className="py-2 pr-4 font-medium">Gezondheidsverklaring</th>
                <th className="py-2 font-medium">Medische keuring</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Vragen over gezondheid', 'Ja', 'Ja'],
                ['Zelf invullen', 'Meestal', 'Nee'],
                ['Lichamelijk onderzoek', 'Nee', 'Mogelijk'],
                ['Altijd nodig', 'Vaak bij reguliere AOV', 'Nee'],
                ['Aanvullende medische informatie', 'Soms', 'Mogelijk'],
                ['Medisch adviseur betrokken', 'Ja', 'Ja'],
              ].map(([label, health, exam]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">{label}</td>
                  <td className="py-2 pr-4">{health}</td>
                  <td className="py-2">{exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Een <strong>AOV zonder medische keuring</strong> is daarom iets anders dan een{' '}
          <strong>AOV zonder medische acceptatie</strong>.
        </p>

        <h2>AOV zonder gezondheidsverklaring: kan dat?</h2>
        <p>Dat is een stuk lastiger.</p>
        <p>
          Een reguliere AOV is bedoeld om een langdurig inkomensrisico te verzekeren. De
          verzekeraar wil daarom kunnen inschatten hoe groot het risico is dat je
          arbeidsongeschikt raakt. Gezondheidsinformatie speelt daarbij een belangrijke rol.
        </p>
        <p>
          Een verzekering waarbij helemaal geen gezondheidsvragen worden gesteld, is daarom niet
          de standaard voor een reguliere individuele AOV.
        </p>
        <p>
          Er bestaan wel andere vormen van inkomensbescherming waarbij medische acceptatie geen of
          een veel kleinere rol speelt. Denk bijvoorbeeld aan bepaalde vangnetverzekeringen of
          voorzieningen zoals een schenkkring.
        </p>

        <h2>Wanneer is een medische keuring nodig?</h2>
        <p>
          Een medische keuring is vooral relevant wanneer de informatie uit de
          gezondheidsverklaring onvoldoende is om het risico goed te beoordelen.
        </p>
        <p>De verzekeraar kan bijvoorbeeld aanvullende informatie nodig hebben over:</p>
        <ul>
          <li>een bestaande aandoening;</li>
          <li>eerdere behandelingen;</li>
          <li>langdurige klachten;</li>
          <li>een operatie;</li>
          <li>medicijngebruik;</li>
          <li>een eerdere periode van arbeidsongeschiktheid.</li>
        </ul>
        <p>
          De medische dienst kan in zo&apos;n situatie aanvullende informatie opvragen of een
          onderzoek laten uitvoeren. Bij sommige verzekeraars is een medische keuring pas aan de
          orde bij een relatief hoog verzekerd bedrag. De precieze grens verschilt per product en
          verzekeraar.
        </p>

        <h2>Wat als je gezondheidsklachten hebt?</h2>
        <p>
          Een medische keuring proberen te vermijden is niet altijd het belangrijkste punt. Als je
          gezondheidsklachten hebt, is het vooral belangrijk om te kijken{' '}
          <strong>hoe de verzekeraar met jouw medische situatie omgaat</strong>.
        </p>
        <p>
          Een medische beoordeling hoeft namelijk niet automatisch te betekenen dat je geen AOV
          kunt krijgen.
        </p>
        <p>Mogelijke uitkomsten zijn bijvoorbeeld:</p>
        <ul>
          <li>normale acceptatie;</li>
          <li>een hogere premie;</li>
          <li>een uitsluiting voor een bepaalde aandoening;</li>
          <li>aangepaste voorwaarden;</li>
          <li>aanvullende medische informatie;</li>
          <li>afwijzing.</li>
        </ul>
        <p>
          De uitkomst hangt af van de verzekeraar, je medische geschiedenis, het beroep dat je
          uitoefent en de dekking die je aanvraagt. Verschillende verzekeraars kunnen bovendien
          tot verschillende beoordelingen komen.
        </p>

        <h3>Voorbeeld</h3>
        <p>Stel dat je in het verleden een knieblessure hebt gehad.</p>
        <p>
          Dat betekent niet automatisch dat je AOV wordt afgewezen. Een verzekeraar kan
          bijvoorbeeld besluiten de aanvraag normaal te accepteren, terwijl een andere verzekeraar
          een beperking voor bepaalde knieklachten hanteert.
        </p>
        <p>
          Daarom kan het bij een medische voorgeschiedenis relevant zijn om niet alleen naar de
          premie te kijken, maar ook naar het acceptatiebeleid en de voorwaarden.
        </p>

        <h2>Kun je een AOV krijgen als je eerder ziek bent geweest?</h2>
        <p>
          <strong>Dat kan.</strong>
        </p>
        <p>
          Een eerdere ziekte of behandeling betekent niet automatisch dat je onverzekerbaar bent.
          De medische dienst kijkt naar het totale risico en kan aanvullende informatie nodig
          hebben om dat risico te beoordelen.
        </p>
        <p>
          Ook klachten die inmiddels zijn verdwenen kunnen onderdeel zijn van de beoordeling. Bij
          een AOV gaat het immers om het risico gedurende een lange verzekeringsperiode.
        </p>
        <p>
          Daarom is het belangrijk om een gezondheidsverklaring{' '}
          <strong>volledig en eerlijk</strong> in te vullen. Het bewust weglaten van relevante
          informatie kan later problemen geven met de verzekering of een uitkering.
        </p>

        <h2>Wat als je niet medisch gekeurd wilt worden?</h2>
        <p>
          Als een verzekeraar een aanvullende medische keuring noodzakelijk vindt, kun je ervoor
          kiezen die niet te ondergaan.
        </p>
        <p>
          Dat betekent echter niet dat de verzekeraar de AOV dan gewoon zonder keuring moet
          afsluiten. Zonder voldoende medische informatie kan de medisch adviseur het risico
          mogelijk niet beoordelen en kan de verzekeraar besluiten geen verzekering aan te bieden.
        </p>
        <p>
          Het weigeren van een keuring is dus iets anders dan het vinden van een verzekeraar die
          voor jouw aanvraag geen keuring nodig heeft.
        </p>

        <h2>AOV zonder keuring bij een hoger verzekerd bedrag</h2>
        <p>
          Hoe hoger het bedrag dat je wilt verzekeren, hoe belangrijker een goede risico-inschatting
          voor de verzekeraar wordt.
        </p>
        <p>
          Sommige producten hanteren daarom aanvullende acceptatiestappen bij hogere verzekerde
          bedragen. Dat kan bijvoorbeeld een telefonische medische intake of aanvullende informatie
          zijn. Bij bepaalde producten kan vanaf een specifieke verzekerde maanduitkering ook een
          medische keuring worden gevraagd.
        </p>
        <p>
          Wil je een keuring zoveel mogelijk voorkomen, dan kan het daarom helpen om niet
          automatisch het maximale bedrag te verzekeren.
        </p>
        <p>
          Kijk eerst naar hoeveel inkomen je daadwerkelijk nodig hebt wanneer je langere tijd niet
          kunt werken.
        </p>

        <h2>Goedkopere AOV zonder medische keuring?</h2>
        <p>Een AOV zonder medische keuring is niet per definitie goedkoper.</p>
        <p>
          De premie wordt onder andere bepaald door het verzekerde bedrag, je beroep, leeftijd,
          wachttijd en de gekozen voorwaarden. Gezondheid speelt bij de medische acceptatie
          bovendien een rol bij het bepalen van het risico.
        </p>
        <p>
          Een langere wachttijd kan bijvoorbeeld een manier zijn om de premie te verlagen. Je kiest
          dan ervoor om de eerste periode van arbeidsongeschiktheid zelf financieel op te vangen.
        </p>
        <p>Lees meer over de kosten in:</p>
        <p>
          <Link
            href="/blogs/wat-kost-een-aov-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Wat als je nergens wordt geaccepteerd?</h2>
        <p>
          Word je vanwege je gezondheid niet geaccepteerd voor een reguliere AOV, dan zijn er nog
          andere mogelijkheden.
        </p>
        <p>
          Een belangrijke optie is een <strong>private vangnetverzekering</strong>. Voor
          zelfstandigen die vanwege hun medische situatie niet voor een reguliere AOV worden
          geaccepteerd, bestaat hiervoor een specifieke voorziening waarbij geen medische
          beoordeling plaatsvindt. Voor deze verzekering gelden wel voorwaarden en een
          aanvraagtermijn.
        </p>
        <p>
          Ook een schenkkring, crowdsurance of een eigen financiële buffer kan een rol spelen bij
          het opvangen van inkomensverlies.
        </p>
        <p>
          Dat zijn echter geen één-op-één vervangers van een reguliere AOV. Ze verschillen
          bijvoorbeeld in wachttijd, maximale uitkeringsduur en hoogte van de uitkering.
        </p>

        <h2>AOV zonder medische keuring of juist een normale AOV?</h2>
        <p>
          Als je gezond bent en een normale AOV kunt afsluiten zonder aanvullende keuring, is er
          meestal weinig reden om specifiek op zoek te gaan naar een product &quot;zonder
          keuring&quot;.
        </p>
        <p>De belangrijkere vragen zijn:</p>
        <ul>
          <li>Hoeveel inkomen wil je verzekeren?</li>
          <li>Welke wachttijd past bij je buffer?</li>
          <li>Tot welke leeftijd wil je verzekerd zijn?</li>
          <li>Welke definitie van arbeidsongeschiktheid geldt?</li>
          <li>Welke uitsluitingen staan in de polis?</li>
          <li>Hoe wordt de premie vastgesteld?</li>
          <li>Wat gebeurt er als je later arbeidsongeschikt raakt?</li>
        </ul>
        <p>
          Een medische keuring is uiteindelijk maar één onderdeel van het acceptatieproces.
        </p>

        <h2>Bereken hoeveel AOV je nodig hebt</h2>
        <p>
          Voordat je naar verzekeringen gaat kijken, is het verstandig eerst te bepalen hoeveel
          inkomen je daadwerkelijk wilt beschermen.
        </p>
        <p>
          Op FactuurBaas kun je hiervoor de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>{' '}
          gebruiken.
        </p>
        <p>
          Daarmee kun je onder andere nadenken over je gewenste maandelijkse inkomen, je
          financiële buffer en de periode die je zelf kunt overbruggen.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <InsifyAovCta />
        <p>Wil je eerst de basis van een AOV begrijpen? Lees dan ook:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
              AOV voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
              AOV verplicht voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
              AOV met korte wachttijd
            </Link>
          </li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Een <strong>AOV zonder medische keuring</strong> is vaak mogelijk in de zin dat je niet
          standaard lichamelijk hoeft te worden onderzocht. Bij een normale AOV krijg je echter
          meestal wel te maken met medische acceptatie en een gezondheidsverklaring.
        </p>
        <p>
          Heb je geen bijzondere medische voorgeschiedenis, dan kan de aanvraag vaak relatief
          eenvoudig verlopen. Heb je wel gezondheidsklachten of een medische geschiedenis, dan
          kunnen aanvullende vragen, een uitsluiting, premieopslag of een keuring volgen.
        </p>
        <p>
          Het is daarom verstandiger om niet alleen te zoeken naar een AOV &quot;zonder
          keuring&quot;, maar vooral te kijken naar{' '}
          <strong>
            de voorwaarden, medische acceptatie en dekking die bij jouw situatie passen
          </strong>
          .
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-met-korte-wachttijd',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-verplicht-voor-zzpers',
      'aov-voor-startende-zzpers',
      'aov-zonder-medische-keuring',
      'aov-met-lange-wachttijd',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
    ],
    title: 'AOV met korte wachttijd: wat kost het en wanneer is het verstandig?',
    metaTitle: 'AOV met korte wachttijd: wat kost het?',
    excerpt:
      'Een AOV met korte wachttijd keert sneller uit, maar kost meestal meer. Lees welke wachttijd mogelijk is en wat past bij je financiële buffer.',
    keywords:
      'aov met korte wachttijd, aov korte wachttijd, arbeidsongeschiktheidsverzekering korte wachttijd, aov wachttijd, aov wachttijd 1 maand, aov wachttijd 3 maanden, aov wachttijd 6 maanden, korte wachttijd aov, aov eigenrisicoperiode, aov zonder wachttijd, aov snelle uitkering',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20met%20korte%20wachttijd.jpg',
      alt: 'AOV met korte wachttijd: wat kost het en wanneer is het verstandig?',
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: 'Wat is de kortste wachttijd bij een AOV?',
        answer:
          'Dat verschilt per verzekeraar en product. Sommige AOV\'s bieden een wachttijd van één maand. Andere beginnen met een langere periode. Controleer daarom altijd de actuele voorwaarden.',
      },
      {
        question: 'Is een AOV met een korte wachttijd duurder?',
        answer:
          'Meestal wel. Een langere wachttijd betekent doorgaans een lagere premie, omdat je de eerste periode van arbeidsongeschiktheid zelf draagt.',
      },
      {
        question: 'Is een wachttijd van één maand verstandig?',
        answer:
          'Dat hangt af van je financiële buffer. Als je weinig spaargeld hebt en je inkomen snel nodig hebt om je vaste lasten te betalen, kan een korte wachttijd relevant zijn. Heb je voldoende vermogen om langere tijd zonder inkomen te zitten, dan kan een langere wachttijd ook een optie zijn.',
      },
      {
        question: 'Wat betekent een wachttijd van 3 maanden?',
        answer:
          'Je draagt de eerste drie maanden van een gedekte arbeidsongeschiktheid zelf. Daarna kan de AOV gaan uitkeren als je aan de overige voorwaarden voldoet.',
      },
      {
        question: 'Wat is het verschil tussen wachttijd en eigen risico?',
        answer:
          'Bij een AOV worden wachttijd, eigenrisicoperiode en eigen risico in de praktijk gebruikt voor de periode waarin je zelf geen AOV-uitkering ontvangt. Controleer bij een specifieke polis altijd de exacte definitie in de voorwaarden.',
      },
      {
        question: 'Kan ik mijn wachttijd zelf kiezen?',
        answer:
          'Bij veel AOV\'s kun je uit meerdere wachttijden kiezen. Welke opties beschikbaar zijn, verschilt per verzekeraar en product.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er kun je bij een arbeidsongeschiktheidsverzekering kiezen hoe lang je wacht
          voordat je een uitkering ontvangt. Deze periode heet de <strong>wachttijd</strong>,{' '}
          <strong>eigenrisicoperiode</strong> of <strong>eigen risico bij arbeidsongeschiktheid</strong>.
        </p>
        <p>
          Een korte wachttijd betekent dat je sneller een AOV-uitkering ontvangt als je
          arbeidsongeschikt raakt. Daar staat meestal een hogere premie tegenover.
        </p>
        <p>
          Welke wachttijd verstandig is, hangt vooral af van hoeveel inkomen je zelf kunt missen
          en hoe groot je financiële buffer is.
        </p>

        <h2>Wat is de wachttijd van een AOV?</h2>
        <p>
          De wachttijd is de periode tussen het moment waarop je arbeidsongeschikt raakt en het
          moment waarop de AOV begint uit te keren.
        </p>
        <p>
          Stel dat je AOV een wachttijd van 30 dagen heeft. Word je op 1 januari volledig
          arbeidsongeschikt en voldoe je aan de voorwaarden voor een uitkering, dan begint de
          uitkering na deze wachttijd.
        </p>
        <p>
          De precieze berekening en ingangsdatum verschillen per verzekeraar en polisvoorwaarden.
        </p>
        <p>
          Bij AOV&apos;s kun je vaak kiezen uit verschillende wachttijden. Zo biedt Interpolis
          momenteel bijvoorbeeld keuzes van 1, 2, 3, 6, 12 of 24 maanden. Een langere wachttijd
          verlaagt doorgaans de premie.
        </p>

        <h2>Wat is een korte wachttijd bij een AOV?</h2>
        <p>Er is geen vaste wettelijke definitie van een &quot;korte wachttijd&quot;.</p>
        <p>In de praktijk kun je bijvoorbeeld denken aan:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Wachttijd</th>
                <th className="py-2 font-medium">Betekenis</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['1 maand', 'Je vangt ongeveer de eerste maand zelf op'],
                ['2 maanden', 'Je vangt ongeveer twee maanden zelf op'],
                ['3 maanden', 'Je hebt een buffer voor ongeveer drie maanden nodig'],
                ['6 maanden', 'Je draagt het risico van het eerste halfjaar zelf'],
                ['12 maanden', 'Je verzekering is vooral bedoeld voor langdurige arbeidsongeschiktheid'],
              ].map(([wait, meaning]) => (
                <tr key={wait} className="border-b border-slate-100 align-top">
                  <td className="py-2 pr-4 font-medium">{wait}</td>
                  <td className="py-2">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Een wachttijd van 1 of 2 maanden kan daarom worden gezien als een korte wachttijd. Een
          wachttijd van 6, 12 of 24 maanden betekent dat je een groter deel van het risico zelf
          draagt.
        </p>

        <h2>Waarom kiezen voor een korte wachttijd?</h2>
        <p>
          De belangrijkste reden is simpel:{' '}
          <strong>je hebt niet genoeg buffer om langere tijd zonder inkomen te zitten.</strong>
        </p>
        <p>
          Als je bijvoorbeeld €2.500 per maand nodig hebt om je vaste lasten en levensonderhoud te
          betalen, heb je bij een wachttijd van één jaar een veel grotere financiële reserve nodig
          dan bij een wachttijd van één maand.
        </p>
        <p>Een korte wachttijd kan daarom interessant zijn voor zzp&apos;ers die:</p>
        <ul>
          <li>weinig spaargeld hebben;</li>
          <li>hoge vaste lasten hebben;</li>
          <li>een hypotheek of andere financiële verplichtingen hebben;</li>
          <li>afhankelijk zijn van hun eigen inkomen;</li>
          <li>geen partnerinkomen hebben waarop ze kunnen terugvallen;</li>
          <li>snel inkomensverlies willen opvangen.</li>
        </ul>
        <p>
          De KVK noemt je financiële buffer, vaste lasten en andere inkomsten als belangrijke
          factoren bij de keuze of en hoe je jezelf tegen arbeidsongeschiktheid verzekert.
        </p>

        <h2>Wat kost een AOV met een korte wachttijd?</h2>
        <p>Een korte wachttijd maakt een AOV doorgaans duurder.</p>
        <p>
          Dat komt doordat de verzekeraar bij een korte wachttijd eerder moet uitkeren wanneer je
          arbeidsongeschikt raakt. Bij een langere wachttijd draag je de eerste periode zelf het
          risico.
        </p>
        <p>
          Interpolis geeft bijvoorbeeld expliciet aan dat een langere wachttijd leidt tot een
          lagere premie.
        </p>
        <p>
          De premie wordt echter niet alleen door de wachttijd bepaald. Ook zaken zoals je
          leeftijd, beroep, verzekerde bedrag en gekozen uitkeringsduur spelen mee.
        </p>

        <h3>Voorbeeld</h3>
        <p>Stel dat je een AOV wilt die €2.500 per maand uitkeert.</p>
        <p>
          Bij een korte wachttijd betaal je mogelijk meer premie dan wanneer je dezelfde
          verzekering afsluit met een wachttijd van 12 maanden.
        </p>
        <p>
          Daar staat tegenover dat je bij langdurige arbeidsongeschiktheid minder lang zelf je
          inkomen hoeft op te vangen.
        </p>
        <p>
          Het exacte premieverschil kun je alleen berekenen voor een specifieke situatie en
          verzekeraar. Er bestaat geen vast bedrag dat je voor een wachttijd van bijvoorbeeld één
          maand extra betaalt.
        </p>

        <h2>Korte wachttijd versus lange wachttijd</h2>
        <p>Het belangrijkste verschil is wie het risico van de eerste periode draagt.</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium" />
                <th className="py-2 pr-4 font-medium">Korte wachttijd</th>
                <th className="py-2 font-medium">Lange wachttijd</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Eerste periode zonder AOV-uitkering', 'Kort', 'Lang'],
                ['Maandelijkse premie', 'Meestal hoger', 'Meestal lager'],
                ['Benodigde financiële buffer', 'Lager', 'Hoger'],
                ['Financieel risico bij langdurige ziekte', 'Sneller verzekerd', 'Meer zelf dragen'],
                ['Interessant bij weinig spaargeld', 'Vaak', 'Minder vaak'],
                ['Interessant bij grote buffer', 'Niet noodzakelijk', 'Vaak interessanter'],
              ].map(([label, short, long]) => (
                <tr key={label} className="border-b border-slate-100 align-top">
                  <td className="py-2 pr-4 font-medium">{label}</td>
                  <td className="py-2 pr-4">{short}</td>
                  <td className="py-2">{long}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Er is dus geen universeel juiste wachttijd.</p>
        <p>De keuze komt vooral neer op de vraag:</p>
        <p>
          <strong>
            Hoe lang kan ik mijn inkomen zelf missen als ik morgen niet meer kan werken?
          </strong>
        </p>

        <h2>Hoeveel buffer heb je nodig bij een korte wachttijd?</h2>
        <p>
          Een eenvoudige manier om naar je wachttijd te kijken is om je noodzakelijke maandelijkse
          uitgaven te vermenigvuldigen met het aantal maanden dat je zelf moet overbruggen.
        </p>
        <p>Stel:</p>
        <ul>
          <li>noodzakelijke uitgaven: €2.000 per maand;</li>
          <li>wachttijd: 3 maanden.</li>
        </ul>
        <p>Dan heb je ongeveer €6.000 nodig om alleen deze periode te overbruggen.</p>
        <p>
          In werkelijkheid kan het benodigde bedrag hoger of lager zijn. Je kunt tijdens
          arbeidsongeschiktheid bijvoorbeeld nog gedeeltelijk inkomen ontvangen, terwijl bepaalde
          zakelijke kosten blijven doorlopen.
        </p>
        <p>Maak daarom onderscheid tussen:</p>
        <p>
          <strong>Privé-uitgaven</strong>
        </p>
        <ul>
          <li>hypotheek of huur;</li>
          <li>energie;</li>
          <li>boodschappen;</li>
          <li>verzekeringen;</li>
          <li>belastingen;</li>
          <li>andere vaste lasten.</li>
        </ul>
        <p>
          <strong>Zakelijke kosten</strong>
        </p>
        <ul>
          <li>software;</li>
          <li>kantoorruimte;</li>
          <li>lease;</li>
          <li>personeel;</li>
          <li>andere kosten die ook tijdens je arbeidsongeschiktheid doorlopen.</li>
        </ul>
        <p>
          Een AOV dekt bovendien niet automatisch alle zakelijke kosten. Daarvoor kunnen
          aanvullende verzekeringen bestaan.
        </p>

        <h2>Is een AOV met 30 dagen wachttijd mogelijk?</h2>
        <p>Dat hangt af van de verzekeraar en het product.</p>
        <p>
          Sommige AOV&apos;s bieden een wachttijd van één maand. Andere verzekeraars beginnen
          bijvoorbeeld bij een langere periode.
        </p>
        <p>
          Kijk daarom niet alleen naar de term &quot;korte wachttijd&quot;, maar controleer altijd
          welke concrete wachttijden je bij de betreffende verzekering kunt kiezen.
        </p>
        <p>
          Een wachttijd van één maand kan aantrekkelijk klinken, maar als de premie daardoor veel
          hoger wordt, kan een wachttijd van bijvoorbeeld drie of zes maanden in combinatie met
          een goede buffer financieel beter aansluiten bij je situatie.
        </p>

        <h2>Wanneer is een wachttijd van 1 maand interessant?</h2>
        <p>
          Een wachttijd van één maand kan vooral interessant zijn wanneer je weinig financiële
          ruimte hebt.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          <p>
            Je bent zzp&apos;er en hebt €2.500 per maand nodig voor je vaste lasten. Je hebt
            €3.000 spaargeld en je partner heeft geen inkomen.
          </p>
        </blockquote>
        <p>
          Een wachttijd van 12 maanden betekent in deze situatie dat je een aanzienlijk
          inkomensgat zelf moet kunnen opvangen.
        </p>
        <p>Een korte wachttijd kan dan een belangrijk onderdeel van je AOV zijn.</p>
        <p>
          Heb je daarentegen €50.000 aan direct beschikbare spaargelden en relatief lage vaste
          lasten, dan kun je waarschijnlijk een langere periode zelf overbruggen.
        </p>

        <h2>Wanneer is een langere wachttijd interessant?</h2>
        <p>
          Een langere wachttijd kan interessant zijn als je voldoende vermogen hebt om een langere
          periode zonder AOV-uitkering te overbruggen.
        </p>
        <p>Je betaalt dan doorgaans minder premie.</p>
        <p>
          Je kunt bijvoorbeeld kiezen voor een wachttijd van 6 of 12 maanden en je spaargeld
          gebruiken als vangnet voor tijdelijke arbeidsongeschiktheid. De AOV is dan vooral
          bedoeld voor situaties waarin je langdurig niet kunt werken.
        </p>
        <p>Het voordeel is een lagere premie.</p>
        <p>
          Het nadeel is dat je tijdens de wachttijd zelf verantwoordelijk bent voor je inkomen.
        </p>
        <p>
          Lees meer:{' '}
          <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
            AOV met lange wachttijd
          </Link>
        </p>

        <h2>Korte wachttijd of grote buffer?</h2>
        <p>Dit is eigenlijk de belangrijkste afweging.</p>
        <p>Je kunt het risico van arbeidsongeschiktheid op twee manieren verdelen:</p>
        <p>
          <strong>Meer zelf dragen</strong>
        </p>
        <ul>
          <li>grotere financiële buffer;</li>
          <li>langere wachttijd;</li>
          <li>lagere AOV-premie.</li>
        </ul>
        <p>
          <strong>Meer verzekeren</strong>
        </p>
        <ul>
          <li>kleinere financiële buffer nodig;</li>
          <li>kortere wachttijd;</li>
          <li>hogere AOV-premie.</li>
        </ul>
        <p>
          Daarom is een korte wachttijd niet automatisch beter. Je betaalt er immers voor om een
          groter deel van het risico bij de verzekeraar te leggen.
        </p>

        <h2>Wat als je maar tijdelijk arbeidsongeschikt bent?</h2>
        <p>
          De wachttijd is vooral relevant als je arbeidsongeschiktheid lang genoeg duurt om de
          wachttijd te overschrijden.
        </p>
        <p>
          Bij een wachttijd van 12 maanden en een arbeidsongeschiktheid van drie maanden ontvang
          je bijvoorbeeld geen AOV-uitkering.
        </p>
        <p>
          Bij een wachttijd van één maand kan dezelfde situatie wel tot een uitkering leiden, als
          je aan de overige voorwaarden voldoet.
        </p>
        <p>
          Dit maakt de wachttijd een belangrijke keuze wanneer je niet alleen wilt verzekeren
          tegen langdurige arbeidsongeschiktheid, maar ook tegen een periode van enkele maanden
          zonder inkomen.
        </p>

        <h2>Kun je de wachttijd later aanpassen?</h2>
        <p>Dat verschilt per verzekeraar en polis.</p>
        <p>
          Een aanpassing van de wachttijd kan gevolgen hebben voor je premie en soms voor de
          acceptatievoorwaarden. Controleer daarom de voorwaarden van je specifieke AOV voordat
          je ervan uitgaat dat je de wachttijd later eenvoudig kunt wijzigen.
        </p>
        <p>
          Het is verstandig om je AOV regelmatig opnieuw te bekijken. Je financiële buffer,
          inkomen, vaste lasten en gezinssituatie kunnen veranderen.
        </p>

        <h2>Korte wachttijd en de toekomstige verplichte AOV</h2>
        <p>
          De voorgestelde verplichte Basisverzekering Arbeidsongeschiktheid Zelfstandigen (BAZ)
          werkt anders.
        </p>
        <p>
          Volgens het huidige wetsvoorstel zou de verplichte basisverzekering een{' '}
          <strong>wachttijd van twee jaar</strong> krijgen. Een zelfstandige moet de eerste twee
          jaar van arbeidsongeschiktheid dus zelf op een andere manier overbruggen. De precieze
          regels en ingangsdatum van deze regeling staan nog niet definitief vast. KVK verwacht
          momenteel invoering rond 2030.
        </p>
        <p>
          Een private AOV kan juist een veel kortere wachttijd hebben. Daardoor kun je met een
          eigen verzekering het inkomensrisico in de eerste maanden of het eerste jaar anders
          afdekken.
        </p>
        <p>
          Dit is een van de redenen waarom de wachttijd een belangrijk onderdeel is wanneer je
          verschillende AOV&apos;s vergelijkt.
        </p>
        <p>Meer hierover lees je in:</p>
        <p>
          <Link
            href="/blogs/aov-verplicht-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Welke wachttijd past bij jou?</h2>
        <p>Er is geen standaardantwoord.</p>
        <p>Gebruik bijvoorbeeld deze simpele richtlijn:</p>
        <p>
          <strong>Weinig buffer → kijk naar een korte wachttijd.</strong>
        </p>
        <p>
          <strong>
            Enkele maanden buffer → een wachttijd van 3 tot 6 maanden kan het onderzoeken waard
            zijn.
          </strong>
        </p>
        <p>
          <strong>
            Grote buffer → een langere wachttijd kan interessant zijn om de premie te verlagen.
          </strong>
        </p>
        <p>
          Dit zijn geen vaste financiële adviezen. Je vaste lasten, andere inkomsten, vermogen en
          gewenste dekking bepalen uiteindelijk wat passend is.
        </p>

        <h2>Bereken hoeveel AOV je nodig hebt</h2>
        <p>
          De wachttijd is maar één onderdeel van je AOV. Je moet ook bepalen hoeveel inkomen je
          wilt verzekeren.
        </p>
        <p>
          Op FactuurBaas kun je daarvoor de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>{' '}
          gebruiken.
        </p>
        <p>
          Daarmee kun je eerst je financiële situatie in kaart brengen voordat je naar een
          specifieke verzekering kijkt.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <InsifyAovCta />
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
              AOV voor startende zzp&apos;ers
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-zonder-medische-keuring" className="text-warm-orange hover:underline">
              AOV zonder medische keuring
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
              AOV verplicht voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
              AOV met lange wachttijd
            </Link>
          </li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Een <strong>AOV met korte wachttijd</strong> zorgt ervoor dat je bij
          arbeidsongeschiktheid sneller een uitkering kunt ontvangen. Daar staat meestal een
          hogere premie tegenover.
        </p>
        <p>De belangrijkste vraag is daarom niet alleen:</p>
        <p>
          <strong>&quot;Wat is de kortste wachttijd?&quot;</strong>
        </p>
        <p>maar vooral:</p>
        <p>
          <strong>&quot;Hoe lang kan ik mijn inkomen zelf opvangen?&quot;</strong>
        </p>
        <p>
          Heb je weinig financiële buffer, dan kan een korte wachttijd belangrijk zijn. Heb je
          voldoende vermogen om langere tijd zonder inkomen te overbruggen, dan kan een langere
          wachttijd de premie verlagen.
        </p>
        <p>
          Kijk bij het vergelijken van een AOV daarom altijd naar de combinatie van{' '}
          <strong>wachttijd, verzekerd bedrag, premie, uitkeringsduur en voorwaarden</strong>.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-met-lange-wachttijd',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-met-korte-wachttijd',
      'aov-verplicht-voor-zzpers',
      'aov-voor-startende-zzpers',
      'hoeveel-aov-heb-ik-nodig',
      'aov-berekenen-voor-zzpers',
    ],
    title: 'AOV met lange wachttijd: lagere premie, maar meer risico',
    metaTitle: 'AOV met lange wachttijd: lagere premie, maar meer risico',
    excerpt:
      'Een AOV met lange wachttijd kan je premie verlagen. Lees hoe een wachttijd van 6, 12 of 24 maanden werkt en hoeveel buffer je nodig hebt.',
    keywords:
      'aov met lange wachttijd, aov lange wachttijd, arbeidsongeschiktheidsverzekering lange wachttijd, aov wachttijd, aov wachttijd 1 jaar, aov wachttijd 2 jaar, aov 2 jaar wachttijd, lange wachttijd aov, aov eigenrisicoperiode, goedkope aov lange wachttijd, aov premie verlagen wachttijd',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20met%20lange%20wachttijd.jpg',
      alt: 'AOV met lange wachttijd: lagere premie, maar meer risico',
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: 'Wat is een lange wachttijd bij een AOV?',
        answer:
          'Er is geen officiële definitie. Een wachttijd van 6, 12 of 24 maanden wordt in de praktijk als lang beschouwd. Sommige AOV-producten bieden wachttijden tot 24 maanden.',
      },
      {
        question: 'Is een AOV met lange wachttijd goedkoper?',
        answer:
          'Meestal wel. Hoe langer je de eerste periode van arbeidsongeschiktheid zelf draagt, hoe lager de premie doorgaans is. Het exacte verschil hangt af van de rest van de verzekering.',
      },
      {
        question: 'Hoe lang is een wachttijd van 12 maanden?',
        answer:
          'Twaalf maanden. Je ontvangt tijdens die periode geen AOV-uitkering en moet je inkomen op een andere manier opvangen, als je aan de overige voorwaarden voor een uitkering voldoet.',
      },
      {
        question: 'Is een wachttijd van 2 jaar verstandig?',
        answer:
          'Dat hangt af van je financiële buffer en hoeveel risico je zelf wilt dragen. Een wachttijd van twee jaar betekent dat je een zeer lange periode zelf moet kunnen overbruggen.',
      },
      {
        question: 'Kan ik een lange wachttijd combineren met een schenkkring?',
        answer:
          'Ja. KVK noemt het combineren van een schenkkring met een AOV met langere wachttijd als een mogelijke manier om de AOV-premie lager te houden.',
      },
      {
        question: 'Wat is het voordeel van een lange wachttijd?',
        answer:
          'Het belangrijkste voordeel is een doorgaans lagere premie. Je neemt daarvoor wel meer van het financiële risico van tijdelijke of beginnende arbeidsongeschiktheid zelf over.',
      },
      {
        question: 'Wat is het nadeel van een lange wachttijd?',
        answer:
          'Je moet een grotere financiële buffer hebben en kunt bij tijdelijke arbeidsongeschiktheid buiten de uitkeringsperiode van je AOV vallen.',
      },
    ],
    content: (
      <>
        <p>
          Een <strong>AOV met lange wachttijd</strong> kan interessant zijn als je voldoende
          spaargeld hebt om een langere periode zonder AOV-uitkering te overbruggen. In ruil voor
          het zelf dragen van het risico tijdens die eerste periode betaal je meestal een lagere
          premie.
        </p>
        <p>
          De wachttijd wordt ook wel de <strong>eigenrisicoperiode</strong> genoemd. Je kunt bij
          sommige AOV&apos;s kiezen voor bijvoorbeeld 6, 12 of 24 maanden. Hoe langer je
          wachttijd, hoe langer je zelf je inkomen moet kunnen opvangen voordat de AOV gaat
          uitkeren.
        </p>
        <p>
          Voor een zzp&apos;er met een grote financiële buffer kan een lange wachttijd een manier
          zijn om de maandelijkse kosten van een AOV te beperken.
        </p>

        <h2>Wat is een lange wachttijd bij een AOV?</h2>
        <p>
          De wachttijd is de periode waarin je na het ontstaan van arbeidsongeschiktheid nog geen
          AOV-uitkering ontvangt.
        </p>
        <p>Bij een wachttijd van:</p>
        <ul>
          <li>
            <strong>1 maand</strong> vang je ongeveer de eerste maand zelf op;
          </li>
          <li>
            <strong>3 maanden</strong> vang je ongeveer drie maanden zelf op;
          </li>
          <li>
            <strong>6 maanden</strong> draag je het risico van het eerste halfjaar;
          </li>
          <li>
            <strong>12 maanden</strong> moet je een jaar zonder AOV-uitkering kunnen overbruggen;
          </li>
          <li>
            <strong>24 maanden</strong> moet je twee jaar zelf kunnen opvangen.
          </li>
        </ul>
        <p>
          Er bestaat geen officiële grens vanaf wanneer een wachttijd &quot;lang&quot; wordt
          genoemd. In de praktijk kun je 6, 12 en 24 maanden als langere wachttijden beschouwen.
        </p>
        <p>
          Sommige actuele AOV-producten bieden inderdaad wachttijden van 1, 2, 3, 6, 12 of 24
          maanden.
        </p>

        <h2>Waarom kiezen voor een lange wachttijd?</h2>
        <p>
          De belangrijkste reden is de <strong>lagere premie</strong>.
        </p>
        <p>
          Een verzekeraar hoeft bij een lange wachttijd immers niet direct uit te keren wanneer
          je arbeidsongeschikt raakt. Je neemt zelf een groter deel van het risico op je.
        </p>
        <p>
          KVK noemt de wachttijd expliciet als één van de factoren die de premie van een AOV
          beïnvloeden. Een langere wachttijd betekent doorgaans een lagere premie.
        </p>
        <p>Je kunt daardoor bijvoorbeeld kiezen voor:</p>
        <p>
          <strong>Hogere premie + korte wachttijd</strong>
        </p>
        <p>of:</p>
        <p>
          <strong>Lagere premie + lange wachttijd</strong>
        </p>
        <p>
          Bij een lange wachttijd gebruik je je eigen vermogen als eerste vangnet en de AOV vooral
          voor langdurige arbeidsongeschiktheid.
        </p>

        <h2>Hoeveel goedkoper is een AOV met lange wachttijd?</h2>
        <p>
          Er bestaat geen vast bedrag of percentage waarmee je de besparing kunt berekenen.
        </p>
        <p>De premie hangt namelijk ook af van onder andere:</p>
        <ul>
          <li>je leeftijd;</li>
          <li>je beroep;</li>
          <li>het verzekerde bedrag;</li>
          <li>de eindleeftijd;</li>
          <li>de uitkeringsduur;</li>
          <li>de gekozen voorwaarden;</li>
          <li>de wachttijd.</li>
        </ul>
        <p>
          Daarom kun je niet zeggen dat een wachttijd van 12 maanden bijvoorbeeld altijd 30%
          goedkoper is dan een wachttijd van 1 maand.
        </p>
        <p>Je moet de verschillende opties bij dezelfde verzekering naast elkaar zetten.</p>

        <h3>Voorbeeld</h3>
        <p>Stel dat je €2.500 per maand wilt verzekeren.</p>
        <p>Je kunt dan bijvoorbeeld twee scenario&apos;s vergelijken:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium" />
                <th className="py-2 pr-4 text-right font-medium">Korte wachttijd</th>
                <th className="py-2 text-right font-medium">Lange wachttijd</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Verzekerd inkomen', '€2.500 p/m', '€2.500 p/m'],
                ['Wachttijd', '1 maand', '12 maanden'],
                ['Eerste periode zelf opvangen', '± 1 maand', '± 12 maanden'],
                ['Verwachte premie', 'Hoger', 'Lager'],
                ['Benodigde buffer', 'Lager', 'Hoger'],
              ].map(([label, short, long]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">{label}</td>
                  <td className="py-2 pr-4 text-right">{short}</td>
                  <td className="py-2 text-right">{long}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>Het precieze premieverschil moet je per verzekering berekenen.</p>

        <h2>Hoeveel buffer heb je nodig bij een lange wachttijd?</h2>
        <p>Dit is de belangrijkste vraag als je voor een lange wachttijd kiest.</p>
        <p>Stel dat je noodzakelijke privé-uitgaven €2.000 per maand bedragen.</p>
        <p>Bij een wachttijd van 12 maanden moet je in principe ongeveer:</p>
        <p>
          <strong>€2.000 × 12 = €24.000</strong>
        </p>
        <p>kunnen overbruggen.</p>
        <p>
          Dat is alleen een eenvoudige rekensom. Je werkelijke benodigde buffer kan anders zijn.
        </p>
        <p>
          Je kunt tijdens arbeidsongeschiktheid bijvoorbeeld nog gedeeltelijk inkomen hebben. Aan
          de andere kant kunnen sommige zakelijke kosten gewoon doorlopen.
        </p>
        <p>
          Kijk daarom niet alleen naar je netto privé-uitgaven, maar naar je totale financiële
          situatie.
        </p>

        <h2>Lange wachttijd bij een zzp&apos;er met veel spaargeld</h2>
        <p>
          Een lange wachttijd kan vooral interessant zijn als je al een behoorlijke financiële
          buffer hebt.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          <p>
            Je hebt €40.000 aan direct beschikbare spaargelden en hebt ongeveer €2.000 per maand
            nodig om je vaste lasten te betalen.
          </p>
        </blockquote>
        <p>
          Je hebt dan in theorie ruimte om langere tijd zonder AOV-uitkering te overbruggen.
        </p>
        <p>
          Je zou er vervolgens voor kunnen kiezen om de AOV vooral te gebruiken voor het risico
          dat je zelf financieel moeilijk kunt dragen:{' '}
          <strong>langdurige arbeidsongeschiktheid</strong>.
        </p>
        <p>
          Je verzekert dan niet ieder tijdelijk inkomensverlies, maar vooral het grotere
          financiële risico.
        </p>

        <h2>Lange wachttijd met een schenkkring</h2>
        <p>
          Een andere mogelijkheid is om een lange AOV-wachttijd te combineren met een voorziening
          voor de eerste periode.
        </p>
        <p>
          Een schenkkring kan bijvoorbeeld worden gebruikt om de eerste periode van
          arbeidsongeschiktheid op te vangen, terwijl een AOV met een langere wachttijd het risico
          daarna overneemt.
        </p>
        <p>
          KVK noemt deze combinatie expliciet als mogelijkheid: ondernemers kunnen een schenkkring
          combineren met een AOV met een langere wachttijd om de kosten van de AOV lager te
          houden.
        </p>
        <p>
          Een schenkkring is echter geen volledige vervanging voor een AOV. De voorwaarden en
          maximale uitkeringsduur verschillen en KVK vermeldt dat schenkkringen doorgaans maximaal
          twee jaar schenkingen doen.
        </p>

        <h2>Lange wachttijd en crowdsurance</h2>
        <p>
          Ook crowdsurance kan worden gecombineerd met een AOV met een lange wachttijd.
        </p>
        <p>
          Het idee is vergelijkbaar: de eerste periode wordt op een andere manier opgevangen en de
          AOV begint pas daarna met uitkeren.
        </p>
        <p>
          Volgens KVK kan crowdsurance bijvoorbeeld worden gebruikt voor de eerste twee jaar,
          waarna een AOV met een wachttijd van twee jaar het risico vanaf dat moment opvangt.
        </p>
        <p>
          Dit kan de AOV-premie aanzienlijk verlagen, maar je moet de voorwaarden van beide
          voorzieningen afzonderlijk bekijken.
        </p>

        <h2>AOV met 1 jaar wachttijd</h2>
        <p>
          Een wachttijd van één jaar betekent dat je bij een gedekte arbeidsongeschiktheid de
          eerste twaalf maanden zelf moet overbruggen.
        </p>
        <p>De AOV is dan vooral gericht op langdurige arbeidsongeschiktheid.</p>
        <p>Dit kan interessant zijn als je:</p>
        <ul>
          <li>een grote financiële buffer hebt;</li>
          <li>relatief lage vaste lasten hebt;</li>
          <li>voldoende vermogen hebt om tijdelijk inkomen te missen;</li>
          <li>een lagere AOV-premie belangrijk vindt;</li>
          <li>vooral het risico van langdurige arbeidsongeschiktheid wilt verzekeren.</li>
        </ul>
        <p>
          Het nadeel is duidelijk: als je na bijvoorbeeld drie maanden weer volledig aan het werk
          kunt, heeft je AOV met een wachttijd van één jaar niets uitgekeerd.
        </p>

        <h2>AOV met 2 jaar wachttijd</h2>
        <p>Een wachttijd van twee jaar is een zeer lange wachttijd voor een particuliere AOV.</p>
        <p>
          Je draagt daarmee zelf het risico van de eerste twee jaar arbeidsongeschiktheid.
        </p>
        <p>Daar staat een lagere premie tegenover.</p>
        <p>
          Een wachttijd van twee jaar sluit bovendien aan bij de huidige plannen voor de
          toekomstige verplichte AOV. Volgens het huidige wetsvoorstel zou de Basisverzekering
          Arbeidsongeschiktheid Zelfstandigen (BAZ) namelijk een wachttijd van twee jaar krijgen.
          De plannen zijn echter nog niet definitief.
        </p>
        <p>
          Dat betekent niet dat een private AOV met een wachttijd van twee jaar hetzelfde is als
          de toekomstige BAZ. Het zijn verschillende regelingen met andere voorwaarden en de
          wetgeving kan nog veranderen.
        </p>

        <h2>Lange wachttijd en de toekomstige verplichte AOV</h2>
        <p>Dit is een relevant punt voor zzp&apos;ers die nu een AOV overwegen.</p>
        <p>
          De verplichte AOV is in september 2026 nog <strong>niet van kracht</strong>. KVK
          verwacht momenteel invoering rond 2030, maar de precieze datum en definitieve regels
          staan nog niet vast.
        </p>
        <p>
          In het huidige voorstel is de wachttijd twee jaar. KVK vermeldt daarom dat zelfstandigen
          die onder de toekomstige regeling vallen zelf iets moeten regelen voor die eerste twee
          jaar, bijvoorbeeld spaargeld of een schenkkring.
        </p>
        <p>Een private AOV kan juist een kortere wachttijd hebben.</p>
        <p>Lees hierover meer in:</p>
        <p>
          <Link
            href="/blogs/aov-verplicht-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Is een lange wachttijd altijd goedkoper?</h2>
        <p>
          Een langere wachttijd verlaagt doorgaans de premie, maar het is niet de enige manier om
          een AOV goedkoper te maken.
        </p>
        <p>Andere factoren zijn bijvoorbeeld:</p>
        <ul>
          <li>het verzekerde maandbedrag;</li>
          <li>je eindleeftijd;</li>
          <li>de uitkeringsduur;</li>
          <li>je beroep;</li>
          <li>de gekozen dekking.</li>
        </ul>
        <p>
          KVK noemt onder meer beroep, verzekerd bedrag, wachttijd, looptijd en leeftijd als
          factoren die de premie beïnvloeden.
        </p>
        <p>
          Je kunt daarom beter niet alleen de wachttijd aanpassen om de premie zo laag mogelijk te
          krijgen.
        </p>
        <p>
          Het doel is om een combinatie te kiezen die je financieel kunt dragen én die het risico
          dekt dat je zelf niet kunt dragen.
        </p>

        <h2>Wat zijn de nadelen van een lange wachttijd?</h2>
        <p>Een lange wachttijd heeft een paar duidelijke nadelen.</p>

        <h3>1. Je hebt een grotere buffer nodig</h3>
        <p>Je moet langere tijd zonder AOV-uitkering kunnen leven.</p>

        <h3>2. Je loopt meer risico bij langdurige uitval</h3>
        <p>
          Als je vermogen tijdens de wachttijd sterk afneemt, kan dat financiële problemen
          veroorzaken.
        </p>

        <h3>3. Tijdelijke arbeidsongeschiktheid is vaak niet verzekerd</h3>
        <p>
          Word je bijvoorbeeld vier maanden ziek terwijl je wachttijd twaalf maanden bedraagt, dan
          ontvang je geen AOV-uitkering.
        </p>

        <h3>4. Je vermogen zit tijdelijk vast als vangnet</h3>
        <p>
          Geld dat je als buffer aanhoudt, kun je niet tegelijkertijd gebruiken voor andere
          doelen.
        </p>

        <h2>Lange of korte wachttijd?</h2>
        <p>De keuze kun je eenvoudig bekijken als een ruil tussen premie en eigen risico.</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[320px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium" />
                <th className="py-2 pr-4 font-medium">Korte wachttijd</th>
                <th className="py-2 font-medium">Lange wachttijd</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Premie', 'Meestal hoger', 'Meestal lager'],
                ['Eigen buffer', 'Minder nodig', 'Meer nodig'],
                ['AOV begint', 'Sneller', 'Later'],
                ['Dekking tijdelijk inkomensverlies', 'Groter', 'Kleiner'],
                ['Dekking langdurig inkomensverlies', 'Ja', 'Ja'],
                ['Financieel risico zelf dragen', 'Lager', 'Hoger'],
              ].map(([label, short, long]) => (
                <tr key={label} className="border-b border-slate-100 align-top">
                  <td className="py-2 pr-4 font-medium">{label}</td>
                  <td className="py-2 pr-4">{short}</td>
                  <td className="py-2">{long}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Een lange wachttijd is dus vooral interessant wanneer je bewust een groter deel van het
          risico zelf wilt dragen.
        </p>
        <p>
          Vergelijk ook:{' '}
          <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
            AOV met korte wachttijd
          </Link>
        </p>

        <h2>Hoe bepaal je welke wachttijd bij je past?</h2>
        <p>Begin niet bij de premie, maar bij je financiële buffer.</p>
        <p>Beantwoord bijvoorbeeld deze vragen:</p>
        <ol>
          <li>Hoeveel heb ik direct beschikbaar?</li>
          <li>Hoe hoog zijn mijn noodzakelijke maandelijkse uitgaven?</li>
          <li>Heb ik naast mijn zzp-inkomen nog andere inkomsten?</li>
          <li>Heeft mijn partner inkomen?</li>
          <li>Hoeveel zakelijke kosten lopen door als ik niet kan werken?</li>
          <li>Hoeveel maanden kan ik mijn huidige levensstijl financieel volhouden?</li>
          <li>Wil ik mijn spaargeld hiervoor gebruiken?</li>
        </ol>
        <p>Daarna kun je verschillende wachttijden naast elkaar zetten.</p>

        <h3>Simpel voorbeeld</h3>
        <p>Stel:</p>
        <ul>
          <li>buffer: €30.000;</li>
          <li>noodzakelijke uitgaven: €2.000 per maand;</li>
          <li>andere inkomsten: €0.</li>
        </ul>
        <p>
          Dan kun je theoretisch ongeveer 15 maanden aan noodzakelijke uitgaven opvangen.
        </p>
        <p>
          Een wachttijd van 12 maanden kan dan financieel anders uitpakken dan voor iemand met
          slechts €5.000 spaargeld.
        </p>
        <p>
          Dat betekent niet automatisch dat 12 maanden de juiste keuze is. Je wilt immers ook
          rekening houden met onverwachte uitgaven en de mogelijkheid dat je arbeidsongeschiktheid
          langer duurt.
        </p>

        <h2>Bereken hoeveel AOV je nodig hebt</h2>
        <p>De wachttijd is maar één onderdeel van je AOV.</p>
        <p>Je moet ook bepalen:</p>
        <ul>
          <li>hoeveel inkomen je wilt verzekeren;</li>
          <li>hoeveel buffer je hebt;</li>
          <li>welke wachttijd je kunt dragen;</li>
          <li>tot welke leeftijd je verzekerd wilt zijn;</li>
          <li>hoe lang je een uitkering nodig hebt.</li>
        </ul>
        <p>
          Gebruik daarvoor de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>{' '}
          van FactuurBaas.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <InsifyAovCta />
        <p>Je kunt daarnaast verder lezen:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
              AOV met korte wachttijd
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-zonder-medische-keuring" className="text-warm-orange hover:underline">
              AOV zonder medische keuring
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-verplicht-voor-zzpers" className="text-warm-orange hover:underline">
              AOV verplicht voor zzp&apos;ers?
            </Link>
          </li>
        </ul>

        <h2>Conclusie</h2>
        <p>
          Een <strong>AOV met lange wachttijd</strong> kan een manier zijn om je premie te
          verlagen terwijl je jezelf wel verzekert tegen langdurige arbeidsongeschiktheid.
        </p>
        <p>
          Daar staat tegenover dat je een grotere financiële buffer nodig hebt. Een wachttijd van
          12 of 24 maanden betekent immers dat je een lange periode zelf moet kunnen overbruggen.
        </p>
        <p>
          De kernvraag is daarom niet alleen hoeveel je op je AOV kunt besparen, maar:
        </p>
        <p>
          <strong>
            Hoeveel maanden kan ik financieel zelf dragen als ik niet kan werken?
          </strong>
        </p>
        <p>
          Heb je voldoende vermogen, dan kan een langere wachttijd een manier zijn om de premie te
          beperken. Heb je weinig buffer, dan kan een kortere wachttijd juist belangrijker zijn.
        </p>
        <p>
          Vergelijk daarom niet alleen de premie, maar kijk naar de combinatie van{' '}
          <strong>wachttijd, verzekerd bedrag, uitkeringsduur, eindleeftijd en voorwaarden</strong>
          .
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'hoeveel-aov-heb-ik-nodig',
    relatedSlugs: [
      'aov-zzp',
      'wat-kost-een-aov-voor-zzpers',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'aov-voor-startende-zzpers',
      'aov-berekenen-voor-zzpers',
    ],
    title: "Hoeveel AOV heb ik nodig als zzp'er?",
    metaTitle: "Hoeveel AOV heb ik nodig als zzp'er? Bereken je dekking",
    excerpt:
      "Hoeveel AOV heb je nodig als zzp'er? Bereken welk inkomen je moet verzekeren aan de hand van je vaste lasten, buffer en andere inkomsten.",
    keywords:
      "hoeveel aov heb ik nodig, hoeveel aov heb ik nodig als zzp'er, hoeveel inkomen verzekeren aov, aov bedrag berekenen, hoeveel aov verzekeren, welk bedrag aov, aov verzekerd bedrag, aov berekenen zzp, hoe hoog moet mijn aov zijn, aov inkomen verzekeren, aov dekking berekenen",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hoeveel%20AOV%20heb%20ik%20nodig.jpg',
      alt: "Hoeveel AOV heb ik nodig als zzp'er? Bereken je dekking",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: "Hoeveel AOV heb ik nodig als zzp'er?",
        answer:
          'Dat hangt vooral af van je noodzakelijke maandelijkse uitgaven, andere inkomsten en financiële buffer. Er is geen standaardbedrag dat voor iedere zzp\'er geldt.',
      },
      {
        question: 'Moet ik mijn volledige inkomen verzekeren?',
        answer:
          'Nee. Je kunt ervoor kiezen een deel van je inkomen zelf te dragen met bijvoorbeeld spaargeld of andere inkomsten.',
      },
      {
        question: 'Welk bedrag moet ik verzekeren?',
        answer:
          'Begin met je noodzakelijke maandelijkse uitgaven en trek daar structurele andere inkomsten vanaf. Kijk daarna hoeveel risico je zelf kunt dragen.',
      },
      {
        question: 'Is mijn omzet het bedrag dat ik moet verzekeren?',
        answer:
          'Nee. Omzet is niet hetzelfde als inkomen. Je moet onder andere rekening houden met zakelijke kosten en belastingen.',
      },
      {
        question: 'Heeft mijn spaargeld invloed op mijn benodigde AOV?',
        answer:
          'Ja. Met een grotere financiële buffer kun je een groter deel van het risico zelf dragen. KVK noemt je financiële buffer expliciet als factor bij de keuze voor een AOV.',
      },
      {
        question: 'Heeft de wachttijd invloed op hoeveel AOV ik nodig heb?',
        answer:
          'De wachttijd bepaalt vooral hoe lang je zelf een inkomensverlies moet kunnen opvangen voordat de AOV uitkeert. Een langere wachttijd kan de premie verlagen, maar vraagt om een grotere buffer.',
      },
      {
        question: 'Kan ik mijn AOV later aanpassen?',
        answer:
          'Dat hangt af van de verzekeraar en polisvoorwaarden. Omdat je inkomen, vaste lasten en financiële buffer kunnen veranderen, is het verstandig je dekking regelmatig opnieuw te bekijken.',
      },
    ],
    content: (
      <>
        <p>
          Hoeveel inkomen moet je als zzp&apos;er verzekeren met een
          arbeidsongeschiktheidsverzekering (AOV)?
        </p>
        <p>
          Het korte antwoord: <strong>niet automatisch je volledige huidige inkomen</strong>.
        </p>
        <p>
          De juiste AOV-dekking hangt af van hoeveel geld je nodig hebt om je vaste lasten en
          levensonderhoud te betalen, hoeveel inkomen je eventueel nog hebt uit andere bronnen en
          hoeveel financiële buffer je zelf hebt.
        </p>
        <p>
          KVK noemt onder andere je vaste lasten, andere inkomsten en financiële buffer als
          factoren bij het bepalen van hoeveel risico je zelf kunt dragen.
        </p>
        <p>In dit artikel lees je hoe je zelf kunt berekenen hoeveel AOV je nodig hebt.</p>

        <h2>Hoeveel inkomen moet je verzekeren?</h2>
        <p>
          Begin niet met je omzet, maar met het bedrag dat je <strong>privé nodig hebt</strong>.
        </p>
        <p>
          Je omzet is namelijk niet hetzelfde als je inkomen. Vanuit je omzet betaal je bijvoorbeeld
          nog zakelijke kosten, belastingen en andere reserveringen.
        </p>
        <p>Een eenvoudige eerste berekening is:</p>
        <p>
          <strong>
            Benodigd AOV-inkomen = noodzakelijke maandelijkse uitgaven − andere inkomsten
          </strong>
        </p>
        <p>
          Daarna kun je rekening houden met je financiële buffer en de wachttijd van je AOV.
        </p>

        <h3>Voorbeeld</h3>
        <p>Stel dat je iedere maand €3.000 nodig hebt voor:</p>
        <ul>
          <li>hypotheek of huur;</li>
          <li>boodschappen;</li>
          <li>energie;</li>
          <li>verzekeringen;</li>
          <li>vervoer;</li>
          <li>andere vaste lasten;</li>
          <li>normale privé-uitgaven.</li>
        </ul>
        <p>Je partner heeft €1.000 netto inkomen per maand.</p>
        <p>
          Dan hoef je niet automatisch €3.000 per maand aan AOV-inkomen te verzekeren.
        </p>
        <p>Je inkomensbehoefte is in dit eenvoudige voorbeeld:</p>
        <p>
          <strong>€3.000 − €1.000 = €2.000 per maand</strong>
        </p>
        <p>
          Dat betekent niet automatisch dat een AOV van precies €2.000 de juiste keuze is. De
          polisvoorwaarden, belasting, eventuele gedeeltelijke arbeidsongeschiktheid en je overige
          financiële situatie spelen ook een rol.
        </p>

        <h2>Kijk naar je noodzakelijke uitgaven</h2>
        <p>
          Een goede manier om je AOV-bedrag te bepalen is om eerst je maandelijkse uitgaven op een
          rij te zetten.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Uitgave</th>
                <th className="py-2 text-right font-medium">Per maand</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Hypotheek/huur', '€1.000'],
                ['Energie', '€200'],
                ['Boodschappen', '€500'],
                ['Zorg en verzekeringen', '€250'],
                ['Auto/vervoer', '€300'],
                ['Telefoon/internet', '€100'],
                ['Overige vaste lasten', '€250'],
              ].map(([label, amount]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-2 pr-4">{label}</td>
                  <td className="py-2 text-right">{amount}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 pr-4 font-semibold">Totaal</td>
                <td className="py-2 text-right font-semibold">€2.600</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je hoeft vervolgens niet per se iedere euro van deze €2.600 te verzekeren.
        </p>
        <p>
          Je kunt bijvoorbeeld besluiten een deel zelf op te vangen met spaargeld of andere
          inkomsten.
        </p>

        <h2>Houd rekening met andere inkomsten</h2>
        <p>
          Heb je naast je inkomen als zzp&apos;er nog andere inkomsten? Dan kan je benodigde
          AOV-bedrag lager zijn.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>inkomen van je partner;</li>
          <li>inkomsten uit loondienst;</li>
          <li>inkomsten uit een ander bedrijf;</li>
          <li>bepaalde uitkeringen;</li>
          <li>inkomsten uit vermogen;</li>
          <li>andere structurele inkomsten.</li>
        </ul>
        <p>
          Stel dat je €3.500 per maand nodig hebt en je partner €1.500 bijdraagt.
        </p>
        <p>Dan resteert:</p>
        <p>
          <strong>€3.500 − €1.500 = €2.000</strong>
        </p>
        <p>
          Je zou dan kunnen kijken naar een AOV die ongeveer €2.000 aan inkomen beschermt,
          afhankelijk van de voorwaarden en je overige financiële situatie.
        </p>

        <h2>Vergeet je financiële buffer niet</h2>
        <p>Je spaargeld speelt ook een rol.</p>
        <p>
          Heb je bijvoorbeeld €30.000 direct beschikbaar, dan kun je een deel van een tijdelijk
          inkomensverlies zelf opvangen.
        </p>
        <p>
          Heb je slechts €2.000 spaargeld, dan is je financiële ruimte veel kleiner.
        </p>
        <p>
          Je buffer is vooral belangrijk in combinatie met de <strong>wachttijd</strong> van je
          AOV.
        </p>
        <p>
          Bij een wachttijd van 12 maanden moet je immers een veel langere periode zelf kunnen
          overbruggen dan bij een wachttijd van één maand.
        </p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/aov-met-korte-wachttijd"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV met korte wachttijd
          </Link>
        </p>
        <p>
          <Link
            href="/blogs/aov-met-lange-wachttijd"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV met lange wachttijd
          </Link>
        </p>

        <h2>Hoeveel AOV heb ik nodig bij een wachttijd?</h2>
        <p>
          De wachttijd bepaalt hoeveel inkomen je zelf moet kunnen opvangen voordat de AOV
          uitkeert.
        </p>
        <p>Stel:</p>
        <ul>
          <li>je hebt €2.500 per maand nodig;</li>
          <li>je hebt geen andere inkomsten;</li>
          <li>je AOV heeft een wachttijd van 6 maanden.</li>
        </ul>
        <p>Dan moet je in principe rekening houden met ongeveer:</p>
        <p>
          <strong>€2.500 × 6 = €15.000</strong>
        </p>
        <p>aan noodzakelijke uitgaven tijdens de wachttijd.</p>
        <p>
          Heb je een buffer van €25.000, dan heb je meer ruimte dan iemand met €5.000 spaargeld.
        </p>
        <p>
          De wachttijd en het verzekerde bedrag moeten daarom samen worden bekeken.
        </p>

        <h2>Moet ik mijn volledige inkomen verzekeren?</h2>
        <p>
          <strong>Nee, dat hoeft niet automatisch.</strong>
        </p>
        <p>
          Een AOV is bedoeld om je financiële risico bij arbeidsongeschiktheid op te vangen. Je
          kunt ervoor kiezen om een deel van je inkomen zelf te dragen.
        </p>
        <p>Dat kan bijvoorbeeld door:</p>
        <ul>
          <li>spaargeld;</li>
          <li>inkomen van je partner;</li>
          <li>andere inkomsten;</li>
          <li>een schenkkring;</li>
          <li>crowdsurance;</li>
          <li>een langere wachttijd.</li>
        </ul>
        <p>
          KVK noemt het combineren van voorzieningen ook als mogelijkheid om het risico te
          verdelen. Zo kan een schenkkring bijvoorbeeld worden gecombineerd met een AOV.
        </p>

        <h2>Hoeveel procent van je inkomen moet je verzekeren?</h2>
        <p>Er is geen universeel percentage dat voor iedere zzp&apos;er geldt.</p>
        <p>
          Je ziet soms percentages zoals 70%, 80% of 90% van het inkomen terug bij
          verzekeringsproducten of alternatieve voorzieningen, maar dat betekent niet dat je als
          zzp&apos;er standaard een bepaald percentage van je inkomen moet verzekeren.
        </p>
        <p>Je moet eerst bepalen hoeveel geld je daadwerkelijk nodig hebt.</p>
        <p>Stel:</p>
        <ul>
          <li>winst/inkomen: €4.000 per maand;</li>
          <li>noodzakelijke uitgaven: €2.500;</li>
          <li>andere inkomsten: €500.</li>
        </ul>
        <p>Dan is je financiële behoefte in dit vereenvoudigde voorbeeld:</p>
        <p>
          <strong>€2.500 − €500 = €2.000 per maand.</strong>
        </p>
        <p>
          Het kan dan onnodig duur zijn om automatisch €4.000 per maand te willen verzekeren.
        </p>

        <h2>Let op het verschil tussen omzet, winst en inkomen</h2>
        <p>Dit is vooral belangrijk voor zzp&apos;ers.</p>
        <p>
          Een omzet van €6.000 per maand betekent niet dat je €6.000 per maand kunt verzekeren.
        </p>
        <p>
          Van je omzet moeten bijvoorbeeld nog zakelijke kosten worden betaald.
        </p>

        <h3>Voorbeeld</h3>
        <p>Je hebt:</p>
        <ul>
          <li>omzet: €7.000;</li>
          <li>zakelijke kosten: €1.500.</li>
        </ul>
        <p>
          Dan blijft €5.500 over vóór belastingen en andere reserveringen.
        </p>
        <p>
          Je persoonlijke financiële behoefte kan vervolgens bijvoorbeeld €3.000 per maand zijn.
        </p>
        <p>
          Voor het bepalen van je AOV kijk je daarom niet simpelweg naar je omzet.
        </p>

        <h2>Wat als je inkomen sterk wisselt?</h2>
        <p>Een wisselend inkomen maakt het bepalen van je AOV iets lastiger.</p>
        <p>
          Als je het ene jaar gemiddeld €3.000 per maand verdient en het volgende jaar €5.000,
          moet je niet automatisch alleen naar je hoogste inkomen kijken.
        </p>
        <p>Kijk liever naar:</p>
        <ul>
          <li>je gemiddelde inkomen;</li>
          <li>je vaste lasten;</li>
          <li>je structurele financiële verplichtingen;</li>
          <li>je buffer;</li>
          <li>de inkomsten die je huishouden daarnaast heeft.</li>
        </ul>
        <p>
          Een AOV is bedoeld voor het beschermen van je financiële situatie. Een hoger verzekerd
          bedrag betekent bovendien doorgaans een hogere premie.
        </p>

        <h2>Hoeveel AOV heb ik nodig als starter?</h2>
        <p>Als startende zzp&apos;er kan je inkomen nog sterk veranderen.</p>
        <p>
          Het kan daarom lastig zijn om direct een definitief verzekerd bedrag te bepalen.
        </p>
        <p>Kijk in ieder geval naar:</p>
        <ol>
          <li>je huidige noodzakelijke uitgaven;</li>
          <li>je verwachte inkomen;</li>
          <li>je financiële buffer;</li>
          <li>het inkomen van een eventuele partner;</li>
          <li>je toekomstige vaste lasten.</li>
        </ol>
        <p>Controleer vervolgens regelmatig of je dekking nog aansluit.</p>
        <p>
          KVK adviseert ondernemers om hun voorziening opnieuw te bekijken wanneer hun situatie
          verandert.
        </p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/aov-voor-startende-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>Wat gebeurt er als je gedeeltelijk arbeidsongeschikt raakt?</h2>
        <p>
          Je hoeft niet altijd volledig arbeidsongeschikt te zijn om met een AOV te maken te
          krijgen.
        </p>
        <p>
          Een AOV kan onder voorwaarden ook uitkeren bij gedeeltelijke arbeidsongeschiktheid. Hoe
          dit precies werkt, hangt af van de polis.
        </p>
        <p>Bijvoorbeeld:</p>
        <blockquote>
          <p>
            Je kunt door een ziekte nog maar 50% van je werkzaamheden uitvoeren.
          </p>
        </blockquote>
        <p>
          Of je vervolgens recht hebt op een gedeeltelijke AOV-uitkering hangt af van de
          voorwaarden van je verzekering en de manier waarop arbeidsongeschiktheid wordt
          vastgesteld.
        </p>
        <p>
          Kijk daarom niet alleen naar het maximale maandbedrag, maar ook naar de voorwaarden
          waaronder je dat bedrag ontvangt.
        </p>

        <h2>Hoeveel AOV heb ik nodig voor mijn hypotheek?</h2>
        <p>
          Heb je een hypotheek, dan is het verstandig om je hypotheeklast mee te nemen in je
          berekening.
        </p>
        <p>
          Een hypotheek loopt immers door als je door ziekte tijdelijk of langdurig minder kunt
          werken.
        </p>
        <p>
          Maar ook hier geldt: verzeker niet automatisch je volledige hypotheeklast bovenop je
          andere uitgaven.
        </p>
        <p>Neem je totale financiële situatie:</p>
        <p>
          <strong>
            woonlasten + levensonderhoud + andere vaste lasten − andere inkomsten = bedrag dat je
            moet opvangen
          </strong>
        </p>
        <p>
          Heb je bijvoorbeeld een hypotheeklast van €1.200 en daarnaast €1.800 aan andere
          noodzakelijke uitgaven, dan heb je €3.000 aan noodzakelijke uitgaven.
        </p>
        <p>
          Heeft je partner €1.000 inkomen, dan resteert in dit voorbeeld €2.000.
        </p>
        <p>
          Je kunt vervolgens bepalen welk deel je met een AOV wilt afdekken.
        </p>

        <h2>Wat kost een hogere AOV?</h2>
        <p>
          Hoe hoger het bedrag dat je wilt verzekeren, hoe hoger de premie doorgaans is. KVK noemt
          het verzekerde bedrag dan ook expliciet als een van de factoren die de AOV-premie
          beïnvloeden.
        </p>
        <p>
          Daarom is het verstandig om niet simpelweg het maximale bedrag te verzekeren.
        </p>
        <p>
          Een lagere dekking kan een aanzienlijk verschil maken in de maandelijkse premie.
        </p>
        <p>
          Daar staat natuurlijk tegenover dat je bij arbeidsongeschiktheid ook een groter deel van
          je inkomen zelf moet opvangen.
        </p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/wat-kost-een-aov-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Een eenvoudige formule om je AOV te berekenen</h2>
        <p>Je kunt beginnen met deze eenvoudige berekening:</p>
        <p>
          <strong>1. Tel je noodzakelijke maandelijkse uitgaven op.</strong>
        </p>
        <p>Bijvoorbeeld:</p>
        <p>€2.800</p>
        <p>
          <strong>2. Trek structurele andere inkomsten af.</strong>
        </p>
        <p>Bijvoorbeeld:</p>
        <p>€2.800 − €800 = €2.000</p>
        <p>
          <strong>3. Bepaal hoeveel van het resterende bedrag je zelf kunt dragen.</strong>
        </p>
        <p>Bijvoorbeeld:</p>
        <p>€2.000 − €300 eigen buffer/andere ruimte = €1.700</p>
        <p>
          <strong>4. Kijk vervolgens naar de beschikbare AOV-dekking.</strong>
        </p>
        <p>
          In dit voorbeeld zou je kunnen onderzoeken of een AOV met een uitkering rond €1.700 per
          maand aansluit bij je situatie.
        </p>
        <p>
          Dit is een vereenvoudigd rekenvoorbeeld. De uiteindelijke dekking moet ook aansluiten op
          de voorwaarden en fiscale behandeling van de specifieke verzekering.
        </p>

        <h2>Hoeveel AOV heb ik nodig bij €3.000 inkomen?</h2>
        <p>Stel dat je als zzp&apos;er gemiddeld €3.000 per maand overhoudt.</p>
        <p>Je vaste en noodzakelijke uitgaven zijn €2.300.</p>
        <p>
          Je partner heeft €500 aan structurele inkomsten die beschikbaar zijn voor de gezamenlijke
          huishouding.
        </p>
        <p>Dan resteert:</p>
        <p>
          <strong>€2.300 − €500 = €1.800</strong>
        </p>
        <p>
          Je zou dan kunnen onderzoeken of je ongeveer €1.800 per maand wilt verzekeren.
        </p>
        <p>
          Je hoeft dus niet automatisch je volledige inkomen van €3.000 te verzekeren.
        </p>

        <h2>Hoeveel AOV heb ik nodig bij €5.000 inkomen?</h2>
        <p>Bij een inkomen van €5.000 per maand geldt hetzelfde principe.</p>
        <p>
          Stel dat je noodzakelijke uitgaven €3.200 bedragen en je andere structurele inkomsten
          €700 zijn.
        </p>
        <p>Dan is de financiële behoefte:</p>
        <p>
          <strong>€3.200 − €700 = €2.500 per maand.</strong>
        </p>
        <p>
          Je kunt dan bijvoorbeeld rond €2.500 aan benodigde dekking onderzoeken.
        </p>
        <p>
          Je daadwerkelijke keuze kan hoger of lager uitvallen afhankelijk van je buffer, gewenste
          levensstandaard en hoeveel risico je zelf wilt dragen.
        </p>

        <h2>Hoeveel AOV heb ik nodig bij €7.000 inkomen?</h2>
        <p>
          Bij een hoger inkomen kan het verschil tussen inkomen en noodzakelijke uitgaven nog
          groter worden.
        </p>
        <p>Stel:</p>
        <ul>
          <li>inkomen: €7.000;</li>
          <li>noodzakelijke uitgaven: €4.000;</li>
          <li>andere inkomsten: €1.000.</li>
        </ul>
        <p>Dan resteert:</p>
        <p>
          <strong>€4.000 − €1.000 = €3.000</strong>
        </p>
        <p>
          Je zou dus niet automatisch €7.000 per maand hoeven verzekeren.
        </p>
        <p>
          Dit is precies waarom het bepalen van je AOV op basis van alleen je omzet of inkomen
          weinig zegt.
        </p>

        <h2>Wat moet je naast het bedrag nog kiezen?</h2>
        <p>Het verzekerde bedrag is slechts één onderdeel van je AOV.</p>
        <p>Je moet ook kijken naar:</p>
        <ul>
          <li>
            <strong>wachttijd:</strong> hoe lang kun je zelf zonder uitkering?
          </li>
          <li>
            <strong>eindleeftijd:</strong> tot wanneer wil je verzekerd zijn?
          </li>
          <li>
            <strong>uitkeringsduur:</strong> hoe lang wordt er maximaal uitgekeerd?
          </li>
          <li>
            <strong>arbeidsongeschiktheidscriterium:</strong> wanneer heb je recht op een
            uitkering?
          </li>
          <li>
            <strong>indexatie:</strong> stijgt de uitkering eventueel mee?
          </li>
          <li>
            <strong>premie:</strong> wat kost de gekozen dekking?
          </li>
          <li>
            <strong>medische acceptatie:</strong> onder welke voorwaarden word je geaccepteerd?
          </li>
        </ul>
        <p>
          Vooral de eindleeftijd verdient aandacht. KVK waarschuwt bijvoorbeeld dat sommige
          AOV&apos;s voor bepaalde zware beroepen maar tot 60 jaar uitkeren, waardoor een
          inkomensgat tot de AOW-leeftijd kan ontstaan.
        </p>

        <h2>Hoeveel AOV heb ik nodig? Gebruik de AOV-tool</h2>
        <p>Wil je niet zelf met een kladblok rekenen?</p>
        <p>
          Gebruik dan de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>{' '}
          van FactuurBaas.
        </p>
        <p>Begin met:</p>
        <ul>
          <li>je maandelijkse noodzakelijke uitgaven;</li>
          <li>je andere inkomsten;</li>
          <li>je financiële buffer;</li>
          <li>de gewenste wachttijd.</li>
        </ul>
        <p>
          Zo krijg je een beter beeld van hoeveel inkomen je daadwerkelijk zou moeten opvangen.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken hoeveel AOV je nodig hebt →" />
        <InsifyAovCta />

        <h2>Conclusie</h2>
        <p>
          <strong>
            Hoeveel AOV je nodig hebt, hangt niet simpelweg af van hoeveel je als zzp&apos;er
            verdient.
          </strong>
        </p>
        <p>Begin met de vraag:</p>
        <blockquote>
          <p>
            <strong>
              Hoeveel geld heb ik iedere maand nodig als ik niet meer kan werken?
            </strong>
          </p>
        </blockquote>
        <p>
          Tel je noodzakelijke uitgaven op, trek andere structurele inkomsten af en kijk
          vervolgens hoeveel van het resterende risico je zelf kunt dragen met je buffer.
        </p>
        <p>
          Daarna kun je bepalen welk bedrag je met een AOV wilt verzekeren.
        </p>
        <p>
          Een goede AOV draait dus niet om het maximaal verzekerbare bedrag, maar om het{' '}
          <strong>inkomensrisico dat je zelf niet wilt of kunt dragen</strong>.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV-behoefte als zzp'er →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
              AOV met korte wachttijd
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
              AOV met lange wachttijd
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-voor-startende-zzpers" className="text-warm-orange hover:underline">
              AOV voor startende zzp&apos;ers
            </Link>
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },
  {
    slug: 'aov-berekenen-voor-zzpers',
    relatedSlugs: [
      'aov-zzp',
      'hoeveel-aov-heb-ik-nodig',
      'wat-kost-een-aov-voor-zzpers',
      'aov-met-korte-wachttijd',
      'aov-met-lange-wachttijd',
      'aov-voor-startende-zzpers',
    ],
    title: "AOV berekenen voor zzp'ers",
    metaTitle: "AOV berekenen voor zzp'ers: bereken je dekking",
    excerpt:
      "AOV berekenen als zzp'er? Bereken hoeveel inkomen je wilt verzekeren en welke rol je buffer, wachttijd en maandelijkse lasten spelen.",
    keywords:
      "aov berekenen voor zzp'ers, aov berekenen zzp, aov berekenen, arbeidsongeschiktheidsverzekering berekenen, aov premie berekenen, aov kosten berekenen, aov bedrag berekenen, aov berekening zzp, aov uitkering berekenen, hoeveel aov heb ik nodig, aov verzekeren zzp",
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/AOV%20berekenen%20voor%20zzpers.jpg',
      alt: "AOV berekenen voor zzp'ers: bereken je dekking",
    },
    datePublished: '2026-09-18',
    dateModified: '2026-09-18',
    faq: [
      {
        question: 'Hoe bereken ik hoeveel AOV ik nodig heb?',
        answer:
          'Begin met je noodzakelijke maandelijkse uitgaven. Trek daar andere structurele inkomsten vanaf. Bepaal vervolgens welk deel je zelf kunt dragen met je financiële buffer en welk deel je wilt verzekeren.',
      },
      {
        question: 'Hoe bereken ik mijn AOV-premie?',
        answer:
          'De premie hangt onder andere af van je leeftijd, beroep, verzekerde bedrag, wachttijd, looptijd en uitkeringsduur. Voor een exacte premie heb je een berekening bij een specifieke verzekeraar nodig.',
      },
      {
        question: 'Moet ik mijn hele inkomen verzekeren?',
        answer:
          'Nee. Je kunt ervoor kiezen een deel van het risico zelf te dragen met spaargeld of andere inkomsten.',
      },
      {
        question: 'Heeft mijn omzet invloed op mijn AOV?',
        answer:
          'Je omzet is niet hetzelfde als het inkomen dat je nodig hebt. Voor het bepalen van je dekking zijn je financiële behoefte, andere inkomsten en het bedrag dat je zelf kunt dragen belangrijker.',
      },
      {
        question: 'Is een langere wachttijd goedkoper?',
        answer:
          'Een langere wachttijd betekent doorgaans een lagere premie, omdat je een groter deel van het risico zelf draagt.',
      },
      {
        question: 'Kan ik mijn AOV later aanpassen?',
        answer:
          'Dat hangt af van de verzekeraar en de polisvoorwaarden. Het is verstandig om je dekking opnieuw te bekijken wanneer je inkomen, vaste lasten of financiële buffer sterk veranderen.',
      },
      {
        question: "Is een AOV verplicht voor zzp'ers?",
        answer:
          'Op dit moment nog niet. Er ligt wel een wetsvoorstel voor een verplichte basisverzekering voor zelfstandigen. De invoeringsdatum en definitieve regels staan nog niet vast.',
      },
    ],
    content: (
      <>
        <p>
          Wil je als zzp&apos;er een arbeidsongeschiktheidsverzekering afsluiten? Dan is de eerste
          vraag vaak: <strong>hoeveel AOV heb ik eigenlijk nodig?</strong>
        </p>
        <p>
          Je hoeft niet automatisch je volledige inkomen te verzekeren. Bij het berekenen van je
          AOV kijk je vooral naar je noodzakelijke maandelijkse uitgaven, andere inkomsten,
          financiële buffer en de periode die je zelf kunt overbruggen.
        </p>
        <p>
          De hoogte van de premie hangt vervolgens onder andere af van het verzekerde bedrag, je
          beroep, leeftijd en de gekozen wachttijd. KVK noemt deze factoren expliciet bij het
          bepalen van de kosten van een AOV.
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV →" />
        <InsifyAovCta />

        <h2>AOV berekenen: begin met je maandelijkse behoefte</h2>
        <p>Een eenvoudige manier om je AOV te berekenen is:</p>
        <p>
          <strong>
            Noodzakelijk maandinkomen − andere inkomsten = te verzekeren inkomen
          </strong>
        </p>
        <p>Je begint dus niet bij je omzet, maar bij het bedrag dat je privé nodig hebt.</p>
        <p>Denk aan:</p>
        <ul>
          <li>hypotheek of huur;</li>
          <li>boodschappen;</li>
          <li>energie;</li>
          <li>verzekeringen;</li>
          <li>vervoer;</li>
          <li>zorgkosten;</li>
          <li>belastingen;</li>
          <li>abonnementen;</li>
          <li>andere vaste lasten.</li>
        </ul>

        <h3>Voorbeeld</h3>
        <p>
          Stel dat je iedere maand €3.000 nodig hebt om je vaste lasten en levensonderhoud te
          betalen.
        </p>
        <p>
          Je partner heeft €1.000 aan inkomen dat beschikbaar is voor de gezamenlijke
          huishouding.
        </p>
        <p>Dan is je resterende inkomensbehoefte:</p>
        <p>
          <strong>€3.000 − €1.000 = €2.000 per maand</strong>
        </p>
        <p>
          Je kunt vervolgens onderzoeken of je ongeveer €2.000 per maand wilt verzekeren.
        </p>
        <p>
          Dit is een vereenvoudigde berekening. De uiteindelijke keuze hangt ook af van je
          buffer, wachttijd en de voorwaarden van de verzekering.
        </p>

        <h2>AOV berekenen op basis van je inkomen</h2>
        <p>
          Je inkomen is een belangrijk uitgangspunt, maar het is niet automatisch gelijk aan het
          bedrag dat je moet verzekeren.
        </p>
        <p>Stel dat je als zzp&apos;er gemiddeld €5.000 per maand verdient.</p>
        <p>
          Dat betekent niet automatisch dat je een AOV van €5.000 per maand nodig hebt.
        </p>
        <p>Misschien heb je bijvoorbeeld:</p>
        <ul>
          <li>€2.800 aan noodzakelijke privé-uitgaven;</li>
          <li>€500 andere inkomsten;</li>
          <li>€20.000 spaargeld.</li>
        </ul>
        <p>
          Dan kan je daadwerkelijke behoefte aan verzekerde inkomensbescherming aanzienlijk lager
          zijn dan €5.000 per maand.
        </p>
        <p>
          Een hoger verzekerd bedrag betekent bovendien doorgaans een hogere premie.
        </p>

        <h2>Omzet is niet hetzelfde als inkomen</h2>
        <p>Let goed op het verschil tussen omzet en inkomen.</p>
        <p>Stel:</p>
        <ul>
          <li>omzet: €8.000 per maand;</li>
          <li>zakelijke kosten: €2.000 per maand.</li>
        </ul>
        <p>
          Dan blijft er €6.000 over vóór belastingen en andere reserveringen.
        </p>
        <p>Je kunt dus niet simpelweg zeggen:</p>
        <p>
          <strong>€8.000 omzet = €8.000 AOV</strong>
        </p>
        <p>
          Je AOV moet aansluiten bij het inkomen dat je wilt beschermen en de financiële behoefte
          die ontstaat als je niet meer kunt werken.
        </p>
        <p>
          Voor een eerste berekening zijn je <strong>persoonlijke uitgaven</strong> daarom vaak
          een nuttiger uitgangspunt dan je omzet.
        </p>

        <h2>AOV berekenen in 5 stappen</h2>
        <p>Je kunt je benodigde AOV-bedrag grofweg in vijf stappen berekenen.</p>

        <h3>Stap 1: bereken je noodzakelijke maanduitgaven</h3>
        <p>Maak een overzicht van wat je iedere maand minimaal nodig hebt.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Uitgave</th>
                <th className="py-2 text-right font-medium">Bedrag</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['Hypotheek/huur', '€1.200'],
                ['Boodschappen', '€500'],
                ['Energie', '€200'],
                ['Verzekeringen', '€200'],
                ['Auto/vervoer', '€300'],
                ['Overige vaste lasten', '€300'],
              ].map(([label, amount]) => (
                <tr key={label} className="border-b border-slate-100">
                  <td className="py-2 pr-4">{label}</td>
                  <td className="py-2 text-right">{amount}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 pr-4 font-semibold">Totaal</td>
                <td className="py-2 text-right font-semibold">€2.700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Je noodzakelijke maandelijkse behoefte is in dit voorbeeld €2.700.
        </p>

        <h3>Stap 2: trek andere inkomsten af</h3>
        <p>Heb je andere structurele inkomsten?</p>
        <p>Bijvoorbeeld €700 per maand.</p>
        <p>Dan:</p>
        <p>
          <strong>€2.700 − €700 = €2.000</strong>
        </p>
        <p>Je moet dan ongeveer €2.000 aan inkomen opvangen.</p>

        <h3>Stap 3: kijk naar je financiële buffer</h3>
        <p>Je spaargeld kan een deel van het risico opvangen.</p>
        <p>
          Heb je bijvoorbeeld €30.000 beschikbaar, dan kun je ervoor kiezen om niet ieder
          tijdelijk inkomensverlies volledig te verzekeren.
        </p>
        <p>
          Een grotere buffer kan ook betekenen dat je voor een langere wachttijd kunt kiezen.
        </p>
        <p>
          KVK noemt je financiële buffer expliciet als één van de factoren bij de keuze voor een
          AOV.
        </p>

        <h3>Stap 4: kies je wachttijd</h3>
        <p>
          De wachttijd is de periode waarin je na arbeidsongeschiktheid nog geen AOV-uitkering
          ontvangt.
        </p>
        <p>Een langere wachttijd betekent doorgaans een lagere premie.</p>
        <p>Bijvoorbeeld:</p>
        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-slate-500">
                <th className="py-2 pr-4 font-medium">Wachttijd</th>
                <th className="py-2 font-medium">Wat betekent dit?</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              {[
                ['1 maand', 'Eerste maand zelf opvangen'],
                ['3 maanden', 'Eerste 3 maanden zelf opvangen'],
                ['6 maanden', 'Eerste halfjaar zelf opvangen'],
                ['12 maanden', 'Eerste jaar zelf opvangen'],
                ['24 maanden', 'Eerste 2 jaar zelf opvangen'],
              ].map(([wait, meaning]) => (
                <tr key={wait} className="border-b border-slate-100">
                  <td className="py-2 pr-4 font-medium">{wait}</td>
                  <td className="py-2">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Hoe langer de wachttijd, hoe belangrijker je financiële buffer wordt.
        </p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/aov-met-korte-wachttijd"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV met korte wachttijd
          </Link>
        </p>
        <p>
          <Link
            href="/blogs/aov-met-lange-wachttijd"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV met lange wachttijd
          </Link>
        </p>

        <h3>Stap 5: bereken wat je wilt verzekeren</h3>
        <p>Je hebt nu een beeld van:</p>
        <ul>
          <li>je noodzakelijke inkomen;</li>
          <li>andere inkomsten;</li>
          <li>je buffer;</li>
          <li>je gewenste wachttijd.</li>
        </ul>
        <p>
          Daarmee kun je bepalen welk maandbedrag je ongeveer wilt verzekeren.
        </p>

        <h2>AOV premie berekenen</h2>
        <p>
          Naast het verzekerde bedrag wil je natuurlijk weten wat de AOV gaat kosten.
        </p>
        <p>
          Er is geen algemene formule waarmee je voor iedere zzp&apos;er exact de premie kunt
          berekenen.
        </p>
        <p>De premie wordt onder andere beïnvloed door:</p>
        <ul>
          <li>je leeftijd;</li>
          <li>je beroep;</li>
          <li>het verzekerde bedrag;</li>
          <li>de wachttijd;</li>
          <li>de looptijd;</li>
          <li>de uitkeringsduur;</li>
          <li>de gekozen voorwaarden.</li>
        </ul>
        <p>
          KVK geeft aan dat een AOV vaak ongeveer €100 tot €300 per maand kost, maar benadrukt
          dat de premie per ondernemer verschilt.
        </p>
        <p>
          Een offerte of premieberekening van een specifieke verzekeraar is daarom nodig om je
          daadwerkelijke premie te kennen.
        </p>
        <p>
          Lees ook:{' '}
          <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
            Wat kost een AOV voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Voorbeeld: AOV berekenen voor een zzp&apos;er</h2>
        <p>Stel dat je situatie als volgt is:</p>
        <ul>
          <li>inkomen: €4.500 per maand;</li>
          <li>noodzakelijke privé-uitgaven: €2.700;</li>
          <li>andere inkomsten: €500;</li>
          <li>spaargeld: €15.000;</li>
          <li>gewenste wachttijd: 6 maanden.</li>
        </ul>

        <h3>Stap 1: inkomensbehoefte</h3>
        <p>
          €2.700 − €500 = <strong>€2.200</strong>
        </p>
        <p>
          Je hebt in dit voorbeeld ongeveer €2.200 per maand nodig bovenop je andere inkomsten.
        </p>

        <h3>Stap 2: wachttijd</h3>
        <p>
          Bij een wachttijd van 6 maanden moet je de eerste periode zelf kunnen opvangen.
        </p>
        <p>
          €2.200 × 6 = <strong>€13.200</strong>
        </p>
        <p>
          Je zou dus ongeveer €13.200 nodig hebben om zes maanden lang alleen deze
          inkomensbehoefte op te vangen.
        </p>
        <p>Met €15.000 spaargeld lijkt dat op papier mogelijk.</p>

        <h3>Stap 3: verzekerd bedrag</h3>
        <p>
          Je kunt vervolgens bijvoorbeeld een AOV met een maandelijkse uitkering rond €2.200
          onderzoeken.
        </p>
        <p>
          Of je uiteindelijk precies €2.200 verzekert, hangt af van de beschikbare producten en
          je eigen voorkeuren.
        </p>

        <h2>AOV berekenen bij gedeeltelijke arbeidsongeschiktheid</h2>
        <p>
          Een AOV hoeft niet alleen relevant te zijn wanneer je helemaal niet meer kunt werken.
        </p>
        <p>
          Bij sommige verzekeringen kun je ook bij gedeeltelijke arbeidsongeschiktheid een
          uitkering ontvangen. De precieze voorwaarden verschillen per polis.
        </p>
        <p>Dat is belangrijk bij het vergelijken van AOV&apos;s.</p>
        <p>
          Twee verzekeringen kunnen bijvoorbeeld hetzelfde maximale maandbedrag hebben, maar
          verschillende voorwaarden voor gedeeltelijke arbeidsongeschiktheid.
        </p>
        <p>
          Kijk daarom bij een premieberekening niet alleen naar de goedkoopste premie.
        </p>

        <h2>AOV berekenen voor een starter</h2>
        <p>Als startende zzp&apos;er heb je vaak nog geen stabiel inkomen.</p>
        <p>
          Je kunt dan beginnen met je verwachte maandelijkse financiële behoefte.
        </p>
        <p>Kijk naar:</p>
        <ol>
          <li>je huidige vaste lasten;</li>
          <li>je verwachte inkomen;</li>
          <li>je spaargeld;</li>
          <li>eventuele inkomsten van je partner;</li>
          <li>je gewenste levensstandaard;</li>
          <li>hoeveel risico je zelf wilt dragen.</li>
        </ol>
        <p>
          Je kunt je AOV later opnieuw beoordelen wanneer je inkomen en financiële situatie
          veranderen.
        </p>
        <p>Lees ook:</p>
        <p>
          <Link
            href="/blogs/aov-voor-startende-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV voor startende zzp&apos;ers
          </Link>
        </p>

        <h2>AOV berekenen met een wisselend inkomen</h2>
        <p>
          Verdien je als zzp&apos;er niet iedere maand hetzelfde? Dan kun je beter naar je
          gemiddelde financiële situatie kijken dan naar één uitzonderlijk goede maand.
        </p>
        <p>
          Stel dat je inkomen in de afgelopen jaren ongeveer tussen €3.000 en €5.500 per maand
          lag.
        </p>
        <p>Kijk dan bijvoorbeeld naar:</p>
        <ul>
          <li>je gemiddelde inkomen;</li>
          <li>je gemiddelde vaste lasten;</li>
          <li>je laagste normale maandinkomen;</li>
          <li>je financiële buffer.</li>
        </ul>
        <p>Je hoeft je AOV niet per se af te stemmen op je beste maand.</p>

        <h2>Hoeveel AOV heb ik nodig?</h2>
        <p>Een praktische berekening is:</p>
        <p>
          <strong>Noodzakelijke maanduitgaven</strong>
        </p>
        <p>
          <strong>− andere structurele inkomsten</strong>
        </p>
        <p>
          <strong>= bedrag dat je moet opvangen</strong>
        </p>
        <p>Daarna bepaal je hoeveel van dat bedrag je zelf wilt dragen.</p>
        <p>Bijvoorbeeld:</p>
        <p>
          <strong>€3.000 noodzakelijke uitgaven</strong>
        </p>
        <p>
          <strong>− €750 andere inkomsten</strong>
        </p>
        <p>
          <strong>= €2.250</strong>
        </p>
        <p>
          Je zou vervolgens kunnen onderzoeken of een AOV van ongeveer €2.250 per maand passend
          is.
        </p>
        <p>
          Heb je een grote buffer, dan kun je er ook voor kiezen om minder te verzekeren of een
          langere wachttijd te nemen.
        </p>
        <p>
          Heb je weinig buffer, dan kan juist een groter verzekerd bedrag of kortere wachttijd
          relevant zijn.
        </p>
        <p>Voor een uitgebreidere uitleg:</p>
        <p>
          <Link
            href="/blogs/hoeveel-aov-heb-ik-nodig"
            className="font-medium text-warm-orange hover:underline"
          >
            Hoeveel AOV heb ik nodig als zzp&apos;er?
          </Link>
        </p>

        <h2>AOV berekenen en je financiële buffer</h2>
        <p>Je AOV is niet de enige manier om je inkomen te beschermen.</p>
        <p>Je kunt het risico verdelen over:</p>
        <ul>
          <li>AOV;</li>
          <li>spaargeld;</li>
          <li>inkomen van je partner;</li>
          <li>een schenkkring;</li>
          <li>crowdsurance;</li>
          <li>andere voorzieningen.</li>
        </ul>
        <p>
          De Rijksoverheid noemt bijvoorbeeld sparen, een particuliere AOV en een broodfonds als
          manieren waarop zelfstandigen zich tegen inkomensverlies door arbeidsongeschiktheid
          kunnen beschermen.
        </p>
        <p>
          Je hoeft dus niet noodzakelijk ieder risico volledig met een AOV te verzekeren.
        </p>

        <h2>AOV berekenen: wat als je een hypotheek hebt?</h2>
        <p>
          Heb je een hypotheek, dan moet je maandelijkse woonlast onderdeel zijn van je
          berekening.
        </p>
        <p>Stel:</p>
        <ul>
          <li>hypotheek: €1.300;</li>
          <li>overige noodzakelijke uitgaven: €1.700;</li>
          <li>totale behoefte: €3.000.</li>
        </ul>
        <p>Als je partner €1.000 per maand bijdraagt, resteert:</p>
        <p>
          <strong>€3.000 − €1.000 = €2.000</strong>
        </p>
        <p>
          Je kunt dan onderzoeken of je ongeveer €2.000 aan inkomen wilt verzekeren.
        </p>
        <p>
          Een hypotheek maakt het extra belangrijk om te kijken naar de gevolgen van langdurig
          inkomensverlies. De hypotheeklast loopt immers door terwijl je inkomen kan wegvallen.
        </p>

        <h2>AOV berekenen: wat gebeurt er met de premie?</h2>
        <p>Een hoger verzekerd bedrag betekent doorgaans een hogere premie.</p>
        <p>
          Ook een kortere wachttijd kan de premie verhogen. Een langere wachttijd kan de premie
          juist verlagen.
        </p>
        <p>Daarom kun je verschillende scenario&apos;s naast elkaar zetten.</p>

        <h3>Scenario A: meer verzekeren</h3>
        <ul>
          <li>hogere maandelijkse uitkering;</li>
          <li>kortere wachttijd;</li>
          <li>hogere premie;</li>
          <li>minder risico zelf dragen.</li>
        </ul>

        <h3>Scenario B: minder verzekeren</h3>
        <ul>
          <li>lagere maandelijkse uitkering;</li>
          <li>eventueel langere wachttijd;</li>
          <li>lagere premie;</li>
          <li>groter deel van het risico zelf dragen.</li>
        </ul>
        <p>
          De goedkoopste AOV is daarom niet automatisch de verzekering die het beste aansluit op
          je financiële situatie.
        </p>

        <h2>AOV berekenen en de verplichte AOV</h2>
        <p>
          Op dit moment is een AOV voor ondernemers nog niet verplicht. Er ligt wel een
          wetsvoorstel voor een Basisverzekering Arbeidsongeschiktheid Zelfstandigen (BAZ). De
          precieze regels en invoeringsdatum zijn nog niet definitief. KVK verwacht momenteel
          invoering rond 2030.
        </p>
        <p>
          Volgens het huidige voorstel zou de BAZ een premie van 5,4% van de winst krijgen, met
          een maximum van ongeveer €171 bruto per maand. De voorgestelde uitkering bedraagt 70%
          van het inkomen vóór arbeidsongeschiktheid, tot maximaal het minimumloon. Ook is een
          wachttijd van twee jaar voorgesteld. Deze bedragen en regels kunnen nog veranderen.
        </p>
        <p>Meer hierover:</p>
        <p>
          <Link
            href="/blogs/aov-verplicht-voor-zzpers"
            className="font-medium text-warm-orange hover:underline"
          >
            AOV verplicht voor zzp&apos;ers?
          </Link>
        </p>

        <h2>Bereken je AOV met de FactuurBaas AOV-tool</h2>
        <p>Wil je snel berekenen hoeveel inkomen je ongeveer wilt beschermen?</p>
        <p>
          Gebruik dan de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool voor zzp&apos;ers
          </Link>{' '}
          van FactuurBaas.
        </p>
        <p>
          Je kunt daar je eigen situatie als uitgangspunt nemen in plaats van uit te gaan van een
          standaardbedrag.
        </p>
        <p>Denk daarbij aan:</p>
        <ul>
          <li>je maandelijkse uitgaven;</li>
          <li>je gewenste inkomen;</li>
          <li>je financiële buffer;</li>
          <li>je wachttijd;</li>
          <li>je andere inkomsten.</li>
        </ul>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV →" />

        <h2>Conclusie</h2>
        <p>
          Een <strong>AOV berekenen voor zzp&apos;ers</strong> begint niet bij de vraag hoeveel
          je verdient, maar bij de vraag hoeveel inkomen je nodig hebt als je niet meer kunt
          werken.
        </p>
        <p>Bereken daarom eerst:</p>
        <p>
          <strong>
            Noodzakelijke maanduitgaven − andere inkomsten = inkomensbehoefte
          </strong>
        </p>
        <p>
          Kijk daarna naar je financiële buffer en bepaal hoeveel risico je zelf wilt dragen.
          Vervolgens kun je een verzekerd bedrag en wachttijd kiezen die daarbij aansluiten.
        </p>
        <p>
          Wil je het zelf berekenen? Gebruik dan de{' '}
          <Link href="/tools/aov-zzp" className="font-medium text-warm-orange hover:underline">
            AOV-tool van FactuurBaas
          </Link>
          .
        </p>
        <AovCta href="/tools/aov-zzp" label="Bereken je AOV →" />
        <AovCta label="Of open direct de AOV-calculator →" />
        <p>Lees ook:</p>
        <ul>
          <li>
            <Link href="/blogs/hoeveel-aov-heb-ik-nodig" className="text-warm-orange hover:underline">
              Hoeveel AOV heb ik nodig als zzp&apos;er?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-zzp" className="text-warm-orange hover:underline">
              Arbeidsongeschiktheidsverzekering zzp: heb je die nodig?
            </Link>
          </li>
          <li>
            <Link href="/blogs/wat-kost-een-aov-voor-zzpers" className="text-warm-orange hover:underline">
              Wat kost een AOV voor zzp&apos;ers?
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-korte-wachttijd" className="text-warm-orange hover:underline">
              AOV met korte wachttijd
            </Link>
          </li>
          <li>
            <Link href="/blogs/aov-met-lange-wachttijd" className="text-warm-orange hover:underline">
              AOV met lange wachttijd
            </Link>
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Dit artikel is algemene informatie en geen verzekerings- of fiscaal advies.
        </p>
      </>
    ),
  },

];
