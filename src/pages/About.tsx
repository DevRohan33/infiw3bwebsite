
import { Check, Users, Award, Target, BookOpen, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-infiw3b-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Infiw3b
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Your trusted partner in professional growth and technical excellence
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <AnimatedSection animation="slide-in" className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Infiw3b was founded with a clear vision: to empower professionals by providing expert guidance, real-time job support, and high-quality project solutions. We identified a gap in the market where many professionals struggled to meet job demands or pass technical interviews.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of industry experts came together to create a platform that offers genuine, practical assistance to professionals at various stages of their careers. From job support to interview preparation and custom software projects, we've helped hundreds of clients overcome challenges and achieve their goals.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to have built a reputation for reliability, expertise, and results, with a community of satisfied clients who trust us with their career development.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" className="md:w-1/2">
              <div className="bg-infiw3b-50 p-8 rounded-xl relative overflow-hidden h-full">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2b7cc1_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="relative space-y-6">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                    <p className="text-gray-700">
                      We aim to empower professionals by providing expert guidance, real-time job support, and high-quality project solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                    <p className="text-gray-700">
                      To help job seekers, working professionals, and students succeed through trusted mentorship, expert training, and top-tier project solutions.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">Our Values</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <Check size={18} className="text-infiw3b-600 mr-2" />
                        <span className="text-gray-700">Excellence in everything we do</span>
                      </li>
                      <li className="flex items-center">
                        <Check size={18} className="text-infiw3b-600 mr-2" />
                        <span className="text-gray-700">Integrity and transparency</span>
                      </li>
                      <li className="flex items-center">
                        <Check size={18} className="text-infiw3b-600 mr-2" />
                        <span className="text-gray-700">Client success is our success</span>
                      </li>
                      <li className="flex items-center">
                        <Check size={18} className="text-infiw3b-600 mr-2" />
                        <span className="text-gray-700">Continuous learning and innovation</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Infiw3b?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to your success with top-quality service and support
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-5">
                  <Users size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-Time Assistance</h3>
                <p className="text-gray-600">
                  Direct support from industry experts who understand your challenges and provide practical solutions.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-5">
                  <Target size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Affordable Pricing</h3>
                <p className="text-gray-600">
                  High-quality services at competitive rates, with transparent pricing and no hidden charges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-5">
                  <Award size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Track Record</h3>
                <p className="text-gray-600">
                  Success stories from professionals worldwide who have advanced their careers with our help.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={400}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full border border-gray-100">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-infiw3b-100 text-infiw3b-600 mb-5">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Secure & Confidential</h3>
                <p className="text-gray-600">
                  Your career and personal data are in safe hands, with strict confidentiality protocols.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Approach
            </h2>
            <p className="text-xl text-gray-600">
              How we help professionals succeed at every step
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative h-full">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 font-semibold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Understand Your Needs</h3>
                <p className="text-gray-600 mb-4">
                  We begin by understanding your specific requirements, challenges, and goals through detailed consultation.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Personalized needs assessment</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Goal identification</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Challenge analysis</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative h-full">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 font-semibold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Tailored Solutions</h3>
                <p className="text-gray-600 mb-4">
                  We develop customized solutions that address your specific needs, whether it's job support, interview preparation, or software projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Custom action plans</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Expert matching</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Resource preparation</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative h-full">
                <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 font-semibold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Execution & Support</h3>
                <p className="text-gray-600 mb-4">
                  We deliver our services with dedication and provide ongoing support to ensure your success.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Timely delivery</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Continuous guidance</span>
                  </li>
                  <li className="flex items-center">
                    <Check size={16} className="text-infiw3b-600 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Follow-up support</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600">
              Industry professionals with years of experience ready to help you succeed
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 mx-auto rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 mb-4">
                  <span className="text-2xl font-semibold">RS</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Rahul Sharma</h3>
                <p className="text-infiw3b-600 text-center mb-4">Senior Technical Lead</p>
                <p className="text-gray-600 text-center">
                  10+ years of experience in Java, Spring Boot, and cloud technologies, helping professionals overcome technical challenges.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 mx-auto rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 mb-4">
                  <span className="text-2xl font-semibold">AP</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Anjali Patel</h3>
                <p className="text-infiw3b-600 text-center mb-4">Business Analyst Expert</p>
                <p className="text-gray-600 text-center">
                  Specialized in Salesforce BA and QA with 8+ years of experience in requirement analysis and implementation.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="w-20 h-20 mx-auto rounded-full bg-infiw3b-100 flex items-center justify-center text-infiw3b-600 mb-4">
                  <span className="text-2xl font-semibold">VK</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Vikram Kumar</h3>
                <p className="text-infiw3b-600 text-center mb-4">Full Stack Developer</p>
                <p className="text-gray-600 text-center">
                  Expert in modern web technologies with 7+ years of experience building scalable applications and mentoring developers.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-in-up" delay={400} className="text-center mt-12">
            <Button 
              asChild
              className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium px-6 py-3 h-auto rounded-md shadow-md hover:shadow-lg transform transition-all duration-300 hover:-translate-y-0.5 text-base"
            >
              <Link to="/contact">Work With Our Experts</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Boost Your Career?"
        description="Get in touch with us today to discuss how we can help you achieve your professional goals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="View Services"
        secondaryButtonLink="/services"
      />
    </main>
  );
};

export default About;
