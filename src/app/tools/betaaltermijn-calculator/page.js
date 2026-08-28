import ToolGatePage from '@/components/tools/ToolGatePage';
import { getBetaaltermijnFaqSchema } from '@/lib/betaaltermijnCalculator';
import BetaaltermijnCalculatorSeoContent from '@/components/tools/BetaaltermijnCalculatorSeoContent';

export const metadata = {
  title: 'Betaaltermijn calculator: vervaldatum factuur berekenen | FactuurBaas',
  description:
    'Bereken eenvoudig de vervaldatum van je factuur. Vul factuurdatum en betalingstermijn in en ontdek direct wanneer je factuur betaald moet zijn. Gratis, zonder account.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/betaaltermijn-calculator' },
};

const TOOL_HREF = '/tools/betaaltermijn-calculator/berekenen';

export default function BetaaltermijnCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Betaaltermijn calculator"
      h1="Betaaltermijn calculator: bereken de vervaldatum van je factuur"
      intro="Bereken eenvoudig de vervaldatum van je factuur. Vul de factuurdatum en betalingstermijn in en ontdek direct wanneer je factuur betaald moet zijn."
      introExtra="Handig bij betalingstermijnen van bijvoorbeeld 7, 14 of 30 dagen. Gratis, zonder account en direct resultaat."
      trustPoints={['Gratis', 'Geen account nodig', 'Direct resultaat']}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open betaaltermijn calculator"
      secondaryHref="/create-invoice"
      secondaryCtaLabel="Maak gratis factuur"
      faqSchema={getBetaaltermijnFaqSchema()}
    >
      <BetaaltermijnCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
