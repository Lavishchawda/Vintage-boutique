import React from "react";
import { Phone, Mail, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto text-center">
        <div className="mb-4">
          <h3 className="text-xl md:text-2xl font-bold">Vintage Boutique</h3>
          <p>Explore our unique collection of vintage items.</p>
        </div>

        {/* Contact Information */}
        <div className="mb-4">
          <h4 className="text-lg font-semibold">Contact Us</h4>

          <p className="flex items-center justify-center space-x-2">
            <Mail size={20} className="text-blue-400" />
            <span>info@vintageboutique.com</span>
          </p>

          <p className="flex items-center justify-center space-x-2 mt-2">
            <Phone size={20} className="text-green-400" />
            <span>+1 234 567 890</span>
          </p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com/vintage_boutique29/" 
            className="text-pink-500 hover:text-pink-600"
          >
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
