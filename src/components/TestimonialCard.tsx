
import { StarIcon } from "lucide-react";

interface TestimonialCardProps {
  content: string;
  author: string;
  position: string;
  rating: number;
  className?: string;
}

const TestimonialCard = ({
  content,
  author,
  position,
  rating,
  className = "",
}: TestimonialCardProps) => {
  return (
    <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col ${className}`}>
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <StarIcon
            key={i}
            size={16}
            fill={i < rating ? "#FFC107" : "none"}
            stroke={i < rating ? "#FFC107" : "#D1D5DB"}
            className="mr-1"
          />
        ))}
      </div>
      
      <p className="text-gray-700 italic mb-5 flex-grow">{content}</p>
      
      <div className="mt-auto">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{position}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
