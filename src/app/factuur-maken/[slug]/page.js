import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import DemoInvoicePreview, { PreviewStack } from '@/components/landing/DemoInvoicePreview';
import { Reveal } from '@/components/landing/page/motion';
import { ArrowIcon, DarkPanel, PageHeader, btn } from '@/components/site/editorial';
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
    <div className="min-h-screen bg-paper-50 text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFactuurMakenFaqSchema(faqs)) }}
      />

      <PageHeader
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Factuur maken', href: '/factuur-maken' },
          { name: data.title },
        ]}
        title={data.h1}
        size="lg"
        lead={<p>{data.intro}</p>}
        aside={
          <PreviewStack className="max-w-[30rem]">
            <DemoInvoicePreview layout="plain" />
          </PreviewStack>
        }
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/create-invoice" className={btn.primary}>
            Maak gratis factuur
            <ArrowIcon />
          </Link>
          <Link href="/factuur-maken" className={btn.secondary}>
            Alle situaties
          </Link>
        </div>
      </PageHeader>

      <section className="border-t border-ink/[0.06] py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto grid max-w-5xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <h2 className="font-display text-[2rem] font-normal leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
              Waarom deze aanpak?
            </h2>
            <ul className="mt-8 border-t border-ink/15">
              {data.bullets.map((item, index) => (
                <li key={item} className="flex gap-5 border-b border-ink/15 py-5">
                  <span className="w-7 shrink-0 font-display text-lg italic leading-snug text-ember" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-[15px] leading-relaxed text-ink-700 sm:text-base">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="font-display text-[2rem] font-normal leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.4rem]">
              Verder lezen & templates
            </h2>
            <ul className="mt-8 border-t border-ink/15">
              {data.relatedLinks.map((link) => (
                <li key={link.href} className="border-b border-ink/15">
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between gap-4 py-5 font-display text-xl leading-snug text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
                  >
                    <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
                      {link.label}
                    </span>
                    <ArrowRight
                      className="h-4 w-4 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <DarkPanel innerClassName="text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/crown-favicon.svg" alt="" aria-hidden className="mx-auto h-9 w-9" />
        <p className="mx-auto mt-7 max-w-[20ch] font-display text-[2.3rem] font-normal leading-[1.04] tracking-[-0.03em] sm:text-5xl">
          Klaar om te factureren?
        </p>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
          Open de tool, vul in en download je PDF — gratis.
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/create-invoice" className={btn.light}>
            Maak gratis factuur <ArrowIcon />
          </Link>
        </div>
      </DarkPanel>
    </div>
  );
}
