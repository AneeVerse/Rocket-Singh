'use client'
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const experts = [
  { name: 'Jerry Wilson', role: 'Public Safety Consultant', img: '/images/jerry-wilson.jpg' },
  { name: 'Catherine Whitmore', role: 'Senior Sustainability Consultant', img: '/images/catherine-whitmore.jpg' },
  { name: 'Dorothy Riley', role: 'Energy Analyst', img: '/images/dorothy-riley.jpg' },
  { name: 'Darren Russell', role: 'Environmental Program Expert', img: '/images/darren-russell.jpg' },
  { name: 'Elizabeth Simmons', role: 'Passport Expert Officer', img: '/images/elizabeth-simmons.jpg' },
  { name: 'Darren Russell', role: 'Environmental Program Expert', img: '/images/darren-russell.jpg' },
  { name: 'Elizabeth Simmons', role: 'Passport Expert Officer', img: '/images/elizabeth-simmons.jpg' },
  { name: 'Darren Russell', role: 'Environmental Program Expert', img: '/images/darren-russell.jpg' },
  { name: 'Elizabeth Simmons', role: 'Passport Expert Officer', img: '/images/elizabeth-simmons.jpg' },
];

const Experts = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="bg-gray-50 py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">Meet our Experts</h2>
      <p className="text-center text-gray-600 mb-8">
        Our team boasts top green energy experts, driving innovation in sustainability.
      </p>
      
      <div className="relative">
        {/* Scrollable Expert Cards */}
        <div ref={scrollRef} className="flex overflow-x-scroll gap-6 py-4 px-2 scrollbar-hide">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              className="min-w-[240px] flex-shrink-0 flex flex-col items-center bg-white p-4 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
            >
              <img
                src={expert.img}
                alt={expert.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="w-full p-4">
                <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
                <p className="text-gray-600">{expert.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none"
        >
          <FaArrowLeft size={20} />
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-gray-800 hover:bg-gray-100 focus:outline-none"
        >
          <FaArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default Experts;
