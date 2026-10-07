import BetaaltermijnCalculator from '@/components/tools/BetaaltermijnCalculator';

export const metadata = {
  title: 'Betaaltermijn Calculator – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct de vervaldatum van je factuur op basis van betalingstermijn.',
  robots: { index: false },
};

export default function BetaaltermijnCalculatorToolPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <BetaaltermijnCalculator />
    </div>
  );
}
