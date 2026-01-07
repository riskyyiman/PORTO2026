'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, MessageCircle } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

const socialLinks = [
  { href: 'https://github.com/riskyyiman', icon: Github, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/riskyimanlaelprasetio/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://wa.me/6281226727458', icon: MessageCircle, label: 'WhatsApp' },
  { href: 'mailto:riskyiman699@gmail.com', icon: Mail, label: 'Email' },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#030712] pt-24 pb-12 overflow-hidden border-t border-white/[0.05]">
      {/* --- MODERN BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 1. Subtle Noise Texture */}
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

        {/* 2. Radial Grid Pattern (Fades out at edges) */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />

        {/* 3. Animated Mesh/Aurora Glows */}
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[50%] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-sky-500/10 blur-[120px] rounded-full opacity-50" />

        {/* 4. Top Border Light Beam */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-20">
            {/* Brand Section */}
            <div className="md:col-span-5 space-y-8">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold tracking-tight text-white italic">
                  iman<span className="text-blue-500 not-italic">Laell.</span>
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-sm font-light">Membangun masa depan digital dengan estetika modern dan performa tinggi.</p>
              </div>

              {/* Social Icons */}
              <div className="flex gap-4">
                {socialLinks.map(({ href, icon: Icon, label }) => (
                  <Magnetic key={label}>
                    <motion.a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/5 transition-all duration-300"
                      aria-label={label}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  </Magnetic>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-medium mb-8 text-sm tracking-widest uppercase">Navigation</h4>
              <ul className="space-y-4">
                {navLinks.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="group flex items-center text-slate-400 hover:text-white transition-colors text-base">
                      <span className="relative overflow-hidden">
                        {item.name}
                        <span className="absolute bottom-0 left-0 w-full h-[1px] bg-blue-500 translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                      </span>
                      <ArrowUpRight className="w-3 h-3 ml-2 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status Card (Bento Style) */}
            <div className="md:col-span-4">
              <h4 className="text-white font-medium mb-8 text-sm tracking-widest uppercase">Availability</h4>
              <div className="relative p-6 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <p className="text-white text-sm font-medium">Ready for new challenges</p>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">Tertarik berkolaborasi? Mari buat sesuatu yang luar biasa bersama.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-white/[0.05] flex flex-col md:row justify-between items-center gap-6">
            <div className="text-slate-500 text-xs tracking-widest uppercase font-medium">
              © {currentYear} — Crafted by <span className="text-slate-300">Risky Iman Lael Prasetio</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
