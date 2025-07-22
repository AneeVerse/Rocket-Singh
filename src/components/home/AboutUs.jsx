"use client";
import Container from './../layout/Container';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 space-y-8 lg:space-y-0">
          {/* Left Image Section */}
          <motion.div
            className="w-full lg:w-1/2 lg:h-[600px] mb-6 lg:mb-0 flex justify-center lg:justify-start items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/images/about2.jpg" // Replace with the actual path to the image
              alt="About Us"
              width={500}
              height={600}
              className="w-full h-[350px] sm:h-[400px] lg:h-[600px] object-cover rounded-lg shadow-lg lg:max-h-full"
            />
          </motion.div>

          {/* Right Text Section */}
          <div className="w-full lg:w-1/2 lg:h-[600px] space-y-2 text-center lg:text-left flex flex-col justify-center lg:justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">About Us – Trusted Urgent Passport Services in Mumbai</h2>
            <p className="text-gray-600 text-left text-base md:text-lg leading-relaxed">
              At <span className="text-red-600">Rocket Singh Enterprises</span>, we specialize in providing fast, reliable, and hassle-free Tatkaal passport services in Mumbai. Whether you need a new passport, passport renewal, or urgent assistance with a lost or damaged passport, our expert team is here to guide you through every step.
            </p>
            <p className="text-gray-600 text-left text-base md:text-lg leading-relaxed">
              With years of experience serving clients across Mumbai—including Nerul, Seawoods, Andheri, and beyond—we understand local requirements and timelines inside out. Our mission is to help you get your passport processed quickly and smoothly, so you can focus on your travel plans without worry.
            </p>

            {/* Key Benefits List */}
            <ul className="space-y-2">
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-2 mt-0.5" size={20} />
                <span className="text-gray-700 text-left text-base md:text-lg">Quick turnaround for Tatkal passport applications in Mumbai</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-2 mt-0.5" size={20} />
                <span className="text-gray-700 text-left text-base md:text-lg">Personalized support tailored to your unique situation</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-2 mt-0.5" size={20} />
                <span className="text-gray-700 text-left text-base md:text-lg">Complete assistance with document preparation and appointment booking</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-2 mt-0.5" size={20} />
                <span className="text-gray-700 text-left text-base md:text-lg">Transparent process with regular updates and prompt communication</span>
              </li>
              <li className="flex items-start">
                <FaCheckCircle className="text-red-600 mr-2 mt-0.5" size={20} />
                <span className="text-gray-700 text-left text-base md:text-lg">Trusted by hundreds of Mumbai clients for urgent passport needs</span>
              </li>
            </ul>

            <motion.div className="mt-6">
              <Link href={"#contact"} className="bg-red-600 inline-flex text-white py-3 px-8 rounded-full font-semibold hover:bg-red-700">
                Apply Now
              </Link>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutUs;
