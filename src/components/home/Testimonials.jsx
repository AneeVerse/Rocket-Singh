"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
const testimonials = [
  {
    quote: "Rocket Singh transformed my experience. Fast, reliable, and efficient service!",
    name: "Jenny Wilson",
    role: "Solar Energy Specialist",
    rating: 5,
  },
  {
    quote: "Outstanding service! Rocket Singh made the process seamless and stress-free.",
    name: "Cameron Williamson",
    role: "Environmental Consultant",
    rating: 5,
  },
  {
    quote: "Efficient, professional, and trustworthy. Highly recommend Rocket Singh's services!",
    name: "Courtney Henry",
    role: "Energy Analyst",
    rating: 5,
  },
];

const TestimonialSection = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section id='testimonials' className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-gray-800 mb-2">What our customers say</h2>
      <p className="text-gray-500 mb-8">Thousands of satisfied customers have trusted our services</p>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg"
        >
          <div className="flex justify-center mb-4">
            {Array(testimonials[current].rating)
              .fill()
              .map((_, index) => (
                <FaStar key={index} className="text-red-500" />
              ))}
          </div>
          <p className="text-lg font-semibold text-gray-700 mb-4">&quot;{testimonials[current].quote}&quot;</p>
          <h4 className="text-md font-bold text-gray-800">{testimonials[current].name}</h4>
          <p className="text-gray-500">{testimonials[current].role}</p>
        </motion.div>

        {/* Arrows */}
        <div className="absolute inset-y-0 flex items-center justify-between w-full">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-red-600 hover:shadow-lg transition"
          >
            <FaAngleLeft size={20} />
          </button>
          <button
            onClick={handleNext}
            className="bg-white rounded-full shadow-md p-2 text-gray-600 hover:text-red-600 hover:shadow-lg transition"
          >
            <FaAngleRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
