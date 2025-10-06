import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-gray-200 bg-slate-50 text-slate-700">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">FactuurBaas</h3>
            <p className="text-sm text-slate-600">
              Eenvoudig en snel professionele facturen maken. Bespaar tijd en focus op je onderneming.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">Snelle Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-warm-orange transition-colors">Home</Link></li>
              <li><Link to="/create-invoice" className="text-sm hover:text-warm-orange transition-colors">Factuur Maken</Link></li>
              <li><Link to="/blogs" className="text-sm hover:text-warm-orange transition-colors">Blogs</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-deep-blue mb-3 font-heading">Meer Info</h3>
            <ul className="space-y-2">
              <li><Link to="/privacybeleid" className="text-sm hover:text-warm-orange transition-colors">Privacybeleid</Link></li>
              <li><Link to="/algemene-voorwaarden" className="text-sm hover:text-warm-orange transition-colors">Algemene Voorwaarden</Link></li>
              <li><a href="mailto:mail@factuurbaas.nl" className="text-sm hover:text-warm-orange transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-slate-500 border-t border-slate-200 pt-8">
          <p className="mb-2">&copy; {new Date().getFullYear()} FactuurBaas.nl. Alle rechten voorbehouden.</p>
          <p>
            <a href="https://factuurbaas.nl" target="_blank" rel="follow" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">FactuurBaas</a> wordt aangedreven door <a href="https://2xgen.com" target="_blank" rel="noopener noreferrer" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">2xGen</a> — makers van next-gen digitale platforms, waaronder <a href="https://mygoprofile.com" target="_blank" rel="follow" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">MyGoProfile</a>, <a href="https://arubabuddies.com" target="_blank" rel="follow" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">ArubaBuddies</a> en <a href="https://toptours.ai" target="_blank" rel="follow" className="font-semibold text-deep-blue hover:text-warm-orange transition-colors">TopTours.ai</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;