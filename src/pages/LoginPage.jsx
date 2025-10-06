import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from "@/contexts/AppContext";
import { Crown, ArrowLeft } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { handleLogin } = useAppContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email && formData.password) {
      setIsLoggingIn(true);
      const result = await handleLogin(formData);
      setIsLoggingIn(false);
      if (result && !result.error) {
        toast({
          title: "Ingelogd!",
          description: "Je bent succesvol ingelogd. Welkom terug, Baas!",
        });
        navigate("/dashboard");
      } else {
      }
    } else {
      toast({
        title: "Foutje...",
        description: "Vul alsjeblieft je e-mail en wachtwoord in.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-light-gray flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-6 left-6">
        <Link to="/">
          <Button variant="ghost" className="text-deep-blue hover:bg-deep-blue/10">
            <ArrowLeft className="w-5 h-5 mr-2" /> Terug naar Home
          </Button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
      >
        <div className="text-center">
          <Link to="/" className="flex items-center justify-center text-3xl font-heading font-bold text-deep-blue mb-2">
            <Crown className="w-8 h-8 mr-2 text-warm-orange" />
            FactuurBaas.nl
          </Link>
          <h2 className="text-2xl font-heading text-gray-700">
            Log in op je account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-mailadres
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-t-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-warm-orange focus:z-10 sm:text-sm"
                placeholder="E-mailadres"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                disabled={isLoggingIn}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Wachtwoord
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-b-lg relative block w-full px-4 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-warm-orange focus:border-warm-orange focus:z-10 sm:text-sm"
                placeholder="Wachtwoord"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                disabled={isLoggingIn}
              />
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link to="#" className="font-medium text-deep-blue hover:text-warm-orange">
                Wachtwoord vergeten?
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit" variant="default" size="lg" className="w-full py-3 text-base" disabled={isLoggingIn}>
              {isLoggingIn ? "Bezig met inloggen..." : "Inloggen"}
            </Button>
          </div>
        </form>
        <div className="text-center mt-6">
          <p className="text-sm text-gray-600">
            Nog geen account?{" "}
            <Link to="/register" className="font-medium text-deep-blue hover:text-warm-orange">
              Probeer Nu Gratis
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default LoginPage;