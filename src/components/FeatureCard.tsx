
import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard = ({
  icon,
  title,
  description,
  className = '',
}: FeatureCardProps) => {
  return (
    <div className={`p-6 rounded-xl bg-white border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${className}`}>
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-4">
        {icon}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
