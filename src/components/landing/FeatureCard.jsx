import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: index * 0.07, 
      duration: 0.4, 
      ease: "easeOut"
    }
  })
};

const FeatureCard = ({ icon: IconComponent, title, description, index }) => (
  <motion.div
    variants={cardVariants}
    custom={index}
    className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 ease-out text-left border border-transparent hover:border-warm-orange/30 flex flex-col group transform hover:-translate-y-1.5 relative overflow-hidden"
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center mb-4">
        {IconComponent && <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-warm-orange mr-3 flex-shrink-0 transition-transform duration-300 group-hover:rotate-[-5deg] group-hover:scale-110" />}
        <h3 className="text-[1.18rem] md:text-2xl font-heading font-semibold text-deep-blue group-hover:text-warm-orange transition-colors duration-300">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed flex-grow text-[0.9rem] md:text-base">{description}</p>
    </div>
  </motion.div>
);

export default FeatureCard;