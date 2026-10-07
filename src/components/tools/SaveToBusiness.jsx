'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { resultButton } from '@/components/tools/calculatorUi';
import { cn } from '@/lib/utils';

export default function SaveToBusiness({ children, hint = 'Bewaar dit in FactuurBaas' }) {
  const { user, loading } = useAuth();

  if (loading) return null;

  if (!user) {
    return (
      <p className="text-center text-xs text-white/55">
        <Link href="/login" className="underline underline-offset-2 hover:text-white">
          Maak een gratis account
        </Link>{' '}
        om {hint.toLowerCase()}.
      </p>
    );
  }

  return <div className="grid gap-2.5">{children}</div>;
}

export function SaveBusinessButton({ onClick, children, primary = true, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(primary ? resultButton.primary : resultButton.secondary, 'disabled:opacity-60')}
    >
      {children}
    </button>
  );
}
