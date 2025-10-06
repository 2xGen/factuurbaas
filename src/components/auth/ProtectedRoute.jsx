import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAppContext } from '@/contexts/AppContext';

const ProtectedRoute = ({ children }) => {
  const { user, authIsLoading } = useAppContext(); // Use specific authIsLoading

  if (authIsLoading) { // Check only authIsLoading
    return <div className="flex items-center justify-center h-screen text-xl font-semibold text-deep-blue">Authenticatie checken...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export default ProtectedRoute;