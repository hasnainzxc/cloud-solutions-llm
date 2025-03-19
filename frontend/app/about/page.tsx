'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaBolt, FaShieldAlt, FaGlobe, FaArrowRight } from 'react-icons/fa';

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          className="absolute inset-0"
          style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="text-center"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
              About CloudGPU
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl max-w-2xl mx-auto">
              Empowering innovation through accessible GPU computing resources
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                At CloudGPU, we're on a mission to democratize access to high-performance computing resources.
                We believe that powerful GPU capabilities should be accessible to everyone, from individual
                researchers to large enterprises.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Our platform makes it easy to deploy and manage GPU resources, enabling you to focus on what
                matters most - your work and innovation.
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="relative">
              <div className="relative z-10">
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24"
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 4,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900/20 rounded-full p-4">
                    <FaCloud className="w-full h-full text-indigo-600 dark:text-indigo-400" />
                  </div>
                </motion.div>
                <motion.div
                  className="absolute bottom-0 left-0 w-32 h-32"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 5,
                    ease: "easeInOut"
                  }}
                >
                  <div className="bg-purple-100 dark:bg-purple-900/20 rounded-full p-6">
                    <FaServer className="w-full h-full text-purple-600 dark:text-purple-400" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Values
            </motion.h2>
          </motion.div>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeIn} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-4">
                <FaBolt className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Constantly pushing boundaries to provide cutting-edge GPU solutions
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-4">
                <FaShieldAlt className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Reliability</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Ensuring stable and secure access to GPU resources 24/7
              </p>
            </motion.div>
            <motion.div variants={fadeIn} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-4">
                <FaGlobe className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Global Impact</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Making GPU computing accessible worldwide
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
              Ready to Get Started?
            </motion.h2>
            <motion.p variants={fadeIn} className="text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of users who trust CloudGPU for their GPU computing needs.
            </motion.p>
            <motion.div variants={fadeIn}>
              <a
                href="/contact"
                className="inline-flex items-center bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
                <FaArrowRight className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 