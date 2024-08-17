


import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/Footer';
import { AuthProvider } from './components/useAuth'; 

function App() {
  return (
    <AuthProvider>
      <div className='mx-auto max-w-screen-2xl'>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;