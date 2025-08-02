"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PartnersSection() {
  const partners = [
    { 
      logo: "/assets/images/dexscreener.png",
      alt: "DexScreener Logo"
    },
    {  
      logo: "/assets/images/dextools.webp",
      alt: "DexTools Logo"
    },
    { 
      logo: "/assets/images/applePay.png",
      alt: "Apple Pay Logo"
    },
    { 
      logo: "/assets/images/PayPal.png",
      alt: "PayPal Logo"
    },
    { 
      logo: "/assets/images/visa.png",
      alt: "Visa Logo"
    },
    { 
      logo: "/assets/images/bybit.jpg",
      alt: "Bybit Logo"
    },
    { 
      logo: "/assets/images/crypto.png",
      alt: "crypto.com Logo"
    },
    { 
      logo: "/assets/images/coingecko.png",
      alt: "coingecko Logo"
    },
    { 
      logo: "/assets/images/coinmarket.png",
      alt: "coinmarketcap Logo"
    },
  ];

  return (
    <section id="partners" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
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
              PARTNERS
            </h2>
            {/* <p className="text-xl md:text-2xl text-emerald-300 max-w-3xl mx-auto">
              Building the future of meme culture with trusted partners.
            </p> */}
          </motion.div>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.alt}
                className="group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-slate-900/80 to-black/90 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-8 h-48 flex flex-col justify-center items-center text-center hover:border-emerald-300/50 hover:bg-gradient-to-br hover:from-slate-800/80 hover:to-black/90 transition-all duration-300 group-hover:scale-105">
                  <div className={`relative mb-4 group-hover:scale-110 transition-transform duration-300 ${
                    partner.alt === "coingecko Logo" || partner.alt === "coinmarketcap Logo" 
                      ? "w-48 h-48" 
                      : "w-40 h-40"
                  }`}>
                    <Image
                      src={partner.logo}
                      alt={partner.alt}
                      fill
                      className="object-contain"
                      sizes={partner.alt === "coingecko Logo" || partner.alt === "coinmarketcap Logo" 
                        ? "(max-width: 768px) 192px, 192px" 
                        : "(max-width: 768px) 160px, 160px"
                      }
                    />
                  </div>
                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 