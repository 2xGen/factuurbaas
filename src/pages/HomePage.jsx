import React from "react";
import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/landing/page/sections/HeroSection";
import FeaturesSection from "@/components/landing/page/sections/FeaturesSection";
import TestimonialsSection from "@/components/landing/page/sections/TestimonialsSection";
import CallToActionSection from "@/components/landing/page/sections/CallToActionSection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>FactuurBaas | Gratis en Eenvoudig Online Facturen Maken</title>
        <meta name="description" content="Maak snel en eenvoudig professionele facturen met FactuurBaas. Perfect voor zzp'ers en kleine ondernemers. Probeer het nu gratis, zonder account!" />
        <meta name="keywords" content="factuur maken, online factureren, zzp factuur, factuurprogramma, gratis factureren, factuur template, professionele factuur, facturatie software, klein bedrijf facturatie, eenvoudig factureren" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factuurbaas.nl" />
        <meta property="og:title" content="FactuurBaas | Jouw Partner in Eenvoudig Factureren" />
        <meta property="og:description" content="Ontdek hoe FactuurBaas je helpt om moeiteloos professionele facturen te maken. Bespaar tijd en geld met onze intuïtieve online tool." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://factuurbaas.nl" />
        <meta property="og:image" content="https://factuurbaas.nl/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FactuurBaas | Snel & Makkelijk Online Factureren" />
        <meta name="twitter:description" content="Facturen maken was nog nooit zo eenvoudig. Start vandaag nog met FactuurBaas en professionaliseer je administratie." />
        <meta name="twitter:image" content="https://factuurbaas.nl/twitter-image.png" />
      </Helmet>
      <motion.div 
        className="min-h-screen bg-gray-100 text-gray-800 font-sans"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <main>
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <CallToActionSection />
        </main>
      </motion.div>
    </>
  );
};

export default HomePage;