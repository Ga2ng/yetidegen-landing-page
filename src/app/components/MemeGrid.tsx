import { motion } from "framer-motion";
import Image from "next/image";
import LazyLoopVideo from "./LazyLoopVideo";
import { useState, useEffect, useRef, useCallback } from "react";
import { useInView } from 'react-intersection-observer';

interface MemeGridProps {
  memes: Array<{
    id: number;
    video: string;
  }>;
  layout: 'desktop' | 'large-desktop' | 'tablet' | 'mobile';
  onMemeClick: (index: number) => void;
}

const MemeGrid = ({ memes, layout, onMemeClick }: MemeGridProps) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const resizeTimeoutRef = useRef<NodeJS.Timeout>();
  
  // Memory management - cleanup items yang tidak terlihat untuk mobile
  useEffect(() => {
    if (layout === 'mobile' && visibleItems.length > 10) {
      // Hapus item yang sudah tidak terlihat untuk menghemat memory
      const timer = setTimeout(() => {
        setVisibleItems(prev => {
          const lastVisible = Math.max(...prev);
          const startIndex = Math.max(0, lastVisible - 8);
          return Array.from({ length: 9 }, (_, i) => startIndex + i);
        });
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [visibleItems.length, layout]);

  // Optimize intersection observer untuk mobile
  const observerOptions = layout === 'mobile' ? {
    threshold: 0.1,
    triggerOnce: false,
    rootMargin: '100px'
  } : {
    threshold: 0.1,
    triggerOnce: false
  };

  const { ref: containerRef, inView } = useInView(observerOptions);

  // Debounced resize handler untuk mencegah terlalu banyak re-render
  const handleResize = useCallback(() => {
    if (resizeTimeoutRef.current) {
      clearTimeout(resizeTimeoutRef.current);
    }
    
    resizeTimeoutRef.current = setTimeout(() => {
      setIsMobile(window.innerWidth < 768);
    }, 100);
  }, []);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [handleResize]);

  // Cleanup timeouts untuk mencegah memory leak
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (layout === 'mobile' && isMobile) {
      // Render items secara bertahap untuk mobile
      timeoutRef.current = setTimeout(() => {
        setVisibleItems([0]);
      }, 100);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    } else {
      // Untuk layout lain, render semua sekaligus
      setVisibleItems(memes.map((_, index) => index));
    }
  }, [layout, isMobile, memes.length]);

  // Trigger loading lebih banyak item ketika container terlihat
  useEffect(() => {
    if (layout === 'mobile' && inView && visibleItems.length < memes.length && isVisible) {
      timeoutRef.current = setTimeout(() => {
        addNextItem();
      }, 500);
      
      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [inView, layout, visibleItems.length, memes.length, isVisible]);

  // Track visibility untuk mengoptimalkan performance
  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const addNextItem = useCallback(() => {
    if (visibleItems.length < memes.length) {
      // Untuk mobile, tambahkan maksimal 2 item sekaligus untuk mengurangi lag
      const nextIndex = visibleItems.length;
      const maxNextItems = layout === 'mobile' ? 2 : 1;
      
      setVisibleItems(prev => {
        const newItems = [];
        for (let i = 0; i < maxNextItems && nextIndex + i < memes.length; i++) {
          newItems.push(nextIndex + i);
        }
        return [...prev, ...newItems];
      });
    }
  }, [visibleItems.length, memes.length, layout]);

  // Memory monitoring untuk mencegah crash
  useEffect(() => {
    if (typeof window !== 'undefined' && 'memory' in performance) {
      const checkMemory = () => {
        const memory = (performance as any).memory;
        if (memory && memory.usedJSHeapSize > memory.jsHeapSizeLimit * 0.8) {
          // Jika memory usage tinggi, cleanup beberapa item
          setVisibleItems(prev => prev.slice(-5));
        }
      };
      
      const interval = setInterval(checkMemory, 5000);
      return () => clearInterval(interval);
    }
  }, []);

  // Auto cleanup untuk mencegah memory leak
  useEffect(() => {
    const cleanup = () => {
      // Cleanup video elements yang tidak terlihat
      const videos = document.querySelectorAll('video');
      videos.forEach(video => {
        if (!video.paused && !isElementInViewport(video)) {
          video.pause();
        }
      });
    };

    const interval = setInterval(cleanup, 10000);
    return () => clearInterval(interval);
  }, []);

  // Safari-specific optimizations
  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    
    if (isSafari) {
      // Safari-specific optimizations
      const handleVisibilityChange = () => {
        if (document.hidden) {
          // Pause semua video ketika tab tidak aktif
          const videos = document.querySelectorAll('video');
          videos.forEach(video => video.pause());
        }
      };

      document.addEventListener('visibilitychange', handleVisibilityChange);
      
      return () => {
        document.removeEventListener('visibilitychange', handleVisibilityChange);
      };
    }
  }, []);

  // Prevent excessive re-renders in Safari
  const debouncedSetVisibleItems = useCallback(
    debounce((items: number[]) => {
      setVisibleItems(items);
    }, 100),
    []
  );

  // Debounce helper function
  function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): (...args: Parameters<T>) => void {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => func(...args), wait);
    };
  }

  // Helper function untuk check if element in viewport
  const isElementInViewport = (el: Element) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  // Error boundary untuk mencegah crash
  const [hasError, setHasError] = useState(false);
  
  // Error recovery mechanism
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error('Global error caught:', event.error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error('Unhandled promise rejection:', event.reason);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'measure' && entry.duration > 100) {
            console.warn('Slow performance detected:', entry.name, entry.duration);
          }
        }
      });

      observer.observe({ entryTypes: ['measure'] });

      return () => observer.disconnect();
    }
  }, []);

  if (hasError) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-emerald-400">Terjadi kesalahan. Silakan refresh halaman.</div>
      </div>
    );
  }

  const getHeightClass = (index: number, layout: string) => {
    if (layout === 'desktop') {
      return index % 5 === 0 ? 'h-80' : 
             index % 5 === 1 ? 'h-64' : 
             index % 5 === 2 ? 'h-72' : 
             index % 5 === 3 ? 'h-56' : 
             'h-68';
    } else if (layout === 'large-desktop') {
      return index % 6 === 0 ? 'h-80' : 
             index % 6 === 1 ? 'h-64' : 
             index % 6 === 2 ? 'h-72' : 
             index % 6 === 3 ? 'h-56' : 
             index % 6 === 4 ? 'h-68' :
             'h-60';
    }
    return 'h-full';
  };

  const getGridClass = (layout: string) => {
    switch (layout) {
      case 'desktop':
        return 'columns-4 gap-6 space-y-6 overflow-hidden';
      case 'large-desktop':
        return 'columns-5 gap-6 space-y-6 overflow-hidden';
      case 'tablet':
        return 'grid grid-cols-3 gap-4 overflow-hidden';
      case 'mobile':
        return 'grid grid-cols-2 gap-3 overflow-hidden';
      default:
        return '';
    }
  };

  const getItemClass = (index: number, layout: string) => {
    if (layout === 'tablet') {
      return index === 0 ? 'col-span-2 row-span-2' : 
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
             'col-span-1 row-span-1';
    } else if (layout === 'mobile') {
      return index === 0 ? 'col-span-2' : 'col-span-1';
    }
    return '';
  };

  const containerClass = layout === 'mobile' ? 'block md:hidden' :
                        layout === 'tablet' ? 'hidden md:block lg:hidden' :
                        layout === 'desktop' ? 'hidden lg:block xl:hidden' :
                        'hidden xl:block';

  const renderMemeCard = (meme: any, index: number) => {
    try {
      const isVisible = layout === 'mobile' ? visibleItems.includes(index) : true;
      
      if (layout === 'mobile' && !isVisible) {
        return null;
      }

      return (
        <motion.div
          key={meme.id}
          className={`group cursor-pointer ${layout === 'desktop' || layout === 'large-desktop' ? 'break-inside-avoid mb-6' : getItemClass(index, layout)}`}
          initial={{ opacity: 0, y: layout === 'tablet' || layout === 'mobile' ? 30 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: layout === 'tablet' || layout === 'mobile' ? 0.6 : 0.5, 
            delay: layout === 'tablet' || layout === 'mobile' ? index * 0.1 : index * 0.05,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          onClick={() => onMemeClick(index)}
        >
          <div className={`relative bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur-md rounded-xl border border-emerald-400/30 overflow-hidden transition-all duration-300 hover:border-emerald-300/60 hover:shadow-lg hover:shadow-emerald-500/20 ${
            layout === 'mobile' ? 'h-48' : 
            layout === 'tablet' ? 'h-full' :
            getHeightClass(index, layout)
          }`}>
            <div className="h-full flex items-center justify-center relative">
              {meme.video.endsWith('.webp') ? (
                <Image 
                  src={meme.video}
                  alt="YETI Meme"
                  fill
                  className="object-cover rounded-lg"
                  loading={layout === 'mobile' ? 'lazy' : 'eager'}
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                  onError={(e) => {
                    // Fallback untuk error image
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                  sizes={layout === 'mobile' ? '50vw' : layout === 'tablet' ? '33vw' : '25vw'}
                />
              ) : (
                <LazyLoopVideo src={meme.video} isMobile={layout === 'mobile'} />
              )}
              
              {/* Placeholder untuk mobile */}
              {layout === 'mobile' && !meme.video.endsWith('.webp') && (
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 animate-pulse rounded-lg" />
              )}
            </div>
          </div>
        </motion.div>
      );
    } catch (error) {
      console.error('Error rendering meme card:', error);
      setHasError(true);
      return null;
    }
  };

  return (
    <div className={containerClass} ref={containerRef}>
      <div className={getGridClass(layout)}>
        {memes.map((meme, index) => renderMemeCard(meme, index))}
      </div>
      
      {/* Loading indicator untuk mobile */}
      {layout === 'mobile' && visibleItems.length < memes.length && (
        <div className="flex justify-center mt-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
        </div>
      )}
      
      {/* Memory warning untuk mobile */}
      {layout === 'mobile' && visibleItems.length > 8 && (
        <div className="text-center mt-4 text-xs text-emerald-400/60">
          Scroll untuk memuat lebih banyak konten
        </div>
      )}
    </div>
  );
};

export default MemeGrid; 