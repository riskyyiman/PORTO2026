'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Globe, Sparkles } from 'lucide-react';

type Message = {
  role: 'bot' | 'user';
  content: string;
  link?: { label: string; url: string };
};

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', content: 'Halo! Saya asisten virtual portofolio ini. Ketik /help untuk melihat apa saja yang bisa saya lakukan.' }]);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const getBotResponse = (input: string) => {
    const rawInput = input.trim();
    const cmd = rawInput.toLowerCase();

    switch (cmd) {
      case '/help':
        return {
          role: 'bot',
          content:
            'Berikut adalah perintah yang bisa kamu gunakan:\n\n' +
            '👤 /about - Kenali saya lebih dekat\n' +
            '🌐 /website - Filosofi website ini\n' +
            '🛠 /stack - Teknologi di balik layar\n' +
            '📁 /projects - Hasil karya terbaik\n' +
            '📄 /cv - Unduh Resume/CV\n' +
            '📱 /socials - Temukan saya di internet\n' +
            '✨ /clear - Bersihkan layar chat',
        };
      case '/about':
        return {
          role: 'bot',
          content: 'Saya adalah seorang Developer yang berdedikasi membangun pengalaman web yang indah dan fungsional. Saya percaya bahwa detail kecil membuat perbedaan besar.',
          link: { label: 'Lihat Detail Profil', url: '#about' },
        };
      case '/website':
        return {
          role: 'bot',
          content: 'Website ini dirancang untuk menunjukkan kreativitas dan keahlian teknis saya, menggunakan elemen interaktif untuk pengalaman browsing yang tidak membosankan.',
        };
      case '/stack':
        return {
          role: 'bot',
          content: 'Teknologi Utama:\n- Next.js 14 & TypeScript\n- Tailwind CSS untuk styling\n- Framer Motion untuk animasi halus\n- Lucide React untuk sistem ikon',
        };
      case '/cv':
        return {
          role: 'bot',
          content: 'Tentu! File CV saya sudah siap untuk kamu pelajari lebih lanjut.',
          link: { label: 'Unduh CV (PDF)', url: '/cv-kamu.pdf' },
        };
      case '/socials':
        return {
          role: 'bot',
          content: 'Senang bisa terhubung!\n\nInstagram: @username\nGitHub: github.com/username\nLinkedIn: linkedin.com/in/username',
        };
      case '/clear':
        setMessages([{ role: 'bot', content: 'Layar telah dibersihkan. Ada lagi yang bisa saya bantu? Ketik /help jika butuh panduan.' }]);
        return null;
      default:
        return {
          role: 'bot',
          content: 'Hmm, saya belum mengenali perintah itu. Coba ketik /help untuk melihat daftar perintah yang tersedia.',
        };
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;

    const userMsg: Message = { role: 'user', content: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    const currentInput = inputValue;
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const response = getBotResponse(currentInput);
      setIsTyping(false);
      if (response) {
        setMessages((prev) => [...prev, response as Message]);
      }
    }, 1200);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end font-sans text-black">
      {isOpen && (
        <div className="mb-4 w-[320px] sm:w-[380px] flex flex-col h-[500px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-[#0f172a] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-600 rounded-lg ring-2 ring-indigo-400/20 shadow-inner">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-bold text-sm leading-none flex items-center gap-2">
                  Assistant Bot
                  <Sparkles size={12} className="text-yellow-400" />
                </h3>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] text-gray-400 font-medium">Online</span>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1.5 rounded-full transition-all">
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-indigo-600 text-white shadow-md' : 'bg-white border border-gray-200 text-gray-600 shadow-sm'}`}>
                    {msg.role === 'user' ? <User size={14} /> : <Bot size={14} />}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div
                      className={`p-3 rounded-2xl text-[13px] leading-relaxed shadow-sm transition-all ${msg.role === 'user' ? 'bg-indigo-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}
                    >
                      <pre className="whitespace-pre-wrap font-sans">{msg.content}</pre>
                    </div>
                    {msg.link && (
                      <a
                        href={msg.link.url}
                        target="_blank"
                        className="text-xs font-bold text-indigo-600 bg-white p-2.5 rounded-xl border border-indigo-200 text-center hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center gap-2 shadow-sm active:scale-95"
                      >
                        {msg.link.label} <Globe size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="flex gap-2">
                  <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-white border border-gray-200 shadow-sm">
                    <Bot size={14} />
                  </div>
                  <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Form Input */}
          <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ketik perintah /help..."
              className="flex-1 bg-gray-100 border-none rounded-xl px-4 py-2.5 text-[13px] focus:ring-2 focus:ring-indigo-500 outline-none transition-all placeholder:text-gray-400"
            />
            <button type="submit" disabled={isTyping} className={`p-2.5 rounded-xl transition-all active:scale-90 shadow-md ${isTyping ? 'bg-gray-200 text-gray-400' : 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-100'}`}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`group relative flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition-all duration-500 ${isOpen ? 'bg-[#0f172a] rotate-[360deg]' : 'bg-indigo-600 hover:bg-indigo-700 hover:scale-110'}`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <>
            <MessageSquare size={24} className="text-white group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-indigo-500 border-2 border-white"></span>
            </span>
          </>
        )}
      </button>
    </div>
  );
};
