'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowRight, FilePlus2, Loader2 } from 'lucide-react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardTools from '@/components/dashboard/DashboardTools';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import DashboardComingSoon from '@/components/dashboard/DashboardComingSoon';
import { Button } from '@/components/ui/button';
import { useUserInvoices } from '@/hooks/useUserInvoices';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchHoursThisMonth } from '@/lib/timeEntryPersistence';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { authLoading, isLoadingInvoices, userInvoices } = useUserInvoices();
  const [hoursStats, setHoursStats] = useState({
    totalHours: 0,
    openHours: 0,
    monthLabel: '',
  });

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;
    (async () => {
      try {
        const stats = await fetchHoursThisMonth(supabase, user.id);
        if (!cancelled) setHoursStats(stats);
      } catch {
        if (!cancelled) {
          setHoursStats({ totalHours: 0, openHours: 0, monthLabel: '' });
        }
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [user?.id]);

  const totalOutstandingAmount = useMemo(
    () =>
      userInvoices
        .filter((inv) => inv.status !== 'paid')
        .reduce((sum, inv) => sum + (Number(inv.total_incl) || 0), 0),
    [userInvoices]
  );

  const totalPaidAmount = useMemo(
    () =>
      userInvoices
        .filter((inv) => inv.status === 'paid')
        .reduce((sum, inv) => sum + (Number(inv.total_incl) || 0), 0),
    [userInvoices]
  );

  const totalOutstandingBtw = useMemo(
    () =>
      userInvoices
        .filter((inv) => inv.status !== 'paid')
        .reduce((sum, inv) => sum + (Number(inv.total_btw) || 0), 0),
    [userInvoices]
  );

  const totalBtw = useMemo(
    () => userInvoices.reduce((sum, inv) => sum + (Number(inv.total_btw) || 0), 0),
    [userInvoices]
  );

  const outstandingInvoicesCount = useMemo(
    () => userInvoices.filter((inv) => inv.status !== 'paid').length,
    [userInvoices]
  );

  if (authLoading || (isLoadingInvoices && !userInvoices.length && user)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Dashboard laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb]">
      <div className="container mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Overzicht
              </p>
              <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
                Dashboard
              </h1>
              {user?.email && <p className="mt-1 text-sm text-slate-500">{user.email}</p>}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button asChild variant="outline" className="rounded-xl border-slate-200 bg-white">
                <Link href="/facturen">
                  Bekijk facturen <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                onClick={() => router.push('/create-invoice')}
                className="rounded-xl bg-deep-blue px-5 font-semibold shadow-sm hover:bg-deep-blue/90"
              >
                <FilePlus2 className="mr-2 h-4 w-4" />
                Maak factuur
              </Button>
            </div>
          </div>

          <DashboardStats
            invoiceCount={userInvoices.length}
            totalOutstandingAmount={totalOutstandingAmount}
            outstandingInvoicesCount={outstandingInvoicesCount}
            totalPaidAmount={totalPaidAmount}
            totalOutstandingBtw={totalOutstandingBtw}
            totalBtw={totalBtw}
            hasInvoices={userInvoices.length > 0}
            hoursThisMonth={hoursStats.totalHours}
            openHoursThisMonth={hoursStats.openHours}
            hoursMonthLabel={hoursStats.monthLabel}
          />

          {userInvoices.length > 0 && <DashboardCharts invoices={userInvoices} />}

          <div className="mt-12">
            <DashboardComingSoon email={user?.email || ''} />
          </div>

          <div className="mt-4">
            <DashboardTools />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
