import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { PersonalInfo } from '../data/resumeData';

interface HeaderProps {
  personal: PersonalInfo;
}

export default function Header({ personal }: HeaderProps) {
  const contactIcons = {
    email: Mail,
    phone: Phone,
    location: MapPin
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter
  };

  return (
    <motion.header 
      className="header-section bg-gradient-to-r from-primary-600 to-primary-900 text-white p-8 rounded-t-lg"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold mb-2"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {personal.name}
          </motion.h1>
          <motion.h2 
            className="text-xl md:text-2xl font-medium text-primary-100 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {personal.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-primary-200 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            {personal.subtitle}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Contact Information */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Contact Information</h3>
            {Object.entries(personal.contact).map(([key, value]) => {
              const Icon = contactIcons[key as keyof typeof contactIcons];
              return (
                <div key={key} className="flex items-center space-x-3 contact-info">
                  <Icon className="w-5 h-5 text-primary-200" />
                  <span className="text-primary-100">{value}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-primary-100">Connect With Me</h3>
            {Object.entries(personal.social).map(([key, value]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              const displayValue = value.replace('https://', '').replace('http://', '');
              return (
                <div key={key} className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-primary-200" />
                  <a 
                    href={value} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-100 hover:text-white transition-colors truncate"
                  >
                    {displayValue}
                  </a>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}