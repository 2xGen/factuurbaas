import React from "react";
import { useLocation } from "react-router-dom";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import AppRoutes from "@/AppRoutes";
import { Toaster } from "@/components/ui/toaster";
import { supabase } from "@/lib/supabaseClient";
import { useEffect } from "react";
import ScrollToTop from "@/components/ScrollToTop";

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
          user_agent: navigator.userAgent
        });
        if (error) {
          console.warn('Failed to log page view:', error.message);
        }
      } catch (e) {
        console.warn('Exception while logging page view:', e.message);
      }
    };

    logPageView();
  }, [location]);

  return null; 
};

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <PageViewLogger />
      <Header />
      <main className="flex-grow pt-20">
        <AppRoutes />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;