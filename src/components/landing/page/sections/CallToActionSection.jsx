import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <motion.section 
      className="py-16 md:py-24 bg-deep-blue text-white relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="ctaGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M100 0 L0 0 0 100" fill="none" stroke="rgba(128,193,255,0.5)" strokeWidth="0.3"/>
              <circle cx="50" cy="50" r="1" fill="rgba(128,193,255,0.3)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ctaGrid)" />
        </svg>
      </div>
       <motion.div
        className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-sky-500/20 to-transparent opacity-50 animate-pulse-slow pointer-events-none"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
      />


      <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity:0, y:20 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Zap className="w-12 h-12 text-warm-orange mx-auto mb-4 drop-shadow-lg" />
          <h2 className="text-[1.95rem] md:text-5xl font-heading font-bold mb-4">
            Klaar om Snel een Factuur te Maken?
          </h2>
          <p className="text-lg md:text-xl text-blue-200 mb-10 max-w-xl mx-auto">
            FactuurBaas: professionele facturen in 2 minuten - klaar.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity:0, scale:0.9 }}
          whileInView={{ opacity:1, scale:1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Link to="/create-invoice">
            <Button 
              size="xl" 
              variant="secondary" 
              className="text-secondary-foreground text-md sm:text-lg px-10 sm:px-12 py-5 sm:py-6 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-out group"
            >
              Direct Factuur Maken <FileText className="ml-2 sm:ml-3 h-5 w-5 group-hover:rotate-3 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CallToActionSection;