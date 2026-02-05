'use client';
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useAppContext } from '@/contexts/AppContext';
import { ArrowLeft, UserCircle, Building, Camera, Save, LogOut, Loader2 } from 'lucide-react';
import ProfileSection from '@/components/profile/ProfileSection';
import PersonalDetailsForm from '@/components/profile/formSections/PersonalDetailsForm';
import CompanyDetailsForm from '@/components/profile/formSections/CompanyDetailsForm';
import LogoUploadForm from '@/components/profile/formSections/LogoUploadForm';

const ProfilePage = () => {
  const router = useRouter();
  const { user, profile, handleUpdateUserProfile, handleLogout, isLoading: appContextIsLoading } = useAppContext();
  const { toast } = useToast();
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    companyDetails: {
      name: '',
      address: '',
      kvk: '',
      btw: '',
      iban: '',
    },
    logo: null, 
  });
  const [logoPreview, setLogoPreview] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [isLoadingPage, setIsLoadingPage] = useState(true);

  const initializeProfileData = useCallback(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: user?.email || '',
        companyDetails: {
          name: profile.company_name || '',
          address: profile.company_address || '',
          kvk: profile.company_kvk || '',
          btw: profile.company_btw || '',
          iban: profile.company_iban || '',
        },
        logo: profile.logo_url || null,
      });
      if (profile.logo_url) {
        setLogoPreview(profile.logo_url);
      }
    } else if (user) {
      setFormData(prev => ({ ...prev, email: user.email, name: user.email?.split('@')[0] || '' }));
    }
    setIsLoadingPage(false);
  }, [profile, user]);

  useEffect(() => {
    if (!appContextIsLoading) {
      initializeProfileData();
    }
  }, [appContextIsLoading, initializeProfileData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCompanyDetailsChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      companyDetails: {
        ...prev.companyDetails,
        [name]: value,
      },
    }));
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) { 
        toast({ title: "Logo te groot", description: "Kies een logo kleiner dan 2MB.", variant: "destructive" });
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setFormData((prev) => ({ ...prev, logo: reader.result })); 
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await handleUpdateUserProfile(formData);
      toast({
        title: "Profiel Opgeslagen!",
        description: "Je gegevens zijn succesvol bijgewerkt.",
      });
    } catch (error) {
       toast({
        title: "Fout bij Opslaan",
        description: "Er is iets misgegaan. Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  const onLogout = async () => {
    await handleLogout();
    router.push('/');
  };
  
  if (isLoadingPage || appContextIsLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-sky-50">
        <Loader2 className="w-8 h-8 animate-spin text-deep-blue mr-3" />
        <p className="text-xl text-slate-500">Profiel laden...</p>
      </div>
    );
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50 py-8 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-200"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-200">
          <div className="flex items-center">
            <UserCircle className="w-12 h-12 text-deep-blue mr-4 shrink-0" />
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-deep-blue">Mijn Profiel</h1>
              <p className="text-gray-600 mt-1">Beheer je account- en bedrijfsgegevens.</p>
            </div>
          </div>
          <Button
            variant="ghost"
            className="mt-4 sm:mt-0 text-deep-blue hover:bg-sky-100 shrink-0"
            onClick={() => router.push('/dashboard')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" /> Terug naar Dashboard
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">
          <ProfileSection title="Persoonlijke Gegevens" icon={<UserCircle className="w-6 h-6 text-deep-blue" />}>
            <PersonalDetailsForm 
              name={formData.name}
              email={formData.email}
              onInputChange={handleInputChange}
              disabled={isSaving}
            />
          </ProfileSection>

          <ProfileSection title="Bedrijfsgegevens" icon={<Building className="w-6 h-6 text-deep-blue" />}>
            <CompanyDetailsForm 
              companyDetails={formData.companyDetails}
              onCompanyDetailsChange={handleCompanyDetailsChange}
              disabled={isSaving}
            />
          </ProfileSection>
          
          <ProfileSection title="Bedrijfslogo" icon={<Camera className="w-6 h-6 text-deep-blue" />}>
            <LogoUploadForm
              logoPreview={logoPreview}
              onLogoChange={handleLogoChange}
              fileInputRef={fileInputRef}
              disabled={isSaving}
            />
          </ProfileSection>

          <div className="flex flex-col sm:flex-row justify-between items-center pt-10 mt-10 border-t border-gray-200 space-y-4 sm:space-y-0">
            <Button
              type="submit"
              size="lg"
              className="w-full sm:w-auto bg-deep-blue hover:bg-blue-700 text-white text-base px-8 py-3 rounded-lg"
              disabled={isSaving}
            >
              {isSaving ? <Loader2 className="w-5 h-5 mr-2 animate-spin" /> : <Save className="w-5 h-5 mr-2" />}
              {isSaving ? 'Opslaan...' : 'Gegevens Opslaan'}
            </Button>
            <Button
              type="button"
              variant="destructive"
              size="lg"
              onClick={onLogout}
              disabled={isSaving}
              className="w-full sm:w-auto text-base px-8 py-3 rounded-lg"
            >
              <LogOut className="w-5 h-5 mr-2" /> Uitloggen
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

export default ProfilePage;