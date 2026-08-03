'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import FormInput from '@/components/invoice/formElements/FormInput';
import FormTextarea from '@/components/invoice/formElements/FormTextarea';
import FormDatePicker from '@/components/invoice/formElements/FormDatePicker';
import InvoiceFormSection from '@/components/invoice/formSections/InvoiceFormSection';
import LayoutSelector from '@/components/invoice/LayoutSelector';
import FeatureUpdatesSignup from '@/components/invoice/FeatureUpdatesSignup';
import {
  Building2,
  FileText,
  PlusCircle,
  Trash2,
  Upload,
  Users,
  Briefcase,
  Palette,
  Bell,
  CheckCircle2,
} from 'lucide-react';

export default function OfferteMaker({ form }) {
  const {
    quote,
    setQuote,
    fileInputRef,
    updateCompany,
    updateClient,
    updateItem,
    addItem,
    removeItem,
    toggleOption,
    handleRememberChange,
    handleSelectLayout,
    handleLogoUpload,
  } = form;

  return (
    <div className="space-y-8">
      <InvoiceFormSection
        title="Jouw bedrijfsgegevens"
        icon={<Building2 className="h-5 w-5 text-blue-600" />}
      >
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            {quote.logo ? (
              <img
                src={quote.logo}
                alt="Logo"
                className="h-16 w-16 rounded-lg border object-contain"
              />
            ) : (
              <Button
                type="button"
                variant="outline"
                onClick={() => fileInputRef.current?.click()}
                className="h-16 w-16 flex-col gap-1 p-2"
              >
                <Upload className="h-4 w-4" />
                <span className="text-[10px]">Logo</span>
              </Button>
            )}
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleLogoUpload}
            />
            <div className="flex-grow space-y-3">
              <FormInput
                label="Bedrijfsnaam"
                name="name"
                value={quote.companyDetails.name}
                onChange={(e) => updateCompany('name', e.target.value)}
                placeholder="Studio Jansen"
              />
              <FormInput
                label="Straat en nummer"
                name="street"
                value={quote.companyDetails.street}
                onChange={(e) => updateCompany('street', e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              label="Postcode"
              name="postalCode"
              value={quote.companyDetails.postalCode}
              onChange={(e) => updateCompany('postalCode', e.target.value)}
            />
            <FormInput
              label="Plaats"
              name="city"
              value={quote.companyDetails.city}
              onChange={(e) => updateCompany('city', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label="E-mailadres"
              name="email"
              type="email"
              value={quote.companyDetails.email}
              onChange={(e) => updateCompany('email', e.target.value)}
            />
            <FormInput
              label="IBAN"
              name="iban"
              value={quote.companyDetails.iban}
              onChange={(e) => updateCompany('iban', e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <FormInput
              label="KvK-nummer"
              name="kvk"
              value={quote.companyDetails.kvk}
              onChange={(e) => updateCompany('kvk', e.target.value)}
            />
            <FormInput
              label="BTW-nummer"
              name="btw"
              value={quote.companyDetails.btw}
              onChange={(e) => updateCompany('btw', e.target.value)}
            />
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={quote.rememberCompanyDetails}
              onChange={(e) => handleRememberChange(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
            />
            <span className="text-sm text-slate-700">
              <span className="font-medium text-slate-900">
                Onthoud mijn bedrijfsgegevens op dit apparaat
              </span>
              <span className="block mt-1 text-slate-500">
                Opgeslagen in je browser. Wij slaan deze gegevens niet op onze servers op.
              </span>
            </span>
          </label>
          {quote.rememberCompanyDetails && (
            <p className="flex items-center gap-2 text-sm text-green-700 font-medium pl-7">
              <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
              Bedrijfsgegevens worden lokaal opgeslagen.
            </p>
          )}
        </div>
      </InvoiceFormSection>

      <InvoiceFormSection
        title="Offerte details"
        icon={<FileText className="h-5 w-5 text-blue-600" />}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <FormInput
            label="Offertenummer"
            name="quoteNumber"
            value={quote.quoteNumber}
            onChange={(e) => setQuote((p) => ({ ...p, quoteNumber: e.target.value }))}
          />
          <FormDatePicker
            label="Offertedatum"
            selected={quote.quoteDate}
            onChange={(date) => setQuote((p) => ({ ...p, quoteDate: date }))}
          />
          <FormDatePicker
            label="Geldig tot"
            selected={quote.validUntil}
            onChange={(date) => setQuote((p) => ({ ...p, validUntil: date }))}
          />
        </div>
      </InvoiceFormSection>

      <InvoiceFormSection
        title="Klantgegevens"
        icon={<Users className="h-5 w-5 text-blue-600" />}
      >
        <div className="space-y-4">
          <FormInput
            label="Bedrijfsnaam"
            value={quote.clientDetails.companyName}
            onChange={(e) => updateClient('companyName', e.target.value)}
          />
          <FormInput
            label="Contactpersoon"
            value={quote.clientDetails.contactPerson}
            onChange={(e) => updateClient('contactPerson', e.target.value)}
          />
          <FormInput
            label="E-mail"
            type="email"
            value={quote.clientDetails.email}
            onChange={(e) => updateClient('email', e.target.value)}
          />
          <FormTextarea
            label="Adres"
            value={quote.clientDetails.address}
            onChange={(e) => updateClient('address', e.target.value)}
            rows={3}
          />
        </div>
      </InvoiceFormSection>

      <InvoiceFormSection
        title="Werkzaamheden & prijzen"
        icon={<Briefcase className="h-5 w-5 text-blue-600" />}
      >
        <div className="space-y-4">
          {quote.items.map((item, index) => (
            <div
              key={item.id}
              className="relative rounded-lg border border-slate-200 bg-slate-50/50 p-4"
            >
              <FormInput
                label="Omschrijving"
                value={item.description}
                onChange={(e) => updateItem(index, 'description', e.target.value)}
                placeholder="Bijv. Website ontwerp"
              />
              <div className="mt-3 grid grid-cols-2 gap-3">
                <FormInput
                  label="Aantal"
                  type="number"
                  min="0"
                  value={item.quantity}
                  onChange={(e) => updateItem(index, 'quantity', e.target.value)}
                />
                <FormInput
                  label="Prijs per stuk"
                  type="number"
                  min="0"
                  step="0.01"
                  value={item.price}
                  onChange={(e) => updateItem(index, 'price', e.target.value)}
                />
              </div>
              {quote.items.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-2 text-red-500"
                  onClick={() => removeItem(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
          ))}
          <Button type="button" variant="outline" onClick={addItem} className="w-full sm:w-auto">
            <PlusCircle className="mr-2 h-4 w-4" />
            Regel toevoegen
          </Button>

          <div className="pt-2">
            <p className="mb-2 text-sm font-medium text-slate-700">BTW percentage</p>
            <div className="flex flex-wrap gap-3">
              {[21, 9, 0].map((rate) => (
                <label key={rate} className="flex cursor-pointer items-center gap-2 text-sm">
                  <input
                    type="radio"
                    name="taxRate"
                    checked={quote.taxRate === rate}
                    onChange={() => setQuote((p) => ({ ...p, taxRate: rate }))}
                    className="h-4 w-4 text-blue-600"
                  />
                  {rate}%
                </label>
              ))}
            </div>
          </div>
        </div>
      </InvoiceFormSection>

      <InvoiceFormSection
        title="Kies Jouw Offerte Stijl"
        icon={<Palette className="h-5 w-5 text-blue-600" />}
      >
        <LayoutSelector
          currentLayout={quote.layout}
          onSelectLayout={handleSelectLayout}
          styleLabel="Kies Offerte Stijl:"
        />
      </InvoiceFormSection>

      <InvoiceFormSection title="Extra opties">
        <div className="space-y-3">
          {[
            { key: 'showValidity', label: 'Geldigheidsduur offerte tonen' },
            { key: 'showTerms', label: 'Algemene voorwaarden toevoegen' },
            { key: 'showSignature', label: 'Handtekening toevoegen' },
            { key: 'showPaymentTerms', label: 'Betalingsvoorwaarden toevoegen' },
            {
              key: 'showFactuurBaasBranding',
              label: 'Toon “Gratis gemaakt met FactuurBaas.nl” op de PDF',
              hint: 'Helpt ons groeien, zodat we meer gratis features kunnen maken. Je kunt dit uitzetten.',
            },
          ].map(({ key, label, hint }) => (
            <label key={key} className="flex cursor-pointer items-start gap-3">
              <input
                type="checkbox"
                checked={quote.options[key] !== false}
                onChange={() => toggleOption(key)}
                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-blue-600"
              />
              <span className="text-sm leading-relaxed text-slate-700">
                {label}
                {hint && <span className="mt-0.5 block text-xs text-slate-500">{hint}</span>}
              </span>
            </label>
          ))}
          {quote.options.showTerms && (
            <FormTextarea
              label="Voorwaarden"
              value={quote.terms}
              onChange={(e) => setQuote((p) => ({ ...p, terms: e.target.value }))}
              rows={3}
            />
          )}
        </div>
      </InvoiceFormSection>

      <InvoiceFormSection
        title="Binnenkort & blijf op de hoogte"
        icon={<Bell className="h-5 w-5 text-blue-600" />}
      >
        <FeatureUpdatesSignup companyEmail={quote.companyDetails?.email} />
      </InvoiceFormSection>
    </div>
  );
}
