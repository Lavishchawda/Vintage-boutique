import React from 'react';

const FeaturedProducts = ({ products }) => {

  // Function to create the WhatsApp link with your number
  const getWhatsAppLink = (product) => {
    const message = `Check out this product: *${product.name}*\n\n${product.description}\nPrice: $${product.price}`;
    // Replace '8237200591' with your WhatsApp number
    return `https://wa.me/+91-8275319252?text=${encodeURIComponent(message)}`;
  };

  // Function to create the email link with your email address
  const getEmailLink = (product) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello,\n\nI am interested in the following product:\n\nName: ${product.name}\nDescription: ${product.description}\nPrice: $${product.price}\n\nPlease provide more details.`;
    // Replace 'lavishchawda1@gmail.com' with your email address
    return `mailto:lavishchawda1@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="featured-products">
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

            {/* Buttons for Email and WhatsApp */}
            <div className="mt-4 flex space-x-4">
              {/* Email Button */}
              <a 
                href={getEmailLink(product)} 
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                Email
              </a>

              {/* WhatsApp Button */}
              <a 
                href={getWhatsAppLink(product)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              >
                WhatsApp
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
