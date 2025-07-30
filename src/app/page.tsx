"use client";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Header, VideoSection, MeetYetiSection, YetiMemesSection, HowToBuySection, PartnersSection, RoadmapSection, FAQSection, Footer } from "./sections";
import { Navbar } from "./components";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isInitialized, setIsInitialized] = useState(false);

  // Main scroll progress for the entire container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Video section specific scroll progress
  const { scrollYProgress: videoScrollProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start end", "end start"]
  });

  // Optimized spring animation dengan nilai yang lebih konservatif
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 30,
    restDelta: 0.01,
    mass: 1
  });

  // Optimized spring untuk video section
  const smoothVideoProgress = useSpring(videoScrollProgress, {
    stiffness: 60,
    damping: 35,
    restDelta: 0.01,
    mass: 1
  });

  // Transform values - simplified dan lebih smooth
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1, 0.95, 0.9]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.4, 0.2]);

  // Video section transforms - lebih smooth
  const videoOpacity = useTransform(smoothVideoProgress, [0, 0.3, 0.8, 1], [0, 0.6, 1, 1]);
  const videoScale = useTransform(smoothVideoProgress, [0, 0.4, 0.8], [0.95, 1, 1]);
  const videoY = useTransform(smoothVideoProgress, [0, 0.4, 0.8], [30, 0, 0]);

  useEffect(() => {
    // Delay initialization untuk menghindari lag awal
    const timer = setTimeout(() => {
      setIsInitialized(true);
    }, 100);

    const unsubscribeMain = smoothProgress.onChange((latest) => {
      if (isInitialized) {
        setScrollProgress(latest);
      }
    });
    
    const unsubscribeVideo = smoothVideoProgress.onChange((latest) => {
      if (isInitialized) {
        setIsVideoVisible(latest > 0.2);
      }
    });

    return () => {
      clearTimeout(timer);
      unsubscribeMain();
      unsubscribeVideo();
    };
  }, [smoothProgress, smoothVideoProgress, isInitialized]);

  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Navbar */}
      <Navbar />
      
      {/* Section 1 - Main Hero */}
      <Header 
        scale={isInitialized ? scale : 1}
        opacity={isInitialized ? opacity : 1}
        isVideoVisible={isVideoVisible}
      />

      {/* Section 2 - Video Showcase Section */}
      <div ref={videoSectionRef}>
        <VideoSection
          videoOpacity={isInitialized ? videoOpacity : 0}
          videoScale={isInitialized ? videoScale : 1}
          videoY={isInitialized ? videoY : 0}
          isVideoVisible={isVideoVisible}
          scrollToTop={scrollToTop}
        />
      </div>

      {/* Section 3 - Meet YETI Section */}
      <MeetYetiSection />

      {/* Section 4 - YETI Memes Section */}
      <YetiMemesSection />

      {/* Section 5 - How to Buy Section */}
      <HowToBuySection />

      {/* Section 6 - Partners Section */}
      {/* <PartnersSection /> */}

      {/* Section 7 - Roadmap Section */}
      {/* <RoadmapSection /> */}

      {/* Section 8 - FAQ Section */}
      <FAQSection />

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}