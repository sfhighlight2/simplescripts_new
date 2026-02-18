import React from 'react';
import { ArrowRight, Check, ShieldCheck, Tag } from 'lucide-react';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-12 md:py-16">
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-4 text-gray-900">Healthier on Simple Scripts</h1>
        <div className="flex flex-col md:flex-row gap-y-2 gap-x-6 text-xs md:text-sm text-gray-600 font-medium">
          <div className="flex items-center gap-2">
            <ShieldCheck size={16} className="text-gray-400" />
            <span>Trusted by millions on Simple Scripts for GLP-1s</span>
          </div>
          <div className="flex items-center gap-2">
            <Check size={16} className="text-gray-400" />
            <span>Real providers, FDA-approved options</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag size={16} className="text-gray-400" />
            <span>Lowest cost GLP-1s, with or without insurance</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-3xl min-h-[400px] md:min-h-[500px] bg-gradient-to-br from-[#9BBCC3] to-[#C9D9DD] p-8 md:p-12 flex flex-col">
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8 max-w-xs">The new GLP-1 pill on Simple Scripts</h2>
          </div>

          <div className="absolute inset-0 flex items-center justify-center translate-y-12 scale-110">
            {/* Abstract representation of pill pack */}
            <div className="w-64 h-64 bg-white/20 rounded-full backdrop-blur-sm flex items-center justify-center">
              <div className="text-white/40 text-7xl font-serif italic">Simple Scripts</div>
            </div>
          </div>

          <div className="mt-auto relative z-10 self-end md:self-auto">
            <Button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
              Start now <ArrowRight size={16} />
            </Button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-3xl min-h-[400px] md:min-h-[500px] bg-[#A4B8C4] p-8 md:p-12 flex flex-col">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=1000" alt="Woman smiling" className="w-full h-full object-cover object-top opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-8">Lose weight on GLP-1s</h2>
          </div>

          <div className="mt-auto relative z-10 self-end md:self-auto">
            <Button className="bg-black text-white px-8 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
              Start now <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: "Start your free insurance check", icon: "📝" },
          { title: "Explore Serena's health journey", icon: "🏃‍♀️" },
          { title: "Get GLP-1s with transparent pricing", icon: "💰" },
          { title: "Find Rx pricing", icon: "💊" }
        ].map((feature, idx) => (
          <div key={idx} className="bg-gray-100 rounded-2xl p-4 md:p-6 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-colors group h-24">
            <div className="flex items-center gap-4">
              <span className="text-2xl">{feature.icon}</span>
              <span className="text-sm font-medium leading-tight">{feature.title}</span>
            </div>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <ArrowRight size={14} />
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-500 flex items-center justify-center group-hover:opacity-0 transition-opacity absolute right-6">
              <ArrowRight size={14} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;