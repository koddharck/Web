import { motion } from 'framer-motion';
import { useTheme } from '../../ThemeContext';
import { ContactForm, FormData } from '../ContactForm';
import { useState } from 'react';
import { SocialLinks } from '../SocialLinks';

export const Contact = () => {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className={`${isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center py-20">
        <div className="max-w-6xl mx-auto px-4 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold font-ubuntu mb-6">
              Get in <span className="text-teal-500">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or a project in mind? I'd love to hear from you. Send me a message
              and I'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={`py-20 ${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 border-2 border-green-500 text-green-700 dark:text-green-300 rounded-lg text-center font-ubuntu"
                >
                  ✓ Thank you! Your message has been sent successfully.
                </motion.div>
              )}
              <ContactForm onSubmit={handleFormSubmit} />
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}>
                <h3 className="text-xl font-bold font-ubuntu text-teal-500 mb-2">Email</h3>
                <a
                  href="mailto:your-email@example.com"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors break-all"
                >
                  your-email@example.com
                </a>
              </div>

              <div className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}>
                <h3 className="text-xl font-bold font-ubuntu text-teal-500 mb-2">Phone</h3>
                <a
                  href="tel:+1234567890"
                  className="text-gray-600 dark:text-gray-300 hover:text-teal-500 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>

              <div className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}>
                <h3 className="text-xl font-bold font-ubuntu text-teal-500 mb-4">Follow Me</h3>
                <SocialLinks />
              </div>

              <div className={`p-6 rounded-lg border-2 border-teal-200 dark:border-teal-800 ${
                isDark ? 'bg-gray-900' : 'bg-white'
              }`}>
                <h3 className="text-xl font-bold font-ubuntu text-teal-500 mb-2">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  San Francisco, CA
                  <br />
                  United States
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Availability */}
      <section className={`py-20 text-center ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto px-4"
        >
          <h2 className="text-3xl font-bold font-ubuntu mb-4">
            I'm currently <span className="text-teal-500">available</span> for new projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Whether it's a full-time position, freelance project, or collaboration, let's talk!
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full font-ubuntu font-bold"
          >
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            Open for opportunities
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};
