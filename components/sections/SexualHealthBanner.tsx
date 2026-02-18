import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import Button from '../ui/Button';

const SexualHealthBanner: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-16">
      <div className="relative rounded-3xl overflow-hidden min-h-[500px] md:min-h-[600px] flex items-end">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=2000"
            alt="Couple intimacy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 p-8 md:p-16 w-full flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6 leading-tight">
              Better sex with fast-acting, long-lasting Simple Scripts Sparks
            </h2>
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-sm font-bold tracking-wide flex items-center gap-2">
              Get started <ArrowRight size={16} />
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 pr-6 flex items-center gap-4">
            <div className="bg-[#FF4500] rounded-full w-12 h-12 flex items-center justify-center text-white shadow-lg shadow-orange-500/50">
              <Zap fill="currentColor" size={24} />
            </div>
            <div className="text-white text-xs font-bold leading-tight">
              Starts working in<br />
              <span className="text-base">15 mins*</span>
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] text-gray-400 mt-2 text-center md:text-right px-4">
        *On average, after Sparks dissolves. Sparks is a compounded drug and is not FDA-approved.
      </p>
    </section>
  );
};

export default SexualHealthBanner;