import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Download, MapPin, Clock, Coffee } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

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

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-900 to-dark-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          {/* Content */}
          <div className="space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
                <span className="gradient-text-primary">About</span> Me
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-300 leading-relaxed"
            >
              {personalInfo.longBio}
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-dark-300 leading-relaxed"
            >
              I specialize in creating immersive digital experiences that push the boundaries 
              of what's possible on the web. From interactive 3D visualizations to complex 
              data dashboards, I bring ideas to life with cutting-edge technology and 
              meticulous attention to detail.
            </motion.p>

            {/* Quick Info */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="flex items-center space-x-3 text-dark-300">
                <MapPin size={20} className="text-primary-400" />
                <span>{personalInfo.contact.location}</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <Clock size={20} className="text-primary-400" />
                <span>{personalInfo.contact.timezone}</span>
              </div>
              <div className="flex items-center space-x-3 text-dark-300">
                <Coffee size={20} className="text-primary-400" />
                <span>Always ready for new challenges</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${
                  personalInfo.contact.availability === 'available' ? 'bg-green-400' :
                  personalInfo.contact.availability === 'busy' ? 'bg-yellow-400' : 'bg-red-400'
                }`} />
                <span className="text-dark-300 capitalize">
                  {personalInfo.contact.availability}
                </span>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                className="btn-primary px-6 py-3 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={20} />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                className="btn-ghost px-6 py-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Let's Connect
              </motion.button>
            </motion.div>
          </div>

          {/* Visual */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-white/10 overflow-hidden"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-full h-full flex items-center justify-center text-8xl">
                  👨‍💻
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/20 rounded-xl backdrop-blur-sm border border-primary-500/30 flex items-center justify-center"
                animate={{
                  y: [-10, 10, -10],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-2xl">⚡</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent-500/20 rounded-xl backdrop-blur-sm border border-accent-500/30 flex items-center justify-center"
                animate={{
                  y: [10, -10, 10],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-xl">🚀</span>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -left-8 w-12 h-12 bg-green-500/20 rounded-full backdrop-blur-sm border border-green-500/30 flex items-center justify-center"
                animate={{
                  x: [-5, 5, -5],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="text-lg">💡</span>
              </motion.div>
            </div>

            {/* Background Decoration */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;