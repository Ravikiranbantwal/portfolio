import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Calendar, Menu, X, Phone, MapPin } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface HeaderProps {
  onCartClick: () => void;
  onReservationClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCartClick, onReservationClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-spice-turmeric to-spice-saffron rounded-full flex items-center justify-center">
              <span className="text-xl">🍛</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-warm-900 font-dancing">
                South Indian Delights
              </h1>
              <p className="text-xs text-warm-600 hidden sm:block">Authentic Vegetarian Cuisine</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="nav-link"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('menu')}
              className="nav-link"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="nav-link"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="nav-link"
            >
              Contact
            </button>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Cart Button */}
            <motion.button
              onClick={onCartClick}
              className="relative p-2 text-warm-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ShoppingBag size={24} />
              {cart.itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-brand-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                >
                  {cart.itemCount}
                </motion.span>
              )}
            </motion.button>

            {/* Reservation Button */}
            <motion.button
              onClick={onReservationClick}
              className="hidden sm:flex items-center space-x-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar size={18} />
              <span>Reserve Table</span>
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-warm-700 hover:text-brand-600 hover:bg-brand-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-warm-200 py-4"
          >
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 text-warm-700 hover:text-brand-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('menu')}
                className="text-left py-2 text-warm-700 hover:text-brand-600 transition-colors"
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left py-2 text-warm-700 hover:text-brand-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left py-2 text-warm-700 hover:text-brand-600 transition-colors"
              >
                Contact
              </button>
              <button
                onClick={onReservationClick}
                className="flex items-center space-x-2 bg-brand-500 text-white px-4 py-2 rounded-lg hover:bg-brand-600 transition-colors w-fit"
              >
                <Calendar size={18} />
                <span>Reserve Table</span>
              </button>
            </nav>
          </motion.div>
        )}
      </div>

      {/* Contact Info Bar */}
      <div className="bg-brand-500 text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
              <span>+91 80 2222 3333</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={14} />
              <span>123 MG Road, Bangalore</span>
            </div>
            <div className="hidden sm:block">
              <span>Open: 8:00 AM - 10:00 PM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};