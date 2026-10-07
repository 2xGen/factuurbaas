import KorCalculator from '@/components/tools/KorCalculator';

export const metadata = {
  title: 'KOR Calculator – Gratis Online Tool | FactuurBaas',
  description: 'Bereken direct of de kleineondernemersregeling bij jouw omzet past.',
  robots: { index: false },
};

export default function KorCalculatorToolPage() {
  return <KorCalculator />;
}
