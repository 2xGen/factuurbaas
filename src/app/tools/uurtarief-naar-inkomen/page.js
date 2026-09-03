import ToolGatePage from '@/components/tools/ToolGatePage';
import { getUurtariefNaarInkomenFaqSchema } from '@/lib/uurtariefNaarInkomen';
import UurtariefNaarInkomenSeoContent from '@/components/tools/UurtariefNaarInkomenSeoContent';

export const metadata = {
  title: "Uurtarief berekenen: wat verdien je per maand als zzp'er?",
  description:
    "Bereken wat je uurtarief oplevert als zzp'er. Bekijk je omzet en geschatte winst bij €50, €75, €100 of een ander uurtarief.",
  keywords:
    "uurtarief berekenen, wat verdien je per maand zzp, uurtarief naar omzet, hoeveel verdien je met 75 per uur, factureerbare uren, uurtarief zzp omzet",
  alternates: { canonical: 'https://factuurbaas.nl/tools/uurtarief-naar-inkomen' },
};

const TOOL_HREF = '/tools/uurtarief-naar-inkomen/berekenen';

export default function UurtariefNaarInkomenGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Uurtarief naar inkomen"
      h1="Uurtarief berekenen: wat levert je uurtarief op?"
      intro="Wil je weten wat je als zzp'er ongeveer kunt verdienen met een bepaald uurtarief? Bereken eenvoudig hoeveel omzet en geschatte winst je per maand kunt behalen."
      introExtra="Vul bijvoorbeeld €50, €75 of €100 per uur in en zie direct wat dat betekent voor je maandelijkse omzet."
      trustPoints={[
        'Gratis te gebruiken',
        'Geen account nodig',
        'Direct resultaat',
        'Bereken je maandelijkse omzet',
        "Voor zzp'ers en freelancers",
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Bereken je omzet"
      secondaryHref="/tools/factuur-maken"
      secondaryCtaLabel="Maak direct een factuur"
      faqSchema={getUurtariefNaarInkomenFaqSchema()}
    >
      <UurtariefNaarInkomenSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
