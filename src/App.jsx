// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <>
    <Header />
    <main className="container mx-auto px-4 py-6">
      <Outlet /> 
    </main>
    <Footer />
  </>
);

export default App;
