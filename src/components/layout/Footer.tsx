import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';
import { personalData } from '../../data/personal';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ravikiranbantwal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ravikiranbantwal', label: 'LinkedIn' },
    { icon: Mail, href: `https://mail.google.com/mail/?view=cm&fs=1&to=${personalData.contact.email}`, label: 'Email' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-dark border-t border-primary/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-3xl font-bold text-gradient">
              {personalData.name}
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Full Stack Developer passionate about creating amazing digital experiences 
              with modern technologies and creative solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-surface/50 rounded-lg text-text-secondary hover:text-primary hover:bg-surface transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-text-secondary hover:text-text-primary transition-colors duration-300 text-sm py-1"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-text-primary">Get In Touch</h3>
            <div className="space-y-2 text-sm">
              <p className="text-text-secondary">
                📧 {personalData.contact.email}
              </p>
              <p className="text-text-secondary">
                📱 {personalData.contact.phone}
              </p>
              <p className="text-text-secondary">
                📍 {personalData.contact.location}
              </p>
              <p className="text-text-secondary">
                💼 {personalData.availability.status}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-primary/10 flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 text-text-secondary text-sm">
            <span>© {currentYear} {personalData.name}. Made with</span>
            <Heart size={16} className="text-red-500 animate-pulse" />
            <span>from Bharath 🇮🇳</span>
          </div>
          
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 p-2 bg-primary/10 hover:bg-primary/20 rounded-lg text-primary hover:scale-110 transition-all duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
      
      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-primary opacity-50"></div>
    </footer>
  );
};

export default Footer;