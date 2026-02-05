import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const DashboardStats = ({ totalOutstandingAmount, outstandingInvoicesCount, hasInvoices }) => {
  if (!hasInvoices) {
    return (
      <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200 text-center">
        <h2 className="text-xl font-heading font-semibold text-deep-blue mb-2">Welkom op je Dashboard!</h2>
        <p className="text-3xl font-bold text-warm-orange">€0.00</p>
        <p className="text-sm text-gray-500 mb-4">Totaal openstaand bedrag van 0 facturen.</p>
        <Link href="/create-invoice">
          <Button className="bg-warm-orange hover:bg-orange-600 text-white">
            <PlusCircle className="w-4 h-4 mr-2" /> Maak hier je eerste factuur aan
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="mb-6 p-6 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-xl font-heading font-semibold text-deep-blue mb-2">Overzicht Openstaande Facturen</h2>
      <p className="text-3xl font-bold text-warm-orange">€{totalOutstandingAmount.toFixed(2)}</p>
      <p className="text-sm text-gray-500">Totaal openstaand bedrag van {outstandingInvoicesCount} {outstandingInvoicesCount === 1 ? 'factuur' : 'facturen'}.</p>
    </div>
  );
};

export default DashboardStats;