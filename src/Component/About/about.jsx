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
            <li>💎 **Authenticity**: We ensure that every piece we offer is truly vintage and of the highest quality.</li>
            <li>🌱 **Sustainability**: We support eco-friendly fashion by promoting the reuse of clothing.</li>
            <li>👗 **Individuality**: We celebrate unique styles and encourage personal expression through fashion.</li>
            <li>💖 **Customer Commitment**: Our customers are at the heart of everything we do, and we strive to provide them with the best shopping experience.</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
