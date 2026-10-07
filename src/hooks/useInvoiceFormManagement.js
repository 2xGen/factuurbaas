import { useState, useCallback, useEffect, useRef } from 'react';
import { addDays } from 'date-fns';
import { defaultInvoice } from '@/config/invoiceDefaults';
import {
  loadRememberPreference,
  loadSavedCompanyDetails,
  saveCompanyDetails,
  saveRememberPreference,
} from '@/lib/invoiceLocalStorage';
import { calculateDueDate, getPaymentTermsText } from '@/lib/invoiceUtils';
import { consumeInvoicePrefill, taxRateToInvoiceField } from '@/lib/invoicePrefill';
import { useAuth } from '@/contexts/SupabaseAuthContext';
import { supabase } from '@/lib/customSupabaseClient';
import { fetchBusinessSettings } from '@/lib/businessSettings';
import { fetchNextInvoiceNumber, isPersistedInvoiceId } from '@/lib/invoicePersistence';
import { paymentTermValueFromDays } from '@/lib/betaaltermijnCalculator';

function applyPaymentTermDays(invoice, days) {
  const n = Number(days);
  if (!Number.isFinite(n) || n <= 0) return invoice;
  const paymentTermDays = paymentTermValueFromDays(n);
  const invoiceDate =
    invoice.invoiceDate instanceof Date && !Number.isNaN(invoice.invoiceDate.getTime())
      ? invoice.invoiceDate
      : new Date();
  const dueDate = addDays(invoiceDate, n);
  const terms =
    paymentTermDays === 'custom'
      ? `Betaling binnen ${n} dagen.`
      : getPaymentTermsText(paymentTermDays, invoice.pdfLanguage);
  return { ...invoice, paymentTermDays, dueDate, terms };
}

function buildInitialInvoice() {
  const saved = loadSavedCompanyDetails();
  const remember = loadRememberPreference();
  if (saved?.companyDetails) {
    return {
      ...defaultInvoice,
      companyDetails: { ...defaultInvoice.companyDetails, ...saved.companyDetails },
      logo: saved.logo || null,
      rememberCompanyDetails: remember,
    };
  }
  return { ...defaultInvoice, rememberCompanyDetails: remember };
}

