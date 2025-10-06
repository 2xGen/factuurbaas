import React, { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Loader2, Eye, CalendarDays, ListChecks } from 'lucide-react';

const StatCard = ({ title, value, isLoading }) => (
  <div className="bg-sky-50 p-4 rounded-lg shadow text-center">
    <h4 className="text-sm font-medium text-sky-700 mb-1">{title}</h4>
    {isLoading ? <Loader2 className="animate-spin h-6 w-6 text-sky-600 mx-auto" /> : <p className="text-2xl font-bold text-deep-blue">{value}</p>}
  </div>
);

const PageViewsSection = () => {
  const { toast } = useToast();
  const [recentPageViews, setRecentPageViews] = useState([]);
  const [stats, setStats] = useState({ last_24_hours: 0, last_30_days: 0, all_time: 0 });
  const [viewsByPage, setViewsByPage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPageViewsData = useCallback(async () => {
    setIsLoading(true);
    try {
      // Fetch recent page views for display
      const { data: recentViewsData, error: recentViewsError } = await supabase
        .from('page_views')
        .select('id, page_path, view_timestamp, user_agent')
        .order('view_timestamp', { ascending: false })
        .limit(100);

      if (recentViewsError) throw recentViewsError;
      setRecentPageViews(recentViewsData || []);

      // Fetch stats using RPC
      const { data: statsData, error: statsError } = await supabase.rpc('get_page_view_stats');
      if (statsError) throw statsError;
      
      const newStats = (statsData || []).reduce((acc, item) => {
        acc[item.period] = item.count;
        return acc;
      }, { last_24_hours: 0, last_30_days: 0, all_time: 0 });
      setStats(newStats);

      // Aggregate views by page path using RPC
      const { data: aggregatedData, error: aggregatedError } = await supabase.rpc('get_page_views_by_path');
      if (aggregatedError) {
        console.warn("Error fetching page views by path via RPC:", aggregatedError.message);
        setViewsByPage([]); // Set to empty or handle fallback
      } else {
         setViewsByPage(aggregatedData || []);
      }

    } catch (error) {
      console.error("Error in fetchPageViewsData:", error);
      toast({ title: "Fout bij laden paginaweergave data", description: error.message, variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchPageViewsData();
  }, [fetchPageViewsData]);

  return (
    <Card className="mb-8 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl text-sky-700 font-heading flex items-center">
          <Eye size={28} className="mr-3 text-sky-600" />
          Paginaweergaven
        </CardTitle>
        <CardDescription>Statistieken en details van website paginaweergaven.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <StatCard title="Afgelopen 24 uur" value={stats.last_24_hours} isLoading={isLoading} />
          <StatCard title="Afgelopen 30 dagen" value={stats.last_30_days} isLoading={isLoading} />
          <StatCard title="Totaal" value={stats.all_time} isLoading={isLoading} />
        </div>

        {isLoading && viewsByPage.length === 0 && recentPageViews.length === 0 ? <Loader2 className="animate-spin h-8 w-8 text-sky-600 mx-auto my-8" /> : (
          <>
            {viewsByPage.length > 0 && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-deep-blue mb-2 flex items-center">
                  <ListChecks size={20} className="mr-2 text-sky-600"/>
                  Populaire Pagina's (Top 10)
                </h3>
                <div className="max-h-72 overflow-y-auto border rounded-md">
                  <Table>
                    <TableHeader><TableRow><TableHead>Pagina Pad</TableHead><TableHead className="text-right">Aantal Weergaven</TableHead></TableRow></TableHeader>
                    <TableBody>
                      {viewsByPage.slice(0, 10).map((view, index) => (
                        <TableRow key={index}>
                          <TableCell className="truncate max-w-sm">{view.page_path}</TableCell>
                          <TableCell className="text-right font-medium">{view.view_count}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}
            
            {recentPageViews.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-deep-blue mb-2 flex items-center">
                  <CalendarDays size={20} className="mr-2 text-sky-600"/>
                  Recente Weergaven (laatste 100)
                </h3>
                <div className="max-h-96 overflow-y-auto border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Pagina Pad</TableHead>
                        <TableHead>Tijdstip</TableHead>
                        <TableHead>User Agent (Info)</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {recentPageViews.map(view => (
                        <TableRow key={view.id}>
                          <TableCell className="font-mono text-xs truncate max-w-xs">{view.page_path}</TableCell>
                          <TableCell>{new Date(view.view_timestamp).toLocaleString('nl-NL')}</TableCell>
                          <TableCell className="text-xs text-slate-500 truncate max-w-[200px] md:max-w-xs" title={view.user_agent}>{view.user_agent}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
            )}

            {!isLoading && viewsByPage.length === 0 && recentPageViews.length === 0 && (
                 <p className="text-slate-500 p-4 text-center">Nog geen paginaweergaven gelogd.</p>
            )}
          </>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-xs text-slate-400">Paginaweergaven worden gelogd bij het laden van een pagina. Admin dashboard weergaven worden niet meegeteld.</p>
      </CardFooter>
    </Card>
  );
};

export default PageViewsSection;