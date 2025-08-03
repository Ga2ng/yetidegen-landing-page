"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { WalletWidget, JupiterSwapper, WalletConnectButton } from "../components";

export default function HowToBuySection() {
  const [activeStep, setActiveStep] = useState(0);
  
  const steps = [
    {
      id: 1,
      title: "CREATE A WALLET",
      description: "VISIT PHANTOM.APP AND FOLLOW THE SIMPLE STEPS TO CREATE A NEW ACCOUNT WITH THE PHANTOM APP OR BROWSER EXTENSION.",
      highlight: "PHANTOM.APP",
      color: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-400/50"
    },
    {
      id: 2,
      title: "GET SOME $SOL",
      description: "TAP THE BUY BUTTON IN THE APP TO PURCHASE SOLANA, OR DEPOSIT $SOL TO YOUR PHANTOM WALLET FROM THE CRYPTO EXCHANGE OF YOUR CHOICE.",
      highlight: "$SOL",
      color: "from-emerald-400/20 to-cyan-500/20",
      borderColor: "border-emerald-300/50"
    },
    {
      id: 3,
      title: "SWAP $YETI",
      description: "TAP THE SWAP ICON IN YOUR PHANTOM WALLET AND PASTE THE $YETI TOKEN ADDRESS. SWAP YOUR $SOL FOR $YETI.",
      highlight: "$YETI",
      color: "from-teal-500/20 to-emerald-500/20",
      borderColor: "border-teal-400/50"
    },
    {
      id: 4,
      title: "YOU ARE NOW A $YETI HOLDER!",
      description: "WELCOME TO THE $YETI ARMY!",
      highlight: "$YETI ARMY",
      color: "from-emerald-600/20 to-teal-600/20",
      borderColor: "border-emerald-500/50"
    }
  ];

  return (
    <section id="how-to-buy" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
      {/* Galaxy Background Elements - Optimized */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 w-full h-full opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 196, 154, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 196, 154, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 0'
          }}
        />
        
        {/* Optimized Background Blobs - Reduced Count */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl" />
      </div>

      {/* Optimized Galaxy Stars - Reduced Count for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/60 rounded-full"
            animate={{
              y: ["100vh", "-10vh"],
              x: [0, Math.sin(i) * 200],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1.5, 0],
            }}
            transition={{
              duration: 25 + i * 2,
              repeat: Infinity,
              delay: i * 1,
              ease: "linear",
            }}
            style={{
              left: `${10 + (i * 8) % 80}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              HOW TO BUY
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto">
              FOLLOW THESE EASY STEPS TO BECOME A YETI HOLDER.
            </p>
          </motion.div>

          {/* Main Content Grid - Steps + Wallet Widget */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Left Side - Steps */}
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveStep(index)}
                >
                  <div className={`relative bg-gradient-to-br ${step.color} backdrop-blur-md rounded-2xl border ${step.borderColor} p-6 text-white hover:scale-105 transition-all duration-300 ${activeStep === index ? 'ring-2 ring-emerald-300 shadow-lg shadow-emerald-500/25' : ''}`}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center text-xl font-bold text-emerald-300">
                          {step.id}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 text-emerald-200">{step.title}</h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                          {step.description.split(step.highlight).map((part, i, arr) => (
                            <span key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span className="text-emerald-300 font-semibold">{step.highlight}</span>
                              )}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Price Chart Widget */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-8"
            >
              <WalletWidget />
            </motion.div>
          </div>

          {/* Jupiter Swapper & Wallet Connect Section - Side by Side */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Jupiter Swapper */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >
                <JupiterSwapper />
              </motion.div>

              {/* Right Side - Wallet Connect with GIF */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-center space-y-8"
              >
                {/* Animated GIF */}
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex justify-center mb-6"
                >
                  <img 
                    src="/assets/gif/yeti1.gif" 
                    alt="Yeti Dance" 
                    className="w-32 h-32 rounded-full border-4 border-emerald-400/30 shadow-lg shadow-emerald-500/25"
                  />
                </motion.div>

                {/* Header */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    CONNECT YOUR WALLET
                  </h3>
                  <p className="text-lg text-slate-300 max-w-md mx-auto leading-relaxed">
                    JOIN THE $YETI ARMY AND START YOUR TRADING JOURNEY WITH THE BEST WALLET EXPERIENCE
                  </p>
                </div>

                {/* Wallet Connect Button */}
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="flex justify-center"
                >
                  <div className="transform hover:scale-110 transition-transform duration-300">
                    <WalletConnectButton />
                  </div>
                </motion.div>

                {/* Additional GIFs for visual appeal */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1 }}
                  viewport={{ once: true }}
                  className="flex justify-center space-x-4 mt-8"
                >
                  <img 
                    src="/assets/gif/dance.gif" 
                    alt="Dance" 
                    className="w-16 h-16 rounded-full border-2 border-emerald-400/20 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <img 
                    src="/assets/gif/thug.gif" 
                    alt="Thug" 
                    className="w-16 h-16 rounded-full border-2 border-emerald-400/20 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <img 
                    src="/assets/gif/yeti2.gif" 
                    alt="Yeti 2" 
                    className="w-16 h-16 rounded-full border-2 border-emerald-400/20 opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 