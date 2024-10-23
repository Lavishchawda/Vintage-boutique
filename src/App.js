import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/navbar';
import Home from './Component/Home/home';
import About from './Component/About/about';
import Gallery from './Component/Gallery/gallery';
import Contact from './Component/Contact/contact';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
