
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  primaryButtonOnClick,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
}: CTASectionProps) => {
  // Function to handle scrolling to the services section if on the homepage
  const handleExploreServices = () => {
    // Check if we're on the homepage
    if (window.location.pathname === '/') {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // If not found, navigate to the services page
        window.location.href = '/services';
      }
    } else {
      // If not on homepage, navigate to the services page
      window.location.href = '/services';
    }
  };

  return (
    <section className={`py-16 bg-infiw3b-50 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
            <p className="text-xl text-gray-600 mb-8 mx-auto max-w-2xl">
              {description}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              {primaryButtonText === "Explore Our Services" ? (
                <Button
                  variant="action"
                  size="auto"
                  onClick={handleExploreServices}
                  className="text-base"
                >
                  {primaryButtonText}
                  <ArrowRight size={16} className="ml-1.5" />
                </Button>
              ) : primaryButtonOnClick ? (
                <Button
                  variant="action"
                  size="auto"
                  onClick={primaryButtonOnClick}
                  className="text-base"
                >
                  {primaryButtonText}
                  <ArrowRight size={16} className="ml-1.5" />
                </Button>
              ) : (
                <Button
                  asChild
                  variant="action"
                  size="auto"
                  className="text-base"
                >
                  <Link to={primaryButtonLink} className="flex items-center">
                    {primaryButtonText}
                    <ArrowRight size={16} className="ml-1.5" />
                  </Link>
                </Button>
              )}
              
              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  asChild
                  variant="outline"
                  size="auto"
                  className="border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50 text-base"
                >
                  <Link to={secondaryButtonLink}>
                    {secondaryButtonText}
                  </Link>
                </Button>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
