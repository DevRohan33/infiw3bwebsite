
import React from "react";
import { Layers, Users, Code, BarChart, BriefcaseBusiness, Clock, HeartHandshake, Server, Database, Cpu, ServerCog, Network, Bot, Award, Medal, Laptop } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import AnimatedSection from "@/components/AnimatedSection";

const Services = () => {
  const jobSupportServices = [
    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Business Analyst Support",
      description: "Expert guidance for all BA domains including requirements gathering, analysis, and documentation.",
      features: ["Domain-specific knowledge", "Real-time task assistance", "Documentation help", "Stakeholder management tips"],
      link: "/contact",
    },
    {
      icon: <Database size={24} />,
      title: "Salesforce BA & QA",
      description: "Specialized support for Salesforce business analysis and quality assurance tasks.",
      features: ["Salesforce configuration guidance", "Testing strategy development", "UAT preparation", "Best practices implementation"],
      link: "/contact",
    },
    {
      icon: <Code size={24} />,
      title: "Full Stack Development",
      description: "Comprehensive assistance with frontend and backend development challenges.",
      features: ["React, Angular, Vue.js support", "Node.js, Java, .NET guidance", "API integration help", "Architecture consultation"],
      link: "/contact",
    },
    {
      icon: <Server size={24} />,
      title: "Java Development",
      description: "Expert support for Java technologies including Spring Boot, Microservices, and Cloud.",
      features: ["Spring framework troubleshooting", "Microservices architecture", "Java performance optimization", "Cloud deployment assistance"],
      link: "/contact",
    },
    {
      icon: <ServerCog size={24} />,
      title: "DevOps & Automation",
      description: "Guidance on implementing DevOps practices and automation solutions.",
      features: ["CI/CD pipeline setup", "Container orchestration", "Infrastructure as code", "Monitoring and logging"],
      link: "/contact",
    },
    {
      icon: <BarChart size={24} />,
      title: "Power BI Development",
      description: "Support for creating and optimizing Power BI reports and dashboards.",
      features: ["DAX formula optimization", "Data modeling assistance", "Report design best practices", "Performance tuning"],
      link: "/contact",
    },
    {
      icon: <Bot size={24} />,
      title: "RPA & SAP Support",
      description: "Specialized assistance for RPA implementation and SAP modules including HCM, SD, and Finance.",
      features: ["Process automation guidance", "SAP module configuration", "Integration solutions", "Testing and troubleshooting"],
      link: "/contact",
    },
    {
      icon: <Award size={24} />,
      title: "QA & Testing",
      description: "Expert support for automation and functional testing processes.",
      features: ["Test strategy development", "Automation framework design", "Test script optimization", "Defect management"],
      link: "/contact",
    },
    {
      icon: <Network size={24} />,
      title: "Data Engineering & Cloud",
      description: "Assistance with data pipeline creation and cloud architecture implementation.",
      features: ["ETL pipeline optimization", "Cloud migration guidance", "Big data processing", "Architecture best practices"],
      link: "/contact",
    },
  ];

  const interviewPreparationServices = [
    {
      icon: <Users size={24} />,
      title: "Mock Interviews",
      description: "Practice with real industry experts who provide feedback and improvement tips.",
      features: ["Domain-specific questions", "Real interview simulation", "Detailed feedback", "Multiple sessions available"],
      link: "/contact",
    },
    {
      icon: <Award size={24} />,
      title: "Resume Optimization",
      description: "Get your resume noticed by recruiters with our expert review and optimization service.",
      features: ["ATS optimization", "Keyword enhancement", "Achievement highlighting", "Format improvement"],
      link: "/contact",
    },
    {
      icon: <HeartHandshake size={24} />,
      title: "Live Interview Assistance",
      description: "Get discreet support during crucial interview moments to boost your confidence.",
      features: ["Real-time guidance", "Technical answer support", "Confidence building", "Interview rescue"],
      link: "/contact",
    },
    {
      icon: <Laptop size={24} />,
      title: "Customized Study Materials",
      description: "Receive tailored preparation guides and resources specific to your target role and company.",
      features: ["Company-specific materials", "Role-focused content", "Practice exercises", "Latest interview patterns"],
      link: "/contact",
    },
  ];

  const projectSolutionServices = [
    {
      icon: <Code size={24} />,
      title: "Full Codebase & Source Code",
      description: "Receive complete, well-structured, and commented source code for your project.",
      features: ["Clean code architecture", "Best practices implementation", "Well-commented code", "Easy maintenance"],
      link: "/contact",
    },
    {
      icon: <Layers size={24} />,
      title: "Project Documentation",
      description: "Comprehensive documentation in PDF format covering all aspects of your project.",
      features: ["Requirements documentation", "Architecture diagrams", "User guides", "API documentation"],
      link: "/contact",
    },
    {
      icon: <Medal size={24} />,
      title: "Project Output Videos",
      description: "Demonstration videos showcasing the functionality and features of your completed project.",
      features: ["Feature walkthroughs", "User flow demonstrations", "Technical explanations", "Presentation-ready content"],
      link: "/contact",
    },
    {
      icon: <Server size={24} />,
      title: "GitHub Repository Setup",
      description: "Professional GitHub repository setup with proper structure, branches, and documentation.",
      features: ["Repository configuration", "Branch strategy", "README setup", "GitHub Pages (if needed)"],
      link: "/contact",
    },
    {
      icon: <Clock size={24} />,
      title: "Supporting Materials",
      description: "Additional resources including video tutorials, reference materials, and presentation decks.",
      features: ["Installation guides", "Troubleshooting tips", "Extension possibilities", "Future improvement suggestions"],
      link: "/contact",
    },
  ];

  return (
    <div className="pt-20 bg-gray-50">
      {/* Hero Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert job support, interview preparation, and custom software solutions to help you excel in your career.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Job Support Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Job Support</h2>
            <p className="text-xl text-gray-600">
              Struggling with complex job tasks? Our industry experts provide step-by-step guidance in real-time.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobSupportServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Interview Preparation */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interview Preparation</h2>
            <p className="text-xl text-gray-600">
              Struggling with job interviews? We provide trusted and guaranteed interview support services.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {interviewPreparationServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* Custom Software Project Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Custom Software Project Solutions</h2>
            <p className="text-xl text-gray-600">
              Need a high-quality project for academic or professional use? We provide fully documented, industry-grade software projects.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectSolutionServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to Get Started?"
        description="Contact us today to discuss your needs and how we can help you excel in your career."
        primaryButtonText="Contact Us Now"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </div>
  );
};

export default Services;
