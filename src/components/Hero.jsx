import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const textRef = useRef(null);
  const imgRef = useRef(null);

  useEffect(() => {
    gsap.from(textRef.current, { y: 50, opacity: 0.8, duration: 1 });
    gsap.from(imgRef.current, { scale: 0.95, opacity: 0.8, delay: 0.5, duration: 1 });
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center z-[0] px-0 py-20 min-h-[100vh] bg-[#EFF5E1] overflow-visible w-full">
      
      {/* Shop Now Button fixed to the left of screen (desktop only) */}
      <div className="hidden md:block absolute left-8 top-[58%] -translate-y-1/2 z-20">
        <button className="bg-[#2D3B36] text-white px-6 py-3 rounded-full font-medium shadow-md mt-40">
          Shop Now
        </button>
      </div>

      {/* Top Row: Full-width 3-column layout */}
      <div className="relative z-10 w-full flex flex-row items-center justify-between px-12 mb-8" style={{ maxWidth: '100vw' }}>
        {/* Left: Description */}
        <div className="flex-1 flex flex-col items-start justify-center">
          <p className="text-[#2D3B36] max-w-xs text-base text-left font-medium">
            Transform your skincare routine with premium products that restore, protect,<br />
            and enhance your natural glow every day.
          </p>
        </div>

        {/* Center: Heading */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-6xl md:text-7xl font-extrabold leading-snug text-[#2D3B36] text-center">
            <span className="block pb-1 mb-1">GLOW</span>
            <span className="block pb-1 mb-1">NATUR-</span>
            <span className="block pb-1">ALLY</span>
          </h1>
        </div>

        {/* Right: Plum Image */}
        <div className="flex-1 flex flex-col items-end justify-center">
          <img
            src="/assets/plum.png"
            alt="Plum"
            className="w-24 h-24 object-contain z-20 rounded-[16px]"
            style={{ minWidth: "96px" }}
          />
        </div>
      </div>

      {/* SKINCARE Background Text (behind image) */}
      <h1 className="absolute text-[20vw] font-extrabold text-[#2D3B36]/90 z-0 left-0 bottom-[-20px] select-none hidden md:block w-full text-center leading-none pointer-events-none">
        SKINCARE
      </h1>

      {/* Model Avocado Image Section */}
      <div className="relative flex flex-row items-center z-10 w-full max-w-3xl mt-20">
        {/* Shop Now Button on mobile */}
        <button className="md:hidden bg-[#2D3B36] text-white px-6 py-3 rounded-full font-medium mb-4 shadow-md">
          Shop Now
        </button>

        {/* Model Image */}
        <div ref={imgRef} className="relative flex-1 flex justify-center items-center w-full z-20 ml-20 opacity-100">
  <img
    src="/assets/model-avocado.png"
    alt="Model"
    className="rounded-xl w-full max-w-md z-20 -ml-20"
    style={{ maxHeight: "900px", objectFit: "cover" }}
    loading="lazy"
    draggable="false"
    onDragStart={(e) => e.preventDefault()}
    referrerPolicy="no-referrer"
  />

          {/* Floating Text Over Image */}
       <div className="absolute bottom-4 left-[45%] -translate-x-1/2 bg-[#F6F8ED] px-6 py-2 rounded-full shadow-xl text-[#2D3B36] border border-[#DDE9CE] flex items-center gap-3 z-30  mr-12 opacity-100">
            <span className="relative inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0">
              <span className="absolute inset-0 rounded-full border-2 border-dotted border-[#2D3B36] z-0"></span>
              <img
                src="/assets/plum.png"
                alt="Plum"
                className="w-9 h-9 rounded-full object-contain border border-[#DDE9CE] z-10 bg-white"
              />
            </span>
            <span className="text-sm font-medium">
              While giving you an invigorating<br />
              cleansing experience.
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
