import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ExternalLink, Zap, Link2, Users, Briefcase } from 'lucide-react';

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

export default function TwoGenPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl py-10 sm:py-16">
        <Link
          href="/"
          className="inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors mb-8 font-semibold group"
        >
          <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
          Terug naar Home
        </Link>

        <header className="text-center mb-14">
          <h1 className="text-4xl sm:text-5xl font-bold text-deep-blue font-heading tracking-tight mb-3">
            2xGen
          </h1>
          <p className="text-xl sm:text-2xl text-warm-orange font-semibold mb-6">
            We Build the Future, Together
          </p>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            2xGen is a digital venture studio. We build, validate, and scale SaaS products and web platforms that deliver growth and long-term value for partners and customers around the world.
          </p>
          <a
            href="https://2xgen.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-deep-blue text-white px-6 py-3 font-semibold hover:bg-deep-blue/90 transition-colors"
          >
            Visit 2xGen Digital Venture Studio
            <ExternalLink className="w-4 h-4" />
          </a>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-bold text-deep-blue font-heading mb-6">Build from the Ground Up</h2>
          <p className="text-slate-600 mb-8">
            We design, build, and scale ventures end-to-end—crafting digital products and SaaS brands that deliver measurable impact.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Link2 className="w-10 h-10 text-warm-orange mb-3" />
              <h3 className="font-semibold text-deep-blue mb-2">Partnerships & Opportunities</h3>
              <p className="text-sm text-slate-600">
                We collaborate with innovators who share our vision, forging partnerships that accelerate growth and unlock new markets.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Users className="w-10 h-10 text-warm-orange mb-3" />
              <h3 className="font-semibold text-deep-blue mb-2">Builders, Operators, Innovators</h3>
              <p className="text-sm text-slate-600">
                Our team combines operational excellence with technical prowess, keeping every product focused on sustainable growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="w-10 h-10 text-warm-orange mb-3" />
              <h3 className="font-semibold text-deep-blue mb-2">Build from the Ground Up</h3>
              <p className="text-sm text-slate-600">
                We design, build, and scale ventures end-to-end—crafting digital products and SaaS brands that deliver measurable impact.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-deep-blue font-heading mb-2 flex items-center gap-2">
            <Briefcase className="w-7 h-7 text-warm-orange" />
            Our Portfolio
          </h2>
          <p className="text-slate-600 mb-8">
            Explore the platforms we&apos;ve built to make life easier, businesses smarter, and travel more exciting.
          </p>
          <div className="space-y-6">
            {portfolio.map((item) => (
              <article
                key={item.name}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-deep-blue font-heading mb-2">{item.name}</h3>
                <p className="text-slate-600 mb-4">{item.description}</p>
                {item.internal ? (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-warm-orange font-semibold hover:underline"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-warm-orange font-semibold hover:underline"
                  >
                    {item.cta}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <div className="mt-14 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors font-semibold"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Terug naar FactuurBaas
          </Link>
        </div>
      </div>
    </div>
  );
}
