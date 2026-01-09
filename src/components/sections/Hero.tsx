'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Code2, Sparkles } from 'lucide-react';
import { SplitText } from '../ui/SplitText';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';
import { TypingEffect } from '../ui/TypingEffect';

const socialLinks = [
  { href: 'https://github.com/riskyyiman', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/riskyimanlaelprasetio/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'mailto:riskyiman699@gmail.com', icon: Mail, label: 'Mail' },
];

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-32 pb-20 md:pt-0 md:pb-0">
      {/* --- LAYER DEKORASI (Hero Focus) --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid dengan mask yang memudar di bagian bawah (contrast builder) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_20%,transparent_100%)]" />

        {/* Central Spotlight - Memberikan kesan kedalaman di bagian atas */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="container mx-auto px-6 z-10 relative">
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center space-y-8 md:space-y-12">
          <div className="space-y-4 md:space-y-6">
            <div className="relative inline-block">
              <Sparkles className="absolute -top-8 -right-8 w-8 h-8 text-yellow-400/80 hidden md:block animate-pulse" />
              <div className="text-white drop-shadow-2xl">
                <SplitText text="Hi, I'm riskyy" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white" delay={0.1} />
              </div>
            </div>

            <motion.div
              className="flex items-center justify-center gap-2 md:gap-4 text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <span className="text-slate-600 font-mono text-2xl md:text-6xl opacity-40">&lt;</span>
              <h2 className="min-w-[220px] sm:min-w-[400px] md:min-w-[600px] py-2">
                <TypingEffect />
              </h2>
              <span className="text-slate-600 font-mono text-2xl md:text-6xl opacity-40">/&gt;</span>
            </motion.div>
          </div>

          <motion.p className="text-sm sm:text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.2 }}>
            Mewujudkan ide menjadi aplikasi web yang <span className="text-cyan-400 font-medium underline underline-offset-8 decoration-cyan-500/20">skalabel</span> &{' '}
            <span className="text-blue-400 font-medium underline underline-offset-8 decoration-blue-500/20">berperforma tinggi</span> dengan kode modern.
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row items-center justify-center w-full sm:w-auto gap-4 pt-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.4 }}>
            <div className="w-full sm:w-auto">
              <Magnetic>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto bg-white text-black hover:bg-cyan-50 font-bold px-10 shadow-xl transition-all h-14"
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Code2 className="mr-2 w-5 h-5" />
                  View Projects
                </Button>
              </Magnetic>
            </div>
            <div className="w-full sm:w-auto">
              <Magnetic>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white backdrop-blur-sm px-10 h-14"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Contact Me
                </Button>
              </Magnetic>
            </div>
          </motion.div>

          <motion.div className="flex items-center gap-5 pt-8 md:pt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6, duration: 0.5 }}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Magnetic key={label} strength={0.3}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center w-12 h-12 rounded-full border border-slate-700/50 bg-slate-900/50 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                </a>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
