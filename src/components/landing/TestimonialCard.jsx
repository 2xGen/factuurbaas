import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (index) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: index * 0.1, 
      duration: 0.5,
      ease: "easeOut"
    }
  })
};

const TestimonialCard = ({ name, title, quote, avatarText, rating, index }) => (
  <motion.div
    variants={cardVariants}
    custom={index}
    className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-gray-200 flex flex-col h-full hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1 group relative overflow-hidden"
  >
    <div className="relative z-10 flex flex-col h-full">
      <div className="flex items-center mb-4">
        <Avatar className="h-12 w-12 mr-4 border-2 border-warm-orange/50 group-hover:border-warm-orange/80 transition-colors duration-300">
          <AvatarFallback className="bg-warm-orange text-white font-semibold">{avatarText}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-lg text-deep-blue">{name}</h4>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>
      <Quote className="w-8 h-8 text-warm-orange/40 mb-3 transform -scale-x-100 group-hover:text-warm-orange/50 transition-colors duration-300" />
      <p className="text-gray-700 italic leading-relaxed mb-5 flex-grow text-[1.02rem]">{quote}</p>
      <div className="flex items-center mt-auto pt-4 border-t border-gray-200 group-hover:border-gray-200/80 transition-colors duration-300">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 mr-1" />
          ))}
      </div>
    </div>
  </motion.div>
);

export default TestimonialCard;