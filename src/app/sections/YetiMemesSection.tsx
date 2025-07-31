"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MemeGrid } from "../components";

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
    }
  ];

  // Mobile memes dengan MAINVIDEO.webm sebagai card pertama
  const mobileMemes = [
    { 
      id: 1, 
      video: "/assets/MAINVIDEO.webm"
    },
    { 
      id: 2, 
      video: "/assets/images/yeti15.webp"
    },
    { 
      id: 3, 
      video: "/assets/images/yeti7.webp"
    },
    { 
      id: 4, 
      video: "/assets/images/yeti10.webp"
    },
    { 
      id: 5, 
      video: "/assets/images/yeti11.webp"
    },
    { 
      id: 6, 
      video: "/assets/images/yeti8.webp"
    },
    { 
      id: 7, 
      video: "/assets/pump_it.webm"
    }
  ];

  const handleMemeClick = (index: number) => {
    setActiveMeme(index);
  };

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
        <MemeGrid 
          memes={memes} 
          layout="desktop" 
          onMemeClick={handleMemeClick} 
        />

        {/* Large Desktop Layout (xl+) - 5 Columns */}
        <MemeGrid 
          memes={memes} 
          layout="large-desktop" 
          onMemeClick={handleMemeClick} 
        />

        {/* Tablet Layout (md-lg) - 3 Columns */}
        <MemeGrid 
          memes={memes.slice(0, 15)} 
          layout="tablet" 
          onMemeClick={handleMemeClick} 
        />

        {/* Mobile Layout (sm) - 2 Columns - Only 7 cards with MAINVIDEO.webm first */}
        <MemeGrid 
          memes={mobileMemes} 
          layout="mobile" 
          onMemeClick={handleMemeClick} 
        />
      </div>
    </section>
  );
} 