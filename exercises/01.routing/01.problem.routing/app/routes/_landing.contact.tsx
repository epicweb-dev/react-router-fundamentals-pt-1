import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      detail: 'hello@solestyle.com',
      description: 'We respond within 24 hours',
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      detail: '+1 (555) 123-4567',
      description: 'Monday to Friday, 9am to 6pm PST',
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Store',
      detail: '123 Fashion District, Los Angeles, CA 90015',
      description: 'Visit our flagship store',
    },
  ];

  const subjects = [
    'General Inquiry',
    'Order Support',
    'Returns & Exchanges',
    'Product Information',
    'Partnership Opportunities',
    'Other',
  ];

  return (
    <div className="bg-stone-50 dark:bg-gray-900">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-stone-50 via-amber-50/30 to-stone-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-extralight text-gray-900 dark:text-white mb-8 tracking-tight">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Have questions about our products, need help with an order, or want to share feedback?
            We'd love to hear from you and help you find your perfect pair.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-32 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-10 tracking-tight">
                Contact Information
              </h2>
              <div className="space-y-10">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start group">
                    <div className="flex-shrink-0 w-14 h-14 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="text-amber-600 dark:text-amber-500">
                        {info.icon}
                      </div>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-xl font-light text-gray-900 dark:text-white tracking-wide">
                        {info.title}
                      </h3>
                      <p className="text-amber-600 dark:text-amber-500 font-light mb-2 tracking-wide">
                        {info.detail}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 font-light">
                        {info.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-stone-50 dark:bg-gray-800">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 text-amber-600 dark:text-amber-500 mr-3" />
                  <h3 className="text-xl font-light text-gray-900 dark:text-white tracking-wide">
                    Store Hours
                  </h3>
                </div>
                <div className="space-y-2 text-gray-600 dark:text-gray-300 font-light">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>10am - 8pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10am - 6pm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>12pm - 5pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-stone-50 dark:bg-gray-800 p-12">
                <h2 className="text-3xl font-extralight text-gray-900 dark:text-white mb-10 tracking-tight">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-16">
                    <CheckCircle className="w-20 h-20 text-amber-600 dark:text-amber-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-light text-gray-900 dark:text-white mb-4 tracking-wide">
                      Message Sent Successfully
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-gray-600 focus:ring-0 focus:border-amber-600 dark:focus:border-amber-500 bg-transparent text-gray-900 dark:text-white font-light text-lg transition-colors duration-300"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-gray-600 focus:ring-0 focus:border-amber-600 dark:focus:border-amber-500 bg-transparent text-gray-900 dark:text-white font-light text-lg transition-colors duration-300"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide uppercase">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-gray-600 focus:ring-0 focus:border-amber-600 dark:focus:border-amber-500 bg-transparent text-gray-900 dark:text-white font-light text-lg transition-colors duration-300"
                      >
                        <option value="">Select a subject</option>
                        {subjects.map((subject, index) => (
                          <option key={index} value={subject} className="bg-white dark:bg-gray-800">
                            {subject}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-light text-gray-700 dark:text-gray-300 mb-3 tracking-wide uppercase">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full px-0 py-4 border-0 border-b border-gray-300 dark:border-gray-600 focus:ring-0 focus:border-amber-600 dark:focus:border-amber-500 bg-transparent text-gray-900 dark:text-white font-light text-lg transition-colors duration-300 resize-none"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>
                    <div className="pt-8">
                      <button
                        type="submit"
                        className="group bg-amber-600 hover:bg-amber-700 text-white px-12 py-5 text-lg font-light tracking-wide transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-amber-600/25"
                      >
                        Send Message
                        <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-stone-50 dark:bg-gray-800 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extralight text-gray-900 dark:text-white mb-6 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              Quick answers to common questions about our products and services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                What is your return policy?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                We offer a 30-day return policy for unworn items in original packaging.
                Returns are free and easy through our online portal.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Do you offer international shipping?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Yes, we ship worldwide! International shipping rates and delivery times
                vary by location and are calculated at checkout.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                How do I find my size?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Each product page includes a detailed size guide. We also offer virtual
                fitting consultations to help you find the perfect fit.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                Are your shoes authentic?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 font-light">
                Absolutely! We work directly with authorized retailers and brands to
                ensure 100% authenticity of all products we sell.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};