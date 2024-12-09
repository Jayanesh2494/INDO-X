import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

export function SectionTitle({ children, light = false }: SectionTitleProps) {
  return (
    <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
      light ? 'text-white' : 'bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent'
    }`}>
      {children}
    </h2>
  );
}