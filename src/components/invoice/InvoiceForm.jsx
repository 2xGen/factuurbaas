import React from 'react';
import { motion } from 'framer-motion';

import InvoiceFormSection from '@/components/invoice/formSections/InvoiceFormSection';
import CompanyDetailsForm from '@/components/invoice/formSections/CompanyDetailsForm';
import InvoiceMetaForm from '@/components/invoice/formSections/InvoiceMetaForm';
import ReceiverDetailsForm from '@/components/invoice/formSections/ReceiverDetailsForm';
import WorkItemsForm from '@/components/invoice/formSections/WorkItemsForm';
import LayoutSelector from '@/components/invoice/LayoutSelector';

const InvoiceForm = ({
  invoice,
  onInputChange,
  onDateChange,
  onPaymentTermChange,
  onRememberChange,
  onLogoUpload,
  onAddItem,
  onUpdateItem,
  onRemoveItem,
  onAddWorkDay,
  onUpdateWorkDay,
  onRemoveWorkDay,
  fileInputRef,
  onSelectLayout,
  isLoggedIn,
  onImportFromProfile,
  isImportingProfile,
  onSaveToAccount,
  isSavingToAccount,
  onApplyReceiver,
}) => {
  if (!invoice) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="space-y-6"
    >
      <InvoiceFormSection
        step={1}
        title="Jouw gegevens"
        description="Vul je bedrijfsgegevens in."
      >
        <CompanyDetailsForm
          companyDetails={invoice.companyDetails}
          logo={invoice.logo}
          rememberCompanyDetails={invoice.rememberCompanyDetails}
          onInputChange={onInputChange}
          onLogoUpload={onLogoUpload}
          onRememberChange={onRememberChange}
          fileInputRef={fileInputRef}
          isLoggedIn={isLoggedIn}
          onImportFromProfile={onImportFromProfile}
          isImportingProfile={isImportingProfile}
          onSaveToAccount={onSaveToAccount}
          isSavingToAccount={isSavingToAccount}
        />
      </InvoiceFormSection>

      <InvoiceFormSection
        step={2}
        title="Factuur"
        description="Kies de datum en betaaltermijn. Het factuurnummer wordt automatisch ingevuld."
      >
        <InvoiceMetaForm
          invoiceName={invoice.invoiceName}
          invoiceNumber={invoice.invoice_number}
          invoiceDate={invoice.invoiceDate}
          dueDate={invoice.dueDate}
          paymentTermDays={invoice.paymentTermDays}
          currency={invoice.currency}
          pdfLanguage={invoice.pdfLanguage}
          onInputChange={onInputChange}
          onDateChange={onDateChange}
          onPaymentTermChange={onPaymentTermChange}
        />
      </InvoiceFormSection>

      <InvoiceFormSection
        step={3}
        title="Klant"
        description="Voor wie is deze factuur?"
      >
        <ReceiverDetailsForm
          receiverDetails={invoice.receiverDetails}
          onInputChange={onInputChange}
          isLoggedIn={isLoggedIn}
          onApplyReceiver={onApplyReceiver}
        />
      </InvoiceFormSection>

      <InvoiceFormSection
        step={4}
        title="Wat heb je geleverd?"
        description="Voeg producten of uren toe. Kies de BTW per regel."
      >
        <WorkItemsForm
          invoice={invoice}
          onInputChange={onInputChange}
          onAddItem={onAddItem}
          onUpdateItem={onUpdateItem}
          onRemoveItem={onRemoveItem}
          onAddWorkDay={onAddWorkDay}
          onUpdateWorkDay={onUpdateWorkDay}
          onRemoveWorkDay={onRemoveWorkDay}
        />
      </InvoiceFormSection>

      <InvoiceFormSection step={5} title="Factuurstijl">
        <LayoutSelector
          currentLayout={invoice.layout}
          onSelectLayout={onSelectLayout}
          styleLabel="Stijl"
          compact
        />
      </InvoiceFormSection>
    </motion.div>
  );
};

export default InvoiceForm;
