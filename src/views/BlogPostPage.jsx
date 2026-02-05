'use client';
import React from 'react';
import { useParams, redirect } from 'next/navigation';
import { motion } from 'framer-motion';
import { articles } from '@/lib/blogData';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const BlogPostPage = () => {
  const params = useParams();
  const slug = params?.slug;
  const article = articles.find(a => a.slug === slug);

  if (!article) {
    redirect('/blogs');
  }

  const articleUrl = `https://factuurbaas.nl/blogs/${article.slug}`;
  const published = article.datePublished ? `${article.datePublished}T12:00:00+01:00` : new Date().toISOString();
  const modified = article.dateModified ? `${article.dateModified}T12:00:00+01:00` : published;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": articleUrl
    },
    "headline": article.title,
    "description": article.excerpt,
    "image": article.image.url,
    "author": {
      "@type": "Organization",
      "name": "FactuurBaas",
      "url": "https://factuurbaas.nl"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FactuurBaas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://factuurbaas.nl/crown-favicon.svg"
      }
    },
    "datePublished": published,
    "dateModified": modified
  };

  return (
    <div className="bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-64 md:h-96 w-full"
        >
          <img
            src={article.image.url}
            alt={article.image.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white container mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-heading leading-tight">
              {article.title}
            </h1>
          </div>
        </motion.div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl py-12 md:py-16">
           <Link href="/blogs" className="inline-flex items-center text-sky-600 hover:text-warm-orange transition-colors mb-8 group">
            <ArrowLeft className="mr-2 h-4 w-4 transform transition-transform group-hover:-translate-x-1" /> Terug naar alle blogs
          </Link>
          <article className="prose prose-lg lg:prose-xl max-w-none text-slate-700 leading-relaxed">
            {article.content}
          </article>
        </div>
      </div>
  );
};

export default BlogPostPage;