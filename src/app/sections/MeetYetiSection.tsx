"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import LazyGifCard from "../components/LazyGifCard";

export default function MeetYetiSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Delay loading untuk mengurangi lag awal
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-emerald-900 overflow-hidden">
      {/* Simple Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(15, 196, 154, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(15, 196, 154, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 0'
          }}
        />
      </div>

      {/* Simple Background Blobs - Reduced opacity and blur */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#0FC49A]/5 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-emerald-500/3 rounded-full blur-2xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#0FC49A]/3 rounded-full blur-2xl" />
      </div>

      {/* Reduced Galaxy Stars - Only 8 instead of 15 */}
      {isLoaded && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#0FC49A]/40 rounded-full"
              animate={{
                y: ["100vh", "-10vh"],
                x: [0, Math.sin(i) * 100],
                opacity: [0, 0.6, 0.6, 0],
                scale: [0, 1, 1, 0],
              }}
              transition={{
                duration: 25 + i * 2,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "linear",
              }}
              style={{
                left: `${15 + (i * 8) % 70}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* Static Stars - Reduced to 2 instead of 3 */}
      {isLoaded && (
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0FC49A]/60 rounded-full"
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="absolute top-3/4 right-1/3 w-1 h-1 bg-[#0FC49A]/40 rounded-full"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 2,
            }}
          />
        </div>
      )}

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              MEET YETI
            </h2>
            <p className="text-2xl md:text-3xl text-emerald-300 max-w-4xl mx-auto leading-relaxed font-medium">
              the fastest-growing degen blogger
            </p>
          </motion.div>

          {/* Hero Section with GIF */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Left Column - Text Content */}
            <motion.div 
              className="space-y-8 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-emerald-200 leading-relaxed">
                  It started on social media—a degen character making noise, taking risks, and catching fire fast. 
                  Now he's the most viral mascot around, with <span className="font-bold text-[#0FC49A]">billions of views</span> and 
                  <span className="font-bold text-[#0FC49A]"> thousands of followers</span> across platforms.
                </p>
                
                <p className="text-lg md:text-xl text-emerald-200 leading-relaxed">
                  But YETI's not alone. Behind him is the first tokenized community of yetis—a growing crew that gets the joke, 
                  loves the chaos, and believes in where this is going.
                </p>
                
                <p className="text-lg md:text-xl text-emerald-200 leading-relaxed">
                  It's a full-on community takeover, built by the people, for the culture. And we support the artists making it all come to life.
                </p>
                
                <div className="pt-6">
                  <p className="text-2xl md:text-3xl font-semibold text-white">
                    It's simple. If you know, you know.
                  </p>
                  <p className="text-2xl md:text-3xl font-bold text-[#0FC49A] mt-3">
                    This is YETI.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Hero GIF with LazyGifCard */}
            <motion.div 
              className="relative order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="relative h-[400px] md:h-[500px] lg:h-[500px] flex items-center justify-center">
                {/* Card 1 - Top Left Zig */}
                <div className="absolute top-0 left-0 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <LazyGifCard
                    src="/assets/gif/yeti4.gif"
                    alt="YETI Card 1"
                    borderColor="border-[#0FC49A]/40"
                    gradientFrom="from-[#0FC49A]/8"
                    gradientTo="to-emerald-500/8"
                    overlayColor="from-[#0FC49A]/10"
                    initialAnimation={{ x: -50, y: -30, rotate: -10 }}
                    delay={0.3}
                    duration={0.6}
                  />
                </div>

                {/* Card 2 - Center Right Zag */}
                <div className="absolute top-12 md:top-16 right-0 left-[180px] md:left-[200px] lg:left-[250px] w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <LazyGifCard
                    src="/assets/gif/yeti5.gif"
                    alt="YETI Card 2"
                    borderColor="border-emerald-400/40"
                    gradientFrom="from-emerald-400/8"
                    gradientTo="to-[#0FC49A]/8"
                    overlayColor="from-emerald-400/10"
                    initialAnimation={{ x: 50, y: -20, rotate: 15 }}
                    delay={0.4}
                    duration={0.6}
                  />
                </div>

                {/* Card 3 - Bottom Left Zig */}
                <div className="absolute bottom-0 left-6 md:left-8 w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  <LazyGifCard
                    src="/assets/gif/yeti6.gif"
                    alt="YETI Card 3"
                    borderColor="border-emerald-300/40"
                    gradientFrom="from-emerald-300/8"
                    gradientTo="to-[#0FC49A]/8"
                    overlayColor="from-emerald-300/10"
                    initialAnimation={{ x: -40, y: 50, rotate: -15 }}
                    delay={0.5}
                    duration={0.6}
                  />
                </div>

                {/* Simplified Connection Lines */}
                {isLoaded && (
                  <svg className="absolute inset-0 w-full h-full pointer-events-none">
                    <motion.path
                      d="M 120 90 Q 240 60 360 120"
                      stroke="#0FC49A"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.8 }}
                    />
                    <motion.path
                      d="M 360 120 Q 240 180 120 270"
                      stroke="emerald-400"
                      strokeWidth="1.5"
                      fill="none"
                      opacity="0.2"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                    />
                  </svg>
                )}
              </div>
            </motion.div>
          </div>
          
          {/* Bottom CTA */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.button 
              className="bg-gradient-to-r from-[#0FC49A] to-emerald-500 text-white px-12 py-6 rounded-full text-xl font-bold shadow-xl hover:shadow-[#0FC49A]/20 transition-all duration-300 relative overflow-hidden group"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-[#0FC49A] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Join the Community</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 