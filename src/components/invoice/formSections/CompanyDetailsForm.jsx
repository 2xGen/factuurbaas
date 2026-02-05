import React from 'react';
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import FormInput from "@/components/invoice/formElements/FormInput";
import FormTextarea from "@/components/invoice/formElements/FormTextarea";

const CompanyDetailsForm = ({ companyDetails, logo, onInputChange, onLogoUpload, fileInputRef }) => {
  const handleDetailChange = (e) => {
    onInputChange({ 
      target: { 
        name: e.target.name, 
        value: e.target.value,
        dataset: { section: 'companyDetails' } 
      } 
    });
  };

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
        <div className="flex-grow w-full">
          <FormInput
            name="name"
            value={companyDetails.name || ''}
            onChange={handleDetailChange}
            placeholder="Uw Bedrijfsnaam"
            className="text-2xl font-bold bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-2"
          />
          <FormTextarea
            name="address"
            value={companyDetails.address || ''}
            onChange={handleDetailChange}
            placeholder="Straatnaam en nummer&#10;Postcode en Plaats&#10;Land"
            rows="3"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
        <FormInput
          label="IBAN"
          name="iban"
          value={companyDetails.iban || ''}
          onChange={handleDetailChange}
          placeholder="Uw IBAN"
        />
      </div>
    </div>
  );
};

export default CompanyDetailsForm;