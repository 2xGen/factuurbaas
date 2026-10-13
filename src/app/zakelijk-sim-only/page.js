import Link from 'next/link';
import { Smartphone } from 'lucide-react';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  DarkPanel,
  DisplayHeading,
  FaqList,
  PageHeader,
  btn,
} from '@/components/site/editorial';
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';
import { KpnAffiliateLink } from '@/components/tools/KpnAffiliateCta';
import {
  KPN_AFFILIATE,
  KPN_AFFILIATE_REL,
  ZIT_DISCLOSURE,
  ZIT_HUB_PATH,
  ZIT_INTERNET_PATH,
  ZIT_MOBILE_GUIDES,
} from '@/lib/zakelijkInternetTelefonie';

const title = "Zakelijk Sim Only voor ZZP'ers | Abonnementen & Kosten";
const description =
  "Zakelijk Sim Only voor zzp'ers: databundels, contractduur, buitenland, btw en het verschil tussen zakelijk en privé. Bekijk KPN Zakelijk Sim Only.";

export const metadata = {
  title,
  description,
  keywords:
    "zakelijk sim only zzp, zakelijk telefoonabonnement zzp, zakelijk abonnement zonder toestel, kpn zakelijk sim only",
  alternates: { canonical: 'https://factuurbaas.nl/zakelijk-sim-only' },
  openGraph: {
    title,
    description,
    url: 'https://factuurbaas.nl/zakelijk-sim-only',
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
    q: 'Wat is zakelijk Sim Only?',
    a: 'Een mobiel abonnement zonder toestel, op naam van je onderneming. Je gebruikt je eigen telefoon en betaalt voor belminuten, sms en data. De factuur kun je in je administratie zetten.',
  },
  {
    q: 'Is Sim Only altijd voordeliger dan een abonnement met telefoon?',
    a: 'Als je al een toestel hebt, meestal wel: je betaalt geen toestelkrediet. Een nieuwe telefoon bij het abonnement spreidt de aanschaf, maar maakt het contract vaak langer. Reken beide varianten door.',
  },
  {
    q: 'Mag ik een privé Sim Only zakelijk aftrekken?',
    a: 'Het zakelijke gebruik kan aftrekbaar zijn, maar het contract blijft privé. Een zakelijk contract geeft een btw-factuur op bedrijfsnaam en is administratief schoner. Onderbouw gemengd gebruik.',
  },
  {
    q: 'Kan ik mijn nummer meenemen naar een zakelijk abonnement?',
    a: 'Meestal wel, via nummerbehoud. Check de opzegtermijn van je huidige contract en of de nieuwe provider het nummer zakelijk kan overzetten.',
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

export default function ZakelijkSimOnlyPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Zakelijk internet & telefonie', href: ZIT_HUB_PATH },
          { name: 'Zakelijk Sim Only' },
        ]}
        eyebrow="Zakelijk Sim Only"
        eyebrowIcon={Smartphone}
        title="Zakelijk sim only voor zzp'ers: waar moet je op letten?"
        size="lg"
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>
              Een zakelijk Sim Only is een mobiel abonnement zonder toestel, op naam van je
              onderneming. Handig als je al een telefoon hebt en de factuur in je administratie
              wilt.
            </p>
            <p className="text-base text-ink-400 sm:text-lg">
              Let op databundel, looptijd, gebruik in het buitenland en of het contract zakelijk
              of privé loopt.
            </p>
          </>
        }
      >
        <a href={KPN_AFFILIATE.simOnly} target="_blank" rel={KPN_AFFILIATE_REL} className={btn.primary}>
          Bekijk KPN Zakelijk Sim Only
          <ArrowIcon />
        </a>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>h2:first-child]:mt-0">
            <h2>Databundels: hoeveel heb je nodig?</h2>
            <p>
              Belminuten zijn bij veel bundels onbeperkt of ruim. Data is de bottleneck:
              e-mail en WhatsApp kosten weinig, hotspotten, navigatie en videobellen vreten
              megabytes. Kies een bundel die past bij hoe je onderweg werkt — niet bij de
              grootste reclameclaim.
            </p>
            <p>
              Extra data of een tweede sim (tablet, hotspot) kan bij een zakelijk abonnement
              zitten. Check of ongebruikte data overloopt naar de volgende maand, en wat
              overschrijding kost. Meer over de productkeuze:{' '}
              <Link href="/blogs/zakelijk-sim-only-zzp">
                zakelijk Sim Only voor zzp&apos;ers
              </Link>
              .
            </p>

            <h2>Contractduur</h2>
            <p>
              Sim Only is vaak maandelijks of voor 12 of 24 maanden. Korte looptijd geeft
              flexibiliteit; langere looptijd een lagere maandprijs. Let op de opzegtermijn en of
              je na de minimale periode automatisch doorloopt.
            </p>
            <p>
              Heb je al een telefoon en wil je geen toestelkrediet? Dan is{' '}
              <Link href="/blogs/zakelijk-mobiel-zonder-toestel">
                een zakelijk abonnement zonder toestel
              </Link>{' '}
              de logische route. Twijfel je nog of je überhaupt een zakelijk contract nodig hebt?
              Lees{' '}
              <Link href="/blogs/zakelijk-telefoonabonnement-zzp">
                zakelijk telefoonabonnement voor zzp&apos;ers
              </Link>
              .
            </p>

            <h2>Internationaal gebruik</h2>
            <p>
              Binnen de EU gelden vaak roamingregels, maar &quot;fair use&quot; en extra
              kosten buiten de EU verschillen per provider. Werk je in het buitenland, check dan
              of bellen, data en hotspotten in je bundel zitten, of dat je een dagpas nodig hebt.
            </p>
            <p>
              Een zakelijk abonnement heeft soms aparte internationale bundels. Dat is relevanter
              dan een extra gigabyte in Nederland als je regelmatig over de grens zit.
            </p>

            <h2>Btw en de factuur</h2>
            <p>
              Op een zakelijk abonnement hoort een factuur met btw, op naam van je onderneming.
              Ben je btw-plichtig, dan kun je die btw in beginsel als voorbelasting aftrekken —
              met correctie bij privégebruik. Onder de KOR trek je geen btw af.
            </p>
            <p>
              Uitgebreider:{' '}
              <Link href="/blogs/btw-telefoon-aftrekken-zzp">
                btw telefoon aftrekken als zzp&apos;er
              </Link>{' '}
              en{' '}
              <Link href="/blogs/telefoonkosten-aftrekbaar-zzp">
                telefoonkosten aftrekken als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Zakelijk versus privécontract</h2>
            <p>
              Een privé Sim Only mag je deels zakelijk gebruiken, maar het contract, het nummer
              en de factuur blijven privé. Een zakelijk contract scheidt werk en privé, maakt de
              administratie schoner en voorkomt dat klanten je privénummer in het weekend hebben.
            </p>
            <p>
              Dat is een andere vraag dan of de telefoon zelf van de zaak is. Het toestel kan
              privé zijn terwijl de sim zakelijk is — of andersom. Wat slimmer is, vergelijk je
              in{' '}
              <Link href="/blogs/telefoon-zakelijk-of-prive-zzp">
                telefoon zakelijk of privé als zzp&apos;er
              </Link>
              . Hoe een telefoon van de zaak fiscaal werkt, staat in{' '}
              <Link href="/blogs/telefoon-van-de-zaak-zzp">
                telefoon van de zaak als zzp&apos;er
              </Link>
              .
            </p>

            <h2>Toestel erbij?</h2>
            <p>
              Sim Only is niet de enige route. Wil je een nieuwe telefoon over het abonnement
              spreiden, kijk dan naar zakelijke mobiele abonnementen met toestel. Dat is een
              financieringskeuze, geen fiscale plicht. Of het toestel tot je onderneming
              behoort, lees je in{' '}
              <Link href="/blogs/telefoon-van-de-zaak-zzp">
                telefoon van de zaak als zzp&apos;er
              </Link>
              . De boekhoudkundige regels voor aanschaf en afschrijving staan in{' '}
              <Link href="/blogs/telefoon-aftrekbaar-zzp">telefoon aftrekbaar</Link>.
            </p>
            <p>
              Internet thuis is een apart besluit. Zie{' '}
              <Link href={ZIT_INTERNET_PATH}>zakelijk internet</Link> of het overzicht{' '}
              <Link href={ZIT_HUB_PATH}>zakelijk internet en telefonie</Link>.
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

      <DarkPanel innerClassName="text-center">
        <h2 className="font-display text-[1.85rem] font-normal leading-tight tracking-[-0.025em] text-white sm:text-[2.15rem]">
          Bekijk KPN Zakelijk Sim Only
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          Open de Sim Only-abonnementen, of kies een telefoon bij het abonnement als je een
          nieuw toestel nodig hebt.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
          <KpnAffiliateLink href={KPN_AFFILIATE.simOnly} className={`${btn.light} w-full sm:w-auto`}>
            Bekijk KPN Zakelijk Sim Only
            <ArrowIcon />
          </KpnAffiliateLink>
          <KpnAffiliateLink href={KPN_AFFILIATE.phones} className={`${btn.ghostDark} w-full sm:w-auto`}>
            Bekijk telefoons met abonnement
          </KpnAffiliateLink>
          <KpnAffiliateLink href={KPN_AFFILIATE.mobiel} className={`${btn.ghostDark} w-full sm:w-auto`}>
            Bekijk zakelijke mobiele abonnementen
          </KpnAffiliateLink>
          <Link href={ZIT_HUB_PATH} className={`${btn.ghostDark} w-full sm:w-auto`}>
            Zakelijk internet en telefonie
          </Link>
        </div>
      </DarkPanel>

      <p className="mx-auto max-w-3xl px-4 py-8 text-center text-sm leading-relaxed text-ink-400 sm:px-6">
        {ZIT_DISCLOSURE} Dit is geen fiscaal of telecomadvies. Prijzen, bundels en voorwaarden
        wijzigen; check ze bij de aanbieder.
      </p>

      <section className="bg-paper py-14 sm:py-16">
        <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
          <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">
            Mobiele gidsen
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {ZIT_MOBILE_GUIDES.map((link) => (
              <Link
                key={link.slug}
                href={`/blogs/${link.slug}`}
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
