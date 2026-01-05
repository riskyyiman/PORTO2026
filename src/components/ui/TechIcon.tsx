'use client';

import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import { cn } from '../../lib/utils';

interface TechIconProps {
  name: string;
  icon: string;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ name, icon, className }) => {
  // Dynamically get the icon component
  const IconComponent = LucideIcons[icon as keyof typeof LucideIcons] || LucideIcons.Code2;

  return (
    <motion.div
      className={cn('group relative flex flex-col items-center gap-3 rounded-xl p-4 glass transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-accent/20', className)}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative">
        {/* @ts-ignore */}
        <IconComponent className="h-10 w-10 text-accent transition-colors group-hover:text-accent-hover" />
        <div className="absolute -inset-2 -z-10 rounded-full bg-accent/20 opacity-0 blur-xl transition-opacity group-hover:opacity-100" />
      </div>
      <span className="text-sm font-medium text-white/80 group-hover:text-white">{name}</span>
    </motion.div>
  );
};
