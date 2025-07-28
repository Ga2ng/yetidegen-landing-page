"use client";
import { motion } from "framer-motion";

export default function ContentSection() {
  return (
    <motion.div
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #0FC49A 1px, transparent 0)`,
            backgroundSize: '80px 80px'
          }} 
        />
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              Join the Revolution
            </h3>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-12 max-w-4xl mx-auto">
              $YETI isn't just another token. It's a community-driven movement that's changing 
              how we think about decentralized finance, content creation, and digital ownership.
            </p>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
          >
            {[
              {
                icon: "🚀",
                title: "Community Driven",
                description: "Built by the community, for the community. Every decision is made collectively."
              },
              {
                icon: "💎",
                title: "Diamond Hands",
                description: "Long-term vision with sustainable tokenomics and deflationary mechanisms."
              },
              {
                icon: "🌟",
                title: "Alpha Content",
                description: "Get exclusive access to market insights, trends, and investment opportunities."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-8 hover:scale-105 transition-all duration-300"
                whileHover={{ y: -5, scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.15, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.15, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10 p-12">
              <h4 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join the YETI Family?
              </h4>
              <p className="text-xl text-slate-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                Don't miss out on the next big thing in DeFi. Join thousands of early adopters 
                who are already part of the YETI revolution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
                <motion.a
                  href="#buy"
                  className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-xl transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/50"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <span>Get $YETI Now</span>
                    <motion.svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                    </motion.svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>

                <motion.a
                  href="https://t.me/YetiSolana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-10 py-5 overflow-hidden rounded-2xl border-2 border-emerald-400/30 text-white backdrop-blur-sm transition-all duration-300 hover:border-emerald-400/60"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-3 font-bold text-xl">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.504 1.201-.825 1.23-.703.064-1.237-.461-1.92-.903-1.067-.697-1.672-1.131-2.707-1.812-1.202-.791-.423-1.225.262-1.935.18-.185 3.294-3.021 3.354-3.277a.24.24 0 00-.059-.232c-.067-.067-.186-.044-.264-.026-.113.024-1.922 1.219-5.425 3.584-.513.352-.977.524-1.392.516-.458-.012-1.338-.262-1.991-.477-.802-.275-1.44-.42-1.384-.887.029-.242.357-.494.984-.757 3.87-1.679 6.449-2.789 7.736-3.329 3.683-1.547 4.449-1.815 4.94-1.823.438-.008.941.107 1.211.344.182.158.234.369.195.584z"/>
                    </svg>
                    Join Community
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Section 3 Ambient Effects */}
      <motion.div
        className="absolute inset-0 pointer-events-none z-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Enhanced Gradient Orbs */}
        <motion.div 
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.4, 1],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-1/5 w-60 h-60 bg-teal-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.4, 1, 1.4],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />

        {/* Enhanced Floating Elements */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
              animate={{
                y: ["110vh", "-10vh"],
                x: [0, Math.sin(i * 0.5) * 150],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0, 1.2, 1.2, 0],
              }}
              transition={{
                duration: 18 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "linear",
              }}
              style={{
                left: `${8 + (i * 6) % 84}%`,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
} 