

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom'; 
import Home from './components/Home.jsx';
import ErrorElement from './components/ErrorElement.jsx';
import CategoryPage from './components/Category/CategoryPage.jsx';
import Search from './components/Search.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import About from './components/About.jsx';
import Recipes from './components/Recipes.jsx';
import RecipePage from './components/RecipePage.jsx'

const router = createBrowserRouter([ 
  {
    path: '/',
    element: <App />,
    errorElement:<ErrorElement/>, 
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/about',
        element:<About/>
      },
      {
        path:'/recipes',
        element:<Recipes/>
      },
      {
        path:'/categories/:category',
        element:<CategoryPage/>
      },
      {
        path:'/search',
        element:<Search/>
      },
      {
        path:'/recipes/:id',
        element:<RecipePage/>
      },
      {
        path:'/items/:id',
        element:<SingleProduct/>,
        loader:({params})=>fetch(`https://foodfare.onrender.com/api/items/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


