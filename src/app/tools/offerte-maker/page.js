import ToolGatePage from '@/components/tools/ToolGatePage';
import OfferteMakerSeoContent from '@/components/tools/OfferteMakerSeoContent';
import { buildGuideItemListSchema, getGuideLinksBySlugs } from '@/lib/guideData';
import { getOfferteFaqSchema } from '@/lib/offerteLanding';

export const metadata = {
  title: 'Gratis Offerte Maken Online | Offerte Maker - FactuurBaas',
  description:
    'Maak gratis online een professionele offerte met FactuurBaas. Bereken automatisch btw, download direct als PDF en gebruik de offerte maker zonder account.',
  keywords:
    'offerte maken, gratis offerte maken, online offerte maken, offerte maker, offerte maken online, offerte maken zzp, offerte generator, offerte PDF, offerte template, offerte sjabloon, professionele offerte maken, offerte programma gratis, offerte maken tool',
  alternates: { canonical: 'https://factuurbaas.nl/tools/offerte-maker' },
};

const TOOL_HREF = '/tools/offerte-maker/maken';
const OFFERTE_GUIDES = getGuideLinksBySlugs([
  'hoe-maak-je-een-offerte',
  'wat-moet-er-op-een-offerte-staan',
  'offerte-voorbeeld',
  'offerte-maken-in-pdf',
  'offerte-maken-voor-zzper',
  'geldigheid-van-een-offerte',
  'wanneer-is-een-offerte-bindend',
  'offerte-accepteren-wat-gebeurt-er-na',
  'offerte-omzetten-naar-factuur',
  'digitale-offertes-versturen',
  'offerte-aanpassen',
]);

export default function OfferteMakerGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Offerte maker"
      h1="Gratis offerte maken online — direct als PDF"
      intro={
        <>
          Maak <strong>gratis online een professionele offerte</strong>. Vul je bedrijfsgegevens,
          klantgegevens, werkzaamheden en prijzen in en download je offerte direct als PDF. Geen
          account nodig.
        </>
      }
      trustPoints={[
        'Gratis offerte maken',
        'Geen account nodig',
        'Automatische btw-berekening',
        'Direct als PDF downloaden',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Maak gratis offerte"
      secondaryHref="/create-invoice"
      secondaryCtaLabel="Maak factuur"
      footerTitle="Klaar om te starten?"
      footerIntro="Open de gratis offerte maker en maak direct je offerte."
      faqSchema={getOfferteFaqSchema()}
      extraSchemas={[
        buildGuideItemListSchema(OFFERTE_GUIDES, 'Gidsen over offertes'),
      ]}
    >
      <OfferteMakerSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
