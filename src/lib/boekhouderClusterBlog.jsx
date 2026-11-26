import React from 'react';
import Link from 'next/link';
import { SITE_OG_IMAGE, SITE_OG_IMAGE_ALT } from '@/lib/siteOg';

const TextLink = ({ href, children }) => (
  <Link href={href} className="text-warm-orange hover:underline">
    {children}
  </Link>
);

const clusterImage = (alt) => ({
  url: SITE_OG_IMAGE,
  alt: alt || SITE_OG_IMAGE_ALT,
});

const SHARED_RELATED = [
  'boekhouder-kosten',
  'boekhouder-zzp',
  'boekhouder-bv',
  'boekhouder-mkb',
  'boekhouding-uitbesteden',
];

function stubContent({ intro, ctaHref = '/boekhouder-vinden', ctaLabel = 'Vind een boekhouder' }) {
  return (
    <>
      <p>{intro}</p>
      <p>
        Via FactuurBaas vraag je gratis en vrijblijvend hulp aan bij het vinden van een passende boekhouder. Bekijk ook{' '}
        <TextLink href="/boekhouder-kosten">wat een boekhouder kost</TextLink> of gebruik de{' '}
        <TextLink href="/tools/boekhouder-kosten-calculator">boekhouder kosten calculator</TextLink>.
      </p>
      <p>
        <TextLink href={ctaHref}>{ctaLabel}</TextLink>
      </p>
    </>
  );
}

