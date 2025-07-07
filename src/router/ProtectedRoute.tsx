import React, { ComponentType } from 'react';
import { Navigate } from 'react-router-dom';

interface IProtectedRouteProps {
  component: ComponentType;
}

const ProtectedRoute = ({
  component: Component,
  ...props
}: IProtectedRouteProps) => {
  const token = localStorage.getItem('jwt');

  return token ? <Component {...props} /> : <Navigate to="/sign-in" replace />;
};
export default ProtectedRoute;
