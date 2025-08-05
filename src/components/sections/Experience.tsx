import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Award } from 'lucide-react';
import { experiences, experienceStats } from '../../data/experience';

const Experience: React.FC = () => {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'full-time': return 'bg-green-500/20 text-green-400';
      case 'freelance': return 'bg-blue-500/20 text-blue-400';
      case 'contract': return 'bg-purple-500/20 text-purple-400';
      case 'internship': return 'bg-orange-500/20 text-orange-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <section id="experience" className="section bg-gradient-to-b from-surface/20 to-transparent">
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
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-responsive-lg text-text-secondary max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {Object.entries(experienceStats).map(([key, value]) => (
              <div key={key} className="text-center p-6 card">
                <div className="text-2xl font-bold text-gradient mb-2">{value}</div>
                <div className="text-sm text-text-secondary capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block" />

            <div className="space-y-8">
              {experiences.map((experience) => (
                <motion.div
                  key={experience.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />

                  {/* Experience Card */}
                  <div className="md:ml-16 card-hover">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-semibold text-text-primary">
                            {experience.position}
                          </h3>
                          {experience.current && (
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm text-text-secondary mb-3">
                          <span className="font-medium text-primary">{experience.company}</span>
                          <span className={`px-2 py-1 rounded-full text-xs ${getTypeColor(experience.type)}`}>
                            {experience.type.replace('-', ' ')}
                          </span>
                        </div>

                        <div className="flex items-center space-x-4 text-sm text-text-muted mb-4">
                          <div className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{experience.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={16} />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-text-secondary mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-text-primary mb-2 flex items-center">
                        <Award size={16} className="mr-1" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-text-secondary flex items-start">
                            <span className="text-primary mr-2 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border border-primary/20">
              <h3 className="text-xl font-semibold text-text-primary mb-4">
                Let's Work Together! 🤝
              </h3>
              <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                I'm always open to discussing new opportunities, collaborations, 
                or interesting projects. Feel free to reach out!
              </p>
              <button className="btn-primary px-8 py-3 rounded-xl">
                Get In Touch
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;