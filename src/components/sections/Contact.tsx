'use client';

import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Tambahkan AnimatePresence
import { Mail, MessageSquare, Send, User, CheckCircle, MapPin, Clock, Sparkles, Loader2, X } from 'lucide-react';
import { Magnetic } from '../ui/Magnetic';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false); // State baru untuk pop-up

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsLoading(true);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!, formRef.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!)
      .then(() => {
        setIsSubmitted(true);
        setShowPopup(true); // Tampilkan pop-up
        setFormData({ name: '', email: '', message: '' });

        // Sembunyikan pop-up otomatis setelah 4 detik
        setTimeout(() => {
          setShowPopup(false);
          setIsSubmitted(false);
        }, 4000);
      })
      .catch((error) => {
        console.error('Gagal:', error.text);
        alert('Gagal mengirim pesan, silakan coba lagi.');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative bg-[#030712] py-24 overflow-hidden">
      {/* --- SUCCESS POPUP (TOAST) --- */}
      <AnimatePresence>
        {showPopup && (
          <motion.div initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }} className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-md">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-emerald-500/50 p-4 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.4),0_0_20px_rgba(16,185,129,0.2)] flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0">
                <CheckCircle className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-grow">
                <h4 className="text-white font-bold text-sm">Pesan Terkirim!</h4>
                <p className="text-slate-400 text-xs">Terima kasih, saya akan segera menghubungi Anda.</p>
              </div>
              <button onClick={() => setShowPopup(false)} className="text-slate-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
              {/* Progress Bar Timer */}
              <motion.div initial={{ width: '100%' }} animate={{ width: '0%' }} transition={{ duration: 4, ease: 'linear' }} className="absolute bottom-0 left-0 h-1 bg-emerald-500 rounded-full" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- BACKGROUND DECORATION --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03] contrast-150 brightness-100 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_80%)]" />
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="container relative mx-auto px-6 z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div className="text-center mb-20" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Let's <span className="text-blue-500 italic">Connect</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed font-light">Punya ide luar biasa? Mari berkolaborasi untuk mengubah visi Anda menjadi kenyataan digital.</p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 items-stretch">
            {/* Left Card: Info */}
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="h-full flex flex-col p-8 md:p-10 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] backdrop-blur-3xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-medium w-fit mb-8 uppercase tracking-widest">
                    <Sparkles className="w-3 h-3" /> Contact Info
                  </div>

                  <div className="space-y-10 flex-grow">
                    <div className="group/item flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-300">
                        <Mail className="w-6 h-6 text-slate-400 group-hover/item:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Email Me</p>
                        <p className="text-slate-200 font-medium">riskyiman699@gmail.com</p>
                      </div>
                    </div>

                    <div className="group/item flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-300">
                        <MapPin className="w-6 h-6 text-slate-400 group-hover/item:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Based In</p>
                        <p className="text-slate-200 font-medium">Jawa Tengah, Indonesia</p>
                      </div>
                    </div>

                    <div className="group/item flex items-center gap-5">
                      <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center group-hover/item:border-blue-500/50 group-hover/item:bg-blue-500/10 transition-all duration-300">
                        <Clock className="w-6 h-6 text-slate-400 group-hover/item:text-blue-400" />
                      </div>
                      <div>
                        <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-bold mb-1">Response Time</p>
                        <p className="text-slate-200 font-medium">Within 24 Hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-16 pt-8 border-t border-white/[0.05]">
                    <p className="text-slate-400 text-sm italic leading-relaxed">"Desain bukan hanya tentang apa yang terlihat, tapi tentang bagaimana itu berfungsi dan memberikan nilai."</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Form */}
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <form ref={formRef} onSubmit={handleSubmit} className="h-full p-8 md:p-10 bg-white/[0.02] border border-white/[0.05] rounded-[2.5rem] backdrop-blur-3xl flex flex-col space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <div className="relative group">
                      <User className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <div className="relative group">
                      <Mail className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-500 transition-colors" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-2xl px-14 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-3 flex-grow flex flex-col">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project..."
                    className="w-full flex-grow bg-white/[0.03] border border-white/[0.08] rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-blue-500/50 focus:ring-4 focus:ring-blue-500/5 transition-all resize-none min-h-[180px]"
                  />
                </div>

                <Magnetic>
                  <button
                    type="submit"
                    disabled={isSubmitted || isLoading}
                    className={`w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-500 ${
                      isSubmitted ? 'bg-emerald-500 text-white' : 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_10px_30px_rgba(37,99,235,0.2)]'
                    } ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        Berhasil!
                      </>
                    ) : (
                      <>
                        Kirim Sekarang
                        <Send className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </>
                    )}
                  </button>
                </Magnetic>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
