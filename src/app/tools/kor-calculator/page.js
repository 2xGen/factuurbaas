import ToolGatePage from '@/components/tools/ToolGatePage';
import { getKorFaqSchema } from '@/lib/korCalculator';
import KorCalculatorSeoContent from '@/components/tools/KorCalculatorSeoContent';

export const metadata = {
  title: 'KOR berekenen: doe de gratis KOR check | €20.000 omzet',
  description:
    "KOR berekenen als zzp'er? Doe de gratis KOR check en bekijk of je omzet onder de €20.000 grens blijft. Inclusief uitleg over voorwaarden en btw.",
  keywords:
    'KOR berekenen, KOR check, kleineondernemersregeling, KOR calculator, €20000 omzet, KOR zzp, KOR voorwaarden, EU-KOR',
  alternates: { canonical: 'https://factuurbaas.nl/tools/kor-calculator' },
};

const TOOL_HREF = '/tools/kor-calculator/berekenen';

export default function KorCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="KOR calculator"
      h1="KOR berekenen: doe de gratis KOR check"
      intro="Wil je weten of de kleineondernemersregeling (KOR) mogelijk bij jouw onderneming past? Met deze gratis KOR check kun je je verwachte omzet vergelijken met de Nederlandse omzetgrens van €20.000 per kalenderjaar."
      introExtra="De uitkomst is een indicatie. Of je daadwerkelijk aan alle voorwaarden voor de KOR voldoet, hangt ook af van je situatie en de regels van de Belastingdienst."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Indicatie op basis van omzetgrens',
        "Voor zzp'ers en starters",
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Doe de gratis KOR check"
      secondaryHref="/tools/btw-calculator"
      secondaryCtaLabel="BTW calculator"
      faqSchema={getKorFaqSchema()}
    >
      <KorCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
