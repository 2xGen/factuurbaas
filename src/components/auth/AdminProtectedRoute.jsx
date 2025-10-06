import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const isAdminAuthenticated = sessionStorage.getItem('isAdminAuthenticated') === 'true';

  if (!isAdminAuthenticated) {
    return <Navigate to="/M@tthijs1997" replace />;
  }

  return children;
};

export default AdminProtectedRoute;