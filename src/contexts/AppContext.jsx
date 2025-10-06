import React, { createContext, useContext, useState, useMemo } from 'react';
import { defaultInvoice } from '@/config/invoiceDefaults';

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [invoice, setInvoice] = useState(defaultInvoice);

  const appContextValue = useMemo(() => ({
    invoice,
    setInvoice,
  }), [invoice, setInvoice]);

  return (
    <AppContext.Provider value={appContextValue}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);