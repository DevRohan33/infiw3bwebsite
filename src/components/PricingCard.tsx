
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText: string;
  ctaLink: string;
  className?: string;
}

const PricingCard = ({
  title,
  price,
  description,
  features,
  popular = false,
  ctaText,
  ctaLink,
  className = "",
}: PricingCardProps) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
        popular
          ? "border-2 border-infiw3b-500 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          : "border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-1"
      } ${className}`}
    >
      {popular && (
        <div className="absolute top-0 right-0 bg-infiw3b-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
          Popular
        </div>
      )}

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          {price !== "Custom" && <span className="text-gray-500 ml-1">/project</span>}
        </div>
        <p className="text-gray-600 mb-6">{description}</p>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check
                size={18}
                className={`mr-2 flex-shrink-0 ${
                  popular ? "text-infiw3b-500" : "text-green-500"
                }`}
              />
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          asChild
          className={`w-full py-2.5 font-medium ${
            popular
              ? "bg-infiw3b-600 hover:bg-infiw3b-700 text-white"
              : "bg-gray-50 hover:bg-gray-100 text-infiw3b-600 border border-gray-300"
          }`}
        >
          <Link to={ctaLink}>{ctaText}</Link>
        </Button>
      </div>
    </div>
  );
};

export default PricingCard;
