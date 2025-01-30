import React, { useRef } from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'; // Importing the FeaturedProducts component
import heroImage from '../../assets/photos/img1.jpg'; // Imported image

// Importing product images properly
import productImage1 from '../../assets/photos/img2.jpg';
import productImage2 from '../../assets/photos/img2.jpg';
import productImage3 from '../../assets/photos/img2.jpg';

// Sample product data with correct image imports
const products = [
  {
    name: 'Vintage Jacket',
    description: 'Stylish vintage jacket perfect for any occasion.',
    price: '99.99',
    image: productImage1, // Using imported image
  },
  {
    name: 'Retro Sunglasses',
    description: 'Retro-inspired sunglasses for a cool, classic look.',
    price: '49.99',
    image: productImage2, // Using imported image
  },
  {
    name: 'Leather Handbag',
    description: 'A beautiful handcrafted leather handbag.',
    price: '149.99',
    image: productImage3, // Using imported image
  },
  {
    name: 'Retro Sunglasses',
    description: 'Retro-inspired sunglasses for a cool, classic look.',
    price: '49.99',
    image: productImage2, // Using imported image
  },
];

const Home = () => {
  // Create a ref for the featured section
  const featuredRef = useRef(null);

  // Scroll to the featured section when the arrow is clicked
  const scrollToFeatured = () => {
    if (featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-screen"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-20 backdrop-blur"></div>

        <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-50 px-4">
          <div className="text-center text-white">
            <h1 className="text-4xl font-extrabold mb-4 text-amber-400 drop-shadow">Welcome to Vintage Boutique</h1>
            <p className="mb-8 text-lg">Discover unique styles and the latest trends.</p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={scrollToFeatured}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white animate-bounce" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 15a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 12.586l4.293-4.293a1 1 0 011.414 1.414l-5 5A1 1 0 0110 15z" clipRule="evenodd" />
          </svg>
        </div>
      </section>

      {/* Featured Products Section */}
      <section ref={featuredRef} className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <FeaturedProducts products={products} />
      </section>

      {/* Testimonials */}
      <section className="bg-blue-600 text-white py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-full sm:w-1/2 md:w-1/3 bg-white text-blue-600 p-6 rounded-lg shadow-md">
              <p>"Amazing products and great service!"</p>
              <span className="block mt-4 text-sm">- Jane Doe</span>
            </div>
            {/* Repeat for more testimonials */}
          </div>
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
