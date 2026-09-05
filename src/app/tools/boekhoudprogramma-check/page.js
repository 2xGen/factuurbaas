import ToolGatePage from '@/components/tools/ToolGatePage';
import BoekhoudprogrammaCheckSeoContent from '@/components/tools/BoekhoudprogrammaCheckSeoContent';
import { getBoekhoudCheckFaqSchema } from '@/lib/boekhoudprogrammaCheck';

export const metadata = {
  title: 'Welk boekhoudprogramma past bij jou? | FactuurBaas',
  description:
    "Welk boekhoudprogramma past bij jou als zzp'er? Doe de korte check en ontdek of je een factuurtool, basissoftware, boekhoudprogramma of boekhouder nodig hebt.",
  keywords:
    "welk boekhoudprogramma zzp, boekhoudprogramma kiezen zzp, boekhoudprogramma nodig zzp, beste boekhoudprogramma zzp, boekhoudprogramma zzp vergelijken",
  alternates: { canonical: 'https://factuurbaas.nl/tools/boekhoudprogramma-check' },
};

const TOOL_HREF = '/tools/boekhoudprogramma-check/berekenen';

export default function BoekhoudprogrammaCheckGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Boekhoudprogramma-check"
      h1="Welk boekhoudprogramma past bij jou als zzp'er?"
      intro="Weet je niet of je een boekhoudprogramma nodig hebt, en zo ja welk type? Beantwoord een paar korte vragen en ontdek welke oplossing waarschijnlijk het beste bij jouw administratie past."
      introExtra="Je krijgt geen ingewikkeld adviesrapport. Je ziet direct of een eenvoudige factuurtool voldoende is, of een basis- of compleet boekhoudprogramma beter past, of een boekhouder naast software verstandig kan zijn — en waarom. Deze check geeft een indicatie; het is geen persoonlijk financieel of fiscaal advies."
      trustPoints={[
        'Gratis',
        '8 korte vragen',
        'Direct resultaat',
        'Geen account nodig',
        'Indicatie, geen fiscaal advies',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Doe de check"
      secondaryHref="/blogs/beste-boekhoudprogramma-zzp"
      secondaryCtaLabel="Vergelijk programma's"
      faqSchema={getBoekhoudCheckFaqSchema()}
    >
      <BoekhoudprogrammaCheckSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
