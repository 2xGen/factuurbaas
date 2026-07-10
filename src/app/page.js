import React from "react";
import HeroSection from "@/components/landing/page/sections/HeroSection";
import StylePickerSection from "@/components/landing/page/sections/StylePickerSection";
import HowItWorksSection from "@/components/landing/page/sections/HowItWorksSection";
import TemplatesLibrarySection from "@/components/landing/page/sections/TemplatesLibrarySection";
import SeoLandingSection from "@/components/landing/page/sections/SeoLandingSection";
import TrustSection from "@/components/landing/page/sections/TrustSection";
import HomeToolsSection from "@/components/landing/page/sections/HomeToolsSection";
import BlogPillarsSection from "@/components/landing/page/sections/BlogPillarsSection";
import CallToActionSection from "@/components/landing/page/sections/CallToActionSection";

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
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://factuurbaas.nl' },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StylePickerSection />
      <HowItWorksSection />
      <TemplatesLibrarySection />
      <SeoLandingSection />
      <TrustSection />
      <HomeToolsSection />
      <BlogPillarsSection />
      <CallToActionSection />
    </>
  );
}
