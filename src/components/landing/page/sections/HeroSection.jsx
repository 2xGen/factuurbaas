import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, CheckCircle } from "lucide-react"; 
import TopSloganSlider from "@/components/landing/TopSloganSlider";

const AnimatedShape = ({ className, delay, duration = 15, opacityValues = [0, 0.05, 0.1, 0.05, 0] }) => (
  <motion.div
    className={`absolute rounded-full pointer-events-none ${className}`}
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: opacityValues, scale: 1 }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  />
);

const TechPath = ({ d, delay, duration }) => (
  <motion.path
    d={d}
    initial={{ pathLength: 0, opacity: 0 }}
    animate={{ pathLength: 1, opacity: 0.3 }}
    transition={{ duration, delay, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
    stroke="url(#techGradient)"
    strokeWidth="0.5"
    fill="none"
  />
);

const FeaturePill = ({ icon: Icon, text, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className="flex items-center text-[0.9rem] sm:text-base bg-sky-500/10 backdrop-blur-md px-4 py-2.5 rounded-full shadow-lg hover:bg-sky-500/20 transition-colors duration-300 border border-sky-400/30"
  >
    <Icon className="w-5 h-5 mr-2.5 text-sky-300" />
    <span className="text-sky-100">{text}</span>
  </motion.div>
);


const HeroSection = () => (
  <section className="relative bg-gradient-to-br from-deep-blue via-sky-700 to-indigo-600 text-white pt-20 pb-20 md:pb-28 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <svg width="100%" height="100%" className="absolute inset-0 opacity-20">
        <defs>
          <pattern id="heroTechGrid" width="80" height="80" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <circle cx="1" cy="1" r="0.5" fill="rgba(128, 193, 255, 0.5)" />
            <line x1="0" y1="0" x2="80" y2="80" stroke="rgba(128, 193, 255, 0.1)" strokeWidth="0.2"/>
            <line x1="80" y1="0" x2="0" y2="80" stroke="rgba(128, 193, 255, 0.1)" strokeWidth="0.2"/>
          </pattern>
          <linearGradient id="techGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: "rgb(56, 189, 248)", stopOpacity:1}} /> {/* sky-400 */}
            <stop offset="100%" style={{stopColor: "rgb(96, 165, 250)", stopOpacity:1}} /> {/* blue-400 */}
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroTechGrid)" />
      </svg>
      <svg width="100%" height="100%" className="absolute inset-0 opacity-30">
        <TechPath d="M0,50 Q100,0 200,50 T400,50 T600,50 T800,50 T1000,50 T1200,50 T1400,50" delay={0} duration={20} />
        <TechPath d="M0,150 Q150,100 300,150 T600,150 T900,150 T1200,150" delay={2} duration={25} />
        <TechPath d="M1400,250 Q1300,300 1200,250 T1000,250 T800,250 T600,250 T400,250" delay={1} duration={18} />
      </svg>
    </div>
    
    <AnimatedShape className="w-72 h-72 bg-sky-400/5 -top-20 -left-32 filter blur-xl" delay={0} duration={20} />
    <AnimatedShape className="w-96 h-96 bg-blue-500/5 -bottom-40 -right-40 filter blur-2xl" delay={2.5} duration={25}/>
    <AnimatedShape className="w-60 h-60 bg-indigo-500/5 top-1/3 left-1/2 transform -translate-x-1/2 filter blur-xl" delay={5} duration={18} />

    <TopSloganSlider slogans={["Moeilijk? Nee.", "Saai? Nooit.", "Snel? Altijd."]} />
    
    <div className="container mx-auto px-4 sm:px-6 text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="text-[3.25rem] sm:text-[3.875rem] md:text-7xl lg:text-8xl font-heading font-extrabold leading-tight tracking-tight"
      >
        Factureren.
        <br /> 
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-300 via-blue-300 to-indigo-300">
          Eenvoudig. Slim.
        </span>
      </motion.h1>
       
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="text-[1.05rem] sm:text-[1.15rem] md:text-2xl text-blue-100 my-8 md:my-10 max-w-xl lg:max-w-2xl mx-auto leading-relaxed"
      >
        Waarom moeilijk doen als het zo makkelijk kan?<br/>
        FactuurBaas: professionele facturen in 2 minuten - klaar.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.9 }}
        className="flex justify-center items-center"
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

      <div 
        className="mt-16 md:mt-20 flex flex-wrap justify-center items-center gap-3 sm:gap-4"
      >
        <FeaturePill icon={CheckCircle} text="Professionele facturen" delay={1.2} />
        <FeaturePill icon={CheckCircle} text="Heldere overzichten" delay={1.35} />
        <FeaturePill icon={CheckCircle} text="Meer tijd voor je werk" delay={1.5} />
      </div>
    </div>
  </section>
);

export default HeroSection;