import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Clicking the name toggles the intro, which sits above the project list (Home.jsx)
const Header = ({ onNameClick = () => {} }) => {
    return (
        <header className="container mx-auto w-full pt-8">
            <h1 onClick={onNameClick} className="cursor-pointer text-white text-2xl font-regular font-medium font-questrial">ARVIND SUSHIL</h1>
            <div className="md:hidden mb-8">
            </div>
        </header>
    )
};

export default Header;