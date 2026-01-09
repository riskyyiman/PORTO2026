'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, MonitorSmartphone, Rocket, Users, GraduationCap, MapPin, Laptop, Sparkles, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: Code2, title: 'Software Development', description: 'Membangun aplikasi yang efisien, terukur, dan mudah dikelola dengan standar industri.', color: 'text-cyan-400' },
  { icon: MonitorSmartphone, title: 'Responsive Solutions', description: 'Memastikan aplikasi berjalan optimal dan estetis di berbagai perangkat dan ukuran layar.', color: 'text-blue-400' },
  { icon: Rocket, title: 'Performance Optimization', description: 'Menganalisis dan meningkatkan kecepatan aplikasi untuk pengalaman terbaik bagi pengguna.', color: 'text-indigo-400' },
  { icon: Users, title: 'Team Collaboration', description: 'Berkomunikasi dan bekerja sama secara efektif dalam lingkungan pengembangan tim.', color: 'text-sky-400' },
];

export const About: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#020617] py-24 md:py-32 z-10 overflow-hidden">
      {/* --- DEKORASI BACKGROUND (Contrast with Hero) --- */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] pointer-events-none">
        {/* Grid yang lebih tipis dan gelap */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Mood Changer: Indigo/Violet Glow (Hero menggunakan Cyan) */}
        <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-[1px] bg-indigo-500"></div>
                <span className="text-indigo-400 font-mono font-bold uppercase tracking-[0.2em] text-xs">Discovery</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tight">
                TENTANG <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 italic">SAYA.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full border border-indigo-500/20 bg-indigo-950/30 backdrop-blur-md self-start md:self-end mb-2"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-[10px] font-mono font-bold text-indigo-100 uppercase tracking-widest">Open to Work</span>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <motion.div className="lg:col-span-7 space-y-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white flex items-center gap-3">
                  <Sparkles className="text-indigo-400 w-6 h-6" />
                  Risky Iman Lael Prasetio
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Halo! Saya adalah mahasiswa Teknik Informatika di <strong className="text-white font-semibold">Universitas Muhammadiyah Purwokerto</strong>. Berbasis di Purwokerto, Jawa Tengah, saya mendedikasikan waktu saya untuk
                  mengeksplorasi potensi tak terbatas dari teknologi informasi demi menciptakan dampak positif di industri IT.
                </p>
                <div className="relative">
                  <p className="text-slate-400 text-base leading-relaxed border-l-2 border-indigo-500/50 pl-6 italic bg-white/[0.02] p-6 rounded-r-2xl backdrop-blur-sm">
                    "Saya percaya bahwa teknologi bukan sekadar alat, melainkan solusi yang dapat meningkatkan kualitas hidup masyarakat secara luas melalui inovasi yang berkelanjutan."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/5">
                {[
                  { label: 'Role', value: 'Student' },
                  { icon: GraduationCap, label: 'Kampus', value: 'UMP' },
                  { icon: MapPin, label: 'Lokasi', value: 'Purwokerto' },
                  { icon: Laptop, label: 'Fokus', value: 'Web Dev' },
                ].map((info) => (
                  <div key={info.label} className="space-y-2">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-mono font-bold">{info.label}</p>
                    <p className="text-white font-medium text-sm flex items-center gap-2">
                      {info.icon && <info.icon className="w-4 h-4 text-indigo-500" />}
                      {info.value}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className="lg:col-span-5 space-y-8" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-2">
                <span className="text-indigo-500 font-mono font-bold">//</span>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] font-mono">Core Competencies</p>
              </div>

              <div className="bg-white/[0.01] rounded-3xl border border-white/5 overflow-hidden backdrop-blur-sm">
                <div className="divide-y divide-white/5">
                  {features.map((feature, idx) => (
                    <div key={idx} className="group p-6 transition-all duration-500 hover:bg-white/[0.03]">
                      <div className="flex gap-6">
                        <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-950 border border-white/5 flex items-center justify-center group-hover:border-indigo-500/30 transition-all duration-500">
                          <feature.icon className={`w-6 h-6 ${feature.color}`} />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white text-base font-bold group-hover:text-indigo-400 transition-colors">{feature.title}</h4>
                          <p className="text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
