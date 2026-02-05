import ProtectedRoute from '@/components/auth/ProtectedRoute';
import ProfilePage from '@/views/ProfilePage';

export const dynamic = 'force-dynamic';

export default function ProfileRoute() {
  return (
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  );
}
