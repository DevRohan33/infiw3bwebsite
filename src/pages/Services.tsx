
import React from "react";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import FAQItem from "@/components/FAQItem";
import { Code, Cpu, Database, Globe, LineChart, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-r from-infiw3b-50 to-infiw3b-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Expert Services
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From job support to interview preparation and custom software projects, 
              we offer a comprehensive range of services to help you succeed.
            </p>
            <Button 
              className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white shadow-md hover:shadow-lg transition-all"
              size="lg"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Expert Job Support
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with complex job tasks? Our industry experts provide step-by-step guidance in real-time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Code className="h-8 w-8" />}
              title="Full Stack Development"
              description="Get expert assistance with Frontend & Backend technologies including React, Angular, Node.js, and more."
            />
            <ServiceCard 
              icon={<Database className="h-8 w-8" />}
              title="Database Management"
              description="Oracle DBA, SQL, MongoDB, and other database solutions with expert guidance."
            />
            <ServiceCard 
              icon={<LineChart className="h-8 w-8" />}
              title="Business Analysis"
              description="Expert support for BAs across all domains with real-time guidance and documentation help."
            />
            <ServiceCard 
              icon={<Globe className="h-8 w-8" />}
              title="Cloud & DevOps"
              description="AWS, Azure, GCP, Docker, Kubernetes and CI/CD pipeline assistance from certified experts."
            />
            <ServiceCard 
              icon={<Cpu className="h-8 w-8" />}
              title="QA & Testing"
              description="Comprehensive support for manual and automation testing including Selenium, Cypress, and more."
            />
            <ServiceCard 
              icon={<Users className="h-8 w-8" />}
              title="CRM & ERP"
              description="Salesforce, SAP HCM, SAP SD & Finance support from experienced professionals."
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Interview Support Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interview Preparation
            </h2>
            <p className="text-lg text-gray-600">
              Struggling with job interviews? We provide trusted and guaranteed interview support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mock Interviews</h3>
              <p className="text-gray-600 mb-6">Practice with real industry experts who will provide detailed feedback and improvement tips.</p>
              <Button className="w-full bg-infiw3b-600 hover:bg-infiw3b-700 text-white">
                Book a Session
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resume Optimization</h3>
              <p className="text-gray-600 mb-6">Get your resume reviewed and optimized by recruiters to stand out from the competition.</p>
              <Button className="w-full bg-infiw3b-600 hover:bg-infiw3b-700 text-white">
                Upload Resume
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Live Interview Assistance</h3>
              <p className="text-gray-600 mb-6">Get real-time support during your crucial interviews with discreet professional guidance.</p>
              <Button className="w-full bg-infiw3b-600 hover:bg-infiw3b-700 text-white">
                Learn More
              </Button>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customized Study Materials</h3>
              <p className="text-gray-600 mb-6">Receive tailored preparation guides and materials specific to your target role and company.</p>
              <Button className="w-full bg-infiw3b-600 hover:bg-infiw3b-700 text-white">
                Request Materials
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Software Projects Section */}
      <AnimatedSection className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Custom Software Project Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Need a high-quality project for academic or professional use? We provide fully documented, industry-grade software projects.
            </p>
          </div>

          <div className="bg-infiw3b-50 p-8 rounded-xl border border-infiw3b-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Deliverables Include:</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <span className="bg-infiw3b-100 text-infiw3b-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-gray-700">Full Codebase & Source Code with comments</span>
              </li>
              <li className="flex items-start">
                <span className="bg-infiw3b-100 text-infiw3b-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-gray-700">Complete Project Documentation (PDF Format)</span>
              </li>
              <li className="flex items-start">
                <span className="bg-infiw3b-100 text-infiw3b-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-gray-700">Project Output Videos demonstrating functionality</span>
              </li>
              <li className="flex items-start">
                <span className="bg-infiw3b-100 text-infiw3b-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-gray-700">GitHub Repository Setup with proper structure</span>
              </li>
              <li className="flex items-start">
                <span className="bg-infiw3b-100 text-infiw3b-600 rounded-full p-1 mr-3 mt-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </span>
                <span className="text-gray-700">Supporting Materials & Video Tutorials</span>
              </li>
            </ul>
            <Button className="bg-infiw3b-600 hover:bg-infiw3b-700 text-white shadow-md hover:shadow-lg transition-all">
              Request a Project Quote
            </Button>
          </div>
        </div>
      </AnimatedSection>

      {/* FAQ Section */}
      <AnimatedSection className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Have questions about our services? Find quick answers below.
            </p>

            <div className="space-y-1">
              <FAQItem 
                question="What kind of job support do you provide?" 
                answer="We provide real-time assistance for various job roles including Software Development, Business Analysis, QA Testing, DevOps, Cloud Architecture, and more. Our experts offer guidance through screen sharing, calls, or chat based on your needs."
              />
              <FAQItem 
                question="How does your interview assistance work?" 
                answer="Our interview assistance includes mock interviews with industry experts, resume optimization, interview preparation guides, and live support during interviews if needed. We tailor our approach based on your specific role and target company."
              />
              <FAQItem 
                question="What is included in your software project deliverables?" 
                answer="Our software project deliverables include full source code, comprehensive documentation, video demonstrations, GitHub repository setup, and additional supporting materials like tutorials to help you understand and present the project effectively."
              />
              <FAQItem 
                question="Is my information kept confidential?" 
                answer="Absolutely. We maintain strict confidentiality for all client information. Your personal details, job information, and project requirements are secure with us and never shared with third parties."
              />
              <FAQItem 
                question="How do I get started with your services?" 
                answer="Getting started is simple. Just reach out through our contact form, email, or phone number. We'll schedule a free consultation to understand your requirements and provide a customized solution and quote."
              />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss your requirements and get expert assistance for your job, interview, or project needs."
        buttonText="Contact Us Now"
        buttonLink="/contact"
      />
    </div>
  );
};

export default Services;
