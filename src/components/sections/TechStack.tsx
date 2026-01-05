'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TechIcon } from '../ui/TechIcon';
import { Button } from '../ui/Button';
import { techStackData, categories } from '../../data/techstack';

export const TechStack: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTech = activeCategory === 'all' ? techStackData : techStackData.filter((tech) => tech.category === activeCategory);

  return (
    <section id="techstack" className="section-padding relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">Technologies and tools I use to bring ideas to life</p>

            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button key={category.id} variant={activeCategory === category.id ? 'primary' : 'ghost'} size="sm" onClick={() => setActiveCategory(category.id)}>
                  {category.label}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Tech Icons Grid */}
          <motion.div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4" layout>
            {filteredTech.map((tech, index) => (
              <motion.div key={tech.name} layout initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.3, delay: index * 0.05 }}>
                <TechIcon name={tech.name} icon={tech.icon} />
              </motion.div>
            ))}
          </motion.div>

          {/* Scrolling Marquee - Alternative Display */}
          <div className="mt-16 overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{
                x: [0, -1000],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {[...techStackData, ...techStackData].map((tech, index) => (
                <div key={`marquee-${index}`} className="glass flex-shrink-0 px-6 py-3 rounded-full flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-white/80 whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
