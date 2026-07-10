import ToolGatePage from '@/components/tools/ToolGatePage';
import { getBetaaltermijnFaqSchema } from '@/lib/betaaltermijnCalculator';
import BetaaltermijnCalculatorSeoContent from '@/components/tools/BetaaltermijnCalculatorSeoContent';

export const metadata = {
  title: 'Betaaltermijn berekenen | Vervaldatum factuur calculator',
  description:
    'Bereken gratis de vervaldatum van je factuur. Vul factuurdatum en betalingstermijn in (7, 14 of 30 dagen) en zie direct wanneer je klant moet betalen.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/betaaltermijn-calculator' },
};

const TOOL_HREF = '/tools/betaaltermijn-calculator/berekenen';

export default function BetaaltermijnCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Betaaltermijn calculator"
      h1="Bereken wanneer je factuur betaald moet zijn"
      intro="Bereken automatisch de vervaldatum van je factuur op basis van de factuurdatum en betalingstermijn."
      introExtra="Ideaal als je vandaag een factuur verstuurt en wilt weten wanneer de betaling uiterlijk binnen moet zijn — bijvoorbeeld 14 dagen na de factuurdatum."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        '7, 14 of 30 dagen',
        'Direct door naar factuur maker',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open calculator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getBetaaltermijnFaqSchema()}
    >
      <BetaaltermijnCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
