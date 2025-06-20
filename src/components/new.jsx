import React from "react";

export default function New() {
  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-[#FEFFF4] p-4 md:p-8">
      <div className="relative w-full h-full max-w-7xl rounded-2xl overflow-hidden shadow-lg">
        {/* Fullscreen Image */}
        <img
          src="/assets/model-3.png"
          alt="Feel Beautiful"
          className="w-full h-screen object-cover rounded-2xl"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent rounded-2xl" />

        {/* Centered Content (lowered) */}
        <div className="absolute inset-0 flex flex-col items-center justify-end px-4 pb-24 text-center">
          <h2 className="text-white text-2xl md:text-4xl font-light drop-shadow-lg leading-snug mb-6">
            Feel Beautiful Inside and Out<br />with Every Product.
          </h2>
          <button className="bg-white text-[#2D3B36] px-7 py-2 rounded-full font-medium shadow hover:bg-[#f3f3e6] transition text-base">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}
