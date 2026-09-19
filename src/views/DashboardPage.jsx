'use client';

import React, { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import DashboardAttention from '@/components/dashboard/DashboardAttention';
import DashboardStats from '@/components/dashboard/DashboardStats';
import DashboardAdmin from '@/components/dashboard/DashboardAdmin';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import DashboardTools from '@/components/dashboard/DashboardTools';
import DashboardProfilePrompt from '@/components/dashboard/DashboardProfilePrompt';
import DashboardComingSoon from '@/components/dashboard/DashboardComingSoon';
import ReminderDialog from '@/components/dashboard/dialogs/ReminderDialog';
import { useUserInvoices } from '@/hooks/useUserInvoices';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchHoursThisMonth } from '@/lib/timeEntryPersistence';
import {
  fetchUserExpenses,
  sumExpensesForMonth,
  estimateMonthlyFixedCosts,
} from '@/lib/expensePersistence';
import { getBaasLevel, getBadgeStates, getReferralHeroProgress } from '@/lib/baasStatus';
import { countMyReferrals } from '@/lib/referral';
import {
  buildDashboardSignals,
  getDisplayFirstName,
  getMonthBusinessResult,
  getOverdueInvoices,
  getProfileCompletion,
  getRevenueThisMonth,
  getSalesBtwThisMonth,
  getTimeOfDayGreeting,
} from '@/lib/dashboardCockpit';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { authLoading, isLoadingInvoices, userInvoices, onSaveInvoice } = useUserInvoices();

  const [hoursStats, setHoursStats] = useState({
    totalHours: 0,
    openHours: 0,
    monthLabel: '',
  });
  const [clientCount, setClientCount] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [profile, setProfile] = useState(null);
  const [referralCount, setReferralCount] = useState(0);
  const [metaLoading, setMetaLoading] = useState(true);
  const [selectedInvoiceForReminder, setSelectedInvoiceForReminder] = useState(null);

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;

    (async () => {
      setMetaLoading(true);
      try {
        const [hours, clientsRes, profileRes, referrals, expenseList] = await Promise.all([
          fetchHoursThisMonth(supabase, user.id).catch(() => ({
            totalHours: 0,
            openHours: 0,
            monthLabel: '',
          })),
          supabase
            .from('clients')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', user.id),
          supabase
            .from('profiles')
            .select(
              'full_name, company_name, company_address, company_street, company_postal_code, company_city, company_kvk, company_btw, company_iban, logo_url'
            )
            .eq('id', user.id)
            .maybeSingle(),
          countMyReferrals(supabase).catch(() => 0),
          fetchUserExpenses(supabase, user.id).catch(() => []),
        ]);

        if (cancelled) return;
        setHoursStats(hours);
        if (!clientsRes.error) setClientCount(clientsRes.count || 0);
        if (!profileRes.error) setProfile(profileRes.data);
        setReferralCount(referrals || 0);
        setExpenses(expenseList || []);
      } finally {
        if (!cancelled) setMetaLoading(false);
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

  const outstandingInvoicesCount = useMemo(
    () => userInvoices.filter((inv) => inv.status !== 'paid').length,
    [userInvoices]
  );

  const revenueThisMonth = useMemo(() => getRevenueThisMonth(userInvoices), [userInvoices]);
  const salesBtwThisMonth = useMemo(() => getSalesBtwThisMonth(userInvoices), [userInvoices]);
  const expensesMonth = useMemo(() => sumExpensesForMonth(expenses), [expenses]);
  const fixedCosts = useMemo(() => estimateMonthlyFixedCosts(expenses), [expenses]);
  const { resultaat, btwTeReserveren } = useMemo(
    () =>
      getMonthBusinessResult({
        revenueExcl: revenueThisMonth,
        expensesExcl: expensesMonth.amountExcl,
        salesBtw: salesBtwThisMonth,
        deductibleBtw: expensesMonth.vatAmount,
      }),
    [revenueThisMonth, expensesMonth, salesBtwThisMonth]
  );

  const overdue = useMemo(() => getOverdueInvoices(userInvoices), [userInvoices]);
  const profileCompletion = useMemo(() => getProfileCompletion(profile), [profile]);

  const { actions: attentionActions, nextStep } = useMemo(
    () =>
      buildDashboardSignals({
        overdue,
        openHours: hoursStats.openHours,
        clientCount,
        invoiceCount: userInvoices.length,
        expenseCount: expenses.length,
        profileCompletion,
      }),
    [
      overdue,
      hoursStats.openHours,
      clientCount,
      userInvoices.length,
      expenses.length,
      profileCompletion,
    ]
  );

  const baasStats = useMemo(
    () => ({
      hasAccount: Boolean(user),
      invoiceCount: userInvoices.length,
      referralCount,
      hasClient: clientCount > 0,
      profileComplete: Boolean(
        profile?.company_name &&
          (profile?.company_address || (profile?.company_street && profile?.company_city)) &&
          profile?.company_kvk
      ),
    }),
    [user, userInvoices.length, referralCount, clientCount, profile]
  );

  const baasLevel = useMemo(() => getBaasLevel(baasStats), [baasStats]);
  const badges = useMemo(() => getBadgeStates(baasStats), [baasStats]);
  const badgesUnlocked = useMemo(
    () => badges.filter((b) => b.unlocked && !b.comingSoon).length,
    [badges]
  );
  const badgesTotal = useMemo(
    () => badges.filter((b) => !b.comingSoon).length,
    [badges]
  );
  const referralHero = useMemo(() => getReferralHeroProgress(referralCount), [referralCount]);
  const referralHint = referralHero.unlocked
    ? null
    : referralHero.remaining === 1
      ? '1 referral nodig voor je volgende unlock'
      : `${referralHero.remaining} referrals nodig voor je volgende unlock`;

  const greeting = getTimeOfDayGreeting();
  const firstName = getDisplayFirstName(user, profile);

  const togglePaidStatus = (invoiceId) => {
    const invoice = userInvoices.find((inv) => inv.id === invoiceId);
    if (!invoice) return;
    const newStatus = invoice.status === 'paid' ? 'pending' : 'paid';
    const activityDescription = `Status gewijzigd naar: ${
      newStatus === 'paid' ? 'Betaald' : 'Openstaand'
    }`;
    onSaveInvoice({ ...invoice, status: newStatus }, activityDescription);
  };

  if (authLoading || (isLoadingInvoices && !userInvoices.length && user) || (user && metaLoading)) {
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
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Je bedrijf in één overzicht
            </p>
            <h1 className="mt-1 font-heading text-2xl font-bold tracking-tight text-deep-blue sm:text-3xl">
              {greeting}, {firstName}
            </h1>
            <p className="mt-1 text-sm text-slate-500">
              Wat speelt er vandaag — en wat kun je nu doen?
            </p>
          </div>

          <DashboardAttention
            actions={attentionActions}
            nextStep={nextStep}
            onViewInvoice={(id) => router.push(`/create-invoice?id=${id}`)}
            onSendReminder={(invoice) => setSelectedInvoiceForReminder(invoice)}
            onMarkPaid={togglePaidStatus}
          />

          <DashboardStats
            revenueThisMonth={revenueThisMonth}
            expensesThisMonth={expensesMonth.amountExcl}
            resultaat={resultaat}
            salesBtwThisMonth={salesBtwThisMonth}
            expensesBtwThisMonth={expensesMonth.vatAmount}
            btwTeReserveren={btwTeReserveren}
            totalOutstandingAmount={totalOutstandingAmount}
            outstandingInvoicesCount={outstandingInvoicesCount}
            monthlyFixedCosts={fixedCosts.monthly}
          />

          <DashboardAdmin />

          {(userInvoices.length > 0 || expenses.length > 0) && (
            <div className="mb-8">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Inzicht in je bedrijf
                </p>
                <h2 className="mt-0.5 font-heading text-lg font-semibold text-deep-blue sm:text-xl">
                  Omzet & uitgaven
                </h2>
              </div>
              <DashboardCharts invoices={userInvoices} expenses={expenses} />
            </div>
          )}

          <DashboardTools />

          <DashboardProfilePrompt
            baasLevelName={baasLevel.name}
            badgesUnlocked={badgesUnlocked}
            badgesTotal={badgesTotal}
            referralHint={referralHint}
          />

          <DashboardComingSoon email={user?.email || ''} />
        </motion.div>
      </div>

      {selectedInvoiceForReminder && (
        <ReminderDialog
          invoice={selectedInvoiceForReminder}
          isOpen={!!selectedInvoiceForReminder}
          onClose={() => setSelectedInvoiceForReminder(null)}
          onActionLog={(invoice, logMessage) => onSaveInvoice(invoice, logMessage)}
          user={user}
        />
      )}
    </div>
  );
}
