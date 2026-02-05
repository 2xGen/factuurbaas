'use client';
import React, { createContext, useContext, useState, useMemo } from 'react';
import { defaultInvoice } from '@/config/invoiceDefaults';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [invoice, setInvoice] = useState(defaultInvoice);
  const [invoices, setInvoices] = useState([]);

  const appContextValue = useMemo(() => ({
    invoice,
    setInvoice,
    invoices,
    setInvoices,
  }), [invoice, setInvoice, invoices, setInvoices]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);