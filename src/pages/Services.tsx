import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Shield, Trophy, BarChart, Zap, PenTool, Code, Users, Clock, Star, CheckCircle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";
import AnimatedSection from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import CTASection from "@/components/CTASection";
import ContactFormModal from "@/components/ContactFormModal";
const Services = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  return (
    <main>
      <Helmet>
        <title>Professional Technical Services - Infiw3b | Web, 3D, Gen AI & DevOps</title>
        <meta name="description" content="Explore our comprehensive technical services: Web development, 3D development, Gen AI, DevOps, ML, and Data Analysis." />
        <meta name="keywords" content="web services, 3D development, Gen AI, DevOps, Python, REST API, AWS, Cloud, Fullstack, ML, Data Analysis" />
        <meta property="og:title" content="Professional Technical Services - Infiw3b | Web, 3D, Gen AI & DevOps" />
        <meta property="og:description" content="Explore our comprehensive technical services: Web development, 3D development, Gen AI, DevOps, ML, and Data Analysis." />
      </Helmet>
      
      <ContactFormModal isOpen={isContactModalOpen} onClose={closeContactModal} />

      {/* Enhanced Header */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-24 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-64 h-64 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-64 h-64 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#AA55FF_1px,transparent_1px)] [background-size:40px_40px]" />
        
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-in-up" className="text-center max-w-5xl mx-auto">
            {/* Header Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-infiw3b-50 border border-infiw3b-100 mb-8">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-sm font-semibold text-infiw3b-700">Trusted by 500+ Professionals Worldwide</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Why Choose 
                <span className="bg-gradient-to-r from-infiw3b-600 to-violet-600 bg-clip-text text-transparent"> Infiw3b?</span>
              </h2>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Comprehensive technical solutions for your job tasks, interviews, and projects. 
              <br className="hidden md:block" />
              From <span className="font-semibold text-infiw3b-600">job & project support</span> to 
              <span className="font-semibold text-violet-600"> technical project development</span>, 
              we've got you covered.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
              {[
                { icon: "🎯", stat: "95%", label: "Success Rate" },
                { icon: "⚡", stat: "24/7", label: "Support Available" },
                { icon: "🏆", stat: "500+", label: "Projects Delivered" }
              ].map((item, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{item.stat}</div>
                  <div className="text-sm text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                variant="action" 
                size="auto" 
                onClick={openContactModal} 
                className="bg-gradient-to-r from-infiw3b-600 to-violet-600 hover:from-infiw3b-700 hover:to-violet-700 text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Get Free Consultation
              </Button>
              <Button 
                variant="outline"
                className="border-2 border-infiw3b-300 text-infiw3b-700 hover:bg-infiw3b-50 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 backdrop-blur-sm bg-white/50"
              >
                💬 Whatsapp: +91 94333 13760
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Categories Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Categories</h2>
            <p className="text-lg text-gray-600">Choose the perfect solution for your needs</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Job & Project Support",
                description: "Technical assistance for daily work and project challenges",
                color: "from-blue-500 to-blue-600",
                bgColor: "from-blue-50 to-blue-100"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Interview Guidance",
                description: "Professional mentoring and document optimization",
                color: "from-green-500 to-green-600",
                bgColor: "from-green-50 to-green-100"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Technical Projects",
                description: "High-end development solutions for AI, 3D, and more",
                color: "from-purple-500 to-purple-600",
                bgColor: "from-purple-50 to-purple-100"
              }
            ].map((category, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={index * 100}>
                <div className="relative group cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.bgColor} rounded-2xl transform group-hover:scale-105 transition-all duration-300`}></div>
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 h-full">
                    <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{category.title}</h3>
                    <p className="text-gray-600">{category.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Job Support Section */}
      <section id="job-support" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-6">
              <Shield className="w-4 h-4 mr-2" />
              Job Support
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Expert Job Support</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Struggling with job tasks? Get real-time help from industry experts for BA, QA, DevOps, Full Stack, and more. 
              Our professionals have years of experience and are ready to guide you through any challenge.
            </p>
          </AnimatedSection>

          {/* Domain Expertise Banner */}
          <AnimatedSection className="mb-12">
          <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Domains We Cover
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "Web Services", "3D Development", "Gen AI", "DevOps", "Python", "REST API",
                "AWS", "Cloud", "Fullstack", "ML", "Data Analysis", "AI Automation",
                "Advanced Chatbots", "RAG Systems", "Multi-tenant", "Vector DBs"
              ].map((domain, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-300 transition-colors duration-200">
                    {domain}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Shield size={24} />}
                title="AI & ML Support"
                description="Expert assistance for AI model implementation, training, and machine learning tasks."
                features={[
                  "Model training guidance",
                  "Data preprocessing help",
                  "Advanced AI Automation",
                  "RAG Chatbot workflows"
                ]}
                buttonText="Get AI Support"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<Code size={24} />}
                title="Technical Support"
                description="Real-time support for Python development, Web services, and general software tasks."
                features={[
                  "Python script debugging",
                  "Web development assistance",
                  "REST API implementation",
                  "Technical troubleshooting"
                ]}
                buttonText="Get Tech Support"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<Zap size={24} />}
                title="Project Support"
                description="Guidance for personal projects, 3D development, and small software builds."
                features={[
                  "3D project assistance",
                  "Personal project mentoring",
                  "Small software architecture",
                  "Custom technical guidance"
                ]}
                buttonText="Get Project Support"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
          </div>

          {/* Success Stories */}
          <AnimatedSection className="mt-16 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Success Stories</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { metric: "98%", label: "Job Retention Rate", icon: "📈" },
                  { metric: "24hrs", label: "Average Response Time", icon: "⚡" },
                  { metric: "500+", label: "Professionals Helped", icon: "👥" }
                ].map((story, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{story.icon}</div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">{story.metric}</div>
                    <div className="text-gray-600">{story.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interview Preparation Section */}
      <section id="interview-prep" className="py-16 md:py-24 bg-gradient-to-br from-green-50 to-teal-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-green-100 text-green-600 text-sm font-medium mb-6">
              <Trophy className="w-4 h-4 mr-2" />
              Interview Preparation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Interview Guidance</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Elevate your interview performance with strategic guidance, document optimization, and expert mentoring.
              We help you showcase your best self to potential employers.
            </p>
          </AnimatedSection>

          {/* Interview Process */}
          <AnimatedSection className="mb-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Interview Preparation Process</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Assessment", desc: "Evaluate your current skills" },
                  { step: "02", title: "Preparation", desc: "Customized study plan" },
                  { step: "03", title: "Practice", desc: "Mock interview sessions" },
                  { step: "04", title: "Success", desc: "Live interview support" }
                ].map((process, index) => (
                  <div key={index} className="text-center relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {process.step}
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{process.title}</h4>
                    <p className="text-gray-600 text-sm">{process.desc}</p>
                    {index < 3 && (
                      <div className="hidden md:block absolute top-8 -right-3 w-6 h-0.5 bg-green-300"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Trophy size={24} />}
                title="Interview Guidance"
                description="Strategic mentoring and advice to help you navigate technical and behavioral interview rounds."
                features={[
                  "Interview strategy planning",
                  "Technical concept guidance",
                  "Behavioral question coaching",
                  "Industry-specific best practices"
                ]}
                buttonText="Get Guidance"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<BarChart size={24} />}
                title="Resume Optimization"
                description="Boost your resume with ATS-friendly format and recruiter-approved technical content."
                features={[
                  "ATS keyword optimization",
                  "Technical skill highlighting",
                  "Professional design templates",
                  "Expert review session"
                ]}
                buttonText="Optimize Resume"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<PenTool size={24} />}
                title="CV Ready Services"
                description="Get a professionally polished CV that effectively communicates your technical expertise."
                features={[
                  "Professional CV formatting",
                  "Impactful summary writing",
                  "Project description tuning",
                  "Modern professional layout"
                ]}
                buttonText="Learn More"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Software Projects Section */}
      <section id="software-projects" className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-6 py-2 rounded-full bg-purple-100 text-purple-600 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Custom Software Projects
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Software Project Solutions</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Get high-quality, scalable, and well-documented software projects tailored to your academic or professional needs. 
              From simple prototypes to complex enterprise solutions.
            </p>
          </AnimatedSection>

          {/* Technology Stack */}
          <AnimatedSection className="mb-12">
            <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-200">
              <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                Technologies We Work With
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {[
                  "Generative AI",
                  "3D Development",
                  "Python",
                  "Next.js",
                  "AWS/Cloud",
                  "PyTorch/ML"
                ].map((tech, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-red-100 hover:bg-red-300 text-gray-700 px-4 py-3 rounded-xl text-sm font-medium shadow-sm transition-all duration-200">
                      {tech}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>


          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fade-in-up" delay={100}>
              <ServiceCard
                icon={<Code size={24} />}
                title="Academic Projects"
                description="Final year projects with clean source code, comprehensive documentation, and presentation materials."
                features={[
                  "Custom development as per requirements",
                  "Presentation-ready documentation",
                  "Demo videos and screenshots",
                  "Complete GitHub repository setup"
                ]}
                buttonText="Get Project Quote"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={200}>
              <ServiceCard
                icon={<Zap size={24} />}
                title="Professional Projects"
                description="Scalable, production-ready codebase for clients, startups, and development teams."
                features={[
                  "Full-stack web applications",
                  "Clean architecture & best practices",
                  "API integrations & third-party services",
                  "Ongoing maintenance & support"
                ]}
                buttonText="Discuss Project"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
              
            <AnimatedSection animation="fade-in-up" delay={300}>
              <ServiceCard
                icon={<Shield size={24} />}
                title="Proof of Concept (PoC)"
                description="Test new ideas with quick MVP builds and interactive prototypes for validation."
                features={[
                  "Multi-tenant SaaS solutions",
                  "Advanced RAG System builds",
                  "Enterprise Chatbot setups",
                  "Interactive prototypes & MVP"
                ]}
                buttonText="Start PoC"
                buttonOnClick={openContactModal}
                className="bg-white hover:shadow-lg transition-shadow duration-300"
              />
            </AnimatedSection>
          </div>

          {/* Project Pricing */}
          <AnimatedSection className="mt-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Project Pricing</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { type: "Small Projects", price: "Custom Quote", desc: "Python scripts, AI automation, small RAG tasks" },
                  { type: "Medium Projects", price: "Custom Quote", desc: "Technical websites, RAG Chatbots, 3D prototypes" },
                  { type: "Large Projects", price: "Custom Quote", desc: "Multi-tenant systems, Advanced AI solutions" }
                ].map((pricing, index) => (
                  <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-200">
                    <h4 className="font-bold text-lg text-gray-900 mb-2">{pricing.type}</h4>
                    <div className="text-2xl font-bold text-purple-600 mb-2">{pricing.price}</div>
                    <p className="text-gray-600 text-sm">{pricing.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Elevate Your Career?
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Join 500+ professionals who've accelerated their careers with Infiw3b. 
              Get expert support, comprehensive training, and custom solutions tailored to your needs.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
              <Button 
                onClick={openContactModal}
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                🚀 Get Started Now
              </Button>
              <Button 
                asChild
                className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/30 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300"
              >
                <a href="https://wa.me/919433313760" target="_blank" rel="noopener noreferrer">
                  💬 Chat on WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>100% Guaranteed Success</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support Available</span>
              </div>
                            <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>500+ Happy Clients</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
};

export default Services;
