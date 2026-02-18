import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { NavItem } from '../../types';

const NAV_ITEMS = [
  { label: 'Weight Loss', href: '#' },
  { label: 'Sexual Health', href: '#' },
  { label: 'Hair', href: '#' },
  { label: 'Top Products', href: '#' },
  { label: 'What We Treat', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const renderMegaMenu = () => {
    if (!activeMenu) return null;

    if (activeMenu === 'Weight Loss') {
      return (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in z-40">
          <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-4 gap-8">
            <div className="flex flex-col">
              <a href="#" className="text-sm font-semibold hover:underline decoration-1 underline-offset-4 mb-4">See all Weight Loss</a>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Lose weight with GLP-1s</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">The Simple Scripts Body membership</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">NEW: Wegovy® pill <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Wegovy® pen <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Zepbound® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Ozempic® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Saxenda® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6 whitespace-nowrap">Learn about the Simple Scripts Body membership</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">How it works</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Pricing</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Insurance</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">FAQs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Simple Scripts Ambassadors</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Serena Williams</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Charles Barkley</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Hannah</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Greg</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">The Taylors</a></li>
              </ul>
            </div>
          </div>
        </div>
      );
    }

    if (activeMenu === 'Sexual Health') {
      return (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in z-40">
          <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-5 gap-8">
            <div className="col-span-1">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Have better sex</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Erectile Dysfunction</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Simple Scripts Sparks <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Daily Rise Gummies <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Viagra® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Sildenafil (Generic of Viagra) <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Cialis® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Tadalafil (Generic of Cialis) <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Last longer</h4>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Premature Ejaculation</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Simple Scripts Swipes</a></li>
              </ul>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Boost performance</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500 whitespace-nowrap">Testosterone Support Supplement</a></li>
              </ul>
            </div>
            <div className="col-span-1 border-r border-gray-50 pr-8">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Stop outbreaks</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Genital Herpes</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Cold Sores</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500 whitespace-nowrap">Valacyclovir <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
              </ul>
            </div>
            <div className="col-span-2 flex flex-col justify-between pl-8">
              <div>
                <h3 className="text-3xl font-bold tracking-tighter mb-2">Simple Scripts</h3>
                <p className="text-sm text-gray-500 mb-6">Health experts</p>
                <a href="#" className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity">Visit now</a>
              </div>
              <div className="mt-8 flex justify-end">
                <img src="https://images.unsplash.com/photo-1512069772995-ec65ed45afd0?auto=format&fit=crop&q=80&w=300" alt="Products" className="w-48 h-auto object-contain mix-blend-multiply" />
              </div>
            </div>
          </div>
        </div>
      );
    }

    if (activeMenu === 'Hair') {
      return (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl animate-fade-in z-40">
          <div className="max-w-[1400px] mx-auto px-6 py-12 grid grid-cols-4 gap-8">
            <div className="flex flex-col">
              <a href="#" className="text-sm font-semibold hover:underline decoration-1 underline-offset-4 mb-4">See all Hair</a>
            </div>
            <div className="col-span-1">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">For men</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">All Hair Loss Treatments</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Simple Scripts Mane Spray <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Oral Finasteride <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Oral Minoxidil <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Topical Minoxidil</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Revive Shampoo</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Restore Conditioner</a></li>
              </ul>
            </div>
            <div className="col-span-1">
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">For women</h4>
              <ul className="space-y-4 mb-10">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">All Hair Loss Treatments</a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Oral Minoxidil <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">Hair Solution <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
              </ul>
              <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-6">Grow longer lashes</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-[13px] font-medium text-gray-900 hover:text-gray-500">LATISSE® <span className="text-[10px] text-gray-400 align-top ml-0.5">Rx</span></a></li>
              </ul>
            </div>
            <div className="col-span-1 flex flex-col justify-between items-end">
              <div className="text-right w-full">
                <p className="text-sm text-gray-500 mb-2 font-medium">Simple Scripts health experts</p>
                <a href="#" className="text-sm font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity">Visit now</a>
              </div>
              <img src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&q=80&w=300" alt="Products" className="w-40 h-auto object-contain mt-8" />
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div
      className="sticky top-0 z-50 flex flex-col"
      onMouseLeave={() => setActiveMenu(null)}
    >
      {/* Top Banner */}
      <div className="bg-[#EBEBE6] text-[11px] md:text-xs text-center py-2 px-4 font-medium tracking-wide">
        FDA-approved GLP-1s at the lowest prices. <a href="#" className="underline decoration-1 underline-offset-2">See if you qualify</a>
      </div>

      <nav className="bg-white border-b border-gray-100 relative">
        <div className="max-w-[1400px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#" className="text-3xl font-bold tracking-tighter hover:opacity-80 transition-opacity pb-1">
              Simple Scripts
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`text-[13px] font-medium transition-colors tracking-wide py-6 ${activeMenu === item.label ? 'text-black' : 'text-gray-600 hover:text-black'}`}
                onMouseEnter={() => setActiveMenu(item.label)}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="flex-1 hidden lg:flex items-center justify-end">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <User size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center ml-auto">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 -mr-2 text-gray-600 hover:text-black focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mega Menu Overlay */}
        {renderMegaMenu()}

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 top-[104px] w-full bg-white z-[60] lg:hidden flex flex-col p-6 space-y-4 h-[calc(100vh-104px)] overflow-y-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-lg font-medium text-gray-900 py-3 border-b border-gray-50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4">
              <a href="#" className="flex items-center space-x-2 text-lg font-medium text-gray-900">
                <User size={20} />
                <span>Log In / Sign Up</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;