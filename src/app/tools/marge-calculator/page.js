import ToolGatePage from '@/components/tools/ToolGatePage';
import { getMargeFaqSchema } from '@/lib/margeCalculator';
import MargeCalculatorSeoContent from '@/components/tools/MargeCalculatorSeoContent';

export const metadata = {
  title: 'Marge berekenen | Gratis winstmarge calculator voor ondernemers',
  description:
    'Bereken gratis je winst en winstmarge op basis van inkoop- en verkoopprijs. Inclusief formule, rekenvoorbeelden en uitleg. Ideaal voor producten en diensten.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/marge-calculator' },
};

const TOOL_HREF = '/tools/marge-calculator/berekenen';

export default function MargeCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Marge calculator"
      h1="Bereken je winst en winstmarge"
      intro="Bereken eenvoudig hoeveel winst je maakt en welk percentage marge je hanteert op basis van je inkoop- en verkoopprijs."
      introExtra="Vul twee bedragen in en zie direct je winst in euro's en je winstmarge in procenten. Handig voor retail, webshops en ondernemers die producten doorverkopen."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Voor producten en diensten',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open marge calculator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getMargeFaqSchema()}
    >
      <MargeCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
