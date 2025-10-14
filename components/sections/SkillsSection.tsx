'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { skills } from '../../data/skills';
import {
  Code,
  Server,
  Wrench,
  FileText,
  Palette,
  Code2,
  Type,
  Zap,
  Layers,
  Sparkles,
  Database,
  Globe,
  GitBranch,
  Github,
  Monitor,
  Chrome,
  Package
} from 'lucide-react';

const skillIcons: { [key: string]: React.ComponentType<{ className?: string }> } = {
  html: FileText,
  css: Palette,
  javascript: Code2,
  typescript: Type,
  react: Zap,
  nextjs: Layers,
  tailwind: Sparkles,
  redux: Database,
  mui: Globe,
  bootstrap: Layers,
  nodejs: Server,
  express: Server,
  mongodb: Database,
  firebase: Database,
  api: Code,
  git: GitBranch,
  github: Github,
  vscode: Monitor,
  chrome: Chrome,
  npm: Package,
};

const categoryIcons = {
  frontend: Code,
  backend: Server,
  tools: Wrench,
};

const categoryColors = {
  frontend: 'blue',
  backend: 'green',
  tools: 'purple',
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
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

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as { [key: string]: typeof skills });

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A comprehensive overview of the technologies and tools I work with
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-16">
            {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
              const CategoryIcon = categoryIcons[category as keyof typeof categoryIcons];
              const color = categoryColors[category as keyof typeof categoryColors];

              return (
                <motion.div
                  key={category}
                  className="space-y-8"
                  variants={itemVariants}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  {/* Category Header */}
                  <div className="text-center">
                    <motion.div
                      className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${color}-100 dark:bg-${color}-900/20 mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CategoryIcon className={`w-8 h-8 text-${color}-600 dark:text-${color}-400`} />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white capitalize">
                      {category} Skills
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {categorySkills.map((skill, skillIndex) => {
                      const IconComponent = skillIcons[skill.icon] || Code;

                      return (
                        <motion.div
                          key={skill.name}
                          className={`bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-${color}-300 dark:hover:border-${color}-600 transition-all duration-300 group cursor-pointer`}
                          variants={skillVariants}
                          whileHover={{
                            scale: 1.05,
                            y: -5,
                            boxShadow: `0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`
                          }}
                          whileTap={{ scale: 0.95 }}
                          transition={{ delay: skillIndex * 0.05 }}
                        >
                          <div className="text-center">
                            <motion.div
                              className={`w-12 h-12 mx-auto mb-3 rounded-lg bg-${color}-50 dark:bg-${color}-900/20 flex items-center justify-center group-hover:bg-${color}-100 dark:group-hover:bg-${color}-900/30 transition-colors duration-300`}
                              whileHover={{ rotate: 10 }}
                            >
                              <IconComponent className={`w-6 h-6 text-${color}-600 dark:text-${color}-400`} />
                            </motion.div>

                            <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {skill.name}
                            </h4>

                            {/* Skill Level Indicator */}
                            <div className="flex justify-center space-x-1">
                              {[1, 2, 3, 4, 5].map((level) => (
                                <div
                                  key={level}
                                  className={`w-2 h-2 rounded-full ${level <= skill.level
                                    ? `bg-${color}-500`
                                    : 'bg-gray-200 dark:bg-gray-700'
                                    }`}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Additional Info */}
          <motion.div
            className="mt-16 text-center"
            variants={itemVariants}
          >
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Always Learning & Growing
              </h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                I&apos;m constantly exploring new technologies and frameworks to stay current with
                industry trends. My learning journey includes contributing to open-source projects,
                attending tech conferences, and building side projects to experiment with new tools.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
