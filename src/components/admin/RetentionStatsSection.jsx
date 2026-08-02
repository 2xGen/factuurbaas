'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Loader2, Users } from 'lucide-react';

const StatCard = ({ title, value, hint, isLoading }) => (
  <div className="rounded-lg bg-sky-50 p-4 text-center shadow">
    <h4 className="mb-1 text-sm font-medium text-sky-700">{title}</h4>
    {isLoading ? (
      <Loader2 className="mx-auto h-6 w-6 animate-spin text-sky-600" />
    ) : (
      <>
        <p className="text-2xl font-bold text-deep-blue">{value}</p>
        {hint != null && hint !== '' && (
          <p className="mt-1 text-xs text-slate-500">{hint}</p>
        )}
      </>
    )}
  </div>
);

export default function RetentionStatsSection() {
  const { toast } = useToast();
  const [stats, setStats] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchStats = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const password =
        typeof window !== 'undefined' ? sessionStorage.getItem('adminPassword') : null;
      if (!password) {
        setError('Log opnieuw in als admin om retention-stats te laden.');
        setStats(null);
        return;
      }

      const res = await fetch('/api/admin/retention-stats', {
        headers: { 'x-admin-password': password },
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || `HTTP ${res.status}`);
      setStats(body);
    } catch (err) {
      console.error('Retention stats:', err);
      setError(err.message || 'Kon retention-stats niet laden.');
      toast({
        title: 'Retention stats mislukt',
        description: err.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  const fmtPct = (n) => (n == null ? '—' : `${n}%`);

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center font-heading text-2xl text-sky-700">
          <Users size={28} className="mr-3 text-sky-600" />
          Account retention
        </CardTitle>
        <CardDescription>
          Accounts, activatie (opgeslagen factuur), 2e factuur, guest→account, en login na 30 dagen.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && !stats ? (
          <p className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
            {error}
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            <StatCard
              title="Accounts"
              value={stats?.totalAccounts ?? '—'}
              hint="Totaal Google-accounts"
              isLoading={isLoading}
            />
            <StatCard
              title="Geactiveerd"
              value={stats?.activated ?? '—'}
              hint={
                stats
                  ? `${fmtPct(stats.activatedPctOfAccounts)} van accounts (≥1 factuur)`
                  : undefined
              }
              isLoading={isLoading}
            />
            <StatCard
              title="2e factuur"
              value={stats?.withSecondInvoice ?? '—'}
              hint={
                stats
                  ? `${fmtPct(stats.secondInvoicePctOfActivated)} van geactiveerd`
                  : undefined
              }
              isLoading={isLoading}
            />
            <StatCard
              title="Guest → account"
              value={
                stats?.guestAttributionReady === false
                  ? 'n.v.t.'
                  : (stats?.convertedFromGuest ?? '—')
              }
              hint={
                stats?.guestAttributionReady === false
                  ? 'Run ADD_CONVERTED_FROM_GUEST.sql'
                  : stats
                    ? `${fmtPct(stats.convertedFromGuestPctOfAccounts)} van accounts`
                    : undefined
              }
              isLoading={isLoading}
            />
            <StatCard
              title="Login na 30d"
              value={stats?.returnedAfter30d ?? '—'}
              hint={
                stats
                  ? `${fmtPct(stats.returnedAfter30dPctOfAccounts)} van accounts`
                  : undefined
              }
              isLoading={isLoading}
            />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-slate-400">
          Vereist SUPABASE_SERVICE_ROLE_KEY op de server. Aggregates only — geen e-mails.
        </p>
      </CardFooter>
    </Card>
  );
}
