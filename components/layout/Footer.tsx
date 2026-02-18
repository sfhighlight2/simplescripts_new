import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-20 pb-8 text-[11px] md:text-xs">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-12 mb-20">

          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Popular</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Weight Loss</a></li>
              <li><a href="#" className="hover:text-white">Erectile Dysfunction</a></li>
              <li><a href="#" className="hover:text-white">Ozempic</a></li>
              <li><a href="#" className="hover:text-white">Wegovy</a></li>
              <li><a href="#" className="hover:text-white">Zepbound</a></li>
              <li><a href="#" className="hover:text-white">Cialis</a></li>
              <li><a href="#" className="hover:text-white">Hair Loss</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">About Simple Scripts</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Founders letter</a></li>
              <li><a href="#" className="hover:text-white">Simple Scripts Operating System</a></li>
              <li><a href="#" className="hover:text-white">Advisors</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Press</a></li>
              <li><a href="#" className="hover:text-white">Health Guide</a></li>
              <li><a href="#" className="hover:text-white">Blog</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Contact us</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
            </ul>
            <h4 className="font-bold text-white mt-8 mb-4">Free tools</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">GLP-1 Insurance Checker</a></li>
              <li><a href="#" className="hover:text-white">BMI Calculator</a></li>
              <li><a href="#" className="hover:text-white">BMR Calculator</a></li>
              <li><a href="#" className="hover:text-white">TDEE Calculator</a></li>
              <li><a href="#" className="hover:text-white">Calorie Deficit Calculator</a></li>
              <li><a href="#" className="hover:text-white">Protein Calculator</a></li>
              <li><a href="#" className="hover:text-white">GLP-1 Supply Tracker</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Terms</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Consumer Health Data Privacy</a></li>
              <li><a href="#" className="hover:text-white">Your Privacy Choices</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold tracking-tighter">Simple Scripts</div>
          <div className="text-gray-500">
            2026 © All rights reserved, Simple Scripts
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded bg-gray-800 flex items-center justify-center text-[8px] text-gray-400">LegitScript</div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;