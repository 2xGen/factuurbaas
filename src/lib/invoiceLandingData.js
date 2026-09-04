export const layoutPreviews = [
  {
    id: 'minimalist',
    name: 'Minimalistisch',
    previewStyle: { bg: 'bg-white', text: 'text-gray-700', border: 'border-gray-200', accent: 'bg-black' },
  },
  {
    id: 'modern',
    name: 'Modern',
    previewStyle: { bg: 'bg-slate-800', text: 'text-gray-100', border: 'border-slate-600', accent: 'bg-sky-400' },
  },
  {
    id: 'corporate',
    name: 'Zakelijk',
    previewStyle: { bg: 'bg-blue-50', text: 'text-blue-800', border: 'border-blue-300', accent: 'bg-blue-700' },
  },
  {
    id: 'creative',
    name: 'Creatief',
    previewStyle: {
      bg: 'bg-gradient-to-tr from-purple-500 via-pink-500 to-red-500',
      text: 'text-white',
      border: 'border-white/50',
      accent: 'bg-yellow-300',
    },
  },
];

export const popularTemplates = [
  {
    slug: 'zzp',
    title: 'ZZP factuur',
    description: 'Standaard factuur voor zelfstandigen met btw.',
    href: '/factuur-template/zzp',
    tag: 'Populair',
  },
  {
    slug: 'bouw',
    title: 'Bouw factuur',
    description: 'Voor aannemers, schilders en klusbedrijven.',
    href: '/factuur-template/bouw',
    tag: 'Bouw',
  },
  {
    slug: 'uren',
    title: 'Uren factuur',
    description: 'Factureer gewerkte uren met uurtarief.',
    href: '/factuur-template/uren',
    tag: 'Uren',
  },
  {
    slug: 'consultant',
    title: 'Consultant factuur',
    description: 'Gratis template voor advies, projectprijs of uurtarief.',
    href: '/factuur-template/consultant',
    tag: 'Diensten',
  },
  {
    slug: 'freelance',
    title: 'Freelance factuur',
    description: 'Voor designers, developers en creatieven.',
    href: '/factuur-template/freelance',
    tag: 'Freelance',
  },
  {
    slug: 'zonder-btw',
    title: 'Factuur zonder btw',
    description: 'Voor KOR of btw-vrijgestelde ondernemers.',
    href: '/factuur-template/zonder-btw',
    tag: 'KOR',
  },
];

export const seoLandingLinks = [
  { label: 'Factuur maken ZZP', href: '/factuur-maken/zzp' },
  { label: 'Factuur voorbeeld', href: '/factuur-voorbeeld' },
  { label: 'Factuur template', href: '/factuur-template' },
  { label: 'Factuur maken zonder KvK', href: '/factuur-maken/zonder-kvk' },
  { label: 'Factuur maken particulier', href: '/factuur-maken/particulier' },
];

export const trustPoints = [
  { label: '1.000+ facturen gemaakt' },
  { label: 'Gratis zonder account' },
  { label: 'Direct PDF downloaden' },
  { label: 'Geen abonnement' },
];

export const audienceTags = ["ZZP'ers", 'Freelancers', 'Kleine ondernemers'];
