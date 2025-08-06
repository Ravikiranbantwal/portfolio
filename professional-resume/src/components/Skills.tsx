import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Wrench } from 'lucide-react';
import { Skill } from '../data/resumeData';

interface SkillsProps {
  skills: Skill[];
}

export default function Skills({ skills }: SkillsProps) {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [...new Set(skills.map(skill => skill.category))];
  const categoryIcons = {
    'Frontend': Code2,
    'Backend': Code2,
    'Tools': Wrench,
    'Design': Code2,
  };

  return (
    <motion.section 
      ref={skillsRef}
      className="section-content bg-white p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center space-x-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Code2 className="w-6 h-6 text-primary-600" />
          <h2 className="section-title text-2xl font-heading font-semibold text-gray-800">
            Technical Skills
          </h2>
        </motion.div>

        <div className="space-y-8">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Code2;

            return (
              <motion.div
                key={category}
                className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + categoryIndex * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Icon className="w-5 h-5 text-primary-600" />
                  <h3 className="text-lg font-semibold text-gray-800">{category}</h3>
                </div>

                <div className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center justify-between"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    >
                      <div className="flex items-center space-x-3 flex-1">
                        <span className="font-medium text-gray-700 min-w-0 flex-1">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 ml-auto">
                          {skill.level}%
                        </span>
                      </div>
                      
                      <div className="w-32 bg-gray-200 rounded-full h-2 ml-4">
                        <motion.div
                          className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ 
                            width: isVisible ? `${skill.level}%` : 0 
                          }}
                          transition={{ 
                            delay: 1.2 + categoryIndex * 0.1 + skillIndex * 0.1,
                            duration: 1,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}