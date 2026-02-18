import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { NavItem } from '../../types';

const NAV_ITEMS: NavItem[] = [
  { label: 'Weight Loss', href: '#' },
  { label: 'Sexual Health', href: '#' },
  { label: 'Fertility', href: '#' },
  { label: 'Hair', href: '#' },
  { label: 'Skin', href: '#' },
  { label: 'Daily Health', href: '#' },
  { label: 'Top Products', href: '#' },
  { label: 'What We Treat', href: '#' },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 flex flex-col">
      {/* Top Banner */}
      <div className="bg-[#EBEBE6] text-[11px] md:text-xs text-center py-2 px-4 font-medium tracking-wide">
        FDA-approved GLP-1s at the lowest prices. <a href="#" className="underline decoration-1 underline-offset-2">See if you qualify</a>
      </div>

      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center mr-8">
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
                className="text-[13px] font-medium text-gray-600 hover:text-black transition-colors tracking-wide"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-6 ml-auto">
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

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl lg:hidden flex flex-col p-6 space-y-4 animate-fade-in-down h-[calc(100vh-80px)] overflow-y-auto">
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