import React from 'react';
import { motion } from 'framer-motion';
import { FolderOpen, ExternalLink, Github, Star } from 'lucide-react';
import { Project } from '../data/resumeData';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <motion.section 
      className="section-content bg-white p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center space-x-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <FolderOpen className="w-6 h-6 text-primary-600" />
          <h2 className="section-title text-2xl font-heading font-semibold text-gray-800">
            Featured Projects
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-item bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    )}
                  </div>
                  <div className="text-sm text-gray-500 mb-3">
                    {project.year}
                  </div>
                </div>
                
                <div className="flex space-x-2 ml-4">
                  {project.links.demo && (
                    <motion.a
                      href={project.links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-primary-100 text-primary-600 rounded-lg hover:bg-primary-200 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="View Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                  )}
                  {project.links.github && (
                    <motion.a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      title="View Source"
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-xs font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1.1 + index * 0.1 + techIndex * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Projects Summary */}
        <motion.div
          className="mt-8 p-6 bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg border border-primary-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="text-center">
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              Portfolio Highlights
            </h3>
            <p className="text-primary-700 mb-4">
              These featured projects showcase my expertise in modern web technologies, 
              3D graphics, AI integration, and user experience design.
            </p>
            <div className="flex justify-center space-x-8 text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{projects.length}+</div>
                <div className="text-primary-700">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">{featuredProjects.length}</div>
                <div className="text-primary-700">Featured Work</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600">100%</div>
                <div className="text-primary-700">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}