import React from "react";
import HeroSection from "@/components/landing/page/sections/HeroSection";
import FeaturesSection from "@/components/landing/page/sections/FeaturesSection";
import TestimonialsSection from "@/components/landing/page/sections/TestimonialsSection";
import CallToActionSection from "@/components/landing/page/sections/CallToActionSection";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
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
  );
};

export default HomePage;