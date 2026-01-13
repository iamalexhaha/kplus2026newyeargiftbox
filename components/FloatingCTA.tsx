import React from 'react';
import { MessageCircle } from 'lucide-react';
import { LINE_LINK } from '../constants';

const FloatingCTA: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 animate-fade-in-up">
      <a
        href={LINE_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center gap-3 bg-[#06C755] hover:bg-[#05b34c] text-white px-6 py-4 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="font-bold text-lg">專人服務</span>
        
        {/* Tooltip effect */}
        <span className="absolute right-0 -top-12 bg-white text-gray-800 text-xs px-3 py-1 rounded shadow opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          專人服務
        </span>
      </a>
    </div>
  );
};

export default FloatingCTA;