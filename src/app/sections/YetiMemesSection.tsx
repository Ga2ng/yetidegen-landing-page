"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

interface Meme {
  id: number;
  video: string;
  fallback?: string;
  poster?: string;
  isImage?: boolean;
}

export default function YetiMemesSection() {
  const [activeMeme, setActiveMeme] = useState(0);
  const [isIOS, setIsIOS] = useState(false);
  const [isSafari, setIsSafari] = useState(false);
  const [videoErrors, setVideoErrors] = useState<Set<number>>(new Set());
  const [webmSupported, setWebmSupported] = useState<boolean | null>(null);
  
  // Detect device and browser
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const isIOSDevice = /iPad|iPhone|iPod/.test(userAgent);
    const isSafariBrowser = /Safari/.test(userAgent) && !/Chrome/.test(userAgent);
    
    setIsIOS(isIOSDevice);
    setIsSafari(isSafariBrowser);
    
    // Check WebM support
    const checkWebMSupport = () => {
      if (typeof document === 'undefined') return false;
      const video = document.createElement('video');
      const canPlayWebM = video.canPlayType('video/webm; codecs="vp8, vorbis"');
      const canPlayWebM2 = video.canPlayType('video/webm; codecs="vp9"');
      return canPlayWebM !== '' || canPlayWebM2 !== '';
    };
    
    setWebmSupported(checkWebMSupport());
  }, []);
  
  const memes: Meme[] = [
    { 
      id: 1, 
      video: "/assets/yetivid8.webm",
      fallback: "/assets/yetivid8.mp4",
      poster: "/assets/images/yeti1_poster.jpg"
    },
    { 
      id: 2, 
      video: "/assets/PATAPIM.webm",
      fallback: "/assets/PATAPIM.mp4",
      poster: "/assets/images/patapim_poster.jpg"
    },
    { 
      id: 3, 
      video: "/assets/images/yeti7.webp",
      isImage: true
    },
    { 
      id: 4, 
      video: "/assets/coin.webm",
      fallback: "/assets/coin.mp4",
      poster: "/assets/images/coin_poster.jpg"
    },
    { 
      id: 5, 
      video: "/assets/pepe.webm",
      fallback: "/assets/pepe.mp4",
      poster: "/assets/images/pepe_poster.jpg"
    },
    { 
      id: 6, 
      video: "/assets/images/yeti8.webp",
      isImage: true
    },
    { 
      id: 7, 
      video: "/assets/pump_it.webm",
      fallback: "/assets/pump_it.mp4",
      poster: "/assets/images/pump_it_poster.jpg"
    },
    { 
      id: 8, 
      video: "/assets/soldiers.webm",
      fallback: "/assets/soldiers.mp4",
      poster: "/assets/images/soldiers_poster.jpg"
    },
    { 
      id: 9, 
      video: "/assets/images/yeti9.webp",
      isImage: true
    },
    { 
      id: 10, 
      video: "/assets/one_of.webm",
      fallback: "/assets/one_of.mp4",
      poster: "/assets/images/one_of_poster.jpg"
    },
    { 
      id: 11, 
      video: "/assets/images/yeti10.webp",
      isImage: true
    },
    { 
      id: 12, 
      video: "/assets/yetivid1.webm",
      fallback: "/assets/yetivid1.mp4",
      poster: "/assets/images/yeti1_poster.jpg"
    },
    { 
      id: 13, 
      video: "/assets/yetivid2.webm",
      fallback: "/assets/yetivid2.mp4",
      poster: "/assets/images/yeti2_poster.jpg"
    },
    { 
      id: 14, 
      video: "/assets/yetivid3.webm",
      fallback: "/assets/yetivid3.mp4",
      poster: "/assets/images/yeti3_poster.jpg"
    },
    { 
      id: 15, 
      video: "/assets/images/yeti11.webp",
      isImage: true
    }
  ];

  // Handle video errors
  const handleVideoError = (memeId: number, error: any) => {
    console.log(`Video error for meme ${memeId}:`, error);
    setVideoErrors(prev => new Set(prev).add(memeId));
  };

  // Get video source based on browser support and errors
  const getVideoSource = (meme: Meme): string => {
    if (meme.isImage) return meme.video;
    
    const hasError = videoErrors.has(meme.id);
    
    // Use fallback if there's an error, no WebM support, or on iOS/Safari
    if (hasError || webmSupported === false || isIOS || isSafari) {
      return meme.fallback || meme.video;
    }
    
    return meme.video;
  };

  // Optimized Video Component
  const VideoComponent = ({ meme, className }: { meme: Meme; className?: string }) => {
    if (meme.isImage || meme.video.endsWith('.webp') || meme.video.endsWith('.jpg') || meme.video.endsWith('.png')) {
      return (
        <Image 
          src={meme.video}
          alt="YETI Meme"
          fill
          className={`object-cover rounded-lg ${className || ''}`}
          loading="lazy"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          onError={() => console.log('Image loading error for:', meme.video)}
        />
      );
    }

    const videoSrc = getVideoSource(meme);
    const shouldAutoplay = !isIOS && !isSafari && !videoErrors.has(meme.id) && webmSupported !== false;

    return (
      <video 
        src={videoSrc}
        className={`w-full h-full object-cover rounded-lg ${className || ''}`}
        autoPlay={shouldAutoplay}
        muted
        loop
        playsInline
        preload="metadata"
        poster={meme.poster}
        controls={isIOS || isSafari || videoErrors.has(meme.id)}
        onError={(e) => handleVideoError(meme.id, e)}
        onLoadStart={() => {
          setVideoErrors(prev => {
            const newSet = new Set(prev);
            newSet.delete(meme.id);
            return newSet;
          });
        }}
        style={{
          minHeight: '100%',
          minWidth: '100%'
        }}
      >
        {/* Multiple source formats for better compatibility */}
        <source src={meme.video} type="video/webm" />
        {meme.fallback && <source src={meme.fallback} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>
    );
  };

  // Simplified animation for better iOS performance
  const animationSettings = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { 
      duration: isIOS ? 0.3 : 0.4, 
      type: "tween" as const
    },
    viewport: { once: true, margin: "-50px" }
  };

  // Meme Card Component
  const MemeCard = ({ meme, index, className = "" }: { meme: Meme; index: number; className?: string }) => (
    <motion.div
      key={meme.id}
      className={`group cursor-pointer break-inside-avoid mb-6 ${className}`}
      {...animationSettings}
      onClick={() => setActiveMeme(index)}
    >
      <div className={`relative bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20 ${
        index % 5 === 0 ? 'h-80' : 
        index % 5 === 1 ? 'h-64' : 
        index % 5 === 2 ? 'h-72' : 
        index % 5 === 3 ? 'h-56' : 
        'h-68'
      }`}>
        <div className="h-full flex items-center justify-center relative">
          <VideoComponent meme={meme} />
          
          {/* Loading overlay for videos with errors */}
          {videoErrors.has(meme.id) && !meme.isImage && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-sm text-center p-4">
                <div className="mb-2">Video unavailable</div>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setVideoErrors(prev => {
                      const newSet = new Set(prev);
                      newSet.delete(meme.id);
                      return newSet;
                    });
                  }}
                  className="px-3 py-1 bg-emerald-600 rounded text-xs hover:bg-emerald-500 transition-colors"
                >
                  Retry
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-black to-emerald-900 overflow-hidden">
      {/* Title Section */}
      <div className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-emerald-100 to-emerald-300 bg-clip-text text-transparent">
              YETI — MEMES
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Pinterest-Style Gallery Grid - Optimized Layout */}
      <div className="mb-16 max-w-7xl mx-auto px-4">
        {/* Desktop Layout (lg+) - Pinterest Style Grid */}
        <div className="hidden lg:block xl:hidden">
          <div className="columns-4 gap-6 space-y-6 overflow-hidden">
            {memes.map((meme, index) => (
              <MemeCard key={meme.id} meme={meme} index={index} />
            ))}
          </div>
        </div>

        {/* Large Desktop Layout (xl+) - 5 Columns */}
        <div className="hidden xl:block">
          <div className="columns-5 gap-6 space-y-6 overflow-hidden">
            {memes.map((meme, index) => (
              <MemeCard key={meme.id} meme={meme} index={index} />
            ))}
          </div>
        </div>

        {/* Tablet Layout (md-lg) - 3 Columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-4 overflow-hidden">
            {memes.slice(0, 15).map((meme, index) => (
              <motion.div
                key={meme.id}
                className={`group cursor-pointer ${
                  index === 0 ? 'col-span-2 row-span-2' : 
                  index === 1 ? 'col-span-1 row-span-1' :
                  index === 2 ? 'col-span-1 row-span-1' :
                  index === 3 ? 'col-span-2 row-span-1' :
                  index === 4 ? 'col-span-1 row-span-1' :
                  index === 5 ? 'col-span-1 row-span-1' :
                  index === 6 ? 'col-span-2 row-span-1' :
                  index === 7 ? 'col-span-1 row-span-1' :
                  index === 8 ? 'col-span-1 row-span-1' :
                  index === 9 ? 'col-span-2 row-span-1' :
                  index === 10 ? 'col-span-1 row-span-1' :
                  index === 11 ? 'col-span-1 row-span-1' :
                  index === 12 ? 'col-span-2 row-span-1' :
                  index === 13 ? 'col-span-1 row-span-1' :
                  'col-span-1 row-span-1'
                }`}
                {...animationSettings}
                onClick={() => setActiveMeme(index)}
              >
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-xl border border-emerald-400/30 h-full overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="h-full flex items-center justify-center relative">
                    <VideoComponent meme={meme} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (sm) - 2 Columns - Optimized for iOS */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3 overflow-hidden">
            {memes.slice(0, isIOS ? 8 : 12).map((meme, index) => (
              <motion.div
                key={meme.id}
                className={`group cursor-pointer ${
                  index === 0 ? 'col-span-2' : 'col-span-1'
                }`}
                {...animationSettings}
                onClick={() => setActiveMeme(index)}
              >
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 h-48 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="h-full flex items-center justify-center relative">
                    <VideoComponent meme={meme} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}