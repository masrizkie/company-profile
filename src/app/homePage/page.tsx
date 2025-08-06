// Path: src/app/homePage/page.tsx
"use client";
import HeroSection from "./HeroSection";
import InteractiveSearch from "./InteractiveSearch";
import FeaturedProperties from "./FeaturedProperties";

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Search Box: centered, dengan margin vertikal sama */}
      <div className="flex justify-center my-8">
        <InteractiveSearch />
      </div>

      {/* Featured */}
      <FeaturedProperties />
    </div>
  );
}
