import { useState, useRef, useEffect } from 'react';
import { defaultQuote } from '@/config/quoteDefaults';
import { consumeQuotePrefill } from '@/lib/invoicePrefill';
import {
  loadRememberPreference,
  loadSavedCompanyDetails,
  saveCompanyDetails,
  saveRememberPreference,
} from '@/lib/invoiceLocalStorage';

function buildInitialQuote() {
  const saved = loadSavedCompanyDetails();
  const remember = loadRememberPreference();
  if (saved?.companyDetails) {
    return {
      ...defaultQuote,
      companyDetails: { ...defaultQuote.companyDetails, ...saved.companyDetails },
      logo: saved.logo || null,
      rememberCompanyDetails: remember,
    };
  }
  return { ...defaultQuote, rememberCompanyDetails: remember };
}

export function useQuoteForm() {
  const fileInputRef = useRef(null);
  const [quote, setQuote] = useState(buildInitialQuote);

  useEffect(() => {
    const prefill = consumeQuotePrefill();
    if (!prefill?.hourlyRate) return;
    setQuote((prev) => ({
      ...prev,
      items: [
        {
          id: Date.now(),
          description: 'Uurtarief advies',
          quantity: 1,
          price: Math.round(prefill.hourlyRate * 100) / 100,
        },
      ],
    }));
  }, []);

  useEffect(() => {
    if (quote.rememberCompanyDetails) {
      saveCompanyDetails(quote.companyDetails, quote.logo);
      saveRememberPreference(true);
    }
  }, [quote.companyDetails, quote.logo, quote.rememberCompanyDetails]);

  const updateCompany = (name, value) => {
    setQuote((prev) => ({
      ...prev,
      companyDetails: { ...prev.companyDetails, [name]: value },
    }));
  };

  const updateClient = (name, value) => {
    setQuote((prev) => ({
      ...prev,
      clientDetails: { ...prev.clientDetails, [name]: value },
    }));
  };

  const updateItem = (index, field, value) => {
    setQuote((prev) => {
      const items = [...prev.items];
      items[index] = { ...items[index], [field]: value };
      return { ...prev, items };
    });
  };

  const addItem = () => {
    setQuote((prev) => ({
      ...prev,
      items: [...prev.items, { id: Date.now(), description: '', quantity: 1, price: 0 }],
    }));
  };

  const removeItem = (index) => {
    setQuote((prev) => ({
      ...prev,
      items: prev.items.filter((_, i) => i !== index),
    }));
  };

  const toggleOption = (key) => {
    setQuote((prev) => ({
      ...prev,
      options: { ...prev.options, [key]: !prev.options[key] },
    }));
  };

  const handleRememberChange = (checked) => {
    setQuote((prev) => ({ ...prev, rememberCompanyDetails: checked }));
    if (!checked) {
      saveRememberPreference(false);
    }
  };

  const handleSelectLayout = (layoutId) => {
    setQuote((prev) => ({ ...prev, layout: layoutId }));
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setQuote((prev) => ({ ...prev, logo: reader.result }));
    reader.readAsDataURL(file);
  };

  return {
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
  };
}
