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
  ChevronDown,
  Clock,
  Crown,
  FilePlus2,
  FileText,
  LayoutDashboard,
  ListChecks,
  LogOut,
  Menu,
  Receipt,
  Scale,
  Search,
  UserCircle,
  Users,
  Wallet,
  Wrench,
  X,
} from 'lucide-react';

const guestNavLinks = [
  { name: 'Factuur maken', href: '/factuur-maken' },
  { name: 'Templates', href: '/template' },
  { name: 'Tools', href: '/tools' },
  { name: 'Gidsen', href: '/blogs' },
];

const boekhoudItems = [
  {
    name: 'Boekhouder vinden',
    href: '/boekhouder-vinden',
    description: 'Vind hulp bij je administratie en belastingaangifte.',
    icon: Search,
  },
  {
    name: 'Boekhoudprogramma vergelijken',
    href: '/boekhoudprogramma-vergelijken',
    description: "Vergelijk boekhoudsoftware voor zzp'ers en kleine bedrijven.",
    icon: Scale,
  },
  {
    name: 'Boekhoudprogramma-check',
    href: '/tools/boekhoudprogramma-check',
    description: 'Ontdek welke oplossing bij jouw administratie past.',
    icon: ListChecks,
  },
];

function isBoekhoudPath(pathname) {
  return (
    pathname === '/boekhouden' ||
    pathname.startsWith('/boekhouden/') ||
    boekhoudItems.some((item) => pathname === item.href || pathname.startsWith(`${item.href}/`))
  );
}

