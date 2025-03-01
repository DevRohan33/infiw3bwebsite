
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link?: string;
  buttonText?: string;
  buttonOnClick?: () => void;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  link,
  buttonText = "Learn More",
  buttonOnClick,
}: ServiceCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        <div className="w-12 h-12 flex items-center justify-center bg-infiw3b-100 text-infiw3b-600 rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
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
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        {buttonOnClick ? (
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
        ) : null}
      </div>
    </div>
  );
};

export default ServiceCard;
