import { createBrowserRouter, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import App from 'App';

import { ROUTES } from 'constants/general';

import ProtectedRoute from './ProtectedRoute';

const Payments = lazy(() => import('pages/Payments/Payments'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const Services = lazy(() => import('pages/Services/Services'));
const BillCreation = lazy(() => import('pages/BillCreation/BillCreation'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.signIn} replace={true} />,
      },
      {
        path: ROUTES.payments,
        element: <ProtectedRoute component={Payments} />,
      },
      {
        path: ROUTES.services,
        element: <ProtectedRoute component={Services} />,
      },
      {
        path: ROUTES.billCreation,
        element: <ProtectedRoute component={BillCreation} />,
      },
      {
        path: ROUTES.signIn,
        index: true,
        element: <SignIn />,
      },
    ],
  },
]);

export default router;
