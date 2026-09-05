import BoekhoudprogrammaCheck from '@/components/tools/BoekhoudprogrammaCheck';

export const metadata = {
  title: 'Boekhoudprogramma-check – Gratis Online Tool | FactuurBaas',
  description:
    "Doe de korte check en ontdek welk type boekhoudprogramma bij jouw zzp-administratie past.",
  robots: { index: false },
};

export default function BoekhoudprogrammaCheckToolPage() {
  return (
    <div className="container mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <BoekhoudprogrammaCheck />
    </div>
  );
}
