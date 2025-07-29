"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function YetiMemesSection() {
  const [activeMeme, setActiveMeme] = useState(0);
  
  const memes = [
    { 
      id: 1, 
      video: "/assets/yetivid8.webm"
    },
    { 
      id: 2, 
      video: "/assets/PATAPIM.webm"
    },
    { 
      id: 3, 
      video: "/assets/images/yeti7.webp"
    },
    { 
      id: 4, 
      video: "/assets/coin.webm"
    },
    { 
      id: 5, 
      video: "/assets/pepe.webm"
    },
    { 
      id: 6, 
      video: "/assets/images/yeti8.webp"
    },
    { 
      id: 7, 
      video: "/assets/pump_it.webm"
    },
    { 
      id: 8, 
      video: "/assets/soldiers.webm"
    },
    { 
      id: 9, 
      video: "/assets/images/yeti9.webp"
    },
    { 
      id: 10, 
      video: "/assets/one_of.webm"
    },
    { 
      id: 11, 
      video: "/assets/images/yeti10.webp"
    },
    { 
      id: 12, 
      video: "/assets/yetivid1.webm"
    },
    { 
      id: 13, 
      video: "/assets/yetivid2.webm"
    },
    { 
      id: 14, 
      video: "/assets/yetivid3.webm"
    },
    { 
      id: 15, 
      video: "/assets/images/yeti11.webp"
    },
    { 
      id: 16, 
      video: "/assets/YETATE2.webm"
    },
    { 
      id: 17, 
      video: "/assets/yetivid4.webm"
    },
    { 
      id: 18, 
      video: "/assets/yetivid5.webm"
    },
    { 
      id: 19, 
      video: "/assets/yetivid6.webm"
    },
    { 
      id: 20, 
      video: "/assets/images/yeti12.webp"
    },
    { 
      id: 21, 
      video: "/assets/yetivid7.webm"
    },
    { 
      id: 22, 
      video: "/assets/images/yeti15.webp"
    },
    { 
      id: 23, 
      video: "/assets/images/yeti13.webp"
    },
    { 
      id: 24, 
      video: "/assets/images/yeti14.webp"
    }
  ];

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
              <motion.div
                key={meme.id}
                className="group cursor-pointer break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
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
                    {meme.video.endsWith('.webp') ? (
                      <Image 
                        src={meme.video}
                        alt="YETI Meme"
                        fill
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={meme.video}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Large Desktop Layout (xl+) - 5 Columns */}
        <div className="hidden xl:block">
          <div className="columns-5 gap-6 space-y-6 overflow-hidden">
            {memes.map((meme, index) => (
              <motion.div
                key={meme.id}
                className="group cursor-pointer break-inside-avoid mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                onClick={() => setActiveMeme(index)}
              >
                <div className={`relative bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20 ${
                  index % 6 === 0 ? 'h-80' : 
                  index % 6 === 1 ? 'h-64' : 
                  index % 6 === 2 ? 'h-72' : 
                  index % 6 === 3 ? 'h-56' : 
                  index % 6 === 4 ? 'h-68' :
                  'h-60'
                }`}>
                  <div className="h-full flex items-center justify-center relative">
                    {meme.video.endsWith('.webp') ? (
                      <Image 
                        src={meme.video}
                        alt="YETI Meme"
                        fill
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={meme.video}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tablet Layout (md-lg) - 3 Columns */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-3 gap-4 overflow-hidden">
            {memes.slice(0, 18).map((meme, index) => (
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
                  index === 14 ? 'col-span-1 row-span-1' :
                  index === 15 ? 'col-span-2 row-span-1' :
                  index === 16 ? 'col-span-1 row-span-1' :
                  'col-span-1 row-span-1'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveMeme(index)}
              >
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-xl border border-emerald-400/30 h-full overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="h-full flex items-center justify-center relative">
                    {meme.video.endsWith('.webp') ? (
                      <Image 
                        src={meme.video}
                        alt="YETI Meme"
                        fill
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={meme.video}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Layout (sm) - 2 Columns */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-3 overflow-hidden">
            {memes.slice(0, 14).map((meme, index) => (
              <motion.div
                key={meme.id}
                className={`group cursor-pointer ${
                  index === 0 ? 'col-span-2' : 'col-span-1'
                }`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveMeme(index)}
              >
                <div className="relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 h-48 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20">
                  <div className="h-full flex items-center justify-center relative">
                    {meme.video.endsWith('.webp') ? (
                      <Image 
                        src={meme.video}
                        alt="YETI Meme"
                        fill
                        className="object-cover rounded-lg"
                      />
                    ) : (
                      <video 
                        src={meme.video}
                        className="w-full h-full object-cover rounded-lg"
                        autoPlay
                        muted
                        loop
                        playsInline
                      />
                    )}
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