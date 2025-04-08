export default function TermsAndConditions() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Terms and Conditions
        </h1>
        <p className="mb-6">
          Welcome to <strong>Vedavarsity</strong>! Please read these Terms and Conditions carefully before using our website, services, or mobile application operated by Vedavarsity.
        </p>
        <p className="mb-6">
          By accessing or using any part of our Service, you agree to be bound by these Terms. If you do not agree with any part of the Terms, you may not access the Service.
        </p>

        <TermsSection
          title="1. Eligibility"
          content={[
            "Be at least 18 years old or have the consent of a parent or guardian.",
            "Have the legal capacity to enter into a binding contract.",
            "Provide accurate and complete registration information when creating an account.",
          ]}
        />

        <TermsSection
          title="2. User Accounts"
          content={[
            "You are responsible for maintaining the confidentiality of your login credentials.",
            "You agree to notify us immediately of any unauthorized use of your account.",
            "You may not use another person's account without permission.",
          ]}
        />

        <TermsSection
          title="3. Courses and Services"
          content={[
            "Vedavarsity provides access to various online courses, workshops, webinars, and study materials.",
            "We reserve the right to add, modify, or remove any content or features at our sole discretion.",
            "We do not guarantee specific outcomes or success through the completion of any course.",
          ]}
        />

        <TermsSection
          title="4. Payments and Refunds"
          content={[
            "All prices are displayed in Rupees and may include applicable taxes.",
            "Payments are processed through secure third-party payment gateways.",
            "Refund requests must be made within 7 days of purchase, provided the course has not been accessed or downloaded.",
            "Subscription plans (if any) may auto-renew unless canceled before the billing cycle.",
          ]}
        />

        <TermsSection
          title="5. Prohibited Activities"
          content={[
            "Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Service without express written permission.",
            "Upload or transmit malicious code or content that could compromise the platform.",
            "Use the platform for any unlawful purpose or violate local, state, or international laws.",
          ]}
        />

        <TermsSection
          title="6. Intellectual Property"
          content={[
            "All content, including but not limited to text, graphics, logos, images, videos, and software, is the property of Vedavarsity or its content suppliers and is protected by copyright, trademark, and other intellectual property laws.",
            "You may use the content for personal, non-commercial use only.",
          ]}
        />

        <TermsSection
          title="7. Privacy"
          content={[
            "Your use of our Service is also governed by our Privacy Policy. Please review it to understand how we collect, use, and protect your data.",
          ]}
        />

        <TermsSection
          title="8. Limitation of Liability"
          content={[
            "To the fullest extent permitted by applicable law:",
            "Vedavarsity shall not be liable for any indirect, incidental, special, consequential, or punitive damages.",
            "We are not liable for any damages or losses resulting from your use or inability to use our Service.",
          ]}
        />

        <TermsSection
          title="9. Termination"
          content={[
            "We reserve the right to:",
            "Suspend or terminate your access to the Service at any time without notice or liability if you violate these Terms.",
            "Delete your account and associated data if you remain inactive for an extended period.",
          ]}
        />

        <TermsSection
          title="10. Modifications to Terms"
          content={[
            "We may update these Terms from time to time. Significant changes will be communicated via email or website notice.",
            "Continued use of the Service constitutes acceptance of the updated Terms.",
          ]}
        />

        <TermsSection
          title="11. Governing Law"
          content={[
            "These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.",
          ]}
        />

        <TermsSection
          title="12. Contact Us"
          content={[
            "For questions or concerns regarding these Terms, please contact us at:",
            "Vedavarsity",
            "Email: info@vedavarsity.com",
            "Phone: 91 96349 98911",
          ]}
        />
      </div>
    </div>
  );
}

function TermsSection({ title, content }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <ul className="list-disc list-inside space-y-1 text-gray-700">
        {content.map((line, index) => (
          <li key={index}>{line}</li>
        ))}
      </ul>
    </div>
  );
}
