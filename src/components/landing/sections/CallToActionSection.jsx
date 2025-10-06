import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Crown as CrownIcon } from "lucide-react"; // Renamed Crown to CrownIcon

const CallToActionSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-deep-blue via-blue-700 to-sky-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <CrownIcon className="w-16 h-16 text-orange-400 mx-auto mb-6" />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading mb-6 leading-tight">
            Klaar om Snel een Factuur te Maken?
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            FactuurBaas: professionele facturen in 2 minuten - klaar.
          </p>
          <Link to="/create-invoice">
            <Button 
              size="xl" 
              variant="secondary" 
              className="text-lg sm:text-xl px-10 sm:px-14 py-5 sm:py-7 rounded-xl shadow-orange-glow hover:shadow-orange-glow-hover transform hover:scale-105 transition-all duration-300 ease-out group"
            >
              Direct Factuur Maken <FileText className="ml-3 h-6 w-6 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;