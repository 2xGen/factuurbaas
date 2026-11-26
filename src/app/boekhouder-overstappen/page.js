import Link from 'next/link';
import { Suspense } from 'react';
import { RefreshCw } from 'lucide-react';
import BookkeeperLeadForm from '@/components/leads/BookkeeperLeadForm';
import BookkeeperStickyCta from '@/components/leads/BookkeeperStickyCta';
import BookkeeperClusterLinks from '@/components/leads/BookkeeperClusterLinks';
import OverstapKostenVergelijker from '@/components/leads/OverstapKostenVergelijker';
import OverstapChecklist from '@/components/leads/OverstapChecklist';
import OpzegbriefGenerator from '@/components/leads/OpzegbriefGenerator';
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

const title = 'Overstappen van boekhouder? Stappenplan & kosten | FactuurBaas';
const description =
  'Wil je overstappen naar een andere boekhouder? Ontdek hoe de overdracht werkt, waar je op moet letten en vind gratis en vrijblijvend een nieuwe boekhouder.';

const FEATURED_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/overstappen%20andere%20boekhouder.jpg',
  alt: 'Overstappen naar een andere boekhouder.',
};

export const metadata = {
  title,
  description,
  keywords:
    'overstappen boekhouder, boekhouder overstappen, veranderen van boekhouder, andere boekhouder zoeken, nieuwe boekhouder vinden, wisselen van boekhouder, ontevreden over boekhouder, boekhouder opzeggen, overstappen administratiekantoor, boekhouder overstappen kosten, overstappen boekhouder halverwege het jaar, administratie overdragen aan nieuwe boekhouder, boekhouder vervangen, overstappen boekhouder zzp, overstappen boekhouder bv, boekhouder te duur, boekhouder reageert niet',
  alternates: { canonical: 'https://factuurbaas.nl/boekhouder-overstappen' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhouder-overstappen',
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
    q: 'Kan ik op ieder moment overstappen van boekhouder?',
    a: 'Een overstap is vaak gedurende het hele jaar mogelijk. Houd wel rekening met je huidige overeenkomst, opzegtermijn en lopende administratieve werkzaamheden.',
  },
  {
    q: 'Moet ik wachten tot het einde van het boekjaar?',
    a: 'Nee. Je kunt vaak ook halverwege het boekjaar overstappen, mits de administratieve overdracht goed wordt georganiseerd.',
  },
  {
    q: 'Wat kost overstappen naar een andere boekhouder?',
    a: 'Dat hangt af van je huidige overeenkomst, de staat van je administratie en eventuele werkzaamheden voor de overdracht en inrichting. Vraag vooraf naar eenmalige en doorlopende kosten.',
  },
  {
    q: 'Moet ik mijn huidige boekhouder eerst opzeggen?',
    a: 'Nee. Het is meestal verstandig om eerst kennis te maken met een nieuwe boekhouder en de mogelijkheden te bespreken voordat je jouw huidige overeenkomst beëindigt.',
  },
  {
    q: 'Kan mijn nieuwe boekhouder de overstap regelen?',
    a: 'Een nieuwe boekhouder kan mogelijk helpen bij de administratieve overdracht. Bespreek vooraf welke werkzaamheden worden overgenomen en welke verantwoordelijkheden bij jou blijven.',
  },
  {
    q: 'Welke documenten heeft mijn nieuwe boekhouder nodig?',
    a: 'Denk aan facturen, banktransacties, grootboekgegevens, financiële overzichten, eerdere belastingaangiften en eventuele jaarrekeningen of salarisgegevens.',
  },
  {
    q: 'Wat gebeurt er met mijn lopende btw-aangifte?',
    a: 'Maak duidelijke afspraken over welke boekhouder verantwoordelijk is voor de betreffende aangifteperiode en wie de aangifte voorbereidt of indient.',
  },
  {
    q: 'Kan ik mijn bestaande boekhoudsoftware blijven gebruiken?',
    a: 'Dat hangt af van de gebruikte software, je toegangsrechten en de werkwijze van je nieuwe boekhouder.',
  },
  {
    q: 'Kan ik FactuurBaas blijven gebruiken?',
    a: 'Ja. Je kunt zelf facturen blijven maken met FactuurBaas en deze als PDF of UBL-bestand aanleveren bij je nieuwe boekhouder.',
  },
  {
    q: 'Wat als mijn huidige boekhouder niet meewerkt?',
    a: 'Controleer je overeenkomst, vraag schriftelijk om de benodigde gegevens en bespreek met je nieuwe boekhouder welke documenten noodzakelijk zijn. Bij een geschil kan juridisch advies verstandig zijn.',
  },
  {
    q: 'Kan ik overstappen als mijn administratie niet volledig is?',
    a: 'Dat kan mogelijk, maar aanvullende werkzaamheden kunnen nodig zijn om de administratie te controleren, aan te vullen of te herstellen. Vraag vooraf naar de kosten.',
  },
  {
    q: 'Is overstappen met een BV moeilijker dan met een eenmanszaak?',
    a: 'Een BV kan uitgebreidere administratieve en fiscale verplichtingen hebben. Daardoor kan de overdracht meer voorbereiding vereisen.',
  },
  {
    q: 'Hoe lang duurt het overstappen naar een andere boekhouder?',
    a: 'Dat hangt af van de opzegtermijn, beschikbaarheid van gegevens, gebruikte software en omvang van de administratie. Er is geen vaste overstaptermijn die voor iedere onderneming geldt.',
  },
  {
    q: 'Kan ik overstappen als ik nog openstaande facturen heb bij mijn huidige boekhouder?',
    a: 'Openstaande facturen kunnen invloed hebben op de afwikkeling van de samenwerking. Controleer je betalingsverplichtingen en bespreek hoe de overdracht wordt georganiseerd.',
  },
  {
    q: 'Is een nieuwe boekhouder zoeken via FactuurBaas gratis?',
    a: 'Ja. Het indienen van een aanvraag is gratis en vrijblijvend. De uiteindelijke boekhoudkundige dienstverlening is doorgaans betaald.',
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
      name: 'Overstappen van boekhouder',
      item: 'https://factuurbaas.nl/boekhouder-overstappen',
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
        Vind een nieuwe boekhouder
      </p>
      <p className="mt-2 mb-4 text-sm leading-relaxed text-ink-500">
        Vertel ons kort over je onderneming en ontdek welke mogelijkheden er zijn om over te stappen.
      </p>
      <Suspense
        fallback={<div className="min-h-[28rem] rounded-2xl border border-ink/[0.08] bg-white shadow-paper" />}
      >
        <BookkeeperLeadForm source="/boekhouder-overstappen" sourceType="seo" id="boekhouder-formulier" />
      </Suspense>
      <p className="mt-3 text-[13px] leading-relaxed text-ink-500">
        Je hoeft je huidige boekhouder nog niet op te zeggen om een aanvraag te doen. Je aanvraag wordt na jouw
        toestemming doorgestuurd naar onze samenwerkingspartner WRKD B.V.
      </p>
    </div>
  );
}

