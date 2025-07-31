import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

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

  useEffect(() => {
    if (inView) {
      // Delay loading untuk mobile agar tidak lag
      const timer = setTimeout(() => {
        setShouldLoad(true);
      }, isMobile ? 300 : 100);

      return () => clearTimeout(timer);
    }
  }, [inView, isMobile]);

  return (
    <div ref={ref} className="w-full h-full">
      {shouldLoad && (
        <video
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className="w-full h-full object-cover rounded-lg"
        />
      )}
    </div>
  );
};

export default LazyLoopVideo; 