import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '@/data/portfolio';
import { SkillCategory } from '@/types';

const categoryColors: Record<SkillCategory, string> = {
  'frontend': '#0ea5e9',
  'backend': '#10b981',
  'mobile': '#8b5cf6',
  'design': '#ec4899',
  'tools': '#f59e0b',
  '3d-graphics': '#d946ef',
  'soft-skills': '#06b6d4',
  'ai-ml': '#84cc16',
  'blockchain': '#f97316'
};

const categoryLabels: Record<SkillCategory, string> = {
  'frontend': 'Frontend Development',
  'backend': 'Backend Development',
  'mobile': 'Mobile Development',
  'design': 'UI/UX Design',
  'tools': 'Tools & DevOps',
  '3d-graphics': '3D Graphics',
  'soft-skills': 'Soft Skills',
  'ai-ml': 'AI & Machine Learning',
  'blockchain': 'Blockchain'
};

interface SkillCardProps {
  skill: typeof skills[0];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      className="card-glass p-6 group hover:scale-105 transition-transform duration-300"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.05 }}
    >
      {/* Skill Icon */}
      <div className="flex items-center space-x-4 mb-4">
        <motion.div
          className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-white text-lg"
          style={{ backgroundColor: skill.color + '20', borderColor: skill.color + '40' }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          {skill.name.charAt(0)}
        </motion.div>
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors">
            {skill.name}
          </h3>
          <p className="text-sm text-dark-400 capitalize">
            {categoryLabels[skill.category]}
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-dark-300">Proficiency</span>
          <span className="text-sm font-semibold text-primary-400">
            {skill.proficiency}%
          </span>
        </div>
        <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` 
            }}
            initial={{ width: 0 }}
            animate={inView ? { width: `${skill.proficiency}%` } : {}}
            transition={{ duration: 1, delay: index * 0.05 + 0.3, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Additional Info */}
      {skill.description && (
        <p className="text-sm text-dark-300 line-clamp-2 mb-3">
          {skill.description}
        </p>
      )}

      {skill.yearsOfExperience && (
        <div className="flex items-center justify-between text-xs text-dark-400">
          <span>Experience:</span>
          <span className="font-semibold">
            {skill.yearsOfExperience} year{skill.yearsOfExperience !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </motion.div>
  );
};

const SkillsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<SkillCategory, typeof skills>);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Skills & <span className="gradient-text-primary">Expertise</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              A comprehensive overview of my technical skills, tools, and areas of expertise 
              that I use to create exceptional digital experiences.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-8"
              >
                {/* Category Header */}
                <div className="flex items-center space-x-4">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: categoryColors[category as SkillCategory] }}
                  />
                  <h3 className="text-2xl font-bold text-white">
                    {categoryLabels[category as SkillCategory]}
                  </h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-current to-transparent opacity-20" />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {categorySkills.map((skill, index) => (
                    <SkillCard
                      key={skill.id}
                      skill={skill}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Summary */}
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
                {skills.length}+
              </motion.div>
              <div className="text-dark-300">Technical Skills</div>
            </div>
            
            <div className="text-center p-8 card-glass">
              <motion.div
                className="text-4xl font-bold gradient-text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {Object.keys(skillsByCategory).length}
              </motion.div>
              <div className="text-dark-300">Skill Categories</div>
            </div>
            
            <div className="text-center p-8 card-glass">
              <motion.div
                className="text-4xl font-bold gradient-text-primary mb-2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {Math.round(skills.reduce((acc, skill) => acc + skill.proficiency, 0) / skills.length)}%
              </motion.div>
              <div className="text-dark-300">Average Proficiency</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;