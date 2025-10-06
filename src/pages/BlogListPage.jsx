import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { articles } from '@/lib/blogData';

const BlogListPage = () => {
  return (
    <>
      <Helmet>
        <title>Blogs - Tips voor Facturatie en Ondernemen | FactuurBaas</title>
        <meta
          name="description"
          content="Ontdek onze artikelen vol tips over factuur maken, gratis online facturen maken, en efficiënt ondernemen. Verbeter je administratie met de inzichten van FactuurBaas."
        />
        <meta
          name="keywords"
          content="factuur maken, gratis online facturen maken, zzp tips, ondernemerstips, facturatie software, administratie, blog"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://factuurbaas.nl/blogs" />
        <meta property="og:title" content="Blogs - Tips voor Facturatie en Ondernemen | FactuurBaas" />
        <meta property="og:description" content="Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf." />
        <meta property="og:url" content="https://factuurbaas.nl/blogs" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://factuurbaas.nl/og-image-blogs.png" />
        <meta property="og:site_name" content="FactuurBaas" />
      </Helmet>
      <div className="bg-slate-50 py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-deep-blue tracking-tight font-heading">
              Inzichten voor <span className="text-warm-orange">Ondernemers</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
              Artikelen en gidsen om je te helpen met facturatie, administratie en de groei van je bedrijf.
            </p>
          </motion.header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={article.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group hover:shadow-xl transition-shadow duration-300"
              >
                <Link to={`/blogs/${article.slug}`} className="block">
                  <div className="relative h-48">
                    <img
                      className="w-full h-full object-cover"
                      alt={article.image.alt}
                      src={article.image.url}
                    />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                  </div>
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-deep-blue font-heading mb-2 line-clamp-2 group-hover:text-warm-orange transition-colors duration-300">
                    <Link to={`/blogs/${article.slug}`}>{article.title}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm flex-grow mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="mt-auto">
                    <Link
                      to={`/blogs/${article.slug}`}
                      className="inline-flex items-center font-semibold text-sky-600 group-hover:text-warm-orange transition-colors duration-300"
                    >
                      Lees Meer
                      <ArrowRight className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogListPage;