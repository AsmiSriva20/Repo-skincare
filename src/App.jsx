
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import ProductGrid from "./components/ProductGrid";
import FAQ from "./components/FAQ";
import Para from "./components/para"; 
import New from "./components/new";
import ProductGrid2 from "./components/ProductGrid2"; 
import Footer from "./components/footer";




export default function App() {
  return (
    <div className="font-sans bg-[#FEFFF4]" >
      <Header />
      <Hero />
      <Para />
      <Features />
      <ProductGrid />
      <New />
      <ProductGrid2 />
      {/* Uncomment the line below to include the FAQ section */}
      {/* <FAQ /> */}
      {/* If you want to keep the FAQ section, uncomment the line above */}
      <FAQ />
      <Footer />
      {/* Uncomment the line below to include the New section */}
    </div>
  );
}
