import FactuurnummerGenerator from '@/components/tools/FactuurnummerGenerator';

export const metadata = {
  title: 'Factuurnummer Generator – Gratis Online Tool | FactuurBaas',
  description: 'Genereer direct een professioneel factuurnummer voor je volgende factuur.',
  robots: { index: false },
};

export default function FactuurnummerGeneratorToolPage() {
  return (
    <div className="min-h-screen bg-paper-50 text-ink">
      <FactuurnummerGenerator />
    </div>
  );
}
