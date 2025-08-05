import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, ExternalLink, CheckCircle } from 'lucide-react';
import { experiences } from '@/data/portfolio';
import { format } from 'date-fns';

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
  isLast: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience, index, isLast }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const startDate = format(new Date(experience.startDate), 'MMM yyyy');
  const endDate = experience.endDate ? format(new Date(experience.endDate), 'MMM yyyy') : 'Present';

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-px bg-gradient-to-b from-primary-500 to-accent-500 h-full" />
      
      {/* Timeline Dot */}
      <motion.div
        className="absolute left-1/2 top-8 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full z-10 shadow-lg"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
      />

      {/* Content Card */}
      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16 ${
        index % 2 === 0 ? 'lg:text-right' : ''
      }`}>
        <div className={`${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
          <motion.div
            className="card-glass p-8 hover:scale-105 transition-transform duration-300"
            whileHover={{ y: -5 }}
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div className={`${index % 2 === 0 ? 'lg:text-right' : ''} flex-1`}>
                <div className="flex items-center space-x-2 mb-2">
                  {experience.current && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  )}
                  <h3 className="text-xl font-bold text-white">
                    {experience.position}
                  </h3>
                </div>
                
                <div className="flex items-center space-x-2 text-primary-400 font-medium mb-1">
                  <span>{experience.company}</span>
                  {experience.companyUrl && (
                    <motion.a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-dark-400">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{startDate} - {endDate}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-dark-300 mb-6 leading-relaxed">
              {experience.description}
            </p>

            {/* Achievements */}
            <div className="mb-6">
              <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start space-x-3 text-dark-300 text-sm"
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.2 + 0.5 + i * 0.1 }}
                  >
                    <CheckCircle size={16} className="text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-dark-800/50 rounded-full text-xs text-primary-400 border border-primary-500/20"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + 0.7 + i * 0.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Element */}
        <div className={`${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
          <motion.div
            className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center text-6xl"
            initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
            animate={inView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
          >
            {index === 0 && '🚀'}
            {index === 1 && '💻'}
            {index === 2 && '🎨'}
            {index >= 3 && '⭐'}
          </motion.div>
        </div>
      </div>

      {/* Bottom spacing for timeline */}
      {!isLast && <div className="h-8" />}
    </motion.div>
  );
};

const ExperienceSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 to-dark-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Work <span className="gradient-text-primary">Experience</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              My professional journey through various roles and companies, 
              highlighting key achievements and the technologies I've mastered along the way.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                experience={experience}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center p-8 card-glass">
              <motion.div
                className="text-4xl font-bold gradient-text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {experiences.length}
              </motion.div>
              <div className="text-dark-300">Companies Worked</div>
            </div>
            
            <div className="text-center p-8 card-glass">
              <motion.div
                className="text-4xl font-bold gradient-text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                5+
              </motion.div>
              <div className="text-dark-300">Years Experience</div>
            </div>
            
            <div className="text-center p-8 card-glass">
              <motion.div
                className="text-4xl font-bold gradient-text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                47+
              </motion.div>
              <div className="text-dark-300">Projects Delivered</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;