import LandingHubPage from '@/components/landing/LandingHubPage';
import { getOfferteTemplateHubLinks } from '@/lib/offerteVoorbeeldLandingPages';

export const metadata = {
  title: 'Offerte Template – Gratis Download | FactuurBaas',
  description:
    'Gratis offerte templates voor zzp, diensten, bouw, freelance, horeca en marketing. Maak online een professionele offerte en download direct als PDF.',
  alternates: { canonical: 'https://factuurbaas.nl/offerte-template' },
};

export default function OfferteTemplateHubPage() {
  return (
    <LandingHubPage
      title="Offerte templates"
      description="Kies een professionele offerte template en pas hem aan in onze gratis offerte maker. Geen Word of Excel nodig."
      linksTitle="Kies je template"
      linksDescription="Zes offerte templates voor verschillende branches. Open een template, vul je gegevens in en download direct als PDF."
      linkFooterLabel="Gebruik template"
      showPreview
      previewBadge="Template"
      links={getOfferteTemplateHubLinks()}
      ctaHref="/tools/offerte-maker/maken"
      ctaLabel="Maak gratis offerte"
      relatedLinks={[
        { label: 'Offerte maker', href: '/tools/offerte-maker' },
        { label: 'Offerte voorbeelden', href: '/offerte-voorbeeld' },
        { label: 'Verschil offerte en factuur', href: '/blogs/verschil-factuur-offerte' },
      ]}
      showFooterCtas={false}
      footerPrimaryHref="/tools/offerte-maker/maken"
      footerPrimaryLabel="Maak gratis offerte"
    />
  );
}
