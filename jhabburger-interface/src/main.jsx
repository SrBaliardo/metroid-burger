import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';

import { UserProvider } from './hooks/UserContext';
import { CartProvider } from './hooks/CartContex';
import { LocationProvider } from './hooks/LocalizationContext';
import GlobalStyles from './styles/globalStyles';
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from '../src/config/stripeConfig';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LocationProvider>
      <CartProvider>
        <UserProvider>
          <Elements stripe={stripePromise}>
            <RouterProvider router={router} />
          </Elements>
        </UserProvider>
      </CartProvider>
    </LocationProvider>
    <ToastContainer theme="colored" autoClose={2000} />
    <GlobalStyles />
  </React.StrictMode>,
);
