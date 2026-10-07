import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DemoInvoicePreview, { PreviewStack } from '@/components/landing/DemoInvoicePreview';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  DisplayHeading,
  FaqList,
  PageHeader,
  PaperCard,
  btn,
} from '@/components/site/editorial';
import { cn } from '@/lib/utils';
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
    <div className="not-prose my-8 overflow-x-auto rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
      <table className="tabular w-full min-w-[320px] text-left text-[15px]">
        <thead>
          <tr className="border-b border-ink/15 bg-paper-50">
            {comparison.headers.map((header) => (
              <th
                key={header || 'empty'}
                className="px-5 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-ink-500"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {comparison.rows.map((row) => (
            <tr key={row[0]} className="border-b border-ink/[0.07] last:border-0">
              {row.map((cell, i) => (
                <td
                  key={`${row[0]}-${i}`}
                  className={cn('px-5 py-3.5 align-top', i === 0 ? 'font-medium text-ink' : 'text-ink-500')}
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
    <ul>
      {items.map((item) => (
        <li key={item}>{renderInline(item)}</li>
      ))}
    </ul>
  );
}

export default function InvoiceLandingPage({ page, hubHref, hubLabel }) {
  const voorbeeld = getVoorbeeldPage(page.slug);
  const previewExample = voorbeeld?.example;
  const intros = Array.isArray(page.intro) ? page.intro : page.intro ? [page.intro] : [];

  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <FaqJsonLd faqs={page.faqs} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: hubLabel, href: hubHref },
          { name: page.h1 },
        ]}
        title={page.h1}
        size="lg"
        lead={intros.map((paragraph) => (
          <p key={paragraph.slice(0, 48)}>{renderInline(paragraph)}</p>
        ))}
        aside={
          <PreviewStack className="max-w-[30rem]">
            <DemoInvoicePreview
              layout={page.previewLayout || previewExample?.layout || 'plain'}
              noBtw={page.previewNoBtw || previewExample?.noBtw}
              example={previewExample}
            />
          </PreviewStack>
        }
      >
        <Link href="/create-invoice" className={btn.primary}>
          Maak gratis factuur
          <ArrowIcon />
        </Link>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-20">
            <div className="min-w-0">
              <article className="article-body prose prose-lg max-w-none [&>div:first-child>h2]:mt-0">
                {page.sections.map((section) => (
                  <div key={section.h2}>
                    <h2>{section.h2}</h2>
                    {section.paragraphs?.slice(0, section.image?.src ? 1 : undefined).map((p) => (
                      <p key={p.slice(0, 40)}>{renderInline(p)}</p>
                    ))}
                    {section.image?.src && (
                      <figure className="not-prose my-8 overflow-hidden rounded-2xl border border-ink/[0.08] bg-white shadow-paper">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={section.image.src}
                          alt={section.image.alt || ''}
                          className="h-auto w-full object-cover object-top"
                          loading="lazy"
                        />
                        {section.image.caption && (
                          <figcaption className="border-t border-ink/[0.07] px-5 py-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-ink-500">
                            {section.image.caption}
                          </figcaption>
                        )}
                      </figure>
                    )}
                    {section.image?.src &&
                      section.paragraphs?.slice(1).map((p) => (
                        <p key={p.slice(0, 40)}>{renderInline(p)}</p>
                      ))}
                    <BulletList items={section.bullets} />
                    {section.subsections?.map((sub) => (
                      <div key={sub.h3}>
                        <h3>{sub.h3}</h3>
                        {sub.paragraphs?.map((p) => (
                          <p key={p.slice(0, 40)}>{renderInline(p)}</p>
                        ))}
                        <BulletList items={sub.bullets} />
                      </div>
                    ))}
                    <ComparisonTable comparison={section.comparison} />
                    {section.paragraphsAfter?.map((p) => (
                      <p key={p.slice(0, 40)}>{renderInline(p)}</p>
                    ))}
                  </div>
                ))}
              </article>

              {page.faqs?.length > 0 && (
                <div className="mt-20 border-t border-ink/10 pt-14">
                  <Reveal>
                    <span className="block h-px w-10 bg-ember" aria-hidden />
                    <DisplayHeading size="md" className="mb-8 mt-6">
                      Veelgestelde <em>vragen</em>
                    </DisplayHeading>
                  </Reveal>
                  <FaqList
                    items={page.faqs.map(({ q, a }) => ({ question: q, answer: renderInline(a) }))}
                  />
                </div>
              )}
            </div>

            <aside>
              <PaperCard className="p-6 sm:p-7 lg:sticky lg:top-28">
                <h2 className="font-display text-[1.6rem] font-normal leading-[1.15] tracking-[-0.02em] text-ink">
                  Gebruik deze template gratis
                </h2>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">
                  Vul je gegevens in, kies een layout en download direct als PDF. Geen account
                  nodig.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link href="/create-invoice" className={cn(btn.primary, 'w-full')}>
                    Open gratis factuur tool
                    <ArrowIcon />
                  </Link>
                  <Link href={hubHref} className={cn(btn.secondary, 'w-full')}>
                    Alle templates
                  </Link>
                </div>
              </PaperCard>
            </aside>
          </div>
        </div>
      </section>

      {page.relatedLinks?.length > 0 && (
        <section className="border-t border-ink/[0.06] bg-paper py-14 sm:py-16">
          <div className="container mx-auto grid gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
            <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink">Gerelateerd</h2>
            <div className="flex flex-wrap gap-2.5">
              {page.relatedLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-white px-4 py-2 text-sm text-ink-700 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
                >
                  {link.label}
                  <ArrowRight
                    className="h-3.5 w-3.5 text-ember transition-transform duration-300 group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
