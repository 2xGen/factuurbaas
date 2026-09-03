import ToolGatePage from '@/components/tools/ToolGatePage';
import { getFactuurnummerFaqSchema } from '@/lib/factuurnummerGenerator';
import FactuurnummerGeneratorSeoContent from '@/components/tools/FactuurnummerGeneratorSeoContent';

export const metadata = {
  title: "Factuurnummer maken: voorbeelden en regels voor zzp'ers",
  description:
    'Hoe maak je een goed factuurnummer? Bekijk voorbeelden, regels en handige nummering voor facturen en genereer direct een uniek factuurnummer.',
  keywords:
    'factuurnummer maken, factuurnummer voorbeeld, factuurnummer generator, factuurnummering zzp, uniek factuurnummer, FACT-2026-001',
  alternates: { canonical: 'https://factuurbaas.nl/tools/factuurnummer-generator' },
};

const TOOL_HREF = '/tools/factuurnummer-generator/maken';

export default function FactuurnummerGeneratorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Factuurnummer generator"
      h1="Factuurnummer maken: voorbeelden en uitleg"
      intro="Een factuurnummer is een uniek nummer waarmee je een factuur herkent in je administratie. Op deze pagina vind je voorbeelden, regels en een gratis generator."
      introExtra="Kies zelf een logisch formaat — bijvoorbeeld 2026-001 of FACT-2026-001 — en genereer direct een uniek factuurnummer."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Voorbeelden en regels',
        'Kopieer of gebruik in factuur maker',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Maak direct een factuurnummer"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getFactuurnummerFaqSchema()}
    >
      <FactuurnummerGeneratorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
