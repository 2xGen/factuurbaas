'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { format } from 'date-fns';
import { nl } from 'date-fns/locale';
import { Loader2, Plus } from 'lucide-react';
import DashboardAttention from '@/components/dashboard/DashboardAttention';
import DashboardStats, { DashboardSideMetrics } from '@/components/dashboard/DashboardStats';
import DashboardCharts from '@/components/dashboard/DashboardCharts';
import DashboardGoal from '@/components/dashboard/DashboardGoal';
import DashboardRecentInvoices from '@/components/dashboard/DashboardRecentInvoices';
import ReminderDialog from '@/components/dashboard/dialogs/ReminderDialog';
import MarkPaidDialog from '@/components/dashboard/dialogs/MarkPaidDialog';
import { useUserInvoices } from '@/hooks/useUserInvoices';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchHoursThisMonth } from '@/lib/timeEntryPersistence';
import {
  fetchUserExpenses,
  sumExpensesForMonth,
} from '@/lib/expensePersistence';
import {
  fetchUserIncomes,
  sumIncomesForMonth,
  sumIncomesForYear,
} from '@/lib/incomePersistence';
import {
  buildDashboardSignals,
  getAcceptedQuotesWaiting,
  getDisplayFirstName,
  getExpiredValidityQuotes,
  getMonthBusinessResult,
  getOverdueInvoices,
  getProfileCompletion,
  getQuotesExpiringSoon,
  getRevenueThisMonth,
  getRevenueThisYear,
  getSalesBtwThisMonth,
  getTimeOfDayGreeting,
  isVatReturnApproaching,
} from '@/lib/dashboardCockpit';
import { fetchQuoteDashboardRows } from '@/lib/quotePersistence';

