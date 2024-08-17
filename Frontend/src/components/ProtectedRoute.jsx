import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from './useAuth';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/users/login" state={{ from: location }} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;