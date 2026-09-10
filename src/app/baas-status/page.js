import ProtectedRoute from '@/components/auth/ProtectedRoute';
import BaasStatusPage from '@/views/BaasStatusPage';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Baas status | FactuurBaas',
  description:
    'Bekijk je Baas-status, verdien badges en deel je unieke referral-link om FactuurBaas te laten groeien.',
  robots: { index: false, follow: false },
};

export default function BaasStatusRoute() {
  return (
    <ProtectedRoute>
      <BaasStatusPage />
    </ProtectedRoute>
  );
}
