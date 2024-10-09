import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'; // Importing the FeaturedProducts component

// Sample product data to pass to the FeaturedProducts component
const products = [
  {
    name: 'Vintage Jacket',
    description: 'Stylish vintage jacket perfect for any occasion.',
    price: '99.99',
    image: '/path-to-product1.jpg',
  },
  {
    name: 'Retro Sunglasses',
    description: 'Retro-inspired sunglasses for a cool, classic look.',
    price: '49.99',
    image: '/path-to-product2.jpg',
  },
  {
    name: 'Leather Handbag',
    description: 'A beautiful handcrafted leather handbag.',
    price: '149.99',
    image: '/path-to-product3.jpg',
  },
];

const Home = () => {
  return (
    <div className="home-container bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Welcome to Vintage Boutique</h1>
            <p className="mt-4 text-lg">Discover unique styles and the latest trends.</p>
            <a href="/shop" className="mt-8 px-6 py-3 bg-blue-600 hover:bg-blue-800 text-white rounded-md">Shop Now</a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>

        {/* FeaturedProducts Component */}
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
    </div>
  );
};

export default Home;
