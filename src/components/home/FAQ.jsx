"use client"
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus } from "react-icons/fa6";

const faqs = [
  { question: 'What is a passport?', answer: 'A passport is a travel document issued by a government to its citizens, verifying identity and nationality for international travel.' },
  { question: 'What happens if I lose my passport?', answer: 'If you lose your passport, report it immediately to the authorities. Our team can assist in the re-application process.' },
  { question: 'Who qualifies for an Indian passport?', answer: 'Indian citizenship is required to apply for an Indian passport. There are various eligibility criteria based on age, documentation, and legal status.' },
  { question: 'How long does it take to get a passport?', answer: 'Standard passport processing takes approximately 3-4 weeks, but Tatkal services are available for urgent requirements.' },
  { question: 'What is PSK?', answer: 'PSK stands for Passport Seva Kendra, the official service center for passport application and processing in India.' },
  { question: 'How can I track my passport application?', answer: 'You can track your application status on the official passport website using your application reference number.' },
  { question: 'Who can help if I have questions about my passport?', answer: 'Our support team is here to assist you with any queries related to your passport application or renewal process.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="bg-gray-50 py-16 px-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">FAQ</h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Here you will find answers to frequently asked questions regarding passport applications, renewals, and more.</p>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4 shadow-sm">
            <button
              className="w-full text-left text-gray-800 font-semibold text-lg flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? <FaMinus className="w-4 h-4 text-red-600"/> : <FaPlus className="w-4 h-4 text-red-600"/>}</span>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  className="mt-2 text-gray-600"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
