'use client';
import React, { useRef } from 'react';
import InvoiceForm from '@/components/invoice/InvoiceForm';
import InvoiceSidebar from '@/components/invoice/InvoiceSidebar';
import { useInvoiceFormManagement } from '@/hooks/useInvoiceFormManagement';
import { motion } from 'framer-motion';

const InvoiceDetailsPage = () => {
  const fileInputRef = useRef(null);
  const previewRef = useRef(null);

  const {
    invoice,
    handleInputChange,
    handleDateChange,
    handlePaymentTermChange,
    handleRememberCompanyChange,
    handleAddItemBasedOnWorkType,
    handleUpdateItemBasedOnWorkType,
    handleRemoveItemBasedOnWorkType,
    handleWorkTypeChange,
    handleSelectLayout,
    handleAddWorkDay,
    handleUpdateWorkDay,
    handleRemoveWorkDay,
    handleLogoUpload,
  } = useInvoiceFormManagement();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 sm:px-6 py-8"
    >
      <div className="grid lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2">
          <InvoiceForm
            invoice={invoice}
            onInputChange={handleInputChange}
            onDateChange={handleDateChange}
            onPaymentTermChange={handlePaymentTermChange}
            onRememberChange={handleRememberCompanyChange}
            onAddItem={handleAddItemBasedOnWorkType}
            onUpdateItem={handleUpdateItemBasedOnWorkType}
            onRemoveItem={handleRemoveItemBasedOnWorkType}
            onWorkTypeChange={handleWorkTypeChange}
            onSelectLayout={handleSelectLayout}
            onAddWorkDay={handleAddWorkDay}
            onUpdateWorkDay={handleUpdateWorkDay}
            onRemoveWorkDay={handleRemoveWorkDay}
            fileInputRef={fileInputRef}
            onLogoUpload={handleLogoUpload}
          />
        </div>
        <div className="lg:col-span-1 self-start lg:sticky lg:top-[calc(var(--header-height,6rem)+1.5rem)]">
          <InvoiceSidebar invoice={invoice} previewRef={previewRef} />
        </div>
      </div>
    </motion.div>
  );
};

export default InvoiceDetailsPage;
