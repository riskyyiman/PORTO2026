'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { cn } from '../../lib/utils';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- FUNGSI BARU: HANDLE SMOOTH SCROLL ---
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();

    // 1. Ambil elemen tujuan berdasarkan ID (hapus tanda #)
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);

    // 2. Scroll ke elemen tersebut dengan behavior smooth
    if (elem) {
      // Offset sedikit (misal -100px) agar judul tidak ketutup navbar yang melayang
      const offsetTop = elem.getBoundingClientRect().top + window.scrollY - 100;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }

    // 3. Tutup menu mobile jika sedang terbuka
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.header
        className={cn('fixed top-0 inset-x-0 z-50 flex justify-center py-4 px-4 transition-all duration-300', isScrolled ? 'py-4' : 'py-6')}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
      >
        <div
          className={cn(
            'flex items-center justify-between w-full max-w-5xl rounded-full px-4 py-2 transition-all duration-300 border',
            isScrolled ? 'bg-slate-900/60 backdrop-blur-xl border-white/10 shadow-lg shadow-blue-500/5' : 'bg-transparent border-transparent'
          )}
        >
          {/* Logo - Klik ke atas (Home) */}
          <Link href="#home" onClick={(e) => handleScroll(e, '#home')} className="relative z-10 px-2 group">
            <span className="text-xl font-bold text-white tracking-tight group-hover:text-blue-400 transition-colors">
              iman<span className="text-blue-500">Laell.</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 rounded-full px-2 py-1.5 border border-white/5 backdrop-blur-md">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                // TAMBAHKAN ONCLICK DISINI
                onClick={(e) => handleScroll(e, link.href)}
                className="relative px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:text-white"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {hoveredIndex === index && <motion.span className="absolute inset-0 bg-white/10 rounded-full" layoutId="navbar-hover" transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }} />}
                <span className="relative z-10">{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center">
            <Link href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-slate-900 text-sm font-semibold hover:bg-blue-50 transition-colors">
                Let's Talk
                <ArrowUpRight size={16} />
              </button>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl flex flex-col items-center justify-center"
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className="absolute top-[-20%] right-[-20%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none" />

            <nav className="flex flex-col items-center gap-8 relative z-10">
              {navLinks.map((link, index) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 + index * 0.1, type: 'spring' }}>
                  <Link
                    href={link.href}
                    // TAMBAHKAN ONCLICK DISINI JUGA
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-4xl font-bold text-slate-300 hover:text-white hover:scale-105 transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="mt-8">
                <Link href="#contact" onClick={(e) => handleScroll(e, '#contact')}>
                  <button className="px-8 py-4 rounded-full bg-blue-600 text-white text-lg font-bold shadow-lg shadow-blue-600/30">Get In Touch</button>
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
