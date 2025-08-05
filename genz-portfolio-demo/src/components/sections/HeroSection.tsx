import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Volume2, VolumeX } from 'lucide-react';
import { FloatingGeometry } from '../3d/FloatingGeometry';
import confetti from 'canvas-confetti';

const HeroSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentVibeIndex, setCurrentVibeIndex] = useState(0);

  const vibes = [
    'Frontend Wizard 🧙‍♂️',
    'Code Artist 🎨',
    'Pixel Perfect ✨',
    'React Ninja 🥷',
    'UI/UX Genius 🧠',
    'Animation Master 🎭',
    'Digital Creator 🚀',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVibeIndex((prev) => (prev + 1) % vibes.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [vibes.length]);

  const handleVibeClick = () => {
    // Trigger confetti explosion
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff0080', '#0066ff', '#00ff88', '#8b5cf6', '#ffff00']
    });
    
    // Play sound effect (if implemented)
    setIsPlaying(!isPlaying);
  };

  const handleScrollDown = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden scan-lines">
      {/* 3D Background */}
      <FloatingGeometry />
      
      {/* Retro Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-20" />
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        {/* Glitch Effect Title */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 
            className="text-responsive-5xl font-cyber font-black text-neon glitch mb-4"
            data-text="WELCOME TO THE FUTURE"
          >
            WELCOME TO THE FUTURE
          </h1>
          <div className="w-32 h-1 bg-gradient-neon mx-auto animate-pulse" />
        </motion.div>

        {/* Animated Subtitle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <p className="text-responsive-xl text-gray-300 mb-6 font-space">
            Experience the next level of portfolio design
          </p>
          
          {/* Dynamic Vibe Text */}
          <div className="h-16 flex items-center justify-center">
            <motion.span
              key={currentVibeIndex}
              initial={{ opacity: 0, y: 20, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, rotateX: 90 }}
              transition={{ duration: 0.5 }}
              className="text-responsive-2xl font-neon gradient-text font-bold"
            >
              {vibes[currentVibeIndex]}
            </motion.span>
          </div>
        </motion.div>

        {/* Interactive Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 items-center justify-center mb-12"
        >
          <button
            onClick={handleVibeClick}
            className="btn-neon group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <Sparkles className="mr-2 animate-spin" size={20} />
              ACTIVATE VIBES
              <Zap className="ml-2 animate-bounce" size={20} />
            </span>
          </button>

          <button
            onClick={handleScrollDown}
            className="glass-neon px-8 py-4 rounded-lg font-cyber text-neon-cyan hover:bg-neon-cyan hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105"
          >
            <span className="flex items-center">
              EXPLORE PROJECTS
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="ml-2"
              >
                ↓
              </motion.div>
            </span>
          </button>

          {/* Sound Toggle */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-4 glass rounded-full hover:glass-neon transition-all duration-300 group"
          >
            {isPlaying ? (
              <Volume2 className="text-neon-green group-hover:animate-pulse" size={24} />
            ) : (
              <VolumeX className="text-gray-400 group-hover:text-neon-pink" size={24} />
            )}
          </button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { label: 'Projects Built', value: '50+', icon: '🚀' },
            { label: 'Coffee Consumed', value: '∞', icon: '☕' },
            { label: 'Vibes Created', value: '100%', icon: '✨' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="hologram-card p-6 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-responsive-xl font-bold text-neon-blue font-cyber">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 font-space">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-neon-cyan opacity-60"
          >
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Cyber Scan Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0, 255, 255, 0.1), transparent)',
          width: '200px',
        }}
      />
    </section>
  );
};

export default HeroSection;