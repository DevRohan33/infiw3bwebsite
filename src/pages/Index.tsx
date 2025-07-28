import { useState } from "react";
import { Briefcase, BookOpen, Code, Users, Shield, Clock, Award, Zap, Star, CheckCircle, TrendingUp, Globe, Rocket, Target,ShieldCheck,HeartHandshake } from "lucide-react";
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
import { User } from "lucide-react";

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

      {/* Enhanced Hero Section - KEEPING AS IS */}
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

      {/* Enhanced Trust Signals Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,#8B5CF6_1px,transparent_1px),linear-gradient(-45deg,#8B5CF6_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedSection animation="fade-in-up">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-6">
                <Star className="w-5 h-5 text-yellow-500 mr-2" />
                <span className="text-sm font-semibold text-purple-700">Trusted by Industry Leaders</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">500+</span> Professionals Choose Us
              </h2>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "100% Guaranteed",
                description: "Money-back guarantee on all services",
                gradient: "from-green-400 to-emerald-600",
                stat: "100%",
                statLabel: "Success Rate"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Industry Experts",
                description: "10+ years of industry experience",
                gradient: "from-blue-400 to-cyan-600",
                stat: "10+",
                statLabel: "Years Experience"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Proven Success",
                description: "500+ successful career transformations",
                gradient: "from-purple-400 to-pink-600",
                stat: "500+",
                statLabel: "Happy Clients"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Supporting professionals worldwide",
                gradient: "from-orange-400 to-red-600",
                stat: "24/7",
                statLabel: "Support Available"
              }
            ].map((item, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={100 * (index + 1)}>
                <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  {/* Gradient Orb */}
                  <div className={`absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="pt-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {item.description}
                    </p>
                    
                    {/* Stat */}
                    <div className="border-t border-gray-100 pt-4">
                      <div className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-1`}>
                        {item.stat}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {item.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
              <Rocket className="w-5 h-5 text-purple-300 mr-2" />
              <span className="text-sm font-semibold text-purple-300">Premium Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Transform Your Career with
              <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Expert-Led Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              From real-time job support to interview mastery and custom software projects - we've got every aspect of your professional growth covered.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-10 h-10" />,
                title: "Expert Job Support",
                description: "Get real-time assistance from industry veterans who understand your challenges",
                features: [
                  "Live troubleshooting sessions",
                  "Task completion guidance", 
                  "Best practices mentoring",
                  "Career advancement tips"
                ],
                gradient: "from-green-400 to-emerald-600",
                link: "/services#job-support",
                popular: false
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Interview Mastery",
                description: "Ace any interview with our proven preparation and live assistance programs",
                features: [
                  "Mock interview sessions",
                  "Resume optimization", 
                  "Technical prep materials",
                  "Live interview support"
                ],
                gradient: "from-purple-500 to-pink-600",
                link: "/services#interview-prep",
                popular: true
              },
              {
                icon: <Code className="w-10 h-10" />,
                title: "Custom Software Projects",
                description: "Industry-grade solutions tailored to your academic or professional needs",
                features: [
                  "Complete source code",
                  "Detailed documentation", 
                  "GitHub repository setup",
                  "Custom requirements"
                ],
                gradient: "from-blue-500 to-cyan-600",
                link: "/services#software-projects",
                popular: false
              }
            ].map((service, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={150 * (index + 1)}>
                <div className="group relative h-full">
                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        🔥 Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl group h-full">
                    {/* Icon */}
                    <div className={`w-20 h-20 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <div className="text-white">
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 mb-8 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <Button 
                      asChild
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-white border-0 h-12 rounded-xl font-semibold`}
                    >
                      <Link to={service.link} className="flex items-center justify-center">
                        Learn More
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </Link>
                    </Button>

                    {/* Gradient Overlay on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Bottom CTA */}
          {/* <AnimatedSection animation="fade-in-up" delay={600} className="text-center mt-16">
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-8 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4">
                Not sure which service fits your needs?
              </h3>
              <p className="text-gray-300 mb-6">
                Book a free consultation and let our experts guide you to the perfect solution.
              </p>
              <Button 
                onClick={openContactModal}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Free Consultation
              </Button>
            </div>
          </AnimatedSection> */}
        </div>
      </section>

      {/* Enhanced Why Choose Us Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-white via-purple-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#8B5CF6_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">

            {/* Enhanced Left Content */}
            {/* <AnimatedSection animation="slide-in" className="space-y-8">
              <div>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 shadow-sm">
                  <Target className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-700">Why Choose Infiw3b</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Success is Our
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We don't just provide services - we partner with you to transform your career trajectory. Every solution is crafted with precision, backed by expertise, and delivered with a guarantee.
                </p>
              </div>

              {/* New: Success Metrics */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "500+", label: "Clients Helped", color: "text-purple-600" },
                  { value: "24/7", label: "Support", color: "text-blue-600" },
                  { value: "95%", label: "Success Rate", color: "text-green-600" },
                  { value: "4.8", label: "Rating", color: "text-yellow-600" }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <div className="text-sm text-gray-600">{item.label}</div>
                  </div>
                ))}
              </div> */}
              
              {/* Enhanced Feature Grid */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Real-Time Assistance",
                    description: "Get instant help when you need it most with our 24/7 support team",
                    gradient: "from-blue-500 to-cyan-600",
                    hoverGradient: "hover:from-blue-600 hover:to-cyan-700"
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Lightning Fast",
                    description: "Quick turnaround with average delivery in 24-48 hours",
                    gradient: "from-yellow-500 to-orange-600",
                    hoverGradient: "hover:from-yellow-600 hover:to-orange-700"
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Proven Excellence",
                    description: "500+ successful projects delivered with 98% satisfaction",
                    gradient: "from-purple-500 to-pink-500",
                    hoverGradient: "hover:from-purple-600 hover:to-pink-600"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Secure & Confidential",
                    description: "Enterprise-grade security with end-to-end encryption",
                    gradient: "from-green-500 to-emerald-600",
                    hoverGradient: "hover:from-green-600 hover:to-emerald-700"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-r ${item.gradient} ${item.hoverGradient} text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 p-3 bg-white/20 rounded-xl w-fit group-hover:bg-white/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-2xl transition-opacity duration-300"></div>
                  </div>
                ))}
              </div> */}
              
              {/* New: Testimonial Preview */}
              {/* <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-start mb-4">
                  <div className="flex-shrink-0 mr-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-purple-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-2">"Infiw3b transformed my career! Their BA experts helped me land my dream job at a Fortune 500 company."</p>
                    <p className="text-sm font-medium text-gray-900">- Sarah K., Business Analyst</p>
                  </div>
                </div>
              </div> */}
                    
              {/* Bottom CTA */}
              {/* <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={openContactModal}
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center">
                    🚀 Start Your Transformation
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </span>
                </Button>
                <Button 
                  variant="outline"
                  className="flex-1 border-purple-200 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                >
                  <span className="flex items-center justify-center">
                    📞 Book a Consultation
                  </span>
                </Button>
              </div>
            </AnimatedSection>  */}

            <AnimatedSection animation="slide-in" className="space-y-8">
              <div>
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6 shadow-sm">
                  <Target className="w-5 h-5 text-purple-600 mr-2" />
                  <span className="text-sm font-semibold text-purple-700">Why Choose Infiw3b</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Your Success is Our
                  <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Mission
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  We don't just provide services - we partner with you to transform your career trajectory. Every solution is crafted with precision, backed by expertise, and delivered with a guarantee.
                </p>
              </div>

              {/* NEW: Transformation Journey */}
              <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <TrendingUp className="w-6 h-6 text-purple-600 mr-2" />
                  Your Transformation Journey
                </h3>
                <div className="space-y-4">
                  {[
                    { step: "1", title: "Skill Assessment", desc: "We evaluate your current expertise and goals", icon: "📊" },
                    { step: "2", title: "Custom Roadmap", desc: "Personalized learning and career path", icon: "🗺️" },
                    { step: "3", title: "Hands-on Training", desc: "Practical, real-world project experience", icon: "👨‍💻" },
                    { step: "4", title: "Career Launch", desc: "Interview prep and job placement", icon: "🚀" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start group">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <span className="text-lg">{item.icon}</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="text-xs font-semibold bg-purple-100 text-purple-800 px-2 py-1 rounded mr-2">Step {item.step}</span>
                          <h4 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: "Real-Time Assistance",
                    description: "Get instant help when you need it most with our 24/7 support team",
                    gradient: "from-blue-500 to-cyan-600",
                    hoverGradient: "hover:from-blue-600 hover:to-cyan-700"
                  },
                  {
                    icon: <Zap className="w-6 h-6" />,
                    title: "Lightning Fast",
                    description: "Quick turnaround with average delivery in 24-48 hours",
                    gradient: "from-yellow-500 to-orange-600",
                    hoverGradient: "hover:from-yellow-600 hover:to-orange-700"
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: "Proven Excellence",
                    description: "500+ successful projects delivered with 98% satisfaction",
                    gradient: "from-purple-500 to-pink-500",
                    hoverGradient: "hover:from-purple-600 hover:to-pink-600"
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: "Secure & Confidential",
                    description: "Enterprise-grade security with end-to-end encryption",
                    gradient: "from-green-500 to-emerald-600",
                    hoverGradient: "hover:from-green-600 hover:to-emerald-700"
                  }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`group relative p-6 rounded-2xl bg-gradient-to-r ${item.gradient} ${item.hoverGradient} text-white shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer overflow-hidden`}
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(white_1px,transparent_1px)] [background-size:20px_20px]"></div>
                    </div>

                    <div className="relative z-10">
                      <div className="mb-4 p-3 bg-white/20 rounded-xl w-fit group-hover:bg-white/30 transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h4 className="text-xl font-bold mb-2 group-hover:scale-105 transition-transform duration-300">
                        {item.title}
                      </h4>
                      <p className="text-sm opacity-90 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white rounded-2xl transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
              
              {/* NEW: Client Impact Stories */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-2xl border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <HeartHandshake className="w-6 h-6 text-pink-600 mr-2" />
                  Client Impact Stories
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { metric: "3.5x", desc: "Average salary increase", color: "text-green-600" },
                    { metric: "2.1x", desc: "Faster career growth", color: "text-blue-600" },
                    { metric: "89%", desc: "Job placement rate", color: "text-purple-600" },
                    { metric: "4.9/5", desc: "Client satisfaction", color: "text-yellow-600" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm text-center">
                      <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.metric}</div>
                      <div className="text-sm text-gray-600">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Button 
                    onClick={openContactModal}
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <span className="flex items-center justify-center">
                      🚀 Start Your Transformation
                      <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </span>
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 border-purple-200 bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-sm hover:shadow-md"
                  >
                    <span className="flex items-center justify-center">
                      📞 Book a Consultation
                    </span>
                  </Button>
              </div>
            </AnimatedSection>
    
            
            {/* Right Content - Domains */}
            <AnimatedSection animation="slide-in-right" className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform rotate-12">
                  <Code className="w-8 h-8 text-white" />
                </div>
                
                <div className="relative z-10">
                  <div className="mb-8">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-4">
                      <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                      <span className="text-sm font-medium text-purple-700">Technologies We Master</span>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">
                      Comprehensive
                      <span className="block text-2xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                        Domain Coverage
                      </span>
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      From cutting-edge technologies to enterprise solutions, we've got you covered across all major domains.
                    </p>
                  </div>

                  {/* Domains List */}
                  <div className="space-y-4 mb-8">
                    {[
                      { name: "Business Analyst (All Domains)", icon: "📊", popular: true },
                      { name: "Salesforce BA & QA", icon: "☁️", popular: false },
                      { name: "Full Stack Development", icon: "💻", popular: true },
                      { name: "Java (Spring Boot, Microservices)", icon: "☕", popular: true },
                      { name: "DevOps & Cloud Architecture", icon: "🚀", popular: false },
                      { name: "Power BI, Oracle DBA, .NET", icon: "📈", popular: false },
                      { name: "RPA, SAP HCM & Finance", icon: "🤖", popular: false },
                      { name: "QA Automation & Testing", icon: "🔧", popular: true },
                      { name: "Data Engineering & AI/ML", icon: "🧠", popular: true }
                    ].map((domain, index) => (
                      <div key={index} className="group flex items-center p-4 rounded-xl bg-gradient-to-r from-gray-50 to-purple-50 hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-100 hover:border-purple-200 hover:shadow-md">
                        {domain.popular && (
                          <div className="absolute -top-1 -right-1">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                              HOT
                            </div>
                          </div>
                        )}
                        
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                          <span className="text-lg">{domain.icon}</span>
                        </div>
                        
                        <div className="flex-1">
                          <span className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                            {domain.name}
                          </span>
                        </div>
                        
                        <CheckCircle className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">25+</div>
                      <div className="text-xs text-gray-600">Technologies</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-pink-600">500+</div>
                      <div className="text-xs text-gray-600">Projects</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">95%</div>
                      <div className="text-xs text-gray-600">Success Rate</div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button 
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                  >
                    <Link to="/services" className="flex items-center justify-center">
                      <span className="flex items-center">
                        View All Services
                        <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-float">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    ✓
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Guaranteed</p>
                    <p className="text-xs text-gray-500">100% Success</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-2000">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    24/7
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Support</p>
                    <p className="text-xs text-gray-500">Always Available</p>
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
