import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageSquare,
  Send,
  Sparkles,
  Globe,
  Headphones,
  Calendar,
  CheckCircle
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  // 1️⃣ Prepare form data
  const payload = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "Not provided",
    subject: formData.subject,
    message: formData.message,
    timestamp: new Date().toISOString(),
    source: "Website Contact Form",
  };

  try {
    // 2️⃣ Send to Make.com Webhook
    const webhookRes = await fetch("https://hook.eu2.make.com/cp7p2iajr7f7unun3ambaszlsev7nklt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!webhookRes.ok) {
      console.warn("Webhook failed:", webhookRes.status);
    }

    // 3️⃣ Send Email via EmailJS
    const emailResponse = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        service_id: "service_ikvd2i9",
        template_id: "template_mefgdbt",
        user_id: "HjF3fuiabYfwDwVIo",
        template_params: {
          to_name: "Admin",
          from_name: formData.name,
          reply_to: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
      }),
    });

    if (emailResponse.ok) {
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } else {
      throw new Error("Failed to send email via EmailJS");
    }
  } catch (error) {
    console.error("Submission error:", error);
    toast.error("Failed to send message. Please try again later.");
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <main>
      <Navbar/>
      
      {/* Enhanced Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 z-0"></div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#6366F1_1px,transparent_1px)] [background-size:50px_50px]"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <div className="text-center lg:text-left">
                <AnimatedSection animation="fade-in-up">
                  {/* Badge */}
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
                    <MessageSquare className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="text-sm font-medium text-blue-700">Let's Connect</span>
                  </div>

                  {/* Main Heading */}
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                    <span className="text-gray-900">Get in</span>
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                      Touch
                    </span>
                    <br />
                    <span className="relative text-4xl md:text-5xl lg:text-6xl text-gray-900">
                      with Infiw3b
                      <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full transform scale-x-0 animate-scale-x"></div>
                    </span>
                  </h1>

                  {/* Subtitle */}
                  <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                    Ready to accelerate your career? Our expert team is here to provide 
                    <span className="font-semibold text-blue-600"> personalized support</span> and 
                    <span className="font-semibold text-purple-600"> innovative solutions</span>.
                  </p>

                  {/* Quick Stats */}
                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
                    {[
                      { icon: "⚡", text: "24hr Response" },
                      { icon: "🎯", text: "Expert Team" },
                      { icon: "✅", text: "500+ Helped" }
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
                      asChild
                      className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      <a href="https://wa.me/919433313760" target="_blank" rel="noopener noreferrer">
                        <span className="relative z-10 flex items-center">
                          📱 WhatsApp Now
                          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </a>
                    </Button>
                    
                    <Button 
                      asChild
                      variant="outline"
                      className="border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-4 h-auto rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/50"
                    >
                      <a href="mailto:infiw3b@gmail.com" className="flex items-center">
                        📧 Send Email
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </a>
                    </Button>
                  </div>
                </AnimatedSection>
              </div>

              {/* Right Visual */}
              <div className="relative lg:block hidden">
                <AnimatedSection animation="slide-in-right">
                  {/* Main Contact Card */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-gray-100">
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl flex items-center justify-center text-2xl animate-bounce">
                      💬
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Contact</h3>
                    
                    {/* Contact Options */}
                    <div className="space-y-6">
                      {[
                        { 
                          icon: Phone, 
                          title: "Call/WhatsApp", 
                          value: "+91 9433313760", 
                          link: "https://wa.me/919433313760",
                          color: "from-green-400 to-green-600",
                          bgColor: "from-green-50 to-green-100"
                        },
                        { 
                          icon: Mail, 
                          title: "Email Us", 
                          value: "infiw3b@gmail.com", 
                          link: "mailto:infiw3b@gmail.com",
                          color: "from-blue-400 to-blue-600",
                          bgColor: "from-blue-50 to-blue-100"
                        },
                        { 
                          icon: Clock, 
                          title: "Response Time", 
                          value: "Within 24 hours", 
                          color: "from-purple-400 to-purple-600",
                          bgColor: "from-purple-50 to-purple-100"
                        }
                      ].map((contact, index) => (
                        <div key={index} className="group flex items-center p-4 rounded-2xl transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-gray-200">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                            <contact.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                            {contact.link ? (
                              <a href={contact.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600 transition-colors">
                                {contact.value}
                              </a>
                            ) : (
                              <p className="text-gray-600">{contact.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-lg p-4 animate-float border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        🟢
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Online Now</p>
                        <p className="text-xs text-gray-500">Ready to Help</p>
                      </div>
                    </div>
                  </div>

                  <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl shadow-lg p-4 animate-float animation-delay-2000 border border-gray-100">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        ⚡
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">Fast Response</p>
                        <p className="text-xs text-gray-500"> 24 Hours</p>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Form Section */}
      <section className="py-20 md:py-28 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full opacity-30 transform translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Enhanced Contact Information */}
            <AnimatedSection animation="fade-in-up" className="space-y-8">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
                  <Headphones className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-blue-700">Contact Information</span>
                </div>
                
                <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Multiple Ways to 
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Reach Us</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Choose your preferred communication method. Our dedicated team typically responds 
                  within 24 hours during business days, ensuring you get the support you need quickly.
                </p>
              </div>

              <div className="space-y-6">
                {[
                  {
                    icon: Phone,
                    title: "Phone / WhatsApp",
                    description: "Instant support via call or chat",
                    contact: "+91 9433313760",
                    link: "https://wa.me/919433313760",
                    gradient: "from-green-500 to-green-600",
                    bgGradient: "from-green-50 to-green-100"
                  },
                  {
                    icon: Mail,
                    title: "Email Support",
                    description: "Detailed queries and project discussions",
                    contact: "infiw3b@gmail.com",
                    link: "mailto:infiw3b@gmail.com",
                    gradient: "from-blue-500 to-blue-600",
                    bgGradient: "from-blue-50 to-blue-100"
                  },
                  {
                    icon: Clock,
                    title: "Business Hours",
                    description: "When our team is most responsive",
                    contact: "Mon-Fri: 9AM-6PM IST\nSat: 10AM-3PM IST",
                    gradient: "from-purple-500 to-purple-600",
                    bgGradient: "from-purple-50 to-purple-100"
                  },
                  {
                    icon: MapPin,
                    title: "Location",
                    description: "Based in the heart of India",
                    contact: "Kolkata, West Bengal, India",
                    gradient: "from-pink-500 to-pink-600",
                    bgGradient: "from-pink-50 to-pink-100"
                  }
                ].map((info, index) => (
                  <div key={index} className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                    <div className="flex items-start">
                      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-r ${info.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        <info.icon className="w-7 h-7" />
                      </div>
                      <div className="ml-5 flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{info.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{info.description}</p>
                        <div className="text-gray-800 font-medium">
                          {info.link ? (
                            <a 
                              href={info.link} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              className="hover:text-blue-600 transition-colors duration-300 hover:underline"
                            >
                              {info.contact}
                            </a>
                          ) : (
                            <span className="whitespace-pre-line">{info.contact}</span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    {/* Hover Effect Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${info.bgGradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}></div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Need Immediate Help?</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    asChild
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="https://wa.me/919433313760" target="_blank" rel="noopener noreferrer">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="flex-1 border-2 border-blue-300 text-blue-700 hover:bg-blue-50 font-semibold py-3 rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <a href="mailto:infiw3b@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            {/* Enhanced Contact Form */}
            <AnimatedSection animation="fade-in-up" delay={200}>
              <div className="relative">
                {/* Form Container */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl p-8 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-5 transform translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="relative">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-4">
                        <Send className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-sm font-medium text-purple-700">Send us a Message</span>
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900 mb-2">Let's Start the Conversation</h2>
                      <p className="text-gray-600">Tell us about your needs and we'll get back to you with a personalized solution.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full p-4 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl transition-colors duration-300 bg-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                            className="w-full p-4 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl transition-colors duration-300 bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+91 1234567890"
                            className="w-full p-4 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl transition-colors duration-300 bg-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                            placeholder="How can we help you?"
                            className="w-full p-4 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl transition-colors duration-300 bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Your Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          placeholder="Please describe your requirements in detail..."
                          className="w-full p-4 border-2 border-gray-200 focus:border-blue-500 focus:ring-0 rounded-xl transition-colors duration-300 min-h-[150px] bg-white resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Sending...
                          </span>
                        ) : (
                          <span className="flex items-center justify-center">
                            Send Message
                            <Send className="ml-2 h-5 w-5" />
                          </span>
                        )}
                      </Button>

                      {/* Form Footer */}
                      <div className="text-center pt-4">
                        <div className="flex items-center justify-center text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          We'll respond within 24 hours
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced Map Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:30px_30px]"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 mb-6">
              <Globe className="w-4 h-4 text-blue-600 mr-2" />
              <span className="text-sm font-medium text-blue-700">Our Location</span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Find Us in 
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Kolkata</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Located in the cultural capital of India, we serve clients globally while being rooted in local expertise.
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up" delay={200}>
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="p-8">
                <div className="aspect-w-16 aspect-h-10 rounded-2xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0163961185696!2d88.3574154153438!3d22.57578598518082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a6a1a9a9a5%3A0x3a0277a6a1a9a9a5!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                    width="100%"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    className="rounded-2xl"
                  ></iframe>
                </div>
              </div>
              
                           {/* Map Footer */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 text-center">
                <p className="text-gray-700 text-sm">
                  Visit us in person or get in touch online — we're always ready to help.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
};

export default ContactPage;
