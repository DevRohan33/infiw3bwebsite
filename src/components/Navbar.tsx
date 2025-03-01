
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-display font-bold text-infiw3b-800 flex items-center"
          >
            <span className="text-infiw3b-600">Infi</span>
            <span className="text-infiw3b-800">w3b</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  location.pathname === item.path
                    ? "text-infiw3b-600 font-semibold"
                    : "text-gray-700 hover:text-infiw3b-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="ml-4 bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Book Consultation
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-infiw3b-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col space-y-2 pt-2 pb-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === item.path
                    ? "text-infiw3b-600 font-semibold"
                    : "text-gray-700 hover:text-infiw3b-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Button
              className="mt-4 bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium w-full"
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
