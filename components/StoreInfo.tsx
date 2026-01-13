import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { STORE_INFO } from '../constants';

const StoreInfo: React.FC = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-white px-4 py-12 animate-fade-in">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-16 tracking-tight text-black">門市資訊</h1>
        
        <div className="grid md:grid-cols-2 gap-12 text-left">
          
          {/* Address */}
          <div className="group p-8 border border-gray-100 hover:border-gray-900 transition-colors duration-500">
            <div className="mb-6 text-black">
              <MapPin size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Location</h4>
            <h3 className="text-2xl font-bold mb-4">KPLUS林口門市</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{STORE_INFO.address}</p>
            <a 
              href={STORE_INFO.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-bold border-b border-black pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors"
            >
              開啟 Google Maps
            </a>
          </div>

          {/* Phone */}
          <div className="group p-8 border border-gray-100 hover:border-gray-900 transition-colors duration-500">
            <div className="mb-6 text-black">
              <Phone size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Contact</h4>
            <h3 className="text-2xl font-bold mb-4">聯絡電話</h3>
            <p className="text-gray-600 mb-6">歡迎來電詢問禮盒詳情</p>
            <a 
              href={`tel:${STORE_INFO.phone}`}
              className="text-2xl font-bold text-black hover:text-gray-600 transition-colors block"
            >
              {STORE_INFO.phoneDisplay}
            </a>
          </div>
          
        </div>

        <div className="mt-16 w-full h-64 md:h-96 bg-gray-100 overflow-hidden relative">
             <iframe 
               width="100%" 
               height="100%" 
               style={{border:0}} 
               loading="lazy" 
               allowFullScreen 
               referrerPolicy="no-referrer-when-downgrade"
               src={`https://www.google.com/maps/embed/v1/place?key=&q=${encodeURIComponent(STORE_INFO.address)}`}>
             </iframe>
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;