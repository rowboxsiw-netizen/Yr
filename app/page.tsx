
"use client";

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import HomeContent from '@/components/HomeContent';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apple-inspired entry timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden selection:bg-white/10">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <HomeContent key="home" />
        )}
      </AnimatePresence>
    </main>
  );
}
