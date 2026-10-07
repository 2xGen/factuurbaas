import Link from 'next/link';
import { ArrowRight, FileText } from 'lucide-react';
import DemoInvoicePreview, { PreviewStack } from '@/components/landing/DemoInvoicePreview';
import { Reveal } from '@/components/landing/page/motion';
import {
  ArrowIcon,
  ClosingCta,
  DisplayHeading,
  FaqList,
  PageHeader,
  btn,
} from '@/components/site/editorial';

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
    <div className="min-h-screen bg-paper-50 text-ink">
      <FaqJsonLd faqs={page.faqs} />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Voorbeelden', href: '/voorbeeld' },
          { name: 'Offerte voorbeelden', href: '/offerte-voorbeeld' },
          { name: page.h1 },
        ]}
        eyebrow="Offerte voorbeeld"
        eyebrowIcon={FileText}
        title={page.h1}
        size="lg"
        lead={<p>{page.intro}</p>}
        aside={
          <PreviewStack className="max-w-[30rem]">
            <DemoInvoicePreview layout={previewLayout} example={page.example} docType="quote" />
          </PreviewStack>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/tools/offerte-maker/maken" className={btn.primary}>
            Maak dezelfde offerte gratis
            <ArrowIcon />
          </Link>
          <Link href="/tools/offerte-maker" className={btn.secondary}>
            Meer over offerte maken
          </Link>
        </div>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <article className="article-body prose prose-lg max-w-none [&>div:first-child>h2]:mt-0">
            {page.sections.map((section) => (
              <div key={section.h2}>
                <h2>{section.h2}</h2>
                {section.paragraphs?.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
                {section.subsections?.map((sub) => (
                  <div key={sub.h3}>
                    <h3>{sub.h3}</h3>
                    {sub.paragraphs?.map((p) => (
                      <p key={p.slice(0, 40)}>{p}</p>
                    ))}
                    {sub.bullets && (
                      <ul>
                        {sub.bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
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
              <FaqList items={page.faqs.map(({ q, a }) => ({ question: q, answer: a }))} />
            </div>
          )}
        </div>
      </section>

      <ClosingCta
        title={page.closingTitle || 'Maak deze offerte zelf'}
        text={
          page.closingText ||
          'Vul je eigen gegevens in, kies een layout en download direct als PDF. Gratis en zonder account — klaar in onder 2 minuten.'
        }
        primary={{ href: '/tools/offerte-maker/maken', label: 'Open gratis offerte maker' }}
        secondary={{ href: '/tools/offerte-maker', label: 'Lees meer over offertes' }}
      />

      {page.relatedExamples?.length > 0 && (
        <section className="bg-paper-50 py-16 sm:py-20">
          <div className="container mx-auto max-w-5xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-[14rem_1fr] md:gap-10">
              <h2 className="font-display text-2xl font-normal tracking-[-0.02em] text-ink sm:text-[1.75rem]">
                Meer offerte voorbeelden
              </h2>
              <ul className="border-t border-ink/15">
                {page.relatedExamples.map((link, index) => (
                  <li key={link.href} className="border-b border-ink/15">
                    <Link
                      href={link.href}
                      className="group flex items-center gap-5 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
                    >
                      <span className="font-display text-lg italic text-ember" aria-hidden>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="flex-1 font-display text-xl leading-snug text-ink sm:text-[1.35rem]">
                        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                          {link.label}
                        </span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {page.relatedLinks?.length > 0 && (
        <section className="border-t border-ink/[0.06] bg-paper py-14 sm:py-16">
          <div className="container mx-auto grid max-w-5xl gap-6 px-4 sm:px-6 md:grid-cols-[14rem_1fr] md:gap-10">
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
