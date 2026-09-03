import Link from 'next/link';
import DemoInvoicePreview from '@/components/landing/DemoInvoicePreview';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

function FaqJsonLd({ faqs }) {
  if (!faqs?.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function OfferteVoorbeeldLandingPage({ page }) {
  const previewLayout = page.example?.layout || 'plain';

  return (
    <div className="min-h-screen bg-slate-50">
      <FaqJsonLd faqs={page.faqs} />

      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 py-12 text-white sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/voorbeeld" className="hover:text-white">
                  Voorbeelden
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/offerte-voorbeeld" className="hover:text-white">
                  Offerte voorbeelden
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">{page.h1}</li>
            </ol>
          </nav>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
                Offerte voorbeeld
              </p>
              <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-blue-100 sm:text-lg">
                {page.intro}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  asChild
                  size="xl"
                  variant="secondary"
                  className="h-auto min-h-14 gap-2 px-8 py-4 text-base font-semibold"
                >
                  <Link href="/tools/offerte-maker/maken">
                    Maak dezelfde offerte gratis
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="xl"
                  variant="outline"
                  className="h-auto min-h-14 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
                >
                  <Link href="/tools/offerte-maker">Meer over offerte maken</Link>
                </Button>
              </div>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <DemoInvoicePreview
                layout={previewLayout}
                example={page.example}
                docType="quote"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <article>
            {page.sections.map((section) => (
              <div key={section.h2} className="mb-10 last:mb-0">
                <h2 className="mb-4 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                  {section.h2}
                </h2>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-slate-600">
                    {p}
                  </p>
                ))}
                {section.subsections?.map((sub) => (
                  <div key={sub.h3} className="mb-6">
                    <h3 className="mb-2 font-heading text-lg font-semibold text-deep-blue">
                      {sub.h3}
                    </h3>
                    {sub.paragraphs?.map((p) => (
                      <p key={p.slice(0, 40)} className="mb-3 leading-relaxed text-slate-600">
                        {p}
                      </p>
                    ))}
                    {sub.bullets && (
                      <ul className="space-y-2">
                        {sub.bullets.map((item) => (
                          <li key={item} className="flex gap-2.5 text-slate-600">
                            <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.bullets && (
                  <ul className="space-y-2">
                    {section.bullets.map((item) => (
                      <li key={item} className="flex gap-2.5 text-slate-600">
                        <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {page.faqs?.length > 0 && (
              <div className="mt-12 border-t border-slate-200 pt-10">
                <h2 className="mb-6 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                  Veelgestelde vragen
                </h2>
                <div className="space-y-4">
                  {page.faqs.map(({ q, a }) => (
                    <details
                      key={q}
                      className="group rounded-xl border border-slate-200 bg-white p-4 sm:p-5"
                    >
                      <summary className="cursor-pointer list-none font-semibold text-deep-blue marker:content-none [&::-webkit-details-marker]:hidden">
                        <span className="flex items-start justify-between gap-3">
                          {q}
                          <span className="text-warm-orange transition-transform group-open:rotate-45">
                            +
                          </span>
                        </span>
                      </summary>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}
          </article>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
              {page.closingTitle || 'Maak deze offerte zelf'}
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
              {page.closingText ||
                'Vul je eigen gegevens in, kies een layout en download direct als PDF. Gratis en zonder account — klaar in onder 2 minuten.'}
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-xl px-8">
                <Link href="/tools/offerte-maker/maken">
                  Open gratis offerte maker
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl px-8">
                <Link href="/tools/offerte-maker">Lees meer over offertes</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {page.relatedExamples?.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
          <div className="container mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue sm:text-xl">
              Meer offerte voorbeelden
            </h2>
            <ul className="mt-5 space-y-2.5">
              {page.relatedExamples.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-warm-orange hover:underline sm:text-base"
                  >
                    <ArrowRight className="h-3.5 w-3.5 flex-shrink-0" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {page.relatedLinks?.length > 0 && (
        <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
          <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
            <h2 className="font-heading text-lg font-bold text-deep-blue">Gerelateerd</h2>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:border-warm-orange/40 hover:text-warm-orange"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
