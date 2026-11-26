import Link from 'next/link';
import { Suspense } from 'react';
import { UserRound } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import BookkeeperWorthItCalculator from '@/components/leads/BookkeeperWorthItCalculator';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  FaqList,
  PageHeader,
  PaperCard,
  TrustList,
  btn,
} from '@/components/site/editorial';

const title = "Boekhouder ZZP vinden? Kosten €100–€150 p/m | FactuurBaas";
const description =
  "Op zoek naar een boekhouder voor je zzp of eenmanszaak? Bekijk indicatieve kosten, ontdek wat je kunt uitbesteden en vraag vrijblijvend hulp aan.";

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/zzp%20boekhouder%20vinden.jpg',
  alt: "Boekhouder voor zzp'ers en eenmanszaken vinden.",
};

export const metadata = {
  title,
  description,
  keywords:
    "boekhouder zzp, boekhouder voor zzp, zzp boekhouder, boekhouder eenmanszaak, boekhouder voor eenmanszaak, kosten boekhouder zzp, goedkope boekhouder zzp, boekhouding zzp uitbesteden, administratiekantoor zzp, online boekhouder zzp, boekhouder startende zzp, boekhouder belastingaangifte zzp, boekhouder kleine ondernemer, beste boekhouder zzp, boekhouder nodig als zzp",
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-zzp' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-zzp',
    siteName: 'FactuurBaas',
    type: 'website',
    images: [
      {
        url: FEATURED_IMAGE.url,
        width: 1200,
        height: 630,
        alt: FEATURED_IMAGE.alt,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [FEATURED_IMAGE.url],
  },
};

const FAQS = [
  {
    q: "Wat kost een boekhouder voor een zzp'er per maand?",
    a: 'Voor volledige uitbesteding van de boekhouding van een eenmanszaak liggen de indicatieve kosten tussen €100 en €150 per maand. De uiteindelijke prijs hangt af van het aantal transacties, de complexiteit en de gewenste dienstverlening.',
  },
  {
    q: "Wat kost een boekhouder voor een zzp'er per jaar?",
    a: 'De indicatieve jaarlijkse kosten liggen tussen €1.200 en €1.800 bij volledige uitbesteding. Aanvullende diensten kunnen leiden tot hogere kosten.',
  },
  {
    q: "Is een boekhouder verplicht voor zzp'ers?",
    a: "Nee. Als zzp'er ben je niet verplicht om een boekhouder in te schakelen. Je moet wel een correcte administratie bijhouden en voldoen aan je fiscale verplichtingen.",
  },
  {
    q: "Heb ik als startende zzp'er een boekhouder nodig?",
    a: 'Niet noodzakelijk. Wanneer je administratie eenvoudig is, kun je veel werkzaamheden zelf uitvoeren. Een boekhouder kan wel helpen om je administratie vanaf het begin goed te organiseren.',
  },
  {
    q: 'Zijn de kosten van een boekhouder zakelijk aftrekbaar?',
    a: 'Boekhoudkosten die betrekking hebben op je onderneming zijn doorgaans zakelijke kosten. Voor werkzaamheden die betrekking hebben op privézaken kunnen andere regels gelden.',
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte uitbesteden?',
    a: 'Sommige boekhouders bieden deze mogelijkheid aan. Veel administratiekantoren richten zich echter op doorlopende samenwerkingen. Vraag daarom vooraf welke losse diensten beschikbaar zijn.',
  },
  {
    q: 'Kan een boekhouder mijn inkomstenbelasting verzorgen?',
    a: 'Veel boekhouders bieden ondersteuning bij de jaarlijkse aangifte inkomstenbelasting. Controleer vooraf of deze dienstverlening is inbegrepen in het maandelijkse tarief.',
  },
  {
    q: 'Heb ik een boekhouder nodig als ik gebruikmaak van de KOR?',
    a: 'Nee. Ook wanneer je gebruikmaakt van de kleineondernemersregeling ben je niet verplicht om een boekhouder in te schakelen. Je moet wel blijven voldoen aan de toepasselijke administratieve en fiscale verplichtingen.',
  },
  {
    q: 'Kan ik zelf facturen blijven maken als ik een boekhouder heb?',
    a: 'Ja. Je kunt gratis facturen maken met FactuurBaas en deze als PDF of UBL-bestand aanleveren bij je boekhouder.',
  },
  {
    q: 'Moet ik een boekhoudprogramma hebben als ik een boekhouder inschakel?',
    a: 'Niet altijd. Sommige boekhouders bieden toegang tot hun eigen boekhoudsoftware of verwerken documenten die je digitaal aanlevert. Bespreek vooraf welke werkwijze wordt gebruikt.',
  },
  {
    q: 'Wat is beter: een online boekhouder of een lokale boekhouder?',
    a: 'Dat hangt af van je voorkeuren. Een online boekhouder kan praktisch zijn wanneer je digitaal werkt. Een lokaal kantoor kan aantrekkelijk zijn wanneer je regelmatig persoonlijk wilt overleggen.',
  },
  {
    q: 'Wanneer is het verstandig om over te stappen naar een andere boekhouder?',
    a: 'Wanneer je huidige boekhouder niet meer aansluit bij je onderneming, onvoldoende ondersteuning biedt of onduidelijke tarieven hanteert, kan overstappen interessant zijn.',
  },
  {
    q: 'Kan ik een boekhouder vinden voor mijn parttime onderneming?',
    a: 'Ja. Ook wanneer je zelfstandig ondernemerschap combineert met een baan in loondienst, kun je ondersteuning aanvragen bij je administratie en belastingaangiften.',
  },
  {
    q: 'Is een boekhouder vinden via FactuurBaas gratis?',
    a: 'Ja. Het indienen van een aanvraag via FactuurBaas is gratis en vrijblijvend. De uiteindelijke dienstverlening van een boekhouder is doorgaans betaald.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factuurbaas.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Boekhouden', item: 'https://factuurbaas.nl/boekhouden' },
    { '@type': 'ListItem', position: 3, name: 'Boekhouder ZZP', item: 'https://factuurbaas.nl/boekhouder-zzp' },
  ],
};

