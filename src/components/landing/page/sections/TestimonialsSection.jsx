'use client';
import React from "react";
import TestimonialCard from "@/components/landing/TestimonialCard";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Eva de Boer",
    title: "ZZP'er Grafisch Ontwerp",
    quote: "FactuurBaas is een lifesaver! Ik maak nu facturen in een fractie van de tijd. Super intuïtief en de layouts zijn top.",
    avatarText: "EB",
    rating: 5,
  },
  {
    name: "Jan Jansen",
    title: "Klusbedrijf J&J",
    quote: "Eindelijk een facturatie tool die doet wat het belooft. Simpel, snel en geen onnodige poespas. Precies wat ik zocht.",
    avatarText: "JJ",
    rating: 5,
  },
  {
    name: "Fatima Yilmaz",
    title: "Freelance Tekstschrijver",
    quote: "Geen gedoe meer met ingewikkelde software. Met FactuurBaas is factureren bijna leuk! En het is gratis, wat wil je nog meer?",
    avatarText: "FY",
    rating: 5,
  },
];

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }}
};

const TestimonialsSection = () => {
  return (
    <motion.section 
      className="py-8 md:py-12 bg-slate-100" 
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
            Echte Woorden, Echte Resultaten
          </motion.span>
          <motion.h2 
            className="text-[1.95rem] md:text-5xl font-heading font-bold mt-3 text-deep-blue"
            variants={titleVariants}
          >
            Wat Zeggen Onze <span className="text-warm-orange">Bazen?</span>
          </motion.h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              name={testimonial.name}
              title={testimonial.title}
              quote={testimonial.quote}
              avatarText={testimonial.avatarText}
              rating={testimonial.rating}
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialsSection;