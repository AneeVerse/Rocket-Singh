'use client'
import { FaUserEdit, FaCheckCircle, FaFileSignature, FaCloudUploadAlt, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Step 1",
    description: "Analyze and Prepare your file.",
    icon: <FaUserEdit size={28} />,
  },
  {
    title: "Step 2",
    description: "Verify your pre-requisites checklist.",
    icon: <FaCheckCircle size={28} />,
  },
  {
    title: "Step 3",
    description: "Register & Complete Application",
    icon: <FaFileSignature size={28} />,
  },
  {
    title: "Step 4",
    description: "Upload your documents.",
    icon: <FaCloudUploadAlt size={28} />,
  },
  {
    title: "Step 5",
    description: "Pay the required fees.",
    icon: <FaDollarSign size={28} />,
  },
  {
    title: "Step 6",
    description: "Book an appointment at Passport Seva Kendra.",
    icon: <FaCalendarAlt size={28} />,
  },
];

export default function ProcessSection() {
  return (
    <div id='process' className="flex flex-col items-center bg-gray-50 py-8 px-2 sm:px-8">
      <div className="relative flex flex-col items-center p-8 rounded-lg">
      <h2 className="text-4xl font-bold text-center mb-8">Applications Process</h2>
        <div className="relative w-full px-3">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-red-300"></div>
          
          {/* Steps */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`flex relative mt-2 items-center w-full mb-12 md:mb-2 ${index % 2 === 0 ? 'justify-start -ml-8' : 'justify-end ml-8'}`}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              {/* Connector Line */}
              <div className={`absolute ${index % 2 === 0 ? "right-[50%] translate-x-[100%]" : "left-[50%] -translate-x-full"} w-8 h-[2px] hidden sm:block bg-red-300 rounded-full`}></div>
              
              {/* Step Card */}
              <div className="flex items-center justify-center sm:w-1/2">
                <div className={`flex ${index % 2 === 0 ? "flex-col-reverse" : "flex-col"} sm:flex-row items-center gap-4 bg-white px-3 py-6 sm:px-6 sm:py-6 rounded-lg shadow-md`}>
                  {index % 2 === 1 && (
                    <div className="text-red-600">{step.icon}</div>
                  )}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                  {index % 2 === 0 && (
                    <div className="text-red-600">{step.icon}</div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
