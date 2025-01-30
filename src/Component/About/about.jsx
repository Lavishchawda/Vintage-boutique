import React from 'react';

const About = () => {
  return (
    <div className="about-container bg-gray-100 py-16">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Vintage Boutique</h1>
          <p className="text-lg text-gray-600">
            At Vintage Boutique, we specialize in bringing you the finest vintage clothing and accessories. Our passion for timeless fashion drives us to curate unique styles that transcend trends.
          </p>
        </section>

        {/* Mission Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            Our mission is to make vintage fashion accessible and affordable to everyone while promoting sustainable fashion practices. We believe in creating a world where people can express their individuality through unique, vintage-inspired styles.
          </p>
        </section>

        {/* Company History */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600">
            Vintage Boutique was founded in 2010 by a group of fashion enthusiasts who wanted to bring back the charm of vintage styles. Over the years, we've grown into a trusted brand for fashion lovers who seek timeless pieces and high-quality craftsmanship.
          </p>
        </section>

        {/* Values Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="text-gray-600 space-y-4">
            <li>💎 <strong>Authenticity</strong>: We ensure that every piece we offer is truly vintage and of the highest quality.</li>
            <li>🌱 <strong>Sustainability</strong>: We support eco-friendly fashion by promoting the reuse of clothing.</li>
            <li>👗 <strong>Individuality</strong>: We celebrate unique styles and encourage personal expression through fashion.</li>
            <li>💖 <strong>Customer Commitment</strong>: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
            <li>💖 <strong>Customer Commitment</strong>: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
            <li>💖 <strong>Customer Commitment</strong>: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
            <li>💖 <strong>Customer Commitment</strong>: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
            <li>💖 <strong>Customer Commitment</strong>: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
          </ul>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
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

export default About;
