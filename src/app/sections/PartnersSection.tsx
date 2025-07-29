"use client";
import { motion } from "framer-motion";

export default function PartnersSection() {
  const partners = [
    { name: "Phantom", logo: "👻", description: "Leading Solana Wallet" },
    { name: "Raydium", logo: "🌊", description: "DEX Platform" },
    { name: "Jupiter", logo: "🪐", description: "Aggregator" },
    { name: "Birdeye", logo: "👁️", description: "Analytics Platform" },
    { name: "DexScreener", logo: "📊", description: "Market Data" },
    { name: "CoinGecko", logo: "🦎", description: "Crypto Tracker" }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-emerald-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
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
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              PARTNERS
            </h2>
            <p className="text-xl md:text-2xl text-emerald-300 max-w-3xl mx-auto">
              Building the future of meme culture with trusted partners.
            </p>
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-8 h-64 flex flex-col justify-center items-center text-center hover:border-emerald-300/50 transition-all duration-300 group-hover:scale-105">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {partner.logo}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors">
                    {partner.name}
                  </h3>
                  
                  <p className="text-emerald-200/80 text-sm">
                    {partner.description}
                  </p>
                  
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Partnership Highlight */}
          <motion.div 
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-3xl border border-emerald-400/30 p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-3xl font-bold text-emerald-300 mb-6">
                Strategic Partnerships
              </h3>
              <p className="text-lg text-emerald-200 mb-8 max-w-3xl mx-auto">
                We collaborate with leading platforms in the Solana ecosystem to provide the best experience for our community. 
                From secure wallets to powerful trading tools, our partners help us build a stronger, more accessible ecosystem.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <div className="text-sm text-emerald-300">Secure</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">24/7</div>
                  <div className="text-sm text-emerald-300">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Fast</div>
                  <div className="text-sm text-emerald-300">Transactions</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Low</div>
                  <div className="text-sm text-emerald-300">Fees</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Become a Partner CTA */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-emerald-300 mb-6">
              Want to Partner with YETI?
            </h3>
            <motion.button 
              className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 