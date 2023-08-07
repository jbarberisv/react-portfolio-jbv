import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import Projects from './pages/Projects';
import './App.css';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={<HomePage />} 
          />
          <Route 
            path="/projects" 
            element={<Projects />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

