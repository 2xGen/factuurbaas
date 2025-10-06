import React from "react";
import FeatureCard from "./FeatureCard"; // This file is now effectively deprecated by the one in /sections
import { Zap, Crown, Clock, BarChartBig, Users, ShieldCheck, Palette, Repeat } from "lucide-react";
import { motion } from "framer-motion";

const FeaturesSection = () => {
  const features = [
    { icon: Zap, title: "Razendsnel Factureren", description: "Maak en verstuur professionele facturen in minuten—zo simpel is het." },
    { icon: Palette, title: "Stijlvolle Layouts", description: "Kies uit meerdere layouts om jouw facturen een professionele 'Baas' uitstraling te geven die past bij je merk." },
    { icon: Clock, title: "Tijdbesparend", description: "Automatiseer het saaie werk. Houd tijd over voor dát waar je goed in bent." },
    { icon: BarChartBig, title: "Duidelijk Overzicht", description: "Krijg direct inzicht in openstaande posten, betaalstatussen en je cashflow met heldere rapportages."},
    { icon: Users, title: "Contactbeheer", description: "Sla klantgegevens op voor snellere facturatie en beheer je contacten op één centrale plek." },
    { icon: Repeat, title: "Herhalende Facturen (Binnenkort!)", description: "Stel periodieke facturen in en laat FactuurBaas het werk voor je doen. Focus op groei!" },
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-warm-orange font-semibold uppercase tracking-wider text-sm">Ontdek de Kracht</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-3 text-deep-blue">Alles wat je nodig hebt, <br className="sm:hidden"/>en meer.</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            FactuurBaas is ontworpen om jouw administratie te vereenvoudigen en je bedrijf te laten stralen.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;