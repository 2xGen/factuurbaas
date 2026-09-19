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
  title = 'Laptop gekocht voor je bedrijf? Houd de uitgave direct bij',
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

export const laptopAftrekbaarArticle = {
  slug: 'laptop-aftrekbaar-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'zakelijke-kosten-prive-betaald',
    'telefoon-aftrekbaar-zzp',
    'internet-aftrekbaar-zzp',
    'software-abonnementen-aftrekken-zzp',
  ],
  metaTitle: "Laptop aftrekbaar als zzp'er? Dit zijn de regels",
  title: "Laptop aftrekbaar als zzp'er? Dit zijn de regels",
  excerpt:
    "Laptop gekocht als zzp'er? Lees wanneer je de kosten mag aftrekken, wanneer je moet afschrijven, hoe de €450-grens werkt en of de btw aftrekbaar is.",
  keywords:
    "laptop aftrekbaar zzp, laptop zakelijk aftrekken, laptop aftrekken zzp, laptop afschrijven zzp, laptop zakelijke kosten, btw laptop aftrekken, computer aftrekbaar zzp, MacBook aftrekbaar zzp, laptop kopen als zzp'er",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Laptop%20aftrekbaar%20als%20zzper.jpg',
    alt: "Laptop aftrekbaar als zzp'er — kosten en administratie",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is een laptop aftrekbaar als zzp'er?",
      answer:
        'Ja, een laptop die je voor je onderneming gebruikt kan zakelijk aftrekbaar zijn. Hoe je de kosten verwerkt hangt onder andere af van de aanschafwaarde, gebruiksduur en de verhouding tussen zakelijk en privégebruik.',
    },
    {
      question: 'Mag ik een laptop onder €450 direct aftrekken?',
      answer:
        'Een bedrijfsmiddel met een aanschafwaarde van minder dan €450 mag in beginsel in één keer als kosten worden afgetrokken.',
    },
    {
      question: 'Moet ik een laptop boven €450 afschrijven?',
      answer:
        'Kost een laptop €450 of meer en gebruik je hem langer dan één jaar als bedrijfsmiddel, dan moet je de aanschafkosten in beginsel over meerdere jaren verdelen via afschrijving.',
    },
    {
      question: 'Is de €450-grens inclusief of exclusief btw?',
      answer:
        'Kun je de btw verrekenen, dan ga je uit van de aanschafwaarde exclusief btw. Kun je de btw niet verrekenen, dan ga je uit van de aanschafwaarde inclusief btw.',
    },
    {
      question: 'Kan ik de btw op mijn laptop aftrekken?',
      answer:
        'Dat kan wanneer je recht hebt op aftrek van voorbelasting en de laptop gebruikt voor activiteiten waarvoor btw-aftrek mogelijk is. Bij gemengd zakelijk en privégebruik gelden aanvullende regels.',
    },
    {
      question: "Kan ik een MacBook zakelijk aftrekken?",
      answer:
        'Ja. Voor een MacBook gelden dezelfde fiscale uitgangspunten als voor andere laptops. Het merk is niet bepalend; het zakelijke gebruik, de aanschafwaarde en gebruiksduur zijn dat wel.',
    },
    {
      question: 'Kan ik een tweede laptop zakelijk aftrekken?',
      answer:
        'Dat kan wanneer er een voldoende zakelijk belang is. Er bestaat geen algemene regel dat een ondernemer slechts één laptop zakelijk mag gebruiken.',
    },
    {
      question: 'Kan ik een tweedehands laptop aftrekken?',
      answer:
        'Ja, een tweedehands laptop kan eveneens een zakelijk bedrijfsmiddel zijn. Let bij de btw op de manier waarop de verkoper de laptop factureert.',
    },
    {
      question: 'Telt een laptop mee voor de KIA?',
      answer:
        'Een kwalificerende laptop met een investeringsbedrag van minimaal €450 kan in beginsel meetellen voor de kleinschaligheidsinvesteringsaftrek. Of je daadwerkelijk KIA krijgt, hangt ook af van je totale kwalificerende investeringen en de overige voorwaarden in het betreffende jaar.',
    },
  ],
  content: (
    <>
      <p>
        Heb je als zzp&apos;er een laptop nodig voor je werk? Dan kunnen de kosten van die laptop
        zakelijk aftrekbaar zijn.
      </p>
      <p>
        Maar er is een belangrijk verschil tussen een goedkope laptop die je direct als kosten
        kunt verwerken en een duurdere laptop waarop je moet afschrijven.
      </p>
      <p>Ook maakt het uit of je de laptop volledig zakelijk of ook privé gebruikt.</p>
      <p>
        In deze gids lees je wanneer een laptop aftrekbaar is, hoe de grens van €450 werkt, wat
        afschrijven betekent en wanneer je de btw op je laptop kunt aftrekken.
      </p>

      <UitgavenCta />

      <h2>Is een laptop aftrekbaar als zzp&apos;er?</h2>
      <p>
        Ja, als de laptop voor je onderneming wordt gebruikt, kan deze fiscaal als zakelijk
        bedrijfsmiddel worden behandeld.
      </p>
      <p>Denk bijvoorbeeld aan een laptop die je gebruikt voor:</p>
      <ul>
        <li>administratie;</li>
        <li>facturen maken;</li>
        <li>e-mail;</li>
        <li>klantwerk;</li>
        <li>programmeren;</li>
        <li>grafisch ontwerp;</li>
        <li>fotografie;</li>
        <li>videobewerking;</li>
        <li>marketing;</li>
        <li>online vergaderingen;</li>
        <li>offertes;</li>
        <li>andere werkzaamheden voor je onderneming.</li>
      </ul>
      <p>
        Maar dat betekent niet automatisch dat je de volledige aanschafprijs meteen in het jaar van
        aankoop van je winst mag aftrekken. Daarvoor moet je onder andere kijken naar de
        aanschafprijs en hoe lang je de laptop gebruikt.
      </p>

      <h2>Laptop onder €450: meestal direct aftrekken</h2>
      <p>
        Voor bedrijfsmiddelen met een aanschafwaarde van <strong>minder dan €450</strong> geldt dat
        je de kosten in principe in één keer kunt aftrekken in het jaar van aanschaf.
      </p>
      <p>Koop je bijvoorbeeld een zakelijke laptop voor:</p>
      <p>
        <strong>Aanschafprijs:</strong> €399 excl. btw
      </p>
      <p>
        en gebruik je deze als bedrijfsmiddel voor je onderneming, dan hoef je normaal gesproken
        niet over meerdere jaren af te schrijven. Je verwerkt de aanschaf in één keer als kosten.
      </p>
      <p>
        Let op het woord <strong>minder dan</strong> €450. Bij een aanschafwaarde vanaf €450 kom je
        in de regels voor bedrijfsmiddelen en afschrijving terecht.
      </p>

      <h2>Laptop van €450 of meer: afschrijven</h2>
      <p>
        Koop je een laptop van €450 of meer en gebruik je deze langer dan één jaar voor je
        onderneming? Dan is de laptop in principe een bedrijfsmiddel waarop je moet afschrijven.
      </p>
      <p>
        Dat betekent dat je niet de volledige aanschafprijs ineens van je winst aftrekt. Je verdeelt
        de kosten over de jaren waarin je de laptop voor je onderneming gebruikt.
      </p>
      <p>Stel dat je een laptop koopt voor:</p>
      <p>
        <strong>€1.500 excl. btw</strong>
      </p>
      <p>
        en verwacht dat deze meerdere jaren economisch bruikbaar blijft. Dan verwerk je niet
        simpelweg €1.500 als kosten in het eerste jaar. Je neemt de laptop op als bedrijfsmiddel en
        schrijft erop af.
      </p>

      <h2>Is de grens van €450 inclusief of exclusief btw?</h2>
      <p>Dat hangt ervan af of je de btw kunt aftrekken.</p>
      <p>
        Kun je de btw op de laptop als voorbelasting verrekenen? Dan kijk je voor de aanschafwaarde
        naar het bedrag <strong>exclusief btw</strong>.
      </p>
      <p>
        Kun je de btw niet verrekenen? Dan kijk je naar de aanschafwaarde{' '}
        <strong>inclusief btw</strong>.
      </p>

      <h3>Voorbeeld</h3>
      <p>Je koopt een laptop voor:</p>
      <ul>
        <li>
          <strong>Excl. btw:</strong> €1.000
        </li>
        <li>
          <strong>21% btw:</strong> €210
        </li>
        <li>
          <strong>Totaal:</strong> €1.210
        </li>
      </ul>
      <p>
        Kun je de €210 btw volledig als voorbelasting aftrekken? Dan bedraagt de aanschafwaarde
        voor je winstberekening €1.000.
      </p>
      <p>
        Kun je de btw niet aftrekken? Dan wordt voor de investering uitgegaan van €1.210.
      </p>

      <h2>Hoe werkt afschrijven op een laptop?</h2>
      <p>
        Bij afschrijven verdeel je de aanschafkosten van een bedrijfsmiddel over de jaren waarin je
        het gebruikt.
      </p>
      <p>Voor de berekening kijk je onder andere naar:</p>
      <ul>
        <li>de aanschafkosten;</li>
        <li>de verwachte gebruiksduur;</li>
        <li>de verwachte restwaarde.</li>
      </ul>
      <p>
        De Belastingdienst noemt een laptop zelf als voorbeeld van een bedrijfsmiddel waarbij de
        economische levensduur korter kan zijn dan de technische levensduur. Een laptop kan
        technisch misschien tien jaar blijven werken, maar economisch bijvoorbeeld na vijf jaar
        onvoldoende bruikbaar zijn doordat software of hardware-eisen veranderen.
      </p>

      <h3>Eenvoudig voorbeeld</h3>
      <p>Stel:</p>
      <ul>
        <li>
          <strong>Aanschafprijs:</strong> €1.500
        </li>
        <li>
          <strong>Geschatte restwaarde:</strong> €100
        </li>
        <li>
          <strong>Gebruiksduur:</strong> 5 jaar
        </li>
      </ul>
      <p>Het af te schrijven bedrag is:</p>
      <p>
        <strong>€1.500 − €100 = €1.400</strong>
      </p>
      <p>Verdeel je dit gelijkmatig over vijf jaar, dan is dat:</p>
      <p>
        <strong>€1.400 ÷ 5 = €280 per jaar</strong>
      </p>
      <p>
        Dit is een vereenvoudigd voorbeeld. De daadwerkelijke afschrijving hangt af van de
        omstandigheden en de fiscale regels die op jouw bedrijfsmiddel van toepassing zijn.
      </p>

      <h2>Kun je een laptop in 3 jaar afschrijven?</h2>
      <p>
        Je kunt niet simpelweg zelf een willekeurig aantal jaren kiezen omdat dat fiscaal gunstiger
        uitkomt. Bij de afschrijving moet je rekening houden met de vermoedelijke gebruiksduur en
        restwaarde van het bedrijfsmiddel. De economische levensduur kan daarbij relevant zijn.
      </p>
      <p>
        Daarnaast geldt voor de normale jaarlijkse afschrijving op veel bedrijfsmiddelen een
        fiscale beperking.
      </p>
      <p>
        Heb je een specifieke laptop en wil je weten welk afschrijvingsschema passend is? Baseer
        dat dan op een redelijke economische levensduur en controleer bij twijfel de fiscale
        verwerking met je boekhouder.
      </p>

      <h2>Laptop volledig zakelijk gebruikt</h2>
      <p>Gebruik je de laptop uitsluitend voor je onderneming? Dan is de situatie relatief eenvoudig.</p>
      <p>
        Als de laptop tot je ondernemingsvermogen behoort, verwerk je de zakelijke aanschaf volgens
        de regels voor directe kostenaftrek of afschrijving.
      </p>
      <p>
        Voor de btw geldt afzonderlijk dat je de btw kunt aftrekken voor zover je de laptop gebruikt
        voor activiteiten die recht geven op aftrek van voorbelasting. Bij volledig zakelijk gebruik
        voor btw-belaste activiteiten kan dat dus betekenen dat de btw volledig aftrekbaar is.
      </p>

      <h2>Laptop zakelijk én privé gebruikt</h2>
      <p>
        Veel zzp&apos;ers gebruiken één laptop voor beide. Overdag werk je voor klanten en &apos;s
        avonds kijk je bijvoorbeeld privé naar YouTube of regel je persoonlijke zaken. Dan is
        sprake van gemengd gebruik.
      </p>
      <p>
        Voor de inkomstenbelasting moet je bepalen hoe het bedrijfsmiddel fiscaal wordt behandeld.
        Afhankelijk van de verhouding tussen zakelijk en privégebruik kan sprake zijn van verplicht
        ondernemingsvermogen, verplicht privévermogen of keuzevermogen.
      </p>
      <p>
        Je kunt dus niet altijd simpelweg zeggen: &ldquo;Ik ben zzp&apos;er en gebruik de laptop
        soms voor werk, dus ik trek de volledige laptop af.&rdquo; De mate van zakelijk gebruik is
        relevant.
      </p>

      <h2>Hoe zit het met btw bij privégebruik?</h2>
      <p>
        Voor de btw bestaan aparte regels voor investeringsgoederen die zowel zakelijk als privé
        worden gebruikt. Bij een computer of laptop die als investeringsgoed geldt, zijn er
        verschillende mogelijkheden.
      </p>
      <p>Je kunt het goed voor de btw:</p>
      <ul>
        <li>geheel tot je privévermogen rekenen;</li>
        <li>geheel tot je bedrijfsvermogen rekenen;</li>
        <li>gedeeltelijk tot je bedrijfsvermogen rekenen.</li>
      </ul>
      <p>
        Welke keuze je maakt heeft gevolgen voor de btw-aftrek en eventuele correctie voor
        privégebruik. Reken je een computer bijvoorbeeld volledig tot het bedrijfsvermogen en trek
        je de btw volledig af, terwijl je de computer ook privé gebruikt? Dan kan btw verschuldigd
        zijn over dat privégebruik.
      </p>
      <p>
        De btw-behandeling is dus niet altijd simpelweg: 80% zakelijk gebruik = automatisch precies
        80% btw aftrekken. Er zijn verschillende toegestane manieren om gemengd gebruik te
        verwerken.
      </p>
      <p>
        Lees daarom ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het?
        </TextLink>
      </p>

      <h2>Voorbeeld: laptop van €400</h2>
      <p>
        Je koopt een laptop voor je onderneming voor €400 exclusief btw. De laptop kost minder dan
        €450. Als de laptop als zakelijk bedrijfsmiddel wordt behandeld, kun je de aanschafwaarde
        in principe in één keer als kosten verwerken. Je hoeft er dus niet meerdere jaren op af te
        schrijven.
      </p>

      <h2>Voorbeeld: laptop van €1.200</h2>
      <p>
        Je koopt een laptop voor €1.200 exclusief btw en gebruikt deze meerdere jaren in je
        onderneming. Omdat de aanschafwaarde minimaal €450 bedraagt en het bedrijfsmiddel langer
        dan één jaar meegaat, moet je de aanschafkosten in beginsel over meerdere jaren verdelen
        via afschrijving.
      </p>
      <p>
        Je registreert dus wel de aankoop, maar trekt niet automatisch €1.200 volledig af van de
        winst in het eerste jaar.
      </p>

      <h2>Wat als je een laptop met monitor en accessoires koopt?</h2>
      <p>
        Hier zit een interessante nuance. Je kunt niet altijd ieder onderdeel afzonderlijk bekijken
        om onder de grens van €450 te blijven.
      </p>
      <p>De Belastingdienst geeft zelf het voorbeeld van:</p>
      <ul>
        <li>
          <strong>Computer:</strong> €350
        </li>
        <li>
          <strong>Beeldscherm:</strong> €150
        </li>
        <li>
          <strong>Muis:</strong> €15
        </li>
        <li>
          <strong>Toetsenbord:</strong> €25
        </li>
      </ul>
      <p>
        Samen is dat: <strong>€540</strong>
      </p>
      <p>
        Deze onderdelen kunnen samen één bedrijfsmiddel vormen. Je kunt dus niet automatisch zeggen
        dat ieder onderdeel minder dan €450 kost en alles direct aftrekbaar is. Als de aankopen
        samen één bedrijfsmiddel vormen, kan het totale bedrag bepalend zijn.
      </p>

      <h2>Zijn een muis, toetsenbord en laptopstandaard aftrekbaar?</h2>
      <p>Gebruik je accessoires zakelijk, dan kunnen deze zakelijke kosten zijn.</p>
      <p>Denk aan:</p>
      <ul>
        <li>muis;</li>
        <li>toetsenbord;</li>
        <li>laptopstandaard;</li>
        <li>dockingstation;</li>
        <li>webcam;</li>
        <li>monitor;</li>
        <li>externe harde schijf;</li>
        <li>oplader.</li>
      </ul>
      <p>
        Of je ze afzonderlijk direct als kosten kunt verwerken of samen met andere onderdelen als
        één bedrijfsmiddel moet beoordelen, hangt af van de samenhang tussen de aankopen. Zoals
        hierboven genoemd, kunnen meerdere kleine aankopen samen fiscaal één bedrijfsmiddel vormen.
      </p>

      <h2>Kun je btw op een laptop aftrekken?</h2>
      <p>
        Als je btw-ondernemer bent en de laptop gebruikt voor activiteiten waarvoor je recht hebt
        op aftrek van voorbelasting, kan de btw op de zakelijke aanschaf aftrekbaar zijn.
      </p>
      <p>Stel:</p>
      <ul>
        <li>
          <strong>Laptop excl. btw:</strong> €1.500
        </li>
        <li>
          <strong>Btw:</strong> €315
        </li>
        <li>
          <strong>Totaal:</strong> €1.815
        </li>
      </ul>
      <p>
        Bij volledig zakelijk gebruik voor btw-belaste activiteiten kan de €315 btw in beginsel als
        voorbelasting worden afgetrokken. Je schrijft voor de winstberekening dan over de
        aanschafwaarde exclusief de aftrekbare btw.
      </p>
      <p>
        Gebruik je de laptop ook privé of voor vrijgestelde activiteiten? Dan moet je rekening
        houden met de regels voor gemengd gebruik.
      </p>

      <h2>Laptop kopen onder de KOR</h2>
      <p>Doe je mee aan de kleineondernemersregeling (KOR)?</p>
      <p>
        Dan is er een belangrijk verschil. Onder de KOR bereken je in beginsel geen btw aan je
        klanten, maar kun je ook geen btw op zakelijke kosten en investeringen aftrekken.
      </p>
      <p>Koop je bijvoorbeeld een laptop voor:</p>
      <ul>
        <li>
          <strong>€1.000 excl. btw</strong>
        </li>
        <li>
          <strong>€210 btw</strong>
        </li>
        <li>
          <strong>€1.210 totaal</strong>
        </li>
      </ul>
      <p>
        dan kun je die €210 btw tijdens deelname aan de KOR in beginsel niet als voorbelasting
        aftrekken. Voor je winstberekening kan de niet-aftrekbare btw daardoor onderdeel worden van
        de aanschafkosten.
      </p>
      <p>
        Dat kan vooral bij grotere investeringen relevant zijn wanneer je overweegt om wel of niet
        aan de KOR deel te nemen. Zie ook de{' '}
        <TextLink href="/tools/kor-calculator">KOR calculator</TextLink>.
      </p>

      <h2>Kun je een tweede laptop zakelijk aftrekken?</h2>
      <p>
        Er bestaat geen algemene regel dat een ondernemer maar één laptop zakelijk mag hebben. De
        vraag is of de aankoop een zakelijk doel heeft en binnen redelijke grenzen voor je
        onderneming wordt gemaakt.
      </p>
      <p>Er kunnen goede zakelijke redenen zijn om meerdere computers te gebruiken. Bijvoorbeeld:</p>
      <ul>
        <li>een laptop voor onderweg en een werkstation op kantoor;</li>
        <li>verschillende apparaten voor verschillende werkzaamheden;</li>
        <li>een reserveapparaat dat noodzakelijk is voor je onderneming;</li>
        <li>apparatuur voor personeel.</li>
      </ul>
      <p>
        Maar hoe minder duidelijk het zakelijke belang, hoe belangrijker het wordt dat je de
        aankoop kunt onderbouwen. Een tweede laptop wordt dus niet automatisch afgewezen, maar ook
        niet automatisch zakelijk omdat je ondernemer bent.
      </p>

      <h2>Kan een gaming laptop zakelijk aftrekbaar zijn?</h2>
      <p>
        De naam of marketingcategorie van een laptop bepaalt niet of deze zakelijk is. Een krachtige
        gaming laptop kan bijvoorbeeld nodig zijn voor videobewerking, 3D-modellering,
        softwareontwikkeling, grafisch ontwerp of zware berekeningen.
      </p>
      <p>
        Gebruik je het apparaat daadwerkelijk voor je onderneming, dan kan het dus een zakelijk
        bedrijfsmiddel zijn. Gebruik je een dure gaming laptop vooral privé en af en toe voor een
        zakelijke e-mail, dan ligt dat anders.
      </p>
      <p>
        Het <strong>werkelijke gebruik en zakelijke belang</strong> zijn belangrijker dan het woord
        “gaming” op de verpakking.
      </p>

      <h2>Kun je een MacBook aftrekken als zzp&apos;er?</h2>
      <p>
        Voor een MacBook gelden in principe dezelfde fiscale regels als voor andere laptops. Het
        merk maakt fiscaal geen verschil.
      </p>
      <p>Je kijkt naar:</p>
      <ul>
        <li>het zakelijke gebruik;</li>
        <li>de aanschafwaarde;</li>
        <li>de gebruiksduur;</li>
        <li>eventuele privégebruik;</li>
        <li>de btw-behandeling.</li>
      </ul>
      <p>
        Een MacBook van €2.000 wordt dus niet anders behandeld omdat het een Apple-product is. Bij
        een zakelijk bedrijfsmiddel van die waarde dat meerdere jaren wordt gebruikt, ligt
        afschrijving voor de hand.
      </p>

      <h2>Tweedehands laptop zakelijk kopen</h2>
      <p>
        Ook een tweedehands laptop kan een zakelijk bedrijfsmiddel zijn. Dezelfde basisvragen blijven
        relevant:
      </p>
      <ul>
        <li>gebruik je hem voor je onderneming?</li>
        <li>wat is de aanschafwaarde?</li>
        <li>hoe lang verwacht je hem te gebruiken?</li>
        <li>koop je hem met of zonder aftrekbare btw?</li>
      </ul>
      <p>
        Let vooral op de btw. Koop je een tweedehands laptop van een particulier, dan staat er geen
        btw op de aankoop die je als voorbelasting kunt aftrekken. Koop je hem van een ondernemer,
        dan hangt de btw-behandeling af van de factuur en bijvoorbeeld van de vraag of de
        margeregeling wordt toegepast.
      </p>

      <h2>Laptop privé betaald maar zakelijk gebruikt</h2>
      <p>
        Heb je een zakelijke laptop met je privérekening betaald? Dan wordt de laptop daardoor niet
        automatisch privé. Het karakter van de aankoop en het gebruik zijn belangrijker dan de
        rekening waarmee je hebt betaald.
      </p>
      <p>
        Bij een eenmanszaak kun je een zakelijke aankoop die privé is betaald administratief
        verwerken als een zakelijke uitgave of investering die vanuit privé is gefinancierd.
      </p>
      <p>
        Lees hierover:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die?
        </TextLink>
      </p>

      <h2>Laptop gekocht vóórdat je zzp&apos;er werd</h2>
      <p>
        Misschien had je al een laptop voordat je met je onderneming begon. Ga je die vervolgens
        voor je onderneming gebruiken, dan betekent dat niet automatisch dat je de oorspronkelijke
        aanschafprijs volledig als nieuwe zakelijke kosten kunt opvoeren.
      </p>
      <p>
        Je brengt dan mogelijk een bestaand privébezit in de onderneming in. De fiscale verwerking
        hangt onder andere af van de waarde en de manier waarop je de laptop gaat gebruiken. Dit is
        dus iets anders dan een nieuwe laptop kopen nadat je onderneming is gestart.
      </p>

      <h2>Is een laptop ook een investering?</h2>
      <p>
        Een laptop die je meerdere jaren in je onderneming gebruikt kan een bedrijfsmiddel en
        daarmee een investering zijn. Dat roept ook de vraag op of je mogelijk recht hebt op
        investeringsaftrek.
      </p>
      <p>
        Voor de <strong>kleinschaligheidsinvesteringsaftrek (KIA)</strong> gelden voorwaarden en
        jaarlijkse investeringsgrenzen. Een bedrijfsmiddel met een investeringsbedrag van minder dan
        €450 telt niet mee voor de KIA.
      </p>
      <p>
        Koop je een laptop van minimaal €450, dan kan deze in beginsel wel meetellen als investering
        als ook aan de overige voorwaarden wordt voldaan. Of je daadwerkelijk KIA krijgt, hangt
        onder andere af van je totale kwalificerende investeringen in dat jaar. Controleer daarom
        de actuele KIA-grenzen voor het jaar waarin je investeert.
      </p>

      <h2>Wanneer boek je een laptop als kosten en wanneer als investering?</h2>
      <p>Een eenvoudige beslisroute:</p>

      <h3>Kost de laptop minder dan €450?</h3>
      <p>Dan kun je de aanschafwaarde in beginsel direct als kosten verwerken.</p>

      <h3>Kost de laptop €450 of meer en gebruik je hem langer dan één jaar?</h3>
      <p>Dan behandel je hem in beginsel als bedrijfsmiddel en schrijf je erop af.</p>

      <h3>Gebruik je hem ook privé?</h3>
      <p>
        Dan moet je daarnaast beoordelen hoe je het bedrijfsmiddel voor de inkomstenbelasting en
        btw behandelt.
      </p>

      <h3>Kun je de btw aftrekken?</h3>
      <p>
        Dan werk je voor de winstberekening met de aanschafwaarde exclusief de aftrekbare btw. Kun
        je de btw niet aftrekken, dan wordt de niet-aftrekbare btw onderdeel van de aanschafkosten.
      </p>

      <h2>Laptop en accessoires bijhouden in je administratie</h2>
      <p>Bewaar bij een zakelijke laptop in ieder geval:</p>
      <ul>
        <li>aankoopfactuur;</li>
        <li>aankoopdatum;</li>
        <li>leverancier;</li>
        <li>aanschafprijs;</li>
        <li>btw;</li>
        <li>relevante accessoires;</li>
        <li>informatie over het zakelijke gebruik;</li>
        <li>eventuele afschrijving.</li>
      </ul>
      <p>
        Voor kleinere zakelijke accessoires kun je de kosten als uitgave registreren wanneer deze
        volgens de fiscale regels direct aftrekbaar zijn. Een duurdere laptop die als investering
        moet worden behandeld vraagt uiteindelijk om uitgebreidere verwerking dan alleen een losse
        kostenpost.
      </p>

      <h2>Laptopkosten bijhouden met FactuurBaas</h2>
      <p>
        Koop je apparatuur, accessoires of andere zakelijke spullen die je direct als zakelijke
        kosten mag verwerken? Dan kun je deze uitgaven in FactuurBaas naast je facturen
        registreren.
      </p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omschrijving:</strong> Laptopstandaard
        </li>
        <li>
          <strong>Leverancier:</strong> Webshop
        </li>
        <li>
          <strong>Categorie:</strong> Kantoor &amp; materiaal
        </li>
        <li>
          <strong>Excl. btw:</strong> €80
        </li>
        <li>
          <strong>Btw:</strong> €16,80
        </li>
        <li>
          <strong>Totaal:</strong> €96,80
        </li>
      </ul>
      <p>Je ziet de geregistreerde kosten vervolgens terug naast je omzet.</p>
      <p>
        Voor bedrijfsmiddelen waarop je fiscaal moet afschrijven is een uitgebreidere
        boekhoudkundige verwerking nodig. FactuurBaas is geen vervanging voor een volledige activa-
        en afschrijvingsadministratie.
      </p>

      <UitgavenCta
        title="Houd je zakelijke uitgaven gratis bij"
        text="Registreer zakelijke kosten en btw naast je facturen en zie wat er van je omzet overblijft."
      />

      <h2>Veelgemaakte fouten bij een zakelijke laptop</h2>

      <h3>Een laptop van €1.500 volledig in één jaar aftrekken</h3>
      <p>
        Een bedrijfsmiddel van minimaal €450 dat meerdere jaren wordt gebruikt, moet in beginsel
        over meerdere jaren worden afgeschreven.
      </p>

      <h3>Alleen naar het bedrag inclusief btw kijken</h3>
      <p>
        Kun je de btw aftrekken? Dan kijk je voor de aanschafwaarde en winstberekening naar het
        bedrag exclusief aftrekbare btw.
      </p>

      <h3>Ieder accessoire automatisch afzonderlijk behandelen</h3>
      <p>
        Een computer, monitor, toetsenbord en muis kunnen samen één bedrijfsmiddel vormen.
      </p>

      <h3>Een voornamelijk privé gebruikte laptop volledig zakelijk behandelen</h3>
      <p>Zakelijk en privégebruik moeten correct worden onderscheiden.</p>

      <h3>Btw volledig aftrekken zonder naar privégebruik te kijken</h3>
      <p>
        Voor investeringsgoederen die zowel zakelijk als privé worden gebruikt gelden specifieke
        btw-regels.
      </p>

      <h3>Geen aankoopfactuur bewaren</h3>
      <p>Bewaar de factuur en andere relevante gegevens bij je administratie.</p>

      <h2>Veelgestelde vragen over een laptop aftrekken als zzp&apos;er</h2>

      <h3>Is een laptop aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja, een laptop die je voor je onderneming gebruikt kan zakelijk aftrekbaar zijn. Hoe je de
        kosten verwerkt hangt onder andere af van de aanschafwaarde, gebruiksduur en de verhouding
        tussen zakelijk en privégebruik.
      </p>

      <h3>Mag ik een laptop onder €450 direct aftrekken?</h3>
      <p>
        Een bedrijfsmiddel met een aanschafwaarde van minder dan €450 mag in beginsel in één keer
        als kosten worden afgetrokken.
      </p>

      <h3>Moet ik een laptop boven €450 afschrijven?</h3>
      <p>
        Kost een laptop €450 of meer en gebruik je hem langer dan één jaar als bedrijfsmiddel, dan
        moet je de aanschafkosten in beginsel over meerdere jaren verdelen via afschrijving.
      </p>

      <h3>Is de €450-grens inclusief of exclusief btw?</h3>
      <p>
        Kun je de btw verrekenen, dan ga je uit van de aanschafwaarde exclusief btw. Kun je de btw
        niet verrekenen, dan ga je uit van de aanschafwaarde inclusief btw.
      </p>

      <h3>Kan ik de btw op mijn laptop aftrekken?</h3>
      <p>
        Dat kan wanneer je recht hebt op aftrek van voorbelasting en de laptop gebruikt voor
        activiteiten waarvoor btw-aftrek mogelijk is. Bij gemengd zakelijk en privégebruik gelden
        aanvullende regels.
      </p>

      <h3>Kan ik een MacBook zakelijk aftrekken?</h3>
      <p>
        Ja. Voor een MacBook gelden dezelfde fiscale uitgangspunten als voor andere laptops. Het
        merk is niet bepalend; het zakelijke gebruik, de aanschafwaarde en gebruiksduur zijn dat
        wel.
      </p>

      <h3>Kan ik een tweede laptop zakelijk aftrekken?</h3>
      <p>
        Dat kan wanneer er een voldoende zakelijk belang is. Er bestaat geen algemene regel dat een
        ondernemer slechts één laptop zakelijk mag gebruiken.
      </p>

      <h3>Kan ik een tweedehands laptop aftrekken?</h3>
      <p>
        Ja, een tweedehands laptop kan eveneens een zakelijk bedrijfsmiddel zijn. Let bij de btw op
        de manier waarop de verkoper de laptop factureert.
      </p>

      <h3>Telt een laptop mee voor de KIA?</h3>
      <p>
        Een kwalificerende laptop met een investeringsbedrag van minimaal €450 kan in beginsel
        meetellen voor de kleinschaligheidsinvesteringsaftrek. Of je daadwerkelijk KIA krijgt,
        hangt ook af van je totale kwalificerende investeringen en de overige voorwaarden in het
        betreffende jaar.
      </p>

      <h2>Kort samengevat</h2>
      <p>
        Een laptop kan als zzp&apos;er zakelijk aftrekbaar zijn als je deze voor je onderneming
        gebruikt.
      </p>
      <p>De belangrijkste regels:</p>
      <ul>
        <li>
          een bedrijfsmiddel van <strong>minder dan €450</strong> kun je in beginsel direct als
          kosten aftrekken;
        </li>
        <li>
          bij <strong>€450 of meer</strong> en gebruik gedurende meerdere jaren moet je in
          beginsel afschrijven;
        </li>
        <li>
          kun je btw aftrekken, dan kijk je voor de aanschafwaarde naar het bedrag exclusief btw;
        </li>
        <li>bij gemengd zakelijk en privégebruik gelden aanvullende regels;</li>
        <li>btw-aftrek en aftrek van de aanschafkosten zijn twee verschillende zaken;</li>
        <li>meerdere computeronderdelen kunnen samen één bedrijfsmiddel vormen;</li>
        <li>
          een laptop van minimaal €450 kan onder voorwaarden meetellen voor investeringsaftrek;
        </li>
        <li>bewaar altijd de aankoopfactuur.</li>
      </ul>
      <p>
        Koop je kleinere apparatuur of andere zakelijke kosten die je direct mag verwerken? Houd
        ze dan meteen bij naast je omzet.
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
