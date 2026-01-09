'use client';

import { useState, useEffect, useRef } from 'react';
import { supabase } from '../../lib/supabase';
import { Button } from '../ui/Button';
import { Send, User, MessageSquare, Quote, ShieldCheck } from 'lucide-react';

export const Feedback = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  // Honeypot state
  const [hpValue, setHpValue] = useState('');

  const [feedbacks, setFeedbacks] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    fetchFeedback();

    const channel = supabase
      .channel('feedback_realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'feedback' }, (payload) => {
        setFeedbacks((prev) => {
          const isExist = prev.some((fb) => fb.id === payload.new.id);
          if (isExist) return prev;
          return [payload.new, ...prev];
        });
      })
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const fetchFeedback = async () => {
    try {
      const { data, error } = await supabase.from('feedback').select('*').order('created_at', { ascending: false }).limit(50);
      if (error) throw error;
      if (data) setFeedbacks(data);
    } catch (err: any) {
      setError('Gagal memuat feedback');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Honeypot Validation: Jika bot mengisi field tersembunyi ini, abaikan secara diam-diam
    if (hpValue !== '') {
      console.warn('Spam bot detected');
      return;
    }

    // 2. Client-side Rate Limiting (Anti-spam sederhana)
    const lastSubmit = localStorage.getItem('last_feedback_time');
    const now = Date.now();
    if (lastSubmit && now - parseInt(lastSubmit) < 60000) {
      // Limit 1 menit per pesan
      setError('Tolong tunggu sebentar sebelum mengirim pesan lagi (Cooldown 1 menit).');
      return;
    }

    if (!message.trim()) return;
    setLoading(true);
    setError('');

    try {
      const { data, error } = await supabase
        .from('feedback')
        .insert({
          name: name.trim() || null,
          message: message.trim().substring(0, 500), // Batasi karakter
        })
        .select();

      if (error) throw error;

      if (data && data.length > 0) {
        setFeedbacks((prev) => [data[0], ...prev]);
        // Set timestamp untuk rate limit
        localStorage.setItem('last_feedback_time', now.toString());
      }

      setName('');
      setMessage('');
      setSuccess(true);
      setTimeout(() => setSuccess(false), 4000);
    } catch (err: any) {
      setError('Gagal kirim pesan. Coba lagi nanti.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="feedback" className="py-14 px-6 md:px-12 lg:px-24 bg-[#020617] relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <span className="px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 animate-pulse flex items-center gap-2">
            <ShieldCheck size={14} /> Ruang Suara Terjaga
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight mb-6 leading-tight">
            Satu Saranmu, <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">Sangat Bertarti Bagi Saya.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl font-light">Punya kritik, ide, atau sekadar ingin menyapa? Tuliskan saja di bawah! Setiap masukan darimu adalah bahan bakar saya untuk terus berkarya lebih baik lagi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Side */}
          <div className="lg:col-span-5 lg:sticky lg:top-10">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#0f172a]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot Field - Hidden for users, visible for bots */}
                  <div className="hidden" aria-hidden="true">
                    <input type="text" value={hpValue} onChange={(e) => setHpValue(e.target.value)} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1 italic">Siapa namamu?</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all text-white placeholder-gray-600"
                        placeholder="Anonymous"
                        maxLength={50}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 ml-1 italic">Apa pesanmu?</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        rows={5}
                        className="w-full pl-12 pr-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500 outline-none transition-all text-white placeholder-gray-600 resize-none"
                        placeholder="Tuliskan sesuatu yang berkesan..."
                        maxLength={500}
                      />
                    </div>
                    <p className="text-[10px] text-right text-gray-500 uppercase tracking-tighter">{message.length}/500</p>
                  </div>

                  <Button type="submit" disabled={loading} className="w-full py-4 bg-white text-black hover:bg-cyan-400 transition-all duration-300 rounded-xl font-bold flex items-center justify-center gap-2 group/btn">
                    {loading ? 'Mengirim...' : 'Kirim Feedback'}
                    <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </Button>

                  {success && (
                    <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 animate-in fade-in slide-in-from-top-2">
                      <p className="text-center text-emerald-400 text-sm font-medium">Pesan terkirim dengan aman! 🚀</p>
                    </div>
                  )}
                  {error && <p className="text-center text-red-400 text-xs font-medium animate-pulse">{error}</p>}
                </form>
              </div>
            </div>
          </div>

          {/* Feedback Display */}
          <div className="lg:col-span-7">
            {feedbacks.length === 0 ? (
              <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-[2rem] gap-4">
                <div className="p-4 rounded-full bg-white/5">
                  <MessageSquare className="text-gray-600 w-8 h-8" />
                </div>
                <p className="text-gray-500 italic font-light tracking-wide">Belum ada jejak di sini. Mulailah satu!</p>
              </div>
            ) : (
              <div className="columns-1 md:columns-2 gap-6 space-y-6">
                {feedbacks.map((fb) => (
                  <div key={fb.id} className="break-inside-avoid relative group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-6 rounded-2xl transition-all duration-500 animate-in fade-in zoom-in-95">
                    <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5 group-hover:text-cyan-500/20 transition-colors" />

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-blue-500/20">
                        {fb.name ? fb.name.substring(0, 2).toUpperCase() : '??'}
                      </div>
                      <div>
                        <h4 className="text-white font-medium text-sm leading-none mb-1">{fb.name || 'Mysterious User'}</h4>
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest">{fb.created_at ? new Date(fb.created_at).toLocaleDateString('id-ID', { month: 'short', day: 'numeric' }) : 'Baru saja'}</p>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed relative z-10 italic">"{fb.message}"</p>

                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
