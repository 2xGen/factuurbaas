import { facturenBijhoudenArticle, facturenUitbestedenArticle } from '@/lib/facturenBijhoudenBlog';
import { factuurVerkeerdGeboektArticle } from '@/lib/facturenVerkeerdGeboektBlog';
import { facturenEnBtwAangifteArticle } from '@/lib/facturenEnBtwAangifteBlog';
import { inkoopVerkoopfacturenArticle } from '@/lib/inkoopVerkoopfacturenBlog';
import { facturenBewarenArticle } from '@/lib/facturenBewarenBlog';
import { facturenAutomatischArticle } from '@/lib/facturenAutomatischBlog';
import { hoeveelFacturenArticle } from '@/lib/hoeveelFacturenBlog';
import { facturenLatenVerwerkenArticle } from '@/lib/facturenLatenVerwerkenBlog';
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const linkClass = 'text-warm-orange hover:underline';

const IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Facturen%20verwerken%20in%20je%20boekhouding.jpg',
  alt: 'Ondernemer in een kantoor, klaar om facturen in de boekhouding te verwerken.',
};

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function Cta({ href, label }) {
  return (
    <div className="my-8 text-center">
      <Button asChild className="bg-warm-orange hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg text-lg">
        <Link href={href}>{label}</Link>
      </Button>
    </div>
  );
}

