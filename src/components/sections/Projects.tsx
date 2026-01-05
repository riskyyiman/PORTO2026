'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { SpotlightCard } from '../ui/SpotlightCard';
import { Button } from '../ui/Button';
import { projectsData } from '../../data/projects';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');

  const filteredProjects = filter === 'all' ? projectsData : projectsData.filter((project) => project.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto mb-8">A showcase of my recent work and creative projects</p>

            {/* Filter Buttons */}
            <div className="flex justify-center gap-4">
              <Button variant={filter === 'all' ? 'primary' : 'ghost'} onClick={() => setFilter('all')}>
                All Projects
              </Button>
              <Button variant={filter === 'featured' ? 'primary' : 'ghost'} onClick={() => setFilter('featured')}>
                Featured
              </Button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <SpotlightCard key={project.id} className="group">
                <div className="relative overflow-hidden rounded-t-xl h-48">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <span className="glass px-3 py-1 rounded-full text-xs font-medium text-accent">Featured</span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>

                  <p className="text-white/60 text-sm line-clamp-3">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent border border-accent/20">
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && <span className="px-3 py-1 text-xs rounded-full bg-white/5 text-white/40">+{project.tags.length - 3}</span>}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors">
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* View All Button */}
          {filter === 'featured' && (
            <motion.div className="text-center mt-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <Button variant="outline" onClick={() => setFilter('all')}>
                View All Projects
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
