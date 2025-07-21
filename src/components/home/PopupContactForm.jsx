import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegPaperPlane } from "react-icons/fa";

const interests = [
  "Fresh Passport",
  "Tatkal Passport",
  "Lost Passport",
  "Damaged Passport",
  "Other",
];

export default function PopupContactForm({ show, onClose }) {
  const [formData, setFormData] = useState({
    interest: "Fresh Passport",
    name: "",
    email: "",
    message: "",
    fromPopup: true,
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!show) {
      setFormData({
        interest: "Fresh Passport",
        name: "",
        email: "",
        message: "",
        fromPopup: true,
      });
      setSubmitted(false);
    }
  }, [show]);

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
        body: JSON.stringify({ ...formData, message: `[POPUP] ${formData.message}` }),
      });
      if (response.ok) {
        setSubmitted(true);
        setFormData({ interest: "Fresh Passport", name: "", email: "", message: "", fromPopup: true });
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-white via-red-50 to-white shadow-2xl p-0 w-full max-w-xs sm:max-w-lg relative border-0 sm:border sm:border-red-100 animate-fadeIn rounded-xl sm:rounded-3xl mx-2 my-6 sm:mx-auto sm:my-0"
            initial={{ scale: 0.95, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            {/* Top Bar with Icon */}
            <div className="bg-red-600 rounded-t-xl sm:rounded-t-3xl flex items-center gap-2 sm:gap-3 px-3 py-3 sm:px-8 sm:py-5">
              <FaRegPaperPlane className="text-white text-xl sm:text-2xl" />
              <h2 className="text-base sm:text-xl md:text-2xl font-bold text-white tracking-wide">Free Consultation</h2>
              <button
                className="ml-auto text-white/80 hover:text-white bg-red-500/30 hover:bg-red-700/60 rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-xl sm:text-2xl font-bold focus:outline-none transition-colors"
                onClick={onClose}
                aria-label="Close"
                type="button"
              >
                ×
              </button>
            </div>
            <div className="px-3 pt-3 pb-2 sm:px-8 sm:pt-6">
              <p className="text-center text-gray-700 mb-3 sm:mb-6 text-xs sm:text-base md:text-lg">Fill out the form and our expert will contact you shortly</p>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-gray-800 font-semibold mb-2 text-xs sm:text-base">I’m interested in:</label>
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {interests.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => setFormData({ ...formData, interest })}
                        className={`py-1.5 px-2.5 sm:py-2 sm:px-4 rounded-full border text-xs sm:text-sm font-medium transition-all duration-200 shadow-sm ${
                          formData.interest === interest
                            ? "border-transparent text-white bg-red-500 hover:bg-red-600"
                            : "border-gray-300 text-gray-700 bg-white hover:bg-red-50"
                        }`}
                        style={{ outline: 'none', boxShadow: 'none' }}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full sm:w-1/2 p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 placeholder-gray-500 text-sm sm:text-base transition-all duration-200 shadow-sm"
                    placeholder="Your Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full sm:w-1/2 p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 placeholder-gray-500 text-sm sm:text-base transition-all duration-200 shadow-sm"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full p-2.5 sm:p-3 rounded-xl border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 placeholder-gray-500 text-sm sm:text-base transition-all duration-200 shadow-sm min-h-[70px] sm:min-h-[90px]"
                  rows="3"
                  placeholder="Your message here"
                  required
                ></textarea>
                <motion.button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2.5 sm:py-3 rounded-full font-bold shadow-md hover:bg-red-700 transition-all duration-200 text-sm sm:text-lg tracking-wide flex items-center justify-center gap-2"
                  disabled={loading}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaRegPaperPlane className="inline-block text-lg sm:text-xl mb-0.5" />
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
                {submitted && (
                  <p className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</p>
                )}
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 