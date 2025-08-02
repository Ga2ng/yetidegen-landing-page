"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0);
  
  const phases = [
    {
      id: 1,
      title: "The Meme Empire",
      status: "completed",
      items: [
        "Establish platforms (TG, X, IG, TT, YT, website)",
        "X blue checkmark",
        "Marketing wallet",
        "Full time raiders",
        "CMC official listing",
        "7 animated videos per week",
        "CoinGecko Listing",
        "Daily Drawings",
        "Support Artists",
        "Animated Banner Dexscreener",
        "500k followers on TikTok",
        "Paid social media advertising campaign",
        "Yeti merch designs"
      ]
    },
    {
      id: 2,
      title: "MarketCap Milestones",
      status: "in-progress",
      items: [
        "1M market cap",
        "5M market cap", 
        "10M market cap",
        "50M market cap",
        "100M market cap",
        "500M market cap",
        "1B Market cap",
        "5B Market cap"
      ]
    }
  ];

  return (
    <section id="roadmap" className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Roadmap
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Our journey to build the ultimate meme empire.
            </p>
          </motion.div>

          {/* Phase Selector */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-emerald-100">
              {phases.map((phase, index) => (
                <motion.button
                  key={phase.id}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activePhase === index
                      ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg'
                      : 'text-gray-600 hover:text-emerald-600'
                  }`}
                  onClick={() => setActivePhase(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {phase.title}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Phase Content */}
          <motion.div 
            key={activePhase}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-xl border border-emerald-100 p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">
                {phases[activePhase].title}
              </h3>
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${
                phases[activePhase].status === 'completed' 
                  ? 'bg-green-100 text-green-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                <div className={`w-2 h-2 rounded-full mr-2 ${
                  phases[activePhase].status === 'completed' ? 'bg-green-500' : 'bg-blue-500'
                }`} />
                {phases[activePhase].status === 'completed' ? 'Completed' : 'In Progress'}
              </div>
            </div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {phases[activePhase].items.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Progress Overview */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Phase 1</div>
              <div className="text-gray-600">Foundation</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '100%' }} />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Phase 2</div>
              <div className="text-gray-600">Growth</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '60%' }} />
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">Phase 3</div>
              <div className="text-gray-600">Expansion</div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full" style={{ width: '20%' }} />
              </div>
            </div>
          </motion.div>

          {/* Future Vision */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              The Future is Bright
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              We're building more than just a meme coin. We're creating a movement, a community, 
              and a cultural phenomenon that will stand the test of time.
            </p>
            <motion.button 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Join the Journey
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 