import React from "react";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#2D3B36] text-[#F6F8ED] pt-44 pb-36 px-4 md:px-8 overflow-hidden">
      {/* Faded background SKINCARE text (half below) */}
      <h1 className="absolute text-[20vw] font-extrabold text-[#F6F8ED]/10 z-0 left-0 -bottom-[7vw] w-full text-center select-none pointer-events-none leading-none tracking-tight">
  SKINCARE
</h1>

      {/* Top Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 mb-40">
        {/* Left: Call to Action */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-light leading-snug text-white">
            Join The Skincare<br />Community Now.
          </h2>
        </div>

        {/* Right: Contact Info */}
        <div className="flex flex-col justify-center md:items-start text-left md:ml-56">
          <span className="text-base md:text-lg text-[#F6F8ED] mb-2">Get in Touch</span>
          <span className="text-2xl md:text-3xl font-light text-[#F6F8ED]">contact.skincare.com</span>
        </div>
      </div>

      {/* Bottom Links */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-2 gap-12 text-base">
        {/* Left: Socials */}
        <div className="flex gap-6 md:gap-10">
          <a href="#" className="hover:underline">Facebook</a>
          <a href="#" className="hover:underline">Instagram</a>
          <a href="#" className="hover:underline">YouTube</a>
        </div>

        {/* Right: Policies */}
        <div className="flex gap-6 md:gap-10 justify-end">
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Cookies Policy</a>
        </div>
      </div>
    </footer>
  );
}
