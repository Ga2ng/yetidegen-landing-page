"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface VideoSectionProps {
  videoOpacity: any;
  videoScale: any;
  videoY: any;
  isVideoVisible: boolean;
  scrollToTop: () => void;
}

export default function VideoSection({ 
  videoOpacity, 
  videoScale, 
  videoY, 
  isVideoVisible, 
  scrollToTop 
}: VideoSectionProps) {
  const [copied, setCopied] = useState(false);
  const coinAddress = "FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(coinAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Full Screen Video Background */}
      <div className="absolute inset-0">
        {/* Desktop Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block h-full w-full object-cover"
        >
          <source src="/assets/MAINVIDEO.webm" type="video/webm" />
        </video>
        
        {/* Mobile Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block md:hidden h-full w-full object-cover"
        >
          <source src="/assets/PATAPIM.webm" type="video/webm" />
        </video>
        
        {/* Optimized Dark Overlay */}
        {/* Main dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Subtle color tint - sangat minimal */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/10 via-transparent to-teal-950/15" />
        
        {/* Enhanced readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
        
        {/* Center focus for text */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black/20" />
      </div>

      {/* Video Content Overlay */}
      <div className="relative z-20 min-h-screen flex items-center justify-center">
        <div className="text-center px-8 max-w-5xl">
          {/* Main Title */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
            The Most Viral Mascot
          </h2>

          {/* Subtitle */}
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-emerald-400">
            $YETI
          </h3>

          {/* Main Description */}
          <div className="mb-12 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-6">
              YETI has pulled in <span className="text-emerald-400 font-semibold">millions of views</span> and built a following of 
              <span className="text-emerald-400 font-semibold"> thousands</span> across social media.
            </p>
            <p className="text-lg md:text-xl text-slate-400 leading-relaxed">
              People don't just laugh at his memes and videos—they <span className="text-emerald-300 font-medium">relate</span>. 
              Because at some point, we've all felt like him. A little lost, a little degen, 
              just trying to figure it out.
            </p>
          </div>

          {/* Coin Address Section */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 p-6 max-w-2xl mx-auto">
              <h4 className="text-lg font-semibold text-emerald-300 mb-4">Contract Address</h4>
              <div className="flex items-center justify-between gap-4 bg-black/30 rounded-xl p-4 border border-emerald-400/20">
                <code className="text-sm md:text-base text-emerald-200 font-mono break-all">
                  {coinAddress}
                </code>
                <motion.button
                  onClick={copyToClipboard}
                  className="flex-shrink-0 p-2 bg-emerald-500/20 hover:bg-emerald-500/30 rounded-lg transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {copied ? (
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-emerald-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </motion.button>
              </div>
              {copied && (
                <motion.p 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm mt-2"
                >
                  Address copied to clipboard!
                </motion.p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Optimized Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {/* Reduced Glowing Orbs */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-48 h-48 bg-emerald-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-teal-500/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 3,
          }}
        />

        {/* Reduced Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
              animate={{
                y: ["100vh", "-10vh"],
                x: [0, Math.sin(i) * 150],
                opacity: [0, 1, 1, 0],
                scale: [0, 1.2, 1.2, 0],
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "linear",
              }}
              style={{
                left: `${10 + (i * 10) % 80}%`,
              }}
            />
          ))}
        </div>

        {/* Full Section Grid Background - Optimal Visibility */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 196, 154, 0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 196, 154, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            backgroundPosition: '0 0, 0 0'
          }}
        />
      </div>

      {/* Back to Top Button */}
      <motion.button
        className="absolute bottom-8 right-8 z-30 p-4 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-full border border-emerald-400/30 text-white hover:scale-110 transition-all duration-300"
        whileHover={{ y: -2, scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </motion.button>
    </div>
  );
} 