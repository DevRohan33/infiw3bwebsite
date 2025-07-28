import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

// Enhanced Testimonial Section Component
const EnhancedTestimonialSection = ({ openContactModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const scrollContainerRef = useRef(null);
  const autoScrollRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      content: "Infiw3b helped me clear my interview with top IT firms. Their mock interviews gave me confidence to tackle even the toughest questions! The personalized feedback was invaluable.",
      author: "Amit Kumar",
      position: "Java Developer",
      company: "TCS",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Mumbai, India"
    },
    {
      id: 2,
      content: "I struggled with my job tasks, but their real-time support made everything easier. The experts are knowledgeable and patient. Highly recommended for anyone facing workplace challenges!",
      author: "Priya Singh",
      position: "Salesforce BA",
      company: "Wipro",
      rating: 5,
      image: "/1714.jpeg",
      location: "Bangalore, India"
    },
    {
      id: 3,
      content: "Their software projects are detailed and well-documented. I got an A+ on my university project! The code quality was excellent and the documentation was comprehensive.",
      author: "Rahul Sharma",
      position: "Computer Science Student",
      company: "IIT Delhi",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Delhi, India"
    },
    {
      id: 4,
      content: "The DevOps support I received was outstanding. They helped me automate our entire deployment pipeline and reduced our deployment time by 80%. Truly professional service!",
      author: "Sarah Johnson",
      position: "DevOps Engineer",
      company: "Microsoft",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Seattle, USA"
    },
    {
      id: 5,
      content: "Power BI dashboard development was made so easy with their guidance. The visualization techniques they taught me helped me create stunning reports that impressed my management.",
      author: "Mohammed Ali",
      position: "Business Analyst",
      company: "Accenture",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Dubai, UAE"
    },
    {
      id: 6,
      content: "The QA automation framework they helped me build is now being used across multiple projects in our organization. Their expertise in Selenium and TestNG is remarkable!",
      author: "Lisa Chen",
      position: "QA Automation Engineer",
      company: "Google",
      rating: 5,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "California, USA"
    },
    {
      id: 7,
      content: "I was stuck with my final-year project and had no direction. Infiw3b provided complete project support with live sessions, helping me build a working web app with React and Firebase.",
      author: "Sneha Patil",
      position: "Final Year Student",
      company: "Pune University",
      rating: 5,
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Pune, India"
    },
    {
      id: 8,
      content: "Their CV review service helped me restructure my resume to highlight my skills better. I got interview calls from companies I had applied to months ago!",
      author: "Arjun Mehra",
      position: "Full Stack Developer",
      company: "Infosys",
      rating: 4,
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Chandigarh, India"
    },
    {
      id: 9,
      content: "Infiw3b transformed my LinkedIn profile! After their LinkedIn optimization session, I started getting messages from recruiters daily.",
      author: "Meera Nair",
      position: "Cloud Engineer",
      company: "IBM",
      rating: 5,
      image: "/1893.jpeg",
      location: "Hyderabad, India"
    },
    {
      id: 10,
      content: "Their mock HR and technical interviews were exactly what I needed. I cracked my Capgemini interview in one go!",
      author: "Ritik Das",
      position: "Software Engineer",
      company: "Capgemini",
      rating: 5,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Kolkata, India"
    },
    {
      id: 11,
      content: "The UI/UX project support was phenomenal. I built a complete design system for my portfolio using Figma, all thanks to their mentoring.",
      author: "Tanvi Rao",
      position: "UI/UX Designer",
      company: "Zoho",
      rating: 5,
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Chennai, India"
    },
    {
      id: 12,
      content: "They reviewed my entire portfolio and suggested improvements in design, content, and responsiveness. It now looks professional and recruiter-friendly!",
      author: "Aditya Verma",
      position: "Frontend Developer",
      company: "Cognizant",
      rating: 4,
      image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Delhi, India"
    },
    {
      id: 13,
      content: "The guidance I received for Power BI and Excel dashboards was top-notch. My manager appreciated the new visualizations I added to our reports.",
      author: "Nadia Hassan",
      position: "Data Analyst",
      company: "KPMG",
      rating: 5,
      image: "/1743.jpeg",
      location: "Cairo, Egypt"
    },
    {
      id: 14,
      content: "Their GitHub portfolio structuring service gave my repos a clean and professional touch. Now my pinned repos clearly showcase my best work.",
      author: "Karthik Iyer",
      position: "Python Developer",
      company: "Tata Elxsi",
      rating: 5,
      image: "/172345.jpeg",
      location: "Bangalore, India"
    },
    {
      id: 15,
      content: "From zero LinkedIn visibility to 5K+ views in a month! Their profile optimization and content strategy tips are truly amazing.",
      author: "Neha Kapoor",
      position: "Digital Marketer",
      company: "Deloitte",
      rating: 5,
      image: "/1923.jpeg",
      location: "Gurgaon, India"
    },
    {
      id: 16,
      content: "As a fresher, I had no idea how to prepare for behavioral interviews. Infiw3b gave me clear frameworks and mock rounds to practice with real-time feedback.",
      author: "Sourav Ghosh",
      position: "Graduate Trainee",
      company: "L&T",
      rating: 5,
      image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Kolkata, India"
    },
    {
      id: 17,
      content: "Their support team helped me finish a live freelancing project with complex backend logic using Node.js. Truly life-saving support!",
      author: "Ishaan Roy",
      position: "Freelance Developer",
      company: "Upwork",
      rating: 5,
      image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Noida, India"
    },
    {
      id: 18,
      content: "I used their CV review and now my resume looks polished and ATS-friendly. I got a job at my dream company within a month.",
      author: "Tanya Bhatt",
      position: "HR Executive",
      company: "Tech Mahindra",
      rating: 4,
      image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Nagpur, India"
    },
    {
      id: 19,
      content: "The hands-on mini-projects they assigned helped me build a solid React portfolio. I added all of them to my GitHub and received great feedback from recruiters.",
      author: "Zaid Khan",
      position: "Junior Web Developer",
      company: "Mindtree",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face&auto=format&q=80",
      location: "Lucknow, India"
    },
    {
      id: 20,
      content: "Their live LinkedIn content calendar and post templates helped me grow my tech brand on LinkedIn. Got invited to speak at a webinar within weeks!",
      author: "Anjali Deshmukh",
      position: "Tech Blogger",
      company: "Self-employed",
      rating: 5,
      image: "/1744895325584.jpeg",
      location: "Ahmedabad, India"
    },
    {
      id: 21,
      content: "They helped me prepare for my MS interviews abroad with mock sessions, SOP review, and profile polishing. I got into my dream university!",
      author: "Harshil Mehta",
      position: "CS Graduate",
      company: "University of Texas",
      rating: 5,
      image: "/721501184.jpeg",
      location: "Houston, USA"
    }

  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (isAutoScrolling) {
      autoScrollRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
    }

    return () => {
      if (autoScrollRef.current) {
        clearInterval(autoScrollRef.current);
      }
    };
  }, [isAutoScrolling, testimonials.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000); // Resume auto-scroll after 10 seconds
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  };

  // Handle mouse events for auto-scroll control
  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
            <Quote className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear from the professionals we've helped succeed
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-purple-600 transition-colors" />
          </button>

          {/* Testimonial Cards Container */}
          <div
            ref={scrollContainerRef}
            className="overflow-hidden rounded-xl"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / Math.min(testimonials.length, 3))}%)`,
                width: `${(testimonials.length * 100) / Math.min(testimonials.length, 3)}%`
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / Math.min(testimonials.length, 3)}%` }}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 h-full border border-gray-100 hover:border-purple-200 group">
                    {/* Quote Icon */}
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Quote className="w-6 h-6 text-white" />
                    </div>

                    {/* Rating */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(testimonial.rating)}
                      <span className="ml-2 text-sm text-gray-600 font-medium">
                        {testimonial.rating}.0
                      </span>
                    </div>

                    {/* Testimonial Content */}
                    <blockquote className="text-gray-700 leading-relaxed mb-8 text-lg">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author Info */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover border-4 border-gray-100 group-hover:border-purple-200 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold text-gray-900 text-lg">
                          {testimonial.author}
                        </h4>
                        <p className="text-purple-600 font-medium">
                          {testimonial.position}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonial.company} • {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-500 to-blue-500 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-purple-100 mb-6 text-lg">
              Let our experts help you achieve your career goals
            </p>
            <button
              onClick={openContactModal}
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Get Started Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedTestimonialSection;