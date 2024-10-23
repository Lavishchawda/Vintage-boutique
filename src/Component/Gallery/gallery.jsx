import React from 'react';

const Gallery = () => {
  // Example of product categories with associated images
  const categories = {
    "New Arrivals": [
      '/path-to-your-image1.jpg',
      '/path-to-your-image2.jpg',
      '/path-to-your-image3.jpg',
      '/path-to-your-image4.jpg',
      '/path-to-your-image5.jpg',
    ],
    "Best Sellers": [
      '/path-to-your-image6.jpg',
      '/path-to-your-image7.jpg',
      '/path-to-your-image8.jpg',
      '/path-to-your-image9.jpg',
      '/path-to-your-image10.jpg',
    ],
    "On Sale": [
      '/path-to-your-image11.jpg',
      '/path-to-your-image12.jpg',
      '/path-to-your-image13.jpg',
      '/path-to-your-image14.jpg',
      '/path-to-your-image15.jpg',
    ],
    "Featured Products": [
      '/path-to-your-image16.jpg',
      '/path-to-your-image17.jpg',
      '/path-to-your-image18.jpg',
      '/path-to-your-image19.jpg',
      '/path-to-your-image20.jpg',
    ]
  };

  return (
    <div className="gallery-container bg-gray-100 py-12">
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
  );
};

export default Gallery;
