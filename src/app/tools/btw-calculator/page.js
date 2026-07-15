import ToolGatePage from '@/components/tools/ToolGatePage';import { buildGuideItemListSchema, getGuideLinksByCluster } from '@/lib/guideData';
import { getBtwFaqSchema } from '@/lib/btwCalculator';
import BtwCalculatorSeoContent from '@/components/tools/BtwCalculatorSeoContent';

export const metadata = {
  title: 'BTW Calculator 2026 | Bereken 21%, 9% en 0% BTW Gratis',
  description:
    "Gratis BTW calculator voor zzp'ers. Bereken eenvoudig BTW toevoegen of BTW uit een bedrag halen. Voor 21%, 9% en 0% BTW. Direct resultaat zonder account.",
  alternates: { canonical: 'https://factuurbaas.nl/tools/btw-calculator' },
};

const TOOL_HREF = '/tools/btw-calculator/berekenen';
const BTW_GUIDES = getGuideLinksByCluster('btw');

export default function BtwCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="BTW calculator"
      h1="BTW Calculator"
      intro="Bereken direct hoeveel BTW je moet toevoegen of uit een bedrag moet halen."
      introExtra="Met de gratis BTW calculator van FactuurBaas bereken je eenvoudig bedragen inclusief of exclusief BTW. Kies het BTW-tarief, vul een bedrag in en krijg direct het BTW-bedrag en totaal te zien."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        '21%, 9% en 0% BTW berekenen',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open BTW calculator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Gratis factuur maken"
      faqSchema={getBtwFaqSchema()}
      extraSchemas={[buildGuideItemListSchema(BTW_GUIDES, 'Gidsen over BTW')]}
    >
      <BtwCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
