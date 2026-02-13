import { Helmet } from "react-helmet-async";
import AnimatedSection from "@/components/AnimatedSection";
import { Scale, FileCheck, AlertCircle, HelpCircle } from "lucide-react";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Terms of Service - Infiw3b</title>
        <meta name="description" content="Terms of Service for Infiw3b services. Our rules and guidelines." />
      </Helmet>
      
      <div className="pt-32 pb-20 container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-violet-50 border border-violet-100 mb-6">
              <Scale className="w-4 h-4 text-violet-600 mr-2" />
              <span className="text-sm font-medium text-violet-700">Legal Agreement</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Terms of Service</h1>
            <p className="text-lg text-gray-600">Last Updated: February 13, 2026</p>
          </div>

          <div className="prose prose-indigo max-w-none text-gray-600 space-y-12 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileCheck className="w-6 h-6 text-violet-600 mr-3" />
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the services provided by Infiw3b, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-violet-600 mr-3" />
                2. Scope of Services
              </h2>
              <p>
                Infiw3b provides technical guidance, job support, interview preparation, and software development services. 
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2 font-medium text-gray-700">
                <li>Job Support: We provide real-time guidance and mentoring. We do not perform tasks on behalf of users in a proxy capacity.</li>
                <li>Interview Guidance: Our focus is on strategic preparation and concept mastery. We do not provide proxy interview services.</li>
                <li>Software Projects: Delivery timelines and project ownership are defined in individual service quotes.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. User Responsibilities</h2>
              <p>
                Users are responsible for providing accurate information regarding their requirements. Infiw3b is not liable for any consequences resulting from inaccurate or misleading information provided by the user.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Intellectual Property</h2>
              <p>
                For custom technical projects, ownership and intellectual property rights are transferred to the client upon full payment, unless otherwise specified in the service agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <HelpCircle className="w-6 h-6 text-violet-600 mr-3" />
                5. Limitation of Liability
              </h2>
              <p>
                Infiw3b will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or the inability to use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
              </p>
            </section>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </main>
  );
};

export default TermsOfService;
