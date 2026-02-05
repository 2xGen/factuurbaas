import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { LogOut, UserCircle, Crown, Menu, X, Home } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DashboardHeader = ({ userName, onLogout, onNavigateToProfile }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const menuItems = [
    { label: "Home", path: "/", icon: Home },
    { label: "Profiel", action: onNavigateToProfile, icon: UserCircle },
    { label: "Uitloggen", action: onLogout, icon: LogOut },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center text-2xl font-heading font-bold text-deep-blue">
           <Crown className="w-7 h-7 mr-2 text-warm-orange" />
          FactuurBaas.nl
        </Link>
        
        <div className="hidden md:flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <Button variant="ghost" className="text-deep-blue hover:bg-deep-blue/10 px-2 sm:px-3">
              <Home className="w-5 h-5 mr-0 sm:mr-2" /> <span className="hidden sm:inline font-semibold">Home</span>
            </Button>
          </Link>
          <Button variant="ghost" onClick={onNavigateToProfile} className="text-deep-blue hover:bg-deep-blue/10 px-2 sm:px-3">
            <UserCircle className="w-5 h-5 mr-0 sm:mr-2" /> <span className="hidden sm:inline font-semibold">Profiel</span>
          </Button>
          <span className="text-gray-600 hidden lg:inline">Welkom, {userName}!</span>
          <Button variant="ghost" onClick={onLogout} className="text-deep-blue hover:bg-deep-blue/10 px-2 sm:px-3">
            <LogOut className="w-5 h-5 mr-0 sm:mr-2" /> <span className="hidden sm:inline font-semibold">Uitloggen</span>
          </Button>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={toggleMobileMenu} className="text-deep-blue">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-gray-200 shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col py-2">
              {menuItems.map((item) => (
                item.path ? (
                  <Link key={item.label} href={item.path} onClick={() => setMobileMenuOpen(false)}>
                    <Button
                      variant="ghost"
                      className="justify-start text-deep-blue hover:bg-deep-blue/10 rounded-none px-4 py-3 text-base w-full"
                    >
                      <item.icon className="w-5 h-5 mr-3" /> {item.label}
                    </Button>
                  </Link>
                ) : (
                  <Button
                    key={item.label}
                    variant="ghost"
                    onClick={() => {
                      if (item.action) item.action();
                      setMobileMenuOpen(false);
                    }}
                    className="justify-start text-deep-blue hover:bg-deep-blue/10 rounded-none px-4 py-3 text-base"
                  >
                    <item.icon className="w-5 h-5 mr-3" /> {item.label}
                  </Button>
                )
              ))}
               <span className="text-gray-500 text-sm px-4 py-2">Welkom, {userName}!</span>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default DashboardHeader;