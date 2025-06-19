import React from "react";
import { ShoppingCart, Heart, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-[#f1f3e3]">
      <div className="font-bold text-lg">SKINCARE</div>
      <nav className="hidden md:flex gap-6 text-sm">
        <a href="#">All Products</a>
        <a href="#">Serum</a>
        <a href="#">Sunscreen</a>
        <a href="#">Bundle</a>
      </nav>
      <div className="flex items-center gap-3">
        <button className="p-2 rounded-full hover:bg-black hover:text-white transition">
          <ShoppingCart size={20} /> <span className="sr-only">Cart</span>
        </button>
        <button className="p-2 rounded-full hover:bg-black hover:text-white transition">
          <Heart size={20} />
        </button>
        <button className="p-2 rounded-full hover:bg-black hover:text-white transition">
          <Search size={20} />
        </button>
      </div>
    </header>
  );
}
