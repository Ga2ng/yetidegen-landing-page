import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface WalletWidgetProps {
  className?: string;
}

const WalletWidget = ({ className = "" }: WalletWidgetProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Delay loading untuk optimasi performa - lebih lama di mobile
    const delay = isMobile ? 1000 : 500;
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  const handleIframeLoad = () => {
    setIsLoaded(true);
  };

  return (
    <motion.div
      className={`relative bg-gradient-to-br from-emerald-500/10 to-teal-500/10 backdrop-blur-md rounded-2xl border border-emerald-400/30 overflow-hidden ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Loading State */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center z-10">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-emerald-300 border-t-transparent rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-emerald-200 font-semibold text-sm">Loading Chart...</p>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="p-3 md:p-4 border-b border-emerald-400/20">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base md:text-lg font-bold text-emerald-200">$YETI Price Chart</h3>
            <p className="text-xs text-slate-300">Real-time trading data & swaps</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-xs text-emerald-300">Live</span>
          </div>
        </div>
      </div>

      {/* Iframe Container */}
      <div className="relative">
        {isVisible && (
          <motion.iframe
            src="https://dexscreener.com/solana/FNDqKvJth9umydaanHRYw3Ur29jRfbQRqyKrJGcXtXXC?embed=1&trades=1&info=1"
            width="100%"
            height={isMobile ? "350" : "480"}
            frameBorder="0"
            allow="clipboard-write"
            style={{ 
              backgroundColor: 'transparent', 
              minHeight: isMobile ? '350px' : '400px',
              maxHeight: isMobile ? '350px' : '480px'
            }}
            onLoad={handleIframeLoad}
            loading="lazy"
          />
        )}
      </div>

      {/* Footer */}
      <div className="p-2 md:p-3 border-t border-emerald-400/20 bg-gradient-to-r from-emerald-500/5 to-teal-500/5">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Powered by DEXScreener</span>
          <span>Solana Network</span>
        </div>
      </div>
    </motion.div>
  );
};

export default WalletWidget; 