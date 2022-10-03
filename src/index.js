import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

import App from './App';
import Teams from './Teams';
import Home from './Home';
import Nav from './Nav';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/teams",
    element: <Teams />
  }
]);

root.render(
  <StrictMode>

    <div>
      <div> 
         <Nav />
        </div>
    <div>
    <RouterProvider router={router} />
      </div>
     
    </div>
  </StrictMode>
);
