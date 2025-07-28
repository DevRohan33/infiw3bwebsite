import { Check, Users, Award, Target, BookOpen, ShieldCheck, Sparkles, Zap, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <main>
      <Navbar/>
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 z-0"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#AA55FF_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-8">
              <Sparkles className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-semibold text-purple-700">Your Success Story Starts Here</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-tight">
              <span className="text-gray-900">About</span> {" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                Infiw3b
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering professionals worldwide with <span className="font-semibold text-purple-600">expert guidance</span>, 
              <span className="font-semibold text-pink-600"> real-time support</span>, and 
              <span className="font-semibold text-blue-600"> innovative solutions</span>
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { number: "500+", label: "Professionals Helped", icon: "👥" },
                { number: "95%", label: "Success Rate", icon: "📈" },
                { number: "24/7", label: "Support Available", icon: "🚀" }
              ].map((stat, index) => (
                <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 transform hover:scale-105 transition-all duration-300">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Our Story */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-purple-100 to-transparent rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="slide-in" className="order-2 lg:order-1">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
                <Heart className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-sm font-medium text-blue-700">Our Journey</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Transforming Careers, 
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> One Success at a Time</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Infiw3b was born from a simple yet powerful vision: to bridge the gap between ambitious professionals and their career aspirations. We recognized that many talented individuals were struggling not due to lack of skill, but due to lack of proper guidance and support.
                </p>
                <p>
                  Our founders, seasoned industry veterans, came together to create something revolutionary – a platform that doesn't just offer services, but becomes your career partner. From real-time job support to comprehensive interview preparation, we've redefined what professional assistance looks like.
                </p>
                <p>
                  Today, we're proud to have transformed the careers of over 500 professionals across the globe, maintaining an industry-leading 98% success rate while building lasting relationships with our clients.
                </p>
              </div>

              {/* Achievement Badges */}
              <div className="flex flex-wrap gap-4 mt-8">
                {[
                  { icon: "🏆", text: "Industry Leader" },
                  { icon: "🌟", text: "98% Success Rate" },
                  { icon: "🤝", text: "Trusted Partner" }
                ].map((badge, index) => (
                  <div key={index} className="flex items-center bg-gradient-to-r from-purple-50 to-blue-50 px-4 py-2 rounded-full border border-purple-200">
                    <span className="mr-2 text-lg">{badge.icon}</span>
                    <span className="text-sm font-semibold text-purple-700">{badge.text}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-in-right" className="order-1 lg:order-2">
              <div className="relative">
                {/* Main Card */}
                <div className="bg-gradient-to-br from-white to-purple-50 p-10 rounded-3xl shadow-2xl border border-purple-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-10 transform translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="relative space-y-8">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4">
                        🎯
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Mission</h3>
                      <p className="text-gray-600">
                        Empowering professionals through expert guidance, innovative solutions, and unwavering support.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-green-400 to-green-500 flex items-center justify-center text-white mb-3">
                          <Zap className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Innovation</h4>
                        <p className="text-sm text-gray-600">Cutting-edge solutions</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-blue-400 to-blue-500 flex items-center justify-center text-white mb-3">
                          <ShieldCheck className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Trust</h4>
                        <p className="text-sm text-gray-600">Reliable partnership</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-purple-400 to-purple-500 flex items-center justify-center text-white mb-3">
                          <Award className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Excellence</h4>
                        <p className="text-sm text-gray-600">Superior quality</p>
                      </div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-gradient-to-r from-pink-400 to-pink-500 flex items-center justify-center text-white mb-3">
                          <Users className="w-6 h-6" />
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-1">Community</h4>
                        <p className="text-sm text-gray-600">Together we grow</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl shadow-lg p-4 animate-float border border-purple-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      ✓
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">Proven Results</p>
                      <p className="text-xs text-gray-500">500+ Success Stories</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-2000 border border-purple-100">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                      🚀
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">24/7 Support</p>
                      <p className="text-xs text-gray-500">Always Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Why Choose Us */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 mb-6">
              <Target className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Why We're Different</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Why Choose 
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"> Infiw3b?</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're not just another service provider – we're your career transformation partner, committed to your success with innovative approaches and unwavering support.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: "Real-Time Expert Support",
                description: "Connect instantly with industry veterans who understand your challenges and provide actionable solutions.",
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
                delay: 100
              },
              {
                icon: Target,
                title: "Transparent Pricing",
                description: "Premium quality services at competitive rates with no hidden fees – just honest, upfront pricing.",
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
                delay: 200
              },
              {
                icon: Award,
                title: "Proven Track Record",
                description: "Join 500+ professionals who've accelerated their careers with our 98% success rate.",
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
                delay: 300
              },
              {
                icon: ShieldCheck,
                title: "Secure & Confidential",
                description: "Your career data and personal information are protected with enterprise-grade security protocols.",
                gradient: "from-pink-500 to-pink-600",
                bgGradient: "from-pink-50 to-pink-100",
                delay: 400
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={feature.delay}>
                <div className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Our Approach */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
              <BookOpen className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Our Methodology</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strategic Approach</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              A proven 3-step methodology that transforms challenges into opportunities and goals into achievements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Lines */}
            <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 transform -translate-y-1/2"></div>
            <div className="hidden md:block absolute top-1/2 right-1/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform -translate-y-1/2"></div>

            {[
              {
                step: "01",
                title: "Deep Discovery",
                description: "We dive deep into understanding your unique situation, challenges, and aspirations through comprehensive consultation.",
                features: ["Personalized assessment", "Goal alignment", "Challenge mapping"],
                gradient: "from-purple-500 to-purple-600",
                bgGradient: "from-purple-50 to-purple-100",
                delay: 100
              },
              {
                step: "02", 
                title: "Custom Strategy",
                description: "We craft a tailored action plan with expert matching and resource preparation specifically designed for your success.",
                features: ["Tailored solutions", "Expert assignment", "Resource curation"],
                gradient: "from-blue-500 to-blue-600",
                bgGradient: "from-blue-50 to-blue-100",
                delay: 200
              },
              {
                step: "03",
                title: "Excellence Delivery",
                description: "We execute with precision and provide continuous support, ensuring your success every step of the way.",
                features: ["Timely execution", "Ongoing guidance", "Success tracking"],
                gradient: "from-green-500 to-green-600",
                bgGradient: "from-green-50 to-green-100",
                delay: 300
              }
            ].map((approach, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={approach.delay}>
                <div className="group relative bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Step Number */}
                  <div className={`absolute -top-4 left-8 w-12 h-12 rounded-full bg-gradient-to-r ${approach.gradient} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {approach.step}
                  </div>
                  
                  <div className="pt-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{approach.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{approach.description}</p>
                    
                    <ul className="space-y-3">
                      {approach.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${approach.gradient} mr-3`}></div>
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${approach.bgGradient} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:40px_40px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-6">
              <Users className="w-4 h-4 text-purple-600 mr-2" />
              <span className="text-sm font-medium text-purple-700">Meet the Experts</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Our 
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Industry veterans and technology leaders dedicated to your success, bringing decades of combined experience to accelerate your career.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul Sharma",
                role: "Senior Technical Lead",
                experience: "10+ years",
                expertise: "Java, Spring Boot, AWS, Cloud Architecture",
                description: "Expert in enterprise solutions and scalable system design, helping professionals master complex technical challenges.",
                gradient: "from-blue-500 to-blue-600",
                initials: "RS",
                delay: 100
              },
              {
                name: "Anjali Patel",
                role: "Business Analyst Expert",
                experience: "8+ years", 
                expertise: "Salesforce BA, QA, Requirements Analysis",
                description: "Specialized in bridging business needs with technical solutions, ensuring project success and stakeholder satisfaction.",
                gradient: "from-purple-500 to-purple-600",
                initials: "AP",
                delay: 200
              },
              {
                name: "Vikram Kumar",
                role: "Full Stack Developer",
                experience: "7+ years",
                expertise: "React, Node.js, Python, DevOps",
                description: "Full-stack expert passionate about modern web technologies and mentoring the next generation of developers.",
                gradient: "from-green-500 to-green-600",
                initials: "VK",
                delay: 300
              }
            ].map((member, index) => (
              <AnimatedSection key={index} animation="fade-in-up" delay={member.delay}>
                <div className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-100 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  {/* Profile Image */}
                  <div className="relative mb-6">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${member.gradient} flex items-center justify-center text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {member.initials}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    </div>
                  </div>

                  {/* Member Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className={`text-transparent bg-gradient-to-r ${member.gradient} bg-clip-text font-semibold mb-2`}>
                      {member.role}
                    </p>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-sm font-medium mb-4">
                      <Award className="w-3 h-3 mr-1" />
                      {member.experience}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-center mb-6 leading-relaxed">
                    {member.description}
                  </p>

                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.split(', ').map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-purple-600 via-blue-700 to-purple-800 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:50px_50px]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8">
              <Sparkles className="w-4 h-4 text-white mr-2" />
              <span className="text-sm font-medium text-white">Ready to Transform Your Career?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Start Your Success Journey
              <span className="block text-transparent bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text">
                Today
              </span>
            </h2>
            
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
                            Join hundreds of professionals who've accelerated their careers with Infiw3b’s expert-led support and innovative solutions. Your transformation starts now.
            </p>

            <Button asChild size="lg" className="text-lg px-8 py-4">
              <Link to="/contact">Get Started</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default About;
