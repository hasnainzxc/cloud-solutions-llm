'use client';

import { motion } from 'framer-motion';
import { FaServer, FaBolt, FaShieldAlt, FaGlobe, FaArrowRight } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className="text-2xl font-bold text-indigo-600">CloudGPU</a>
              <div className="hidden md:flex items-center ml-10 space-x-8">
                <a href="/about" className="text-gray-600 hover:text-indigo-600">About</a>
                <a href="/pricing" className="text-gray-600 hover:text-indigo-600">Pricing</a>
                <a href="/docs" className="text-gray-600 hover:text-indigo-600">Docs</a>
                <a href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/login" className="text-gray-600 hover:text-indigo-600">Login</a>
              <a href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Sign Up
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Slanted Design */}
      <section className="relative bg-indigo-600 text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                High-Performance GPU Cloud Computing
              </h1>
              <p className="text-xl mb-8 text-indigo-100">
                Access NVIDIA A100, H100, and RTX 4090 GPUs instantly. Perfect for AI, ML, and Deep Learning workloads.
              </p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <FaServer className="mr-2" /> Latest NVIDIA GPUs from $0.70/hour
                </li>
                <li className="flex items-center">
                  <FaBolt className="mr-2" /> AI & ML Optimized Infrastructure
                </li>
                <li className="flex items-center">
                  <FaShieldAlt className="mr-2" /> Enterprise-grade Security
                </li>
              </ul>
              <a href="/register" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-md font-semibold hover:bg-indigo-50 transition-colors">
                Start Free Trial
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="hidden md:block"
            >
              <img 
                src="/undraw_cloud-hosting_tfeh.svg" 
                alt="GPU Server Cluster" 
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-white transform -skew-y-3 origin-left translate-y-10"></div>
      </section>

      {/* Deploy Instance Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-4"
          >
            Deploy GPU Instances in Seconds
          </motion.h2>
          <p className="text-gray-600 mb-12">Choose from a wide range of GPU options including NVIDIA A100, H100, and RTX 4090</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FaServer className="w-8 h-8" />}
              title="High-Performance GPUs"
              description="Access to the latest NVIDIA GPUs with up to 80GB of VRAM"
            />
            <FeatureCard
              icon={<FaShieldAlt className="w-8 h-8" />}
              title="AI-Ready Infrastructure"
              description="Pre-installed with popular ML frameworks and CUDA toolkit"
            />
            <FeatureCard
              icon={<FaGlobe className="w-8 h-8" />}
              title="Global Availability"
              description="Deploy in multiple regions for optimal performance"
            />
          </div>
        </div>
      </section>

      {/* Cloud Management Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Powerful GPU Management
              </motion.h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <FaServer className="w-6 h-6 mt-1 mr-3 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Multi-GPU Support</h3>
                    <p className="text-gray-600">Scale your workloads across multiple GPUs with ease</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaBolt className="w-6 h-6 mt-1 mr-3 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold mb-1">CUDA-Optimized</h3>
                    <p className="text-gray-600">Latest CUDA toolkit and drivers pre-installed</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <FaShieldAlt className="w-6 h-6 mt-1 mr-3 text-indigo-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Monitoring & Metrics</h3>
                    <p className="text-gray-600">Real-time GPU utilization and performance metrics</p>
                  </div>
                </li>
              </ul>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors"
              >
                Deploy GPU Instance
              </motion.button>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/undraw/undraw_server-status_f685.svg" 
                alt="GPU Management" 
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img 
                src="/undraw/undraw_cloud-hosting_tfeh.svg" 
                alt="Get Started" 
                className="w-full"
              />
            </motion.div>
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-6"
              >
                Start Training in Minutes
              </motion.h2>
              <p className="text-gray-600 mb-8">
                Launch your GPU instance with pre-configured deep learning frameworks and start training your models immediately.
              </p>
              <a href="/register" className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700">
                Deploy Now <FaArrowRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold mb-2">$0.70</h3>
              <p>Per Hour Starting Price</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">24/7/365</h3>
              <p>Technical Support</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-2">99.9%</h3>
              <p>Uptime SLA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Trusted by AI Researchers & Data Scientists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              text="Training our large language models is 3x faster with CloudGPU's A100 instances."
              author="Dr. Sarah Chen"
              role="AI Research Lead"
            />
            <TestimonialCard
              text="The pre-configured PyTorch environment saved us days of setup time."
              author="James Wilson"
              role="ML Engineer"
            />
            <TestimonialCard
              text="Best price-to-performance ratio we've found for GPU instances."
              author="Michael Chang"
              role="Data Science Director"
            />
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12">Global GPU Infrastructure</h2>
          <div className="relative">
            <img 
              src="/world-map.svg" 
              alt="World Map" 
              className="w-full"
            />
            <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-indigo-600 rounded-full transform -translate-x-1/2 -translate-y-1/2">
              <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>
      </section>

      {/* As Seen On Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-semibold text-center mb-8">Featured In</h2>
          <div className="flex justify-center items-center space-x-12 grayscale opacity-60">
            <img src="/yahoo-logo.svg" alt="Yahoo" className="h-8" />
            <img src="/bloomberg-logo.svg" alt="Bloomberg" className="h-8" />
            <img src="/benzinga-logo.svg" alt="Benzinga" className="h-8" />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

function TestimonialCard({ text, author, role }: { text: string; author: string; role: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-sm"
    >
      <p className="text-gray-600 mb-4">{text}</p>
      <div>
        <p className="font-semibold">{author}</p>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </motion.div>
  );
} 