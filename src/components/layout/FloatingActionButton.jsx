"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import { IoIosClose, IoIosAdd, IoIosRemove } from "react-icons/io";
import { MdContentCopy } from 'react-icons/md';

const FloatingActionButton = () => {
  const [open, setOpen] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setOpen(false))
      .catch((err) => alert('Failed to copy: ' + err));
  };

  // Framer Motion variants for animation
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1 },
    hover: { scale: 1.1, rotate: 360 },
    tap: { scale: 0.95 }
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-40">
      {open && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="flex md:hidden flex-col items-center gap-3 mb-4"
        >
          <motion.a
            href="https://wa.me/+917021388625"
            className="w-14 h-14 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg border border-red-600"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaWhatsapp size={26} />
          </motion.a>

          <motion.a
            href="mailto:rocketsinghentps@gmail.com"
            className="w-14 h-14 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg border border-red-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={26} />
          </motion.a>

          <motion.a
            href="tel:+917021388625"
            className="w-14 h-14 bg-white text-red-600 rounded-full flex items-center justify-center shadow-lg border border-red-600"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaPhone size={26} />
          </motion.a>
        </motion.div>
      )}

      {open && (
        <motion.div 
          initial="hidden" 
          animate="visible" 
          exit="exit" 
          className="fixed inset-0 bg-gray-900 bg-opacity-50 hidden md:flex items-center justify-center z-50"
        >
          <motion.div
            className="bg-white relative rounded-xl shadow-lg p-8 max-w-md md:max-w-lg w-full text-center"
            variants={containerVariants}
          >
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Get in Touch</h2>
            <motion.button
              className="text-red-600 absolute top-3 right-3 px-1 py-1 rounded-full focus:outline-none"
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.2 }}
            >
              <IoIosClose className="self-center h-8 w-8" />
            </motion.button>
            <div className="flex flex-col gap-5">
              <motion.div 
                className="flex items-center justify-between p-4 border border-red-600 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="https://wa.me/+917021388625"
                  className="flex items-center text-red-600 cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">WhatsApp: +91 7021388625</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('+91 7021388625')}
                  className="text-gray-500 hover:text-red-600 focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>
              
              <motion.div 
                className="flex items-center justify-between p-4 border border-red-600 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="mailto:rocketsinghentps@gmail.com"
                  className="flex items-center text-red-600 cursor-pointer"
                >
                  <FaEnvelope size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">Email: rocketsinghentps@gmail.com</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('rocketsinghentps@gmail.com')}
                  className="text-gray-500 hover:text-red-600 focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>

              <motion.div 
                className="flex items-center justify-between p-4 border border-red-600 rounded-xl"
                whileHover={{ scale: 1.05 }}
              >
                <a
                  href="tel:+917021388625"
                  className="flex items-center text-red-600 cursor-pointer"
                >
                  <FaPhone size={24} />
                  <span className="ml-3 text-lg font-medium text-gray-700">Call: +91 7021388625</span>
                </a>
                <motion.button
                  onClick={() => handleCopy('+91 7021388625')}
                  className="text-gray-500 hover:text-red-600 focus:outline-none"
                  whileTap={{ scale: 0.9 }}
                >
                  <MdContentCopy size={20} />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <motion.button
        className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg focus:outline-none"
        onClick={() => setOpen(!open)}
        whileHover="hover"
        whileTap="tap"
        variants={buttonVariants}
      >
        <span>{open ? <IoIosRemove className="self-center h-8 w-8" /> : <IoIosAdd className="self-center h-8 w-8" />}</span> 
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
