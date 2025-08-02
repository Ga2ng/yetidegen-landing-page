"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  
  const faqs = [
    {
      id: 1,
      question: "What's the point of YETI?",
      answer: "YETI is here to have fun, make noise, and bring people together through memes, culture, and chaos. A place where artists, degens, and internet misfits can build something wild—together."
    },
    {
      id: 2,
      question: "Can I buy YETI with Binance or Coinbase?",
      answer: "You can use Binance or Coinbase using your Web3 wallet. From there, you can connect to a Solana DEX and buy YETI easily."
    },
    {
      id: 3,
      question: "What chain is YETI on?",
      answer: "YETI is a meme token native to the Solana blockchain."
    },
    {
      id: 4,
      question: "Is YETI related to Yeti DYOR?",
      answer: "No, we're different teams with separate socials and no connection. We respect what they're doing, but we're not related in any way. Just like there are many Pepes or Wolf tokens out there, having the same character doesn't mean it's the same project. What we can say is this: YETI was the first Yeti launched and the first tokenized Yeti community."
    },
    // {
    //   id: 5,
    //   question: "How do I store my YETI tokens?",
    //   answer: "You can store your YETI tokens in any Solana-compatible wallet like Phantom, Solflare, or Backpack. Make sure to keep your private keys safe and never share them with anyone."
    // },
    // {
    //   id: 6,
    //   question: "What's the total supply of YETI?",
    //   answer: "The total supply of YETI is 800 million tokens. The LP is 100% burned and the contract is renounced, ensuring maximum security for holders."
    // }
  ];

  return (
    <section id="faq" className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              FAQS
            </h2>
            <p className="text-xl md:text-2xl text-emerald-300 max-w-3xl mx-auto">
              Everything you need to know about YETI.
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-emerald-500/5 transition-colors duration-300"
                  onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
                >
                  <h3 className="text-lg md:text-xl font-semibold text-emerald-300 pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    className="flex-shrink-0 w-6 h-6 text-emerald-300"
                    animate={{ rotate: openFAQ === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openFAQ === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-emerald-200/90 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 