import ToolGatePage from '@/components/tools/ToolGatePage';
import { getUurtariefFaqSchema } from '@/lib/uurtariefCalculator';
import UurtariefCalculatorSeoContent from '@/components/tools/UurtariefCalculatorSeoContent';

export const metadata = {
  title: "Uurtarief berekenen voor zzp'ers | Gratis uurtarief calculator",
  description:
    "Bereken eenvoudig welk uurtarief je als zzp'er nodig hebt. Vul je gewenste inkomen, kosten en beschikbare uren in en ontdek welk tarief je per uur moet vragen.",
  alternates: { canonical: 'https://factuurbaas.nl/tools/uurtarief-calculator' },
};

const TOOL_HREF = '/tools/uurtarief-calculator/maken';

export default function UurtariefCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Uurtarief calculator"
      h1="Uurtarief calculator voor zzp'ers"
      intro="Bereken eenvoudig welk uurtarief je als zzp'er nodig hebt om je gewenste inkomen te behalen."
      introExtra="Vul je gewenste inkomen, kosten en beschikbare uren in en ontdek welk tarief je per uur moet vragen."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Bereken je minimale uurtarief',
        "Voor zzp'ers",
        'Gebaseerd op jouw situatie',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open uurtarief calculator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak gratis factuur"
      faqSchema={getUurtariefFaqSchema()}
    >
      <UurtariefCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
