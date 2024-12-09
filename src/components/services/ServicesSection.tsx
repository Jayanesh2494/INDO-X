import React from 'react';
import { Wallet, Coins, BarChart3, ArrowLeftRight, Shield, Zap } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import ServiceCard from './ServiceCard';
import TokenMetrics from './TokenMetrics';

export default function ServicesSection() {
  const services = [
    {
      icon: Wallet,
      title: 'DeFi Integration',
      description: 'Access decentralized financial services with seamless integration and earn yields on your assets.',
      features: ['Yield Farming', 'Liquidity Pools', 'Asset Swaps'],
    },
    {
      icon: Coins,
      title: 'Staking Rewards',
      description: 'Earn passive income by staking your INDO X tokens with competitive APY rates.',
      features: ['Flexible Staking', 'High APY', 'Weekly Rewards'],
    },
    {
      icon: BarChart3,
      title: 'NFT Marketplace',
      description: 'Trade unique digital assets on our secure NFT platform with zero gas fees.',
      features: ['Zero Gas Fees', 'Lazy Minting', 'Royalties'],
    },
    {
      icon: ArrowLeftRight,
      title: 'Cross-Border Payments',
      description: 'Send money globally with minimal fees and instant settlement using our network.',
      features: ['Instant Transfers', 'Low Fees', 'Multi-Currency'],
    },
    {
      icon: Shield,
      title: 'Security Features',
      description: 'Advanced security protocols protect your assets and transactions at all times.',
      features: ['Multi-Sig Wallets', '2FA', 'Fraud Protection'],
    },
    {
      icon: Zap,
      title: 'Lightning Network',
      description: 'Experience lightning-fast transactions with our Layer 2 scaling solution.',
      features: ['Instant Finality', 'Low Latency', 'High TPS'],
    },
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark to-background opacity-90" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <SectionTitle light>What Makes INDO X the Ideal Crypto Solution?</SectionTitle>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <TokenMetrics />
      </div>
    </section>
  );
}