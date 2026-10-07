import Link from 'next/link';
import { Wrench } from 'lucide-react';
import { ArrowIcon, btn, ClosingCta, PageHeader, TrustList } from '@/components/site/editorial';

export default function ToolGatePage({
  breadcrumbLabel,
  eyebrow,
  h1,
  intro,
  introExtra,
  trustPoints = [],
  toolHref,
  toolCtaLabel,
  secondaryHref,
  secondaryCtaLabel,
  footerTitle = 'Klaar om te starten?',
  footerIntro = 'Open de gratis tool en ga direct aan de slag. Geen account nodig.',
  footerCtaLabel,
  faqSchema,
  extraSchemas = [],
  children,
}) {
  const resolvedFooterCtaLabel = footerCtaLabel || toolCtaLabel;
  const jsonLdSchemas = [faqSchema, ...extraSchemas].filter(Boolean);

  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Tools', href: '/tools' },
          { name: breadcrumbLabel },
        ]}
        eyebrow={eyebrow || 'Gratis tool'}
        eyebrowIcon={Wrench}
        title={h1}
        containerClassName="max-w-5xl"
        lead={
          <>
            <p>{intro}</p>
            {introExtra && <p className="text-base text-ink-400 sm:text-lg">{introExtra}</p>}
          </>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href={toolHref} className={btn.primary}>
            {toolCtaLabel}
            <ArrowIcon />
          </Link>
          {secondaryHref && secondaryCtaLabel && (
            <Link href={secondaryHref} className={btn.secondary}>
              {secondaryCtaLabel}
            </Link>
          )}
        </div>
        <TrustList items={trustPoints} className="mt-8" />
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">{children}</div>
      </section>

      <ClosingCta
        title={footerTitle}
        text={footerIntro}
        primary={{ href: toolHref, label: resolvedFooterCtaLabel }}
      />
    </div>
  );
}
