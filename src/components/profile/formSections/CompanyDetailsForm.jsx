import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const CompanyDetailsForm = ({ companyDetails, onCompanyDetailsChange, disabled }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="companyName" className="text-gray-700">Bedrijfsnaam</Label>
        <Input
          type="text"
          name="name"
          id="companyName"
          placeholder="Naam van je bedrijf"
          value={companyDetails.name}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
        />
      </div>
      <div>
        <Label htmlFor="companyAddress" className="text-gray-700">Bedrijfsadres</Label>
        <Textarea
          name="address"
          id="companyAddress"
          placeholder="Straatnaam & Huisnummer&#10;Postcode & Plaats&#10;Land"
          value={companyDetails.address}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
          rows={3}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="companyKvk" className="text-gray-700">KVK-nummer</Label>
          <Input
            type="text"
            name="kvk"
            id="companyKvk"
            placeholder="Je KVK-nummer"
            value={companyDetails.kvk}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
          />
        </div>
        <div>
          <Label htmlFor="companyBtw" className="text-gray-700">BTW-identificatienummer</Label>
          <Input
            type="text"
            name="btw"
            id="companyBtw"
            placeholder="Je BTW-nummer"
            value={companyDetails.btw}
            onChange={onCompanyDetailsChange}
            disabled={disabled}
            className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
          />
        </div>
      </div>
      <div>
        <Label htmlFor="companyIban" className="text-gray-700">IBAN</Label>
        <Input
          type="text"
          name="iban"
          id="companyIban"
          placeholder="Je zakelijke IBAN"
          value={companyDetails.iban}
          onChange={onCompanyDetailsChange}
          disabled={disabled}
          className="mt-1 text-gray-900 bg-white placeholder:text-gray-400"
        />
      </div>
    </div>
  );
};

export default CompanyDetailsForm;