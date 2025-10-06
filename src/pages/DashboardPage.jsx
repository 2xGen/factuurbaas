import React, { useState, useMemo, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import ReminderDialog from "@/components/dashboard/dialogs/ReminderDialog";
import ActivityLogDialog from "@/components/dashboard/dialogs/ActivityLogDialog";
import DashboardStats from "@/components/dashboard/DashboardStats";
import DeleteInvoiceDialog from "@/components/dashboard/dialogs/DeleteInvoiceDialog";
import DashboardActions from "@/components/dashboard/DashboardActions";
import DashboardContent from "@/components/dashboard/DashboardContent"; 
import { useAppContext } from "@/contexts/AppContext";
import { supabase } from "@/lib/supabaseClient"; 
import { calculateInvoiceTotal } from "@/lib/invoiceUtils";
import { Loader2 } from "lucide-react";

// Refactored smaller components for DashboardPage
const InvoiceListManagement = ({ 
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
  return (
    <DashboardContent
      invoices={invoices}
      calculateInvoiceTotal={calculateInvoiceTotal}
      onEdit={onEdit}
      onTogglePaid={onTogglePaid}
      onSendReminder={onSendReminder}
      onOpenActivityLog={onOpenActivityLog}
      onDelete={onDelete}
      searchTerm={searchTerm}
      isLoading={isLoading}
    />
  );
};

const DialogsManager = ({ 
  selectedInvoiceForReminder, 
  closeReminderDialog, 
  logReminderCopyAction, 
  user,
  selectedInvoiceForActivityLog,
  handleCloseActivityLog,
  handleAddActivityLogEntry,
  invoiceToDelete,
  setInvoiceToDelete,
  handleConfirmDelete
 }) => {
  return (
    <>
      {selectedInvoiceForReminder && (
        <ReminderDialog
          invoice={selectedInvoiceForReminder}
          isOpen={!!selectedInvoiceForReminder}
          onClose={closeReminderDialog}
          onActionLog={logReminderCopyAction}
          user={user}
        />
      )}
      {selectedInvoiceForActivityLog && (
        <ActivityLogDialog
          invoice={selectedInvoiceForActivityLog}
          isOpen={!!selectedInvoiceForActivityLog}
          onClose={handleCloseActivityLog}
          onAddEntry={handleAddActivityLogEntry}
        />
      )}
       {invoiceToDelete && (
        <DeleteInvoiceDialog
            isOpen={!!invoiceToDelete}
            onClose={() => setInvoiceToDelete(null)}
            onConfirm={handleConfirmDelete}
            invoice={invoiceToDelete}
        />
      )}
    </>
  );
};


const DashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, authIsLoading: appContextIsLoading, invoices: contextInvoices, setInvoices: setContextInvoices } = useAppContext(); 
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedInvoiceForReminder, setSelectedInvoiceForReminder] = useState(null);
  const [selectedInvoiceForActivityLog, setSelectedInvoiceForActivityLog] = useState(null);
  const [invoiceToDelete, setInvoiceToDelete] = useState(null);
  const [isLoadingInvoices, setIsLoadingInvoices] = useState(true);

  const fetchInvoices = useCallback(async () => {
    if (!user || !user.id) {
      setIsLoadingInvoices(false);
      if (!appContextIsLoading) navigate('/login');
      return;
    }
    
    setIsLoadingInvoices(true);
    try {
      const { data, error } = await supabase
        .from('invoices')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setContextInvoices(data || []);
    } catch (error) {
      console.error('Error fetching invoices:', error);
      toast({
        title: "Fout bij laden facturen",
        description: error.message || "Er is iets misgegaan.",
        variant: "destructive",
      });
      setContextInvoices([]);
    } finally {
      setIsLoadingInvoices(false);
    }
  }, [user, setContextInvoices, toast, navigate, appContextIsLoading]);


  useEffect(() => {
    if (user && user.id) {
      fetchInvoices();
    } else if (!appContextIsLoading) {
       setIsLoadingInvoices(false);
       navigate('/login');
    }
  }, [user, appContextIsLoading, fetchInvoices, navigate]);


  const onSaveInvoice = useCallback(async (updatedInvoice, activityDescription) => {
    if (!user) {
      toast({ title: "Niet ingelogd", description: "Log in om een factuur op te slaan.", variant: "destructive" });
      return;
    }
    
    const newActivityLog = [
      ...(updatedInvoice.activity_log || []),
      { date: new Date().toISOString(), description: activityDescription, user: user.email }
    ];

    const invoiceToSave = { 
      ...updatedInvoice, 
      user_id: user.id,
      activity_log: newActivityLog,
      updated_at: new Date().toISOString()
    };
    
    try {
      const { data, error } = await supabase
        .from('invoices')
        .update(invoiceToSave)
        .eq('id', updatedInvoice.id)
        .select();

      if (error) throw error;

      setContextInvoices(prevInvoices => 
        prevInvoices.map(inv => (inv.id === data[0].id ? data[0] : inv))
      );
      toast({ title: "Factuur Bijgewerkt", description: `Factuur #${updatedInvoice.invoice_number || updatedInvoice.id} is bijgewerkt.` });
    } catch (error) {
      console.error('Error updating invoice:', error);
      toast({ title: "Fout bij bijwerken", description: error.message, variant: "destructive" });
    }
  }, [user, toast, setContextInvoices, supabase]);

  const onDeleteInvoice = useCallback(async (invoiceId) => {
     if (!user) {
      toast({ title: "Niet ingelogd", description: "Log in om een factuur te verwijderen.", variant: "destructive" });
      return;
    }
    try {
      const { error } = await supabase
        .from('invoices')
        .delete()
        .eq('id', invoiceId)
        .eq('user_id', user.id);

      if (error) throw error;
      setContextInvoices(prevInvoices => prevInvoices.filter(inv => inv.id !== invoiceId));
    } catch (error) {
      console.error('Error deleting invoice:', error);
      toast({ title: "Fout bij verwijderen", description: error.message, variant: "destructive" });
    }
  }, [user, toast, setContextInvoices, supabase]);


  const userInvoices = useMemo(() => {
    if (appContextIsLoading || !user || !contextInvoices) return [];
    return contextInvoices.filter(inv => inv.user_id === user.id);
  }, [contextInvoices, user, appContextIsLoading]);

  const filteredInvoices = useMemo(() => {
    if (appContextIsLoading && !user) return [];
    return (userInvoices || []).filter(invoice => 
      (invoice.receiverName?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (invoice.invoiceName?.toLowerCase() || "").includes(searchTerm.toLowerCase()) ||
      (invoice.invoice_number?.toString() || "").includes(searchTerm.toLowerCase()) ||
      (invoice.id?.toString() || "").includes(searchTerm.toLowerCase())
    );
  }, [userInvoices, searchTerm, appContextIsLoading, user]);

  const totalOutstandingAmount = useMemo(() => {
    if (appContextIsLoading || !calculateInvoiceTotal) return 0;
    return (filteredInvoices || [])
      .filter(inv => inv.status !== "paid")
      .reduce((sum, inv) => sum + calculateInvoiceTotal(inv), 0);
  }, [filteredInvoices, appContextIsLoading]);
  
  const outstandingInvoicesCount = useMemo(() => {
    if (appContextIsLoading) return 0;
    return (filteredInvoices || []).filter(inv => inv.status !== 'paid').length;
  }, [filteredInvoices, appContextIsLoading]);

  if (appContextIsLoading || (isLoadingInvoices && !userInvoices.length)) { 
      return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-slate-50 to-sky-50">
          <Loader2 className="w-12 h-12 text-deep-blue animate-spin mb-4" />
          <p className="text-xl text-slate-500">Dashboard laden...</p>
        </div>
      );
  }
  
  if (!user && !appContextIsLoading) {
    return null; 
  }

  const togglePaidStatus = (invoiceId) => {
    const invoice = userInvoices.find(inv => inv.id === invoiceId);
    if (invoice) {
      const newStatus = invoice.status === "paid" ? "pending" : "paid";
      const activityDescription = `Status gewijzigd naar: ${newStatus === "paid" ? "Betaald" : "Openstaand"}`;
      onSaveInvoice({...invoice, status: newStatus }, activityDescription);
    }
  };

  const handleConfirmDelete = () => {
    if (invoiceToDelete) {
      onDeleteInvoice(invoiceToDelete.id);
      toast({
        title: "Factuur Verwijderd",
        description: `Factuur #${invoiceToDelete.invoice_number || invoiceToDelete.id} is succesvol verwijderd.`,
      });
      setInvoiceToDelete(null);
    }
  };

  const handleDeleteClick = (invoice) => setInvoiceToDelete(invoice);
  const handleCopyReminder = (invoice) => setSelectedInvoiceForReminder(invoice);
  const closeReminderDialog = () => setSelectedInvoiceForReminder(null);
  const logReminderCopyAction = (invoice, logMessage) => {
    if (!invoice || !invoice.id) {
        console.warn("Attempted to log reminder copy for an invoice without an ID or missing invoice object.", invoice);
        return;
    }
    onSaveInvoice(invoice, logMessage);
  };
  const handleOpenActivityLog = (invoice) => setSelectedInvoiceForActivityLog(invoice);
  const handleCloseActivityLog = () => setSelectedInvoiceForActivityLog(null);
  const handleAddActivityLogEntry = (invoice, entryDescription) => {
    if (!invoice || !entryDescription.trim()) {
      toast({ title: "Log leeg", description: "Voer een beschrijving in voor de log.", variant: "destructive"});
      return;
    }
    onSaveInvoice(invoice, entryDescription);
    toast({ title: "Activiteit gelogd", description: `Nieuwe activiteit voor factuur #${invoice.invoice_number || invoice.id} opgeslagen.`});
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-sky-50">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          
          <DashboardActions 
            searchTerm={searchTerm}
            onSearchTermChange={setSearchTerm}
            onCreateInvoice={() => navigate('/create-invoice')}
          />

          <DashboardStats 
            totalOutstandingAmount={totalOutstandingAmount}
            outstandingInvoicesCount={outstandingInvoicesCount}
            hasInvoices={userInvoices.length > 0 || searchTerm !== ""}
          />
          
          <InvoiceListManagement
            invoices={filteredInvoices}
            calculateInvoiceTotal={calculateInvoiceTotal}
            onEdit={(id) => navigate(`/create-invoice?id=${id}`)} // Updated edit navigation
            onTogglePaid={togglePaidStatus}
            onSendReminder={handleCopyReminder}
            onOpenActivityLog={handleOpenActivityLog}
            onDelete={handleDeleteClick}
            searchTerm={searchTerm}
            isLoading={isLoadingInvoices && userInvoices.length === 0}
          />

        </motion.div>
      </main>
      <DialogsManager 
        selectedInvoiceForReminder={selectedInvoiceForReminder}
        closeReminderDialog={closeReminderDialog}
        logReminderCopyAction={logReminderCopyAction}
        user={user}
        selectedInvoiceForActivityLog={selectedInvoiceForActivityLog}
        handleCloseActivityLog={handleCloseActivityLog}
        handleAddActivityLogEntry={handleAddActivityLogEntry}
        invoiceToDelete={invoiceToDelete}
        setInvoiceToDelete={setInvoiceToDelete}
        handleConfirmDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default DashboardPage;