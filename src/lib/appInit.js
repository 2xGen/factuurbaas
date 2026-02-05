import { defaultInvoice, defaultInvoiceItem, defaultHourlyLog } from '@/config/invoiceDefaults';

export const initializeInvoices = (storedInvoices, userId = null) => {
  if (!Array.isArray(storedInvoices) || storedInvoices.length === 0) {
    return [];
  }
  return storedInvoices
    .filter(invoice => invoice.userId === userId) 
    .map(invoice => ({
      ...defaultInvoice,
      ...invoice,
      id: invoice.id || Date.now().toString(),
      userId: invoice.userId || userId,
      invoiceDate: invoice.invoiceDate ? new Date(invoice.invoiceDate) : new Date(),
      dueDate: invoice.dueDate ? new Date(invoice.dueDate) : new Date(new Date().setDate(new Date().getDate() + 14)),
      items: (invoice.items && invoice.items.length > 0) ? invoice.items.map(item => ({ ...defaultInvoiceItem, ...item })) : [{ ...defaultInvoiceItem }],
      hoursWorked: (invoice.hoursWorked && invoice.hoursWorked.length > 0) ? invoice.hoursWorked.map(log => ({ ...defaultHourlyLog, ...log, date: log.date ? new Date(log.date) : new Date() })) : [{ ...defaultHourlyLog }],
      activityLog: invoice.activityLog || [{ date: new Date().toISOString(), description: "Factuur geladen" }],
      status: invoice.status || "pending",
  }));
};

export const initializeUser = (storedUser) => {
  if (storedUser && storedUser.email) {
    return {
      ...storedUser,
      companyDetails: storedUser.companyDetails || {
        name: storedUser.companyName || "FactuurBaas.nl",
        address: "", kvk: "", btw: "", iban: ""
      },
      logo: storedUser.logo || null
    };
  }
  return null;
};

export const initializeContacts = (storedContacts, userId = null) => {
  if (!Array.isArray(storedContacts)) {
    return [];
  }
  return storedContacts
    .filter(contact => contact.userId === userId)
    .map(contact => ({
      id: contact.id || Date.now().toString(),
      userId: contact.userId || userId,
      name: contact.name || "",
      email: contact.email || "",
      address: contact.address || ""
  }));
};