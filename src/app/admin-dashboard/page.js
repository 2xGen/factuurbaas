import AdminProtectedRoute from '@/components/auth/AdminProtectedRoute';
import AdminDashboardPage from '@/views/AdminDashboardPage';

export const dynamic = 'force-dynamic';

export default function AdminDashboardRoute() {
  return (
    <AdminProtectedRoute>
      <AdminDashboardPage />
    </AdminProtectedRoute>
  );
}
