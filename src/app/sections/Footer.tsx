"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const officialLinks = [
    { name: 'DexScreener', url: 'https://dexscreener.com/solana/FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump' },
    { name: 'Birdeye', url: 'https://birdeye.so/token/FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump' },
    { name: 'CoinGecko', url: 'https://www.coingecko.com/en/coins/yeti' },
    { name: 'CoinMarketCap', url: 'https://coinmarketcap.com/currencies/yeti/' }
  ];

  const socialLinks = [
    { name: 'Twitter', url: 'https://twitter.com/yetidegen', icon: '𝕏' },
    { name: 'Telegram', url: 'https://t.me/yetidegen', icon: '📱' },
    { name: 'Discord', url: 'https://discord.gg/yetidegen', icon: '🎮' },
    { name: 'Instagram', url: 'https://instagram.com/yetidegen', icon: '📷' },
    { name: 'TikTok', url: 'https://tiktok.com/@yetidegen', icon: '🎵' },
    { name: 'YouTube', url: 'https://youtube.com/@yetidegen', icon: '📺' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-black via-slate-900 to-emerald-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-72 h-72 bg-emerald-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-16 right-16 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Left Side - GIF and Main Content (3/5) */}
            <div className="lg:col-span-3">
              <motion.div 
                className="flex flex-col items-center lg:items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* GIF Container - Optimized Size */}
                <div className="relative w-48 h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 mb-8">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-xl"></div>
                  <Image
                    src="/assets/gif/dance.gif"
                    alt="YETI Mascot"
                    fill
                    className="object-contain relative z-10"
                    unoptimized
                    sizes="(max-width: 1024px) 192px, (max-width: 1280px) 224px, 256px"
                  />
                </div>
                
                {/* Title */}
                <h3 className="text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent mb-6 text-center lg:text-left tracking-tight">
                  YETI
                </h3>
                
                {/* Description */}
                <p className="text-emerald-200/80 text-lg lg:text-xl mb-8 max-w-2xl text-center lg:text-left leading-relaxed">
                  The fastest-growing degen blogger. 600M views, 500K followers on TikTok & IG in 3 months. Now he's uniting the most powerful crypto community.
                </p>
                
                {/* Contract Address */}
                <div className="w-full max-w-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-lg rounded-2xl border border-emerald-400/30 p-6 shadow-2xl">
                  <h4 className="text-sm font-semibold text-emerald-300 mb-3 text-center lg:text-left uppercase tracking-wider">Contract Address</h4>
                  <div className="bg-black/40 rounded-xl p-4">
                    <code className="text-sm text-emerald-200 font-mono break-all block">
                      FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump
                    </code>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Links (2/5) */}
            <div className="lg:col-span-2">
              <motion.div 
                className="flex flex-col h-full justify-start pt-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Official Links */}
                <div className="mb-12">
                  <h4 className="text-xl font-bold text-emerald-300 mb-6 uppercase tracking-wider">Official Links</h4>
                  <ul className="space-y-4">
                    {officialLinks.map((link, index) => (
                      <motion.li
                        key={link.name}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group text-emerald-200/80 hover:text-emerald-300 transition-all duration-300 flex items-center text-lg py-2"
                        >
                          <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4 group-hover:scale-125 transition-transform duration-300"></span>
                          <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Social Links */}
                <div>
                  <h4 className="text-xl font-bold text-emerald-300 mb-6 uppercase tracking-wider">Social Media</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-14 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-lg rounded-xl border border-emerald-400/30 flex items-center justify-center text-emerald-300 hover:border-emerald-300/50 hover:from-emerald-500/30 hover:to-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-emerald-400/20 hover:shadow-xl"
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.98 }}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-emerald-400/20 pt-8">
            <motion.div 
              className="text-center text-emerald-200/60 text-sm font-medium tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              © {currentYear} $YETI. ALL RIGHTS RESERVED
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}