
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://cdn.authorize.qzz.io/Authorize.svg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium Apple-style delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.02,
              filter: "blur(10px)",
              transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } 
            }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          >
            <div className="relative flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 h-20 mb-10"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Authorize" 
                  className="w-full h-full object-contain pointer-events-none"
                />
              </motion.div>

              <div className="w-40 h-[1.5px] bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.1, ease: [0.65, 0, 0.35, 1] }}
                  className="h-full bg-black/40"
                />
              </div>

              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-[10px] tracking-[0.4em] uppercase text-black/20 font-medium select-none"
              >
                Authorize
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full"
          >
            {/* Header */}
            <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 border-b border-black/[0.03]">
              <div className="max-w-[1200px] mx-auto px-6 h-14 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <img src={LOGO_URL} className="w-5 h-5" alt="Logo" />
                  <span className="text-sm font-semibold tracking-tight">Authorize</span>
                </div>
                <nav className="hidden md:flex gap-8">
                  {['Security', 'Enterprise', 'Developers'].map(item => (
                    <a key={item} href="#" className="text-[12px] text-black/50 hover:text-black transition-colors font-medium">{item}</a>
                  ))}
                </nav>
                <button className="text-[12px] bg-black text-white px-4 py-1.5 rounded-full font-medium hover:bg-black/80 transition-all active:scale-95">
                  Sign In
                </button>
              </div>
            </header>

            {/* Hero Section */}
            <section className="pt-48 pb-24 px-6 max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-8 text-black">
                  Identity <br /> 
                  <span className="text-black/30">without friction.</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/50 font-light max-w-2xl mx-auto mb-14 leading-relaxed">
                  Next-generation authentication that feels like it's not even there. Secure by default, elegant by design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <button className="w-full sm:w-auto px-10 py-4 bg-black text-white rounded-full font-medium hover:opacity-90 active:scale-95 transition-all shadow-xl shadow-black/5">
                    Start Now
                  </button>
                  <button className="w-full sm:w-auto px-10 py-4 bg-black/[0.02] border border-black/5 rounded-full font-medium hover:bg-black/[0.05] transition-all active:scale-95">
                    Read Docs
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Visual Feature Section */}
            <section className="px-6 pb-32 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-14 bg-[#f5f5f7] rounded-[48px] flex flex-col justify-end min-h-[480px] group overflow-hidden relative"
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black/[0.02] pointer-events-none" />
                <h2 className="text-4xl font-semibold mb-5 tracking-tight">Pure Privacy.</h2>
                <p className="text-black/50 text-xl font-light leading-snug">
                  Decentralized identity architecture ensures you own your data. Completely private, always.
                </p>
              </motion.div>
              <motion.div 
                whileHover={{ y: -5 }}
                className="p-14 bg-black text-white rounded-[48px] flex flex-col justify-end min-h-[480px] shadow-2xl shadow-black/20"
              >
                <h2 className="text-4xl font-semibold mb-5 tracking-tight">Edge Speed.</h2>
                <p className="text-white/50 text-xl font-light leading-snug">
                  Authentication results in under 50ms, powered by our globally distributed edge infrastructure.
                </p>
              </motion.div>
            </section>

            {/* Simple Footer */}
            <footer className="py-12 border-t border-black/[0.05] px-6">
              <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2 opacity-30">
                  <img src={LOGO_URL} className="w-4 h-4 grayscale" alt="Logo" />
                  <span className="text-[11px] font-bold tracking-widest uppercase">Authorize</span>
                </div>
                <p className="text-[11px] text-black/30 font-medium">© 2025 Authorize Identity. All rights reserved.</p>
                <div className="flex gap-6">
                  {['Privacy', 'Terms', 'Security'].map(item => (
                    <a key={item} href="#" className="text-[11px] text-black/40 hover:text-black transition-colors uppercase tracking-widest font-bold">{item}</a>
                  ))}
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
