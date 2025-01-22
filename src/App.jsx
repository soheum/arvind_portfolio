import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Broche from './pages/Broche';
import { useState } from 'react'
import { motion } from 'framer-motion';
// import './App.css'
import './index.css'

function App() {

  return (
    <>
      <section className="w-full bg-black">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/broche" element={<Broche />} />
        </Routes>
      </section>
     
    </>
  )
};

export default App;
