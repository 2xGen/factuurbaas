import Link from 'next/link';
import { Suspense } from 'react';
import { Briefcase } from 'lucide-react';
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

const title = 'Boekhouder MKB vinden? Kosten & mogelijkheden | FactuurBaas';
const description =
  'Op zoek naar een boekhouder voor je MKB-bedrijf? Ontdek de kosten, administratie, salarisverwerking en mogelijkheden. Vraag gratis en vrijblijvend hulp aan.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/mkb%20boekhouder%20vinder.jpg',
  alt: 'Boekhouder voor het MKB die meegroeit met jouw onderneming.',
};

export const metadata = {
  title,
  description,
  keywords:
    'boekhouder mkb, boekhouder voor mkb, mkb boekhouder, boekhouding mkb, administratiekantoor mkb, boekhouder midden- en kleinbedrijf, boekhouding mkb uitbesteden, kosten boekhouder mkb, financiële administratie mkb, accountant mkb, boekhouder bedrijf met personeel, zakelijke boekhouder, boekhouder voor groeiende bedrijven, administratie uitbesteden mkb',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-mkb' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-mkb',
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
    q: 'Wat kost een boekhouder voor een MKB-bedrijf?',
    a: 'De kosten hangen af van de rechtsvorm, het aantal transacties, het aantal medewerkers en de gewenste dienstverlening. Voor een VOF liggen de indicatieve kosten voor volledige boekhouding tussen €150 en €250 per maand. Voor een afzonderlijke BV-werkmaatschappij beginnen de tarieven bij ongeveer €250 per maand. Grotere en complexere ondernemingen kunnen hogere boekhoudkosten hebben.',
  },
  {
    q: 'Wat doet een boekhouder voor het MKB?',
    a: 'Een MKB-boekhouder kan ondersteuning bieden bij de financiële administratie, belastingaangiften, jaarafsluiting, salarisadministratie en financiële rapportages. Afhankelijk van de expertise van het kantoor kan ook financieel en fiscaal advies worden aangeboden.',
  },
  {
    q: 'Is een accountant verplicht voor het MKB?',
    a: 'Niet ieder MKB-bedrijf is verplicht een accountant in te schakelen. Of een wettelijke accountantscontrole nodig is, hangt onder andere af van de omvang, rechtsvorm en omstandigheden van de onderneming. Voor veel kleinere ondernemingen kan een ervaren boekhouder voldoende zijn voor de dagelijkse administratie.',
  },
  {
    q: 'Kan een boekhouder ook mijn salarisadministratie verzorgen?',
    a: 'Veel administratiekantoren bieden salarisadministratie aan of werken samen met gespecialiseerde salarisadministrateurs. Vraag vooraf welke werkzaamheden worden verzorgd en welke aanvullende tarieven gelden.',
  },
  {
    q: 'Hoeveel kost salarisadministratie per medewerker?',
    a: 'In praktijkvoorbeelden van onze samenwerkingspartner wordt een indicatief tarief van circa €17 per medewerker per maand genoemd. De daadwerkelijke kosten verschillen per dienstverlener en gewenste ondersteuning.',
  },
  {
    q: 'Kan een boekhouder helpen bij de groei van mijn onderneming?',
    a: 'Een boekhouder kan, afhankelijk van de afgesproken dienstverlening, financiële rapportages en ondersteuning bij zakelijke beslissingen verzorgen. Voor uitgebreid strategisch, fiscaal of financieel advies kan aanvullende expertise nodig zijn.',
  },
  {
    q: 'Moet een MKB-boekhouder ervaring hebben in mijn branche?',
    a: 'Het is niet verplicht, maar relevante branchekennis kan waardevol zijn. Een boekhouder die bekend is met jouw bedrijfsactiviteiten begrijpt mogelijk beter welke administratieve processen, kostenstructuren en aandachtspunten belangrijk zijn.',
  },
  {
    q: 'Kan ik overstappen naar een andere boekhouder tijdens het boekjaar?',
    a: 'Ja. Houd rekening met contractuele afspraken, opzegtermijnen en de overdracht van je administratie. Maak duidelijke afspraken over wie verantwoordelijk is voor openstaande werkzaamheden en belastingaangiften.',
  },
  {
    q: 'Kan één boekhouder meerdere ondernemingen verzorgen?',
    a: 'Ja. Veel administratiekantoren ondersteunen ondernemers met meerdere ondernemingen, vestigingen of BV’s. Vraag vooraf naar de ervaring met jouw ondernemingsstructuur en eventuele gecombineerde tarieven.',
  },
  {
    q: 'Kan ik mijn boekhouding volledig digitaal uitbesteden?',
    a: 'Veel boekhouders werken digitaal. Afhankelijk van de gebruikte software kun je facturen, bonnetjes en andere documenten online aanleveren. Bespreek vooraf welke systemen en koppelingen worden ondersteund.',
  },
  {
    q: 'Kan ik zelf facturen blijven maken?',
    a: 'Ja. Met FactuurBaas kun je gratis verkoopfacturen maken en downloaden als PDF of UBL-bestand. Je kunt deze vervolgens aanleveren bij je boekhouder volgens de gemaakte afspraken.',
  },
  {
    q: 'Is een MKB-boekhouder vinden via FactuurBaas gratis?',
    a: 'Ja. Het indienen van een aanvraag is gratis en vrijblijvend. De uiteindelijke boekhoudkundige dienstverlening is doorgaans betaald. Je maakt hierover zelf afspraken met de betreffende dienstverlener.',
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
    { '@type': 'ListItem', position: 3, name: 'Boekhouder MKB', item: 'https://factuurbaas.nl/boekhouder-mkb' },
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
        Vertel ons kort over je onderneming en ontvang hulp bij het vinden van een passende boekhouder.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/boekhouder-mkb" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw wensen en mogelijkheden te bespreken.
      </p>
    </div>
  );
}

const BRANCHES = [
  {
    id: 'dienstverlening',
    title: 'Zakelijke dienstverlening',
    text: 'Projectfacturatie, abonnementen, personeelskosten en verschillende inkomstenstromen.',
  },
  {
    id: 'horeca',
    title: 'Horeca',
    text: 'Kas- en pinadministratie, inkoop, omzetregistratie en verschillende btw-tarieven.',
  },
  {
    id: 'bouw',
    title: 'Bouw',
    text: 'Projectadministratie, onderaannemers, materiaalinkoop en btw-verlegging.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce',
    text: 'Online betalingen, retouren, platformen en internationale btw-verplichtingen.',
  },
  {
    id: 'retail',
    title: 'Retail',
    text: 'Kassasystemen, voorraad, leveranciers en dagelijkse omzetverwerking.',
  },
  {
    id: 'transport',
    title: 'Transport',
    text: 'Voertuigen, brandstof, onderhoud, personeel en internationale facturatie.',
  },
];

export default function BoekhouderMkbPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Boekhouder MKB' },
        ]}
        eyebrow="Boekhouder MKB"
        eyebrowIcon={Briefcase}
        title="Boekhouder voor het MKB vinden"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Een boekhouder die meegroeit met jouw onderneming.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={['Voor groeiende bedrijven', 'Administratie en salarisverwerking', 'Gratis en vrijblijvend']}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Meer dan alleen boekhouden</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Financieel inzicht', 'Periodieke rapportages over omzet, winst, kosten en liquiditeit.'],
              ['Salarisadministratie', 'Loonstroken, loonheffingen en personeelsmutaties — vanaf circa €17 p/m per medewerker.'],
              ['Ondersteuning bij groei', 'Van investeringen tot nieuwe vestigingen en ondernemingsstructuren.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-6">
                <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">{heading}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Indicatieve boekhoudkosten</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {[
              ['Eenmanszaak', '€100–150', 'per maand'],
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
                Wat kost jouw boekhouding?
              </p>
              <p className="mt-1 text-sm leading-relaxed text-ink-500">
                Bereken gratis je indicatieve maandelijkse kosten. Geen account nodig.
              </p>
            </div>
            <Link
              href="/tools/boekhouder-kosten-calculator"
              className={`${btn.primary} w-full shrink-0 sm:w-auto`}
            >
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van onze samenwerkingspartner WRKD B.V. Voor grotere of complexere
            MKB-bedrijven kunnen de kosten hoger uitvallen. Bekijk ook{' '}
            <TextLink href="/boekhouder-kosten">alle boekhoudtarieven</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6">
            Een boekhouder die meegroeit met jouw onderneming
          </DisplayHeading>
          <div className="space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Wanneer je onderneming groeit, verandert ook je financiële administratie. Waar je eerst misschien
              enkele facturen per maand verwerkte, heb je nu meer klanten, leveranciers, medewerkers en
              financiële verplichtingen.
            </p>
            <p>
              Je wilt niet alleen weten hoeveel omzet je maakt, maar ook hoeveel winst je overhoudt, welke
              kosten toenemen en of er voldoende financiële ruimte is om verder te groeien.
            </p>
            <p>Een boekhouder voor het MKB kan je ondersteunen bij:</p>
          </div>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Het professionaliseren van je financiële administratie.</li>
            <li>Het automatiseren van administratieve werkzaamheden.</li>
            <li>Het verzorgen van belastingaangiften.</li>
            <li>Het verwerken van salarisadministratie.</li>
            <li>Het verkrijgen van beter financieel inzicht.</li>
            <li>Het voorbereiden van investeringen.</li>
            <li>Het signaleren van financiële aandachtspunten.</li>
            <li>Het begeleiden van veranderingen binnen je onderneming.</li>
          </ul>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Een passende boekhouder kijkt, afhankelijk van de afgesproken dienstverlening, verder dan alleen
            het verwerken van cijfers. Vergelijk ook met een{' '}
            <TextLink href="/boekhouder-zzp">boekhouder voor zzp’ers</TextLink> of een{' '}
            <TextLink href="/boekhouder-bv">boekhouder voor je BV</TextLink>.
          </p>
          <FormCta>Vind een boekhouder die met je meegroeit</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost een boekhouder voor het MKB?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              De kosten hangen sterk af van de omvang van je onderneming, de rechtsvorm, het aantal
              transacties, het aantal medewerkers en de gewenste dienstverlening. Omdat het MKB verschillende
              soorten ondernemingen omvat, bestaat er geen vast standaardtarief.
            </p>
          </div>
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
                  ['Eenmanszaak', '€100 – €150', '€1.200 – €1.800'],
                  ['VOF', '€150 – €250', '€1.800 – €3.000'],
                  ['BV – werkmaatschappij', 'Vanaf €250', 'Vanaf €3.000'],
                  ['BV – holding', 'Vanaf €100', 'Vanaf €1.200'],
                  ['Meerdere ondernemingen', 'Op aanvraag', 'Op aanvraag'],
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
            Welke factoren bepalen de boekhoudkosten van een MKB-bedrijf?
          </h3>
          <dl className="mt-6 space-y-6">
            {[
              [
                'Aantal financiële transacties',
                'Een onderneming met honderden maandelijkse transacties vraagt doorgaans meer administratieve verwerking dan een bedrijf met enkele tientallen facturen.',
              ],
              [
                'Aantal medewerkers',
                'Salarisadministratie, loonheffingen en personeelsmutaties kunnen aanvullende werkzaamheden en kosten met zich meebrengen.',
              ],
              [
                'Aantal vestigingen en ondernemingen',
                'Meerdere vestigingen, werkmaatschappijen of afzonderlijke administraties kunnen de boekhouding complexer maken.',
              ],
              [
                'Gewenste financiële rapportages',
                'Wil je alleen een jaarlijkse afsluiting of ook maandelijkse rapportages over omzet, winst, kosten en liquiditeit?',
              ],
              [
                'Internationale activiteiten',
                'Buitenlandse klanten, leveranciers en transacties kunnen aanvullende administratieve en fiscale aandachtspunten opleveren.',
              ],
              [
                'Financieel en fiscaal advies',
                'Uitgebreide ondersteuning bij groei, investeringen en ondernemingsstructuren kan leiden tot hogere kosten.',
              ],
            ].map(([term, detail]) => (
              <div key={term} className="border-t border-ink/10 pt-5">
                <dt className="font-medium text-ink">{term}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed text-ink-500">{detail}</dd>
              </div>
            ))}
          </dl>

          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat kost salarisadministratie voor het MKB?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Salarisadministratie wordt regelmatig afzonderlijk berekend. In praktijkvoorbeelden van onze
            samenwerkingspartner wordt hiervoor een indicatief tarief van circa €17 per medewerker per maand
            genoemd.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['2 medewerkers', '€34'],
              ['5 medewerkers', '€85'],
              ['10 medewerkers', '€170'],
              ['20 medewerkers', '€340'],
            ].map(([label, price]) => (
              <PaperCard key={label} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{label}</p>
                <p className="mt-2 font-display text-3xl font-normal tracking-[-0.03em] text-ink">{price}</p>
                <p className="mt-1 text-xs text-ink-400">per maand</p>
              </PaperCard>
            ))}
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Rekenvoorbeelden op basis van €17 per medewerker. Het daadwerkelijke tarief kan afwijken.
          </p>
          <div className="mt-8">
            <Link href="/tools/boekhouder-kosten-calculator" className={btn.secondary}>
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Een boekhouder voor jouw branche
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            De administratieve behoeften van een horecabedrijf verschillen van die van een webshop,
            bouwbedrijf of zakelijke dienstverlener.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {BRANCHES.map((item) => (
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
        <div className="container mx-auto max-w-3xl px-4 sm:px-6 space-y-14">
          <div id="dienstverlening" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor zakelijke dienstverlening
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Consultants, marketingbureaus, IT-bedrijven en andere zakelijke dienstverleners hebben vaak te
              maken met projectfacturatie, abonnementen, personeelskosten en verschillende inkomstenstromen.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Het verwerken van zakelijke inkomsten en uitgaven.</li>
              <li>Inzicht in de winstgevendheid van projecten.</li>
              <li>Personeelskosten en belastingaangiften.</li>
              <li>Financiële rapportages en ondersteuning bij groei.</li>
            </ul>
          </div>

          <div id="horeca" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor horeca
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Restaurants, cafés en andere horecabedrijven hebben vaak veel dagelijkse transacties,
              personeelskosten en verschillende leveranciers.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Kas- en pinadministratie.</li>
              <li>Inkoopfacturen en omzetregistratie.</li>
              <li>Verschillende btw-tarieven.</li>
              <li>Salarisadministratie en inzicht in personeels- en inkoopkosten.</li>
            </ul>
          </div>

          <div id="bouw" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor bouwbedrijven
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Bouwbedrijven en installatiebedrijven hebben regelmatig te maken met projectadministratie,
              onderaannemers, materiaalinkoop en verschillende facturatiemomenten.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Projectadministratie en inkoop- en verkoopfacturen.</li>
              <li>Administratie rondom onderaannemers.</li>
              <li>Btw-verleggingsregelingen waar deze van toepassing zijn.</li>
              <li>Personeelsadministratie, investeringen en afschrijvingen.</li>
            </ul>
          </div>

          <div id="ecommerce" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor webshops en e-commerce
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Webshops verwerken vaak veel transacties via verschillende betaalmethoden, verkoopplatformen en
              leveranciers.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Verwerking van online betalingen, retouren en terugbetalingen.</li>
              <li>Voorraadadministratie en verkoop via verschillende platformen.</li>
              <li>Buitenlandse verkopen en btw bij internationale handel.</li>
              <li>Aansluiting tussen verkoopgegevens en ontvangen betalingen.</li>
            </ul>
          </div>

          <div id="retail" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor winkels en retail
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Winkels hebben vaak te maken met kassasystemen, voorraad, leveranciers en personeelskosten. Een
              boekhouder kan helpen bij het verwerken van dagelijkse omzet, voorraadmutaties, inkoopkosten,
              salarisadministratie en financiële rapportages.
            </p>
          </div>

          <div id="transport" className="scroll-mt-28">
            <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
              Boekhouder voor transport en logistiek
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
              Transportbedrijven hebben specifieke administratieve behoeften rondom voertuigen, brandstofkosten,
              onderhoud, personeel en internationale activiteiten.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
              <li>Voertuigadministratie, brandstof- en onderhoudskosten.</li>
              <li>Investeringen en afschrijvingen.</li>
              <li>Salarisadministratie en internationale facturatie.</li>
              <li>Financiële rapportages.</li>
            </ul>
          </div>

          <FormCta>Vind een boekhouder voor jouw branche</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Welke werkzaamheden kan een MKB-boekhouder verzorgen?</DisplayHeading>
          <div className="mt-10 space-y-10">
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Volledige financiële administratie
              </h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
                <li>Verkoopfacturen, inkoopfacturen en zakelijke bonnetjes.</li>
                <li>Banktransacties, debiteuren en crediteuren.</li>
                <li>Investeringen, afschrijvingen en financiële reserveringen.</li>
                <li>Overige zakelijke inkomsten en uitgaven.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Btw-aangiften en belastingaangiften
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Afhankelijk van je rechtsvorm: btw-aangiften, inkomstenbelasting, vennootschapsbelasting,
                loonheffingen en fiscale correcties. Zie ook{' '}
                <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>. Bespreek vooraf
                welke aangiften zijn inbegrepen.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Salarisadministratie</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
                <li>Maandelijkse salarisverwerking en loonstroken.</li>
                <li>Aangiften loonheffingen, vakantiegeld en personeelsmutaties.</li>
                <li>Jaaropgaven en administratieve verwerking van personeelskosten.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Jaarrekening en jaarafsluiting
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Afhankelijk van je rechtsvorm en wettelijke verplichtingen kan een boekhouder helpen bij het
                opstellen of voorbereiden van financiële jaarstukken, belastingaangiften en eventuele
                deponering.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Financiële rapportages
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Periodieke rapportages over omzetontwikkeling, kosten, bruto- en nettowinst, liquiditeit,
                openstaande facturen, personeelskosten en prestaties per periode.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
                Financieel en fiscaal advies
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Ondersteuning bij investeringen, het aannemen van personeel, uitbreiding, veranderingen in de
                ondernemingsstructuur, kostenbeheersing en financiële planning. Niet ieder kantoor biedt
                dezelfde adviesdiensten — bespreek vooraf wat je verwacht.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Van administratieve verwerking naar financieel inzicht</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Veel ondernemers ontvangen pas aan het einde van het boekjaar een uitgebreid overzicht. Voor een
              groeiend MKB-bedrijf kan dat te laat zijn om tijdig bij te sturen.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Financieel inzicht</th>
                  <th className="px-5 py-3 font-mono font-normal">Waarom het belangrijk is</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Omzet', 'Begrijpen hoe je verkopen zich ontwikkelen.'],
                  ['Winst', 'Weten hoeveel je daadwerkelijk overhoudt.'],
                  ['Cashflow', 'Inzicht krijgen in beschikbare financiële middelen.'],
                  ['Debiteuren', 'Zien welke klanten nog moeten betalen.'],
                  ['Personeelskosten', 'Begrijpen hoeveel personeel bijdraagt aan je totale kosten.'],
                  ['Vaste lasten', 'Signaleren welke terugkerende kosten toenemen.'],
                  ['Belastingreserveringen', 'Beter voorbereid zijn op fiscale betalingen.'],
                ].map(([insight, why]) => (
                  <tr key={insight} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{insight}</td>
                    <td className="px-5 py-3.5">{why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Omzet is niet hetzelfde als winst
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Een onderneming kan een groeiende omzet hebben terwijl de winst onder druk staat. Hogere
            personeelskosten, duurdere leveranciers en extra vestigingen kunnen ervoor zorgen dat je ondanks
            meer omzet minder overhoudt.
          </p>
          <h3 className="mt-10 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Winst is niet hetzelfde als beschikbare cash
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Ook een winstgevend bedrijf kan tijdelijk te weinig geld beschikbaar hebben — bijvoorbeeld wanneer
            klanten laat betalen terwijl jij leveranciers en medewerkers wel op tijd moet betalen.
          </p>
          <FormCta>Vind een boekhouder die verder kijkt dan je administratie</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Boekhouding automatiseren binnen het MKB</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Naarmate het aantal financiële transacties groeit, wordt handmatige verwerking steeds
            tijdrovender. Digitale boekhouding — en een{' '}
            <TextLink href="/online-boekhouder">online boekhouder</TextLink> — kan helpen om administratieve
            werkzaamheden efficiënter te organiseren.
          </p>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Automatische bankkoppelingen.</li>
            <li>Digitale verwerking van inkoopfacturen.</li>
            <li>UBL- en e-facturen.</li>
            <li>Herkenning van bonnetjes en documenten.</li>
            <li>Automatische betalingsherinneringen.</li>
            <li>Koppelingen met kassasystemen en webshops.</li>
            <li>Digitale financiële rapportages.</li>
          </ul>
          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Zelf factureren met FactuurBaas
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Je hoeft niet automatisch over te stappen naar een betaald factuurprogramma. Met FactuurBaas kun
            je gratis professionele verkoopfacturen maken en downloaden als PDF of UBL-bestand, en digitaal
            aanleveren bij je boekhouder.
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
          <DisplayHeading size="md">Wanneer is het tijd om je MKB-boekhouding uit te besteden?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Het uitbesteden van je boekhouding kan interessant zijn wanneer je steeds meer tijd kwijt bent aan
            administratie, meerdere medewerkers hebt, onvoldoende financieel inzicht hebt, de administratie
            achterloopt, of sneller groeit dan je administratieve processen. Meer over{' '}
            <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>
          <h3 className="mt-12 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Wat kost het om je administratie zelf te doen?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Stel dat jij of een medewerker iedere maand 15 uur besteedt aan financiële administratie. Bij een
            economische waarde van €50 per uur vertegenwoordigt deze tijd €750 per maand.
          </p>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[20rem] text-left text-sm">
              <tbody className="text-ink-700">
                {[
                  ['Administratietijd per maand', '15 uur'],
                  ['Waarde per uur', '€50'],
                  ['Potentiële tijdswaarde per maand', '€750'],
                  ['Potentiële tijdswaarde per jaar', '€9.000'],
                ].map(([label, value]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5 text-right tabular-nums">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <Link href="/tools/boekhouder-kosten-calculator" className={btn.secondary}>
              Bereken de kosten van uitbesteden
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Boekhouder of accountant voor het MKB?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Niet ieder MKB-bedrijf heeft een accountant nodig voor de dagelijkse financiële administratie. Een
            boekhouder of administratiekantoor kan voor veel kleine en middelgrote ondernemingen voldoende
            ondersteuning bieden.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Werkzaamheid</th>
                  <th className="px-5 py-3 font-mono font-normal">Boekhouder</th>
                  <th className="px-5 py-3 font-mono font-normal">Accountant</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Dagelijkse financiële administratie', 'Ja', 'Ja'],
                  ['Btw-aangiften', 'Afhankelijk van dienstverlening', 'Afhankelijk van dienstverlening'],
                  ['Salarisadministratie', 'Afhankelijk van dienstverlening', 'Afhankelijk van dienstverlening'],
                  ['Jaarrekening opstellen', 'Afhankelijk van expertise', 'Ja'],
                  ['Financiële rapportages', 'Afhankelijk van expertise', 'Afhankelijk van expertise'],
                  ['Fiscaal advies', 'Afhankelijk van expertise', 'Afhankelijk van expertise'],
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
            controles is een daartoe bevoegde accountant nodig. Heb je specifieke accountantswerkzaamheden
            nodig, bijvoorbeeld voor een financieringsaanvraag? Geef dit dan duidelijk aan.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen naar een andere MKB-boekhouder</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Een boekhouder die goed bij je paste toen je begon, hoeft niet automatisch de beste keuze te
            blijven wanneer je bedrijf groeit. Veelvoorkomende redenen: onvoldoende proactief advies, trage
            reacties, onduidelijke tarieven, beperkte digitale mogelijkheden of behoefte aan uitgebreidere
            rapportages. Meer over{' '}
            <TextLink href="/boekhouder-overstappen">overstappen van administratiekantoor</TextLink>.
          </p>
          <h3 className="mt-10 font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Hoe stap je over naar een andere boekhouder?
          </h3>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Controleer eerst de overeenkomst en eventuele opzegtermijn. Maak vervolgens afspraken over de
            overdracht van de volledige financiële administratie, openstaande aangiften, jaarrekeningen,
            salarisadministratie, debiteuren- en crediteurenoverzichten, boekhoudsoftware en openstaande
            werkzaamheden.
          </p>
          <FormCta>Vind een nieuwe boekhouder voor je MKB-bedrijf</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Waar moet je op letten bij het kiezen van een MKB-boekhouder?</DisplayHeading>
          <ol className="mt-8 space-y-6">
            {[
              ['Ervaring met jouw branche', 'Een horecabedrijf heeft andere behoeften dan een webshop of consultancybureau.'],
              ['Ervaring met jouw bedrijfsgrootte', 'Een kantoor voor zelfstandigen heeft niet per se dezelfde expertise voor bedrijven met meerdere medewerkers en vestigingen.'],
              ['Duidelijke tarieven', 'Vraag welke werkzaamheden zijn inbegrepen en welke afzonderlijk worden berekend.'],
              ['Salarisadministratie', 'Heb je personeel of plan je medewerkers aan te nemen? Controleer of het kantoor hiervoor ondersteuning biedt.'],
              ['Financiële rapportages', 'Bespreek hoe vaak je inzicht krijgt in omzet, kosten, winst en liquiditeit.'],
              ['Digitale mogelijkheden', 'Vraag welke boekhoudsoftware wordt gebruikt en welke koppelingen mogelijk zijn.'],
              ['Persoonlijk contact', 'Maak afspraken over bereikbaarheid, contactmomenten en ondersteuning.'],
              ['Proactief advies', 'Wil je uitsluitend administratieve verwerking of ook ondersteuning bij financiële beslissingen?'],
              ['Mogelijkheden om mee te groeien', 'Controleer of het kantoor capaciteit en expertise heeft voor de toekomst.'],
              ['Specialistische expertise', 'Bij internationale activiteiten of complexe fiscale situaties kan aanvullende deskundigheid nodig zijn.'],
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
          <DisplayHeading size="md">Welke afspraken maak je met een MKB-boekhouder?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Voordat je een samenwerking aangaat, leg duidelijk vast welke werkzaamheden worden uitgevoerd.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Onderdeel</th>
                  <th className="px-5 py-3 font-mono font-normal">Wat moet je afspreken?</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Financiële administratie', 'Welke werkzaamheden worden overgenomen?'],
                  ['Transacties', 'Geldt er een maximumaantal per maand?'],
                  ['Belastingaangiften', 'Welke aangiften zijn inbegrepen?'],
                  ['Jaarafsluiting', 'Zijn de jaarlijkse werkzaamheden inbegrepen?'],
                  ['Salarisadministratie', 'Wat kost de verwerking per medewerker?'],
                  ['Rapportages', 'Hoe vaak ontvang je financiële overzichten?'],
                  ['Boekhoudsoftware', 'Welke software wordt gebruikt en wie betaalt deze?'],
                  ['Advies', 'Is advies inbegrepen of geldt een afzonderlijk tarief?'],
                  ['Contact', 'Wie is jouw vaste contactpersoon?'],
                  ['Groei', 'Hoe veranderen de kosten wanneer je onderneming groeit?'],
                  ['Overstap', 'Zijn er eenmalige opstart- of overdrachtskosten?'],
                ].map(([part, ask]) => (
                  <tr key={part} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{part}</td>
                    <td className="px-5 py-3.5">{ask}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe vind je een MKB-boekhouder via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {[
              [
                '1',
                'Vertel ons over je onderneming',
                'Selecteer je rechtsvorm en vul je bedrijfsnaam, vestigingsplaats en contactgegevens in.',
              ],
              [
                '2',
                'Bespreek jouw administratieve behoeften',
                'Onze samenwerkingspartner WRKD B.V. kan contact met je opnemen. Geef aan of je behoefte hebt aan salarisadministratie, rapportages, fiscaal advies of volledige uitbesteding.',
              ],
              [
                '3',
                'Beslis zelf of je wilt samenwerken',
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
            <li>Voor verschillende bedrijfsvormen.</li>
            <li>Geen verplichting om een boekhouder in te schakelen.</li>
          </ul>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Of bekijk eerst{' '}
            <TextLink href="/boekhouder-vinden">boekhouder vinden</TextLink> voor alle rechtsvormen.
          </p>
          <FormCta>Vind mijn MKB-boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over een boekhouder voor het MKB</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-12">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <BookkeeperClusterLinks currentHref="/boekhouder-mkb" />
        </div>
      </section>

      <ClosingCta
        title="Een boekhouder die meegroeit met jouw onderneming"
        text="Of je nu je eerste medewerkers aanneemt, een nieuwe vestiging opent of meer inzicht wilt in je cijfers: vraag gratis en vrijblijvend hulp aan."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn MKB-boekhouder' }}
        secondary={{ href: '/tools/boekhouder-kosten-calculator', label: 'Bereken boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief en vormen geen bindende offerte. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
