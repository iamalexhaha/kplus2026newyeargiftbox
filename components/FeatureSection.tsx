import React from 'react';
import { ProductFeature } from '../types';

interface FeatureSectionProps {
  feature: ProductFeature;
  index: number;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ feature, index }) => {
  const isEven = index % 2 === 0;

  return (
    <section id={feature.id} className="py-16 md:py-32 px-4 md:px-8 bg-white border-b border-gray-50 last:border-0">
      <div className="max-w-7xl mx-auto">
        <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24`}>
          
          {/* Image Side */}
          <div className="w-full md:w-1/2">
            {/* Removed rounded-2xl to match KPLUS sharper style */}
            <div className="w-full bg-gray-50 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-500">
              <img 
                src={feature.imageUrl} 
                alt={feature.imageAlt} 
                className="w-full h-auto block hover:scale-[1.02] transition-transform duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="inline-block border-b-2 border-black mb-6 pb-2">
               <span className="text-xs font-bold text-black tracking-[0.2em] uppercase">
                0{index + 1}
              </span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-8 leading-tight tracking-tight">
              {feature.title}
            </h3>
            <div className="prose prose-lg text-gray-600 mx-auto md:mx-0 font-light">
              <p className="whitespace-pre-line leading-relaxed text-base md:text-lg">
                {feature.description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;