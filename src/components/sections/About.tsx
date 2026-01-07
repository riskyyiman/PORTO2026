'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Rocket, Users, GraduationCap, MapPin, Laptop, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

// Update warna icon agar sesuai dengan tema Cyan/Blue/Indigo
const features = [
  {
    icon: Code2,
    title: 'Software Development',
    description: 'Membangun aplikasi yang efisien, terukur, dan mudah dikelola dengan standar industri.',
    color: 'text-cyan-400', // Diubah dari Blue
  },
  {
    icon: MonitorSmartphone,
    title: 'Responsive Solutions',
    description: 'Memastikan aplikasi berjalan optimal dan estetis di berbagai perangkat dan ukuran layar.',
    color: 'text-blue-400', // Diubah dari Purple
  },
  {
    icon: Rocket,
    title: 'Performance Optimization',
    description: 'Menganalisis dan meningkatkan kecepatan aplikasi untuk pengalaman terbaik bagi pengguna.',
    color: 'text-indigo-400', // Diubah dari Pink
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Berkomunikasi dan bekerja sama secara efektif dalam lingkungan pengembangan tim.',
    color: 'text-sky-400', // Diubah dari Teal
  },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#020617] py-32 z-10 overflow-hidden">
      {/* --- DEKORASI BACKGROUND (Konsisten dengan Hero) --- */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] pointer-events-none">
        {/* Grid Pattern - Sama dengan Hero untuk kontinuitas */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />

        {/* Ambient Glow - Posisi berbeda dari Hero untuk 'Contrast' visual */}
        {/* Kiri Bawah: Cyan */}
        <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px]" />
        {/* Kanan Atas: Indigo */}
        <div className="absolute top-0 right-[-10%] w-[600px] h-[600px] bg-indigo-900/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-[1px] bg-cyan-500"></div>
                {/* Font Mono untuk kesan Tech */}
                <span className="text-cyan-500 font-mono font-bold uppercase tracking-widest text-xs">Discovery</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
                TENTANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 italic">SAYA.</span>
              </h2>
            </motion.div>

            {/* Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-2 rounded-full border border-cyan-500/20 bg-cyan-950/30 backdrop-blur-md mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-100 uppercase tracking-widest">Open to Work</span>
            </motion.div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* LEFT SIDE: Narrative */}
            <motion.div className="lg:col-span-7 space-y-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="text-cyan-400 w-6 h-6" />
                  Risky Iman Lael Prasetio
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed text-justify">
                  Halo! Saya adalah mahasiswa Teknik Informatika di <strong className="text-white">Universitas Muhammadiyah Purwokerto</strong>. Berbasis di Purwokerto, Jawa Tengah, saya mendedikasikan waktu saya untuk mengeksplorasi
                  potensi tak terbatas dari teknologi informasi demi menciptakan dampak positif di industri IT.
                </p>
                {/* Quote Styling diubah ke Cyan border */}
                <p className="text-slate-400 text-base leading-relaxed text-justify border-l-2 border-cyan-500/30 pl-6 italic bg-white/5 p-4 rounded-r-lg">
                  "Saya percaya bahwa teknologi bukan sekadar alat, melainkan solusi yang dapat meningkatkan kualitas hidup masyarakat secara luas melalui inovasi yang berkelanjutan."
                </p>
              </div>

              {/* Specs Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/5">
                {[
                  { label: 'Role', value: 'Student' },
                  { icon: GraduationCap, label: 'Kampus', value: 'UMP' },
                  { icon: MapPin, label: 'Lokasi', value: 'Purwokerto' },
                  { icon: Laptop, label: 'Fokus', value: 'Web Dev' },
                ].map((info) => (
                  <div key={info.label} className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-mono font-bold">{info.label}</p>
                    <p className="text-white font-medium text-sm flex items-center gap-2">
                      {info.icon && <info.icon className="w-3 h-3 text-cyan-500" />}
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6 text-slate-400">
                <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" /> Dedicated Learner
                </div>
                <div className="flex items-center gap-2 text-xs font-mono font-medium uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500" /> Solution Oriented
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: Competencies */}
            <motion.div className="lg:col-span-5 space-y-6" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest font-mono mb-4 flex items-center gap-2">
                <span className="text-cyan-500">//</span> Core Competencies
              </p>

              <div className="divide-y divide-white/5 bg-white/[0.02] rounded-2xl border border-white/5 p-2">
                {features.map((feature, idx) => (
                  <div key={idx} className="group p-4 transition-all duration-300 hover:bg-white/[0.03] rounded-xl">
                    <div className="flex gap-5">
                      <div className={`shrink-0 w-10 h-10 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center group-hover:border-cyan-500/30 transition-colors`}>
                        <feature.icon className={`w-5 h-5 ${feature.color}`} />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="text-white text-sm font-bold group-hover:text-cyan-400 transition-colors">{feature.title}</h4>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 group-hover:text-slate-300 transition-colors">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
