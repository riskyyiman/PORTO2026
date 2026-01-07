'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Twitter, Code2, Terminal } from 'lucide-react';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] pt-20">
      {/* --- LAYER DEKORASI --- */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] pointer-events-none">
        {/* Grid Pattern - Sedikit lebih tegas untuk kesan engineering */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Orbs - Warna diubah ke Cyan/Blue untuk kesan 'Tech' */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-[5%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-500/10 rounded-full blur-[120px]" />
      </div>

      {/* --- CONTENT --- */}
      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            {/* Nama */}
            <div className="text-white drop-shadow-sm">
              <SplitText text="Hi, I'm riskyy" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white" delay={0.2} />
            </div>

            {/* --- BAGIAN YANG DIUBAH (FOKUS WEB DEVELOPER) --- */}
            <motion.div className="flex items-center justify-center gap-2 text-2xl md:text-5xl lg:text-6xl font-bold pb-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.8 }}>
              {/* Gaya Tag HTML untuk memperkuat identitas Developer */}
              <span className="text-slate-600 font-mono text-3xl md:text-6xl opacity-50 hidden sm:inline-block">&lt;</span>

              <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500">Front-End Web Developer</h2>

              <span className="text-slate-600 font-mono text-3xl md:text-6xl opacity-50 hidden sm:inline-block">/&gt;</span>
            </motion.div>
          </div>

          {/* Deskripsi */}
          <motion.p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1 }}>
            Mewujudkan ide menjadi aplikasi web yang <span className="text-cyan-200 font-medium">skalabel</span> dan <span className="text-cyan-200 font-medium">berperforma tinggi</span>. Fokus pada penulisan kode yang rapi dan arsitektur
            modern.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
            <Magnetic>
              <Button
                variant="primary"
                size="lg"
                className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white border-none shadow-[0_0_30px_rgba(6,182,212,0.3)] transition-all"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Code2 className="mr-2 w-5 h-5" /> View Projects
              </Button>
            </Magnetic>
            <Magnetic>
              <Button variant="outline" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </Magnetic>
          </motion.div>

          {/* Social Links */}
          <motion.div className="flex items-center justify-center gap-6 pt-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.4 }}>
            {socialLinks.map(({ href, icon: Icon, label }) => (
              <Magnetic key={label} strength={0.2}>
                <motion.a href={href} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-cyan-400 transition-colors p-2" aria-label={label}>
                  <Icon className="w-6 h-6" />
                </motion.a>
              </Magnetic>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
