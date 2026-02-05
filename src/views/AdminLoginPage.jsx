'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ShieldCheck, Crown } from 'lucide-react';

const ADMIN_PASSWORD = "L@coL@co"; 

const AdminLoginPage = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('isAdminAuthenticated', 'true');
      toast({
        title: "Admin Login Succesvol",
        description: "Welkom bij het FactuurBaas Admin Dashboard.",
      });
      router.push('/admin-dashboard');
    } else {
      toast({
        title: "Login Mislukt",
        description: "Ongeldig wachtwoord. Probeer het opnieuw.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-sky-900 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-md w-full space-y-8 bg-slate-700/50 backdrop-blur-md p-10 rounded-2xl shadow-2xl border border-slate-600"
      >
        <div className="text-center">
          <Crown className="w-16 h-16 mx-auto mb-4 text-warm-orange" />
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Factuur<span className="text-warm-orange">Baas</span>
          </h1>
          <h2 className="mt-4 text-2xl font-heading text-slate-300">
            Admin Dashboard Toegang
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Voer het admin wachtwoord in om door te gaan.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm">
            <div>
              <label htmlFor="admin-password" className="sr-only">
                Admin Wachtwoord
              </label>
              <Input
                id="admin-password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-slate-500 bg-slate-800 placeholder-slate-400 text-white focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-warm-orange focus:z-10 sm:text-sm"
                placeholder="Admin Wachtwoord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
              />
            </div>
          </div>

          <div>
            <Button 
              type="submit" 
              variant="default" 
              size="lg" 
              className="w-full py-3 text-base bg-warm-orange hover:bg-orange-600 text-white group"
              disabled={isLoading}
            >
              {isLoading ? (
                "Verifiëren..."
              ) : (
                <>
                  <ShieldCheck className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                  Inloggen als Admin
                </>
              )}
            </Button>
          </div>
        </form>
      </motion.div>
       <p className="mt-8 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} FactuurBaas.nl - Alle rechten voorbehouden.
      </p>
    </div>
  );
};

export default AdminLoginPage;