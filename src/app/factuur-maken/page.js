import FactuurMakenLanding from '@/components/landing/FactuurMakenLanding';

export const metadata = {
  title: 'Factuur Maken – Gratis Online PDF | FactuurBaas',
  description:
    "Maak gratis een professionele factuur online. Voor zzp'ers, zonder KvK, particulier of zonder btw. Direct PDF downloaden — geen account nodig.",
  keywords:
    'factuur maken, gratis factuur maken, factuur maken zzp, online factuur maken, factuur maken zonder account, factuur pdf',
  openGraph: {
    title: 'Factuur Maken – Gratis Online PDF | FactuurBaas',
    description:
      'Maak in 2 minuten een professionele factuur. Gratis, zonder account, direct als PDF.',
    url: 'https://factuurbaas.nl/factuur-maken',
    type: 'website',
  },
  alternates: { canonical: 'https://factuurbaas.nl/factuur-maken' },
};

export default function FactuurMakenHubPage() {
  return <FactuurMakenLanding />;
}
