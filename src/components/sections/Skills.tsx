import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../../data/skills';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set loaded after a short delay to prevent layout shift
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simple visibility check for mobile
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="skills" className="section bg-gradient-to-b from-surface/20 to-transparent">
      <div className="container mx-auto">
        {!isLoaded ? (
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="text-text-secondary">Loading skills...</div>
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-responsive-3xl font-bold text-text-primary mb-4">
              My <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-responsive-lg text-text-secondary max-w-2xl mx-auto">
              Technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="space-y-12">
            {Object.entries(skillCategories).map(([categoryKey, category]) => {
              const categorySkills = skills.filter(skill => skill.category === categoryKey);
              
              // Skip empty categories
              if (categorySkills.length === 0) return null;
              
              return (
                <motion.div key={categoryKey} variants={itemVariants} className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-2xl">{category.icon}</span>
                    <h3 className="text-2xl font-semibold text-text-primary">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        variants={itemVariants}
                        className="card group hover:scale-105 transition-transform duration-300"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            {skill.svgIcon ? (
                              <img 
                                src={skill.svgIcon} 
                                alt={skill.name}
                                className="w-6 h-6"
                                onError={(e) => {
                                  // Fallback to emoji if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const emojiSpan = target.nextElementSibling as HTMLSpanElement;
                                  if (emojiSpan && emojiSpan.classList.contains('fallback-emoji')) {
                                    emojiSpan.style.display = 'inline';
                                  }
                                }}
                              />
                            ) : null}
                            {skill.icon && (
                              <span className={`text-lg ${skill.svgIcon ? 'fallback-emoji hidden' : ''}`}>
                                {skill.icon}
                              </span>
                            )}
                            <h4 className="font-medium text-text-primary group-hover:text-primary transition-colors duration-300">
                              {skill.name}
                            </h4>
                          </div>
                          <span className="text-sm text-text-secondary font-medium">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-surface rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                            initial={{ width: 0 }}
                            animate={isVisible ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.05 }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Always Learning & Growing 🚀
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new tools, 
                frameworks, and methodologies to stay at the forefront of web development.
              </p>
            </div>
          </motion.div>
        </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;