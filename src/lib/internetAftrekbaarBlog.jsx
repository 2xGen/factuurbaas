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
  title = 'Houd je zakelijke internetkosten bij',
  text = 'Registreer terugkerende zakelijke kosten en btw naast je facturen en krijg meer grip op je resultaat.',
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

export const internetAftrekbaarArticle = {
  slug: 'internet-aftrekbaar-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'telefoon-aftrekbaar-zzp',
    'laptop-aftrekbaar-zzp',
    'software-abonnementen-aftrekken-zzp',
    'werkruimte-thuis-aftrekbaar-zzp',
    'zakelijke-kosten-prive-betaald',
  ],
  metaTitle: "Internet aftrekbaar als zzp'er? Dit zijn de regels",
  title: "Internet aftrekbaar als zzp'er? Dit zijn de regels",
  excerpt:
    "Internet aftrekbaar als zzp'er? Lees welk deel van thuisinternet je zakelijk mag aftrekken, hoe privégebruik werkt en wat dit betekent voor de btw.",
  keywords:
    "internet aftrekbaar zzp, internetkosten aftrekbaar zzp, internet zakelijk aftrekken, thuisinternet aftrekbaar zzp, internetkosten zzp, btw internet aftrekken, internet zakelijk en privé, wifi aftrekbaar zzp",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Internet%20aftrekbaar%20als%20zzper.jpg',
    alt: "Internet aftrekbaar als zzp'er — thuiswerken en online werk",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is internet aftrekbaar als zzp'er?",
      answer:
        'Ja, internetkosten kunnen zakelijke kosten zijn voor zover de internetverbinding voor je onderneming wordt gebruikt. Gebruik je dezelfde verbinding ook privé, dan is alleen het zakelijke deel aftrekbaar.',
    },
    {
      question: "Kan ik mijn thuisinternet aftrekken als zzp'er?",
      answer:
        'Het zakelijke deel kan aftrekbaar zijn. Je kunt niet automatisch de volledige internetrekening aftrekken wanneer de verbinding ook privé wordt gebruikt.',
    },
    {
      question: 'Hoeveel procent van mijn internet mag ik zakelijk aftrekken?',
      answer:
        'Er bestaat geen algemeen standaardpercentage. Je moet een redelijke verdeling maken die aansluit bij het werkelijke zakelijke en privégebruik.',
    },
    {
      question: 'Mag ik 50% van mijn internet aftrekken?',
      answer:
        'Alleen als 50% in jouw situatie een redelijke en onderbouwbare verdeling is. Het is geen automatisch percentage voor zzp\'ers.',
    },
    {
      question: 'Kan ik btw op internet aftrekken?',
      answer:
        'Als je recht hebt op aftrek van voorbelasting, kan de btw op het zakelijke deel van je internetkosten aftrekbaar zijn. Bij privégebruik en vrijgestelde omzet kunnen beperkingen gelden.',
    },
    {
      question: 'Is internet volledig aftrekbaar bij een apart kantoor?',
      answer:
        'Een internetverbinding die uitsluitend voor een volledig zakelijke bedrijfsruimte wordt gebruikt, kan in beginsel volledig zakelijk zijn.',
    },
    {
      question: 'Kan ik internet aftrekken als ik vanuit huis werk?',
      answer:
        'Zakelijk gebruik van internet kan tot aftrekbare kosten leiden, maar dat betekent niet automatisch dat de overige kosten van je werkruimte thuis aftrekbaar zijn. Voor een werkruimte in de woning gelden aparte voorwaarden.',
    },
    {
      question: "Is glasvezel aftrekbaar als zzp'er?",
      answer:
        'De techniek maakt voor de basisregel niet uit. Het zakelijke deel van een glasvezelverbinding kan net als andere internetkosten aftrekbaar zijn.',
    },
    {
      question: 'Kan ik mijn router aftrekken?',
      answer:
        'Een router of andere netwerkapparatuur die zakelijk wordt gebruikt kan geheel of gedeeltelijk een zakelijke kostenpost of bedrijfsmiddel zijn. Bij privégebruik moet je rekening houden met het privédeel.',
    },
    {
      question: 'Kan ik internet aftrekken als de factuur privé wordt betaald?',
      answer:
        'De betaalrekening bepaalt niet of een kostenpost zakelijk is. Het zakelijke deel kan nog steeds in je administratie worden verwerkt wanneer je aan de normale voorwaarden voldoet.',
    },
  ],
  content: (
    <>
      <p>
        Werk je als zzp&apos;er online? Dan gebruik je je internetverbinding waarschijnlijk iedere
        dag voor je onderneming.
      </p>
      <p>
        Denk aan e-mail, videobellen, administratie, cloudsoftware, klantwerk, je website en het
        versturen van facturen.
      </p>
      <p>Maar mag je de kosten van internet ook aftrekken?</p>
      <p>
        <strong>
          Ja, zakelijke internetkosten kunnen aftrekbaar zijn. Gebruik je dezelfde
          internetverbinding ook privé, dan is alleen het zakelijke deel aftrekbaar.
        </strong>
      </p>
      <p>
        Je kunt dus niet automatisch je volledige internetabonnement als zakelijke kosten opvoeren
        omdat je vanuit huis werkt.
      </p>
      <p>
        In deze gids lees je hoe het zit met internetkosten, thuisinternet, mobiel internet, btw en
        gemengd zakelijk en privégebruik.
      </p>

      <UitgavenCta />

      <h2>Zijn internetkosten aftrekbaar als zzp&apos;er?</h2>
      <p>
        Internetkosten kunnen zakelijke kosten zijn voor zover ze betrekking hebben op je
        onderneming.
      </p>
      <p>
        De Belastingdienst noemt internet ook als voorbeeld van bedrijfskosten bij de aangifte voor
        ondernemers.
      </p>
      <p>Gebruik je internet bijvoorbeeld voor:</p>
      <ul>
        <li>e-mail met klanten;</li>
        <li>online vergaderingen;</li>
        <li>cloudsoftware;</li>
        <li>administratie;</li>
        <li>facturen en offertes;</li>
        <li>je website;</li>
        <li>online marketing;</li>
        <li>klantwerk;</li>
        <li>bestanden uploaden;</li>
        <li>online onderzoek;</li>
        <li>webshops;</li>
        <li>online boekhouden;</li>
      </ul>
      <p>dan heeft je internetverbinding duidelijk een zakelijke functie.</p>
      <p>
        Gebruik je dezelfde verbinding daarnaast privé? Dan heb je te maken met gemengde kosten.
      </p>

      <h2>Internet zakelijk én privé gebruiken</h2>
      <p>Voor veel zzp&apos;ers is dit de normale situatie.</p>
      <p>Je hebt thuis één internetverbinding. Overdag gebruik je deze bijvoorbeeld voor:</p>
      <ul>
        <li>klantwerk;</li>
        <li>Zoom of Teams;</li>
        <li>e-mail;</li>
        <li>administratie;</li>
        <li>je website;</li>
        <li>cloudopslag.</li>
      </ul>
      <p>&apos;s Avonds gebruik je dezelfde verbinding voor:</p>
      <ul>
        <li>Netflix;</li>
        <li>YouTube;</li>
        <li>gaming;</li>
        <li>privé social media;</li>
        <li>persoonlijke e-mail;</li>
        <li>andere privéactiviteiten.</li>
      </ul>
      <p>De internetkosten hebben dan zowel een zakelijk als persoonlijk karakter.</p>
      <p>
        De algemene regel van de Belastingdienst is dat bij gemengde kosten alleen het{' '}
        <strong>zakelijke deel</strong> aftrekbaar is.
      </p>
      <p>Je kunt dus niet simpelweg zeggen:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Ik werk vanuit huis, dus 100% van mijn internet is zakelijk.
      </blockquote>
      <p>
        Je moet een redelijke verdeling maken tussen zakelijk en privégebruik.
      </p>

      <h2>Hoe bepaal je het zakelijke deel van internet?</h2>
      <p>
        Er bestaat niet één standaardpercentage dat voor iedere zzp&apos;er geldt. Je moet een
        verdeling gebruiken die past bij je werkelijke situatie en die je kunt uitleggen.
      </p>
      <p>Je kunt bijvoorbeeld kijken naar:</p>
      <ul>
        <li>hoeveel je internet zakelijk gebruikt;</li>
        <li>hoeveel je internet privé gebruikt;</li>
        <li>hoeveel mensen thuis de verbinding gebruiken;</li>
        <li>de aard van je onderneming;</li>
        <li>hoeveel van je werkzaamheden online plaatsvinden;</li>
        <li>of je een aparte zakelijke verbinding hebt.</li>
      </ul>
      <p>
        Stel dat je op basis van je situatie redelijk kunt onderbouwen dat 60% van het
        internetgebruik zakelijk is. Bij een abonnement van €50 per maand zou het zakelijke deel
        dan in dit eenvoudige voorbeeld zijn:
      </p>
      <p>
        <strong>€50 × 60% = €30 per maand</strong>
      </p>
      <p>Op jaarbasis:</p>
      <p>
        <strong>€30 × 12 = €360 zakelijke internetkosten</strong>
      </p>
      <p>Het gekozen percentage moet wel aansluiten bij de werkelijkheid.</p>

      <h2>Is er een vast percentage voor zakelijk internet?</h2>
      <p>Nee, er is geen algemeen percentage zoals:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Iedere zzp&apos;er mag standaard 50% van zijn internet aftrekken.
      </blockquote>
      <p>Hoeveel aftrekbaar is, hangt af van het zakelijke gebruik.</p>
      <p>
        Voor de ene ondernemer kan internet bijna volledig zakelijk worden gebruikt, terwijl een
        ander dezelfde verbinding vooral privé gebruikt en slechts af en toe een zakelijke e-mail
        verstuurt.
      </p>
      <p>
        Gebruik daarom geen willekeurig percentage alleen omdat het makkelijk is. Zorg dat je de
        gekozen verdeling redelijk kunt onderbouwen.
      </p>

      <h2>Voorbeeld: zzp&apos;er werkt volledig online vanuit huis</h2>
      <p>
        Stel dat je webdeveloper bent en vrijwel al je werkzaamheden online uitvoert. Je
        internetabonnement kost:
      </p>
      <p>
        <strong>€60 per maand</strong>
      </p>
      <p>
        Je gebruikt de verbinding intensief voor je onderneming, maar je gezin gebruikt dezelfde
        verbinding ook privé. Dan is het niet logisch om automatisch te stellen dat de volledige
        €60 zakelijk is.
      </p>
      <p>
        Je bepaalt welk deel redelijkerwijs aan je onderneming kan worden toegerekend. Stel dat je
        uitkomt op 70%.
      </p>
      <p>Dan is in dit eenvoudige voorbeeld:</p>
      <ul>
        <li>
          <strong>Zakelijk deel per maand:</strong> €42
        </li>
        <li>
          <strong>Zakelijk deel per jaar:</strong> €504
        </li>
      </ul>
      <p>Het resterende deel is privé en hoort niet bij je zakelijke kosten.</p>

      <h2>Voorbeeld: internet nauwelijks zakelijk gebruikt</h2>
      <p>
        Stel dat je als schilder werkt. Vrijwel al je werkzaamheden vinden bij klanten plaats.
        Thuis gebruik je je internetverbinding soms om:
      </p>
      <ul>
        <li>een factuur te versturen;</li>
        <li>een offerte te maken;</li>
        <li>e-mail te lezen.</li>
      </ul>
      <p>
        De verbinding wordt verder voornamelijk privé gebruikt. Dan zal het zakelijke aandeel
        waarschijnlijk veel lager zijn dan bij een ondernemer die acht uur per dag online werkt.
      </p>
      <p>
        De aard van je onderneming kan dus relevant zijn bij het bepalen van een redelijke
        verdeling.
      </p>

      <h2>Aparte zakelijke internetverbinding</h2>
      <p>
        Heb je een internetverbinding die uitsluitend voor je onderneming wordt gebruikt? Dan is
        de situatie eenvoudiger.
      </p>
      <p>Denk bijvoorbeeld aan internet in:</p>
      <ul>
        <li>een kantoor;</li>
        <li>winkel;</li>
        <li>werkplaats;</li>
        <li>praktijkruimte;</li>
        <li>andere aparte bedrijfsruimte.</li>
      </ul>
      <p>
        Als de verbinding volledig voor de onderneming wordt gebruikt, kunnen de kosten in beginsel
        volledig zakelijk zijn. Je hoeft dan niet hetzelfde onderscheid tussen zakelijk en
        privégebruik te maken als bij één gedeelde internetverbinding thuis.
      </p>

      <h2>Internet in een gehuurd bedrijfspand</h2>
      <p>
        Huur je een pand dat volledig voor je onderneming wordt gebruikt? Dan zijn kosten die je
        voor die bedrijfsruimte maakt in beginsel zakelijke kosten.
      </p>
      <p>
        Een internetabonnement dat uitsluitend bij zo&apos;n bedrijfsruimte hoort en zakelijk wordt
        gebruikt, is daardoor veel eenvoudiger als volledig zakelijke kostenpost te onderbouwen
        dan een gedeelde internetverbinding thuis.
      </p>

      <h2>Internet thuis en kosten van je werkruimte zijn niet hetzelfde</h2>
      <p>Dit onderscheid is belangrijk.</p>
      <p>
        Misschien werk je vanuit een kamer in je woning. Dat betekent niet automatisch dat alle
        kosten van die kamer of woning aftrekbaar zijn.
      </p>
      <p>
        Voor een <strong>werkruimte in je eigen woning</strong> gelden namelijk specifieke en vrij
        strenge voorwaarden. De Belastingdienst geeft aan dat kosten van een werkruimte thuis in de
        meeste gevallen niet aftrekbaar zijn.
      </p>
      <p>De vraag:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Kan ik mijn internetkosten zakelijk aftrekken?
      </blockquote>
      <p>moet je daarom niet automatisch gelijkstellen aan:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Kan ik alle kosten van mijn thuiskantoor aftrekken?
      </blockquote>
      <p>Dat zijn verschillende fiscale vragen.</p>
      <p>
        Lees hierover:{' '}
        <TextLink href="/blogs/werkruimte-thuis-aftrekbaar-zzp">
          Werkruimte thuis aftrekbaar als zzp&apos;er →
        </TextLink>
      </p>

      <h2>Internet en telefoon in één abonnement</h2>
      <p>Misschien heb je een pakket met:</p>
      <ul>
        <li>internet;</li>
        <li>televisie;</li>
        <li>vaste telefonie.</li>
      </ul>
      <p>
        Dan is het niet verstandig om automatisch het volledige pakket als zakelijke internetkosten
        te boeken.
      </p>
      <p>Stel:</p>
      <p>
        <strong>Internet + televisie + telefonie:</strong> €70 per maand
      </p>
      <p>
        Je gebruikt internet deels voor je onderneming, maar televisie volledig privé. Dan moet je
        beoordelen welk deel van het pakket daadwerkelijk betrekking heeft op zakelijk gebruik.
      </p>
      <p>
        Een privé-tv-abonnement wordt niet ineens zakelijk omdat het samen met internet op één
        factuur staat. Probeer waar mogelijk de verschillende onderdelen van het abonnement te
        onderscheiden.
      </p>

      <h2>Internet en mobiel abonnement in één pakket</h2>
      <p>
        Hetzelfde kan gelden voor gecombineerde telecomabonnementen. Heb je bijvoorbeeld:
      </p>
      <ul>
        <li>thuisinternet;</li>
        <li>mobiele telefoon;</li>
        <li>extra simkaart;</li>
        <li>aanvullende diensten;</li>
      </ul>
      <p>
        op één factuur? Kijk dan per onderdeel naar het zakelijke gebruik. Voor telefoonkosten
        gelden bovendien specifieke regels.
      </p>
      <p>
        Lees daarvoor:{' '}
        <TextLink href="/blogs/telefoon-aftrekbaar-zzp">
          Telefoon aftrekbaar als zzp&apos;er? →
        </TextLink>
      </p>

      <h2>Mobiel internet aftrekbaar</h2>
      <p>
        Gebruik je mobiel internet voor je onderneming? Dan kan het zakelijke deel daarvan
        eveneens zakelijke kosten zijn.
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>mobiele hotspot tijdens klantbezoeken;</li>
        <li>internet onderweg;</li>
        <li>werken vanuit de trein;</li>
        <li>klantwerk op locatie;</li>
        <li>zakelijke apps;</li>
        <li>zakelijke communicatie.</li>
      </ul>
      <p>
        Gebruik je een mobiele databundel zowel zakelijk als privé, dan geldt opnieuw dat je het
        zakelijke deel moet onderscheiden.
      </p>

      <h2>Aparte zakelijke simkaart voor data</h2>
      <p>
        Heb je een aparte simkaart of mobiele router die uitsluitend voor je onderneming wordt
        gebruikt? Dan is het zakelijke karakter makkelijker te onderbouwen.
      </p>
      <p>Bijvoorbeeld:</p>
      <p>
        Je gebruikt een 5G-router uitsluitend in je werkplaats. De verbinding wordt niet privé
        gebruikt. Dan kunnen de abonnementskosten in beginsel volledig zakelijke kosten zijn.
      </p>

      <h2>Btw op internetkosten aftrekken</h2>
      <p>
        Naast de aftrek van internetkosten voor je winst heb je te maken met btw. Ben je
        ondernemer voor de btw en gebruik je de internetdienst voor activiteiten waarvoor je recht
        hebt op aftrek van voorbelasting? Dan kan de btw op het zakelijke deel van de
        internetkosten aftrekbaar zijn.
      </p>
      <p>
        Gebruik je internet zowel zakelijk als privé? Dan kun je niet automatisch de btw over het
        volledige privédeel als voorbelasting aftrekken. Voor de btw moet je eveneens rekening
        houden met het gebruik voor je onderneming.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het? →
        </TextLink>
      </p>

      <h2>Voorbeeld btw op internet</h2>
      <p>Stel dat je internetfactuur bestaat uit:</p>
      <ul>
        <li>
          <strong>Abonnement excl. btw:</strong> €50
        </li>
        <li>
          <strong>Btw:</strong> €10,50
        </li>
        <li>
          <strong>Totaal:</strong> €60,50
        </li>
      </ul>
      <p>
        Stel vervolgens dat je op basis van je situatie 60% als zakelijk deel kunt onderbouwen. Dan
        moet je voor zowel de zakelijke kosten als de btw rekening houden met het zakelijke
        gebruik en de btw-regels die op jouw situatie van toepassing zijn.
      </p>
      <p>
        Je kunt niet automatisch de volledige €50 als zakelijke kosten én de volledige €10,50 als
        voorbelasting behandelen wanneer een substantieel deel van de verbinding privé wordt
        gebruikt.
      </p>

      <h2>Internetkosten onder de KOR</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling (KOR)? Dan bereken je in beginsel geen btw aan
        je klanten en heb je geen recht op aftrek van btw op zakelijke kosten. Dat geldt dus ook
        voor de btw op zakelijke internetkosten.
      </p>
      <p>Heb je bijvoorbeeld een zakelijke internetkostenpost van:</p>
      <ul>
        <li>
          <strong>€40 excl. btw</strong>
        </li>
        <li>
          <strong>€8,40 btw</strong>
        </li>
        <li>
          <strong>€48,40 inclusief btw</strong>
        </li>
      </ul>
      <p>
        dan kun je tijdens deelname aan de KOR die €8,40 niet als voorbelasting aftrekken. De
        niet-aftrekbare btw kan daardoor onderdeel worden van je zakelijke kosten.
      </p>

      <h2>Internet thuis privé betaald</h2>
      <p>
        Wordt je internetabonnement vanaf je privérekening afgeschreven? Dat betekent niet
        automatisch dat het zakelijke deel niet aftrekbaar is.
      </p>
      <p>
        De rekening waarmee je betaalt is niet bepalend voor het zakelijke karakter van een
        uitgave. Gebruik je een deel van je internet aantoonbaar voor je onderneming, dan kan dat
        zakelijke deel volgens de normale regels in je administratie worden verwerkt.
      </p>
      <p>
        Bij een eenmanszaak kan een zakelijke kostenpost die vanuit privé is betaald
        administratief als vanuit privé gefinancierde zakelijke uitgave worden verwerkt.
      </p>
      <p>
        Lees verder:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h2>Internet zakelijk betaald maar ook privé gebruikt</h2>
      <p>
        Andersom werkt hetzelfde principe. Stel dat je volledige internetrekening vanaf je
        zakelijke rekening wordt betaald. Dat betekent niet automatisch dat de volledige rekening
        zakelijke kosten is.
      </p>
      <p>
        Gebruik je de verbinding bijvoorbeeld voor 50% privé? Dan moet je het privédeel
        onderscheiden. De gebruikte bankrekening maakt privégebruik niet zakelijk.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/privekosten-zakelijk-betalen">
          Privékosten zakelijk betalen: wat mag wel en niet? →
        </TextLink>
      </p>

      <h2>Glasvezel zakelijk aftrekbaar</h2>
      <p>Of je verbinding via:</p>
      <ul>
        <li>glasvezel;</li>
        <li>kabel;</li>
        <li>DSL;</li>
        <li>4G;</li>
        <li>5G;</li>
      </ul>
      <p>loopt, verandert de basisregel niet. Het gaat om het zakelijke gebruik.</p>
      <p>
        Een duur glasvezelabonnement kan bijvoorbeeld logisch zijn voor een ondernemer die
        dagelijks grote videobestanden uploadt. Voor iemand die één keer per week een zakelijke
        e-mail verstuurt, ligt de verhouding anders.
      </p>
      <p>
        De techniek van de verbinding bepaalt dus niet of de kosten aftrekbaar zijn.
      </p>

      <h2>Sneller internet speciaal voor je onderneming</h2>
      <p>
        Interessanter wordt het wanneer je vanwege je onderneming een duurder abonnement nodig
        hebt.
      </p>
      <p>Stel:</p>
      <p>
        Je zou privé genoeg hebben aan een basisabonnement van €40 per maand. Voor je onderneming
        heb je vanwege grote uploads en videobellen een sneller pakket van €65 per maand nodig.
      </p>
      <p>
        Dat zakelijke motief kan relevant zijn bij het bepalen welk deel van de kosten aan je
        onderneming is toe te rekenen. Je moet nog steeds naar je totale situatie kijken, maar het
        laat zien waarom een simpele standaardverdeling niet altijd de beste methode is.
      </p>

      <h2>Installatiekosten voor zakelijk internet</h2>
      <p>
        Laat je speciaal voor je onderneming een internetverbinding installeren? Dan kunnen
        zakelijke installatie- of aansluitkosten eveneens relevant zijn voor je administratie.
      </p>
      <p>
        Of deze volledig zakelijk zijn hangt opnieuw af van het gebruik en de omstandigheden. Bij
        een aparte bedrijfsruimte met een uitsluitend zakelijke verbinding is dat eenvoudiger dan
        bij een aansluiting die je hele woning bedient.
      </p>

      <h2>Router en wifi-apparatuur aftrekbaar</h2>
      <p>
        Koop je apparatuur die je voor je zakelijke internetverbinding gebruikt? Denk aan:
      </p>
      <ul>
        <li>router;</li>
        <li>mesh-wifisysteem;</li>
        <li>access point;</li>
        <li>netwerkswitch;</li>
        <li>ethernetkabels;</li>
        <li>mobiele router.</li>
      </ul>
      <p>
        Dan kunnen ook deze kosten geheel of gedeeltelijk zakelijk zijn. Bij gemengd privé- en
        zakelijk gebruik moet je rekening houden met het privédeel.
      </p>
      <p>
        Bij duurdere apparatuur die meerdere jaren wordt gebruikt, kunnen bovendien de regels voor
        bedrijfsmiddelen en afschrijving relevant worden.
      </p>

      <h2>Internetkosten als terugkerende uitgave</h2>
      <p>
        Internet is bij uitstek een terugkerende zakelijke kostenpost. Je betaalt bijvoorbeeld
        iedere maand:
      </p>
      <p>
        <strong>€50 abonnement</strong>
      </p>
      <p>
        Als daarvan €30 zakelijk is, dan gaat het op jaarbasis om:
      </p>
      <p>
        <strong>€30 × 12 = €360</strong>
      </p>
      <p>
        Door alleen naar losse maandbedragen te kijken lijken dit soms kleine kosten. Maar samen
        met:
      </p>
      <ul>
        <li>telefoon;</li>
        <li>software;</li>
        <li>hosting;</li>
        <li>verzekeringen;</li>
        <li>andere abonnementen;</li>
      </ul>
      <p>
        kunnen vaste bedrijfskosten behoorlijk oplopen. Daarom is het nuttig om terugkerende
        kosten structureel bij te houden.
      </p>

      <h2>Internetkosten bijhouden met FactuurBaas</h2>
      <p>
        Met FactuurBaas kun je zakelijke internetkosten als terugkerende uitgave registreren.
        Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Internet september
        </li>
        <li>
          <strong>Leverancier</strong> — Internetprovider
        </li>
        <li>
          <strong>Categorie</strong> — Telefoon &amp; internet
        </li>
        <li>
          <strong>Zakelijk bedrag excl. btw</strong> — €30
        </li>
        <li>
          <strong>Btw</strong> — volgens het zakelijke en aftrekbare deel
        </li>
        <li>
          <strong>Terugkerend</strong> — Maandelijks
        </li>
      </ul>
      <p>
        Je zakelijke internetkosten worden vervolgens meegenomen in je overzicht van geregistreerde
        uitgaven. Zo zie je niet alleen je omzet, maar ook hoeveel vaste zakelijke kosten daar
        iedere maand tegenover staan.
      </p>
      <p>Bijvoorbeeld:</p>
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

      <UitgavenCta
        title="Houd vaste zakelijke kosten automatisch bij"
        text="Registreer internet, software en andere terugkerende zakelijke uitgaven naast je facturen."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>De volledige thuisinternetrekening aftrekken</h3>
      <p>
        Gebruik je internet ook privé? Dan kun je niet automatisch de volledige rekening als
        zakelijke kosten behandelen.
      </p>

      <h3>Zomaar 50% zakelijk kiezen</h3>
      <p>
        Er bestaat geen standaardpercentage dat iedere zzp&apos;er mag gebruiken. Je verdeling moet
        passen bij je werkelijke situatie.
      </p>

      <h3>Internet verwarren met kosten van een thuiskantoor</h3>
      <p>
        Voor een werkruimte in de eigen woning gelden afzonderlijke en strengere regels.
      </p>

      <h3>Een compleet internet-tv-pakket zakelijk boeken</h3>
      <p>
        Privéonderdelen van een pakket worden niet zakelijk doordat ze samen met internet op één
        factuur staan.
      </p>

      <h3>Alleen kijken naar de betaalrekening</h3>
      <p>
        Een privé betaalde internetrekening kan deels zakelijk zijn. Een zakelijk betaalde
        internetrekening kan deels privé zijn.
      </p>

      <h3>Alle btw aftrekken</h3>
      <p>
        Bij gemengd zakelijk en privégebruik moet je ook voor de btw rekening houden met het
        zakelijke gebruik.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Is internet aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja, internetkosten kunnen zakelijke kosten zijn voor zover de internetverbinding voor je
        onderneming wordt gebruikt. Gebruik je dezelfde verbinding ook privé, dan is alleen het
        zakelijke deel aftrekbaar.
      </p>

      <h3>Kan ik mijn thuisinternet aftrekken als zzp&apos;er?</h3>
      <p>
        Het zakelijke deel kan aftrekbaar zijn. Je kunt niet automatisch de volledige
        internetrekening aftrekken wanneer de verbinding ook privé wordt gebruikt.
      </p>

      <h3>Hoeveel procent van mijn internet mag ik zakelijk aftrekken?</h3>
      <p>
        Er bestaat geen algemeen standaardpercentage. Je moet een redelijke verdeling maken die
        aansluit bij het werkelijke zakelijke en privégebruik.
      </p>

      <h3>Mag ik 50% van mijn internet aftrekken?</h3>
      <p>
        Alleen als 50% in jouw situatie een redelijke en onderbouwbare verdeling is. Het is geen
        automatisch percentage voor zzp&apos;ers.
      </p>

      <h3>Kan ik btw op internet aftrekken?</h3>
      <p>
        Als je recht hebt op aftrek van voorbelasting, kan de btw op het zakelijke deel van je
        internetkosten aftrekbaar zijn. Bij privégebruik en vrijgestelde omzet kunnen beperkingen
        gelden.
      </p>

      <h3>Is internet volledig aftrekbaar bij een apart kantoor?</h3>
      <p>
        Een internetverbinding die uitsluitend voor een volledig zakelijke bedrijfsruimte wordt
        gebruikt, kan in beginsel volledig zakelijk zijn.
      </p>

      <h3>Kan ik internet aftrekken als ik vanuit huis werk?</h3>
      <p>
        Zakelijk gebruik van internet kan tot aftrekbare kosten leiden, maar dat betekent niet
        automatisch dat de overige kosten van je werkruimte thuis aftrekbaar zijn. Voor een
        werkruimte in de woning gelden aparte voorwaarden.
      </p>

      <h3>Is glasvezel aftrekbaar als zzp&apos;er?</h3>
      <p>
        De techniek maakt voor de basisregel niet uit. Het zakelijke deel van een
        glasvezelverbinding kan net als andere internetkosten aftrekbaar zijn.
      </p>

      <h3>Kan ik mijn router aftrekken?</h3>
      <p>
        Een router of andere netwerkapparatuur die zakelijk wordt gebruikt kan geheel of
        gedeeltelijk een zakelijke kostenpost of bedrijfsmiddel zijn. Bij privégebruik moet je
        rekening houden met het privédeel.
      </p>

      <h3>Kan ik internet aftrekken als de factuur privé wordt betaald?</h3>
      <p>
        De betaalrekening bepaalt niet of een kostenpost zakelijk is. Het zakelijke deel kan nog
        steeds in je administratie worden verwerkt wanneer je aan de normale voorwaarden voldoet.
      </p>

      <h2>Kort samengevat</h2>
      <p>Internetkosten kunnen als zzp&apos;er zakelijk aftrekbaar zijn.</p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>het zakelijke deel van internetkosten kan aftrekbaar zijn;</li>
        <li>privégebruik is niet aftrekbaar;</li>
        <li>er bestaat geen standaardpercentage voor zakelijk internetgebruik;</li>
        <li>je verdeling moet redelijk en onderbouwbaar zijn;</li>
        <li>
          een aparte zakelijke internetverbinding is eenvoudiger volledig zakelijk te behandelen;
        </li>
        <li>
          thuisinternet aftrekken is niet hetzelfde als kosten van een werkruimte thuis aftrekken;
        </li>
        <li>voor btw gelden aparte regels;</li>
        <li>
          onder de KOR kun je in beginsel geen btw als voorbelasting aftrekken;
        </li>
        <li>
          internet is een logische terugkerende zakelijke uitgave om structureel bij te houden.
        </li>
      </ul>
      <p>
        Gebruik je iedere maand internet voor je onderneming? Neem het zakelijke deel dan mee in
        je kostenoverzicht.
      </p>

      <UitgavenCta
        title="Gratis zakelijke uitgaven bijhouden met FactuurBaas"
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
