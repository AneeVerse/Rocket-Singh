'use client';
import { useState, useEffect, useRef, useCallback } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const experts = [
  { name: 'Jerry Wilson', role: 'Public Safety Consultant', img: '/images/team-profile.webp' },
  { name: 'Catherine Whitmore', role: 'Senior Sustainability Consultant', img: '/images/team-profile.webp' },
  { name: 'Dorothy Riley', role: 'Energy Analyst', img: '/images/team-profile.webp' },
  { name: 'Darren Russell', role: 'Environmental Program Expert', img: '/images/team-profile.webp' },
  { name: 'Elizabeth Simmons', role: 'Passport Expert Officer', img: '/images/team-profile.webp' },
];

const Experts = () => {
  const [current, setCurrent] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const autoScrollRef = useRef(null);

  // Calculate number of visible cards based on screen width
  const updateCardsToShow = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 2000) setCardsToShow(4);
    else if (screenWidth >= 1200) setCardsToShow(4);
    else if (screenWidth >= 800) setCardsToShow(3);
    else if (screenWidth >= 492) setCardsToShow(2);
    else setCardsToShow(1);
  };

  useEffect(() => {
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Auto-scroll handler
  const handleAutoScroll = useCallback(() => {
    setCurrent((prev) =>
      prev < experts.length - cardsToShow ? prev + 1 : 0
    );
  }, [cardsToShow]);

  // Button click handlers with auto-scroll reset
  const handleLeft = () => {
    clearInterval(autoScrollRef.current);
    setCurrent((prev) => (prev > 0 ? prev - 1 : experts.length - cardsToShow));
    resetAutoScroll();
  };

  const handleRight = () => {
    clearInterval(autoScrollRef.current);
    setCurrent((prev) => (prev < experts.length - cardsToShow ? prev + 1 : 0));
    resetAutoScroll();
  };

  // Reset auto-scroll
  const resetAutoScroll = () => {
    clearInterval(autoScrollRef.current);
    autoScrollRef.current = setInterval(handleAutoScroll, 5000);
  };

  // Initialize auto-scroll on component mount
  useEffect(() => {
    autoScrollRef.current = setInterval(handleAutoScroll, 5000);
    return () => clearInterval(autoScrollRef.current);
  }, [cardsToShow, handleAutoScroll]);

  return (
    <section className="py-16 px-2 bg-gray-50">
      <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Meet our Experts</h2>
      <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
        Our team consists of top professionals dedicated to driving innovation and sustainability in their fields.
      </p>
       <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / cardsToShow)}%)`,
            }}
          >
            {experts.map((expert, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg flex-shrink-0 mx-3 my-4 overflow-hidden"
                style={{
                  flex: `0 0 calc((100% - ${cardsToShow * 20}px) / ${cardsToShow})`,
                }}
              >
                <Image
                  src={expert.img}
                  alt={expert.name}
                  width={300}
                  height={250}
                  className="w-full h-[250px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800">{expert.name}</h3>
                  <p className="text-gray-600 mt-1">{expert.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <FaAngleLeft
            className="text-red-600 absolute top-1/2 translate-y-[-50%] left-4 z-40 cursor-pointer border border-red-600 bg-white hover:bg-red-600 hover:text-white w-10 h-10 p-2 rounded-full transition-all"
            onClick={handleLeft}
          />
          <FaAngleRight
            className="text-red-600 absolute top-1/2 translate-y-[-50%]  right-4 z-40 cursor-pointer border border-red-600 bg-white hover:bg-red-600 hover:text-white w-10 h-10 p-2 rounded-full transition-all"
            onClick={handleRight}
          />
        </div>
      </div>
    </section>
  );
};

export default Experts;
