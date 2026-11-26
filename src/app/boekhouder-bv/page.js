import Link from 'next/link';
import { Suspense } from 'react';
import { Building2 } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
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

const title = 'Boekhouder BV vinden? Kosten vanaf €250 p/m | FactuurBaas';
const description =
  'Een boekhouder voor je BV, holding of werkmaatschappij zoeken? Bekijk indicatieve kosten, werkzaamheden en vraag gratis en vrijblijvend hulp aan.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouder%20voor%20bv.jpg',
  alt: 'Boekhouder voor BV, holding en werkmaatschappij.',
};

export const metadata = {
  title,
  description,
  keywords:
    'boekhouder bv, boekhouder voor bv, bv boekhouder, boekhouding bv, boekhouder bv kosten, kosten boekhouding bv, boekhouding bv uitbesteden, boekhouder kleine bv, boekhouder holding, boekhouder werkmaatschappij, accountant of boekhouder bv, administratie bv uitbesteden, boekhouder holding en werkmaatschappij',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-bv' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-bv',
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
    q: 'Wat kost een boekhouder voor een BV per maand?',
    a: 'Voor een afzonderlijke werkmaatschappij beginnen de indicatieve kosten voor volledige uitbesteding van de boekhouding bij €250 per maand. Voor een afzonderlijke holding beginnen de tarieven bij ongeveer €100 per maand. De daadwerkelijke prijs hangt af van de administratie, complexiteit en gewenste dienstverlening.',
  },
  {
    q: 'Wat kost de boekhouding van een BV per jaar?',
    a: 'Voor een afzonderlijke werkmaatschappij beginnen de indicatieve jaarlijkse kosten bij €3.000. Voor een afzonderlijke holding beginnen de kosten bij €1.200 per jaar. Aanvullende dienstverlening kan leiden tot hogere kosten.',
  },
  {
    q: 'Is een boekhouder verplicht voor een BV?',
    a: 'Nee. Een BV is niet algemeen verplicht om een boekhouder in te schakelen. De onderneming moet wel voldoen aan de toepasselijke administratieve, fiscale en verslaggevingsverplichtingen. In bepaalde situaties kan een wettelijke accountantscontrole verplicht zijn.',
  },
  {
    q: 'Heeft een kleine BV een accountant nodig?',
    a: 'Niet iedere kleine BV heeft een accountant nodig voor de dagelijkse administratie of het opstellen van de jaarrekening. Of aanvullende accountantswerkzaamheden verplicht zijn, hangt af van de omstandigheden en wettelijke vereisten.',
  },
  {
    q: 'Kan ik zelf de boekhouding van mijn BV doen?',
    a: 'Ja. Je kunt de administratie van je BV zelf verzorgen, mits je voldoet aan de toepasselijke verplichtingen. Veel ondernemers kiezen ervoor om specialistische werkzaamheden, zoals belastingaangiften en jaarafsluitingen, uit te besteden.',
  },
  {
    q: 'Heeft een holding een eigen boekhouding nodig?',
    a: 'Een holding is een afzonderlijke rechtspersoon en moet in beginsel een eigen administratie bijhouden. Ook wanneer een holding weinig transacties heeft, kunnen administratieve en fiscale verplichtingen van toepassing zijn.',
  },
  {
    q: 'Kan één boekhouder mijn holding en werkmaatschappij verzorgen?',
    a: 'Ja. Veel administratiekantoren ondersteunen ondernemingen met meerdere BV’s. Vraag vooraf naar de ervaring met holdingstructuren en de mogelijkheden voor een gecombineerd tarief.',
  },
  {
    q: 'Is de aangifte vennootschapsbelasting inbegrepen?',
    a: 'Dat verschilt per boekhouder en pakket. Controleer vooraf of de jaarlijkse aangifte vennootschapsbelasting is inbegrepen in het maandelijkse tarief.',
  },
  {
    q: 'Kan een boekhouder mijn DGA-salaris verzorgen?',
    a: 'Veel administratiekantoren bieden salarisadministratie aan of werken samen met gespecialiseerde salarisadministrateurs. Vraag vooraf of de verwerking van het DGA-salaris onderdeel is van de dienstverlening.',
  },
  {
    q: 'Kan ik mijn huidige BV-boekhouder vervangen?',
    a: 'Ja. Houd rekening met eventuele contractuele afspraken en opzegtermijnen. Zorg daarnaast voor een goede overdracht van de administratie en openstaande werkzaamheden.',
  },
  {
    q: 'Kan ik zelf facturen blijven maken?',
    a: 'Ja. Je kunt zelf facturen maken met FactuurBaas en deze als PDF of UBL-bestand aanleveren bij je boekhouder. Bespreek vooraf welke aanlevermethode jouw boekhouder ondersteunt.',
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
    { '@type': 'ListItem', position: 3, name: 'Boekhouder BV', item: 'https://factuurbaas.nl/boekhouder-bv' },
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
        Vertel ons kort over je onderneming. Rechtsvorm BV is al geselecteerd.
      </p>
      <Suspense
        fallback={<div className="min-h-[22rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm
          source="/boekhouder-bv"
          sourceType="seo"
          id="boekhouder-formulier"
          initialBusinessType="bv"
          lockBusinessType
        />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw boekhoudkundige wensen te bespreken.
      </p>
    </div>
  );
}

