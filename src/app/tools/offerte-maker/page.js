import ToolGatePage from '@/components/tools/ToolGatePage';
import OfferteMakerSeoContent from '@/components/tools/OfferteMakerSeoContent';
import { getOfferteFaqSchema } from '@/lib/offerteLanding';

export const metadata = {
  title: "Gratis Offerte Maken 2026 | Offerte Template voor ZZP'ers",
  description:
    "Maak gratis een professionele offerte als zzp'er. Kies een template, vul je gegevens in en download direct als PDF. Zet je offerte eenvoudig om naar een factuur.",
  alternates: { canonical: 'https://factuurbaas.nl/tools/offerte-maker' },
};

const TOOL_HREF = '/tools/offerte-maker/maken';

export default function OfferteMakerGatePage() {
  return (
    <ToolGatePage
      breadcrumbLabel="Offerte maker"
      h1="Gratis offerte maken"
      intro="Maak eenvoudig een professionele offerte voor je klant en download direct als PDF."
      introExtra="Met FactuurBaas maak je als zzp'er of kleine ondernemer gratis een offerte zonder account. Voeg je diensten toe, download direct een PDF en zet je offerte na akkoord om naar een factuur."
      trustPoints={[
        'Gratis offerte maken',
        'Geen account nodig',
        'Professionele layout',
        'Direct PDF downloaden',
      ]}
      toolHref={TOOL_HREF}
      toolCtaLabel="Open offerte maker"
      secondaryHref="/create-invoice"
      secondaryCtaLabel="Maak factuur"
      faqSchema={getOfferteFaqSchema()}
    >
      <OfferteMakerSeoContent toolHref={TOOL_HREF} />
    </ToolGatePage>
  );
}
