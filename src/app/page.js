import React from "react";
import HeroSection from "@/components/landing/page/sections/HeroSection";
import DashboardMockupSection from "@/components/landing/page/sections/DashboardMockupSection";
import KlantenHomeSection from "@/components/landing/page/sections/KlantenHomeSection";
import BtwHomeSection from "@/components/landing/page/sections/BtwHomeSection";
import StylePickerSection from "@/components/landing/page/sections/StylePickerSection";
import HowItWorksSection from "@/components/landing/page/sections/HowItWorksSection";
import WhyFreeHomeSection from "@/components/landing/page/sections/WhyFreeHomeSection";
import TemplatesLibrarySection from "@/components/landing/page/sections/TemplatesLibrarySection";
import SeoLandingSection from "@/components/landing/page/sections/SeoLandingSection";
import TrustSection from "@/components/landing/page/sections/TrustSection";
import HomeToolsSection from "@/components/landing/page/sections/HomeToolsSection";
import BlogPillarsSection from "@/components/landing/page/sections/BlogPillarsSection";
import CallToActionSection from "@/components/landing/page/sections/CallToActionSection";
import { siteOpenGraphImages, SITE_OG_IMAGE } from '@/lib/siteOg';

export const metadata = {
  title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
  description:
    "Gratis factuur maken zonder account. Maak online een professionele factuur en download direct als PDF. Geen abonnement. Voor zzp'ers en kleine ondernemers.",
  keywords:
    'gratis factuur maken, factuur maken gratis, factuur maken zonder account, online factuur maken, factuur maken online, gratis factuur maken online, factuur maken zzp',
  openGraph: {
    title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
    description:
      'Gratis factuur maken zonder account. Maak online een professionele factuur en download direct als PDF.',
    url: 'https://factuurbaas.nl',
    type: 'website',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
    description:
      'Gratis factuur maken zonder account. Maak online een professionele factuur en download direct als PDF.',
    images: [SITE_OG_IMAGE],
  },
  alternates: { canonical: 'https://factuurbaas.nl' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SeoLandingSection />
      <DashboardMockupSection />
      <KlantenHomeSection />
      <BtwHomeSection />
      <HowItWorksSection />
      <StylePickerSection />
      <WhyFreeHomeSection />
      <TemplatesLibrarySection />
      <TrustSection />
      <HomeToolsSection />
      <BlogPillarsSection />
      <CallToActionSection />
    </>
  );
}
