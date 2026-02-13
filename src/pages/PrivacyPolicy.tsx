import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { Shield, Lock, Eye, FileText } from "lucide-react";

import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy - Infiw3b</title>
        <meta name="description" content="Privacy Policy for Infiw3b services. Learn how we handle your data." />
      </Helmet>
      
      <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-infiw3b-50 border border-infiw3b-100 mb-6">
              <Shield className="w-4 h-4 text-infiw3b-600 mr-2" />
              <span className="text-sm font-medium text-infiw3b-700">Legal Information</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last Updated: February 13, 2026</p>
          </div>

          <div className="prose prose-indigo max-w-none text-gray-600 space-y-12 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 text-infiw3b-600 mr-3" />
                1. Information We Collect
              </h2>
              <p>
                At Infiw3b, we collect information you provide directly to us when you request a consultation, sign up for our services, or communicate with us via WhatsApp, email, or our contact forms. This may include:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Name, email address, and phone number.</li>
                <li>Professional background and technical requirements.</li>
                <li>Project details and communication history.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-infiw3b-600 mr-3" />
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide, maintain, and improve our career support and technical services.</li>
                <li>Respond to your comments, questions, and requests.</li>
                <li>Communicate with you about services, offers, and events.</li>
                <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 text-infiw3b-600 mr-3" />
                3. Data Security
              </h2>
              <p>
                We use enterprise-grade security protocols to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Third-Party Services</h2>
              <p>
                We may use third-party service providers (like EmailJS or Make.com) to facilitate our services. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 italic">
                Email: infiw3b@gmail.com<br />
                WhatsApp: +91 9433313760
              </div>
            </section>
          </div>
        </AnimatedSection>
      </div>

      
    </main>
  );
};

export default PrivacyPolicy;
