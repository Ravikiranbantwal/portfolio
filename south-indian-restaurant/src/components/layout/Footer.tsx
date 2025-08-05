import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-warm-900 text-warm-100">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Restaurant Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-spice-turmeric to-spice-saffron rounded-full flex items-center justify-center">
                <span className="text-2xl">🍛</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold font-dancing">South Indian Delights</h3>
                <p className="text-warm-400 text-sm">Authentic Vegetarian Cuisine</p>
              </div>
            </div>
            
            <p className="text-warm-300 mb-6 leading-relaxed">
              Experience the authentic flavors of South India with our traditional vegetarian dishes, 
              prepared with love and the finest spices. We bring you the taste of home with every meal.
            </p>

            {/* Social Media */}
            <div className="flex space-x-4">
              <motion.a
                href="#"
                className="w-10 h-10 bg-warm-800 rounded-full flex items-center justify-center text-warm-300 hover:bg-brand-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-warm-800 rounded-full flex items-center justify-center text-warm-300 hover:bg-brand-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-10 h-10 bg-warm-800 rounded-full flex items-center justify-center text-warm-300 hover:bg-brand-500 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Twitter size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-warm-300">123 MG Road</p>
                  <p className="text-warm-300">Bangalore, Karnataka 560001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-400 flex-shrink-0" />
                <a href="tel:+918022223333" className="text-warm-300 hover:text-white transition-colors">
                  +91 80 2222 3333
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-400 flex-shrink-0" />
                <a href="mailto:info@southindiandelights.com" className="text-warm-300 hover:text-white transition-colors">
                  info@southindiandelights.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Opening Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-xl font-bold mb-6 text-white">Opening Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-brand-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Daily</p>
                  <p className="text-warm-300">8:00 AM - 10:00 PM</p>
                </div>
              </div>
              
              <div className="bg-warm-800 rounded-lg p-4 mt-4">
                <p className="text-brand-400 font-medium text-sm mb-2">Special Hours</p>
                <p className="text-warm-300 text-sm">
                  Breakfast Special: 8:00 AM - 11:00 AM<br />
                  Lunch Special: 12:00 PM - 3:00 PM<br />
                  Dinner Special: 7:00 PM - 10:00 PM
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-warm-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h4 className="text-xl font-bold mb-4 text-white">Stay Updated</h4>
            <p className="text-warm-300 mb-6">
              Subscribe to our newsletter for special offers and new menu updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-warm-800 text-white placeholder-warm-400 border border-warm-700 focus:border-brand-500 focus:outline-none"
              />
              <motion.button
                className="px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-warm-800 bg-warm-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-warm-400 text-sm">
              <span>© 2024 South Indian Delights. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>in Bangalore</span>
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-warm-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-warm-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-warm-400 hover:text-white transition-colors">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};