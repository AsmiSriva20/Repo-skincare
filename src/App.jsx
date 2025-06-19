
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import FAQ from "./components/FAQ";




export default function App() {
  return (
    <div className="font-sans">
      <Header />
      <Hero />
      <Features />
      <ProductGrid />
      <FAQ />
    </div>
  );
}
