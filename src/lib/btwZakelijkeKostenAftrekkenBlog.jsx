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
  'internet-aftrekbaar-zzp',
  'software-abonnementen-aftrekken-zzp',
  'reiskosten-aftrekken-zzp',
  'werkkleding-aftrekbaar-zzp',
  'werkruimte-thuis-aftrekbaar-zzp',
];

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const UitgavenCta = ({
  title = 'Houd btw op je zakelijke uitgaven bij',
  text = 'Registreer zakelijke kosten en btw naast je facturen en zie hoeveel btw je op je uitgaven hebt vastgelegd.',
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

export const btwZakelijkeKostenArticle = {
  slug: 'btw-zakelijke-kosten-aftrekken',
  relatedSlugs: CLUSTER_RELATED.filter((s) => s !== 'btw-zakelijke-kosten-aftrekken').concat([
    'btw-factuur-zzp',
  ]),
  metaTitle: "Btw aftrekken van zakelijke kosten als zzp'er: zo werkt het",
  title: 'Btw aftrekken van zakelijke kosten: hoe werkt het?',
  excerpt:
    "Btw op zakelijke kosten aftrekken? Lees wanneer je als zzp'er btw mag aftrekken als voorbelasting, welke btw niet aftrekbaar is en hoe je dit bijhoudt.",
  keywords:
    'btw zakelijke kosten aftrekken, btw aftrekken zzp, btw aftrekken zakelijke kosten, btw terugvragen zzp, voorbelasting zzp, btw op kosten aftrekken, btw zakelijke uitgaven, btw terugvragen zakelijke kosten',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/BTW%20aftrekken%20van%20zakelijke%20kosten.jpg',
    alt: 'Btw aftrekken van zakelijke kosten als zzp’er',
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: "Kan ik als zzp'er btw op zakelijke kosten aftrekken?",
      answer:
        'Ja, als je recht hebt op aftrek van voorbelasting en aan de voorwaarden voldoet. De aankoop moet onder andere worden gebruikt voor activiteiten waarvoor recht op btw-aftrek bestaat en je moet in beginsel beschikken over een correcte factuur.',
    },
    {
      question: 'Wat betekent btw aftrekken als voorbelasting?',
      answer:
        'Voorbelasting is de btw die leveranciers aan jou in rekening brengen over zakelijke inkopen, kosten en investeringen. Als deze btw aftrekbaar is, trek je die in je btw-aangifte af van de btw die je zelf verschuldigd bent.',
    },
    {
      question: 'Mag ik btw op software aftrekken?',
      answer:
        'Gebruik je software zakelijk voor activiteiten waarvoor je recht hebt op btw-aftrek en is de btw correct aan je in rekening gebracht, dan kan deze btw in beginsel als voorbelasting aftrekbaar zijn. Bij buitenlandse software kunnen andere btw-regels gelden.',
    },
    {
      question: 'Mag ik btw op een zakelijke lunch aftrekken?',
      answer:
        'De btw op eten en drinken dat ter plaatse in een horecagelegenheid wordt genuttigd, is in beginsel niet aftrekbaar als voorbelasting. Voor de inkomstenbelasting kunnen zakelijke horecakosten onder andere regels vallen.',
    },
    {
      question: 'Mag ik btw aftrekken als ik meedoe aan de KOR?',
      answer:
        'Als je deelneemt aan de KOR, breng je in beginsel geen btw in rekening aan klanten en kun je ook geen btw op zakelijke kosten en investeringen als voorbelasting aftrekken.',
    },
    {
      question: 'Trek ik zakelijke kosten af inclusief of exclusief btw?',
      answer:
        'Kun je de btw als voorbelasting aftrekken, dan trek je de zakelijke kosten voor je winstberekening normaal gesproken exclusief btw af. Kun je de btw niet aftrekken, dan kan de niet-aftrekbare btw onderdeel zijn van de zakelijke kosten.',
    },
    {
      question: 'Kan ik btw aftrekken voordat ik de factuur heb betaald?',
      answer:
        'Bij het factuurstelsel kun je de btw verwerken in het aangiftetijdvak waarin deze aan jou in rekening is gebracht en je de factuur hebt ontvangen. Je hoeft daarvoor niet te wachten totdat je de leverancier daadwerkelijk hebt betaald.',
    },
  ],
  content: (
    <>
      <p>
        Als zzp&apos;er betaal je regelmatig btw over zakelijke aankopen. Denk aan software,
        kantoorartikelen, apparatuur, marketing of advies.
      </p>
      <p>
        Die btw hoef je niet altijd zelf te dragen. Als je aan de voorwaarden voldoet, mag je de btw
        op zakelijke kosten <strong>aftrekken als voorbelasting</strong> in je btw-aangifte.
      </p>
      <p>
        Maar wanneer mag dat precies? En wat is het verschil tussen zakelijke kosten aftrekken van
        je winst en btw terugvragen?
      </p>
      <p>In deze gids leggen we het stap voor stap uit.</p>

      <UitgavenCta />

      <h2>Wat betekent btw aftrekken?</h2>
      <p>Als ondernemer bereken je vaak btw aan je klanten.</p>
      <p>
        Tegelijkertijd betaal je zelf btw wanneer je producten of diensten voor je onderneming
        koopt.
      </p>
      <p>
        De btw die leveranciers aan jou in rekening brengen, wordt <strong>voorbelasting</strong>{' '}
        genoemd.
      </p>
      <p>
        Als je aan de voorwaarden voldoet, trek je deze voorbelasting in je btw-aangifte af van de
        btw die je zelf over je omzet verschuldigd bent.
      </p>
      <p>Een eenvoudig voorbeeld:</p>
      <p>Je hebt in een kwartaal:</p>
      <ul>
        <li>
          <strong>Btw berekend aan klanten:</strong> €2.100
        </li>
        <li>
          <strong>Aftrekbare btw op zakelijke uitgaven:</strong> €600
        </li>
      </ul>
      <p>Dan is het verschil:</p>
      <p>
        <strong>€2.100 − €600 = €1.500</strong>
      </p>
      <p>
        In dit vereenvoudigde voorbeeld betaal je dus €1.500 btw in plaats van €2.100. Daarom is
        het belangrijk om niet alleen de btw op je verkoopfacturen bij te houden, maar ook de btw
        die je op zakelijke uitgaven betaalt.
      </p>

      <h2>Wanneer mag je btw op zakelijke kosten aftrekken?</h2>
      <p>
        Volgens de Belastingdienst mag je btw op zakelijke uitgaven aftrekken als aan de voorwaarden
        voor aftrek van voorbelasting wordt voldaan.
      </p>
      <p>Belangrijk is onder andere dat:</p>
      <ul>
        <li>de goederen of diensten daadwerkelijk aan jou zijn geleverd;</li>
        <li>
          je beschikt over een factuur waarop btw staat en die aan de factuureisen voldoet;
        </li>
        <li>je de aankoop gebruikt voor omzet waarvoor recht op btw-aftrek bestaat.</li>
      </ul>
      <p>
        Gebruik je een aankoop voor vrijgestelde omzet? Dan kun je de btw die daarop betrekking heeft
        in principe niet als voorbelasting aftrekken.
      </p>
      <p>
        Heb je zowel belaste als vrijgestelde omzet, dan kan het zijn dat je de btw maar gedeeltelijk
        kunt aftrekken.
      </p>

      <h2>Voorbeeld: btw aftrekken op software</h2>
      <p>Stel dat je een zakelijke softwarelicentie koopt.</p>
      <p>De factuur vermeldt:</p>
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
        Je gebruikt de software volledig voor je onderneming en voor activiteiten waarvoor je recht
        hebt op aftrek van voorbelasting.
      </p>
      <p>
        Dan kun je de €21 btw in principe als voorbelasting opnemen in je btw-aangifte. Voor je
        winstberekening zijn de zakelijke kosten dan normaal gesproken €100, omdat je de €21 btw via
        je btw-aangifte verwerkt.
      </p>
      <p>Dit laat meteen een belangrijk verschil zien.</p>

      <h2>Zakelijke kosten aftrekken en btw aftrekken zijn niet hetzelfde</h2>
      <p>Deze twee worden regelmatig door elkaar gehaald.</p>

      <h3>Zakelijke kosten aftrekken</h3>
      <p>Zakelijke kosten trek je af van je opbrengsten bij het bepalen van je winst.</p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omzet:</strong> €50.000
        </li>
        <li>
          <strong>Zakelijke kosten:</strong> €10.000
        </li>
        <li>
          <strong>Winst vóór andere fiscale correcties:</strong> €40.000
        </li>
      </ul>
      <p>
        Dat heeft dus betrekking op je winst en uiteindelijk onder andere op de inkomstenbelasting.
      </p>

      <h3>Btw aftrekken</h3>
      <p>
        Btw op zakelijke inkopen trek je, wanneer je daar recht op hebt, als{' '}
        <strong>voorbelasting</strong> af in je btw-aangifte.
      </p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Btw over verkopen:</strong> €5.000
        </li>
        <li>
          <strong>Aftrekbare voorbelasting:</strong> €1.200
        </li>
        <li>
          <strong>Verschil:</strong> €3.800
        </li>
      </ul>
      <p>
        Het zijn dus twee verschillende fiscale processen. Een kostenpost kan bovendien zakelijk
        aftrekbaar zijn voor de winst, terwijl de btw erop niet aftrekbaar is.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/zakelijke-kosten-zzp">
          Zakelijke kosten zzp: welke kosten mag je aftrekken?
        </TextLink>
      </p>

      <h2>Welke btw op zakelijke kosten kun je vaak aftrekken?</h2>
      <p>
        Als je aan de voorwaarden voldoet, kan btw op allerlei zakelijke inkopen, kosten en
        investeringen als voorbelasting aftrekbaar zijn.
      </p>
      <p>Denk bijvoorbeeld aan btw op:</p>
      <ul>
        <li>zakelijke software;</li>
        <li>kantoorartikelen;</li>
        <li>apparatuur;</li>
        <li>marketingdiensten;</li>
        <li>hosting;</li>
        <li>zakelijke advieskosten;</li>
        <li>materiaal;</li>
        <li>inventaris;</li>
        <li>bepaalde zakelijke diensten.</li>
      </ul>
      <p>
        Het gaat niet alleen om kleine dagelijkse uitgaven. Ook btw op investeringen kan aftrekbaar
        zijn wanneer aan de voorwaarden wordt voldaan.
      </p>
      <p>
        Het belangrijkste is dus niet de categorie op zichzelf, maar onder andere{' '}
        <strong>waarvoor je de aankoop gebruikt</strong> en of je aan de voorwaarden voor
        btw-aftrek voldoet.
      </p>

      <h2>Welke btw mag je niet aftrekken?</h2>
      <p>
        Niet alle btw die je als ondernemer betaalt, mag je als voorbelasting aftrekken. De
        Belastingdienst noemt verschillende situaties waarin btw niet aftrekbaar is.
      </p>

      <h3>Btw op privéaankopen</h3>
      <p>
        Koop je iets uitsluitend voor privégebruik? Dan kun je de btw niet aftrekken omdat je
        toevallig ondernemer bent. Een privéaankoop wordt niet zakelijk doordat je deze met je
        zakelijke rekening betaalt.
      </p>

      <h3>Btw op kosten voor vrijgestelde omzet</h3>
      <p>
        Gebruik je een aankoop voor omzet die is vrijgesteld van btw? Dan kun je de btw die op die
        aankoop betrekking heeft in principe niet aftrekken. Dit kan bijvoorbeeld relevant zijn voor
        ondernemers die activiteiten verrichten waarvoor een btw-vrijstelling geldt.
      </p>

      <h3>Btw op eten en drinken in de horeca</h3>
      <p>
        Een belangrijke uitzondering is eten en drinken in de horeca. De btw op eten en drinken dat
        je ter plaatse in een horecagelegenheid nuttigt, is in beginsel niet aftrekbaar als
        voorbelasting.
      </p>
      <p>
        Dat kan dus ook gelden wanneer de lunch of het diner een zakelijk karakter heeft. Dit laat
        goed zien waarom: <strong>“zakelijke kosten” niet hetzelfde is als “btw aftrekbaar”</strong>
        .
      </p>

      <h3>Giften, relatiegeschenken en personeelsvoorzieningen</h3>
      <p>
        Voor giften, relatiegeschenken en personeelsvoorzieningen gelden aparte btw-regels. Bij
        bepaalde uitgaven kan de btw-aftrek beperkt zijn. De Belastingdienst hanteert hierbij onder
        andere een grens van €227 per persoon per jaar voor bepaalde voorzieningen en geschenken.
      </p>
      <p>
        Heb je hiermee te maken, controleer dan de specifieke regels voordat je de btw als
        voorbelasting aftrekt.
      </p>

      <h2>Wat als je iets zakelijk én privé gebruikt?</h2>
      <p>
        Veel zzp&apos;ers gebruiken bepaalde aankopen zowel zakelijk als privé. Denk aan:
      </p>
      <ul>
        <li>een telefoon;</li>
        <li>een laptop;</li>
        <li>een auto;</li>
        <li>bepaalde abonnementen;</li>
        <li>andere apparatuur.</li>
      </ul>
      <p>
        Voor de btw gelden regels voor gemengd gebruik. Je kunt niet zonder meer btw aftrekken over
        een aankoop voor zover deze uitsluitend privé wordt gebruikt.
      </p>
      <p>
        Afhankelijk van de situatie kan de btw direct worden gesplitst tussen zakelijk en
        privégebruik of kan later een correctie voor privégebruik nodig zijn.
      </p>
      <p>
        Gebruik je bijvoorbeeld een bedrijfsmiddel deels privé, controleer dan welke btw-regels
        specifiek voor dat bedrijfsmiddel gelden. Voor auto&apos;s gelden bijvoorbeeld aparte
        regels.
      </p>

      <h2>Heb je altijd een factuur nodig om btw af te trekken?</h2>
      <p>
        Een belangrijke voorwaarde voor btw-aftrek is dat je beschikt over een factuur die aan de
        btw-factuureisen voldoet. Controleer daarom bij zakelijke aankopen of de factuur correct is.
      </p>
      <p>Op een reguliere btw-factuur staan onder andere gegevens over:</p>
      <ul>
        <li>leverancier;</li>
        <li>afnemer;</li>
        <li>factuurdatum;</li>
        <li>factuurnummer;</li>
        <li>geleverde goederen of diensten;</li>
        <li>bedragen;</li>
        <li>btw-tarief;</li>
        <li>btw-bedrag.</li>
      </ul>
      <p>
        Er bestaan situaties waarin afwijkende factuurregels gelden. Bewaar ontvangen facturen
        daarom zorgvuldig bij je administratie.
      </p>

      <h2>Een bonnetje zonder jouw bedrijfsnaam: mag je de btw aftrekken?</h2>
      <p>
        Niet iedere aankoop vereist dezelfde soort factuur. Voor kleine bedragen kan bijvoorbeeld
        een vereenvoudigde factuur toegestaan zijn en voor bepaalde uitgaven gelden specifieke
        regels.
      </p>
      <p>
        Een bekend voorbeeld zijn brandstofbonnen. Onder voorwaarden kunnen naam- en
        adresgegevens op zo&apos;n bon ontbreken, zolang via de betaalwijze kan worden vastgesteld
        wie de afnemer is.
      </p>
      <p>
        Ga dus niet uit van de simpele regel: &ldquo;Mijn bedrijfsnaam staat niet op de bon, dus de
        btw is nooit aftrekbaar.&rdquo; Welke factuureisen gelden, hangt af van de situatie.
      </p>

      <h2>Wanneer trek je de btw af?</h2>
      <p>
        Bij het factuurstelsel wordt aftrekbare voorbelasting verwerkt op basis van ontvangen
        facturen. De factuurdatum bepaalt in welk aangiftetijdvak je de btw opneemt.
      </p>
      <p>
        Je hoeft volgens de Belastingdienst niet te wachten totdat je de leverancier daadwerkelijk
        hebt betaald.
      </p>
      <p>
        Staat er bijvoorbeeld een geldige factuur van 15 september in je administratie en doe je per
        kwartaal btw-aangifte, dan valt deze normaal gesproken in het derde kwartaal.
      </p>
      <p>
        Er gelden afwijkende regels in bijzondere situaties en bij ondernemers die het kasstelsel
        toepassen.
      </p>

      <h2>Btw bij buitenlandse software en diensten</h2>
      <p>
        Gebruik je diensten van buitenlandse leveranciers, bijvoorbeeld buitenlandse
        softwarebedrijven? Dan kan de btw-behandeling anders werken.
      </p>
      <p>
        Bij zakelijke diensten uit andere landen kan bijvoorbeeld sprake zijn van{' '}
        <strong>btw-verlegging</strong>.
      </p>
      <p>
        Je ontvangt dan mogelijk een factuur waarop geen Nederlandse btw staat, terwijl je de btw
        wel in je Nederlandse btw-aangifte moet verwerken. Als je tegelijkertijd recht hebt op
        volledige aftrek van die btw als voorbelasting, kunnen het verschuldigde en aftrekbare
        bedrag elkaar in de aangifte per saldo opheffen.
      </p>
      <p>
        Buitenlandse facturen moet je daarom niet automatisch hetzelfde behandelen als een
        Nederlandse factuur met 21% btw. Controleer bij buitenlandse aankopen welke btw-regels van
        toepassing zijn.
      </p>

      <h2>Btw aftrekken bij de KOR</h2>
      <p>Doe je mee aan de kleineondernemersregeling (KOR)?</p>
      <p>
        Dan bereken je geen btw aan je klanten, maar kun je in beginsel ook geen btw op je zakelijke
        kosten en investeringen aftrekken.
      </p>
      <p>
        Dat is een belangrijk nadeel om mee te nemen wanneer je beoordeelt of deelname aan de KOR
        voor jouw onderneming interessant is. Heb je veel zakelijke uitgaven of ben je van plan
        flink te investeren, dan kan de btw die je niet kunt aftrekken relevant zijn voor die
        afweging.
      </p>
      <p>
        Lees meer:{' '}
        <TextLink href="/tools/kor-calculator">KOR calculator voor zzp&apos;ers</TextLink>
      </p>

      <h2>Kosten inclusief of exclusief btw aftrekken?</h2>
      <p>Kun je de btw op een zakelijke aankoop aftrekken als voorbelasting?</p>
      <p>
        Dan verwerk je de kosten voor je winstberekening normaal gesproken{' '}
        <strong>exclusief btw</strong>.
      </p>
      <p>Voorbeeld:</p>
      <ul>
        <li>
          <strong>Laptopaccessoire excl. btw:</strong> €100
        </li>
        <li>
          <strong>Btw:</strong> €21
        </li>
        <li>
          <strong>Totaal betaald:</strong> €121
        </li>
      </ul>
      <p>Kun je de €21 btw volledig als voorbelasting aftrekken?</p>
      <p>Dan zijn je zakelijke kosten voor de winstberekening €100.</p>
      <p>Kun je de btw niet aftrekken?</p>
      <p>
        Dan kan de niet-aftrekbare btw onderdeel worden van de zakelijke kosten. In dit eenvoudige
        voorbeeld zouden de kosten dan €121 bedragen, mits de uitgave zelf zakelijk aftrekbaar is.
      </p>

      <h2>Hoe houd je btw op zakelijke uitgaven bij?</h2>
      <p>Een goede administratie maakt je btw-aangifte een stuk eenvoudiger.</p>
      <p>Leg bij een zakelijke uitgave bijvoorbeeld vast:</p>
      <ul>
        <li>datum;</li>
        <li>leverancier;</li>
        <li>omschrijving;</li>
        <li>bedrag exclusief btw;</li>
        <li>btw-bedrag;</li>
        <li>totaal inclusief btw;</li>
        <li>btw-tarief;</li>
        <li>categorie.</li>
      </ul>
      <p>
        En bewaar natuurlijk de bijbehorende factuur of het relevante bewijsstuk. Zo kun je
        gedurende het kwartaal al zien hoeveel btw je op je zakelijke uitgaven hebt geregistreerd.
      </p>

      <h2>Voorbeeld: btw over een kwartaal</h2>
      <p>Stel dat je in een kwartaal de volgende bedragen hebt:</p>

      <h3>Verkopen</h3>
      <p>
        Omzet exclusief btw: €20.000
        <br />
        Btw over verkopen: €4.200
      </p>

      <h3>Zakelijke uitgaven</h3>
      <p>Aftrekbare voorbelasting op zakelijke uitgaven: €1.050</p>
      <p>Dan is de eenvoudige berekening:</p>
      <p>
        <strong>€4.200 − €1.050 = €3.150</strong>
      </p>
      <p>
        In dit voorbeeld is €3.150 het verschil tussen de btw over je verkopen en je aftrekbare
        voorbelasting. In de praktijk kunnen andere posten, correcties en bijzondere btw-regels
        invloed hebben op je uiteindelijke aangifte.
      </p>

      <h2>Btw op uitgaven bijhouden met FactuurBaas</h2>
      <p>
        Met FactuurBaas kun je bij iedere zakelijke uitgave vastleggen hoeveel btw je hebt betaald.
      </p>
      <p>Je registreert bijvoorbeeld:</p>
      <ul>
        <li>
          <strong>Omschrijving:</strong> Adobe Creative Cloud
        </li>
        <li>
          <strong>Leverancier:</strong> Adobe
        </li>
        <li>
          <strong>Bedrag excl. btw:</strong> €50,00
        </li>
        <li>
          <strong>Btw:</strong> €10,50
        </li>
        <li>
          <strong>Totaal:</strong> €60,50
        </li>
      </ul>
      <p>
        Je dashboard combineert vervolgens de btw die je op verkoopfacturen hebt geregistreerd met
        de btw op je geregistreerde zakelijke uitgaven.
      </p>
      <p>Zo krijg je gedurende het kwartaal meer inzicht in:</p>
      <ul>
        <li>
          <strong>Btw op verkopen</strong> — de btw die op je verkoopfacturen staat.
        </li>
        <li>
          <strong>Btw op uitgaven</strong> — de btw die je bij zakelijke uitgaven hebt
          geregistreerd.
        </li>
        <li>
          <strong>Btw te reserveren</strong> — het verschil op basis van je geregistreerde facturen
          en uitgaven.
        </li>
      </ul>
      <p>
        Dit is een administratief overzicht. Of btw daadwerkelijk als voorbelasting aftrekbaar is en
        wat je uiteindelijk moet aangeven, hangt af van de btw-regels en jouw situatie.
      </p>

      <UitgavenCta
        title="Houd btw op je zakelijke kosten bij"
        text="Registreer uitgaven en btw naast je facturen en krijg meer grip op je btw-overzicht."
      />

      <h2>Veelgemaakte fouten bij btw aftrekken</h2>
      <p>Een paar fouten komen regelmatig voor.</p>

      <h3>Alle zakelijke kosten automatisch als btw-aftrekbaar zien</h3>
      <p>
        Dat iets een zakelijke kostenpost is, betekent niet automatisch dat de btw aftrekbaar is.
      </p>

      <h3>Btw op privéaankopen aftrekken</h3>
      <p>
        Privéaankopen geven geen recht op btw-aftrek alleen omdat je ondernemer bent.
      </p>

      <h3>Geen facturen bewaren</h3>
      <p>
        Je moet kunnen aantonen dat je recht hebt op de aftrek. Bewaar ontvangen facturen daarom
        zorgvuldig.
      </p>

      <h3>Btw op horecakosten aftrekken</h3>
      <p>
        De btw op eten en drinken voor gebruik ter plaatse in een horecagelegenheid is in beginsel
        niet aftrekbaar als voorbelasting.
      </p>

      <h3>Buitenlandse facturen behandelen alsof het Nederlandse facturen zijn</h3>
      <p>
        Bij buitenlandse leveranciers kunnen andere regels gelden, waaronder btw-verlegging.
      </p>

      <h3>Zakelijk en privégebruik niet onderscheiden</h3>
      <p>
        Gebruik je een aankoop zowel zakelijk als privé, dan kunnen correcties of beperkingen
        gelden.
      </p>

      <h2>Veelgestelde vragen over btw aftrekken</h2>

      <h3>Kan ik als zzp&apos;er btw op zakelijke kosten aftrekken?</h3>
      <p>
        Ja, als je recht hebt op aftrek van voorbelasting en aan de voorwaarden voldoet. De aankoop
        moet onder andere worden gebruikt voor activiteiten waarvoor recht op btw-aftrek bestaat en
        je moet in beginsel beschikken over een correcte factuur.
      </p>

      <h3>Wat betekent btw aftrekken als voorbelasting?</h3>
      <p>
        Voorbelasting is de btw die leveranciers aan jou in rekening brengen over zakelijke inkopen,
        kosten en investeringen. Als deze btw aftrekbaar is, trek je die in je btw-aangifte af van
        de btw die je zelf verschuldigd bent.
      </p>

      <h3>Mag ik btw op software aftrekken?</h3>
      <p>
        Gebruik je software zakelijk voor activiteiten waarvoor je recht hebt op btw-aftrek en is de
        btw correct aan je in rekening gebracht, dan kan deze btw in beginsel als voorbelasting
        aftrekbaar zijn. Bij buitenlandse software kunnen andere btw-regels gelden.
      </p>

      <h3>Mag ik btw op een zakelijke lunch aftrekken?</h3>
      <p>
        De btw op eten en drinken dat ter plaatse in een horecagelegenheid wordt genuttigd, is in
        beginsel niet aftrekbaar als voorbelasting. Voor de inkomstenbelasting kunnen zakelijke
        horecakosten onder andere regels vallen.
      </p>

      <h3>Mag ik btw aftrekken als ik meedoe aan de KOR?</h3>
      <p>
        Als je deelneemt aan de KOR, breng je in beginsel geen btw in rekening aan klanten en kun je
        ook geen btw op zakelijke kosten en investeringen als voorbelasting aftrekken.
      </p>

      <h3>Trek ik zakelijke kosten af inclusief of exclusief btw?</h3>
      <p>
        Kun je de btw als voorbelasting aftrekken, dan trek je de zakelijke kosten voor je
        winstberekening normaal gesproken exclusief btw af. Kun je de btw niet aftrekken, dan kan de
        niet-aftrekbare btw onderdeel zijn van de zakelijke kosten.
      </p>

      <h3>Kan ik btw aftrekken voordat ik de factuur heb betaald?</h3>
      <p>
        Bij het factuurstelsel kun je de btw verwerken in het aangiftetijdvak waarin deze aan jou in
        rekening is gebracht en je de factuur hebt ontvangen. Je hoeft daarvoor niet te wachten
        totdat je de leverancier daadwerkelijk hebt betaald.
      </p>

      <h2>Kort samengevat</h2>
      <p>Btw op zakelijke kosten kun je onder voorwaarden aftrekken als voorbelasting.</p>
      <p>Onthoud vooral:</p>
      <ul>
        <li>zakelijke kosten en btw-aftrek zijn twee verschillende dingen;</li>
        <li>btw op inkopen, kosten en investeringen kan aftrekbaar zijn;</li>
        <li>je aankoop moet worden gebruikt voor activiteiten waarvoor recht op aftrek bestaat;</li>
        <li>je hebt in beginsel een correcte factuur nodig;</li>
        <li>btw op privéaankopen is niet aftrekbaar;</li>
        <li>voor vrijgestelde omzet bestaat in beginsel geen recht op aftrek;</li>
        <li>
          voor onder andere horeca, relatiegeschenken en privégebruik gelden bijzondere regels;
        </li>
        <li>houd de btw op je zakelijke uitgaven gedurende het jaar goed bij.</li>
      </ul>
      <p>
        Met een goede administratie zie je daardoor niet alleen hoeveel btw je aan klanten berekent,
        maar ook hoeveel btw je op zakelijke uitgaven hebt geregistreerd.
      </p>

      <UitgavenCta
        title="Gratis zakelijke uitgaven en btw bijhouden met FactuurBaas"
        label="Gratis uitgaven bijhouden →"
      />

      <p className="mt-4 text-sm text-slate-500">
        Dit artikel is informatief en geen fiscaal advies. Regels kunnen wijzigen; check bij
        twijfel de Belastingdienst of je boekhouder. Meer over btw op facturen:{' '}
        <TextLink href="/blogs/btw-factuur-zzp">btw op je factuur als zzp&apos;er</TextLink>. Of
        lees{' '}
        <TextLink href="/blogs/zakelijke-uitgaven-bijhouden-zzp">
          zakelijke uitgaven bijhouden
        </TextLink>
        .
      </p>
    </>
  ),
};
