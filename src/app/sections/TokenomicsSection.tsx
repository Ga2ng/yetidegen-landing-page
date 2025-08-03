"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function TokenomicsSection() {
  const tokenomics = [
    {
      id: 1,
      title: "Supply",
      value: "800 Millions",
      description: "Total token supply",
      gif: "/assets/gif/thug.gif"
    },
    {
      id: 2,
      title: "LP",
      value: "100% burned",
      description: "Liquidity pool locked",
      gif: "/assets/gif/yeti1.gif"
    },
    {
      id: 3,
      title: "Contract",
      value: "renounced",
      description: "Contract ownership",
      gif: "/assets/gif/yeti3.gif"
    },
    {
      id: 4,
      title: "Network",
      value: "SOLANA",
      description: "Blockchain network",
      gif: "/assets/gif/yeti2.gif"
    }
  ];

  return (
    <section id="tokenomics" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
      {/* Galaxy Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Abstract Wave Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1200 800" fill="none">
            <path d="M0,200 Q300,100 600,200 T1200,200 L1200,800 L0,800 Z" fill="url(#wave1)" />
            <path d="M0,400 Q400,300 800,400 T1200,400 L1200,800 L0,800 Z" fill="url(#wave2)" />
            <path d="M0,600 Q500,500 1000,600 T1200,600 L1200,800 L0,800 Z" fill="url(#wave3)" />
          </svg>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-emerald-500/20 rounded-full blur-sm" />
        <div className="absolute top-40 right-20 w-24 h-24 border border-teal-500/20 rotate-45 blur-sm" />
        <div className="absolute bottom-40 left-20 w-40 h-40 border border-emerald-400/15 rounded-full blur-sm" />
        <div className="absolute bottom-20 right-40 w-28 h-28 border border-teal-400/20 rotate-12 blur-sm" />
        
        {/* Galaxy Nebula Effects */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/3 rounded-full blur-3xl" />
        
        {/* Abstract Lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
          <div className="absolute top-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/20 to-transparent" />
          <div className="absolute bottom-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <div className="absolute bottom-64 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
        </div>
        
        {/* Vertical Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-teal-500/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/15 to-transparent" />
      </div>

      {/* SVG Definitions for Gradients */}
      <svg className="hidden">
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.08" />
            <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0.08" />
          </linearGradient>
        </defs>
      </svg>

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
              Tokenomics
            </h2>
            <p className="text-xl md:text-2xl text-emerald-300 max-w-3xl mx-auto">
              The foundation of the YETI ecosystem.
            </p>
          </motion.div>

          {/* Tokenomics Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tokenomics.map((item, index) => (
              <motion.div
                key={item.id}
                className="relative group aspect-square"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                {/* Card Background */}
                <div className="bg-gradient-to-br from-slate-900/90 to-black/95 backdrop-blur-md rounded-3xl border border-emerald-400/30 p-6 shadow-xl hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 relative overflow-hidden h-full">
                  
                  {/* Abstract Background Elements */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-2 right-2 w-16 h-16 border border-emerald-500/30 rounded-full blur-sm" />
                    <div className="absolute bottom-2 left-2 w-12 h-12 border border-teal-500/30 rotate-45 blur-sm" />
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-emerald-400/20 rounded-full blur-sm" />
                  </div>

                  {/* GIF Background - Optimized for Mobile */}
                  <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Image
                      src={item.gif}
                      alt={`${item.title} Background`}
                      fill
                      className="object-cover rounded-3xl"
                      unoptimized
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      loading="lazy"
                    />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-center h-full flex flex-col justify-center">
                    {/* Title */}
                    <h3 className="text-lg font-semibold text-emerald-300 mb-3">
                      {item.title}
                    </h3>

                    {/* Value */}
                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-3">
                      {item.value}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-emerald-200/80">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contract Address Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-emerald-200 mb-6">
              Contract Address
            </h3>
            <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-6 max-w-2xl mx-auto relative overflow-hidden">
              {/* Abstract Background for Contract */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-teal-500/50 to-transparent" />
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" />
                <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-teal-500/30 to-transparent" />
              </div>
              
              <code className="text-sm md:text-base text-emerald-300 font-mono break-all bg-black/30 px-4 py-3 rounded-lg block relative z-10">
                FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump
              </code>
              <div className="mt-4 flex justify-center">
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    navigator.clipboard.writeText('FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump');
                  }}
                >
                  Copy Address
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 