'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code following best practices.',
  },
  {
    icon: Palette,
    title: 'Creative Design',
    description: 'Crafting beautiful interfaces with attention to detail and user experience.',
  },
  {
    icon: Rocket,
    title: 'Fast Performance',
    description: 'Optimizing applications for speed and performance across all devices.',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborating effectively with cross-functional teams to deliver results.',
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">A passionate developer dedicated to creating exceptional digital experiences</p>
          </motion.div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left: Image/Profile */}
            <motion.div className="relative" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl" />
                <div className="relative z-10 space-y-4">
                  <h3 className="text-2xl font-bold">Creative Developer & Digital Designer</h3>
                  <p className="text-white/70 leading-relaxed">
                    I collaborate with brands globally to design impactful, mission-focused websites that drive results and achieve business goals. With expertise in modern web technologies and a keen eye for design, I bring ideas to life.
                  </p>
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-white/80">5+ Years of Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-white/80">50+ Projects Completed</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      <span className="text-white/80">10+ Happy Clients Worldwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Skills Grid */}
            <motion.div className="grid grid-cols-2 gap-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="glass rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4 relative">
                    <feature.icon className="w-8 h-8 text-accent" />
                    <div className="absolute -inset-2 -z-10 rounded-full bg-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-white">{feature.title}</h4>
                  <p className="text-sm text-white/60">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
