import React from 'react';

const ConvenienceFeatures: React.FC = () => {
  const features = [
    {
      title: "Message your provider 24/7",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=400",
      description: "Unlimited messaging"
    },
    {
      title: "Manage goals in one place",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400",
      description: "Track your progress"
    },
    {
      title: "Clinically-proven, FDA-approved treatments",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=400",
      description: "Real medicine"
    },
    {
      title: "Fast, discreet shipping",
      image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=400",
      description: "Free delivery"
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 mb-24">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
          100% online,<br />100% convenient
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col group">
            <div className="bg-[#F3F4F6] rounded-2xl overflow-hidden aspect-[3/4] mb-4 relative">
              <img
                src={feature.image}
                alt={feature.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            <h3 className="font-semibold text-lg leading-snug">{feature.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ConvenienceFeatures;