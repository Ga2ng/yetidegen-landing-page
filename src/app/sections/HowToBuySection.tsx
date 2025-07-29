"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HowToBuySection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 1,
      title: "Create a wallet",
      description: "Visit phantom.app and follow the simple steps to create a new account with the Phantom app or browser extension.",
      icon: "👛",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Get some $SOL",
      description: "Tap the BUY button in the app to purchase Solana, or deposit $SOL to your Phantom wallet from the crypto exchange of your choice.",
      icon: "💰",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Swap $YETI",
      description: "Tap the SWAP icon in your Phantom wallet and paste the $YETI token address. Swap your $SOL for $YETI.",
      icon: "🔄",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "You are now a $YETI holder!",
      description: "Welcome to the $YETI Army!",
      icon: "🎉",
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              HOW TO BUY
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Follow these easy steps to become a YETI holder.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveStep(index)}
              >
                <div className={`relative bg-gradient-to-br ${step.color} rounded-2xl p-6 h-full text-white hover:scale-105 transition-all duration-300 ${activeStep === index ? 'ring-4 ring-emerald-300' : ''}`}>
                  <div className="text-center">
                    <div className="text-4xl mb-4">{step.icon}</div>
                    <div className="text-2xl font-bold mb-2">{step.id}</div>
                    <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                    <p className="text-sm opacity-90 leading-relaxed">{step.description}</p>
                  </div>
                  
                  {/* Step indicator */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                    {step.id}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Step View */}
          <motion.div 
            className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{steps[activeStep].icon}</div>
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                Step {steps[activeStep].id}: {steps[activeStep].title}
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {steps[activeStep].description}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex justify-center gap-4">
              <motion.button
                className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Phantom Wallet
              </motion.button>
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Buy SOL
              </motion.button>
            </div>
          </motion.div>

          {/* Contract Address */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Contract Address
            </h3>
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-6 max-w-2xl mx-auto">
              <code className="text-sm md:text-base text-emerald-600 font-mono break-all">
                FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump
              </code>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 