'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { ArrowLeft, UserCircle, Building, Camera, Save, LogOut, Loader2, Trash2, Briefcase } from 'lucide-react';
import ProfileSection from '@/components/profile/ProfileSection';
import PersonalDetailsForm from '@/components/profile/formSections/PersonalDetailsForm';
import CompanyDetailsForm from '@/components/profile/formSections/CompanyDetailsForm';
import LogoUploadForm from '@/components/profile/formSections/LogoUploadForm';
import {
  dbProfileToFormCompanyDetails,
  profileFormToDbFields,
} from '@/lib/profileToInvoice';
import {
  normalizeLogoRef,
  resolveLogoForDisplay,
  uploadLogoDataUrl,
  isDataUrl,
} from '@/lib/logoStorage';
import PrivacyConsentCheckbox from '@/components/auth/PrivacyConsentCheckbox';
import NewsletterOptInCheckbox from '@/components/auth/NewsletterOptInCheckbox';
import OnboardingFields from '@/components/onboarding/OnboardingFields';
import { PRIVACY_POLICY_VERSION } from '@/lib/privacyConsent';
import {
  emptyOnboardingForm,
  onboardingFormToDbFields,
  profileToOnboardingForm,
} from '@/lib/onboardingProfile';

const ProfilePage = () => {
  const router = useRouter();
  const { user, loading: authLoading, signOut, session } = useAuth();
  const { toast } = useToast();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyDetails: {
      name: '',
      street: '',
      postalCode: '',
      city: '',
      country: 'Nederland',
      kvk: '',
      btw: '',
      iban: '',
    },
    logo: null,
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [privacyAcceptedAt, setPrivacyAcceptedAt] = useState(null);
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const [newsletterOptIn, setNewsletterOptIn] = useState(false);
  const [newsletterOptInAt, setNewsletterOptInAt] = useState(null);
  const [onboardingForm, setOnboardingForm] = useState(emptyOnboardingForm());

  const loadProfile = useCallback(async () => {
    if (!user) {
      setIsLoadingPage(false);
      return;
    }

    setIsLoadingPage(true);
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .maybeSingle();

      if (error) throw error;

      setFormData({
        name: data?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0] || '',
        email: user.email || '',
        companyDetails: dbProfileToFormCompanyDetails(data),
        logo: normalizeLogoRef(data?.logo_url) || null,
      });
      const preview = await resolveLogoForDisplay(supabase, data?.logo_url);
      setLogoPreview(preview);
      setPrivacyAcceptedAt(data?.privacy_accepted_at || null);
      setPrivacyChecked(Boolean(data?.privacy_accepted_at));
      setNewsletterOptIn(Boolean(data?.newsletter_opt_in));
      setNewsletterOptInAt(data?.newsletter_opt_in_at || null);
      setOnboardingForm(profileToOnboardingForm(data));
    } catch (err) {
      toast({
        title: 'Profiel laden mislukt',
        description: err.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoadingPage(false);
    }
  }, [user, toast]);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.replace('/login?next=/profile');
      return;
    }
    loadProfile();
  }, [user, authLoading, router, loadProfile]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCompanyDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      companyDetails: { ...prev.companyDetails, [name]: value },
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 2 * 1024 * 1024) {
      toast({
        title: 'Logo te groot',
        description: 'Kies een logo kleiner dan 2MB.',
        variant: 'destructive',
      });
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setLogoPreview(reader.result);
      setFormData((prev) => ({ ...prev, logo: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) return;

    if (!privacyChecked) {
      toast({
        title: 'Akkoord vereist',
        description: 'Bevestig het privacybeleid om je profiel op te slaan.',
        variant: 'destructive',
      });
      return;
    }

    setIsSaving(true);
    try {
      let logoPath = formData.logo;
      if (isDataUrl(logoPath)) {
        logoPath = await uploadLogoDataUrl(supabase, user.id, logoPath, 'logo');
      } else {
        logoPath = normalizeLogoRef(logoPath);
      }

      const acceptedAt = privacyAcceptedAt || new Date().toISOString();
      const nextNewsletterAt = newsletterOptIn
        ? newsletterOptInAt || new Date().toISOString()
        : null;
      const payload = {
        id: user.id,
        full_name: formData.name,
        ...profileFormToDbFields(formData.companyDetails),
        ...onboardingFormToDbFields(onboardingForm),
        onboarding_completed_at: new Date().toISOString(),
        logo_url: logoPath,
        privacy_accepted_at: acceptedAt,
        privacy_policy_version: PRIVACY_POLICY_VERSION,
        newsletter_opt_in: newsletterOptIn,
        newsletter_opt_in_at: nextNewsletterAt,
        updated_at: new Date().toISOString(),
      };

      const { error } = await supabase.from('profiles').upsert(payload, { onConflict: 'id' });
      if (error) throw error;

      const preview = await resolveLogoForDisplay(supabase, logoPath);
      setFormData((prev) => ({ ...prev, logo: logoPath }));
      setLogoPreview(preview);
      setPrivacyAcceptedAt(acceptedAt);
      setNewsletterOptInAt(nextNewsletterAt);
      toast({
        title: 'Profiel opgeslagen',
        description: 'Je gegevens zijn bijgewerkt.',
      });
    } catch (error) {
      toast({
        title: 'Fout bij opslaan',
        description: error.message || 'Probeer het opnieuw.',
        variant: 'destructive',
      });
    } finally {
      setIsSaving(false);
    }
  };

  const onLogout = async () => {
    await signOut();
    router.push('/');
  };

  const onDeleteAccount = async () => {
    const confirmed = window.confirm(
      'Weet je zeker dat je je account en alle opgeslagen facturen permanent wilt verwijderen? Dit kan niet ongedaan worden gemaakt.'
    );
    if (!confirmed) return;

    setIsDeleting(true);
    try {
      const token = session?.access_token;
      const res = await fetch('/api/account/delete', {
        method: 'DELETE',
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || 'Verwijderen mislukt');

      // User is already gone server-side — clear local JWT only (global revoke would fail).
      await signOut();
      toast({ title: 'Account verwijderd', description: 'Je gegevens zijn gewist.' });
      router.push('/');
    } catch (err) {
      toast({
        title: 'Account verwijderen mislukt',
        description: err.message,
        variant: 'destructive',
      });
    } finally {
      setIsDeleting(false);
    }
  };

  if (authLoading || isLoadingPage) {
    return (
      <div className="flex h-[70vh] items-center justify-center bg-[#f7f8fb]">
        <Loader2 className="mr-3 h-8 w-8 animate-spin text-deep-blue" />
        <p className="text-slate-500">Profiel laden…</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-[#f7f8fb] px-4 py-8 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-10"
      >
        <div className="mb-10 flex flex-col items-center justify-between border-b border-slate-100 pb-6 sm:flex-row">
          <div className="flex items-center">
            <UserCircle className="mr-4 h-12 w-12 shrink-0 text-deep-blue" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Account</p>
              <h1 className="font-heading text-3xl font-bold tracking-tight text-deep-blue">Profiel</h1>
              <p className="mt-1 text-sm text-slate-500">Bedrijfsgegevens voor sneller factureren.</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="mt-4 shrink-0 rounded-xl border-slate-200 sm:mt-0"
            onClick={() => router.push('/dashboard')}
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Dashboard
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <ProfileSection title="Persoonlijke Gegevens" icon={<UserCircle className="h-6 w-6 text-deep-blue" />}>
            <PersonalDetailsForm
              name={formData.name}
              email={formData.email}
              onInputChange={handleInputChange}
              disabled={isSaving}
            />
          </ProfileSection>

          <ProfileSection title="Bedrijfsgegevens" icon={<Building className="h-6 w-6 text-deep-blue" />}>
            <CompanyDetailsForm
              companyDetails={formData.companyDetails}
              onCompanyDetailsChange={handleCompanyDetailsChange}
              disabled={isSaving}
            />
          </ProfileSection>

          <ProfileSection title="Bedrijfslogo" icon={<Camera className="h-6 w-6 text-deep-blue" />}>
            <LogoUploadForm
              logoPreview={logoPreview}
              fileInputRef={fileInputRef}
              onLogoChange={handleLogoChange}
              disabled={isSaving}
            />
          </ProfileSection>

          <ProfileSection
            title="Over jouw onderneming"
            icon={<Briefcase className="h-6 w-6 text-deep-blue" />}
          >
            <p className="mb-4 text-sm text-slate-500">
              Optioneel — helpt ons FactuurBaas beter af te stemmen op jouw branche. Niet openbaar.
            </p>
            <OnboardingFields
              form={onboardingForm}
              onChange={setOnboardingForm}
              disabled={isSaving}
              idPrefix="profile-onboarding"
            />
          </ProfileSection>

          <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 space-y-3">
            <p className="text-sm font-medium text-deep-blue">Privacy & voorwaarden</p>
            <PrivacyConsentCheckbox
              id="profile-privacy-consent"
              checked={privacyChecked}
              onCheckedChange={setPrivacyChecked}
              disabled={isSaving}
            />
            {privacyAcceptedAt && (
              <p className="text-xs text-slate-500">
                Eerder geaccepteerd op{' '}
                {new Date(privacyAcceptedAt).toLocaleString('nl-NL', {
                  dateStyle: 'medium',
                  timeStyle: 'short',
                })}
                .
              </p>
            )}
            <NewsletterOptInCheckbox
              id="profile-newsletter-opt-in"
              checked={newsletterOptIn}
              onCheckedChange={setNewsletterOptIn}
              disabled={isSaving}
            />
          </div>

          <div className="flex flex-col gap-3 border-t border-gray-200 pt-6 sm:flex-row sm:justify-between">
            <Button type="button" variant="outline" onClick={onLogout} disabled={isSaving || isDeleting}>
              <LogOut className="mr-2 h-4 w-4" /> Uitloggen
            </Button>
            <Button
              type="submit"
              disabled={isSaving || isDeleting || !privacyChecked}
              className="bg-deep-blue hover:bg-deep-blue/90"
            >
              {isSaving ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Save className="mr-2 h-4 w-4" />}
              Opslaan
            </Button>
          </div>
        </form>

        <div className="mt-10 rounded-xl border border-red-200 bg-red-50 p-5">
          <h2 className="font-semibold text-red-800">Account verwijderen</h2>
          <p className="mt-2 text-sm text-red-700">
            Verwijdert permanent je account, opgeslagen facturen en logo (AVG recht op vergetelheid).
          </p>
          <Button
            type="button"
            variant="destructive"
            className="mt-4"
            onClick={onDeleteAccount}
            disabled={isDeleting || isSaving}
          >
            {isDeleting ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Trash2 className="mr-2 h-4 w-4" />}
            Account en gegevens wissen
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilePage;
