'use client';

import React from 'react';
import { AppContextProvider } from '@/contexts/AppContext';
import { AuthProvider } from '@/contexts/SupabaseAuthContext';
import { Toaster } from '@/components/ui/toaster';

export function Providers({ children }) {
  return (
    <AppContextProvider>
      <AuthProvider>
        {children}
        <Toaster />
      </AuthProvider>
    </AppContextProvider>
  );
}
