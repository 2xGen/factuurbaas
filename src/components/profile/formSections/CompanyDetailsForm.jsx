import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const CompanyDetailsForm = ({ companyDetails, onCompanyDetailsChange, disabled }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="companyName" className="text-gray-700">
          Bedrijfsnaam
        </Label>
        <Input
          type="text"
          name="name"
          id="companyName"
          placeholder="Naam van je bedrijf"
          value={companyDetails.name || ''}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div>
        <Label htmlFor="companyStreet" className="text-gray-700">
          Straatnaam en nummer
        </Label>
        <Input
          type="text"
          name="street"
          id="companyStreet"
          placeholder="Bijv. Hoofdstraat 12"
          value={companyDetails.street || ''}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="companyPostalCode" className="text-gray-700">
            Postcode
          </Label>
          <Input
            type="text"
            name="postalCode"
            id="companyPostalCode"
            placeholder="1234 AB"
            value={companyDetails.postalCode || ''}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="companyCity" className="text-gray-700">
            Plaats
          </Label>
          <Input
            type="text"
            name="city"
            id="companyCity"
            placeholder="Amsterdam"
            value={companyDetails.city || ''}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="companyCountry" className="text-gray-700">
          Land
        </Label>
        <Input
          type="text"
          name="country"
          id="companyCountry"
          placeholder="Nederland"
          value={companyDetails.country || ''}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <Label htmlFor="companyKvk" className="text-gray-700">
            KVK-nummer
          </Label>
          <Input
            type="text"
            name="kvk"
            id="companyKvk"
            placeholder="Je KVK-nummer"
            value={companyDetails.kvk || ''}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="companyBtw" className="text-gray-700">
            BTW-identificatienummer
          </Label>
          <Input
            type="text"
            name="btw"
            id="companyBtw"
            placeholder="Je BTW-nummer"
            value={companyDetails.btw || ''}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="companyIban" className="text-gray-700">
          IBAN
        </Label>
        <Input
          type="text"
          name="iban"
          id="companyIban"
          placeholder="Je zakelijke IBAN"
          value={companyDetails.iban || ''}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 bg-white text-gray-900 placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default CompanyDetailsForm;
