import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/photos/logo2.png'; // Adjusted import path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-orange-400  to-orange-400 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-12 w-12" />  {/* Updated size */}
            <span className="text-2xl font-bold text-white ml-2"></span>
          </Link>
        </div>

        {/* Links for desktop */}
        <div className="hidden md:flex space-x-6">
          <Link
            to="/"
            className="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-orange-400 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-inner transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-orange-400 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-inner transition-all duration-200"
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-orange-400 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-inner transition-all duration-200"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="text-white py-2 px-4 rounded-lg bg-gradient-to-r from-orange-400 shadow-md hover:shadow-lg active:translate-y-1 active:shadow-inner transition-all duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      <div
        className={`md:hidden fixed top-0 right-0 h-auto w-56 bg-orange-600 shadow-lg transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none absolute top-4 right-4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex flex-col items-start p-6 space-y-4">
          <Link
            to="/"
            onClick={toggleMenu} // close menu on click
            className="block py-2 px-4 text-white hover:bg-orange-500 rounded-lg transition-all duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={toggleMenu} // close menu on click
            className="block py-2 px-4 text-white hover:bg-orange-500 rounded-lg transition-all duration-300"
          >
            About
          </Link>
          <Link
            to="/gallery"
            onClick={toggleMenu} // close menu on click
            className="block py-2 px-4 text-white hover:bg-orange-500 rounded-lg transition-all duration-300"
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            onClick={toggleMenu} // close menu on click
            className="block py-2 px-4 text-white hover:bg-orange-500 rounded-lg transition-all duration-300"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
