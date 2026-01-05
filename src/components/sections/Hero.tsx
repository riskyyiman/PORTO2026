'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { SplitText } from '../ui/SplitText';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Greeting */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="inline-block">
            <span className="glass px-6 py-2 rounded-full text-sm text-white/80">👋 Welcome to my portfolio</span>
          </motion.div>

          {/* Main heading with SplitText animation */}
          <div className="space-y-4">
            <SplitText text="Hi, I'm Your Name" className="text-5xl md:text-7xl lg:text-8xl font-bold" delay={0.2} />
            <motion.h2 className="text-3xl md:text-5xl lg:text-6xl font-bold gradient-text" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
              Creative Developer & Designer
            </motion.h2>
          </div>

          {/* Description */}
          <motion.p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
            I craft beautiful, functional, and user-centric digital experiences that solve real-world problems. Specializing in modern web technologies and creative design solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
            <Magnetic>
              <Button variant="primary" size="lg" className="group" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Get In Touch
              </Button>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex items-center justify-center gap-4 pt-8" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Magnetic key={label} strength={0.2}>
                <motion.a href={href} target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-full hover:bg-accent/20 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={label}>
                  <Icon className="w-5 h-5 text-white/80" />
                </motion.a>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1.6,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};