const linkClass = 'underline decoration-ink/20 underline-offset-4 hover:decoration-ember';

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

function FormCta({ children }) {
  return (
    <a href="#boekhouder-formulier" className={`${btn.secondary} mt-8`}>
      {children}
      <ArrowIcon />
    </a>
  );
}

function LeadForm() {
  return (
    <div>
      <p className="font-display text-[1.65rem] font-normal leading-tight tracking-[-0.02em] text-ink">
        Vind jouw boekhouder
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons kort over je onderneming. Eenmanszaak is al geselecteerd.
      </p>
      <Suspense
        fallback={<div className="min-h-[22rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm
          source="/boekhouder-zzp"
          sourceType="seo"
          id="boekhouder-formulier"
          initialBusinessType="eenmanszaak-vof-stichting"
          lockBusinessType
        />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw administratieve wensen te bespreken.
      </p>
    </div>
  );
}

export default function BoekhouderZzpPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouder ZZP' },
        ]}
        eyebrow="Boekhouder ZZP"
        eyebrowIcon={UserRound}
        title="Boekhouder voor zzp'ers en eenmanszaken vinden"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Meer tijd voor je onderneming, minder tijd voor administratie.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Vanaf €100 per maand',
            "Voor startende en ervaren zzp'ers",
            'Gratis en vrijblijvend aanvragen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <PaperCard className="p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                Indicatieve maandelijkse kosten
              </p>
              <p className="mt-3 font-display text-4xl font-normal tracking-[-0.03em] text-ink">€100–150</p>
              <p className="mt-1 text-sm text-ink-500">Volledige boekhouding</p>
            </PaperCard>
            <PaperCard className="p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">
                Indicatieve jaarlijkse kosten
              </p>
              <p className="mt-3 font-display text-4xl font-normal tracking-[-0.03em] text-ink">€1.200–1.800</p>
              <p className="mt-1 text-sm text-ink-500">Afhankelijk van dienstverlening</p>
            </PaperCard>
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Bereken jouw boekhoudkosten
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                Gratis calculator · Geen account nodig
              </p>
            </div>
            <Link
              href="/tools/boekhouder-kosten-calculator?vorm=eenmanszaak"
              className={`${btn.primary} w-full shrink-0 sm:w-auto`}
            >
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. Bekijk ook{' '}
            <TextLink href="/boekhouder-kosten">alle boekhoudtarieven</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost een boekhouder voor een zzp&apos;er?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Voor een zzp&apos;er met een eenmanszaak liggen de indicatieve kosten voor volledige uitbesteding
              van de boekhouding tussen €100 en €150 per maand — ongeveer €1.200 tot €1.800 per jaar.
            </p>
            <p>
              De uiteindelijke kosten hangen af van het aantal facturen, financiële transacties, de
              complexiteit van je administratie en de werkzaamheden die je wilt uitbesteden.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Periode</th>
                  <th className="px-5 py-3 font-mono font-normal">Indicatieve kosten</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Per maand', '€100 – €150'],
                  ['Per kwartaal', '€300 – €450'],
                  ['Per jaar', '€1.200 – €1.800'],
                ].map(([period, cost]) => (
                  <tr key={period} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{period}</td>
                    <td className="px-5 py-3.5">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat bepaalt de kosten van een ZZP-boekhouder?
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Het aantal verkoopfacturen en inkoopfacturen.</li>
            <li>Het aantal zakelijke banktransacties.</li>
            <li>De complexiteit van je btw-administratie.</li>
            <li>De aanwezigheid van buitenlandse klanten of leveranciers.</li>
            <li>De manier waarop je documenten aanlevert.</li>
            <li>De werkzaamheden die je zelf blijft uitvoeren.</li>
            <li>De behoefte aan financieel en fiscaal advies.</li>
          </ul>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat is inbegrepen bij een boekhouder voor zzp&apos;ers?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Vergelijk niet alleen het maandtarief, maar ook de werkzaamheden die je daarvoor ontvangt.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheid</th>
                  <th className="px-5 py-3 font-mono font-normal">Vooraf controleren</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Financiële administratie', 'Welke documenten en transacties worden verwerkt?'],
                  ['Btw-aangiften', 'Zijn alle periodieke aangiften inbegrepen?'],
                  ['Inkomstenbelasting', 'Is de jaarlijkse aangifte inbegrepen?'],
                  ['Jaarafsluiting', 'Worden de jaarlijkse financiële overzichten verzorgd?'],
                  ['Boekhoudsoftware', 'Zijn eventuele softwarekosten inbegrepen?'],
                  ['Fiscaal advies', 'Is advies inbegrepen of wordt dit apart berekend?'],
                  ['Persoonlijk contact', 'Hoe vaak kun je vragen stellen of overleggen?'],
                ].map(([work, check]) => (
                  <tr key={work} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{work}</td>
                    <td className="px-5 py-3.5">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Heb je als zzp&apos;er een boekhouder nodig?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Als zzp&apos;er ben je niet verplicht om een boekhouder in te schakelen. Je bent wel
              verantwoordelijk voor een correcte administratie en het nakomen van je fiscale verplichtingen.
            </p>
            <p>
              Zelf boekhouden kan prima werken wanneer je administratie eenvoudig is, je weinig transacties
              hebt en voldoende kennis hebt van de relevante belastingregels.
            </p>
            <p>Een boekhouder kan interessant worden wanneer:</p>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Je steeds meer tijd kwijt bent aan administratie.</li>
            <li>Je onzeker bent over belastingaangiften.</li>
            <li>Je regelmatig zakelijke kosten moet beoordelen.</li>
            <li>Je onderneming groeit of je buitenlandse klanten hebt.</li>
            <li>Je administratie regelmatig achterloopt.</li>
            <li>Je onvoldoende inzicht hebt in je winst.</li>
            <li>Je liever meer tijd besteedt aan betaalde opdrachten.</li>
            <li>Je behoefte hebt aan professioneel fiscaal advies.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Je kunt ook zelf blijven factureren en bepaalde werkzaamheden door een professional laten
            verzorgen. Meer over <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <DisplayHeading size="md">Is een boekhouder zijn geld waard voor een zzp&apos;er?</DisplayHeading>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
              <p>
                Een boekhouder kost geld, maar zelf boekhouden kost tijd. Iedere middag die je besteedt aan
                administratie kun je niet tegelijkertijd besteden aan klanten, opdrachten of het ontwikkelen
                van je onderneming.
              </p>
            </div>
          </div>
          <div className="mt-10">
            <BookkeeperWorthItCalculator />
          </div>
          <div className="mx-auto mt-12 max-w-3xl">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Voorbeeld: zelfstandig ondernemer met een uurtarief van €60
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Stel dat je vijf uur per maand bezig bent met facturen, betalingen en belastingaangiften.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
              <table className="w-full min-w-[20rem] text-left text-sm">
                <tbody className="text-ink-700">
                  {[
                    ['Administratietijd per maand', '5 uur'],
                    ['Zakelijk uurtarief', '€60'],
                    ['Potentiële waarde van je tijd per maand', '€300'],
                    ['Potentiële waarde van je tijd per jaar', '€3.600'],
                    ['Indicatieve boekhoudkosten per jaar', '€1.200 – €1.800'],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                      <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                      <td className="px-5 py-3.5 text-right tabular-nums">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Hoeveel tijd moet een boekhouder je besparen?
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Bij een boekhouder die €125 per maand kost, verschilt het financiële omslagpunt per zakelijk
              uurtarief.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
              <table className="w-full min-w-[24rem] text-left text-sm">
                <thead>
                  <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                    <th className="px-5 py-3 font-mono font-normal">Jouw uurtarief</th>
                    <th className="px-5 py-3 font-mono font-normal">Benodigde tijdsbesparing per maand</th>
                  </tr>
                </thead>
                <tbody className="text-ink-700">
                  {[
                    ['€30', '4 uur en 10 minuten'],
                    ['€40', '3 uur en 8 minuten'],
                    ['€50', '2 uur en 30 minuten'],
                    ['€60', '2 uur en 5 minuten'],
                    ['€75', '1 uur en 40 minuten'],
                    ['€100', '1 uur en 15 minuten'],
                  ].map(([rate, hours]) => (
                    <tr key={rate} className="border-b border-ink/[0.06] last:border-0">
                      <td className="px-5 py-3.5 font-medium text-ink">{rate}</td>
                      <td className="px-5 py-3.5">{hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
              Theoretische omslagpunten op basis van omzetwaarde — geen rekening met belastingen of
              beschikbaarheid van betaalde opdrachten.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Welke werkzaamheden kun je uitbesteden?
          </DisplayHeading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Facturen verwerken', 'Verkoopfacturen, inkoopfacturen, bonnetjes en openstaande betalingen.'],
              ['Btw-aangifte', 'Verschuldigde en aftrekbare btw, verschillende tarieven en correcties.'],
              ['Inkomstenbelasting', 'Fiscale winst, aftrekposten en ondernemersregelingen.'],
              ['Zakelijke kosten', 'Beoordelen en verwerken van aftrekbare uitgaven.'],
              ['Jaarafsluiting', 'Balans, winst-en-verliesrekening en jaaroverzichten.'],
              ['Fiscaal advies', 'Belastingreserveringen, investeringen en groei.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Welke werkzaamheden doet een boekhouder voor zzp&apos;ers?</DisplayHeading>
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Verkoopfacturen en inkoopfacturen verwerken
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Een boekhouder kan je verkoopfacturen, inkoopfacturen, bonnetjes en andere zakelijke
                documenten verwerken. Je kunt zelf facturen blijven maken met FactuurBaas en deze vervolgens
                aanleveren.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Btw-aangifte verzorgen</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Een boekhouder kan helpen bij verschuldigde en aftrekbare btw, verschillende tarieven, het
                voorbereiden en indienen van aangiften, en bijzondere btw-situaties. Ook bij de
                kleineondernemersregeling (KOR) blijft een goede administratie belangrijk. Zie{' '}
                <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Aangifte inkomstenbelasting
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Ondersteuning bij fiscale winst, zakelijke kosten en ondernemersregelingen zoals
                zelfstandigenaftrek, startersaftrek, mkb-winstvrijstelling, investeringsaftrek en
                afschrijvingen. Niet iedere zzp&apos;er komt automatisch voor alle regelingen in aanmerking.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Zakelijke kosten, jaarafsluiting en advies
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Van het beoordelen van aftrekbare uitgaven tot balans en winst-en-verliesrekening, en
                ondersteuning bij belastingreserveringen, investeringen of een mogelijke overstap naar een{' '}
                <TextLink href="/boekhouder-bv">BV</TextLink>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-14">
          <div>
            <DisplayHeading size="md">Een boekhouder voor iedere fase van je onderneming</DisplayHeading>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor startende zzp&apos;ers
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Een boekhouder kan helpen om vanaf het begin een duidelijke administratieve werkwijze op te
              zetten: administratie inrichten, software kiezen, btw-verplichtingen begrijpen, zakelijke kosten
              verwerken, belastingreserveringen en startersregelingen.
            </p>
            <FormCta>Vind een boekhouder voor je nieuwe onderneming</FormCta>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor zzp&apos;ers met weinig facturen
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Heb je slechts enkele klanten? Dan heb je mogelijk geen uitgebreid boekhoudpakket nodig. Blijf
              zelf factureren terwijl een boekhouder ondersteuning biedt bij aangiften en jaarafsluiting.
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Fulltime, parttime en internationale zzp&apos;ers
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Fulltime zelfstandigen hebben vaak behoefte aan actueel financieel inzicht. Parttime
                ondernemers combineren soms loondienst met zelfstandig werk — fiscale voorwaarden kunnen
                verschillen.
              </p>
              <p>
                Werk je voor buitenlandse opdrachtgevers? Denk aan btw verleggen, ICP-opgaven, facturen in
                buitenlandse valuta en internationale btw-regels.
              </p>
              <p>
                Groeit je eenmanszaak door naar personeel of een BV? Bekijk{' '}
                <TextLink href="/boekhouder-bv">boekhouder voor je BV</TextLink> of{' '}
                <TextLink href="/boekhouder-mkb">boekhouder voor het MKB</TextLink>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Een boekhouder voor jouw beroep of branche
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Een boekhouder met ervaring in jouw werkzaamheden begrijpt mogelijk beter welke kosten en fiscale
            aandachtspunten relevant zijn.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['ZZP in de bouw', 'Materiaalkosten, gereedschap, zakelijke voertuigen en btw-verlegging.'],
              ['ZZP in de zorg', 'Specifieke btw-regels, beroepskosten en verschillende opdrachtgevers.'],
              ['Freelancers en consultants', 'Overzichtelijke facturatie, internationale klanten en fiscale planning.'],
              ['Creatieve ondernemers', 'Investeringen in apparatuur, software, projectkosten en wisselende inkomsten.'],
              ['Coaches en trainers', 'Abonnementen, losse lessen, reiskosten en verschillende locaties.'],
              ['Webshopeigenaren', 'Veel transacties, voorraad, retouren, betaalproviders en internationale verkopen.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <FormCta>Vind een boekhouder voor jouw onderneming</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Kies wat bij jouw onderneming past
          </DisplayHeading>
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                'Zelf boekhouden',
                'Meer eigen tijd, minder externe kosten',
                'Interessant bij weinig transacties en voldoende administratieve kennis.',
              ],
              [
                'Gedeeltelijk uitbesteden',
                'Zelf factureren, professionele ondersteuning',
                'Bijvoorbeeld alleen btw-aangiften, inkomstenbelasting of jaarafsluiting.',
              ],
              [
                'Volledig uitbesteden',
                'Meer tijd voor je onderneming',
                'Indicatief €100–€150 per maand. Jij levert tijdig de benodigde informatie aan.',
              ],
            ].map(([heading, sub, text]) => (
              <PaperCard key={heading} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember">{sub}</p>
                <h3 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Onderdeel</th>
                  <th className="px-5 py-3 font-mono font-normal">Zelf</th>
                  <th className="px-5 py-3 font-mono font-normal">Gedeeltelijk</th>
                  <th className="px-5 py-3 font-mono font-normal">Volledig</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Facturen maken', 'Zelf', 'Meestal zelf', 'Zelf of volgens afspraak'],
                  ['Administratie verwerken', 'Zelf', 'Gedeeld', 'Boekhouder'],
                  ['Btw-aangifte', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Inkomstenbelasting', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Jaarafsluiting', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Tijdsinvestering', 'Relatief hoog', 'Gemiddeld', 'Relatief laag'],
                  ['Externe kosten', 'Relatief laag', 'Afhankelijk van diensten', 'Indicatief €100–€150 p/m'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-ink/[0.06] last:border-0">
                    {row.map((cell, index) => (
                      <td
                        key={`${row[0]}-${index}`}
                        className={`px-5 py-3.5 ${index === 0 ? 'font-medium text-ink' : ''}`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Zelf gratis facturen maken en je boekhouding uitbesteden</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Een boekhouder inschakelen betekent niet dat je ook een betaald factuurprogramma moet gebruiken.
            Met FactuurBaas kun je zelf gratis professionele facturen maken en downloaden als PDF of
            UBL-bestand — inclusief factuurnummers, betaaltermijnen en btw.
          </p>
          <div className="mt-8">
            <Link href="/" className={btn.secondary}>
              Maak gratis een factuur
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Hoe vind je een goedkope boekhouder voor zzp&apos;ers?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Het laagste maandtarief is niet automatisch de voordeligste keuze. Controleer of btw-aangiften,
            inkomstenbelasting, jaarafsluiting, transactielimieten, software en advies zijn inbegrepen.
          </p>
          <h3 className="mt-10 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Vergelijk de totale jaarlijkse kosten
          </h3>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Kosten</th>
                  <th className="px-5 py-3 font-mono font-normal">Pakket A</th>
                  <th className="px-5 py-3 font-mono font-normal">Pakket B</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Maandelijkse kosten', '€75', '€125'],
                  ['Kosten over 12 maanden', '€900', '€1.500'],
                  ['Jaarafsluiting en inkomstenbelasting', '€450', 'Inbegrepen'],
                  ['Boekhoudsoftware per jaar', '€180', 'Inbegrepen'],
                  ['Totale jaarlijkse kosten', '€1.530', '€1.500'],
                ].map(([label, a, b]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5">{a}</td>
                    <td className="px-5 py-3.5">{b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Fictief rekenvoorbeeld: een lager maandtarief kan duurder uitvallen wanneer aanvullende
            werkzaamheden apart worden berekend.
          </p>
          <FormCta>Vind een boekhouder die past bij jouw budget</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Online boekhouder of een boekhouder in de buurt?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Steeds meer administratieve werkzaamheden kunnen digitaal. Je hoeft niet noodzakelijk een
              boekhouder in je eigen woonplaats te kiezen. Een{' '}
              <TextLink href="/online-boekhouder">online boekhouder</TextLink> werkt vooral met digitale
              documenten, software en contact via telefoon, e-mail of videogesprekken.
            </p>
            <p>
              Een lokaal kantoor kan aantrekkelijk zijn wanneer je persoonlijk contact belangrijk vindt. Kies
              vooral een kantoor dat aansluit bij jouw werkzaamheden, budget en manier van samenwerken.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Boekhouder of boekhoudprogramma voor zzp&apos;ers?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Een boekhoudprogramma en een boekhouder zijn niet hetzelfde. Software helpt je gegevens digitaal
            te verwerken; een boekhouder kan daarnaast controleren, interpreteren en adviseren. Je kunt beide
            combineren. Wil je eerst zelf boekhouden onderzoeken?{' '}
            <TextLink href="/boekhoudprogramma-vergelijken">Boekhoudprogramma vergelijken</TextLink>.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Boekhoudprogramma</th>
                  <th className="px-5 py-3 font-mono font-normal">Boekhouder</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Software voor je administratie', 'Professionele dienstverlening'],
                  ['Je verwerkt doorgaans zelf gegevens', 'Kan verwerking overnemen'],
                  ['Automatische berekeningen en overzichten', 'Controle en interpretatie van gegevens'],
                  ['Meestal lagere directe kosten', 'Hogere kosten door dienstverlening'],
                  ['Vereist eigen administratieve kennis', 'Toegang tot relevante expertise'],
                ].map(([soft, person]) => (
                  <tr key={soft} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5">{soft}</td>
                    <td className="px-5 py-3.5">{person}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen naar een andere ZZP-boekhouder</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Veelvoorkomende redenen: hoge of onduidelijke kosten, trage reacties, onvoldoende contact of
            advies, een achterlopende administratie, beperkte digitale mogelijkheden of een veranderende
            onderneming. Meer over{' '}
            <TextLink href="/boekhouder-overstappen">een nieuwe boekhouder zoeken</TextLink>.
          </p>
          <FormCta>Vind een nieuwe boekhouder voor je eenmanszaak</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten bij het kiezen van een ZZP-boekhouder?</DisplayHeading>
          <ol className="mt-8 space-y-6">
            {[
              ['Ervaring met zelfstandige ondernemers', 'Kies bij voorkeur een boekhouder die bekend is met eenmanszaken.'],
              ['Transparante tarieven', 'Vraag wat de totale jaarlijkse kosten zijn en wat is inbegrepen.'],
              ['Persoonlijk contact', 'Bespreek hoe je vragen kunt stellen en of je een vaste contactpersoon hebt.'],
              ['Digitale mogelijkheden', 'Vraag hoe je facturen, bonnetjes en documenten kunt aanleveren.'],
              ['Fiscale kennis', 'Controleer ondersteuning bij aangiften en fiscale vraagstukken.'],
              ['Flexibiliteit', 'Misschien wil je bepaalde werkzaamheden zelf blijven uitvoeren.'],
              ['Ervaring met jouw branche', 'Relevante branchekennis helpt bij specifieke aandachtspunten.'],
              ['Mogelijkheden om mee te groeien', 'Bespreek of het kantoor kan meegroeien bij meer omzet, personeel of een BV.'],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-5">
                <p className="font-medium text-ink">
                  {index + 1}. {heading}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe vind je een boekhouder via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Vertel ons over je onderneming',
                'Vul je bedrijfsnaam, vestigingsplaats en contactgegevens in. Eenmanszaak is al geselecteerd.',
              ],
              [
                '2',
                'Bespreek jouw wensen',
                'WRKD B.V. kan contact met je opnemen. Geef aan of je volledige ondersteuning zoekt, zelf wilt blijven factureren of vooral hulp nodig hebt bij aangiften.',
              ],
              [
                '3',
                'Beslis zelf',
                'Bespreek de mogelijkheden, dienstverlening en tarieven. Je bepaalt zelf of je daadwerkelijk een samenwerking aangaat.',
              ],
            ].map(([number, heading, text]) => (
              <li key={number} className="rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {number}</p>
                <h3 className="mt-3 font-display text-2xl font-normal leading-snug tracking-[-0.02em] text-ink">
                  {heading}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-500">
            <li>Gratis aanvraag.</li>
            <li>Vrijblijvend.</li>
            <li>Voor startende en ervaren zzp&apos;ers.</li>
            <li>Geen verplichting om een boekhouder in te schakelen.</li>
          </ul>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Of bekijk eerst <TextLink href="/boekhouder-vinden">boekhouder vinden</TextLink> voor alle
            rechtsvormen.
          </p>
          <FormCta>Vind mijn ZZP-boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over een boekhouder voor zzp&apos;ers</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <BookkeeperClusterLinks currentHref="/boekhouder-zzp" />
        </div>
      </section>

      <ClosingCta
        title="Meer tijd voor je onderneming"
        text="Vind een boekhouder die bij je past. Blijf zelf gratis facturen maken met FactuurBaas en besteed uit waarvoor je professionele ondersteuning wilt."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn ZZP-boekhouder' }}
        secondary={{ href: '/tools/boekhouder-kosten-calculator?vorm=eenmanszaak', label: 'Bereken boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief en vormen geen bindende offerte. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
