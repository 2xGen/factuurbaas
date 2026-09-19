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
  title = 'Houd je zakelijke uitgaven overzichtelijk bij',
  text = 'Registreer echte zakelijke kosten naast je facturen en zie wat er van je omzet overblijft.',
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

export const privekostenZakelijkBetalenArticle = {
  slug: 'privekosten-zakelijk-betalen',
  relatedSlugs: [
    'zakelijke-kosten-prive-betaald',
    'zakelijke-kosten-zzp',
    'zakelijke-uitgaven-bijhouden-zzp',
    'btw-zakelijke-kosten-aftrekken',
    'telefoon-aftrekbaar-zzp',
    'internet-aftrekbaar-zzp',
    'laptop-aftrekbaar-zzp',
  ],
  metaTitle: 'Privékosten zakelijk betalen: wat mag wel en niet?',
  title: 'Privékosten zakelijk betalen: wat mag wel en niet?',
  excerpt:
    "Privékosten betaald met je zakelijke rekening? Lees hoe je dit als zzp'er verwerkt, wat een privéonttrekking is en wat dit betekent voor btw en winst.",
  keywords:
    'privékosten zakelijk betalen, privé uitgaven zakelijk betalen, privé betaald met zakelijke rekening, privé aankoop zakelijke rekening, privéonttrekking eenmanszaak, privé kosten zakelijke rekening, privé uitgaven eenmanszaak',
  image: {
    url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Privekosten%20zakelijk%20betalen.jpg',
    alt: 'Privékosten zakelijk betalen — administratie en bonnetjes',
  },
  datePublished: '2026-09-19',
  dateModified: '2026-09-19',
  faq: [
    {
      question: 'Mag je privékosten betalen met je zakelijke rekening?',
      answer:
        'Het kan gebeuren, maar de privé-uitgave wordt daardoor niet zakelijk. Bij een eenmanszaak wordt een betaling uit het ondernemingsvermogen voor privédoeleinden doorgaans als privéonttrekking verwerkt.',
    },
    {
      question: 'Zijn privékosten aftrekbaar als ik ze zakelijk betaal?',
      answer:
        'Nee. Kosten zonder zakelijk karakter zijn niet aftrekbaar van je ondernemingswinst. De rekening waarmee je betaalt verandert dat niet.',
    },
    {
      question: 'Wat is een privéonttrekking?',
      answer:
        'Een privéonttrekking is geld of een goed dat je uit je onderneming haalt voor privégebruik. Een privéonttrekking verlaagt het ondernemingsvermogen, maar is geen zakelijke kostenpost.',
    },
    {
      question: 'Mag ik btw op een privéaankoop aftrekken?',
      answer:
        'Nee, btw op een aankoop die uitsluitend privé wordt gebruikt is niet aftrekbaar als voorbelasting.',
    },
    {
      question: 'Moet ik een privéaankoop terugbetalen aan mijn zakelijke rekening?',
      answer:
        'Je kunt het bedrag vanuit privé terugstorten, maar daarmee wordt de oorspronkelijke aankoop niet zakelijk. Zorg vooral dat de betaling correct in je administratie wordt verwerkt.',
    },
    {
      question: 'Is geld dat ik van zakelijk naar privé overmaak aftrekbaar?',
      answer:
        'Bij een eenmanszaak is geld dat je voor privédoeleinden aan de onderneming onttrekt geen zakelijke kostenpost en dus niet aftrekbaar van de ondernemingswinst.',
    },
    {
      question: 'Wat als een aankoop deels zakelijk en deels privé is?',
      answer:
        'Dan gelden de regels voor gemengde kosten. Voor de inkomstenbelasting is alleen het zakelijke deel aftrekbaar. Voor de btw kunnen aparte regels gelden voor gemengd gebruik.',
    },
    {
      question: 'Wat is het verschil met zakelijke kosten die ik privé betaal?',
      answer:
        'Bij zakelijke kosten die privé zijn betaald, is de uitgave zakelijk, maar komt het geld uit privé. Bij privékosten die zakelijk zijn betaald, is de uitgave privé, maar komt het geld uit de onderneming. De aard van de uitgave is belangrijker dan de gebruikte bankrekening.',
    },
  ],
  content: (
    <>
      <p>
        Heb je per ongeluk je boodschappen, een privéabonnement of een andere persoonlijke aankoop
        met je zakelijke rekening betaald?
      </p>
      <p>
        Dat kan gebeuren. Maar een privé-uitgave wordt{' '}
        <strong>niet automatisch zakelijk</strong> omdat je hem met je zakelijke betaalpas hebt
        betaald.
      </p>
      <p>
        Heb je een eenmanszaak? Dan verwerk je zo&apos;n betaling in je administratie doorgaans als
        een <strong>privéonttrekking</strong>. De kosten zijn niet aftrekbaar van je
        ondernemingswinst.
      </p>
      <p>Kort gezegd:</p>
      <blockquote>
        <strong>Zakelijke rekening + privé-uitgave = nog steeds privé.</strong>
      </blockquote>
      <p>
        In deze gids lees je hoe je privékosten die zakelijk zijn betaald verwerkt, wat een
        privéonttrekking is en wat dit betekent voor je kosten en btw.
      </p>

      <UitgavenCta />

      <h2>Mag je privékosten betalen met je zakelijke rekening?</h2>
      <p>Dat kan natuurlijk gebeuren.</p>
      <p>Bijvoorbeeld:</p>
      <ul>
        <li>je pakt per ongeluk je zakelijke betaalpas;</li>
        <li>een privéabonnement wordt automatisch van je zakelijke rekening afgeschreven;</li>
        <li>je betaalt boodschappen vanaf de verkeerde rekening;</li>
        <li>je betaalt een privéaankoop met je zakelijke creditcard;</li>
        <li>een automatische incasso staat nog verkeerd ingesteld.</li>
      </ul>
      <p>
        Fiscaal is vooral belangrijk <strong>waar de uitgave betrekking op heeft</strong>.
      </p>
      <p>
        Een privé-uitgave wordt niet zakelijk doordat het geld vanaf je zakelijke bankrekening
        komt.
      </p>
      <p>
        De Belastingdienst noemt uitgaven die uit het ondernemingsvermogen worden betaald voor
        privégebruik <strong>privéonttrekkingen</strong>.
      </p>
      <p>
        Privéonttrekkingen verlagen het vermogen van je onderneming, maar zijn geen zakelijke
        kosten. Je mag ze daarom niet aftrekken van je ondernemingswinst.
      </p>

      <h2>Wat is een privéonttrekking?</h2>
      <p>
        Een privéonttrekking ontstaat wanneer je geld of goederen uit je onderneming haalt voor
        privégebruik.
      </p>
      <p>Een simpel voorbeeld:</p>
      <p>Je betaalt €80 aan privéboodschappen vanaf je zakelijke rekening.</p>
      <p>
        Op je zakelijke bankrekening staat daarna €80 minder. Maar je onderneming heeft geen
        zakelijke kosten van €80 gemaakt.
      </p>
      <p>Administratief is er sprake van:</p>
      <p>
        <strong>€80 privéonttrekking</strong>
      </p>
      <p>en niet van:</p>
      <p>
        <strong>€80 zakelijke kosten</strong>
      </p>
      <p>Dat verschil is belangrijk voor je winstberekening.</p>

      <h2>Voorbeeld: boodschappen zakelijk betaald</h2>
      <p>Stel dat je onderneming deze maand heeft:</p>
      <ul>
        <li>
          <strong>Omzet:</strong> €5.000
        </li>
        <li>
          <strong>Werkelijke zakelijke kosten:</strong> €1.000
        </li>
      </ul>
      <p>
        Je betaalt daarnaast €150 aan privéboodschappen vanaf je zakelijke rekening. Je zakelijke
        bankrekening is dus in totaal met €1.150 gedaald.
      </p>
      <p>Maar dat betekent niet dat je €1.150 aan zakelijke kosten hebt.</p>
      <p>Voor je resultaat zijn alleen de werkelijke zakelijke kosten relevant:</p>
      <p>
        <strong>€5.000 − €1.000 = €4.000</strong>
      </p>
      <p>
        De €150 boodschappen zijn privé en verlagen je ondernemingswinst niet. Ze worden als
        privéonttrekking verwerkt.
      </p>

      <h2>Is een privéonttrekking een zakelijke kostenpost?</h2>
      <p>Nee.</p>
      <p>
        Dat is precies waarom het belangrijk is om zakelijke en privébetalingen goed uit elkaar te
        houden.
      </p>
      <p>Een privéonttrekking:</p>
      <ul>
        <li>verlaagt je zakelijke banksaldo;</li>
        <li>verlaagt het vermogen van je onderneming;</li>
        <li>is geen zakelijke kostenpost;</li>
        <li>verlaagt je fiscale ondernemingswinst niet.</li>
      </ul>
      <p>
        Je kunt je winst dus niet verlagen door persoonlijke aankopen vanaf je zakelijke rekening te
        betalen.
      </p>

      <h2>Is een privéonttrekking loon?</h2>
      <p>
        Bij een eenmanszaak is een privéonttrekking ook niet hetzelfde als loon aan jezelf. Je bent
        bij een eenmanszaak voor de inkomstenbelasting niet op dezelfde manier werknemer van je
        eigen onderneming.
      </p>
      <p>
        Als je bijvoorbeeld €2.000 van je zakelijke rekening naar je privérekening overmaakt om van
        te leven, is dat niet ineens €2.000 extra zakelijke kosten. Het is een onttrekking uit je
        onderneming.
      </p>
      <p>
        Hetzelfde principe geldt wanneer je niet eerst geld naar privé overmaakt, maar rechtstreeks
        een privéaankoop vanaf je zakelijke rekening betaalt.
      </p>

      <h2>Voorbeeld: privéaankoop rechtstreeks zakelijk betalen</h2>
      <p>
        Je koopt een nieuwe televisie voor thuis voor €1.000. Je betaalt per ongeluk met je
        zakelijke rekening. De televisie heeft niets met je onderneming te maken.
      </p>
      <p>
        Dan kun je niet zeggen: &ldquo;Ik heb €1.000 vanaf mijn zakelijke rekening betaald, dus
        mijn onderneming had €1.000 kosten.&rdquo;
      </p>
      <p>
        De uitgave heeft geen zakelijk karakter. Je verwerkt de betaling daarom als
        privéonttrekking en niet als zakelijke kosten.
      </p>

      <h2>Wat doe je als je per ongeluk privé zakelijk hebt betaald?</h2>
      <p>Bij een eenmanszaak is het principe eenvoudig:</p>
      <ol>
        <li>
          <strong>Bepaal of de aankoop echt privé is.</strong>
        </li>
        <li>
          <strong>Registreer hem niet als aftrekbare zakelijke kosten.</strong>
        </li>
        <li>
          <strong>Verwerk de betaling administratief als privéonttrekking.</strong>
        </li>
      </ol>
      <p>
        Je hoeft een foutieve betaling dus niet te veranderen in een zakelijke uitgave. Je
        administratie moet juist laten zien wat er werkelijk is gebeurd: er is geld uit de
        onderneming gegaan voor een privédoel.
      </p>

      <h2>Moet je het bedrag terugbetalen aan je zakelijke rekening?</h2>
      <p>
        Je kunt ervoor kiezen om het bedrag vanaf privé terug te storten naar je zakelijke rekening.
        Voor je administratie verandert dat niet het karakter van de oorspronkelijke aankoop.
      </p>
      <p>De aankoop was privé.</p>
      <p>
        Stort je het geld terug, dan ontstaat daarnaast een geldstroom vanuit privé naar de
        onderneming. Het belangrijkste is dat je de oorspronkelijke privéaankoop niet als zakelijke
        kosten verwerkt alleen omdat deze vanaf je zakelijke rekening is betaald.
      </p>

      <h2>Wat gebeurt er met de btw?</h2>
      <p>
        Ook voor de btw geldt dat een privéaankoop niet opeens zakelijk wordt doordat je met een
        zakelijke rekening betaalt.
      </p>
      <p>
        De Belastingdienst geeft aan dat btw op privéaankopen niet aftrekbaar is als voorbelasting.
      </p>
      <p>
        Koop je bijvoorbeeld voor €121 iets uitsluitend voor privégebruik:
      </p>
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
        dan mag je die €21 niet als voorbelasting aftrekken alleen omdat de €121 vanaf je zakelijke
        rekening is betaald. Het gebruik van de aankoop is bepalend.
      </p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/btw-zakelijke-kosten-aftrekken">
          Btw aftrekken van zakelijke kosten: hoe werkt het?
        </TextLink>
      </p>

      <h2>Wat als je de btw al hebt afgetrokken?</h2>
      <p>
        Dan kan een correctie nodig zijn. De precieze verwerking hangt af van de situatie.
      </p>
      <p>Er is bovendien verschil tussen:</p>
      <ul>
        <li>een aankoop die vanaf het begin uitsluitend privé was;</li>
        <li>een aankoop die zowel zakelijk als privé wordt gebruikt;</li>
        <li>een bedrijfsmiddel dat eerst zakelijk werd gebruikt en later privé wordt;</li>
        <li>goederen die vanuit de onderneming voor privégebruik worden onttrokken.</li>
      </ul>
      <p>
        Voor privégebruik van goederen en diensten van je onderneming gelden afzonderlijke
        btw-regels. Heb je btw afgetrokken terwijl achteraf blijkt dat de aankoop geheel of
        gedeeltelijk privé is gebruikt, controleer dan welke correctie voor jouw situatie van
        toepassing is.
      </p>

      <h2>Wat als een aankoop deels zakelijk en deels privé is?</h2>
      <p>
        Dan is het niet simpelweg een volledig zakelijke óf volledig privé-uitgave. Denk
        bijvoorbeeld aan:
      </p>
      <ul>
        <li>telefoon;</li>
        <li>auto;</li>
        <li>computer;</li>
        <li>internet;</li>
        <li>pand;</li>
        <li>bepaalde abonnementen.</li>
      </ul>
      <p>
        Bij kosten met zowel een zakelijk als privékarakter kan voor de inkomstenbelasting alleen
        het zakelijke deel aftrekbaar zijn.
      </p>
      <p>
        Stel bijvoorbeeld dat een bepaalde kostenpost €100 bedraagt en volgens de toepasselijke
        regels €60 aan je onderneming kan worden toegerekend. Dan betekent het feit dat je de
        volledige €100 vanaf je zakelijke rekening hebt betaald niet automatisch dat €100
        zakelijke kosten zijn. Je moet het privédeel onderscheiden van het zakelijke deel.
      </p>
      <p>Voor de btw kunnen bij gemengd gebruik eigen regels gelden.</p>

      <h2>Voorbeeld: telefoon zakelijk én privé gebruikt</h2>
      <p>
        Stel dat je een telefoon of abonnement zowel voor je onderneming als privé gebruikt. Dan
        moet je kijken naar het zakelijke en persoonlijke karakter van de kosten.
      </p>
      <p>
        De Belastingdienst noemt telefoonkosten expliciet als voorbeeld van kosten waarbij alleen
        het zakelijke deel aftrekbaar kan zijn.
      </p>
      <p>
        De vraag &ldquo;Vanaf welke bankrekening heb ik betaald?&rdquo; is dus niet de
        belangrijkste vraag. De relevante vraag is:{' '}
        <strong>Welk deel van deze kosten heeft betrekking op mijn onderneming?</strong>
      </p>
      <p>
        Lees verder:{' '}
        <TextLink href="/blogs/telefoon-aftrekbaar-zzp">
          Telefoon aftrekbaar als zzp&apos;er?
        </TextLink>
      </p>

      <h2>Voorbeeld: privéboodschappen met zakelijke pas</h2>
      <p>
        Je staat bij de supermarkt en gebruikt per ongeluk je zakelijke betaalpas. Totaal:{' '}
        <strong>€73,42</strong>
      </p>
      <p>
        Je hoeft daar geen ingewikkelde fiscale constructie van te maken. Als het volledig om
        privéboodschappen gaat:
      </p>
      <ul>
        <li>
          <strong>Zakelijke kosten:</strong> €0
        </li>
        <li>
          <strong>Privéonttrekking:</strong> €73,42
        </li>
      </ul>
      <p>
        Bewaar in je administratie voldoende informatie om later te begrijpen waarom de betaling
        niet als zakelijke kosten is verwerkt.
      </p>

      <h2>Voorbeeld: privévakantie zakelijk betaald</h2>
      <p>
        Hetzelfde geldt voor een privévakantie. Stel dat je een hotel van €800 voor een
        privéweekend vanaf je zakelijke rekening betaalt. Dat maakt de hotelkosten niet zakelijk.
      </p>
      <p>
        De betaling wordt niet aftrekbaar doordat er “hotel” op je zakelijke bankafschrift staat.
        Er moet daadwerkelijk een zakelijk verband zijn.
      </p>
      <p>
        Heeft een reis zowel een zakelijk als privékarakter? Dan moet je de toepasselijke regels
        voor de verschillende kosten beoordelen.
      </p>

      <h2>Voorbeeld: zorgverzekering zakelijk betalen</h2>
      <p>
        Ook persoonlijke kosten worden niet zakelijk doordat je ondernemer bent. De Belastingdienst
        noemt kosten die verband houden met je gezondheid, zoals je zorgverzekering, als voorbeeld
        van kosten die geen aftrekbare zakelijke kosten zijn.
      </p>
      <p>
        Betaal je je persoonlijke zorgverzekering vanaf je zakelijke rekening? Dan wordt de premie
        daardoor niet een aftrekbare bedrijfskostenpost.
      </p>

      <h2>Wat als je geld van zakelijk naar privé overmaakt?</h2>
      <p>
        Dat is een normale situatie bij een eenmanszaak. Je onderneming verdient geld en je hebt
        natuurlijk geld nodig om privé van te leven.
      </p>
      <p>
        Stel dat je €3.000 van je zakelijke rekening naar je privérekening overmaakt. Dat is geen
        zakelijke kostenpost van €3.000. Je verwerkt het als privéonttrekking.
      </p>
      <p>
        Hetzelfde geldt uiteindelijk voor privé-uitgaven die je rechtstreeks vanaf je zakelijke
        rekening betaalt. Het verschil is alleen de route van het geld.
      </p>

      <h3>Route 1</h3>
      <p>Zakelijke rekening → privérekening → supermarkt</p>

      <h3>Route 2</h3>
      <p>Zakelijke rekening → supermarkt</p>
      <p>In beide gevallen is het uiteindelijke doel privé.</p>

      <h2>Privékosten zakelijk betaald versus zakelijke kosten privé betaald</h2>
      <p>Dit verschil is belangrijk.</p>

      <h3>Privékosten zakelijk betaald</h3>
      <p>
        Je koopt iets voor jezelf en betaalt vanaf je zakelijke rekening.
      </p>
      <p>
        <strong>Voorbeeld:</strong> boodschappen betaald met je zakelijke pas.
      </p>
      <ul>
        <li>→ privéonttrekking</li>
        <li>→ geen zakelijke kosten</li>
      </ul>

      <h3>Zakelijke kosten privé betaald</h3>
      <p>
        Je koopt iets voor je onderneming en betaalt vanaf je privérekening.
      </p>
      <p>
        <strong>Voorbeeld:</strong> zakelijke software betaald met je persoonlijke creditcard.
      </p>
      <ul>
        <li>→ kan wel zakelijke kosten zijn</li>
        <li>→ privébetaling verandert het zakelijke karakter niet</li>
      </ul>
      <p>De twee situaties zijn dus elkaars spiegelbeeld.</p>
      <p>
        Lees ook:{' '}
        <TextLink href="/blogs/zakelijke-kosten-prive-betaald">
          Zakelijke kosten privé betaald: hoe verwerk je die?
        </TextLink>
      </p>

      <h2>Moet je iedere privébetaling registreren?</h2>
      <p>
        Je administratie moet aansluiten op wat er daadwerkelijk op je zakelijke rekening gebeurt.
        Als er €100 vanaf je zakelijke rekening verdwijnt, maar die betaling geen zakelijke kosten
        is, wil je voorkomen dat die €100 ergens ten onrechte in je winst-en-verliesoverzicht
        terechtkomt.
      </p>
      <p>
        Daarom is het belangrijk om privébetalingen duidelijk als privé te verwerken. Dat helpt
        ook bij het controleren van je zakelijke bankrekening.
      </p>
      <p>Je kunt dan onderscheid maken tussen:</p>
      <ul>
        <li>
          <strong>Zakelijke uitgaven</strong> — kosten die betrekking hebben op je onderneming.
        </li>
        <li>
          <strong>Privéonttrekkingen</strong> — geld dat vanuit de onderneming voor
          privédoeleinden wordt gebruikt.
        </li>
      </ul>

      <h2>Waarom zakelijke en privébetalingen scheiden?</h2>
      <p>
        Af en toe de verkeerde betaalpas gebruiken is meestal administratief op te lossen. Maar als
        je structureel alles door elkaar betaalt, wordt je administratie onnodig lastig.
      </p>
      <p>Je moet dan bij iedere transactie bepalen:</p>
      <ul>
        <li>zakelijk;</li>
        <li>privé;</li>
        <li>gedeeltelijk zakelijk;</li>
        <li>gedeeltelijk privé.</li>
      </ul>
      <p>
        Een aparte zakelijke rekening helpt daarom om overzicht te houden. Het maakt bijvoorbeeld
        gemakkelijker om te zien wat klanten hebben betaald, welke zakelijke kosten je hebt
        gemaakt, welke bedragen nog openstaan en wat daadwerkelijk uit je onderneming is gegaan.
      </p>
      <p>
        Maar onthoud:{' '}
        <strong>de bankrekening bepaalt niet het fiscale karakter van een uitgave.</strong>
      </p>

      <h2>Zakelijke uitgaven bijhouden zonder privékosten mee te tellen</h2>
      <p>
        Dit onderscheid is ook belangrijk wanneer je naar je bedrijfsresultaat kijkt.
      </p>
      <p>Stel dat je dashboard laat zien:</p>
      <p>
        <strong>Omzet:</strong> €5.000
      </p>
      <p>Vanaf je zakelijke rekening is €1.600 uitgegeven. Daarvan is:</p>
      <ul>
        <li>
          <strong>€1.200 zakelijke uitgaven</strong>
        </li>
        <li>
          <strong>€400 privéonttrekkingen</strong>
        </li>
      </ul>
      <p>Dan is je geregistreerde zakelijke resultaat niet:</p>
      <p>
        <strong>€5.000 − €1.600 = €3.400</strong>
      </p>
      <p>maar:</p>
      <p>
        <strong>€5.000 − €1.200 = €3.800</strong>
      </p>
      <p>
        De €400 privéonttrekking is geen zakelijke kostenpost. Dat is precies waarom je niet
        simpelweg alle uitgaande banktransacties als zakelijke uitgaven moet behandelen.
      </p>

      <h2>Zakelijke uitgaven bijhouden met FactuurBaas</h2>
      <p>
        In FactuurBaas houd je je <strong>zakelijke uitgaven</strong> naast je facturen bij.
      </p>
      <p>Daarmee krijg je inzicht in:</p>
      <ul>
        <li>
          <strong>Omzet</strong> — wat je factureert.
        </li>
        <li>
          <strong>Zakelijke uitgaven</strong> — de kosten die je voor je onderneming registreert.
        </li>
        <li>
          <strong>Resultaat</strong> — omzet minus geregistreerde zakelijke uitgaven.
        </li>
        <li>
          <strong>Btw te reserveren</strong> — btw op verkopen minus geregistreerde btw op
          uitgaven.
        </li>
        <li>
          <strong>Openstaand</strong> — facturen die nog niet als betaald zijn gemarkeerd.
        </li>
      </ul>
      <p>
        Een privéaankoop hoort dus niet zomaar tussen je zakelijke uitgaven omdat je toevallig je
        zakelijke betaalpas hebt gebruikt.
      </p>

      <UitgavenCta
        title="Houd je echte zakelijke kosten overzichtelijk bij"
        text="Registreer zakelijke uitgaven en btw naast je facturen en zie wat er van je omzet overblijft."
      />

      <h2>Veelgemaakte fouten</h2>

      <h3>Alle betalingen vanaf de zakelijke rekening als kosten zien</h3>
      <p>Een banktransactie is niet automatisch een zakelijke kostenpost.</p>

      <h3>Privéboodschappen als bedrijfskosten boeken</h3>
      <p>
        Persoonlijke uitgaven zijn niet aftrekbaar alleen omdat je ze zakelijk hebt betaald.
      </p>

      <h3>Btw op privéaankopen aftrekken</h3>
      <p>
        Btw op aankopen die uitsluitend privé worden gebruikt is niet aftrekbaar als voorbelasting.
      </p>

      <h3>Een privéonttrekking van de winst aftrekken</h3>
      <p>
        Een privéonttrekking verlaagt je ondernemingsvermogen, maar is geen zakelijke kostenpost.
      </p>

      <h3>Gemengde kosten volledig zakelijk boeken</h3>
      <p>
        Heeft een kostenpost zowel een zakelijk als privékarakter? Dan kan alleen het zakelijke
        deel aftrekbaar zijn en kunnen voor de btw aanvullende regels gelden.
      </p>

      <h3>Denken dat je jezelf salaris betaalt</h3>
      <p>
        Een privéonttrekking bij een eenmanszaak is niet hetzelfde als een aftrekbare
        loonkostenpost.
      </p>

      <h2>Veelgestelde vragen</h2>

      <h3>Mag je privékosten betalen met je zakelijke rekening?</h3>
      <p>
        Het kan gebeuren, maar de privé-uitgave wordt daardoor niet zakelijk. Bij een eenmanszaak
        wordt een betaling uit het ondernemingsvermogen voor privédoeleinden doorgaans als
        privéonttrekking verwerkt.
      </p>

      <h3>Zijn privékosten aftrekbaar als ik ze zakelijk betaal?</h3>
      <p>
        Nee. Kosten zonder zakelijk karakter zijn niet aftrekbaar van je ondernemingswinst. De
        rekening waarmee je betaalt verandert dat niet.
      </p>

      <h3>Wat is een privéonttrekking?</h3>
      <p>
        Een privéonttrekking is geld of een goed dat je uit je onderneming haalt voor privégebruik.
        Een privéonttrekking verlaagt het ondernemingsvermogen, maar is geen zakelijke kostenpost.
      </p>

      <h3>Mag ik btw op een privéaankoop aftrekken?</h3>
      <p>
        Nee, btw op een aankoop die uitsluitend privé wordt gebruikt is niet aftrekbaar als
        voorbelasting.
      </p>

      <h3>Moet ik een privéaankoop terugbetalen aan mijn zakelijke rekening?</h3>
      <p>
        Je kunt het bedrag vanuit privé terugstorten, maar daarmee wordt de oorspronkelijke
        aankoop niet zakelijk. Zorg vooral dat de betaling correct in je administratie wordt
        verwerkt.
      </p>

      <h3>Is geld dat ik van zakelijk naar privé overmaak aftrekbaar?</h3>
      <p>
        Bij een eenmanszaak is geld dat je voor privédoeleinden aan de onderneming onttrekt geen
        zakelijke kostenpost en dus niet aftrekbaar van de ondernemingswinst.
      </p>

      <h3>Wat als een aankoop deels zakelijk en deels privé is?</h3>
      <p>
        Dan gelden de regels voor gemengde kosten. Voor de inkomstenbelasting is alleen het
        zakelijke deel aftrekbaar. Voor de btw kunnen aparte regels gelden voor gemengd gebruik.
      </p>

      <h3>Wat is het verschil met zakelijke kosten die ik privé betaal?</h3>
      <p>
        Bij zakelijke kosten die privé zijn betaald, is de <strong>uitgave zakelijk</strong>, maar
        komt het geld uit privé. Bij privékosten die zakelijk zijn betaald, is de{' '}
        <strong>uitgave privé</strong>, maar komt het geld uit de onderneming. De aard van de
        uitgave is belangrijker dan de gebruikte bankrekening.
      </p>

      <h2>Kort samengevat</h2>
      <p>Heb je privékosten vanaf je zakelijke rekening betaald?</p>
      <p>Dan geldt bij een eenmanszaak in de basis:</p>
      <ul>
        <li>een privé-uitgave wordt niet zakelijk door de gebruikte bankrekening;</li>
        <li>privékosten zijn niet aftrekbaar van je ondernemingswinst;</li>
        <li>de betaling wordt doorgaans verwerkt als privéonttrekking;</li>
        <li>een privéonttrekking is geen zakelijke kostenpost;</li>
        <li>btw op uitsluitend privé gebruikte aankopen is niet aftrekbaar;</li>
        <li>bij gemengd zakelijk en privégebruik gelden aparte regels;</li>
        <li>houd privébetalingen gescheiden van je echte zakelijke uitgaven.</li>
      </ul>
      <p>De simpelste vuistregel is:</p>
      <blockquote>
        <strong>
          Kijk eerst waarvoor je iets hebt gekocht. Kijk daarna pas vanaf welke rekening je hebt
          betaald.
        </strong>
      </blockquote>
      <p>Wil je je echte zakelijke kosten naast je facturen bijhouden?</p>

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
