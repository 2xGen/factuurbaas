import ToolGatePage from '@/components/tools/ToolGatePage';
import { getUurtariefNaarInkomenFaqSchema } from '@/lib/uurtariefNaarInkomen';
import UurtariefNaarInkomenSeoContent from '@/components/tools/UurtariefNaarInkomenSeoContent';

export const metadata = {
  title: 'Uurtarief naar maandinkomen berekenen | Gratis calculator voor zzp\'ers',
  description:
    "Bereken hoeveel je per maand verdient met je uurtarief. Vul tarief, factureerbare uren en kosten in en zie direct je omzet en geschatte winst. Gratis voor zzp'ers.",
  alternates: { canonical: 'https://factuurbaas.nl/tools/uurtarief-naar-inkomen' },
};

const TOOL_HREF = '/tools/uurtarief-naar-inkomen/berekenen';

export default function UurtariefNaarInkomenGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Uurtarief naar inkomen"
      h1="Bereken je inkomen op basis van je uurtarief"
      intro="Vul je uurtarief en aantal factureerbare uren in en ontdek hoeveel omzet je per maand kunt maken als zzp'er."
      introExtra="Ideaal als je wilt weten wat €50, €75 of €100 per uur oplevert bij jouw werkuren — inclusief een schatting van je winst na zakelijke kosten."
      trustPoints={[
        'Gratis',
        'Geen account nodig',
        'Direct resultaat',
        'Bereken je maandelijkse omzet',
        "Voor zzp'ers",
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open calculator"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getUurtariefNaarInkomenFaqSchema()}
    >
      <UurtariefNaarInkomenSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
