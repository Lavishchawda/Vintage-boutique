import React, { useRef, useState, useEffect } from "react";
import heroImage from "../../assets/photos/img1.jpg";
import productImage1 from "../../assets/photos/img2.jpg";
import productImage2 from "../../assets/photos/img1.jpg";
import productImage3 from "../../assets/photos/logo2.png";
import "../../App.css";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import { motion } from 'framer-motion';
import Footer from "../Footer/footer";

const whyChooseUs = [
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
      <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center mb-7 text-center px-6">
        <div className="absolute inset-0 ">
          <img
            src={heroImage}
            alt="Vintage collection"
            className="w-full h-full object-cover brightness-50 "
          />
        </div>

        <div className="relative z-10 text-white">
          <h1 className="text-3xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Timeless Elegance
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-lg mx-auto">
            Discover pieces with history, curated for modern life
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce" onClick={scrollToFeatured}>
          <div className="w-8 h-12 rounded-3xl border-4 border-amber-400 flex justify-center">
            <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 animate-ping" />
          </div>
        </div>
      </section>

      {/* Featured Products Section with ref */}
      <div ref={featuredRef} className="px-4">
        <FeaturedProducts products={products} />
      </div>

      {/* Additional Section - Why Choose Us */}
      <section className="container mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
            Why Choose Us?
          </span>
        </h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          We provide high-quality vintage products with a unique history. Our collection is carefully curated to bring timeless elegance to your wardrobe. Enjoy worldwide shipping and exceptional customer service.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {whyChooseUs.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-bold">{item.year}</h3>
              <p className="text-sm md:text-base">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
