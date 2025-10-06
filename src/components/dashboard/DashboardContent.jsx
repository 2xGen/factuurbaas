import React from 'react';
import InvoiceTable from '@/components/dashboard/InvoiceTable';
import { getStatusInfo, parseDateSafe } from "@/lib/invoiceUtils";
import { FileText, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const DashboardContent = ({
  invoices,
  calculateInvoiceTotal,
  onEdit,
  onTogglePaid,
  onSendReminder,
  onOpenActivityLog,
  onDelete,
  searchTerm,
  isLoading
}) => {

  if (isLoading) {
    return (
       <div className="flex flex-col items-center justify-center py-12 bg-white rounded-lg shadow-md text-center">
        <Loader2 className="w-12 h-12 text-deep-blue animate-spin mb-4" />
        <p className="text-lg text-gray-600">Facturen laden...</p>
      </div>
    );
  }

  if (invoices.length === 0 && !searchTerm) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">Nog geen facturen hier</h2>
        <p className="text-gray-500 mb-4">
          Het lijkt erop dat je nog geen facturen hebt aangemaakt.
        </p>
        <Link to="/create-invoice">
          <Button className="bg-warm-orange hover:bg-orange-600 text-white">
            <PlusCircle className="w-4 h-4 mr-2" /> Begin met je eerste factuur
          </Button>
        </Link>
      </div>
    );
  }
  
  if (invoices.length === 0 && searchTerm) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">Geen facturen gevonden</h2>
        <p className="text-gray-500">
          Je zoekopdracht voor "{searchTerm}" heeft geen resultaten opgeleverd. Probeer een andere zoekterm.
        </p>
      </div>
    );
  }

  return (
    <InvoiceTable
      invoices={invoices}
      getStatusInfo={getStatusInfo}
      parseDateSafe={parseDateSafe}
      calculateInvoiceTotal={calculateInvoiceTotal}
      onEdit={onEdit}
      onTogglePaid={onTogglePaid}
      onSendReminder={onSendReminder}
      onOpenActivityLog={onOpenActivityLog}
      onDelete={onDelete}
      searchTerm={searchTerm}
    />
  );
};

export default DashboardContent;