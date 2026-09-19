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
  title = 'Houd software en abonnementen automatisch bij',
  text = 'Registreer terugkerende zakelijke kosten naast je facturen en zie hoeveel je iedere maand aan je bedrijf uitgeeft.',
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

export const softwareAbonnementenArticle = {
  slug: 'software-abonnementen-aftrekken-zzp',
  relatedSlugs: [
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'zakelijke-kosten-prive-betaald',
    'laptop-aftrekbaar-zzp',
    'telefoon-aftrekbaar-zzp',
    'internet-aftrekbaar-zzp',
  ],
  metaTitle: "Software en abonnementen aftrekken als zzp'er",
  title: "Software en abonnementen aftrekken als zzp'er",
  excerpt:
    "Software aftrekken als zzp'er? Lees welke abonnementen zakelijke kosten zijn, hoe btw werkt en waar je op let bij buitenlandse software en SaaS.",
  keywords:
    "software aftrekbaar zzp, software aftrekken zzp, abonnementen aftrekbaar zzp, software zakelijke kosten, software abonnement zakelijk aftrekken, SaaS kosten zzp, btw software aftrekken, buitenlandse software btw, ChatGPT aftrekbaar zzp, Adobe aftrekbaar zzp, Canva aftrekbaar zzp",
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Software%20en%20abonnementen%20aftrekken%20als%20zzper.jpg',
    alt: "Software en abonnementen aftrekken als zzp'er",
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Is software aftrekbaar als zzp'er?",
      answer:
        'Ja, software die je voor je onderneming gebruikt kan een zakelijke kostenpost zijn. Gebruik je de software ook privé, dan is alleen het zakelijke deel aftrekbaar.',
    },
    {
      question: 'Is een softwareabonnement volledig aftrekbaar?',
      answer:
        'Als het abonnement volledig voor zakelijke doeleinden wordt gebruikt, kunnen de kosten in beginsel volledig zakelijk zijn. Bij gemengd gebruik moet je rekening houden met het privédeel.',
    },
    {
      question: "Is ChatGPT aftrekbaar als zzp'er?",
      answer:
        'Een betaald AI-abonnement kan een zakelijke kostenpost zijn als je het voor je onderneming gebruikt. De fiscale behandeling volgt dezelfde basisprincipes als bij andere zakelijke software.',
    },
    {
      question: "Is Adobe aftrekbaar als zzp'er?",
      answer:
        'Gebruik je Adobe-software voor je onderneming, bijvoorbeeld voor ontwerp, fotografie of videobewerking, dan kunnen de zakelijke abonnementskosten aftrekbaar zijn.',
    },
    {
      question: "Is Canva aftrekbaar als zzp'er?",
      answer:
        'Ja, voor zover je Canva zakelijk gebruikt kunnen de abonnementskosten zakelijke kosten zijn.',
    },
    {
      question: 'Zijn hosting en domeinnamen aftrekbaar?',
      answer:
        'Hosting en domeinkosten die betrekking hebben op je onderneming kunnen in beginsel zakelijke kosten zijn.',
    },
    {
      question: 'Kan ik btw op software aftrekken?',
      answer:
        'Als je recht hebt op aftrek van voorbelasting en de software voor btw-belaste activiteiten gebruikt, kan de btw aftrekbaar zijn. Bij buitenlandse software kan btw-verlegging van toepassing zijn.',
    },
    {
      question: 'Wat betekent btw verlegd bij software?',
      answer:
        'Bij zakelijke diensten van een buitenlandse leverancier kan de btw naar jou als afnemer worden verlegd. Je berekent de Nederlandse btw dan zelf en geeft deze aan. Heb je volledig recht op aftrek, dan kun je die btw in dezelfde aangifte doorgaans als voorbelasting aftrekken.',
    },
    {
      question: 'Kan ik software aftrekken als ik de KOR gebruik?',
      answer:
        'De zakelijke softwarekosten kunnen nog steeds relevant zijn voor je winstberekening, maar tijdens deelname aan de KOR trek je de btw op zakelijke kosten en investeringen in beginsel niet af.',
    },
    {
      question: 'Mag ik software aftrekken die ik met mijn privérekening betaal?',
      answer:
        'Ja, de betaalrekening bepaalt niet of de kosten zakelijk zijn. Bij een eenmanszaak kun je een daadwerkelijk zakelijke uitgave die privé is betaald in je administratie verwerken.',
    },
  ],
  content: (
    <>
      <p>
        Betaal je als zzp&apos;er iedere maand voor software, apps of online diensten? Dan kunnen
        deze kosten meestal zakelijk aftrekbaar zijn als je de diensten voor je onderneming
        gebruikt.
      </p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>boekhoudsoftware;</li>
        <li>facturatiesoftware;</li>
        <li>Adobe;</li>
        <li>Canva;</li>
        <li>Microsoft 365;</li>
        <li>Google Workspace;</li>
        <li>cloudopslag;</li>
        <li>hosting;</li>
        <li>domeinnamen;</li>
        <li>CRM-software;</li>
        <li>projectmanagementsoftware;</li>
        <li>AI-tools;</li>
        <li>videobelsoftware.</li>
      </ul>
      <p>
        Gebruik je een abonnement volledig voor je onderneming? Dan kunnen de kosten in beginsel
        volledig zakelijk zijn.
      </p>
      <p>
        Gebruik je dezelfde dienst ook privé? Dan is alleen het zakelijke deel aftrekbaar.
      </p>
      <p>
        Er is daarnaast een belangrijk aandachtspunt: veel softwarebedrijven zitten buiten
        Nederland. Daardoor kan de btw op software anders worden verwerkt dan bij een normale
        Nederlandse aankoop.
      </p>
      <p>
        In deze gids lees je hoe je software en abonnementen als zzp&apos;er verwerkt.
      </p>

      <UitgavenCta />

      <h2>Is software aftrekbaar als zzp&apos;er?</h2>
      <p>Ja, software die je voor je onderneming gebruikt kan een zakelijke kostenpost zijn.</p>
      <p>
        De algemene regel is dat kosten die je maakt voor de zakelijke belangen van je onderneming
        aftrekbaar kunnen zijn van je winst.
      </p>
      <p>
        Software is voor veel zzp&apos;ers simpelweg nodig om hun werkzaamheden uit te voeren. Denk
        aan een grafisch ontwerper met Adobe Creative Cloud, een consultant met Microsoft 365 of
        een webshop die betaalt voor hosting, e-mailmarketing en andere online diensten.
      </p>
      <p>Het zakelijke doel van de software is bepalend.</p>

      <h2>Welke software kun je zakelijk aftrekken?</h2>
      <p>
        Er zijn veel verschillende soorten software die een zakelijke functie kunnen hebben.
      </p>

      <h3>Administratie en facturatie</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>boekhoudsoftware;</li>
        <li>facturatiesoftware;</li>
        <li>urenregistratie;</li>
        <li>kassasoftware;</li>
        <li>financiële software.</li>
      </ul>

      <h3>Kantoorsoftware</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>Microsoft 365;</li>
        <li>Google Workspace;</li>
        <li>online agenda&apos;s;</li>
        <li>cloudopslag;</li>
        <li>PDF-software.</li>
      </ul>

      <h3>Ontwerp en content</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>Adobe Creative Cloud;</li>
        <li>Canva;</li>
        <li>videobewerkingssoftware;</li>
        <li>stockfoto-abonnementen;</li>
        <li>ontwerpsoftware.</li>
      </ul>

      <h3>Marketing</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>e-mailmarketingsoftware;</li>
        <li>SEO-tools;</li>
        <li>socialmediatools;</li>
        <li>advertentiesoftware;</li>
        <li>analyticssoftware.</li>
      </ul>

      <h3>Projectmanagement</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>projectmanagementsoftware;</li>
        <li>planningstools;</li>
        <li>CRM-systemen;</li>
        <li>samenwerkingstools.</li>
      </ul>

      <h3>Hosting en websites</h3>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>webhosting;</li>
        <li>domeinnamen;</li>
        <li>zakelijke e-mail;</li>
        <li>websitebouwers;</li>
        <li>webshopsoftware;</li>
        <li>plugins.</li>
      </ul>

      <h3>AI-software</h3>
      <p>
        Ook abonnementen op AI-tools kunnen zakelijke softwarekosten zijn wanneer je ze voor je
        onderneming gebruikt.
      </p>
      <p>Denk bijvoorbeeld aan AI voor:</p>
      <ul>
        <li>teksten;</li>
        <li>onderzoek;</li>
        <li>programmeren;</li>
        <li>afbeeldingen;</li>
        <li>klantenservice;</li>
        <li>data-analyse;</li>
        <li>automatisering.</li>
      </ul>
      <p>
        Het feit dat software nieuw of op AI gebaseerd is, verandert de basisregel niet: het
        zakelijke gebruik is bepalend.
      </p>

      <h2>Software volledig zakelijk gebruikt</h2>
      <p>
        Gebruik je een softwareabonnement uitsluitend voor je onderneming? Dan zijn de kosten in
        beginsel volledig zakelijk.
      </p>
      <p>
        Stel dat je als grafisch ontwerper €60 per maand betaalt voor ontwerpsoftware die je
        uitsluitend voor klantwerk gebruikt. Dan bedragen je jaarlijkse softwarekosten:
      </p>
      <p>
        <strong>€60 × 12 = €720</strong>
      </p>
      <p>
        Die €720 kan in beginsel als zakelijke kosten worden verwerkt. Als je recht hebt op
        btw-aftrek, verwerk je de aftrekbare btw afzonderlijk.
      </p>

      <h2>Software zakelijk én privé gebruikt</h2>
      <p>
        Gebruik je hetzelfde abonnement ook privé? Dan heb je te maken met gemengde kosten. Bij
        kosten met zowel een zakelijk als persoonlijk karakter is alleen het zakelijke deel
        aftrekbaar.
      </p>
      <p>
        Stel dat je een online dienst voor 80% zakelijk en 20% privé gebruikt. Dan kun je niet
        automatisch 100% van de kosten als zakelijke kosten opvoeren. Je moet een redelijke
        verdeling maken die past bij het werkelijke gebruik.
      </p>

      <h2>Voorbeeld: Canva Pro</h2>
      <p>
        Stel dat je €120 per jaar betaalt voor Canva Pro. Je gebruikt Canva uitsluitend voor:
      </p>
      <ul>
        <li>socialmediaberichten voor je onderneming;</li>
        <li>offertes;</li>
        <li>presentaties voor klanten;</li>
        <li>afbeeldingen voor je website.</li>
      </ul>
      <p>Dan heeft het abonnement een duidelijk zakelijk karakter.</p>
      <p>
        Gebruik je hetzelfde abonnement daarnaast intensief voor persoonlijke uitnodigingen,
        hobbyprojecten en andere privédoeleinden? Dan moet je ook naar dat privégebruik kijken.
      </p>

      <h2>Voorbeeld: Microsoft 365</h2>
      <p>Je betaalt €15 per maand voor Microsoft 365. Je gebruikt het voor:</p>
      <ul>
        <li>zakelijke e-mail;</li>
        <li>Excel;</li>
        <li>Word;</li>
        <li>klantdocumenten;</li>
        <li>administratie.</li>
      </ul>
      <p>Op jaarbasis betaal je:</p>
      <p>
        <strong>€15 × 12 = €180</strong>
      </p>
      <p>
        Als het abonnement volledig zakelijk wordt gebruikt, kunnen die kosten in beginsel
        volledig zakelijk zijn. Gebruik je hetzelfde abonnement ook voor privébestanden en andere
        persoonlijke doeleinden? Dan kan een verdeling nodig zijn.
      </p>

      <h2>Voorbeeld: ChatGPT of andere AI-software</h2>
      <p>Ook een abonnement op een AI-dienst kan zakelijk zijn.</p>
      <p>Stel dat je als ondernemer een AI-tool gebruikt voor:</p>
      <ul>
        <li>onderzoek;</li>
        <li>teksten;</li>
        <li>programmeren;</li>
        <li>analyses;</li>
        <li>offertes;</li>
        <li>brainstorms;</li>
        <li>klantwerk.</li>
      </ul>
      <p>Dan kan het abonnement een zakelijke kostenpost zijn.</p>
      <p>
        Gebruik je hetzelfde abonnement ook veel privé, dan moet je rekening houden met het
        privédeel. Fiscaal is een AI-abonnement dus niet fundamenteel anders dan andere software:
        het zakelijke gebruik bepaalt of en in hoeverre de kosten aftrekbaar zijn.
      </p>

      <h2>Maandelijkse softwareabonnementen direct aftrekken</h2>
      <p>
        De meeste normale softwareabonnementen hebben betrekking op een beperkte gebruiksperiode.
        Betaal je bijvoorbeeld iedere maand €30 voor een online dienst, dan zijn dat periodieke
        kosten.
      </p>
      <p>
        Je verwerkt de kosten in het jaar waarop ze betrekking hebben. Je hoeft een normaal
        maandelijks SaaS-abonnement dus niet zoals een laptop over meerdere jaren af te schrijven.
      </p>
      <p>Voorbeeld:</p>
      <ul>
        <li>
          <strong>Abonnement:</strong> €30 per maand
        </li>
        <li>
          <strong>Jaarlijkse kosten:</strong> €360
        </li>
      </ul>
      <p>
        Die abonnementskosten worden als periodieke zakelijke kosten verwerkt voor zover ze
        zakelijk zijn.
      </p>

      <h2>Jaarabonnement voor software</h2>
      <p>Betaal je één keer per jaar? Bijvoorbeeld:</p>
      <p>
        <strong>Jaarabonnement:</strong> €600
      </p>
      <p>
        Dan blijft het in principe een abonnement voor het gebruik van de software gedurende een
        bepaalde periode. Dat is iets anders dan het kopen van een bedrijfsmiddel dat je meerdere
        jaren bezit.
      </p>
      <p>
        De kosten moeten wel worden toegerekend aan de periode waarop ze betrekking hebben. Bij
        een abonnement dat precies één jaar bestrijkt, is dat doorgaans eenvoudig.
      </p>

      <h2>Software voor meerdere jaren vooruitbetalen</h2>
      <p>
        Betaal je in één keer voor meerdere jaren softwaregebruik? Dan kan het nodig zijn om de
        kosten toe te rekenen aan meerdere boekjaren.
      </p>
      <p>
        Stel dat je op 1 januari €1.800 betaalt voor drie jaar toegang tot software. Dan heeft de
        betaling betrekking op drie jaren en niet alleen op het jaar waarin je de betaling doet.
      </p>
      <p>
        De betaling van €1.800 betekent dus niet automatisch dat je het volledige bedrag als
        kosten van het eerste jaar moet behandelen.
      </p>

      <h2>Eenmalig software kopen</h2>
      <p>
        Niet alle software werkt via een abonnement. Soms koop je een licentie die je meerdere
        jaren kunt gebruiken. Dan kan de fiscale behandeling anders zijn dan bij een maandelijks
        SaaS-abonnement.
      </p>
      <p>
        De Belastingdienst maakt bij zakelijke aankopen onder andere onderscheid tussen kosten die
        betrekking hebben op één jaar en aankopen die meerdere jaren worden gebruikt.
      </p>
      <p>
        Is een aankoop goedkoper dan €450 of heeft deze betrekking op één jaar, dan kunnen de
        kosten in beginsel in één keer worden afgetrokken.
      </p>
      <p>
        Is een aankoop €450 of duurder en gebruik je deze langer dan één jaar, dan kunnen de
        regels voor bedrijfsmiddelen en afschrijving relevant worden.
      </p>
      <p>
        Kijk bij een dure permanente softwarelicentie dus niet automatisch naar dezelfde
        verwerking als bij een abonnement van €20 per maand.
      </p>

      <h2>Domeinnaam aftrekbaar als zzp&apos;er</h2>
      <p>
        Gebruik je een domeinnaam voor je onderneming? Dan kunnen de registratie- en
        verlengingskosten zakelijke kosten zijn.
      </p>
      <p>Bijvoorbeeld:</p>
      <p>
        <strong>Domeinnaam:</strong> €15 per jaar
      </p>
      <p>Gebruik je het domein voor je:</p>
      <ul>
        <li>bedrijfswebsite;</li>
        <li>zakelijke e-mail;</li>
        <li>webshop;</li>
        <li>portfolio;</li>
      </ul>
      <p>
        dan heeft de uitgave een duidelijk zakelijk karakter. Domeinkosten zijn bovendien vaak
        terugkerende jaarlijkse uitgaven.
      </p>

      <h2>Webhosting aftrekbaar als zzp&apos;er</h2>
      <p>Ook hosting kan een zakelijke kostenpost zijn. Denk aan:</p>
      <ul>
        <li>websitehosting;</li>
        <li>VPS;</li>
        <li>cloudservers;</li>
        <li>databasehosting;</li>
        <li>e-mailhosting;</li>
        <li>CDN-diensten.</li>
      </ul>
      <p>
        Gebruik je deze diensten voor je onderneming, dan kunnen de kosten in beginsel zakelijk
        worden verwerkt. Hosting is eveneens een goed voorbeeld van een terugkerende kostenpost
        die makkelijk wordt vergeten omdat bedragen automatisch maandelijks of jaarlijks worden
        afgeschreven.
      </p>

      <h2>Boekhoudsoftware aftrekbaar</h2>
      <p>
        Betaal je voor een boekhoudprogramma om je zakelijke administratie te voeren? Dan heeft
        dat abonnement een duidelijk verband met je onderneming. De abonnementskosten kunnen
        daardoor in beginsel zakelijke kosten zijn.
      </p>
      <p>Hetzelfde kan gelden voor andere administratieve software zoals:</p>
      <ul>
        <li>facturatiesoftware;</li>
        <li>urenregistratie;</li>
        <li>CRM;</li>
        <li>kassasoftware;</li>
        <li>salarissoftware.</li>
      </ul>

      <h2>Software betaald met je privérekening</h2>
      <p>
        Veel online abonnementen worden met een persoonlijke creditcard of privérekening betaald.
        Dat maakt de kosten niet automatisch privé.
      </p>
      <p>
        Stel dat je Adobe volledig voor je onderneming gebruikt, maar het abonnement wordt iedere
        maand van je privérekening afgeschreven. Het zakelijke karakter van Adobe verandert
        daardoor niet.
      </p>
      <p>
        Bij een eenmanszaak kun je een zakelijke kostenpost die privé is betaald in je zakelijke
        administratie verwerken.
      </p>
      <p>
        Lees verder:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die? →
        </TextLink>
      </p>

      <h2>Privésoftware zakelijk betalen</h2>
      <p>
        Andersom geldt hetzelfde. Betaal je Netflix vanaf je zakelijke rekening? Dan wordt Netflix
        daardoor niet automatisch zakelijke software.
      </p>
      <p>
        Een privé-uitgave wordt niet zakelijk doordat het geld vanaf je zakelijke rekening komt.
        Gebruik je een softwaredienst uitsluitend privé, dan hoort deze niet als zakelijke
        kostenpost in je administratie.
      </p>
      <p>
        Lees:{' '}
        <TextLink href="/blogs/privekosten-zakelijk-betalen">
          Privékosten zakelijk betalen: wat mag wel en niet? →
        </TextLink>
      </p>

      <h2>Btw op software aftrekken</h2>
      <p>
        Ben je ondernemer voor de btw en gebruik je software voor activiteiten waarvoor je recht
        hebt op aftrek van voorbelasting? Dan kan de btw op zakelijke softwarekosten aftrekbaar
        zijn.
      </p>
      <p>Stel dat een Nederlandse softwareleverancier factureert:</p>
      <ul>
        <li>
          <strong>Software:</strong> €100
        </li>
        <li>
          <strong>21% btw:</strong> €21
        </li>
        <li>
          <strong>Totaal:</strong> €121
        </li>
      </ul>
      <p>
        Gebruik je de software volledig voor btw-belaste zakelijke activiteiten en voldoe je aan
        de overige voorwaarden? Dan kun je de €21 btw in beginsel als voorbelasting aftrekken.
        Voor je winstberekening zijn de zakelijke kosten dan normaal gesproken €100.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het? →
        </TextLink>
      </p>

      <h2>Buitenlandse software: let op de btw</h2>
      <p>
        Hier gaat het bij software regelmatig mis. Veel populaire softwarebedrijven zijn niet in
        Nederland gevestigd.
      </p>
      <p>Je kunt bijvoorbeeld een factuur ontvangen van een onderneming uit:</p>
      <ul>
        <li>Ierland;</li>
        <li>Duitsland;</li>
        <li>Frankrijk;</li>
        <li>Verenigde Staten;</li>
        <li>Verenigd Koninkrijk;</li>
        <li>andere landen.</li>
      </ul>
      <p>
        De btw op zo&apos;n factuur kan anders worden behandeld dan bij een Nederlandse
        softwareleverancier. Je moet daarom altijd controleren:
      </p>
      <ul>
        <li>waar de leverancier is gevestigd;</li>
        <li>of jouw btw-identificatienummer op de factuur staat;</li>
        <li>of er Nederlandse of buitenlandse btw is berekend;</li>
        <li>of op de factuur staat dat de btw is verlegd.</li>
      </ul>

      <h2>Software uit een ander EU-land</h2>
      <p>
        Neem je als Nederlandse ondernemer een dienst af van een ondernemer uit een ander EU-land?
        Dan wordt de btw bij zakelijke diensten vaak naar jou verlegd.
      </p>
      <p>
        De leverancier brengt dan geen btw in rekening. Je berekent zelf de Nederlandse btw en
        geeft deze aan in je btw-aangifte.
      </p>
      <p>
        Heb je volledig recht op aftrek van voorbelasting omdat je de software gebruikt voor
        btw-belaste activiteiten? Dan kun je de berekende btw in dezelfde aangifte weer als
        voorbelasting aftrekken. Per saldo kan het btw-effect daardoor €0 zijn.
      </p>
      <p>
        Maar je moet de transactie <strong>wel correct in je btw-aangifte verwerken</strong>.
      </p>

      <h2>Voorbeeld: software uit Ierland</h2>
      <p>
        Stel dat je een zakelijke softwaredienst afneemt van een Ierse onderneming. Factuur:
      </p>
      <ul>
        <li>
          <strong>Software:</strong> €100
        </li>
        <li>
          <strong>Btw op factuur:</strong> €0
        </li>
        <li>
          <strong>Btw verlegd</strong>
        </li>
      </ul>
      <p>
        Als de dienst onder de normale B2B-regels valt, bereken je zelf de Nederlandse btw. Bij
        21% is dat:
      </p>
      <p>
        <strong>€100 × 21% = €21</strong>
      </p>
      <p>
        Je geeft de €21 aan als verschuldigde btw. Heb je volledig recht op aftrek? Dan neem je
        dezelfde €21 ook als voorbelasting op.
      </p>
      <p>Per saldo:</p>
      <p>
        <strong>€21 verschuldigd − €21 voorbelasting = €0</strong>
      </p>
      <p>
        Dat betekent niet dat je de factuur kunt negeren. De verlegde btw moet wel correct in je
        aangifte terechtkomen.
      </p>

      <h2>Software uit de Verenigde Staten of ander land buiten de EU</h2>
      <p>
        Ook bij diensten van leveranciers buiten de EU wordt de btw vaak naar jou als Nederlandse
        ondernemer verlegd. De Belastingdienst geeft aan dat diensten die je afneemt van een
        ondernemer buiten de EU meestal met verlegde btw in Nederland moeten worden aangegeven.
      </p>
      <p>
        Heb je recht op aftrek van voorbelasting? Dan kun je die verlegde btw doorgaans in dezelfde
        aangifte weer aftrekken. Ook hier kan het btw-effect per saldo dus nihil zijn, terwijl je
        de transactie wel moet aangeven.
      </p>

      <h2>Buitenlandse btw op je softwarefactuur</h2>
      <p>
        Soms staat er buitenlandse btw op een softwarefactuur. Die kun je niet zomaar als
        Nederlandse voorbelasting in je Nederlandse btw-aangifte aftrekken.
      </p>
      <p>Controleer eerst waarom de leverancier buitenlandse btw heeft berekend. Misschien:</p>
      <ul>
        <li>heeft de leverancier je als particulier behandeld;</li>
        <li>ontbreekt je btw-identificatienummer;</li>
        <li>gelden bijzondere btw-regels;</li>
        <li>moet de factuur worden gecorrigeerd.</li>
      </ul>
      <p>
        Voer daarom bij zakelijke softwareleveranciers waar mogelijk je correcte bedrijfs- en
        btw-gegevens in.
      </p>

      <h2>Waarom je btw-nummer invullen bij softwareleveranciers belangrijk is</h2>
      <p>
        Bij buitenlandse B2B-software kan je btw-identificatienummer belangrijk zijn voor de
        juiste facturatie. Zonder de juiste zakelijke gegevens kan een leverancier je bijvoorbeeld
        als particuliere klant behandelen.
      </p>
      <p>Controleer daarom bij zakelijke SaaS-abonnementen je accountgegevens:</p>
      <ul>
        <li>bedrijfsnaam;</li>
        <li>adres;</li>
        <li>btw-identificatienummer;</li>
        <li>factuurgegevens.</li>
      </ul>
      <p>Dat voorkomt dat je later tientallen softwarefacturen moet corrigeren.</p>

      <h2>Software en de KOR</h2>
      <p>
        Doe je mee aan de kleineondernemersregeling (KOR)? Dan trek je de btw over je zakelijke
        kosten en investeringen niet af. Dat geldt ook voor software.
      </p>
      <p>Betaal je bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Software excl. btw:</strong> €50
        </li>
        <li>
          <strong>Btw:</strong> €10,50
        </li>
        <li>
          <strong>Totaal:</strong> €60,50
        </li>
      </ul>
      <p>
        dan kun je de €10,50 tijdens deelname aan de KOR in beginsel niet als voorbelasting
        aftrekken.
      </p>
      <p>
        Let extra op bij buitenlandse software. Ook ondernemers die de KOR toepassen kunnen in
        bepaalde situaties te maken krijgen met een incidentele btw-aangifte, bijvoorbeeld bij
        verlegde btw.
      </p>
      <p>Ga dus niet uit van:</p>
      <blockquote className="border-l-4 border-slate-300 pl-4 italic text-slate-600">
        Ik zit in de KOR, dus buitenlandse software heeft nooit gevolgen voor mijn
        btw-administratie.
      </blockquote>

      <h2>Gratis software versus betaalde software</h2>
      <p>
        Dat een softwarepakket gratis is, heeft uiteraard geen kostenaftrek tot gevolg: je hebt
        immers geen kosten gemaakt. Maar veel diensten werken met:
      </p>
      <ul>
        <li>freemium;</li>
        <li>betaalde upgrades;</li>
        <li>extra opslag;</li>
        <li>premium functies;</li>
        <li>gebruikskosten.</li>
      </ul>
      <p>
        De daadwerkelijk zakelijke bedragen die je betaalt kunnen als zakelijke kosten worden
        verwerkt wanneer aan de voorwaarden wordt voldaan.
      </p>

      <h2>App Store- en Google Play-abonnementen</h2>
      <p>
        Ook zakelijke apps kunnen aftrekbaar zijn. Het kan administratief alleen lastiger zijn
        omdat je factuur of betaalbewijs via een appstore loopt.
      </p>
      <p>Controleer daarom:</p>
      <ul>
        <li>wie juridisch de leverancier is;</li>
        <li>welke btw op het bewijsstuk staat;</li>
        <li>of je zakelijke factuurgegevens correct zijn;</li>
        <li>of de app daadwerkelijk zakelijk wordt gebruikt.</li>
      </ul>
      <p>
        Alleen een afschrijving met “Apple” of “Google” op je bankrekening is minder informatief
        dan een correcte factuur waarop de dienst duidelijk staat.
      </p>

      <h2>Software voor klanten doorbelasten</h2>
      <p>Soms koop je software specifiek voor een klant of project. Bijvoorbeeld:</p>
      <ul>
        <li>hosting;</li>
        <li>licentie;</li>
        <li>stockfoto;</li>
        <li>plugin;</li>
        <li>cloudcapaciteit.</li>
      </ul>
      <p>
        Ook dan kunnen de kosten zakelijk zijn. Breng je deze vervolgens door aan je klant, dan
        moet je daarnaast kijken naar de btw-behandeling van het bedrag dat je zelf aan de klant
        factureert.
      </p>
      <p>
        Het feit dat je een kostenpost doorbelast betekent niet automatisch dat de oorspronkelijke
        uitgave uit je administratie verdwijnt.
      </p>

      <h2>Hoeveel geef je eigenlijk uit aan software?</h2>
      <p>
        Software is gevaarlijk eenvoudig om te onderschatten. Stel dat je deze abonnementen hebt:
      </p>
      <ul>
        <li>
          <strong>Boekhoudsoftware:</strong> €25 per maand
        </li>
        <li>
          <strong>Adobe:</strong> €65 per maand
        </li>
        <li>
          <strong>Google Workspace:</strong> €12 per maand
        </li>
        <li>
          <strong>AI-tool:</strong> €25 per maand
        </li>
        <li>
          <strong>Hosting:</strong> €20 per maand
        </li>
        <li>
          <strong>Projectmanagement:</strong> €15 per maand
        </li>
      </ul>
      <p>Samen:</p>
      <p>
        <strong>€162 per maand</strong>
      </p>
      <p>Op jaarbasis:</p>
      <p>
        <strong>€1.944</strong>
      </p>
      <p>
        En dan zijn jaarlijkse domeinen, plugins en andere diensten nog niet meegerekend. Daarom is
        het verstandig om niet alleen losse softwarefacturen te bewaren, maar ook te weten hoeveel
        je structureel aan abonnementen uitgeeft.
      </p>

      <h2>Controleer abonnementen regelmatig</h2>
      <p>
        Softwarekosten hebben één vervelende eigenschap: ze lopen vaak automatisch door. Een
        abonnement van €15 per maand voelt klein. Maar:
      </p>
      <p>
        <strong>€15 × 12 = €180 per jaar</strong>
      </p>
      <p>
        Heb je tien vergelijkbare abonnementen, dan gaat het al snel om duizenden euro&apos;s per
        jaar. Controleer daarom bijvoorbeeld ieder kwartaal:
      </p>
      <ul>
        <li>welke software je betaalt;</li>
        <li>welke abonnementen je daadwerkelijk gebruikt;</li>
        <li>welke diensten dubbel werk doen;</li>
        <li>welke abonnementen je kunt opzeggen;</li>
        <li>welke prijzen zijn verhoogd.</li>
      </ul>
      <p>
        Uitgaven bijhouden helpt dus niet alleen bij je belastingaangifte. Het helpt ook om je
        bedrijf goedkoper te runnen.
      </p>

      <h2>Maandelijkse versus jaarlijkse betaling</h2>
      <p>Veel softwarebedrijven geven korting wanneer je jaarlijks betaalt. Stel:</p>
      <ul>
        <li>
          <strong>Maandelijks:</strong> €20 × 12 = €240
        </li>
        <li>
          <strong>Jaarlijks:</strong> €200
        </li>
      </ul>
      <p>
        Dan bespaar je: <strong>€40 per jaar</strong>
      </p>
      <p>
        Maar een jaarabonnement maakt je ook minder flexibel. Bij zakelijke software kun je
        daarom niet alleen kijken naar de fiscale aftrekbaarheid, maar ook naar:
      </p>
      <ul>
        <li>werkelijke behoefte;</li>
        <li>prijs per jaar;</li>
        <li>opzegbaarheid;</li>
        <li>alternatieven.</li>
      </ul>
      <p>Aftrekbaar betekent immers niet gratis.</p>

      <h2>Softwarekosten bijhouden in je administratie</h2>
      <p>Leg per abonnement bijvoorbeeld vast:</p>
      <ul>
        <li>leverancier;</li>
        <li>omschrijving;</li>
        <li>categorie;</li>
        <li>factuurdatum;</li>
        <li>bedrag exclusief btw;</li>
        <li>btw;</li>
        <li>totaalbedrag;</li>
        <li>betaalfrequentie;</li>
        <li>eventueel einddatum;</li>
        <li>of de leverancier Nederlands of buitenlands is.</li>
      </ul>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Adobe Creative Cloud
        </li>
        <li>
          <strong>Categorie</strong> — Software &amp; abonnementen
        </li>
        <li>
          <strong>Excl. btw</strong> — €60
        </li>
        <li>
          <strong>Btw</strong> — €12,60
        </li>
        <li>
          <strong>Totaal</strong> — €72,60
        </li>
        <li>
          <strong>Frequentie</strong> — Maandelijks
        </li>
      </ul>
      <p>
        Dat maakt het veel makkelijker om later te zien hoeveel vaste kosten je onderneming heeft.
      </p>

      <h2>Software en abonnementen bijhouden met FactuurBaas</h2>
      <p>
        Software is precies het soort kostenpost dat makkelijk uit beeld verdwijnt. Je betaalt
        iedere maand €10 hier, €30 daar en €60 voor een ander abonnement.
      </p>
      <p>
        Met FactuurBaas kun je zakelijke software als terugkerende uitgave registreren.
        Bijvoorbeeld:
      </p>
      <ul>
        <li>
          <strong>Omschrijving</strong> — Zakelijke software
        </li>
        <li>
          <strong>Leverancier</strong> — Softwareleverancier
        </li>
        <li>
          <strong>Categorie</strong> — Software &amp; abonnementen
        </li>
        <li>
          <strong>Bedrag</strong> — €50 per maand
        </li>
        <li>
          <strong>Terugkerend</strong> — Maandelijks
        </li>
      </ul>
      <p>
        Daardoor hoef je niet iedere maand opnieuw dezelfde kostenpost handmatig aan te maken. Je
        softwarekosten worden meegenomen in je overzicht van geregistreerde zakelijke uitgaven.
      </p>
      <p>Zo zie je bijvoorbeeld:</p>
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
        Dat geeft een veel beter beeld dan alleen kijken naar hoeveel je factureert.
      </p>

      <UitgavenCta
        title="Houd je abonnementen en vaste kosten bij"
        text="Registreer software één keer als terugkerende zakelijke uitgave en houd je vaste bedrijfskosten overzichtelijk."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Alle software automatisch zakelijk boeken</h3>
      <p>
        Een abonnement is alleen zakelijk voor zover het betrekking heeft op je onderneming.
      </p>

      <h3>Privégebruik vergeten</h3>
      <p>
        Gebruik je een dienst ook privé? Dan moet je rekening houden met het privédeel.
      </p>

      <h3>Buitenlandse softwarefacturen negeren</h3>
      <p>
        Op buitenlandse SaaS kan btw-verlegging van toepassing zijn. Een factuur zonder btw
        betekent niet automatisch dat er niets in je btw-aangifte hoeft te gebeuren.
      </p>

      <h3>Buitenlandse btw als Nederlandse btw aftrekken</h3>
      <p>
        Buitenlandse btw kun je niet zomaar als Nederlandse voorbelasting in je Nederlandse
        btw-aangifte verwerken.
      </p>

      <h3>Geen btw-nummer invullen</h3>
      <p>
        Daardoor kan een buitenlandse leverancier je verkeerd behandelen voor de btw.
      </p>

      <h3>Abonnementen vergeten op te zeggen</h3>
      <p>
        Kleine maandbedragen kunnen samen duizenden euro&apos;s per jaar kosten.
      </p>

      <h3>Een permanente dure softwarelicentie behandelen als maandabonnement</h3>
      <p>
        Bij een aanschaf die meerdere jaren wordt gebruikt kan de fiscale verwerking anders zijn
        dan bij periodieke SaaS-kosten.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Is software aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja, software die je voor je onderneming gebruikt kan een zakelijke kostenpost zijn.
        Gebruik je de software ook privé, dan is alleen het zakelijke deel aftrekbaar.
      </p>

      <h3>Is een softwareabonnement volledig aftrekbaar?</h3>
      <p>
        Als het abonnement volledig voor zakelijke doeleinden wordt gebruikt, kunnen de kosten in
        beginsel volledig zakelijk zijn. Bij gemengd gebruik moet je rekening houden met het
        privédeel.
      </p>

      <h3>Is ChatGPT aftrekbaar als zzp&apos;er?</h3>
      <p>
        Een betaald AI-abonnement kan een zakelijke kostenpost zijn als je het voor je onderneming
        gebruikt. De fiscale behandeling volgt dezelfde basisprincipes als bij andere zakelijke
        software.
      </p>

      <h3>Is Adobe aftrekbaar als zzp&apos;er?</h3>
      <p>
        Gebruik je Adobe-software voor je onderneming, bijvoorbeeld voor ontwerp, fotografie of
        videobewerking, dan kunnen de zakelijke abonnementskosten aftrekbaar zijn.
      </p>

      <h3>Is Canva aftrekbaar als zzp&apos;er?</h3>
      <p>
        Ja, voor zover je Canva zakelijk gebruikt kunnen de abonnementskosten zakelijke kosten
        zijn.
      </p>

      <h3>Zijn hosting en domeinnamen aftrekbaar?</h3>
      <p>
        Hosting en domeinkosten die betrekking hebben op je onderneming kunnen in beginsel
        zakelijke kosten zijn.
      </p>

      <h3>Kan ik btw op software aftrekken?</h3>
      <p>
        Als je recht hebt op aftrek van voorbelasting en de software voor btw-belaste activiteiten
        gebruikt, kan de btw aftrekbaar zijn. Bij buitenlandse software kan btw-verlegging van
        toepassing zijn.
      </p>

      <h3>Wat betekent btw verlegd bij software?</h3>
      <p>
        Bij zakelijke diensten van een buitenlandse leverancier kan de btw naar jou als afnemer
        worden verlegd. Je berekent de Nederlandse btw dan zelf en geeft deze aan. Heb je volledig
        recht op aftrek, dan kun je die btw in dezelfde aangifte doorgaans als voorbelasting
        aftrekken.
      </p>

      <h3>Kan ik software aftrekken als ik de KOR gebruik?</h3>
      <p>
        De zakelijke softwarekosten kunnen nog steeds relevant zijn voor je winstberekening, maar
        tijdens deelname aan de KOR trek je de btw op zakelijke kosten en investeringen in
        beginsel niet af.
      </p>

      <h3>Mag ik software aftrekken die ik met mijn privérekening betaal?</h3>
      <p>
        Ja, de betaalrekening bepaalt niet of de kosten zakelijk zijn. Bij een eenmanszaak kun je
        een daadwerkelijk zakelijke uitgave die privé is betaald in je administratie verwerken.
      </p>

      <h2>Kort samengevat</h2>
      <p>Software en abonnementen kunnen voor zzp&apos;ers zakelijke kosten zijn.</p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>software voor je onderneming kan aftrekbaar zijn;</li>
        <li>bij privégebruik is alleen het zakelijke deel aftrekbaar;</li>
        <li>normale maand- en jaarabonnementen zijn periodieke zakelijke kosten;</li>
        <li>
          bij dure software die je meerdere jaren gebruikt kan de verwerking anders zijn;
        </li>
        <li>btw op zakelijke software kan onder voorwaarden aftrekbaar zijn;</li>
        <li>bij buitenlandse software is btw vaak verlegd;</li>
        <li>
          buitenlandse btw mag je niet zomaar als Nederlandse voorbelasting aftrekken;
        </li>
        <li>
          onder de KOR trek je btw op zakelijke software in beginsel niet af;
        </li>
        <li>
          software en abonnementen zijn bij uitstek terugkerende kosten die je structureel wilt
          bijhouden.
        </li>
      </ul>
      <p>
        En vergeet vooral niet naar het totaal te kijken. Tien kleine abonnementen kunnen samen
        een flinke jaarlijkse kostenpost worden.
      </p>

      <UitgavenCta
        title="Houd je software en abonnementen gratis bij met FactuurBaas"
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
