import React, { useState, useEffect } from 'react';
import img2 from '../../assets/photos/img2.jpg';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      offset: 100,    // Distance before the animation triggers
      once: true,     // Animation happens only once
    });
  }, []);

  const allProducts = [
    { name: 'Vintage Handbag', category: 'Bags', description: 'Classic leather handbag', price: 2499, image: img2 },
    { name: 'Retro Sunglasses', category: 'Accessories', description: 'Stylish 80s sunglasses', price: 1299, image: img2 },
    { name: 'Antique Watch', category: 'Accessories', description: 'Gold-plated vintage watch', price: 4999, image: img2 },
    { name: 'Classic Hat', category: 'Clothing', description: 'Timeless woolen hat', price: 999, image: img2 },
    { name: 'Vintage Dress', category: 'Clothing', description: 'Elegant floral dress', price: 2999, image: img2 },
    { name: 'Leather Boots', category: 'Shoes', description: 'Handcrafted vintage boots', price: 3999, image: img2 },
    { name: 'Pearl Necklace', category: 'Jewelry', description: 'Classic pearl necklace', price: 5999, image: img2 },
    { name: 'Retro Camera', category: 'Accessories', description: 'Vintage-style camera', price: 6999, image: img2 }
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Bags', 'Accessories', 'Clothing', 'Shoes', 'Jewelry'];

  const filteredProducts = selectedCategory === 'All' 
    ? allProducts 
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="gallery-container bg-gray-100 min-h-screen flex flex-col justify-between  bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg text-white font-semibold transition-all duration-300 ${selectedCategory === category ? 'bg-orange-500' : 'bg-gray-400 hover:bg-gray-500'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Filtered Products */}
        <div>
          <FeaturedProducts products={filteredProducts} />
        </div>
      </div>

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

export default Gallery;
