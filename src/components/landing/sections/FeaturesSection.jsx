import React from "react";
import FeatureCard from "@/components/landing/FeatureCard";
import { Crown, LayoutDashboard, Users, BellRing } from "lucide-react"; 
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    { icon: Crown, title: "Razendsnel Factureren", description: "Maak professionele facturen in minuten. Geen gedoe, direct klaar." },
    { icon: Crown, title: "Professionele Layouts", description: "Kies een strakke layout voor een professionele uitstraling die bij jouw werk past." },
    { icon: Crown, title: "Direct PDF Download", description: "Download je factuur direct als PDF, klaar om te versturen naar je klant." },
    { icon: Crown, title: "Geen Account Nodig", description: "Begin direct met factureren, zonder registratie of inloggen. Jouw gemak voorop." },
    { icon: Crown, title: "Simpel & Intuïtief", description: "Een duidelijke interface, ontworpen voor maximaal gebruiksgemak. Iedereen kan het." },
    { icon: Crown, title: "Gratis Facturen Maken", description: "Maak onbeperkt facturen, helemaal gratis. Geen verborgen kosten." },
    { icon: LayoutDashboard, title: "Overzicht*", description: "Binnenkort: Een helder dashboard met al je factuurstatistieken." },
    { icon: Users, title: "Contacten Opslaan*", description: "Binnenkort: Bewaar je klantgegevens voor nog snellere facturatie." },
    { icon: BellRing, title: "Automatische Herinneringen*", description: "Binnenkort: Stuur automatisch betalingsherinneringen naar je klanten." },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warm-orange font-semibold uppercase tracking-wider text-sm md:text-base">Factureren Zonder Gedoe</span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold mt-3 text-deep-blue">
            Eenvoudig Facturen <span className="text-warm-orange">Maken & Downloaden</span>
          </h2>
          <p className="mt-4 text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            FactuurBaas: Snel, simpel en direct je PDF factuur. Perfect voor zzp'ers en kleine ondernemers.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              IconComponent={feature.icon} 
              title={feature.title}
              description={feature.description}
              delay={index * 0.05} 
            />
          ))}
        </div>
         <motion.p 
          className="text-center mt-10 md:mt-12 text-gray-500 text-xs md:text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: features.length * 0.05 + 0.3 }}
        >
          * Binnenkort beschikbaar! Deze features worden toegevoegd in toekomstige updates.
        </motion.p>
      </div>
    </section>
  );
};

export default FeaturesSection;