
import { Shield, Zap, Globe, Users, Lock, Cpu } from 'lucide-react';
import TimelineItem from './TimelineItem';
import { SectionTitle } from '../common/SectionTitle';

export default function AboutSection() {
  const milestones = [
    {
      date: '2023 Q4',
      title: 'Project Inception',
      description: 'INDO X Coin was conceptualized with a vision to revolutionize Indian crypto.',
    },
    {
      date: '2024 Q1',
      title: 'Token Development',
      description: 'Smart contract development and security audits completed.',
    },
    {
      date: '2024 Q4',
      title: 'Public Launch',
      description: 'Successfully launched on major exchanges with strong community support.',
    },
    {
      date: '2024 Q4',
      title: 'Global Expansion',
      description: 'Strategic partnerships and international market penetration.',
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Security First',
      description: 'Military-grade encryption and multi-layer security protocols ensure your assets are protected.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Process up to 100,000 transactions per second with near-instant finality.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connected with major exchanges worldwide for seamless trading.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Governance tokens give power back to the community.',
    },
    {
      icon: Lock,
      title: 'Regulatory Compliant',
      description: 'Full compliance with Indian and international crypto regulations.',
    },
    {
      icon: Cpu,
      title: 'Smart Technology',
      description: 'Advanced blockchain technology with AI-powered security.',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background-light opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionTitle light>Empowering India's Blockchain Revolution</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-brand mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/80">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-white mb-12">Our Journey</h3>
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={index}
                date={milestone.date}
                title={milestone.title}
                description={milestone.description}
                isLast={index === milestones.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}