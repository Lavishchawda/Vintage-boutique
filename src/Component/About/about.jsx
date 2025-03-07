import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import vintageBackground from '../../assets/photos/img2.jpg';
import logo from '../../assets/photos/logo5.jpeg';
import Footer from "../Footer/footer";

const timeline = [
  { year: '2010', text: 'We started as a small boutique with a love for timeless fashion.' },
  { year: '2015', text: 'Expanded our collection to include rare vintage accessories.' },
  { year: '2022', text: 'Launched our online store, bringing vintage to the world.' },
];

const About = () => {
  return (
    <div className="about-container py-16 bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <div className="relative bg-cover bg-center py-32 sm:py-40 text-center text-white" style={{ backgroundImage: `url(${vintageBackground})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-75"></div> {/* Dark Overlay */}
        <motion.h1 
          className="relative text-3xl sm:text-4xl md:text-5xl font-bold px-4 py-2 rounded-lg inline-block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Vintage Boutique
        </motion.h1>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center">
        {/* Our Mission */}
        <section className="mt-12 sm:mt-16 mb-8 sm:mb-12 border-b pb-6">
          <motion.h2 
            className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            We make vintage fashion accessible and sustainable, helping people express their individuality through timeless styles.
          </p>
        </section>

        {/* Timeline Journey */}
        <section className="mb-8 sm:mb-12 border-b pb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 sm:p-6 shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-lg sm:text-xl font-bold">{item.year}</h3>
                <p className="text-sm sm:text-base">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b pb-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="text-sm sm:text-base text-gray-600 space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <li>💎 <strong>Authenticity</strong>: Every piece is truly vintage and high quality.</li>
            <li>🌱 <strong>Sustainability</strong>: We support eco-friendly fashion.</li>
            <li>👗 <strong>Individuality</strong>: Celebrate your unique style.</li>
            <li>💖 <strong>Customer Commitment</strong>: We prioritize your shopping experience.</li>
          </ul>
        </section>
      </div>

      {/* Founder’s Signature */}
      <div className="text-center mt-12 sm:mt-16">
        <p className="text-base sm:text-lg text-gray-700 italic px-4">
          "Thank you for keeping vintage alive!"
        </p>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={logo} alt="Founder of Vintage Boutique Signature" className="mx-auto mt-4 w-32 sm:w-48" loading="lazy" />
        </Suspense>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default About;
