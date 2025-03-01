
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

interface CTASectionProps {
  title: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  className?: string;
}

const CTASection = ({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  className = "",
}: CTASectionProps) => {
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
              <Button
                asChild
                className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium px-6 py-2.5 h-auto rounded-md shadow-sm hover:shadow-md transition-all duration-300 text-base"
              >
                <Link to={primaryButtonLink} className="flex items-center">
                  {primaryButtonText}
                  <ArrowRight size={16} className="ml-1.5" />
                </Link>
              </Button>
              
              {secondaryButtonText && secondaryButtonLink && (
                <Button
                  asChild
                  variant="outline"
                  className="border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50 font-medium px-6 py-2.5 h-auto rounded-md transition-all duration-300 text-base"
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
