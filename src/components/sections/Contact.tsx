'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, User, CheckCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Magnetic } from '../ui/Magnetic';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (integrate with your backend/email service)
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="section-padding relative bg-black/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Have a project in mind or just want to chat? I'd love to hear from you!</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div className="space-y-8" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="glass rounded-2xl p-8 space-y-6">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Email</h4>
                      <a href="mailto:hello@example.com" className="text-white/60 hover:text-accent transition-colors">
                        hello@example.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="glass p-3 rounded-lg">
                      <MessageSquare className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Social Media</h4>
                      <p className="text-white/60">Follow me on LinkedIn, Twitter, and GitHub</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="text-white/60 text-sm leading-relaxed">
                    I'm currently available for freelance work and exciting projects. If you have a project that you want to get started, think you need my help with something, or just fancy saying hey, then get in touch.
                  </p>
                </div>
              </div>

              {/* Quick Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  {['Resume', 'LinkedIn', 'GitHub', 'Twitter'].map((link) => (
                    <a key={link} href="#" className="block text-white/60 hover:text-accent transition-colors py-2">
                      → {link}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 text-sm font-medium">
                      Your Name
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-12 py-3 text-white placeholder-white/40 focus:border-accent focus:outline-none transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 text-sm font-medium">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-12 py-3 text-white placeholder-white/40 focus:border-accent focus:outline-none transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div>
                    <label htmlFor="message" className="block text-white/80 mb-2 text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:border-accent focus:outline-none transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  {/* Submit Button */}
                  <Magnetic>
                    <Button type="submit" variant="primary" size="lg" className="w-full group" disabled={isSubmitted}>
                      {isSubmitted ? (
                        <>
                          <CheckCircle className="mr-2 w-5 h-5" />
                          Message Sent!
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </Button>
                  </Magnetic>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
