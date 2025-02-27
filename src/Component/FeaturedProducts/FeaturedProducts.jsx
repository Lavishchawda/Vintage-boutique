import React, { useEffect } from "react";

const FeaturedProducts = ({ products }) => {
  const email = "lavch113@gmail.com"; 
  const whatsappNumber = "918237200591"; // Add country code (91 for India)

  // Function to send a single product's details via email
  const sendEmail = (product) => {
    const subject = `Inquiry about ${product.name}`;
    const body = `Hello,\n\nI am interested in the following product:\n\n` +
                 `Product Name: ${product.name}\n` +
                 `Description: ${product.description}\n` +
                 `Price: $${product.price}\n\n` +
                 `Please provide more details.\n\nThank you.`;

    const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailLink;
  };

  // Function to send a single product's details via WhatsApp
  const sendWhatsApp = (product) => {
    const message = `Hello,%0A%0AI am interested in this product:%0A%0A` +
                    `*Product Name:* ${product.name}%0A` +
                    `*Description:* ${product.description}%0A` +
                    `*Price:* $${product.price}%0A%0A` +
                    `Please provide more details.`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="container mx-auto py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-16 relative">
        <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
          Featured Products
        </span>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full" />
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div data-aos="fade-up"
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            <div className="relative overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <span className="text-2xl font-bold text-amber-600 block mb-4">${product.price}</span>

              {/* Buttons inside product card */}
              <div className="flex gap-4 mt-4">
                <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  onClick={() => sendEmail(product)}
                >
                  Email
                </button>
                <button 
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  onClick={() => sendWhatsApp(product)}
                >
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
