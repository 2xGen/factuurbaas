import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';

const DashboardActions = ({ searchTerm, onSearchTermChange, onCreateInvoice }) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold text-gray-800">Jouw Factuur Dashboard</h1>
        <Button onClick={onCreateInvoice} className="bg-blue-600 hover:bg-blue-700 text-white">
          <PlusCircle className="w-5 h-5 mr-2" /> Nieuwe Factuur
        </Button>
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Zoek facturen (naam, nr, factuurnaam)..."
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
        />
      </div>
    </>
  );
};

export default DashboardActions;