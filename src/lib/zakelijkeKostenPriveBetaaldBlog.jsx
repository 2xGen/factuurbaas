import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UITGAVEN_PRODUCT_PATH } from '@/lib/uitgavenLanding';

const CLUSTER_RELATED = [
  'zakelijke-kosten-zzp',
  'zakelijke-uitgaven-bijhouden-zzp',
  'btw-zakelijke-kosten-aftrekken',
  'zakelijke-kosten-prive-betaald',
  'privekosten-zakelijk-betalen',
  'laptop-aftrekbaar-zzp',
  'telefoon-aftrekbaar-zzp',
  'software-abonnementen-aftrekken-zzp',
];

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const UitgavenCta = ({
  title = 'Zakelijke uitgave privé betaald? Registreer hem gewoon',
  text = 'Houd je zakelijke kosten en btw bij naast je facturen en krijg meer grip op je resultaat.',
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

export const zakelijkeKostenPriveBetaaldArticle = {
  slug: 'zakelijke-kosten-prive-betaald',
  relatedSlugs: CLUSTER_RELATED.filter((s) => s !== 'zakelijke-kosten-prive-betaald'),
  metaTitle: 'Zakelijke kosten privé betaald: hoe verwerk je die?',
  title: 'Zakelijke kosten privé betaald: hoe verwerk je die?',
  excerpt:
    "Zakelijke kosten privé betaald? Lees hoe je deze als zzp'er verwerkt, wat een privéstorting is en wat dit betekent voor kosten en btw.",
  keywords:
    'zakelijke kosten privé betaald, zakelijke kosten betaald met privérekening, zakelijke uitgaven privé betaald, zakelijk betaald met privérekening, zakelijke kosten voorschieten zzp, privéstorting eenmanszaak, privé betaalde kosten boeken',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Zakelijke%20kosten%20prive%20betaald.jpg',
    alt: 'Zakelijke kosten privé betaald — administratie als zzp’er',
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: 'Mag ik zakelijke kosten die ik privé heb betaald aftrekken?',
      answer:
        'Ja, als het daadwerkelijk zakelijke kosten zijn en aan de normale voorwaarden voor aftrek wordt voldaan. Dat je de uitgave vanaf je privérekening hebt betaald, maakt de kosten op zichzelf niet privé.',
    },
    {
      question: 'Hoe boek je zakelijke kosten die privé zijn betaald?',
      answer:
        'Bij een eenmanszaak wordt een zakelijke uitgave die je privé hebt betaald doorgaans verwerkt als zakelijke kosten in combinatie met een privé-inbreng of privéstorting. De privéstorting zelf is geen omzet.',
    },
    {
      question: 'Is een privéstorting belastbare omzet?',
      answer:
        'Nee. Geld of goederen die je vanuit privé in je onderneming brengt, verhogen het ondernemingsvermogen maar zijn geen zakelijke inkomsten en vormen daarom geen ondernemingswinst.',
    },
    {
      question: 'Kan ik btw terugvragen als ik zakelijk iets privé heb betaald?',
      answer:
        'De betaalrekening is op zichzelf niet bepalend voor het recht op btw-aftrek. Je moet voldoen aan de normale voorwaarden voor aftrek van voorbelasting, waaronder de eisen rond zakelijk gebruik en facturering.',
    },
    {
      question: 'Moet een zakelijke aankoop vanaf mijn zakelijke rekening worden betaald?',
      answer:
        'Niet alleen om de kosten zakelijk te kunnen verwerken. Wel kan het gebruik van een aparte zakelijke rekening je administratie overzichtelijker maken.',
    },
    {
      question: 'Kan ik het privé betaalde bedrag later aan mezelf terugbetalen?',
      answer:
        'Ja, maar registreer die terugbetaling niet opnieuw als zakelijke kosten wanneer de oorspronkelijke aankoop al als kosten is verwerkt. Anders tel je dezelfde kosten dubbel.',
    },
    {
      question: 'Wat als ik privékosten vanaf mijn zakelijke rekening betaal?',
      answer:
        'Dan worden de kosten niet automatisch zakelijk. Bij een eenmanszaak wordt een privé-uitgave uit het ondernemingsvermogen als privéonttrekking verwerkt en niet als aftrekbare zakelijke kosten.',
    },
  ],
  content: (
    <>
      <p>
        Heb je een zakelijke aankoop per ongeluk met je privérekening betaald? Bijvoorbeeld
        software, kantoorartikelen of een zakelijke factuur?
      </p>
      <p>
        Geen paniek. Een zakelijke uitgave wordt niet automatisch privé omdat je hem vanaf je
        persoonlijke bankrekening hebt betaald.
      </p>
      <p>
        Het belangrijkste is <strong>waarvoor je de kosten hebt gemaakt</strong>, niet vanaf welke
        rekening je hebt betaald.
      </p>
      <p>
        Je kunt zakelijke kosten die je privé hebt betaald dus gewoon in je administratie
        verwerken, zolang het daadwerkelijk zakelijke kosten zijn en je de uitgave kunt
        onderbouwen.
      </p>
      <p>In deze gids leggen we uit hoe dat werkt.</p>

      <UitgavenCta />

      <h2>Mag je zakelijke kosten privé betalen?</h2>
      <p>Ja.</p>
      <p>
        Het kan makkelijk gebeuren dat je een zakelijke aankoop met je privérekening of
        persoonlijke creditcard betaalt.
      </p>
      <p>Bijvoorbeeld omdat:</p>
      <ul>
        <li>je zakelijke betaalpas niet bij de hand was;</li>
        <li>een abonnement al op je privérekening stond;</li>
        <li>je net bent gestart en nog geen zakelijke rekening hebt;</li>
        <li>je per ongeluk de verkeerde betaalkaart hebt gebruikt;</li>
        <li>je een zakelijke aankoop contant hebt betaald met privégeld.</li>
      </ul>
      <p>
        Voor de vraag of de kosten zakelijk aftrekbaar zijn, is vooral het{' '}
        <strong>zakelijke karakter van de uitgave</strong> belangrijk.
      </p>
      <p>
        De Belastingdienst kijkt naar het motief waarmee je kosten hebt gemaakt. Kosten die je
        maakt voor de zakelijke belangen van je onderneming kunnen zakelijke kosten zijn.
      </p>
      <p>De rekening waarmee je betaalt verandert het doel van de aankoop niet.</p>

      <h2>Voorbeeld: software privé betaald</h2>
      <p>
        Stel dat je als zzp&apos;er een abonnement afsluit op software die je volledig voor je
        onderneming gebruikt.
      </p>
      <p>De factuur bedraagt:</p>
      <ul>
        <li>
          <strong>Software:</strong> €100
        </li>
        <li>
          <strong>Btw:</strong> €21
        </li>
        <li>
          <strong>Totaal:</strong> €121
        </li>
      </ul>
      <p>Je betaalt de €121 per ongeluk vanaf je privérekening.</p>
      <p>De software blijft een zakelijke aankoop.</p>
      <p>
        Je verwerkt de zakelijke kosten daarom in je administratie en bewaart de factuur. Als je
        recht hebt op aftrek van de €21 btw als voorbelasting, verwerk je voor je winstberekening
        €100 als zakelijke kosten en neem je de btw volgens de geldende regels mee in je
        btw-administratie.
      </p>
      <p>Dat je de €121 privé hebt betaald, maakt de software zelf niet privé.</p>

      <h2>Hoe verwerk je zakelijke kosten die je privé hebt betaald?</h2>
      <p>
        Heb je een eenmanszaak, dan kun je een zakelijke uitgave die je privé hebt betaald
        administratief verwerken als een zakelijke uitgave die vanuit privé is gefinancierd.
      </p>
      <p>
        In een boekhouding wordt het privé betaalde bedrag doorgaans verwerkt via{' '}
        <strong>privé / privéstorting</strong>.
      </p>
      <p>Het principe is:</p>
      <ol>
        <li>
          <strong>Je onderneming heeft zakelijke kosten gemaakt.</strong>
        </li>
        <li>
          <strong>Jij hebt die kosten met privégeld betaald.</strong>
        </li>
        <li>
          <strong>Je verwerkt de zakelijke kosten in je administratie.</strong>
        </li>
        <li>
          <strong>
            Het bedrag dat je privé hebt ingebracht wordt administratief als privé-inbreng
            verwerkt.
          </strong>
        </li>
      </ol>
      <p>
        De Belastingdienst noemt geld en goederen die je vanuit privé in je onderneming inbrengt{' '}
        <strong>privéstortingen</strong>.
      </p>
      <p>
        Een privéstorting verhoogt het vermogen van je onderneming, maar is geen zakelijke omzet of
        winst. Je telt het bedrag dus niet op bij je omzet.
      </p>

      <h2>Is een privéstorting omzet?</h2>
      <p>Nee. Dit is een belangrijk onderscheid.</p>
      <p>
        Stel dat je €500 vanaf je privérekening naar je zakelijke rekening overmaakt. Je
        onderneming heeft dan €500 meer op de bank staan, maar je hebt geen €500 verdiend met je
        onderneming.
      </p>
      <p>Het is dus geen omzet.</p>
      <p>
        Hetzelfde principe speelt wanneer je een zakelijke rekening rechtstreeks met privégeld
        betaalt. Je brengt privévermogen in om een zakelijke uitgave te financieren. De zakelijke
        uitgave en de privé-inbreng moeten administratief van elkaar worden onderscheiden.
      </p>

      <h2>Moet je het bedrag eerst naar je zakelijke rekening overmaken?</h2>
      <p>Nee, dat hoeft niet alleen om de zakelijke uitgave te kunnen verwerken.</p>
      <p>Stel:</p>
      <p>
        Je koopt een zakelijke monitor voor €300 en betaalt deze met je privébetaalpas. Je hoeft
        dan niet achteraf eerst €300 van privé naar zakelijk over te maken en vervolgens te doen
        alsof je de leverancier vanuit je zakelijke rekening hebt betaald.
      </p>
      <p>Je kunt de werkelijke situatie administreren:</p>
      <ul>
        <li>
          <strong>Zakelijke aankoop:</strong> €300
        </li>
        <li>
          <strong>Betaald vanuit:</strong> privé
        </li>
      </ul>
      <p>
        Dat is overzichtelijker en sluit aan bij wat er daadwerkelijk is gebeurd.
      </p>

      <h2>Kun je het bedrag later aan jezelf terugbetalen?</h2>
      <p>Je kunt ervoor kiezen om het bedrag later vanuit je onderneming naar privé over te maken.</p>
      <p>Stel:</p>
      <p>
        Je hebt een zakelijke rekening van €121 privé betaald. Later maak je €121 vanaf je
        zakelijke rekening naar jezelf over.
      </p>
      <p>
        Dat is dan niet nogmaals een zakelijke kostenpost. De kosten zijn immers al geregistreerd
        toen je de zakelijke aankoop verwerkte. De latere betaling is alleen de financiële
        afwikkeling tussen zakelijk en privé.
      </p>
      <p>Zorg daarom dat je dezelfde uitgave niet twee keer als kosten registreert.</p>

      <h2>Zakelijke kosten privé betaald: wat doe je met de btw?</h2>
      <p>
        Dat je een zakelijke aankoop met privégeld hebt betaald, betekent op zichzelf niet dat je
        geen recht meer hebt op btw-aftrek.
      </p>
      <p>Voor btw-aftrek gelden de normale voorwaarden.</p>
      <p>Onder andere moet:</p>
      <ul>
        <li>de aankoop betrekking hebben op je onderneming;</li>
        <li>je de aankoop gebruiken voor activiteiten waarvoor recht op btw-aftrek bestaat;</li>
        <li>de btw correct in rekening zijn gebracht;</li>
        <li>je over het vereiste bewijs beschikken.</li>
      </ul>
      <p>
        Betaal je bijvoorbeeld zakelijke software vanaf je privérekening, dan kan de btw dus nog
        steeds als voorbelasting aftrekbaar zijn wanneer aan de voorwaarden wordt voldaan.
      </p>
      <p>
        De <strong>betaalmethode</strong> is niet hetzelfde als het{' '}
        <strong>gebruik van de aankoop</strong>.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het?
        </TextLink>
      </p>

      <h2>Bewaar de factuur of bon</h2>
      <p>
        Ook wanneer je een zakelijke uitgave privé betaalt, moet je kunnen aantonen dat je de
        kosten daadwerkelijk hebt gemaakt en dat ze betrekking hebben op je onderneming.
      </p>
      <p>Bewaar daarom:</p>
      <ul>
        <li>de factuur;</li>
        <li>de bon;</li>
        <li>eventueel het betaalbewijs;</li>
        <li>andere relevante documenten.</li>
      </ul>
      <p>
        De Belastingdienst verlangt dat je zakelijke kosten kunt onderbouwen. Een afschrijving van
        €150 op je privérekening met alleen de omschrijving “winkel” vertelt later weinig. Een
        factuur waarop duidelijk staat wat je hebt gekocht is veel nuttiger.
      </p>

      <h2>Wat als de factuur op je bedrijfsnaam staat?</h2>
      <p>
        Dat maakt het meestal makkelijker om het zakelijke karakter van de aankoop te onderbouwen.
        Voor btw-aftrek moet een factuur bovendien aan de geldende factuureisen voldoen.
      </p>
      <p>
        Heb je een zakelijke aankoop gedaan maar staat de factuur niet correct op naam? Controleer
        dan of de factuur aan de relevante eisen voldoet en vraag de leverancier indien nodig om
        een aangepaste factuur.
      </p>
      <p>
        Alleen het feit dat de betaling vanaf je privérekening kwam, betekent echter niet
        automatisch dat de aankoop privé is.
      </p>

      <h2>Wat als je geen zakelijke rekening hebt?</h2>
      <p>
        Een aparte zakelijke bankrekening is voor een eenmanszaak niet in alle gevallen fiscaal
        noodzakelijk om zakelijke kosten te kunnen maken. Je kunt dus ook zakelijke kosten hebben
        die vanaf een privérekening zijn betaald.
      </p>
      <p>
        Administratief wordt het wel snel overzichtelijker wanneer je zakelijke en
        privébetalingen zoveel mogelijk van elkaar scheidt. Als iedere supermarktbetaling,
        privéaankoop én zakelijke factuur via dezelfde rekening loopt, moet je later steeds
        bepalen welke transacties bij je onderneming horen.
      </p>
      <p>
        Een aparte zakelijke rekening kan je administratie daarom eenvoudiger maken, ook wanneer
        dat voor jouw situatie niet wettelijk verplicht is.
      </p>

      <h2>Wat als je een deel zakelijk en een deel privé gebruikt?</h2>
      <p>Dan wordt het iets anders.</p>
      <p>
        Stel dat je iets koopt dat je zowel voor je onderneming als privé gebruikt. De
        Belastingdienst geeft aan dat bij kosten met zowel een zakelijk als persoonlijk karakter
        alleen het zakelijke deel aftrekbaar is. Als het persoonlijke karakter overheerst, kunnen
        de kosten zelfs helemaal niet aftrekbaar zijn.
      </p>
      <p>
        Het feit dat je de volledige aankoop vanaf je privérekening hebt betaald verandert dat
        niet.
      </p>
      <p>Voorbeeld:</p>
      <p>
        Je hebt een kostenpost van €100 waarvan volgens de toepasselijke regels €70 aan zakelijk
        gebruik kan worden toegerekend. Dan wordt niet opeens €100 zakelijk omdat je ondernemer
        bent. Het zakelijke en privédeel moeten correct worden onderscheiden.
      </p>
      <p>
        Lees verder:{' '}
        <TextLink href="/blogs/privekosten-zakelijk-betalen">
          Privékosten zakelijk betalen: wat mag wel en niet?
        </TextLink>
      </p>

      <h2>Zakelijke kosten privé betaald versus privékosten zakelijk betaald</h2>
      <p>Deze twee situaties worden makkelijk door elkaar gehaald.</p>

      <h3>Zakelijke kosten privé betaald</h3>
      <p>
        Je hebt iets voor je onderneming gekocht, maar met privégeld betaald.
      </p>
      <p>
        <strong>Voorbeeld:</strong> je betaalt je zakelijke software met je persoonlijke
        creditcard. De kosten kunnen nog steeds zakelijk zijn.
      </p>

      <h3>Privékosten zakelijk betaald</h3>
      <p>
        Je hebt iets voor jezelf gekocht en vanaf je zakelijke rekening betaald.
      </p>
      <p>
        <strong>Voorbeeld:</strong> je betaalt je privéboodschappen met je zakelijke betaalpas. De
        boodschappen worden daardoor niet zakelijk.
      </p>
      <p>
        De Belastingdienst noemt geld of goederen die je uit je onderneming haalt voor privégebruik
        een <strong>privéonttrekking</strong>. Een privéonttrekking is geen zakelijke kostenpost
        en verlaagt je fiscale ondernemingswinst dus niet.
      </p>
      <p>
        Kort gezegd:{' '}
        <strong>
          De bankrekening bepaalt niet of iets zakelijk of privé is. Het doel van de uitgave is
          doorslaggevend.
        </strong>
      </p>

      <h2>Voorbeeld: laptop privé betaald</h2>
      <p>
        Stel dat je een laptop koopt die je voor je onderneming gaat gebruiken. Je betaalt hem met
        je persoonlijke creditcard.
      </p>
      <p>Administratief kijk je vervolgens naar verschillende vragen:</p>
      <ul>
        <li>
          <strong>Is de laptop zakelijk?</strong> Bepaal in hoeverre de laptop tot je onderneming
          behoort en of sprake is van privégebruik.
        </li>
        <li>
          <strong>Mag je de kosten direct aftrekken?</strong> Bij een duurder bedrijfsmiddel dat
          meerdere jaren wordt gebruikt, kan afschrijving nodig zijn.
        </li>
        <li>
          <strong>Kun je de btw aftrekken?</strong> Dat hangt af van de btw-regels en het gebruik.
        </li>
        <li>
          <strong>Hoe is hij betaald?</strong> Privé.
        </li>
      </ul>
      <p>
        De laatste vraag verandert de antwoorden op de eerste drie niet automatisch. De
        privébetaling moet alleen correct in je administratie worden verwerkt.
      </p>
      <p>
        Lees verder:{' '}
        <TextLink href="/blogs/laptop-aftrekbaar-zzp">Laptop aftrekbaar als zzp&apos;er?</TextLink>
      </p>

      <h2>Voorbeeld: zakelijke lunch privé betaald</h2>
      <p>
        Je hebt met een klant een zakelijke lunch en betaalt met je privébetaalpas. Ook hier geldt
        dat de betaalrekening niet bepaalt of de kosten zakelijk zijn.
      </p>
      <p>
        Maar voor lunches en andere representatiekosten gelden wel specifieke aftrekbeperkingen.
        Bovendien gelden voor de btw op eten en drinken in de horeca aparte regels.
      </p>
      <p>
        Je kunt dus niet redeneren: &ldquo;Ik heb het privé betaald, dus ik kan niets
        aftrekken.&rdquo; Maar ook niet: &ldquo;Het was met een klant, dus ik kan alles
        aftrekken.&rdquo; Je moet kijken naar de fiscale regels die voor de specifieke kostenpost
        gelden.
      </p>

      <h2>Voorbeeld: abonnement loopt nog via privé</h2>
      <p>
        Dit komt bij startende zzp&apos;ers vaak voor. Je gebruikte bijvoorbeeld al een online
        dienst voordat je begon met ondernemen en gebruikt deze inmiddels voor je bedrijf. De
        automatische incasso loopt nog steeds via je privérekening.
      </p>
      <p>
        Als de kosten daadwerkelijk betrekking hebben op je onderneming, kun je het zakelijke deel
        in je administratie verwerken. Je hoeft dus niet per se eerst alle betaalmethoden te
        veranderen voordat je de kosten kunt registreren.
      </p>
      <p>
        Voor de overzichtelijkheid kan het natuurlijk wel handig zijn om zakelijke abonnementen
        uiteindelijk vanaf je zakelijke rekening te laten lopen.
      </p>

      <h2>Hoe registreer je een privé betaalde zakelijke uitgave?</h2>
      <p>Voor je eigen overzicht kun je bij iedere zakelijke uitgave minimaal vastleggen:</p>
      <ul>
        <li>datum;</li>
        <li>leverancier;</li>
        <li>omschrijving;</li>
        <li>categorie;</li>
        <li>bedrag exclusief btw;</li>
        <li>btw;</li>
        <li>totaalbedrag;</li>
        <li>betaalwijze of betaalrekening;</li>
        <li>eventueel een notitie dat de uitgave privé is betaald.</li>
      </ul>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omschrijving:</strong> Canva Pro
        </li>
        <li>
          <strong>Leverancier:</strong> Canva
        </li>
        <li>
          <strong>Categorie:</strong> Software &amp; abonnementen
        </li>
        <li>
          <strong>Excl. btw:</strong> €100
        </li>
        <li>
          <strong>Btw:</strong> €21
        </li>
        <li>
          <strong>Totaal:</strong> €121
        </li>
        <li>
          <strong>Betaald:</strong> privé
        </li>
      </ul>
      <p>
        Zo blijft duidelijk dat het om een zakelijke uitgave gaat, terwijl er geen corresponderende
        betaling vanaf je zakelijke bankrekening is.
      </p>

      <h2>Privé betaalde zakelijke kosten bijhouden met FactuurBaas</h2>
      <p>
        Ook als je een zakelijke uitgave privé hebt betaald, wil je deze meenemen in je overzicht
        van zakelijke kosten. Anders ontstaat een vertekend beeld.
      </p>
      <p>Stel:</p>
      <ul>
        <li>
          <strong>Omzet:</strong> €4.850
        </li>
        <li>
          <strong>Uitgaven vanaf zakelijke rekening:</strong> €900
        </li>
        <li>
          <strong>Zakelijke uitgaven privé betaald:</strong> €340
        </li>
      </ul>
      <p>
        Als je die €340 vergeet, lijkt het alsof je maar €900 aan zakelijke uitgaven had. Je
        werkelijke geregistreerde zakelijke uitgaven zijn:
      </p>
      <p>
        <strong>€900 + €340 = €1.240</strong>
      </p>
      <p>En je resultaat op basis van deze bedragen:</p>
      <p>
        <strong>€4.850 − €1.240 = €3.610</strong>
      </p>
      <p>
        Daarom is het belangrijk om zakelijke kosten te registreren op basis van{' '}
        <strong>wat de uitgave was</strong>, en niet alleen door naar je zakelijke bankrekening te
        kijken.
      </p>
      <p>
        Met FactuurBaas kun je zakelijke uitgaven naast je facturen registreren en zo je omzet,
        uitgaven en resultaat vanuit één overzicht volgen.
      </p>

      <UitgavenCta
        title="Zakelijke kosten privé betaald? Houd ze toch bij"
        text="Registreer je zakelijke uitgaven en btw naast je facturen, zodat privé betaalde bedrijfskosten niet uit je overzicht verdwijnen."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>De uitgave helemaal niet registreren</h3>
      <p>
        Je hebt privé betaald en denkt daardoor dat de uitgave niet in je zakelijke administratie
        hoort. Als het daadwerkelijk een zakelijke uitgave is, kan dat ertoe leiden dat je kosten
        vergeet.
      </p>

      <h3>De privébetaling als omzet registreren</h3>
      <p>Geld dat je vanuit privé in je onderneming brengt is geen omzet.</p>

      <h3>De kosten twee keer boeken</h3>
      <p>
        Je registreert eerst de zakelijke aankoop en later opnieuw de terugbetaling aan jezelf als
        zakelijke kosten. Daarmee zou dezelfde uitgave dubbel worden meegenomen.
      </p>

      <h3>Geen factuur of bon bewaren</h3>
      <p>
        Ook bij privé betaalde zakelijke kosten moet je de uitgave kunnen onderbouwen.
      </p>

      <h3>Denken dat de betaalrekening bepaalt of iets aftrekbaar is</h3>
      <p>
        Het zakelijke karakter van de kosten is bepalend. Een privérekening maakt zakelijke kosten
        niet automatisch privé en een zakelijke rekening maakt privé-uitgaven niet automatisch
        zakelijk.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Mag ik zakelijke kosten die ik privé heb betaald aftrekken?</h3>
      <p>
        Ja, als het daadwerkelijk zakelijke kosten zijn en aan de normale voorwaarden voor aftrek
        wordt voldaan. Dat je de uitgave vanaf je privérekening hebt betaald, maakt de kosten op
        zichzelf niet privé.
      </p>

      <h3>Hoe boek je zakelijke kosten die privé zijn betaald?</h3>
      <p>
        Bij een eenmanszaak wordt een zakelijke uitgave die je privé hebt betaald doorgaans
        verwerkt als zakelijke kosten in combinatie met een privé-inbreng of privéstorting. De
        privéstorting zelf is geen omzet.
      </p>

      <h3>Is een privéstorting belastbare omzet?</h3>
      <p>
        Nee. Geld of goederen die je vanuit privé in je onderneming brengt, verhogen het
        ondernemingsvermogen maar zijn geen zakelijke inkomsten en vormen daarom geen
        ondernemingswinst.
      </p>

      <h3>Kan ik btw terugvragen als ik zakelijk iets privé heb betaald?</h3>
      <p>
        De betaalrekening is op zichzelf niet bepalend voor het recht op btw-aftrek. Je moet
        voldoen aan de normale voorwaarden voor aftrek van voorbelasting, waaronder de eisen rond
        zakelijk gebruik en facturering.
      </p>

      <h3>Moet een zakelijke aankoop vanaf mijn zakelijke rekening worden betaald?</h3>
      <p>
        Niet alleen om de kosten zakelijk te kunnen verwerken. Wel kan het gebruik van een aparte
        zakelijke rekening je administratie overzichtelijker maken.
      </p>

      <h3>Kan ik het privé betaalde bedrag later aan mezelf terugbetalen?</h3>
      <p>
        Ja, maar registreer die terugbetaling niet opnieuw als zakelijke kosten wanneer de
        oorspronkelijke aankoop al als kosten is verwerkt. Anders tel je dezelfde kosten dubbel.
      </p>

      <h3>Wat als ik privékosten vanaf mijn zakelijke rekening betaal?</h3>
      <p>
        Dan worden de kosten niet automatisch zakelijk. Bij een eenmanszaak wordt een privé-uitgave
        uit het ondernemingsvermogen als privéonttrekking verwerkt en niet als aftrekbare zakelijke
        kosten.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Heb je zakelijke kosten privé betaald? Dan is er meestal geen reden om die uitgave uit je
        zakelijke administratie te laten.
      </p>
      <p>Onthoud:</p>
      <ul>
        <li>de betaalrekening bepaalt niet of een uitgave zakelijk is;</li>
        <li>kijk naar het doel en karakter van de kosten;</li>
        <li>registreer de zakelijke uitgave in je administratie;</li>
        <li>bij een eenmanszaak kan de privébetaling als privé-inbreng worden verwerkt;</li>
        <li>een privéstorting is geen omzet;</li>
        <li>bewaar de factuur of bon;</li>
        <li>btw-aftrek volgt de normale btw-regels;</li>
        <li>registreer een latere terugbetaling aan jezelf niet nogmaals als kosten;</li>
        <li>
          houd ook privé betaalde zakelijke kosten mee in je totale uitgavenoverzicht.
        </li>
      </ul>
      <p>
        Zo voorkom je dat zakelijke kosten verdwijnen uit je administratie alleen omdat je toevallig
        de verkeerde betaalpas hebt gebruikt.
      </p>

      <UitgavenCta
        title="Houd je zakelijke uitgaven gratis bij met FactuurBaas"
        label="Gratis uitgaven bijhouden →"
      />

      <p className="mt-4 text-sm text-slate-500">
        Dit artikel is informatief en geen fiscaal advies. Regels kunnen wijzigen; check bij
        twijfel de Belastingdienst of je boekhouder. Zie ook{' '}
        <TextLink href="/blogs/zakelijke-kosten-zzp">zakelijke kosten zzp</TextLink> en{' '}
        <TextLink href="/blogs/zakelijke-uitgaven-bijhouden-zzp">
          zakelijke uitgaven bijhouden
        </TextLink>
        .
      </p>
    </>
  ),
};
