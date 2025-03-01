
import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'slide-in' | 'slide-in-right' | 'scale-in' | 'stagger';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );

    observer.observe(section);

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [delay]);

  let animationClass = '';

  if (animation === 'stagger') {
    return (
      <div 
        ref={sectionRef} 
        className={`stagger-animate ${isVisible ? 'visible' : ''} ${className}`}
      >
        {children}
      </div>
    );
  }

  switch (animation) {
    case 'fade-in':
      animationClass = isVisible ? 'animate-fade-in opacity-100' : 'opacity-0';
      break;
    case 'fade-in-up':
      animationClass = isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0 translate-y-10';
      break;
    case 'slide-in':
      animationClass = isVisible ? 'animate-slide-in opacity-100' : 'opacity-0 -translate-x-10';
      break;
    case 'slide-in-right':
      animationClass = isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-0 translate-x-10';
      break;
    case 'scale-in':
      animationClass = isVisible ? 'animate-scale-in opacity-100' : 'opacity-0 scale-95';
      break;
    default:
      animationClass = isVisible ? 'animate-fade-in opacity-100' : 'opacity-0';
  }

  return (
    <div 
      ref={sectionRef} 
      className={`transition-all duration-700 ease-out ${animationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
