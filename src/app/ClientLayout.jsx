'use client';

import HeaderClient from '@/components/landing/HeaderClient';
import FooterClient from '@/components/landing/FooterClient';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import CookieBanner from '@/components/cookies/CookieBanner';
import { PageViewLogger } from './PageViewLogger';

export default function ClientLayout({ children }) {
  return (
    <CookieConsentProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <PageViewLogger />
        <HeaderClient />
        <main className="flex-grow pt-20">{children}</main>
        <FooterClient />
        <CookieBanner />
      </div>
    </CookieConsentProvider>
  );
}
