import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold text-gray-800 ml-2">Vintage-boutique</span>
          </Link>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/gallary" className="text-gray-600 hover:text-blue-600">Gallary</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-100 shadow-lg">
          <Link to="/" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Home</Link>
          <Link to="/about" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">About</Link>
          <Link to="/gallary" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Gallary</Link>
          <Link to="/contact" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
