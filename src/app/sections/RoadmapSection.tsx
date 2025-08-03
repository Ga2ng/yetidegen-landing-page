"use client";
import { motion } from "framer-motion";

export default function RoadmapSection() {
  const phases = [
    {
      id: 1,
      title: "The Meme Empire",
      status: "completed",
      items: [
        { text: "Establish platforms (TG, X, IG, TT, YT, website)", completed: true },
        { text: "X blue checkmark", completed: true },
        { text: "Marketing wallet", completed: true },
        { text: "Full time raiders", completed: true },
        { text: "CMC official listing", completed: true },
        { text: "7 animated videos per week", completed: true },
        { text: "CoinGecko Listing", completed: true },
        { text: "Daily Drawings", completed: true },
        { text: "Support Artists", completed: true },
        { text: "Animated Banner Dexscreener", completed: true },
        { text: "500k followers on TikTok", completed: false },
        { text: "Paid social media advertising campaign", completed: false },
        { text: "Yeti merch designs", completed: false }
      ]
    },
    {
      id: 2,
      title: "MarketCap Milestones",
      status: "in-progress",
      items: [
        { text: "1M market cap", completed: true },
        { text: "5M market cap", completed: true },
        { text: "10M market cap", completed: true },
        { text: "50M market cap", completed: false },
        { text: "100M market cap", completed: false },
        { text: "500M market cap", completed: false },
        { text: "1B Market cap", completed: false },
        { text: "5B Market cap", completed: false }
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
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
              Roadmap
            </h2>
            <p className="text-xl md:text-2xl text-emerald-300 max-w-3xl mx-auto">
              Our journey to build the ultimate meme empire.
            </p>
          </motion.div>

          {/* Both Phases Display */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {phases.map((phase, phaseIndex) => (
              <motion.div
                key={phase.id}
                className="bg-gradient-to-br from-slate-900/80 to-black/90 backdrop-blur-md rounded-3xl border border-emerald-400/30 p-8 shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: phaseIndex * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Phase Header */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    {phase.status === "completed" ? (
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ) : (
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-3">
                        <div className="w-3 h-3 bg-white rounded-full animate-pulse" />
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-emerald-300">
                      {phase.title}
                    </h3>
                  </div>
                </div>

                {/* Timeline Items */}
                <div className="space-y-3">
                  {phase.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-start p-3 rounded-lg transition-all duration-300 ${
                        item.completed 
                          ? "bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-400/30" 
                          : "bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-400/30"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: (phaseIndex * 0.1) + (index * 0.05) }}
                      viewport={{ once: true }}
                    >
                      <div className="flex-shrink-0 mr-3 mt-1">
                        {item.completed ? (
                          <div className="w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        ) : (
                          <div className="w-5 h-5 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                          </div>
                        )}
                      </div>
                      <p className={`text-sm leading-relaxed ${
                        item.completed 
                          ? "text-emerald-200 line-through" 
                          : "text-orange-200"
                      }`}>
                        {item.text}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 