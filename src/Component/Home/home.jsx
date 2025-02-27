import React, { useRef, useState, useEffect } from "react";
import heroImage from "../../assets/photos/img1.jpg";
import productImage1 from "../../assets/photos/img2.jpg";
import productImage2 from "../../assets/photos/img1.jpg";
import productImage3 from "../../assets/photos/logo2.png";
import "../../App.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { motion } from 'framer-motion';

const  whyChooseUs = [
  { year: 'Premium Quality', text: 'Handpicked vintage items with top-notch quality and authenticity.' },
  { year: 'Fast Shipping', text: 'We deliver quickly and safely to ensure customer satisfaction.' },
  { year: 'Customer Support', text: 'Our team is available 24/7 to assist you with any inquiries.' },
];

const products = [
  {
    name: "Vintage Jacket",
    description: "Stylish vintage jacket perfect for any occasion.",
    price: "99.99",
    image: productImage1,
  },
  {
    name: "Retro Sunglasses",
    description: "Retro-inspired sunglasses for a cool, classic look.",
    price: "49.99",
    image: productImage2,
  },
  {
    name: "Leather Handbag",
    description: "A beautiful handcrafted leather handbag.",
    price: "149.99",
    image: productImage3,
  },
];

const Home = () => {
  const featuredRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden ">
        <div className="absolute  inset-0 bg-gradient-to-r from-black/40 to-black/20">
          <img
            src={heroImage}
            alt="Vintage collection"
            className="w-full h-full object-cover transform transition-transform duration-1000 hover:scale-105"
          />
        </div>

        <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white animate-fade-in">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Timeless Elegance
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl animate-fade-in animate-delay-100">
            Discover pieces with history, curated for modern life
          </p>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
          onClick={scrollToFeatured}
        >
          <div className="w-10 h-16 rounded-3xl border-4 border-amber-400 flex justify-center">
            <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </section>

      {/* Featured Products Section with ref */}
      <div ref={featuredRef}>
        <FeaturedProducts products={products} />
      </div>

      {/* Additional Section - Why Choose Us */}
      <section className="container mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Why Choose Us?
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          We provide high-quality vintage products with a unique history. Our collection is carefully curated to bring timeless elegance to your wardrobe. Enjoy worldwide shipping and exceptional customer service.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            {whyChooseUs.map((item, index) => (
              <motion.div 
                key={index} 
                className="w-1/3 bg-white p-6 shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold">{item.year}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
       
      </section>

    {/* Footer Section */}
    <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold">Vintage Boutique</h3>
            <p>Explore our unique collection of vintage items.</p>
          </div>
          <div className="mb-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <p>Email: info@vintageboutique.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </div>
      </footer>
     
    </div>
  );
};

export default Home;
