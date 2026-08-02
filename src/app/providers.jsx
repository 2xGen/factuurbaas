'use client';

import React from 'react';
import { AppContextProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { Toaster } from '@/components/ui/toaster';

/**
 * Auth wraps the whole app so header + create-invoice can read session.
 * AppContext stays for dashboard invoice list state.
 */
export function Providers({ children }) {
  return (
    <AuthProvider>
      <AppContextProvider>
        {children}
        <Toaster />
      </AppContextProvider>
    </AuthProvider>
  );
}
