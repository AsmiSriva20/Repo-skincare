import React from "react";
import cleanser1 from "/assets/cleanser1.jpg";
import cleanser2 from "/assets/cleanser2.jpg";
import cleanser3 from "/assets/cleanser3.jpg";



const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: cleanser1,
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: cleanser2,
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $18.99",
    image: cleanser3,
  },
];

export default function ProductGrid() {
  return (
    <section className="bg-[#FEFFF4] py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Top Row */}
        <div className="flex flex-row items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center px-4 py-1 rounded-full bg-[#FEFFF4] border border-[#DDE9CE] text-xs font-semibold text-[#2D3B36] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#2D3B36] mr-2 inline-block"></span>
              Best Selling Products
            </span>
          </div>
          <h2 className="flex-1 text-center text-3xl md:text-4xl font-light text-[#2D3B36] leading-snug">
            Skincare That Brings Out<br />Your Natural Radiance
          </h2>
          <div className="flex items-center gap-3">
            {/* Left Arrow */}
            <button className="w-14 h-14 rounded-full flex items-center justify-center bg-[#FEFFF4] border-none p-0">
              <svg width="48" height="48" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_2603_55)">
                  <path d="M40 79.5C61.8152 79.5 79.5 61.8152 79.5 40C79.5 18.1848 61.8152 0.5 40 0.5C18.1848 0.5 0.5 18.1848 0.5 40C0.5 61.8152 18.1848 79.5 40 79.5Z" stroke="#2D3B36"/>
                  <path d="M39.2929 39.2931C38.9024 39.6836 38.9024 40.3168 39.2929 40.7073L45.6569 47.0713C46.0474 47.4618 46.6805 47.4618 47.0711 47.0713C47.4616 46.6807 47.4616 46.0476 47.0711 45.6571L41.4142 40.0002L47.0711 34.3433C47.4616 33.9528 47.4616 33.3197 47.0711 32.9291C46.6805 32.5386 46.0474 32.5386 45.6569 32.9291L39.2929 39.2931ZM40 40.0002V41.0002H80V40.0002V39.0002H40V40.0002Z" fill="#2D3B36"/>
                </g>
                <defs>
                  <clipPath id="clip0_2603_55">
                    <rect width="80" height="80" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </button>
            {/* Right Arrow */}
            <button className="w-14 h-14 rounded-full flex items-center justify-center bg-transparent border-none p-0">
              <svg width="48" height="48" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="41" cy="40" r="40" fill="#2D3B36"/>
                <path d="M2 39.0002H1L1 41.0002H2V39.0002ZM42.7071 40.7073C43.0976 40.3168 43.0976 39.6836 42.7071 39.2931L36.3431 32.9291C35.9526 32.5386 35.3195 32.5386 34.9289 32.9291C34.5384 33.3197 34.5384 33.9528 34.9289 34.3433L40.5858 40.0002L34.9289 45.6571C34.5384 46.0476 34.5384 46.6807 34.9289 47.0713C35.3195 47.4618 35.9526 47.4618 36.3431 47.0713L42.7071 40.7073ZM2 40.0002V41.0002H42V40.0002V39.0002H2V40.0002Z" fill="#FEFFF4"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden relative transition-all duration-200 group">
              <div className="w-full aspect-[4/5] bg-[#f3f3e6] relative">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-2xl" />

                {/* Floating Label + Cart Together */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-[#F6F8ED]/90 rounded-xl px-5 py-3 flex items-center justify-between shadow-md min-w-[80%]">
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-[#2D3B36] uppercase tracking-wide leading-tight">{product.name}</h3>
                    <span className="text-xs text-[#6B7F75] font-medium">{product.price}</span>
                  </div>
                  <button className="bg-[#F6F8ED] border border-[#FEFFF4] rounded-xl p-2 ml-4 flex items-center justify-center shadow hover:bg-[#e2e9d6] transition">
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 3.75L2.83114 3.86037C4.48119 4.4104 5.30621 4.6854 5.7781 5.34012C6.25 5.99484 6.25 6.86449 6.25 8.6038V11.875C6.25 15.4105 6.25 17.1782 7.34835 18.2766C8.4467 19.375 10.2145 19.375 13.75 19.375H23.75" stroke="#2D3B36" strokeWidth="2" strokeLinecap="round"/>
                      <path opacity="0.5" d="M9.375 22.5C10.4105 22.5 11.25 23.3395 11.25 24.375C11.25 25.4105 10.4105 26.25 9.375 26.25C8.33946 26.25 7.5 25.4105 7.5 24.375C7.5 23.3395 8.33946 22.5 9.375 22.5Z" stroke="#2D3B36" strokeWidth="2"/>
                      <path opacity="0.5" d="M20.625 22.5C21.6605 22.5 22.5 23.3394 22.5 24.375C22.5 25.4105 21.6605 26.25 20.625 26.25C19.5895 26.25 18.75 25.4105 18.75 24.375C18.75 23.3394 19.5895 22.5 20.625 22.5Z" stroke="#2D3B36" strokeWidth="2"/>
                      <path d="M6.25 7.5H20.563C23.1317 7.5 24.416 7.5 24.9719 8.34283C25.5276 9.18566 25.0216 10.3662 24.0097 12.7272L23.474 13.9772C23.0016 15.0795 22.7654 15.6306 22.2957 15.9404C21.8261 16.25 21.2265 16.25 20.0272 16.25H6.25" stroke="#2D3B36" strokeWidth="2"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

