'use client';

import React from 'react';
import { motion, useSpring, useScroll } from 'framer-motion';

export const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] pointer-events-none h-2">
      {/* Container utama untuk bar */}
      <motion.div
        className="h-[4px] bg-gradient-to-r from-violet-600 via-fuchsia-500 to-pink-500 relative overflow-hidden"
        style={{
          scaleX,
          transformOrigin: '0%',
        }}
      >
        {/* --- 1. EFEK LISTRIK (Fast Electric Shimmer) --- */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 0.8, // DIPERCEPAT: dari 2s ke 0.8s
            repeat: Infinity,
            ease: 'linear',
            repeatDelay: 0.2, // Jeda singkat antar aliran listrik
          }}
          style={{
            // Gradient dibuat lebih tipis (sharper) agar terlihat seperti percikan kabel
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent)',
          }}
        />

        {/* --- 2. NEON GLOW TIP (Ujung Laser Aktif) --- */}
        {/* Cahaya putih di ujung bar */}
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white/40 to-transparent blur-sm" />

        {/* Titik cahaya paling terang dengan efek flicker (kedip) listrik */}
        <motion.div
          animate={{
            opacity: [1, 0.5, 1, 0.8, 1], // Efek kedipan listrik
            scaleY: [1, 1.2, 1, 1.5, 1],
          }}
          transition={{
            duration: 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-0 top-0 h-full w-[2px] bg-white shadow-[0_0_20px_4px_rgba(236,72,153,1)]"
        />
      </motion.div>

      {/* --- 3. SECONDARY AMBIENT GLOW --- */}
      <motion.div
        className="h-[3px] bg-pink-500/30 blur-[6px] -mt-[1px]"
        style={{
          scaleX,
          transformOrigin: '0%',
        }}
      />
    </div>
  );
};
