import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar, User, Clock } from 'lucide-react';
import { projects } from '@/data/portfolio';
import { Project, ProjectCategory } from '@/types';
import { cn } from '@/utils';

const categories: { id: ProjectCategory | 'all'; label: string }[] = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-development', label: 'Web Dev' },
  { id: '3d-visualization', label: '3D Viz' },
  { id: 'ui-ux-design', label: 'UI/UX' },
  { id: 'data-visualization', label: 'Data Viz' },
  { id: 'mobile-development', label: 'Mobile' },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="card-glass p-6 group cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
        <motion.div
          className="w-full h-full flex items-center justify-center text-6xl"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.3 }}
        >
          {project.category === '3d-visualization' && '🌌'}
          {project.category === 'web-development' && '💻'}
          {project.category === 'ui-ux-design' && '🎨'}
          {project.category === 'data-visualization' && '📊'}
          {project.category === 'mobile-development' && '📱'}
          {!['3d-visualization', 'web-development', 'ui-ux-design', 'data-visualization', 'mobile-development'].includes(project.category) && '🚀'}
        </motion.div>
        
        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />

        {/* Action Buttons */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center space-x-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink size={20} />
                </motion.a>
              )}
              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center text-white hover:bg-dark-600 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={20} />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full text-white text-sm font-medium">
            Featured
          </div>
        )}
      </div>

      {/* Project Info */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
            {project.title}
          </h3>
          <span className="text-dark-400 text-sm">{project.year}</span>
        </div>

        <p className="text-dark-300 text-sm leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-xs text-dark-400">
          {project.client && (
            <div className="flex items-center space-x-1">
              <User size={12} />
              <span>{project.client}</span>
            </div>
          )}
          {project.duration && (
            <div className="flex items-center space-x-1">
              <Clock size={12} />
              <span>{project.duration}</span>
            </div>
          )}
          <div className="flex items-center space-x-1">
            <Calendar size={12} />
            <span>{project.year}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-dark-800/50 rounded-full text-xs text-primary-400 border border-primary-500/20"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-3 py-1 bg-dark-800/50 rounded-full text-xs text-dark-400 border border-dark-700">
              +{project.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Technologies */}
        <div className="flex items-center space-x-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <div
              key={tech.name}
              className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
              style={{ backgroundColor: tech.color + '20', color: tech.color }}
            >
              {tech.name.charAt(0)}
            </div>
          ))}
          {project.technologies.length > 4 && (
            <div className="w-8 h-8 rounded-full bg-dark-700 flex items-center justify-center text-xs text-dark-400">
              +{project.technologies.length - 4}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-dark-800 to-dark-900">
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
              Featured <span className="gradient-text-primary">Projects</span>
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              A collection of my most innovative and impactful work, 
              showcasing creativity, technical expertise, and problem-solving skills.
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mx-auto mt-6"></div>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-6 py-3 rounded-full font-medium transition-colors duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-primary-500 to-accent-500 text-white"
                    : "bg-dark-800/50 text-dark-300 hover:text-white hover:bg-dark-700/50 border border-dark-700"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* No Projects Message */}
          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">
                No projects found
              </h3>
              <p className="text-dark-300">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}

          {/* View All CTA */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <motion.button
              className="btn-ghost px-8 py-4 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Projects on GitHub
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;