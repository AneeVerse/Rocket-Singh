"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaBars, FaTimes, FaHome, FaConciergeBell, FaInfoCircle, FaEnvelope, FaQuestion } from 'react-icons/fa';
import { VscServerProcess } from "react-icons/vsc";
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto max-w-7xl p-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl flex items-center gap-[6px] font-bold text-red-600">
          <Image 
           src={"/images/profile.png"}
          width={40}
          height={40}
          alt='Rocket sing logo'
          className='self-center'
          />
         <span>Rocket Singh</span></div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 font-semibold">
          <a href="#process" className="text-gray-700 hover:text-red-600 flex items-center space-x-2">
            <VscServerProcess />
            <span>Process</span>
          </a>
          <a href="#service" className="text-gray-700 hover:text-red-600 flex items-center space-x-2">
            <FaConciergeBell />
            <span>Service</span>
          </a>
          <a href="#about" className="text-gray-700 hover:text-red-600 flex items-center space-x-2">
            <FaInfoCircle />
            <span>About</span>
          </a>
          <a href="#contact" className="text-gray-700 hover:text-red-600 flex items-center space-x-2">
            <FaEnvelope />
            <span>Contact</span>
          </a>

          <a href="#faq" className="text-gray-700 hover:text-red-600 flex items-center space-x-2">
            <FaQuestion />
            <span>FAQ</span>
          </a>
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <FaFacebook className="text-gray-500 hover:text-blue-600" />
          <FaInstagram className="text-gray-500 hover:text-pink-500" />
          <FaLinkedin className="text-gray-500 hover:text-blue-700" />
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleSidebar}>
            {isOpen ? <FaTimes size={24} className="text-red-600" /> : <FaBars size={24} className="text-red-600" />}
          </button>
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: isOpen ? '0%' : '-100%' }}
        transition={{ type: 'tween' }}
        className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-lg z-50 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300`}
      >
        <div className="flex flex-col p-6 space-y-6">
          {/* Logo inside Sidebar */}
          <div className="text-2xl font-bold text-red-600">Rocket Singh</div>

          {/* Sidebar Navigation */}
          <nav className="flex flex-col space-y-4 font-semibold">
            <a href="/" className="flex items-center text-gray-700 hover:text-red-600 space-x-2">
              <FaHome />
              <span>Home</span>
            </a>
            <a href="/service" className="flex items-center text-gray-700 hover:text-red-600 space-x-2">
              <FaConciergeBell />
              <span>Service</span>
            </a>
            <a href="/about" className="flex items-center text-gray-700 hover:text-red-600 space-x-2">
              <FaInfoCircle />
              <span>About</span>
            </a>
            <a href="/contact" className="flex items-center text-gray-700 hover:text-red-600 space-x-2">
              <FaEnvelope />
              <span>Contact</span>
            </a>
          </nav>

          {/* Sidebar Social Icons */}
          <div className="flex space-x-4 pt-4">
            <FaFacebook className="text-gray-500 hover:text-blue-600" />
            <FaInstagram className="text-gray-500 hover:text-pink-500" />
            <FaLinkedin className="text-gray-500 hover:text-blue-700" />
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;