
import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import HomeContent from './components/HomeContent';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Apple-style transition timing
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="relative w-full h-screen bg-black text-white overflow-hidden selection:bg-white/10">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <HomeContent key="home" />
        )}
      </AnimatePresence>
    </main>
  );
};

export default App;
