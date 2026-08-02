import React from 'react';
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
    <div className="space-y-6">
      {isLoggedIn && onImportFromProfile && (
        <div className="flex flex-col gap-2 rounded-lg border border-warm-orange/30 bg-orange-50/60 p-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-700">
            <span className="font-medium text-deep-blue">Profiel gevonden.</span> Vul je opgeslagen
            bedrijfsgegevens in op deze factuur.
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
            Importeer uit profiel
          </Button>
        </div>
      )}

      <div className="flex flex-col items-start gap-6 sm:flex-row">
        <div className="flex-shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={onLogoUpload}
            accept="image/*"
            className="hidden"
          />
          {logo ? (
            <div>
              <img
                src={logo}
                alt="Bedrijfslogo"
                className="h-24 w-24 rounded-lg border border-gray-200 object-contain shadow-sm sm:h-32 sm:w-32"
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="mt-2 w-full text-xs"
                onClick={() => fileInputRef.current?.click()}
              >
                Ander logo
              </Button>
            </div>
          ) : (
            <div className="flex h-24 w-24 items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 sm:h-32 sm:w-32">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex h-auto flex-col items-center p-3 text-sm"
              >
                <Upload className="mb-1 h-6 w-6" />
                Logo
              </Button>
            </div>
          )}
        </div>
        <div className="w-full flex-grow space-y-4">
          <FormInput
            name="name"
            value={companyDetails.name || ''}
            onChange={handleDetailChange}
            placeholder="Uw Bedrijfsnaam"
            className="border-gray-300 bg-gray-50 text-2xl font-bold focus:border-blue-500 focus:ring-blue-500"
          />
          <FormInput
            label="Straatnaam en nummer"
            name="street"
            value={companyDetails.street || ''}
            onChange={handleDetailChange}
            placeholder="Bijv. Hoofdstraat 12"
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
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <FormInput
          label="E-mailadres (optioneel)"
          name="email"
          type="email"
          value={companyDetails.email || ''}
          onChange={handleDetailChange}
          placeholder="info@uwbedrijf.nl"
        />
        <FormInput
          label="IBAN"
          name="iban"
          value={companyDetails.iban || ''}
          onChange={handleDetailChange}
          placeholder="Uw IBAN"
        />
      </div>

      <MeerOpties defaultOpen={hasAdvancedFields}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <FormInput
            label="KVK-nummer"
            name="kvk"
            value={companyDetails.kvk || ''}
            onChange={handleDetailChange}
            placeholder="Uw KVK-nummer"
          />
          <FormInput
            label="BTW-nummer"
            name="btw"
            value={companyDetails.btw || ''}
            onChange={handleDetailChange}
            placeholder="Uw BTW-nummer"
          />
        </div>
      </MeerOpties>

      {isLoggedIn ? (
        <div className="space-y-3 rounded-lg border border-deep-blue/20 bg-sky-50/70 p-4">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium text-deep-blue">Opslaan in je account</p>
              <p className="mt-1 text-xs text-slate-600">
                Bewaar deze bedrijfsgegevens in je FactuurBaas-profiel (niet alleen in de browser).
              </p>
            </div>
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
        </div>
      ) : (
        <div className="space-y-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <label className="flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              checked={rememberCompanyDetails}
              onChange={(e) => onRememberChange(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">
              <span className="font-medium text-slate-900">Onthoud mijn bedrijfsgegevens op dit apparaat</span>
              <span className="mt-1 block text-slate-500">
                Alleen in je browser. Log in om gegevens in je account te bewaren.
              </span>
            </span>
          </label>
          {rememberCompanyDetails && (
            <p className="flex items-center gap-2 pl-7 text-sm font-medium text-green-700">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              Bedrijfsgegevens worden lokaal opgeslagen.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default CompanyDetailsForm;
