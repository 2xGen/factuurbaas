import Link from 'next/link';
import { Scale } from 'lucide-react';
import AccountingComparisonWidget from '@/components/tools/AccountingComparisonWidget';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  FaqList,
  PageHeader,
  TrustList,
  btn,
} from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

const title = "Boekhoudprogramma vergelijken voor zzp'ers | FactuurBaas";
const description =
  "Vergelijk boekhoudprogramma's voor zzp'ers en starters. Bekijk prijzen, functies en gratis pakketten. Vind boekhoudsoftware die bij jouw bedrijf past.";

export const metadata = {
  title,
  description,
  keywords:
    'boekhoudprogramma vergelijken, boekhoudprogramma zzp, boekhoudprogramma voor starters, boekhoudsoftware vergelijken, gratis boekhoudprogramma starters',
  alternates: { canonical: 'https://factuurbaas.nl/boekhoudprogramma-vergelijken' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/boekhoudprogramma-vergelijken',
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
    q: 'Wat is het beste boekhoudprogramma voor zzp’ers?',
    a: 'Dat hangt af van je administratie, budget en gewenste functies. Vergelijk onder andere de kosten, factuurmogelijkheden, btw-ondersteuning en bankkoppelingen.',
  },
  {
    q: 'Is er een gratis boekhoudprogramma voor zzp’ers?',
    a: 'Ja, sommige aanbieders bieden gratis pakketten of acties voor starters. Controleer welke beperkingen en voorwaarden gelden.',
  },
  {
    q: 'Heb ik als zzp’er een boekhoudprogramma nodig?',
    a: 'Nee, een betaald boekhoudprogramma is niet verplicht. Je moet wel een administratie bijhouden die voldoet aan de wettelijke eisen. Een boekhoudprogramma kan dit gemakkelijker maken.',
  },
  {
    q: 'Kan ik facturen maken zonder boekhoudprogramma?',
    a: 'Ja. Met FactuurBaas kun je gratis facturen maken en als PDF downloaden, zonder account.',
  },
  {
    q: 'Kan ik later overstappen naar een ander boekhoudprogramma?',
    a: 'Meestal wel, maar de mogelijkheden voor het exporteren en importeren van gegevens verschillen per aanbieder. Controleer dit voordat je een pakket kiest.',
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

const relatedLinks = [
  { label: 'Boekhoudprogramma-check', href: '/tools/boekhoudprogramma-check' },
  { label: "Beste boekhoudprogramma zzp", href: '/blogs/beste-boekhoudprogramma-zzp' },
  { label: 'Gratis factuur maken', href: '/create-invoice' },
  { label: 'Alle tools', href: '/tools' },
];

export default function BoekhoudprogrammaVergelijkenPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: 'Boekhoudprogramma vergelijken' },
        ]}
        eyebrow="Vergelijker"
        eyebrowIcon={Scale}
        title="Boekhoudprogramma vergelijken"
        size="lg"
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>
              Op zoek naar een boekhoudprogramma voor je onderneming? Vergelijk eenvoudig boekhoudsoftware voor
              zzp’ers, starters en kleine bedrijven. Bekijk prijzen, functies en mogelijkheden voor factureren,
              btw-aangifte en administratie.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Met de vergelijker hieronder ontdek je welke pakketten aansluiten bij jouw situatie.
            </p>
          </>
        }
      >
        <a href="#vergelijker" className={btn.primary}>
          Naar de vergelijker
          <ArrowIcon />
        </a>
        <TrustList items={['Gratis vergelijken', 'Geen account nodig']} className="mt-8" />
      </PageHeader>

      <section id="vergelijker" className="scroll-mt-28 border-t border-ink/[0.06] py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-ink sm:text-[2.15rem]">
            Vergelijk boekhoudprogramma&apos;s
          </h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-ink-500">
            Vergelijk boekhoudprogramma&apos;s voor zzp&apos;ers op prijs, functies en pakket. Prijzen zijn per maand.
          </p>
          <div className="mt-8 overflow-hidden rounded-2xl border border-ink/[0.08] bg-white p-3 shadow-paper sm:p-5">
            <AccountingComparisonWidget />
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-400">
            Prijzen en aanbiedingen worden door de vergelijkingspartner bijgehouden. Controleer de actuele
            voorwaarden altijd bij de aanbieder.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>h2:first-child]:mt-0">
            <h2>Welk boekhoudprogramma past bij jouw onderneming?</h2>
            <p>
              Niet iedere ondernemer heeft dezelfde boekhouding nodig. Een starter met enkele facturen per maand
              heeft vaak andere wensen dan een zzp’er met veel klanten of een bedrijf met meerdere medewerkers.
            </p>
            <p>Let bij het vergelijken vooral op:</p>
            <ul>
              <li>
                <strong>Maandelijkse kosten:</strong> Wat betaal je per maand en welke functies zijn inbegrepen?
              </li>
              <li>
                <strong>Factureren:</strong> Kun je onbeperkt facturen en offertes maken?
              </li>
              <li>
                <strong>Btw-aangifte:</strong> Ondersteunt het programma de Nederlandse btw-administratie?
              </li>
              <li>
                <strong>Bankkoppeling:</strong> Kun je banktransacties automatisch importeren?
              </li>
              <li>
                <strong>Bonnetjes en uitgaven:</strong> Kun je kosten eenvoudig verwerken?
              </li>
              <li>
                <strong>Gebruiksgemak:</strong> Is het programma geschikt voor ondernemers zonder boekhoudkennis?
              </li>
              <li>
                <strong>Uitbreidbaarheid:</strong> Kun je later extra gebruikers of functies toevoegen?
              </li>
            </ul>

            <h2>Boekhoudprogramma voor zzp’ers</h2>
            <p>
              Als zzp’er wil je meestal zo min mogelijk tijd kwijt zijn aan administratie. Een geschikt
              boekhoudprogramma helpt je facturen te versturen, inkomsten en uitgaven te registreren en je
              btw-administratie bij te houden.
            </p>
            <p>
              Heb je weinig transacties? Dan kan een eenvoudig of voordelig pakket voldoende zijn. Werk je met veel
              klanten en terugkerende kosten? Dan kunnen automatische bankkoppelingen en uitgebreide rapportages
              waardevol zijn.
            </p>

            <h2>Gratis boekhoudprogramma voor starters</h2>
            <p>Sommige aanbieders hebben gratis pakketten of tijdelijke acties voor startende ondernemers.</p>
            <p>
              Let goed op de voorwaarden. Een gratis pakket kan bijvoorbeeld beperkt zijn tot een aantal facturen,
              transacties of gebruikers. Andere aanbieders bieden alleen een gratis proefperiode.
            </p>
            <p>Vergelijk daarom niet alleen de prijs, maar ook wat je daadwerkelijk kunt doen met het pakket.</p>

            <h2>Factuurprogramma of boekhoudprogramma?</h2>
            <p>
              Een factuurprogramma helpt je vooral bij het maken en versturen van facturen. Een boekhoudprogramma
              gaat verder en kan ook inkomsten, uitgaven, banktransacties en belastingoverzichten verwerken.
            </p>
            <p>
              Wil je alleen af en toe een factuur maken? Dan heb je niet altijd een betaald boekhoudprogramma
              nodig.
            </p>
            <p>
              Met <strong>FactuurBaas</strong> kun je gratis een factuur maken en downloaden als PDF, zonder
              account.
            </p>
            <p className="not-prose">
              <Link href="/create-invoice" className={btn.primary}>
                Maak gratis een factuur
                <ArrowIcon />
              </Link>
            </p>
            <p>
              Wil je daarnaast je volledige administratie beheren? Gebruik dan de vergelijker om een passend
              boekhoudprogramma te vinden.
            </p>

            <h2>Wat kost een boekhoudprogramma?</h2>
            <p>
              De kosten verschillen per aanbieder en pakket. Sommige programma’s bieden een gratis basisversie,
              terwijl andere werken met een maand- of jaarabonnement.
            </p>
            <p>
              Extra functies zoals bankkoppelingen, meerdere gebruikers, salarisadministratie of uitgebreidere
              rapportages kunnen aanvullende kosten met zich meebrengen.
            </p>
            <p>
              Bekijk daarom de totale kosten van het pakket dat je nodig hebt, inclusief eventuele uitbreidingen.
            </p>
          </article>

          <div className="mt-20 border-t border-ink/10 pt-14">
            <Reveal>
              <span className="block h-px w-10 bg-ember" aria-hidden />
              <DisplayHeading size="md" className="mb-8 mt-6">
                Veelgestelde <em>vragen</em>
              </DisplayHeading>
            </Reveal>
            <FaqList items={FAQS.map(({ q, a }) => ({ question: q, answer: a }))} />
          </div>
        </div>
      </section>

      <ClosingCta
        title="Vergelijk boekhoudsoftware voor jouw bedrijf"
        text="Ontdek welke boekhoudprogramma’s aansluiten bij je wensen en budget."
        primary={{ href: '#vergelijker', label: 'Terug naar de vergelijker' }}
      />

      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-ink-400 sm:px-6">
        Affiliate disclosure: FactuurBaas kan een vergoeding ontvangen wanneer je via de vergelijker een product
        afneemt. De vergelijker wordt aangeboden door Daisycon. De beschikbare aanbieders vormen niet
        noodzakelijk een volledig overzicht van de markt.
      </p>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
          <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Gerelateerd</h2>
          <div className="flex flex-wrap gap-2.5">
            {relatedLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
              >
                {link.label}
                <ArrowIcon className="h-3.5 w-3.5 text-ember" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
