import Link from 'next/link';
import { Suspense } from 'react';
import { Laptop } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import OnlineBoekhouderKeuzehulp from '@/components/leads/OnlineBoekhouderKeuzehulp';
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

const title = 'Online boekhouder vinden voor ZZP, BV en MKB | FactuurBaas';
const description =
  'Op zoek naar een online boekhouder? Regel je boekhouding digitaal, bekijk indicatieve kosten en vraag gratis en vrijblijvend hulp aan voor je onderneming.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/online%20een%20boekhouder%20vinden.jpg',
  alt: 'Online boekhouder vinden voor digitale samenwerking.',
};

export const metadata = {
  title,
  description,
  keywords:
    'online boekhouder, online boekhouder zzp, online boekhouder vinden, digitale boekhouder, online boekhoudservice, online administratiekantoor, online boekhouder eenmanszaak, online boekhouder bv, online boekhouder mkb, goedkope online boekhouder, beste online boekhouder, online boekhouder kosten, online boekhouding uitbesteden, digitale boekhouding uitbesteden, boekhouder op afstand, online boekhouder Nederland, online boekhoudkantoor',
  alternates: { canonical: 'https://factuurbaas.nl/online-boekhouder' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/online-boekhouder',
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
    q: 'Wat is een online boekhouder?',
    a: 'Een online boekhouder is een professionele boekhouder die administratieve werkzaamheden voornamelijk digitaal uitvoert. Documentaanlevering, communicatie en financiële verwerking verlopen grotendeels via online systemen.',
  },
  {
    q: 'Wat kost een online boekhouder per maand?',
    a: 'De kosten hangen af van je rechtsvorm en gewenste dienstverlening. Voor volledige uitbesteding van de boekhouding van een eenmanszaak liggen de indicatieve tarieven van onze samenwerkingspartner tussen €100 en €150 per maand. De tarieven zijn niet specifiek vastgesteld voor uitsluitend online dienstverlening.',
  },
  {
    q: 'Is een online boekhouder goedkoper dan een traditionele boekhouder?',
    a: 'Niet noodzakelijk. Digitale verwerking kan efficiënter zijn, maar de uiteindelijke kosten hangen af van de hoeveelheid werkzaamheden, complexiteit en gewenste dienstverlening.',
  },
  {
    q: 'Kan ik mijn volledige boekhouding online uitbesteden?',
    a: 'Veel administratiekantoren bieden digitale dienstverlening aan. Afhankelijk van de gebruikte software en gemaakte afspraken kunnen vrijwel alle reguliere boekhoudkundige werkzaamheden digitaal worden georganiseerd.',
  },
  {
    q: 'Heb ik zelf een boekhoudprogramma nodig?',
    a: 'Niet altijd. Sommige boekhouders bieden toegang tot hun eigen boekhoudsoftware. Andere vragen je om zelf bepaalde software te gebruiken. Bespreek vooraf welke werkwijze wordt toegepast.',
  },
  {
    q: 'Kan ik FactuurBaas blijven gebruiken met een online boekhouder?',
    a: 'Ja. Je kunt gratis facturen maken met FactuurBaas en deze downloaden als PDF of UBL-bestand. Bespreek met je boekhouder hoe je deze bestanden kunt aanleveren.',
  },
  {
    q: 'Kan een online boekhouder mijn btw-aangifte verzorgen?',
    a: 'Ja, wanneer dit onderdeel is van de afgesproken dienstverlening. Een boekhouder kan je btw-administratie verwerken en je aangiften voorbereiden of indienen.',
  },
  {
    q: 'Kan ik persoonlijk contact hebben met een online boekhouder?',
    a: 'Ja. Online boekhouden betekent niet dat alle werkzaamheden automatisch worden uitgevoerd. Veel online boekhouders bieden persoonlijk contact via telefoon, e-mail of videogesprekken.',
  },
  {
    q: 'Is online boekhouden veilig?',
    a: 'Dat hangt af van de gebruikte systemen en beveiligingsmaatregelen. Vraag naar veilige documentaanlevering, toegangsrechten, gegevensopslag en mogelijkheden voor tweestapsverificatie.',
  },
  {
    q: 'Kan ik een online boekhouder gebruiken als ik in het buitenland verblijf?',
    a: 'Een digitale samenwerking kan praktisch zijn wanneer je regelmatig in het buitenland verblijft. Je fiscale woonplaats, ondernemingsstructuur en internationale activiteiten kunnen echter aanvullende verplichtingen met zich meebrengen.',
  },
  {
    q: 'Is een online boekhouder geschikt voor een BV?',
    a: 'Ja. Een digitale boekhoudkundige samenwerking kan ook geschikt zijn voor BV’s, holdings en werkmaatschappijen, afhankelijk van de expertise en dienstverlening van het administratiekantoor.',
  },
  {
    q: 'Kan ik overstappen van mijn huidige boekhouder naar een online boekhouder?',
    a: 'Ja. Controleer je huidige overeenkomst en maak afspraken over de overdracht van je administratie, financiële gegevens en lopende werkzaamheden.',
  },
  {
    q: 'Wat is het verschil tussen een online boekhouder en boekhoudsoftware?',
    a: 'Boekhoudsoftware is een digitaal hulpmiddel waarmee financiële gegevens worden verwerkt. Een online boekhouder is een professionele dienstverlener die administratieve en fiscale werkzaamheden voor je kan uitvoeren.',
  },
  {
    q: 'Moet ik mijn DigiD delen met mijn online boekhouder?',
    a: 'Nee. Deel nooit je persoonlijke DigiD-inloggegevens. Voor bepaalde werkzaamheden kunnen geschikte machtigingen of professionele aangiftesystemen worden gebruikt.',
  },
  {
    q: 'Is een online boekhouder vinden via FactuurBaas gratis?',
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
    { '@type': 'ListItem', position: 3, name: 'Online boekhouder', item: 'https://factuurbaas.nl/online-boekhouder' },
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
        Vind jouw online boekhouder
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons kort over je onderneming en bespreek de mogelijkheden voor digitale boekhoudkundige ondersteuning.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/online-boekhouder" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je aanvraag wordt na jouw toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V., die contact
        met je kan opnemen om jouw administratieve wensen en gewenste manier van samenwerken te bespreken.
      </p>
    </div>
  );
}

