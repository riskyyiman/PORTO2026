'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TechIcon } from '../ui/TechIcon';
import { techStackData, categories } from '../../data/techstack';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all' ? techStackData : techStackData.filter((tech) => tech.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
  };

  return (
    <section id="techstack" className="relative bg-[#020617] py-24 overflow-hidden">
      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-40" />

        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Stack</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">The tools and technologies I use to bring digital products to life.</p>

            {/* Filter Pills */}
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-full">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tech Grid (6 Columns on Desktop) */}
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredTech.map((tech) => (
                <motion.div
                  key={tech.name}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group relative flex flex-col items-center justify-center p-5 bg-slate-900/40 border border-white/5 rounded-2xl transition-all duration-500 backdrop-blur-sm min-h-[130px]
                             hover:border-blue-500/40 hover:bg-slate-800/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-1.5"
                >
                  {/* Subtle Inner Glow on Hover */}
                  <div className="absolute inset-0 bg-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10 transition-transform duration-500 group-hover:scale-110">
                    {/* Teks double dihindari dengan hanya memanggil TechIcon */}
                    <TechIcon name={tech.name} icon={tech.icon} />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* --- MARQUEE RUNNING TEXT (Modern & Seamless) --- */}
          <div className="mt-20 relative flex overflow-x-hidden pt-8">
            <motion.div
              className="flex whitespace-nowrap gap-12"
              animate={{ x: [0, -1200] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 35,
                  ease: 'linear',
                },
              }}
            >
              {[...techStackData, ...techStackData].map((tech, index) => (
                <div key={`marquee-${index}`} className="flex items-center gap-3 bg-slate-900/30 border border-white/5 px-6 py-2.5 rounded-full backdrop-blur-[2px] group hover:border-blue-500/30 transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                  <span className="text-slate-500 font-medium text-xs tracking-[0.25em] uppercase transition-colors group-hover:text-blue-400">{tech.name}</span>
                </div>
              ))}
            </motion.div>

            {/* Foggy Edge Fades */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#020617] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#020617] to-transparent z-10" />
          </div>

          {filteredTech.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="italic">No tools found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
