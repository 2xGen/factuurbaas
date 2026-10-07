'use client';

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { EASE_OUT } from "@/components/landing/page/motion";

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.08,
      duration: 0.6,
      ease: EASE_OUT,
    },
  }),
};

const reducedVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
};

const TestimonialCard = ({ name, title, quote, avatarText, rating, index }) => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={reduce ? reducedVariants : cardVariants}
      custom={index}
      className="group relative flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white p-7 shadow-paper transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-ink/15 motion-reduce:transition-none sm:p-8"
    >
      <span
        className="pointer-events-none absolute right-6 top-3 select-none font-display text-[5.5rem] italic leading-none text-ember/15"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="flex items-center gap-1" aria-label={`${rating} van 5 sterren`} role="img">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-ember text-ember" aria-hidden />
          ))}
      </div>
      <p className="relative mt-6 flex-grow font-display text-[1.3rem] leading-[1.4] tracking-[-0.01em] text-ink">
        {quote}
      </p>
      <div className="mt-8 flex items-center gap-3.5 border-t border-ink/10 pt-5">
        <Avatar className="h-11 w-11 border border-ink/10">
          <AvatarFallback className="bg-ink font-display text-base italic text-white">{avatarText}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-[15px] font-medium text-ink">{name}</h4>
          <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-ink-400">{title}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
