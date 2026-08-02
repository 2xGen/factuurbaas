import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  FACTUUR_MAKEN_FAQS,
  SLUG_PAGES,
  getFactuurMakenFaqSchema,
} from '@/lib/factuurMakenLanding';

export function generateStaticParams() {
  return Object.keys(SLUG_PAGES).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = SLUG_PAGES[slug];
  if (!data) return {};

  return {
    title: `${data.title} – Gratis Online | FactuurBaas`,
    description: data.description,
    alternates: { canonical: `https://factuurbaas.nl/factuur-maken/${slug}` },
  };
}

export default async function FactuurMakenSlugPage({ params }) {
  const { slug } = await params;
  const data = SLUG_PAGES[slug];
  if (!data) notFound();

  const faqs = FACTUUR_MAKEN_FAQS.slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFactuurMakenFaqSchema(faqs)) }}
      />

      <section className="bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 py-12 text-white sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <nav className="mb-6 text-sm text-blue-200" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/factuur-maken" className="hover:text-white">
                  Factuur maken
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-white">{data.title}</li>
            </ol>
          </nav>

          <h1 className="font-heading text-3xl font-bold tracking-tight md:text-4xl">{data.h1}</h1>
          <p className="mt-4 text-base leading-relaxed text-blue-100 sm:text-lg">{data.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" variant="secondary" className="rounded-xl font-semibold">
              <Link href="/create-invoice">
                Maak gratis factuur
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-white/30 bg-white/10 font-semibold text-white hover:bg-white/20 hover:text-white"
            >
              <Link href="/factuur-maken">Alle situaties</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto max-w-3xl px-4 sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-deep-blue">Waarom deze aanpak?</h2>
          <ul className="mt-6 space-y-3">
            {data.bullets.map((item) => (
              <li key={item} className="flex gap-2.5 text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-warm-orange" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 font-heading text-2xl font-bold text-deep-blue">
            Verder lezen & templates
          </h2>
          <ul className="mt-4 space-y-2">
            {data.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex items-center gap-1.5 font-medium text-deep-blue hover:text-warm-orange"
                >
                  {link.label}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
            <p className="font-heading text-lg font-semibold text-deep-blue">
              Klaar om te factureren?
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Open de tool, vul in en download je PDF — gratis.
            </p>
            <Button asChild className="mt-5 rounded-xl font-semibold">
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
