'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Award, ArrowUpRight, ChevronDown, ChevronUp, Calendar, X, ExternalLink } from 'lucide-react';
import { certificates } from '../../data/Certificates';

export const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // Ref untuk menangkap pergerakan scroll pada carousel mobile
  const carouselRef = useRef<HTMLDivElement>(null);

  // Framer Motion scroll tracking
  const { scrollXProgress } = useScroll({
    container: carouselRef,
  });

  // Membuat pergerakan bar progres lebih smooth
  const scaleX = useSpring(scrollXProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const selectedCert = certificates.find((c) => c.id === selectedId);
  const displayedCertificates = showAll ? certificates : certificates.slice(0, 6);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [selectedId]);

  return (
    <section className="py-14 px-6 md:px-12 lg:px-24 bg-[#020617] relative overflow-hidden" id="certificates">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col mb-12 md:mb-16 space-y-4 items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-mono text-xs tracking-[0.2em] uppercase"
          >
            <Award size={14} />
            <span>Learning Path</span>
          </motion.div>

          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Recognitions</span>
          </motion.h2>

          <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-gray-400 max-w-xl text-base md:text-lg leading-relaxed">
            Validasi kompetensi teknis melalui berbagai program sertifikasi terakreditasi.
          </motion.p>
        </div>

        {/* --- MOBILE VIEW: CAROUSEL --- */}
        <div className="md:hidden relative">
          <div ref={carouselRef} className="flex overflow-x-auto pb-6 snap-x snap-mandatory gap-5 no-scrollbar scroll-smooth">
            {certificates.map((cert) => (
              <div key={`mobile-${cert.id}`} className="min-w-[85vw] snap-center">
                <CertificateCard cert={cert} onZoom={() => setSelectedId(cert.id)} />
              </div>
            ))}
          </div>

          {/* Modern Scroll Indicator (Bar) */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400" style={{ scaleX, transformOrigin: '0%' }} />
            </div>
            <span className="text-[10px] text-gray-500 font-mono uppercase tracking-[0.2em]">Swipe to explore</span>
          </div>
        </div>

        {/* --- DESKTOP VIEW: GRID --- */}
        <div className="hidden md:block">
          <motion.div layout className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {displayedCertificates.map((cert, index) => (
                <motion.div layout key={cert.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.4, delay: index * 0.05 }}>
                  <CertificateCard cert={cert} onZoom={() => setSelectedId(cert.id)} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Action Button (Desktop Only) */}
          <div className="mt-20 flex justify-center">
            <button onClick={() => setShowAll(!showAll)} className="flex items-center gap-3 px-10 py-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300 group">
              <span className="text-sm font-bold tracking-wide uppercase">{showAll ? 'Show Less' : 'Explore All Certificates'}</span>
              <div className="text-blue-400 group-hover:rotate-180 transition-transform duration-500">{showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</div>
            </button>
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 bg-black/95 backdrop-blur-md cursor-zoom-out"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-white/10"
                onClick={(e) => e.stopPropagation()}
              >
                <Image src={selectedCert.image} alt={selectedCert.title} fill className="object-contain bg-neutral-900" />
                <button onClick={() => setSelectedId(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md border border-white/10">
                  <X size={24} />
                </button>
                <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <p className="text-sm text-blue-400 font-mono mb-1">{selectedCert.issuer}</p>
                  <h4 className="text-xl md:text-2xl font-bold">{selectedCert.title}</h4>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

// Sub-Component Card
const CertificateCard = ({ cert, onZoom }: { cert: any; onZoom: () => void }) => (
  <div className="group relative flex flex-col h-full bg-neutral-900/40 border border-white/5 rounded-[2rem] overflow-hidden hover:border-blue-500/40 transition-all duration-500">
    <div className="relative h-52 w-full p-3 cursor-zoom-in" onClick={onZoom}>
      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/5 bg-neutral-800">
        <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100" />
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/20 backdrop-blur-md p-2 rounded-full border border-white/20 text-white">
            <ArrowUpRight size={20} />
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-grow p-6 pt-2">
      <div className="flex items-center gap-2 mb-3">
        <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">{cert.issuer}</span>
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300 line-clamp-2 mb-4 leading-snug">{cert.title}</h3>
      <div className="mt-auto flex items-center justify-between pt-5 border-t border-white/5">
        <div className="flex items-center gap-2 text-gray-500">
          <Calendar size={14} />
          <span className="text-xs font-mono">{cert.issued}</span>
        </div>
        <a href={cert.URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-blue-400/80 hover:text-blue-300 transition-colors group/link">
          Verify <ExternalLink size={12} className="group-hover/link:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  </div>
);
