import ProtectedRoute from '@/components/auth/ProtectedRoute';
import FacturenPage from '@/views/FacturenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Facturen | FactuurBaas',
  description: 'Bekijk en beheer je opgeslagen facturen.',
};

export default function FacturenRoute() {
  return (
    <ProtectedRoute>
      <FacturenPage />
    </ProtectedRoute>
  );
}
