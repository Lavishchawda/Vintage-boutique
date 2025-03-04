import React, { useState } from 'react';
import Footer from "../Footer/footer";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("user_name"),
      email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('http://localhost:5000/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully!");
      } else {
        setStatusMessage("An error occurred, please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("An error occurred, please try again.");
    }
  };

  return (
    <div className="contact-container bg-gray-100 min-h-screen flex flex-col justify-between bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex-grow">
        {/* Contact Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us for any inquiries or support. We’re always happy to hear from you!
            </p>
            
            <p className="flex items-center text-gray-700">
              <Mail className="mr-2 text-blue-600" size={20} /> 
              <strong>Email:</strong> lavch113@gmail.com
            </p>
            <p className="flex items-center text-gray-700">
              <Phone className="mr-2 text-green-600" size={20} />
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="flex items-center text-gray-700">
              <MapPin className="mr-2 text-red-600" size={20} />
              <strong>Address:</strong> 123 Vintage Street, Fashion City, USA
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-6">  
                <a 
                  href="https://www.instagram.com/vintage_boutique29/" 
                  className="text-pink-600 hover:text-pink-800 flex items-center space-x-2"
                >
                  <Instagram size={24} />
                
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Contact;
