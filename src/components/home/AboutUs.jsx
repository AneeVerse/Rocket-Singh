"use client";
import Container from './../layout/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Left Image Section */}
          <motion.div
            className="w-full lg:w-1/2 lg:h-[500px] mb-6 lg:mb-0 flex justify-center lg:justify-start"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src="/images/passport.jpeg" // Replace with the actual path to the image
              alt="About Us"
              className="w-full h-full object-cover rounded-lg shadow-lg lg:max-h-full"
            />
          </motion.div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 lg:h-[500px] space-y-6 text-center lg:text-left flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="text-gray-600 text-left text-lg leading-relaxed">
              At <span className="text-red-600">Rocket Singh Enterprises</span>, we are dedicated to making your experience effortless. With years of industry expertise, our team of professionals provides quick, reliable assistance tailored to your needs.
            </p>
            <p className="text-gray-600 text-lg text-left leading-relaxed">
              We believe in simplifying complex processes, allowing you to focus on what truly matters. Trust us to guide you through every step with precision and dedication.
            </p>

            {/* Key Benefits List */}
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700 text-left text-lg">Experienced and dedicated professionals.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700 text-left text-lg">Tailored solutions to meet your unique needs.</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-3 mt-1" size={20} />
                <span className="text-gray-700 text-left text-lg">Seamless processes for a stress-free experience.</span>
              </li>
            </ul>

            <motion.div className="mt-6">
              <Link href={"#contact"} className="bg-red-600 inline-flex text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700">
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
