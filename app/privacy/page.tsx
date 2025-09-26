import { Metadata } from "next";
import { Shield, Eye, Lock, Database, UserCheck, Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Lagos Drivers Link",
  description:
    "Learn how Lagos Drivers Link protects your privacy and handles your personal information. Our commitment to data security and privacy protection.",
  keywords:
    "privacy policy, data protection, personal information, security, Lagos Drivers Link privacy",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      icon: <Database className="h-6 w-6" />,
      title: "Information We Collect",
      content: [
        "Personal information (name, email, phone number, address)",
        "Payment information (processed securely through third-party providers)",
        "Location data (for driver matching and route optimization)",
        "Usage data (app interactions, booking history)",
        "Device information (IP address, browser type, device identifiers)",
      ],
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "How We Use Your Information",
      content: [
        "Provide and improve our transportation services",
        "Match you with appropriate drivers",
        "Process payments and manage your account",
        "Send service updates and important notifications",
        "Analyze usage patterns to enhance user experience",
        "Comply with legal obligations and safety requirements",
      ],
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Information Sharing",
      content: [
        "We share minimal necessary information with drivers for service delivery",
        "Payment processors receive only payment-related information",
        "We may share data with law enforcement when legally required",
        "Aggregated, anonymized data may be used for business analytics",
        "We never sell your personal information to third parties",
      ],
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Data Security",
      content: [
        "Encryption of sensitive data in transit and at rest",
        "Regular security audits and vulnerability assessments",
        "Access controls and authentication measures",
        "Secure data centers with physical security measures",
        "Employee training on data protection best practices",
      ],
    },
    {
      icon: <UserCheck className="h-6 w-6" />,
      title: "Your Rights",
      content: [
        "Access your personal information we hold",
        "Correct inaccurate or incomplete data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Data portability (receive your data in a structured format)",
        "Withdraw consent for data processing where applicable",
      ],
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International Transfers",
      content: [
        "Your data is primarily processed within Nigeria",
        "Some service providers may be located outside Nigeria",
        "We ensure adequate protection for any international transfers",
        "Standard contractual clauses are used where necessary",
        "We comply with applicable data protection laws",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-20">
        <div className="w-[85%] mx-auto text-center">
          <Shield className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl mb-8 text-gray-800 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how Lagos
            Drivers Link collects, uses, and protects your personal information.
          </p>
          <p className="text-sm text-gray-700">Last updated: January 2025</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="w-[85%] mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Introduction</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                Lagos Drivers Link ("we," "our," or "us") is committed to
                protecting your privacy and personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use our transportation services,
                website, and mobile applications.
              </p>
              <p>
                By using our services, you agree to the collection and use of
                information in accordance with this policy. If you do not agree
                with our policies and practices, please do not use our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-16 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="text-yellow-500 mr-4">{section.icon}</div>
                  <h2 className="text-2xl font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="text-yellow-500 mr-3 mt-1">•</span>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16">
        <div className="w-[85%] mx-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-6">Cookies and Tracking</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  We use cookies and similar tracking technologies to enhance
                  your experience on our platform. Cookies help us remember your
                  preferences, analyze site traffic, and provide personalized
                  content.
                </p>
                <p>
                  You can control cookie settings through your browser
                  preferences. However, disabling cookies may affect the
                  functionality of our services.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Data Retention</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  We retain your personal information only as long as necessary
                  to provide our services and comply with legal obligations.
                  Account information is typically retained for the duration of
                  your account plus a reasonable period for business and legal
                  purposes.
                </p>
                <p>
                  When you delete your account, we will delete or anonymize your
                  personal information, except where we are required to retain
                  it for legal or regulatory purposes.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">Children's Privacy</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Our services are not intended for children under 18 years of
                  age. We do not knowingly collect personal information from
                  children under 18. If you are a parent or guardian and believe
                  your child has provided us with personal information, please
                  contact us.
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6">
                Changes to This Policy
              </h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will
                  notify you of any changes by posting the new Privacy Policy on
                  this page and updating the "Last updated" date.
                </p>
                <p>
                  We encourage you to review this Privacy Policy periodically
                  for any changes. Changes to this Privacy Policy are effective
                  when they are posted on this page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="w-[85%] mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
                <p className="font-semibold mb-2">Lagos Drivers Link</p>
                <p>Email: privacy@lagosdriverslink.com</p>
                <p>Phone: +234 706 620 8246</p>
                <p>Address: 24a Bashorun Okunsanya Street, Off Admiralty Way, Lekki Phase 1, Lagos</p>
                <p>Alt Address: 94 Badore Road, Ajah</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
