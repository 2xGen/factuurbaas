import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react"; 
import TopSloganSlider from "./TopSloganSlider";

const AnimatedShape = ({ className, delay }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: [0, 0.2, 0], scale: 1 }}
    transition={{ duration: 6, delay, repeat: Infinity, ease: "easeInOut" }}
  />
);

const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-deep-blue via-blue-600 to-sky-500 text-white py-16 md:py-24 overflow-hidden">
    <TopSloganSlider slogans={["Snel? Altijd.", "Moeilijk? Nee.", "Saai? Nooit."]} />
    <AnimatedShape className="w-56 h-56 bg-sky-400/20 -top-16 -left-24" delay={0} />
    <AnimatedShape className="w-72 h-72 bg-blue-400/20 -bottom-24 -right-28" delay={1.5} />
    <AnimatedShape className="w-40 h-40 bg-indigo-400/20 top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2" delay={3} />
    
    <div className="absolute inset-0 opacity-[0.03]">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="heroGrid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.3"/></pattern></defs><rect width="100%" height="100%" fill="url(#heroGrid)" /></svg>
    </div>

    <div className="container mx-auto px-6 text-center relative z-10 pt-12 md:pt-16">
      
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold leading-tight tracking-tighter block" style={{ paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
        Factureren.
      </h1>
      <span className="block bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300 mt-1 md:mt-3 text-5xl sm:text-6xl md:text-8xl font-heading font-extrabold leading-tight tracking-tighter" style={{ paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
        Eenvoudig. Slim.
      </span>
       
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="text-lg sm:text-xl md:text-2xl text-blue-100 my-10 max-w-2xl mx-auto leading-relaxed"
      >
        Waarom moeilijk doen als het zo makkelijk kan?<br/>
        FactuurBaas: professionele facturen in 2 minuten - klaar.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.3 }}
        className="flex justify-center items-center mt-10"
      >
        <Link to="/create-invoice">
          <Button 
            size="lg" 
            variant="secondary"
            className="text-secondary-foreground shadow-orange-glow hover:shadow-orange-glow-hover text-base sm:text-lg px-10 sm:px-12 py-5 sm:py-6 rounded-xl transform hover:scale-105 transition-transform duration-300 ease-out group"
          >
            Direct Factuur Maken <FileText className="ml-2 sm:ml-3 h-5 w-5 group-hover:rotate-3 transition-transform" />
          </Button>
        </Link>
      </motion.div>

      <motion.div 
        className="mt-16 text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 1.5 }}
      >
        <div className="inline-flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-6 text-md sm:text-lg font-medium p-4 rounded-xl shadow-2xl border border-sky-500/30 bg-white/5 backdrop-blur-md">
          <span className="flex items-center text-orange-300"><CheckCircle className="w-6 h-6 mr-2 text-orange-400"/>Professionele facturen</span>
          <span className="flex items-center text-orange-300"><CheckCircle className="w-6 h-6 mr-2 text-orange-400"/>Heldere overzichten</span>
          <span className="flex items-center text-orange-300"><CheckCircle className="w-6 h-6 mr-2 text-orange-400"/>Meer tijd voor je werk</span>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;