export default function DashboardPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { authLoading, isLoadingInvoices, userInvoices, onSaveInvoice } = useUserInvoices();

  const [hoursStats, setHoursStats] = useState({
    totalHours: 0,
    openHours: 0,
    monthLabel: '',
  });
  const [expenses, setExpenses] = useState([]);
  const [incomes, setIncomes] = useState([]);
  const [profile, setProfile] = useState(null);
  const [quoteRows, setQuoteRows] = useState([]);
  const [metaLoading, setMetaLoading] = useState(true);
  const [selectedInvoiceForReminder, setSelectedInvoiceForReminder] = useState(null);
  const [invoiceToMarkPaid, setInvoiceToMarkPaid] = useState(null);

  useEffect(() => {
    if (!user?.id) return;
    let cancelled = false;

    (async () => {
      setMetaLoading(true);
      try {
        const [hours, profileRes, expenseList, incomeList, quotes] = await Promise.all([
          fetchHoursThisMonth(supabase, user.id).catch(() => ({
            totalHours: 0,
            openHours: 0,
            monthLabel: '',
          })),
          supabase
            .from('profiles')
            .select(
              'full_name, company_name, company_address, company_street, company_postal_code, company_city, company_kvk, company_btw, company_iban, logo_url, yearly_goal, yearly_goal_year'
            )
            .eq('id', user.id)
            .maybeSingle()
            .then(async (res) => {
              if (!res.error) return res;
              return supabase
                .from('profiles')
                .select(
                  'full_name, company_name, company_address, company_street, company_postal_code, company_city, company_kvk, company_btw, company_iban, logo_url'
                )
                .eq('id', user.id)
                .maybeSingle();
            }),
          fetchUserExpenses(supabase, user.id).catch(() => []),
          fetchUserIncomes(supabase, user.id).catch(() => []),
          fetchQuoteDashboardRows(supabase, user.id).catch(() => []),
        ]);

        if (cancelled) return;
        setHoursStats(hours);
        if (!profileRes.error) setProfile(profileRes.data);
        setExpenses(expenseList || []);
        setIncomes(incomeList || []);
        setQuoteRows(quotes || []);
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

  const invoiceRevenueMonth = useMemo(() => getRevenueThisMonth(userInvoices), [userInvoices]);
  const incomeMonth = useMemo(() => sumIncomesForMonth(incomes), [incomes]);
  const revenueThisMonth = invoiceRevenueMonth + incomeMonth.amountExcl;
  const salesBtwThisMonth = useMemo(
    () => getSalesBtwThisMonth(userInvoices) + incomeMonth.vatAmount,
    [userInvoices, incomeMonth.vatAmount]
  );
  const expensesMonth = useMemo(() => sumExpensesForMonth(expenses), [expenses]);
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

  const ytd = useMemo(
    () => getRevenueThisYear(userInvoices) + sumIncomesForYear(incomes),
    [userInvoices, incomes]
  );

  const overdue = useMemo(() => getOverdueInvoices(userInvoices), [userInvoices]);
  const profileCompletion = useMemo(() => getProfileCompletion(profile), [profile]);
  const acceptedQuotes = useMemo(() => getAcceptedQuotesWaiting(quoteRows), [quoteRows]);
  const expiredQuotes = useMemo(() => getExpiredValidityQuotes(quoteRows), [quoteRows]);
  const expiringQuotes = useMemo(() => getQuotesExpiringSoon(quoteRows), [quoteRows]);

  const { actions: attentionActions, onboarding } = useMemo(
    () =>
      buildDashboardSignals({
        overdue,
        openHours: hoursStats.openHours,
        invoiceCount: userInvoices.length,
        quoteCount: quoteRows.length,
        acceptedQuotes,
        expiredQuotes,
        expiringQuotes,
        profileCompletion,
        outstandingInvoicesCount,
        btwTeReserveren,
        vatReturnApproaching: isVatReturnApproaching(),
        ytdRevenue: ytd,
      }),
    [
      overdue,
      hoursStats.openHours,
      userInvoices.length,
      quoteRows.length,
      acceptedQuotes,
      expiredQuotes,
      expiringQuotes,
      profileCompletion,
      outstandingInvoicesCount,
      btwTeReserveren,
      ytd,
    ]
  );

  const greeting = getTimeOfDayGreeting();
  const firstName = getDisplayFirstName(user, profile);
  const monthLabel = format(new Date(), 'LLLL', { locale: nl });
  const year = new Date().getFullYear();
  const yearlyGoal =
    Number(profile?.yearly_goal_year) === year ? Number(profile?.yearly_goal) || 0 : Number(profile?.yearly_goal) || 0;

  const confirmMarkPaid = (paidDate) => {
    if (!invoiceToMarkPaid) return;
    onSaveInvoice(
      { ...invoiceToMarkPaid, status: 'paid', paidDate },
      `Gemarkeerd als betaald op ${paidDate}`
    );
    setInvoiceToMarkPaid(null);
  };

  if (authLoading || (isLoadingInvoices && !userInvoices.length && user) || (user && metaLoading)) {
    return (
      <div className="flex h-[70vh] flex-col items-center justify-center bg-[#f6f4f1]">
        <Loader2 className="mb-4 h-10 w-10 animate-spin text-deep-blue" />
        <p className="text-slate-500">Overzicht laden…</p>
      </div>
    );
  }

  if (!user && !authLoading) return null;

  return (
    <div className="bg-[#f6f4f1]">
      <div className="px-4 py-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-slate-400">
                {monthLabel}
              </p>
              <h1 className="mt-1 font-heading text-xl font-bold tracking-tight text-deep-blue sm:text-2xl">
                {greeting}, {firstName}
              </h1>
              <p className="mt-1 text-sm text-slate-500">Hoe je bedrijf ervoor staat</p>
            </div>
            <Link
              href="/create-invoice"
              className="inline-flex items-center gap-1.5 rounded-full bg-deep-blue px-3.5 py-2 text-xs font-semibold text-white hover:bg-deep-blue/90"
            >
              <Plus className="h-3.5 w-3.5" /> Nieuwe factuur
            </Link>
          </div>

          <div className="mt-6">
            <DashboardAttention
              actions={attentionActions}
              onboarding={onboarding}
              onViewInvoice={(id) => router.push(`/create-invoice?id=${id}`)}
              onSendReminder={(invoice) => setSelectedInvoiceForReminder(invoice)}
              onMarkPaid={setInvoiceToMarkPaid}
            />
          </div>

          <DashboardStats
            revenueThisMonth={revenueThisMonth}
            expensesThisMonth={expensesMonth.amountExcl}
            resultaat={resultaat}
          />

          <div className="mt-3 grid gap-3 lg:grid-cols-[1.45fr_1fr]">
            <DashboardCharts invoices={userInvoices} expenses={expenses} incomes={incomes} />
            <DashboardSideMetrics
              totalOutstandingAmount={totalOutstandingAmount}
              outstandingInvoicesCount={outstandingInvoicesCount}
              btwTeReserveren={btwTeReserveren}
              salesBtwThisMonth={salesBtwThisMonth}
              expensesBtwThisMonth={expensesMonth.vatAmount}
            />
          </div>

          <div className="mt-3">
            <DashboardRecentInvoices invoices={userInvoices} />
          </div>

          <div className="mt-3">
            <DashboardGoal userId={user.id} ytd={ytd} initialGoal={yearlyGoal} year={year} />
          </div>
        </div>
      </div>

      {selectedInvoiceForReminder && (
        <ReminderDialog
          invoice={selectedInvoiceForReminder}
          isOpen={!!selectedInvoiceForReminder}
          onClose={() => setSelectedInvoiceForReminder(null)}
          onActionLog={(invoice, logMessage) => onSaveInvoice(invoice, logMessage)}
          user={user}
          profile={profile}
        />
      )}
      {invoiceToMarkPaid && (
        <MarkPaidDialog
          invoice={invoiceToMarkPaid}
          invoices={userInvoices}
          isOpen={!!invoiceToMarkPaid}
          onClose={() => setInvoiceToMarkPaid(null)}
          onConfirm={confirmMarkPaid}
        />
      )}
    </div>
  );
}
