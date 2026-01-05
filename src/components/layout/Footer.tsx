'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';

const socialLinks = [
  { href: 'https://github.com', icon: Github, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'mailto:hello@example.com', icon: Mail, label: 'Email' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">YourName</h3>
            <p className="text-white/60 text-sm">Building digital experiences that make a difference.</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-white/60 hover:text-accent transition-colors text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <Magnetic key={label} strength={0.2}>
                  <motion.a href={href} target="_blank" rel="noopener noreferrer" className="glass p-3 rounded-lg hover:bg-accent/20 transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} aria-label={label}>
                    <Icon className="w-5 h-5 text-white/80" />
                  </motion.a>
                </Magnetic>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">© {currentYear} YourName. All rights reserved.</p>
            <p className="text-white/60 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
