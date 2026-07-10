import React from 'react';
import { Button } from '@/components/ui/button';
import { Upload, CheckCircle2 } from 'lucide-react';
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
      <div className="flex flex-col sm:flex-row items-start gap-6">
        <div className="flex-shrink-0">
          {logo ? (
            <img
              src={logo}
              alt="Bedrijfslogo"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain rounded-lg border border-gray-200 shadow-sm"
            />
          ) : (
            <div className="w-24 h-24 sm:w-32 sm:h-32 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center bg-gray-50 hover:bg-gray-100 transition-colors cursor-pointer">
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="flex flex-col items-center text-sm h-auto p-3"
              >
                <Upload className="w-6 h-6 mb-1" />
                Logo
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={onLogoUpload}
                accept="image/*"
                className="hidden"
              />
            </div>
          )}
        </div>
        <div className="flex-grow w-full space-y-4">
          <FormInput
            name="name"
            value={companyDetails.name || ''}
            onChange={handleDetailChange}
            placeholder="Uw Bedrijfsnaam"
            className="text-2xl font-bold bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          />
          <FormInput
            label="Straatnaam en nummer"
            name="street"
            value={companyDetails.street || ''}
            onChange={handleDetailChange}
            placeholder="Bijv. Hoofdstraat 12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

      <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-3">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={rememberCompanyDetails}
            onChange={(e) => onRememberChange(e.target.checked)}
            className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          />
          <span className="text-sm text-slate-700">
            <span className="font-medium text-slate-900">Onthoud mijn bedrijfsgegevens op dit apparaat</span>
            <span className="block mt-1 text-slate-500">
              Opgeslagen in je browser. Wij slaan deze gegevens niet op onze servers op.
            </span>
          </span>
        </label>
        {rememberCompanyDetails && (
          <p className="flex items-center gap-2 text-sm text-green-700 font-medium pl-7">
            <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
            Bedrijfsgegevens worden lokaal opgeslagen.
          </p>
        )}
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
