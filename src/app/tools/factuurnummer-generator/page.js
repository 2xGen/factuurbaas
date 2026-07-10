import ToolGatePage from '@/components/tools/ToolGatePage';
import { getFactuurnummerFaqSchema } from '@/lib/factuurnummerGenerator';
import FactuurnummerGeneratorSeoContent from '@/components/tools/FactuurnummerGeneratorSeoContent';

export const metadata = {
  title: 'Factuurnummer maken | Gratis factuurnummer generator voor zzp\'ers',
  description:
    'Maak gratis een uniek factuurnummer voor je facturen. Kies jaar, voorvoegsel en startnummer. Voorbeelden: 2026-001, FACT-2026-001. Direct gebruiken in de factuur maker.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/factuurnummer-generator' },
};

const TOOL_HREF = '/tools/factuurnummer-generator/maken';

export default function FactuurnummerGeneratorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Factuurnummer generator"
      h1="Maak automatisch een professioneel factuurnummer"
      intro="Genereer eenvoudig een uniek factuurnummer voor je facturen. Kies een jaar, voorvoegsel en startnummer — en gebruik het direct in de gratis factuur maker."
      introExtra="Elke factuur moet een uniek en opeenvolgend nummer hebben. Met onze generator maak je in seconden een professioneel factuurnummer zoals FACT-2026-001."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Kopieer of gebruik in factuur maker',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open generator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getFactuurnummerFaqSchema()}
    >
      <FactuurnummerGeneratorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
