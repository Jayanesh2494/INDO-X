import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-white relative group py-2"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-brand to-coral group-hover:w-full transition-all duration-300" />
    </a>
  );
}