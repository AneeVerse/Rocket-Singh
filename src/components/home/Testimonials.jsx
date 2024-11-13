"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Container from "../layout/Container";

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

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Conditionally load the Elfsight script
      const script = document.createElement("script");
      script.src = "https://static.elfsight.com/platform/platform.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        // Clean up the script if needed
        document.body.removeChild(script);
      };
    }
  }, []);

  const handlePrev = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  const handleNext = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  return (
    <section id="testimonials" className="py-16 bg-gray-50 px-3 text-center">
      <Container>
      <div className="mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">What our customers say</h2>
      <p className="text-gray-500 mb-8">Thousands of satisfied customers have trusted our services</p>
      </div>

      <div className="elfsight-app-119f63a0-958b-4922-b355-f67329754107" data-elfsight-app-lazy></div></Container>
    </section>
  );
};

export default TestimonialSection;
