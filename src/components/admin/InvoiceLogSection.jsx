'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, BookOpen, CalendarDays } from 'lucide-react';

const StatCard = ({ title, value, isLoading }) => (
  <div className="bg-sky-50 p-4 rounded-lg shadow text-center">
    <h4 className="text-sm font-medium text-sky-700 mb-1">{title}</h4>
    {isLoading ? <Loader2 className="animate-spin h-6 w-6 text-sky-600 mx-auto" /> : <p className="text-2xl font-bold text-deep-blue">{value}</p>}
  </div>
);

const InvoiceLogSection = () => {
  const { toast } = useToast();
  const [recentInvoiceCreations, setRecentInvoiceCreations] = useState([]);
  const [stats, setStats] = useState({ last_24_hours: 0, last_30_days: 0, all_time: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const fetchInvoiceCreationData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch recent logs for display
      const { data: recentLogs, error: recentLogsError } = await supabase
        .from('invoice_creations_log')
        .select('id, created_at')
        .order('created_at', { ascending: false })
        .limit(100);

      if (recentLogsError) throw recentLogsError;
      setRecentInvoiceCreations(recentLogs || []);
      
      // Fetch stats using RPC
      const { data: statsData, error: statsError } = await supabase.rpc('get_invoice_creation_stats');
      if (statsError) throw statsError;

      const newStats = (statsData || []).reduce((acc, item) => {
        acc[item.period] = item.count;
        return acc;
      }, { last_24_hours: 0, last_30_days: 0, all_time: 0 });
      setStats(newStats);

    } catch (error) {
      console.error("Error in fetchInvoiceCreationData:", error);
      toast({ title: "Fout bij laden factuurcreatie data", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchInvoiceCreationData();
  }, [fetchInvoiceCreationData]);

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-sky-700 font-heading flex items-center">
          <BookOpen size={28} className="mr-3 text-sky-600" />
          Factuur Creaties
        </CardTitle>
        <CardDescription>Statistieken en logboek van aangemaakte facturen.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard title="Afgelopen 24 uur" value={stats.last_24_hours} isLoading={isLoading} />
          <StatCard title="Afgelopen 30 dagen" value={stats.last_30_days} isLoading={isLoading} />
          <StatCard title="Totaal" value={stats.all_time} isLoading={isLoading} />
        </div>
        
        <h3 className="text-lg font-semibold text-deep-blue my-4 flex items-center">
          <CalendarDays size={20} className="mr-2 text-sky-600"/>
          Recente Creaties (laatste 100)
        </h3>
        {isLoading && recentInvoiceCreations.length === 0 ? <Loader2 className="animate-spin h-8 w-8 text-sky-600 mx-auto" /> : (
          recentInvoiceCreations.length > 0 ? (
            <div className="max-h-96 overflow-y-auto border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Aanmaakdatum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentInvoiceCreations.map(log => (
                    <TableRow key={log.id}>
                      <TableCell className="font-mono text-xs">{log.id}</TableCell>
                      <TableCell>{new Date(log.created_at).toLocaleString('nl-NL')}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : <p className="text-slate-500 p-4 text-center">Nog geen facturen aangemaakt.</p>
        )}
      </CardContent>
       <CardFooter>
        <p className="text-xs text-slate-400">Statistieken worden periodiek bijgewerkt.</p>
      </CardFooter>
    </Card>
  );
};

export default InvoiceLogSection;