function AmountTable({ rows }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-xl border border-slate-200 bg-white">
      <table className="w-full min-w-[320px] text-sm text-slate-700 sm:text-base">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            <th className="px-4 py-3 text-left font-semibold text-deep-blue" scope="col">
              Onderdeel
            </th>
            <th className="px-4 py-3 text-right font-semibold text-deep-blue" scope="col">
              Bedrag
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([label, amount]) => (
            <tr key={label} className="border-b border-slate-100 last:border-0">
              <td className="px-4 py-3">{label}</td>
              <td className="px-4 py-3 text-right">{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const upcoming = [];

function draftArticle({ slug, title }) {
  return {
    slug,
    title,
    metaTitle: title,
    excerpt: title,
    draft: true,
    keywords: '',
    image: IMAGE,
    datePublished: '2026-10-18',
    dateModified: '2026-10-18',
    content: (
      <>
        <p>Dit artikel volgt binnenkort.</p>
        <p>
          Lees intussen{' '}
          <TextLink href="/blogs/facturen-verwerken-boekhouding">
            facturen verwerken in je boekhouding
          </TextLink>
          .
        </p>
      </>
    ),
  };
}

const publishedArticle = {
  slug: 'facturen-verwerken-boekhouding',
  relatedSlugs: [
    'gratis-factuurtool-vs-boekhoudprogramma',
    'btw-factuur-zzp',
    'wanneer-boekhoudsoftware-nodig-zzp',
    'beste-boekhoudprogramma-zzp',
  ],
  metaTitle: "Facturen verwerken in je boekhouding als zzp'er",
  title: 'Facturen verwerken in je boekhouding: zo werkt het',
  excerpt:
    'Hoe verwerk je verkoopfacturen en inkoopfacturen in je boekhouding? Lees wat je moet bijhouden, hoe btw werkt en wanneer uitbesteden slim is.',
  keywords:
    "facturen verwerken, facturen boekhouding, verkoopfacturen verwerken, inkoopfacturen verwerken, facturen zzp, boekhouding zzp",
  image: IMAGE,
  datePublished: '2026-10-18',
  dateModified: '2026-10-18',
  faq: [
    {
      question: 'Moet ik iedere factuur verwerken in mijn boekhouding?',
      answer:
        'Je moet een administratie voeren die voldoet aan de wettelijke eisen en waaruit je zakelijke transacties en fiscale verplichtingen kunnen worden vastgesteld. Zakelijke verkoop- en inkoopfacturen maken daar doorgaans onderdeel van uit.',
    },
    {
      question: 'Kan ik mijn boekhouding in Excel bijhouden?',
      answer:
        'Dat kan, mits je administratie volledig, controleerbaar en volgens de toepasselijke regels wordt bijgehouden. Boekhoudsoftware kan bepaalde werkzaamheden eenvoudiger maken.',
    },
    {
      question: 'Is een factuur maken hetzelfde als een factuur boeken?',
      answer:
        'Nee. Een factuur maken is het opstellen van het document. Een factuur boeken betekent dat je de financiële gevolgen ervan correct verwerkt in je administratie.',
    },
    {
      question: "Moet ik een boekhouder hebben als zzp'er?",
      answer:
        'Nee, een boekhouder is niet standaard verplicht. Je kunt je administratie zelf verzorgen, zolang je aan de wettelijke verplichtingen voldoet.',
    },
    {
      question: 'Kan een boekhouder alleen mijn facturen verwerken?',
      answer:
        'Dat hangt af van de dienstverlening. Sommige boekhouders bieden losse administratieve werkzaamheden aan, terwijl anderen werken met vaste pakketten.',
    },
  ],
  content: (
    <>
      <p>
        Als zzp&apos;er maak je facturen voor je klanten en ontvang je zelf facturen van leveranciers. Maar hoe verwerk
        je deze facturen in je boekhouding? En wat moet je precies bijhouden voor de Belastingdienst?
      </p>
      <p>
        Facturen verwerken betekent meer dan een document bewaren. Je moet zorgen dat inkomsten, zakelijke kosten, btw
        en betalingen op de juiste manier in je administratie terechtkomen.
      </p>
      <p>
        In dit artikel lees je hoe je{' '}
        <TextLink href="/blogs/inkoopfacturen-en-verkoopfacturen">verkoopfacturen en inkoopfacturen</TextLink> verwerkt,
        welke fouten je kunt voorkomen en wanneer het verstandig is om je boekhouding{' '}
        <TextLink href="/blogs/facturen-zelf-boekhouden-of-uitbesteden">uit te besteden</TextLink>.
      </p>

      <h2>Wat betekent facturen verwerken in je boekhouding?</h2>
      <p>Facturen verwerken is het registreren van facturen in je financiële administratie.</p>
      <p>Er zijn twee belangrijke soorten:</p>
      <ul>
        <li>
          <strong>Verkoopfacturen:</strong> facturen die je naar klanten stuurt voor geleverde producten of diensten.
        </li>
        <li>
          <strong>Inkoopfacturen:</strong> facturen die je ontvangt van leveranciers voor zakelijke aankopen of diensten.
        </li>
      </ul>
      <p>
        Bij het verwerken van een factuur leg je onder andere vast om welk bedrag het gaat, welke btw van toepassing is
        en of de factuur al betaald is.
      </p>
      <p>
        Een goede administratie geeft je inzicht in je omzet, kosten, openstaande bedragen en btw-verplichtingen. Wat
        je als zzp&apos;er moet bijhouden, lees je in{' '}
        <TextLink href="/gidsen/boekhouding-zzp">boekhouding voor zzp&apos;ers</TextLink>.
      </p>

      <h2>Hoe verwerk je een verkoopfactuur?</h2>
      <p>Een verkoopfactuur is een factuur die je zelf naar een klant stuurt.</p>
      <p>Stel dat je als zzp&apos;er een dienst levert voor €1.000 exclusief 21% btw.</p>
      <p>Je factuur ziet er dan zo uit:</p>
      <AmountTable
        rows={[
          ['Dienstverlening', '€1.000'],
          ['Btw 21%', '€210'],
          ['Totaal', '€1.210'],
        ]}
      />
      <p>
        In je boekhouding registreer je de omzet van €1.000 en de verschuldigde btw van €210. Het totale factuurbedrag
        van €1.210 staat open totdat de klant betaalt.
      </p>
      <p>Wanneer de betaling binnenkomt, registreer je dat de factuur is voldaan.</p>

      <h3>Wat als de klant nog niet heeft betaald?</h3>
      <p>Een verstuurde factuur kan al onderdeel zijn van je administratie voordat het geld op je bankrekening staat.</p>
      <p>
        Bij een gebruikelijke factuurstelseladministratie is de factuurdatum doorgaans bepalend voor het tijdvak waarin
        je de btw aangeeft. Er bestaan uitzonderingen, zoals situaties waarin het kasstelsel van toepassing is.
      </p>
      <p>
        Daarom is het belangrijk om onderscheid te maken tussen gefactureerde omzet, ontvangen betalingen en
        openstaande facturen.
      </p>
      <p>
        Met de gratis factuurmaker van FactuurBaas kun je facturen opstellen en met een account de betalingsstatus
        bijhouden.
      </p>
      <Cta href="/create-invoice" label="Maak gratis een factuur" />

      <h2>Hoe verwerk je een inkoopfactuur?</h2>
      <p>Een inkoopfactuur ontvang je wanneer je zakelijke producten of diensten koopt.</p>
      <p>Denk bijvoorbeeld aan:</p>
      <ul>
        <li>Een laptop voor je onderneming</li>
        <li>Zakelijke software</li>
        <li>Internet- en telefoonkosten</li>
        <li>Materiaal voor een opdracht</li>
        <li>Kosten van een boekhouder</li>
      </ul>
      <p>Stel dat je een zakelijke aankoop doet van €200 exclusief 21% btw.</p>
      <AmountTable
        rows={[
          ['Zakelijke aankoop', '€200'],
          ['Btw 21%', '€42'],
          ['Totaal', '€242'],
        ]}
      />
      <p>
        In je administratie registreer je de aankoop en de bijbehorende btw. Zakelijke uitgaven kun je ook bijhouden
        met <TextLink href="/uitgaven-bijhouden">uitgaven bijhouden</TextLink>.
      </p>
      <p>
        Of je de €42 btw daadwerkelijk mag aftrekken, hangt onder andere af van het zakelijke gebruik, je btw-positie
        en de geldende voorwaarden. Meer daarover lees je bij{' '}
        <TextLink href="/blogs/facturen-en-btw-aangifte">facturen en btw-aangifte</TextLink> en in{' '}
        <TextLink href="/blogs/btw-factuur-zzp">btw op je factuur</TextLink>.
      </p>
      <p>
        Niet iedere zakelijke aankoop is bovendien direct volledig aftrekbaar als kosten. Voor bepaalde bedrijfsmiddelen
        gelden afschrijvingsregels.
      </p>

      <h2>Facturen verwerken: stap voor stap</h2>
      <h3>Stap 1. Verzamel je facturen</h3>
      <p>Bewaar alle verkoopfacturen en inkoopfacturen op een overzichtelijke plek.</p>
      <p>Zorg dat je de documenten later eenvoudig kunt terugvinden.</p>
      <h3>Stap 2. Controleer de gegevens</h3>
      <p>
        Controleer of de factuur de benodigde informatie bevat, zoals de datum, het factuurnummer, de gegevens van de
        leverancier en de bedragen.
      </p>
      <p>Controleer ook of het btw-tarief juist is toegepast.</p>
      <h3>Stap 3. Registreer de factuur</h3>
      <p>Leg de factuur vast in je administratie.</p>
      <p>
        Dit kan met boekhoudsoftware of via een andere geschikte administratiemethode. Wil je dit{' '}
        <TextLink href="/blogs/facturen-automatisch-verwerken">automatisch laten verlopen</TextLink>, dan helpt
        software vaak.
      </p>
      <h3>Stap 4. Verwerk de btw</h3>
      <p>
        Controleer welke btw je moet afdragen en welke btw je eventueel als voorbelasting mag aftrekken. Reken een
        bedrag na met de <TextLink href="/tools/btw-calculator">btw-calculator</TextLink>.
      </p>
      <h3>Stap 5. Houd betalingen bij</h3>
      <p>Controleer welke verkoopfacturen betaald zijn en welke nog openstaan.</p>
      <p>Doe hetzelfde voor je eigen leveranciersfacturen.</p>
      <h3>Stap 6. Bewaar je administratie</h3>
      <p>
        Bewaar facturen en bijbehorende administratieve gegevens gedurende de toepasselijke wettelijke bewaartermijn.
        Hoe je dat aanpakt, lees je in{' '}
        <TextLink href="/blogs/facturen-bewaren-belastingdienst">facturen bewaren voor de Belastingdienst</TextLink>.
      </p>
      <p>
        Voor veel onderdelen van de Nederlandse ondernemersadministratie geldt een algemene bewaartermijn van zeven
        jaar. Voor bepaalde gegevens gelden afwijkende termijnen.
      </p>

      <h2>Kun je facturen zelf verwerken als zzp&apos;er?</h2>
      <p>
        Ja. Veel zzp&apos;ers kunnen hun facturen prima zelf{' '}
        <TextLink href="/blogs/facturen-bijhouden-zzp">bijhouden</TextLink>, zeker wanneer hun administratie
        overzichtelijk is. Hoe je dat aanpakt, staat in{' '}
        <TextLink href="/gidsen/zelf-boekhouden-zzp">zelf boekhouden als zzp&apos;er</TextLink>.
      </p>
      <p>Bijvoorbeeld wanneer je:</p>
      <ul>
        <li>
          Een <TextLink href="/blogs/hoeveel-facturen-zelf-verwerken">beperkt aantal facturen</TextLink> per maand
          verstuurt
        </li>
        <li>Weinig zakelijke uitgaven hebt</li>
        <li>Voornamelijk in Nederland werkt</li>
        <li>Geen ingewikkelde btw-situaties hebt</li>
        <li>Zelf tijd wilt besteden aan je administratie</li>
      </ul>
      <p>Het is niet verplicht om voor iedere onderneming een boekhouder in te schakelen.</p>
      <p>Wel ben je als ondernemer verantwoordelijk voor een correcte administratie.</p>

      <h2>Factuurprogramma of boekhoudprogramma?</h2>
      <p>
        Een factuurprogramma helpt je voornamelijk bij het maken en beheren van facturen. Het verschil met
        boekhoudsoftware lees je in{' '}
        <TextLink href="/blogs/gratis-factuurtool-vs-boekhoudprogramma">
          factuurprogramma of boekhoudprogramma
        </TextLink>
        .
      </p>
      <p>Een boekhoudprogramma gaat verder en kan bijvoorbeeld ook helpen bij:</p>
      <ul>
        <li>Het verwerken van inkoopfacturen</li>
        <li>Het boeken van zakelijke kosten</li>
        <li>Het verwerken van banktransacties</li>
        <li>Het opstellen van btw-overzichten</li>
        <li>Het beheren van grootboekrekeningen</li>
        <li>Het voorbereiden van financiële rapportages</li>
      </ul>
      <p>
        FactuurBaas biedt gratis facturen, offertes, inkomsten- en uitgavenregistratie en financiële overzichten.
      </p>
      <p>Voor een volledige boekhouding kan aanvullende boekhoudsoftware of ondersteuning van een boekhouder nodig zijn.</p>
      <Cta href="/boekhoudprogramma-vergelijken" label="Vergelijk boekhoudprogramma's" />

      <h2>Wanneer is facturen verwerken uitbesteden verstandig?</h2>
      <p>Zelf facturen verwerken kan tijd besparen op boekhoudkosten, maar kost ook aandacht en administratie.</p>
      <p>Uitbesteden kan interessant worden wanneer:</p>
      <ul>
        <li>Je steeds meer facturen ontvangt of verstuurt</li>
        <li>Je weinig tijd hebt voor administratieve werkzaamheden</li>
        <li>Je regelmatig twijfelt over btw of zakelijke kosten</li>
        <li>Je met buitenlandse klanten of leveranciers werkt</li>
        <li>Je fouten in je administratie wilt voorkomen</li>
        <li>Je liever tijd besteedt aan je klanten en onderneming</li>
      </ul>
      <p>
        Een boekhouder kan je helpen bij het verwerken van facturen, controleren van boekingen en verzorgen van
        aangiften, afhankelijk van de gemaakte afspraken. Je kunt ook alleen{' '}
        <TextLink href="/blogs/facturen-laten-verwerken-boekhouder">facturen laten verwerken</TextLink>.
      </p>
      <h3>Liever hulp bij je boekhouding?</h3>
      <p>
        Je hoeft niet alles zelf uit te zoeken. Via FactuurBaas kun je gratis en vrijblijvend een aanvraag indienen om
        in contact te komen met een partij die je kan helpen bij het vinden van boekhoudkundige ondersteuning.
      </p>
      <Cta href="/boekhouder-vinden" label="Vind een boekhouder" />

      <h2>Veelgemaakte fouten bij het verwerken van facturen</h2>
      <h3>1. Privé- en zakelijke kosten door elkaar halen</h3>
      <p>
        Niet iedere uitgave is automatisch een zakelijke kostenpost. Controleer of een aankoop zakelijk is en hoe je
        deze moet verwerken.
      </p>
      <h3>2. De verkeerde btw toepassen</h3>
      <p>
        Niet iedere factuur valt onder 21% btw. Er zijn ook andere tarieven, vrijstellingen en verleggingsregelingen.
        Zie je een fout achteraf, lees dan{' '}
        <TextLink href="/blogs/factuur-verkeerd-geboekt">factuur verkeerd geboekt: wat nu?</TextLink>
      </p>
      <h3>3. Betalingen dubbel registreren</h3>
      <p>
        Wanneer een factuur al als omzet is geregistreerd, moet je voorkomen dat de latere bankbetaling opnieuw als
        omzet wordt geboekt.
      </p>
      <h3>4. Facturen niet bewaren</h3>
      <p>
        Een bankafschrijving alleen is niet altijd voldoende als onderbouwing van een zakelijke aankoop. Bewaar de
        relevante facturen en bewijsstukken.
      </p>
      <h3>5. Geen onderscheid maken tussen omzet en ontvangen geld</h3>
      <p>Een openstaande verkoopfactuur kan al meetellen in je omzetadministratie, terwijl de betaling nog niet binnen is.</p>
      <p>Het onderscheid is belangrijk voor een betrouwbaar financieel overzicht.</p>

      <h2>Veelgestelde vragen</h2>
      <h3>Moet ik iedere factuur verwerken in mijn boekhouding?</h3>
      <p>
        Je moet een administratie voeren die voldoet aan de wettelijke eisen en waaruit je zakelijke transacties en
        fiscale verplichtingen kunnen worden vastgesteld. Zakelijke verkoop- en inkoopfacturen maken daar doorgaans
        onderdeel van uit.
      </p>
      <h3>Kan ik mijn boekhouding in Excel bijhouden?</h3>
      <p>
        Dat kan, mits je administratie volledig, controleerbaar en volgens de toepasselijke regels wordt bijgehouden.
        Boekhoudsoftware kan bepaalde werkzaamheden eenvoudiger maken.
      </p>
      <h3>Is een factuur maken hetzelfde als een factuur boeken?</h3>
      <p>
        Nee. Een factuur maken is het opstellen van het document. Een factuur boeken betekent dat je de financiële
        gevolgen ervan correct verwerkt in je administratie.
      </p>
      <h3>Moet ik een boekhouder hebben als zzp&apos;er?</h3>
      <p>
        Nee, een boekhouder is niet standaard verplicht. Je kunt je administratie zelf verzorgen, zolang je aan de
        wettelijke verplichtingen voldoet.
      </p>
      <h3>Kan een boekhouder alleen mijn facturen verwerken?</h3>
      <p>
        Dat hangt af van de dienstverlening. Sommige boekhouders bieden losse administratieve werkzaamheden aan,
        terwijl anderen werken met vaste pakketten.
      </p>

      <h2>Zelf doen of uitbesteden?</h2>
      <p>Facturen verwerken hoeft niet ingewikkeld te zijn wanneer je administratie overzichtelijk blijft.</p>
      <p>
        Met FactuurBaas kun je gratis facturen maken, klanten beheren en inkomsten en uitgaven bijhouden. Voor
        uitgebreidere boekhoudkundige verwerking kun je aanvullende software gebruiken of een boekhouder inschakelen.
      </p>
      <p>Wil je ondersteuning bij het verwerken van je facturen, btw-aangifte of administratie?</p>
      <Cta href="/boekhouder-vinden" label="Vind gratis en vrijblijvend een boekhouder" />
    </>
  ),
};

export const facturenVerwerkenArticles = [
  publishedArticle,
  facturenBijhoudenArticle,
  facturenUitbestedenArticle,
  factuurVerkeerdGeboektArticle,
  facturenEnBtwAangifteArticle,
  inkoopVerkoopfacturenArticle,
  facturenBewarenArticle,
  facturenAutomatischArticle,
  hoeveelFacturenArticle,
  facturenLatenVerwerkenArticle,
  ...upcoming.map(draftArticle),
];
