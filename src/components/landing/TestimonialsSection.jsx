import React from "react";
import TestimonialCard from "./TestimonialCard";

const TestimonialsSection = () => {
  const testimonials = [
    { quote: "Eindelijk géén gedoe met facturen! FactuurBaas.nl is super intuïtief en bespaart me zoveel tijd.", author: "Jan de Vries", company: "De Vries Klusbedrijf", delay: 0.1, imageAlt: "Portret van Jan de Vries, een tevreden timmerman", imageUrl: "Portret van Jan de Vries" },
    { quote: "Mijn klanten betalen sneller dankzij de professionele uitstraling van de facturen. Een echte aanrader!", author: "Fatima El Amrani", company: "Amrani Design Studio", delay: 0.2, imageAlt: "Professionele foto van Fatima El Amrani, grafisch ontwerper", imageUrl: "Professionele foto van Fatima El Amrani" },
    { quote: "Als ZZP'er is administratie niet mijn hobby, maar FactuurBaas maakt het bijna leuk. Top service!", author: "Pieter Jansen", company: "Jansen Fotografie", delay: 0.3, imageAlt: "Pieter Jansen, fotograaf, met zijn camera", imageUrl: "Pieter Jansen met camera" },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-warm-orange font-semibold uppercase tracking-wider">Getuigenissen</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2 text-deep-blue">Zo ervaren andere Bazen het:</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;