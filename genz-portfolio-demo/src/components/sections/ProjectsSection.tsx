import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Grid, List } from 'lucide-react';
import { projects, categories } from '@/data/projects';
import { ProjectCard } from '../ui/ProjectCard';

const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1]
      }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 retro-grid opacity-5" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-block mb-6"
            animate={{ rotateY: [0, 360] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <span className="text-6xl">🚀</span>
          </motion.div>
          
          <h2 className="text-responsive-4xl font-cyber font-black text-neon-blue mb-6 glitch" data-text="MY PROJECTS">
            MY PROJECTS
          </h2>
          
          <p className="text-responsive-lg text-gray-300 max-w-3xl mx-auto font-space leading-relaxed">
            Here's some of the wild stuff I've built. Each project is a journey into the future of tech,
            designed to blow your mind and maybe break your browser 😎
          </p>
          
          <motion.div
            className="w-24 h-1 bg-gradient-neon mx-auto mt-6"
            animate={{ scaleX: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <motion.button
              onClick={() => handleFilterChange('all')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-cyber text-sm transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-gradient-neon text-cyber-black shadow-neon'
                  : 'glass border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:bg-opacity-20'
              }`}
            >
              <span className="flex items-center">
                <Zap size={16} className="mr-2" />
                ALL PROJECTS
              </span>
            </motion.button>
            
            {Object.entries(categories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => handleFilterChange(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-cyber text-sm transition-all duration-300 ${
                  activeFilter === key
                    ? 'bg-gradient-neon text-cyber-black shadow-neon'
                    : 'glass border border-gray-600 text-gray-300 hover:border-neon-cyan hover:text-neon-cyan'
                }`}
              >
                <span className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.label.toUpperCase()}
                </span>
              </motion.button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 glass-neon rounded-full p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'grid'
                  ? 'bg-neon-pink text-white shadow-neon'
                  : 'text-gray-400 hover:text-neon-pink'
              }`}
            >
              <Grid size={18} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-full transition-all duration-300 ${
                viewMode === 'list'
                  ? 'bg-neon-pink text-white shadow-neon'
                  : 'text-gray-400 hover:text-neon-pink'
              }`}
            >
              <List size={18} />
            </button>
          </div>
        </motion.div>

        {/* Projects Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="text-neon-green font-cyber text-sm">
            {filteredProjects.length} PROJECTS FOUND
          </span>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </motion.div>

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
              animate={{ rotateZ: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💡
            </motion.div>
            <h3 className="text-responsive-2xl font-cyber text-neon-purple mb-4">
              Got an Epic Idea?
            </h3>
            <p className="text-gray-300 mb-6 font-space">
              Let's collaborate and build something that'll make the internet jealous.
              I'm always down for projects that push the boundaries of what's possible.
            </p>
            <motion.button
              className="btn-neon"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Zap className="mr-2" size={20} />
                LET'S COLLAB
                <span className="ml-2">🤝</span>
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 text-neon-pink opacity-20"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="text-6xl">⚡</div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-20 right-10 text-neon-green opacity-20"
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        <div className="text-4xl">🌟</div>
      </motion.div>
    </section>
  );
};

export default ProjectsSection;