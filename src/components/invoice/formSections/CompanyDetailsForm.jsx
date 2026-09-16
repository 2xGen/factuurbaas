import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle2, UserCircle, Loader2 } from 'lucide-react';
import FormInput from '@/components/invoice/formElements/FormInput';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';

const CompanyDetailsForm = ({
  companyDetails,
  logo,
  rememberCompanyDetails,
  onInputChange,
  onLogoUpload,
  onRememberChange,
  fileInputRef,
  isLoggedIn = false,
  onImportFromProfile,
  isImportingProfile = false,
  onSaveToAccount,
  isSavingToAccount = false,
}) => {
  const handleDetailChange = (e) => {
    onInputChange({
      target: {
        name: e.target.name,
        value: e.target.value,
        dataset: { section: 'companyDetails' },
      },
    });
  };

  const hasAdvancedFields = Boolean(companyDetails.kvk || companyDetails.btw);

  return (
    <div className="space-y-5">
      {isLoggedIn && onImportFromProfile && (
        <div className="flex flex-col gap-2 rounded-lg border border-warm-orange/30 bg-orange-50/60 p-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">
            Vul je opgeslagen bedrijfsgegevens in.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="shrink-0 border-warm-orange text-warm-orange hover:bg-orange-100"
            onClick={onImportFromProfile}
            disabled={isImportingProfile}
          >
            {isImportingProfile ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <UserCircle className="mr-2 h-4 w-4" />
            )}
            Uit profiel
          </Button>
        </div>
      )}

      <FormInput
        label="Bedrijfsnaam"
        name="name"
        value={companyDetails.name || ''}
        onChange={handleDetailChange}
        placeholder="Jouw bedrijfsnaam"
      />

      <FormInput
        label="Straat + huisnummer"
        name="street"
        value={companyDetails.street || ''}
        onChange={handleDetailChange}
        placeholder="Hoofdstraat 12"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormInput
          label="Postcode"
          name="postalCode"
          value={companyDetails.postalCode || ''}
          onChange={handleDetailChange}
          placeholder="1234 AB"
        />
        <FormInput
          label="Plaats"
          name="city"
          value={companyDetails.city || ''}
          onChange={handleDetailChange}
          placeholder="Amsterdam"
        />
      </div>

      <FormInput
        label="Land"
        name="country"
        value={companyDetails.country || ''}
        onChange={handleDetailChange}
        placeholder="Nederland"
      />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput
          label="IBAN"
          name="iban"
          value={companyDetails.iban || ''}
          onChange={handleDetailChange}
          placeholder="NL00 BANK 0123 4567 89"
        />
        <FormInput
          label="E-mail"
          name="email"
          type="email"
          value={companyDetails.email || ''}
          onChange={handleDetailChange}
          placeholder="jij@bedrijf.nl"
        />
      </div>

      <div>
        <p className="mb-2 text-sm font-medium text-gray-700">Logo</p>
        <input
          type="file"
          ref={fileInputRef}
          onChange={onLogoUpload}
          accept="image/*"
          className="hidden"
        />
        {logo ? (
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Bedrijfslogo"
              className="h-16 w-16 rounded-lg border border-gray-200 object-contain"
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={() => fileInputRef.current?.click()}
            >
              Ander logo
            </Button>
          </div>
        ) : (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => fileInputRef.current?.click()}
            className="gap-2"
          >
            <Upload className="h-4 w-4" />
            Logo toevoegen
          </Button>
        )}
      </div>

      <MeerOpties defaultOpen={hasAdvancedFields} label="Meer gegevens">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="KVK-nummer"
            name="kvk"
            value={companyDetails.kvk || ''}
            onChange={handleDetailChange}
            placeholder="12345678"
          />
          <FormInput
            label="BTW-nummer"
            name="btw"
            value={companyDetails.btw || ''}
            onChange={handleDetailChange}
            placeholder="NL123456789B01"
          />
        </div>
      </MeerOpties>

      {isLoggedIn ? (
        <div className="flex flex-col gap-3 rounded-lg border border-deep-blue/15 bg-sky-50/60 p-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-600">Bewaar deze gegevens in je account voor volgende facturen.</p>
          <Button
            type="button"
            size="sm"
            className="shrink-0 bg-deep-blue hover:bg-deep-blue/90"
            onClick={onSaveToAccount}
            disabled={isSavingToAccount || !onSaveToAccount}
          >
            {isSavingToAccount ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <CheckCircle2 className="mr-2 h-4 w-4" />
            )}
            Opslaan in account
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={rememberCompanyDetails}
              onChange={(e) => onRememberChange(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">
              Gegevens onthouden op dit apparaat
            </span>
          </label>
          <p className="text-xs text-slate-500">
            <Link href="/login?next=/create-invoice" className="font-medium text-warm-orange hover:underline">
              Inloggen
            </Link>{' '}
            om je gegevens veilig in je account te bewaren.
          </p>
        </div>
      )}
    </div>
  );
};

export default CompanyDetailsForm;
