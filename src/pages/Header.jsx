import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header = () => {
    const handleClick = () => {
        window.location.href = window.location.origin;
    }
    return (
        <header className="container mx-auto w-full h-20 pt-8 ">
            <h1 onClick={handleClick} className="cursor-pointer text-white text-2xl font-regular font-medium font-montreal">Arvind Sushil</h1>
            <span className="text-montreal text-[#D0D0D0] font-light text-base hidden sm:block">
            Designer of objects
            </span>
            <div className="md:hidden mb-8">
            </div>
        </header>
    )
};

export default Header;