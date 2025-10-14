'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { education, certifications } from '../../data/education';
import { GraduationCap, Award, Calendar, MapPin, Star } from 'lucide-react';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Education & Certifications
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My academic journey and professional certifications
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400 mr-3" />
                Education
              </h3>

              <div className="space-y-6">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                          {edu.institution}
                        </h4>
                        <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {edu.degree} in {edu.field}
                        </p>

                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-2 sm:mb-0">
                            <div className="flex items-center space-x-1">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.duration}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="w-4 h-4" />
                              <span>{edu.location}</span>
                            </div>
                          </div>

                          {edu.gpa && (
                            <div className="flex items-center space-x-1 text-sm font-semibold text-green-600 dark:text-green-400">
                              <Star className="w-4 h-4" />
                              <span>GPA: {edu.gpa}</span>
                            </div>
                          )}
                        </div>

                        {edu.description && (
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {edu.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
                <Award className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
                Certifications & Training
              </h3>

              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.id}
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all duration-300"
                    variants={cardVariants}
                    whileHover={{ y: -5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                      </div>

                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                          {cert.title}
                        </h4>
                        <p className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">
                          {cert.provider} • {cert.year}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                          {cert.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Learning Philosophy */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                I believe in the power of continuous learning and staying updated with the latest
                technologies. My educational background in Computer Science provides a strong foundation,
                while my certifications and self-directed learning keep me current with industry trends
                and best practices.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
