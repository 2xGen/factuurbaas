import Link from 'next/link';
import { Suspense } from 'react';
import { Clock3 } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import OutsourcingWorthCalculator from '@/components/leads/OutsourcingWorthCalculator';
import OutsourcingChecklist from '@/components/leads/OutsourcingChecklist';
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

const title = 'Boekhouding uitbesteden? Kosten & voordelen | FactuurBaas';
const description =
  'Je boekhouding geheel of gedeeltelijk uitbesteden? Ontdek de kosten, voordelen en mogelijkheden voor zzp, VOF, BV en MKB. Vraag vrijblijvend hulp aan.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouding%20uitbesteden.jpg',
  alt: 'Boekhouding uitbesteden: meer tijd voor je onderneming.',
};

export const metadata = {
  title,
  description,
  keywords:
    'boekhouding uitbesteden, administratie uitbesteden, financiële administratie uitbesteden, boekhouding laten doen, boekhouding laten verzorgen, boekhouding uitbesteden zzp, boekhouding uitbesteden mkb, boekhouding uitbesteden bv, kosten boekhouding uitbesteden, administratie laten doen, volledige boekhouding uitbesteden, gedeeltelijk boekhouding uitbesteden, zelf boekhouden of uitbesteden, voordelen boekhouding uitbesteden, boekhouding laten doen kosten',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouding-uitbesteden' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouding-uitbesteden',
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
    q: 'Wat kost het om je boekhouding uit te besteden?',
    a: 'Voor een eenmanszaak liggen de indicatieve kosten voor volledige uitbesteding tussen €100 en €150 per maand. Voor een VOF liggen deze tussen €150 en €250 per maand. Voor een afzonderlijke BV-werkmaatschappij beginnen de tarieven bij €250 per maand. De daadwerkelijke kosten zijn afhankelijk van je administratie en gewenste dienstverlening.',
  },
  {
    q: 'Is je boekhouding uitbesteden verplicht?',
    a: 'Nee. Je bent niet algemeen verplicht om een boekhouder in te schakelen. Je moet wel voldoen aan de administratieve, fiscale en eventuele verslaggevingsverplichtingen die voor jouw onderneming gelden.',
  },
  {
    q: 'Kan ik slechts een deel van mijn boekhouding uitbesteden?',
    a: 'Ja. Sommige administratiekantoren bieden gedeeltelijke uitbesteding aan, bijvoorbeeld voor belastingaangiften of jaarlijkse financiële werkzaamheden. Vraag vooraf welke mogelijkheden beschikbaar zijn.',
  },
  {
    q: 'Wat zijn de voordelen van je boekhouding uitbesteden?',
    a: 'Uitbesteden kan zorgen voor minder administratieve werkzaamheden, professionele ondersteuning, beter financieel inzicht en meer beschikbare tijd voor je onderneming. De daadwerkelijke voordelen hangen af van de kwaliteit en omvang van de dienstverlening.',
  },
  {
    q: 'Zijn boekhoudkosten zakelijk aftrekbaar?',
    a: 'Kosten voor boekhoudkundige werkzaamheden die betrekking hebben op je onderneming zijn doorgaans zakelijke kosten. Voor privégerelateerde werkzaamheden kunnen andere regels gelden.',
  },
  {
    q: 'Kan ik zelf facturen blijven maken?',
    a: 'Ja. Met FactuurBaas kun je gratis verkoopfacturen maken en deze als PDF of UBL-bestand aanleveren bij je boekhouder.',
  },
  {
    q: 'Moet ik zelf nog bonnetjes bewaren?',
    a: 'Je moet ervoor zorgen dat je onderneming voldoet aan de toepasselijke bewaarplicht. Ook wanneer je boekhouding wordt uitbesteed, moet je doorgaans relevante documenten verzamelen en aanleveren.',
  },
  {
    q: 'Kan ik alleen mijn btw-aangifte uitbesteden?',
    a: 'Sommige boekhouders bieden deze dienstverlening afzonderlijk aan. Andere kantoren werken uitsluitend met doorlopende boekhoudpakketten.',
  },
  {
    q: 'Kan ik mijn boekhouding volledig online uitbesteden?',
    a: 'Veel administratiekantoren werken digitaal. Afhankelijk van de gebruikte software kun je facturen, bonnetjes en andere documenten online aanleveren.',
  },
  {
    q: 'Blijf ik verantwoordelijk voor mijn administratie als ik deze uitbesteed?',
    a: 'Ja. Het inschakelen van een boekhouder neemt de wettelijke verantwoordelijkheden van je onderneming niet automatisch weg. Zorg dat je correcte informatie aanlevert en duidelijke afspraken maakt.',
  },
  {
    q: 'Kan ik halverwege het jaar beginnen met uitbesteden?',
    a: 'Dat is vaak mogelijk. De boekhouder moet dan wel beschikken over de bestaande administratie en relevante financiële gegevens. Bespreek vooraf of aanvullende opstart- of herstelwerkzaamheden nodig zijn.',
  },
  {
    q: 'Kan ik overstappen als ik al een boekhouder heb?',
    a: 'Ja. Controleer je bestaande overeenkomst en maak afspraken over de overdracht van financiële gegevens en openstaande werkzaamheden.',
  },
  {
    q: 'Is een aanvraag via FactuurBaas gratis?',
    a: 'Ja. Het aanvragen van hulp bij het vinden van een boekhouder is gratis en vrijblijvend. De uiteindelijke boekhoudkundige dienstverlening is doorgaans betaald.',
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
      name: 'Boekhouding uitbesteden',
      item: 'https://factuurbaas.nl/boekhouding-uitbesteden',
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
        Besteed je boekhouding uit
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons kort over je onderneming en ontdek welke mogelijkheden er zijn.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/boekhouding-uitbesteden" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw situatie en gewenste dienstverlening te bespreken.
      </p>
    </div>
  );
}

export default function BoekhoudingUitbestedenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouding uitbesteden' },
        ]}
        eyebrow="Boekhouding uitbesteden"
        eyebrowIcon={Clock3}
        title="Boekhouding uitbesteden: meer tijd voor je onderneming"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Meer tijd voor je onderneming. Minder tijd voor administratie.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Volledig of gedeeltelijk',
            'Vanaf €100 per maand voor zzp',
            'Gratis en vrijblijvend aanvragen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Hoe wil je boekhouden?</p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {[
              ['Zelf boekhouden', 'Alles zelf beheren', 'Interessant bij weinig transacties en voldoende kennis.'],
              [
                'Gedeeltelijk uitbesteden',
                'Verdeel de werkzaamheden',
                'Zelf factureren, professional voor aangiften of jaarafsluiting.',
              ],
              [
                'Volledig uitbesteden',
                'Professionele verwerking',
                'Je levert documenten aan; de boekhouder verzorgt de afgesproken verwerking.',
              ],
            ].map(([heading, sub, text]) => (
              <PaperCard key={heading} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ember">{sub}</p>
                <h2 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Wat kost uitbesteden?</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['ZZP', '€100–150', 'per maand'],
              ['VOF', '€150–250', 'per maand'],
              ['BV', 'Vanaf €250', 'per maand'],
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
                Gratis calculator · Geen account nodig. Of bekijk{' '}
                <TextLink href="/boekhouder-kosten">wat kost een boekhouder?</TextLink>
              </p>
            </div>
            <Link href="/tools/boekhouder-kosten-calculator" className={`${btn.primary} w-full shrink-0 sm:w-auto`}>
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat betekent je boekhouding uitbesteden?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Je boekhouding uitbesteden betekent dat je bepaalde administratieve en financiële werkzaamheden
              laat uitvoeren door een externe boekhouder of administratiekantoor. In plaats van alle financiële
              gegevens zelf te verwerken, lever je documenten en informatie aan bij een professional.
            </p>
            <p>
              Je hoeft niet automatisch je volledige administratie uit handen te geven. Veel ondernemers blijven
              zelf facturen maken, betalingen controleren en documenten verzamelen — en besteden de verdere
              boekhoudkundige verwerking uit. Zie ook{' '}
              <TextLink href="/blogs/facturen-zelf-boekhouden-of-uitbesteden">
                facturen zelf boekhouden of uitbesteden
              </TextLink>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost je boekhouding uitbesteden?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            De kosten hangen af van je rechtsvorm, het aantal financiële transacties, de complexiteit en de
            werkzaamheden die je wilt laten uitvoeren.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Rechtsvorm</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per maand</th>
                  <th className="px-5 py-3 font-mono font-normal">Kosten per jaar</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Eenmanszaak / ZZP', '€100 – €150', '€1.200 – €1.800'],
                  ['VOF', '€150 – €250', '€1.800 – €3.000'],
                  ['BV – werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
                  ['BV – holding', 'Vanaf €100', 'Vanaf €1.200'],
                  ['Complexere ondernemingen', 'Op aanvraag', 'Op aanvraag'],
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
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. voor volledige uitbesteding.
          </p>
          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat bepaalt de kosten van uitbesteden?
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Het aantal maandelijkse verkoopfacturen, inkoopfacturen en banktransacties.</li>
            <li>Je rechtsvorm en het aantal medewerkers.</li>
            <li>De complexiteit van je btw-administratie en eventuele internationale activiteiten.</li>
            <li>Gewenste rapportages, advies en de werkzaamheden die je zelf blijft uitvoeren.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Gedeeltelijke uitbesteding kan lager uitvallen dan volledige uitbesteding. Niet ieder kantoor biedt
            afzonderlijke diensten aan — vraag vooraf naar de mogelijkheden.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <DisplayHeading size="md">Bereken of je boekhouding uitbesteden interessant is</DisplayHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
              Hoeveel tijd besteed je momenteel aan je administratie? En welk deel zou een boekhouder
              daadwerkelijk kunnen overnemen?
            </p>
          </div>
          <div className="mt-10">
            <OutsourcingWorthCalculator />
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Volledig of gedeeltelijk je boekhouding uitbesteden?</DisplayHeading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[40rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheden</th>
                  <th className="px-5 py-3 font-mono font-normal">Zelf</th>
                  <th className="px-5 py-3 font-mono font-normal">Gedeeltelijk</th>
                  <th className="px-5 py-3 font-mono font-normal">Volledig</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Verkoopfacturen maken', 'Zelf', 'Meestal zelf', 'Volgens afspraak'],
                  ['Documenten verzamelen', 'Zelf', 'Zelf', 'Zelf aanleveren'],
                  ['Financiële verwerking', 'Zelf', 'Gedeeld', 'Boekhouder'],
                  ['Btw-aangiften', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Jaarlijkse belastingaangiften', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Jaarafsluiting', 'Zelf', 'Volgens afspraak', 'Indien inbegrepen'],
                  ['Eigen tijdsinvestering', 'Relatief hoog', 'Gemiddeld', 'Relatief laag'],
                  ['Externe kosten', 'Relatief laag', 'Afhankelijk van diensten', 'Afhankelijk van rechtsvorm'],
                ].map((row) => (
                  <tr key={row[0]} className="border-b border-ink/[0.06] last:border-0">
                    {row.map((cell, index) => (
                      <td key={`${row[0]}-${index}`} className={`px-5 py-3.5 ${index === 0 ? 'font-medium text-ink' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <FormCta>Ontdek welke boekhoudoplossing bij jou past</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Welke werkzaamheden kun je uitbesteden?
          </DisplayHeading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Facturen', 'Verkoopfacturen verwerken, openstaande betalingen en btw bijhouden.'],
              ['Bonnetjes', 'Inkoopfacturen, abonnementen en zakelijke uitgaven verwerken.'],
              ['Banktransacties', 'Koppelen aan facturen; vaak met automatische bankkoppelingen.'],
              [
                'Belastingaangiften',
                <>
                  Btw, inkomstenbelasting of VPB. Zie ook{' '}
                  <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>.
                </>,
              ],
              ['Salarisadministratie', 'Loonstroken, loonheffingen, vakantiegeld en personeelsmutaties.'],
              ['Rapportages', 'Omzet, winst, kosten, liquiditeit en openstaande facturen.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h3 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-ink-500">
            Meer over facturen laten verwerken door een professional:{' '}
            <TextLink href="/blogs/facturen-laten-verwerken-boekhouder">
              facturen laten verwerken door een boekhouder
            </TextLink>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Voor iedere onderneming
          </DisplayHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['/boekhouder-zzp', 'ZZP & eenmanszaak', 'Indicatief €100–€150 p/m bij volledige uitbesteding.'],
              ['#vof', 'VOF', 'Indicatief €150–€250 p/m, afhankelijk van complexiteit.'],
              ['/boekhouder-bv', 'BV & holding', 'Vanaf €250 voor een werkmaatschappij; holding vanaf €100.'],
              ['/boekhouder-mkb', 'MKB', 'Administratie, salaris en financieel inzicht bij groei.'],
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
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-14">
          <div>
            <DisplayHeading size="md">Je boekhouding uitbesteden als zzp&apos;er</DisplayHeading>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Door een deel van je administratie uit te besteden, kun je meer tijd beschikbaar houden voor
              klanten en opdrachten. Indicatieve kosten voor volledige uitbesteding: €100–€150 per maand.
              Lees ook{' '}
              <TextLink href="/gidsen/zelf-boekhouden-zzp">zelf boekhouden als zzp&apos;er</TextLink> en{' '}
              <TextLink href="/blogs/hoeveel-facturen-zelf-verwerken">
                hoeveel facturen kun je zelf verwerken
              </TextLink>
              .
            </p>
            <div className="mt-8">
              <Link href="/boekhouder-zzp" className={btn.secondary}>
                Boekhouder voor zzp&apos;ers vinden
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div id="vof" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Je boekhouding uitbesteden als VOF
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Binnen een VOF zijn naast de reguliere administratie ook winstverdeling, zakelijke uitgaven en de
              fiscale positie van vennoten relevant. Indicatieve kosten: €150–€250 per maand.
            </p>
            <FormCta>Vind een boekhouder voor je VOF</FormCta>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Je boekhouding uitbesteden als BV
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Een BV heeft andere verplichtingen: vennootschapsbelasting, jaarrekening, deponering en eventuele
              DGA-salarisadministratie. Werkmaatschappij vanaf circa €250 p/m; holding vanaf circa €100 p/m.
            </p>
            <div className="mt-8">
              <Link href="/boekhouder-bv" className={btn.secondary}>
                Boekhouder voor je BV vinden
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Financiële administratie uitbesteden als MKB-bedrijf
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Voor groeiende ondernemingen gaat boekhouden verder dan facturen en aangiften — denk aan
              personeelskosten, liquiditeit en financiële prestaties.
            </p>
            <div className="mt-8">
              <Link href="/boekhouder-mkb" className={btn.secondary}>
                Boekhouder voor het MKB vinden
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[24ch]">
            Zelf factureren, professioneel laten boekhouden
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Je hoeft geen betaald factuurprogramma aan te schaffen om je boekhouding te kunnen uitbesteden.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {[
              ['1', 'FactuurBaas', 'Maak een professionele verkoopfactuur met btw, nummer en betaaltermijn.'],
              ['2', 'PDF / UBL', 'Download als PDF voor je klant en als UBL voor digitale verwerking.'],
              ['3', 'Boekhouder', 'Lever aan volgens afspraak; de boekhouder verzorgt de financiële verwerking.'],
            ].map(([step, heading, text]) => (
              <PaperCard key={heading} className="p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {step}</p>
                <h3 className="mt-3 font-display text-2xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
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
          <DisplayHeading size="md">De voordelen van je boekhouding uitbesteden</DisplayHeading>
          <ol className="mt-8 space-y-5">
            {[
              ['Meer tijd voor je onderneming', 'Administratieve uren kun je besteden aan klanten, opdrachten of groei.'],
              ['Minder administratieve werkzaamheden', 'Je levert informatie aan; de boekhouder verzorgt de afgesproken verwerking.'],
              ['Professionele ondersteuning', 'Hulp bij administratieve en fiscale vraagstukken.'],
              ['Minder kans op administratieve fouten', 'Professionele verwerking en controle — jij blijft correcte info aanleveren.'],
              ['Beter financieel inzicht', 'Actuele cijfers over omzet, kosten en winst.'],
              ['Ondersteuning bij fiscale deadlines', 'Maak afspraken over verantwoordelijkheden en aanlevertermijnen.'],
              ['Meer ruimte om te groeien', 'Voorkom dat administratie steeds meer van je tijd vraagt.'],
              ['Toegang tot relevante fiscale kennis', 'Helpt toepasselijke regels correct te benutten — geen garantie op lagere belasting.'],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-5">
                <p className="font-medium text-ink">
                  {index + 1}. {heading}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>

          <h3 className="mt-14 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Zijn er ook nadelen?
          </h3>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Hogere directe kosten — vooral bij weinig omzet of een eenvoudige administratie.</li>
            <li>Afhankelijkheid van beschikbaarheid, kwaliteit en communicatie van je boekhouder.</li>
            <li>Je moet nog steeds informatie aanleveren.</li>
            <li>Mogelijke aanvullende kosten buiten het maandtarief.</li>
            <li>Risico op minder directe betrokkenheid bij je cijfers — vraag om toegang en rapportages.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Uitbesteden is niet voor iedere ondernemer automatisch de beste keuze. Zie ook{' '}
            <TextLink href="/blogs/wanneer-boekhoudsoftware-nodig-zzp">
              wanneer je een boekhoudprogramma nodig hebt
            </TextLink>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wanneer is uitbesteden financieel interessant?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Ook de tijd die je zelf besteedt aan administratie heeft een economische waarde. Deze voorbeelden
            zijn illustratief — vrijgekomen tijd leidt niet automatisch tot extra omzet.
          </p>

          <h3 className="mt-10 font-display text-xl font-normal tracking-[-0.02em] text-ink">
            Voorbeeld 1: zzp&apos;er met een eenvoudige administratie
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <tbody>
                {[
                  ['Administratietijd per maand', '4 uur'],
                  ['Zakelijk uurtarief', '€50'],
                  ['Potentiële omzetwaarde per maand', '€200'],
                  ['Indicatieve boekhouderkosten', '€125'],
                  ['Potentieel verschil per maand', '€75'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 font-display text-xl font-normal tracking-[-0.02em] text-ink">
            Voorbeeld 2: groeiende zelfstandige
          </h3>
          <div className="mt-4 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <tbody>
                {[
                  ['Administratietijd per maand', '8 uur'],
                  ['Zakelijk uurtarief', '€75'],
                  ['Potentiële omzetwaarde per maand', '€600'],
                  ['Illustratieve boekhouderkosten', '€150'],
                  ['Potentieel verschil per maand', '€450'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10 font-display text-xl font-normal tracking-[-0.02em] text-ink">
            Voorbeeld 3: BV met personeel
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Twintig uur administratie per maand tegen €50 per uur vertegenwoordigt €1.000 per maand. Wanneer
            een kantoor een groot deel kan overnemen, kan uitbesteden interessant zijn — de werkelijke kosten
            hangen af van transacties, medewerkers en dienstverlening.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Hoe werkt digitaal je boekhouding uitbesteden?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Steeds meer werkzaamheden kunnen digitaal: facturen uploaden, bonnetjes fotograferen, bankkoppelingen,
            online overzichten en contact via e-mail of videogesprek. Meer over een{' '}
            <TextLink href="/online-boekhouder">online boekhouder</TextLink>. Voor automatisering van
            factuurstromen zie{' '}
            <TextLink href="/blogs/facturen-automatisch-verwerken">facturen automatisch verwerken</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wanneer kun je beter zelf blijven boekhouden?</DisplayHeading>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Je weinig financiële transacties hebt.</li>
            <li>Je administratie eenvoudig is.</li>
            <li>Je voldoende administratieve en fiscale kennis hebt.</li>
            <li>Je weinig tijd kwijt bent aan boekhouden.</li>
            <li>Je je vaste zakelijke kosten laag wilt houden.</li>
            <li>Je graag zelf inzicht houdt in iedere financiële transactie.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Bekijk{' '}
            <TextLink href="/boekhoudprogramma-vergelijken">boekhoudprogramma vergelijken</TextLink> of{' '}
            <TextLink href="/blogs/facturen-verwerken-boekhouding">
              facturen verwerken in je boekhouding
            </TextLink>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten voordat je uitbesteedt?</DisplayHeading>
          <ol className="mt-8 space-y-5">
            {[
              ['Welke werkzaamheden zijn inbegrepen?', 'Vraag wat binnen het aangeboden tarief valt.'],
              ['Welke belastingaangiften worden verzorgd?', 'Btw, inkomstenbelasting of VPB — afhankelijk van je rechtsvorm.'],
              ['Zijn er aanvullende kosten?', 'Jaarafsluiting, advies, software, extra transacties.'],
              ['Welke werkzaamheden blijf je zelf uitvoeren?', 'Facturatie, documentaanlevering, betalingscontrole.'],
              ['Hoe krijg je inzicht in je financiële gegevens?', 'Toegang tot software, rapportages en onderliggende data.'],
              ['Hoe worden je gegevens beschermd?', 'Opslag, toegangsrechten en beveiliging.'],
              ['Hoe werkt de communicatie?', 'Bereikbaarheid, contactmomenten en vraagstelling.'],
              ['Wat gebeurt er wanneer je onderneming groeit?', 'Dienstverlening en kosten bij meer volume of personeel.'],
              ['Kun je gemakkelijk overstappen?', 'Contractduur, opzegtermijn en overdracht van gegevens.'],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-5">
                <p className="font-medium text-ink">
                  {index + 1}. {heading}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Heb je al een boekhouder? Zie{' '}
            <TextLink href="/boekhouder-overstappen">veranderen van boekhouder</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <OutsourcingChecklist />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe begin je met het uitbesteden van je boekhouding?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-5">
            {[
              ['1', 'Breng je administratie in kaart', 'Facturen, transacties en werkzaamheden die je zelf doet.'],
              ['2', 'Bepaal wat je wilt uitbesteden', 'Alleen aangiften, of volledige financiële verwerking?'],
              ['3', 'Vraag hulp aan via FactuurBaas', 'Gratis aanvraagformulier met bedrijfs- en contactgegevens.'],
              ['4', 'Bespreek de mogelijkheden', 'WRKD B.V. kan contact opnemen over situatie, diensten en tarieven.'],
              ['5', 'Maak duidelijke afspraken', 'Kosten, werkzaamheden, aanlevering en verantwoordelijkheden.'],
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
          <FormCta>Besteed mijn boekhouding uit</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over boekhouding uitbesteden</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Meer over btw en facturen:{' '}
            <TextLink href="/blogs/facturen-en-btw-aangifte">facturen en btw-aangifte</TextLink>. Overzicht houden
            van openstaande bedragen:{' '}
            <TextLink href="/blogs/facturen-bijhouden-zzp">facturen bijhouden als zzp&apos;er</TextLink>.
          </p>
        </div>
      </section>

      <BookkeeperClusterLinks currentHref="/boekhouding-uitbesteden" />

      <ClosingCta
        title="Minder administratie, meer tijd voor ondernemen"
        text="Of je nu enkele werkzaamheden wilt uitbesteden of volledige ondersteuning zoekt: vraag gratis en vrijblijvend hulp aan."
        primary={{ href: '#boekhouder-formulier', label: 'Besteed mijn boekhouding uit' }}
        secondary={{ href: '/tools/boekhouder-kosten-calculator', label: 'Bereken boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief. Rekenvoorbeelden zijn illustratief. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
