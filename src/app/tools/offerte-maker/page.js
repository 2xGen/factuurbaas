import ToolGatePage from '@/components/tools/ToolGatePage';
import OfferteMakerSeoContent from '@/components/tools/OfferteMakerSeoContent';
import { buildGuideItemListSchema, getGuideLinksByCluster } from '@/lib/guideData';
import { getOfferteFaqSchema } from '@/lib/offerteLanding';

export const metadata = {
  title: 'Offerte maken: gratis online offerte maker | FactuurBaas',
  description:
    "Gratis offerte maken als zzp'er of ondernemer? Maak online een professionele offerte, download direct als PDF en stuur hem naar je klant. Geen account nodig.",
  alternates: { canonical: 'https://factuurbaas.nl/tools/offerte-maker' },
};

const TOOL_HREF = '/tools/offerte-maker/maken';
const OFFERTE_GUIDES = getGuideLinksByCluster('offertes');

export default function OfferteMakerGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Offerte maker"
      h1="Gratis offerte maken online — direct als PDF"
      intro="Maak gratis een professionele offerte online. Vul je bedrijfsgegevens, klantgegevens, werkzaamheden en prijzen in en download je offerte direct als PDF. Geen account nodig."
      trustPoints={['Gratis offerte maken', 'Geen account nodig', 'Direct PDF downloaden']}
      toolHref={TOOL_HREF}
      toolCtaLabel="Maak gratis offerte"
      secondaryHref="/create-invoice"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getOfferteFaqSchema()}
      extraSchemas={[
        buildGuideItemListSchema(OFFERTE_GUIDES, 'Gidsen over offertes'),
      ]}
    >
      <OfferteMakerSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
