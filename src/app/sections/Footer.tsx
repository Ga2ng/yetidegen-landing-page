"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    social: [
      { name: 'Twitter', url: '#', icon: '𝕏' },
      { name: 'Telegram', url: '#', icon: '📱' },
      { name: 'Discord', url: '#', icon: '🎮' },
      { name: 'Instagram', url: '#', icon: '📷' },
      { name: 'TikTok', url: '#', icon: '🎵' }
    ],
    quickLinks: [
      { name: 'How to Buy', url: '#how-to-buy' },
      { name: 'Roadmap', url: '#roadmap' },
      { name: 'Partners', url: '#partners' },
      { name: 'FAQ', url: '#faq' }
    ],
    resources: [
      { name: 'Contract', url: '#', address: 'FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump' },
      { name: 'DexScreener', url: '#' },
      { name: 'Birdeye', url: '#' },
      { name: 'CoinGecko', url: '#' }
    ]
  };

  return (
    <footer className="relative bg-gradient-to-br from-black via-slate-900 to-emerald-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent mb-4">
                  YETI
                </h3>
                <p className="text-emerald-200/80 mb-6 max-w-md">
                  The fastest-growing degen blogger. Building the ultimate meme empire with the most powerful crypto community.
                </p>
                
                {/* Social Links */}
                <div className="flex gap-4">
                  {footerLinks.social.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-full border border-emerald-400/30 flex items-center justify-center text-emerald-300 hover:border-emerald-300/50 transition-all duration-300"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-emerald-300 mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {footerLinks.quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={link.url}
                      className="text-emerald-200/80 hover:text-emerald-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-emerald-300 mb-4">Resources</h4>
              <ul className="space-y-2">
                {footerLinks.resources.map((resource, index) => (
                  <motion.li
                    key={resource.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a 
                      href={resource.url}
                      className="text-emerald-200/80 hover:text-emerald-300 transition-colors duration-300"
                    >
                      {resource.name}
                    </a>
                    {resource.address && (
                      <div className="text-xs text-emerald-200/60 mt-1 break-all">
                        {resource.address}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contract Address Highlight */}
          <motion.div 
            className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h4 className="text-lg font-semibold text-emerald-300 mb-2">Contract Address</h4>
              <code className="text-sm text-emerald-200 font-mono break-all bg-black/30 px-4 py-2 rounded-lg">
                FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump
              </code>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <div className="border-t border-emerald-400/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div 
                className="text-emerald-200/60 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                © {currentYear} $YETI. ALL RIGHTS RESERVED
              </motion.div>
              
              <motion.div 
                className="flex gap-6 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                <a href="#" className="text-emerald-200/60 hover:text-emerald-300 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-emerald-200/60 hover:text-emerald-300 transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-emerald-200/60 hover:text-emerald-300 transition-colors">
                  Disclaimer
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 