export const useInvoiceFormManagement = (initialInvoice) => {
  const { user } = useAuth();
  const [invoice, setInvoice] = useState(initialInvoice || buildInitialInvoice);
  const skipPaymentDefault = useRef(false);
  const skipHourlyDefault = useRef(false);
  const skipNumberDefault = useRef(false);
  const savedHourlyRateRef = useRef(null);
  const defaultsApplied = useRef(false);

  useEffect(() => {
    const prefill = consumeInvoicePrefill();
    if (!prefill) return;
    if (prefill.source === 'betaaltermijn-calculator') skipPaymentDefault.current = true;
    if (prefill.source === 'uurtarief-calculator' || prefill.source === 'uren') {
      skipHourlyDefault.current = true;
    }
    if (prefill.source === 'factuurnummer-generator') skipNumberDefault.current = true;

    if (prefill.source === 'uurtarief-calculator' && prefill.hourlyRate) {
      setInvoice((prev) => ({
        ...prev,
        workType: 'hourly',
        amount: String(Math.round(prefill.hourlyRate * 100) / 100),
        items: [],
        hoursWorked: [
          { id: Date.now(), date: new Date(), taskDescription: '', hours: 0 },
        ],
      }));
      return;
    }

    if (prefill.source === 'uren' && Array.isArray(prefill.hoursWorked) && prefill.hoursWorked.length) {
      const rate =
        prefill.hourlyRate != null && Number.isFinite(Number(prefill.hourlyRate))
          ? String(Math.round(Number(prefill.hourlyRate) * 100) / 100)
          : undefined;
      setInvoice((prev) => ({
        ...prev,
        workType: 'hourly',
        ...(rate != null ? { amount: rate } : {}),
        items: [],
        hoursWorked: prefill.hoursWorked.map((log, index) => ({
          id: log.id || Date.now() + index,
          date: log.date ? new Date(log.date) : new Date(),
          hours: Number(log.hours) || 0,
          taskDescription: log.taskDescription || '',
        })),
      }));
      return;
    }

    if (prefill.source === 'factuurnummer-generator' && prefill.invoiceNumber) {
      setInvoice((prev) => ({
        ...prev,
        invoice_number: prefill.invoiceNumber,
      }));
      return;
    }

    if (prefill.source === 'betaaltermijn-calculator') {
      setInvoice((prev) => {
        const invoiceDate = prefill.invoiceDate ? new Date(prefill.invoiceDate) : prev.invoiceDate;
        const dueDate = prefill.dueDate ? new Date(prefill.dueDate) : prev.dueDate;
        const paymentTermDays = prefill.paymentTermDays || prev.paymentTermDays;
        return {
          ...prev,
          invoiceDate,
          dueDate,
          paymentTermDays,
          terms:
            paymentTermDays === 'custom' && prefill.customDays
              ? `Betaling binnen ${prefill.customDays} dagen.`
              : getPaymentTermsText(paymentTermDays, prev.pdfLanguage),
        };
      });
      return;
    }

    if (prefill.source === 'offerte-maker') {
      const taxField = taxRateToInvoiceField(prefill.taxRate);
      const invoiceTax =
        prefill.tax != null && prefill.tax !== ''
          ? String(prefill.tax)
          : taxField;
      const client = prefill.clientDetails || {};
      let street = client.street || '';
      let postalCode = client.postalCode || '';
      let city = client.city || '';
      const country = client.country || '';
      if (!street && client.address) {
        const lines = String(client.address)
          .split(/\n/)
          .map((l) => l.trim())
          .filter(Boolean);
        street = lines[0] || '';
        if (lines[1]) {
          const match = lines[1].match(/^(\d{4}\s*[A-Za-z]{2})\s+(.*)$/);
          if (match) {
            postalCode = match[1].replace(/\s+/, ' ').trim();
            city = match[2].trim();
          } else {
            city = lines[1];
          }
        }
      }
      const mappedItems = (prefill.items || []).map((item, index) => ({
        id: Date.now() + index,
        itemName: item.description || '',
        itemDescription: '',
        quantity: item.quantity || 1,
        price: item.price || 0,
        tax: item.tax != null && item.tax !== '' ? String(item.tax) : invoiceTax,
        customTaxRate: item.customTaxRate,
      }));
      const mappedHours = (prefill.hoursWorked || []).map((log, index) => ({
        id: Date.now() + 1000 + index,
        taskDescription: log.taskDescription || '',
        hours: log.hours || 0,
        date: log.date ? new Date(log.date) : new Date(),
      }));
      const hasHours = mappedHours.length > 0;
      const hasItems = mappedItems.length > 0;
      setInvoice((prev) => ({
        ...prev,
        companyDetails: { ...prev.companyDetails, ...(prefill.companyDetails || {}) },
        logo: prefill.logo ?? prev.logo,
        receiverDetails: {
          ...prev.receiverDetails,
          companyName: client.companyName || '',
          contactPerson: client.contactPerson || '',
          email: client.email || '',
          street,
          postalCode,
          city,
          country,
          address: client.address || '',
        },
        workType: hasItems && hasHours ? 'mixed' : hasHours ? 'hourly' : 'fixed',
        tax: invoiceTax,
        customTaxRate: prefill.customTaxRate ?? prefill.taxRate,
        taxIncluded: Boolean(prefill.taxIncluded),
        amount: prefill.amount ?? prev.amount,
        items: mappedItems,
        hoursWorked: mappedHours,
        notes: prefill.notes || prev.notes,
        terms: prefill.terms || prev.terms,
        layout: prefill.layout || prev.layout,
      }));
      return;
    }

    if (!prefill.amountExcl) return;

    const taxField = taxRateToInvoiceField(prefill.taxRate);
    setInvoice((prev) => ({
      ...prev,
      workType: 'fixed',
      tax: taxField,
      customTaxRate: prefill.taxRate,
      taxIncluded: false,
      items: [
        {
          id: Date.now(),
          itemName: prefill.itemName || 'Dienst / product',
          itemDescription: '',
          quantity: 1,
          price: prefill.amountExcl,
        },
      ],
    }));
  }, []);

  useEffect(() => {
    if (invoice.rememberCompanyDetails) {
      saveCompanyDetails(invoice.companyDetails, invoice.logo);
      saveRememberPreference(true);
    }
  }, [invoice.companyDetails, invoice.logo, invoice.rememberCompanyDetails]);

  const handleInputChange = useCallback((e) => {
    const { name, value, type, checked, dataset } = e.target;
    const section = dataset ? dataset.section : undefined;

    setInvoice((prev) => {
      if (section === 'companyDetails') {
        return {
          ...prev,
          companyDetails: { ...prev.companyDetails, [name]: value },
        };
      }
      if (section === 'receiverDetails') {
        return {
          ...prev,
          receiverDetails: { ...prev.receiverDetails, [name]: value },
        };
      }
      if (section === 'extraCosts') {
        return {
          ...prev,
          extraCosts: { ...prev.extraCosts, [name]: parseFloat(value) || 0 },
        };
      }
      return {
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }, []);

  const handleDirectInputChange = useCallback((name, value, section) => {
    setInvoice((prev) => {
      if (section === 'companyDetails') {
        return { ...prev, companyDetails: { ...prev.companyDetails, [name]: value } };
      }
      if (section === 'receiverDetails') {
        return { ...prev, receiverDetails: { ...prev.receiverDetails, [name]: value } };
      }
      if (section === 'extraCosts') {
        return { ...prev, extraCosts: { ...prev.extraCosts, [name]: parseFloat(value) || 0 } };
      }
      return { ...prev, [name]: value };
    });
  }, []);

  const handleDateChange = useCallback((name, date) => {
    setInvoice((prev) => {
      const validDate = date instanceof Date && !isNaN(date) ? date : null;
      const next = { ...prev, [name]: validDate };

      if (name === 'invoiceDate' && prev.paymentTermDays !== 'custom' && validDate) {
        const dueDate = calculateDueDate(validDate, prev.paymentTermDays);
        if (dueDate) {
          next.dueDate = dueDate;
          next.terms = getPaymentTermsText(prev.paymentTermDays, prev.pdfLanguage);
        }
      }
      return next;
    });
  }, []);

  const handlePaymentTermChange = useCallback((paymentTermDays) => {
    setInvoice((prev) => {
      const next = {
        ...prev,
        paymentTermDays,
      };
      if (paymentTermDays !== 'custom' && prev.invoiceDate) {
        const dueDate = calculateDueDate(prev.invoiceDate, paymentTermDays);
        if (dueDate) {
          next.dueDate = dueDate;
          next.terms = getPaymentTermsText(paymentTermDays, prev.pdfLanguage);
        }
      }
      return next;
    });
  }, []);

  const handleRememberCompanyChange = useCallback((checked) => {
    saveRememberPreference(checked);
    setInvoice((prev) => ({ ...prev, rememberCompanyDetails: checked }));
    if (checked) {
      saveCompanyDetails(invoice.companyDetails, invoice.logo);
    }
  }, [invoice.companyDetails, invoice.logo]);

  const handleLogoUpload = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInvoice((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const handleWorkTypeChange = useCallback((value) => {
    setInvoice((prev) => {
      const next = { ...prev, workType: value };
      if (
        (value === 'hourly' || value === 'mixed') &&
        savedHourlyRateRef.current &&
        (!prev.amount || Number(prev.amount) === 0)
      ) {
        next.amount = String(savedHourlyRateRef.current);
      }
      return next;
    });
  }, []);

  const handleSelectLayout = useCallback((layout) => {
    setInvoice((prev) => ({ ...prev, layout }));
  }, []);

  const handleAddItem = useCallback(() => {
    setInvoice((prev) => {
      const hasHours = (prev.hoursWorked || []).length > 0;
      return {
        ...prev,
        workType: hasHours ? 'mixed' : 'fixed',
        items: [
          ...(prev.items || []),
          {
            id: Date.now(),
            itemName: '',
            itemDescription: '',
            quantity: 1,
            price: 0,
            tax: prev.tax === 'exempt' || prev.tax === 'reverse' ? prev.tax : prev.tax || '21',
            customTaxRate: prev.tax === 'custom' ? prev.customTaxRate : '',
          },
        ],
      };
    });
  }, []);

  const handleUpdateItem = useCallback((index, field, value) => {
    setInvoice((prev) => {
      const newItems = [...(prev.items || [])];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  }, []);

  const handleRemoveItem = useCallback((index) => {
    setInvoice((prev) => {
      const items = (prev.items || []).filter((_, i) => i !== index);
      const hasHours = (prev.hoursWorked || []).length > 0;
      return {
        ...prev,
        items,
        workType: items.length && hasHours ? 'mixed' : hasHours ? 'hourly' : 'fixed',
      };
    });
  }, []);

  const handleAddWorkDay = useCallback(() => {
    setInvoice((prev) => {
      const hasItems = (prev.items || []).length > 0;
      const next = {
        ...prev,
        workType: hasItems ? 'mixed' : 'hourly',
        hoursWorked: [
          ...(prev.hoursWorked || []),
          { id: Date.now(), date: new Date(), taskDescription: '', hours: 0 },
        ],
      };
      if (savedHourlyRateRef.current && (!prev.amount || Number(prev.amount) === 0)) {
        next.amount = String(savedHourlyRateRef.current);
      }
      return next;
    });
  }, []);

  const handleUpdateWorkDay = useCallback((index, field, value) => {
    setInvoice((prev) => {
      const newHoursWorked = [...(prev.hoursWorked || [])];
      if (field === 'date' && !(value instanceof Date && !isNaN(value))) {
        newHoursWorked[index] = { ...newHoursWorked[index], [field]: null };
      } else {
        newHoursWorked[index] = { ...newHoursWorked[index], [field]: value };
      }
      return { ...prev, hoursWorked: newHoursWorked };
    });
  }, []);

  const handleRemoveWorkDay = useCallback((index) => {
    setInvoice((prev) => {
      const hoursWorked = (prev.hoursWorked || []).filter((_, i) => i !== index);
      const hasItems = (prev.items || []).length > 0;
      return {
        ...prev,
        hoursWorked,
        workType: hoursWorked.length && hasItems ? 'mixed' : hoursWorked.length ? 'hourly' : 'fixed',
      };
    });
  }, []);

  const handleAddItemBasedOnWorkType = useCallback(() => {
    handleAddItem();
  }, [handleAddItem]);

  const handleUpdateItemBasedOnWorkType = useCallback(
    (index, field, value) => {
      handleUpdateItem(index, field, value);
    },
    [handleUpdateItem]
  );

  const handleRemoveItemBasedOnWorkType = useCallback(
    (index) => {
      handleRemoveItem(index);
    },
    [handleRemoveItem]
  );

  useEffect(() => {
    if (!user?.id || defaultsApplied.current) return;
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('id') || params.get('from')) return;
    }
    defaultsApplied.current = true;

    (async () => {
      try {
        const [settings, nextNumber] = await Promise.all([
          fetchBusinessSettings(supabase, user.id).catch(() => null),
          skipNumberDefault.current
            ? Promise.resolve(null)
            : fetchNextInvoiceNumber(supabase, user.id).catch(() => null),
        ]);

        if (settings?.hourlyRate) savedHourlyRateRef.current = settings.hourlyRate;

        setInvoice((prev) => {
          if (isPersistedInvoiceId(prev.id)) return prev;
          let next = prev;
          if (
            !skipPaymentDefault.current &&
            settings?.defaultPaymentTermDays &&
            settings.defaultPaymentTermDays !== 14
          ) {
            next = applyPaymentTermDays(next, settings.defaultPaymentTermDays);
          }
          const amountEmpty = !next.amount || Number(next.amount) === 0;
          if (
            !skipHourlyDefault.current &&
            settings?.hourlyRate &&
            amountEmpty &&
            (next.workType === 'hourly' || next.workType === 'mixed')
          ) {
            next = { ...next, amount: String(settings.hourlyRate) };
          }
          if (nextNumber && !skipNumberDefault.current) {
            next = { ...next, invoice_number: nextNumber };
          }
          return next;
        });
      } catch {
        defaultsApplied.current = false;
      }
    })();
  }, [user?.id]);

  return {
    invoice,
    setInvoice,
    handleInputChange,
    handleDirectInputChange,
    handleDateChange,
    handlePaymentTermChange,
    handleRememberCompanyChange,
    handleLogoUpload,
    handleWorkTypeChange,
    handleAddItem,
    handleUpdateItem,
    handleRemoveItem,
    handleAddWorkDay,
    handleUpdateWorkDay,
    handleRemoveWorkDay,
    handleSelectLayout,
    handleAddItemBasedOnWorkType,
    handleUpdateItemBasedOnWorkType,
    handleRemoveItemBasedOnWorkType,
  };
};
