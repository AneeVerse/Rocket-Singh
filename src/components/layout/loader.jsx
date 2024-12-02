// components/Loader.js
import { motion } from "framer-motion";
import { FaPlaneDeparture, FaPlaneArrival } from "react-icons/fa";
import { IoAirplane } from "react-icons/io5";

const Loader = ({ onComplete }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-transparent z-50">
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        {/* Left Door */}
        <motion.div
          className="bg-red-600 h-full w-1/2 absolute left-0"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1.3 }}
          onAnimationComplete={onComplete}
        >
            <div className="relative h-full w-full">

          <motion.div
            initial={{ opacity:1 }}
            animate={{  opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute right-4 top-1/2"
          >
            <IoAirplane className="text-white text-5xl transform scale-x-[-1]" />
          </motion.div>
            </div>
        </motion.div>

        {/* Right Door */}
        <motion.div
          className="bg-red-600 h-full w-1/2 absolute right-0"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.3 }}
        >

<div className="relative block h-full w-full">
        {/* Airplane Icons */}

          <motion.div
            initial={{ opacity:1 }}
            animate={{  opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute left-5 top-1/2"
          >
            <IoAirplane className="text-white text-5xl" />
          </motion.div>
          </div>
          </motion.div>
      </div>
    </div>
  );
};

export default Loader;
