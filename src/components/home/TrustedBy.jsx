'use client';
import { FaStar } from 'react-icons/fa';

const TrustedBy = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-2 grid grid-cols-1 gap-12 text-center sm:grid-cols-2 md:grid-cols-4">
        
        {/* Trusted By Section */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Empowering</p>
          <h3 className="text-2xl font-bold text-red-600 mt-1">5.5K+ Clients</h3>
          <p className="text-gray-500 text-xs">Across Industries</p>
        </div>
        
        {/* Globally Audited Section */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Efficiency</p>
          <h3 className="text-2xl font-bold text-red-600 mt-1">100% Success Rate</h3>
          <p className="text-gray-500 text-xs">In Record Time</p>
        </div>

        {/* Top Reviews Section */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Top Reviews</p>
          <div className="flex items-center mt-1 space-x-1">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-red-600 text-lg" />
            ))}
          </div>
          <p className="text-gray-500 text-xs mt-1">5.0/5.0 Customer Satisfaction</p>
        </div>

        {/* Established Section */}
        <div className="flex flex-col items-center">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">Established</p>
          <h3 className="text-2xl font-bold text-red-600 mt-1">Since 2018</h3>
          <p className="text-gray-500 text-xs">Built on Trust</p>
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
