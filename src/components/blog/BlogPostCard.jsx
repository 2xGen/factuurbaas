import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { urlFor } from '@/lib/sanityClient';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

const BlogPostCard = ({ post }) => {
  if (!post || !post.slug || !post.slug.current) {
    return null; 
  }

  const formattedDate = post.publishedAt 
    ? format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: nl })
    : 'Publicatiedatum onbekend';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
    >
      <Link href={`/blog/${post.slug.current}`} className="block">
        {post.mainImage ? (
          <div className="w-full h-56 overflow-hidden">
            <img-replace
              src={urlFor(post.mainImage).width(600).height(400).fit('crop').url()}
              alt={post.title || 'Blog afbeelding'}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center">
            <span className="text-slate-400 text-sm">Geen afbeelding</span>
          </div>
        )}
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <div className="flex items-center text-xs text-slate-500 mb-1">
            <CalendarDays className="h-4 w-4 mr-1.5 text-sky-500" />
            <span>{formattedDate}</span>
          </div>
          <Link href={`/blog/${post.slug.current}`}>
            <h2 className="text-xl font-semibold font-heading text-deep-blue group-hover:text-warm-orange transition-colors duration-200 line-clamp-2">
              {post.title || "Geen titel"}
            </h2>
          </Link>
        </div>
        {post.excerpt && (
          <p className="text-sm text-slate-600 mb-4 line-clamp-3 flex-grow">
            {post.excerpt}
          </p>
        )}
        <div className="mt-auto">
          <Link
            href={`/blog/${post.slug.current}`}
            className="inline-flex items-center text-sm font-medium text-sky-600 group-hover:text-warm-orange transition-colors duration-200"
          >
            Lees meer
            <ArrowRight className="ml-1.5 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogPostCard;