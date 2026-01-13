import React from 'react';
import { ArrowRight } from 'lucide-react';
import { BOOKING_FORM_LINK } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://duk.tw/neRfDX.jpg" 
          alt="New Year Gift Box Hero" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto text-white">
        <h2 className="text-sm md:text-base font-bold tracking-[0.3em] mb-6 uppercase text-gray-200">
          KPLUS林口門市 Presents
        </h2>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tighter leading-none">
          Be Brilliant <br/> Be You
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-12 max-w-2xl mx-auto font-light tracking-wide">
          新年禮盒預購中
        </p>
        
        <a 
          href={BOOKING_FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-black px-10 py-4 font-bold hover:bg-gray-200 transition-colors uppercase tracking-widest text-sm"
        >
          立即預購 <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
};

export default Hero;