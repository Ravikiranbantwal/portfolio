import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Scene } from '@/components/3d/Scene';
import { personalInfo } from '@/data/portfolio';
import { cn } from '@/utils';

export const HeroSection: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let lastTime = 0;
    
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      // Throttle to 60fps
      if (now - lastTime < 16) return;
      lastTime = now;
      
      // Reduced sensitivity - much smaller movement range
      const x = ((e.clientX / window.innerWidth) * 2 - 1) * 0.5;
      const y = (-(e.clientY / window.innerHeight) * 2 + 1) * 0.5;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setTimeout(() => setIsLoaded(true), 1000);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

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
    github: Github,
    linkedin: Linkedin,
    email: Mail,
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-950 via-dark-900 to-dark-800">
      {/* 3D Background Scene */}
      <div className="absolute inset-0 z-0">
        <Scene
          enableControls={false}
          enableEffects={true}
          cameraPosition={[mousePosition.x, mousePosition.y, 8]}
        />
      </div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0 z-10">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 via-transparent to-accent-500/20"
          animate={{
            background: [
              'linear-gradient(45deg, rgba(14, 165, 233, 0.1) 0%, transparent 50%, rgba(217, 70, 239, 0.1) 100%)',
              'linear-gradient(225deg, rgba(217, 70, 239, 0.1) 0%, transparent 50%, rgba(14, 165, 233, 0.1) 100%)',
              'linear-gradient(45deg, rgba(14, 165, 233, 0.1) 0%, transparent 50%, rgba(217, 70, 239, 0.1) 100%)',
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.div
            variants={itemVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-primary-400 font-medium border border-white/20">
              Hello, I'm {personalInfo.name.split(' ')[0]} 👋
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display"
          >
            <span className="block gradient-text-primary">
              {personalInfo.title.split(' ')[0]}
            </span>
            <span className="block text-white mt-2">
              {personalInfo.title.split(' ').slice(1).join(' ')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-dark-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary">
                {personalInfo.yearsOfExperience}+
              </div>
              <div className="text-dark-400 text-sm">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary">
                {personalInfo.projectsCompleted}+
              </div>
              <div className="text-dark-400 text-sm">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-primary">
                {personalInfo.clientsSatisfied}+
              </div>
              <div className="text-dark-400 text-sm">Happy Clients</div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              className="btn-primary px-8 py-4 text-lg font-semibold flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <ExternalLink size={20} />
            </motion.button>
            
            <motion.button
              className="btn-ghost px-8 py-4 text-lg font-semibold"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-6"
          >
            {personalInfo.contact.social.slice(0, 3).map((social) => {
              const Icon = socialIcons[social.platform.toLowerCase() as keyof typeof socialIcons] || ExternalLink;
              
              return (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20",
                    "flex items-center justify-center text-white hover:text-primary-400",
                    "transition-all duration-300"
                  )}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: social.color + '20',
                    borderColor: social.color + '40'
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isLoaded ? 1 : 0, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center text-white/60 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-sm mb-2 font-medium">Scroll to explore</span>
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
      <div className="absolute top-40 right-32 w-1 h-1 bg-accent-500 rounded-full animate-pulse" />
      <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-primary-400 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
    </section>
  );
};