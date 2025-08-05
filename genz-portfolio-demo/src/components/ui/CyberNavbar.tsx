import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Zap, Home, User, Briefcase, Mail } from 'lucide-react';

const CyberNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'HOME', icon: Home, href: '#home' },
    { id: 'projects', label: 'PROJECTS', icon: Briefcase, href: '#projects' },
    { id: 'about', label: 'ABOUT', icon: User, href: '#about' },
    { id: 'contact', label: 'CONTACT', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop/Mobile Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.25, 0, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-neon backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-10 h-10 bg-gradient-neon rounded-lg flex items-center justify-center">
                <Zap className="text-cyber-black" size={24} />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-cyber font-bold text-neon-cyan">
                  PORTFOLIO
                </h1>
                <p className="text-xs text-gray-400 font-space">
                  DEMO MODE
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavClick(item.href, item.id)}
                  className={`relative px-4 py-2 font-cyber text-sm transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-neon-pink'
                      : 'text-gray-300 hover:text-neon-cyan'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="flex items-center space-x-2">
                    <item.icon size={16} />
                    <span>{item.label}</span>
                  </span>
                  
                  {/* Active Indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-neon"
                      layoutId="activeIndicator"
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  
                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 bg-neon-cyan bg-opacity-10 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg glass-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="text-neon-pink" size={24} />
                ) : (
                  <Menu className="text-neon-cyan" size={24} />
                )}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-neon border-t border-neon-cyan border-opacity-20"
            >
              <div className="px-4 py-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg font-cyber text-left transition-all duration-300 ${
                      activeSection === item.id
                        ? 'bg-gradient-neon text-cyber-black shadow-neon'
                        : 'text-gray-300 hover:text-neon-cyan hover:bg-neon-cyan hover:bg-opacity-10'
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Floating Action Button (Mobile) */}
      <motion.div
        className="fixed bottom-6 right-6 z-40 lg:hidden"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.button
          className="w-14 h-14 bg-gradient-neon rounded-full flex items-center justify-center shadow-neon-strong"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          animate={{ 
            boxShadow: [
              '0 0 20px rgba(255, 0, 128, 0.5)',
              '0 0 30px rgba(0, 102, 255, 0.5)',
              '0 0 20px rgba(255, 0, 128, 0.5)'
            ]
          }}
          transition={{ 
            boxShadow: { duration: 2, repeat: Infinity },
            scale: { duration: 0.2 },
            rotate: { duration: 0.2 }
          }}
        >
          <Zap className="text-cyber-black" size={24} />
        </motion.button>
      </motion.div>
    </>
  );
};

export default CyberNavbar;