const STRUCTURES = [
  {
    id: 'startende-bv',
    title: 'Startende BV',
    text: 'Administratie vanaf de oprichting, DGA-salaris en eerste jaarrekening.',
  },
  {
    id: 'kleine-bv',
    title: 'Kleine BV',
    text: 'Weinig transacties, wel fiscale verplichtingen en jaarlijkse afsluiting.',
  },
  {
    id: 'holding',
    title: 'Holding',
    text: 'Deelnemingen, dividend en VPB — vanaf circa €100 per maand.',
  },
  {
    id: 'holding-werkmaatschappij',
    title: 'Holding + werkmaatschappij',
    text: 'Afzonderlijke administraties die goed op elkaar moeten aansluiten.',
  },
  {
    id: 'bv-personeel',
    title: 'BV met personeel',
    text: 'Salarisadministratie, loonheffingen en personeelskosten.',
  },
  {
    id: 'overstappen',
    title: 'Overstappen',
    text: 'Wanneer je huidige boekhouder niet meegroeit met je BV.',
  },
];

export default function BoekhouderBvPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouder BV' },
        ]}
        eyebrow="Boekhouder BV"
        eyebrowIcon={Building2}
        title="Boekhouder voor je BV vinden"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={
          <p>Voor holdings, werkmaatschappijen en groeiende ondernemingen.</p>
        }
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Gratis en vrijblijvend',
            'Vanaf €250 per maand voor een werkmaatschappij',
            'Voor startende en bestaande BV’s',
            'Holdings en werkmaatschappijen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Indicatieve tarieven</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Werkmaatschappij', '€250+', 'per maand'],
              ['Holding', '€100+', 'per maand'],
              ['Meerdere BV’s', 'Op aanvraag', 'Maatwerk'],
            ].map(([label, price, note]) => (
              <PaperCard key={label} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">{label}</p>
                <p className="mt-3 font-display text-4xl font-normal tracking-[-0.03em] text-ink">{price}</p>
                <p className="mt-1 text-sm text-ink-500">{note}</p>
              </PaperCard>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper sm:flex-row sm:items-center sm:justify-between sm:p-6">
            <div>
              <p className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Bereken jouw boekhoudkosten
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                Gratis calculator voor je BV of holding. Direct resultaat, geen account nodig.
              </p>
            </div>
            <Link
              href="/tools/boekhouder-kosten-calculator?vorm=bv-werkmaatschappij"
              className={`${btn.primary} w-full shrink-0 sm:w-auto`}
            >
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. De bedragen hebben betrekking op
            een doorlopende samenwerking waarbij de boekhouding volledig wordt uitbesteed.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-3 mt-6 max-w-[22ch]">
            Voor iedere BV-structuur
          </DisplayHeading>
          <p className="max-w-2xl text-lg leading-relaxed text-ink-500">
            Niet iedere BV heeft dezelfde administratieve en fiscale behoeften. Kies de situatie die bij jou past.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {STRUCTURES.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper transition-colors hover:border-ink/25"
              >
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{item.text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost een boekhouder voor een BV?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Voor een BV met een afzonderlijke werkmaatschappij beginnen de indicatieve kosten voor volledige
              uitbesteding van de boekhouding bij €250 per maand. Voor een afzonderlijke holding beginnen de
              tarieven bij ongeveer €100 per maand.
            </p>
            <p>
              De uiteindelijke kosten zijn afhankelijk van het aantal transacties, de complexiteit van je
              onderneming, eventuele medewerkers en de gewenste dienstverlening.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Type BV</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per maand</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per jaar</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['BV – werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
                  ['BV – holding', 'Vanaf €100', 'Vanaf €1.200'],
                  ['Holding en werkmaatschappij', 'Op aanvraag', 'Op aanvraag'],
                  ['BV met personeel', 'Afhankelijk van dienstverlening', 'Op aanvraag'],
                  ['Meerdere BV’s', 'Op aanvraag', 'Op aanvraag'],
                ].map(([type, month, year]) => (
                  <tr key={type} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{type}</td>
                    <td className="px-5 py-3.5">{month}</td>
                    <td className="px-5 py-3.5">{year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Welke factoren bepalen de kosten van een BV-boekhouder?
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Het aantal verkoopfacturen, inkoopfacturen en banktransacties.</li>
            <li>Het aantal medewerkers.</li>
            <li>De aanwezigheid van een holdingstructuur.</li>
            <li>Het aantal afzonderlijke BV’s.</li>
            <li>Internationale activiteiten.</li>
            <li>De complexiteit van de belastingaangiften.</li>
            <li>De gewenste financiële rapportages.</li>
            <li>De behoefte aan financieel en fiscaal advies.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Een kleine BV zonder personeel heeft doorgaans andere administratieve behoeften dan een groeiende
            onderneming met meerdere werkmaatschappijen en medewerkers. Meer details op{' '}
            <TextLink href="/boekhouder-kosten">wat kost een boekhouder?</TextLink>
          </p>
          <FormCta>Vind een boekhouder voor je BV</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-16">
          <div>
            <DisplayHeading size="md">Welke boekhouder past bij jouw BV?</DisplayHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
              Het is belangrijk om een boekhouder te kiezen die ervaring heeft met jouw ondernemingsstructuur.
            </p>
          </div>

          <div id="startende-bv" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor een startende BV
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Heb je onlangs een BV opgericht of ben je van plan om een BV te starten? Dan is het verstandig om
              je financiële administratie vanaf het begin goed in te richten.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">Een boekhouder kan ondersteunen bij:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Het opzetten van de financiële administratie.</li>
              <li>Het kiezen en inrichten van boekhoudsoftware.</li>
              <li>Het verwerken van de eerste zakelijke transacties.</li>
              <li>Btw-aangiften.</li>
              <li>Administratie rondom het DGA-salaris.</li>
              <li>Vennootschapsbelasting.</li>
              <li>Het voorbereiden van de eerste jaarrekening.</li>
            </ul>
            <FormCta>Vind een boekhouder voor je nieuwe BV</FormCta>
          </div>

          <div id="kleine-bv" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor een kleine BV
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Ook wanneer je BV weinig transacties verwerkt of geen personeel heeft, blijven administratieve en
                fiscale verplichtingen bestaan.
              </p>
              <p>
                Een boekhouder voor een kleine BV kan helpen met de dagelijkse administratie, relevante
                belastingaangiften en de jaarlijkse financiële afsluiting. Je kunt ervoor kiezen om zelf je
                facturen te maken en documenten aan te leveren, terwijl je boekhouder de verdere verwerking
                verzorgt.
              </p>
            </div>
            <FormCta>Vind een boekhouder voor je kleine BV</FormCta>
          </div>

          <div id="holding" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor een holding
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Een holding heeft vaak minder dagelijkse transacties dan een actieve werkmaatschappij. Toch moet
              ook een holding een eigen administratie bijhouden en voldoen aan de toepasselijke fiscale en
              administratieve verplichtingen.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Afhankelijk van de activiteiten kan een boekhouder ondersteunen bij:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Het verwerken van financiële transacties.</li>
              <li>De administratie van deelnemingen.</li>
              <li>Dividenduitkeringen.</li>
              <li>Managementvergoedingen.</li>
              <li>Rekening-courantverhoudingen.</li>
              <li>Vennootschapsbelasting.</li>
              <li>Jaarrekeningen.</li>
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              De indicatieve kosten voor de volledige boekhouding van een afzonderlijke holding beginnen bij
              €100 per maand.
            </p>
            <FormCta>Vind een boekhouder voor je holding</FormCta>
          </div>

          <div id="holding-werkmaatschappij" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor een holding en werkmaatschappij
            </h3>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500">
              <p>
                Heb je een holding met één of meerdere werkmaatschappijen? Dan is het belangrijk dat je
                boekhouder ervaring heeft met de financiële en administratieve samenhang tussen verschillende
                BV’s.
              </p>
              <p>
                Iedere BV heeft in beginsel een eigen administratie. Daarnaast kunnen onderlinge transacties,
                managementvergoedingen en financiële afspraken extra aandacht vragen. Vraag vooraf of het
                kantoor een gecombineerd tarief aanbiedt voor meerdere BV’s.
              </p>
            </div>
            <FormCta>Vind een boekhouder voor je holdingstructuur</FormCta>
          </div>

          <div id="bv-personeel" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor een BV met personeel
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Wanneer je personeel aanneemt, krijgt je onderneming te maken met aanvullende administratieve
              verplichtingen. Naast de reguliere boekhouding kan ondersteuning nodig zijn bij:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Salarisadministratie.</li>
              <li>Loonstroken.</li>
              <li>Aangiften loonheffingen.</li>
              <li>Personeelskosten.</li>
              <li>Vakantiegeld en reserveringen.</li>
              <li>Financiële rapportages.</li>
              <li>Administratieve verwerking van personeelsmutaties.</li>
            </ul>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Niet iedere boekhouder verzorgt zelf salarisadministratie. Vraag daarom vooraf welke werkzaamheden
              het kantoor aanbiedt. Voor MKB-bedrijven zie ook{' '}
              <TextLink href="/boekhouder-mkb">boekhouder voor het MKB</TextLink>.
            </p>
            <FormCta>Vind een boekhouder voor je BV met personeel</FormCta>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Welke werkzaamheden doet een boekhouder voor een BV?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Welke werkzaamheden je uitbesteedt, hangt af van jouw onderneming en de afspraken met het
            administratiekantoor.
          </p>

          <div className="mt-10 space-y-10">
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Financiële administratie
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
                <li>Verkoopfacturen, inkoopfacturen en zakelijke bonnetjes.</li>
                <li>Banktransacties.</li>
                <li>Openstaande vorderingen en schulden.</li>
                <li>Investeringen en afschrijvingen.</li>
                <li>Overige zakelijke inkomsten en uitgaven.</li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Btw-aangifte</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Wanneer je BV btw-plichtige activiteiten verricht, moet je doorgaans periodiek btw-aangifte
                doen. Een boekhouder kan helpen bij het verwerken van verschuldigde en aftrekbare btw en het
                verzorgen van de aangifte. Zie ook{' '}
                <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Vennootschapsbelasting (VPB)
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Een BV is in beginsel belastingplichtig voor de vennootschapsbelasting. Een boekhouder of
                belastingadviseur kan helpen bij het bepalen van de fiscale winst, fiscale correcties en het
                voorbereiden of verzorgen van de aangifte. Vraag vooraf of deze jaarlijkse aangifte is
                inbegrepen in het maandelijkse boekhoudtarief.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Jaarrekening en deponering
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Een BV moet jaarlijks een jaarrekening opstellen en in beginsel de vereiste jaarstukken
                deponeren bij de Kamer van Koophandel. Welke eisen gelden, hangt onder andere af van de omvang
                en omstandigheden van je onderneming.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                DGA-salarisadministratie
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Ben je directeur-grootaandeelhouder en verricht je werkzaamheden voor je BV? Dan kan de
                gebruikelijkloonregeling van toepassing zijn. Een boekhouder, salarisadministrateur of
                belastingadviseur kan ondersteuning bieden bij de administratieve verwerking. De hoogte van het
                gebruikelijk loon hangt af van de toepasselijke regels en jouw specifieke situatie.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Salarisadministratie voor medewerkers
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Heeft je BV personeel? Dan kan een boekhouder of gespecialiseerde salarisadministrateur helpen
                met loonstroken, loonheffingen en de financiële verwerking van personeelskosten.
                Salarisadministratie wordt regelmatig afzonderlijk gefactureerd — in praktijkvoorbeelden van
                onze samenwerkingspartner circa €17 per medewerker per maand. De daadwerkelijke kosten kunnen
                verschillen.
              </p>
            </div>

            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Financieel en fiscaal advies
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Denk bijvoorbeeld aan investeringen, winstontwikkeling, liquiditeit, groei, het aannemen van
                personeel of veranderingen in je ondernemingsstructuur. Voor specialistische fiscale of
                juridische vraagstukken kan aanvullende deskundigheid nodig zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Heb je een boekhouder of accountant nodig voor een BV?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Voor de dagelijkse financiële administratie van een BV is een accountant met een AA- of RA-titel
              doorgaans niet verplicht. Een boekhouder of administratiekantoor kan voor veel kleinere BV’s
              voldoende ondersteuning bieden.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheden</th>
                  <th className="px-5 py-3 font-mono font-normal">Boekhouder</th>
                  <th className="px-5 py-3 font-mono font-normal">Accountant</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Dagelijkse administratie', 'Ja', 'Ja'],
                  ['Btw-aangiften', 'Afhankelijk van dienstverlening', 'Afhankelijk van dienstverlening'],
                  ['Vennootschapsbelasting', 'Afhankelijk van expertise', 'Afhankelijk van expertise'],
                  ['Jaarrekening opstellen', 'Afhankelijk van expertise', 'Ja'],
                  ['Financieel advies', 'Afhankelijk van expertise', 'Afhankelijk van expertise'],
                  ['Wettelijke accountantscontrole', 'Nee', 'Indien bevoegd'],
                ].map(([work, bookkeeper, accountant]) => (
                  <tr key={work} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{work}</td>
                    <td className="px-5 py-3.5">{bookkeeper}</td>
                    <td className="px-5 py-3.5">{accountant}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Een accountant heeft een beschermde beroepstitel. Voor bepaalde verklaringen en wettelijke
            controles is een daartoe bevoegde accountant nodig. Voor een kleine BV zonder complexe
            controleverplichtingen kan een ervaren boekhouder of administratiekantoor een passende keuze zijn.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Zelf de boekhouding van je BV doen of uitbesteden?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Je bent als ondernemer verantwoordelijk voor een correcte administratie van je BV. Je kunt
            administratieve werkzaamheden zelf uitvoeren of geheel of gedeeltelijk uitbesteden. Meer over{' '}
            <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">Zelf boekhouden</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
                <li>Je weinig financiële transacties hebt.</li>
                <li>Je voldoende boekhoudkundige kennis hebt.</li>
                <li>Je administratie relatief eenvoudig is.</li>
                <li>Je tijd beschikbaar hebt voor administratie.</li>
                <li>Je gebruikmaakt van geschikte boekhoudsoftware.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">
                Boekhouding uitbesteden
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
                <li>Je onderneming groeit.</li>
                <li>Je meerdere BV’s hebt.</li>
                <li>Je personeel in dienst hebt.</li>
                <li>Je onvoldoende tijd hebt voor administratie.</li>
                <li>Je behoefte hebt aan professioneel financieel inzicht.</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Zelf boekhouden</th>
                  <th className="px-5 py-3 font-mono font-normal">Boekhouding uitbesteden</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  [
                    'Lagere directe kosten voor externe dienstverlening',
                    'Professionele administratieve ondersteuning',
                  ],
                  ['Zelf verantwoordelijk voor verwerking en deadlines', 'Ondersteuning bij aangiften en deadlines'],
                  ['Meer tijd kwijt aan administratie', 'Meer tijd beschikbaar voor je onderneming'],
                  ['Zelf boekhoudkundige kennis onderhouden', 'Toegang tot relevante expertise'],
                  [
                    'Geschikt bij voldoende kennis en eenvoudige administratie',
                    'Interessant bij groei en complexiteit',
                  ],
                ].map(([self, outsource]) => (
                  <tr key={self} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5">{self}</td>
                    <td className="px-5 py-3.5">{outsource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Zelf factureren en je BV-boekhouding uitbesteden
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Met de gratis factuurmaker van FactuurBaas kun je zelf professionele verkoopfacturen maken en
            downloaden als PDF of UBL-bestand. Deze facturen kun je vervolgens aanleveren bij je boekhouder.
            Zo behoud je controle over je facturatie, terwijl een professional de verdere administratie
            verzorgt. <TextLink href="/">Gratis factuur maken</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Van eenmanszaak naar BV: heb je een andere boekhouder nodig?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Wanneer je overstapt van een eenmanszaak naar een BV, veranderen verschillende administratieve en
            fiscale verplichtingen. Je krijgt mogelijk te maken met:
          </p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Vennootschapsbelasting in plaats van inkomstenbelasting over de ondernemingswinst.</li>
            <li>Administratie rondom het DGA-salaris.</li>
            <li>Jaarrekening en deponering.</li>
            <li>Dividenduitkeringen.</li>
            <li>Een eventuele holdingstructuur.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Niet iedere boekhouder die gespecialiseerd is in zzp’ers heeft dezelfde ervaring met BV’s en
            holdingstructuren. Vergelijk ook met een{' '}
            <TextLink href="/boekhouder-zzp">boekhouder voor zzp’ers</TextLink> of{' '}
            <TextLink href="/boekhouder-vinden">boekhouder vinden</TextLink> voor andere rechtsvormen.
          </p>
          <FormCta>Vind een boekhouder voor je BV</FormCta>
        </div>
      </section>

      <section id="overstappen" className="scroll-mt-28 border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen naar een andere boekhouder voor je BV</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Groeit je onderneming, maar groeit je huidige boekhouder niet met je mee? Redenen om over te
            stappen kunnen zijn: onvoldoende proactief advies, trage reacties, onvoldoende transparante
            tarieven, meerdere BV’s, personeel, digitale boekhouding of uitgebreidere rapportages. Meer over{' '}
            <TextLink href="/boekhouder-overstappen">overstappen naar een andere boekhouder</TextLink>.
          </p>
          <h3 className="mt-10 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Waar moet je op letten bij een overstap?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Controleer de afspraken en eventuele opzegtermijn. Maak vervolgens duidelijke afspraken over de
            overdracht van de financiële administratie, openstaande belastingaangiften, jaarrekeningen,
            boekhoudsoftware en exports, salarisadministratie en openstaande werkzaamheden.
          </p>
          <FormCta>Vind een nieuwe boekhouder voor je BV</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten bij het kiezen van een BV-boekhouder?</DisplayHeading>
          <ol className="mt-8 space-y-6">
            {[
              ['Ervaring met BV’s', 'Vraag hoeveel ervaring het kantoor heeft met ondernemingen die vergelijkbaar zijn met jouw BV.'],
              ['Kennis van holdingstructuren', 'Heb je meerdere BV’s? Controleer ervaring met onderlinge transacties, managementvergoedingen en afzonderlijke administraties.'],
              ['Duidelijke tarieven', 'Vraag welke werkzaamheden binnen het maandtarief vallen en welke diensten apart worden berekend.'],
              ['Belastingaangiften en jaarrekening', 'Controleer of VPB, btw-aangiften en de jaarlijkse financiële afsluiting zijn inbegrepen.'],
              ['Salarisadministratie', 'Vraag of het kantoor ondersteuning biedt bij DGA-salarissen en eventuele medewerkers.'],
              ['Digitale boekhouding', 'Bespreek welke boekhoudsoftware wordt gebruikt en hoe je facturen, bonnetjes en banktransacties kunt aanleveren.'],
              ['Bereikbaarheid en advies', 'Wil je uitsluitend administratieve ondersteuning of ook regelmatig financieel en fiscaal advies?'],
              ['Mogelijkheden om mee te groeien', 'Een boekhouder die kan meegroeien voorkomt dat je op korte termijn opnieuw moet overstappen.'],
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
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat moet inbegrepen zijn bij de kosten van een BV-boekhouder?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Vraag bij het vergelijken van boekhouders altijd welke werkzaamheden zijn inbegrepen in het
            aangeboden tarief.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheid</th>
                  <th className="px-5 py-3 font-mono font-normal">Wat moet je controleren?</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Financiële administratie', 'Geldt er een maximumaantal transacties?'],
                  ['Btw-aangiften', 'Zijn alle periodieke aangiften inbegrepen?'],
                  ['Vennootschapsbelasting', 'Is de jaarlijkse aangifte inbegrepen?'],
                  ['Jaarrekening', 'Zijn opstellen en deponeren inbegrepen?'],
                  ['DGA-salaris', 'Wordt dit afzonderlijk gefactureerd?'],
                  ['Salarisadministratie', 'Wat kost iedere aanvullende medewerker?'],
                  ['Boekhoudsoftware', 'Zijn licentiekosten inbegrepen?'],
                  ['Financieel advies', 'Is periodiek advies inbegrepen?'],
                  ['Holdingadministratie', 'Geldt er een gecombineerd tarief?'],
                  ['Overstapkosten', 'Zijn er eenmalige opstartkosten?'],
                ].map(([work, check]) => (
                  <tr key={work} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{work}</td>
                    <td className="px-5 py-3.5">{check}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Wil je meer weten over boekhoudtarieven?{' '}
            <TextLink href="/boekhouder-kosten">Wat kost een boekhouder?</TextLink>
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe werkt een boekhouder vinden via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Vertel ons over je BV',
                'Vul je bedrijfsnaam, vestigingsplaats en contactgegevens in. Rechtsvorm BV is al geselecteerd.',
              ],
              [
                '2',
                'Bespreek jouw wensen',
                'Onze samenwerkingspartner WRKD B.V. kan contact met je opnemen om jouw administratieve situatie en gewenste dienstverlening te bespreken.',
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
            <li>Geen verplichting om een boekhouder in te schakelen.</li>
            <li>Voor startende en bestaande BV’s.</li>
          </ul>
          <FormCta>Vind mijn BV-boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over een boekhouder voor een BV</DisplayHeading>
          <FaqList
            className="mt-8"
            items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))}
          />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <BookkeeperClusterLinks currentHref="/boekhouder-bv" />
        </div>
      </section>

      <ClosingCta
        title="Vind een boekhouder die past bij jouw BV"
        text="Of je nu een nieuwe BV hebt opgericht, een holdingstructuur beheert, personeel aanneemt of op zoek bent naar een andere boekhouder: vraag gratis en vrijblijvend hulp aan."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn BV-boekhouder' }}
        secondary={{ href: '/tools/boekhouder-kosten-calculator?vorm=bv-werkmaatschappij', label: 'Bereken boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief en vormen geen bindende offerte. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
