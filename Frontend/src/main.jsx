

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'; 
import Home from './components/Home.jsx';
import ErrorElement from './components/ErrorElement.jsx';
import CategoryPage from './components/Category/CategoryPage.jsx';
const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorElement/>, 
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/categories/:category',
        element:<CategoryPage/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
