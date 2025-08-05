import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Eye } from 'lucide-react';
import { Project, vibeEmojis } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);


  const handleCardClick = () => {
    // Card click handler
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      rotateX: -15,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.25, 0, 1]
      }
    },
    hover: {
      y: -20,
      rotateX: 5,
      rotateY: 5,
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: 'easeOut'
      }
    },
    tap: {
      scale: 0.95,
      rotateX: -5,
      transition: {
        duration: 0.1
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0, scale: 0.8 },
    hover: { 
      opacity: 1, 
      scale: 1.2,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="perspective-1000 group"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      whileTap="tap"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative">
        {/* Glow Effect */}
        <motion.div
          className={`absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r ${project.gradient} opacity-0`}
          variants={glowVariants}
          initial="initial"
          animate={isHovered ? "hover" : "initial"}
        />
        
        {/* Main Card */}
        <div className="relative hologram-card rounded-2xl p-6 h-full overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-retro-grid" />
          </div>

          {/* Featured Badge */}
          {project.featured && (
            <motion.div
              className="absolute top-4 right-4 z-10"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="bg-gradient-neon text-cyber-black px-3 py-1 rounded-full text-xs font-bold font-cyber">
                FEATURED
              </div>
            </motion.div>
          )}

          {/* Vibe Level */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div
              className="text-2xl"
              animate={{ 
                scale: isHovered ? [1, 1.2, 1] : 1,
                rotate: isHovered ? [0, 10, -10, 0] : 0
              }}
              transition={{ duration: 0.5 }}
            >
              {vibeEmojis[project.vibeLevel]}
            </motion.div>
          </div>

          {/* Project Emoji */}
          <motion.div
            className="text-6xl mb-4 text-center"
            animate={{ 
              rotateY: isHovered ? 180 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.6 }}
          >
            {project.emoji}
          </motion.div>

          {/* Title */}
          <h3 className={`text-xl font-bold font-cyber mb-3 text-center bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-300 text-sm mb-4 leading-relaxed font-space">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech, techIndex) => (
              <motion.span
                key={tech}
                className="px-2 py-1 bg-cyber-dark border border-neon-cyan text-neon-cyan text-xs rounded-full font-mono"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + techIndex * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.5)'
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            {project.demoUrl && (
              <motion.a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-neon text-center py-2 text-sm relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Eye size={16} className="mr-2" />
                  DEMO
                </span>
              </motion.a>
            )}
            
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 glass-neon py-2 px-4 rounded text-center text-sm font-cyber text-neon-blue hover:bg-neon-blue hover:bg-opacity-20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center">
                  <Github size={16} className="mr-2" />
                  CODE
                </span>
              </motion.a>
            )}
          </div>

          {/* Scan Line Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
            animate={{ 
              x: isHovered ? ['0%', '100%'] : '0%',
              opacity: isHovered ? [0, 1, 0] : 0
            }}
            transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
          />

          {/* Bottom Glow */}
          <motion.div
            className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-0`}
            animate={{ opacity: isHovered ? 0.8 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>
    </motion.div>
  );
};