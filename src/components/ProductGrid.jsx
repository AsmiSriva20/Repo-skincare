import React from "react";
import { ShoppingCart } from "lucide-react";

export default function ProductGrid() {
  return (
    <section className="bg-[#f9f9f9] py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4">
            <img src={`/assets/cleanser${i}.jpg`} alt="Product" className="mb-4 rounded" />
            <h3 className="text-sm font-medium">Alva Skin Cleanser</h3>
            <div className="flex justify-between items-center mt-2">
              <span>$24.99</span>
              <button className="p-2 rounded-full bg-black text-white hover:bg-gray-800 transition">
                <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

