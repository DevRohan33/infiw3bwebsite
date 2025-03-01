
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
import { MessageSquare, Phone, Send } from "lucide-react";

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
          service_id: "service_ikvd2i9", // Replace with your actual service ID
          template_id: "template_mefgdbt", // Replace with your actual template ID
          user_id: "HjF3fuiabYfwDwVIo", // Replace with your actual user ID
          template_params: templateParams,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully! We'll get back to you soon.");
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

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">Book a Free Consultation</DialogTitle>
          <DialogDescription className="text-gray-600">
            Fill out the form below and we'll get back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid grid-cols-1 gap-6 py-4">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full p-3 border-gray-300 focus:ring-infiw3b-500 focus:border-infiw3b-500"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 border-gray-300 focus:ring-infiw3b-500 focus:border-infiw3b-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 1234567890"
                  className="w-full p-3 border-gray-300 focus:ring-infiw3b-500 focus:border-infiw3b-500"
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you?"
                  className="w-full p-3 border-gray-300 focus:ring-infiw3b-500 focus:border-infiw3b-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Please describe your requirements..."
                className="w-full p-3 border-gray-300 focus:ring-infiw3b-500 focus:border-infiw3b-500 min-h-[120px]"
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-infiw3b-600 hover:bg-infiw3b-700 text-white font-medium px-6 py-3 h-auto rounded-md transition-all duration-300"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </form>
          
          <div className="border-t pt-4 mt-4">
            <h3 className="text-lg font-medium text-gray-900 mb-3">Contact us directly</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-infiw3b-600 mr-2" />
                <a href="https://wa.me/917499551870" target="_blank" rel="noopener noreferrer" className="text-infiw3b-600 hover:underline">
                  WhatsApp: +91 7499551870
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-infiw3b-600 mr-2" />
                <a href="https://wa.me/919433313760" target="_blank" rel="noopener noreferrer" className="text-infiw3b-600 hover:underline">
                  WhatsApp: +91 9433313760
                </a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-5 w-5 text-infiw3b-600 mr-2" />
                <a href="mailto:infiw3b@yahoo.com" className="text-infiw3b-600 hover:underline">
                  Email: infiw3b@yahoo.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactFormModal;
