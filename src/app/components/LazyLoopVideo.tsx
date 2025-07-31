import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

interface LazyLoopVideoProps {
  src: string;
  isMobile?: boolean;
}

const LazyLoopVideo = ({ src, isMobile = false }: LazyLoopVideoProps) => {
  const { ref, inView } = useInView({ 
    triggerOnce: true,
    threshold: isMobile ? 0.1 : 0.3,
    rootMargin: isMobile ? '50px' : '100px'
  });
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (inView) {
      // Delay loading untuk mobile agar tidak lag
      timeoutRef.current = setTimeout(() => {
        setShouldLoad(true);
      }, isMobile ? 300 : 100);

      return () => {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      };
    }
  }, [inView, isMobile]);

  // Cleanup video element untuk mencegah memory leak
  useEffect(() => {
    return () => {
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.src = '';
        videoRef.current.load();
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleVideoError = () => {
    setHasError(true);
  };

  const handleVideoLoad = () => {
    setHasError(false);
  };

  // Pause video ketika tidak terlihat untuk menghemat memory
  useEffect(() => {
    if (videoRef.current) {
      if (inView) {
        videoRef.current.play().catch(() => {
          // Ignore autoplay errors
        });
      } else {
        videoRef.current.pause();
      }
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full h-full">
      {shouldLoad && !hasError && (
        <video
          ref={videoRef}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className="w-full h-full object-cover rounded-lg"
          onError={handleVideoError}
          onLoadedData={handleVideoLoad}
        />
      )}
      
      {/* Fallback untuk error */}
      {hasError && (
        <div className="w-full h-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg flex items-center justify-center">
          <div className="text-emerald-400 text-sm">Video tidak tersedia</div>
        </div>
      )}
    </div>
  );
};

export default LazyLoopVideo; 