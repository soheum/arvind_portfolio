import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Theme switch: a solid circle in the top right corner showing the background it
// switches to (white circle on the dark site, black circle on the white site).
// The choice is remembered on this browser (read on load in index.html).
const toggleTheme = () => {
  const root = document.documentElement;
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  if (next === 'light') root.dataset.theme = 'light';
  else delete root.dataset.theme;
  try { localStorage.setItem('site-theme', next); } catch (e) { /* storage unavailable */ }
};

// Clicking the name toggles the intro, which sits above the project list (Home.jsx)
const Header = ({ onNameClick = () => {} }) => {
    return (
        <header className="container mx-auto w-full pt-8 pb-8 md:pb-0 flex items-center justify-between">
            <h1 onClick={onNameClick} className="cursor-pointer text-[var(--fg)] text-2xl font-normal font-geist">Arvind Sushil</h1>
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Switch between dark and white background"
              title="Switch background"
              className="w-4 h-4 rounded-full bg-[var(--fg)] transition-transform duration-200 hover:scale-125"
            />
        </header>
    )
};

export default Header;