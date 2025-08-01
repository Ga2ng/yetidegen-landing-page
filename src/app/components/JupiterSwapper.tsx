"use client";
import React, { useEffect, useRef, useState } from 'react';
import { motion } from "framer-motion";

// Type definitions berdasarkan dokumentasi Jupiter Terminal
declare global {
  interface Window {
    Jupiter: {
      init: (config: IInit) => void;
      resume: () => void;
      close: () => void;
      syncProps: (props: any) => void;
    };
    JUPITER_RPC_ENDPOINT?: string;
    JUPITER_QUOTE_API?: string;
    JUPITER_SWAP_API?: string;
  }
}

export type SwapMode = "ExactInOrOut" | "ExactIn" | "ExactOut";
export type DEFAULT_EXPLORER = 'Solana Explorer' | 'Solscan' | 'Solana Beach' | 'SolanaFM';

interface FormProps {
  swapMode?: SwapMode;
  initialAmount?: string;
  fixedAmount?: boolean;
  initialInputMint?: string;
  initialOutputMint?: string;
  fixedMint?: string;
  referralAccount?: string;
  referralFee?: number;
}

interface IInit {
  localStoragePrefix?: string;
  formProps?: FormProps;
  defaultExplorer?: DEFAULT_EXPLORER;
  autoConnect?: boolean;
  displayMode?: 'modal' | 'integrated' | 'widget';
  integratedTargetId?: string;
  containerStyles?: React.CSSProperties;
  containerClassName?: string;
  enableWalletPassthrough?: boolean;
  passthroughWalletContextState?: any;
  onRequestConnectWallet?: () => void | Promise<void>;
  branding?: {
    logoUri?: string;
    name?: string;
  };
  onSwapError?: (params: {
    error?: any;
    quoteResponseMeta: any;
  }) => void;
  onSuccess?: (params: {
    txid: string;
    swapResult: any;
    quoteResponseMeta: any;
  }) => void;
  onFormUpdate?: (form: any) => void;
  onScreenUpdate?: (screen: any) => void;
  scriptDomain?: string;
}

export default function JupiterSwapper() {
  const initialized = useRef(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  // Initialize Jupiter Terminal function
  const initializeJupiter = () => {
    if (initialized.current) {
      console.log('Jupiter already initialized');
      return;
    }

    if (!window.Jupiter) {
      console.error('Jupiter object not available');
      setError('Jupiter Terminal not available');
      setIsLoading(false);
      return;
    }

    try {
      console.log('Initializing Jupiter Terminal...');
      
      const config: IInit = {
        displayMode: "integrated",
        integratedTargetId: "integrated-terminal",
        localStoragePrefix: "yeti-swap",
        formProps: {
          initialInputMint: "So11111111111111111111111111111111111111112", // SOL
          initialOutputMint: "FuyeX8cpctBwQVDFYgKxYh1JgiXCkK9g4RBVCXm4pump", // YETI
          swapMode: "ExactInOrOut",
        },
        defaultExplorer: "Solana Explorer",
        autoConnect: true,
        containerStyles: {
          borderRadius: '16px',
          background: 'transparent',
        },
        onSwapError: ({ error, quoteResponseMeta }) => {
          console.error('Swap error:', error);
          console.error('Quote response:', quoteResponseMeta);
        },
        onSuccess: ({ txid, swapResult, quoteResponseMeta }) => {
          console.log('Swap successful!');
          console.log('Transaction ID:', txid);
          console.log('Swap result:', swapResult);
          console.log('Quote response:', quoteResponseMeta);
        },
        onFormUpdate: (form) => {
          console.log('Form updated:', form);
        },
        onScreenUpdate: (screen) => {
          console.log('Screen updated:', screen);
        },
      };

      window.Jupiter.init(config);
      initialized.current = true;
      setIsLoading(false);
      console.log('Jupiter Terminal initialized successfully');

      // Hide loading placeholder after initialization
      setTimeout(() => {
        const loadingPlaceholder = document.getElementById("loading-placeholder");
        if (loadingPlaceholder) {
          loadingPlaceholder.style.display = "none";
        }
      }, 1000);

    } catch (error) {
      console.error('Failed to initialize Jupiter Terminal:', error);
      setError(`Failed to initialize Jupiter Terminal: ${error instanceof Error ? error.message : 'Unknown error'}`);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Check if script is already loaded
    const existingScript = document.querySelector('script[src*="terminal.jup.ag"]');
    if (existingScript) {
      console.log('Jupiter script already exists');
      if (window.Jupiter) {
        initializeJupiter();
      }
      return;
    }

    // Load Jupiter Terminal script
    const loadJupiterScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://terminal.jup.ag/main-v4.js';
        script.async = true;
        script.onload = () => {
          console.log('Jupiter Terminal script loaded successfully');
          setScriptLoaded(true);
          
          // Wait a bit for the script to initialize
          setTimeout(() => {
            if (window.Jupiter) {
              resolve();
            } else {
              reject(new Error('Jupiter object not available after script load'));
            }
          }, 1000); // Increased timeout
        };
        script.onerror = (error) => {
          console.error('Failed to load Jupiter Terminal script:', error);
          reject(new Error('Failed to load Jupiter Terminal script'));
        };
        
        document.head.appendChild(script);
      });
    };

    // Load and initialize
    const setup = async () => {
      try {
        if (!window.Jupiter) {
          await loadJupiterScript();
        }
        initializeJupiter();
      } catch (error) {
        console.error('Setup failed:', error);
        setError(error instanceof Error ? error.message : 'Setup failed');
        setIsLoading(false);
      }
    };

    setup();

    // Cleanup function
    return () => {
      if (window.Jupiter && initialized.current) {
        try {
          window.Jupiter.close();
          initialized.current = false;
        } catch (error) {
          console.log('Cleanup completed');
        }
      }
    };
  }, []);

  const handleRetry = () => {
    setError(null);
    setIsLoading(true);
    initialized.current = false;
    
    // Remove existing script
    const existingScript = document.querySelector('script[src*="terminal.jup.ag"]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Reload page to restart
    window.location.reload();
  };

  return (
    <motion.div 
      className="relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-3xl" />
      
      {/* Jupiter Terminal Integration */}
      <div className="relative min-h-[600px] max-w-4xl mx-auto">
        {/* Loading Placeholder */}
        {isLoading && (
          <div 
            className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-2xl flex items-center justify-center z-10" 
            id="loading-placeholder"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-400"></div>
              <span className="text-emerald-400 text-sm">Loading Jupiter Terminal...</span>
              {scriptLoaded && (
                <span className="text-emerald-300 text-xs">Script loaded, initializing...</span>
              )}
            </div>
          </div>
        )}
        
        {/* Error State */}
        {error && (
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-red-600/10 rounded-2xl flex items-center justify-center z-10">
            <div className="text-center max-w-md">
              <div className="text-red-400 text-sm mb-4 whitespace-pre-wrap">{error}</div>
              <button 
                onClick={handleRetry}
                className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}
        
        {/* Jupiter Terminal Target */}
        <div 
          id="integrated-terminal"
          className="relative z-20 rounded-2xl overflow-hidden"
          style={{ 
            minHeight: '600px',
            background: 'transparent'
          }}
        />
      </div>
    </motion.div>
  );
}