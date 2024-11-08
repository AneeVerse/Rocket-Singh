"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import Container from "../layout/Container";

const Contact = () => {
  const [formData, setFormData] = useState({
    interest: "Fresh Passport",
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ interest: "Fresh Passport", name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="bg-gradient-to-r from-red-800 to-red-600 py-8 md:py-16 text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Left Section: Contact Info */}
          <div className="space-y-4 flex flex-col justify-around">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4 md:mb-6">Let’s talk on something great together</h2>
            <div className="flex flex-col gap-6 md:gap-12">
              <p className="flex items-center space-x-2">
                <FaEnvelope className="text-lg" />
                <span>rocketsinghentps@gmail.com</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaPhone className="text-lg" />
                <span>+91 7021388625 / +91 8108000188</span>
              </p>
              <p className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-lg" />
                <span>Office No - 116, First Floor, Seawoods Corner CHS LTD., Plot No. 19/A, Sec 25, Nerul (E), Navi Mumbai 400706</span>
              </p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-6">
              <FaLinkedin className="text-2xl hover:text-gray-300 cursor-pointer" />
              <FaFacebook className="text-2xl hover:text-gray-300 cursor-pointer" />
              <FaInstagram className="text-2xl hover:text-gray-300 cursor-pointer" />
            </div>
          </div>
          
          {/* Right Section: Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 md:p-8 rounded-lg shadow-lg text-gray-800 space-y-4 md:space-y-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-md md:text-lg font-semibold text-gray-700">I’m interested in:</h3>
            <div className="flex text-sm flex-wrap gap-1 md:gap-2">
              {["Fresh Passport", "Tatkal Passport", "Lost Passport", "Damaged Passport", "Other"].map((interest) => (
                <button
                  key={interest}
                  type="button"
                  onClick={() => setFormData({ ...formData, interest })}
                  className={`py-1 px-3 md:py-2 md:px-4 rounded-full border ${
                    formData.interest === interest ? "border-red-600 text-red-600" : "border-gray-300 text-gray-500"
                  } hover:bg-gray-100 focus:bg-red-600 focus:text-white`}
                >
                  {interest}
                </button>
              ))}
            </div>
            <label className="block">
              <span className="text-gray-700">Your name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border-b-[2px] border-gray-300 focus:outline-none focus:border-red-600"
                placeholder="John Smith"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Your email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border-b-[2px] border-gray-300 focus:outline-none focus:border-red-600"
                placeholder="email@gmail.com"
                required
              />
            </label>
            <label className="block">
              <span className="text-gray-700">Your message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full mt-1 p-2 border-[2px] rounded-lg border-gray-300 focus:outline-none focus:border-red-600"
                rows="4"
                placeholder="Your message here"
                required
              ></textarea>
            </label>
            <button type="submit" className="w-full bg-red-600 text-white py-2 md:py-3 rounded-full hover:bg-red-700">
              {loading ? "Sending..." : "Send message"}
            </button>
            {submitted && <p className="text-green-600 mt-4">Thank you! Your message has been sent.</p>}
          </motion.form>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
