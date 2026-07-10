import BetaaltermijnCalculator from '@/components/tools/BetaaltermijnCalculator';

export const metadata = {
  title: 'Betaaltermijn Calculator – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct de vervaldatum van je factuur op basis van betalingstermijn.',
  robots: { index: false },
};

export default function BetaaltermijnCalculatorToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <BetaaltermijnCalculator />
    </div>
  );
}
