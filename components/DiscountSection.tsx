import React, { useState, useEffect } from 'react';
import { ArrowRight, ShoppingBag, Truck, Info } from 'lucide-react';
import { BOOKING_FORM_LINK } from '../constants';

const DiscountSection: React.FC = () => {
  const [totalQuantity, setTotalQuantity] = useState<number>(0);

  // 簡易抓取數據 (請填入你發佈的 CSV 網址)
  useEffect(() => {
    const fetchTotal = async () => {
      try {
        const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTrhFD9z7FUvr8xm1A0QfJRKjc6o7aALKHjibsyuM27Jiok0idtTmjDxhD-_KbwDv1NzqQNZwFswS-r/pub?gid=760331981&single=true&output=csv";
        const response = await fetch(SHEET_CSV_URL);
        const data = await response.text();
        setTotalQuantity(parseInt(data.trim()) || 0);
      } catch (e) { console.error(e); }
    };
    fetchTotal();
  }, []);

  // Define tiers without descriptions as requested
  const tiers = [
    { range: "1 - 20 盒", discount: "9 折", price: "612元/盒" },
    { range: "20 - 50 盒", discount: "85 折", price: "578元/盒" },
    { range: "50 - 100 盒", discount: "82 折", price: "558元/盒" },
    { range: "100 盒以上", discount: "78 折", price: "531元/盒" },
  ];

  // Helper to determine if a tier should be highlighted based on current quantity
  const isTierActive = (index: number, qty: number) => {
    if (qty < 1) return false; // Ensure 0 boxes means no highlight
    if (index === 0) return qty < 20;
    if (index === 1) return qty >= 20 && qty < 50;
    if (index === 2) return qty >= 50 && qty < 100;
    if (index === 3) return qty >= 100;
    return false;
  };

  return (
    <section className="py-24 px-4 bg-white text-center border-t border-gray-100">
      <div className="max-w-5xl mx-auto">

        {/* 上方：即時計數器勳章 */}
        <div className="mb-16 inline-flex flex-col items-center">
          <div className="flex items-center gap-2 bg-stone-100 px-4 py-2 rounded-full mb-4">
            <ShoppingBag size={16} className="text-stone-600" />
            <span className="text-xs font-bold tracking-[0.2em] text-stone-500 uppercase">Current Status</span>
          </div>
          <p className="text-gray-500 text-sm mb-2 font-medium">KPLUS門市目前累積盒數</p>
          <div className="flex items-baseline gap-2">
            <span className="text-6xl md:text-7xl font-black tracking-tighter text-black">
              {totalQuantity.toLocaleString()}
            </span>
            <span className="text-xl font-bold text-stone-400">盒</span>
          </div>
          <div className="w-12 h-1 bg-black mt-6"></div>
        </div>

        {/* 中間：標題區 */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight text-black italic">
            GROUP BUYING
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            靠著大家的力量一起解鎖更高的折數，<br className="hidden md:block" />
            團購截止時間2026.01.26，預計出貨2026.01.29
          </p>
        </div>

        {/* 下方：折扣階梯卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {tiers.map((tier, idx) => {
            const isActive = isTierActive(idx, totalQuantity);

            return (
              <div
                key={idx}
                className={`p-8 border transition-all duration-300 flex flex-col items-center justify-center ${isActive
                    ? 'border-black bg-black text-white scale-105 shadow-xl z-10'
                    : 'border-gray-100 bg-gray-50 text-black hover:border-gray-300'
                  }`}
              >
                <p className={`text-xs mb-4 tracking-widest ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.range}
                </p>
                <h3 className="text-4xl font-black mb-2">{tier.discount}</h3>
                <p className={`text-xl font-bold mb-1 ${isActive ? 'text-gray-200' : 'text-gray-900'}`}>{tier.price}</p>

                {/* Active Status Label */}
                <div className="h-6 flex items-center justify-center mt-2">
                  {isActive ? (
                    <span className="text-xs font-bold tracking-wider text-yellow-400">
                      目前達成折數
                    </span>
                  ) : (
                    <span className="opacity-0 text-xs h-4 block"></span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* 運費說明區 */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 py-8 border-y border-gray-100">
          <div className="flex items-center gap-3">
            <Truck size={20} />
            <span className="font-bold">滿 10 盒即享免運費(限同地址)</span>
          </div>
          <div className="flex items-center gap-3 text-gray-400">
            <Info size={18} />
            <span className="text-sm">未滿 10 盒需酌收運費 NT$100</span>
          </div>
        </div>

        {/* CTA 按鈕 */}
        <div className="relative inline-block group">
          <a
            href={BOOKING_FORM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-flex items-center gap-4 bg-black text-white px-12 py-5 font-bold hover:bg-zinc-800 transition-all uppercase tracking-[0.2em] text-sm"
          >
            立即加入預購 <ArrowRight size={18} />
          </a>
          <div className="absolute inset-0 border border-black translate-x-2 translate-y-2 -z-0 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform"></div>
        </div>

      </div>
    </section>
  );
};

export default DiscountSection;