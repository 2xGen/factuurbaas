import ProtectedRoute from '@/components/auth/ProtectedRoute';
import RekenenPage from '@/views/RekenenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Tools | FactuurBaas',
  description: 'Bereken uurtarief, btw, KOR en marge — en bewaar het in je bedrijf.',
};

export default function RekenenRoute() {
  return (
    <ProtectedRoute>
      <RekenenPage />
    </ProtectedRoute>
  );
}
