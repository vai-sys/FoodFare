


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { AuthProvider } from './components/useAuth.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home.jsx';
import ErrorElement from './components/ErrorElement.jsx';
import CategoryPage from './components/Category/CategoryPage.jsx';
import Search from './components/Search.jsx';
import SingleProduct from './components/SingleProduct.jsx';
import About from './components/About.jsx';
import Recipes from './components/Recipes.jsx';
import RecipePage from './components/RecipePage.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import ProtectedRoute from '../src/components/ProtectedRoute.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'users/login',
        element: <Login />
      },
      {
        path: 'users/register',
        element: <Register />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: 'recipes',
            element: <Recipes />
          },
          {
            path: 'categories/:category',
            element: <CategoryPage />
          },
          {
            path: 'search',
            element: <Search />
          },
          {
            path: 'recipes/:id',
            element: <RecipePage />
          },
          {
            path: 'items/:id',
            element: <SingleProduct />,
            loader: ({ params }) => fetch(`http://localhost:5000/api/items/${params.id}`)
          }
        ]
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
