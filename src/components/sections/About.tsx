import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { personalData } from '../../data/personal';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Blending aesthetics with functionality to create stunning user experiences.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and user satisfaction.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver exceptional results.',
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
    <section id="about" className="section bg-gradient-to-b from-transparent to-surface/20">
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
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-responsive-lg text-text-secondary max-w-2xl mx-auto">
              Passionate about creating digital experiences that make a difference
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-text-primary">
                  Hi there! I'm RaviKiran 👋
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {personalData.bio}
                </p>
                <p className="text-text-secondary leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  updated with the latest industry trends.
                </p>
              </div>

              {/* Current Status */}
              <div className="p-4 bg-surface/50 rounded-lg border border-primary/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-text-primary font-medium">
                    {personalData.availability.status}
                  </span>
                </div>
                <p className="text-text-secondary text-sm">
                  Based in {personalData.contact.location}
                </p>
              </div>
            </motion.div>

            {/* Right Column - Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="card-hover text-center group"
                >
                  <div className="p-4 bg-primary/10 rounded-xl w-fit mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon 
                      size={32} 
                      className="text-primary group-hover:scale-110 transition-transform duration-300" 
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-text-primary mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { label: 'Coffee Cups', value: '1000+', emoji: '☕' },
                { label: 'Code Lines', value: '50K+', emoji: '💻' },
                { label: 'GitHub Repos', value: '30+', emoji: '📚' },
                { label: 'Learning Hours', value: '500+', emoji: '🎓' },
              ].map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-2xl">{stat.emoji}</div>
                  <div className="text-2xl font-bold text-gradient">{stat.value}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;