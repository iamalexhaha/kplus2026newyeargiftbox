import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentView: 'home' | 'store';
  onNavigate: (view: 'home' | 'store') => void;
}

const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-sm py-3 md:py-4' : 'py-4 md:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">
          <div className="flex items-center">
            <button 
              onClick={() => onNavigate('home')}
              className="text-base md:text-xl font-bold tracking-tight text-black hover:opacity-70 transition-opacity text-center md:text-left"
            >
              KPLUS林口門市新年禮盒團購
            </button>
          </div>
          
          <nav className="flex gap-6 md:gap-8">
            <button
              onClick={() => onNavigate('home')}
              className={`text-sm font-bold tracking-widest uppercase transition-colors relative group py-2 ${currentView === 'home' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              禮盒介紹
              <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${currentView === 'home' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>

            <button
              onClick={() => onNavigate('store')}
              className={`text-sm font-bold tracking-widest uppercase transition-colors relative group py-2 ${currentView === 'store' ? 'text-black' : 'text-gray-500 hover:text-black'}`}
            >
              門市資訊
              <span className={`absolute bottom-0 left-0 h-0.5 bg-black transition-all duration-300 ${currentView === 'store' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;