export default function BoekhouderOverstappenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Boekhouden', href: '/boekhouden' },
          { name: 'Overstappen van boekhouder' },
        ]}
        eyebrow="Boekhouder overstappen"
        eyebrowIcon={RefreshCw}
        title="Overstappen naar een andere boekhouder"
        size="lg"
        align="start"
        containerClassName="max-w-6xl"
        lead={<p>Vind een boekhouder die beter bij jouw onderneming past.</p>}
        aside={<LeadForm />}
      >
        <TrustList
          items={['Bespreek je huidige kosten', 'Ook gedurende het jaar', 'Gratis en vrijblijvend']}
        />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-14 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Waarom wil je overstappen?</p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ['Te hoge kosten', 'Maandelijkse kosten stijgen zonder duidelijkere dienstverlening.'],
              ['Slechte communicatie', 'Lange wachttijden bij belangrijke fiscale of administratieve vragen.'],
              ['Onvoldoende inzicht', 'Weinig zicht op winst, openstaande facturen of belastingreserves.'],
              ['Bedrijf gegroeid', 'Je administratie of rechtsvorm vraagt om andere expertise.'],
              ['Digitaal werken', 'Je wilt minder papier en meer digitale documentverwerking.'],
              ['Onverwachte kosten', 'Aanvullende facturen voor werkzaamheden die je had ingecalculeerd.'],
            ].map(([heading, text]) => (
              <PaperCard key={heading} className="p-5">
                <h2 className="font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h2>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </PaperCard>
            ))}
          </div>
          <FormCta>Ontdek de mogelijkheden voor een nieuwe boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <OverstapKostenVergelijker />
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Meer context over tarieven? Bekijk{' '}
            <TextLink href="/boekhouder-kosten">wat een boekhouder kost</TextLink> of gebruik de{' '}
            <TextLink href="/tools/boekhouder-kosten-calculator">boekhouder kosten calculator</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[18ch]">
            Zo stap je over
          </DisplayHeading>
          <ol className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['1', 'Bepaal je wensen', 'Kosten, communicatie, inzicht of digitale werkwijze.'],
              ['2', 'Controleer je overeenkomst', 'Opzegtermijn, lopende werkzaamheden en voorwaarden.'],
              ['3', 'Vind een nieuwe boekhouder', 'Bespreek dienstverlening vóór je opzegt.'],
              ['4', 'Spreek een overstapdatum af', 'Begin van het jaar, kwartaal of een andere datum.'],
              ['5', 'Zeg je overeenkomst op', 'Schriftelijk, met bevestiging van de einddatum.'],
              ['6', 'Draag je administratie over', 'Facturen, bank, grootboek en aangiften.'],
              ['7', 'Controleer lopende werkzaamheden', 'Btw, jaarafsluiting en openstaande vragen.'],
              ['8', 'Start je nieuwe samenwerking', 'Software, aanlevering en rapportages inrichten.'],
            ].map(([step, heading, text]) => (
              <li key={step} className="rounded-2xl border border-ink/[0.08] bg-white p-5 shadow-paper">
                <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ember">Stap {step}</p>
                <h3 className="mt-3 font-display text-xl font-normal tracking-[-0.02em] text-ink">{heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{text}</p>
              </li>
            ))}
          </ol>
          <FormCta>Vind een nieuwe boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Kun je zomaar overstappen?</DisplayHeading>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            <p>
              In principe bepaal je zelf met welk administratiekantoor je samenwerkt. Houd wel rekening met looptijd,
              opzegtermijn, openstaande facturen, softwaretoegang en verantwoordelijkheid voor lopende aangiften.
            </p>
            <p>
              Je kunt ondertussen vrijblijvend kennismaken met een nieuwe boekhouder via{' '}
              <TextLink href="/boekhouder-vinden">nieuwe boekhouder vinden</TextLink>.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen gedurende het jaar</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Ja, overstappen is vaak ook halverwege het boekjaar mogelijk. Je hoeft niet automatisch te wachten tot 1
            januari — wel vragen duidelijke afspraken over de administratieve overdracht.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[32rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Overstapmoment</th>
                  <th className="px-5 py-3 font-mono font-normal">Voordeel</th>
                  <th className="px-5 py-3 font-mono font-normal">Aandachtspunt</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Begin van het jaar', 'Duidelijke scheiding tussen boekjaren', 'Jaarafsluiting vorig jaar'],
                  ['Einde van een kwartaal', 'Overzichtelijke aangifteperiode', 'Verantwoordelijkheid btw-aangifte'],
                  ['Halverwege het jaar', 'Niet onnodig wachten', 'Overdracht lopende administratie'],
                  ['Halverwege een kwartaal', 'Flexibel overstappen', 'Volledigheid van transacties'],
                ].map(([moment, benefit, note]) => (
                  <tr key={moment} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{moment}</td>
                    <td className="px-5 py-3.5">{benefit}</td>
                    <td className="px-5 py-3.5">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 text-[15px] leading-relaxed text-ink-500">
            Voor btw-periodes: bekijk ook{' '}
            <TextLink href="/btw-aangifte-uitbesteden">btw-aangifte uitbesteden</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[22ch]">
            Wat kost overstappen naar een andere boekhouder?
          </DisplayHeading>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-500">
            Mogelijk eenmalige overdracht- of inrichtingskosten plus doorlopende kosten van je nieuwe boekhouder.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
          <p className="mt-5 text-[13px] leading-relaxed text-ink-400">
            Bron: indicatieve tarieven WRKD B.V. voor volledige uitbesteding. Eventuele overstapkosten zijn niet
            inbegrepen.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <OverstapChecklist />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <OpzegbriefGenerator />
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Wat als je administratie niet wordt overgedragen?</DisplayHeading>
          <ul className="mt-5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-500">
            <li>Controleer je overeenkomst en algemene voorwaarden.</li>
            <li>Vraag schriftelijk om de benodigde documenten en exports.</li>
            <li>Maak onderscheid tussen originele bedrijfsdocumenten en interne werkdocumenten.</li>
            <li>Bespreek met je nieuwe boekhouder welke gegevens noodzakelijk zijn.</li>
            <li>Zoek juridische ondersteuning wanneer een geschil blijft bestaan.</li>
          </ul>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
            Bewaar waar mogelijk zelf kopieën van belangrijke financiële documenten. Deel geen DigiD- of
            bankwachtwoorden.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <DisplayHeading size="md" className="max-w-[20ch]">
            Overstappen als ZZP, VOF, BV of MKB
          </DisplayHeading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                '/boekhouder-zzp',
                'ZZP & eenmanszaak',
                'Relatief overzichtelijke overdracht; indicatief €100–€150 p/m.',
              ],
              ['#vof', 'VOF', 'Betrek alle vennoten; winstverdeling en kapitaalrekeningen meenemen.'],
              ['/boekhouder-bv', 'BV & holding', 'Vpb, jaarrekening, DGA-loon en eventuele salarisadministratie.'],
              [
                '/boekhouder-mkb',
                'MKB',
                'Processen, softwaretoegang en interne goedkeuringen goed plannen.',
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
          <div id="vof" className="scroll-mt-28">
            <FormCta>Vind een nieuwe boekhouder voor je VOF</FormCta>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Overstappen naar een online boekhouder</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Een overstap is ook een goed moment om digitaal te gaan werken: documenten via software of portaal,
            bankkoppelingen en minder fysieke afspraken. Bekijk{' '}
            <TextLink href="/online-boekhouder">online boekhouder vinden</TextLink>. Wil je eerst software vergelijken?{' '}
            <TextLink href="/boekhoudprogramma-vergelijken">Boekhoudprogramma vergelijken</TextLink>.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Kun je FactuurBaas blijven gebruiken?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Ja. Blijf gratis facturen maken, download als PDF of UBL en lever digitaal aan bij je nieuwe boekhouder.
            Zo blijft je facturatie onafhankelijk van het administratiekantoor.
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
          <DisplayHeading size="md">Welke vragen stel je aan een nieuwe boekhouder?</DisplayHeading>
          <div className="mt-8 space-y-6 text-[15px] leading-relaxed text-ink-500">
            <div>
              <h3 className="font-medium text-ink">Kosten en dienstverlening</h3>
              <p className="mt-2">
                Maand- of jaartarieven, inbegrepen aangiften, softwarekosten, afzonderlijke posten en eenmalige
                overstapkosten.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-ink">Communicatie</h3>
              <p className="mt-2">Vaste contactpersoon, kanalen, responstijden en periodiek financieel overleg.</p>
            </div>
            <div>
              <h3 className="font-medium text-ink">Administratie en software</h3>
              <p className="mt-2">
                Gebruikte software, eigen toegang, aanlevering van PDF/UBL en latere exportmogelijkheden.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-ink">Overstap en toekomst</h3>
              <p className="mt-2">
                Hulp bij overdracht, startmoment, eerstvolgende aangifte, ervaring met jouw rechtsvorm en
                opzegtermijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Is een goedkopere boekhouder altijd verstandig?</DisplayHeading>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-500 sm:text-base">
            Niet noodzakelijk. Vergelijk de volledige dienstverlening — niet alleen het maandbedrag. Een lager tarief
            kan alsnog duurder uitpakken wanneer aangiften of software apart worden gefactureerd.
          </p>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
            <table className="w-full min-w-[28rem] text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-[11px] uppercase tracking-[0.14em] text-ink-400">
                  <th className="px-5 py-3 font-mono font-normal">Kostenpost</th>
                  <th className="px-5 py-3 font-mono font-normal">Huidig</th>
                  <th className="px-5 py-3 font-mono font-normal">Nieuw</th>
                </tr>
              </thead>
              <tbody className="text-ink-700">
                {[
                  ['Maandelijkse kosten', '€180', '€130'],
                  ['Jaarlijkse maandbedragen', '€2.160', '€1.560'],
                  ['Aanvullende jaarlijkse kosten', '€300', '€150'],
                  ['Totale jaarlijkse kosten', '€2.460', '€1.710'],
                ].map(([label, current, next]) => (
                  <tr key={label} className="border-b border-ink/[0.06] last:border-0">
                    <td className="px-5 py-3.5 font-medium text-ink">{label}</td>
                    <td className="px-5 py-3.5">{current}</td>
                    <td className="px-5 py-3.5">{next}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-[13px] leading-relaxed text-ink-400">
            Fictief rekenvoorbeeld. Geen garantie op besparingen. Gebruik de kostenvergelijker hierboven met jouw
            eigen bedragen.
          </p>
          <a href="#overstap-kostenvergelijker" className={`${btn.secondary} mt-6`}>
            Vergelijk mijn huidige boekhoudkosten
            <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <span className="block h-px w-10 bg-ember" aria-hidden />
          <DisplayHeading size="md" className="mb-4 mt-6 max-w-[22ch]">
            Hoe vind je een nieuwe boekhouder via FactuurBaas?
          </DisplayHeading>
          <ol className="mt-10 grid gap-4 lg:grid-cols-4">
            {[
              ['1', 'Vertel ons over je onderneming', 'Selecteer rechtsvorm en vul bedrijfs- en contactgegevens in.'],
              [
                '2',
                'Bespreek je huidige situatie',
                'WRKD B.V. kan contact opnemen over administratie, kosten en reden voor overstappen.',
              ],
              ['3', 'Ontdek de mogelijkheden', 'Dienstverlening, tarieven en administratieve overdracht.'],
              ['4', 'Beslis zelf', 'Geen automatische overstap. Geen verplichting om op te zeggen.'],
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
          <FormCta>Vind mijn nieuwe boekhouder</FormCta>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <DisplayHeading size="md">Veelgestelde vragen over overstappen van boekhouder</DisplayHeading>
          <FaqList className="mt-8" items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
        </div>
      </section>

      <BookkeeperClusterLinks currentHref="/boekhouder-overstappen" />

      <ClosingCta
        title="Klaar voor een nieuwe boekhouder?"
        text="Gratis kennismaken, zelf beslissen. Zeg je huidige boekhouder pas op wanneer je daar klaar voor bent."
        primary={{ href: '#boekhouder-formulier', label: 'Vind mijn nieuwe boekhouder' }}
        secondary={{ href: '#overstap-kostenvergelijker', label: 'Vergelijk mijn kosten' }}
        note="FactuurBaas werkt voor boekhouderaanvragen samen met WRKD B.V. Je gegevens worden na jouw toestemming doorgestuurd. FactuurBaas kan hiervoor een vergoeding ontvangen. Genoemde tarieven zijn indicatief. Overstapondersteuning en kosten worden met de dienstverlener besproken. De informatie op deze pagina is algemeen en vormt geen persoonlijk financieel, juridisch of fiscaal advies."
      />

      <BookkeeperStickyCta />
    </div>
  );
}
