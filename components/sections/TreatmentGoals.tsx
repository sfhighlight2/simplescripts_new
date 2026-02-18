import React from 'react';
import { ArrowRight, Weight, Heart, Sparkles, Smile, Baby, Zap } from 'lucide-react';

const TreatmentGoals: React.FC = () => {
  const categories = [
    { label: "Lose weight", icon: <Weight size={20} className="text-blue-500" /> },
    { label: "Unlock better sex", icon: <Heart size={20} className="text-red-500" /> },
    { label: "Regrow hair", icon: <Sparkles size={20} className="text-gray-800" /> },
    { label: "Improve skin", icon: <Smile size={20} className="text-teal-500" /> },
    { label: "Get fertility insights", icon: <Baby size={20} className="text-purple-500" /> },
    { label: "New from Simple Scripts", icon: <Zap size={20} className="text-yellow-500" /> },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-20">
      <div className="relative rounded-3xl overflow-hidden min-h-[400px] flex flex-col justify-center items-center text-center p-8 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1576091160550-2187d80aeff2?auto=format&fit=crop&q=80&w=2000"
          alt="Hand holding treatment"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative z-10 w-full max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-10 drop-shadow-md">
            Prescription treatments for your health goals
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, idx) => (
              <div key={idx} className="bg-white/95 backdrop-blur-sm hover:bg-white rounded-xl p-4 flex items-center justify-between cursor-pointer transition-colors group shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-8 flex justify-center">{cat.icon}</div>
                  <span className="font-semibold text-sm">{cat.label}</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight size={14} />
                </div>
                <div className="w-8 h-8 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center group-hover:opacity-0 transition-opacity absolute right-4">
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentGoals;