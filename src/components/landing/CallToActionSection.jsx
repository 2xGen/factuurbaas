import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Crown as CrownIcon } from "lucide-react"; // Renamed Crown to CrownIcon to avoid conflict

const CallToActionSection = () => (
  <section className="py-20 md:py-28 bg-deep-blue text-white">
    <div className="container mx-auto px-6 text-center">
      <CrownIcon className="w-16 h-16 text-warm-orange mx-auto mb-6" />
      <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Klaar om Snel een Factuur te Maken?</h2>
      <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
        FactuurBaas: professionele facturen in 2 minuten - klaar.
      </p>
      <Link to="/create-invoice">
        <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-lg shadow-orange-glow hover:shadow-orange-glow-hover transform hover:scale-105 transition-transform duration-300 ease-out">
          Direct Factuur Maken <FileText className="ml-3 h-5 w-5" />
        </Button>
      </Link>
    </div>
  </section>
);

export default CallToActionSection;