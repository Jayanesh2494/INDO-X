
import { PieChart, DollarSign, Users, TrendingUp } from 'lucide-react';

export default function TokenMetrics() {
  const metrics = [
    {
      icon: PieChart,
      label: 'Total Supply',
      value: '100,000,000',
      suffix: 'INDO',
    },
    {
      icon: DollarSign,
      label: 'Market Cap',
      value: '$XXX',
      suffix: 'USD',
    },
    {
      icon: Users,
      label: 'Holders',
      value: 'XXX',
      suffix: 'Users',
    },
    {
      icon: TrendingUp,
      label: 'Growth',
      value: 'XXX',
      suffix: 'YTD',
    },
  ];

  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
      <h3 className="text-2xl font-bold text-white text-center mb-8">Token Metrics</h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="text-center">
            <metric.icon className="w-8 h-8 text-brand mx-auto mb-3" />
            <div className="text-2xl font-bold text-white mb-1">{metric.value}</div>
            <div className="text-white/60 text-sm">{metric.label}</div>
            <div className="text-coral text-sm">{metric.suffix}</div>
          </div>
        ))}
      </div>
    </div>
  );
}