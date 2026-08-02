import Link from 'next/link';
import { Button } from '@/components/ui/button';
import DemoInvoicePreview from '@/components/landing/DemoInvoicePreview';
import {
  FACTUUR_MAKEN_FAQS,
  FACTUUR_TYPES,
  REQUIRED_FIELDS,
  STEPS,
  getFactuurMakenFaqSchema,
} from '@/lib/factuurMakenLanding';
import { ArrowRight, CheckCircle2, FileText } from 'lucide-react';

function FaqJsonLd({ faqs }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(getFactuurMakenFaqSchema(faqs)) }}
    />
  );
}

export default function FactuurMakenLanding() {
  return (
    <div className="min-h-screen bg-slate-50">
      <FaqJsonLd faqs={FACTUUR_MAKEN_FAQS} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-deep-blue text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 75% -10%, rgba(255,127,80,0.35), transparent 55%)',
          }}
          aria-hidden
        />
        <div className="container relative z-10 mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-warm-orange">
                FactuurBaas
              </p>
              <h1 className="mt-3 font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Factuur maken — gratis online, direct als PDF
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
                Maak in ongeveer 2 minuten een professionele factuur voor zzp, freelancers en
                kleine ondernemers. Geen abonnement. Geen account nodig om te starten.
              </p>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/80">
                {['Gratis', 'Direct PDF', 'Btw automatisch', '1.000+ facturen gemaakt'].map(
                  (item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-warm-orange" />
                      {item}
                    </li>
                  )
                )}
              </ul>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-xl bg-warm-orange px-7 font-semibold text-white hover:bg-orange-600"
                >
                  <Link href="/create-invoice">
                    Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-xl border-white/30 bg-white/5 px-7 font-semibold text-white hover:bg-white/15 hover:text-white"
                >
                  <Link href="/voorbeeld">Bekijk voorbeelden</Link>
                </Button>
              </div>
            </div>
            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="rounded-2xl bg-white/10 p-3 ring-1 ring-white/20 backdrop-blur-sm sm:p-4">
                <DemoInvoicePreview layout="plain" className="shadow-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-slate-200 bg-white py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Zo maak je een factuur
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Drie stappen — van leeg scherm naar verstuurklare PDF.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {STEPS.map((step, i) => (
              <div key={step.title} className="relative text-center md:text-left">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-orange text-sm font-bold text-white">
                  {i + 1}
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-deep-blue">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="h-12 rounded-xl px-8 font-semibold">
              <Link href="/create-invoice">
                Start nu gratis <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-14 sm:py-16 lg:py-20">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Factuur maken per situatie
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            Niet elke factuur is hetzelfde. Kies het type dat bij jouw werk past — of ga direct naar
            de tool.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACTUUR_TYPES.map((type) => (
              <Link
                key={type.href}
                href={type.href}
                className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-warm-orange/30 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-deep-blue/5 text-deep-blue">
                  <FileText className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-heading text-lg font-semibold text-deep-blue group-hover:text-warm-orange">
                  {type.title}
                </h3>
                <p className="mt-1.5 flex-grow text-sm leading-relaxed text-slate-600">
                  {type.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-warm-orange">
                  Meer info <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Required fields */}
      <section className="border-y border-slate-200 bg-white py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
                Wat moet er op een factuur staan?
              </h2>
              <p className="mt-3 text-slate-600 leading-relaxed">
                Een geldige Nederlandse factuur bevat vaste gegevens. FactuurBaas helpt je die
                velden netjes in te vullen — zodat je minder hoeft te zoeken in Excel of Word.
              </p>
              <Button asChild className="mt-6 rounded-xl font-semibold">
                <Link href="/create-invoice">
                  Vul je factuur in <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <ul className="space-y-2.5">
              {REQUIRED_FIELDS.map((item) => (
                <li
                  key={item}
                  className="flex gap-2.5 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-warm-orange" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Account upsell light */}
      <section className="py-14 sm:py-16">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6">
          <div className="rounded-3xl bg-deep-blue px-6 py-10 text-white sm:px-10 sm:py-12">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">
              Wil je meer dan alleen een PDF?
            </h2>
            <p className="mt-3 max-w-2xl text-white/75">
              Met een gratis account sla je facturen op, houd je openstaand/betaald bij, zie je btw
              per kwartaal en hergebruik je klanten bij de volgende factuur.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-xl bg-warm-orange font-semibold text-white hover:bg-orange-600"
              >
                <Link href="/create-invoice">Maak eerst een factuur</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl border-white/30 bg-transparent font-semibold text-white hover:bg-white/10 hover:text-white"
              >
                <Link href="/register">Gratis account</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-slate-200 bg-white py-14 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="text-center font-heading text-2xl font-bold text-deep-blue sm:text-3xl">
            Veelgestelde vragen
          </h2>
          <div className="mt-10 space-y-4">
            {FACTUUR_MAKEN_FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none font-heading text-base font-semibold text-deep-blue marker:content-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{faq.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild size="lg" className="h-12 rounded-xl px-8 font-semibold">
              <Link href="/create-invoice">
                Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
