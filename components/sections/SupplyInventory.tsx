import React from 'react';
import Button from '../ui/Button';

const INVENTORY_ITEMS = [
  {
    name: "Wegovy® pill",
    sub: "semaglutide",
    status: "In stock via Simple Scripts",
    statusColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400",
    description: "In stock via Simple Scripts"
  },
  {
    name: "Zepbound® vials",
    sub: "tirzepatide",
    status: "In stock via LilyDirect™",
    statusColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400",
    description: "In stock via LilyDirect"
  },
  {
    name: "Ozempic®",
    sub: "semaglutide",
    status: "Supply available",
    statusColor: "bg-blue-100 text-blue-800",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?auto=format&fit=crop&q=80&w=400",
    description: "Supply available"
  },
  {
    name: "Wegovy® pen",
    sub: "semaglutide",
    status: "In stock via Simple Scripts",
    statusColor: "bg-green-100 text-green-800",
    image: "https://images.unsplash.com/photo-1585435557343-3b092031a831?auto=format&fit=crop&q=80&w=400",
    description: "In stock via Simple Scripts"
  }
];

const SupplyInventory: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {INVENTORY_ITEMS.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <div className="bg-[#F9F7F2] rounded-2xl aspect-square relative mb-4 overflow-hidden">
              <div className={`absolute top-4 left-4 ${item.statusColor} text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm flex items-center gap-1 z-10`}>
                <div className="w-1.5 h-1.5 rounded-full bg-current"></div>
                {item.status}
              </div>
              <img src={item.image} alt={item.name} className="absolute inset-0 w-full h-full object-cover" />
            </div>

            <h3 className="font-bold text-lg">{item.name}</h3>
            <p className="text-gray-500 text-xs mb-4">{item.sub}</p>

            <div className="flex gap-2 mt-auto">
              <Button size="sm" className="bg-black text-white px-6 py-2 rounded-full text-xs font-bold">Get started</Button>
              <Button size="sm" variant="outline" className="border-gray-300 text-gray-600 px-6 py-2 rounded-full text-xs font-bold">Learn more</Button>
            </div>
            <p className="text-[10px] text-gray-400 mt-2 underline">Important safety information</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-[10px] text-gray-400 max-w-4xl mx-auto text-center leading-relaxed">
        Ozempic® treats type 2 diabetes but may be prescribed off-label for weight loss, if appropriate.<br />
        Safety info: GLP-1 medications may have serious side effects, including possible thyroid tumors. Do not use if you or your family have a history of thyroid cancer called MTC or MEN 2.
      </div>
    </section>
  );
};

export default SupplyInventory;