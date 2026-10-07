import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Zap, Link2, Users, Briefcase } from 'lucide-react';
import { DisplayHeading, btn } from '@/components/site/editorial';

export const metadata = {
  title: '2xGen | Digital Venture Studio – We Build the Future, Together',
  description: '2xGen is a digital venture studio. We build, validate, and scale SaaS products and web platforms that deliver growth and long-term value for partners and customers around the world.',
  keywords: '2xGen, digital venture studio, SaaS, web platforms, FactuurBaas, MyGoProfile, TopTours.ai, ArubaBuddies, AruList',
  openGraph: {
    title: '2xGen | Digital Venture Studio',
    description: 'We build, validate, and scale digital products and SaaS brands that deliver measurable impact.',
    url: 'https://factuurbaas.nl/2xgen',
    type: 'website',
  },
  alternates: { canonical: 'https://factuurbaas.nl/2xgen' },
};

const portfolio = [
  {
    name: 'FactuurBaas',
    description: 'FactuurBaas is a fast and easy invoicing tool for freelancers and small businesses to create professional invoices in minutes—no registration required.',
    cta: 'Create Free Professional Invoices in Minutes',
    href: '/create-invoice',
    internal: true,
  },
  {
    name: 'MyGoProfile',
    description: 'MyGoProfile automates Google Business Profile management with AI-powered review responses, optimization insights, and multi-location control in one dashboard.',
    cta: 'Dominate Local Search with MyGoProfile',
    href: 'https://mygoprofile.com',
    internal: false,
  },
  {
    name: 'TopTours.ai',
    description: 'TopTours.ai helps travelers discover curated tours and activities worldwide using AI-driven suggestions, interactive itineraries, and smart filters.',
    cta: 'Discover AI-Powered Tours',
    href: 'https://toptours.ai',
    internal: false,
  },
  {
    name: 'ArubaBuddies',
    description: 'ArubaBuddies is a smart trip planning platform that curates local recommendations and interactive itineraries to make every Aruba vacation unforgettable.',
    cta: 'Plan Your Perfect Aruba Vacation',
    href: 'https://arubabuddies.com',
    internal: false,
  },
  {
    name: 'AruList',
    description: 'Buy and Sell in Aruba. The easiest marketplace for second-hand items, cars and housing in Aruba.',
    cta: "Visit arulist.com – Aruba's Marketplace, Buy and Sell",
    href: 'https://arulist.com',
    internal: false,
  },
];

const pillars = [
  {
    icon: Link2,
    title: 'Partnerships & Opportunities',
    text: 'We collaborate with innovators who share our vision, forging partnerships that accelerate growth and unlock new markets.',
  },
  {
    icon: Users,
    title: 'Builders, Operators, Innovators',
    text: 'Our team combines operational excellence with technical prowess, keeping every product focused on sustainable growth.',
  },
  {
    icon: Zap,
    title: 'Build from the Ground Up',
    text: 'We design, build, and scale ventures end-to-end—crafting digital products and SaaS brands that deliver measurable impact.',
  },
];

const textLink =
  'group inline-flex items-center gap-1.5 text-sm font-medium text-ink underline decoration-ink/20 underline-offset-[6px] transition-colors hover:decoration-ember focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 rounded-sm';

const backLink =
  'group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-400 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-paper';

const rise = (ms) => ({ animationDelay: `${ms}ms` });

export default function TwoGenPage() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <header className="grain relative isolate overflow-hidden bg-paper">
        <div className="bg-ledger mask-fade-y pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -right-40 -top-48 -z-10 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(210,96,26,0.12),transparent_65%)]"
          aria-hidden
        />
        <div className="container mx-auto px-4 pb-16 pt-10 sm:px-6 sm:pb-20 sm:pt-14 lg:pb-24">
          <Link href="/" className={`${backLink} motion-safe:animate-rise`}>
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            Terug naar Home
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <div>
              <DisplayHeading as="h1" size="xl" className="motion-safe:animate-rise" style={rise(60)}>
                2xGen
              </DisplayHeading>
              <p
                className="mt-5 font-display text-2xl italic leading-snug tracking-[-0.02em] text-ink-700 motion-safe:animate-rise sm:text-[2rem]"
                style={rise(120)}
              >
                We Build the Future, Together
              </p>
            </div>
            <div className="motion-safe:animate-rise" style={rise(180)}>
              <p className="max-w-xl text-lg leading-relaxed text-ink-500">
                2xGen is a digital venture studio. We build, validate, and scale SaaS products and web platforms that deliver growth and long-term value for partners and customers around the world.
              </p>
              <a href="https://2xgen.com" target="_blank" rel="noopener noreferrer" className={`${btn.primary} mt-8`}>
                Visit 2xGen Digital Venture Studio
                <ExternalLink className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="border-y border-ink/[0.06] bg-paper-50">
        <div className="container mx-auto px-4 py-20 sm:px-6 sm:py-24">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
            <DisplayHeading size="lg" className="max-w-[16ch]">
              Build from the <em>Ground Up</em>
            </DisplayHeading>
            <p className="max-w-md text-base leading-relaxed text-ink-500 sm:text-lg lg:ml-auto">
              We design, build, and scale ventures end-to-end—crafting digital products and SaaS brands that deliver measurable impact.
            </p>
          </div>
          <div className="mt-14 grid border-t border-ink/15 md:grid-cols-3">
            {pillars.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="border-b border-ink/15 py-8 md:border-b-0 md:py-10 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white text-ember">
                  <Icon className="h-4 w-4" strokeWidth={1.75} aria-hidden />
                </span>
                <h3 className="mt-6 font-display text-[1.4rem] font-normal leading-tight tracking-[-0.02em]">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-500">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24 lg:py-28">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <h2 className="flex items-center gap-3 font-display text-[2.2rem] font-normal leading-[1.04] tracking-[-0.03em] text-ink sm:text-5xl">
              <Briefcase className="h-6 w-6 shrink-0 text-ember" strokeWidth={1.5} aria-hidden />
              Our Portfolio
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-ink-500 sm:text-lg">
              Explore the platforms we&apos;ve built to make life easier, businesses smarter, and travel more exciting.
            </p>
          </div>

          <div className="border-t border-ink/15">
            {portfolio.map((item, i) => (
              <article
                key={item.name}
                className="relative border-b border-ink/15 py-8 pl-14 sm:py-10 sm:pl-[5.5rem]"
              >
                <span
                  className="absolute left-0 top-9 font-display text-2xl italic leading-none text-ember sm:top-11 sm:text-3xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="font-display text-2xl font-normal leading-tight tracking-[-0.02em] sm:text-[1.9rem]">
                  {item.name}
                </h3>
                <p className="mt-3 max-w-xl text-base leading-relaxed text-ink-500">{item.description}</p>
                <div className="mt-5">
                  {item.internal ? (
                    <Link href={item.href} className={textLink}>
                      {item.cta}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden />
                    </Link>
                  ) : (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className={textLink}>
                      {item.cta}
                      <ExternalLink className="h-3.5 w-3.5 shrink-0 text-ember" aria-hidden />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-ink/[0.06] bg-paper-50 py-12 text-center">
        <Link href="/" className={backLink}>
          <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden />
          Terug naar FactuurBaas
        </Link>
      </div>
    </div>
  );
}
