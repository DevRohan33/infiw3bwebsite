import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageSquare,
  Twitter,
  Linkedin,
  Github,
  Facebook
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-3xl font-bold text-infiw3b-500">Infiw3b</span>
            </Link>
            <p className="text-gray-400">
              Empowering professionals with expert job support, interview preparation, 
              and custom software solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/services#job-support" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Expert Job Support
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#interview-prep" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Interview Preparation
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#software-projects" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Software Projects
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#resume-review" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Resume Optimization
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#career-guidance" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Career Guidance
                </Link>
              </li>
              <li>
                <Link 
                  to="/services#consultation" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  Free Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-infiw3b-500 mt-0.5 mr-3 flex-shrink-0" />
                <div>
                  
                  <a 
                    href="https://wa.me/919433313760" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                  >
                    +91 9433313760
                  </a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-infiw3b-500 mt-0.5 mr-3 flex-shrink-0" />
                <a 
                  href="mailto:infiw3b@gmail.com" 
                  className="text-gray-400 hover:text-infiw3b-500 transition-colors"
                >
                  infiw3b@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-infiw3b-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Kolkata, West Bengal, India
                </span>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-infiw3b-500 mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-gray-400">
                  Mon-Fri: 9AM-6PM IST<br />
                  Sat: 10AM-3PM IST
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Infiw3b. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;