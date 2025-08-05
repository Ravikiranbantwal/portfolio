import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Clock, Leaf } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-warm-50 via-spice-turmeric/10 to-spice-saffron/20 pt-24">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-to-br from-spice-cardamom/20 to-spice-cinnamon/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-20 -left-20 w-96 h-96 bg-gradient-to-br from-spice-turmeric/20 to-spice-saffron/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-brand-600 font-medium mb-6"
            >
              <Star size={16} className="text-yellow-500" />
              <span>Authentic South Indian Cuisine</span>
              <Leaf size={16} className="text-green-500" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-warm-900 mb-6 font-dancing"
            >
              Taste the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-spice-turmeric to-spice-saffron">
                Tradition
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-warm-700 mb-8 leading-relaxed"
            >
              Experience the authentic flavors of South India with our traditional vegetarian dishes, 
              prepared with love and the finest spices.
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start mb-8"
            >
              <div className="flex items-center space-x-2 text-warm-700">
                <Clock size={20} className="text-brand-500" />
                <span>Fresh Daily</span>
              </div>
              <div className="flex items-center space-x-2 text-warm-700">
                <Leaf size={20} className="text-green-500" />
                <span>100% Vegetarian</span>
              </div>
              <div className="flex items-center space-x-2 text-warm-700">
                <Star size={20} className="text-yellow-500" />
                <span>Traditional Recipes</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button
                onClick={scrollToMenu}
                className="btn-primary px-8 py-4 text-lg font-bold flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Order Now</span>
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                className="btn-outline px-8 py-4 text-lg font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Menu
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Main Food Image */}
            <div className="relative z-10">
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-80 h-80 md:w-96 md:h-96 mx-auto bg-gradient-to-br from-spice-turmeric via-spice-saffron to-spice-paprika rounded-full flex items-center justify-center shadow-2xl"
              >
                <span className="text-8xl md:text-9xl">🍛</span>
              </motion.div>
            </div>

            {/* Floating Food Items */}
            <motion.div
              animate={{
                y: [-20, 20, -20],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-10 -left-10 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl"
            >
              🥥
            </motion.div>

            <motion.div
              animate={{
                y: [20, -20, 20],
                rotate: [10, -10, 10],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 -right-8 w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
            >
              🌶️
            </motion.div>

            <motion.div
              animate={{
                y: [-15, 15, -15],
                rotate: [-5, 5, -5],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-20 -left-8 w-18 h-18 bg-white rounded-full shadow-lg flex items-center justify-center text-2xl"
            >
              🫒
            </motion.div>

            <motion.div
              animate={{
                y: [25, -25, 25],
                rotate: [5, -15, 5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute bottom-10 -right-12 w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center text-3xl"
            >
              🧄
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-warm-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 16, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1 h-3 bg-warm-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};