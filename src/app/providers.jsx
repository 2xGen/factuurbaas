'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { AppContextProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { Toaster } from '@/components/ui/toaster';

const AUTH_ROUTES = ['/dashboard', '/login', '/register', '/profile', '/admin-login', '/admin-dashboard'];
const APP_CONTEXT_ROUTES = ['/dashboard', '/profile'];

function matchesRoute(pathname, routes) {
  return routes.some((route) => pathname === route || pathname?.startsWith(`${route}/`));
}

export function Providers({ children }) {
  const pathname = usePathname();
  const withAuth = matchesRoute(pathname, AUTH_ROUTES);
  const withAppContext = matchesRoute(pathname, APP_CONTEXT_ROUTES);

  let content = children;

  if (withAuth) {
    content = (
      <AuthProvider>
        {content}
        <Toaster />
      </AuthProvider>
    );
  }

  if (withAppContext) {
    content = <AppContextProvider>{content}</AppContextProvider>;
  }

  return content;
}
