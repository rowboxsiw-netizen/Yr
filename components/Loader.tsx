
import React from 'react';
import { motion } from 'framer-motion';
import { AUTHORIZE_LOGO_URL } from '../constants';

const Loader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        filter: 'blur(20px)',
        scale: 1.1,
        transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] } 
      }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
    >
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 10 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: { 
              duration: 1.2, 
              ease: [0.22, 1, 0.36, 1],
              delay: 0.2 
            } 
          }}
          className="relative w-24 h-24 mb-12"
        >
          <img 
            src={AUTHORIZE_LOGO_URL} 
            alt="Authorize Logo" 
            className="w-full h-full object-contain brightness-0 invert"
          />
        </motion.div>

        {/* Loading Indicator */}
        <div className="relative w-48 h-[1px] bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ left: "-100%" }}
            animate={{ 
              left: "100%",
              transition: { 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              } 
            }}
            className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
          />
        </div>

        {/* Brand Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-8 text-white/30 text-[10px] tracking-[0.4em] uppercase font-light"
        >
          Authorize
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
