import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from '@/views/HomePage';
import InvoiceDetailsPage from '@/views/InvoiceDetailsPage';
import PrivacyPolicyPage from '@/views/PrivacyPolicyPage';
import TermsAndConditionsPage from '@/views/TermsAndConditionsPage';
import AdminLoginPage from '@/views/AdminLoginPage';
import AdminDashboardPage from '@/views/AdminDashboardPage';
import AdminProtectedRoute from '@/components/auth/AdminProtectedRoute';
import BlogListPage from '@/views/BlogListPage';
import BlogPostPage from '@/views/BlogPostPage'; // Import the new blog post page

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create-invoice" element={<InvoiceDetailsPage />} />
      <Route path="/privacybeleid" element={<PrivacyPolicyPage />} />
      <Route path="/algemene-voorwaarden" element={<TermsAndConditionsPage />} />
      <Route path="/blogs" element={<BlogListPage />} />
      <Route path="/blogs/:slug" element={<BlogPostPage />} /> {/* Route for individual blog posts */}
      
      <Route path="/M@tthijs1997" element={<AdminLoginPage />} />
      <Route 
        path="/admin-dashboard" 
        element={
          <AdminProtectedRoute>
            <AdminDashboardPage />
          </AdminProtectedRoute>
        } 
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;