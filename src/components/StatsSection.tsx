
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Stat = ({ value, label, prefix = "", suffix = "" }: StatProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = value;
          const duration = 2000;
          const step = Math.floor(duration / end);
          
          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, step);
          
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value, hasAnimated]);

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl md:text-5xl font-bold text-infiw3b-600 mb-2">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We take pride in our achievements and the trust placed in us by professionals worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value={500} label="Clients Supported" suffix="+" />
            <Stat value={95} label="Success Rate" suffix="%" />
            <Stat value={24} label="Hour Support" suffix="/7" />
            <Stat value={12} label="Years Experience" suffix="+" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default StatsSection;
