'use client';

import React from 'react';

interface DotBackgroundProps {
  dotColor?: string;
  backgroundColor?: string;
  dotSize?: number;
  dotSpacing?: number;
  className?: string;
}

export const DotBackground: React.FC<DotBackgroundProps> = ({ dotColor = 'rgba(59, 130, 246, 0.3)', backgroundColor = '#0a0a0a', dotSize = 1.5, dotSpacing = 30, className = '' }) => {
  return (
    <div
      className={`fixed inset-0 -z-10 ${className}`}
      style={{
        backgroundColor,
        backgroundImage: `radial-gradient(circle, ${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        backgroundSize: `${dotSpacing}px ${dotSpacing}px`,
      }}
    >
      {/* Gradient overlay untuk depth */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${backgroundColor} 100%)`,
        }}
      />
    </div>
  );
};
