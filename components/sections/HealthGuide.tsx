import React from 'react';
import { ArrowRight } from 'lucide-react';

const HealthGuide: React.FC = () => {
  const articles = [
    { title: "Oral Wegovy (aka the Wegovy pill), explained", time: "6 min read", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=300" },
    { title: "Cialis® vs. Viagra®: similarities and differences", time: "8 min read", img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=300" },
    { title: "What is the difference between Wegovy® and Ozempic®?", time: "7 min read", img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=300" },
    { title: "Minoxidil foam vs. minoxidil liquid: pros and cons", time: "4 min read", img: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=300" },
    { title: "The scientific way to get stronger erections", time: "8 min read", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300" }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-24">
      <h2 className="text-2xl md:text-3xl font-serif mb-8">Health guide</h2>

      <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide pb-4">
        {articles.map((article, idx) => (
          <div key={idx} className="min-w-[280px] w-[280px] snap-start group cursor-pointer">
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden mb-4">
              <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <h3 className="font-bold text-sm mb-8 leading-snug min-h-[40px]">{article.title}</h3>
            <div className="flex justify-between items-center text-xs text-gray-500 border-t border-gray-100 pt-4">
              <span>{article.time}</span>
              <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium">
        <a href="#" className="hover:text-gray-600">Weight loss</a>
        <a href="#" className="hover:text-gray-600">Sexual health</a>
        <a href="#" className="hover:text-gray-600">Hair loss</a>
        <a href="#" className="hover:text-gray-600">Fertility</a>
        <a href="#" className="hover:text-gray-600">Skin</a>
      </div>
    </section>
  );
};

export default HealthGuide;