import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/photos/logo5.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Toggle menu function
  const toggleMenu = () => setIsOpen(!isOpen);

  // Menu items array
  const menuItems = ['Home', 'About', 'Gallery', 'Contact'];

  return (
    <nav className={`bg-white shadow-md sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-lg' : 'shadow-md'
    }`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/home">
          <img 
            src={logo} 
            alt="Company Logo" 
            className="h-12 w-12 transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {menuItems.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <NavLink
                to={`/${item.toLowerCase()}`}
                className={({ isActive }) => 
                  `text-gray-700 hover:text-orange-500 transition-colors duration-200 ${
                    isActive ? 'text-orange-500 font-semibold' : ''
                  }`
                }
              >
                {item}
              </NavLink>
            </motion.div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-orange-500 transition-colors"
          aria-label="Toggle navigation menu"
        >
          {/* Hamburger icon remains same */}
        </button>
      </div>

      {/* Mobile Menu - Single instance */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween' }}
        className="md:hidden fixed top-0 right-0 w-64 h-full bg-white shadow-xl z-50"
      >
        {/* Mobile menu content remains same */}
      </motion.div>
    </nav>
  );
};

export default Navbar;