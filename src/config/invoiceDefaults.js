import { addDays } from 'date-fns';

export const defaultInvoice = {
  id: `INV-${Date.now().toString().slice(-6)}`, 
  invoiceName: '',
  invoice_number: '',
  invoiceDate: new Date(), 
  dueDate: addDays(new Date(), 14), 
  companyDetails: {
    name: 'FactuurBaas.nl',
    address: '', // Changed to empty string for placeholder
    kvk: '',
    btw: '',
    iban: '',
  },
  receiverName: '',
  email: '',
  address: '',
  items: [
    { id: Date.now(), itemName: '', itemDescription: '', quantity: 1, price: 0 },
  ],
  hoursWorked: [
    { id: Date.now(), date: new Date(), taskDescription: '', hours: 0 }
  ],
  workType: 'fixed', 
  amount: 0, 
  description: '',
  tax: '21',
  taxIncluded: false, 
  notes: 'Bedankt voor uw opdracht!',
  terms: 'Betaling binnen 14 dagen.',
  layout: 'plain',
  logo: null,
  status: 'concept',
};