import React from 'react';
import Button from '../ui/Button';
import { Product } from '../../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Simple Scripts Sparks',
    subtitle: 'Works in 15 minutes on average, lasts for up to 36 hours*',
    badge: 'Best seller',
    image: 'https://images.unsplash.com/photo-1635581898165-4f056c7d3c33?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Get started',
    secondaryAction: 'Learn more'
  },
  {
    id: '2',
    title: 'Daily Rise Gummies',
    subtitle: 'Daily tadalafil gummy works continuously, no planning required',
    image: 'https://images.unsplash.com/photo-1624360533088-75618f0a0e5b?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Get started',
    secondaryAction: 'Learn more'
  },
  {
    id: '3',
    title: 'Generic of Viagra®',
    subtitle: 'Up to 99% cheaper than branded',
    image: 'https://images.unsplash.com/photo-1550572017-edd951aa8f72?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Get started',
    secondaryAction: 'Learn more'
  },
  {
    id: '4',
    title: 'Viagra® (sildenafil)',
    subtitle: 'Ready in up to 60 mins, lasts for 4 hours',
    image: 'https://images.unsplash.com/photo-1550572017-4fcdbb560fa3?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Get started',
    secondaryAction: 'Learn more'
  },
  {
    id: '5',
    title: 'Generic of Cialis®',
    subtitle: 'Affordable alternative to branded',
    image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd0?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Get started',
    secondaryAction: 'Learn more'
  }
];

const SexualHealthProducts: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-20">
      <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory scrollbar-hide">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="min-w-[280px] w-[280px] snap-start flex flex-col">
            <div className="bg-[#F3F4F6] rounded-2xl p-6 aspect-square relative mb-4 flex items-center justify-center group overflow-hidden">
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#C28E79] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm z-10">
                  {product.badge}
                </div>
              )}
              <img src={product.image} alt={product.title} className="w-full h-full object-cover mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
            </div>

            <h3 className="font-bold text-lg mb-1">{product.title}</h3>
            <p className="text-gray-500 text-xs mb-4 min-h-[32px]">{product.subtitle}</p>

            <div className="flex gap-2 mt-auto">
              <Button size="sm" className="bg-black text-white px-5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap">{product.primaryAction}</Button>
              <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 px-5 py-2 rounded-full text-[11px] font-bold whitespace-nowrap">{product.secondaryAction}</Button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 underline cursor-pointer">Important safety information</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SexualHealthProducts;