import { defaultInvoice } from '@/config/invoiceDefaults';


export const findInvoiceInStoreById = (id, invoices, user, profile) => {
  const foundInvoice = id ? invoices.find(inv => inv.id === id && inv.user_id === user?.id) : null;
  
  const companyDetailsFromProfile = {
    name: profile?.company_name || defaultInvoice.companyDetails.name,
    address: profile?.company_address || defaultInvoice.companyDetails.address,
    kvk: profile?.company_kvk || defaultInvoice.companyDetails.kvk,
    btw: profile?.company_btw || defaultInvoice.companyDetails.btw,
    iban: profile?.company_iban || defaultInvoice.companyDetails.iban,
  };

  if (foundInvoice) {
    return {
      ...foundInvoice,
      companyDetails: foundInvoice.company_details || companyDetailsFromProfile,
      logo: profile?.logo_url || defaultInvoice.logo,
      invoiceDate: foundInvoice.invoice_date ? new Date(foundInvoice.invoice_date) : new Date(),
      dueDate: foundInvoice.due_date ? new Date(foundInvoice.due_date) : new Date(new Date().setDate(new Date().getDate() + 14)),
      hoursWorked: (foundInvoice.hours_worked || []).map(day => ({
        ...day,
        date: day.date ? new Date(day.date) : new Date()
      })),
      activityLog: foundInvoice.activity_log || [{ date: foundInvoice.created_at || new Date().toISOString(), description: "Factuur aangemaakt" }]
    };
  }
  
  return {
    ...defaultInvoice,
    id: null, 
    userId: user ? user.id : null,
    companyDetails: companyDetailsFromProfile,
    logo: profile?.logo_url || defaultInvoice.logo,
    invoiceDate: new Date(defaultInvoice.invoiceDate),
    dueDate: new Date(defaultInvoice.dueDate),
    activityLog: [{ date: new Date().toISOString(), description: "Nieuwe factuur gestart" }]
  };
};