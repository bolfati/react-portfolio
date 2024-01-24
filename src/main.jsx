import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
// Bringing in the required imports from 'react-router-dom' to set up application routing behavior
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';


// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
   
      {
        path: 'About',
        element: <AboutPage />,
      },
         {
        path: 'Portfolio',
        element: <PortfolioPage />,
      },
       {
        path: 'Contact',
        element: <ContactPage />,
      },
       {
        path: 'Resume',
        element: <ResumePage />,
      },
    ],
  },
]);


// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
