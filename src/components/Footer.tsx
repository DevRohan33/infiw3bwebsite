
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-display font-bold text-infiw3b-800 flex items-center">
              <span className="text-infiw3b-600">Infi</span>
              <span className="text-infiw3b-800">w3b</span>
            </Link>
            <p className="text-gray-600 mt-2">
              Your trusted partner for job support, interview preparation, and software projects.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-500 hover:text-infiw3b-600 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-infiw3b-600 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-infiw3b-600 transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-infiw3b-600 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Pricing</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Testimonials</Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#job-support" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Job Support</Link>
              </li>
              <li>
                <Link to="/services#interview-prep" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Interview Preparation</Link>
              </li>
              <li>
                <Link to="/services#software-projects" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Software Projects</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">Custom Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-infiw3b-600 mt-0.5" />
                <span className="text-gray-600">+91 749955187<br />+91 9433313760</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-infiw3b-600 mt-0.5" />
                <a href="mailto:infiw3b@yahoo.com" className="text-gray-600 hover:text-infiw3b-600 transition-colors duration-300">infiw3b@yahoo.com</a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-infiw3b-600 mt-0.5" />
                <span className="text-gray-600">www.infiw3b.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Infiw3b. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-infiw3b-600 text-sm transition-colors duration-300">Privacy Policy</Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-infiw3b-600 text-sm transition-colors duration-300">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
