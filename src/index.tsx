import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { ThemeProvider } from '@mui/material';

import '../src/styles/index.css';
import store from 'store';

import router from './router/index';
import { theme } from './styles/theme';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StoreProvider>
  </StrictMode>
);
