import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { UITGAVEN_PRODUCT_PATH } from '@/lib/uitgavenLanding';
import { zakelijkeKostenSatelliteArticles } from '@/lib/zakelijkeKostenSatellites';

const CLUSTER_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Zakelijke%20kosten%20zzp.jpg',
  alt: "Zakelijke kosten zzp — aftrekbare kosten berekenen",
};

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

function relatedExcept(slug) {
  return CLUSTER_RELATED.filter((s) => s !== slug);
}

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const UitgavenCta = ({
  title = 'Houd je zakelijke kosten gratis bij',
  text = 'Registreer uitgaven en btw naast je facturen en zie wat er van je omzet overblijft.',
  label = 'Bekijk uitgaven bijhouden →',
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

const disclaimer = (
  <p className="mt-4 text-sm text-slate-500">
    Dit artikel is informatief en geen fiscaal advies. Regels kunnen wijzigen; check bij twijfel
    de Belastingdienst of je boekhouder.
  </p>
);

export const zakelijkeKostenArticles = [
  {
    slug: 'zakelijke-kosten-zzp',
    relatedSlugs: relatedExcept('zakelijke-kosten-zzp'),
    metaTitle: "Zakelijke kosten zzp: welke kosten mag je aftrekken?",
    title: "Zakelijke kosten zzp: welke kosten mag je aftrekken?",
    excerpt:
      "Welke zakelijke kosten mag je als zzp'er aftrekken? Bekijk aftrekbare kosten, btw, gemengde kosten, zakelijke kilometers en kosten die niet aftrekbaar zijn.",
    keywords:
      "zakelijke kosten zzp, aftrekbare kosten zzp, welke kosten aftrekbaar zzp, zakelijke kosten aftrekken, kosten aftrekken zzp, aftrekposten zzp, bedrijfskosten zzp, zakelijke uitgaven zzp",
    image: CLUSTER_IMAGE,
    datePublished: '2026-09-19',
    dateModified: '2026-09-19',
    faq: [
      {
        question: "Welke kosten mag je als zzp'er aftrekken?",
        answer:
          'Kosten die je maakt voor de zakelijke belangen van je onderneming zijn in principe aftrekbaar. Denk aan zakelijke software, materiaal, advies, verzekeringen en marketing. Voor sommige kostensoorten gelden specifieke beperkingen of voorwaarden.',
      },
      {
        question: "Mag je als zzp'er een laptop aftrekken?",
        answer:
          'Gebruik je een laptop voor je onderneming, dan kunnen de kosten zakelijk zijn. Of je het bedrag direct als kosten verwerkt of over meerdere jaren moet afschrijven, hangt onder andere af van de aanschafprijs en gebruiksduur.',
      },
      {
        question: "Mag je telefoon en internet aftrekken als zzp'er?",
        answer:
          'Het zakelijke deel van bepaalde telefoon- en internetkosten kan aftrekbaar zijn. Bij gemengd privé- en zakelijk gebruik moet je rekening houden met het privédeel en met specifieke regels voor het soort kosten.',
      },
      {
        question: "Mag je kleding aftrekken als zzp'er?",
        answer:
          'Gewone kleding is niet aftrekbaar alleen omdat je deze tijdens je werk draagt. Voor kleding die fiscaal als werkkleding geldt, kunnen de kosten wel aftrekbaar zijn.',
      },
      {
        question: 'Mag je zakelijke kilometers aftrekken?',
        answer:
          'Gebruik je in 2026 een privévervoermiddel voor zakelijke ritten, dan mag je €0,25 per zakelijke kilometer van je winst aftrekken. Voor een auto van de zaak gelden andere regels.',
      },
      {
        question: 'Mag je btw op zakelijke kosten aftrekken?',
        answer:
          'Btw op zakelijke inkopen, kosten en investeringen kan onder voorwaarden als voorbelasting worden afgetrokken. Je moet de aankoop onder andere gebruiken voor btw-belaste activiteiten en over een geschikte factuur beschikken. Er bestaan uitzonderingen.',
      },
      {
        question: 'Zijn zakelijke lunches volledig aftrekbaar?',
        answer:
          'Niet altijd. Voedsel, drank, representatie en bepaalde andere kosten vallen onder regels voor beperkt aftrekbare kosten. Voor ondernemers voor de inkomstenbelasting geldt in 2026 onder andere een drempel van €5.700, met als alternatief de mogelijkheid om voor bepaalde kosten 80% af te trekken.',
      },
      {
        question: 'Mag ik zakelijke kosten die ik privé heb betaald aftrekken?',
        answer:
          'De betaalrekening bepaalt niet of een uitgave zakelijk is. Een zakelijke uitgave die je privé hebt betaald kan nog steeds zakelijk zijn, zolang deze correct wordt verwerkt en je de uitgave kunt onderbouwen.',
      },
    ],
    content: (
      <>
        <p>
          Als zzp&apos;er maak je kosten om je werk te kunnen doen. Denk aan software, een laptop,
          zakelijke verzekeringen, marketing, vervoer en misschien een werkplek.
        </p>
        <p>
          Maar welke <strong>zakelijke kosten mag je als zzp&apos;er aftrekken</strong>?
        </p>
        <p>
          De hoofdregel is relatief eenvoudig: kosten die je maakt voor de zakelijke belangen van
          je onderneming zijn in principe aftrekbaar. Privé-uitgaven zijn dat niet. Gebruik je iets
          zowel zakelijk als privé, dan is vaak alleen het zakelijke deel aftrekbaar.
        </p>
        <p>
          In deze gids vind je een overzicht van veelvoorkomende zakelijke kosten, kosten die niet
          of slechts gedeeltelijk aftrekbaar zijn en waar je op moet letten bij btw.
        </p>

        <UitgavenCta />

        <h2>Wat zijn zakelijke kosten?</h2>
        <p>Zakelijke kosten zijn kosten die je maakt voor de zakelijke belangen van je onderneming.</p>
        <p>
          Volgens de Belastingdienst gaat het om kosten die binnen redelijke grenzen nodig zijn voor
          de uitoefening van je onderneming of rechtstreeks betrekking hebben op je onderneming.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>software;</li>
          <li>zakelijke verzekeringen;</li>
          <li>kantoorartikelen;</li>
          <li>marketing;</li>
          <li>advieskosten;</li>
          <li>huur van bedrijfsruimte;</li>
          <li>onderhoud;</li>
          <li>zakelijke reizen;</li>
          <li>apparatuur die je voor je onderneming gebruikt.</li>
        </ul>
        <p>
          Je trekt deze kosten af van je opbrengsten. Daardoor wordt je belastbare winst lager.
        </p>
        <p>Een eenvoudig voorbeeld:</p>
        <ul>
          <li>
            <strong>Omzet:</strong> €60.000
          </li>
          <li>
            <strong>Aftrekbare zakelijke kosten:</strong> €15.000
          </li>
          <li>
            <strong>Winst vóór andere fiscale correcties:</strong> €45.000
          </li>
        </ul>
        <p>Je betaalt dus niet simpelweg inkomstenbelasting over je volledige omzet.</p>

        <h2>Wanneer is een zakelijke kost aftrekbaar?</h2>
        <p>De belangrijkste vraag is:</p>
        <blockquote>
          <strong>Heb je de kosten gemaakt voor je onderneming?</strong>
        </blockquote>
        <p>Is het antwoord duidelijk ja, dan zijn de kosten meestal zakelijk.</p>
        <p>
          De Belastingdienst kijkt daarbij onder andere naar het motief waarmee je de kosten hebt
          gemaakt.
        </p>
        <p>
          Een abonnement op software die je dagelijks voor klanten gebruikt heeft bijvoorbeeld een
          duidelijk zakelijk karakter. Een nieuwe televisie voor je woonkamer wordt niet opeens een
          zakelijke uitgave omdat je er af en toe een zakelijke YouTube-video op bekijkt.
        </p>
        <p>Er bestaan vervolgens drie belangrijke categorieën:</p>

        <h3>1. Volledig zakelijke kosten</h3>
        <p>
          Deze kosten hebben volledig betrekking op je onderneming en zijn in principe volledig
          aftrekbaar.
        </p>

        <h3>2. Gemengde kosten</h3>
        <p>
          Sommige uitgaven hebben zowel een zakelijk als een privékarakter. In veel gevallen is
          alleen het zakelijke deel aftrekbaar.
        </p>

        <h3>3. Niet-aftrekbare of beperkt aftrekbare kosten</h3>
        <p>
          Voor bepaalde uitgaven gelden specifieke beperkingen. Een zakelijk doel betekent dus niet
          automatisch dat je altijd 100% van het bedrag mag aftrekken.
        </p>

        <h2>Overzicht: welke zakelijke kosten zijn aftrekbaar?</h2>
        <p>Hieronder behandelen we een aantal kosten waar zzp&apos;ers vaak mee te maken krijgen.</p>

        <h3>Software en abonnementen</h3>
        <p>
          Gebruik je software voor je onderneming? Dan zijn de kosten daarvan normaal gesproken
          zakelijk.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>boekhoudsoftware;</li>
          <li>facturatiesoftware;</li>
          <li>Adobe;</li>
          <li>Microsoft 365;</li>
          <li>Google Workspace;</li>
          <li>CRM-software;</li>
          <li>projectmanagementsoftware;</li>
          <li>cloudopslag;</li>
          <li>hosting;</li>
          <li>zakelijke AI-tools;</li>
          <li>andere SaaS-abonnementen.</li>
        </ul>
        <p>
          Gebruik je een abonnement zowel zakelijk als privé, dan kan het nodig zijn om het
          zakelijke en privégebruik van elkaar te scheiden.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/software-abonnementen-aftrekken-zzp">
            Software en abonnementen aftrekken als zzp&apos;er
          </TextLink>
        </p>

        <h3>Laptop, computer en apparatuur</h3>
        <p>
          Een laptop, computer, monitor, camera of ander apparaat dat je voor je onderneming nodig
          hebt, kan een zakelijke uitgave zijn.
        </p>
        <p>
          Je moet daarbij onderscheid maken tussen kosten die je direct mag aftrekken en
          bedrijfsmiddelen waarop je moet afschrijven.
        </p>
        <p>
          Als algemene regel geldt dat zaken met een kostprijs van minder dan €450 direct als
          kosten kunnen worden verwerkt. Koop je een bedrijfsmiddel van €450 of meer dat je langer
          dan één jaar gebruikt, dan moet je de kosten meestal over meerdere jaren verdelen.
        </p>
        <p>
          Kun je de btw terugvragen? Dan kijk je voor deze grens naar de aanschafprijs exclusief
          btw. Kun je de btw niet aftrekken, dan wordt voor deze grens naar de prijs inclusief btw
          gekeken.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/laptop-aftrekbaar-zzp">Laptop aftrekbaar als zzp&apos;er?</TextLink>
        </p>

        <h3>Telefoon</h3>
        <p>Ook telefoonkosten kunnen zakelijk zijn.</p>
        <p>
          Een zakelijk telefoonabonnement kan aftrekbaar zijn, maar privégebruik moet je daarbij
          onderscheiden van zakelijk gebruik.
        </p>
        <p>
          Gebruik je een privéabonnement ook voor zakelijke gesprekken, dan betekent dat niet dat
          je automatisch je volledige privéabonnement als zakelijke kosten kunt aftrekken.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/telefoon-aftrekbaar-zzp">
            Telefoon aftrekbaar als zzp&apos;er?
          </TextLink>
        </p>

        <h3>Internet</h3>
        <p>
          Gebruik je internet zowel privé als zakelijk, dan moet je rekening houden met het
          gemengde karakter van de kosten.
        </p>
        <p>
          Het feit dat je vanuit huis werkt betekent dus niet automatisch dat je de volledige
          kosten van je internetverbinding als zakelijke kosten kunt opvoeren.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/internet-aftrekbaar-zzp">
            Internet aftrekbaar als zzp&apos;er?
          </TextLink>
        </p>

        <h3>Kantoorartikelen en materiaal</h3>
        <p>
          Kosten die je maakt voor materialen die je daadwerkelijk voor je onderneming gebruikt,
          zijn doorgaans zakelijk.
        </p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>papier;</li>
          <li>pennen;</li>
          <li>verpakkingsmateriaal;</li>
          <li>gereedschap;</li>
          <li>kleine kantoorartikelen;</li>
          <li>benodigdheden voor het uitvoeren van opdrachten.</li>
        </ul>
        <p>
          Ook hier geldt dat privégebruik niet zakelijk aftrekbaar wordt doordat je ondernemer bent.
        </p>

        <h3>Marketing en reclame</h3>
        <p>
          Kosten om je onderneming onder de aandacht te brengen hebben meestal een duidelijk
          zakelijk karakter.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>online advertenties;</li>
          <li>flyers;</li>
          <li>drukwerk;</li>
          <li>website;</li>
          <li>domeinnaam;</li>
          <li>hosting;</li>
          <li>fotografie voor je website;</li>
          <li>SEO;</li>
          <li>marketingbureau;</li>
          <li>zakelijke promotie.</li>
        </ul>
        <p>Voor relatiegeschenken en bepaalde representatiekosten gelden aparte beperkingen.</p>

        <h3>Boekhouder en zakelijke adviseurs</h3>
        <p>
          Kosten voor professionele ondersteuning van je onderneming kunnen zakelijke kosten zijn.
        </p>
        <p>Denk aan:</p>
        <ul>
          <li>boekhouder;</li>
          <li>accountant;</li>
          <li>belastingadviseur;</li>
          <li>jurist;</li>
          <li>zakelijke consultant.</li>
        </ul>
        <p>
          Ook advieskosten die je in de aanloop naar je onderneming hebt gemaakt, kunnen onder
          omstandigheden zakelijke kosten zijn.
        </p>

        <h3>Zakelijke verzekeringen</h3>
        <p>
          Premies voor verzekeringen die betrekking hebben op je onderneming kunnen zakelijke
          kosten zijn.
        </p>
        <p>Denk bijvoorbeeld aan bepaalde:</p>
        <ul>
          <li>bedrijfsaansprakelijkheidsverzekeringen;</li>
          <li>beroepsaansprakelijkheidsverzekeringen;</li>
          <li>inventaris- en goederenverzekeringen;</li>
          <li>rechtsbijstandverzekeringen voor zakelijke risico&apos;s.</li>
        </ul>
        <p>
          Niet iedere verzekering van een ondernemer is automatisch een zakelijke kostenpost. Bij
          verzekeringen die vooral betrekking hebben op jou als persoon kunnen andere fiscale
          regels gelden.
        </p>

        <h3>Zakelijke reizen met openbaar vervoer, taxi of vliegtuig</h3>
        <p>
          Maak je aantoonbaar zakelijke reizen met het openbaar vervoer, een taxi of vliegtuig, dan
          kunnen de werkelijk gemaakte zakelijke reiskosten aftrekbaar zijn.
        </p>
        <p>Bewaar daarom je tickets, facturen en andere bewijsstukken.</p>

        <h3>Zakelijke kilometers met je privéauto</h3>
        <p>
          Gebruik je in 2026 een privéauto of ander privévervoermiddel voor zakelijke ritten? Dan
          mag je €0,25 per zakelijke kilometer van je winst aftrekken.
        </p>
        <p>
          Bij een privéauto trek je vervolgens niet ook nog afzonderlijk brandstof, verzekering, tol
          en parkeerkosten af. Deze kosten zijn verwerkt in het kilometerbedrag.
        </p>
        <p>Rijd je bijvoorbeeld 5.000 zakelijke kilometers in 2026?</p>
        <p>
          <strong>5.000 × €0,25 = €1.250</strong>
        </p>
        <p>
          Dat bedrag kun je dan voor de inkomstenbelasting als zakelijke vervoerskosten verwerken.
          Voor een auto die tot het ondernemingsvermogen behoort gelden andere regels.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/reiskosten-aftrekken-zzp">
            Reiskosten aftrekken als zzp&apos;er
          </TextLink>
        </p>

        <h3>Opleidingen en vakkennis</h3>
        <p>Bij opleidingen is het belangrijk waarom je de opleiding volgt.</p>
        <p>
          Kosten om bestaande vakkennis op peil te houden kunnen onder voorwaarden zakelijke kosten
          zijn. Kosten waarmee je nieuwe kennis opdoet met het doel om een nieuw beroep of andere
          werkzaamheden te kunnen gaan uitvoeren, zijn niet automatisch zakelijke studiekosten.
        </p>
        <p>Kijk daarom bij opleidingen goed naar het verband met je bestaande onderneming.</p>

        <h3>Vakliteratuur</h3>
        <p>
          Vakliteratuur die je nodig hebt voor je onderneming kan volledig aftrekbaar zijn.
          Algemene literatuur is dat niet automatisch.
        </p>
        <p>
          Een gespecialiseerd handboek voor je vakgebied heeft bijvoorbeeld een veel duidelijker
          zakelijk karakter dan een algemeen tijdschrift dat je ook privé leest.
        </p>

        <h3>Werkkleding</h3>
        <p>Niet iedere outfit die je tijdens het werk draagt is fiscaal gezien werkkleding.</p>
        <p>
          Echte werkkleding kan aftrekbaar zijn. Gewone kleding die ook privé gedragen kan worden,
          is in principe niet aftrekbaar alleen omdat je deze tijdens je werk draagt.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/werkkleding-aftrekbaar-zzp">
            Werkkleding aftrekbaar als zzp&apos;er?
          </TextLink>
        </p>

        <h3>Werkruimte thuis</h3>
        <p>Hier moet je voorzichtig mee zijn.</p>
        <p>
          Dat je vanuit huis werkt, betekent niet automatisch dat je een deel van je huur,
          hypotheek, energie of andere woonkosten van je winst mag aftrekken.
        </p>
        <p>
          Volgens de Belastingdienst zijn kosten van een werkruimte in je eigen woning{' '}
          <strong>meestal niet aftrekbaar</strong>. Alleen in specifieke situaties kan een
          uitzondering gelden.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/werkruimte-thuis-aftrekbaar-zzp">
            Werkruimte thuis aftrekbaar als zzp&apos;er?
          </TextLink>
        </p>

        <h2>Welke zakelijke kosten zijn niet aftrekbaar?</h2>
        <p>Sommige kosten kun je niet aftrekken, ook al ben je ondernemer.</p>
        <p>Het duidelijkste voorbeeld zijn privé-uitgaven.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>boodschappen voor thuis;</li>
          <li>privévakanties;</li>
          <li>gewone kleding;</li>
          <li>persoonlijke verzorging;</li>
          <li>geldboetes;</li>
          <li>algemene literatuur;</li>
          <li>andere uitgaven zonder voldoende zakelijk verband.</li>
        </ul>
        <p>
          Een betaling via je zakelijke bankrekening maakt een uitgave niet automatisch zakelijk.
          Andersom kan een zakelijke uitgave die je per ongeluk privé hebt betaald nog steeds een
          zakelijke uitgave zijn. Het gaat vooral om het karakter en doel van de kosten.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
            Zakelijke kosten privé betaald: hoe verwerk je die?
          </TextLink>
        </p>

        <h2>Welke kosten zijn beperkt aftrekbaar?</h2>
        <p>
          Er bestaat ook een tussencategorie: kosten die wel een zakelijk karakter kunnen hebben,
          maar waarvoor de Belastingdienst de aftrek beperkt.
        </p>
        <p>Daaronder kunnen onder andere vallen:</p>
        <ul>
          <li>zakenlunches en zakendiners;</li>
          <li>voedsel en drank;</li>
          <li>representatie;</li>
          <li>bepaalde relatiegeschenken;</li>
          <li>congressen;</li>
          <li>seminars;</li>
          <li>studiereizen.</li>
        </ul>
        <p>
          Voor ondernemers voor de inkomstenbelasting geldt in 2026 voor bepaalde beperkt
          aftrekbare kosten een drempel van €5.700.
        </p>
        <p>
          In plaats van toepassing van deze drempel kun je ervoor kiezen 80% van deze kosten af te
          trekken. Welke methode gunstiger is, hangt af van je situatie en het bedrag aan kosten.
        </p>
        <p>
          Let op dat voor specifieke kostensoorten aanvullende voorwaarden en maxima kunnen gelden.
        </p>

        <h2>Zakelijke én privé-uitgave: wat dan?</h2>
        <p>
          Een veelvoorkomende situatie bij zzp&apos;ers is dat iets zowel zakelijk als privé wordt
          gebruikt.
        </p>
        <p>Bijvoorbeeld:</p>
        <ul>
          <li>telefoon;</li>
          <li>internet;</li>
          <li>auto;</li>
          <li>apparatuur;</li>
          <li>bepaalde abonnementen.</li>
        </ul>
        <p>Dan moet je kijken welk deel werkelijk betrekking heeft op je onderneming.</p>
        <p>
          Stel dat een bepaalde uitgave voor 70% zakelijk wordt gebruikt en voor 30% privé.
          Afhankelijk van het type kosten en de toepasselijke regels kan alleen het zakelijke
          gedeelte als zakelijke kosten worden verwerkt.
        </p>
        <p>Probeer daarom een redelijke en onderbouwbare verdeling te gebruiken.</p>

        <h2>Privékosten zakelijk betaald</h2>
        <p>Heb je per ongeluk je boodschappen met je zakelijke rekening betaald?</p>
        <p>Dat maakt de boodschappen niet zakelijk.</p>
        <p>
          De betaling moet in je administratie als privé worden verwerkt en mag niet als zakelijke
          kostenpost je winst verlagen.
        </p>
        <p>
          Je zakelijke bankrekening is dus geen fiscale scheidslijn. Het doel van de uitgave
          bepaalt of iets zakelijk is.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/privekosten-zakelijk-betalen">
            Privékosten zakelijk betalen: wat mag wel en niet?
          </TextLink>
        </p>

        <h2>Zakelijke kosten privé betaald</h2>
        <p>Andersom kan natuurlijk ook.</p>
        <p>Stel dat je met je privérekening een zakelijke softwarelicentie betaalt.</p>
        <p>
          De kosten verliezen daardoor niet automatisch hun zakelijke karakter. Het blijft
          belangrijk dat je de uitgave correct in je administratie verwerkt en het bewijsstuk
          bewaart.
        </p>
        <p>
          Daarom is het handig om ook zakelijke uitgaven die privé zijn betaald te registreren.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
            Zakelijke kosten privé betaald: hoe verwerk je die?
          </TextLink>
        </p>

        <h2>Mag je btw op zakelijke kosten aftrekken?</h2>
        <p>
          In veel gevallen wel, maar <strong>inkomstenbelasting en btw zijn twee verschillende zaken</strong>.
        </p>
        <p>
          Dat een uitgave voor de inkomstenbelasting een zakelijke kostenpost is, betekent niet
          automatisch dat de btw volledig aftrekbaar is.
        </p>
        <p>
          Om btw op een zakelijke uitgave als voorbelasting af te trekken, gelden voorwaarden. Zo
          moet je de goederen of diensten onder andere gebruiken voor omzet die met btw is belast
          en moet je beschikken over een factuur die aan de relevante eisen voldoet.
        </p>
        <p>
          Gebruik je een aankoop voor vrijgestelde omzet? Dan kan de btw niet zomaar als
          voorbelasting worden afgetrokken. Ook bestaan er specifieke uitzonderingen. Zo is btw op
          eten en drinken in de horeca niet aftrekbaar als voorbelasting.
        </p>
        <p>
          Lees verder:{' '}
          <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
            Btw aftrekken van zakelijke kosten: hoe werkt het?
          </TextLink>
        </p>

        <h2>Kosten aftrekken inclusief of exclusief btw?</h2>
        <p>Kun je de btw op een zakelijke aankoop als voorbelasting aftrekken?</p>
        <p>
          Dan verwerk je voor de winstberekening normaal gesproken de kosten{' '}
          <strong>exclusief btw</strong>.
        </p>
        <p>Kun je de btw niet aftrekken?</p>
        <p>
          Dan kunnen de kosten voor de winstberekening juist <strong>inclusief btw</strong> worden
          verwerkt, voor zover de kosten zelf fiscaal aftrekbaar zijn.
        </p>
        <p>Voorbeeld:</p>
        <p>Je koopt zakelijke software voor:</p>
        <ul>
          <li>
            <strong>Prijs excl. btw:</strong> €100
          </li>
          <li>
            <strong>Btw:</strong> €21
          </li>
          <li>
            <strong>Totaal:</strong> €121
          </li>
        </ul>
        <p>
          Kun je de €21 btw als voorbelasting aftrekken, dan is voor je winstberekening €100 de
          zakelijke kostenpost.
        </p>

        <h2>Wanneer moet je kosten afschrijven?</h2>
        <p>
          Niet iedere zakelijke aankoop mag je volledig in één jaar van je winst aftrekken.
        </p>
        <p>Koop je iets dat:</p>
        <ul>
          <li>€450 of meer kost; én</li>
          <li>langer dan één jaar wordt gebruikt,</li>
        </ul>
        <p>dan kan sprake zijn van een bedrijfsmiddel waarop je moet afschrijven.</p>
        <p>Denk bijvoorbeeld aan:</p>
        <ul>
          <li>computers;</li>
          <li>machines;</li>
          <li>inventaris;</li>
          <li>professionele apparatuur.</li>
        </ul>
        <p>Bij afschrijven verdeel je de kosten over meerdere jaren.</p>
        <p>
          Koop je bijvoorbeeld een professioneel apparaat voor €3.000 dat meerdere jaren meegaat,
          dan is €3.000 niet automatisch volledig een kostenpost van het eerste jaar.
        </p>
        <p>
          Voor zaken met een geringe waarde — als algemene regel een kostprijs van minder dan €450 —
          kunnen de kosten doorgaans wel direct worden genomen.
        </p>

        <h2>Mag je kosten van vóór de start van je bedrijf aftrekken?</h2>
        <p>Dat kan.</p>
        <p>
          Misschien maakte je al kosten voordat je je onderneming daadwerkelijk startte. Denk
          bijvoorbeeld aan:
        </p>
        <ul>
          <li>marktonderzoek;</li>
          <li>advies;</li>
          <li>zakelijke software;</li>
          <li>websitekosten;</li>
          <li>andere voorbereidingskosten.</li>
        </ul>
        <p>
          Als je kunt aantonen dat deze kosten daadwerkelijk zijn gemaakt met het oog op je
          onderneming, kunnen aanloopkosten onder voorwaarden aftrekbaar zijn.
        </p>
        <p>
          Bewaar daarom ook bewijsstukken van zakelijke kosten uit de periode vóór je officiële
          start.
        </p>

        <h2>Bonnetjes en facturen bewaren</h2>
        <p>
          Als je zakelijke kosten aftrekt, moet je kunnen aantonen dat je die kosten daadwerkelijk
          hebt gemaakt en dat ze betrekking hebben op je werkzaamheden.
        </p>
        <p>Bewaar daarom je:</p>
        <ul>
          <li>facturen;</li>
          <li>bonnetjes;</li>
          <li>betaalbewijzen;</li>
          <li>relevante overeenkomsten;</li>
          <li>andere bewijsstukken.</li>
        </ul>
        <p>
          Registreer daarnaast bij iedere zakelijke uitgave wat je hebt gekocht, wanneer, bij welke
          leverancier en hoeveel btw er in rekening is gebracht.
        </p>

        <h2>Zakelijke kosten overzichtelijk bijhouden</h2>
        <p>
          Zakelijke kosten aftrekken begint bij een goede administratie. Je wilt niet pas tijdens
          je belastingaangifte ontdekken dat je een jaar lang bonnetjes, softwarekosten en
          abonnementen bent vergeten.
        </p>
        <p>Een eenvoudige routine helpt:</p>
        <ol>
          <li>Registreer een zakelijke uitgave zodra je deze maakt.</li>
          <li>Bewaar de factuur of bon.</li>
          <li>Noteer de leverancier en omschrijving.</li>
          <li>Kies een duidelijke categorie.</li>
          <li>Leg het btw-bedrag apart vast.</li>
          <li>Controleer regelmatig je terugkerende kosten.</li>
          <li>Bekijk iedere maand je omzet, uitgaven en resultaat.</li>
        </ol>
        <p>
          Lees ook:{' '}
          <TextLink href="/blogs/zakelijke-uitgaven-bijhouden-zzp">
            Zakelijke uitgaven bijhouden als zzp&apos;er: zo doe je het overzichtelijk
          </TextLink>
        </p>

        <h2>Zakelijke kosten bijhouden met FactuurBaas</h2>
        <p>Met FactuurBaas kun je zakelijke uitgaven naast je facturen registreren.</p>
        <p>Zo zie je niet alleen hoeveel je factureert, maar ook hoeveel je uitgeeft.</p>
        <p>Je dashboard combineert onder andere:</p>
        <ul>
          <li>
            <strong>Omzet</strong> — wat je hebt gefactureerd.
          </li>
          <li>
            <strong>Uitgaven</strong> — je geregistreerde zakelijke kosten.
          </li>
          <li>
            <strong>Resultaat</strong> — omzet minus geregistreerde uitgaven.
          </li>
          <li>
            <strong>Btw te reserveren</strong> — btw op verkopen minus geregistreerde btw op
            uitgaven.
          </li>
          <li>
            <strong>Openstaande facturen</strong> — facturen die nog niet als betaald zijn
            geregistreerd.
          </li>
        </ul>
        <p>
          Je kunt ook terugkerende zakelijke uitgaven vastleggen, zodat vaste kosten zoals software
          en abonnementen niet uit beeld verdwijnen.
        </p>

        <UitgavenCta
          text="Registreer uitgaven en btw naast je facturen en krijg meer grip op wat er van je omzet overblijft."
        />

        <h2>Veelgestelde vragen over zakelijke kosten voor zzp&apos;ers</h2>
        <h3>Welke kosten mag je als zzp&apos;er aftrekken?</h3>
        <p>
          Kosten die je maakt voor de zakelijke belangen van je onderneming zijn in principe
          aftrekbaar. Denk aan zakelijke software, materiaal, advies, verzekeringen en marketing.
          Voor sommige kostensoorten gelden specifieke beperkingen of voorwaarden.
        </p>
        <h3>Mag je als zzp&apos;er een laptop aftrekken?</h3>
        <p>
          Gebruik je een laptop voor je onderneming, dan kunnen de kosten zakelijk zijn. Of je het
          bedrag direct als kosten verwerkt of over meerdere jaren moet afschrijven, hangt onder
          andere af van de aanschafprijs en gebruiksduur.
        </p>
        <h3>Mag je telefoon en internet aftrekken als zzp&apos;er?</h3>
        <p>
          Het zakelijke deel van bepaalde telefoon- en internetkosten kan aftrekbaar zijn. Bij
          gemengd privé- en zakelijk gebruik moet je rekening houden met het privédeel en met
          specifieke regels voor het soort kosten.
        </p>
        <h3>Mag je kleding aftrekken als zzp&apos;er?</h3>
        <p>
          Gewone kleding is niet aftrekbaar alleen omdat je deze tijdens je werk draagt. Voor
          kleding die fiscaal als werkkleding geldt, kunnen de kosten wel aftrekbaar zijn.
        </p>
        <h3>Mag je zakelijke kilometers aftrekken?</h3>
        <p>
          Gebruik je in 2026 een privévervoermiddel voor zakelijke ritten, dan mag je €0,25 per
          zakelijke kilometer van je winst aftrekken. Voor een auto van de zaak gelden andere
          regels.
        </p>
        <h3>Mag je btw op zakelijke kosten aftrekken?</h3>
        <p>
          Btw op zakelijke inkopen, kosten en investeringen kan onder voorwaarden als voorbelasting
          worden afgetrokken. Je moet de aankoop onder andere gebruiken voor btw-belaste
          activiteiten en over een geschikte factuur beschikken. Er bestaan uitzonderingen.
        </p>
        <h3>Zijn zakelijke lunches volledig aftrekbaar?</h3>
        <p>
          Niet altijd. Voedsel, drank, representatie en bepaalde andere kosten vallen onder regels
          voor beperkt aftrekbare kosten. Voor ondernemers voor de inkomstenbelasting geldt in 2026
          onder andere een drempel van €5.700, met als alternatief de mogelijkheid om voor bepaalde
          kosten 80% af te trekken.
        </p>
        <h3>Mag ik zakelijke kosten die ik privé heb betaald aftrekken?</h3>
        <p>
          De betaalrekening bepaalt niet of een uitgave zakelijk is. Een zakelijke uitgave die je
          privé hebt betaald kan nog steeds zakelijk zijn, zolang deze correct wordt verwerkt en je
          de uitgave kunt onderbouwen.
        </p>

        <h2>Kort samengevat</h2>
        <p>
          Als zzp&apos;er mag je kosten aftrekken die je voor de zakelijke belangen van je
          onderneming maakt. Maar niet iedere uitgave is automatisch volledig aftrekbaar.
        </p>
        <p>Onthoud vooral:</p>
        <ul>
          <li>volledig zakelijke kosten zijn doorgaans aftrekbaar;</li>
          <li>privé-uitgaven zijn niet aftrekbaar;</li>
          <li>bij gemengd gebruik is vaak alleen het zakelijke deel aftrekbaar;</li>
          <li>voor sommige kosten gelden speciale beperkingen;</li>
          <li>btw-aftrek heeft eigen regels;</li>
          <li>grotere bedrijfsmiddelen moet je mogelijk afschrijven;</li>
          <li>bewaar facturen en bonnetjes;</li>
          <li>houd je zakelijke uitgaven gedurende het jaar bij.</li>
        </ul>
        <p>
          Zo voorkom je dat je aftrekbare kosten vergeet én krijg je een veel beter beeld van wat
          er werkelijk van je omzet overblijft.
        </p>

        <UitgavenCta
          title="Houd je zakelijke uitgaven gratis bij met FactuurBaas"
          label="Houd je zakelijke uitgaven gratis bij →"
        />
        {disclaimer}
      </>
    ),
  },
  ...zakelijkeKostenSatelliteArticles,
];
