import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Star, Zap, CheckCircle, ArrowLeft, Crown } from 'lucide-react';

const PremiumPage = ({ user }) => {
  const features = [
    "Toegang tot alle 9 professionele factuur layouts",
    "Geavanceerde PDF export opties",
    "Automatische factuurherinneringen (AI-powered)",
    "Klantbeheer en contacten opslaan",
    "Prioritaire ondersteuning",
    "Verwijder FactuurBaas.nl branding (optioneel)",
  ];

  return (
    <div className="min-h-screen bg-light-gray text-gray-800 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-8 sm:p-12 rounded-2xl shadow-2xl max-w-2xl w-full text-center border border-gray-200"
      >
        <Link to="/dashboard" className="absolute top-6 left-6 inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors font-semibold">
          <ArrowLeft size={20} className="mr-2" /> Terug naar Dashboard
        </Link>
        
        <div className="mb-8">
          <Crown className="w-16 h-16 text-warm-orange mx-auto mb-4" />
          <h1 className="text-4xl font-heading font-bold mb-2 text-deep-blue">Word een FactuurBaas Premium</h1>
          <p className="text-lg text-gray-600">
            Ontgrendel alle krachtige functies en maak professionele facturen als nooit tevoren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-8 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-gray-700">{feature}</span>
            </div>
          ))}
        </div>
        
        {user ? (
          <div className="bg-deep-blue text-white p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-heading font-semibold mb-3">Speciale Aanbieding!</h2>
            <p className="text-4xl font-bold mb-1">€9,99 <span className="text-xl font-normal">/maand</span></p>
            <p className="text-sm mb-4 opacity-80">(Jaarlijks gefactureerd)</p>
            <Button 
              size="lg" 
              variant="secondary"
              className="w-full text-lg py-3"
              onClick={() => alert("Betalingsintegratie volgt nog! Stripe Checkout wordt hier geïmplementeerd.")}
            >
              <Zap className="w-5 h-5 mr-2" /> Nu Upgraden
            </Button>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-lg text-gray-600 mb-4">Maak eerst een account aan om te kunnen upgraden.</p>
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg py-3">
                Account Aanmaken
              </Button>
            </Link>
          </div>
        )}

        <p className="mt-8 text-xs text-gray-500">
          Door te upgraden, gaat u akkoord met onze <Link to="/terms" className="underline hover:text-warm-orange">Algemene Voorwaarden</Link> en <Link to="/privacy" className="underline hover:text-warm-orange">Privacybeleid</Link>.
        </p>
      </motion.div>
    </div>
  );
};

export default PremiumPage;