'use client';

import HeaderClient from '@/components/landing/HeaderClient';
import FooterClient from '@/components/landing/FooterClient';
import OnboardingPrompt from '@/components/onboarding/OnboardingPrompt';
import ReferralCapture from '@/components/referral/ReferralCapture';
import { CookieConsentProvider } from '@/contexts/CookieConsentContext';
import CookieBanner from '@/components/cookies/CookieBanner';
import { PageViewLogger } from './PageViewLogger';

export default function ClientLayout({ children }) {
  return (
    <CookieConsentProvider>
      <div className="flex min-h-screen flex-col bg-white">
        <PageViewLogger />
        <ReferralCapture />
        <HeaderClient />
        <main className="flex-grow pt-[var(--header-height,5rem)]">{children}</main>
        <FooterClient />
        <CookieBanner />
        <OnboardingPrompt />
      </div>
    </CookieConsentProvider>
  );
}
