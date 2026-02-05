import ProtectedRoute from '@/components/auth/ProtectedRoute';
import DashboardPage from '@/views/DashboardPage';

export const dynamic = 'force-dynamic';

export default function DashboardRoute() {
  return (
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  );
}
