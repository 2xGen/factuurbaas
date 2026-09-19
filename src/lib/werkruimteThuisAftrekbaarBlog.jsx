import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UITGAVEN_PRODUCT_PATH } from '@/lib/uitgavenLanding';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const UitgavenCta = ({
  title = 'Houd je zakelijke kosten overzichtelijk bij',
  text = 'Registreer zakelijke uitgaven en btw naast je facturen en zie wat er van je omzet overblijft.',
  label = 'Gratis uitgaven bijhouden →',
}) => (
  <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
    <p className="font-heading text-lg font-semibold text-deep-blue">{title}</p>
    <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
    <div className="mt-4">
      <Button
        asChild
        className="rounded-lg bg-warm-orange px-6 py-3 text-base font-bold text-white hover:bg-orange-600"
      >
        <Link href={UITGAVEN_PRODUCT_PATH}>{label}</Link>
      </Button>
    </div>
  </div>
);

export const werkruimteThuisAftrekbaarArticle = {
  slug: 'werkruimte-thuis-aftrekbaar-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'internet-aftrekbaar-zzp',
    'telefoon-aftrekbaar-zzp',
    'laptop-aftrekbaar-zzp',
    'software-abonnementen-aftrekken-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'zakelijke-kosten-prive-betaald',
  ],
  metaTitle: "Werkruimte thuis aftrekbaar als zzp'er? Dit zijn de regels",
  title: "Werkruimte thuis aftrekbaar als zzp'er? Dit zijn de regels",
  excerpt:
    "Werkruimte thuis aftrekbaar als zzp'er? Lees wanneer een thuiskantoor aftrekbaar is en hoe het zit met huur, energie, bureau en internet.",
  keywords:
    "werkruimte thuis aftrekbaar zzp, thuiskantoor aftrekbaar zzp, thuiswerkkosten zzp, werkruimte aftrekken zzp, kantoor aan huis aftrekbaar, werkkamer aftrekbaar zzp, energiekosten thuiswerken zzp, huur aftrekken zzp thuiswerken, thuiswerkplek zzp",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/thuiswerkkosten%20en%20werkruimte%20aftrekken%20als%20%20zzper.jpg',
    alt: "Werkruimte thuis aftrekbaar als zzp'er — thuiskantoor regels",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is een thuiskantoor aftrekbaar als zzp'er?",
      answer:
        'Meestal niet. De Belastingdienst geeft aan dat kosten van een werkruimte thuis slechts in een zeer beperkt aantal gevallen aftrekbaar zijn.',
    },
    {
      question: 'Is een slaapkamer als kantoor aftrekbaar?',
      answer:
        'Normaal gesproken niet. Een slaapkamer die als kantoor is ingericht is volgens de Belastingdienst geen zelfstandige werkruimte alleen doordat je deze voor je onderneming gebruikt.',
    },
    {
      question: "Kan ik een deel van mijn huur aftrekken als zzp'er?",
      answer:
        'Niet automatisch. Voor een werkruimte in een huurwoning gelden speciale voorwaarden. Een gewone kamer als kantoor geeft je niet het recht om simpelweg een percentage van de huur af te trekken.',
    },
    {
      question: 'Kan ik een deel van mijn hypotheek aftrekken?',
      answer:
        'Je kunt niet simpelweg een percentage van je hypotheeklasten als zakelijke kosten opvoeren omdat je vanuit huis werkt. Voor werkruimte in een eigen woning gelden specifieke regels.',
    },
    {
      question: 'Kan ik energiekosten aftrekken als ik thuiswerk?',
      answer:
        'Bij een normale niet-aftrekbare werkruimte kun je niet zomaar een percentage van je huishoudelijke energiekosten als zakelijke huisvestingskosten aftrekken. Bij een kwalificerende zelfstandige werkruimte of afzonderlijke bedrijfsruimte kan de situatie anders zijn.',
    },
    {
      question: 'Wanneer is een werkruimte zelfstandig?',
      answer:
        'De Belastingdienst kijkt onder andere naar een eigen ingang of opgang, eigen sanitaire voorzieningen en de vraag of de ruimte afzonderlijk aan een derde verhuurd zou kunnen worden.',
    },
    {
      question: "Is een bureau aftrekbaar als zzp'er?",
      answer:
        'Een zakelijk gebruikt bureau kan als losse zakelijke aankoop of bedrijfsmiddel een andere fiscale behandeling hebben dan de werkruimte zelf. Beoordeel de aanschaf dus afzonderlijk.',
    },
    {
      question: "Is een bureaustoel aftrekbaar als zzp'er?",
      answer:
        'Een zakelijke bureaustoel kan een bedrijfsmiddel zijn. De niet-aftrekbaarheid van een normale werkkamer betekent niet automatisch dat ieder los bedrijfsmiddel in die kamer niet aftrekbaar is.',
    },
    {
      question: 'Is internet thuis aftrekbaar?',
      answer:
        'Het zakelijke deel van internetkosten kan onder voorwaarden als zakelijke kosten worden behandeld. Gebruik je internet ook privé, dan moet je rekening houden met het privégebruik.',
    },
    {
      question: 'Is een tuinkantoor aftrekbaar?',
      answer:
        'Dat kan niet algemeen worden gezegd. Een tuinkantoor kan mogelijk kenmerken van een zelfstandige werkruimte hebben, maar moet ook aan de overige voorwaarden voldoen.',
    },
    {
      question: 'Is een apart gehuurd kantoor aftrekbaar?',
      answer:
        'Huur je een pand dat je volledig voor je onderneming gebruikt, dan zijn onder andere de huur, energie, verzekeringen, schoonmaak en bepaalde inrichtingskosten in beginsel zakelijke kosten.',
    },
  ],
  content: (
    <>
      <p>
        Werk je als zzp&apos;er vanuit huis? Dan maak je waarschijnlijk kosten voor je werkplek.
        Denk aan:
      </p>
      <ul>
        <li>een bureau;</li>
        <li>bureaustoel;</li>
        <li>computer;</li>
        <li>internet;</li>
        <li>elektriciteit;</li>
        <li>verwarming;</li>
        <li>verlichting;</li>
        <li>inrichting van je werkkamer.</li>
      </ul>
      <p>Maar mag je deze thuiswerkkosten ook aftrekken?</p>
      <p>
        <strong>Voor de werkruimte zelf is het antwoord meestal: nee.</strong>
      </p>
      <p>
        De Belastingdienst geeft aan dat kosten van een werkruimte in je eigen woning slechts in
        een zeer beperkt aantal gevallen aftrekbaar zijn.
      </p>
      <p>
        Een bureau in de woonkamer of een slaapkamer die je als kantoor hebt ingericht, is normaal
        gesproken geen zelfstandige werkruimte.
      </p>
      <p>
        Dat betekent echter niet dat alles wat je thuis voor je onderneming gebruikt automatisch
        privé is.
      </p>
      <p>
        In deze gids leggen we uit wat het verschil is tussen kosten van je{' '}
        <strong>werkruimte thuis</strong> en andere <strong>zakelijke kosten die je vanuit huis
        maakt</strong>.
      </p>

      <UitgavenCta />

      <h2>Is een werkruimte thuis aftrekbaar als zzp&apos;er?</h2>
      <p>
        Meestal niet. Gebruik je een deel van je woning als kantoor voor je onderneming? Dan kun
        je de kosten van die werkruimte niet automatisch van je winst aftrekken.
      </p>
      <p>
        De Belastingdienst noemt werkruimte thuis in het overzicht van zakelijke kosten als:{' '}
        <strong>0% aftrekbaar, met uitzonderingen.</strong>
      </p>
      <p>
        Voor die uitzonderingen gelden specifieke voorwaarden. Het feit dat je:
      </p>
      <ul>
        <li>iedere dag thuis werkt;</li>
        <li>een aparte kamer als kantoor gebruikt;</li>
        <li>klanten vanuit huis bedient;</li>
        <li>veel uren in je werkkamer doorbrengt;</li>
      </ul>
      <p>
        betekent dus niet automatisch dat de kosten van de ruimte aftrekbaar zijn.
      </p>

      <h2>Waarom is een thuiskantoor meestal niet aftrekbaar?</h2>
      <p>
        Een woning heeft in de eerste plaats een privéfunctie. Daarom gelden speciale regels
        wanneer je een gedeelte van je woning voor je onderneming gebruikt.
      </p>
      <p>
        Stel dat je een slaapkamer verandert in een kantoor met bureau, computer, bureaustoel,
        kast en extra monitor. De kamer bevindt zich nog steeds binnen je normale woning.
      </p>
      <p>
        Volgens de Belastingdienst is een losse werkplek in de woonkamer of een slaapkamer die
        als werkruimte is ingericht geen zelfstandige werkruimte. Daarom kun je niet simpelweg
        bijvoorbeeld 15% van je hypotheek, huur, gas, elektriciteit of gemeentelijke lasten
        aftrekken omdat je kantoor 15% van je woning beslaat.
      </p>

      <h2>Wanneer is een werkruimte zelfstandig?</h2>
      <p>
        Een belangrijke voorwaarde voor veel uitzonderingen is dat sprake is van een{' '}
        <strong>zelfstandige werkruimte</strong>. De ruimte moet duidelijk te onderscheiden zijn
        van de rest van je woning.
      </p>
      <p>De Belastingdienst kijkt daarbij bijvoorbeeld naar:</p>
      <ul>
        <li>een eigen ingang of opgang;</li>
        <li>eigen sanitaire voorzieningen;</li>
        <li>of je de ruimte aan een derde zou kunnen verhuren.</li>
      </ul>
      <p>
        Denk eerder aan een zelfstandige praktijk- of kantoorruimte aan je woning dan aan een
        bureau in een slaapkamer.
      </p>

      <h2>Voorbeeld: slaapkamer als kantoor</h2>
      <p>
        Je hebt een woning met drie slaapkamers. Eén slaapkamer richt je volledig in als kantoor.
        Er staan twee bureaus, computers, archiefkasten en kantoorverlichting. Je gebruikt de
        kamer niet als slaapkamer.
      </p>
      <p>
        Toch heeft de kamer geen eigen ingang, geen eigen sanitair en geen duidelijke
        zelfstandigheid ten opzichte van de woning. Alleen het feit dat je de kamer uitsluitend
        als kantoor gebruikt, maakt deze dus nog niet tot een zelfstandige werkruimte. De kosten
        van de werkruimte zijn daarom normaal gesproken niet aftrekbaar.
      </p>

      <h2>Voorbeeld: bureau in de woonkamer</h2>
      <p>
        Je werkt iedere dag acht uur aan een bureau in de hoek van je woonkamer. Deze situatie is
        nog duidelijker. De werkplek vormt geen zelfstandig gedeelte van je woning.
      </p>
      <p>
        Je kunt daarom niet een percentage van je huur, hypotheek of energiekosten als kosten van
        de werkruimte aftrekken alleen omdat je vanuit de woonkamer werkt.
      </p>

      <h2>Voorbeeld: zelfstandige praktijkruimte</h2>
      <p>
        Stel dat je woning een aangebouwde praktijkruimte heeft met een eigen ingang, eigen
        toilet en duidelijke afscheiding van het woongedeelte. De ruimte zou in principe ook
        afzonderlijk aan iemand anders verhuurd kunnen worden.
      </p>
      <p>
        Dan kan sprake zijn van een zelfstandige werkruimte. Maar daarmee ben je er nog niet. Ook
        het <strong>gebruik van de ruimte en waar je je inkomen verdient</strong> zijn relevant
        voor de uiteindelijke aftrekbaarheid.
      </p>

      <h2>Inkomenseis voor een zelfstandige werkruimte</h2>
      <p>
        Een zelfstandige ruimte is dus niet automatisch voldoende. Er wordt ook gekeken naar
        hoeveel van je inkomen je in of vanuit de werkruimte verdient.
      </p>
      <p>
        De exacte beoordeling hangt onder andere af van de vraag of je elders nog een werkruimte
        hebt. Heb je geen andere werkruimte, dan spelen onder meer de 30%- en 70%-criteria een
        rol. In bepaalde situaties moet minimaal:
      </p>
      <ul>
        <li>
          30% van je totale relevante inkomen <strong>in</strong> de werkruimte worden verdiend;
        </li>
        <li>
          70% van dat inkomen <strong>in of vanuit</strong> de werkruimte worden verdiend.
        </li>
      </ul>
      <p>
        Heb je daarnaast elders een werkruimte, dan geldt een strengere beoordeling waarbij onder
        meer 70% van het relevante inkomen in de werkruimte thuis moet worden verdiend. Omdat de
        beoordeling afhankelijk is van je precieze situatie, heeft de Belastingdienst hiervoor
        een speciaal hulpmiddel.
      </p>

      <h2>Gebruik het hulpmiddel Werkruimte van de Belastingdienst</h2>
      <p>
        Twijfel je of jouw kantoor, praktijk of andere werkruimte thuis aan de voorwaarden
        voldoet? Gebruik dan het officiële hulpmiddel van de Belastingdienst. Daarmee kun je voor
        je eigen situatie beoordelen of kosten van de werkruimte mogelijk aftrekbaar zijn.
      </p>
      <p>
        <a
          href="https://www.belastingdienst.nl/wps/wcm/connect/nl/ondernemers/content/zijn-kosten-voor-de-werkruimte-in-mijn-woning-aftrekbaar"
          target="_blank"
          rel="noopener noreferrer"
          className="text-warm-orange hover:underline"
        >
          Hulpmiddel Werkruimte in de woning van de Belastingdienst
        </a>
      </p>
      <p>
        Ga niet zelf uit van een willekeurig percentage van je woning wanneer je niet aan de
        voorwaarden voldoet.
      </p>

      <h2>Eigen woning en werkruimte</h2>
      <p>
        Heb je een koopwoning? Dan is een normale werkkamer in je privéwoning meestal geen
        aftrekbare bedrijfsruimte. De Belastingdienst geeft expliciet als voorbeeld dat wanneer
        je een kamer in je eigen privéwoning als werkkamer gebruikt, je geen kosten voor die
        werkkamer mag aftrekken.
      </p>
      <p>
        De woning blijft in zo&apos;n normale situatie privévermogen. Bij bijzondere situaties
        waarin een woning of gedeelte daarvan tot het ondernemingsvermogen behoort, gelden andere
        regels. Dat kan ook gevolgen hebben die veel verder gaan dan alleen de jaarlijkse
        kostenaftrek.
      </p>
      <p>
        Laat je daarom goed adviseren voordat je een deel van je woning fiscaal als
        ondernemingsvermogen behandelt.
      </p>

      <h2>Huurwoning en werkruimte</h2>
      <p>
        Ook wanneer je een woning huurt, mag je niet automatisch een percentage van de huur
        aftrekken omdat je vanuit huis werkt. Voor een werkruimte in een huurwoning gelden
        eveneens de speciale regels voor werkruimte thuis.
      </p>
      <p>
        Een slaapkamer als kantoor inrichten betekent dus niet:{' '}
        <em>
          Mijn kantoor is 20% van de woning, dus ik trek 20% van mijn huur af.
        </em>{' '}
        Zo werkt de fiscale regeling niet. Gebruik bij twijfel het hulpmiddel Werkruimte van de
        Belastingdienst.
      </p>

      <h2>Kan ik mijn huur aftrekken als ik thuiswerk?</h2>
      <p>
        Normaal gesproken niet. Huur je een woning om in te wonen en werk je vanuit een gewone
        kamer in die woning? Dan kun je niet simpelweg een gedeelte van de huur als zakelijke
        kosten opvoeren.
      </p>
      <p>
        Dat is anders wanneer je bijvoorbeeld een <strong>apart bedrijfspand</strong> huurt dat
        volledig voor je onderneming wordt gebruikt. De Belastingdienst geeft aan dat bij een
        volledig zakelijk gehuurd bedrijfspand onder andere aftrekbaar kunnen zijn: huur, energie,
        verzekeringen, schoonmaak en inrichting.
      </p>
      <p>
        Een apart kantoor huren is fiscaal dus een andere situatie dan vanuit een kamer in je
        woning werken.
      </p>

      <h2>Hypotheekrente van je thuiskantoor aftrekken?</h2>
      <p>
        Ook hier geldt dat je niet simpelweg een percentage van je hypotheeklasten aan je
        onderneming kunt toerekenen omdat je thuis werkt. Een normale werkkamer in je privéwoning
        blijft onderdeel van je woning.
      </p>
      <p>
        In bijzondere situaties waarin een gedeelte van de woning fiscaal anders wordt behandeld,
        kunnen complexere regels gelden. Maak daarom geen eigen berekening zoals:{' '}
        <em>
          Mijn kantoor is 10% van mijn woning, dus ik trek 10% van mijn hypotheekrente zakelijk
          af.
        </em>{' '}
        Voor een normale werkruimte thuis klopt die redenering niet.
      </p>

      <h2>Energiekosten aftrekken als zzp&apos;er?</h2>
      <p>
        Dit is eveneens een veelvoorkomende vraag. Je werkt thuis en gebruikt daardoor
        elektriciteit voor je computer, verlichting, verwarming en airconditioning.
      </p>
      <p>
        Toch betekent dat niet automatisch dat je een gedeelte van je energierekening als kosten
        van je onderneming kunt aftrekken. Wanneer de werkruimte thuis niet voldoet aan de
        voorwaarden voor kostenaftrek, kun je de kosten van die werkruimte niet alsnog via een
        willekeurig energiepercentage zakelijk maken.
      </p>
      <p>
        Bij een volledig zakelijke, afzonderlijke bedrijfsruimte kunnen energiekosten daarentegen
        wel zakelijke kosten zijn.
      </p>

      <h2>Gas en verwarming van thuiskantoor aftrekken?</h2>
      <p>
        Voor een gewone niet-zelfstandige werkkamer in je woning kun je niet simpelweg een
        gedeelte van de verwarmingskosten als zakelijke huisvestingskosten aftrekken. Dat je de
        verwarming overdag hoger zet omdat je thuis werkt, maakt je woning niet automatisch tot
        aftrekbare bedrijfsruimte.
      </p>
      <p>
        Dit voelt soms vreemd, maar het komt doordat voor werkruimte thuis specifieke fiscale
        regels gelden.
      </p>

      <h2>Elektriciteit voor laptop en monitor</h2>
      <p>
        Ook bij elektriciteitsverbruik is het verstandig onderscheid te maken tussen:
      </p>
      <ol>
        <li>kosten van je woning of werkruimte;</li>
        <li>zelfstandige zakelijke aankopen die je voor je onderneming doet.</li>
      </ol>
      <p>
        De elektriciteitsrekening van een normale niet-aftrekbare werkruimte kun je niet zomaar
        op basis van een zelfgekozen percentage zakelijk verwerken. Een laptop, monitor of andere
        zakelijke apparatuur kan daarentegen zelf wel een zakelijke kostenpost of bedrijfsmiddel
        zijn.
      </p>
      <p>
        De regels voor de aanschaf van apparatuur staan dus los van de vraag of de kamer waarin
        die apparatuur staat aftrekbaar is.
      </p>

      <h2>Bureau aftrekbaar als zzp&apos;er?</h2>
      <p>
        Hier wordt het onderscheid belangrijk. Dat je werkruimte thuis zelf niet aftrekbaar is,
        betekent niet automatisch dat iedere losse zakelijke aankoop die je gebruikt voor je
        onderneming ook niet aftrekbaar is.
      </p>
      <p>
        Voor bedrijfsmiddelen en zakelijke kosten gelden eigen regels. Een bureau dat
        daadwerkelijk voor je onderneming wordt aangeschaft kan daarom fiscaal anders worden
        behandeld dan huur, hypotheek, verwarming of andere kosten van de woning zelf. De
        precieze verwerking hangt af van de aard, het gebruik en de aanschafprijs van het
        bedrijfsmiddel.
      </p>

      <h2>Bureaustoel aftrekbaar als zzp&apos;er?</h2>
      <p>
        Hetzelfde principe geldt voor een bureaustoel. Een zakelijke bureaustoel kan een
        bedrijfsmiddel zijn. Je moet dus niet redeneren:{' '}
        <em>Mijn werkkamer is niet aftrekbaar, dus mijn bureaustoel ook niet.</em>
      </p>
      <p>
        De fiscale behandeling van de woning en die van losse bedrijfsmiddelen zijn niet
        noodzakelijk hetzelfde. Bij gemengd privé- en zakelijk gebruik moet je uiteraard rekening
        houden met het privékarakter.
      </p>

      <h2>Computer en monitor thuis gebruiken</h2>
      <p>
        Een computer wordt niet privé doordat hij in je woning staat. Gebruik je een laptop,
        desktop of monitor voor je onderneming? Dan gelden de normale regels voor zakelijke
        apparatuur. Bijvoorbeeld: zakelijk gebruik, gemengd zakelijk en privégebruik,
        aanschafwaarde en afschrijving.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/laptop-aftrekbaar-zzp">
          Laptop aftrekbaar als zzp&apos;er? →
        </TextLink>
      </p>

      <h2>Internetkosten thuis</h2>
      <p>
        Ook internet verdient een eigen beoordeling. Veel zzp&apos;ers gebruiken dezelfde
        internetverbinding zowel zakelijk als privé. Dan moet je naar het zakelijke gebruik
        kijken.
      </p>
      <p>
        Internet is dus niet automatisch volledig aftrekbaar omdat je thuis werkt. Maar de
        behandeling van internet moet ook niet zonder meer worden gelijkgesteld aan de
        aftrekbaarheid van de vierkante meters van je thuiskantoor.
      </p>
      <p>
        Lees daarom:{' '}
        <TextLink href="/blogs/internet-aftrekbaar-zzp">
          Internet aftrekbaar als zzp&apos;er? →
        </TextLink>
      </p>

      <h2>Telefoonkosten bij thuiswerken</h2>
      <p>
        Werk je vanuit huis en gebruik je je telefoon voor klanten? Dan gelden de normale regels
        voor zakelijke telefoonkosten. Een zakelijk telefoonabonnement kan bijvoorbeeld geheel of
        gedeeltelijk zakelijk zijn. Gebruik je een abonnement ook privé, dan moet je rekening
        houden met het privédeel.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/telefoon-aftrekbaar-zzp">
          Telefoon aftrekbaar als zzp&apos;er? →
        </TextLink>
      </p>

      <h2>Koffie tijdens het thuiswerken aftrekken?</h2>
      <p>
        Dat je tijdens je werk thuis koffie drinkt, betekent niet automatisch dat je dagelijkse
        boodschappen zakelijke kosten worden. Uitgaven met een duidelijk privékarakter worden
        niet zakelijk alleen omdat je ze consumeert tijdens werktijd.
      </p>
      <p>
        Dit geldt bijvoorbeeld ook voor je normale lunch thuis. Thuiswerken verandert gewone
        kosten van levensonderhoud niet automatisch in zakelijke uitgaven.
      </p>

      <h2>Lunch tijdens thuiswerken aftrekken?</h2>
      <p>
        Je normale lunch thuis is een privé-uitgave. Iedereen moet immers eten, ongeacht of je
        ondernemer bent. Het feit dat je achter je laptop zit terwijl je een broodje eet, maakt
        je lunch niet tot zakelijke kosten.
      </p>
      <p>
        Dit is anders dan bepaalde zakelijke horeca- of representatiekosten, waarvoor weer eigen
        fiscale beperkingen gelden.
      </p>

      <h2>Kantoorartikelen thuis gebruiken</h2>
      <p>
        Koop je kantoorartikelen specifiek voor je onderneming? Denk aan printerpapier,
        cartridges, notitieblokken, pennen, ordners of verzendmateriaal. Dan kunnen dit normale
        zakelijke kosten zijn wanneer ze daadwerkelijk voor je onderneming worden gebruikt.
      </p>
      <p>
        Ook hier geldt:{' '}
        <strong>
          Niet-aftrekbare werkruimte ≠ alle spullen in die werkruimte niet aftrekbaar.
        </strong>{' '}
        Dat onderscheid is essentieel.
      </p>

      <h2>Printer aftrekbaar als zzp&apos;er?</h2>
      <p>
        Een printer die je voor je onderneming gebruikt kan een zakelijke aankoop zijn. Gebruik
        je hem zowel zakelijk als privé? Dan moet je rekening houden met gemengd gebruik.
      </p>
      <p>
        Bij een duur bedrijfsmiddel dat meerdere jaren wordt gebruikt kunnen bovendien de regels
        voor investeringen en afschrijving relevant worden.
      </p>

      <h2>Inrichting van een niet-aftrekbare werkruimte</h2>
      <p>
        Hier moet je voorzichtig zijn. De Belastingdienst spreekt bij de beoordeling van een
        werkruimte thuis ook over de kosten en inrichtingskosten van die werkruimte. Je kunt dus
        niet automatisch aannemen dat iedere vorm van inrichting aftrekbaar is omdat je er een
        zakelijk doel voor kunt noemen.
      </p>
      <p>Maak onderscheid tussen:</p>
      <ul>
        <li>bedrijfsmiddelen die zelfstandig voor je onderneming worden gebruikt;</li>
        <li>inrichting die onderdeel is van de werkruimte zelf;</li>
        <li>normale woninginrichting.</li>
      </ul>
      <p>
        Bij twijfel over een kostbare inrichting van een thuiskantoor is het verstandig de
        specifieke situatie te controleren.
      </p>

      <h2>Volledig apart bedrijfspand</h2>
      <p>
        Heb je geen thuiskantoor, maar huur je een pand dat je volledig voor je onderneming
        gebruikt? Dan is de situatie veel eenvoudiger.
      </p>
      <p>
        De Belastingdienst geeft aan dat je bij een volledig zakelijk gehuurd pand onder andere
        de volgende kosten kunt aftrekken: huur, energiekosten, verzekeringskosten,
        schoonmaakkosten en inrichtingskosten. Voor bepaalde inrichtingskosten kan afschrijving
        nodig zijn.
      </p>
      <p>
        Dit laat goed zien waarom een normaal thuiskantoor fiscaal anders wordt behandeld dan een
        afzonderlijk bedrijfspand.
      </p>

      <h2>Bedrijfsruimte in eigendom</h2>
      <p>
        Heb je een pand dat volledig van je onderneming is en als bedrijfsruimte wordt gebruikt?
        Dan kunnen onder andere energiekosten, verzekeringen, schoonmaak en inrichting zakelijke
        kosten zijn. Over het pand en bepaalde bedrijfsmiddelen moet mogelijk worden
        afgeschreven.
      </p>
      <p>
        Bij een pand waarin je zowel woont als werkt, wordt de situatie complexer. Daar kunnen
        regels rond privévermogen, ondernemingsvermogen en keuzevermogen een rol spelen.
      </p>

      <h2>Tuinkantoor aftrekbaar als zzp&apos;er?</h2>
      <p>
        Een tuinkantoor is interessant omdat zo&apos;n ruimte mogelijk veel zelfstandiger is dan
        een bureau in de woonkamer. Maar: <strong>een tuinkantoor is niet automatisch fiscaal
        aftrekbaar.</strong>
      </p>
      <p>
        Je moet opnieuw beoordelen of de ruimte voldoende zelfstandig is en aan de overige
        voorwaarden voldoet. Een los gebouw met bijvoorbeeld een eigen ingang en eigen
        voorzieningen kan anders worden beoordeeld dan een tuinhuisje dat feitelijk onderdeel is
        van het privégebruik van de woning. Gebruik bij twijfel het hulpmiddel van de
        Belastingdienst.
      </p>

      <h2>Garage als werkruimte</h2>
      <p>
        Gebruik je je garage als werkplaats, atelier, praktijk of kantoor? Dan moet eveneens
        worden beoordeeld of sprake is van een zelfstandige werkruimte en of je aan de overige
        voorwaarden voldoet.
      </p>
      <p>
        Dat de garage fysiek apart voelt van je woonkamer betekent niet automatisch dat alle
        kosten aftrekbaar zijn. De feitelijke situatie is bepalend.
      </p>

      <h2>Praktijk aan huis</h2>
      <p>
        Voor sommige ondernemers is een praktijk aan huis wél duidelijk afgescheiden. Denk
        bijvoorbeeld aan een ruimte met aparte ingang, wachtruimte, eigen sanitair en inrichting
        specifiek voor klanten.
      </p>
      <p>
        Zo&apos;n situatie heeft meer kenmerken van een zelfstandige werkruimte. Maar ook dan
        moet je aan de overige fiscale voorwaarden voldoen voordat je de kosten aftrekt.
      </p>

      <h2>Salon aan huis</h2>
      <p>
        Hetzelfde geldt voor bijvoorbeeld een kapsalon, schoonheidssalon, massagepraktijk of
        nagelstudio. Een aparte commerciële ruimte aan huis kan fiscaal anders worden beoordeeld
        dan een normale werkkamer.
      </p>
      <p>
        Is de salon zelfstandig en wordt voldoende inkomen in of vanuit de ruimte verdiend? Dan
        kan kostenaftrek mogelijk zijn. Controleer dit voor jouw specifieke situatie.
      </p>

      <h2>Werkruimte en btw</h2>
      <p>
        Naast de inkomstenbelasting kan btw een rol spelen. De btw-behandeling van verbouwing,
        inrichting, energie en zakelijke apparatuur kan afhangen van het zakelijke gebruik en de
        aard van de kosten.
      </p>
      <p>
        De regels voor btw zijn niet automatisch hetzelfde als de regels voor de
        inkomstenbelasting. Bij grote bedragen rond verbouwing of vastgoed is professioneel
        fiscaal advies verstandig.
      </p>

      <h2>KOR en thuiswerkkosten</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling? Dan trek je in beginsel geen btw op
        zakelijke kosten en investeringen af. Dat kan bijvoorbeeld relevant zijn voor zakelijke
        apparatuur die je thuis gebruikt.
      </p>
      <p>
        De KOR verandert echter niet een normale werkkamer ineens in een aftrekbare werkruimte.
        De voorwaarden voor kostenaftrek van de werkruimte blijven afzonderlijk gelden.
      </p>

      <h2>Thuiswerkkosten betaald met privérekening</h2>
      <p>
        Veel kosten thuis worden vanzelfsprekend vanaf een privérekening betaald. De gebruikte
        bankrekening bepaalt niet op zichzelf of een uitgave zakelijk is. Maar dat betekent niet
        dat je daardoor een gedeelte van al je huishoudelijke kosten zakelijk kunt maken.
      </p>
      <p>
        Beoordeel iedere kostenpost op basis van de fiscale regels die daarvoor gelden. Een
        zakelijk softwareabonnement dat privé wordt betaald kan bijvoorbeeld nog steeds zakelijk
        zijn. Je volledige energierekening wordt daarentegen niet automatisch gedeeltelijk
        zakelijk omdat je vanuit huis werkt.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h2>Voorbeeld: freelancer met kantoor in slaapkamer</h2>
      <p>
        Je bent freelance marketeer. Je werkt vijf dagen per week vanuit een slaapkamer die je
        als kantoor hebt ingericht. De kamer heeft geen eigen ingang, geen eigen toilet en kan
        niet zelfstandig worden verhuurd.
      </p>
      <p>
        Je kunt de kosten van de kamer niet simpelweg als zakelijke huisvestingskosten aftrekken.
        Je zakelijke laptop, software, telefoon en kantoorartikelen moet je afzonderlijk volgens
        de regels voor die kosten beoordelen.
      </p>

      <h2>Voorbeeld: consultant aan de keukentafel</h2>
      <p>
        Je werkt drie dagen per week vanuit huis aan de keukentafel. Je kunt niet een percentage
        van huur, hypotheek, energie of gemeentelijke lasten aftrekken omdat je de woning
        gedeeltelijk tijdens werktijd gebruikt. Je hebt geen zelfstandige werkruimte.
      </p>
      <p>Andere echte zakelijke kosten blijven afzonderlijk beoordeeld worden.</p>

      <h2>Voorbeeld: zelfstandige praktijkruimte aan huis</h2>
      <p>
        Je hebt een praktijkruimte aan je woning met eigen ingang, eigen sanitair en duidelijke
        afscheiding van het woongedeelte. Je gebruikt de ruimte intensief voor je onderneming.
        Dan kan sprake zijn van een zelfstandige werkruimte.
      </p>
      <p>
        Vervolgens moet nog worden beoordeeld of je aan de inkomens- en overige voorwaarden
        voldoet. In zo&apos;n situatie is het dus wél de moeite waard om het officiële hulpmiddel
        van de Belastingdienst te gebruiken.
      </p>

      <h2>Voorbeeld: apart kantoor huren</h2>
      <p>
        Je huurt voor €600 per maand een kantoor dat volledig voor je onderneming wordt gebruikt.
        Dit is geen werkruimte in je woning. De regels voor een normaal bedrijfspand zijn van
        toepassing. De huur en andere zakelijke kosten van het kantoor kunnen in beginsel worden
        afgetrokken.
      </p>
      <p>
        Dat is fiscaal een wezenlijk andere situatie dan een slaapkamer die je thuis als kantoor
        gebruikt.
      </p>

      <h2>Wat kun je als thuiswerkende zzp&apos;er dan wél bijhouden?</h2>
      <p>
        Ook als je thuiskantoor zelf niet aftrekbaar is, heb je waarschijnlijk genoeg echte
        zakelijke uitgaven. Denk aan:
      </p>
      <ul>
        <li>software;</li>
        <li>zakelijke telefoon;</li>
        <li>zakelijk deel van internet;</li>
        <li>laptop;</li>
        <li>monitor;</li>
        <li>printer;</li>
        <li>kantoorartikelen;</li>
        <li>hosting;</li>
        <li>domeinnaam;</li>
        <li>zakelijke verzekeringen;</li>
        <li>zakelijke reiskosten.</li>
      </ul>
      <p>
        Beoordeel iedere uitgave afzonderlijk. Dat geeft een veel betrouwbaarder kostenoverzicht
        dan simpelweg een percentage van al je huishoudelijke uitgaven als zakelijk aanmerken.
      </p>

      <h2>Thuiswerkkosten bijhouden met FactuurBaas</h2>
      <p>
        Met FactuurBaas kun je daadwerkelijke zakelijke uitgaven naast je facturen registreren.
        Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Software:</strong> €60 per maand
        </li>
        <li>
          <strong>Zakelijk internetdeel:</strong> €30 per maand
        </li>
        <li>
          <strong>Telefoon:</strong> €35 per maand
        </li>
        <li>
          <strong>Hosting:</strong> €20 per maand
        </li>
      </ul>
      <p>
        Zo krijg je inzicht in de zakelijke kosten die tegenover je omzet staan. Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Omzet:</strong> €4.850
        </li>
        <li>
          <strong>Uitgaven:</strong> €1.240
        </li>
        <li>
          <strong>Resultaat:</strong> €3.610
        </li>
      </ul>
      <p>
        Let erop dat je niet zomaar huur, hypotheek of energie als zakelijke uitgave registreert
        omdat je vanuit huis werkt. Voor werkruimte thuis gelden aparte fiscale voorwaarden.
      </p>

      <UitgavenCta
        title="Houd je echte zakelijke uitgaven bij"
        text="Registreer zakelijke kosten naast je facturen en krijg beter inzicht in je resultaat."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Een percentage van de huur aftrekken</h3>
      <p>
        Een kamer als kantoor gebruiken geeft je niet automatisch recht op aftrek van een
        gedeelte van de huur.
      </p>

      <h3>Een percentage van de hypotheek aftrekken</h3>
      <p>
        Ook bij een koopwoning gelden speciale regels voor werkruimte thuis.
      </p>

      <h3>Alle energie als zakelijke kosten behandelen</h3>
      <p>
        Thuiswerken maakt je normale huishoudelijke energierekening niet automatisch aftrekbaar.
      </p>

      <h3>Denken dat een aparte slaapkamer altijd een zelfstandige werkruimte is</h3>
      <p>
        Een aparte kamer is niet genoeg. De Belastingdienst kijkt onder andere naar een eigen
        ingang, voorzieningen en mogelijke verhuurbaarheid.
      </p>

      <h3>Denken dat niets thuis aftrekbaar is</h3>
      <p>
        Ook dat klopt niet. Losse zakelijke kosten en bedrijfsmiddelen kunnen hun eigen fiscale
        behandeling hebben.
      </p>

      <h3>De regels voor een bedrijfspand toepassen op je woning</h3>
      <p>
        Een apart zakelijk kantoor of bedrijfspand wordt fiscaal anders behandeld dan een gewone
        werkkamer thuis.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Is een thuiskantoor aftrekbaar als zzp&apos;er?</h3>
      <p>
        Meestal niet. De Belastingdienst geeft aan dat kosten van een werkruimte thuis slechts in
        een zeer beperkt aantal gevallen aftrekbaar zijn.
      </p>

      <h3>Is een slaapkamer als kantoor aftrekbaar?</h3>
      <p>
        Normaal gesproken niet. Een slaapkamer die als kantoor is ingericht is volgens de
        Belastingdienst geen zelfstandige werkruimte alleen doordat je deze voor je onderneming
        gebruikt.
      </p>

      <h3>Kan ik een deel van mijn huur aftrekken als zzp&apos;er?</h3>
      <p>
        Niet automatisch. Voor een werkruimte in een huurwoning gelden speciale voorwaarden. Een
        gewone kamer als kantoor geeft je niet het recht om simpelweg een percentage van de huur
        af te trekken.
      </p>

      <h3>Kan ik een deel van mijn hypotheek aftrekken?</h3>
      <p>
        Je kunt niet simpelweg een percentage van je hypotheeklasten als zakelijke kosten
        opvoeren omdat je vanuit huis werkt. Voor werkruimte in een eigen woning gelden
        specifieke regels.
      </p>

      <h3>Kan ik energiekosten aftrekken als ik thuiswerk?</h3>
      <p>
        Bij een normale niet-aftrekbare werkruimte kun je niet zomaar een percentage van je
        huishoudelijke energiekosten als zakelijke huisvestingskosten aftrekken. Bij een
        kwalificerende zelfstandige werkruimte of afzonderlijke bedrijfsruimte kan de situatie
        anders zijn.
      </p>

      <h3>Wanneer is een werkruimte zelfstandig?</h3>
      <p>
        De Belastingdienst kijkt onder andere naar een eigen ingang of opgang, eigen sanitaire
        voorzieningen en de vraag of de ruimte afzonderlijk aan een derde verhuurd zou kunnen
        worden.
      </p>

      <h3>Is een bureau aftrekbaar als zzp&apos;er?</h3>
      <p>
        Een zakelijk gebruikt bureau kan als losse zakelijke aankoop of bedrijfsmiddel een andere
        fiscale behandeling hebben dan de werkruimte zelf. Beoordeel de aanschaf dus
        afzonderlijk.
      </p>

      <h3>Is een bureaustoel aftrekbaar als zzp&apos;er?</h3>
      <p>
        Een zakelijke bureaustoel kan een bedrijfsmiddel zijn. De niet-aftrekbaarheid van een
        normale werkkamer betekent niet automatisch dat ieder los bedrijfsmiddel in die kamer
        niet aftrekbaar is.
      </p>

      <h3>Is internet thuis aftrekbaar?</h3>
      <p>
        Het zakelijke deel van internetkosten kan onder voorwaarden als zakelijke kosten worden
        behandeld. Gebruik je internet ook privé, dan moet je rekening houden met het
        privégebruik.
      </p>

      <h3>Is een tuinkantoor aftrekbaar?</h3>
      <p>
        Dat kan niet algemeen worden gezegd. Een tuinkantoor kan mogelijk kenmerken van een
        zelfstandige werkruimte hebben, maar moet ook aan de overige voorwaarden voldoen.
      </p>

      <h3>Is een apart gehuurd kantoor aftrekbaar?</h3>
      <p>
        Huur je een pand dat je volledig voor je onderneming gebruikt, dan zijn onder andere de
        huur, energie, verzekeringen, schoonmaak en bepaalde inrichtingskosten in beginsel
        zakelijke kosten.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Werk je als zzp&apos;er vanuit huis? Dan zijn de kosten van je werkruimte{' '}
        <strong>meestal niet aftrekbaar</strong>.
      </p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>
          werkruimte thuis is volgens de Belastingdienst{' '}
          <strong>0% aftrekbaar, met uitzonderingen</strong>;
        </li>
        <li>een bureau in de woonkamer is geen zelfstandige werkruimte;</li>
        <li>
          een slaapkamer die je als kantoor gebruikt is normaal gesproken ook geen zelfstandige
          werkruimte;
        </li>
        <li>
          voor een zelfstandige werkruimte kijkt de Belastingdienst onder andere naar een eigen
          ingang, eigen sanitair en mogelijke verhuurbaarheid;
        </li>
        <li>daarnaast kunnen inkomenseisen gelden;</li>
        <li>
          je kunt niet zomaar een percentage van huur, hypotheek of energie aftrekken;
        </li>
        <li>een apart bedrijfspand wordt anders behandeld;</li>
        <li>
          losse zakelijke kosten zoals software, apparatuur, telefoon en kantoorartikelen moet je
          afzonderlijk beoordelen;
        </li>
        <li>
          gebruik bij twijfel het officiële hulpmiddel Werkruimte van de Belastingdienst.
        </li>
      </ul>
      <p>De belangrijkste fout om te voorkomen is dus:</p>
      <p>
        <strong>
          “Ik werk thuis, dus een deel van mijn woning is automatisch zakelijke kosten.”
        </strong>
      </p>
      <p>Zo werkt het niet.</p>
      <p>Heb je daarnaast echte zakelijke uitgaven voor je onderneming?</p>

      <UitgavenCta
        title="Houd je zakelijke uitgaven gratis bij met FactuurBaas"
        label="Gratis uitgaven bijhouden →"
      />

      <p className="mt-4 text-sm text-slate-500">
        Dit artikel is informatief en geen fiscaal advies. Regels kunnen wijzigen; check bij
        twijfel de Belastingdienst of je boekhouder. Zie ook{' '}
        <TextLink href="/blogs/zakelijke-kosten-zzp">zakelijke kosten zzp</TextLink>.
      </p>
    </>
  ),
};
