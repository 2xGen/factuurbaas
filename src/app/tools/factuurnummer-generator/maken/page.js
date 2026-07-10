import FactuurnummerGenerator from '@/components/tools/FactuurnummerGenerator';

export const metadata = {
  title: 'Factuurnummer Generator – Gratis Online Tool | FactuurBaas',
  description: 'Genereer direct een professioneel factuurnummer voor je volgende factuur.',
  robots: { index: false },
};

export default function FactuurnummerGeneratorToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <FactuurnummerGenerator />
    </div>
  );
}
