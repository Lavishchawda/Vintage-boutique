import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/navbar';
import Home from './Component/Home/home';
import About from './Component/About/about';
import Gallery from './Component/Gallery/gallery';
import Contact from './Component/Contact/contact';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (1 second)
      offset: 100, // Animation triggers when the element is 100px from view
      once: false, // If false, animation repeats when scrolling back
    });
  }, []);
  
  return (
    <>
      <Navbar />
      <Routes>
         <Route path="/" element={<Home />} />
        <Route  path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
