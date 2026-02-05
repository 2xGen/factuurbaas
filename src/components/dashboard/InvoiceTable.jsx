import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Edit, Send, ListChecks, FileText, Trash2 } from 'lucide-react';
import { format } from "date-fns";
import { nl } from "date-fns/locale";

const InvoiceTable = ({
  invoices,
  getStatusInfo,
  parseDateSafe,
  calculateInvoiceTotal,
  onEdit,
  onTogglePaid,
  onSendReminder,
  onOpenActivityLog,
  onDelete,
  searchTerm
}) => {
  if (invoices.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-lg shadow-md">
        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
        <h2 className="text-xl font-medium text-gray-700 mb-2">Geen facturen gevonden</h2>
        <p className="text-gray-500">
          {searchTerm ? "Probeer een andere zoekterm." : "Maak je eerste factuur aan om hier te verschijnen."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px]">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Klant</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Factuurnaam</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Datum</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Vervaldatum</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dagen Resterend</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Bedrag</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider min-w-[320px]">Acties</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {invoices.map((invoice) => {
              const statusInfo = getStatusInfo(invoice);
              const totalAmount = calculateInvoiceTotal(invoice);

              const invoiceDateParsed = parseDateSafe(invoice.invoiceDate);
              const dueDateParsed = parseDateSafe(invoice.dueDate);

              return (
                <motion.tr key={invoice.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">#{invoice.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">{invoice.receiverName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">{invoice.invoiceName}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {invoiceDateParsed ? format(invoiceDateParsed, "dd MMM yyyy", { locale: nl }) : 'N/A'}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-500">
                    {dueDateParsed ? format(dueDateParsed, "dd MMM yyyy", { locale: nl }) : 'N/A'}
                  </td>
                  <td className={`px-4 py-3 whitespace-nowrap text-sm ${statusInfo.days !== null && statusInfo.days < 0 ? 'text-red-600 font-semibold' : 'text-gray-500'}`}>
                    {statusInfo.days !== null ? (statusInfo.days < 0 ? `${Math.abs(statusInfo.days)}d verlopen` : `${statusInfo.days}d`) : 'N/A'}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm text-gray-900">€{isNaN(totalAmount) ? '0.00' : totalAmount.toFixed(2)}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusInfo.color} text-white`}>
                      {statusInfo.text}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-medium space-x-1">
                    <Button variant="outline" size="sm" onClick={() => onEdit(invoice.id)} title="Bewerken">
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant={invoice.status === "paid" ? "default" : "outline"}
                      size="sm"
                      onClick={() => onTogglePaid(invoice.id)}
                      title={invoice.status === "paid" ? "Markeer als onbetaald" : "Markeer als betaald"}
                    >
                      {invoice.status === "paid" ? "Onbetaald" : "Betaald"}
                    </Button>
                    {invoice.status !== "paid" && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => onSendReminder(invoice)}
                        title="Stuur herinnering"
                        className="text-orange-600 border-orange-300 hover:bg-orange-50 hover:text-orange-700"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </Button>
                    )}
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => onOpenActivityLog(invoice)}
                      title="Activiteitenlogboek"
                      className="text-purple-600 border-purple-300 hover:bg-purple-50 hover:text-purple-700"
                    >
                      <ListChecks className="w-3.5 h-3.5" />
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => onDelete(invoice)}
                      title="Verwijderen"
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </td>
                </motion.tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InvoiceTable;