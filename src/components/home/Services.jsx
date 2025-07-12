"use client";
import { useState } from "react";
import { FaPassport, FaSync, FaWrench, FaLock, FaUserShield, FaGlobe, FaCheckCircle, FaPlane } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import Container from "../layout/Container";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Fresh Passport",
    description: "Get your new passport with minimal documentation and efficient processing for first-time applicants.",
    icon: <FaPassport size={40} className="text-red-600" />,
  },
  {
    title: "Tatkal Passport",
    description: "For urgent passport needs, our Tatkal Passport service offers quick processing and fast delivery.",
    icon: <FaSync size={40} className="text-red-600" />,
  },
  {
    title: "Fast Track Immigration",
    description: "Experience seamless immigration clearance with our exclusive Trusted Traveller Program (FTI-TTP) for pre-verified passengers.",
    icon: <FaPlane size={40} className="text-red-600" />,
  },
  {
    title: "Passport Renewal",
    description: "Renew your expired passport seamlessly with quick updates and minimal paperwork.",
    icon: <FaWrench size={40} className="text-red-600" />,
  },
  {
    title: "Lost Passport",
    description: "Get assistance to replace a lost passport quickly with help filing reports and expedited processing.",
    icon: <FaLock size={40} className="text-red-600" />,
  },
  {
    title: "Damaged Passport",
    description: "Replace a damaged passport efficiently, with all the necessary documentation support.",
    icon: <FaUserShield size={40} className="text-red-600" />,
  },
  {
    title: "Delete ECR Passport",
    description: "Remove ECR status from your passport for eligible candidates with our expert guidance.",
    icon: <FaGlobe size={40} className="text-red-600" />,
  },
  {
    title: "PPC",
    description: "Get your Police Clearance Certificate (PPC) for international travel, with guidance through every step.",
    icon: <FaCheckCircle size={40} className="text-red-600" />,
  },
];

const OurService = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    title:"",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleApplyClick = (service) => {
    setFormData({...formData, title: service})
    setSelectedService(service);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/serviceContact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, service: selectedService }),
      });
      if (response.ok) {
        setShowThankYou(true);
        setSelectedService(null)
        setFormData({ fullName: "", email: "", phone: "", message: "" });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSelectedService(null);
    setShowThankYou(false);
  };

  return (
    <section id="service" className="bg-gradient-to-r from-red-50 to-white text-gray-800">
      <Container>
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-6">Our Services</h2>
          <p className="text-center text-gray-600 mb-10">
            We provide a full range of passport-related services. Choose the one that suits your needs and let us assist you efficiently.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
              >
                <div className="flex items-center justify-center w-20 h-20 mb-4 rounded-full bg-red-100">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-red-800 mb-2">{service.title}</h3>
                <p className="text-center text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => handleApplyClick(service.title)}
                  className="mt-auto bg-red-600 text-white py-2 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* Popup Form */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <button
                onClick={handleClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
              >
                <MdClose className="w-6 h-6 min-w-fit"/>
              </button>
              <h3 className="text-2xl font-bold text-red-700 mb-4">Apply for {selectedService}</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200"
                >
                  {loading ? "Submitting..." : "Submit"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Message */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed z-50 inset-0 bg-black bg-opacity-50 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full text-center">
              <h3 className="text-2xl font-bold text-red-700 mb-4">Thank You!</h3>
              <p>Your application for {selectedService} has been submitted successfully.</p>
              <button
                onClick={handleClose}
                className="mt-4 bg-red-600 text-white py-2 px-6 rounded-full font-medium hover:bg-red-700 transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurService;
