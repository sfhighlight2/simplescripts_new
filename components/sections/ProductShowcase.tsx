import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';

const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'GLP-1 Supply Tracker',
    badge: 'Free access',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Sign Up'
  },
  {
    id: '2',
    title: 'Simple Scripts Daily',
    badge: 'Daily Support',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Shop Now'
  },
  {
    id: '3',
    title: 'Hair Loss Solution',
    badge: 'Rx Treatment',
    image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Learn More'
  },
  {
    id: '4',
    title: 'Testosterone Support',
    badge: 'New',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Shop Now'
  },
  {
    id: '5',
    title: 'Eczema Cream',
    badge: 'Skincare',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=400',
    primaryAction: 'Shop Now'
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-10 space-y-4 md:space-y-0">
        <h2 className="text-3xl md:text-4xl font-serif italic max-w-lg leading-tight">
          Support your weight loss journey
        </h2>
        <a href="#" className="group inline-flex items-center text-sm font-semibold underline underline-offset-4 hover:text-gray-600 transition-colors">
          View all
          <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 md:gap-6">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-square bg-gray-100 rounded-xl mb-4 overflow-hidden relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {product.badge && (
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider z-10">
                  {product.badge}
                </div>
              )}
            </div>

            <div className="flex-grow">
              <h3 className="font-semibold text-sm md:text-base mb-1">{product.title}</h3>
              {product.badge && <p className="text-xs text-gray-500">{product.badge}</p>}
            </div>

            <button className="mt-4 w-full border border-black py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-black hover:text-white transition-colors duration-200">
              {product.primaryAction}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;