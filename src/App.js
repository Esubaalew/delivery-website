// src/App.js
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import './App.css';  // Corrected path

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
