import Link from 'next/link';
import HeroInvoice from '@/components/landing/page/HeroInvoice';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  Eyebrow,
  FaqList,
  PageHeader,
  TrustList,
  btn,
} from '@/components/site/editorial';
import {
  FACTUUR_MAKEN_FAQS,
  FACTUUR_TYPES,
  REQUIRED_FIELDS,
  STEPS,
  getFactuurMakenFaqSchema,
} from '@/lib/factuurMakenLanding';
import { ArrowUpRight, FileText } from 'lucide-react';

function FaqJsonLd({ faqs }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getFactuurMakenFaqSchema(faqs)) }}
    />
  );
}

const numeral = (i) => String(i + 1).padStart(2, '0');

export default function FactuurMakenLanding() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <FaqJsonLd faqs={FACTUUR_MAKEN_FAQS} />

      <PageHeader
        eyebrow="FactuurBaas"
        title={
          <>
            Factuur maken — <em>gratis online</em>, direct als PDF
          </>
        }
        lead={
          <p>
            Maak in ongeveer 2 minuten een professionele factuur voor zzp, freelancers en kleine
            ondernemers. Geen abonnement. Geen account nodig om te starten.
          </p>
        }
        aside={
          <div className="mx-auto w-full max-w-md pb-6 sm:max-w-none lg:pl-4">
            <HeroInvoice />
          </div>
        }
      >
        <TrustList items={['Gratis', 'Direct PDF', 'Btw automatisch', '1.000+ facturen gemaakt']} />
        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link href="/create-invoice" className={btn.primary}>
            Maak gratis factuur
            <ArrowIcon />
          </Link>
          <Link href="/voorbeeld" className={btn.secondary}>
            Bekijk voorbeelden
          </Link>
        </div>
      </PageHeader>

      <section className="border-y border-ink/[0.06] bg-paper-50 py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <Eyebrow>In drie stappen</Eyebrow>
              <DisplayHeading className="mt-5 max-w-[16ch]">
                Zo maak je een <em>factuur</em>
              </DisplayHeading>
            </div>
            <p className="max-w-md text-base leading-relaxed text-ink-500 sm:text-lg lg:ml-auto">
              Drie stappen — van leeg scherm naar verstuurklare PDF.
            </p>
          </Reveal>

          <ol className="mt-14 grid border-t border-ink/15 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <Reveal
                as="li"
                key={step.title}
                delay={i * 0.08}
                className="border-b border-ink/15 py-8 md:border-b-0 md:py-10 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
              >
                <span
                  className="font-display text-3xl italic leading-none text-ember"
                  aria-hidden
                >
                  {numeral(i)}
                </span>
                <h3 className="mt-6 font-display text-2xl font-normal leading-tight tracking-[-0.02em]">
                  {step.title}
                </h3>
                <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-ink-500">{step.text}</p>
              </Reveal>
            ))}
          </ol>

          <div className="mt-12">
            <Link href="/create-invoice" className={btn.primary}>
              Start nu gratis
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6">
          <Reveal className="max-w-2xl">
            <Eyebrow>Per situatie</Eyebrow>
            <DisplayHeading className="mt-5">
              Factuur maken <em>per situatie</em>
            </DisplayHeading>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Niet elke factuur is hetzelfde. Kies het type dat bij jouw werk past — of ga direct naar
              de tool.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACTUUR_TYPES.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group flex flex-col rounded-2xl border border-ink/[0.08] bg-white p-6 shadow-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-paper-50 text-ink-700">
                  <FileText className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-[1.4rem] font-normal leading-tight tracking-[-0.02em] text-ink">
                  {type.title}
                </h3>
                <p className="mt-2 flex-grow text-[15px] leading-relaxed text-ink-500">
                  {type.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors group-hover:decoration-ember">
                  Meer info
                  <ArrowUpRight
                    className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-ink/[0.06] bg-paper-50">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24 lg:py-28">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>Verplichte gegevens</Eyebrow>
            <DisplayHeading className="mt-5 max-w-[14ch]">
              Wat moet er op een <em>factuur</em> staan?
            </DisplayHeading>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
              Een geldige Nederlandse factuur bevat vaste gegevens. FactuurBaas helpt je die velden
              netjes in te vullen — zodat je minder hoeft te zoeken in Excel of Word.
            </p>
            <Link href="/create-invoice" className={`${btn.primary} mt-8`}>
              Vul je factuur in
              <ArrowIcon />
            </Link>
          </Reveal>

          <ol className="border-t border-ink/15">
            {REQUIRED_FIELDS.map((item, i) => (
              <li
                key={item}
                className="grid grid-cols-[2.75rem_1fr] items-baseline gap-2 border-b border-ink/15 py-4 sm:grid-cols-[3.5rem_1fr] sm:py-5"
              >
                <span className="font-display text-lg italic leading-none text-ember" aria-hidden>
                  {numeral(i)}
                </span>
                <span className="text-[15px] leading-relaxed text-ink-700 sm:text-base">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <Eyebrow>FAQ</Eyebrow>
            <DisplayHeading className="mt-5">Veelgestelde vragen</DisplayHeading>
            <Link href="/create-invoice" className={`${btn.primary} mt-8`}>
              Maak gratis factuur
              <ArrowIcon />
            </Link>
          </div>
          <FaqList
            items={FACTUUR_MAKEN_FAQS.map((faq) => ({ question: faq.q, answer: faq.a }))}
          />
        </div>
      </section>

      <ClosingCta
        title={
          <>
            Wil je meer dan alleen een <em>PDF</em>?
          </>
        }
        text="Met een gratis account sla je facturen op, houd je openstaand/betaald bij, zie je btw per kwartaal en hergebruik je klanten bij de volgende factuur."
        primary={{ href: '/create-invoice', label: 'Maak eerst een factuur' }}
        secondary={{ href: '/register', label: 'Gratis account' }}
      />
    </div>
  );
}
