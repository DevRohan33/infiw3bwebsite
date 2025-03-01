
import { Briefcase, BookOpen, Code, Users, Shield, Clock, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import FAQItem from "@/components/FAQItem";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-infiw3b-50 to-white z-0"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Excel in Your Career with Expert Job Support & Custom Software Projects
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Facing challenges in your job? Preparing for an important interview? Need a custom software project? Infiw3b is here to help!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  asChild
                  className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium px-6 py-3 h-auto rounded-md shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 text-base"
                >
                  <Link to="/contact">Book a Free Consultation</Link>
                </Button>
                <Button 
                  asChild
                  variant="outline"
                  className="border-infiw3b-600 text-infiw3b-600 hover:bg-infiw3b-50 font-medium px-6 py-3 h-auto rounded-md transition-all duration-300 text-base"
                >
                  <Link to="/services">Explore Our Services</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-4">
                  <Shield size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">100% Guaranteed</h3>
                <p className="text-gray-600 text-sm">Trusted by professionals worldwide</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-4">
                  <Users size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Industry Experts</h3>
                <p className="text-gray-600 text-sm">Work with experienced mentors</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-4">
                  <Award size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Success</h3>
                <p className="text-gray-600 text-sm">500+ clients benefited</p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-4">
                  <Shield size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Confidential</h3>
                <p className="text-gray-600 text-sm">Your career is safe with us</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions to help you succeed in your career and projects
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Briefcase size={24} />}
                title="Expert Job Support"
                description="Struggling with complex job tasks? Our industry experts provide step-by-step guidance in real-time."
                features={[
                  "Direct support from industry experts",
                  "Live troubleshooting sessions",
                  "Task completion assistance",
                  "Technical guidance and best practices"
                ]}
                link="/services#job-support"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<BookOpen size={24} />}
                title="Interview Preparation"
                description="Struggling with job interviews? We provide trusted and guaranteed interview support services."
                features={[
                  "Mock interviews with experts",
                  "Resume optimization services",
                  "Customized study materials",
                  "Live interview assistance"
                ]}
                link="/services#interview-prep"
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<Code size={24} />}
                title="Software Projects"
                description="Need a high-quality project for academic or professional use? We deliver industry-grade solutions."
                features={[
                  "Complete source code & documentation",
                  "Project output videos",
                  "GitHub repository setup",
                  "Customization as per requirements"
                ]}
                link="/services#software-projects"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <AnimatedSection animation="slide-in" className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Infiw3b?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We aim to empower professionals by providing expert guidance, real-time job support, and high-quality project solutions that help you succeed in your career journey.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeatureCard
                  icon={<Clock size={20} />}
                  title="Real-Time Assistance"
                  description="Direct support from industry experts whenever you need it"
                />
                <FeatureCard
                  icon={<Zap size={20} />}
                  title="Affordable Pricing"
                  description="High-quality services at competitive rates"
                />
                <FeatureCard
                  icon={<Award size={20} />}
                  title="Proven Track Record"
                  description="Success stories from professionals worldwide"
                />
                <FeatureCard
                  icon={<Shield size={20} />}
                  title="Secure & Confidential"
                  description="Your career and data are in safe hands"
                />
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" className="md:w-1/2">
              <div className="bg-infiw3b-50 p-8 rounded-xl relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2b7cc1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Domains We Cover</h3>
                  <ul className="space-y-3">
                    {[
                      "Business Analyst (All Domains)",
                      "Salesforce BA & QA",
                      "Full Stack (Frontend & Backend)",
                      "Java (Spring Boot, Microservices, Cloud)",
                      "DevOps & Automation",
                      "Power BI Developer, Oracle DBA, .NET",
                      "RPA, SAP HCM, SAP SD & Finance",
                      "QA (Automation & Functional Testing)",
                      "Data Engineering, Cloud Architecture"
                    ].map((domain, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-5 h-5 bg-infiw3b-500 text-white flex items-center justify-center rounded-full mr-3 flex-shrink-0 text-xs">✓</span>
                        <span className="text-gray-700">{domain}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button 
                      asChild
                      className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white"
                    >
                      <Link to="/services">View All Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from the professionals we've helped
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <TestimonialCard
                content="Infiw3b helped me clear my interview with top IT firms. Their mock interviews gave me confidence to tackle even the toughest questions!"
                author="Amit Kumar"
                position="Java Developer"
                rating={5}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <TestimonialCard
                content="I struggled with my job tasks, but their real-time support made everything easier. The experts are knowledgeable and patient. Highly recommended!"
                author="Priya Singh"
                position="Salesforce BA"
                rating={5}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <TestimonialCard
                content="Their software projects are detailed and well-documented. I got an A+ on my university project! The code quality was excellent and the documentation was comprehensive."
                author="Rahul Sharma"
                position="Computer Science Student"
                rating={4}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <AnimatedSection animation="fade-in-up">
              <div className="bg-white rounded-xl shadow-sm p-8">
                <FAQItem
                  question="Is your job support guaranteed?"
                  answer="Yes! We provide 100% guaranteed support from real experts to ensure your success. Our team is available to help you overcome any challenges you face in your job."
                />
                <FAQItem
                  question="Can I get live interview assistance?"
                  answer="Yes! Our experts provide real-time help during interviews to ensure you perform at your best when it matters most."
                />
                <FAQItem
                  question="Are my details confidential?"
                  answer="Absolutely! Your personal and job details are fully secure with us. We maintain strict confidentiality protocols to protect your information."
                />
                <FAQItem
                  question="How do I book a service?"
                  answer="Simply contact us through our website, email or phone. We'll schedule a free consultation to understand your requirements and recommend the best solution."
                />
                <FAQItem
                  question="What are your pricing plans?"
                  answer="We offer custom pricing based on your specific requirements. Small software projects start at ₹1000, while medium projects start at ₹2000. Contact us for a personalized quote."
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Elevate Your Career?"
        description="Get the support you need to excel in your job, interviews, and projects. Our experts are ready to help you succeed."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/services"
      />
    </main>
  );
};

export default Index;