export default function OnlineBoekhouderPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Online boekhouder' },
        ]}
        eyebrow="Online boekhouder"
        eyebrowIcon={Laptop}
        title="Online boekhouder vinden voor jouw onderneming"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Regel je boekhouding digitaal, waar je ook werkt.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={[
            'Digitaal documenten aanleveren',
            'Voor ZZP, VOF, BV en MKB',
            'Gratis en vrijblijvend aanvragen',
          ]}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">
            Zo werkt digitaal boekhouden
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['1', 'Facturen maken', 'Maak facturen met FactuurBaas en download als PDF of UBL.'],
              ['2', 'Digitaal aanleveren', 'Upload facturen, bonnetjes en bankgegevens via de afgesproken software.'],
              ['3', 'Boekhouder', 'Een professional verwerkt en controleert je administratie.'],
              ['4', 'Financieel inzicht', 'Ontvang overzichten, aangiften en ondersteuning bij vragen.'],
            ].map(([step, heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {step}</p>
                <h2 className="mt-3 font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Indicatieve boekhoudkosten</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['ZZP / Eenmanszaak', '€100–150', 'per maand'],
              ['VOF', '€150–250', 'per maand'],
              ['BV – Werkmaatschappij', 'Vanaf €250', 'per maand'],
              ['BV – Holding', 'Vanaf €100', 'per maand'],
            ].map(([label, price, note]) => (
              <PaperCard key={label} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400">{label}</p>
                <p className="mt-3 font-display text-3xl font-normal tracking-[-0.03em] text-ink">{price}</p>
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
                Indicatieve tarieven voor volledige boekhoudkundige ondersteuning. Bekijk ook{' '}
                <TextLink href="/boekhouder-kosten">alle boekhoudtarieven</TextLink>.
              </p>
            </div>
            <Link href="/tools/boekhouder-kosten-calculator" className={`${btn.primary} w-full shrink-0 sm:w-auto`}>
              Bereken mijn boekhoudkosten
              <ArrowIcon />
            </Link>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven van WRKD B.V. Digitaal werken betekent niet automatisch goedkoper; de
            hoeveelheid verwerking blijft doorslaggevend.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            De voordelen van digitaal boekhouden
          </DisplayHeading>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Locatieonafhankelijk', 'Niet gebonden aan een kantoor om de hoek.'],
              ['Digitaal aanleveren', 'Facturen en bonnetjes uploaden wanneer het jou uitkomt.'],
              ['Minder reistijd', 'Overleg via telefoon, e-mail of video.'],
              ['Automatisering', 'Bankkoppelingen, UBL en documentherkenning waar mogelijk.'],
              ['Financieel inzicht', 'Vaak toegang tot portaal of rapportages.'],
              ['Online contact', 'Vragen stellen zonder fysieke afspraak.'],
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
          <OnlineBoekhouderKeuzehulp />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat is een online boekhouder?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              Een online boekhouder voert financiële en administratieve werkzaamheden voornamelijk via digitale
              systemen uit. Je levert documenten digitaal aan; communicatie en verwerking verlopen grotendeels online.
            </p>
            <p>
              Het verschil met een traditioneel kantoor zit vooral in de samenwerking — niet per se in welke
              werkzaamheden worden uitgevoerd. Vergelijk ook met{' '}
              <TextLink href="/boekhouder-vinden">boekhouder vinden</TextLink> als je nog openstaat voor alle
              werkvormen.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Voor iedere onderneming
          </DisplayHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['/boekhouder-zzp', 'ZZP & eenmanszaak', 'Flexibel digitaal aanleveren; indicatief €100–€150 p/m.'],
              ['#vof', 'VOF', 'Centrale digitale administratie voor meerdere vennoten; €150–€250 p/m.'],
              ['/boekhouder-bv', 'BV & holding', 'Werkmaatschappij vanaf €250; holding vanaf €100 p/m.'],
              ['/boekhouder-mkb', 'MKB', 'Meer volume, rapportages en eventuele salarisadministratie.'],
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
          <div id="vof" className="scroll-mt-28">
            <FormCta>Vind een online boekhouder voor je VOF</FormCta>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Online versus traditionele boekhouder</DisplayHeading>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Onderdeel</th>
                  <th className="px-5 py-3 font-mono font-normal">Online</th>
                  <th className="px-5 py-3 font-mono font-normal">Traditioneel</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Documenten aanleveren', 'Voornamelijk digitaal', 'Digitaal of fysiek'],
                  ['Persoonlijk overleg', 'Telefoon, e-mail of video', 'Ook fysieke afspraken mogelijk'],
                  ['Locatie', 'Minder belangrijk', 'Kan belangrijker zijn'],
                  ['Boekhoudsoftware', 'Vaak centraal onderdeel', 'Afhankelijk van kantoor'],
                  ['Reistijd', 'Meestal beperkt', 'Mogelijk fysieke bezoeken'],
                  ['Kosten', 'Afhankelijk van dienstverlening', 'Afhankelijk van dienstverlening'],
                ].map(([part, online, traditional]) => (
                  <tr key={part} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{part}</td>
                    <td className="px-5 py-3.5">{online}</td>
                    <td className="px-5 py-3.5">{traditional}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Veel traditionele kantoren werken inmiddels ook digitaal. De keuze hoeft niet zwart-wit te zijn.
          </p>
          <FormCta>Vind een boekhouder die bij jouw werkwijze past</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Online boekhouder of online boekhoudprogramma?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Software helpt je zelf gegevens te verwerken; een online boekhouder is een professional die werkzaamheden
            kan overnemen. Je kunt beide combineren. Vergelijk software via{' '}
            <TextLink href="/boekhoudprogramma-vergelijken">boekhoudprogramma vergelijken</TextLink>, of bekijk{' '}
            <TextLink href="/boekhouding-uitbesteden">boekhouding uitbesteden</TextLink>.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Boekhoudprogramma</th>
                  <th className="px-5 py-3 font-mono font-normal">Online boekhouder</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Digitale software', 'Professionele dienstverlening'],
                  ['Je verwerkt doorgaans zelf gegevens', 'Kan verwerking overnemen'],
                  ['Automatische berekeningen', 'Professionele controle'],
                  ['Meestal lagere directe kosten', 'Hogere kosten door dienstverlening'],
                  ['Vereist eigen tijd en kennis', 'Kan tijd en werkzaamheden overnemen'],
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
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[24ch]">
            Zelf digitaal factureren, professioneel laten boekhouden
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Je hoeft geen betaald factuurprogramma. Met FactuurBaas maak je gratis facturen en lever je digitaal aan.
          </p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['1', 'Gratis factuur maken', 'Professionele verkoopfacturen met btw en factuurnummer.'],
              ['2', 'PDF en UBL', <>Download PDF voor je klant en <TextLink href="/ubl-factuur-maken">UBL</TextLink> voor digitale verwerking.</>],
              ['3', 'Digitaal aanleveren', 'Upload of stuur door volgens afspraak met je boekhouder.'],
              ['4', 'Boekhoudkundige verwerking', 'Je boekhouder verwerkt en controleert de gegevens.'],
            ].map(([step, heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {step}</p>
                <h3 className="mt-3 font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
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
          <DisplayHeading size="md">Automatische factuurverwerking</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Digitale software kan UBL inlezen, documenten herkennen, banktransacties importeren en rapportages
            genereren. Automatisering vervangt niet altijd professionele controle. Meer over{' '}
            <TextLink href="/blogs/facturen-automatisch-verwerken">facturen automatisch verwerken</TextLink>.
            Voor btw specifiek: <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Zijn er ook nadelen?</DisplayHeading>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Minder fysiek contact wanneer je dat belangrijk vindt.</li>
            <li>Afhankelijkheid van digitale systemen en software.</li>
            <li>Digitale beveiliging vraagt aandacht.</li>
            <li>Je moet nog steeds documenten verzamelen en informatie aanleveren.</li>
            <li>Overstappen kan complexer zijn bij software-afhankelijkheid — vraag naar exportmogelijkheden.</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veilig digitaal samenwerken</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Vraag naar beveiligde documentaanlevering, gebruikersaccounts, sterke wachtwoorden, tweestapsverificatie,
            toegangsrechten, veilige opslag en export bij beëindiging. Deel nooit DigiD-inloggegevens of
            bankwachtwoorden. Een bankkoppeling voor uitlezen is niet hetzelfde als toestemming om te betalen.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen naar een online boekhouder</DisplayHeading>
          <ol className="mt-8 space-y-5">
            {[
              ['Controleer je huidige overeenkomst', 'Contractduur, opzegtermijn en gegevensoverdracht.'],
              ['Verzamel je bestaande administratie', 'Documenten, aangiften en jaaroverzichten.'],
              ['Bespreek de digitale werkwijze', 'Software, aanlevermethode en imports.'],
              ['Maak afspraken over de overdracht', 'Lopende werkzaamheden en verantwoordelijkheden.'],
              ['Start de nieuwe samenwerking', 'Richt processen en communicatie in.'],
            ].map(([heading, text], index) => (
              <li key={heading} className="border-t border-ink/10 pt-5">
                <p className="font-medium text-ink">
                  Stap {index + 1}. {heading}
                </p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Meer over{' '}
            <TextLink href="/boekhouder-overstappen">overstappen naar een digitale boekhouder</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Checklist digitale samenwerking</DisplayHeading>
          <ul className="mt-6 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Bepaal welke werkzaamheden je wilt uitbesteden.</li>
            <li>Vraag welke boekhoudsoftware wordt gebruikt.</li>
            <li>Controleer of PDF- en UBL-bestanden worden ondersteund.</li>
            <li>Bespreek aanlevering van bonnetjes en facturen.</li>
            <li>Vraag naar bankkoppelingen en softwarekosten.</li>
            <li>Bespreek contact, rapportages en beveiliging.</li>
            <li>Maak afspraken over belastingaangiften.</li>
            <li>Controleer contractduur, opzegtermijn en export.</li>
          </ul>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe vind je een online boekhouder via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ['1', 'Vertel ons over je onderneming', 'Selecteer rechtsvorm en vul bedrijfs- en contactgegevens in.'],
              [
                '2',
                'Bespreek digitale voorkeuren',
                'WRKD B.V. kan contact opnemen over administratie, software en gewenste samenwerking.',
              ],
              ['3', 'Ontdek mogelijkheden en kosten', 'Bespreek dienstverlening, digitale opties en tarieven.'],
              ['4', 'Beslis zelf', 'Geen verplichting om een samenwerking aan te gaan.'],
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
          <FormCta>Vind mijn online boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over online boekhouders</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <BookkeeperClusterLinks currentHref="/online-boekhouder" />

      <ClosingCta
        title="Regel je boekhouding digitaal"
        text="Waar je ook werkt. Blijf zelf gratis facturen maken met FactuurBaas en besteed administratie uit waarvoor je professionele ondersteuning wilt."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn online boekhouder' }}
        secondary={{ href: '/tools/boekhouder-kosten-calculator', label: 'Bereken boekhoudkosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Digitale dienstverlening, software en tarieven worden met de dienstverlener besproken. Genoemde tarieven zijn indicatief. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
