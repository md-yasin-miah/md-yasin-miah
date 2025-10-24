'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar, Briefcase, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
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
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Profile Image and Info Cards */}
            <motion.div className="space-y-8" variants={itemVariants}>
              {/* Profile Image */}
              <div className="flex justify-center lg:justify-start">
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div >
                    <Image
                      src="/assets/images/md-yasin-miah.png"
                      alt="Profile"
                      width={256} height={256}
                      className="h-72 w-72 rounded-2xl bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl object-cover object-bottom"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <motion.div
                  className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-200 dark:border-blue-800"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 text-center">
                    Experience
                  </h3>
                  <p className="text-blue-700 dark:text-blue-300 text-center font-medium">
                    3+ Years
                  </p>
                </motion.div>

                <motion.div
                  className="bg-green-50 dark:bg-green-900/20 p-6 rounded-xl border border-green-200 dark:border-green-800"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <MapPin className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 text-center">
                    Location
                  </h3>
                  <p className="text-green-700 dark:text-green-300 text-center font-medium">
                    Dhaka, Bangladesh
                  </p>
                </motion.div>

                <motion.div
                  className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl border border-purple-200 dark:border-purple-800"
                  variants={cardVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Calendar className="w-8 h-8 text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 text-center">
                    Available
                  </h3>
                  <p className="text-purple-700 dark:text-purple-300 text-center font-medium">
                    For Freelance
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - About Text */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white"
                variants={itemVariants}
              >
                Passionate Full-Stack Developer
              </motion.h3>

              <motion.div
                className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
                variants={itemVariants}
              >
                <p>
                  I&apos;m a dedicated Full-Stack Engineer with over 3 years of experience in building
                  modern, responsive web applications. My passion lies in creating exceptional
                  user experiences through clean, efficient code and innovative design solutions.
                </p>

                <p>
                  I specialize in React, Next.js, TypeScript, Node and Express.js with a strong focus on
                  performance optimization and accessibility. I believe in writing maintainable
                  code and following best practices to deliver scalable solutions.
                </p>

                <p>
                  When I&apos;m not coding, you can find me exploring new technologies, contributing
                  to open-source projects, or sharing knowledge with the developer community.
                  I&apos;m always eager to learn and grow in this ever-evolving field.
                </p>
              </motion.div>

              {/* Key Highlights */}
              <motion.div className="space-y-3" variants={itemVariants}>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                  What I Do Best:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "React & Next.js Development",
                    "TypeScript & JavaScript",
                    "Backend with Node & Express.js",
                    "RESTful APIs & GraphQL",
                    "Responsive Web Design",
                    "Performance Optimization",
                    "UI/UX Implementation",
                    "Code Review & Mentoring"
                  ].map((skill, index) => (
                    <motion.div
                      key={skill}
                      className="flex items-center space-x-2"
                      variants={itemVariants}
                      transition={{ delay: index * 0.1 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
