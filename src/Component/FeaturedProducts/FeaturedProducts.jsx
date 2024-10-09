// src/components/FeaturedProducts.jsx
import React from 'react';

const FeaturedProducts = ({ products }) => {
  return (
    <div className="featured-products py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="product-card bg-white p-4 shadow-md">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4"
            />
            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-500">{product.description}</p>
            <p className="mt-2 text-blue-600 font-semibold">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
