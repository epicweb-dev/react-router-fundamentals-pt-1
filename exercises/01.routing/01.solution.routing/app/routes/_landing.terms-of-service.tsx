import { Shield, Mail } from 'lucide-react';

export default function TOSPage() {
  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-8">
            <Shield className="w-16 h-16 text-amber-600 dark:text-amber-500" />
          </div>
          <h1 className="text-5xl sm:text-6xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
            Terms of Service
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
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                By accessing and using EpicStore's services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not
                use this service.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                2. Use License
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                Permission is granted to temporarily download one copy of the materials on EpicStore's
                website for personal, non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 mb-6 space-y-3 font-light text-lg">
                <li>modify or copy the materials</li>
                <li>use the materials for any commercial purpose or for any public display</li>
                <li>attempt to reverse engineer any software contained on EpicStore's website</li>
                <li>remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                3. Service Availability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                EpicStore strives to provide continuous service availability. However, we do not guarantee
                that our services will be available at all times. We may suspend or discontinue services
                for maintenance, upgrades, or other operational reasons.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                4. User Accounts
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                When you create an account with us, you must provide information that is accurate, complete,
                and current at all times. You are responsible for safeguarding the password and for all
                activities that occur under your account.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                5. Payment Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                Payment for our services is due according to the billing cycle selected at the time of
                subscription. Failure to pay may result in suspension or termination of service.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                6. Data Protection
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                We are committed to protecting your data. We implement appropriate technical and
                organizational measures to ensure a level of security appropriate to the risk.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                7. Limitation of Liability
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                In no event shall EpicStore or its suppliers be liable for any damages (including, without
                limitation, damages for loss of data or profit, or due to business interruption) arising
                out of the use or inability to use the materials on EpicStore's website.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                8. Termination
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                We may terminate or suspend your account and bar access to the service immediately,
                without prior notice or liability, under our sole discretion, for any reason whatsoever
                including but not limited to a breach of the Terms.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                9. Changes to Terms
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                EpicStore may revise these terms of service at any time without notice. By using this
                website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-light text-gray-900 dark:text-white mb-6 tracking-tight">
                10. Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 font-light leading-relaxed text-lg">
                If you have any questions about these Terms of Service, please contact us at:
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