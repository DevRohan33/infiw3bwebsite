
import { ReactNode, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, ArrowRight, MessageCircle } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
  detailedDescription?: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  link,
  buttonText = "Learn More",
  buttonOnClick,
  detailedDescription,
}: ServiceCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleLearnMore = () => {
    setShowDetails(true);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="w-12 h-12 flex items-center justify-center bg-infiw3b-100 text-infiw3b-600 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        
        {!showDetails ? (
          <>
            <p className="text-gray-600 mb-6">{description}</p>
            
            {features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-infiw3b-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
          </>
        ) : (
          <div className="mb-6">
            <p className="text-gray-600 mb-4">{detailedDescription || description}</p>
            
            {features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-infiw3b-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="mt-6 p-4 bg-infiw3b-50 rounded-lg">
              <h4 className="font-medium text-gray-900 mb-2">Contact us for more details:</h4>
              <p className="text-gray-600 text-sm mb-4">Our team is ready to provide personalized assistance tailored to your specific needs.</p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={buttonOnClick}
                  variant="outline"
                  className="border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50"
                >
                  Contact Us
                </Button>
                
                <Button
                  asChild
                  variant="outline"
                  className="flex items-center border-green-600 text-green-600 hover:bg-green-50"
                >
                  <a href="https://wa.me/+1234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-1.5" />
                    WhatsApp for Immediate Response
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        {!showDetails ? (
          buttonOnClick ? (
            <Button
              onClick={buttonOnClick}
              variant="outline"
              className="w-full border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50"
            >
              {buttonText}
            </Button>
          ) : link ? (
            <Button
              asChild
              variant="outline"
              className="w-full border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50"
            >
              <Link to={link}>{buttonText}</Link>
            </Button>
          ) : (
            <Button
              onClick={handleLearnMore}
              variant="outline"
              className="w-full border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50"
            >
              {buttonText} <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          )
        ) : (
          <Button
            onClick={() => setShowDetails(false)}
            variant="outline"
            className="w-full border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50"
          >
            Show Less
          </Button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
