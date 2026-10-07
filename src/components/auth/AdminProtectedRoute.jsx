'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch('/api/admin/session', { credentials: 'include' });
        if (!res.ok) {
          router.replace('/M@tthijs1997');
          return;
        }
        if (!cancelled) setAllowed(true);
      } catch {
        router.replace('/M@tthijs1997');
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [router]);

  if (!allowed) return null;
  return children;
};

export default AdminProtectedRoute;
