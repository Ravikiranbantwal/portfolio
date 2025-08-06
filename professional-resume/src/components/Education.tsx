import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { Education as EducationType, Certification } from '../data/resumeData';

interface EducationProps {
  education: EducationType[];
  certifications: Certification[];
}

export default function Education({ education, certifications }: EducationProps) {
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
          <GraduationCap className="w-6 h-6 text-primary-600" />
          <h2 className="section-title text-2xl font-heading font-semibold text-gray-800">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
              <GraduationCap className="w-5 h-5 text-primary-600" />
              <span>Education</span>
            </h3>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={`${edu.institution}-${edu.degree}`}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">
                      {edu.degree}
                    </h4>
                    <div className="text-primary-600 font-medium mb-2">
                      {edu.field} • {edu.institution}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>

                    {edu.grade && (
                      <div className="text-sm font-medium text-green-700 bg-green-100 inline-block px-2 py-1 rounded-full mb-3">
                        {edu.grade}
                      </div>
                    )}
                  </div>

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div>
                      <h5 className="text-sm font-semibold text-gray-700 mb-2">Achievements</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-6 flex items-center space-x-2">
              <Award className="w-5 h-5 text-primary-600" />
              <span>Certifications</span>
            </h3>

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