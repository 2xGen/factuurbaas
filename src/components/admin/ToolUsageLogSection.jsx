'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from '@/components/ui/use-toast';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Loader2, CalendarDays } from 'lucide-react';

const StatCard = ({ title, value, isLoading }) => (
  <div className="rounded-lg bg-sky-50 p-4 text-center shadow">
    <h4 className="mb-1 text-sm font-medium text-sky-700">{title}</h4>
    {isLoading ? (
      <Loader2 className="mx-auto h-6 w-6 animate-spin text-sky-600" />
    ) : (
      <p className="text-2xl font-bold text-deep-blue">{value}</p>
    )}
  </div>
);

export default function ToolUsageLogSection({
  title,
  description,
  table,
  statsRpc,
  icon: Icon,
  emptyMessage = 'Nog geen activiteit geregistreerd.',
}) {
  const { toast } = useToast();
  const [recentLogs, setRecentLogs] = useState([]);
  const [stats, setStats] = useState({ last_24_hours: 0, last_30_days: 0, all_time: 0 });
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const { data: logs, error: logsError } = await supabase
        .from(table)
        .select('id, created_at')
        .order('created_at', { ascending: false })
        .limit(100);

      if (logsError) throw logsError;
      setRecentLogs(logs || []);

      const { data: statsData, error: statsError } = await supabase.rpc(statsRpc);
      if (statsError) throw statsError;

      const newStats = (statsData || []).reduce(
        (acc, item) => {
          acc[item.period] = item.count;
          return acc;
        },
        { last_24_hours: 0, last_30_days: 0, all_time: 0 }
      );
      setStats(newStats);
    } catch (error) {
      console.error(`Error in fetchData for ${table}:`, error);
      toast({
        title: `Fout bij laden ${title}`,
        description: error.message,
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }, [table, statsRpc, title, toast]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center font-heading text-2xl text-sky-700">
          {Icon && <Icon size={28} className="mr-3 text-sky-600" />}
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          <StatCard title="Afgelopen 24 uur" value={stats.last_24_hours} isLoading={isLoading} />
          <StatCard title="Afgelopen 30 dagen" value={stats.last_30_days} isLoading={isLoading} />
          <StatCard title="Totaal" value={stats.all_time} isLoading={isLoading} />
        </div>

        <h3 className="my-4 flex items-center text-lg font-semibold text-deep-blue">
          <CalendarDays size={20} className="mr-2 text-sky-600" />
          Recente activiteit (laatste 100)
        </h3>
        {isLoading && recentLogs.length === 0 ? (
          <Loader2 className="mx-auto h-8 w-8 animate-spin text-sky-600" />
        ) : recentLogs.length > 0 ? (
          <div className="max-h-96 overflow-y-auto rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Datum</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell className="font-mono text-xs">{log.id}</TableCell>
                    <TableCell>{new Date(log.created_at).toLocaleString('nl-NL')}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <p className="p-4 text-center text-slate-500">{emptyMessage}</p>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-slate-400">Statistieken worden periodiek bijgewerkt.</p>
      </CardFooter>
    </Card>
  );
}
