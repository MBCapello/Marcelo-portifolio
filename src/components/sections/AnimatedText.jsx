'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedText = ({ phrases = [], className }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!phrases || phrases.length === 0) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3500); // Alterna a cada 3.5 segundos

    return () => clearInterval(interval);
  }, [phrases]);

  if (!phrases || phrases.length === 0) {
    return null;
  }

  return (
    <div className="relative inline-block min-h-[48px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={phrases[index]}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className={className}
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default AnimatedText;
