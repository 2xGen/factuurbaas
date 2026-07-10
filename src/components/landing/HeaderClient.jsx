'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Factuur maken', href: '/factuur-maken' },
  { name: 'Templates', href: '/template' },
  { name: 'Voorbeelden', href: '/voorbeeld' },
  { name: 'Tools', href: '/tools' },
  { name: 'Gidsen', href: '/blogs' },
];

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white transition-shadow duration-300 ${
        isScrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/crown-favicon.svg" alt="FactuurBaas Logo" className="h-8 w-8" />
          <span className="font-heading text-2xl font-bold text-deep-blue">FactuurBaas</span>
        </Link>

        <nav className="hidden items-center space-x-6 md:flex">
          {navLinks.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== '/' && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium text-slate-700 transition-colors hover:text-warm-orange ${
                  isActive ? 'font-bold text-warm-orange' : ''
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          {pathname !== '/create-invoice' && (
            <div className="hidden md:block">
              <Button asChild>
                <Link href="/create-invoice">
                  Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          )}
          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" aria-label="Menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-slate-200 bg-white md:hidden"
          >
            <nav className="flex flex-col items-center space-y-4 py-6">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== '/' && pathname.startsWith(`${link.href}/`));

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-lg transition-colors ${
                      isActive ? 'font-bold text-warm-orange' : 'text-slate-700 hover:text-warm-orange'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              {pathname !== '/create-invoice' && (
                <Button asChild className="mt-4">
                  <Link href="/create-invoice">
                    Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
