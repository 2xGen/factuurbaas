import MargeCalculator from '@/components/tools/MargeCalculator';

export const metadata = {
  title: 'Marge Calculator – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct je winst en winstmarge op basis van inkoop- en verkoopprijs.',
  robots: { index: false },
};

export default function MargeCalculatorToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <MargeCalculator />
    </div>
  );
}
