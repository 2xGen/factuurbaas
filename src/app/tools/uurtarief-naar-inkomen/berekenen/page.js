import UurtariefNaarInkomenCalculator from '@/components/tools/UurtariefNaarInkomenCalculator';

export const metadata = {
  title: 'Uurtarief naar Inkomen – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct je maandelijkse omzet en winst op basis van je uurtarief.',
  robots: { index: false },
};

export default function UurtariefNaarInkomenToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <UurtariefNaarInkomenCalculator />
    </div>
  );
}
