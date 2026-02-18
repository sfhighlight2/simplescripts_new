import React from 'react';
import { Play } from 'lucide-react';

const SocialProof: React.FC = () => {
  const users = [
    { name: "Sonia", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300" },
    { name: "Dave", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300" },
    { name: "Alan", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300" },
    { name: "James", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300" },
    { name: "Gordon", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300" },
    { name: "Valjean", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=300" },
  ];

  return (
    <section className="bg-[#EBEBE6] py-20">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col lg:flex-row gap-16 items-center">

        {/* Left: Grid */}
        <div className="grid grid-cols-3 gap-3 w-full lg:w-1/2">
          {users.map((user, idx) => (
            <div key={idx} className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <img src={user.image} alt={user.name} className="w-full h-full object-cover" />
              <div className="absolute top-2 left-2 flex items-center gap-1 bg-black/20 backdrop-blur-md rounded-full px-2 py-1">
                <span className="text-white text-[10px] font-medium">{user.name}</span>
                <span className="text-white/80 text-[10px]">Simple Scripts member</span>
              </div>
              {/* Play icon overlay on hover */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="bg-white rounded-full p-3 text-black">
                  <Play size={16} fill="currentColor" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center text-[8px]">95%</div>
            <span>95% love their experience</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-serif leading-tight">
            3,000,000+
            <span className="block text-2xl md:text-3xl font-sans font-normal mt-2 text-gray-600">members and counting</span>
          </h2>

          <div className="pt-8 border-t border-gray-300 max-w-lg">
            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Hear from Simple Scripts Partners:</p>
            <blockquote className="text-2xl md:text-3xl font-serif italic leading-relaxed mb-4">
              "Since losing 51 pounds through Simple Scripts, my day-to-day life has changed dramatically."
            </blockquote>
            <cite className="not-italic text-sm font-medium text-gray-600">— Kerry, Simple Scripts member</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;