"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface HeaderProps {
  scale: any;
  opacity: any;
  isVideoVisible: boolean;
}

export default function Header({ scale, opacity, isVideoVisible }: HeaderProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background-start via-background-mid to-background-end performance-optimized">
      <AnimatePresence>
        <main className="relative min-h-screen w-full overflow-hidden">
          {/* Enhanced Background with Multiple Layers */}
          <div className="absolute inset-0">
            {/* Video Layer with Better Blend */}
            <div className="absolute inset-0 z-0">
              {/* Sophisticated Multi-layer Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-900/80 to-emerald-950/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-slate-900/30" />
            </div>

            {/* Animated Background Patterns - dikurangi intensitas */}
            <div className="absolute inset-0 z-5">
              {/* Hexagonal Pattern */}
              <div className="absolute inset-0 opacity-3" 
                   style={{
                     backgroundImage: `radial-gradient(circle at 1px 1px, #0FC49A 1px, transparent 0)`,
                     backgroundSize: '80px 80px'
                   }} />
              
              {/* Flowing Lines - dikurangi jumlah */}
              <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 1000 1000">
                <motion.path
                  d="M0,500 Q250,300 500,500 T1000,500"
                  stroke="#0FC49A"
                  strokeWidth="1"
                  fill="none"
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 6, ease: "linear" }}
                />
              </svg>
            </div>
          </div>

          {/* Main Content Grid Layout */}
          <div className="relative z-20 min-h-screen grid grid-cols-1 lg:grid-cols-5 items-center">
           
            {/* Right Mascot Section - Show first on mobile, 2/5 on desktop */}
            <div className="lg:col-span-2 flex items-center justify-center p-4 sm:p-8 lg:p-16 order-1 lg:order-2 mt-16 sm:mt-12 lg:mt-0 min-h-[300px] lg:min-h-0">
              {/* Mascot Container with Enhanced Effects */}
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                {/* Rotating Ring Background - dikurangi intensitas */}
                <motion.div
                  className="absolute inset-0 rounded-full border border-emerald-400/10"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "center" }}
                />

                {/* Pulsing Glow Effect - dikurangi intensitas */}
                <motion.div
                  className="absolute inset-0 bg-gradient-radial from-emerald-400/10 via-emerald-400/3 to-transparent rounded-full"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.5, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />

                {/* Main Mascot Image - Optimized */}
                <div className="relative w-full h-full z-10">
                  <Image
                    src="/assets/gif/yeti1.gif"
                    alt="YETI Mascot"
                    fill
                    className="object-contain drop-shadow-2xl"
                    priority
                    sizes="(max-width: 768px) 60vw, (max-width: 1200px) 40vw, 30vw"
                    style={{ 
                      filter: "drop-shadow(0 0 20px rgba(15, 196, 154, 0.2))",
                      willChange: "auto",
                      transform: "translateZ(0)"
                    }}
                  />
                </div>

                {/* Floating Particles - dikurangi jumlah */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-emerald-400/40 rounded-full"
                    animate={{
                      x: [0, Math.cos(i * 90 * Math.PI / 180) * 80],
                      y: [0, Math.sin(i * 90 * Math.PI / 180) * 80],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.5,
                      repeatType: "reverse",
                    }}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Left Content Section - Show second on mobile, 3/5 on desktop */}
            <div className="lg:col-span-3 px-8 md:px-16 lg:px-24 py-8 lg:py-0 order-2 lg:order-1">
              {/* Content Container with Glass Effect */}
              <div className="relative">
                {/* Backdrop Blur Card */}
                <div
                  className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl border border-white/10"
                  style={{ transform: 'translateZ(0)' }}
                />
                
                <div className="relative z-10 p-8 lg:p-12">
                  {/* Welcome Badge */}
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm rounded-full border border-emerald-400/30">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-emerald-300 tracking-wider uppercase">
                        Welcome to the Future
                      </span>
                    </div>
                  </div>

                  {/* Main Title with Enhanced Styling */}
                  <h1 className="mb-6 font-display text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight">
                    <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent drop-shadow-2xl">
                      $YETI
                    </span>
                    {/* Text Shadow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 bg-clip-text text-transparent blur-xl scale-110 -z-10">
                      $YETI
                    </div>
                  </h1>

                  {/* Enhanced Description */}
                  <div className="mb-8">
                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed mb-4 font-light">
                      The fastest-growing <span className="text-emerald-400 font-medium">degen blogger</span> in the Solana ecosystem
                    </p>
                    <p className="text-lg text-slate-400 leading-relaxed max-w-2xl">
                      Join thousands of traders and investors who trust YETI for cutting-edge insights, 
                      alpha calls, and the most authentic takes in DeFi.
                    </p>
                  </div>

                  {/* Enhanced Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    {/* Primary CTA Button */}
                    <motion.a
                      href="#buy"
                      className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        <span>Buy $YETI Now</span>
                        <motion.svg 
                          className="w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5-5 5M6 12h12" />
                        </motion.svg>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.a>

                    {/* Telegram Button */}
                    <motion.a
                      href="https://t.me/YetiSolana"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden rounded-2xl border-2 border-emerald-400/30 text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-emerald-400/60"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="relative z-10 flex items-center gap-2 font-semibold text-lg">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.504 1.201-.825 1.23-.703.064-1.237-.461-1.92-.903-1.067-.697-1.672-1.131-2.707-1.812-1.202-.791-.423-1.225.262-1.935.18-.185 3.294-3.021 3.354-3.277a.24.24 0 00-.059-.232c-.067-.067-.186-.044-.264-.026-.113.024-1.922 1.219-5.425 3.584-.513.352-.977.524-1.392.516-.458-.012-1.338-.262-1.991-.477-.802-.275-1.44-.42-1.384-.887.029-.242.357-.494.984-.757 3.87-1.679 6.449-2.789 7.736-3.329 3.683-1.547 4.449-1.815 4.94-1.823.438-.008.941.107 1.211.344.182.158.234.369.195.584z"/>
                        </svg>
                        Join Telegram
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Ambient Effects - dikurangi intensitas */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Enhanced Gradient Orbs - dikurangi ukuran */}
            <motion.div 
              className="absolute top-1/4 left-1/6 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/6 w-56 h-56 bg-teal-500/5 rounded-full blur-3xl"
              animate={{
                scale: [1.1, 1, 1.1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 3,
              }}
            />

            {/* Enhanced Floating Elements - dikurangi jumlah */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
                  animate={{
                    y: ["100vh", "-10vh"],
                    x: [0, Math.sin(i) * 80],
                    opacity: [0, 1, 1, 0],
                    scale: [0, 1, 1, 0],
                  }}
                  transition={{
                    duration: 20 + i * 3,
                    repeat: Infinity,
                    delay: i * 2,
                    ease: "linear",
                  }}
                  style={{
                    left: `${15 + (i * 12) % 70}%`,
                  }}
                />
              ))}
            </div>
          </div>
        </main>
      </AnimatePresence>
    </div>
  );
} 