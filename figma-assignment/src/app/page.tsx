import React from "react";
import HeroSection from "@/components/HeroSection";
import Items from "@/components/Items";
import Product from "@/components/Product";
import Links from "@/components/Links";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div>
      <HeroSection />
  <Items />
  <Product />
  <Links />
  <Footer />
    </div>
  );
}
