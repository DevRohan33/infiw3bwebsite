
import { useState } from "react";
import { Shield, Trophy, BarChart, Zap, PenTool, Code } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactFormModal from "@/components/ContactFormModal";

const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => {
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <main className="pt-24 pb-16">
      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen} 
        onClose={closeContactModal} 
      />

      {/* Header */}
      <section className="relative py-16 md:py-24 bg-infiw3b-50 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#2b7cc1_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Comprehensive solutions to help you succeed in your career and projects. From job support to custom software development, we've got you covered.
            </p>
            <Button 
              variant="action"
              size="auto"
              onClick={openContactModal}
              className="mx-auto text-base"
            >
              Get a Free Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Support Services */}
      <section id="job-support" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-infiw3b-100 text-infiw3b-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Job Support</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Expert Job Support</h2>
            <p className="text-xl text-gray-600">
              Struggling with complex job tasks? Our industry experts provide step-by-step guidance in real-time.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Shield size={24} />}
                title="Business Analyst Support"
                description="Expert assistance for all BA domains including requirements gathering, analysis, and documentation."
                features={[
                  "Requirements elicitation techniques",
                  "User story writing and refinement",
                  "Process mapping and analysis",
                  "Stakeholder management guidance"
                ]}
                buttonText="Get Support"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<Code size={24} />}
                title="Developer Support"
                description="Technical guidance for Java, Full Stack, DevOps, and other development roles."
                features={[
                  "Code reviews and troubleshooting",
                  "Architecture design assistance",
                  "Best practices implementation",
                  "Performance optimization techniques"
                ]}
                buttonText="Get Support"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<Zap size={24} />}
                title="QA Support"
                description="Comprehensive support for both manual and automation testing professionals."
                features={[
                  "Test strategy development",
                  "Test case creation and execution",
                  "Automation framework design",
                  "Defect tracking and management"
                ]}
                buttonText="Get Support"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Interview Preparation Services */}
      <section id="interview-prep" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-infiw3b-100 text-infiw3b-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Interview Prep</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Interview Preparation</h2>
            <p className="text-xl text-gray-600">
              Struggling with job interviews? We provide trusted and guaranteed interview support services.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Trophy size={24} />}
                title="Mock Interviews"
                description="Practice with real industry experts who have worked in top companies."
                features={[
                  "Role-specific technical interviews",
                  "Behavioral question preparation",
                  "Detailed feedback and improvement areas",
                  "Multiple practice sessions available"
                ]}
                buttonText="Book Session"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<BarChart size={24} />}
                title="Resume Optimization"
                description="Get your resume noticed by recruiters and ATS systems."
                features={[
                  "ATS-friendly formatting",
                  "Keyword optimization",
                  "Achievement highlighting",
                  "Role-specific customization"
                ]}
                buttonText="Get Started"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<PenTool size={24} />}
                title="Live Interview Assistance"
                description="Real-time support during crucial moments of your interview process."
                features={[
                  "Background technical guidance",
                  "Quick question resolution",
                  "Confidence boosting techniques",
                  "Post-interview feedback"
                ]}
                buttonText="Learn More"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Software Projects */}
      <section id="software-projects" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block bg-infiw3b-100 text-infiw3b-600 px-4 py-1 rounded-full text-sm font-medium mb-4">Custom Projects</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Software Project Solutions</h2>
            <p className="text-xl text-gray-600">
              Need a high-quality project for academic or professional use? We provide fully documented, industry-grade software projects.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Code size={24} />}
                title="Academic Projects"
                description="High-quality projects for students with complete documentation."
                features={[
                  "Custom project development",
                  "Comprehensive documentation",
                  "Source code with comments",
                  "Project demo and presentation"
                ]}
                buttonText="Get Quote"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<Zap size={24} />}
                title="Professional Projects"
                description="Industry-grade projects for professionals and businesses."
                features={[
                  "Enterprise-level architecture",
                  "Scalable and maintainable codebase",
                  "Comprehensive testing",
                  "Deployment and maintenance support"
                ]}
                buttonText="Discuss Project"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>

            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<Shield size={24} />}
                title="Proof of Concepts"
                description="Quick prototypes to validate your ideas before full implementation."
                features={[
                  "Rapid development",
                  "Core functionality implementation",
                  "Technology feasibility testing",
                  "Recommendations for full-scale project"
                ]}
                buttonText="Get Started"
                buttonOnClick={openContactModal}
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us now to discuss your needs and get a free consultation."
        primaryButtonText="Contact Us"
        primaryButtonLink="#"
        primaryButtonOnClick={openContactModal}
        secondaryButtonText="Chat On WhatsApp"
        secondaryButtonLink="https://wa.me/919433313760"
      />
    </main>
  );
};

export default Services;
