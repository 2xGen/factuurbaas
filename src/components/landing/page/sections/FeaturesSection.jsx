import React from "react";
import FeatureCard from "@/components/landing/FeatureCard";
import { Crown } from "lucide-react"; 
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    { icon: Crown, title: "Razendsnel Factureren", description: "Maak professionele facturen in minuten. Geen gedoe, direct klaar." },
    { icon: Crown, title: "Professionele Layouts", description: "Kies een strakke layout voor een professionele uitstraling die bij jouw werk past." },
    { icon: Crown, title: "Direct PDF Download", description: "Download je factuur direct als PDF, klaar om te versturen naar je klant." },
    { icon: Crown, title: "Geen Account Nodig", description: "Begin direct met factureren, zonder registratie of inloggen. Jouw gemak voorop." },
    { icon: Crown, title: "Simpel & Intuïtief", description: "Een duidelijke interface, ontworpen voor maximaal gebruiksgemak. Iedereen kan het." },
    { icon: Crown, title: "Gratis Facturen Maken", description: "Maak onbeperkt facturen, helemaal gratis. Geen verborgen kosten." },
    { icon: Crown, title: "Overzicht*", description: "Binnenkort: Een helder dashboard met al je factuurstatistieken." },
    { icon: Crown, title: "Contacten Opslaan*", description: "Binnenkort: Bewaar je klantgegevens voor nog snellere facturatie." },
    { icon: Crown, title: "Automatische Herinneringen*", description: "Binnenkort: Stuur automatisch betalingsherinneringen naar je klanten." },
  ];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.07,
        delayChildren: 0.1,
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
  };
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
  };


  return (
    <motion.section 
      className="py-16 md:py-20 bg-gray-50" 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <motion.span 
            className="text-warm-orange font-semibold uppercase tracking-wider text-sm md:text-base"
            variants={titleVariants}
          >
            Factureren Zonder Gedoe
          </motion.span>
          <motion.h2 
            className="text-[1.95rem] md:text-5xl font-heading font-bold mt-3 text-deep-blue flex flex-col sm:flex-row items-center justify-center text-center"
            variants={titleVariants}
          >
            <span>Eenvoudig Facturen</span>
            <span className="text-warm-orange sm:ml-2">Maken & Downloaden</span>
          </motion.h2>
          <motion.p 
            className="mt-4 text-md md:text-lg text-gray-600 max-w-2xl mx-auto"
            variants={textVariants}
          >
            FactuurBaas: Snel, simpel en direct je PDF factuur. Perfect voor zzp'ers en kleine ondernemers.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              IconComponent={feature.icon} 
              title={feature.title}
              description={feature.description}
              index={index} 
            />
          ))}
        </div>
         <motion.p 
          className="text-center mt-10 md:mt-12 text-gray-500 text-xs md:text-sm"
          variants={textVariants}
        >
          * Binnenkort beschikbaar! Deze features worden toegevoegd in toekomstige updates.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;