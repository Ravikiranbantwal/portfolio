import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, MapPin, Phone, Mail, Clock, Github, Linkedin, Twitter } from 'lucide-react';
import toast from 'react-hot-toast';
import { Scene } from '@/components/3d/Scene';
import { personalInfo } from '@/data/portfolio';
import { ContactFormData } from '@/types';
import { cn } from '@/utils';

const ContactSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
    company: '',
    phone: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        company: '',
        phone: '',
      });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const socialIcons = {
    Github,
    LinkedIn: Linkedin,
    Twitter,
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900 to-dark-950 overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 opacity-30">
        <Scene
          enableControls={false}
          enableEffects={true}
          cameraPosition={[0, 0, 12]}
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900/80 via-transparent to-dark-950/90" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Let's <span className="gradient-text-primary">Connect</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Ready to bring your ideas to life? I'm always excited to discuss new projects, 
              creative collaborations, or just have a friendly chat about technology and design.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="Your company"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-dark-300 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-dark-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-dark-800/50 border border-dark-700 rounded-lg text-white placeholder-dark-400 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project or idea..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center space-x-3",
                      isSubmitting && "opacity-50 cursor-not-allowed"
                    )}
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="loading-dots">
                          <div className="loading-dot bg-white"></div>
                          <div className="loading-dot bg-white"></div>
                          <div className="loading-dot bg-white"></div>
                        </div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quick Contact */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                      <Mail size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <a 
                        href={`mailto:${personalInfo.contact.email}`}
                        className="text-dark-300 hover:text-primary-400 transition-colors"
                      >
                        {personalInfo.contact.email}
                      </a>
                    </div>
                  </div>

                  {personalInfo.contact.phone && (
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-accent-500/20 rounded-xl flex items-center justify-center">
                        <Phone size={20} className="text-accent-400" />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Phone</div>
                        <a 
                          href={`tel:${personalInfo.contact.phone}`}
                          className="text-dark-300 hover:text-accent-400 transition-colors"
                        >
                          {personalInfo.contact.phone}
                        </a>
                      </div>
                    </div>
                  )}

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                      <MapPin size={20} className="text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Location</div>
                      <div className="text-dark-300">{personalInfo.contact.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                      <Clock size={20} className="text-yellow-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Timezone</div>
                      <div className="text-dark-300">{personalInfo.contact.timezone}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {personalInfo.contact.social.slice(0, 4).map((social) => {
                    const Icon = socialIcons[social.platform as keyof typeof socialIcons] || Mail;
                    
                    return (
                      <motion.a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 p-4 bg-dark-800/50 rounded-lg border border-dark-700 hover:border-primary-500/50 hover:bg-dark-700/50 transition-all duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon size={20} style={{ color: social.color }} />
                        <div>
                          <div className="text-white font-medium text-sm">{social.platform}</div>
                          <div className="text-dark-400 text-xs">{social.username}</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="card-glass p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Availability</h3>
                
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-3 h-3 rounded-full ${
                    personalInfo.contact.availability === 'available' ? 'bg-green-400' :
                    personalInfo.contact.availability === 'busy' ? 'bg-yellow-400' : 'bg-red-400'
                  }`} />
                  <span className="text-white capitalize font-semibold">
                    {personalInfo.contact.availability}
                  </span>
                </div>
                
                <p className="text-dark-300 text-sm">
                  {personalInfo.contact.availability === 'available' && 
                    "I'm currently available for new projects and collaborations. Let's create something amazing together!"}
                  {personalInfo.contact.availability === 'busy' && 
                    "I'm currently working on exciting projects but always open to discussing future opportunities."}
                  {personalInfo.contact.availability === 'unavailable' && 
                    "I'm currently not taking on new projects, but feel free to reach out for future collaboration."}
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;