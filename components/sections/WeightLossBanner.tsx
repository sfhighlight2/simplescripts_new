import React from 'react';
import { ArrowRight, TrendingDown } from 'lucide-react';
import Button from '../ui/Button';

const WeightLossBanner: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-16">
      <div className="relative rounded-3xl overflow-hidden bg-[#E8C4B0] min-h-[500px] md:min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&q=80&w=2000" 
            alt="Weight loss journey" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E8C4B0]/80 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-2xl px-8 md:px-16 w-full">
          <h2 className="text-3xl md:text-5xl font-serif text-white mb-8 leading-tight drop-shadow-sm">
            Drop 20% of your weight and keep it off
          </h2>
          
          <Button className="bg-white text-black hover:bg-gray-100 px-8 py-4 rounded-full text-sm font-bold tracking-wide flex items-center gap-2 w-fit mb-12">
             Start losing weight <ArrowRight size={16} />
          </Button>

          {/* Graph Overlay */}
          <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 md:p-6 max-w-sm shadow-lg">
             <div className="flex items-end justify-between h-32 mb-2 px-2 relative">
                {/* Simplified SVG Graph */}
                <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
                  <path d="M0,10 Q50,10 80,40 T200,80" fill="none" stroke="#22c55e" strokeWidth="3" strokeDasharray="4 4" />
                  <path d="M0,10 Q50,15 80,60 T200,90" fill="none" stroke="#22c55e" strokeWidth="4" />
                  {/* Point at end */}
                  <circle cx="200" cy="90" r="4" fill="#22c55e" />
                </svg>
                <div className="absolute bottom-2 right-0 bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                   <TrendingDown size={12} /> 15-20% lbs
                </div>
             </div>
             <p className="text-[10px] text-gray-500 leading-tight">
               Average weight loss in 1 year is 20% (vs 3.1% with diet and exercise alone). Based on a study...
             </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeightLossBanner;