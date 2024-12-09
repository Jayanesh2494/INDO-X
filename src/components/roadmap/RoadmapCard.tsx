import React from 'react';
import { Check } from 'lucide-react';

interface RoadmapCardProps {
  phase: string;
  title: string;
  items: string[];
  index: number;
}

export default function RoadmapCard({ phase, title, items, index }: RoadmapCardProps) {
  return (
    <div 
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
      style={{ animationDelay: `${index * 200}ms` }}
    >
      <div className="text-[#00FFAB] font-semibold mb-2">{phase}</div>
      <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start space-x-2">
            <Check className="w-5 h-5 text-[#FFC107] mt-1 flex-shrink-0" />
            <span className="text-white/80">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}