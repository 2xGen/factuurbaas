import React, { useState } from 'react';
import FormInput from '@/components/invoice/formElements/FormInput';
import MeerOpties from '@/components/invoice/formElements/MeerOpties';
import ClientPicker from '@/components/invoice/ClientPicker';

const ToggleLink = ({ open, onToggle, children }) => (
  <button
    type="button"
    onClick={onToggle}
    className="text-sm font-medium text-warm-orange hover:underline"
  >
    {open ? 'Verbergen' : children}
  </button>
);

const ReceiverDetailsForm = ({ receiverDetails, onInputChange, isLoggedIn, onApplyReceiver }) => {
  const handleChange = (e) => {
    onInputChange({
      target: {
        name: e.target.name,
        value: e.target.value,
        dataset: { section: 'receiverDetails' },
      },
    });
  };

  const applyClient = (details) => {
    if (onApplyReceiver) {
      onApplyReceiver(details);
      return;
    }
    Object.entries(details).forEach(([name, value]) => {
      onInputChange({
        target: {
          name,
          value: value || '',
          dataset: { section: 'receiverDetails' },
        },
      });
    });
  };

  const r = receiverDetails || {};
  const hasContact = Boolean(r.contactPerson);
  const hasEmail = Boolean(r.email);
  const hasAddress = Boolean(r.street || r.postalCode || r.city || (r.country && r.country !== 'Nederland'));
  const hasAdvancedFields = Boolean(r.phone || r.kvk || r.btw);

  const [showContact, setShowContact] = useState(hasContact);
  const [showEmail, setShowEmail] = useState(hasEmail);
  const [showAddress, setShowAddress] = useState(hasAddress);

  return (
    <div className="space-y-4">
      {isLoggedIn && (
        <ClientPicker receiverDetails={receiverDetails} onApply={applyClient} />
      )}

      <FormInput
        label="Bedrijfsnaam of naam"
        name="companyName"
        value={r.companyName || ''}
        onChange={handleChange}
        placeholder="Naam van je klant"
      />

      <div className="flex flex-wrap gap-x-4 gap-y-2">
        {!showContact && (
          <ToggleLink open={false} onToggle={() => setShowContact(true)}>
            + Contactpersoon
          </ToggleLink>
        )}
        {!showEmail && (
          <ToggleLink open={false} onToggle={() => setShowEmail(true)}>
            + E-mailadres
          </ToggleLink>
        )}
        {!showAddress && (
          <ToggleLink open={false} onToggle={() => setShowAddress(true)}>
            + Adres
          </ToggleLink>
        )}
      </div>

      {showContact && (
        <FormInput
          label="Contactpersoon"
          name="contactPerson"
          value={r.contactPerson || ''}
          onChange={handleChange}
          placeholder="Naam contactpersoon"
        />
      )}

      {showEmail && (
        <FormInput
          label="E-mailadres"
          name="email"
          value={r.email || ''}
          onChange={handleChange}
          type="email"
          placeholder="email@klant.nl"
        />
      )}

      {showAddress && (
        <div className="space-y-4 rounded-lg border border-slate-100 bg-slate-50/50 p-3">
          <FormInput
            label="Straat + huisnummer"
            name="street"
            value={r.street || ''}
            onChange={handleChange}
            placeholder="Hoofdstraat 12"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label="Postcode"
              name="postalCode"
              value={r.postalCode || ''}
              onChange={handleChange}
              placeholder="1234 AB"
            />
            <FormInput
              label="Plaats"
              name="city"
              value={r.city || ''}
              onChange={handleChange}
              placeholder="Amsterdam"
            />
          </div>
          <FormInput
            label="Land"
            name="country"
            value={r.country || ''}
            onChange={handleChange}
            placeholder="Nederland"
          />
        </div>
      )}

      <MeerOpties defaultOpen={hasAdvancedFields} label="Meer klantgegevens">
        <FormInput
          label="Telefoon"
          name="phone"
          value={r.phone || ''}
          onChange={handleChange}
          type="tel"
          placeholder="+31 6 12345678"
        />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <FormInput
            label="KvK"
            name="kvk"
            value={r.kvk || ''}
            onChange={handleChange}
            placeholder="KVK-nummer klant"
          />
          <FormInput
            label="BTW-nummer"
            name="btw"
            value={r.btw || ''}
            onChange={handleChange}
            placeholder="BTW-nummer klant"
          />
        </div>
      </MeerOpties>
    </div>
  );
};

export default ReceiverDetailsForm;
