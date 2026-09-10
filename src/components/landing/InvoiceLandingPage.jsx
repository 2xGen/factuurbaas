import Link from 'next/link';
import DemoInvoicePreview from '@/components/landing/DemoInvoicePreview';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { getVoorbeeldPage } from '@/lib/voorbeeldLandingPages';

function renderInline(text) {
  if (!text || !text.includes('**')) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

function ComparisonTable({ comparison }) {
  if (!comparison) return null;

  return (
    <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200">
      <table className="w-full min-w-[320px] text-left text-sm">
        <thead>
          <tr className="border-b border-slate-200 bg-slate-50">
            {comparison.headers.map((header) => (
              <th key={header || 'empty'} className="px-4 py-3 font-semibold text-deep-blue">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row[0]} className="border-b border-slate-100 last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={`px-4 py-3 ${i === 0 ? 'font-medium text-slate-700' : 'text-slate-600'}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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

function BulletList({ items }) {
  if (!items?.length) return null;
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-slate-600">
          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-warm-orange" />
          <span>{renderInline(item)}</span>
        </li>
      ))}
    </ul>
  );
}

export default function InvoiceLandingPage({ page, hubHref, hubLabel }) {
  const voorbeeld = getVoorbeeldPage(page.slug);
  const previewExample = voorbeeld?.example;
  const intros = Array.isArray(page.intro) ? page.intro : page.intro ? [page.intro] : [];

  return (
    <div className="min-h-screen bg-slate-50">
      <FaqJsonLd faqs={page.faqs} />

      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 py-12 text-white sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">
          <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href={hubHref} className="hover:text-white">
                  {hubLabel}
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">{page.h1}</li>
            </ol>
          </nav>

          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {page.h1}
          </h1>
          <div className="mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-blue-100 sm:text-lg">
            {intros.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{renderInline(paragraph)}</p>
            ))}
          </div>
          <div className="mt-8">
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="h-auto min-h-14 gap-2 px-8 py-4 text-base font-semibold"
            >
              <Link href="/create-invoice">
                Maak gratis factuur
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <article className="prose prose-slate max-w-none">
                {page.sections.map((section) => (
                  <div key={section.h2} className="mb-10 last:mb-0">
                    <h2 className="mb-4 font-heading text-xl font-bold text-deep-blue sm:text-2xl">
                      {section.h2}
                    </h2>
                    {section.paragraphs?.slice(0, section.image?.src ? 1 : undefined).map((p) => (
                      <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-slate-600">
                        {renderInline(p)}
                      </p>
                    ))}
                    {section.image?.src && (
                      <figure className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={section.image.src}
                          alt={section.image.alt || ''}
                          className="h-auto w-full object-cover object-top"
                          loading="lazy"
                        />
                        {section.image.caption && (
                          <figcaption className="border-t border-slate-100 px-4 py-3 text-sm font-medium text-slate-600">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                    {section.image?.src &&
                      section.paragraphs?.slice(1).map((p) => (
                        <p key={p.slice(0, 40)} className="mb-4 leading-relaxed text-slate-600">
                          {renderInline(p)}
                        </p>
                      ))}
                    <BulletList items={section.bullets} />
                    {section.subsections?.map((sub) => (
                      <div key={sub.h3} className="mb-6">
                        <h3 className="mb-2 font-heading text-lg font-semibold text-deep-blue">
                          {sub.h3}
                        </h3>
                        {sub.paragraphs?.map((p) => (
                          <p key={p.slice(0, 40)} className="mb-3 leading-relaxed text-slate-600">
                            {renderInline(p)}
                          </p>
                        ))}
                        <BulletList items={sub.bullets} />
                      </div>
                    ))}
                    <ComparisonTable comparison={section.comparison} />
                    {section.paragraphsAfter?.map((p) => (
                      <p key={p.slice(0, 40)} className="mb-4 mt-4 leading-relaxed text-slate-600">
                        {renderInline(p)}
                      </p>
                    ))}
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
                          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {renderInline(a)}
                          </p>
                        </details>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            </div>

            <aside className="lg:col-span-2">
              <div className="space-y-6 lg:sticky lg:top-28">
                <DemoInvoicePreview
                  layout={page.previewLayout || previewExample?.layout || 'plain'}
                  noBtw={page.previewNoBtw || previewExample?.noBtw}
                  example={previewExample}
                />
                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
                  <h2 className="font-heading text-lg font-bold text-deep-blue">
                    Gebruik deze template gratis
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Vul je gegevens in, kies een layout en download direct als PDF. Geen account
                    nodig.
                  </p>
                  <Button asChild size="lg" className="mt-5 w-full rounded-xl">
                    <Link href="/create-invoice">
                      Open gratis factuur tool
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="mt-3 w-full rounded-xl">
                    <Link href={hubHref}>Alle templates</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

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
