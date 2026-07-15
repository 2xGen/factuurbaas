import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

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
  faqSchema,
  extraSchemas = [],
  children,
}) {
  const jsonLdSchemas = [faqSchema, ...extraSchemas].filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50">
      {jsonLdSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

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
                <Link href="/tools" className="hover:text-white">
                  Tools
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">{breadcrumbLabel}</li>
            </ol>
          </nav>

          {eyebrow && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-200">
              {eyebrow}
            </p>
          )}
          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            {h1}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-blue-100 sm:text-lg">
            {intro}
          </p>
          {introExtra && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-blue-100/90 sm:text-base">
              {introExtra}
            </p>
          )}

          {trustPoints.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 text-sm text-blue-100 sm:text-base"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-green-300" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              asChild
              size="xl"
              variant="secondary"
              className="h-auto min-h-14 gap-2 px-8 py-4 text-base font-semibold"
            >
              <Link href={toolHref}>
                {toolCtaLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            {secondaryHref && secondaryCtaLabel && (
              <Button
                asChild
                size="xl"
                variant="outline"
                className="h-auto min-h-14 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white hover:bg-white/20 hover:text-white"
              >
                <Link href={secondaryHref}>{secondaryCtaLabel}</Link>
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-4xl px-4 sm:px-6">{children}</div>
      </section>

      <section className="border-t border-slate-200 bg-white py-10 sm:py-12">
        <div className="container mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-xl font-bold text-deep-blue sm:text-2xl">
            Klaar om te starten?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600 sm:text-base">
            Open de gratis tool en ga direct aan de slag. Geen account nodig.
          </p>
          <Button asChild size="lg" className="mt-6 rounded-xl px-8">
            <Link href={toolHref}>
              {toolCtaLabel}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
