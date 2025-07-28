import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Dialog,
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter
} from "@/components/ui/dialog";
import { MessageSquare, Phone, Send, Calendar, Zap, CheckCircle } from "lucide-react";

interface ContactFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactFormModal = ({ isOpen, onClose }: ContactFormModalProps) => {
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

    try {
      // Email sending implementation using EmailJS
      const templateParams = {
        to_name: "Admin",
        from_name: formData.name,
        reply_to: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_ikvd2i9",
          template_id: "template_mefgdbt",
          user_id: "HjF3fuiabYfwDwVIo", 
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        toast.success("🎉 Message sent successfully! We'll get back to you within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        onClose();
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Hi! I'm interested in your services and would like to book a consultation. 

    Name: ${formData.name || '[Your Name]'}
    Email: ${formData.email || '[Your Email]'}
    Phone: ${formData.phone || '[Your Phone]'}
    Subject: ${formData.subject || '[Service Interest]'}
    Message: ${formData.message || '[Your Requirements]'}

    Please let me know your availability!`);

    window.open(`https://wa.me/919433313760?text=${message}`, '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[95vh] overflow-y-auto bg-gradient-to-br from-white via-blue-50/30 to-green-50/30 border-0 shadow-2xl">
        <DialogHeader className="text-center pb-6">
          <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-full flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-white" />
          </div>
          <DialogTitle className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent ">
            Book Your Free Consultation
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-lg">
            Get expert advice tailored to your needs. Fill the form below or connect instantly via WhatsApp!
          </DialogDescription>
          
          {/* Benefits Section */}
          <div className="grid grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Quick Response</p>
              <p className="text-xs text-gray-500">Within 24 hours</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Free Consultation</p>
              <p className="text-xs text-gray-500">No hidden charges</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-sm font-medium text-gray-700">Expert Advice</p>
              <p className="text-xs text-gray-500">Personalized solutions</p>
            </div>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* WhatsApp CTA Section */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-2xl p-6 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 transform rotate-12 translate-x-8 -translate-y-8">
              <div className="w-full h-full bg-white/10 rounded-full"></div>
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <MessageSquare className="w-6 h-6 mr-2" />
                Prefer WhatsApp? Connect Instantly!
              </h3>
              <p className="text-green-100 mb-4">Get immediate responses and book your consultation in just one click</p>
              <div className="flex justify-center">
                <Button
                  onClick={handleWhatsAppClick}
                  className="bg-white text-green-600 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
                >
                  <img src="/whatsaplogo.png" alt="WhatsApp" className="w-8 h-8 mr-1" />
                  Chat on WhatsApp Now
                </Button>
              </div>

            </div>
          </div>

          {/* Form Section */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center text-gray-500">
                <div className="h-px bg-gray-300 flex-1"></div>
                <span className="mx-4 text-sm font-medium">OR FILL THE FORM BELOW</span>
                <div className="h-px bg-gray-300 flex-1"></div>
              </div>
            </div>

            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
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
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 1234567890"
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Service Interest *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Web Development, Design, SEO..."
                    className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Your Requirements *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please describe your project requirements, timeline, and budget..."
                  className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent min-h-[120px] transition-all duration-300"
                />
              </div>

              <DialogFooter className="pt-4">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    handleSubmit(e as any);
                  }}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-4 h-auto rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message & Book Consultation
                      <Send className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </DialogFooter>
            </div>
          </div>
          
          {/* Direct Contact Section */}
          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a 
                href="https://wa.me/919433313760" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <MessageSquare className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-sm opacity-90">+91 9433313760</div>
                </div>
              </a>
              <a 
                href="mailto:infiw3b@gmail.com" 
                className="flex items-center justify-center p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Phone className="h-5 w-5 mr-3" />
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-sm opacity-90">infiw3b@gmail.com</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;