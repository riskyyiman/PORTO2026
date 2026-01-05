'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ExternalLink } from 'lucide-react';
import { experienceData } from '../../data/experience';
import { SpotlightCard } from '../ui/SpotlightCard';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">My professional journey and the companies I've worked with</p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            {experienceData.map((exp, index) => (
              <SpotlightCard key={exp.id} className="relative">
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div className="flex items-start gap-4">
                      <div className="glass p-3 rounded-lg">
                        <Briefcase className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{exp.role}</h3>
                        <div className="flex items-center gap-2">
                          {exp.companyUrl ? (
                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-accent-hover transition-colors flex items-center gap-1">
                              <span className="font-medium">{exp.company}</span>
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          ) : (
                            <span className="text-white/70 font-medium">{exp.company}</span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-white/60 text-sm md:text-base">{exp.period}</span>
                      {exp.current && <span className="glass px-3 py-1 rounded-full text-xs font-medium text-green-400 border border-green-400/20">Current</span>}
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed md:ml-16">{exp.description}</p>
                </div>

                {/* Timeline connector */}
                {index < experienceData.length - 1 && <div className="absolute left-10 bottom-0 w-0.5 h-6 bg-gradient-to-b from-accent to-transparent" />}
              </SpotlightCard>
            ))}
          </div>

          {/* Stats Section */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {[
              { label: 'Years Experience', value: '5+' },
              { label: 'Projects Completed', value: '50+' },
              { label: 'Happy Clients', value: '10+' },
              { label: 'Technologies', value: '20+' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass rounded-xl p-6 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
