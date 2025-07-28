import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Zap, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

// Mock components for demonstration
const Link = ({ to, children, className, ...props }) => (
  <a href={to} className={className} {...props}>{children}</a>
);

const useLocation = () => ({ pathname: "/" });

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { 
      name: "Services", 
      path: "/services",
      dropdown: [
        { name: "Job Support", path: "/services#job-support" },
        { name: "Interview Preparation", path: "/services#interview-prep" },
        { name: "Project Support", path: "/services#software-projects" }
      ]
    },
    { name: "About Us", path: "/about" }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-100 py-2" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center group">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full animate-pulse"></div>
              </div>
              <div className="ml-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Infiw3b
                </span>
                <div className="text-xs font-medium -mt-1 text-purple-600">
                  Digital Solutions
                </div>

              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div 
                    className="relative"
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                        location.pathname.startsWith(link.path)
                          ? "text-purple-600 bg-purple-50 font-semibold"
                          : scrolled 
                            ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50" 
                            : "text-gray-500 hover:text-purple-500 hover:bg-purple-50"

                      }`}
                    >
                      {link.name}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />
                    </Link>
                    
                    {/* Dropdown Menu */}
                    <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 ${
                      servicesDropdown ? "opacity-100 visible transform translate-y-0" : "opacity-0 invisible transform -translate-y-2"
                    }`}>
                      <div className="py-2">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600 transition-all duration-200"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      location.pathname === link.path
                        ? "text-purple-600 bg-purple-50 font-semibold"
                        : scrolled 
                          ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50" 
                          : "text-gray-500 hover:text-purple-500 hover:bg-purple-50"

                    }`}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a 
              href="tel:+919433313760"
              className={`flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                scrolled ? "text-gray-600 hover:text-purple-600" : "text-white hover:text-purple-200"
              }`}
            >
              <Phone className="w-4 h-4 mr-2" />
              Call Us
            </a>
            
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2.5 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/contact" className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Get Quote
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`inline-flex items-center justify-center p-2 rounded-lg transition-all duration-300 ${
                scrolled 
                  ? "text-gray-700 hover:text-purple-600 hover:bg-purple-50" 
                  : "text-gray-500 hover:text-purple-500 hover:bg-purple-50"

              }`}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden transition-all duration-300 ${
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}>
        <div className="bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    location.pathname === link.path || location.pathname.startsWith(link.path)
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                      : "text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-blue-50 hover:text-purple-600"
                  }`}
                >
                  <span>{link.name}</span>
                  {link.dropdown && (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Link>
                
                {/* Mobile Dropdown */}
                {link.dropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-all duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile CTA Buttons */}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <a 
                href="tel:+919433313760"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-4 py-3 text-purple-600 bg-purple-50 rounded-lg font-medium transition-all duration-300 hover:bg-purple-100"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
              
              <Button
                asChild
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                <Link to="/contact" className="flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Get Free Quote
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;