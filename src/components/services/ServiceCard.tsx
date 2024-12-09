import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
      <div className="relative z-10">
        <Icon className="w-12 h-12 text-brand mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/80 mb-4">{description}</p>
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center space-x-2 text-white/70">
              <Check className="w-4 h-4 text-mint" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}