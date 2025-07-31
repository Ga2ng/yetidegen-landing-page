"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface LazyGifCardProps {
  src: string;
  alt: string;
  className?: string;
  borderColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  overlayColor?: string;
  initialAnimation?: {
    x: number;
    y: number;
    rotate: number;
  };
  delay?: number;
  duration?: number;
}

export default function LazyGifCard({
  src,
  alt,
  className = "",
  borderColor = "border-[#0FC49A]/40",
  gradientFrom = "from-[#0FC49A]/8",
  gradientTo = "to-emerald-500/8",
  overlayColor = "from-[#0FC49A]/10",
  initialAnimation = { x: 0, y: 0, rotate: 0 },
  delay = 0,
  duration = 0.6
}: LazyGifCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Delay untuk staggered loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, delay * 1000);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [delay]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Disable animations for mobile
  const shouldAnimate = !isMobile;

  return (
    <motion.div
      className={`relative w-full h-full rounded-2xl overflow-hidden border-4 ${borderColor} shadow-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} backdrop-blur-sm ${className}`}
      initial={shouldAnimate ? { 
        opacity: 0, 
        x: initialAnimation.x, 
        y: initialAnimation.y, 
        rotate: initialAnimation.rotate 
      } : { opacity: 1, x: 0, y: 0, rotate: 0 }}
      animate={isLoaded && shouldAnimate ? { 
        opacity: 1, 
        x: 0, 
        y: 0, 
        rotate: 0 
      } : { opacity: 1, x: 0, y: 0, rotate: 0 }}
      transition={{ 
        duration: shouldAnimate ? duration : 0,
        ease: "easeOut"
      }}
      whileHover={shouldAnimate ? { 
        scale: 1.02, 
        rotate: initialAnimation.rotate * 0.3,
        z: 10 
      } : {}}
    >
      {/* Loading placeholder */}
      {!imageLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-[#0FC49A] border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      {/* GIF Image */}
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onLoad={handleImageLoad}
        initial={{ opacity: 0 }}
        animate={{ opacity: imageLoaded ? 1 : 0 }}
        transition={{ duration: shouldAnimate ? 0.5 : 0 }}
        loading="lazy"
      />
      
      {/* Overlay gradient */}
      <div className={`absolute inset-0 bg-gradient-to-t ${overlayColor} to-transparent`} />
    </motion.div>
  );
} 