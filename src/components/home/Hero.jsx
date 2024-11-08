'use client'
import { motion } from 'framer-motion';
import { FaTasks, FaStar, FaUserTie } from 'react-icons/fa';

const services = [
  {
    title: 'Fresh Passport',
    description: 'Get a new passport with minimal documentation.',
    icon: <FaTasks size={24} />,
  },
  {
    title: 'Tatkal Passport',
    description: 'Fast-track your passport application.',
    icon: <FaTasks size={24} />,
  },
  {
    title: 'Lost Passport',
    description: 'Replace a lost or stolen passport quickly.',
    icon: <FaTasks size={24} />,
  },
];

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-white to-red-50 py-8 lg:py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left Text Section */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <p className="text-lg font-medium text-gray-500">Hi, there!</p>
          <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-800">
            <span className="text-red-600">ROCKET</span> IS HERE TO BE YOUR ASSISTANCE
          </h1>
          <p className="text-gray-600 mt-2">
            We work hard for fast and reliable service.
          </p>
          <motion.a
            className="mt-6 bg-red-600 text-white py-3 px-8 rounded-full font-semibold inline-block hover:bg-red-700"
            href='#contact'
          >
            Let’s Discuss
          </motion.a>
        </div>

        {/* Right Image Section */}
        <div className="relative w-60 h-60 lg:w-96 lg:h-96 mx-auto">
          {/* Main Character Image */}
          <img
            src="/images/hero-img.png" // Replace with actual image path
            alt="Passport Manager"
            className="w-full h-full object-contain"
          />
          {/* Badges */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-red-600 text-white px-2 py-1 rounded-full">2K+</span>
            <p className="text-sm font-semibold text-gray-700">Projects</p>
          </motion.div>
          <motion.div
            className="absolute top-10 -left-0 transform translate-x-1/4 bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <FaStar className="text-yellow-500" />
            <p className="text-sm font-semibold text-gray-700">4.8 Satisfaction</p>
          </motion.div>
          <motion.div
            className="absolute -bottom-8 lg:-bottom-0 min-w-fit left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg p-2 flex items-center space-x-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <FaUserTie className="text-red-600" />
            <p className="text-sm font-semibold text-gray-700">Passport Manager - 5 Years</p>
          </motion.div>
        </div>
      </div>
{/* 
      <div className="mt-12 max-w-full md:max-w-[50%] text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Service</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-red-100 text-red-600 rounded-full">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div> */}
    </section>
  );
};

export default Hero;
