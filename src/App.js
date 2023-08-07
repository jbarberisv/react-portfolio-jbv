import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import './App.css';
import Footer from './components/Footer';
import ContactMe from './pages/ContactMe';

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
          <Route 
            path="/contact-me" 
            element={<ContactMe />} 
          />
          <Route 
            path="/resume" 
            element={<Resume />} 
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;

