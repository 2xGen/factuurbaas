import LandingHubPage from '@/components/landing/LandingHubPage';
import { getOfferteVoorbeeldHubLinks } from '@/lib/offerteVoorbeeldLandingPages';

export const metadata = {
  title: 'Offerte Voorbeeld – Gratis Voorbeelden | FactuurBaas',
  description:
    'Bekijk gratis offerte voorbeelden voor zzp, diensten, bouw, freelance, horeca en marketing. Zie hoe een professionele offerte eruitziet en maak je eigen versie.',
  alternates: { canonical: 'https://factuurbaas.nl/offerte-voorbeeld' },
};

export default function OfferteVoorbeeldHubPage() {
  return (
    <LandingHubPage
      title="Offerte voorbeelden"
      description="Bekijk hoe een professionele offerte eruitziet — per type werk. Elk voorbeeld is anders ingevuld, zodat je ziet wat past bij jouw situatie."
      linksTitle="Kies een voorbeeld"
      linksDescription="Zes ingevulde offertevoorbeelden. Bekijk het voorbeeld en maak direct je eigen versie in de gratis offerte maker."
      linkFooterLabel="Bekijk voorbeeld"
      showPreview
      previewBadge="Offerte"
      links={getOfferteVoorbeeldHubLinks()}
      ctaHref="/tools/offerte-maker/maken"
      ctaLabel="Maak gratis offerte"
      relatedLinks={[
        { label: 'Offerte maker', href: '/tools/offerte-maker' },
        { label: 'Factuur maken', href: '/tools/factuur-maken' },
        { label: 'Verschil offerte en factuur', href: '/blogs/verschil-factuur-offerte' },
      ]}
      showFooterCtas={false}
      footerPrimaryHref="/tools/offerte-maker/maken"
      footerPrimaryLabel="Maak gratis offerte"
    />
  );
}
