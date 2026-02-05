'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const AdminProtectedRoute = ({ children }) => {
  const router = useRouter();
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    const isAdminAuthenticated = typeof window !== 'undefined' && sessionStorage.getItem('isAdminAuthenticated') === 'true';
    if (!isAdminAuthenticated) {
      router.replace('/M@tthijs1997');
    } else {
      setAllowed(true);
    }
  }, [router]);

  if (!allowed) return null;
  return children;
};

export default AdminProtectedRoute;