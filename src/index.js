import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HomePage from './pages/HomePage';
import SecondPage from './pages/SecondPage';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import BagPage from './pages/BagPage';
import LoginPage from './pages/LoginPage';
import AdminPage from './pages/AdminPage';
import PdpPage from './pages/PdpPage';
const appRouter = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <HomePage />
    },
    {
      path: '/SecondPage',
      element: <SecondPage />
    },
    {
      path: '/ShopPage',
      element: <SecondPage />
    },
    {
      path: '/HomePage',
      element: <HomePage />
    },
    {
      path: '/BagPage',
      element: <BagPage />
    },
    {
      path: '/LoginPage',
      element: <LoginPage />
    },
    {
      path: '/AdminPanel',
      element: <AdminPage />
    },
    {
      path: '/pdpPage',
      element: <PdpPage />
    }
  ]
}])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);

