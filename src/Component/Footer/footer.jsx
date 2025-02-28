import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold">Vintage Boutique</h3>
          <p>Explore our unique collection of vintage items.</p>
        </div>
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>
          <p>Email: info@vintageboutique.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
