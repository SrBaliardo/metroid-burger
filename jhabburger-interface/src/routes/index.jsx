import { createBrowserRouter } from 'react-router-dom';
import {
  Login,
  Register,
  Home,
  Products,
  Contact,
  Cart,
  Admin,
  CartCheckout,
  UserProfile,
  CompletedOrder,
} from '../pages';
import { PrivateRoute } from './private-routes';
import { paths } from '../utils/paths';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PrivateRoute element={<Home />} />,
  },

  {
    path: '/products',
    element: <PrivateRoute element={<Products />} />,
  },

  {
    path: '/contact',
    element: <PrivateRoute element={<Contact />} />,
  },

  {
    path: '/cart',
    element: <PrivateRoute element={<Cart />} />,
  },

  {
    path: '/cart-checkout',
    element: <PrivateRoute element={<CartCheckout />} />,
  },

  {
    path: '/completed-order',
    element: <PrivateRoute element={<CompletedOrder />} />,
  },

  {
    path: '/user-profile',
    element: <PrivateRoute element={<UserProfile />} />,
  },

  {
    path: paths.Orders,
    element: <PrivateRoute element={<Admin />} isAdmin />,
  },

  {
    path: paths.ProductsList,
    element: <PrivateRoute element={<Admin />} isAdmin />,
  },

  {
    path: paths.AddNewProduct,
    element: <PrivateRoute element={<Admin />} isAdmin />,
  },

  {
    path: paths.EditProduct,
    element: <PrivateRoute element={<Admin />} isAdmin />,
  },

  {
    path: '/register',
    element: <Register />,
  },

  {
    path: '/login',
    element: <Login />,
  },
]);
