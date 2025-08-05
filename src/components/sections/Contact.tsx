import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { personalData } from '../../data/personal';

const Contact: React.FC = () => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check if URL has success parameter (from Formspree redirect)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      // Clear the URL parameter
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalData.contact.email,
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalData.contact.phone,
      href: `tel:${personalData.contact.phone}`,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalData.contact.location,
      href: '#',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section id="contact" className="section bg-gradient-to-b from-transparent to-surface/20">
      <div className="container mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-text-primary mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-responsive-lg text-text-secondary max-w-2xl mx-auto">
              Have a project in mind? Let's work together to bring your ideas to life
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-text-primary mb-6">
                  Let's start a conversation 💬
                </h3>
                <p className="text-text-secondary leading-relaxed mb-8">
                  I'm always interested in hearing about new projects and opportunities. 
                  Whether you're a company looking to hire, or you're looking for a 
                  consultant, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    variants={itemVariants}
                    className="flex items-center p-4 card-hover group"
                    target={info.href.startsWith('mailto:') || info.href.startsWith('tel:') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg mr-4 group-hover:bg-primary/20 transition-colors duration-300">
                      <info.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
                        {info.label}
                      </h4>
                      <p className="text-text-secondary text-sm">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability Status */}
              <motion.div variants={itemVariants} className="p-6 bg-surface/50 rounded-xl border border-primary/10">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium text-text-primary">Currently Available</span>
                </div>
                <p className="text-text-secondary text-sm">
                  {personalData.availability.status}
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form 
                action="https://formspree.io/f/xeozlwdw" 
                method="POST" 
                className="space-y-6"
                data-redirect="https://rkbantwal.netlify.app/#contact"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-surface border border-primary/20 rounded-lg text-text-primary placeholder-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Hidden redirect input */}
                <input type="hidden" name="_next" value="https://rkbantwal.netlify.app/#contact" />
                <input type="hidden" name="_subject" value="New Contact Form Submission - RKBantwal Portfolio" />
                
                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary py-4 text-lg font-medium rounded-xl group hover:scale-105 transition-transform duration-300"
                >
                  <Send size={20} className="mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                  Send Message
                </button>

                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-6 bg-green-500/10 border border-green-500/20 rounded-xl"
                  >
                    <div className="flex items-center space-x-3">
                      <CheckCircle size={24} className="text-green-400" />
                      <div>
                        <h4 className="text-lg font-semibold text-green-400 mb-1">
                          Thank you for contacting us!
                        </h4>
                        <p className="text-green-300 text-sm">
                          We will get back to you as soon as possible.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}

              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;