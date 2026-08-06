import ProtectedRoute from '@/components/auth/ProtectedRoute';
import UrenPage from '@/views/UrenPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Uren | FactuurBaas',
  description: 'Log gewerkte uren en zet ze om naar een factuur.',
};

export default function UrenRoute() {
  return (
    <ProtectedRoute>
      <UrenPage />
    </ProtectedRoute>
  );
}
