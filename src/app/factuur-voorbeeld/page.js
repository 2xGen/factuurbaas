import LandingHubPage from '@/components/landing/LandingHubPage';
import { getVoorbeeldHubLinks } from '@/lib/voorbeeldLandingPages';

export const metadata = {
  title: 'Factuur Voorbeeld – Gratis Voorbeelden | FactuurBaas',
  description:
    'Bekijk gratis factuur voorbeelden voor zzp, bouw, uren, consultant, freelance en zonder btw. Zie hoe een professionele factuur eruitziet en maak je eigen versie.',
  alternates: { canonical: 'https://factuurbaas.nl/factuur-voorbeeld' },
};

export default function FactuurVoorbeeldHubPage() {
  return (
    <LandingHubPage
      title="Factuur voorbeelden"
      description="Bekijk hoe een professionele factuur eruitziet — per type werk. Elk voorbeeld is anders ingevuld, zodat je ziet wat past bij jouw situatie."
      linksTitle="Kies een voorbeeld"
      linksDescription="Zes ingevulde factuurvoorbeelden. Bekijk het voorbeeld en maak direct je eigen versie in de gratis tool."
      linkFooterLabel="Bekijk voorbeeld"
      showPreview
      links={getVoorbeeldHubLinks()}
      ctaHref="/create-invoice"
      ctaLabel="Maak gratis factuur"
      relatedLinks={[
        { label: 'Gratis factuur maken', href: '/create-invoice' },
        { label: 'BTW calculator', href: '/tools/btw-calculator' },
        { label: 'Factuur maken ZZP', href: '/blogs/factuur-maken-zzp' },
        { label: 'Factuur template', href: '/factuur-template' },
      ]}
      showFooterCtas={false}
    />
  );
}
