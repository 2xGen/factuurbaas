import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { sanityClient } from '@/lib/sanityClient';
import BlogPostCard from '@/components/blog/BlogPostCard';
import { Loader2, FileText, WifiOff } from 'lucide-react';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          title,
          slug,
          mainImage,
          publishedAt,
          "excerpt": array::join(string::split(pt::text(body), "")[0..150], "") + "..."
        }`;
        const sanityPosts = await sanityClient.fetch(query);
        setPosts(sanityPosts || []);
      } catch (err) {
        console.error("Failed to fetch posts:", err);
        setError("Kon de blogberichten niet laden. Probeer het later opnieuw.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-sky-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-deep-blue sm:text-6xl font-heading">
            Ons <span className="text-warm-orange">Blog</span>
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Lees de laatste artikelen, tips en inzichten van het FactuurBaas team.
          </p>
        </header>

        {isLoading && (
          <div className="flex flex-col items-center justify-center text-slate-600 py-20">
            <Loader2 className="w-16 h-16 animate-spin text-warm-orange mb-4" />
            <p className="text-xl">Blogberichten laden...</p>
          </div>
        )}

        {error && (
          <div className="flex flex-col items-center justify-center bg-red-50 border border-red-200 p-8 rounded-lg shadow-md text-red-700 py-20">
            <WifiOff className="w-16 h-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Oops! Er ging iets mis.</h2>
            <p className="text-center">{error}</p>
          </div>
        )}

        {!isLoading && !error && posts.length === 0 && (
          <div className="flex flex-col items-center justify-center text-slate-600 py-20 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
            <FileText className="w-16 h-16 text-sky-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Nog geen berichten</h2>
            <p className="text-center">Kom binnenkort terug voor onze nieuwste artikelen!</p>
          </div>
        )}

        {!isLoading && !error && posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default BlogPage;