import React from 'react';
import { motion } from 'framer-motion';
import { User, Award, Users, Code } from 'lucide-react';

interface SummaryProps {
  bio: string;
  stats: {
    totalExperience: string;
    projectsCompleted: string;
    clientsSatisfied: string;
    technologiesUsed: string;
  };
}

export default function Summary({ bio, stats }: SummaryProps) {
  const statsData = [
    { label: 'Experience', value: stats.totalExperience, icon: Award },
    { label: 'Projects', value: stats.projectsCompleted, icon: Code },
    { label: 'Happy Clients', value: stats.clientsSatisfied, icon: Users },
    { label: 'Technologies', value: stats.technologiesUsed, icon: User },
  ];

  return (
    <motion.section 
      className="section-content bg-white p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center space-x-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <User className="w-6 h-6 text-primary-600" />
          <h2 className="section-title text-2xl font-heading font-semibold text-gray-800">
            Professional Summary
          </h2>
        </motion.div>

        <motion.p 
          className="text-gray-700 leading-relaxed mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {bio}
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {statsData.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-4 bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg border border-primary-200"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <stat.icon className="w-8 h-8 text-primary-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-primary-700 mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-primary-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}