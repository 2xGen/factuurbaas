import ToolGatePage from '@/components/tools/ToolGatePage';
import BoekhoudingUitbestedenSeoContent from '@/components/tools/BoekhoudingUitbestedenSeoContent';
import { getOutsourceFaqSchema } from '@/lib/boekhoudingUitbestedenCalculator';

export const metadata = {
  title: 'Zelf boekhouden of uitbesteden? Gratis calculator',
  description:
    'Zelf boekhouden of uitbesteden? Bereken hoeveel tijd en geld je administratie kost en vergelijk dit met de kosten van een boekhouder.',
  alternates: { canonical: 'https://factuurbaas.nl/tools/boekhouding-uitbesteden-calculator' },
};

const TOOL_HREF = '/tools/boekhouding-uitbesteden-calculator/berekenen';

export default function BoekhoudingUitbestedenGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Boekhouding uitbesteden calculator"
      h1="Zelf boekhouden of uitbesteden? Bereken wat voordeliger is"
      intro="Hoeveel tijd besteed jij iedere maand aan het verwerken van facturen en je boekhouding? En zou het voordeliger zijn om een boekhouder in te schakelen?"
      introExtra="Met de gratis boekhouding uitbesteden calculator van FactuurBaas bereken je hoeveel je eigen administratietijd waard is en vergelijk je dit met de geschatte kosten van een boekhouder."
      trustPoints={['Gratis', 'Geen account nodig', 'Direct resultaat']}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open de gratis calculator"
      secondaryHref="/boekhouder-vinden"
      secondaryCtaLabel="Vind een boekhouder"
      footerTitle="Klaar om je boekhoudkosten te vergelijken?"
      footerIntro="Ontdek hoeveel tijd je aan je administratie besteedt en of uitbesteden interessant kan zijn."
      footerCtaLabel="Open de gratis calculator"
      faqSchema={getOutsourceFaqSchema()}
    >
      <BoekhoudingUitbestedenSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
