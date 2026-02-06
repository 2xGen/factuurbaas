'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { articles } from '@/lib/blogData';
import { blogPillars } from '@/lib/blogPillars';
import {
  Rocket,
  FileStack,
  Scale,
  Wallet,
  Globe,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';

const pillarIcons = {
  starten: Rocket,
  'templates-pdf': FileStack,
  'correct-factureren': Scale,
  'betaling-beheer': Wallet,
  internationaal: Globe,
};

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1], delay: i * 0.08 },
  }),
};

const titleVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

function BlogPillarsSection() {
  const articleBySlug = new Map(
    articles.map((a) => [a.slug, { title: a.title, excerpt: a.excerpt }])
  );

  return (
    <motion.section
      className="relative py-20 md:py-24 overflow-hidden"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.08 }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-slate-100/80" />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15 23 42) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-14 md:mb-16">
          <motion.span
            variants={titleVariants}
            className="inline-block text-warm-orange font-semibold uppercase tracking-widest text-xs md:text-sm mb-2"
          >
            Blog
          </motion.span>
          <motion.h2
            variants={titleVariants}
            className="text-[1.95rem] md:text-4xl lg:text-5xl font-heading font-bold text-deep-blue"
          >
            Handige gidsen over factureren
          </motion.h2>
          <motion.p
            variants={titleVariants}
            className="mt-4 text-base md:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed"
          >
            Van je eerste factuur tot btw, offertes en sneller betaald krijgen. Alles per onderwerp.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {blogPillars.map((pillar, index) => {
            const pillarArticles = pillar.slugs
              .map((slug) => {
                const art = articleBySlug.get(slug);
                return art ? { slug, ...art } : null;
              })
              .filter(Boolean);
            const Icon = pillarIcons[pillar.id] || FileStack;

            if (pillarArticles.length === 0) return null;

            return (
              <motion.div
                key={pillar.id}
                variants={cardVariants}
                custom={index}
                className="group"
              >
                <div className="relative h-full rounded-2xl bg-white p-6 md:p-7 shadow-lg shadow-slate-200/60 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/70 hover:-translate-y-1 hover:border-warm-orange/20 transition-all duration-300 ease-out flex flex-col overflow-hidden">
                  {/* Card accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-warm-orange to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden />

                  <div className="flex items-start gap-4 mb-5">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-warm-orange/15 to-amber-500/10 flex items-center justify-center text-warm-orange group-hover:from-warm-orange/25 group-hover:to-amber-500/20 transition-colors duration-300">
                      <Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-lg font-bold text-deep-blue group-hover:text-warm-orange transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-0.5 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-1.5 flex-1">
                    {pillarArticles.map(({ slug, title }) => (
                      <li key={slug}>
                        <Link
                          href={`/blogs/${slug}`}
                          className="flex items-center gap-2 py-2 px-2 -mx-2 rounded-lg text-slate-700 hover:text-warm-orange hover:bg-warm-orange/5 font-medium text-sm transition-colors duration-200 group/link"
                        >
                          <ChevronRight className="w-4 h-4 flex-shrink-0 text-slate-400 group-hover/link:text-warm-orange transition-colors" />
                          <span className="truncate">{title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/blogs"
                    className="mt-4 pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-warm-orange font-semibold text-sm hover:gap-2.5 transition-all duration-200"
                  >
                    Alle blogs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12 md:mt-14"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/blogs"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-deep-blue text-white font-semibold px-8 py-4 shadow-lg shadow-deep-blue/25 hover:shadow-xl hover:shadow-deep-blue/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            Bekijk alle blogs
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default BlogPillarsSection;
