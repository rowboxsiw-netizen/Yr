
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { AUTHORIZE_LOGO_URL } from '@/constants';

export default function HomeContent() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="relative min-h-screen w-full bg-[#050505] overflow-y-auto"
    >
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-black/40 border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={AUTHORIZE_LOGO_URL} alt="Logo" className="w-6 h-6 brightness-0 invert" />
            <span className="text-sm font-semibold tracking-tight">Authorize</span>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {['Security', 'Network', 'Enterprise', 'Support'].map((item) => (
              <a key={item} href="#" className="text-[12px] text-white/40 hover:text-white transition-colors uppercase tracking-widest font-bold">
                {item}
              </a>
            ))}
          </div>
          <button className="text-[12px] bg-white text-black px-5 py-2 rounded-full font-bold hover:bg-white/90 transition-all active:scale-95 shadow-lg shadow-white/5">
            Get Started
          </button>
        </div>
      </nav>

      <section className="pt-48 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tighter mb-10 leading-[0.9] text-white">
              Elegance <br /> 
              <span className="text-white/20">in security.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/40 max-w-2xl mx-auto mb-16 font-light leading-relaxed">
              Experience identity reimagined. Fast, secure, and beautiful authentication for teams that care about detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button className="w-full sm:w-auto px-10 py-4 bg-white text-black rounded-full font-bold hover:opacity-90 transition-all">
                Try Authorize
              </button>
              <button className="w-full sm:w-auto px-10 py-4 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-md">
                Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed top-0 right-0 w-[900px] h-[900px] bg-indigo-500/5 blur-[180px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[700px] h-[700px] bg-blue-500/5 blur-[150px] rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
    </motion.div>
  );
}
