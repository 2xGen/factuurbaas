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
  title = 'Houd je zakelijke telefoonkosten bij',
  text = 'Registreer zakelijke kosten en btw naast je facturen en zie wat er van je omzet overblijft.',
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

export const telefoonAftrekbaarArticle = {
  slug: 'telefoon-aftrekbaar-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'laptop-aftrekbaar-zzp',
    'internet-aftrekbaar-zzp',
    'software-abonnementen-aftrekken-zzp',
    'zakelijke-kosten-prive-betaald',
  ],
  metaTitle: "Telefoon aftrekbaar als zzp'er? Dit zijn de regels",
  title: "Telefoon aftrekbaar als zzp'er? Dit zijn de regels",
  excerpt:
    "Telefoon aftrekbaar als zzp'er? Lees wat je mag aftrekken van je toestel en abonnement, hoe privégebruik werkt en wanneer je btw mag aftrekken.",
  keywords:
    "telefoon aftrekbaar zzp, telefoon zakelijk aftrekken, telefoonkosten aftrekbaar zzp, telefoonabonnement aftrekbaar zzp, iPhone aftrekbaar zzp, smartphone zakelijk aftrekken, btw telefoon aftrekken, zakelijke telefoon zzp",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Telefoon%20aftrekbaar%20als%20zzper.jpg',
    alt: "Telefoon aftrekbaar als zzp'er — toestel en abonnement",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is een telefoon aftrekbaar als zzp'er?",
      answer:
        'Ja, voor zover de telefoon zakelijk wordt gebruikt. Bij gemengd zakelijk en privégebruik is voor de inkomstenbelasting alleen het zakelijke deel van de kosten aftrekbaar.',
    },
    {
      question: "Is mijn telefoonabonnement aftrekbaar als zzp'er?",
      answer:
        'Een zakelijk telefoonabonnement kan aftrekbaar zijn. Gebruik je het abonnement ook privé, dan is het privédeel niet aftrekbaar. Een privételefoonabonnement zelf is niet aftrekbaar, maar zakelijke gesprekken via dat abonnement kunnen dat wel zijn.',
    },
    {
      question: "Kan ik een iPhone aftrekken als zzp'er?",
      answer:
        'Ja. Een iPhone wordt fiscaal niet anders behandeld dan andere smartphones. Het zakelijke gebruik, de aanschafwaarde en gebruiksduur zijn bepalend.',
    },
    {
      question: 'Moet ik een telefoon boven €450 afschrijven?',
      answer:
        'Als de telefoon een zakelijk bedrijfsmiddel is, minimaal €450 kost en langer dan één jaar wordt gebruikt, moet je de aanschafkosten in beginsel via afschrijving over meerdere jaren verdelen.',
    },
    {
      question: 'Is de €450-grens inclusief btw?',
      answer:
        'Kun je de btw verrekenen, dan ga je voor de aanschafwaarde uit van het bedrag exclusief btw. Kun je de btw niet verrekenen, dan ga je uit van het bedrag inclusief btw.',
    },
    {
      question: 'Kan ik btw op mijn telefoon aftrekken?',
      answer:
        'Dat kan voor zover je aan de voorwaarden voor aftrek van voorbelasting voldoet. Bij privégebruik gelden aanvullende btw-regels.',
    },
    {
      question: 'Kan ik een privételefoon zakelijk gebruiken?',
      answer:
        'Ja. Maar een privételefoonabonnement wordt daardoor niet automatisch volledig aftrekbaar. Zakelijke gesprekskosten via een privéabonnement kunnen wel aftrekbaar zijn.',
    },
    {
      question: 'Kan ik een tweede telefoon volledig zakelijk aftrekken?',
      answer:
        'Dat kan als het toestel daadwerkelijk uitsluitend of overeenkomstig de fiscale regels zakelijk wordt gebruikt. Alleen het feit dat je twee telefoons hebt, maakt één daarvan niet automatisch volledig zakelijk.',
    },
    {
      question: 'Zijn telefoonaccessoires aftrekbaar?',
      answer:
        'Zakelijk gebruikte accessoires zoals een oplader, headset, houder of powerbank kunnen zakelijke kosten zijn. De exacte verwerking hangt onder andere af van de aanschaf en of verschillende onderdelen samen één bedrijfsmiddel vormen.',
    },
  ],
  content: (
    <>
      <p>
        Gebruik je als zzp&apos;er je telefoon voor klanten, WhatsApp, e-mail, administratie of
        andere werkzaamheden? Dan kunnen de kosten van je telefoon en abonnement geheel of
        gedeeltelijk zakelijk aftrekbaar zijn.
      </p>
      <p>Maar er is een belangrijk verschil tussen:</p>
      <ul>
        <li>een telefoon die je zakelijk koopt;</li>
        <li>een zakelijk telefoonabonnement;</li>
        <li>een privéabonnement dat je ook voor werk gebruikt;</li>
        <li>een telefoon die je zowel zakelijk als privé gebruikt.</li>
      </ul>
      <p>
        Je kunt dus niet automatisch je volledige telefoonrekening aftrekken omdat je ondernemer
        bent.
      </p>
      <p>
        In deze gids lees je welke telefoonkosten aftrekbaar zijn, hoe privégebruik werkt en wanneer
        je de btw kunt aftrekken.
      </p>

      <UitgavenCta />

      <h2>Is een telefoon aftrekbaar als zzp&apos;er?</h2>
      <p>Ja, voor zover de telefoon en bijbehorende kosten een zakelijk karakter hebben.</p>
      <p>Denk bijvoorbeeld aan gebruik voor:</p>
      <ul>
        <li>bellen met klanten;</li>
        <li>WhatsApp met opdrachtgevers;</li>
        <li>zakelijke e-mail;</li>
        <li>agenda en afspraken;</li>
        <li>online bankieren voor je onderneming;</li>
        <li>navigatie naar klanten;</li>
        <li>social media voor je bedrijf;</li>
        <li>foto&apos;s en video&apos;s voor zakelijke content;</li>
        <li>authenticatie-apps;</li>
        <li>administratie;</li>
        <li>facturen en offertes.</li>
      </ul>
      <p>
        Gebruik je een telefoon volledig zakelijk? Dan kunnen de zakelijke kosten in beginsel
        volledig aftrekbaar zijn.
      </p>
      <p>
        Gebruik je dezelfde telefoon ook privé? Dan moet je rekening houden met het privégebruik.
      </p>
      <p>
        De Belastingdienst noemt telefoonkosten expliciet als kosten waarbij alleen het zakelijke
        deel aftrekbaar kan zijn.
      </p>

      <h2>Privé telefoonabonnement: wat mag je aftrekken?</h2>
      <p>
        Heb je een privételefoonabonnement dat je ook voor je onderneming gebruikt? Dan mag je niet
        zomaar het volledige abonnement als zakelijke kosten aftrekken.
      </p>
      <p>De Belastingdienst maakt hierbij een duidelijk onderscheid:</p>
      <p>
        <strong>Privételefoonabonnement:</strong> niet aftrekbaar.
      </p>
      <p>
        <strong>Zakelijke gesprekken via dat privéabonnement:</strong> wel aftrekbaar.
      </p>
      <p>
        Stel bijvoorbeeld dat je een privéabonnement van €30 per maand hebt en daarnaast
        aantoonbare extra kosten maakt voor zakelijke gesprekken. Dan kunnen die zakelijke
        gesprekskosten aftrekbaar zijn, maar je maakt niet automatisch de volledige €30 per maand
        tot zakelijke kosten.
      </p>

      <h2>Zakelijk telefoonabonnement aftrekbaar</h2>
      <p>
        Heb je een abonnement dat zakelijk wordt gebruikt? Dan kunnen de kosten daarvan zakelijke
        kosten zijn.
      </p>
      <p>
        Gebruik je de zakelijke telefoon ook privé, dan is het privédeel niet aftrekbaar.
      </p>
      <p>De basisregel is dus:</p>
      <p>
        <strong>Zakelijk gebruik → zakelijke kosten</strong>
      </p>
      <p>
        <strong>Privégebruik → geen zakelijke kosten</strong>
      </p>
      <p>
        Bij gemengd gebruik moet je een redelijke verdeling maken die aansluit bij het werkelijke
        gebruik.
      </p>

      <h2>Voorbeeld: zakelijke telefoon met privégebruik</h2>
      <p>
        Stel dat je telefoonabonnement €50 per maand exclusief btw kost. Je gebruikt de telefoon
        zowel voor je onderneming als privé.
      </p>
      <p>
        Als een deel van het gebruik privé is, kun je niet zonder meer alle kosten als zakelijke
        kosten behandelen. Je moet het zakelijke en privédeel onderscheiden.
      </p>
      <p>
        Hetzelfde principe geldt voor andere gemengde kosten: alleen het deel dat betrekking heeft
        op je onderneming is voor de winst aftrekbaar.
      </p>

      <h2>Telefoon kopen als zzp&apos;er</h2>
      <p>
        Naast je abonnement kun je natuurlijk ook het toestel zelf zakelijk kopen. Bijvoorbeeld
        een:
      </p>
      <ul>
        <li>iPhone;</li>
        <li>Samsung Galaxy;</li>
        <li>Google Pixel;</li>
        <li>andere smartphone.</li>
      </ul>
      <p>
        Gebruik je het toestel als bedrijfsmiddel voor je onderneming, dan kunnen de
        aanschafkosten zakelijk zijn. Maar net als bij een laptop maakt de aanschafprijs uit voor
        de manier waarop je de kosten verwerkt.
      </p>

      <h2>Telefoon onder €450</h2>
      <p>
        Koop je een zakelijk bedrijfsmiddel voor <strong>minder dan €450</strong>? Dan mag je de
        aanschafkosten in beginsel in één keer als kosten aftrekken.
      </p>
      <p>Stel:</p>
      <p>
        <strong>Telefoon:</strong> €400 excl. btw
      </p>
      <p>
        Als deze telefoon fiscaal tot je onderneming behoort, kun je de aanschafwaarde in beginsel
        direct als kosten verwerken. Je hoeft dan niet over meerdere jaren af te schrijven.
      </p>

      <h2>Telefoon van €450 of meer</h2>
      <p>
        Koop je een telefoon voor €450 of meer en gebruik je deze langer dan één jaar voor je
        onderneming? Dan is sprake van een bedrijfsmiddel waarop je in beginsel moet afschrijven.
      </p>
      <p>Stel:</p>
      <p>
        <strong>Smartphone:</strong> €1.000 excl. btw
      </p>
      <p>
        Je gebruikt deze drie of meer jaren voor je onderneming. Dan trek je niet automatisch de
        volledige €1.000 af in het jaar waarin je de telefoon koopt. De aanschafkosten worden via
        afschrijving verdeeld over de gebruiksjaren.
      </p>

      <h2>Is de €450-grens inclusief of exclusief btw?</h2>
      <p>
        Kun je de btw op de telefoon verrekenen? Dan kijk je voor de aanschafwaarde naar het
        bedrag <strong>exclusief btw</strong>.
      </p>
      <p>
        Kun je de btw niet verrekenen? Dan neem je voor de investering het bedrag{' '}
        <strong>inclusief btw</strong>.
      </p>

      <h3>Voorbeeld</h3>
      <p>Je koopt een telefoon voor:</p>
      <ul>
        <li>
          <strong>Excl. btw:</strong> €800
        </li>
        <li>
          <strong>Btw:</strong> €168
        </li>
        <li>
          <strong>Totaal:</strong> €968
        </li>
      </ul>
      <p>
        Kun je de €168 btw volledig verrekenen? Dan bedraagt de aanschafwaarde voor de
        winstberekening €800.
      </p>
      <p>
        Kun je de btw niet verrekenen, bijvoorbeeld doordat je onder de KOR valt? Dan kan de
        aanschafwaarde inclusief btw relevant zijn.
      </p>

      <h2>Telefoon zakelijk én privé gebruiken</h2>
      <p>Dit zal voor veel zzp&apos;ers de normale situatie zijn.</p>
      <p>Je gebruikt dezelfde smartphone bijvoorbeeld overdag voor:</p>
      <ul>
        <li>klanten;</li>
        <li>e-mail;</li>
        <li>WhatsApp;</li>
        <li>administratie;</li>
      </ul>
      <p>en &apos;s avonds voor:</p>
      <ul>
        <li>vrienden en familie;</li>
        <li>social media;</li>
        <li>streaming;</li>
        <li>privéfoto&apos;s;</li>
        <li>andere persoonlijke zaken.</li>
      </ul>
      <p>
        Dan heeft het toestel zowel een zakelijk als privékarakter. Voor de inkomstenbelasting moet
        je bepalen hoe het toestel fiscaal wordt behandeld en welk deel van de kosten betrekking
        heeft op je onderneming.
      </p>
      <p>
        De Belastingdienst geeft als algemene regel dat bij kosten met zowel een zakelijk als
        persoonlijk karakter alleen het zakelijke deel aftrekbaar is.
      </p>

      <h2>Moet je precies bijhouden hoeveel minuten je zakelijk belt?</h2>
      <p>
        Je administratie moet voldoende onderbouwen hoe je tot het zakelijke deel komt. Dat
        betekent niet noodzakelijk dat iedere ondernemer elke belminuut handmatig moet
        registreren.
      </p>
      <p>Je verdeling moet wel redelijk en verdedigbaar zijn.</p>
      <p>Afhankelijk van je situatie kun je bijvoorbeeld kijken naar:</p>
      <ul>
        <li>afzonderlijke zakelijke en privételefoons;</li>
        <li>gespreksgegevens;</li>
        <li>het werkelijke gebruik;</li>
        <li>de aard van je werkzaamheden;</li>
        <li>andere beschikbare gegevens.</li>
      </ul>
      <p>
        Gebruik je één telefoon bijna uitsluitend voor je onderneming, dan is de situatie anders
        dan wanneer je één privételefoon af en toe voor een klant gebruikt.
      </p>

      <h2>Tweede telefoon volledig zakelijk</h2>
      <p>Een aparte zakelijke telefoon kan de administratie eenvoudiger maken.</p>
      <p>Stel dat je:</p>
      <p>
        <strong>Telefoon 1:</strong> uitsluitend privé gebruikt.
      </p>
      <p>
        <strong>Telefoon 2:</strong> uitsluitend voor je onderneming gebruikt.
      </p>
      <p>
        Dan is het veel eenvoudiger om het zakelijke karakter van telefoon 2 en het bijbehorende
        abonnement te onderbouwen. Je hoeft dan niet steeds zakelijk en privégebruik van één
        toestel uit elkaar te halen.
      </p>
      <p>
        Een tweede telefoon is echter niet automatisch volledig aftrekbaar alleen omdat je hem als
        “zakelijke telefoon” bestempelt. Het daadwerkelijke gebruik blijft belangrijk.
      </p>

      <h2>Kan ik een iPhone zakelijk aftrekken?</h2>
      <p>
        Ja. Voor een iPhone gelden dezelfde fiscale regels als voor andere smartphones. Het merk of
        model is niet bepalend.
      </p>
      <p>Een iPhone kan bijvoorbeeld een logisch bedrijfsmiddel zijn voor een:</p>
      <ul>
        <li>fotograaf;</li>
        <li>contentmaker;</li>
        <li>consultant;</li>
        <li>webshopondernemer;</li>
        <li>coach;</li>
        <li>freelancer;</li>
        <li>developer;</li>
        <li>makelaar.</li>
      </ul>
      <p>
        Je kijkt naar het zakelijke gebruik, de aanschafwaarde en de verwachte gebruiksduur. Een
        iPhone van bijvoorbeeld €1.200 die meerdere jaren als bedrijfsmiddel wordt gebruikt, moet
        in beginsel worden afgeschreven in plaats van volledig in het eerste jaar als kosten te
        worden genomen.
      </p>

      <h2>Is een dure telefoon wel zakelijk?</h2>
      <p>
        Er bestaat geen algemene regel dat een zakelijke telefoon maximaal een bepaald bedrag mag
        kosten. De Belastingdienst beoordeelt zakelijke kosten onder andere aan de hand van het
        zakelijke motief.
      </p>
      <p>
        Als kosten duidelijk veel hoger zijn dan gebruikelijk, kan de Belastingdienst beoordelen of
        nog sprake is van een redelijke verhouding tussen de kosten en het zakelijke belang.
      </p>
      <p>
        Voor de meeste normale smartphones zal vooral van belang zijn dat je aannemelijk kunt maken
        dat de telefoon daadwerkelijk voor je onderneming wordt gebruikt. Een duurder model is dus
        niet automatisch privé.
      </p>

      <h2>Btw op een zakelijke telefoon aftrekken</h2>
      <p>
        Ben je ondernemer voor de btw en gebruik je de telefoon voor activiteiten waarvoor je
        recht hebt op aftrek van voorbelasting? Dan kan de btw op de zakelijke aanschaf aftrekbaar
        zijn.
      </p>
      <p>Voor btw-aftrek gelden onder andere voorwaarden rond:</p>
      <ul>
        <li>zakelijk gebruik;</li>
        <li>belaste omzet;</li>
        <li>een correcte btw-factuur;</li>
        <li>daadwerkelijke levering.</li>
      </ul>
      <p>
        Gebruik je de telefoon uitsluitend zakelijk voor btw-belaste activiteiten, dan kan de btw
        in beginsel volledig als voorbelasting aftrekbaar zijn. Gebruik je hem ook privé, dan
        gelden regels voor privégebruik.
      </p>

      <h2>Btw bij zakelijk én privégebruik</h2>
      <p>Voor de btw moet privégebruik eveneens worden meegenomen.</p>
      <p>
        Koop je goederen of diensten die je zowel zakelijk als privé gebruikt, dan bestaan
        verschillende manieren om de btw te verwerken. Afhankelijk van de situatie kun je
        bijvoorbeeld:
      </p>
      <ul>
        <li>helemaal geen btw aftrekken;</li>
        <li>alleen btw aftrekken voor het zakelijke deel;</li>
        <li>btw aftrekken en vervolgens rekening houden met een correctie voor privégebruik.</li>
      </ul>
      <p>
        Trek dus niet automatisch 100% van de btw op een telefoon af wanneer het toestel voor een
        belangrijk deel privé wordt gebruikt.
      </p>
      <p>
        Lees meer:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het? →
        </TextLink>
      </p>

      <h2>Telefoon onder de KOR</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling (KOR)? Dan bereken je in beginsel geen btw aan
        je klanten en trek je ook geen btw op zakelijke kosten en investeringen af.
      </p>
      <p>Koop je bijvoorbeeld een zakelijke telefoon voor:</p>
      <ul>
        <li>
          <strong>€800 excl. btw</strong>
        </li>
        <li>
          <strong>€168 btw</strong>
        </li>
        <li>
          <strong>€968 totaal</strong>
        </li>
      </ul>
      <p>
        dan kun je die €168 tijdens deelname aan de KOR in beginsel niet als voorbelasting
        aftrekken. Dat kan de werkelijke kosten van een nieuwe telefoon dus hoger maken.
      </p>

      <h2>Telefoonabonnement onder de KOR</h2>
      <p>
        Hetzelfde geldt voor de btw op je zakelijke abonnement. Zonder KOR kun je btw op zakelijke
        kosten onder voorwaarden als voorbelasting aftrekken. Tijdens deelname aan de KOR bestaat
        dat recht in beginsel niet.
      </p>
      <p>
        De kosten voor je onderneming kunnen daardoor inclusief de niet-aftrekbare btw worden
        verwerkt.
      </p>

      <h2>Telefoon privé gekocht, maar zakelijk gebruikt</h2>
      <p>
        Misschien heb je je telefoon ooit privé gekocht en ben je deze later voor je onderneming
        gaan gebruiken. Of je koopt een zakelijke telefoon maar betaalt hem met je privérekening.
        Dat zijn twee verschillende situaties.
      </p>

      <h3>Zakelijke telefoon privé betaald</h3>
      <p>
        Is de aankoop daadwerkelijk zakelijk, maar heb je hem met privégeld betaald? Dan maakt de
        betaalrekening de aankoop niet automatisch privé.
      </p>
      <p>
        Bij een eenmanszaak kun je een zakelijke aankoop die je privé hebt betaald administratief
        verwerken als vanuit privé gefinancierde zakelijke kosten of investering.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h3>Bestaande privételefoon later zakelijk gebruiken</h3>
      <p>
        Had je de telefoon al privé en ga je hem later voor je onderneming gebruiken? Dan heb je
        niet ineens een nieuwe zakelijke aankoop gedaan voor de oorspronkelijke winkelprijs.
      </p>
      <p>
        De fiscale verwerking hangt dan af van onder andere de waarde van het toestel en hoe je het
        voor je onderneming gaat gebruiken.
      </p>

      <h2>Telefoon op afbetaling of bij abonnement</h2>
      <p>
        Koop je een telefoon via een abonnement waarbij je maandelijks betaalt? Kijk dan goed naar
        de factuur en het contract.
      </p>
      <p>Een telefoonabonnement kan bestaan uit verschillende onderdelen, bijvoorbeeld:</p>
      <ul>
        <li>kosten voor bellen en data;</li>
        <li>afbetaling van het toestel;</li>
        <li>aanvullende diensten.</li>
      </ul>
      <p>
        Het feit dat je iedere maand één bedrag betaalt betekent niet automatisch dat het
        volledige bedrag fiscaal één soort kostenpost is. Een duur toestel dat je in termijnen
        betaalt kan nog steeds een bedrijfsmiddel zijn. De betaalwijze verandert niet automatisch
        de fiscale aard van de aanschaf.
      </p>

      <h2>Sim-only abonnement aftrekbaar</h2>
      <p>
        Heb je een sim-only abonnement dat je voor je onderneming gebruikt? Dan geldt dezelfde
        basisregel voor telefoonkosten. Het zakelijke deel kan aftrekbaar zijn.
      </p>
      <p>
        Gebruik je een zakelijk abonnement ook privé, dan moet het privédeel buiten je zakelijke
        kosten blijven.
      </p>
      <p>
        Heb je een privé-sim-only abonnement? Dan is het privéabonnement zelf niet aftrekbaar;
        zakelijke gesprekskosten kunnen dat wel zijn.
      </p>

      <h2>Prepaid telefoon voor je onderneming</h2>
      <p>
        Ook een prepaid telefoon of prepaid tegoed kan zakelijk worden gebruikt. Het fiscale
        principe verandert niet door de betaalvorm.
      </p>
      <p>
        Kun je aantonen dat de kosten voor je onderneming zijn gemaakt, dan kunnen de zakelijke
        kosten aftrekbaar zijn. Gebruik je het tegoed deels privé, dan moet je rekening houden met
        dat privégebruik.
      </p>

      <h2>Telefoonaccessoires aftrekken</h2>
      <p>
        Gebruik je telefoonaccessoires voor je onderneming? Dan kunnen ook deze zakelijke kosten
        zijn.
      </p>
      <p>Denk aan:</p>
      <ul>
        <li>telefoonhoesje;</li>
        <li>oplader;</li>
        <li>powerbank;</li>
        <li>headset;</li>
        <li>microfoon;</li>
        <li>statief;</li>
        <li>autohouder;</li>
        <li>kabels.</li>
      </ul>
      <p>
        Bij relatief goedkope accessoires die zakelijk worden gebruikt, zullen de kosten meestal
        direct worden verwerkt. Worden accessoires samen met een telefoon als één bedrijfsmiddel
        aangeschaft, dan kan de totale aanschaf relevant zijn voor de fiscale verwerking.
      </p>

      <h2>Telefoon reparatie aftrekbaar</h2>
      <p>
        Laat je een zakelijke telefoon repareren? Dan kunnen de reparatiekosten voor zover ze
        zakelijk zijn gebruikt eveneens zakelijke kosten zijn.
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>nieuw scherm;</li>
        <li>batterij vervangen;</li>
        <li>reparatie van laadpoort;</li>
        <li>andere noodzakelijke reparaties.</li>
      </ul>
      <p>
        Bij gemengd zakelijk en privégebruik moet je opnieuw rekening houden met het privédeel.
      </p>

      <h2>Voorbeeld: aparte zakelijke telefoon</h2>
      <p>Je koopt een smartphone uitsluitend voor je onderneming.</p>
      <ul>
        <li>
          <strong>Telefoon excl. btw:</strong> €600
        </li>
        <li>
          <strong>Btw:</strong> €126
        </li>
        <li>
          <strong>Totaal:</strong> €726
        </li>
      </ul>
      <p>
        Je bent btw-ondernemer, hebt recht op volledige btw-aftrek en gebruikt het toestel
        uitsluitend zakelijk. De €126 btw kan dan in beginsel als voorbelasting worden
        afgetrokken. De aanschafwaarde bedraagt voor de winstberekening €600.
      </p>
      <p>
        Omdat het toestel minimaal €450 kost en je het meerdere jaren gebruikt, behandel je het in
        beginsel als bedrijfsmiddel waarop je afschrijft.
      </p>

      <h2>Voorbeeld: privéabonnement met zakelijke gesprekken</h2>
      <p>
        Je hebt al jaren een privéabonnement. Nu start je als zzp&apos;er en gebruikt de telefoon
        ook voor klanten.
      </p>
      <p>
        Het abonnement zelf wordt daardoor niet automatisch een zakelijke kostenpost. De
        Belastingdienst geeft expliciet aan dat een privételefoonabonnement niet aftrekbaar is,
        terwijl zakelijke gesprekken die via dat abonnement worden gevoerd wel aftrekbaar kunnen
        zijn.
      </p>
      <p>
        Dit is dus een andere situatie dan een daadwerkelijk zakelijk telefoonabonnement.
      </p>

      <h2>Voorbeeld: zakelijke telefoon ook privé gebruikt</h2>
      <p>
        Je hebt een telefoon en abonnement voor je onderneming, maar gebruikt deze &apos;s avonds
        ook privé. Dan moet je rekening houden met het privégebruik.
      </p>
      <p>Je kunt niet simpelweg redeneren:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        De factuur staat op mijn bedrijfsnaam, dus 100% is aftrekbaar.
      </blockquote>
      <p>Het daadwerkelijke gebruik blijft relevant.</p>

      <h2>Telefoonkosten bijhouden in je administratie</h2>
      <p>Leg zakelijke telefoonkosten overzichtelijk vast. Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Mobiel abonnement september
        </li>
        <li>
          <strong>Leverancier</strong> — Telecomprovider
        </li>
        <li>
          <strong>Categorie</strong> — Telefoon &amp; internet
        </li>
        <li>
          <strong>Excl. btw</strong> — €40
        </li>
        <li>
          <strong>Btw</strong> — €8,40
        </li>
        <li>
          <strong>Totaal</strong> — €48,40
        </li>
      </ul>
      <p>
        Bij een terugkerend abonnement is het handig om de kosten als terugkerende uitgave te
        registreren. Bij een duur toestel dat je als bedrijfsmiddel moet behandelen, is
        uitgebreidere verwerking nodig omdat de aanschaf mogelijk via afschrijving moet worden
        verwerkt.
      </p>

      <h2>Telefoonkosten bijhouden met FactuurBaas</h2>
      <p>
        Telefoon- en internetkosten zijn voor veel zzp&apos;ers terugkerende zakelijke uitgaven.
        Met FactuurBaas kun je zakelijke kosten naast je facturen registreren.
      </p>
      <p>
        Je kunt bijvoorbeeld een zakelijk telefoonabonnement vastleggen als terugkerende uitgave.
        Daardoor zie je niet alleen hoeveel je factureert, maar ook hoeveel zakelijke kosten daar
        tegenover staan.
      </p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omzet:</strong> €4.850
        </li>
        <li>
          <strong>Zakelijke uitgaven:</strong> €1.240
        </li>
        <li>
          <strong>Resultaat:</strong> €3.610
        </li>
      </ul>
      <p>
        Je telefoonkosten vormen dan onderdeel van je totale zakelijke uitgaven. Let wel op dat je
        alleen het zakelijke deel registreert als zakelijke kosten wanneer sprake is van
        privégebruik.
      </p>

      <UitgavenCta
        title="Houd je zakelijke telefoonkosten bij"
        text="Registreer terugkerende zakelijke uitgaven en btw naast je facturen."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Het volledige privéabonnement aftrekken</h3>
      <p>
        Een privételefoonabonnement is niet automatisch aftrekbaar omdat je de telefoon ook voor
        werk gebruikt.
      </p>

      <h3>100% zakelijk boeken terwijl je de telefoon veel privé gebruikt</h3>
      <p>Bij gemengde kosten is alleen het zakelijke deel aftrekbaar.</p>

      <h3>Toestel en abonnement als hetzelfde behandelen</h3>
      <p>
        De aanschaf van het toestel kan een bedrijfsmiddel zijn waarop je moet afschrijven, terwijl
        abonnementskosten periodieke kosten zijn.
      </p>

      <h3>Een telefoon van €1.000 direct volledig als kosten boeken</h3>
      <p>
        Een bedrijfsmiddel van minimaal €450 dat meerdere jaren wordt gebruikt, moet in beginsel
        via afschrijving worden verwerkt.
      </p>

      <h3>Alle btw aftrekken zonder privégebruik mee te nemen</h3>
      <p>Voor btw gelden aparte regels bij gemengd zakelijk en privégebruik.</p>

      <h3>Alleen naar de gebruikte bankrekening kijken</h3>
      <p>
        Een privé betaalde zakelijke telefoon wordt niet automatisch privé. Andersom wordt een
        privételefoon niet zakelijk doordat je hem vanaf je zakelijke rekening betaalt.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Is een telefoon aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja, voor zover de telefoon zakelijk wordt gebruikt. Bij gemengd zakelijk en privégebruik is
        voor de inkomstenbelasting alleen het zakelijke deel van de kosten aftrekbaar.
      </p>

      <h3>Is mijn telefoonabonnement aftrekbaar als zzp&apos;er?</h3>
      <p>
        Een zakelijk telefoonabonnement kan aftrekbaar zijn. Gebruik je het abonnement ook privé,
        dan is het privédeel niet aftrekbaar. Een privételefoonabonnement zelf is niet aftrekbaar,
        maar zakelijke gesprekken via dat abonnement kunnen dat wel zijn.
      </p>

      <h3>Kan ik een iPhone aftrekken als zzp&apos;er?</h3>
      <p>
        Ja. Een iPhone wordt fiscaal niet anders behandeld dan andere smartphones. Het zakelijke
        gebruik, de aanschafwaarde en gebruiksduur zijn bepalend.
      </p>

      <h3>Moet ik een telefoon boven €450 afschrijven?</h3>
      <p>
        Als de telefoon een zakelijk bedrijfsmiddel is, minimaal €450 kost en langer dan één jaar
        wordt gebruikt, moet je de aanschafkosten in beginsel via afschrijving over meerdere jaren
        verdelen.
      </p>

      <h3>Is de €450-grens inclusief btw?</h3>
      <p>
        Kun je de btw verrekenen, dan ga je voor de aanschafwaarde uit van het bedrag exclusief
        btw. Kun je de btw niet verrekenen, dan ga je uit van het bedrag inclusief btw.
      </p>

      <h3>Kan ik btw op mijn telefoon aftrekken?</h3>
      <p>
        Dat kan voor zover je aan de voorwaarden voor aftrek van voorbelasting voldoet. Bij
        privégebruik gelden aanvullende btw-regels.
      </p>

      <h3>Kan ik een privételefoon zakelijk gebruiken?</h3>
      <p>
        Ja. Maar een privételefoonabonnement wordt daardoor niet automatisch volledig aftrekbaar.
        Zakelijke gesprekskosten via een privéabonnement kunnen wel aftrekbaar zijn.
      </p>

      <h3>Kan ik een tweede telefoon volledig zakelijk aftrekken?</h3>
      <p>
        Dat kan als het toestel daadwerkelijk uitsluitend of overeenkomstig de fiscale regels
        zakelijk wordt gebruikt. Alleen het feit dat je twee telefoons hebt, maakt één daarvan
        niet automatisch volledig zakelijk.
      </p>

      <h3>Zijn telefoonaccessoires aftrekbaar?</h3>
      <p>
        Zakelijk gebruikte accessoires zoals een oplader, headset, houder of powerbank kunnen
        zakelijke kosten zijn. De exacte verwerking hangt onder andere af van de aanschaf en of
        verschillende onderdelen samen één bedrijfsmiddel vormen.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Gebruik je als zzp&apos;er een telefoon voor je onderneming? Dan kunnen de kosten geheel of
        gedeeltelijk zakelijk aftrekbaar zijn.
      </p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>zakelijke telefoonkosten kunnen aftrekbaar zijn;</li>
        <li>bij gemengd gebruik is alleen het zakelijke deel aftrekbaar;</li>
        <li>een privételefoonabonnement zelf is niet aftrekbaar;</li>
        <li>zakelijke gesprekken via een privéabonnement kunnen wel aftrekbaar zijn;</li>
        <li>een zakelijk abonnement kan aftrekbaar zijn, met correctie voor privégebruik;</li>
        <li>
          een toestel onder €450 kan in beginsel direct als kosten worden verwerkt;
        </li>
        <li>
          een toestel vanaf €450 dat meerdere jaren wordt gebruikt moet in beginsel worden
          afgeschreven;
        </li>
        <li>voor btw gelden aparte regels bij privégebruik;</li>
        <li>
          onder de KOR kun je in beginsel geen btw op je telefoon of abonnement aftrekken.
        </li>
      </ul>
      <p>
        Heb je iedere maand zakelijke telefoon- of abonnementskosten? Houd ze dan meteen bij als
        terugkerende zakelijke uitgave.
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
