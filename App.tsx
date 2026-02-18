import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import WeightLossBanner from './components/sections/WeightLossBanner';
import SupplyInventory from './components/sections/SupplyInventory';
import SexualHealthBanner from './components/sections/SexualHealthBanner';
import SexualHealthProducts from './components/sections/SexualHealthProducts';
import TreatmentGoals from './components/sections/TreatmentGoals';
import ConvenienceFeatures from './components/sections/ConvenienceFeatures';
import SocialProof from './components/sections/SocialProof';
import Experts from './components/sections/Experts';
import HealthGuide from './components/sections/HealthGuide';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <WeightLossBanner />
        <SupplyInventory />
        <SexualHealthBanner />
        <SexualHealthProducts />
        <TreatmentGoals />
        <ConvenienceFeatures />
        <SocialProof />
        <Experts />
        <HealthGuide />
      </main>
      <Footer />
    </div>
  );
};

export default App;