'use client';

import React, { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import AppShell from '@/components/app/AppShell';

const ProtectedRoute = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      const next = pathname && pathname !== '/login' ? `?next=${encodeURIComponent(pathname)}` : '';
      router.replace(`/login${next}`);
    }
  }, [user, loading, router, pathname]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center text-xl font-semibold text-deep-blue">
        Authenticatie checken...
      </div>
    );
  }
  if (!user) {
    return null;
  }
  return <AppShell>{children}</AppShell>;
};

export default ProtectedRoute;
