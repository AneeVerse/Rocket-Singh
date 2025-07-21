import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
            className="bg-white rounded-2xl shadow-2xl p-6 md:p-10 w-full max-w-lg relative"
            initial={{ scale: 0.9, y: 40 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 40 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-red-600 text-2xl font-bold focus:outline-none"
              onClick={onClose}
              aria-label="Close"
              type="button"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold text-center mb-2 text-red-600">Free Consultation</h2>
            <p className="text-center text-gray-600 mb-6">Fill out the form and our expert will contact you shortly</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">I’m interested in:</label>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest) => (
                    <button
                      key={interest}
                      type="button"
                      onClick={() => setFormData({ ...formData, interest })}
                      className={`py-1 px-3 rounded-full border text-sm ${
                        formData.interest === interest
                          ? "border-red-600 text-red-600 bg-red-50"
                          : "border-gray-300 text-gray-500 bg-white"
                      } hover:bg-gray-100`}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-600"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-1/2 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-red-600"
                  placeholder="Email Address"
                  required
                />
              </div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="block w-full p-2 border-2 rounded-lg border-gray-300 focus:outline-none focus:border-red-600"
                rows="3"
                placeholder="Your message here"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-full hover:bg-red-700 font-semibold"
                disabled={loading}
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
              {submitted && (
                <p className="text-green-600 text-center mt-2">Thank you! Your message has been sent.</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 