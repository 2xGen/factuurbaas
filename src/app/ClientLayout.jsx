'use client';

import HeaderClient from '@/components/landing/HeaderClient';
import FooterClient from '@/components/landing/FooterClient';
import { PageViewLogger } from './PageViewLogger';

export default function ClientLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PageViewLogger />
      <HeaderClient />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <FooterClient />
    </div>
  );
}
