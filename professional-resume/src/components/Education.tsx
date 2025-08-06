import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Education as EducationType, Certification } from '../data/resumeData';

interface EducationProps {
  certifications: Certification[];
}

export default function Education({ certifications }: EducationProps) {
  return (
    <motion.section 
      className="section-content bg-white p-8 shadow-sm border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="flex items-center space-x-3 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Award className="w-6 h-6 text-primary-600" />
          <h2 className="section-title text-2xl font-heading font-semibold text-gray-800">
            Certifications
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  className="bg-gradient-to-br from-primary-50 to-primary-100 p-4 rounded-lg border border-primary-200 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 mb-1">
                        {cert.name}
                      </h4>
                      <div className="text-primary-700 font-medium text-sm mb-2">
                        {cert.issuer}
                      </div>
                      <div className="flex items-center space-x-4 text-xs text-gray-600">
                        <span>{cert.date}</span>
                        {cert.credentialId && (
                          <span className="bg-white px-2 py-1 rounded font-mono">
                            ID: {cert.credentialId}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <Award className="w-6 h-6 text-primary-600 flex-shrink-0 ml-4" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Professional Development */}
            <motion.div
              className="mt-8 p-4 bg-gradient-to-br from-accent-50 to-accent-100 rounded-lg border border-accent-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
            >
              <h4 className="font-semibold text-accent-800 mb-2">Continuous Learning</h4>
              <p className="text-accent-700 text-sm">
                Committed to staying current with emerging technologies and best practices 
                through regular participation in online courses, workshops, and tech conferences.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}