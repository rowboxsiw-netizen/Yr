
"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from '@/components/Loader';
import HomeContent from '@/components/HomeContent';

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Premium transition timing synchronized with Apple's visual language
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black overflow-hidden">
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
