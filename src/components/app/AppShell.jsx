'use client';

import React from 'react';
import AppSidebar from '@/components/app/AppSidebar';

export default function AppShell({ children }) {
  return (
    <div className="flex min-h-[calc(100vh-var(--header-height,5rem))] bg-[#f6f4f1]">
      <AppSidebar />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}
