'use client';

import React, { ComponentPropsWithoutRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type MotionButtonProps = ComponentPropsWithoutRef<typeof motion.button>;

interface ButtonProps extends MotionButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = ({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 rounded-lg';

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm',
    outline: 'border-2 border-accent text-accent hover:bg-accent hover:text-white',
    ghost: 'hover:bg-white/10 text-white',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
      {children}
    </motion.button>
  );
};
