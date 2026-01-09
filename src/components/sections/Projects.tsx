'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Star, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from '../ui/SpotlightCard';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'highlighted'>('all');
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter((project) => project.isHighlighted);

  // Batasi hanya 3 project jika showAll false
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 3);

  return (
    <section id="projects" className="relative bg-[#020617] py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-4 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Highlights</span>
            </h2>

            {/* Pill Filter */}
            <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-slate-900/60 backdrop-blur-md border border-white/5 rounded-full">
              {[
                { id: 'all', label: 'All Projects' },
                { id: 'highlighted', label: 'Highlights' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setFilter(tab.id as any);
                    setShowAll(false); // Reset view saat filter berubah
                  }}
                  className={`relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === tab.id ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                >
                  {filter === tab.id && <motion.div layoutId="activeProjectFilter" className="absolute inset-0 bg-blue-600 rounded-full" transition={{ type: 'spring', stiffness: 300, damping: 30 }} />}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            <AnimatePresence mode="popLayout">
              {displayedProjects.map((project) => (
                <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4 }}>
                  <SpotlightCard className="group flex flex-col h-[480px] bg-slate-900/40 border-white/5 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-500 hover:border-white/20 shadow-2xl">
                    <div className="relative overflow-hidden h-48 shrink-0">
                      <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                      {project.isHighlighted && (
                        <div className="absolute top-3 right-3 z-20">
                          <div className="flex items-center justify-center w-8 h-8 bg-blue-600/90 backdrop-blur-md rounded-full shadow-lg border border-white/20">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent opacity-60" />
                    </div>

                    <div className="p-6 flex flex-col flex-1 min-h-0">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">{project.title}</h3>
                      <div className="relative flex-1 overflow-hidden mt-2">
                        <p className="text-slate-400 text-sm leading-relaxed transition-all duration-700 ease-in-out line-clamp-3 group-hover:line-clamp-none">{project.description}</p>
                      </div>

                      <div className="mt-auto pt-4 space-y-4 shrink-0">
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span key={tag} className="px-2.5 py-1 text-[10px] font-medium rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 whitespace-nowrap">
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex gap-4 pt-4 border-t border-white/5">
                          {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors">
                              <ExternalLink className="w-3.5 h-3.5" />
                              Live Demo
                            </a>
                          )}
                          {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-blue-400 transition-colors">
                              <Github className="w-3.5 h-3.5" />
                              Source Code
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* See All Button */}
          {!showAll && filteredProjects.length > 3 && (
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 text-center">
              <button
                onClick={() => setShowAll(true)}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-500/50 rounded-full text-white font-medium transition-all duration-300"
              >
                See All Projects
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
