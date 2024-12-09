import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            The Future of Crypto,{' '}
            <span className="bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent">
              Rooted in India
            </span>
          </h1>
          
          <div className="flex justify-center space-x-2 mb-12">
            <Sparkles className="w-6 h-6 text-mint" />
            <p className="text-xl text-white/80">Secure. Scalable. Sustainable.</p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <button className="group bg-gradient-to-r from-brand to-coral hover:opacity-90 text-white font-semibold px-8 py-3 rounded-md transition-all duration-300">
              Explore Tokenomics
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-brand text-white hover:bg-brand hover:border-transparent font-semibold px-8 py-3 rounded-md transition-all duration-300">
              Join the ICO
              <ArrowRight className="inline ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { label: 'Transactions', value: '1M+' },
              { label: 'Investors', value: '10K+' },
              { label: 'Uptime', value: '99.99%' }
            ].map((stat) => (
              <div key={stat.label} className="bg-background-light/50 backdrop-blur-sm border border-white/10 rounded-lg p-6">
                <div className="text-3xl font-bold bg-gradient-to-r from-brand to-coral bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}