import { FileText, Mail } from 'lucide-react';

export default function TOUPage() {
  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <FileText className="w-16 h-16 text-amber-600 dark:text-amber-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Last updated: January 1, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                1. Acceptance and Agreement
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                These Terms of Use ("Terms") govern your use of EpicStore's website, products, and services
                (collectively, the "Service"). By accessing or using our Service, you agree to be bound by
                these Terms.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                2. Acceptable Use
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                You agree to use our Service only for lawful purposes and in accordance with these Terms.
                You agree not to use the Service:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-3 font-light text-lg">
                <li>In any way that violates applicable federal, state, local, or international law</li>
                <li>To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service</li>
                <li>To impersonate or attempt to impersonate EpicStore or any employee, agent, or affiliate</li>
                <li>To engage in any automated use of the system without our express written permission</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                3. User Content
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                Our Service may allow you to post, link, store, share and otherwise make available certain
                information, text, graphics, videos, or other material ("Content"). You are responsible for
                the Content that you post to the Service.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                By posting Content to the Service, you grant us the right and license to use, modify,
                publicly perform, publicly display, reproduce, and distribute such Content on and through
                the Service.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                4. Privacy Policy
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and
                protect information when you use our Service. By using our Service, you agree to the
                collection and use of information in accordance with our Privacy Policy.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                5. Intellectual Property Rights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                The Service and its original content, features, and functionality are and will remain the
                exclusive property of EpicStore and its licensors. The Service is protected by copyright,
                trademark, and other laws.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                6. Prohibited Uses
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                You may not use our Service for any unlawful purpose or to solicit others to perform
                unlawful acts. You may not violate any laws in your jurisdiction including but not limited
                to copyright laws.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                7. Service Modifications
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                We reserve the right to modify or discontinue, temporarily or permanently, the Service
                (or any part thereof) with or without notice. We shall not be liable to you or any third
                party for any modification, suspension, or discontinuance of the Service.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                8. Disclaimer
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                The information on this website is provided on an "as is" basis. To the fullest extent
                permitted by law, EpicStore excludes all representations, warranties, conditions, and other
                terms which might otherwise be implied by statute, common law, or the law of equity.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                9. Governing Law
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                These Terms shall be interpreted and governed by the laws of the State of California,
                without regard to its conflict of law provisions. Our failure to enforce any right or
                provision of these Terms will not be considered a waiver of those rights.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                10. Contact Us
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                If you have any questions about these Terms of Use, please contact us:
              </p>
              <div className="bg-stone-50 dark:bg-gray-800 p-8 border-l-4 border-amber-600 dark:border-amber-500">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-1" />
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      <strong className="font-medium">Email:</strong> legal@epic-store.com<br />
                      <strong className="font-medium">Phone:</strong> +1 (555) 123-4567<br />
                      <strong className="font-medium">Address:</strong> 123 Design District, San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};