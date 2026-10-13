export const ZAKELIJKE_LEASE_COMPARE_PATH = '/zakelijke-lease-vergelijken';

export function isZakelijkeLeaseGuideSlug(slug) {
  return ZAKELIJKE_LEASE_SLUGS.includes(slug);
}

export function getZakelijkeLeaseArticleBreadcrumbs(articleTitle) {
  return [
    { name: 'Home', href: '/' },
    { name: 'Gidsen', href: '/blogs' },
    { name: 'Zakelijke lease', href: '/blogs?pillar=zakelijke-lease' },
    { name: articleTitle },
  ];
}

export const ZAKELIJKE_LEASE_SLUGS = [
  'zakelijk-auto-leasen-zzp',
  'financial-lease-vs-operational-lease',
  'financial-lease-zzp',
  'operational-lease-zzp',
  'zakelijke-lease-aftrekbaar',
  'zakelijke-lease-zonder-jaarrekening',
  'auto-zakelijk-of-prive-zzp',
  'bijtelling-leaseauto-zzp',
  'zakelijke-lease-kosten',
];

export const ZAKELIJKE_LEASE_GUIDES = [
  { slug: 'zakelijk-auto-leasen-zzp', label: "Zakelijk auto leasen als zzp'er" },
  { slug: 'financial-lease-vs-operational-lease', label: 'Financial lease vs operational lease' },
  { slug: 'financial-lease-zzp', label: "Financial lease voor zzp'ers" },
  { slug: 'operational-lease-zzp', label: "Operational lease voor zzp'ers" },
  { slug: 'zakelijke-lease-aftrekbaar', label: 'Zakelijke lease en aftrek' },
  { slug: 'zakelijke-lease-zonder-jaarrekening', label: 'Zakelijke lease zonder jaarcijfers' },
  { slug: 'auto-zakelijk-of-prive-zzp', label: "Auto zakelijk of privé als zzp'er" },
  { slug: 'bijtelling-leaseauto-zzp', label: "Bijtelling leaseauto zzp" },
  { slug: 'zakelijke-lease-kosten', label: 'Kosten van zakelijke lease' },
];
