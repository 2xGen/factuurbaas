import ToolGatePage from '@/components/tools/ToolGatePage';
import { getKorFaqSchema } from '@/lib/korCalculator';
import KorCalculatorSeoContent from '@/components/tools/KorCalculatorSeoContent';

export const metadata = {
  title: 'KOR calculator | Kleineondernemersregeling berekenen voor zzp\'ers',
  description:
    'Bereken gratis of de kleineondernemersregeling (KOR) bij jouw omzet past. Check of je onder de €20.000-grens blijft en of btw-vrijstelling interessant is.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/kor-calculator' },
};

const TOOL_HREF = '/tools/kor-calculator/berekenen';

export default function KorCalculatorGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="KOR calculator"
      h1="Bereken of de kleineondernemersregeling (KOR) bij jou past"
      intro="Bereken of de kleineondernemersregeling (KOR) mogelijk interessant is voor jouw onderneming op basis van je verwachte jaaromzet."
      introExtra="De KOR geldt bij maximaal €20.000 omzet per jaar. Je rekent dan geen btw aan klanten en doet geen btw-aangifte — maar mag ook geen btw aftrekken."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        "Voor zzp'ers en starters",
        'Indicatie op basis van omzetgrens',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open KOR calculator"
      secondaryHref="/tools/btw-calculator"
      secondaryCtaLabel="BTW calculator"
      faqSchema={getKorFaqSchema()}
    >
      <KorCalculatorSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
