'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck, FaServer, FaShieldAlt, FaGlobe } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('rent');

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-primary-600">CloudGPU</Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-4">
            Flexible GPU Infrastructure Options
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl max-w-3xl mx-auto">
            Choose from a variety of pricing models and providers to find the perfect fit for your AI, ML, and rendering workloads
          </motion.p>
        </div>
      </motion.section>

      {/* Tab Navigation */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab('rent')}
              className={`px-6 py-3 font-medium text-lg border-b-2 ${activeTab === 'rent' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Rent
            </button>
            <button
              onClick={() => setActiveTab('buy')}
              className={`px-6 py-3 font-medium text-lg border-b-2 ${activeTab === 'buy' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Buy & Co-locate
            </button>
            <button
              onClick={() => setActiveTab('lease')}
              className={`px-6 py-3 font-medium text-lg border-b-2 ${activeTab === 'lease' ? 'border-primary-600 text-primary-600' : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'}`}
            >
              Lease
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Rent Section */}
          {activeTab === 'rent' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <div>
                <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                  Rent GPUs On-Demand
                </motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
                  Renting GPUs gives you immediate access to computing power without long-term commitments. Ideal for short-term projects, testing, or workloads with variable demand.
                </motion.p>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="RunPod"
                      description="On-demand cloud GPUs for ML/AI development, training, and inference"
                      gpuTypes={["RTX 4090", "A100 40GB/80GB", "H100"]}
                      startingPrice="$0.35/hr"
                      features={[
                        "Pay-per-second billing",
                        "Pre-configured templates",
                        "Persistent storage options",
                        "Community templates"
                      ]}
                      link="https://runpod.io"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Lambda Labs"
                      description="Cloud GPUs with simple hourly pricing and no hidden fees"
                      gpuTypes={["A10", "A100 40GB/80GB", "H100"]}
                      startingPrice="$0.60/hr"
                      features={[
                        "GPU Cloud Instances",
                        "Jupyter Notebooks",
                        "Docker containers",
                        "Reserved Instances"
                      ]}
                      link="https://lambdalabs.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Vast.ai"
                      description="Marketplace for renting and renting out GPUs"
                      gpuTypes={["RTX 3090", "RTX 4090", "A100", "H100"]}
                      startingPrice="$0.20/hr"
                      features={[
                        "Bidding system for lower prices",
                        "Community-driven marketplace",
                        "Various instance types",
                        "Custom configurations available"
                      ]}
                      link="https://vast.ai"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  When to Rent
                </motion.h3>
                <motion.ul variants={staggerContainer} className="space-y-4">
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Short-term projects:</strong> Ideal for projects lasting days to a few weeks</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Variable workloads:</strong> When you need GPU power occasionally but not consistently</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Testing and development:</strong> For prototyping before committing to larger infrastructure</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Budget constraints:</strong> When upfront costs for purchasing hardware are prohibitive</span>
                  </motion.li>
                </motion.ul>
              </div>

              <div>
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  Our Approach
                </motion.h3>
                <motion.ol variants={staggerContainer} className="space-y-6 ml-6 list-decimal">
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Requirements Analysis</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We help you analyze your specific compute needs, including GPU type, memory requirements, and runtime estimates.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Provider Matching</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Based on your requirements, we match you with the best providers offering the right balance of performance and cost.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Deployment Templates</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We provide pre-configured templates for popular ML frameworks and tools to get you started quickly.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Cost Monitoring</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Our platform helps you track spending and optimize costs by identifying idle resources and suggesting scheduling improvements.</p>
                  </motion.li>
                </motion.ol>
              </div>
            </motion.div>
          )}

          {/* Buy & Co-locate Section */}
          {activeTab === 'buy' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <div>
                <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                  Buy & Co-locate GPUs
                </motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
                  Purchase your own hardware and co-locate it in professional data centers. This option offers the best long-term economics and complete control over your infrastructure.
                </motion.p>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Coreweave"
                      description="Cloud computing built for GPU-accelerated workloads"
                      gpuTypes={["RTX A6000", "A100", "H100"]}
                      startingPrice="Custom"
                      features={[
                        "Full co-location services",
                        "Enterprise-grade data centers",
                        "High-bandwidth networking",
                        "24/7 technical support"
                      ]}
                      link="https://www.coreweave.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Crusoe"
                      description="Cloud computing powered by stranded energy"
                      gpuTypes={["H100", "A100"]}
                      startingPrice="Custom"
                      features={[
                        "Eco-friendly infrastructure",
                        "Custom server configurations",
                        "Hardware optimization services",
                        "Dedicated support team"
                      ]}
                      link="https://www.crusoeenergy.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Equinix"
                      description="Global data center and colocation services"
                      gpuTypes={["Custom configurations"]}
                      startingPrice="Custom"
                      features={[
                        "Global presence in 65+ markets",
                        "Carrier-neutral facilities",
                        "High-density power options",
                        "Direct cloud connectivity"
                      ]}
                      link="https://www.equinix.com"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  When to Buy & Co-locate
                </motion.h3>
                <motion.ul variants={staggerContainer} className="space-y-4">
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Consistent, heavy usage:</strong> When you need GPUs running 24/7 for extended periods (6+ months)</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Cost optimization:</strong> For long-term projects where ownership provides better ROI</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Custom hardware needs:</strong> When you require specific configurations not available in the cloud</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Data sovereignty:</strong> When you need complete control over hardware and data location</span>
                  </motion.li>
                </motion.ul>
              </div>

              <div>
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  Our Approach
                </motion.h3>
                <motion.ol variants={staggerContainer} className="space-y-6 ml-6 list-decimal">
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Hardware Consultation</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We provide expert guidance on hardware selection based on your specific workloads and performance requirements.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Data Center Selection</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We help you choose the right colocation facility based on location, power costs, connectivity options, and security features.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Procurement Services</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We can assist with acquiring hardware at competitive prices through our vendor relationships and volume discounts.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Installation & Management</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">Our team handles the physical setup, networking configuration, and ongoing management of your hardware.</p>
                  </motion.li>
                </motion.ol>
              </div>
            </motion.div>
          )}

          {/* Lease Section */}
          {activeTab === 'lease' && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="space-y-16"
            >
              <div>
                <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-6">
                  Lease Dedicated GPUs
                </motion.h2>
                <motion.p variants={fadeIn} className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-4xl">
                  Leasing provides dedicated hardware for extended periods at a fixed monthly cost. This option balances the control of ownership with the flexibility of not having a long-term commitment.
                </motion.p>

                <motion.div variants={staggerContainer} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Lambda Labs"
                      description="Reserved GPU instances with significant discounts for 1-3 year terms"
                      gpuTypes={["A10", "A100 40GB/80GB", "H100"]}
                      startingPrice="From $400/mo"
                      features={[
                        "1-3 year reservation terms",
                        "Dedicated hardware",
                        "Up to 70% discount vs on-demand",
                        "Priority support"
                      ]}
                      link="https://lambdalabs.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="CoreWeave"
                      description="Reserved GPU instances for predictable workloads"
                      gpuTypes={["A40", "A100", "H100"]}
                      startingPrice="Custom"
                      features={[
                        "6-36 month commitments",
                        "Dedicated compute resources",
                        "Significant discounts vs on-demand",
                        "Enterprise SLAs available"
                      ]}
                      link="https://www.coreweave.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={scaleIn}>
                    <ProviderCard
                      name="Genesis Cloud"
                      description="Affordable GPU cloud computing with reserved instances"
                      gpuTypes={["RTX A5000", "RTX A6000"]}
                      startingPrice="From $350/mo"
                      features={[
                        "Monthly reservation options",
                        "No long-term commitment required",
                        "Up to 50% savings vs on-demand",
                        "European data centers"
                      ]}
                      link="https://www.genesiscloud.com"
                    />
                  </motion.div>
                </motion.div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg">
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  When to Lease
                </motion.h3>
                <motion.ul variants={staggerContainer} className="space-y-4">
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Medium-term projects:</strong> For workloads expected to run 3-12 months</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Budget predictability:</strong> When you need fixed costs for financial planning</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Scaling concerns:</strong> When uncertain about long-term hardware needs</span>
                  </motion.li>
                  <motion.li variants={fadeIn} className="flex items-start">
                    <span className="flex-shrink-0 h-6 w-6 text-green-500 mr-2">
                      <FaCheck />
                    </span>
                    <span><strong>Performance requirements:</strong> When you need dedicated resources without multi-tenancy</span>
                  </motion.li>
                </motion.ul>
              </div>

              <div>
                <motion.h3 variants={fadeIn} className="text-2xl font-bold mb-4">
                  Our Approach
                </motion.h3>
                <motion.ol variants={staggerContainer} className="space-y-6 ml-6 list-decimal">
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Needs Assessment</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We evaluate your workload patterns, budget constraints, and performance requirements to determine optimal lease terms.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Provider Negotiation</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We leverage our relationships with providers to secure favorable terms and pricing for your lease agreement.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Contract Flexibility</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We help structure lease agreements with appropriate exit clauses and upgrade options to protect your interests.</p>
                  </motion.li>
                  <motion.li variants={fadeIn} className="pl-2">
                    <strong className="text-xl">Performance Monitoring</strong>
                    <p className="mt-2 text-gray-600 dark:text-gray-400">We provide tools to monitor resource utilization, ensuring you're getting the most value from your leased hardware.</p>
                  </motion.li>
                </motion.ol>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Decision Process */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-12 text-center"
          >
            Evaluation & Decision Process
          </motion.h2>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <motion.div variants={fadeIn} className="space-y-8">
              <h3 className="text-2xl font-bold">Evaluation Steps</h3>
              
              <div className="border-l-4 border-primary-500 pl-4 space-y-6">
                <div>
                  <h4 className="text-xl font-semibold">1. Workload Analysis</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Evaluate the nature, duration, and frequency of your GPU workloads. Consider peak vs. average usage patterns.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold">2. Cost Projection</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Calculate total cost of ownership across different acquisition models based on your expected usage patterns.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold">3. Performance Requirements</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Identify specific GPU models, memory requirements, and compute capabilities needed for your applications.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold">4. Risk Assessment</h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Evaluate financial risks, technology obsolescence concerns, and flexibility needs for your business.
                  </p>
                </div>
              </div>
            </motion.div>
            
            <motion.div variants={fadeIn} className="space-y-8">
              <h3 className="text-2xl font-bold">Next Steps</h3>
              
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold flex items-center">
                    <FaServer className="text-primary-500 mr-3" /> Technical Consultation
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Schedule a free technical consultation with our GPU infrastructure experts to discuss your specific requirements.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold flex items-center">
                    <FaShieldAlt className="text-primary-500 mr-3" /> Custom Proposal
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Receive a tailored proposal with recommendations for GPU infrastructure based on your workload and budget.
                  </p>
                </div>
                
                <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                  <h4 className="text-xl font-semibold flex items-center">
                    <FaGlobe className="text-primary-500 mr-3" /> Provider Matching
                  </h4>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Get introduced to pre-vetted providers that match your requirements, with negotiated terms and rates.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-secondary-600 to-primary-600 text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl mb-8"
          >
            Create an account to explore our platform and find the perfect GPU infrastructure solution for your needs
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link 
              href="/register" 
              className="bg-white text-primary-600 px-8 py-4 rounded-md font-bold text-lg hover:bg-gray-100 transition-colors"
            >
              Create Your Account
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-md font-bold text-lg hover:bg-white hover:bg-opacity-10 transition-colors"
            >
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">CloudGPU</h3>
              <p className="text-gray-400">
                The modern platform for GPU compute resources. Deploy, manage, and scale your AI and ML workloads with ease.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><Link href="/docs" className="text-gray-400 hover:text-white">Documentation</Link></li>
                <li><Link href="/api" className="text-gray-400 hover:text-white">API Reference</Link></li>
                <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} CloudGPU. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ProviderCard({ 
  name, 
  description, 
  gpuTypes, 
  startingPrice, 
  features,
  link 
}: { 
  name: string; 
  description: string; 
  gpuTypes: string[];
  startingPrice: string;
  features: string[];
  link: string;
}) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col">
      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase">GPU Types</h4>
          <div className="mt-1 flex flex-wrap gap-2">
            {gpuTypes.map((type, index) => (
              <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                {type}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase">Starting Price</h4>
          <div className="mt-1 text-lg font-bold text-primary-600 dark:text-primary-400">
            {startingPrice}
          </div>
        </div>
        
        <div>
          <h4 className="font-semibold text-sm text-gray-500 dark:text-gray-400 uppercase mb-2">Features</h4>
          <ul className="space-y-1">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start text-sm">
                <svg className="h-5 w-5 text-green-500 mr-1.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="p-6 border-t border-gray-200 dark:border-gray-700">
        <Link href={link} className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium flex items-center" target="_blank" rel="noopener noreferrer">
          Visit Provider <FaArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
} 