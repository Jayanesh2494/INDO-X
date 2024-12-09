import React from 'react';

interface TimelineItemProps {
  date: string;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function TimelineItem({ date, title, description, isLast }: TimelineItemProps) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-brand border-2 border-white" />
      {!isLast && (
        <div className="absolute left-[7px] top-4 w-[2px] h-24 bg-gradient-to-b from-brand to-transparent" />
      )}
      <div className="ml-6">
        <span className="text-coral font-semibold">{date}</span>
        <h3 className="text-xl font-bold text-white mt-1">{title}</h3>
        <p className="text-white/80 mt-2">{description}</p>
      </div>
    </div>
  );
}