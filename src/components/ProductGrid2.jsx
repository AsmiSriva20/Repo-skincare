import React from "react";

const products = [
  {
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
    image: "/assets/cleanser1.jpg",
  },
  {
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
    image: "/assets/cleanser2.jpg",
  },
  {
    name: "THE BODY LOTION.",
    price: "FROM $18.99",
    image: "/assets/cleanser3.jpg",
  },
];

const filters = [
  { label: "NEW ARRIVAL", active: true },
  { label: "CLEANSING", active: false },
  { label: "ACNE FIGHTER", active: false },
  { label: "ANTI AGING", active: false },
];

export default function ProductGrid2() {
  return (
    <section className="bg-[#FEFFF4] py-12 w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-light text-[#2D3B36] leading-snug mb-6">
          Feel Beautiful Inside and Out<br />with Every Product.
        </h2>
        {/* Filters */}
        <div className="flex flex-row justify-center gap-3 mb-10 flex-wrap">
          {filters.map((filter, idx) => (
            <button
              key={filter.label}
              className={`px-5 py-2 rounded-full border text-xs md:text-sm font-semibold transition-all duration-150 ${
                filter.active
                  ? "bg-[#2D3B36] text-white border-[#2D3B36]"
                  : "bg-transparent text-[#2D3B36] border-[#2D3B36] hover:bg-[#EFF5E1]"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden relative transition-all duration-200 group">
              <div className="w-full aspect-[4/5] bg-[#f3f3e6] relative">
                <img src={product.image} alt={product.name} className="object-cover w-full h-full rounded-2xl" />
                {/* Floating Label + Cart Together */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-xl px-5 py-3 flex items-center justify-between shadow-md min-w-[80%]">
                  <div className="flex flex-col">
                    <h3 className="text-base font-semibold text-[#2D3B36] uppercase tracking-wide leading-tight">{product.name}</h3>
                    <span className="text-xs text-[#6B7F75] font-medium">{product.price}</span>
                  </div>
                  <button
                    className={`border border-[#FEFFF4] rounded-xl p-2 ml-4 flex items-center justify-center shadow hover:bg-[#e2e9d6] transition ${
                      i === 1 ? "bg-[#2D3B36]" : "bg-[rgba(45,59,54,0.1)]"
                    }`}
                  >
                    <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.5 3.75L2.83114 3.86037C4.48119 4.4104 5.30621 4.6854 5.7781 5.34012C6.25 5.99484 6.25 6.86449 6.25 8.6038V11.875C6.25 15.4105 6.25 17.1782 7.34835 18.2766C8.4467 19.375 10.2145 19.375 13.75 19.375H23.75" stroke={i === 1 ? "#fff" : "#2D3B36"} strokeWidth="2" strokeLinecap="round"/>
                      <path opacity="0.5" d="M9.375 22.5C10.4105 22.5 11.25 23.3395 11.25 24.375C11.25 25.4105 10.4105 26.25 9.375 26.25C8.33946 26.25 7.5 25.4105 7.5 24.375C7.5 23.3395 8.33946 22.5 9.375 22.5Z" stroke={i === 1 ? "#fff" : "#2D3B36"} strokeWidth="2"/>
                      <path opacity="0.5" d="M20.625 22.5C21.6605 22.5 22.5 23.3394 22.5 24.375C22.5 25.4105 21.6605 26.25 20.625 26.25C19.5895 26.25 18.75 25.4105 18.75 24.375C18.75 23.3394 19.5895 22.5 20.625 22.5Z" stroke={i === 1 ? "#fff" : "#2D3B36"} strokeWidth="2"/>
                      <path d="M6.25 7.5H20.563C23.1317 7.5 24.416 7.5 24.9719 8.34283C25.5276 9.18566 25.0216 10.3662 24.0097 12.7272L23.474 13.9772C23.0016 15.0795 22.7654 15.6306 22.2957 15.9404C21.8261 16.25 21.2265 16.25 20.0272 16.25H6.25" stroke={i === 1 ? "#fff" : "#2D3B36"} strokeWidth="2"/>
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