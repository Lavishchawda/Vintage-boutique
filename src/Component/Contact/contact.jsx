import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container bg-gray-100 min-h-screen flex flex-col justify-between">
      <div className="container mx-auto px-6 lg:px-12 py-12 flex-grow">
        {/* Contact Heading */}
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="mt-1 p-3 w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <p className="text-gray-700 mb-4">
              Feel free to reach out to us for any inquiries or support. We’re always happy to hear from you!
            </p>
            <p className="text-gray-700">
              <strong>Email:</strong> info@vintageboutique.com
            </p>
            <p className="text-gray-700">
              <strong>Phone:</strong> +1 234 567 890
            </p>
            <p className="text-gray-700">
              <strong>Address:</strong> 123 Vintage Street, Fashion City, USA
            </p>

            {/* Social Media Links */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-6">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-facebook-f"></i> Facebook
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-twitter"></i> Twitter
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
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

export default Contact;
