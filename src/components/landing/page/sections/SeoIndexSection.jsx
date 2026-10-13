import React from 'react';
import Link from 'next/link';
import { popularTemplates, seoLandingLinks } from '@/lib/invoiceLandingData';
import { blogPillars, getPillarHref } from '@/lib/blogPillars';

const heading = 'font-mono text-[10px] font-normal uppercase tracking-[0.16em] text-ink-400';
const listLink = 'text-[13px] text-ink-500 transition-colors hover:text-ink';
const inlineLink = 'text-ink-700 underline decoration-ink/20 underline-offset-4 hover:decoration-ink';

export default function SeoIndexSection() {
  return (
    <section className="bg-paper text-ink" aria-label="Meer over factureren">
      <div className="container mx-auto grid gap-12 border-t border-ink/10 px-4 py-14 sm:px-6 lg:grid-cols-[1.5fr_1fr_1.6fr] lg:gap-16">
        <div className="space-y-6 text-[13px] leading-relaxed text-ink-500">
          <div>
            <h2 className="text-sm font-medium text-ink-700">Gratis factuur maken voor zzp&apos;ers</h2>
            <p className="mt-2">
              Vul je bedrijfsgegevens, klant en werkzaamheden in, controleer de btw en download je
              factuur direct als PDF. Geen account. Geen abonnement.
            </p>
            <p className="mt-2">
              Met een gratis account bewaar je facturen en offertes, registreer je uitgaven en zie
              je resultaat. Handig voor zzp&apos;ers én voor een kleine zaak die vooral verkopen
              bijhoudt.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-medium text-ink-700">Online factuur maken</h2>
            <p className="mt-2">
              Geen Word- of Excel-template. Je maakt de factuur online en stuurt de PDF naar je
              klant. Eerst een{' '}
              <Link href="/blogs/factuur-templates-zzp" className={inlineLink}>
                factuur voorbeeld
              </Link>{' '}
              bekijken of{' '}
              <Link href="/blogs/factureren-zonder-account" className={inlineLink}>
                factureren zonder account
              </Link>
              ? Dat kan ook.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
            {seoLandingLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={listLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={heading}>Templates</h2>
          <ul className="mt-4 space-y-2">
            {popularTemplates.map((template) => (
              <li key={template.slug}>
                <Link href={template.href} className={listLink}>
                  {template.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/factuur-template" className="text-[13px] font-medium text-ink-700 hover:text-ink">
                Alle templates →
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={heading}>Gidsen</h2>
          <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
            {blogPillars.map((pillar) => (
              <li key={pillar.id}>
                <Link href={getPillarHref(pillar)} className={listLink}>
                  {pillar.cardTitle || pillar.title}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/boekhoudprogramma-vergelijken" className={listLink}>
                Boekhoudprogramma vergelijken
              </Link>
            </li>
            <li>
              <Link href="/zakelijke-lease-vergelijken" className={listLink}>
                Zakelijke lease vergelijken
              </Link>
            </li>
            <li>
              <Link href="/zakelijk-internet-telefonie" className={listLink}>
                Zakelijk internet &amp; telefonie
              </Link>
            </li>
            <li>
              <Link href="/blogs" className="text-[13px] font-medium text-ink-700 hover:text-ink">
                Alle gidsen →
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
