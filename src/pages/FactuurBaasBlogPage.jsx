import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, FileText, WifiOff, ExternalLink, Image as ImageIconPlaceholder, ArrowRight } from 'lucide-react';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';

const BlogListingCard = ({ listing }) => {
  if (!listing) return null;

  const formattedDate = listing.created_at
    ? format(new Date(listing.created_at), 'd MMMM yyyy', { locale: nl })
    : 'Publicatiedatum onbekend';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col group"
    >
      <a href={listing.external_url} target="_blank" rel="noopener noreferrer" className="block">
        {listing.image_url ? (
          <div className="w-full h-56 overflow-hidden bg-slate-100">
            <img-replace
              src={listing.image_url}
              alt={listing.title || 'Blog afbeelding'}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        ) : (
          <div className="w-full h-56 bg-gradient-to-br from-sky-100 to-indigo-200 flex items-center justify-center">
            <ImageIconPlaceholder className="w-16 h-16 text-slate-400" />
          </div>
        )}
      </a>
      <CardContent className="p-6 flex flex-col flex-grow">
        <div className="mb-3">
          <p className="text-xs text-slate-500 mb-1">{formattedDate}</p>
          <a href={listing.external_url} target="_blank" rel="noopener noreferrer">
            <h2 className="text-xl font-semibold font-heading text-deep-blue group-hover:text-warm-orange transition-colors duration-200 line-clamp-2">
              {listing.title || "Geen titel"}
            </h2>
          </a>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 mt-auto">
        <Button asChild variant="outline" className="w-full group border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white">
          <a href={listing.external_url} target="_blank" rel="noopener noreferrer">
            Lees artikel
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </Button>
      </CardFooter>
    </motion.div>
  );
};


const FactuurBaasBlogPage = () => {
  const [listings, setListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchListings = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const { data, error: fetchError } = await supabase
          .from('blog_post_listings')
          .select('*')
          .eq('is_published', true)
          .order('created_at', { ascending: false });
        
        if (fetchError) throw fetchError;
        setListings(data || []);
      } catch (err) {
        console.error("Failed to fetch blog listings:", err);
        setError("Kon de blogberichten niet laden. Probeer het later opnieuw.");
      } finally {
        setIsLoading(false);
      }
    };
    fetchListings();
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
            Ontdek de nieuwste artikelen, tips en inzichten van het FactuurBaas team.
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

        {!isLoading && !error && listings.length === 0 && (
          <div className="flex flex-col items-center justify-center text-slate-600 py-20 bg-white/70 backdrop-blur-sm rounded-xl shadow-lg">
            <FileText className="w-16 h-16 text-sky-500 mb-4" />
            <h2 className="text-2xl font-semibold mb-2">Nog geen berichten</h2>
            <p className="text-center">Kom binnenkort terug voor onze nieuwste artikelen!</p>
          </div>
        )}

        {!isLoading && !error && listings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {listings.map((listing) => (
              <BlogListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
         <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-warm-orange hover:bg-orange-600 text-white shadow-lg">
                <a href="https://blog.factuurbaas.nl" target="_blank" rel="noopener noreferrer">
                    Bekijk alle blogartikelen
                    <ExternalLink className="ml-2 h-5 w-5" />
                </a>
            </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default FactuurBaasBlogPage;