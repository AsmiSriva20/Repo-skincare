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
    <section className="relative grid md:grid-cols-2 items-center gap-8 px-8 py-20 bg-[#f1f3e3] overflow-hidden">
      
      {/* Large Background Text */}
      <h1 className="absolute text-[180px] font-extrabold text-black/10 z-0 left-8 bottom-0 select-none hidden md:block">
        SKINCARE
      </h1>

      {/* Left Content */}
      <div ref={textRef} className="pl-50 space-y-6 z-10">
        <img
          src="/assets/plum.png"
          alt="Plum"
          className="w-20 h-20 object-contain"
          align="right"
          style={{ position: "absolute", top: "20px", right: "20px" }}
          


        />

        <div>
          <h1 className="text-6xl font-extrabold leading-snug">GLOW</h1>
          <h1 className="text-6xl font-extrabold leading-snug  inline-block px-3 py-1">
            NATURALLY
          </h1>
        </div>

        <p className="text-gray-800 max-w-md">
          Transform your skincare routine with premium products that restore, protect,
          and enhance your natural glow every day.
        </p>

        <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
          Shop Now
        </button>
      </div>

      {/* Right Image */}
      <div ref={imgRef} className="relative flex justify-center items-center z-10">
        <img
          src="/assets/model-avocado.png"
          alt="Model"
          className="rounded-xl w-full max-w-sm shadow-xl"
          align="center"
          style={{ maxHeight: "600px", objectFit: "cover" }}
          loading="lazy"
          draggable="false"
          onDragStart={(e) => e.preventDefault()}
          referrerPolicy="no-referrer"
        />

        {/* Floating Text Over Image */}
        <div className="absolute bottom-4 bg-white px-4 py-2 text-sm rounded-full shadow-lg text-black">
          While giving you an invigorating clean experience
        </div>
      </div>
    </section>
  );
}
