import Link from 'next/link';
import { Suspense } from 'react';
import { Receipt } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import BtwAangifteChecklist from '@/components/leads/BtwAangifteChecklist';
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

const title = 'Btw-aangifte uitbesteden? Kosten & mogelijkheden | FactuurBaas';
const description =
  'Je btw-aangifte laten doen door een boekhouder? Ontdek de kosten, voordelen en mogelijkheden voor zzp, VOF en BV. Vraag gratis en vrijblijvend hulp aan.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/btw%20aangifte%20uitbesteden.jpg',
  alt: 'Btw-aangifte uitbesteden aan een boekhouder.',
};

export const metadata = {
  title,
  description,
  keywords:
    'btw-aangifte uitbesteden, btw-aangifte laten doen, btw-aangifte laten verzorgen, boekhouder btw-aangifte, btw-aangifte uitbesteden zzp, kosten btw-aangifte laten doen, btw-aangifte laten invullen, omzetbelasting aangifte uitbesteden, aangifte omzetbelasting laten doen, btw-aangifte boekhouder kosten, btw-aangifte laten controleren, kwartaalaangifte uitbesteden, hulp bij btw-aangifte, boekhouder voor btw-aangifte, alleen btw-aangifte uitbesteden',
  alternates: { canonical: 'https://factuurbaas.nl/btw-aangifte-uitbesteden' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/btw-aangifte-uitbesteden',
    siteName: 'FactuurBaas',
    type: 'website',
    images: [{ url: FEATURED_IMAGE.url, width: 1200, height: 630, alt: FEATURED_IMAGE.alt }],
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
    q: 'Kan ik mijn btw-aangifte laten doen door een boekhouder?',
    a: 'Ja. Een boekhouder of belastingadviseur kan je btw-aangifte voorbereiden, controleren en, wanneer de benodigde afspraken en bevoegdheden geregeld zijn, namens jou indienen.',
  },
  {
    q: 'Wat kost het om een btw-aangifte te laten doen?',
    a: 'Dat hangt af van de omvang en kwaliteit van je administratie en de gewenste dienstverlening. Sommige boekhouders hanteren een tarief per aangifte, terwijl andere kantoren btw-aangiften verzorgen als onderdeel van een maandelijkse samenwerking.',
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte uitbesteden?',
    a: 'Sommige administratiekantoren bieden deze mogelijkheid aan. Andere kantoren werken uitsluitend met doorlopende boekhoudpakketten. Vraag daarom vooraf welke dienstverlening beschikbaar is.',
  },
  {
    q: 'Is een boekhouder verplicht voor mijn btw-aangifte?',
    a: 'Nee. Je kunt als ondernemer zelf je btw-aangifte verzorgen. Je moet wel voldoen aan de toepasselijke administratieve en fiscale verplichtingen.',
  },
  {
    q: 'Moet ik zelf nog facturen maken?',
    a: 'Dat hangt af van de gemaakte afspraken. Veel ondernemers blijven zelf hun verkoopfacturen maken en besteden de verdere administratieve verwerking uit. Met FactuurBaas kun je gratis facturen maken en downloaden als PDF of UBL-bestand.',
  },
  {
    q: 'Welke documenten heeft mijn boekhouder nodig?',
    a: 'Doorgaans heeft je boekhouder verkoopfacturen, inkoopfacturen, bonnetjes, banktransacties en informatie over bijzondere transacties nodig. Afhankelijk van je situatie kunnen aanvullende documenten nodig zijn.',
  },
  {
    q: 'Kan een boekhouder mijn eerdere btw-aangiften controleren?',
    a: 'Een boekhouder kan, afhankelijk van de dienstverlening, eerdere aangiften en de bijbehorende administratie controleren en helpen bij noodzakelijke correcties.',
  },
  {
    q: 'Moet ik btw-aangifte doen als ik geen omzet heb?',
    a: 'Wanneer je verplicht bent om btw-aangifte te doen, moet je doorgaans ook aangifte doen over een periode waarin je geen omzet hebt gemaakt.',
  },
  {
    q: 'Kan ik mijn btw-aangifte volledig online uitbesteden?',
    a: 'Veel administratiekantoren werken digitaal. Je kunt dan de benodigde documenten online aanleveren en via digitale kanalen communiceren.',
  },
  {
    q: 'Kan een boekhouder helpen met buitenlandse btw-transacties?',
    a: 'Een boekhouder of belastingadviseur met relevante internationale expertise kan helpen bij het beoordelen en verwerken van buitenlandse transacties.',
  },
  {
    q: 'Betaalt mijn boekhouder automatisch de verschuldigde btw?',
    a: 'Nee, niet automatisch. Het voorbereiden of indienen van een aangifte staat los van het betalen van de verschuldigde btw. Maak duidelijke afspraken over wie verantwoordelijk is voor de betaling.',
  },
  {
    q: 'Blijf ik verantwoordelijk voor mijn btw-aangifte?',
    a: 'Ja. Het inschakelen van een boekhouder neemt je wettelijke verantwoordelijkheden als ondernemer niet automatisch weg.',
  },
  {
    q: 'Kan ik halverwege het jaar mijn btw-aangifte gaan uitbesteden?',
    a: 'Dat is vaak mogelijk. Je boekhouder heeft dan mogelijk eerdere aangiften en bestaande financiële gegevens nodig.',
  },
  {
    q: 'Zijn de kosten van een boekhouder zakelijk aftrekbaar?',
    a: 'Kosten voor boekhoudkundige werkzaamheden die betrekking hebben op je onderneming zijn doorgaans zakelijke kosten.',
  },
  {
    q: 'Is hulp aanvragen via FactuurBaas gratis?',
    a: 'Ja. Het indienen van een aanvraag via FactuurBaas is gratis en vrijblijvend. De uiteindelijke boekhoudkundige dienstverlening is doorgaans betaald.',
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
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Btw-aangifte uitbesteden',
      item: 'https://factuurbaas.nl/btw-aangifte-uitbesteden',
    },
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
        Laat je btw-aangifte verzorgen
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons kort over je onderneming en bespreek de mogelijkheden om je btw-aangifte of volledige boekhouding
        uit te besteden.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/btw-aangifte-uitbesteden" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw situatie en gewenste dienstverlening te bespreken.
      </p>
    </div>
  );
}

export default function BtwAangifteUitbestedenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Btw-aangifte uitbesteden' },
        ]}
        eyebrow="Btw-aangifte uitbesteden"
        eyebrowIcon={Receipt}
        title="Btw-aangifte uitbesteden aan een boekhouder"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Minder administratieve werkzaamheden. Meer tijd voor je onderneming.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={['Professionele ondersteuning', 'Voor ZZP, VOF en BV', 'Gratis en vrijblijvend aanvragen']}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Welke ondersteuning heb je nodig?
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              [
                'Alleen btw-aangifte',
                'Zelf boekhouden, aangifte uitbesteden',
                'Interessant wanneer je zelf goed kunt boekhouden, maar onzeker bent over de fiscale verwerking. Vraag vooraf of dit afzonderlijk wordt aangeboden.',
              ],
              [
                'Btw-administratie',
                'Verwerking en aangifte',
                'Jij maakt facturen en verzamelt documenten; de boekhouder verzorgt verwerking en btw-aangiften.',
              ],
              [
                'Volledige boekhouding',
                'Doorlopende ondersteuning',
                'Naast btw ook administratie, jaarafsluiting en eventuele andere aangiften. Zie ook boekhouding uitbesteden.',
              ],
            ].map(([heading, sub, text]) => (
              <PaperCard key={heading} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember">{sub}</p>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Meer over <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Btw-aangifte deadlines</p>
          <DisplayHeading size="md" className="mt-3 max-w-[22ch]">
            Wanneer moet je btw-aangifte doen?
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Veel ondernemers doen ieder kwartaal aangifte. Controleer altijd de specifieke periode en uiterste datum
            die voor jouw onderneming gelden bij de{' '}
            <a
              href="https://www.belastingdienst.nl/"
              target="_blank"
              rel="noopener noreferrer"
              className={linkClass}
            >
              Belastingdienst
            </a>
            .
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Q1', 'januari – maart', '30 april'],
              ['Q2', 'april – juni', '31 juli'],
              ['Q3', 'juli – september', '31 oktober'],
              ['Q4', 'oktober – december', '31 januari'],
            ].map(([quarter, period, deadline]) => (
              <PaperCard key={quarter} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">{quarter}</p>
                <p className="mt-2 text-sm text-ink-500">{period}</p>
                <p className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{deadline}</p>
              </PaperCard>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Ook zonder omzet moet je doorgaans aangifte doen als je daartoe verplicht bent. Lever documenten tijdig
            aan bij je boekhouder — niet pas op de uiterste dag.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <BtwAangifteChecklist />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Hulp bij complexe btw-situaties
          </DisplayHeading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Buitenlandse klanten', 'Btw-verlegging, ICP-opgaven en internationale facturatie.'],
              ['Btw-tarieven', 'Verschillende tarieven correct verwerken in je administratie.'],
              ['Btw verleggen', 'Bijzondere situaties en verleggingsregelingen beoordelen.'],
              ['Correcties', 'Fouten signaleren en helpen corrigeren via de juiste procedure.'],
              ['Internationale webshops', 'OSS, IOSS en btw bij verkopen aan buitenlandse consumenten.'],
              ['Aftrekbare btw', 'Voorbelasting beoordelen bij gemengd gebruik of vrijgestelde activiteiten.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <FormCta>Vraag hulp aan bij internationale btw-administratie</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Gratis tool</p>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                  Bereken zelf je btw
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  Een btw-calculator helpt bij individuele berekeningen. Een boekhouder verwerkt de gegevens van je
                  volledige aangifteperiode.
                </p>
              </div>
              <Link href="/tools/btw-calculator" className={`${btn.secondary} mt-6 w-full sm:w-auto`}>
                Bereken gratis je btw
                <ArrowIcon />
              </Link>
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Volledige boekhouding</p>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                  Liever je volledige boekhouding uitbesteden?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  Bereken indicatieve maandelijkse kosten of bekijk{' '}
                  <TextLink href="/boekhouder-kosten">wat kost een boekhouder?</TextLink>
                </p>
              </div>
              <Link
                href="/tools/boekhouder-kosten-calculator"
                className={`${btn.secondary} mt-6 w-full sm:w-auto`}
              >
                Bereken mijn boekhoudkosten
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat betekent je btw-aangifte uitbesteden?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Je btw-aangifte uitbesteden betekent dat je een boekhouder of belastingadviseur inschakelt om je
              aangifte omzetbelasting voor te bereiden, te controleren of namens jou in te dienen.
            </p>
            <p>
              Afhankelijk van de afspraken kan je boekhouder verkoop- en inkoopfacturen controleren, verschuldigde
              btw en voorbelasting beoordelen, verschillende tarieven en buitenlandse transacties verwerken, en de
              aangifte voorbereiden of indienen. Je blijft als ondernemer verantwoordelijk voor een correcte
              administratie, tijdige aangiften en het betalen van verschuldigde belasting.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost het om je btw-aangifte te laten doen?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              De kosten hangen af van de hoeveelheid administratief werk. Een volledig bijgewerkte administratie
              vraagt doorgaans minder verwerking dan losse facturen, bonnetjes en bankafschriften.
            </p>
            <p>
              Niet ieder administratiekantoor biedt losse btw-aangiften aan. Sommige kantoren verzorgen btw-aangiften
              uitsluitend als onderdeel van een doorlopend boekhoudpakket. De beschikbaarheid en kosten van
              afzonderlijke btw-diensten worden met de dienstverlener besproken.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Dienstverlening</th>
                  <th className="px-5 py-3 font-mono font-normal">Hoe worden de kosten bepaald?</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Losse btw-aangifte', 'Vast bedrag of uurtarief per aangifte'],
                  ['Btw-aangifte controleren', 'Afhankelijk van de benodigde controle'],
                  ['Btw-administratie en aangifte', 'Afhankelijk van het aantal transacties'],
                  ['Volledige boekhouding', 'Vaak een vast maandbedrag'],
                  ['Correctie van eerdere aangiften', 'Afhankelijk van de benodigde werkzaamheden'],
                ].map(([service, pricing]) => (
                  <tr key={service} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{service}</td>
                    <td className="px-5 py-3.5">{pricing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat kost volledige boekhouding inclusief ondersteuning bij btw-aangiften?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Onderstaande bedragen zijn indicatief voor volledige uitbesteding — geen tarieven voor een losse
            btw-aangifte.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Rechtsvorm</th>
                  <th className="px-5 py-3 font-mono font-normal">Per maand</th>
                  <th className="px-5 py-3 font-mono font-normal">Per jaar</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Eenmanszaak / ZZP', '€100 – €150', '€1.200 – €1.800'],
                  ['VOF', '€150 – €250', '€1.800 – €3.000'],
                  ['BV – werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
                  ['BV – holding', 'Vanaf €100', 'Vanaf €1.200'],
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
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. Vraag vooraf welke
            belastingaangiften binnen het aangeboden tarief vallen.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Alleen je btw-aangifte of je volledige boekhouding?</DisplayHeading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheid</th>
                  <th className="px-5 py-3 font-mono font-normal">Alleen btw</th>
                  <th className="px-5 py-3 font-mono font-normal">Btw-administratie</th>
                  <th className="px-5 py-3 font-mono font-normal">Volledig</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Facturen maken', 'Zelf', 'Zelf', 'Volgens afspraak'],
                  ['Facturen verwerken', 'Zelf', 'Boekhouder', 'Boekhouder'],
                  ['Banktransacties', 'Zelf', 'Volgens afspraak', 'Boekhouder'],
                  ['Btw controleren', 'Boekhouder', 'Boekhouder', 'Indien inbegrepen'],
                  ['Btw-aangifte', 'Boekhouder', 'Boekhouder', 'Indien inbegrepen'],
                  ['Jaarlijkse belastingaangifte', 'Zelf of apart', 'Zelf of apart', 'Indien inbegrepen'],
                  ['Jaarafsluiting', 'Zelf of apart', 'Zelf of apart', 'Indien inbegrepen'],
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
          <FormCta>Vind een boekhouder voor mijn btw-aangifte</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wanneer is je btw-aangifte uitbesteden verstandig?</DisplayHeading>
          <dl className="mt-8 space-y-6">
            {[
              [
                'Je bent net begonnen als ondernemer',
                'Een boekhouder kan helpen om je btw-administratie vanaf het begin goed in te richten.',
              ],
              [
                'Je werkt met verschillende btw-tarieven',
                'Correcte verwerking van producten of diensten met verschillende tarieven.',
              ],
              [
                'Je hebt buitenlandse klanten of leveranciers',
                'Btw-verlegging, ICP-opgaven en andere internationale aandachtspunten.',
              ],
              [
                'Je twijfelt over aftrekbare btw',
                'Gemengd gebruik, vrijgestelde activiteiten en bepaalde uitgaven vragen extra aandacht.',
              ],
              [
                'Je administratie loopt achter of je hebt eerder fouten gemaakt',
                'Professionele ondersteuning bij organisatie en correcties.',
              ],
              [
                'Je wilt meer tijd besteden aan je onderneming',
                'Ook met voldoende kennis kan uitbesteden aantrekkelijk zijn.',
              ],
            ].map(([term, detail]) => (
              <div key={term} className="border-t border-ink/10 pt-5">
                <dt className="font-medium text-ink">{term}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-ink-500">{detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            Voor ZZP, VOF, BV en MKB
          </DisplayHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                '/boekhouder-zzp',
                "ZZP'ers",
                'Indicatief €100–€150 p/m bij volledige boekhouding. Zelf blijven factureren is mogelijk.',
              ],
              [
                '#vof',
                'VOF',
                'Indicatief €150–€250 p/m bij volledige uitbesteding. Centrale verwerking van documenten.',
              ],
              [
                '/boekhouder-bv',
                'BV',
                'Vanaf €250 p/m voor een werkmaatschappij. Ook VPB, jaarrekening en holdingstructuren.',
              ],
              [
                '/boekhouder-mkb',
                'MKB',
                'Meer transacties, vestigingen en internationale activiteiten vragen overzichtelijke processen.',
              ],
            ].map(([href, heading, text]) => (
              <Link
                key={heading}
                href={href}
                className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper transition-colors hover:border-ink/25"
              >
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </Link>
            ))}
          </div>
          <div id="vof" className="scroll-mt-28 mt-8">
            <FormCta>Vind een boekhouder voor je VOF</FormCta>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Hoe werkt het uitbesteden van je btw-aangifte?</DisplayHeading>
          <ol className="mt-8 space-y-6">
            {[
              [
                'Maak en verzamel je facturen',
                <>
                  Met FactuurBaas kun je gratis professionele verkoopfacturen maken als PDF of UBL.{' '}
                  <TextLink href="/">Maak gratis een factuur</TextLink>.
                </>,
              ],
              [
                'Lever je administratie aan',
                'Via e-mail of de afgesproken boekhoudsoftware.',
              ],
              [
                'Laat verwerken of controleren',
                'Je boekhouder beoordeelt de relevante btw-bedragen.',
              ],
              [
                'Laat je aangifte voorbereiden',
                'Indien namens jou ingediend: de benodigde afspraken en machtigingen moeten geregeld zijn.',
              ],
              [
                'Betaal de verschuldigde btw',
                'Een ingediende aangifte betekent niet automatisch dat de btw is betaald.',
              ],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-5">
                <p className="font-medium text-ink">
                  Stap {index + 1}. {heading}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Btw-aangifte bij buitenlandse klanten en leveranciers</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Internationale transacties zijn een belangrijke reden waarom ondernemers professionele hulp zoeken. De
              btw-behandeling hangt onder andere af van het land, het soort klant, het product of de dienst.
            </p>
            <p>
              Denk aan factureren aan EU-ondernemers (verlegging, ICP), klanten buiten de EU, buitenlandse software
              en abonnementen, of webshops met OSS/IOSS.
            </p>
          </div>
          <FormCta>Vraag hulp aan bij internationale btw-administratie</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Heb je een boekhouder nodig als je gebruikmaakt van de KOR?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Bij de Nederlandse KOR breng je voor de onder de regeling vallende prestaties doorgaans geen btw in
              rekening en doe je normaal gesproken geen periodieke btw-aangifte. Daar staat tegenover dat je
              voorbelasting op die prestaties doorgaans niet kunt aftrekken. In bijzondere situaties kunnen alsnog
              btw-verplichtingen ontstaan.
            </p>
            <p>
              Een boekhouder kan helpen beoordelen of deelname past, welke verplichtingen blijven gelden, en wat
              verandert wanneer je niet langer aan de voorwaarden voldoet. Gebruik ook de{' '}
              <TextLink href="/tools/kor-calculator">KOR-calculator</TextLink> van FactuurBaas.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat als je een fout hebt gemaakt of te laat bent?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Vergeten facturen, verkeerde tarieven, onterecht afgetrokken btw of fouten bij buitenlandse
              transacties: afhankelijk van de correctie kan verwerking in een volgende aangifte of een
              suppletieaangifte nodig zijn. Wacht niet onnodig — voor bepaalde correcties gelden specifieke termijnen.
              Zie ook{' '}
              <TextLink href="/blogs/factuur-verkeerd-geboekt">factuur verkeerd geboekt</TextLink>.
            </p>
            <p>
              Een te late aangifte of betaling kan leiden tot een naheffingsaanslag of boete. Een boekhouder helpt
              bij organisatie, maar jij blijft verantwoordelijk voor tijdige aanlevering, beantwoorden van vragen,
              controleren of de aangifte is ingediend, en betaling van verschuldigde btw.
            </p>
          </div>
          <FormCta>Vraag hulp aan bij je btw-administratie</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Is je btw-aangifte uitbesteden financieel interessant?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Stel dat je ieder kwartaal zes uur besteedt aan btw-gerelateerde administratie tegen €60 per uur:
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <tbody>
                {[
                  ['Administratietijd per kwartaal', '6 uur'],
                  ['Zakelijk uurtarief', '€60'],
                  ['Potentiële tijdswaarde per kwartaal', '€360'],
                  ['Potentiële tijdswaarde per jaar', '€1.440'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Vrijgekomen tijd leidt niet automatisch tot extra omzet. Bereken of{' '}
            <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden interessant</TextLink> is voor jouw
            situatie.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten bij het kiezen van een boekhouder?</DisplayHeading>
          <ol className="mt-8 space-y-5">
            {[
              ['Ervaring met jouw rechtsvorm', 'Eenmanszaak, VOF of BV — afhankelijk van jouw onderneming.'],
              ['Losse aangifte of doorlopende samenwerking', 'Controleer of alleen btw mogelijk is of alleen via een volledig pakket.'],
              ['Duidelijke kosten', 'Per aangifte, per uur of per maand?'],
              ['Administratieve verwerking', 'Zijn facturen en banktransacties inbegrepen?'],
              ['Internationale btw-kennis', 'Relevant bij buitenlandse klanten of leveranciers.'],
              ['Aanlevertermijnen', 'Maak afspraken over wanneer documenten binnen moeten zijn.'],
              ['Indienen van de aangifte', 'Alleen voorbereiden, of ook namens jou indienen?'],
              ['Correcties', 'Welke kosten gelden bij eerdere fouten of onvolledige administratie?'],
              ['Toegang tot je administratie', 'Houd toegang tot gegevens en kopieën van aangiften.'],
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
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[24ch]">
            Hoe vind je een boekhouder voor je btw-aangifte via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ['1', 'Vertel ons over je onderneming', 'Selecteer je rechtsvorm en vul bedrijfs- en contactgegevens in.'],
              [
                '2',
                'Bespreek jouw wensen',
                'WRKD B.V. kan contact opnemen. Geef aan of je alleen btw-hulp zoekt of bredere ondersteuning.',
              ],
              ['3', 'Ontdek mogelijkheden en tarieven', 'Bespreek welke dienstverlening beschikbaar is.'],
              ['4', 'Beslis zelf', 'Je bent niet verplicht om een samenwerking aan te gaan.'],
            ].map(([number, heading, text]) => (
              <li key={number} className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {number}</p>
                <h3 className="mt-3 font-display text-xl font-normal leading-snug tracking-[-0.02em] text-ink">
                  {heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Of bekijk eerst <TextLink href="/boekhouder-vinden">boekhouder vinden</TextLink>.
          </p>
          <FormCta>Vind een boekhouder voor mijn btw-aangifte</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over btw-aangifte uitbesteden</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Meer over <TextLink href="/blogs/facturen-en-btw-aangifte">facturen en btw-aangifte</TextLink>.
          </p>
        </div>
      </section>

      <BookkeeperClusterLinks currentHref="/btw-aangifte-uitbesteden" />

      <ClosingCta
        title="Minder zorgen over je volgende btw-aangifte"
        text="Of je nu voor het eerst aangifte doet, twijfelt over buitenlandse transacties of minder tijd wilt besteden aan administratie: vraag gratis en vrijblijvend hulp aan."
        primary={{ href: '#boekhouder-formulier', label: 'Laat mijn btw-aangifte verzorgen' }}
        secondary={{ href: '/tools/btw-calculator', label: 'Bereken gratis je btw' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief en hebben betrekking op volledige boekhoudkundige ondersteuning. De beschikbaarheid en kosten van afzonderlijke btw-diensten worden met de dienstverlener besproken. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
