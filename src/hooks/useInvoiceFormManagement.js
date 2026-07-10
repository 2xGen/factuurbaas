import { useState, useCallback, useEffect } from 'react';
import { defaultInvoice } from '@/config/invoiceDefaults';
import {
  loadRememberPreference,
  loadSavedCompanyDetails,
  saveCompanyDetails,
  saveRememberPreference,
} from '@/lib/invoiceLocalStorage';
import { calculateDueDate, getPaymentTermsText } from '@/lib/invoiceUtils';
import { consumeInvoicePrefill, taxRateToInvoiceField } from '@/lib/invoicePrefill';

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
  const [invoice, setInvoice] = useState(initialInvoice || buildInitialInvoice);

  useEffect(() => {
    const prefill = consumeInvoicePrefill();
    if (!prefill) return;

    if (prefill.source === 'uurtarief-calculator' && prefill.hourlyRate) {
      setInvoice((prev) => ({
        ...prev,
        workType: 'hourly',
        amount: String(Math.round(prefill.hourlyRate * 100) / 100),
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
      setInvoice((prev) => ({
        ...prev,
        companyDetails: { ...prev.companyDetails, ...(prefill.companyDetails || {}) },
        logo: prefill.logo ?? prev.logo,
        receiverDetails: {
          ...prev.receiverDetails,
          companyName: prefill.clientDetails?.companyName || '',
          contactPerson: prefill.clientDetails?.contactPerson || '',
          email: prefill.clientDetails?.email || '',
          address: prefill.clientDetails?.address || '',
        },
        workType: 'fixed',
        tax: taxField,
        customTaxRate: prefill.taxRate,
        taxIncluded: false,
        items: (prefill.items || []).map((item, index) => ({
          id: Date.now() + index,
          itemName: item.description || '',
          itemDescription: '',
          quantity: item.quantity || 1,
          price: item.price || 0,
        })),
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
    setInvoice((prev) => ({ ...prev, workType: value }));
  }, []);

  const handleSelectLayout = useCallback((layout) => {
    setInvoice((prev) => ({ ...prev, layout }));
  }, []);

  const handleAddItem = useCallback(() => {
    setInvoice((prev) => ({
      ...prev,
      items: [...(prev.items || []), { id: Date.now(), itemName: '', itemDescription: '', quantity: 1, price: 0 }],
    }));
  }, []);

  const handleUpdateItem = useCallback((index, field, value) => {
    setInvoice((prev) => {
      const newItems = [...(prev.items || [])];
      newItems[index] = { ...newItems[index], [field]: value };
      return { ...prev, items: newItems };
    });
  }, []);

  const handleRemoveItem = useCallback((index) => {
    setInvoice((prev) => ({
      ...prev,
      items: (prev.items || []).filter((_, i) => i !== index),
    }));
  }, []);

  const handleAddWorkDay = useCallback(() => {
    setInvoice((prev) => ({
      ...prev,
      hoursWorked: [...(prev.hoursWorked || []), { id: Date.now(), date: new Date(), taskDescription: '', hours: 0 }],
    }));
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
    setInvoice((prev) => ({
      ...prev,
      hoursWorked: (prev.hoursWorked || []).filter((_, i) => i !== index),
    }));
  }, []);

  const handleAddItemBasedOnWorkType = useCallback(() => {
    if (invoice.workType === 'fixed') {
      handleAddItem();
    } else if (invoice.workType === 'hourly') {
      handleAddWorkDay();
    }
  }, [invoice.workType, handleAddItem, handleAddWorkDay]);

  const handleUpdateItemBasedOnWorkType = useCallback((index, field, value) => {
    if (invoice.workType === 'fixed') {
      handleUpdateItem(index, field, value);
    } else if (invoice.workType === 'hourly') {
      handleUpdateWorkDay(index, field, value);
    }
  }, [invoice.workType, handleUpdateItem, handleUpdateWorkDay]);

  const handleRemoveItemBasedOnWorkType = useCallback((index) => {
    if (invoice.workType === 'fixed') {
      handleRemoveItem(index);
    } else if (invoice.workType === 'hourly') {
      handleRemoveWorkDay(index);
    }
  }, [invoice.workType, handleRemoveItem, handleRemoveWorkDay]);

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
