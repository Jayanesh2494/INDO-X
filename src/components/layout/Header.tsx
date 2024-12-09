import React from 'react';
import { Coins, Menu } from 'lucide-react';
import NavLink from './NavLink';

export default function Header() {
  return (
    <header className="fixed w-full bg-background-dark/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <Coins className="w-8 h-8 text-brand" />
            <span className="text-2xl font-bold bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
              INDO X
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#about">About Us</NavLink>
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <button className="bg-gradient-to-r from-brand to-coral hover:opacity-90 text-white font-semibold px-6 py-2 rounded-md transition-all duration-300">
            Buy INDO X
          </button>

          <button className="md:hidden">
            <Menu className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </header>
  );
}