import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Heart, Coffee, Gamepad2, Music } from 'lucide-react';

const AboutSection: React.FC = () => {
  const skills = [
    { name: 'React/Next.js', level: 95, color: '#0066ff' },
    { name: 'TypeScript', level: 90, color: '#ff0080' },
    { name: 'Three.js', level: 85, color: '#00ff88' },
    { name: 'GSAP', level: 80, color: '#8b5cf6' },
    { name: 'Node.js', level: 88, color: '#ffff00' },
    { name: 'UI/UX Design', level: 92, color: '#ff6600' },
  ];

  const vibes = [
    { icon: Code, label: 'Coding', color: 'text-neon-blue' },
    { icon: Coffee, label: 'Coffee', color: 'text-neon-yellow' },
    { icon: Music, label: 'Beats', color: 'text-neon-pink' },
    { icon: Gamepad2, label: 'Gaming', color: 'text-neon-green' },
    { icon: Heart, label: 'Creating', color: 'text-neon-purple' },
    { icon: Zap, label: 'Innovation', color: 'text-neon-cyan' },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 retro-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="text-6xl mb-6"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
          >
            👨‍💻
          </motion.div>
          
          <h2 className="text-responsive-4xl font-cyber font-black text-neon-green mb-6 glitch" data-text="ABOUT ME">
            ABOUT ME
          </h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-neon mx-auto"
            animate={{ scaleX: [1, 1.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="hologram-card p-8">
              <h3 className="text-responsive-2xl font-cyber text-neon-pink mb-6">
                The Story So Far...
              </h3>
              
              <div className="space-y-4 text-gray-300 font-space leading-relaxed">
                <p>
                  Hey there! I'm a <span className="text-neon-cyan font-bold">digital native</span> who 
                  turns caffeine into code and ideas into interactive experiences. When I'm not 
                  building the future, you'll find me vibing to lo-fi beats and pushing pixels 
                  to perfection.
                </p>
                
                <p>
                  I specialize in creating <span className="text-neon-pink font-bold">mind-bending web experiences</span> 
                  that make people go "woah, how did they do that?!" My weapons of choice include 
                  React, TypeScript, and enough CSS animations to make your GPU sweat.
                </p>
                
                <p>
                  Currently obsessed with <span className="text-neon-green font-bold">3D web experiences</span>, 
                  AI-powered interfaces, and anything that involves making the impossible possible. 
                  Always down to collaborate on projects that push boundaries! 🚀
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Projects Built', value: '50+', emoji: '🚀' },
                  { label: 'Lines of Code', value: '1M+', emoji: '💻' },
                  { label: 'Coffee Cups', value: '∞', emoji: '☕' },
                  { label: 'GitHub Stars', value: '500+', emoji: '⭐' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center p-4 glass-neon rounded-lg"
                  >
                    <div className="text-2xl mb-2">{stat.emoji}</div>
                    <div className="text-lg font-bold text-neon-blue font-cyber">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Vibes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Skills */}
            <div className="hologram-card p-8">
              <h3 className="text-responsive-xl font-cyber text-neon-cyan mb-6">
                Tech Stack & Skills
              </h3>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-cyber text-sm text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-neon-pink font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-cyber-dark rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="h-full rounded-full"
                        style={{ backgroundColor: skill.color }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Current Vibes */}
            <div className="hologram-card p-8">
              <h3 className="text-responsive-xl font-cyber text-neon-purple mb-6">
                Current Vibes
              </h3>
              
              <div className="grid grid-cols-3 gap-4">
                {vibes.map((vibe, index) => (
                  <motion.div
                    key={vibe.label}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      transition: { duration: 0.2 }
                    }}
                    className="text-center p-4 glass rounded-lg hover:glass-neon transition-all duration-300 cursor-pointer"
                  >
                    <vibe.icon className={`mx-auto mb-2 ${vibe.color}`} size={24} />
                    <div className="text-xs font-space text-gray-400">
                      {vibe.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="hologram-card p-8 max-w-2xl mx-auto">
            <motion.div
              className="text-4xl mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🤝
            </motion.div>
            <h3 className="text-responsive-2xl font-cyber text-neon-yellow mb-4">
              Let's Create Something Epic!
            </h3>
            <p className="text-gray-300 mb-6 font-space">
              Whether you need a website that breaks the internet or an app that bends reality,
              I'm your person. Let's turn your wildest ideas into digital reality!
            </p>
            <motion.button
              className="btn-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Zap className="mr-2" size={20} />
                GET IN TOUCH
                <span className="ml-2">⚡</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Decorations */}
      <motion.div
        className="absolute top-20 right-10 text-neon-blue opacity-20"
        animate={{ 
          y: [0, -30, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <div className="text-8xl">💫</div>
      </motion.div>
    </section>
  );
};

export default AboutSection;