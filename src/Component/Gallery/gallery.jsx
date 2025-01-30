import React from 'react';
import img2 from '../../assets/photos/img2.jpg'
const Gallery = () => {
  // Example of product categories with associated images
  const categories = {
    "New Arrivals": [
       img2,
       img2,
       img2,
       img2,
       img2,
     
    ],
    "Best Sellers": [
      img2,
      img2,
      img2,
      img2,
      img2,
    ],
    "On Sale": [
      img2,
      img2,
      img2,
      img2,
      img2,
    ],
    "Featured Products": [
      img2,
      img2,
      img2,
      img2,
      img2,
    ]
  };

  return (
    <div className="gallery-container bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex-grow">
        <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>

        {Object.keys(categories).map((categoryName, index) => (
          <div key={index} className="category-section mb-12">
            {/* Category Title */}
            <h3 className="text-2xl font-semibold text-center mb-6">{categoryName}</h3>

            {/* Grid of Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
              {categories[categoryName].map((image, imgIndex) => (
                <div key={imgIndex} className="gallery-item bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <img 
                    src={image} 
                    alt={`${categoryName} ${imgIndex}`} 
                    className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-lg font-semibold text-center">{`Product ${imgIndex + 1}`}</h4>
                </div>
              ))}
            </div>
          </div>
        ))}
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