export default function HeaderClient() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [createMenuOpen, setCreateMenuOpen] = useState(false);
  const [boekhoudOpen, setBoekhoudOpen] = useState(false);
  const headerRef = useRef(null);
  const createMenuRef = useRef(null);
  const boekhoudMenuRef = useRef(null);
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
    setBoekhoudOpen(false);
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
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
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

  useEffect(() => {
    if (!createMenuOpen) return;
    const onDoc = (e) => {
      if (createMenuRef.current && !createMenuRef.current.contains(e.target)) {
        setCreateMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, [createMenuOpen]);

  useEffect(() => {
    if (!boekhoudOpen) return;
    const onDoc = (e) => {
      if (boekhoudMenuRef.current && !boekhoudMenuRef.current.contains(e.target)) {
        setBoekhoudOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === 'Escape') setBoekhoudOpen(false);
    };
    document.addEventListener('mousedown', onDoc);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDoc);
      document.removeEventListener('keydown', onKey);
    };
  }, [boekhoudOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isLoggedIn
          ? `border-slate-200/80 bg-white/95 backdrop-blur-md ${isScrolled ? 'shadow-sm' : ''}`
          : `bg-white/85 backdrop-blur-md ${
              isScrolled
                ? 'border-ink/10 shadow-[0_8px_24px_-16px_rgba(10,42,77,0.25)]'
                : 'border-ink/[0.06]'
            }`
      }`}
    >
      <div ref={headerRef}>
      <ShareFactuurBaas variant="banner" />

      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:h-18 sm:px-6 lg:h-20">
        <Link href={homeHref} className="flex min-w-0 items-center gap-2.5">
          <img src="/crown-favicon.svg" alt="" className="h-7 w-7 shrink-0 sm:h-8 sm:w-8" />
          <span className="min-w-0 leading-none">
            <span className="block font-heading text-lg font-semibold tracking-[-0.03em] text-deep-blue sm:text-xl">
              FactuurBaas
            </span>
            <span className="mt-0.5 block text-[11px] font-medium text-slate-500 sm:text-xs">
              Grip op je bedrijf
            </span>
          </span>
        </Link>

        {!loading && !isLoggedIn && (
          <nav className="hidden items-center gap-6 lg:gap-7 md:flex">
            {guestNavLinks.slice(0, 3).map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] transition-colors hover:text-ink ${
                    isActive ? 'font-medium text-ink' : 'text-ink-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div
              className="relative"
              ref={boekhoudMenuRef}
              onMouseEnter={() => setBoekhoudOpen(true)}
              onMouseLeave={() => setBoekhoudOpen(false)}
            >
              <div className="inline-flex items-center">
                <Link
                  href="/boekhouden"
                  className={`text-[15px] transition-colors hover:text-ink ${
                    isBoekhoudPath(pathname) || boekhoudOpen ? 'font-medium text-ink' : 'text-ink-500'
                  }`}
                >
                  Boekhouden
                </Link>
                <button
                  type="button"
                  className="inline-flex items-center px-1 text-ink-500 transition-colors hover:text-ink"
                  aria-expanded={boekhoudOpen}
                  aria-haspopup="menu"
                  aria-label="Boekhouden menu"
                  onClick={() => setBoekhoudOpen((open) => !open)}
                >
                  <ChevronDown
                    className={`h-3.5 w-3.5 transition-transform duration-200 ${
                      boekhoudOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden
                  />
                </button>
              </div>
              {boekhoudOpen && (
                <div className="absolute left-0 top-full z-50 pt-2">
                <div
                  role="menu"
                  className="w-[22rem] overflow-hidden rounded-2xl border border-ink/10 bg-white py-1.5 shadow-[0_16px_40px_-20px_rgba(10,42,77,0.35)]"
                >
                  {boekhoudItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        role="menuitem"
                        className="group block px-4 py-3.5 transition-colors hover:bg-paper-100"
                        onClick={() => setBoekhoudOpen(false)}
                      >
                        <span className="flex items-start gap-3">
                          <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-warm-orange/15 to-amber-500/10 text-warm-orange">
                            <Icon className="h-4 w-4" strokeWidth={2} />
                          </span>
                          <span className="min-w-0">
                            <span className="block text-[15px] font-medium text-ink group-hover:text-warm-orange">
                              {item.name}
                            </span>
                            <span className="mt-0.5 block text-[13px] leading-snug text-ink-500">
                              {item.description}
                            </span>
                          </span>
                        </span>
                      </Link>
                    );
                  })}
                </div>
                </div>
              )}
            </div>
            {guestNavLinks.slice(3).map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== '/' && pathname.startsWith(`${link.href}/`));
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-[15px] transition-colors hover:text-ink ${
                    isActive ? 'font-medium text-ink' : 'text-ink-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
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
            <Link
              href="/login"
              className="hidden rounded-full px-3 py-2 text-[15px] text-ink-500 transition-colors hover:text-ink md:inline-flex"
            >
              Inloggen
            </Link>
          )}

          {showCreateCta && (
            <div className="relative hidden md:block" ref={createMenuRef}>
              {isLoggedIn ? (
                <div className="flex overflow-hidden rounded-xl shadow-sm">
                  <Button
                    asChild
                    className="rounded-none rounded-l-xl bg-deep-blue px-4 font-semibold hover:bg-deep-blue/90"
                  >
                    <Link href="/create-invoice">
                      <FilePlus2 className="mr-2 h-4 w-4" />
                      {createLabel}
                    </Link>
                  </Button>
                  <Button
                    type="button"
                    className="rounded-none rounded-r-xl border-l border-white/20 bg-deep-blue px-2.5 hover:bg-deep-blue/90"
                    aria-label="Meer aanmaken"
                    aria-expanded={createMenuOpen}
                    onClick={() => setCreateMenuOpen((v) => !v)}
                  >
                    <span className="text-xs leading-none">▾</span>
                  </Button>
                  {createMenuOpen && (
                    <div className="absolute right-0 top-full z-50 mt-1.5 min-w-[11rem] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
                      <Link
                        href="/create-invoice"
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                        onClick={() => setCreateMenuOpen(false)}
                      >
                        <FilePlus2 className="h-4 w-4 text-deep-blue" />
                        Factuur
                      </Link>
                      <Link
                        href="/tools/offerte-maker/maken"
                        className="flex items-center gap-2 px-3 py-2.5 text-sm text-slate-700 hover:bg-slate-50"
                        onClick={() => setCreateMenuOpen(false)}
                      >
                        <FileText className="h-4 w-4 text-deep-blue" />
                        Offerte
                      </Link>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href="/create-invoice"
                  className="group inline-flex h-10 items-center gap-2 rounded-full bg-ink px-5 text-sm font-medium text-white transition-colors hover:bg-ink-950"
                >
                  {createLabel}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              )}
            </div>
          )}

          <div className="md:hidden">
            <Button onClick={() => setIsOpen(!isOpen)} variant="ghost" size="icon" aria-label="Menu">
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
      </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="max-h-[calc(100dvh-var(--header-height,4rem))] overflow-y-auto overscroll-contain border-t border-slate-200 bg-white md:hidden"
          >
            <nav className="flex flex-col items-stretch gap-1 px-4 py-4 pb-8">
              {isLoggedIn ? (
                <>
                  <Link
                    href="/dashboard"
                    className="rounded-lg px-3 py-3 text-base font-medium text-deep-blue hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <LayoutDashboard className="h-4 w-4" /> Overzicht
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
                    href="/tools/offerte-maker/maken"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Maak offerte
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
                    href="/offertes"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Offertes
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
                    href="/inkomsten"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Wallet className="h-4 w-4" /> Inkomsten
                    </span>
                  </Link>
                  <Link
                    href="/uitgaven"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Receipt className="h-4 w-4" /> Uitgaven
                    </span>
                  </Link>
                  <Link
                    href="/rekenen"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Wrench className="h-4 w-4" /> Tools
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
                    href="/baas-status"
                    className="rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Crown className="h-4 w-4" /> Baas status
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
                  {guestNavLinks.slice(0, 3).map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="rounded-lg px-3 py-3 text-base text-slate-700 hover:bg-slate-50"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Link
                    href="/boekhouden"
                    className="rounded-lg px-3 pt-3 pb-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-400 hover:text-ink"
                  >
                    Boekhouden
                  </Link>
                  {boekhoudItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-lg px-3 py-3 hover:bg-slate-50"
                    >
                      <span className="block text-base text-slate-700">{item.name}</span>
                      <span className="mt-0.5 block text-sm leading-snug text-slate-500">
                        {item.description}
                      </span>
                    </Link>
                  ))}
                  {guestNavLinks.slice(3).map((link) => (
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
