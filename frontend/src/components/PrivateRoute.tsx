import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const PrivateRoute: React.FC = () => {
  const { userName } = useUser();

  return userName ? <Outlet /> : <Navigate to='/' replace />;
};

export default PrivateRoute;
