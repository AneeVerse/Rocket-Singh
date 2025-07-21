import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        
        {/* Brand Section */}
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-3">
            <Image src="/images/profile.png" alt="Rocket Singh Logo" width={48} height={48} className="w-12 h-12 rounded-full" />
            <h2 className="text-xl font-bold text-red-600">Rocket Singh Enterprises</h2>
          </div>
          <p className="text-gray-700">
            We work hard to provide reliable and fast passport services, catering to all your travel document needs with precision and dedication.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-blue-500"><FaFacebook size={20} /></a>
            <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-pink-500"><FaInstagram size={20} /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-600"><FaLinkedin size={20} /></a>
            <a href="mailto:info@rocketsingh.com" aria-label="Email" className="text-gray-500 hover:text-gray-700"><FaEnvelope size={20} /></a>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1 flex flex-col md:items-center space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Quick Links</h3>
          <nav className="space-y-2">
            <a href="#about" className="block text-gray-600 hover:text-red-500">About Us</a>
            <a href="#service" className="block text-gray-600 hover:text-red-500">Services</a>
            <a href="/fasttrack" className="block text-gray-600 hover:text-red-500">Fast Track</a>
            <a href="#contact" className="block text-gray-600 hover:text-red-500">Contact Us</a>
            <a href="#faq" className="block text-gray-600 hover:text-red-500">FAQ</a>
          </nav>
        </div>

        {/* Contact Information Section */}
        <div className="flex-1 flex flex-col md:items-end">
          <div className=' space-y-4'>
          <h3 className="text-lg font-semibold text-gray-800">Contact Us</h3>
          <div className="space-y-2">
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-gray-500" />
              <span className="text-gray-600">+91 7021388625 / +91 8108000188 / +91 93224 44733</span>
            </p>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <span className="text-gray-600">rocketsinghentps@gmail.com</span>
            </p>
            <p className="flex items-start space-x-2">
              <FaMapMarkerAlt className="text-gray-500 mt-1 min-w-fit" />
              <span className="text-gray-600">
              Office No - 116, First Floor, Seawoods Corner CHS LTD., Plot No. 19/A, Sec 25, Nerul (E), Navi Mumbai 400706
              </span>
            </p>
          </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-300 mt-10 pt-4 text-center text-gray-500 text-sm">
        <div className='mx-auto max-w-7xl flex flex-col md:flex-row justify-center gap-2 px-2 items-center md:justify-between'>
          
       <div>© {new Date().getFullYear()} Rocket Singh Enterprises. All Rights Reserved.</div> 
       <Link href={"https://www.aneeverse.com/"} target='_blank' 
       className='cursor-pointer hover:text-red-600 flex items-center gap-2 min-w-fit'> <span>Managed & Designed by Aneeverse</span> 
        <Image src={"/images/aneeverse-logo.png"} alt='aneeverse logo' width={22} height={22}/> </Link>
      </div>
        </div>
    </footer>
  );
};

export default Footer;
