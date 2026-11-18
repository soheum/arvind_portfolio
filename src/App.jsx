import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Broche from './pages/Broche';
import { useState } from 'react'
import { motion } from 'framer-motion';
// import './App.css'
import './index.css'

// Background theme: dark by default. The circle next to CV switches it and the
// choice is remembered on this browser; ?theme=light / ?theme=dark in the URL overrides it.
{
  let theme = new URLSearchParams(window.location.search).get('theme');
  if (!theme) { try { theme = localStorage.getItem('theme'); } catch (e) { /* storage unavailable */ } }
  if (theme === 'light') document.documentElement.dataset.theme = 'light';
}

function App() {

  return (
    <>
      <section className="w-full bg-[var(--bg)]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/broche" element={<Broche />} />
        </Routes>
      </section>
     
    </>
  )
};

export default App;
