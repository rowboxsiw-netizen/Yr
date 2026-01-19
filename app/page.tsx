
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO_URL = 'https://cdn.authorize.qzz.io/Authorize.svg';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative min-h-screen bg-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white"
          >
            <div className="relative flex flex-col items-center">
              {/* Apple-style Logo Animation */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="w-20 h-20 mb-10"
              >
                <img 
                  src={LOGO_URL} 
                  alt="Authorize" 
                  className="w-full h-full object-contain"
                />
              </motion.div>

              {/* Minimal Loader */}
              <div className="w-40 h-[2px] bg-black/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                  className="h-full bg-black/40"
                />
              </div>

              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6 text-[10px] tracking-[0.3em] uppercase text-black/20 font-medium"
              >
                Authorize
              </motion.span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            {/* Header */}
            <header className="fixed top-0 w-full z-40 backdrop-blur-xl bg-white/70 border-b border-black/[0.03]">
              <div className="max-w-[1200px] mx-auto px-6 h-12 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img src={LOGO_URL} className="w-5 h-5" alt="Logo" />
                  <span className="text-sm font-semibold tracking-tight">Authorize</span>
                </div>
                <nav className="hidden md:flex gap-8">
                  {['Security', 'Enterprise', 'Developers'].map(item => (
                    <a key={item} href="#" className="text-[12px] text-black/60 hover:text-black transition-colors">{item}</a>
                  ))}
                </nav>
                <button className="text-[12px] bg-black text-white px-3 py-1 rounded-full font-medium hover:bg-black/80 transition-all">
                  Sign In
                </button>
              </div>
            </header>

            {/* Hero */}
            <section className="pt-48 pb-20 px-6 max-w-5xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight mb-8">
                  Elegance in <br /> 
                  <span className="text-black/30">every detail.</span>
                </h1>
                <p className="text-xl md:text-2xl text-black/50 font-light max-w-2xl mx-auto mb-12 leading-relaxed">
                  Next-generation authentication that feels invisible. Built for those who value privacy and high-end design.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-black text-white rounded-full font-medium hover:scale-[1.02] active:scale-[0.98] transition-all">
                    Start Experience
                  </button>
                  <button className="px-8 py-3 bg-black/[0.03] border border-black/5 rounded-full font-medium hover:bg-black/[0.06] transition-all">
                    Learn More
                  </button>
                </div>
              </motion.div>
            </section>

            {/* Features Grid */}
            <section className="py-20 px-6 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-12 bg-apple-light rounded-[40px] flex flex-col justify-end min-h-[400px]">
                <h2 className="text-3xl font-semibold mb-4">Uncompromising Privacy.</h2>
                <p className="text-black/50 text-lg font-light leading-snug">
                  Your data is encrypted locally and never shared. We believe security is a fundamental human right.
                </p>
              </div>
              <div className="p-12 bg-black text-white rounded-[40px] flex flex-col justify-end min-h-[400px]">
                <h2 className="text-3xl font-semibold mb-4">Invisibly Fast.</h2>
                <p className="text-white/50 text-lg font-light leading-snug">
                  Experience zero-latency verification powered by globally distributed edge nodes.
                </p>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
