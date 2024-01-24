import React from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';


//css
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import './index.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import googleFonts from 'google-fonts';



//pages, todo: nav bar and resume page.
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResumePage from './pages/ResumePage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';

import App from './App';

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