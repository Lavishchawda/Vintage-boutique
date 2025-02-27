import React, { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import vintageBackground from '../../assets/photos/img2.jpg';
import logo from '../../assets/photos/logo5.jpeg'

const timeline = [
  { year: '2010', text: 'We started as a small boutique with a love for timeless fashion.' },
  { year: '2015', text: 'Expanded our collection to include rare vintage accessories.' },
  { year: '2022', text: 'Launched our online store, bringing vintage to the world.' },
];

const About = () => {
  return (
    <div className="about-container  py-16  bg-gradient-to-b from-amber-50 to-orange-50">
     {/* Hero Section */}
<div className="relative bg-cover bg-center py-40 text-center text-white" style={{ backgroundImage: `url(${vintageBackground})` }}>
  <div className="absolute inset-0 bg-black bg-opacity-75"></div> {/* Dark Overlay */}
  <motion.h1 
    className="relative text-5xl font-bold px-6 py-3 rounded-lg inline-block"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    About Vintage Boutique
  </motion.h1>
</div>


      <div className="container mx-auto px-6 lg:px-12 text-center ">
        {/* Our Mission */}
        <section className="mt-16 text-center mb-12 border-b pb-8">
          <motion.h2 
            className="text-3xl font-semibold text-gray-800 mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Mission
          </motion.h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We make vintage fashion accessible and sustainable, helping people express their individuality through timeless styles.
          </p>
        </section>

        {/* Timeline Journey */}
        <section className="mb-12 border-b pb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index} 
                className="w-1/3 bg-white p-6 shadow-lg rounded-lg"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-xl font-bold">{item.year}</h3>
                <p>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="border-b pb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Values</h2>
          <ul className="text-gray-600 space-y-4 max-w-2xl mx-auto">
            <li>💎 <strong>Authenticity</strong>: Every piece is truly vintage and high quality.</li>
            <li>🌱 <strong>Sustainability</strong>: We support eco-friendly fashion.</li>
            <li>👗 <strong>Individuality</strong>: Celebrate your unique style.</li>
            <li>💖 <strong>Customer Commitment</strong>: We prioritize your shopping experience.</li>
          </ul>
        </section>
      </div>

      {/* Founder’s Signature */}
      <div className="text-center mt-16">
        <p className="text-lg text-gray-700 italic">"Thank you for keeping vintage alive!"</p>
        <Suspense fallback={<div>Loading...</div>}>
          <img src={logo} alt="Founder of Vintage Boutique Signature" className="mx-auto mt-4 w-48" loading="lazy" />
        </Suspense>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold">Vintage Boutique</h3>
          <p>Explore our unique collection of vintage items.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;