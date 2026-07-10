import LandingHubPage from '@/components/landing/LandingHubPage';
import { seoLandingLinks } from '@/lib/invoiceLandingData';

export const metadata = {
  title: 'Factuur Maken – Gratis Online | FactuurBaas',
  description:
    "Maak gratis een factuur online. Geen account nodig. Direct PDF downloaden. Voor zzp'ers, freelancers en kleine ondernemers.",
  alternates: { canonical: 'https://factuurbaas.nl/factuur-maken' },
};

const links = [
  { label: 'Factuur maken gratis', href: '/create-invoice', description: 'Direct starten met de factuurtool' },
  ...seoLandingLinks.filter((l) => l.href.startsWith('/factuur-maken')),
  { label: 'Factuur maken ZZP', href: '/blogs/factuur-maken-zzp', description: 'Stappenplan en uitleg' },
];

export default function FactuurMakenHubPage() {
  return (
    <LandingHubPage
      title="Factuur maken"
      description="Alles wat je nodig hebt om snel een professionele factuur te maken. Gratis, zonder account, direct als PDF."
      links={links}
    />
  );
}
