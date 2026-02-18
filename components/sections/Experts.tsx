import React from 'react';
import { ArrowRight, Award, CheckCircle, Lightbulb } from 'lucide-react';
import Button from '../ui/Button';

const Experts: React.FC = () => {
  return (
    <section className="max-w-[1400px] mx-auto px-4 md:px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Info Column */}
        <div className="lg:col-span-4 space-y-8">
          <div className="w-12 h-12 rounded-full border border-black flex items-center justify-center mb-6">
            <Award size={24} />
          </div>

          <h2 className="text-3xl md:text-4xl font-serif leading-tight">
            Backed by the country's leading health experts
          </h2>

          <p className="text-gray-600 text-sm leading-relaxed">
            Simple Scripts's world-leading experts and advisors enable us to deliver high-quality healthcare at scale. Their combined clinical expertise guides innovative treatment plans to make it easier for millions of patients to achieve their health goals.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Award size={18} className="mt-0.5 text-gray-800" />
              <div>
                <h4 className="font-bold text-sm">Board-certified</h4>
                <p className="text-xs text-gray-500">20+ years experience in a medical specialty</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Lightbulb size={18} className="mt-0.5 text-gray-800" />
              <div>
                <h4 className="font-bold text-sm">Industry Innovations</h4>
                <p className="text-xs text-gray-500">100s of published studies in top medical journals</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle size={18} className="mt-0.5 text-gray-800" />
              <div>
                <h4 className="font-bold text-sm">Policy leaders</h4>
                <p className="text-xs text-gray-500">Former Surgeon General and Head of the DEA</p>
              </div>
            </div>
          </div>

          <Button variant="outline" className="rounded-full px-6 py-2 text-xs font-bold uppercase tracking-wider">
            Meet our advisors <ArrowRight size={12} className="ml-2 inline" />
          </Button>
        </div>

        {/* Right Doctor Cards */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: "Dr. Melynda Barnes, MD",
              title: "Chief Medical Officer",
              desc: "Triple board-certified Obesity Medicine, Facial Plastic and Reconstructive Surgeon, and Otolaryngologist",
              uni: "Stanford University",
              img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "Dr. Raoul Manalac, MD",
              title: "Senior Director, Clinical Strategy",
              desc: "Board-certified Internal Medicine Physician",
              uni: "Johns Hopkins University",
              img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400"
            },
            {
              name: "Dr. Nitin Vaswani, MD MPH MBA",
              title: "Director, Clinical Strategy",
              desc: "General Surgeon and Clinical Pathologist trainee",
              uni: "University of Pennsylvania",
              img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=400"
            }
          ].map((doc, idx) => (
            <div key={idx} className="flex flex-col">
              <div className="aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden mb-4 grayscale hover:grayscale-0 transition-all duration-500">
                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-sm mb-1">{doc.name}</h3>
              <p className="text-xs text-gray-500 mb-2">{doc.title}</p>
              <p className="text-[11px] text-gray-600 leading-relaxed mb-4 min-h-[60px]">{doc.desc}</p>
              <div className="flex items-center gap-2 text-[10px] text-gray-500 mt-auto">
                <span className="w-4 h-4 bg-gray-200 rounded-full inline-block"></span>
                {doc.uni}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Trust Badges */}
      <div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
        <div className="h-8 md:h-10 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 md:h-10 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 md:h-10 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 md:h-10 w-24 bg-gray-200 rounded"></div>
        <div className="h-8 md:h-10 w-24 bg-gray-200 rounded"></div>
      </div>
    </section>
  );
};

export default Experts;