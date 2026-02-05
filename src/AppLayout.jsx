import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import AppRoutes from "@/AppRoutes";
import { supabase } from "@/lib/supabaseClient";

const PageViewLogger = () => {
  const location = useLocation();

  useEffect(() => {
    const logPageView = async () => {
      if (location.pathname.startsWith('/M@tthijs1997') || location.pathname.startsWith('/admin-dashboard')) {
        return;
      }

      try {
        // eslint-disable-next-line no-unused-vars
        const { error } = await supabase.from('page_views').insert({ 
          page_path: location.pathname + location.search,
          user_agent: typeof navigator !== 'undefined' ? navigator.userAgent : 'server'
        });
        if (error) {
          console.warn('Failed to log page view:', error.message);
        }
      } catch (e) {
        console.warn('Exception while logging page view:', e.message);
      }
    };

    if (typeof window !== 'undefined') {
      logPageView();
    }
  }, [location]);

  return null; 
};


const AppLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <PageViewLogger />
      <Header />
      <main className="flex-grow pt-20">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;