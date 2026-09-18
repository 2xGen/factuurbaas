import { articles } from '@/lib/blogData';

export const HYPOTHEEK_HUB_PATH = '/blogs/hypotheek-als-zzper';
export const HYPOTHEEK_HUB_TITLE = "Hypotheek als zzp'er";

export const HYPOTHEEK_HUB_IMAGE = {
  url: 'https://mtadtabmwahpxmpquovg.supabase.co/storage/v1/object/public/Factuurbaas/Hypotheek%20als%20zzper.jpg',
  alt: "Hypotheek als zzp'er: overzicht van inkomen, cijfers, berekenen en advies.",
};

/** All detailed guides in the hypotheek cluster (excludes the hub itself). */
export const HYPOTHEEK_GUIDE_SLUGS = [
  'hypotheek-als-zzper-hoe-werkt-het',
  'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
  'hypotheek-berekenen-als-zzper',
  'welk-inkomen-telt-voor-hypotheek-als-zzper',
  'winst-uit-onderneming-voor-hypotheek',
  'hypotheek-met-wisselend-inkomen-als-zzper',
  'jaarcijfers-nodig-voor-hypotheek-als-zzper',
  'hypotheek-zzp-zonder-3-jaar-cijfers',
  'hoe-lang-zzper-zijn-voor-hypotheek',
  'hypotheek-voor-startende-zzpers',
  'hypotheek-met-eenmanszaak',
  'hypotheekadviseur-voor-zzpers',
];

export const HYPOTHEEK_HUB_SECTIONS = [
  {
    id: 'basis',
    title: 'Basis',
    slugs: [
      'hypotheek-als-zzper-hoe-werkt-het',
      'hoeveel-hypotheek-kan-ik-krijgen-als-zzper',
      'hypotheek-berekenen-als-zzper',
    ],
  },
  {
    id: 'inkomen',
    title: 'Inkomen en winst',
    slugs: [
      'welk-inkomen-telt-voor-hypotheek-als-zzper',
      'winst-uit-onderneming-voor-hypotheek',
      'hypotheek-met-wisselend-inkomen-als-zzper',
    ],
  },
  {
    id: 'cijfers',
    title: 'Cijfers en ondernemersduur',
    slugs: [
      'jaarcijfers-nodig-voor-hypotheek-als-zzper',
      'hypotheek-zzp-zonder-3-jaar-cijfers',
      'hoe-lang-zzper-zijn-voor-hypotheek',
      'hypotheek-voor-startende-zzpers',
    ],
  },
  {
    id: 'vorm',
    title: 'Ondernemingsvorm',
    slugs: ['hypotheek-met-eenmanszaak'],
  },
  {
    id: 'advies',
    title: 'Advies',
    slugs: ['hypotheekadviseur-voor-zzpers'],
  },
];

export function isHypotheekGuideSlug(slug) {
  return HYPOTHEEK_GUIDE_SLUGS.includes(slug);
}

export function getHypotheekGuideArticles() {
  return HYPOTHEEK_GUIDE_SLUGS.map((slug) => articles.find((a) => a.slug === slug)).filter(Boolean);
}

export function getHypotheekHubSections() {
  return HYPOTHEEK_HUB_SECTIONS.map((section) => ({
    ...section,
    articles: section.slugs
      .map((slug) => articles.find((a) => a.slug === slug))
      .filter(Boolean),
  }));
}

/** Visual + JSON-LD trail for the hub page. */
export function getHypotheekHubBreadcrumbs() {
  return [
    { name: 'FactuurBaas', href: '/' },
    { name: 'Hypotheek', href: '/blogs?pillar=hypotheek' },
    { name: HYPOTHEEK_HUB_TITLE },
  ];
}

/** Visual + JSON-LD trail for hypotheek detail articles. */
export function getHypotheekArticleBreadcrumbs(articleTitle) {
  return [
    { name: 'FactuurBaas', href: '/' },
    { name: 'Hypotheek', href: '/blogs?pillar=hypotheek' },
    { name: HYPOTHEEK_HUB_TITLE, href: HYPOTHEEK_HUB_PATH },
    { name: articleTitle },
  ];
}
