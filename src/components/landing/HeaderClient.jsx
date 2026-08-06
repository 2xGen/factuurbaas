'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import ShareFactuurBaas from '@/components/shared/ShareFactuurBaas';
import {
  ArrowRight,
  Clock,
  FilePlus2,
  FileText,
  LayoutDashboard,
  LogOut,
  Menu,
  UserCircle,
  Users,
  X,
} from 'lucide-react';

const guestNavLinks = [
  { name: 'Factuur maken', href: '/factuur-maken' },
  { name: 'Templates', href: '/template' },
  { name: 'Tools', href: '/tools' },
  { name: 'Gidsen', href: '/blogs' },
  { name: 'Waarom gratis', href: '/waarom-gratis' },
];

function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`text-sm font-medium transition-colors ${
        active ? 'text-deep-blue' : 'text-slate-600 hover:text-deep-blue'
      }`}
    >
      {children}
      {active && (
        <span className="mt-1 block h-0.5 rounded-full bg-warm-orange" aria-hidden />
      )}
    </Link>
  );
}

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const headerRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();
  const { user, loading, signOut } = useAuth();
  const isLoggedIn = Boolean(user);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const syncHeight = () => {
      document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);
    };

    syncHeight();
    const ro = new ResizeObserver(syncHeight);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, [isOpen]);

  const handleSignOut = async () => {
    await signOut();
    setIsOpen(false);
    router.push('/');
  };

  const homeHref = isLoggedIn ? '/dashboard' : '/';
  const createLabel = isLoggedIn ? 'Maak factuur' : 'Maak gratis factuur';
  const showCreateCta = pathname !== '/create-invoice';

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isLoggedIn
          ? `border-slate-200/80 bg-white/95 backdrop-blur-md ${isScrolled ? 'shadow-sm' : ''}`
          : `border-slate-200 bg-white ${isScrolled ? 'shadow-md' : 'shadow-sm'}`
      }`}
    >
      <ShareFactuurBaas variant="banner" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20">
        <Link href={homeHref} className="flex items-center gap-2.5">
          <img src="/crown-favicon.svg" alt="FactuurBaas" className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="font-heading text-xl font-bold tracking-tight text-deep-blue sm:text-2xl">
            FactuurBaas
          </span>
        </Link>

        {!loading && !isLoggedIn && (
          <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
            {guestNavLinks.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-warm-orange ${
                    isActive ? 'font-bold text-warm-orange' : 'text-slate-700'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        )}

        {!loading && isLoggedIn && (
          <nav className="hidden items-center gap-6 md:flex lg:gap-8">
            <NavLink href="/dashboard" active={pathname.startsWith('/dashboard')}>
              Dashboard
            </NavLink>
            <NavLink href="/facturen" active={pathname.startsWith('/facturen')}>
              Facturen
            </NavLink>
            <NavLink href="/uren" active={pathname.startsWith('/uren')}>
              Uren
            </NavLink>
            <NavLink href="/klanten" active={pathname.startsWith('/klanten')}>
              Klanten
            </NavLink>
            <NavLink href="/profile" active={pathname.startsWith('/profile')}>
              Profiel
            </NavLink>
          </nav>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          {!loading && isLoggedIn && (
            <div className="hidden items-center gap-1 md:flex">
              <Button
                variant="ghost"
                size="sm"
                className="text-slate-600 hover:text-deep-blue"
                onClick={handleSignOut}
              >
                <LogOut className="mr-1.5 h-4 w-4" />
                Uitloggen
              </Button>
            </div>
          )}

          {!loading && !isLoggedIn && (
            <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
              <Link href="/login">Inloggen</Link>
            </Button>
          )}

          {showCreateCta && (
            <div className="hidden md:block">
              <Button
                asChild
                className={
                  isLoggedIn
                    ? 'rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90'
                    : undefined
                }
              >
                <Link href="/create-invoice">
                  {isLoggedIn ? (
                    <>
                      <FilePlus2 className="mr-2 h-4 w-4" />
                      {createLabel}
                    </>
                  ) : (
                    <>
                      {createLabel} <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
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
            <nav className="flex flex-col items-stretch gap-1 px-4 py-4">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-lg px-3 py-3 text-base font-medium text-deep-blue hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" /> Dashboard
                    </span>
                  </Link>
                  <Link
                    href="/create-invoice"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FilePlus2 className="h-4 w-4" /> Maak factuur
                    </span>
                  </Link>
                  <Link
                    href="/facturen"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Facturen
                    </span>
                  </Link>
                  <Link
                    href="/uren"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4" /> Uren
                    </span>
                  </Link>
                  <Link
                    href="/klanten"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Users className="h-4 w-4" /> Klanten
                    </span>
                  </Link>
                  <Link
                    href="/profile"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <UserCircle className="h-4 w-4" /> Profiel
                    </span>
                  </Link>
                  <div className="my-2 border-t border-slate-100" />
                  <Link
                    href="/waarom-gratis"
                    className="rounded-lg px-3 py-3 text-sm text-slate-500 hover:bg-slate-50"
                  >
                    Waarom is FactuurBaas gratis?
                  </Link>
                  <button
                    type="button"
                    className="rounded-lg px-3 py-3 text-left text-base font-medium text-slate-700 hover:bg-slate-50"
                    onClick={handleSignOut}
                  >
                    <span className="inline-flex items-center gap-2">
                      <LogOut className="h-4 w-4" /> Uitloggen
                    </span>
                  </button>
                </>
              ) : (
                <>
                  {guestNavLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-base text-slate-700 hover:bg-slate-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/login"
                    className="rounded-lg px-3 py-3 text-base font-medium text-deep-blue hover:bg-slate-50"
                  >
                    Inloggen
                  </Link>
                  {showCreateCta && (
                    <Button asChild className="mt-3">
                      <Link href="/create-invoice">
                        Maak gratis factuur <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
                </>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
