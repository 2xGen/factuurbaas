import React from 'react';
import { motion } from 'framer-motion';
import TestimonialCard from '@/components/landing/TestimonialCard';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "Sinds ik FactuurBaas gebruik, is mijn administratie een eitje! Super intuïtief en het bespaart me uren per week.",
    name: "Linda de Vries",
    title: "Freelance Grafisch Ontwerper",
    avatarText: "LV",
    rating: 5,
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    quote: "Eindelijk een facturatieprogramma dat er modern uitziet en ook nog eens gratis is om mee te starten. Top!",
    name: "Mark Jansen",
    title: "Eigenaar Klusbedrijf Jansen",
    avatarText: "MJ",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
  },
  {
    quote: "De professionele layouts geven mijn facturen echt een upgrade. Mijn klanten zijn onder de indruk.",
    name: "Sophie Bakker",
    title: "Consultant & Coach",
    avatarText: "SB",
    rating: 4,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
];

const TestimonialsSection = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-deep-blue mb-4">
            Wat Zeggen Onze <span className="text-warm-orange">Bazen?</span>
          </h2>
          <p className="text-lg md:text-xl text-center text-slate-600 mb-12 md:mb-16 max-w-3xl mx-auto">
            Echte verhalen van ondernemers zoals jij die FactuurBaas gebruiken om hun facturatie te stroomlijnen.
          </p>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              avatarText={testimonial.avatarText}
              rating={testimonial.rating}
              image={testimonial.image}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;