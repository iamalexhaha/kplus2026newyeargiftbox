import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import StoreInfo from './components/StoreInfo';
import FloatingCTA from './components/FloatingCTA';
import Footer from './components/Footer';
import DiscountSection from './components/DiscountSection';
import { PRODUCT_FEATURES } from './constants';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'store'>('home');

  const handleNavigate = (view: 'home' | 'store') => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onNavigate={handleNavigate} />
      
      {/* Increased padding-top on mobile (pt-28) for the stacked header, standard pt-20 on desktop */}
      <main className="pt-28 md:pt-20">
        {currentView === 'home' ? (
          <>
            <Hero />
            <div className="space-y-0">
              {PRODUCT_FEATURES.map((feature, index) => (
                <FeatureSection 
                  key={feature.id} 
                  feature={feature} 
                  index={index} 
                />
              ))}
            </div>
            <DiscountSection />
          </>
        ) : (
          <StoreInfo />
        )}
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}

export default App;