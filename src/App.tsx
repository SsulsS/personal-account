import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/general';

import AppSpinner from 'ui-kit/AppSpinner/AppSpinner';
import Footer from 'ui-kit/Footer/Footer';
import Header from 'ui-kit/Header/Header';

const App = () => {
  const location = useLocation();

  if (ROUTES.signIn.includes(location.pathname)) {
    return (
      <>
        <Suspense fallback={<AppSpinner />}>
          <Outlet />
        </Suspense>
      </>
    );
  }
  return (
    <>
      <Header />

      <Suspense fallback={<AppSpinner />}>
        <Outlet />
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