export const boekhouderClusterArticles = [
  {
    slug: 'boekhouder-vinden',
    path: '/boekhouder-vinden',
    relatedSlugs: ['boekhouder-kosten', 'boekhouder-zzp', 'boekhouder-bv', 'boekhouding-uitbesteden'],
    metaTitle: 'Boekhouder vinden voor ZZP, BV en MKB',
    metaDescription:
      "Een boekhouder vinden voor je eenmanszaak, VOF, BV of MKB? Bekijk indicatieve kosten en vraag gratis en vrijblijvend hulp aan bij het vinden van een boekhouder.",
    title: 'Boekhouder vinden voor ZZP, BV en MKB',
    excerpt:
      "Op zoek naar een boekhouder? Vraag gratis en vrijblijvend hulp aan voor zzp, VOF, BV of MKB via FactuurBaas.",
    keywords:
      'boekhouder vinden, boekhouder zoeken, zoek een boekhouder, boekhouder zzp, boekhouder bv, boekhouder mkb',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouder%20voor%20zzp.jpg',
      alt: "Boekhouder vinden voor zzp'ers, BV en MKB.",
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        "Op zoek naar een boekhouder die past bij jouw onderneming? Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.",
      ctaHref: '/boekhouder-vinden',
      ctaLabel: 'Vind mijn boekhouder',
    }),
  },
  {
    slug: 'boekhouder-kosten',
    path: '/boekhouder-kosten',
    relatedSlugs: ['boekhouder-vinden', 'boekhouder-zzp', 'boekhouder-bv', 'boekhouding-uitbesteden'],
    metaTitle: 'Wat kost een boekhouder in 2026? Tarieven per maand',
    metaDescription:
      'Wat kost een boekhouder voor ZZP, VOF of BV? Bekijk indicatieve tarieven vanaf €100 per maand, vergelijk kosten en bereken gratis jouw boekhoudkosten.',
    title: 'Wat kost een boekhouder? Kosten per maand en per jaar',
    excerpt:
      'Bekijk indicatieve tarieven voor zzp, VOF en BV vanaf €100 per maand en bereken gratis jouw boekhoudkosten.',
    keywords:
      'wat kost een boekhouder, boekhouder kosten, boekhouder kosten per maand, kosten boekhouder zzp, tarieven boekhouder',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/wat%20kost%20een%20boekhouder%20per%20jaar.jpg',
      alt: 'Wat kost een boekhouder? Indicatieve tarieven per maand en per jaar.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Een boekhouder kost voor een eenmanszaak of zzp’er indicatief tussen €100 en €150 per maand bij volledige uitbesteding.',
      ctaHref: '/boekhouder-kosten',
      ctaLabel: 'Bereken jouw boekhoudkosten',
    }),
  },
  {
    slug: 'boekhouder-zzp',
    path: '/boekhouder-zzp',
    relatedSlugs: SHARED_RELATED.filter((slug) => slug !== 'boekhouder-zzp'),
    metaTitle: 'Boekhouder ZZP vinden? Kosten €100–€150 p/m',
    metaDescription:
      "Op zoek naar een boekhouder voor je zzp of eenmanszaak? Bekijk indicatieve kosten, ontdek wat je kunt uitbesteden en vraag vrijblijvend hulp aan.",
    title: "Boekhouder voor zzp'ers en eenmanszaken vinden",
    excerpt:
      'Meer tijd voor je onderneming, minder tijd voor administratie. Indicatieve kosten €100–€150 per maand.',
    keywords:
      'boekhouder zzp, boekhouder voor zzp, zzp boekhouder, boekhouder eenmanszaak, kosten boekhouder zzp, goedkope boekhouder zzp',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/zzp%20boekhouder%20vinden.jpg',
      alt: "Boekhouder voor zzp'ers en eenmanszaken vinden.",
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        "Als zzp'er wil je ondernemen, niet eindeloos administreren. Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.",
      ctaHref: '/boekhouder-zzp',
      ctaLabel: 'Vind een boekhouder voor zzp',
    }),
  },
  {
    slug: 'boekhouder-bv',
    path: '/boekhouder-bv',
    relatedSlugs: SHARED_RELATED.filter((slug) => slug !== 'boekhouder-bv'),
    metaTitle: 'Boekhouder BV vinden? Kosten vanaf €250 p/m',
    metaDescription:
      'Een boekhouder voor je BV, holding of werkmaatschappij zoeken? Bekijk indicatieve kosten, werkzaamheden en vraag gratis en vrijblijvend hulp aan.',
    title: 'Boekhouder voor je BV vinden',
    excerpt:
      'Voor holdings, werkmaatschappijen en groeiende ondernemingen. Indicatieve kosten vanaf €250 per maand voor een werkmaatschappij.',
    keywords:
      'boekhouder bv, boekhouder voor bv, bv boekhouder, boekhouding bv, boekhouder bv kosten, boekhouder holding, boekhouder werkmaatschappij',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouder%20voor%20bv.jpg',
      alt: 'Boekhouder voor BV, holding en werkmaatschappij.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Op zoek naar een boekhouder voor je BV, holding of werkmaatschappij? Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.',
      ctaHref: '/boekhouder-bv',
      ctaLabel: 'Vind een boekhouder voor je BV',
    }),
  },
  {
    slug: 'boekhouder-mkb',
    path: '/boekhouder-mkb',
    relatedSlugs: SHARED_RELATED.filter((slug) => slug !== 'boekhouder-mkb'),
    metaTitle: 'Boekhouder MKB vinden? Kosten & mogelijkheden',
    metaDescription:
      'Op zoek naar een boekhouder voor je MKB-bedrijf? Ontdek de kosten, administratie, salarisverwerking en mogelijkheden. Vraag gratis en vrijblijvend hulp aan.',
    title: 'Boekhouder voor het MKB vinden',
    excerpt: 'Een boekhouder die meegroeit met jouw onderneming. Voor administratie, salarisverwerking en financieel inzicht.',
    keywords:
      'boekhouder mkb, boekhouder voor mkb, mkb boekhouder, boekhouding mkb, administratiekantoor mkb, kosten boekhouder mkb',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/mkb%20boekhouder%20vinder.jpg',
      alt: 'Boekhouder voor het MKB die meegroeit met jouw onderneming.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Op zoek naar een boekhouder die meegroeit met jouw MKB-bedrijf? Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.',
      ctaHref: '/boekhouder-mkb',
      ctaLabel: 'Vind een boekhouder voor MKB',
    }),
  },
  {
    slug: 'boekhouding-uitbesteden',
    path: '/boekhouding-uitbesteden',
    relatedSlugs: ['boekhouder-kosten', 'boekhouder-vinden', 'boekhouder-zzp', 'btw-aangifte-uitbesteden'],
    metaTitle: 'Boekhouding uitbesteden? Kosten & voordelen',
    metaDescription:
      'Je boekhouding geheel of gedeeltelijk uitbesteden? Ontdek de kosten, voordelen en mogelijkheden voor zzp, VOF, BV en MKB. Vraag vrijblijvend hulp aan.',
    title: 'Boekhouding uitbesteden: meer tijd voor je onderneming',
    excerpt:
      'Meer tijd voor je onderneming. Minder tijd voor administratie. Volledig of gedeeltelijk uitbesteden vanaf €100 per maand voor zzp.',
    keywords:
      'boekhouding uitbesteden, administratie uitbesteden, boekhouding laten doen, zelf boekhouden of uitbesteden, kosten boekhouding uitbesteden',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/boekhouding%20uitbesteden.jpg',
      alt: 'Boekhouding uitbesteden: meer tijd voor je onderneming.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Overweeg je je boekhouding geheel of gedeeltelijk uit te besteden? Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.',
      ctaHref: '/boekhouding-uitbesteden',
      ctaLabel: 'Besteed mijn boekhouding uit',
    }),
  },
  {
    slug: 'boekhouder-overstappen',
    path: '/boekhouder-overstappen',
    relatedSlugs: ['boekhouder-vinden', 'boekhouder-kosten', 'online-boekhouder', 'boekhouding-uitbesteden'],
    metaTitle: 'Overstappen van boekhouder? Stappenplan & kosten',
    metaDescription:
      'Wil je overstappen naar een andere boekhouder? Ontdek hoe de overdracht werkt, waar je op moet letten en vind gratis en vrijblijvend een nieuwe boekhouder.',
    title: 'Overstappen naar een andere boekhouder',
    excerpt:
      'Niet tevreden over je huidige boekhouder? Bekijk het stappenplan, vergelijk kosten en vraag vrijblijvend hulp aan.',
    keywords:
      'overstappen boekhouder, boekhouder overstappen, andere boekhouder zoeken, nieuwe boekhouder vinden, boekhouder opzeggen, ontevreden over boekhouder',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/overstappen%20andere%20boekhouder.jpg',
      alt: 'Overstappen naar een andere boekhouder.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Niet tevreden over je huidige boekhouder? Met duidelijke afspraken kun je overstappen. Vraag gratis en vrijblijvend hulp aan bij het vinden van een nieuwe boekhouder.',
      ctaHref: '/boekhouder-overstappen',
      ctaLabel: 'Vind een nieuwe boekhouder',
    }),
  },
  {
    slug: 'online-boekhouder',
    path: '/online-boekhouder',
    relatedSlugs: ['boekhouder-vinden', 'boekhouder-kosten', 'boekhouding-uitbesteden', 'boekhouder-zzp'],
    metaTitle: 'Online boekhouder vinden voor ZZP, BV en MKB',
    metaDescription:
      'Op zoek naar een online boekhouder? Regel je boekhouding digitaal, bekijk indicatieve kosten en vraag gratis en vrijblijvend hulp aan voor je onderneming.',
    title: 'Online boekhouder vinden voor jouw onderneming',
    excerpt:
      'Regel je boekhouding digitaal, waar je ook werkt. Vraag gratis en vrijblijvend hulp aan bij het vinden van een online boekhouder.',
    keywords:
      'online boekhouder, online boekhouder zzp, digitale boekhouder, online boekhoudservice, online administratiekantoor, boekhouder op afstand',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/online%20een%20boekhouder%20vinden.jpg',
      alt: 'Online boekhouder vinden voor digitale samenwerking.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Regel je boekhouding digitaal, waar je ook werkt. Via FactuurBaas vraag je gratis en vrijblijvend hulp aan bij het vinden van een online boekhouder.',
      ctaHref: '/online-boekhouder',
      ctaLabel: 'Vind een online boekhouder',
    }),
  },
  {
    slug: 'btw-aangifte-uitbesteden',
    path: '/btw-aangifte-uitbesteden',
    relatedSlugs: ['boekhouding-uitbesteden', 'boekhouder-vinden', 'boekhouder-kosten', 'boekhouder-zzp'],
    metaTitle: 'Btw-aangifte uitbesteden? Kosten & mogelijkheden',
    metaDescription:
      'Je btw-aangifte laten doen door een boekhouder? Ontdek de kosten, voordelen en mogelijkheden voor zzp, VOF en BV. Vraag gratis en vrijblijvend hulp aan.',
    title: 'Btw-aangifte uitbesteden aan een boekhouder',
    excerpt:
      'Minder administratieve werkzaamheden. Meer tijd voor je onderneming. Ondersteuning bij btw-aangifte of bredere boekhouding.',
    keywords:
      'btw-aangifte uitbesteden, btw-aangifte laten doen, boekhouder btw-aangifte, alleen btw-aangifte uitbesteden, hulp bij btw-aangifte',
    image: {
      url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/btw%20aangifte%20uitbesteden.jpg',
      alt: 'Btw-aangifte uitbesteden aan een boekhouder.',
    },
    datePublished: '2026-11-26',
    dateModified: '2026-11-26',
    faq: [],
    content: stubContent({
      intro:
        'Wil je je btw-aangifte laten verzorgen door een boekhouder? Via FactuurBaas vraag je gratis en vrijblijvend hulp aan.',
      ctaHref: '/btw-aangifte-uitbesteden',
      ctaLabel: 'Laat mijn btw-aangifte verzorgen',
    }),
  },
];
