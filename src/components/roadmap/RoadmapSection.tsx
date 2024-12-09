import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import RoadmapCard from './RoadmapCard';

export default function RoadmapSection() {
  const roadmapItems = [
    {
      phase: 'Phase 1',
      title: 'Foundation',
      items: ['Token Launch', 'Exchange Listings', 'Community Building'],
    },
    {
      phase: 'Phase 2',
      title: 'Growth',
      items: ['DeFi Platform Launch', 'Staking Program', 'Mobile App Beta'],
    },
    {
      phase: 'Phase 3',
      title: 'Expansion',
      items: ['NFT Marketplace', 'Cross-Chain Bridge', 'Global Partnerships'],
    },
    {
      phase: 'Phase 4',
      title: 'Innovation',
      items: ['Smart Contract Platform', 'Developer SDK', 'Enterprise Solutions'],
    },
  ];

  return (
    <section id="roadmap" className="py-24 bg-gradient-to-b from-black to-[#1F4E79]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle>Our Journey to Success</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapItems.map((item, index) => (
            <RoadmapCard
              key={item.phase}
              phase={item.phase}
              title={item.title}
              items={item.items}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}