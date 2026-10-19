import Link from 'next/link';
import { BookOpen } from 'lucide-react';
import { ArrowIcon, DisplayHeading, FaqList, PageHeader, TrustList, btn } from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const pageUrl = 'https://factuurbaas.nl/boekhouden';
const title = "Boekhouden voor ZZP'ers: Zelf Doen of Uitbesteden? | FactuurBaas";
const description =
  "Zelf boekhouden als zzp'er? Ontdek hoe je facturen, kosten en btw bijhoudt. Vergelijk boekhoudprogramma's of vind gratis hulp van een boekhouder.";

export const metadata = {
  title,
  description,
  keywords:
    'boekhouden zzp, zelf boekhouden, boekhouding zzp, administratie zzp, boekhouder vinden, boekhoudprogramma zzp',
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: 'FactuurBaas',
    type: 'website',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [SITE_OG_IMAGE],
  },
};

const FAQS = [
  {
    q: "Is een boekhouder verplicht voor ZZP'ers?",
    a: "Nee. Als ZZP'er ben je niet verplicht om een boekhouder in te schakelen. Je bent wel verantwoordelijk voor een correcte administratie en het naleven van je belastingverplichtingen.",
  },
  {
    q: 'Kan ik zelf mijn boekhouding doen?',
    a: 'Ja. Je mag als ondernemer zelf je administratie bijhouden. Zorg dat je de benodigde gegevens vastlegt, bewijsstukken bewaart en je aangiften correct indient.',
  },
  {
    q: 'Wat is het verschil tussen boekhouden en factureren?',
    a: 'Factureren is het opstellen en versturen van facturen. Boekhouden omvat de volledige financiële administratie, waaronder inkomsten, uitgaven, banktransacties en belastinggegevens.',
  },
  {
    q: "Heb ik als ZZP'er een boekhoudprogramma nodig?",
    a: 'Niet per definitie. Het hangt af van de omvang en complexiteit van je administratie. Je moet wel zorgen dat je administratie aan de wettelijke eisen voldoet, ongeacht welke hulpmiddelen je gebruikt.',
  },
  {
    q: "Wat kost een boekhouder voor een ZZP'er?",
    a: 'De kosten verschillen per boekhouder en per onderneming. Het aantal transacties, de werkzaamheden en de bedrijfsvorm bepalen mede de prijs. Vraag vooraf welke diensten inbegrepen zijn.',
  },
  {
    q: 'Kan ik zelf facturen maken en een boekhouder de rest laten doen?',
    a: 'Ja. Veel ondernemers maken zelf hun facturen en besteden de verwerking van hun administratie of belastingaangiften uit. Bespreek met je boekhouder hoe je de gegevens moet aanleveren.',
  },
  {
    q: 'Wat is het verschil tussen een boekhouder en een accountant?',
    a: 'Een boekhouder houdt zich doorgaans bezig met de financiële administratie en aangiften. De titels AA en RA zijn beschermde accountantstitels. Voor de dagelijkse boekhouding is niet altijd een accountant nodig.',
  },
];

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://factuurbaas.nl/' },
    { '@type': 'ListItem', position: 2, name: 'Boekhouden', item: pageUrl },
  ],
};

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  headline: "Boekhouden voor ZZP'ers en kleine bedrijven",
  description,
  url: pageUrl,
  inLanguage: 'nl-NL',
  isPartOf: { '@type': 'WebSite', name: 'FactuurBaas', url: 'https://factuurbaas.nl' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

const linkClass = 'underline decoration-ink/20 underline-offset-4 hover:decoration-ember';

function TextLink({ href, children }) {
  return (
    <Link href={href} className={linkClass}>
      {children}
    </Link>
  );
}

export default function BoekhoudenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Boekhouden' }]}
        eyebrow="Boekhouden voor ondernemers"
        eyebrowIcon={BookOpen}
        title="Boekhouden voor ZZP'ers en kleine bedrijven"
        size="lg"
        containerClassName="max-w-6xl"
        lead={
          <p>
            Zelf je administratie bijhouden, een boekhoudprogramma kiezen of een boekhouder
            inschakelen? Met FactuurBaas ontdek je wat bij jouw onderneming past. Van facturen en
            btw tot boekhoudsoftware en professionele hulp.
          </p>
        }
      >
        <TrustList items={['Gratis tools', 'Praktische gidsen', 'Hulp bij je boekhouding']} />

        <div className="mt-12">
          <h2 className="font-display text-[1.75rem] font-normal leading-tight tracking-[-0.025em] text-ink sm:text-[2.15rem]">
            Hoe wil jij je boekhouding regelen?
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <article className="rounded-2xl border border-ember/30 bg-white p-7 shadow-paper sm:p-8 lg:row-span-2">
              <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Boekhouder vinden</p>
              <h3 className="mt-3 font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink">
                Wil je minder tijd kwijt zijn aan je administratie?
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                Vind hulp bij het verwerken van facturen, verzorgen van btw-aangiften of bijhouden
                van je volledige boekhouding.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Via FactuurBaas kun je gratis en vrijblijvend een aanvraag indienen om een passende
                boekhouder te vinden.
              </p>
              <Link href="/boekhouder-vinden" className={`${btn.primary} mt-6`}>
                Vind een boekhouder
                <ArrowIcon />
              </Link>
            </article>

            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 sm:p-7">
              <h3 className="font-display text-2xl font-normal leading-snug text-ink">
                Boekhoudprogramma vergelijken
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Wil je zelf je boekhouding doen, maar niet alles handmatig bijhouden? Een
                boekhoudprogramma helpt je om inkomsten, uitgaven, facturen en btw op één plek te
                beheren.
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Vergelijk boekhoudprogramma&apos;s voor ZZP&apos;ers en kleine bedrijven op functies
                en kosten.
              </p>
              <Link href="/boekhoudprogramma-vergelijken" className={`${btn.secondary} mt-5`}>
                Vergelijk boekhoudprogramma&apos;s
                <ArrowIcon />
              </Link>
            </article>

            <article className="rounded-2xl border border-ink/[0.08] bg-white p-6 sm:p-7">
              <h3 className="font-display text-2xl font-normal leading-snug text-ink">Boekhoudprogramma-check</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Heb je echt een compleet boekhoudprogramma nodig, of is een eenvoudige factuurtool
                voorlopig voldoende?
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                Met de gratis boekhoudprogramma-check ontdek je welke oplossing bij jouw
                administratie past.
              </p>
              <Link href="/tools/boekhoudprogramma-check" className={`${btn.secondary} mt-5`}>
                Doe de gratis check
                <ArrowIcon />
              </Link>
            </article>
          </div>
          <p className="mt-6 text-sm text-ink-500">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400">Ook handig</span>
            <Link href="/factuur-maken" className={`${btn.link} ml-3`}>
              Gratis factuur maken
              <ArrowIcon />
            </Link>
          </p>
        </div>
      </PageHeader>

      <section className="border-t border-ink/[0.06] bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat is boekhouden?</DisplayHeading>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Boekhouden is het vastleggen en bijhouden van de financiële gegevens van je onderneming.
              Denk aan verkoopfacturen, inkoopfacturen, zakelijke uitgaven, banktransacties en
              belastingverplichtingen.
            </p>
            <p>
              Een overzichtelijke boekhouding helpt je om te zien hoeveel je verdient, welke kosten
              je maakt, welke klanten nog moeten betalen en hoeveel btw je moet afdragen of kunt
              terugvragen.
            </p>
            <p>
              Als ondernemer ben je verantwoordelijk voor een administratie die voldoet aan de
              wettelijke verplichtingen. Dat betekent niet dat je verplicht bent een boekhouder in te
              schakelen: je mag je administratie ook zelf bijhouden.
            </p>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">
            Wat hoort bij de boekhouding van een ZZP&apos;er?
          </h3>
          <ul className="mt-4 space-y-3 text-[15px] leading-relaxed text-ink-500">
            {[
              ['Verkoopfacturen', 'de facturen die je naar klanten verstuurt.'],
              ['Inkoopfacturen', 'facturen van leveranciers en zakelijke aankopen.'],
              ['Zakelijke kosten', 'uitgaven die je voor je onderneming maakt.'],
              ['Banktransacties', 'ontvangen betalingen en zakelijke uitgaven.'],
              ['Btw-administratie', 'de btw die je berekent en eventueel kunt terugvragen.'],
              ['Openstaande facturen', 'bedragen die klanten nog moeten betalen.'],
              ['Jaarafsluiting', 'het verwerken van je financiële gegevens voor de jaarlijkse belastingaangifte.'],
            ].map(([label, text]) => (
              <li key={label}>
                <span className="font-medium text-ink">{label}:</span> {text}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Lees onze uitgebreide gids over{' '}
            <TextLink href="/gidsen/boekhouding-zzp">boekhouding voor ZZP&apos;ers</TextLink> voor een
            verdere uitleg.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Zelf boekhouden of uitbesteden?
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Als ZZP&apos;er kun je ervoor kiezen om je administratie zelf bij te houden, een
            boekhoudprogramma te gebruiken of een boekhouder in te schakelen.
          </p>
          <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-ink-500">
            Welke oplossing het beste past, hangt af van de hoeveelheid administratie, je kennis van
            de regels en de tijd die je beschikbaar hebt.
          </p>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[40rem] border-y border-ink/10 text-left text-[15px]">
              <caption className="sr-only">Zelf boekhouden vergeleken met een boekhouder inschakelen</caption>
              <thead>
                <tr className="border-b border-ink/10">
                  <th scope="col" className="py-3 pr-6 font-medium text-ink" />
                  <th scope="col" className="py-3 pr-6 font-medium text-ink">
                    Zelf boekhouden
                  </th>
                  <th scope="col" className="py-3 font-medium text-ink">
                    Boekhouder inschakelen
                  </th>
                </tr>
              </thead>
              <tbody className="text-ink-500">
                {[
                  ['Verwerking', 'Je verwerkt je administratie zelf.', 'Je besteedt afgesproken werkzaamheden uit.'],
                  ['Tijd', 'Je besteedt zelf tijd aan facturen en kosten.', 'Je houdt meer tijd over voor je onderneming.'],
                  ['Kosten', 'Mogelijk lagere externe kosten.', 'Kosten voor professionele dienstverlening.'],
                  ['Belastingaangiften', 'Je verzorgt aangiften zelf.', 'Je kunt ondersteuning krijgen bij aangiften.'],
                  [
                    'Geschikt voor',
                    'Overzichtelijke administraties en ondernemers met voldoende kennis.',
                    'Ondernemers die tijd willen besparen of hulp nodig hebben.',
                  ],
                ].map(([label, self, outsource]) => (
                  <tr key={label} className="border-b border-ink/10">
                    <th scope="row" className="py-4 pr-6 align-top font-medium text-ink">
                      {label}
                    </th>
                    <td className="py-4 pr-6 align-top leading-relaxed">{self}</td>
                    <td className="py-4 align-top leading-relaxed">{outsource}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            <article>
              <h3 className="font-display text-2xl font-normal text-ink">Zelf boekhouden als ZZP&apos;er</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
                <p>
                  Bij een eenvoudige administratie kun je veel werkzaamheden zelf uitvoeren. Je maakt
                  facturen, bewaart bonnetjes, registreert zakelijke kosten en houdt je betalingen bij.
                </p>
                <p>
                  Het is wel belangrijk dat je begrijpt welke gegevens je moet bewaren en hoe je
                  belastingverplichtingen werken.
                </p>
              </div>
              <Link href="/gidsen/zelf-boekhouden-zzp" className={`${btn.link} mt-5`}>
                Lees: Zelf boekhouden als ZZP&apos;er
                <ArrowIcon />
              </Link>
            </article>
            <article>
              <h3 className="font-display text-2xl font-normal text-ink">Boekhouding uitbesteden</h3>
              <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
                <p>
                  Wordt je administratie ingewikkelder of kost deze te veel tijd? Dan kun je een
                  boekhouder inschakelen.
                </p>
                <p>
                  Je hoeft niet direct alles uit te besteden. Je kunt bijvoorbeeld zelf facturen maken
                  en de btw-aangifte of jaarafsluiting laten verzorgen.
                </p>
              </div>
              <Link href="/boekhouder-vinden" className={`${btn.link} mt-5`}>
                Vind hulp bij je boekhouding
                <ArrowIcon />
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Boekhouden begint bij je facturen</DisplayHeading>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Voor veel zelfstandigen begint de administratie bij het versturen van een factuur. Je
              levert een dienst of product, maakt een factuur en wacht op de betaling.
            </p>
            <p>Maar een factuur versturen is niet hetzelfde als je volledige boekhouding bijhouden.</p>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">Verkoopfacturen maken</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Een verkoopfactuur legt vast wat je aan een klant hebt geleverd, welk bedrag je in
            rekening brengt en welke btw van toepassing is.
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Met de gratis factuurmaker van FactuurBaas maak je eenvoudig een{' '}
            <TextLink href="/factuur-maken">professionele factuur</TextLink>.
          </p>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">Zakelijke uitgaven bijhouden</h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
            <p>
              Naast je inkomsten moet je ook je zakelijke kosten registreren. Denk aan materialen,
              software, reiskosten en andere uitgaven voor je onderneming.
            </p>
            <p>
              Bewaar de bijbehorende facturen en bonnetjes zodat je de bedragen kunt onderbouwen. Je
              kunt ze bijhouden in{' '}
              <TextLink href="/uitgaven-bijhouden">uitgaven bijhouden</TextLink>.
            </p>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">Btw berekenen en aangeven</h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
            <p>
              Op veel facturen moet je btw vermelden. De btw die je ontvangt en de btw die je onder de
              toepasselijke regels mag aftrekken, spelen een rol bij je btw-aangifte.
            </p>
            <p>
              Gebruik de gratis <TextLink href="/tools/btw-calculator">btw-calculator</TextLink> om
              bedragen inclusief of exclusief btw te berekenen.
            </p>
          </div>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">Betalingen controleren</h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
            <p>
              Niet iedere verstuurde factuur wordt direct betaald. Houd daarom bij welke facturen
              openstaan, welke betalingstermijn geldt en wanneer je een herinnering moet sturen.
            </p>
            <p>Een goede factuuradministratie maakt de rest van je boekhouding overzichtelijker.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wanneer heb je een boekhoudprogramma nodig?</DisplayHeading>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Een boekhoudprogramma helpt om financiële gegevens gestructureerd te verwerken. Veel
              programma&apos;s bieden functies voor facturen, banktransacties, kosten, btw-overzichten
              en rapportages.
            </p>
            <p>
              Bij weinig transacties kan een eenvoudige werkwijze voldoende zijn, zolang je
              administratie volledig is en aan de wettelijke eisen voldoet.
            </p>
            <p>Een uitgebreider boekhoudprogramma wordt interessanter wanneer:</p>
          </div>
          <ul className="mt-4 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Je veel facturen en zakelijke uitgaven hebt.</li>
            <li>Je banktransacties automatisch wilt verwerken.</li>
            <li>Je btw-overzichten wilt bijhouden.</li>
            <li>Je financiële rapportages nodig hebt.</li>
            <li>Je administratie wilt delen met een boekhouder.</li>
          </ul>
          <h3 className="mt-10 font-display text-2xl font-normal text-ink">
            Factuurprogramma of boekhoudprogramma?
          </h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
            <p>
              Een factuurprogramma richt zich vooral op het maken en beheren van facturen. Een
              boekhoudprogramma ondersteunt daarnaast de bredere financiële administratie.
            </p>
            <p>Welke oplossing je nodig hebt, hangt af van de werkzaamheden die je zelf uitvoert.</p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/boekhoudprogramma-vergelijken" className={btn.secondary}>
              Vergelijk boekhoudprogramma&apos;s
              <ArrowIcon />
            </Link>
            <Link href="/tools/boekhoudprogramma-check" className={btn.link}>
              Ontdek wat je nodig hebt met de boekhoudprogramma-check
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wanneer is een boekhouder verstandig?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Je bent als ZZP&apos;er niet verplicht om een boekhouder in te schakelen. Toch kan
            professionele hulp verstandig zijn als je administratie meer tijd kost of ingewikkelder
            wordt.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">Denk bijvoorbeeld aan:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Je twijfelt over je btw-aangifte.</li>
            <li>Je hebt veel verschillende zakelijke kosten.</li>
            <li>Je onderneming groeit en je krijgt meer transacties.</li>
            <li>Je wilt hulp bij de jaarlijkse belastingaangifte.</li>
            <li>Je hebt een BV met aanvullende verplichtingen.</li>
            <li>Je wilt je tijd liever besteden aan klanten en opdrachten.</li>
          </ul>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Een boekhouder kan je volledige administratie verzorgen of alleen helpen bij specifieke
            werkzaamheden.
          </p>
          <Link href="/boekhouder-vinden" className={`${btn.primary} mt-6`}>
            Boekhouder vinden voor ZZP en MKB
            <ArrowIcon />
          </Link>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat kost boekhouden als ZZP&apos;er?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            De kosten van je boekhouding hangen af van de manier waarop je deze organiseert.
          </p>
          <h3 className="mt-8 font-display text-2xl font-normal text-ink">Gratis of zelf boekhouden</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Je kunt zelf facturen maken en je administratie bijhouden. Sommige hulpmiddelen zijn
            gratis, maar je moet wel tijd besteden aan het correct verwerken en bewaren van gegevens.
          </p>
          <h3 className="mt-8 font-display text-2xl font-normal text-ink">Boekhoudsoftware</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
            Bij boekhoudsoftware betaal je vaak een maand- of jaarbedrag. De prijs hangt af van
            functies, het aantal gebruikers en eventuele aanvullende diensten.
          </p>
          <h3 className="mt-8 font-display text-2xl font-normal text-ink">Een boekhouder inschakelen</h3>
          <div className="mt-3 space-y-3 text-[15px] leading-relaxed text-ink-500">
            <p>
              Een boekhouder kan een vast maandbedrag, uurtarief of prijs per opdracht rekenen. De
              kosten zijn onder meer afhankelijk van je bedrijfsvorm, aantal transacties en de
              werkzaamheden die je uitbesteedt.
            </p>
            <p>Vergelijk daarom niet alleen de prijs, maar ook welke diensten inbegrepen zijn.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md">Gratis tools voor je administratie</DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Met de gratis tools van FactuurBaas regel je verschillende onderdelen van je financiële
            administratie.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              [
                'Factuur maken',
                'Maak een professionele factuur met de gegevens van je onderneming, klant en geleverde werkzaamheden.',
                '/factuur-maken',
                'Gratis factuur maken',
              ],
              [
                'Btw-calculator',
                'Bereken bedragen inclusief en exclusief btw en controleer de btw op je facturen.',
                '/tools/btw-calculator',
                'Btw berekenen',
              ],
              [
                'Factuurnummer-generator',
                'Maak een factuurnummer en ontdek hoe je een logische nummering voor je facturen gebruikt.',
                '/tools/factuurnummer-generator',
                'Factuurnummer maken',
              ],
              [
                'Boekhoudprogramma-check',
                'Ontdek of een factuurtool of uitgebreider boekhoudprogramma beter bij je onderneming past.',
                '/tools/boekhoudprogramma-check',
                'Doe de boekhoudprogramma-check',
              ],
            ].map(([heading, text, href, cta]) => (
              <article key={heading} className="rounded-2xl border border-ink/[0.08] bg-paper-50 p-6">
                <h3 className="font-display text-2xl font-normal text-ink">{heading}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{text}</p>
                <Link href={href} className={`${btn.link} mt-4`}>
                  {cta}
                  <ArrowIcon />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over boekhouden</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] bg-white py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[16ch]">
            Regel je boekhouding op jouw manier
          </DisplayHeading>
          <p className="mt-4 text-lg leading-relaxed text-ink-500">
            Of je nu zelf je administratie wilt bijhouden, boekhoudsoftware zoekt of liever een
            boekhouder inschakelt: FactuurBaas helpt je de volgende stap te zetten.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link href="/boekhouder-vinden" className={btn.primary}>
              Vind een boekhouder
              <ArrowIcon />
            </Link>
            <Link href="/boekhoudprogramma-vergelijken" className={btn.secondary}>
              Vergelijk boekhoudprogramma&apos;s
              <ArrowIcon />
            </Link>
            <Link href="/factuur-maken" className={btn.secondary}>
              Maak gratis een factuur
              <ArrowIcon />
            </Link>
          </div>
          <p className="mt-8 text-[13px] leading-relaxed text-ink-500">
            FactuurBaas biedt gratis tools en algemene informatie voor ondernemers. Voor aanvragen om
            een boekhouder te vinden werken we samen met WRKD B.V. FactuurBaas kan een vergoeding
            ontvangen voor doorverwijzingen. De informatie op deze pagina is geen persoonlijk fiscaal
            advies.
          </p>
        </div>
      </section>
    </div>
  );
}
