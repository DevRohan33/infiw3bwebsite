
import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  className?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  features,
  link,
  className = '',
}: ServiceCardProps) => {
  return (
    <div className={`relative group overflow-hidden rounded-xl bg-white border border-gray-100 p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-infiw3b-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-5">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-gray-700">
              <span className="mr-2 text-infiw3b-500 font-medium">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={link} 
          className="flex items-center font-medium text-infiw3b-600 hover:text-infiw3b-700 transition-colors duration-300"
        >
          Learn More
          <ArrowRight size={16} className="ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
