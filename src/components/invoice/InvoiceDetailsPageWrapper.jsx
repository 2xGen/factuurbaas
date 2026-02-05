import React from 'react';
import { useLocation } from 'react-router-dom';
import InvoiceDetailsPage from '@/views/InvoiceDetailsPage';
import { useAppContext } from '@/contexts/AppContext';

const InvoiceDetailsPageWrapper = () => {
  const location = useLocation();
  const { 
    findInvoiceById, 
    handleSaveInvoice, 
    user, 
    profile,
    contacts, 
    addContact 
  } = useAppContext();
  
  const id = location.pathname.split('/')[2] === 'new' ? null : location.pathname.split('/')[2];
  
  const invoiceToLoad = findInvoiceById(id);

  const onSaveWrapper = (invoiceData, activityLogEntry) => {
    handleSaveInvoice(invoiceData, activityLogEntry);
  };

  const onAddContactWrapper = (contactData) => {
    addContact(contactData);
  };
  
  return (
    <InvoiceDetailsPage 
      invoice={invoiceToLoad} 
      onSave={onSaveWrapper} 
      user={user} 
      profile={profile}
      contacts={contacts} 
      onAddContact={onAddContactWrapper}
    />
  );
};

export default InvoiceDetailsPageWrapper;