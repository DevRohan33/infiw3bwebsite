
import { useState } from "react";
import { Briefcase, BookOpen, Code, Users, Shield, Clock, Award, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import ServiceCard from "@/components/ServiceCard";
import EnhancedTestimonialSection from "@/components/TestimonialSection";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import FAQItem from "@/components/FAQItem";
import StatsSection from "@/components/StatsSection";
import ContactFormModal from "@/components/ContactFormModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const Index = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main>
      <Navbar />
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />

      {/* Hero Section */}
      {/* <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-infiw3b-50 to-white z-0"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <AnimatedSection animation="fade-in-up">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#AA55FF] mb-4">Infiw3b</h1>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Excel in Your Career with Expert Job Support & Custom Software Projects
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
                Facing challenges in your job? Preparing for an important interview? Need a custom software project? Infiw3b is here to help!
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button 
                  variant="action"
                  size="auto"
                  onClick={openContactModal}
                  className="text-base"
                >
                  Book a Free Consultation
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
      </section> */}

      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 z-0"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#AA55FF_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <AnimatedSection animation="fade-in-up">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                    <span className="text-sm font-medium text-purple-700">500+ Professionals Helped</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                    <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                      Infiw3b
                    </span>
                    <br />
                    <span className="text-gray-900 text-4xl md:text-5xl lg:text-6xl">
                      Excel in Your 
                    </span>
                    <br />
                    <span className="relative text-4xl md:text-5xl lg:text-6xl text-gray-900">
                      Career Journey
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transform scale-x-0 animate-scale-x"></div>
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Transform your career with <span className="font-semibold text-purple-600">expert job support</span>, 
                    <span className="font-semibold text-pink-600"> interview preparation</span>, and 
                    <span className="font-semibold text-blue-600"> custom software projects</span>. 
                  </p>

                  {/* Features List */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    {[
                      { icon: "🚀", text: "Real-time Support" },
                      { icon: "🎯", text: "Expert Guidance" },
                      { icon: "🛡️", text: "100% Guaranteed" }
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
                        <span className="mr-2 text-lg">{feature.icon}</span>
                        <span className="text-sm font-medium text-gray-700">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <Button 
                      onClick={openContactModal}
                      className="relative group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <span className="relative z-10 flex items-center">
                        📞 Book Free Consultation
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="border-2 border-purple-300 text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50"
                    >
                      <Link to="/services" className="flex items-center">
                        🔍 Explore Services
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </Link>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden">
                <AnimatedSection animation="slide-in-right">
                  {/* Main Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl animate-bounce">
                      🎯
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Dashboard</h3>
                    
                    {/* Stats */}
                    <div className="space-y-4 mb-6">
                      {[
                        { label: "Job Support Success", value: "98%", color: "from-green-400 to-green-600" },
                        { label: "Interview Pass Rate", value: "95%", color: "from-blue-400 to-blue-600" },
                        { label: "Project Delivery", value: "100%", color: "from-purple-400 to-purple-600" }
                      ].map((stat, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-gray-600 font-medium">{stat.label}</span>
                          <div className="flex items-center">
                            <div className="w-24 h-2 bg-gray-200 rounded-full mr-3 overflow-hidden">
                              <div className={`h-full bg-gradient-to-r ${stat.color} rounded-full animate-scale-x`} style={{width: stat.value}}></div>
                            </div>
                            <span className="font-bold text-gray-900">{stat.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Icons */}
                    <div className="border-t pt-6">
                      <p className="text-sm text-gray-500 mb-3">Technologies We Support:</p>
                      <div className="flex flex-wrap gap-2">
                        {['React', 'Java', 'Python', 'AWS', 'Salesforce', 'DevOps'].map((tech, index) => (
                          <span key={index} className="px-3 py-1 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-xs font-medium">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-float">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        ✓
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Live Support</p>
                        <p className="text-xs text-gray-500">Available 24/7</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-2000">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        🏆
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Expert Team</p>
                        <p className="text-xs text-gray-500">Industry Veterans</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>

            {/* Bottom CTA Strip */}
            <AnimatedSection animation="fade-in-up" delay={800} className="mt-16 text-center">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <p className="text-lg font-semibold text-gray-900 mb-2">
                  🎉 Limited Time: Get 30% off on your first project!
                </p>
                <p className="text-gray-600">
                  Join hundreds of professionals who've accelerated their careers with Infiw3b
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Custom CSS for animations */}
        <style>{`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes scale-x {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
          }
          
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          
          .animate-blob {
            animation: blob 7s infinite;
          }
          
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
          
          .animate-scale-x {
            animation: scale-x 2s ease-out forwards;
          }
          
          .animate-gradient {
            background-size: 200% 200%;
            animation: gradient 3s ease infinite;
          }
          
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
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
      <EnhancedTestimonialSection openContactModal={openContactModal} />

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
        primaryButtonLink="#"
        primaryButtonOnClick={openContactModal}
        secondaryButtonText="Chat On WhatsApp"
        secondaryButtonLink="https://wa.me/919433313760"
      />

    <Footer/>
    </main>
  );
};

export default Index;
