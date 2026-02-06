import React from "react";
import HeroSection from "@/components/landing/page/sections/HeroSection";
import FeaturesSection from "@/components/landing/page/sections/FeaturesSection";
import TestimonialsSection from "@/components/landing/page/sections/TestimonialsSection";
import BlogPillarsSection from "@/components/landing/page/sections/BlogPillarsSection";
import CallToActionSection from "@/components/landing/page/sections/CallToActionSection";

export const metadata = {
  title: 'FactuurBaas | Gratis Factuur Maken voor ZZP – Online, Geen Account',
  description: "Gratis factuur maken als zzp? Met FactuurBaas maak je binnen 1 minuut een professionele factuur. Geen account nodig – direct PDF downloaden. Probeer nu.",
  keywords: "factuur maken, online factureren, zzp factuur, factuurprogramma, gratis factureren, factuur template, professionele factuur",
  openGraph: {
    title: 'FactuurBaas | Jouw Partner in Eenvoudig Factureren',
    description: 'Ontdek hoe FactuurBaas je helpt om moeiteloos professionele facturen te maken.',
    url: 'https://factuurbaas.nl',
    type: 'website',
    images: ['/og-image.png'],
  },
  alternates: { canonical: 'https://factuurbaas.nl' },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <BlogPillarsSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
