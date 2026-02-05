'use client';

import HeaderClient from '@/components/landing/HeaderClient';
import FooterClient from '@/components/landing/FooterClient';
import { PageViewLogger } from './PageViewLogger';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import CookieBanner from '@/components/cookies/CookieBanner';

export default function ClientLayout({ children }) {
  return (
    <CookieConsentProvider>
      <div className="flex flex-col min-h-screen">
        <PageViewLogger />
        <HeaderClient />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <FooterClient />
        <CookieBanner />
      </div>
    </CookieConsentProvider>
  );
}
