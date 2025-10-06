import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { useAppContext } from "@/contexts/AppContext";
import { ArrowLeft, Crown } from "lucide-react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { handleRegister } = useAppContext();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!agreedToTerms) {
      toast({
        title: "Voorwaarden niet geaccepteerd",
        description: "Je moet akkoord gaan met de algemene voorwaarden en het privacybeleid.",
        variant: "destructive"
      });
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Oeps!",
        description: "Je wachtwoorden komen niet overeen. Check ze even!",
        variant: "destructive"
      });
      return;
    }

    if (formData.email && formData.password) {
      setIsRegistering(true);
      const result = await handleRegister({ email: formData.email, password: formData.password });
      setIsRegistering(false);
      if (result && !result.error) {
        toast({
          title: "Account Aangemaakt, Baas!",
          description: "Vul nu je profielgegevens in om te starten.",
        });
        navigate("/profile");
      } else {
      }
    } else {
       toast({
        title: "Bijna klaar...",
        description: "Vul alsjeblieft je e-mail en wachtwoord in.",
        variant: "destructive",
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-light-gray flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
       <Link to="/" className="absolute top-6 left-6 inline-flex items-center text-deep-blue hover:text-warm-orange transition-colors z-10 font-semibold">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Terug naar Home
        </Link>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-gray-200"
      >
        <div className="text-center mb-8">
          <Link to="/" className="flex items-center justify-center text-3xl font-heading font-bold text-deep-blue mb-2">
            <Crown className="w-8 h-8 mr-2 text-warm-orange" />
            FactuurBaas.nl
          </Link>
          <p className="text-gray-600 mt-1">
            Word Baas over je facturen. Start gratis!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <InputField label="E-mail" name="email" type="email" value={formData.email} onChange={handleInputChange} required disabled={isRegistering} />
          <InputField label="Wachtwoord" name="password" type="password" value={formData.password} onChange={handleInputChange} required disabled={isRegistering} />
          <InputField label="Bevestig wachtwoord" name="confirmPassword" type="password" value={formData.confirmPassword} onChange={handleInputChange} required disabled={isRegistering} />
          
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" checked={agreedToTerms} onCheckedChange={setAgreedToTerms} disabled={isRegistering}/>
            <Label htmlFor="terms" className="text-sm text-gray-600">
              Ik ga akkoord met de{" "}
              <Link to="/algemene-voorwaarden" target="_blank" rel="noopener noreferrer" className="underline text-deep-blue hover:text-warm-orange">
                Algemene Voorwaarden
              </Link>{" "}
              en het{" "}
              <Link to="/privacybeleid" target="_blank" rel="noopener noreferrer" className="underline text-deep-blue hover:text-warm-orange">
                Privacybeleid
              </Link>.
            </Label>
          </div>

          <Button
            type="submit"
            variant="secondary"
            size="lg"
            className="w-full py-3 text-base rounded-lg transition-all duration-200"
            disabled={!agreedToTerms || isRegistering}
          >
            {isRegistering ? "Bezig met registreren..." : "Account Aanmaken"}
          </Button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Heb je al een account?{" "}
          <Link to="/login" className="text-deep-blue hover:text-warm-orange font-medium">
            Log hier in
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

const InputField = ({ label, name, type, value, onChange, required, disabled }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    <input
      id={name}
      type={type}
      name={name}
      required={required}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-warm-orange focus:border-transparent transition-shadow shadow-sm disabled:bg-gray-100"
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </div>
);

export default RegisterPage;