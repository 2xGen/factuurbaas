'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Clock,
  Crown,
  FileText,
  LayoutDashboard,
  Receipt,
  UserCircle,
  Users,
  Wallet,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';

const NAV = [
  { label: 'Overzicht', href: '/dashboard', icon: LayoutDashboard },
  { label: 'Facturen', href: '/facturen', icon: FileText },
  { label: 'Offertes', href: '/offertes', icon: FileText },
  { label: 'Klanten', href: '/klanten', icon: Users },
  { label: 'Uren', href: '/uren', icon: Clock },
  { label: 'Inkomsten', href: '/inkomsten', icon: Wallet },
  { label: 'Uitgaven', href: '/uitgaven', icon: Receipt },
  { label: 'Tools', href: '/rekenen', icon: Wrench },
  { label: 'Baas status', href: '/baas-status', icon: Crown },
];

function isActive(pathname, href) {
  if (href === '/dashboard') return pathname === '/dashboard';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppSidebar() {
  const pathname = usePathname();
  const accountActive = pathname.startsWith('/profile');

  return (
    <aside className="hidden w-[13.5rem] shrink-0 border-r border-slate-200/80 bg-[#f6f4f1] px-3 py-5 lg:flex lg:flex-col">
      <p className="px-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
        Grip op je bedrijf
      </p>
      <ul className="mt-4 space-y-0.5 text-[13px]">
        {NAV.map(({ label, href, icon: Icon }) => {
          const current = isActive(pathname, href);
          return (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  'flex items-center gap-2.5 rounded-lg px-2.5 py-2 transition-colors',
                  current
                    ? 'bg-white font-medium text-deep-blue shadow-[0_1px_2px_rgba(10,42,77,0.08)] ring-1 ring-slate-200/80'
                    : 'text-slate-500 hover:bg-white/70 hover:text-deep-blue'
                )}
              >
                <Icon
                  className={cn('h-4 w-4', current ? 'text-warm-orange' : 'text-slate-400')}
                  strokeWidth={1.75}
                />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-auto pt-8">
        <Link
          href="/profile"
          className={cn(
            'block rounded-lg border border-dashed px-3 py-3 transition-colors',
            accountActive
              ? 'border-deep-blue/25 bg-white'
              : 'border-slate-300/80 hover:border-slate-400 hover:bg-white/70'
          )}
        >
          <p className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
            <UserCircle className="h-3.5 w-3.5" />
            Account
          </p>
          <p className="mt-1 text-[13px] font-medium text-deep-blue">Gratis</p>
        </Link>
      </div>
    </aside>
  );
}
