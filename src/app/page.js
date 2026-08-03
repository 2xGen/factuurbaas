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
    "Maak gratis professionele facturen in 2 minuten. Geen account, geen abonnement. Download direct als PDF. Voor zzp'ers en kleine ondernemers.",
  keywords:
    'gratis factuur maken, factuur maken zonder account, factuur maken zzp, factuur template, factuur voorbeeld, online factuur maken',
  openGraph: {
    title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
    description:
      'Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden.',
    url: 'https://factuurbaas.nl',
    type: 'website',
    images: siteOpenGraphImages,
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gratis Factuur Maken – Geen Account | FactuurBaas',
    description:
      'Maak gratis professionele facturen in 2 minuten. Geen account nodig. Direct PDF downloaden.',
    images: [SITE_OG_IMAGE],
  },
  alternates: { canonical: 'https://factuurbaas.nl' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <DashboardMockupSection />
      <KlantenHomeSection />
      <BtwHomeSection />
      <HowItWorksSection />
      <StylePickerSection />
      <WhyFreeHomeSection />
      <TemplatesLibrarySection />
      <SeoLandingSection />
      <TrustSection />
      <HomeToolsSection />
      <BlogPillarsSection />
      <CallToActionSection />
    </>
  );
}
